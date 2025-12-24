import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: '【コピペOK】参考文献の書き方完全ガイド！URLや書籍のルールを実例で解説 | レポート文字数カウンター',
  description: 'レポートや卒論で必須の「参考文献」の書き方を解説。書籍、Webサイト、論文などケース別のテンプレートと、カンマやピリオドの正しい位置も網羅。',
};

export default function CitationRules() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* ヘッダー */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-bold text-gray-900 hover:opacity-70 transition-opacity flex items-center gap-2">
            <span>← ツールに戻る</span>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          
          <h1 className="text-2xl md:text-3xl font-black mb-6 leading-tight">
            【コピペOK】参考文献の書き方完全ガイド！<br className="hidden md:block" />URLや書籍のルールを実例で解説
          </h1>
          
          <div className="bg-blue-50 p-4 rounded-xl text-sm text-blue-800 mb-8 border border-blue-100">
            <strong>💡 この記事でわかること</strong>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>本・Webサイト・論文の正しい引用フォーマット</li>
              <li>「カンマ」と「ピリオド」の使い分け</li>
              <li>Wordでのぶら下げインデント設定方法</li>
            </ul>
          </div>

          {/* 本文エリア */}
          <div className="prose prose-blue max-w-none">
            
            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">1. 基本的な書き方のルール</h2>
            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              参考文献リストは、レポートの最後に「著者名の五十音順（アルファベット順）」で並べるのが基本ルールです。
              文系・理系や大学の指定によってスタイル（SIST02、APA、MLAなど）が異なりますが、ここでは日本の大学レポートで最も一般的な形式を紹介します。
            </p>

            <h3 className="text-lg font-bold mt-6 mb-3">書籍（本）の場合</h3>
            <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
              著者名『書籍タイトル』出版社, 出版年.
            </div>
            <p className="text-sm mb-2"><strong>例：</strong></p>
            <ul className="list-disc ml-5 text-sm mb-4 text-gray-600">
              <li>山田太郎『レポートの極意』東京大学出版会, 2024.</li>
              <li>Satoh, Hanako. <i>Academic Writing</i>. Oxford Press, 2023.</li>
            </ul>

            <h3 className="text-lg font-bold mt-6 mb-3">Webサイトの場合</h3>
            <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
              著者名（サイト名）「記事タイトル」URL (参照 年月日)
            </div>
            <p className="text-sm mb-2"><strong>例：</strong></p>
            <ul className="list-disc ml-5 text-sm mb-4 text-gray-600">
              <li>文部科学省「著作権法について」https://www.mext.go.jp/... (参照 2025年1月15日)</li>
              <li>Wikipedia「人工知能」https://ja.wikipedia.org/... (参照 2024年12月24日)</li>
            </ul>

            {/* アフィリエイト・ツール誘導 */}
            <div className="my-10 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white text-center shadow-lg">
              <p className="font-bold text-lg mb-2">😩 手入力が面倒くさいですか？</p>
              <p className="text-sm opacity-90 mb-4">当サイトのツールなら、URLを貼るだけで自動でフォーマットを作成できます。</p>
              <Link href="/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-md hover:bg-yellow-50 transition-colors">
                今すぐツールで自動作成する ⚡
              </Link>
            </div>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">2. よくあるNG例</h2>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2">
                <span className="text-red-500 font-bold">×</span>
                <span><strong>URLだけ貼る：</strong> リンク切れのリスクがあるため、必ず「タイトル」と「参照日」を併記しましょう。</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500 font-bold">×</span>
                <span><strong>リストの順番がバラバラ：</strong> 登場順ではなく、著者名の「あいうえお順」で並べるのが一般的です。</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500 font-bold">×</span>
                <span><strong>Wikipediaを多用する：</strong> 厳密な論文ではNGとされることが多いです。一次情報（政府の統計など）を探しましょう。</span>
              </li>
            </ul>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">3. レポート作成のおすすめアイテム</h2>
            <p className="mb-4 text-sm text-gray-600">
              参考文献の書き方で迷ったら、手元に一冊ガイド本があると安心です。特に以下の2冊は大学生の定番です。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="border rounded-xl p-4 flex flex-col items-center text-center">
                <h4 className="font-bold text-sm mb-2">論文の教室</h4>
                <a href="https://www.amazon.co.jp/dp/4140912723?tag=acky0113-22" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 underline hover:text-blue-800">
                  Amazonで見る ↗
                </a>
              </div>
              <div className="border rounded-xl p-4 flex flex-col items-center text-center">
                <h4 className="font-bold text-sm mb-2">コピペと言われないレポートの書き方</h4>
                <a href="https://www.amazon.co.jp/dp/B077RWQNKN?tag=acky0113-22" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 underline hover:text-blue-800">
                  Amazonで見る ↗
                </a>
              </div>
            </div>

          </div>
        </article>

        {/* 記事下のアクション */}
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