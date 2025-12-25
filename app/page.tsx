'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { SeoContent } from './components/SeoContent'; 

export default function Home() {
  // --- 状態管理 ---
  const [text, setText] = useState('');
  const [excludeReferences, setExcludeReferences] = useState(false);
  const [refData, setRefData] = useState({ title: '', author: '', url: '' });
  const [generatedRef, setGeneratedRef] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // 新機能: ダークモード
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 新機能: 文体チェッカー
  const [showStyleCheck, setShowStyleCheck] = useState(false);
  const [styleCheckResult, setStyleCheckResult] = useState<{__html: string} | null>(null);

  // 以前の機能
  const [targetCount, setTargetCount] = useState(2000); 
  const [progress, setProgress] = useState(0);
  const [deadline, setDeadline] = useState('');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 });

  // 言い換え辞典データ
  const phraseDictionary = [
    { from: "〜だと思う", to: "〜と考えられる / 〜と推察される" },
    { from: "だから", to: "したがって / ゆえに" },
    { from: "でも", to: "しかしながら / 一方で" },
    { from: "すごく", to: "非常に / 極めて / 著しく" },
    { from: "いろんな", to: "様々な / 多様な" },
  ];

  // --- 自動保存 & 読み込み ---
  useEffect(() => {
    const savedText = localStorage.getItem('report-text');
    const savedDeadline = localStorage.getItem('report-deadline');
    const savedTarget = localStorage.getItem('report-target');
    const savedTheme = localStorage.getItem('report-theme'); // テーマ保存
    
    if (savedText) setText(savedText);
    if (savedDeadline) setDeadline(savedDeadline);
    if (savedTarget) setTargetCount(Number(savedTarget));
    if (savedTheme === 'dark') setIsDarkMode(true);
  }, []);

  useEffect(() => {
    if (text) {
        localStorage.setItem('report-text', text);
        setIsSaved(true);
        const timer = setTimeout(() => setIsSaved(false), 2000);
        return () => clearTimeout(timer);
    }
    if (deadline) localStorage.setItem('report-deadline', deadline);
    if (targetCount) localStorage.setItem('report-target', targetCount.toString());
    localStorage.setItem('report-theme', isDarkMode ? 'dark' : 'light');
  }, [text, deadline, targetCount, isDarkMode]);

  // --- タイマー計算ロジック ---
  useEffect(() => {
    if (!deadline) return;
    const timer = setInterval(() => {
      const diff = new Date(deadline).getTime() - new Date().getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          mins: Math.floor((diff / (1000 * 60)) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [deadline]);

  // --- 文字数計算 & プログレスバー計算 ---
  const stats = useMemo(() => {
    let processedText = text;
    if (excludeReferences) {
      const splitRegex = /\n(参考文献|References|引用文献)/i;
      const parts = processedText.split(splitRegex);
      if (parts.length > 1) processedText = parts[0]; 
      processedText = processedText.replace(/\[\d+\]/g, '');
    }
    const countWithSpaces = processedText.length;
    const countWithoutSpaces = processedText.replace(/\s/g, '').length;
    const lines = processedText ? processedText.split(/\r\n|\r|\n/).length : 0;
    
    const currentCount = excludeReferences ? countWithoutSpaces : countWithSpaces;
    let calcProgress = (currentCount / (targetCount || 1)) * 100;
    if (calcProgress > 100) calcProgress = 100;
    setProgress(calcProgress);

    return { countWithSpaces, countWithoutSpaces, lines, currentCount };
  }, [text, excludeReferences, targetCount]);

  // --- ハンドラー ---
  const handleCopyText = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    alert('本文をコピーしました！');
  };

  const handleClearText = () => {
    if (confirm('入力内容をすべて消去しますか？')) {
      setText('');
      localStorage.removeItem('report-text');
    }
  };

  const handleInsertSkeleton = () => {
    if (text && !confirm('現在入力されている文章が上書きされますが、よろしいですか？')) {
        return;
    }
    const skeleton = `【序論】
（ここに、このレポートで明らかにしたい問いや目的を書く。約10%）

【本論】
（ここに、具体的な事実、データ、考察を書く。必要に応じて段落を分ける。約80%）

【結論】
（ここに、序論の問いに対する答えと、今後の課題を書く。約10%）
`;
    setText(skeleton);
  };

  // 🔍 文体チェック（です・ます調を検出）
  const handleStyleCheck = () => {
    if (!text) return;
    
    // 「です・ます」などを赤くハイライトするHTMLを作成
    let checkedHTML = text
        .replace(/\n/g, '<br/>') // 改行を維持
        .replace(/(です|ます|でした|ました|ません|ましょう)(。|、| |$|<)/g, 
            '<span class="bg-red-200 text-red-800 font-bold px-1 rounded mx-0.5 border border-red-300 shadow-sm">$1</span>$2');

    setStyleCheckResult({ __html: checkedHTML });
    setShowStyleCheck(true);
  };

  const handleAutoFill = async () => {
    if (!refData.url) {
        alert("URLを入力してください");
        return;
    }
    setIsAnalyzing(true);
    setTimeout(() => {
      try {
        const urlObj = new URL(refData.url);
        let siteName = urlObj.hostname.replace('www.', '').split('.')[0];
        if (refData.url.includes('wikipedia.org')) siteName = "Wikipedia";
        setRefData({
          ...refData,
          title: "（解析完了：記事タイトルを入力）",
          author: siteName.charAt(0).toUpperCase() + siteName.slice(1)
        });
        alert("サイト名を抽出しました！タイトルを入力してください。");
      } catch (e) {
          alert("正しいURLを入力してください");
      }
      setIsAnalyzing(false);
    }, 600);
  };

  const handleGenerateRef = () => {
    const date = new Date();
    const today = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    const result = `${refData.author ? refData.author + '. ' : ''}『${refData.title}』. (参照 ${today}), ${refData.url}`;
    setGeneratedRef(result);
  };

  // 🎨 テーマに応じたクラス定義
  const theme = {
    bg: isDarkMode ? 'bg-gray-900' : 'bg-gray-50',
    text: isDarkMode ? 'text-gray-100' : 'text-gray-800',
    card: isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100',
    cardText: isDarkMode ? 'text-gray-200' : 'text-gray-700',
    subText: isDarkMode ? 'text-gray-400' : 'text-gray-500',
    input: isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800',
    header: isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200',
    textarea: isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-700',
    stats: isDarkMode ? 'bg-gray-950 border-gray-700' : 'bg-gray-50 border-gray-200',
  };

  return (
    <div className={`min-h-screen font-sans pb-20 transition-colors duration-300 ${theme.bg} ${theme.text}`}>
      
      {/* ヘッダー */}
      <header className={`sticky top-0 z-50 shadow-sm transition-colors duration-300 border-b ${theme.header}`}>
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="レポカンロゴ" className="w-9 h-9 rounded-xl object-cover shadow-sm border border-gray-100" />
            <div className="flex flex-col justify-center">
                <h1 className={`text-xl font-black tracking-tight leading-none ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>レポカン</h1>
                <span className={`text-[9px] font-bold ${theme.subText}`}>レポート文字数カウンター</span>
            </div>
          </div>
          <nav className="flex items-center gap-3">
             {/* 🌙 ダークモード切替ボタン */}
             <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full transition-all ${isDarkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
             >
                {isDarkMode ? '☀️' : '🌙'}
             </button>
             <Link href="/blog/report-structure" className="hidden sm:block text-[10px] sm:text-sm font-bold text-blue-600 border border-blue-200 bg-blue-50 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors">構成テンプレ</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 mt-4 space-y-6">

        {/* ⏳ 締め切りタイマー */}
        <div className="bg-gray-900 rounded-2xl p-4 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-700">
          <div className="flex flex-col gap-1 w-full sm:w-auto text-center sm:text-left">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">提出期限まで残り</span>
            <div className="flex items-baseline justify-center sm:justify-start gap-2">
              <span className="text-3xl font-black text-yellow-400 tabular-nums">{timeLeft.days}</span><span className="text-xs font-bold">日</span>
              <span className="text-3xl font-black text-yellow-400 tabular-nums">{timeLeft.hours}</span><span className="text-xs font-bold">時間</span>
              <span className="text-3xl font-black text-yellow-400 tabular-nums">{timeLeft.mins}</span><span className="text-xs font-bold">分</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full sm:w-auto">
             <span className="text-[9px] text-gray-500 font-bold ml-1">締め切り日時を設定</span>
             <input 
                type="datetime-local" 
                className="bg-gray-800 text-xs font-bold p-2.5 rounded-lg border border-gray-700 outline-none focus:border-yellow-400 w-full text-white"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
          </div>
        </div>
        
        {/* 📈 目標達成プログレスバー */}
        <div className={`rounded-2xl p-4 shadow-sm border ${theme.card}`}>
            <div className="flex items-center justify-between mb-2">
                <label className={`text-xs font-bold flex items-center gap-2 ${theme.cardText}`}>
                    🎯 目標文字数:
                    <input 
                        type="number" 
                        value={targetCount} 
                        onChange={(e) => setTargetCount(Number(e.target.value))}
                        className={`border rounded px-2 py-1 text-sm w-20 text-right font-black text-blue-600 focus:outline-none focus:border-blue-500 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                    />
                </label>
                <span className={`text-xs font-bold ${theme.subText}`}>
                    現在: <span className="text-blue-600 tabular-nums">{stats.currentCount}</span> / {targetCount}
                </span>
            </div>
            <div className={`h-4 rounded-full overflow-hidden relative shadow-inner ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <div 
                    className={`h-full transition-all duration-500 ease-out rounded-full ${progress >= 100 ? 'bg-gradient-to-r from-green-400 to-green-500' : 'bg-gradient-to-r from-blue-400 to-blue-600'}`}
                    style={{ width: `${progress}%` }}
                >
                    {progress >= 100 && (
                         <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-white animate-pulse">
                             🎉 目標達成！お疲れ様！
                         </div>
                    )}
                </div>
            </div>
        </div>

        {/* 🔍 文体チェック結果表示エリア（表示時のみ） */}
        {showStyleCheck && styleCheckResult && (
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-5 animate-in fade-in slide-in-from-top-4 shadow-lg">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-red-800 flex items-center gap-2">
                        ⚠️ 文体チェック結果
                    </h3>
                    <button onClick={() => setShowStyleCheck(false)} className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full font-bold hover:bg-red-200">閉じる</button>
                </div>
                <div 
                    className="text-sm leading-relaxed text-gray-800 bg-white p-4 rounded-xl border border-red-100 max-h-60 overflow-y-auto"
                    dangerouslySetInnerHTML={styleCheckResult}
                />
                <p className="text-[10px] text-red-500 mt-2 font-bold text-center">
                    ※ 赤くなっている「です・ます」部分を「だ・である」に直しましょう！
                </p>
            </div>
        )}

        {/* メインエディタ & カウンター */}
        <section className={`rounded-2xl shadow-sm border overflow-hidden relative ${theme.card}`}>
          <div className={`px-4 py-2 border-b flex items-center justify-between overflow-x-auto ${theme.stats} ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex gap-2 shrink-0">
                <button onClick={handleInsertSkeleton} className="text-[10px] bg-blue-50 border border-blue-200 text-blue-600 hover:bg-blue-100 px-3 py-1 rounded font-bold shadow-sm transition-colors flex items-center gap-1">
                    <span>🦴</span>テンプレ
                </button>
                {/* 🔍 文体チェックボタン */}
                <button onClick={handleStyleCheck} className="text-[10px] bg-red-50 border border-red-200 text-red-600 hover:bg-red-100 px-3 py-1 rounded font-bold shadow-sm transition-colors flex items-center gap-1">
                    <span>🔍</span>文体チェック
                </button>
                <button onClick={handleCopyText} className={`text-[10px] border px-3 py-1 rounded font-bold shadow-sm transition-colors ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'}`}>コピー</button>
                <button onClick={handleClearText} className={`text-[10px] border px-3 py-1 rounded shadow-sm transition-colors ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-400 hover:text-red-400' : 'bg-white border-gray-300 text-gray-400 hover:text-red-600'}`}>クリア</button>
            </div>
            <label className="flex items-center cursor-pointer select-none ml-4 shrink-0">
              <span className={`mr-2 text-[10px] font-bold uppercase ${theme.subText}`}>参考文献を除外</span>
              <div className="relative">
                <input type="checkbox" className="sr-only" checked={excludeReferences} onChange={(e) => setExcludeReferences(e.target.checked)} />
                <div className={`block w-8 h-5 rounded-full transition-colors ${excludeReferences ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                <div className={`absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform ${excludeReferences ? 'transform translate-x-3' : ''}`}></div>
              </div>
            </label>
          </div>
          <textarea
            className={`w-full h-[45vh] p-4 text-base leading-relaxed focus:outline-none resize-none font-mono transition-colors duration-300 ${theme.textarea}`}
            placeholder="ここに文章を入力してください...（自動保存されます）"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div className="bg-blue-600 text-white px-4 py-3 border-t border-blue-700 grid grid-cols-3 gap-1 text-center sticky bottom-0 z-20 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
            <div><p className="text-[9px] font-bold opacity-80 uppercase tracking-widest">すべて</p><p className="text-2xl font-black tabular-nums">{stats.countWithSpaces}</p></div>
            <div className="border-l border-white/20"><p className="text-[9px] font-bold opacity-80 uppercase tracking-widest">空白なし</p><p className="text-2xl font-black text-yellow-300 tabular-nums">{stats.countWithoutSpaces}</p></div>
            <div className="border-l border-white/20"><p className="text-[9px] font-bold opacity-80 uppercase tracking-widest">行数</p><p className="text-2xl font-black tabular-nums">{stats.lines}</p></div>
          </div>
        </section>

        {/* ✍️ 言い換え辞典 */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100 shadow-sm">
          <h3 className="text-sm font-bold text-blue-900 mb-3 flex items-center gap-2">
            ✍️ レポートで使える「神」言い換え辞典
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {phraseDictionary.map((item, idx) => (
              <div key={idx} className="bg-white/90 p-2.5 rounded-lg flex items-center justify-between text-[11px] border border-blue-100 shadow-sm">
                <span className="text-red-400 font-bold">{item.from}</span>
                <span className="text-gray-400 px-2">→</span>
                <span className="text-blue-700 font-bold flex-1 text-right">{item.to}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 📚 参考文献メーカー */}
        <section className={`rounded-xl shadow-sm border p-5 ${theme.card}`}>
          <div className="flex items-center justify-between mb-3">
             <h2 className={`text-sm font-bold flex items-center gap-2 ${theme.cardText}`}>📚 参考文献メーカー</h2>
             <span className="text-[9px] bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded font-bold">時短機能付</span>
          </div>
          <div className="space-y-3">
            <div className="flex gap-2">
              <input type="text" placeholder="URLを貼って自動入力" className={`flex-1 border rounded px-3 py-2 text-sm outline-none ${theme.input}`} value={refData.url} onChange={(e) => setRefData({...refData, url: e.target.value})} />
              <button onClick={handleAutoFill} disabled={isAnalyzing} className="bg-blue-600 text-white text-[10px] font-bold px-4 py-2 rounded shadow-sm hover:bg-blue-700 transition-colors">{isAnalyzing ? "解析中" : "⚡自動入力"}</button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="タイトル" className={`border rounded px-3 py-2 text-xs outline-none ${theme.input}`} value={refData.title} onChange={(e) => setRefData({...refData, title: e.target.value})} />
              <input type="text" placeholder="著者/サイト名" className={`border rounded px-3 py-2 text-xs outline-none ${theme.input}`} value={refData.author} onChange={(e) => setRefData({...refData, author: e.target.value})} />
            </div>
            <button onClick={handleGenerateRef} className={`w-full text-white text-sm font-bold py-2.5 rounded transition-colors ${isDarkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-800 hover:bg-gray-900'}`}>書式を作成</button>
          </div>
          {generatedRef && (
            <div className={`mt-3 p-3 border border-dashed rounded text-[11px] flex justify-between items-center ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-50 border-gray-300 text-gray-700'}`}>
              <code className="truncate mr-4">{generatedRef}</code>
              <button onClick={() => navigator.clipboard.writeText(generatedRef)} className="text-blue-500 font-bold shrink-0 hover:underline">コピー</button>
            </div>
          )}
        </section>

        {/* 📖 神アイテムコーナー */}
        <section className="mt-10">
          <h3 className={`text-base font-bold mb-5 flex items-center gap-2 ${theme.cardText}`}>
            📖 レポート作成に役立つ神アイテム
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-4 rounded-2xl border shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all ${theme.card}`}>
              <img src="https://images-na.ssl-images-amazon.com/images/P/4140912723.09.LZZZZZZZ.jpg" alt="最新版 論文の教室" className="w-16 h-24 object-cover mb-3 rounded shadow-sm" />
              <h4 className={`font-bold text-[11px] h-8 flex items-center leading-tight ${theme.cardText}`}>最新版 論文の教室</h4>
              <div className="flex w-full gap-1 mt-auto">
                <a href="https://www.amazon.co.jp/dp/4140912723?tag=acky0113-22" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#FF9900] text-white text-[9px] font-bold py-2 rounded-lg text-center hover:opacity-90">Amazon</a>
                <a href="https://a.r10.to/hkR3I2" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#BF0000] text-white text-[9px] font-bold py-2 rounded-lg text-center hover:opacity-90">楽天</a>
              </div>
            </div>
            <div className={`p-4 rounded-2xl border shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all ${theme.card}`}>
              <img src="https://images-na.ssl-images-amazon.com/images/P/B077RWQNKN.09.LZZZZZZZ.jpg" alt="コピペと言われないレポート" className="w-16 h-24 object-cover mb-3 rounded shadow-sm" />
              <h4 className={`font-bold text-[11px] h-8 flex items-center leading-tight ${theme.cardText}`}>コピペと言われない書き方</h4>
              <div className="flex w-full gap-1 mt-auto">
                <a href="https://www.amazon.co.jp/dp/B077RWQNKN?tag=acky0113-22" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#FF9900] text-white text-[9px] font-bold py-2 rounded-lg text-center hover:opacity-90">Amazon</a>
                <a href="https://a.r10.to/h5fKiw" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#BF0000] text-white text-[9px] font-bold py-2 rounded-lg text-center hover:opacity-90">楽天</a>
              </div>
            </div>
          </div>
        </section>

        {/* 💻 ガジェットコーナー */}
        <section className="mt-10">
          <h3 className={`text-base font-bold mb-5 flex items-center gap-2 ${theme.cardText}`}>
            💻 執筆が爆速になる神ガジェット
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-4 rounded-2xl border shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all ${theme.card}`}>
              <img src="https://m.media-amazon.com/images/I/61SD-+LxQQL._AC_SX425_.jpg" alt="PCスタンド" className="w-16 h-16 object-contain mb-3 mt-4" />
              <h4 className={`font-bold text-[11px] h-8 flex items-center leading-tight ${theme.cardText}`}>BoYata PCスタンド</h4>
              <div className="flex w-full gap-1 mt-auto">
                <a href="https://www.amazon.co.jp/dp/B07H774Q42?tag=acky0113-22" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#FF9900] text-white text-[9px] font-bold py-2 rounded-lg text-center hover:opacity-90">Amazon</a>
                <a href="https://a.r10.to/h5n0fy" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#BF0000] text-white text-[9px] font-bold py-2 rounded-lg text-center hover:opacity-90">楽天</a>
              </div>
            </div>
            <div className={`p-4 rounded-2xl border shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all ${theme.card}`}>
              <img src="https://m.media-amazon.com/images/I/61spsKphurL._AC_SX679_.jpg" alt="ブルーライトカットメガネ" className="w-16 h-16 object-contain mb-3 mt-4" />
              <h4 className={`font-bold text-[11px] h-8 flex items-center leading-tight ${theme.cardText}`}>ブルーライトカットメガネ</h4>
              <div className="flex w-full gap-1 mt-auto">
                <a href="https://www.amazon.co.jp/dp/B0FRZG38TW?tag=acky0113-22" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#FF9900] text-white text-[9px] font-bold py-2 rounded-lg text-center hover:opacity-90">Amazon</a>
                <a href="https://a.r10.to/hP5chl" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#BF0000] text-white text-[9px] font-bold py-2 rounded-lg text-center hover:opacity-90">楽天</a>
              </div>
            </div>
          </div>
        </section>

        {/* Amazon Prime バナー */}
        <div className="my-8">
          <a href="https://www.amazon.co.jp/%E5%AD%A6%E7%94%9F-%E5%A4%A7%E5%AD%A6%E7%94%9F-%E6%95%99%E7%A7%91%E6%9B%B8-%E6%9C%AC-student/b?ie=UTF8&node=2410972051&tag=acky0113-22" target="_blank" rel="noopener noreferrer" className="block rounded-2xl bg-gradient-to-br from-[#00A8E1] to-[#007399] p-5 text-white shadow-lg transition-transform hover:scale-[1.01]">
            <p className="text-sm font-black mb-1">🎓 学生限定：Amazon Primeが6ヶ月無料！</p>
            <p className="text-[11px] opacity-90 text-blue-50">本が最大10%還元・お急ぎ便無料・映画も見放題。</p>
          </a>
        </div>

        {/* 📝 記事リンクコーナー */}
        <section className="mt-8">
          <h3 className={`text-sm font-bold mb-3 ml-1 ${theme.cardText}`}>📝 人気の解説記事</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* 記事1 */}
            <div className={`p-4 rounded-xl border shadow-sm hover:shadow-md transition-all ${theme.card}`}>
              <Link href="/blog/citation-rules" className="block group h-full flex flex-col">
                <h4 className="font-bold text-blue-600 group-hover:underline mb-2 text-xs leading-relaxed">
                  【コピペOK】参考文献の書き方完全ガイド
                </h4>
                <p className={`text-[10px] mt-auto ${theme.subText}`}>
                  本やWebサイトを引用するときの正しい書き方。
                </p>
              </Link>
            </div>
            {/* 記事2 */}
            <div className={`p-4 rounded-xl border shadow-sm hover:shadow-md transition-all ${theme.card}`}>
              <Link href="/blog/word-count-hacks" className="block group h-full flex flex-col">
                <h4 className="font-bold text-blue-600 group-hover:underline mb-2 text-xs leading-relaxed">
                  レポートの文字数が足りない！自然に増やす裏技
                </h4>
                <p className={`text-[10px] mt-auto ${theme.subText}`}>
                  質を落とさずに文字数を増やすテクニック5選。
                </p>
              </Link>
            </div>
            {/* 記事3 */}
            <div className={`p-4 rounded-xl border shadow-sm hover:shadow-md transition-all ${theme.card}`}>
              <Link href="/blog/report-structure" className="block group h-full flex flex-col">
                <h4 className="font-bold text-blue-600 group-hover:underline mb-2 text-xs leading-relaxed">
                  【テンプレ】序論・本論・結論の書き方
                </h4>
                <p className={`text-[10px] mt-auto ${theme.subText}`}>
                  レポート構成の黄金比率と書き出しの例文。
                </p>
              </Link>
            </div>
          </div>
        </section>

        <SeoContent />

      </main>
      
      {/* フッター */}
      <footer className="max-w-4xl mx-auto px-4 mt-16 mb-8 text-center text-gray-400 text-[10px]">
        <div className="flex justify-center gap-8 mb-3 font-semibold text-nowrap">
          <Link href="/privacy" className="hover:text-gray-600 underline underline-offset-4 decoration-gray-200">プライバシーポリシー</Link>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeumYrx_6P4aHZZGPBHhvF-0F9iATjUw1baHombHHsj7G59Kw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 underline underline-offset-4 decoration-gray-200">お問合せ</a>
        </div>
        <p>&copy; 2025 Acky</p>
      </footer>
    </div>
  );
}