import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【論理構成】説得力が3倍になる「PREP法」とは？レポートでの使い道を解説 | レポカン',
  description: '「何を言いたいのか分からない」と言われないために。結論から書く文章の型「PREP法」をマスターして、説得力のあるレポートを書く方法。例文付きで解説。',
};

export default function PrepMethodPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <img src="/logo.jpg" alt="レポカンロゴ" className="w-9 h-9 rounded-xl object-cover shadow-sm border border-gray-100" />
            <span className="font-bold text-gray-900">レポカン</span>
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-2xl md:text-3xl font-black mb-6 leading-tight">【論理構成】説得力が3倍になる<br/>「PREP法」とは？</h1>
          
          <div className="bg-blue-50 p-5 rounded-xl text-sm text-blue-800 mb-8 border border-blue-100 leading-relaxed">
            <strong>💡 この記事でわかること</strong>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>教授が一発で理解できる「結論ファースト」の書き方</li>
              <li>PREP法を使った具体的なレポート例文</li>
              <li>文字数が足りない時に「理由」と「事例」で膨らませるコツ</li>
            </ul>
          </div>

          <div className="prose prose-blue max-w-none text-gray-600">
            <p className="mb-4 text-sm leading-relaxed">
              レポートを提出した後に「で、結局何が言いたいの？」と言われたことはありませんか？
              それは、あなたの頭が悪いからではありません。<strong>「伝える順番」が間違っているだけ</strong>です。
              ビジネスの世界でも標準とされる文章の型、<strong>「PREP（プレップ）法」</strong>を使えば、誰でも論理的な文章が書けるようになります。
            </p>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8 text-gray-800">1. PREP法の基本構造</h2>
            <p className="mb-4 text-sm">PREP法とは、以下の4つの頭文字を取った文章構成のテンプレートです。</p>
            <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 mb-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white font-black px-3 py-1 rounded text-lg">P</span>
                <div>
                  <p className="font-bold text-gray-900">Point（結論・主張）</p>
                  <p className="text-xs text-gray-600">「私は〜と考える。」「結論から言うと〜だ。」</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-500 text-white font-black px-3 py-1 rounded text-lg">R</span>
                <div>
                  <p className="font-bold text-gray-900">Reason（理由）</p>
                  <p className="text-xs text-gray-600">「なぜなら〜だからだ。」「その理由は〜点ある。」</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-400 text-white font-black px-3 py-1 rounded text-lg">E</span>
                <div>
                  <p className="font-bold text-gray-900">Example（具体例・データ）</p>
                  <p className="text-xs text-gray-600">「例えば〜。」「事実、〇〇というデータがある。」</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white font-black px-3 py-1 rounded text-lg">P</span>
                <div>
                  <p className="font-bold text-gray-900">Point（再結論）</p>
                  <p className="text-xs text-gray-600">「したがって、〜と結論づける。」</p>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8 text-gray-800">2. 【比較】悪い例 vs 良い例</h2>
            <p className="mb-4 text-sm">「オンライン授業の是非」というテーマで比較してみましょう。</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="border border-red-200 bg-red-50 p-4 rounded-lg">
                <p className="font-bold text-red-600 mb-2 text-sm">❌ 悪い例（ダラダラ型）</p>
                <p className="text-xs leading-relaxed text-gray-700">
                  最近はコロナの影響でオンライン授業が増えています。対面授業だと通学にお金がかかるし、満員電車も疲れます。でも友達に会えないのは寂しいです。一方で、オンラインなら家で時間を使えます。だから、私はオンライン授業も悪くないと思います。
                </p>
                <p className="mt-2 text-[10px] text-red-500 font-bold">👉 感想文に見える。結論が最後に来るので要点が掴みにくい。</p>
              </div>
              <div className="border border-blue-200 bg-blue-50 p-4 rounded-lg">
                <p className="font-bold text-blue-600 mb-2 text-sm">⭕️ 良い例（PREP型）</p>
                <p className="text-xs leading-relaxed text-gray-700">
                  <strong>(P)</strong> 私は、大学の講義を原則オンライン化すべきだと考える。<br/>
                  <strong>(R)</strong> 最大の理由は、通学時間を学習や研究活動に充てられるからだ。<br/>
                  <strong>(E)</strong> 実際、片道1時間の通学がなくなれば、年間で約400時間の余剰時間が生まれる。これは資格取得の学習には十分な時間だ。<br/>
                  <strong>(P)</strong> したがって、学生の本分である学習時間の確保という観点から、オンライン授業を推奨する。
                </p>
                <p className="mt-2 text-[10px] text-blue-500 font-bold">👉 論理的で説得力がある。</p>
              </div>
            </div>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8 text-gray-800">3. 文字数が足りない時は「E」を膨らませろ</h2>
            <p className="mb-4 text-sm">
              PREP法は文字数稼ぎにも有効です。特に3番目の<strong>「Example（具体例）」</strong>は、いくらでも詳しく書けます。
            </p>
            <ul className="list-disc ml-5 text-sm mb-4 space-y-2">
              <li>公的機関の統計データを引用する</li>
              <li>過去の歴史的な事例と比較する</li>
              <li>反対意見（反証）を挙げて、それを論破する形をとる</li>
            </ul>
            <p className="text-sm">
              自分の意見（P）や理由（R）を何度も繰り返すとしつこいですが、客観的な事実（E）はどれだけ積み上げても「詳しいレポート」として評価されます。
            </p>

            {/* ツール誘導CTA */}
            <div className="my-10 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white text-center shadow-lg">
              <p className="font-bold text-lg mb-2">⚡ 構成ができたら、一気に書く！</p>
              <p className="text-sm opacity-90 mb-4">
                PREPの型が決まれば、あとはタイピングするだけ。<br/>
                レポカンなら、文字数を確認しながらサクサク執筆できます。
              </p>
              <Link href="/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-md hover:bg-yellow-50 transition-colors">
                ツールを使ってみる ✨
              </Link>
            </div>

          </div>
        </article>
        <div className="mt-8 text-center"><Link href="/" className="text-blue-600 font-bold hover:underline">← トップへ戻る</Link></div>
      </main>
      <footer className="max-w-3xl mx-auto px-4 py-8 text-center text-gray-400 text-xs"><p>&copy; 2025 Acky</p></footer>
    </div>
  );
}