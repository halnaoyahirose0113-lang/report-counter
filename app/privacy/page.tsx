'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* ヘッダー（トップページとデザイン統一） */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img 
              src="/logo.jpg" 
              alt="レポカンロゴ" 
              className="w-9 h-9 rounded-xl object-cover shadow-sm border border-gray-100"
            />
            <div className="flex flex-col justify-center">
                <span className="text-xl font-black text-gray-900 tracking-tight leading-none">レポカン</span>
                <span className="text-[9px] text-gray-500 font-bold">レポート文字数カウンター</span>
            </div>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-8 text-gray-900 border-b pb-4">プライバシーポリシー</h1>

        <div className="space-y-8 text-sm leading-relaxed text-gray-700 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-3">1. 広告の配信について</h2>
            <p className="mb-2">
              当サイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
            </p>
            <p>
              第三者がコンテンツおよび宣伝を提供し、訪問者から直接情報を収集し、訪問者のブラウザにCookie（クッキー）を設定したりこれを認識したりする場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-3">2. アクセス解析ツールについて</h2>
            <p>
              当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
              このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
              この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-3">3. 免責事項</h2>
            <p>
              当サイトの文字数カウント機能や参考文献作成機能の正確性については万全を期しておりますが、その正確性や完全性を保証するものではありません。
              当サイトの利用によって生じた、いかなるトラブル・損害（レポートの評価への影響等を含む）についても、当方は一切の責任を負いかねますのでご了承ください。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-3">4. 著作権について</h2>
            <p>
              当サイトに掲載されている文章・画像・プログラム等の著作権は運営者に帰属します。
              法的に認められている引用の範囲を超えて、無断で転載・複製することを禁止します。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-3">5. 運営者情報</h2>
            <p>
              運営者：Acky<br />
              お問い合わせ：Instagram (@acky0_113) のDMまでお願いいたします。
            </p>
          </section>

          <div className="pt-6 mt-6 border-t border-gray-100 text-center">
             <Link href="/" className="text-blue-600 hover:underline font-bold">
               ← トップページに戻る
             </Link>
          </div>

        </div>
      </main>

      <footer className="max-w-4xl mx-auto px-4 mt-12 mb-8 text-center text-gray-400 text-sm">
        <p>&copy; 2025 Acky</p>
      </footer>
    </div>
  );
}