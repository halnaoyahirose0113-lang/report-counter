import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【語彙力アップ】レポートが賢く見える！「思います」を卒業する言い換え・接続詞一覧 | レポカン',
  description: 'レポートで「〜と思います」ばかり使っていませんか？アカデミックな文章に見せるための言い換え言葉や、論理構成を強める接続詞を一覧で紹介します。',
};

export default function VocabularyListPage() {
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
             <Link href="/blog/report-structure" className="hidden sm:block text-[10px] sm:text-sm font-bold text-blue-600 border border-blue-200 bg-blue-50 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors">構成テンプレ</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          
          <h1 className="text-2xl md:text-3xl font-black mb-6 leading-tight text-gray-900">
            【語彙力アップ】レポートが賢く見える！<br className="hidden md:block" />「思います」を卒業する言い換え一覧
          </h1>
          
          <div className="bg-blue-50 p-4 rounded-xl text-sm text-blue-800 mb-8 border border-blue-100">
            <strong>💡 この記事でわかること</strong>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>「〜と思います」を使わずに意見を述べる方法</li>
              <li>「話し言葉」と「書き言葉」の決定的な違い</li>
              <li>論理的な文章を作る「接続詞」の正しい使い分け</li>
            </ul>
          </div>

          <div className="prose prose-blue max-w-none text-gray-600">
            
            <p className="mb-4 text-sm leading-relaxed">
              レポートを書いていると、「〜だと思います」「〜と考えます」ばかり続いてしまい、「なんだか小学生の作文みたいだな…」と不安になったことはありませんか？
              実は、大学のレポートには<strong>「アカデミック・ライティング」</strong>と呼ばれる独特のルールがあります。ここを少し変えるだけで、内容は同じでも、教授からの評価（グレード）がグッと上がります。
            </p>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8 text-gray-800">1. 文末の「〜と思います」徹底攻略</h2>
            <p className="mb-4 text-sm">
              レポートにおいて「思います」は、個人の感想（主観）と捉えられるため、原則として使いません。根拠の強さに応じて、以下の言葉に変換しましょう。
            </p>

            <h3 className="text-lg font-bold mt-6 mb-3 text-gray-800">根拠がある場合（推測・考察）</h3>
            <ul className="list-disc ml-5 text-sm mb-4 space-y-2">
              <li><strong>〜と推測される / 〜と推察される</strong><br/>データや資料から論理的に導き出される場合に使います。<br/><span className="text-xs text-gray-400">例：「このデータから、若者のテレビ離れが加速していると推測される。」</span></li>
              <li><strong>〜と考えられる / 〜と思料される</strong><br/>自分の意見を述べる際のスタンダードな表現です。<br/><span className="text-xs text-gray-400">例：「以上の点から、この政策は有効であると考えられる。」</span></li>
              <li><strong>〜を示唆している</strong><br/>実験結果や先行研究が、ある事実をほのめかしている場合に使います。<br/><span className="text-xs text-gray-400">例：「先行研究の結果は、睡眠不足が学習効率を下げることを示唆している。」</span></li>
            </ul>

            <h3 className="text-lg font-bold mt-6 mb-3 text-gray-800">断定できる場合</h3>
            <ul className="list-disc ml-5 text-sm mb-4 space-y-2">
              <li><strong>〜といえる / 〜と言えよう</strong><br/>強い根拠があり、結論づける時に使います。</li>
              <li><strong>〜である / 〜だ</strong><br/>事実を述べる時はシンプルに言い切ります。</li>
            </ul>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8 text-gray-800">2. 「話し言葉」を「書き言葉」に変換リスト</h2>
            <p className="mb-4 text-sm">
              無意識に使っているその言葉、実はレポートではNGかもしれません。以下の一覧表でチェックしてみましょう。
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border rounded-lg mb-6">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 border-b">話し言葉（NG）</th>
                    <th className="px-6 py-3 border-b">書き言葉（OK）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 font-medium text-red-500">〜だけど、〜でも</td>
                    <td className="px-6 py-4 font-bold text-blue-600">〜であるが、しかし</td>
                  </tr>
                  <tr className="bg-gray-50 border-b">
                    <td className="px-6 py-4 font-medium text-red-500">〜だから、〜なので</td>
                    <td className="px-6 py-4 font-bold text-blue-600">したがって、それゆえ</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 font-medium text-red-500">いろんな</td>
                    <td className="px-6 py-4 font-bold text-blue-600">様々な、多種多様な</td>
                  </tr>
                  <tr className="bg-gray-50 border-b">
                    <td className="px-6 py-4 font-medium text-red-500">すごく、とても</td>
                    <td className="px-6 py-4 font-bold text-blue-600">非常に、極めて</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 font-medium text-red-500">全然ない</td>
                    <td className="px-6 py-4 font-bold text-blue-600">全くない、皆無である</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8 text-gray-800">3. 文章を格上げする「接続詞」の使い分け</h2>
            <p className="mb-4 text-sm">
              文と文をつなぐ接続詞が適切だと、論理構成がしっかりしている印象を与えます。「また」「そして」ばかり使わず、バリエーションを持たせましょう。
            </p>

            <h3 className="text-lg font-bold mt-4 mb-2 text-gray-800">逆接（前の内容と対立させる）</h3>
            <ul className="list-disc ml-5 text-sm mb-4">
              <li><strong>しかしながら / もっとも</strong>（部分的な反論）</li>
              <li><strong>他方で / その一方で</strong>（別の視点を提示）</li>
              <li><strong>とはいえ</strong>（前の文を受けつつ、反論）</li>
            </ul>

            <h3 className="text-lg font-bold mt-4 mb-2 text-gray-800">因果関係（理由と結果をつなぐ）</h3>
            <ul className="list-disc ml-5 text-sm mb-4">
              <li><strong>したがって</strong>（論理的な帰結）</li>
              <li><strong>ゆえに</strong>（少し硬い表現、数学や哲学などで好まれる）</li>
              <li><strong>それゆえ / その結果</strong></li>
            </ul>

            {/* ツール誘導CTA */}
            <div className="my-10 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white text-center shadow-lg">
              <p className="font-bold text-lg mb-2">🤔 言い換えが思いつかない時は？</p>
              <p className="text-sm opacity-90 mb-4">レポカンには「神」言い換え辞典機能がついています。<br/>書きながらリアルタイムで参照できます。</p>
              <Link href="/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-md hover:bg-yellow-50 transition-colors">
                ツールを使って賢く書く ⚡
              </Link>
            </div>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8 text-gray-800">4. おすすめの参考書籍</h2>
            <p className="mb-4 text-sm">
              文章力は一生の財産です。この機会に一冊、文章術の本を手元に置いておくことを強くおすすめします。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="border rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-sm mb-2 text-gray-800">日本語の作文技術</h4>
                <img src="https://shop.r10s.jp/book/cabinet/0943/9784062130943.jpg" alt="日本語の作文技術" className="w-24 mb-3 shadow-sm" />
                <p className="text-[10px] text-gray-500 mb-2">40年以上読み継がれる、文章術の「神」本。</p>
                <div className="flex gap-2 w-full mt-auto">
                    <a href="https://www.amazon.co.jp/dp/B01MYXH4J1?tag=acky0113-22" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#FF9900] text-white text-xs font-bold py-2 rounded hover:opacity-80">Amazon</a>
                    <a href="https://a.r10.to/hkyzb7" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#BF0000] text-white text-xs font-bold py-2 rounded hover:opacity-80">楽天</a>
                </div>
              </div>
              <div className="border rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-sm mb-2 text-gray-800">文章力の基本</h4>
                <img src="https://m.media-amazon.com/images/I/71yy4VFh0SL._SY425_.jpg" alt="文章力の基本" className="w-24 mb-3 shadow-sm" />
                <p className="text-[10px] text-gray-500 mb-2">短期間で劇的に文章が直る、即効性のある一冊。</p>
                <div className="flex gap-2 w-full mt-auto">
                    <a href="https://www.amazon.co.jp/dp/4534045883?tag=acky0113-22" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#FF9900] text-white text-xs font-bold py-2 rounded hover:opacity-80">Amazon</a>
                    <a href="https://a.r10.to/hPkOlF" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#BF0000] text-white text-xs font-bold py-2 rounded hover:opacity-80">楽天</a>
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