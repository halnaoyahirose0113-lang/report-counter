'use client';

import Link from 'next/link';
import { Metadata } from 'next';

export default function CitationRules() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans pb-20">
      
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src="/logo.jpg" 
              alt="ロゴ" 
              className="w-8 h-8 rounded-lg object-cover shadow-sm border border-gray-100"
            />
            <span className="text-lg font-bold tracking-tight text-gray-900">
              レポート文字数カウンター
            </span>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        
        {/* 記事タイトルエリア */}
        <div className="mb-8">
            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded mb-2 inline-block">レポートの書き方</span>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                【コピペOK】参考文献の書き方完全ガイド！URLや書籍のルールを実例で解説
            </h1>
            <p className="text-gray-500 text-sm mt-2">最終更新日: 2025年12月25日</p>
        </div>

        {/* 記事本文 */}
        <article className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-100 leading-relaxed text-gray-700 space-y-8">
            
            {/* 導入 */}
            <p>
                「レポートの参考文献、どう書けばいいかわからない...」<br />
                「URLだけでいいの？著者は？」<br />
                そんな悩みを持つ大学生のために、<strong>コピペして使える参考文献の書き方テンプレート</strong>をまとめました。<br />
                正しく書かないと「盗用（コピペ）」とみなされて単位を落とす可能性もあるので、しっかり確認しましょう。
            </p>

            {/* 目次っぽいボックス */}
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <p className="font-bold text-gray-800 mb-2">この記事の内容</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-blue-600 underline cursor-pointer">
                    <li><a href="#book">1. 本（書籍）の書き方</a></li>
                    <li><a href="#web">2. Webサイト（URL）の書き方</a></li>
                    <li><a href="#tool">3. 面倒な作業を自動化する裏技</a></li>
                </ul>
            </div>

            {/* セクション1 */}
            <section id="book">
                <h2 className="text-xl font-bold text-gray-900 border-l-4 border-blue-500 pl-3 mb-4">1. 本（書籍）の書き方</h2>
                <p className="mb-4">
                    書籍を参考にした場合、以下の順序で書くのが一般的です。
                </p>
                <div className="bg-yellow-50 p-4 rounded border border-yellow-200 font-mono text-sm mb-4">
                    著者名『書籍のタイトル』, 出版社, 出版年.
                </div>
                <p className="font-bold mb-1">実例：</p>
                <p className="bg-gray-100 p-2 rounded text-sm">
                    山田 太郎『レポートの書き方入門』, 学術出版, 2024.
                </p>
            </section>

            {/* セクション2 */}
            <section id="web">
                <h2 className="text-xl font-bold text-gray-900 border-l-4 border-blue-500 pl-3 mb-4">2. Webサイト（URL）の書き方</h2>
                <p className="mb-4">
                    ネットの記事を参考にした場合、URLだけでなく「いつ見たか（参照日）」を書くのがルールです。
                </p>
                <div className="bg-yellow-50 p-4 rounded border border-yellow-200 font-mono text-sm mb-4">
                    著者名（またはサイト名）, "記事タイトル", URL (参照 年月日)
                </div>
                <p className="font-bold mb-1">実例：</p>
                <p className="bg-gray-100 p-2 rounded text-sm mb-4">
                    文部科学省, "著作権法について", https://www.mext.go.jp/ (参照 2025年12月25日)
                </p>
                <p className="text-sm text-red-600">
                    ※Wikipediaは信頼性が低いため、大学のレポートでは参考文献として認められないことが多いので注意しましょう。
                </p>
            </section>

            {/* セクション3（ツールへの誘導） */}
            <section id="tool" className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h2 className="text-lg font-bold text-blue-900 mb-2">3. 面倒な作業を自動化する裏技</h2>
                <p className="mb-4 text-sm">
                    「著者名を調べて、コンマを打って...」という作業、正直面倒くさいですよね。<br />
                    当サイトの<strong>「参考文献メーカー」</strong>を使えば、タイトルやURLを入力するだけで、正しい形式を自動生成できます。
                </p>
                
                <div className="text-center mt-6">
                    <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition-transform hover:scale-105">
                        👉 今すぐツールを使って作成する
                    </Link>
                    <p className="text-xs text-gray-500 mt-2">※完全無料で登録不要です</p>
                </div>
            </section>

        </article>
      </main>

      <footer className="max-w-4xl mx-auto px-4 mt-12 mb-8 text-center text-gray-400 text-sm">
        <Link href="/" className="hover:text-gray-600">トップページに戻る</Link>
        <p className="mt-4">&copy; 2025 Acky</p>
      </footer>
    </div>
  );
}