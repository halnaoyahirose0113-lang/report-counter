import Link from 'next/link';

export const metadata = {
  title: 'プライバシーポリシー | レポート文字数カウンター',
  description: 'レポカンのプライバシーポリシー、免責事項、著作権について。',
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <img src="/logo.jpg" alt="レポカンロゴ" className="w-8 h-8 rounded-lg object-cover" />
            <span className="font-bold text-gray-900">レポカン</span>
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-black mb-8 text-gray-900">プライバシーポリシー</h1>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-8 text-sm leading-relaxed">
          
          <section>
            <h2 className="text-base font-bold mb-3 border-l-4 border-blue-500 pl-3">広告の配信について</h2>
            <p className="mb-4">
              当サイトは、第三者配信の広告サービス（Googleアドセンス、Amazonアソシエイト、楽天アフィリエイト）を利用しています。
            </p>
            <p className="mb-4">
              広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookie（クッキー）を使用することがあります。
              これにより、当サイトや他サイトへのアクセスに関する情報（氏名、住所、メールアドレス、電話番号は含まれません）を使用することがあります。
            </p>
            <p>
              Googleアドセンスに関して、このプロセスの詳細やこのような情報が広告配信事業者に使用されないようにする方法については、
              <a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">Googleのポリシーと規約</a>をご覧ください。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold mb-3 border-l-4 border-blue-500 pl-3">アクセス解析ツールについて</h2>
            <p>
              当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。<br/>
              このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。<br/>
              この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold mb-3 border-l-4 border-blue-500 pl-3">免責事項</h2>
            <p className="mb-4">
              当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
            </p>
            <p>
              当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。<br/>
              当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold mb-3 border-l-4 border-blue-500 pl-3">著作権について</h2>
            <p>
              当サイトで掲載している文章や画像などにつきましては、無断転載することを禁止します。<br/>
              当サイトは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、お問い合わせフォームよりご連絡ください。迅速に対応いたします。
            </p>
          </section>

        </div>
        
        <div className="text-center mt-12">
          <Link href="/" className="text-sm text-gray-500 hover:text-blue-600 underline">トップページに戻る</Link>
        </div>
      </main>

      <footer className="max-w-3xl mx-auto px-4 py-8 text-center text-gray-400 text-xs">
        <p>&copy; 2025 Acky</p>
      </footer>
    </div>
  );
}