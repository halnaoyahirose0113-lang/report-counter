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

  const handleAutoFill = async () => {
    if (!refData.url) return;
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
      } catch (e) {}
      setIsAnalyzing(false);
    }, 600);
  };

  const handleGenerateRef = () => {
    const date = new Date();
    const today = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    const result = `${refData.author ? refData.author + '. ' : ''}『${refData.title}』. (参照 ${today}), ${refData.url}`;
    setGeneratedRef(result);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans pb-20">
      
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="ロゴ" className="w-8 h-8 rounded-lg object-cover" />
            <h1 className="text-base font-bold text-gray-900 sm:text-xl text-nowrap">レポート文字数カウンター</h1>
          </div>
          <nav className="flex items-center gap-3">
             <Link href="/blog/citation-rules" className="text-[10px] sm:text-sm font-bold text-blue-600 border border-blue-200 bg-blue-50 px-3 py-1.5 rounded-full">書き方ガイド</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 mt-4 space-y-6">
        
        {/* メインツール */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
          <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
            <div className="flex gap-2">
                <button onClick={handleCopyText} className="text-[10px] bg-white border border-gray-300 px-3 py-1 rounded font-bold shadow-sm">コピー</button>
                <button onClick={handleClearText} className="text-[10px] bg-white border border-gray-300 px-3 py-1 rounded text-gray-400">クリア</button>
            </div>
            <label className="flex items-center cursor-pointer">
              <span className="mr-2 text-[10px] font-bold text-gray-500 uppercase">参考文献を除外</span>
              <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" checked={excludeReferences} onChange={(e) => setExcludeReferences(e.target.checked)} />
            </label>
          </div>
          <textarea
            className="w-full h-[45vh] p-4 text-base leading-relaxed text-gray-700 focus:outline-none resize-none"
            placeholder="ここにレポートを入力してください..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div className="bg-blue-600 text-white px-4 py-4 grid grid-cols-3 gap-1 text-center sticky bottom-0 z-20 shadow-lg">
            <div><p className="text-[9px] font-bold opacity-80 uppercase tracking-widest">すべて</p><p className="text-2xl font-black tabular-nums">{stats.countWithSpaces}</p></div>
            <div className="border-l border-white/20"><p className="text-[9px] font-bold opacity-80 uppercase tracking-widest">空白なし</p><p className="text-2xl font-black text-yellow-300 tabular-nums">{stats.countWithoutSpaces}</p></div>
            <div className="border-l border-white/20"><p className="text-[9px] font-bold opacity-80 uppercase tracking-widest">行数</p><p className="text-2xl font-black tabular-nums">{stats.lines}</p></div>
          </div>
        </section>

        {/* 参考文献メーカー */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h2 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">📚 参考文献メーカー</h2>
          <div className="space-y-3">
            <div className="flex gap-2">
              <input type="text" placeholder="URLを貼って自動入力" className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm outline-none bg-blue-50/30" value={refData.url} onChange={(e) => setRefData({...refData, url: e.target.value})} />
              <button onClick={handleAutoFill} disabled={isAnalyzing} className="bg-blue-600 text-white text-[10px] font-bold px-4 py-2 rounded shadow-md">{isAnalyzing ? "解析中" : "⚡自動入力"}</button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="タイトル" className="border border-gray-300 rounded px-3 py-2 text-xs outline-none" value={refData.title} onChange={(e) => setRefData({...refData, title: e.target.value})} />
              <input type="text" placeholder="著者/サイト名" className="border border-gray-300 rounded px-3 py-2 text-xs outline-none" value={refData.author} onChange={(e) => setRefData({...refData, author: e.target.value})} />
            </div>
            <button onClick={handleGenerateRef} className="w-full bg-gray-800 text-white text-sm font-bold py-2.5 rounded">書式を作成</button>
          </div>
          {generatedRef && (
            <div className="mt-3 p-3 bg-gray-50 border border-dashed border-gray-300 rounded text-[11px] flex justify-between items-center">
              <code className="text-gray-700 truncate mr-4">{generatedRef}</code>
              <button onClick={() => navigator.clipboard.writeText(generatedRef)} className="text-blue-600 font-bold shrink-0">コピー</button>
            </div>
          )}
        </section>

        {/* 📖 神アイテムコーナー (書籍) */}
        <section className="mt-10">
          <h3 className="text-base font-bold text-gray-800 mb-5 flex items-center gap-2">
            📖 レポート作成に役立つ神アイテム
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <img src="https://images-na.ssl-images-amazon.com/images/P/4140912723.09.LZZZZZZZ.jpg" alt="最新版 論文の教室" className="w-16 h-24 object-cover mb-3 rounded" />
              <h4 className="font-bold text-gray-800 text-[11px] h-8 flex items-center">最新版 論文の教室</h4>
              <div className="flex w-full gap-1 mt-auto">
                <a href="https://www.amazon.co.jp/dp/4140912723?tag=acky0113-22" className="flex-1 bg-[#FF9900] text-white text-[8px] font-bold py-2 rounded-lg text-center">Amazon</a>
                <a href="https://a.r10.to/hkR3I2" className="flex-1 bg-[#BF0000] text-white text-[8px] font-bold py-2 rounded-lg text-center">楽天</a>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <img src="https://images-na.ssl-images-amazon.com/images/P/B077RWQNKN.09.LZZZZZZZ.jpg" alt="コピペと言われないレポート" className="w-16 h-24 object-cover mb-3 rounded" />
              <h4 className="font-bold text-gray-800 text-[11px] h-8 flex items-center">コピペと言われない書き方</h4>
              <div className="flex w-full gap-1 mt-auto">
                <a href="https://www.amazon.co.jp/dp/B077RWQNKN?tag=acky0113-22" className="flex-1 bg-[#FF9900] text-white text-[8px] font-bold py-2 rounded-lg text-center">Amazon</a>
                <a href="https://a.r10.to/h5fKiw" className="flex-1 bg-[#BF0000] text-white text-[8px] font-bold py-2 rounded-lg text-center">楽天</a>
              </div>
            </div>
          </div>
        </section>

        {/* 💻 ガジェットコーナー */}
        <section className="mt-10">
          <h3 className="text-base font-bold text-gray-800 mb-5 flex items-center gap-2">
            💻 執筆が爆速になる神ガジェット
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <img src="https://m.media-amazon.com/images/I/61SD-+LxQQL._AC_SX425_.jpg" alt="PCスタンド" className="w-16 h-16 object-contain mb-3 mt-4" />
              <h4 className="font-bold text-gray-800 text-[11px] h-8 flex items-center">BoYata PCスタンド</h4>
              <div className="flex w-full gap-1 mt-auto">
                <a href="https://www.amazon.co.jp/dp/B07H774Q42?tag=acky0113-22" className="flex-1 bg-[#FF9900] text-white text-[8px] font-bold py-2 rounded-lg text-center">Amazon</a>
                <a href="https://a.r10.to/h5n0fy" className="flex-1 bg-[#BF0000] text-white text-[8px] font-bold py-2 rounded-lg text-center">楽天</a>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <img src="https://m.media-amazon.com/images/I/61spsKphurL._AC_SX679_.jpg" alt="ブルーライトカットメガネ" className="w-16 h-16 object-contain mb-3 mt-4" />
              <h4 className="font-bold text-gray-800 text-[11px] h-8 flex items-center">ブルーライトカットメガネ</h4>
              <div className="flex w-full gap-1 mt-auto">
                <a href="https://www.amazon.co.jp/dp/B0FRZG38TW?tag=acky0113-22" className="flex-1 bg-[#FF9900] text-white text-[8px] font-bold py-2 rounded-lg text-center">Amazon</a>
                <a href="https://a.r10.to/hP5chl" className="flex-1 bg-[#BF0000] text-white text-[8px] font-bold py-2 rounded-lg text-center">楽天</a>
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

        {/* ブログ・SEO */}
        <section className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
          <Link href="/blog/citation-rules" className="group block">
            <h3 className="font-bold text-blue-600 group-hover:underline mb-1 text-sm">📝 参考文献の書き方完全ガイド</h3>
            <p className="text-[11px] text-gray-500">本やWebサイトを引用するときの正しい書き方を実例でわかりやすく解説。</p>
          </Link>
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