import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【注意】「コピペ」の境界線はどこ？剽窃（盗用）にならない正しい引用テクニック | レポカン',
  description: 'コピペレポートは一発でバレます。どこまでが参考で、どこからが盗作（剽窃）になるのか？大学で処分されないための正しい引用ルールと、言い換えのテクニックを解説。',
};

export default function PlagiarismRulesPage() {
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
          <h1 className="text-2xl md:text-3xl font-black mb-6 leading-tight">【注意】「コピペ」の境界線はどこ？<br/>剽窃（盗用）にならない引用テクニック</h1>
          
          <div className="bg-red-50 p-5 rounded-xl text-sm text-red-800 mb-8 border border-red-100">
            <strong>⚠️ この記事を読むべき人</strong>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>ネットの記事をコピペして語尾だけ変えようとしている人</li>
              <li>参考文献リストを書かずに提出しようとしている人</li>
              <li>「剽窃（ひょうせつ）」という言葉の意味を知らない人</li>
            </ul>
          </div>

          <div className="prose prose-blue max-w-none text-gray-600">
            <p className="mb-4 text-sm leading-relaxed">
              大学のレポートにおいて、<strong>他人の文章を勝手に使うこと（剽窃・盗用）は、カンニングと同じ「不正行為」</strong>とみなされます。
              最近は「コピペ判定ツール」が進化しており、ネット上の文章をコピーすると数秒でバレて、単位剥奪や停学処分になるケースもあります。
              しかし、正しく「引用」すれば、逆に評価は上がります。その境界線を解説します。
            </p>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8 text-gray-800">1. 完全アウト！やってはいけない「剽窃」の例</h2>
            <p className="mb-4 text-sm">以下の行為は一発アウトです。</p>
            <div className="bg-gray-100 p-5 rounded-lg text-sm mb-6 space-y-3 border-l-4 border-red-500">
              <p>❌ <strong>丸写し（Copy & Paste）</strong><br/>Webサイトや本の内容をそのまま貼り付けること。</p>
              <p>❌ <strong>パッチワーク（Patchwriting）</strong><br/>複数のサイトから文章を少しずつ持ってきて、つぎはぎして一つの文章を作ること。</p>
              <p>❌ <strong>無断借用</strong><br/>出典（誰が書いたか）を明記せずに、さも自分の意見のように書くこと。</p>
            </div>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8 text-gray-800">2. セーフ！正しい「引用」の3条件</h2>
            <p className="mb-4 text-sm">
              著作権法（第32条）でも認められている「正しい引用」にはルールがあります。これさえ守れば、他人の文章を使っても問題ありません。
            </p>
            <ol className="list-decimal ml-5 text-sm mb-4 space-y-3 font-bold text-gray-800">
              <li>
                <span className="text-blue-600">主従関係が明確であること</span>
                <p className="font-normal text-xs text-gray-600 mt-1">自分の意見がメイン（主）で、引用部分はあくまで補強材料（従）である必要があります。引用だけでレポートを埋めるのはNGです。</p>
              </li>
              <li>
                <span className="text-blue-600">引用部分を明確に区分すること</span>
                <p className="font-normal text-xs text-gray-600 mt-1">「ここからここまでが引用です」とわかるように、カギカッコ「」で括るか、段落を下げて記載します。</p>
              </li>
              <li>
                <span className="text-blue-600">出典を明記すること</span>
                <p className="font-normal text-xs text-gray-600 mt-1">著者名、タイトル、出版社、発行年などを必ず記載します（参考文献リスト）。</p>
              </li>
            </ol>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8 text-gray-800">3. 自分の言葉にする「パラフレーズ」の技術</h2>
            <p className="mb-4 text-sm">
              引用するほどではないけれど、内容を参考にしたい場合は、<strong>「パラフレーズ（言い換え）」</strong>を行います。
              単に語尾を変えるだけでは不十分です。
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-sm mb-4">
              <p className="font-bold text-blue-800 mb-2">良い言い換えのコツ</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>一度元の文章を読み、何も見ずに自分の言葉で要約する。</li>
                <li>「〜である」を「〜という特徴を持つ」など、構造ごと変える。</li>
                <li><strong>レポカンの「言い換え辞典」機能を使う。</strong></li>
              </ul>
            </div>

            {/* ツール誘導CTA */}
            <div className="my-10 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white text-center shadow-lg">
              <p className="font-bold text-lg mb-2">😓 参考文献リスト作るの面倒くさい？</p>
              <p className="text-sm opacity-90 mb-4">
                引用ルールは守りたいけど、手書きは面倒...<br/>
                レポカンなら、URLや書誌情報を入れるだけで自動作成できます。
              </p>
              <Link href="/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-md hover:bg-yellow-50 transition-colors">
                参考文献メーカーを使う（無料） ✨
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