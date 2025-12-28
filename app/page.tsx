'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { SeoContent } from './components/SeoContent'; 

export default function Home() {
  // --- 状態管理 ---
  const [text, setText] = useState('');
  const [excludeReferences, setExcludeReferences] = useState(false);
  
  // 👇 参考文献用データの拡張（論文対応）
  const [citationType, setCitationType] = useState<'web' | 'paper'>('web'); // 'web' or 'paper'
  const [refData, setRefData] = useState({ 
    title: '', 
    author: '', 
    url: '',
    journal: '', // 掲載誌名・出版社
    pubYear: '', // 発行年
    vol: '',     // 巻数
    pages: ''    // ページ数
  });
  
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
    const savedTheme = localStorage.getItem('report-theme'); 
    
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

  const handleStyleCheck = () => {
    if (!text) return;
    let checkedHTML = text
        .replace(/\n/g, '<br/>')
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
    let result = '';

    if (citationType === 'web') {
      // 🌐 Webサイトモード
      const date = new Date();
      const today = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
      result = `${refData.author ? refData.author + '. ' : ''}“${refData.title}”. (参照 ${today}), ${refData.url}`;
    } else {
      // 📖 論文・書籍モード
      // 一般的な形式：著者名. "タイトル". 掲載誌/出版社. 発行年, 巻(号), p.開始-終了.
      result = `${refData.author ? refData.author + '. ' : ''}“${refData.title}”. ${refData.journal ? refData.journal + '. ' : ''}${refData.pubYear}${refData.vol ? ', ' + refData.vol : ''}${refData.pages ? ', p.' + refData.pages : ''}.`;
    }

    setGeneratedRef(result);
  };

  // 🎨 テーマ定義
  const theme = {
    bg: isDarkMode ? 'bg-gray-900' : 'bg-gray-50',
    text: isDarkMode ? 'text-gray-100' : 'text-gray-800',
    card: isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100',
    cardText: isDarkMode ? 'text-gray-200' : 'text-gray-900',
    subText: isDarkMode ? 'text-gray-400' : 'text-gray-500',
    input: isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800',
    header: isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200',
    textarea: isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-700',
    stats: isDarkMode ? 'bg-gray-950 border-gray-700' : 'bg-gray-50 border-gray-200',
  };

  // 🛍️ 商品データ（全カテゴリ4つずつ）
  const bookItems = [
    { id: 1, name: "最新版 論文の教室", img: "https://images-na.ssl-images-amazon.com/images/P/4140912723.09.LZZZZZZZ.jpg", desc: "レポート書き方のバイブル", amazon: "https://www.amazon.co.jp/dp/4140912723?tag=acky0113-22", rakuten: "https://a.r10.to/hkRCci" },
    { id: 2, name: "コピペと言われない書き方", img: "https://images-na.ssl-images-amazon.com/images/P/B077RWQNKN.09.LZZZZZZZ.jpg", desc: "剽窃判定を回避する技術", amazon: "https://www.amazon.co.jp/dp/B077RWQNKN?tag=acky0113-22", rakuten: "https://a.r10.to/hPgrg8" },
    { id: 9, name: "日本語の作文技術（新版）", img: "https://shop.r10s.jp/book/cabinet/0943/9784062130943.jpg?fitin=560:400&composite-to=*,*|560:400", desc: "40年売れ続ける文章術の神本", amazon: "https://www.amazon.co.jp/dp/B01MYXH4J1?tag=acky0113-22", rakuten: "https://a.r10.to/hkyzb7" },
    { id: 10, name: "レポートの組み立て方", img: "https://shop.r10s.jp/book/cabinet/1216/9784480081216.jpg?fitin=560:400&composite-to=*,*|560:400", desc: "構成に悩む時間をゼロにする", amazon: "https://www.amazon.co.jp/dp/B00E5XAXQ4?tag=acky0113-22", rakuten: "https://a.r10.to/h5e9On" },
  ];

  const gadgetItems = [
    { id: 3, name: "BoYata PCスタンド", img: "https://m.media-amazon.com/images/I/61SD-+LxQQL._AC_SX425_.jpg", desc: "猫背・肩こり解消の神台", amazon: "https://www.amazon.co.jp/dp/B07H774Q42?tag=acky0113-22", rakuten: "https://a.r10.to/h5frRJ" },
    { id: 4, name: "JINS PCメガネ", img: "https://m.media-amazon.com/images/I/61spsKphurL._AC_SX679_.jpg", desc: "ブルーライトを40%カット", amazon: "https://www.amazon.co.jp/dp/B0FRZG38TW?tag=acky0113-22", rakuten: "https://a.r10.to/hPUSvN" },
    { id: 5, name: "Anker Soundcore P31i", img: "https://m.media-amazon.com/images/I/51nHT2kQ1bL._AC_SX679_.jpg", desc: "集中力爆上げノイキャン", amazon: "https://www.amazon.co.jp/dp/B0FNRS5WB2?tag=acky0113-22", rakuten: "https://a.r10.to/h5QtdJ" },
    { id: 6, name: "Anker 急速充電器", img: "https://m.media-amazon.com/images/I/41HcsraSzsL._AC_SY606_.jpg", desc: "カフェで充電がない絶望を防ぐ", amazon: "https://www.amazon.co.jp/dp/B0CL8S8CS5?tag=acky0113-22", rakuten: "https://a.r10.to/hPMi8F" },
  ];

  const relaxItems = [
    { id: 7, name: "蒸気でホットアイマスク", img: "https://m.media-amazon.com/images/I/51tscyPQ3JL._AC_SX425_.jpg", desc: "酷使した目を回復させる", amazon: "https://www.amazon.co.jp/dp/B0FSSPL1DL?tag=acky0113-22", rakuten: "https://a.r10.to/hREj9k" },
    { id: 8, name: "森永 ラムネ", img: "https://m.media-amazon.com/images/I/5195I5AfR3L._AC_SY300_SX300_QL70_ML2_.jpg", desc: "東大生も愛用する脳の燃料", amazon: "https://www.amazon.co.jp/dp/B0CHM7D6LZ?tag=acky0113-22", rakuten: "https://a.r10.to/hg9lNm" },
    { id: 11, name: "GABA チョコレート", img: "https://m.media-amazon.com/images/I/71239lIiz-L._AC_SX679_PIbundle-10,TopRight,0,0_SH20_.jpg", desc: "ストレスを低減する神チョコ", amazon: "https://www.amazon.co.jp/dp/B0077VOZP6?tag=acky0113-22", rakuten: "https://a.r10.to/hkMqwh" },
    { id: 12, name: "蒸気でグッドナイト", img: "https://m.media-amazon.com/images/I/71LpTmH9HRL._AC_SY300_SX300_QL70_ML2_.jpg", desc: "首元を温めて気絶級の眠りへ", amazon: "https://www.amazon.co.jp/dp/B0F7HKDVLZ?tag=acky0113-22", rakuten: "https://a.r10.to/h5AW0U" },
  ];

  // 商品カードコンポーネント
  const ProductCard = ({ item }: { item: any }) => (
    <div className={`snap-center shrink-0 w-[160px] p-3 rounded-2xl border flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all ${theme.card}`}>
      <img src={item.img} alt={item.name} className="w-full h-32 object-contain mb-2 rounded p-1" />
      <h4 className={`font-bold text-[10px] h-8 flex items-center justify-center leading-tight line-clamp-2 w-full ${theme.cardText}`}>{item.name}</h4>
      <p className={`text-[9px] mb-2 line-clamp-1 ${theme.subText}`}>{item.desc}</p>
      <div className="flex w-full gap-1 mt-auto">
        <a href={item.amazon} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#FF9900] text-white text-[9px] font-bold py-2 rounded-lg text-center hover:opacity-90">Amazon</a>
        <a href={item.rakuten} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#BF0000] text-white text-[9px] font-bold py-2 rounded-lg text-center hover:opacity-90">楽天</a>
      </div>
    </div>
  );

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
        <div className="bg-gray-900 rounded-2xl p-3 sm:p-4 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-700">
          <div className="flex flex-col gap-1 w-full sm:w-auto text-center sm:text-left">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">提出期限まで残り</span>
            <div className="flex items-baseline justify-center sm:justify-start gap-2">
              <span className="text-2xl sm:text-3xl font-black text-yellow-400 tabular-nums">{timeLeft.days}</span><span className="text-xs font-bold">日</span>
              <span className="text-2xl sm:text-3xl font-black text-yellow-400 tabular-nums">{timeLeft.hours}</span><span className="text-xs font-bold">時間</span>
              <span className="text-2xl sm:text-3xl font-black text-yellow-400 tabular-nums">{timeLeft.mins}</span><span className="text-xs font-bold">分</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full sm:w-auto overflow-hidden">
             <span className="text-[9px] text-gray-500 font-bold ml-1">締め切り日時を設定</span>
             <input 
                type="datetime-local" 
                className="bg-gray-800 text-xs font-bold p-2 rounded-lg border border-gray-700 outline-none focus:border-yellow-400 w-full max-w-full text-white box-border"
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

        {/* 🔍 文体チェック結果表示 */}
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
            </div>
        )}

        {/* メインエディタ */}
        <section className={`rounded-2xl shadow-sm border overflow-hidden relative ${theme.card}`}>
          <div className={`px-4 py-2 border-b flex items-center justify-between overflow-x-auto ${theme.stats} ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex gap-2 shrink-0">
                <button onClick={handleInsertSkeleton} className="text-[10px] bg-blue-50 border border-blue-200 text-blue-600 hover:bg-blue-100 px-3 py-1 rounded font-bold shadow-sm transition-colors flex items-center gap-1">
                    <span>🦴</span>テンプレ
                </button>
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

        {/* 📚 参考文献メーカー（論文対応版） */}
        <section className={`rounded-xl shadow-sm border p-5 ${theme.card}`}>
          <div className="flex items-center justify-between mb-3">
             <h2 className={`text-sm font-bold flex items-center gap-2 ${theme.cardText}`}>📚 参考文献メーカー</h2>
             <span className="text-[9px] bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded font-bold">論文対応</span>
          </div>

          {/* モード切替タブ */}
          <div className="flex bg-gray-100 p-1 rounded-lg mb-4">
            <button 
              onClick={() => setCitationType('web')}
              className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${citationType === 'web' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              🌐 Webサイト
            </button>
            <button 
              onClick={() => setCitationType('paper')}
              className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${citationType === 'paper' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              📖 論文・書籍
            </button>
          </div>

          <div className="space-y-3">
            {/* 🌐 Webサイト用入力フォーム */}
            {citationType === 'web' && (
              <>
                <div className="flex gap-2">
                  <input type="text" placeholder="URLを貼って自動入力" className={`flex-1 border rounded px-3 py-2 text-sm outline-none ${theme.input}`} value={refData.url} onChange={(e) => setRefData({...refData, url: e.target.value})} />
                  <button onClick={handleAutoFill} disabled={isAnalyzing} className="bg-blue-600 text-white text-[10px] font-bold px-4 py-2 rounded shadow-sm hover:bg-blue-700 transition-colors shrink-0">{isAnalyzing ? "解析中" : "⚡自動入力"}</button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="ページタイトル" className={`border rounded px-3 py-2 text-xs outline-none ${theme.input}`} value={refData.title} onChange={(e) => setRefData({...refData, title: e.target.value})} />
                  <input type="text" placeholder="サイト名 / 著者" className={`border rounded px-3 py-2 text-xs outline-none ${theme.input}`} value={refData.author} onChange={(e) => setRefData({...refData, author: e.target.value})} />
                </div>
              </>
            )}

            {/* 📖 論文用入力フォーム */}
            {citationType === 'paper' && (
              <>
                <div className="grid grid-cols-2 gap-3">
                   <input type="text" placeholder="論文・書籍タイトル" className={`col-span-2 border rounded px-3 py-2 text-xs outline-none ${theme.input}`} value={refData.title} onChange={(e) => setRefData({...refData, title: e.target.value})} />
                   <input type="text" placeholder="著者名 (例: 山田 太郎)" className={`border rounded px-3 py-2 text-xs outline-none ${theme.input}`} value={refData.author} onChange={(e) => setRefData({...refData, author: e.target.value})} />
                   <input type="text" placeholder="掲載誌名・出版社" className={`border rounded px-3 py-2 text-xs outline-none ${theme.input}`} value={refData.journal} onChange={(e) => setRefData({...refData, journal: e.target.value})} />
                   <div className="grid grid-cols-3 col-span-2 gap-2">
                      <input type="text" placeholder="発行年 (例: 2024)" className={`border rounded px-2 py-2 text-xs outline-none ${theme.input}`} value={refData.pubYear} onChange={(e) => setRefData({...refData, pubYear: e.target.value})} />
                      <input type="text" placeholder="巻(号) (例: 12(3))" className={`border rounded px-2 py-2 text-xs outline-none ${theme.input}`} value={refData.vol} onChange={(e) => setRefData({...refData, vol: e.target.value})} />
                      <input type="text" placeholder="ページ (例: 12-24)" className={`border rounded px-2 py-2 text-xs outline-none ${theme.input}`} value={refData.pages} onChange={(e) => setRefData({...refData, pages: e.target.value})} />
                   </div>
                </div>
              </>
            )}

            <button onClick={handleGenerateRef} className={`w-full text-white text-sm font-bold py-2.5 rounded transition-colors ${isDarkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-800 hover:bg-gray-900'}`}>書式を作成</button>
          </div>
          
          {generatedRef && (
            <div className={`mt-3 p-3 border border-dashed rounded text-[11px] flex justify-between items-center ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-gray-50 border-gray-300 text-gray-700'}`}>
              <code className="truncate mr-4">{generatedRef}</code>
              <button onClick={() => navigator.clipboard.writeText(generatedRef)} className="text-blue-500 font-bold shrink-0 hover:underline">コピー</button>
            </div>
          )}
        </section>

        {/* 🛍️ 商品コーナー（カテゴリ別・横スクロール） */}
        <div className="space-y-8 mt-10">
            {/* 📖 本・参考書 */}
            <section>
              <h3 className={`text-base font-bold mb-4 flex items-center gap-2 ${theme.cardText}`}>
                📖 レポート作成に役立つ神アイテム
              </h3>
              <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory">
                {bookItems.map((item) => <ProductCard key={item.id} item={item} />)}
              </div>
            </section>

            {/* 💻 ガジェット */}
            <section>
              <h3 className={`text-base font-bold mb-4 flex items-center gap-2 ${theme.cardText}`}>
                💻 執筆が爆速になる神ガジェット
              </h3>
              <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory">
                {gadgetItems.map((item) => <ProductCard key={item.id} item={item} />)}
              </div>
            </section>

            {/* 🍬 リラックス・差し入れ */}
            <section>
              <h3 className={`text-base font-bold mb-4 flex items-center gap-2 ${theme.cardText}`}>
                🍬 疲れた脳に効くリラックス・差し入れ
              </h3>
              <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory">
                {relaxItems.map((item) => <ProductCard key={item.id} item={item} />)}
              </div>
            </section>
        </div>

        {/* Amazon Prime バナー */}
        <div className="my-8">
          <a href="https://www.amazon.co.jp/%E5%AD%A6%E7%94%9F-%E5%A4%A7%E5%AD%A6%E7%94%9F-%E6%95%99%E7%A7%91%E6%9B%B8-%E6%9C%AC-student/b?ie=UTF8&node=2410972051&tag=acky0113-22" target="_blank" rel="noopener noreferrer" className="block rounded-2xl bg-gradient-to-br from-[#00A8E1] to-[#007399] p-5 text-white shadow-lg transition-transform hover:scale-[1.01]">
            <p className="text-sm font-black mb-1">🎓 学生限定：Amazon Primeが6ヶ月無料！</p>
            <p className="text-[11px] opacity-90 text-blue-50">本が最大10%還元・お急ぎ便無料・映画も見放題。</p>
          </a>
        </div>

        {/* 📝 レポート課題を攻略する！お役立ちガイド (新設・統合版) */}
        <section className="mt-12">
          <h3 className={`text-base font-bold mb-6 ml-1 flex items-center gap-2 ${theme.cardText}`}>
            📝 レポート課題を攻略する！お役立ちガイド
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 🆕 新記事: PREP法 */}
            <Link href="/blog/prep-method" className={`block p-5 rounded-xl border shadow-sm hover:shadow-md transition-all group ${theme.card}`}>
              <h4 className="font-bold text-blue-600 group-hover:underline mb-2 text-sm">
                【論理構成】説得力が3倍になる「PREP法」とは？
              </h4>
              <p className={`text-[10px] leading-relaxed ${theme.subText}`}>
                「結論から書け」と言われたらこれ。論理的なレポートを書くための最強のフレームワークを解説。
              </p>
            </Link>
            {/* 🆕 新記事: コピペ・剽窃 */}
            <Link href="/blog/plagiarism-rules" className={`block p-5 rounded-xl border shadow-sm hover:shadow-md transition-all group ${theme.card}`}>
              <h4 className="font-bold text-blue-600 group-hover:underline mb-2 text-sm">
                【注意】「コピペ」の境界線はどこ？剽窃にならない引用術
              </h4>
              <p className={`text-[10px] leading-relaxed ${theme.subText}`}>
                バレると単位剥奪！？やってはいけないNG行動と、正しく引用するための安全なルール。
              </p>
            </Link>
            
            {/* 記事: 語彙力 */}
            <Link href="/blog/vocabulary-list" className={`block p-5 rounded-xl border shadow-sm hover:shadow-md transition-all group ${theme.card}`}>
              <h4 className="font-bold text-blue-600 group-hover:underline mb-2 text-sm">
                【語彙力】「〜と思います」は卒業！賢く見える言い換え
              </h4>
              <p className={`text-[10px] leading-relaxed ${theme.subText}`}>
                文章が幼稚に見えてしまう悩みを解決。そのまま使える接続詞や文末表現をまとめました。
              </p>
            </Link>

            {/* 記事: 参考文献の探し方 */}
            <Link href="/blog/research-tips" className={`block p-5 rounded-xl border shadow-sm hover:shadow-md transition-all group ${theme.card}`}>
              <h4 className="font-bold text-blue-600 group-hover:underline mb-2 text-sm">
                【ネタ探し】ネットだけで完結！信頼できる情報の探し方
              </h4>
              <p className={`text-[10px] leading-relaxed ${theme.subText}`}>
                図書館に行かなくても大丈夫。Wikipedia禁止でも使える検索テクニックを紹介。
              </p>
            </Link>

            {/* 記事: 書き出しテンプレ */}
            <Link href="/blog/intro-template" className={`block p-5 rounded-xl border shadow-sm hover:shadow-md transition-all group ${theme.card}`}>
              <h4 className="font-bold text-blue-600 group-hover:underline mb-2 text-sm">
                【書き出し】「序論」の穴埋めテンプレ！3分で書く方法
              </h4>
              <p className={`text-[10px] leading-relaxed ${theme.subText}`}>
                何から書き始めればいいか分からない人へ。背景・目的・構成を埋めるだけの魔法の型。
              </p>
            </Link>

            {/* 記事: S評価チェックリスト */}
            <Link href="/blog/grade-s-checklist" className={`block p-5 rounded-xl border shadow-sm hover:shadow-md transition-all group ${theme.card}`}>
              <h4 className="font-bold text-blue-600 group-hover:underline mb-2 text-sm">
                【評価基準】教授はここを見る！S評価を取るチェック項目
              </h4>
              <p className={`text-[10px] leading-relaxed ${theme.subText}`}>
                提出直前に確認！誤字脱字や「だ・である」調など、減点を防ぐポイントを公開。
              </p>
            </Link>

            {/* 記事: スマホ執筆 */}
            <Link href="/blog/mobile-writing" className={`block p-5 rounded-xl border shadow-sm hover:shadow-md transition-all group ${theme.card}`}>
              <h4 className="font-bold text-blue-600 group-hover:underline mb-2 text-sm">
                【スマホ活用】PCなしでレポートを爆速で書く入力術
              </h4>
              <p className={`text-[10px] leading-relaxed ${theme.subText}`}>
                通学電車で課題を終わらせたい！音声入力やレポカン活用で、隙間時間を有効活用しよう。
              </p>
            </Link>

            {/* 記事: 参考文献ルール (既存) */}
            <Link href="/blog/citation-rules" className={`block p-5 rounded-xl border shadow-sm hover:shadow-md transition-all group ${theme.card}`}>
              <h4 className="font-bold text-blue-600 group-hover:underline mb-2 text-sm">
                【基礎】参考文献の書き方ルール徹底解説
              </h4>
              <p className={`text-[10px] leading-relaxed ${theme.subText}`}>
                URL、著者名、発行年... 正しいフォーマットを実例付きで解説します。
              </p>
            </Link>

             {/* 記事: 文字数稼ぎ (既存) */}
             <Link href="/blog/word-count-hacks" className={`block p-5 rounded-xl border shadow-sm hover:shadow-md transition-all group ${theme.card}`}>
              <h4 className="font-bold text-blue-600 group-hover:underline mb-2 text-sm">
                【裏技】レポートの文字数が足りない時の自然な増やし方
              </h4>
              <p className={`text-[10px] leading-relaxed ${theme.subText}`}>
                質を落とさずに文字数を増やすテクニック5選。
              </p>
            </Link>

            {/* 記事: 構成全般 (既存) */}
             <Link href="/blog/report-structure" className={`block p-5 rounded-xl border shadow-sm hover:shadow-md transition-all group ${theme.card}`}>
              <h4 className="font-bold text-blue-600 group-hover:underline mb-2 text-sm">
                【全体構成】序論・本論・結論の書き方と黄金比率
              </h4>
              <p className={`text-[10px] leading-relaxed ${theme.subText}`}>
                レポート構成の基本と、それぞれの役割について。
              </p>
            </Link>

          </div>
        </section>

        <SeoContent />

      </main>
      
      {/* フッター */}
      <footer className="max-w-4xl mx-auto px-4 mt-16 mb-8 text-center text-gray-400 text-[10px]">
        <div className="flex justify-center gap-8 mb-3 font-semibold text-nowrap">
          <Link href="/privacy" className="hover:text-gray-600 underline underline-offset-4 decoration-gray-200">プライバシーポリシー</Link>
          <Link href="/about" className="hover:text-gray-600 underline underline-offset-4 decoration-gray-200">運営者情報</Link>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeumYrx_6P4aHZZGPBHhvF-0F9iATjUw1baHombHHsj7G59Kw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 underline underline-offset-4 decoration-gray-200">お問合せ</a>
        </div>
        <p>&copy; 2025 Acky</p>
      </footer>
    </div>
  );
}