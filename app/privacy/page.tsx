import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | レポカン',
  description: 'レポカンのプライバシーポリシー、個人情報の取り扱い、免責事項、著作権について。',
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <img src="/logo.jpg" alt="レポカンロゴ" className="w-8 h-8 rounded-lg object-cover border border-gray-100" />
            <span className="font-bold text-gray-900">レポカン</span>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-black mb-8 text-gray-900 border-b pb-4">プライバシーポリシー</h1>
        
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 space-y-10 text-sm leading-relaxed text-gray-700">
          
          {/* 前文 */}
          <section>
            <p>
              「レポカン」（以下、「当サイト」と記します）は、本ウェブサイト上で提供するサービス（以下、「本サービス」と記します）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」と記します）を定めます。
            </p>
          </section>

          {/* 第1条：入力データの取り扱い（最重要・信頼性担保） */}
          <section>
            <h2 className="text-lg font-bold mb-4 border-l-4 border-blue-600 pl-3 flex items-center gap-2">
              第1条（入力されたテキストデータの保護・非送信）
            </h2>
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
              <p className="font-bold text-blue-800 mb-2">⚠️ レポート等の入力データは外部へ送信されません</p>
              <p className="mb-2">
                当サイトの「文字数カウント機能」および「レポート執筆機能」において、ユーザーが入力フォーム等に入力したテキストデータ（レポート本文、参考文献情報等）は、**ユーザーのブラウザ内（ローカル環境 / LocalStorage）でのみ処理・一時保存されます。**
              </p>
              <p>
                これらのデータが当サイトのサーバー、または第三者のサーバーへ送信・保存されることは一切ありません。したがって、入力内容が外部に流出したり、運営者が内容を閲覧したりすることは技術的に不可能です。安心してご利用ください。
              </p>
            </div>
          </section>

          {/* 第2条：広告配信について（AdSense対策） */}
          <section>
            <h2 className="text-lg font-bold mb-4 border-l-4 border-blue-600 pl-3">第2条（広告の配信について）</h2>
            <p className="mb-4">
              当サイトでは、第三者配信の広告サービス（Google AdSense、Amazonアソシエイト、楽天アフィリエイト、A8.net）を利用して、ユーザーの興味に応じた商品やサービスの広告を表示しています。
            </p>
            <h3 className="font-bold text-gray-900 mb-2">Cookie（クッキー）の利用</h3>
            <p className="mb-4">
              広告配信事業者は、ユーザーの過去のアクセス情報に基づいて広告を配信するために、Cookie（氏名、住所、メールアドレス、電話番号は含まれません）を使用することがあります。
            </p>
            <h3 className="font-bold text-gray-900 mb-2">Google AdSenseについて</h3>
            <p className="mb-4">
              Googleなどの第三者配信事業者がCookieを使用して、ユーザーが当サイトや他のウェブサイトに過去にアクセスした際の情報に基づいて広告を配信します。<br/>
              ユーザーは、<a href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Googleの広告設定</a>でパーソナライズ広告を無効にできます。また、<a href="https://www.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.aboutads.info</a>にアクセスすることで、パーソナライズ広告に使われる第三者配信事業者のCookieを無効にできます。
            </p>
            <h3 className="font-bold text-gray-900 mb-2">Amazonアソシエイト・プログラム</h3>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-xs text-gray-600">
              <p>
                当サイト「レポカン」は、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
              </p>
            </div>
          </section>

          {/* 第3条：アクセス解析ツール */}
          <section>
            <h2 className="text-lg font-bold mb-4 border-l-4 border-blue-600 pl-3">第3条（アクセス解析ツールについて）</h2>
            <p className="mb-4">
              当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
            </p>
            <p>
              このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。<br/>
              この規約に関して、詳しくは<a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Googleアナリティクス利用規約</a>をご確認ください。
            </p>
          </section>

          {/* 第4条：免責事項 */}
          <section>
            <h2 className="text-lg font-bold mb-4 border-l-4 border-blue-600 pl-3">第4条（免責事項）</h2>
            <ul className="list-disc ml-5 space-y-2">
              <li>当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。</li>
              <li>当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。</li>
              <li>当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。</li>
            </ul>
          </section>

          {/* 第5条：著作権 */}
          <section>
            <h2 className="text-lg font-bold mb-4 border-l-4 border-blue-600 pl-3">第5条（著作権・リンク）</h2>
            <p className="mb-4">
              当サイトはリンクフリーですが、当サイトに掲載されている文章や画像等の無断転載・加工利用を禁止します。<br/>
              引用を行う際は、必ず引用元の明記（当サイトへのリンク掲載）をお願いいたします。
            </p>
            <p>
              当サイトは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、下記のお問い合わせフォームよりご連絡ください。迅速に対応いたします。
            </p>
          </section>

          {/* 第6条：お問い合わせ */}
          <section>
            <h2 className="text-lg font-bold mb-4 border-l-4 border-blue-600 pl-3">第6条（お問い合わせ窓口）</h2>
            <p>
              本ポリシーに関するお問い合わせは、下記のフォームよりお願いいたします。
            </p>
            <div className="mt-4 text-center">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeumYrx_6P4aHZZGPBHhvF-0F9iATjUw1baHombHHsj7G59Kw/viewform" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-blue-700 transition-colors">
                お問い合わせフォーム
              </a>
            </div>
          </section>

          {/* 改定日 */}
          <div className="pt-8 mt-12 border-t border-gray-200 text-right text-gray-500">
            <p>策定日：2025年12月29日</p>
          </div>

        </div>
        
        <div className="text-center mt-12">
          <Link href="/" className="inline-block bg-white border border-gray-300 px-6 py-2 rounded-full text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
            トップページに戻る
          </Link>
        </div>
      </main>

      <footer className="max-w-3xl mx-auto px-4 py-8 text-center text-gray-400 text-xs">
        <p>&copy; 2025 Acky</p>
      </footer>
    </div>
  );
}