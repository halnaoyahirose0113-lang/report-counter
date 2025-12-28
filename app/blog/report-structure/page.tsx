import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【テンプレあり】レポート構成の基本！序論・本論・結論の書き方を完全解説 | レポカン',
  description: '「序論・本論・結論」に何を書けばいいかわからない大学生へ。レポートの黄金比率や、各パートの役割、そのまま使える書き出しのテンプレートを紹介します。',
};

export default function ReportStructurePage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* ヘッダー */}
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
             <Link href="/blog/vocabulary-list" className="hidden sm:block text-[10px] sm:text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">語彙力アップ</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          
          <h1 className="text-2xl md:text-3xl font-black mb-6 leading-tight text-gray-900">
            【テンプレあり】レポート構成の基本！<br className="hidden md:block" />序論・本論・結論の書き方を完全解説
          </h1>
          
          <div className="bg-green-50 p-4 rounded-xl text-sm text-green-800 mb-8 border border-green-100">
            <strong>💡 この記事でわかること</strong>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>レポート評価が上がる「黄金比率」とは？</li>
              <li>「序論」で絶対に書くべき3つの要素</li>
              <li>「本論」を論理的に展開するコツ</li>
              <li>「結論」でやってはいけないNG行動</li>
            </ul>
          </div>

          <div className="prose prose-blue max-w-none text-gray-600">
            
            <p className="mb-4 text-sm leading-relaxed">
              「レポートの書き出しがわからない」「本論で書くことがなくなった…」
              そんな悩みの原因は、すべて<strong>「構成（プロット）」</strong>を作っていないことにあります。
              いきなり書き始めるのではなく、まずは設計図を作りましょう。これだけでレポートの作成時間は半分になります。
            </p>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8 text-gray-800">1. レポートの黄金比率は「1 : 8 : 1」</h2>
            <p className="mb-4 text-sm">
              一般的な大学のレポートは、以下の3部構成で成り立っています。文字数の配分も決まっています。
            </p>

            <div className="my-6 bg-gray-100 p-4 rounded-lg border border-gray-200 text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <div className="bg-blue-200 text-blue-800 px-3 py-1 rounded font-bold text-xs w-1/5">序論 (10%)</div>
                <div className="bg-blue-500 text-white px-3 py-1 rounded font-bold text-xs w-3/5">本論 (80%)</div>
                <div className="bg-blue-200 text-blue-800 px-3 py-1 rounded font-bold text-xs w-1/5">結論 (10%)</div>
              </div>
              <p className="text-xs text-gray-500">例：2000字レポートなら、序論200字・本論1600字・結論200字</p>
            </div>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8 text-gray-800">2. 【序論】これから何について書くか（問い）</h2>
            <p className="mb-4 text-sm">
              序論（Introduction）は、読者（教授）への招待状です。「このレポートでは何を明らかにするのか」を宣言します。以下の3つを必ず盛り込みましょう。
            </p>
            
            <ul className="list-disc ml-5 text-sm mb-4 space-y-2">
              <li><strong>背景：</strong>なぜこのテーマを選んだのか？（社会情勢や関心事）</li>
              <li><strong>目的（問い）：</strong>このレポートで何を明らかにしたいのか？</li>
              <li><strong>方法：</strong>どのように調査・考察を進めるのか？</li>
            </ul>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm">
              <p className="font-bold text-gray-700 mb-2">📝 序論のテンプレ</p>
              <p className="italic text-gray-600">
                「近年、〇〇に関する問題が注目されている。（背景）<br/>
                しかし、その具体的な影響については議論が分かれている。<br/>
                そこで本レポートでは、〇〇が△△に与える影響について考察することを目的とする。（目的）<br/>
                具体的には、××の事例と比較しながら論を進める。（方法）」
              </p>
            </div>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8 text-gray-800">3. 【本論】事実と考察を展開する（答えの根拠）</h2>
            <p className="mb-4 text-sm">
              本論（Body）はレポートのメインディッシュです。序論で立てた「問い」に対する「答え」を導き出すために、客観的な事実やデータを並べます。
            </p>
            <p className="mb-4 text-sm">
              ポイントは<strong>「事実」と「考察（意見）」を分けること</strong>です。
            </p>
            <ul className="list-disc ml-5 text-sm mb-4 space-y-2">
              <li><strong>事実：</strong>本や論文、データから引用した客観的な情報。「〜によると〜である」</li>
              <li><strong>考察：</strong>事実をもとにした自分の考え。「〜であることから、〜と考えられる」</li>
            </ul>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8 text-gray-800">4. 【結論】序論の答え合わせ（まとめ）</h2>
            <p className="mb-4 text-sm">
              結論（Conclusion）では、新しい話をしてはいけません。あくまで「まとめ」です。
            </p>
            <ul className="list-disc ml-5 text-sm mb-4 space-y-2">
              <li><strong>要約：</strong>本論で明らかになったことを短くまとめる。</li>
              <li><strong>答え：</strong>序論の「問い」に対する最終的な答えを提示する。</li>
              <li><strong>今後の課題：</strong>今回わからなかったことや、今後さらに調査すべきことを書く。</li>
            </ul>

             {/* ツール誘導CTA */}
            <div className="my-10 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white text-center shadow-lg">
              <p className="font-bold text-lg mb-2">⚡ 構成が決まったら書き始めよう！</p>
              <p className="text-sm opacity-90 mb-4">
                レポカンなら、「序論・本論・結論」の割合を意識しながら文字数をカウントできます。<br/>
                自動保存機能付きで、急なPCフリーズも怖くありません。
              </p>
              <Link href="/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-md hover:bg-yellow-50 transition-colors">
                今すぐレポートを書く ✍️
              </Link>
            </div>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8 text-gray-800">5. おすすめの参考書籍</h2>
            <p className="mb-4 text-sm">
              「型」を身につければ、レポートはパズルのように簡単になります。以下の本は、大学4年間ずっと使える「構成力」を鍛えてくれます。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="border rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-sm mb-2 text-gray-800">レポートの組み立て方</h4>
                <img src="https://shop.r10s.jp/book/cabinet/1216/9784480081216.jpg" alt="レポートの組み立て方" className="w-24 mb-3 shadow-sm" />
                <p className="text-[10px] text-gray-500 mb-2">構成に悩む時間をゼロにする、論理的思考の入門書。</p>
                <div className="flex gap-2 w-full mt-auto">
                    <a href="https://www.amazon.co.jp/dp/B00E5XAXQ4?tag=acky0113-22" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#FF9900] text-white text-xs font-bold py-2 rounded hover:opacity-80">Amazon</a>
                    <a href="https://a.r10.to/h5e9On" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#BF0000] text-white text-xs font-bold py-2 rounded hover:opacity-80">楽天</a>
                </div>
              </div>
              <div className="border rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-sm mb-2 text-gray-800">最新版 論文の教室</h4>
                <img src="https://images-na.ssl-images-amazon.com/images/P/4140912723.09.LZZZZZZZ.jpg" alt="論文の教室" className="w-24 mb-3 shadow-sm" />
                <p className="text-[10px] text-gray-500 mb-2">ユーモアたっぷりで読みやすい、レポート書き方のバイブル。</p>
                <div className="flex gap-2 w-full mt-auto">
                    <a href="https://www.amazon.co.jp/dp/4140912723?tag=acky0113-22" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#FF9900] text-white text-xs font-bold py-2 rounded hover:opacity-80">Amazon</a>
                    <a href="https://a.r10.to/hkRCci" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#BF0000] text-white text-xs font-bold py-2 rounded hover:opacity-80">楽天</a>
                </div>
              </div>
            </div>

          </div>
        </article>

        <div className="mt-8 text-center">
          <Link href="/" className="inline-flex items-center justify-center gap-2 text-blue-600 font-bold hover:underline transition-colors">
            <span>← 文字数カウンタートップへ戻る</span>
          </Link>
        </div>

      </main>

      <footer className="max-w-3xl mx-auto px-4 py-8 text-center text-gray-400 text-xs">
        <p>&copy; 2025 Acky</p>
      </footer>
    </div>
  );
}