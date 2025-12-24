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

  // --- 自動保存 ---
  useEffect(() => {
    const savedText = localStorage.getItem('report-text');
    if (savedText) setText(savedText);
  }, []);

  useEffect(() => {
    if (text) {
      localStorage.setItem('report-text', text);
      setIsSaved(true);
      const timer = setTimeout(() => setIsSaved(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [text]);

  // --- コピー & クリア ---
  const handleCopyText = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    alert('本文をコピーしました！');
  };

  const handleClearText = () => {
    if (confirm('入力内容をすべて消去しますか？（復元できません）')) {
      setText('');
      localStorage.removeItem('report-text');
    }
  };

  // --- 文字数カウントロジック ---
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
    return { countWithSpaces, countWithoutSpaces, lines };
  }, [text, excludeReferences]);

  // --- 参考文献生成 ---
  const handleGenerateRef = () => {
    const date = new Date();
    const today = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    const result = `${refData.author ? refData.author + '. ' : ''}『${refData.title}』. (参照 ${today}), ${refData.url}`;
    setGeneratedRef(result);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans pb-20">
      
      {/* ▼▼▼ ヘッダー（修正：z-50で一番手前に！） ▼▼▼ */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <img 
              src="/logo.jpg" 
              alt="ロゴ" 
              className="w-8 h-8 rounded-lg object-cover shadow-sm border border-gray-100"
            />
            <h1 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
              レポート文字数カウンター
            </h1>
          </div>

          <nav className="flex items-center gap-4">
             {/* ブログへのリンクボタン */}
             <Link href="/blog/citation-rules" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1">
               <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs hidden sm:inline-block">New</span>
               書き方ガイド
             </Link>
             
             {/* 自動保存メッセージ */}
             <div className={`hidden sm:block text-xs font-medium transition-opacity duration-500 ${isSaved ? 'text-green-600 opacity-100' : 'opacity-0'}`}>
               ✓ 保存済
             </div>
          </nav>

        </div>
      </header>
      {/* ▲▲▲ ヘッダー終了 ▲▲▲ */}

      <main className="max-w-4xl mx-auto px-4 mt-6 space-y-6">
        
        {/* メイン機能エリア */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-2">
                <button onClick={handleCopyText} className="text-xs bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 px-3 py-1.5 rounded transition-colors shadow-sm font-medium">
                    📋 全文コピー
                </button>
                <button onClick={handleClearText} className="text-xs bg-white border border-gray-300 hover:text-red-600 hover:border-red-200 text-gray-500 px-3 py-1.5 rounded transition-colors shadow-sm">
                    🗑️ クリア
                </button>
            </div>
            <label className="flex items-center cursor-pointer select-none">
              <span className="mr-2 text-xs font-bold text-gray-600">参考文献を除外</span>
              <div className="relative">
                <input 
                  type="checkbox" 
                  className="sr-only" 
                  checked={excludeReferences}
                  onChange={(e) => setExcludeReferences(e.target.checked)}
                />
                <div className={`block w-10 h-6 rounded-full transition-colors ${excludeReferences ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${excludeReferences ? 'transform translate-x-4' : ''}`}></div>
              </div>
            </label>
          </div>

          <textarea
            className="w-full h-[60vh] p-6 text-base leading-relaxed text-gray-700 focus:outline-none resize-none"
            placeholder="ここに文章を入力...（自動保存されます）"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <div className="bg-blue-50/90 backdrop-blur px-4 py-3 border-t border-blue-100 grid grid-cols-3 gap-2 text-center sticky bottom-0">
            <div>
              <p className="text-[10px] text-blue-600 font-bold uppercase">文字数 (すべて)</p>
              <p className="text-xl font-extrabold text-gray-800">{stats.countWithSpaces}</p>
            </div>
            <div className="border-l border-blue-200">
              <p className="text-[10px] text-blue-600 font-bold uppercase">文字数 (空白なし)</p>
              <p className="text-xl font-extrabold text-gray-800">{stats.countWithoutSpaces}</p>
            </div>
            <div className="border-l border-blue-200">
              <p className="text-[10px] text-blue-600 font-bold uppercase">行数</p>
              <p className="text-xl font-extrabold text-gray-800">{stats.lines}</p>
            </div>
          </div>
        </section>

        {/* 参考文献ジェネレーター */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h2 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
            📚 参考文献メーカー
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <input 
              type="text" 
              placeholder="タイトル" 
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
              value={refData.title}
              onChange={(e) => setRefData({...refData, title: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="著者名" 
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
              value={refData.author}
              onChange={(e) => setRefData({...refData, author: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="URL" 
              className="border border-gray-300 rounded px-3 py-2 text-sm md:col-span-2 focus:ring-1 focus:ring-blue-500 outline-none"
              value={refData.url}
              onChange={(e) => setRefData({...refData, url: e.target.value})}
            />
          </div>
          <button 
            onClick={handleGenerateRef}
            className="w-full bg-gray-800 hover:bg-gray-900 text-white text-sm font-bold py-2 rounded transition-colors"
          >
            形式を作成
          </button>
          {generatedRef && (
            <div className="mt-3 p-3 bg-gray-50 border border-gray-200 rounded text-sm flex justify-between items-center">
              <code className="text-gray-700">{generatedRef}</code>
              <button onClick={() => navigator.clipboard.writeText(generatedRef)} className="text-blue-600 text-xs font-bold hover:underline ml-2">コピー</button>
            </div>
          )}
        </section>

        {/* Prime Student バナー */}
        <div className="my-8">
          <a 
            href="https://www.amazon.co.jp/%E5%AD%A6%E7%94%9F-%E5%A4%A7%E5%AD%A6%E7%94%9F-%E6%95%99%E7%A7%91%E6%9B%B8-%E6%9C%AC-student/b?ie=UTF8&node=2410972051&tag=acky0113-22"
            target="_blank" 
            rel="noopener noreferrer"
            className="block group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#00A8E1] to-[#007399] p-6 text-white shadow-lg transition-transform hover:scale-[1.02]"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-yellow-300 mb-1">🎓 学生限定：Amazon Primeが6ヶ月無料！</h3>
                <p className="text-sm text-white/90">本のお急ぎ便も無料・映画も見放題。入らないと損です。</p>
              </div>
              <span className="bg-yellow-400 text-blue-900 text-sm font-bold px-6 py-2 rounded-full shadow-md group-hover:bg-yellow-300 transition-colors">
                無料で試す ↗
              </span>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          </a>
        </div>

        {/* 書籍コーナー */}
        <section className="mt-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            📖 レポート作成に役立つ神アイテム
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start mb-3">
                <div className="w-20 h-28 bg-gray-200 flex-shrink-0 rounded overflow-hidden mr-4">
                    <img src="https://images-na.ssl-images-amazon.com/images/P/4140912723.09.LZZZZZZZ.jpg" alt="最新版 論文の教室" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-sm mb-1">最新版 論文の教室 レポートから卒論まで</h4>
                    <p className="text-xs text-gray-500">「そもそも何を書けばいいかわからない」ならこれ。伝説のベストセラー最新版。</p>
                </div>
              </div>
              <div className="flex gap-2">
                <a href="https://www.amazon.co.jp/dp/4140912723?tag=acky0113-22" target="_blank" rel="noopener noreferrer" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-2 px-1 rounded text-center transition-colors">Amazon</a>
                <a href="https://a.r10.to/hkR3I2" target="_blank" rel="noopener noreferrer" className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2 px-1 rounded text-center transition-colors">楽天</a>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start mb-3">
                <div className="w-20 h-28 bg-gray-200 flex-shrink-0 rounded overflow-hidden mr-4">
                    <img src="https://images-na.ssl-images-amazon.com/images/P/B077RWQNKN.09.LZZZZZZZ.jpg" alt="コピペと言われないレポートの書き方" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-sm mb-1">コピペと言われないレポートの書き方教室</h4>
                    <p className="text-xs text-gray-500">コピペ判定が怖いならこれを読むべき。引用のルールが完璧にわかります。</p>
                </div>
              </div>
              <div className="flex gap-2">
                <a href="https://www.amazon.co.jp/dp/B077RWQNKN?tag=acky0113-22" target="_blank" rel="noopener noreferrer" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-2 px-1 rounded text-center transition-colors">Amazon</a>
                <a href="https://a.r10.to/h5fKiw" target="_blank" rel="noopener noreferrer" className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2 px-1 rounded text-center transition-colors">楽天</a>
              </div>
            </div>
          </div>
        </section>
        
        {/* ガジェットコーナー */}
        <section className="mt-12">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            💻 レポート執筆が捗るデスク環境
            <span className="text-xs bg-blue-100 text-blue-800 font-medium px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">おすすめ</span>
          </h3>
          <p className="text-sm text-gray-500 mb-6">長時間作業の「肩こり・目の疲れ」を軽減する定番アイテム。</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start mb-3">
                <div className="w-24 h-24 bg-gray-200 flex-shrink-0 rounded overflow-hidden mr-4 flex items-center justify-center p-2">
                    <img src="https://m.media-amazon.com/images/I/61SD-+LxQQL._AC_SX425_.jpg" alt="BoYata ノートパソコンスタンド" className="w-auto h-full object-contain" />
                </div>
                <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-sm mb-1">BoYata ノートパソコンスタンド (17インチ対応)</h4>
                    <p className="text-xs text-gray-500">大学生の定番。目線が上がって猫背・肩こりが劇的に改善します。絶対に導入すべき。</p>
                </div>
              </div>
              <div className="flex gap-2">
                <a href="https://www.amazon.co.jp/dp/B07H774Q42?tag=acky0113-22" target="_blank" rel="noopener noreferrer" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-2 px-1 rounded text-center transition-colors">Amazon</a>
                <a href="https://a.r10.to/h5n0fy" target="_blank" rel="noopener noreferrer" className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2 px-1 rounded text-center transition-colors">楽天</a>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start mb-3">
                <div className="w-24 h-24 bg-gray-200 flex-shrink-0 rounded overflow-hidden mr-4 flex items-center justify-center p-2">
                    <img src="https://m.media-amazon.com/images/I/61spsKphurL._AC_SX679_.jpg" alt="iFala ブルーライトカットメガネ" className="w-auto h-full object-contain" />
                </div>
                <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-sm mb-1">iFala ブルーライトカットメガネ (JIS規格/調光レンズ)</h4>
                    <p className="text-xs text-gray-500">おしゃれな伊達メガネ風で普段使いもOK。UVカット機能付きでスマホ疲れも軽減。</p>
                </div>
              </div>
              <div className="flex gap-2">
                <a href="https://www.amazon.co.jp/dp/B0FRZG38TW?tag=acky0113-22" target="_blank" rel="noopener noreferrer" className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-2 px-1 rounded text-center transition-colors">Amazon</a>
                <a href="https://a.r10.to/hP5chl" target="_blank" rel="noopener noreferrer" className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2 px-1 rounded text-center transition-colors">楽天</a>
              </div>
            </div>
          </div>
        </section>

        {/* お役立ち記事コーナー */}
        <section className="mb-12 mt-12">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            📝 レポートの書き方ガイド
          </h3>
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <Link href="/blog/citation-rules" className="block group">
              <h4 className="font-bold text-blue-600 group-hover:underline mb-2 text-base">
                【コピペOK】参考文献の書き方完全ガイド！URLや書籍のルールを実例で解説
              </h4>
              <p className="text-sm text-gray-500">
                本やWebサイトを引用するときの正しい書き方を知っていますか？コピペで使えるテンプレートと、NG例をまとめました。
              </p>
              <div className="mt-3 text-xs font-bold text-gray-400 flex items-center">
                記事を読む <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </div>
        </section>

        <SeoContent />

      </main>
      
      {/* フッター */}
      <footer className="max-w-4xl mx-auto px-4 mt-12 mb-8 text-center text-gray-400 text-sm">
        <div className="mb-2">
          <Link href="/privacy" className="hover:text-gray-600 transition-colors underline decoration-gray-300 underline-offset-4">
            プライバシーポリシー
          </Link>
        </div>
        <p>&copy; 2025 Acky</p>
      </footer>
    </div>
  );
}