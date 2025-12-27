import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-black text-gray-900">レポカン</Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-8 text-center">運営者情報</h1>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
          <section>
            <h2 className="text-lg font-bold mb-2 text-blue-600">運営者</h2>
            <p>Acky</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2 text-blue-600">サイトの目的</h2>
            <p className="leading-relaxed">
              「レポカン」は、レポート課題に追われる大学生を支援するために開発された、文字数カウント＆執筆支援ツールです。<br/><br/>
              単に文字数を数えるだけでなく、レポート作成のモチベーション維持や、構成のヒントを提供することで、学業の効率化に貢献することを目指しています。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2 text-blue-600">お問い合わせ</h2>
            <p className="leading-relaxed">
              当サイトに関するご意見、ご感想、不具合のご報告は、以下のフォームよりお願いいたします。<br/>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeumYrx_6P4aHZZGPBHhvF-0F9iATjUw1baHombHHsj7G59Kw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline font-bold hover:text-blue-700">
                お問い合わせフォーム
              </a>
            </p>
          </section>
        </div>
        
        <div className="text-center mt-12">
          <Link href="/" className="text-sm text-gray-500 hover:text-blue-600 underline">トップページに戻る</Link>
        </div>
      </main>
    </div>
  );
}