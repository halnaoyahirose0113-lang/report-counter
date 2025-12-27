import Link from 'next/link';

export const metadata = {
  title: '【テンプレあり】レポート構成の基本！序論・本論・結論の書き方を完全解説 | レポート文字数カウンター',
  description: 'レポートの構成が決まらない大学生必見。「序論・本論・結論」の黄金比率や、各パートに何を書くべきかをテンプレート付きで解説します。',
};

export default function ReportStructure() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* ヘッダー（統一デザイン） */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <img src="/logo.jpg" alt="レポカンロゴ" className="w-9 h-9 rounded-xl object-cover shadow-sm border border-gray-100" />
            <div className="flex flex-col justify-center">
                <h1 className="text-xl font-black tracking-tight leading-none text-gray-900">レポカン</h1>
                <span className="text-[9px] font-bold text-gray-500">レポート文字数カウンター</span>
            </div>
          </Link>
          <nav className="flex items-center gap-3">
             <Link href="/blog/report-structure" className="hidden sm:block text-[10px] sm:text-sm font-bold text-blue-600 border border-blue-200 bg-blue-50 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors">構成テンプレ</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          
          <h1 className="text-2xl md:text-3xl font-black mb-6 leading-tight">
            【テンプレあり】レポート構成の基本！<br className="hidden md:block" />「序論・本論・結論」の書き方を完全解説
          </h1>
          
          <div className="bg-green-50 p-4 rounded-xl text-sm text-green-800 mb-8 border border-green-100">
            <strong>✅ この記事でわかること</strong>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>レポートの黄金比率は「1:8:1」</li>
              <li>「序論」には問いを書く</li>
              <li>「結論」には答えと今後の課題を書く</li>
            </ul>
          </div>

          <div className="prose prose-blue max-w-none">
            
            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">1. レポートの基本構成は3部構成</h2>
            <p className="text-sm text-gray-600 mb-4">
              大学のレポートは、感想文とは違います。必ず以下の3つのパートに分けて書くのがルールです。
            </p>
            <div className="bg-gray-100 p-5 rounded-xl font-bold text-center text-sm mb-6">
              <span className="text-blue-600">序論 (Introduction)</span><br/>
              ⬇<br/>
              <span className="text-blue-600">本論 (Body)</span><br/>
              ⬇<br/>
              <span className="text-blue-600">結論 (Conclusion)</span>
            </div>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">2. 各パートの書き方テンプレート</h2>

            <h3 className="text-lg font-bold mt-6 mb-3">① 序論（全体の約10%）</h3>
            <p className="text-sm text-gray-600 mb-4">
              これから何について論じるのか、「問い」を立てます。<br/>
              <strong>書き出し例：</strong>「本レポートでは、〇〇の問題について、△△の観点から考察する。」
            </p>

            <h3 className="text-lg font-bold mt-6 mb-3">② 本論（全体の約80%）</h3>
            <p className="text-sm text-gray-600 mb-4">
              具体的なデータ、引用、自分の考察を展開するメインパートです。長くなる場合は章を分けましょう。<br/>
              ここで「言い換え」を使って表現を豊かにするのがポイントです。
            </p>
            
            {/* 言い換えツール誘導 */}
            <div className="my-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
              <p className="text-xs font-bold text-yellow-800 mb-2">文章が単調になっていませんか？</p>
              <Link href="/" className="text-xs bg-yellow-500 text-white px-4 py-2 rounded-full font-bold shadow-sm hover:bg-yellow-600">
                便利ツールで「言い換え」を探す 🚀
              </Link>
            </div>

            <h3 className="text-lg font-bold mt-6 mb-3">③ 結論（全体の約10%）</h3>
            <p className="text-sm text-gray-600 mb-4">
              序論で立てた「問い」に対する「答え」を簡潔に書きます。新しい情報はここには書きません。<br/>
              <strong>締めくくり例：</strong>「以上の考察から、〇〇であると結論付けられる。しかし、△△については今後の課題である。」
            </p>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">3. 文字数配分の目安</h2>
            <p className="text-sm text-gray-600 mb-4">
              例えば「2000文字」のレポートなら、以下のような配分が理想的です。
            </p>
            <ul className="list-disc ml-5 text-sm text-gray-600 mb-6">
              <li><strong>序論：</strong> 200〜300文字</li>
              <li><strong>本論：</strong> 1400〜1600文字</li>
              <li><strong>結論：</strong> 200〜300文字</li>
            </ul>
            <p className="text-sm text-gray-600">
              書きながら文字数を確認するのは大変なので、当サイトのカウンターを使ってペース配分を確認しましょう。
            </p>

            {/* 書籍アフィリエイト */}
            <div className="mt-10 p-6 border-t border-gray-200">
              <p className="text-sm font-bold mb-4 text-center">構成作りに役立つ神アイテム</p>
              <div className="flex justify-center">
                 <div className="w-48 text-center border p-4 rounded-xl shadow-sm">
                    <img src="https://images-na.ssl-images-amazon.com/images/P/4140912723.09.LZZZZZZZ.jpg" alt="論文の教室" className="w-20 mx-auto mb-3 shadow-md" />
                    <p className="text-xs font-bold mb-2">論文の教室</p>
                    <div className="flex gap-1 justify-center">
                      <a href="https://www.amazon.co.jp/dp/4140912723?tag=acky0113-22" target="_blank" rel="noopener noreferrer" className="bg-[#FF9900] text-white text-[10px] px-3 py-1.5 rounded font-bold hover:opacity-80">Amazon</a>
                      <a href="https://a.r10.to/hkyzb7" target="_blank" rel="noopener noreferrer" className="bg-[#BF0000] text-white text-[10px] px-3 py-1.5 rounded font-bold hover:opacity-80">楽天</a>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </article>

        <div className="mt-8 text-center">
          <Link href="/" className="inline-flex items-center justify-center gap-2 text-blue-600 font-bold hover:underline">
            <span>← ツールで文字数を測る</span>
          </Link>
        </div>

      </main>

      <footer className="max-w-3xl mx-auto px-4 py-8 text-center text-gray-400 text-xs">
        <p>&copy; 2025 Acky</p>
      </footer>
    </div>
  );
}