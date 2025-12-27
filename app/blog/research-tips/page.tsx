import Link from 'next/link';

export const metadata = {
  title: '【ネタ探し】「参考文献が見つからない！」を解決する、信頼できるネット検索術 | レポカン',
  description: '図書館に行かずにレポートを書きたい！Wikipedia禁止でも大丈夫な、信頼できる情報のネット検索テクニック（Google Scholar、CiNii、検索演算子）を解説します。',
};

export default function Page() {
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
          
          <h1 className="text-2xl md:text-3xl font-black mb-6 leading-tight">
            【ネタ探し】「参考文献が見つからない！」を解決する、<br className="hidden md:block" />信頼できるネット検索術
          </h1>
          
          <div className="bg-blue-50 p-4 rounded-xl text-sm text-blue-800 mb-8 border border-blue-100">
            <strong>💡 この記事でわかること</strong>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Wikipediaを「情報の入り口」として賢く使う裏技</li>
              <li>教授が唸る「PDF資料」だけを一発で探すコマンド</li>
              <li>Google Scholar と CiNii の実践的な使い方</li>
            </ul>
          </div>

          <div className="prose prose-blue max-w-none">
            
            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              レポート課題が出たとき、「図書館に行くのは面倒くさい…できれば部屋から一歩も出ずに、ネットだけで済ませたい」と思うことはありませんか？
              実は、ネット検索でもコツさえ掴めば、教授が納得する「信頼性の高い情報」は見つかります。コピペで使える検索テクニックを伝授します。
            </p>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">1. 検索キーワードに「魔法の言葉」を足す</h2>
            <p className="mb-4 text-sm text-gray-600">
              普段のGoogle検索に、特定のキーワードや記号（検索演算子）を足すだけで、検索結果がガラッとアカデミックになります。
            </p>

            <div className="space-y-4 mb-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700 mb-1">🔍 filetype:pdf</h4>
                    <p className="text-sm text-gray-700"><strong>例：「少子化対策 filetype:pdf」</strong></p>
                    <p className="text-xs text-gray-500 mt-1">これを入れると、PDFファイルだけがヒットします。PDF化されている文書は「論文」や「省庁の報告書」である確率が非常に高く、そのまま参考文献として使えます。</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700 mb-1">🔍 site:go.jp / site:ac.jp</h4>
                    <p className="text-sm text-gray-700"><strong>例：「AI倫理 site:ac.jp」</strong></p>
                    <p className="text-xs text-gray-500 mt-1">「go.jp（政府機関）」や「ac.jp（大学・研究機関）」のドメインに絞って検索します。怪しいまとめサイトを排除し、信頼できる統計データだけを探せます。</p>
                </div>
            </div>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">2. Wikipediaは「踏み台」にする</h2>
            <p className="mb-4 text-sm text-gray-600">
              多くの大学で「Wikipediaを参考文献にしてはいけない」と言われます。しかし、<strong>見ること自体は禁止ではありません。</strong>
            </p>
            <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm text-gray-700">
                <strong>💡 賢い使い方</strong><br/>
                Wikipediaのページの一番下にある<strong>「参考文献・脚注」</strong>のリストを見てください。<br/>
                そこにある書籍タイトルや、論文へのリンクは、そのままレポートの参考文献として使えるネタの宝庫です。「孫引き」にならないよう、必ず元のリンク先を確認してから使いましょう。
            </div>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">3. 論文検索エンジンをブックマークせよ</h2>
            <p className="mb-4 text-sm text-gray-600">
              普通のGoogle検索ではなく、論文専用の検索エンジンを使うのが大学生の常識です。
            </p>

            <h3 className="text-lg font-bold mt-6 mb-3">Google Scholar（グーグル・スカラー）</h3>
            <p className="mb-2 text-sm text-gray-600">
              世界中の論文が検索できます。「引用元」というリンクをクリックすると、その論文の引用情報（APA形式など）がすぐにコピーできるので便利です。
            </p>

            <h3 className="text-lg font-bold mt-6 mb-3">CiNii Research（サイニィ）</h3>
            <p className="mb-2 text-sm text-gray-600">
              日本の論文を探すならここが最強です。「本文あり」のフィルターをかければ、その場で読める論文だけを探せます。
            </p>

            {/* ツール誘導CTA */}
            <div className="my-10 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white text-center shadow-lg">
              <p className="font-bold text-lg mb-2">😩 URLや著者名の入力が面倒？</p>
              <p className="text-sm opacity-90 mb-4">見つけた良い記事のURLを、レポカンに貼り付けてください。<br/>面倒な「著者名」「タイトル」「参照日」を自動で整形します。</p>
              <Link href="/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-md hover:bg-yellow-50 transition-colors">
                参考文献リストを自動作成する ⚡
              </Link>
            </div>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">4. ネット検索だけで書く場合のリスク</h2>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2">
                <span className="text-red-500 font-bold">⚠️</span>
                <span><strong>リンク切れに注意：</strong> Webサイトはいつ消えるかわかりません。必ず「閲覧日（参照日）」を記録してください。</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500 font-bold">⚠️</span>
                <span><strong>個人のブログは避ける：</strong> 専門家であっても、個人のブログ記事は「査読（審査）」を経ていないため、参考文献としての強度は低いです。</span>
              </li>
            </ul>

          </div>
        </article>

        <div className="mt-8 text-center">
          <Link href="/" className="inline-flex items-center justify-center gap-2 text-blue-600 font-bold hover:underline">
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