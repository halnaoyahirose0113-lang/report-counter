'use client';

import { useState, useMemo, useEffect } from 'react';

export default function Home() {
  // --- 状態管理 (State) ---
  const [text, setText] = useState('');
  const [excludeReferences, setExcludeReferences] = useState(false);
  const [refData, setRefData] = useState({ title: '', author: '', url: '' });
  const [generatedRef, setGeneratedRef] = useState('');
  const [isSaved, setIsSaved] = useState(false); // 保存状態のインジケーター

  // --- 機能: 自動保存 (LocalStorage) ---
  // 1. 初回ロード時: 保存されたデータがあれば復元
  useEffect(() => {
    const savedText = localStorage.getItem('report-text');
    if (savedText) {
      setText(savedText);
    }
  }, []);

  // 2. テキスト変更時: LocalStorageに保存
  useEffect(() => {
    // タイマーを使って保存頻度を調整（デバウンス的な役割）も可能ですが、
    // 今回はリアルタイム性を重視して即時保存します
    if (text) {
      localStorage.setItem('report-text', text);
      setIsSaved(true);
      const timer = setTimeout(() => setIsSaved(false), 2000); // 2秒後に表示を消す
      return () => clearTimeout(timer);
    }
  }, [text]);

  // --- 機能: コピー & クリア ---
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

  // --- ロジック: 文字数カウント ---
  const stats = useMemo(() => {
    let processedText = text;

    if (excludeReferences) {
      const splitRegex = /\n(参考文献|References|引用文献)/i;
      const parts = processedText.split(splitRegex);
      if (parts.length > 1) {
        processedText = parts[0]; 
      }
      processedText = processedText.replace(/\[\d+\]/g, '');
    }

    const countWithSpaces = processedText.length;
    const countWithoutSpaces = processedText.replace(/\s/g, '').length;
    const lines = processedText ? processedText.split(/\r\n|\r|\n/).length : 0;

    return { countWithSpaces, countWithoutSpaces, lines };
  }, [text, excludeReferences]);

  // --- ロジック: 参考文献ジェネレーター ---
  const handleGenerateRef = () => {
    const date = new Date();
    const today = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    const result = `${refData.author ? refData.author + '. ' : ''}『${refData.title}』. (参照 ${today}), ${refData.url}`;
    setGeneratedRef(result);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans pb-20">
      
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            <h1 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
              レポート文字数カウンター
            </h1>
          </div>
          {/* 保存ステータス表示 */}
          <div className={`text-xs font-medium transition-opacity duration-500 ${isSaved ? 'text-green-600 opacity-100' : 'opacity-0'}`}>
            ✓ 自動保存しました
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 mt-6 space-y-6">
        
        {/* メイン機能エリア */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
          
          {/* コントロールバー */}
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

          {/* カウント結果バー (Fixed Bottom on Mobile usually, but here sticky inside component) */}
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

        {/* 広告エリア */}
        <div className="w-full py-8 bg-gray-100 rounded-lg border border-gray-200 border-dashed flex flex-col items-center justify-center text-gray-400 gap-2">
            <span className="text-xs font-medium">スポンサーリンク</span>
            <div className="w-64 h-12 bg-gray-200 rounded animate-pulse"></div>
        </div>

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

      </main>
    </div>
  );
}



# まだコミットしていない変更（自動保存機能など）をステージング
git add .

# コミットメッセージを作成
git commit -m "Add auto-save and copy feature"

# リポジトリのブランチ名を main に変更（念のため）
git branch -M main

# リモートリポジトリを登録（GitHubの画面に表示されているURLをコピペ）
git remote add origin https://github.com/halnaoyahirose0113-lang/report-counter.git
# GitHubにプッシュ
git push -u origin main