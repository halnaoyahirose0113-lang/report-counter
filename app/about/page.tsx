import Link from 'next/link';

export const metadata = {
  title: '運営者情報 - 開発ストーリーと技術スタック | レポート文字数カウンター',
  description: 'レポカンの開発経緯、使用技術（Tech Stack）、運営者Ackyのプロフィールについて。',
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-800 font-sans pb-20">
      
      {/* ヘッダー（app/page.tsxと統一） */}
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

      <main className="max-w-2xl mx-auto px-4 py-12 space-y-16">
        
        {/* 1. ヒーローセクション（運営者） */}
        <section className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
            <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center text-6xl shadow-xl border-4 border-white">
              👨‍💻
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Acky</h1>
            <p className="text-sm font-bold text-blue-600 mt-2 tracking-widest uppercase">Developer / Student</p>
            <p className="text-base text-gray-500 mt-4 max-w-md mx-auto leading-relaxed">
              「不便を技術でハックする」がモットーの現役大学生エンジニア。<br/>
              単位とバグと戦いながら、Webサービスを開発しています。
            </p>
          </div>
          
          {/* SNSリンク */}
          <div className="flex justify-center gap-4">
            <a 
              href="https://www.instagram.com/acky0_113?igsh=MTFtcXcxdGc2eW93ZA%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full font-bold text-sm hover:border-pink-300 hover:shadow-lg hover:shadow-pink-100 transition-all duration-300"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] group-hover:opacity-80">
                Instagram
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#dc2743]">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </section>

        {/* 2. 開発ストーリー（深掘りポイント） */}
        <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">💡</span>
            <h2 className="text-xl font-bold text-gray-900">開発のきっかけ</h2>
          </div>
          <div className="space-y-4 text-sm leading-7 text-gray-600">
            <p>
              <strong>「あと何文字書けばいいんだ…？」</strong>
            </p>
            <p>
              大学の図書館でレポート課題と格闘していた時、ふと思いました。<br/>
              Wordの文字数カウント機能はいちいちクリックしないと見れないし、スペースを含めるかどうかも分かりにくい。
              何より、ただ文字を数えるだけの作業は孤独で、モチベーションが続きませんでした。
            </p>
            <p>
              「もっと直感的に、まるでゲームのように楽しくレポートが書けるツールがあればいいのに。」
            </p>
            <p>
              そんな個人的な悩みから生まれたのが、この<b>「レポカン」</b>です。<br/>
              リアルタイムで文字数がわかるプログレスバー、目標達成時の演出、そして参考文献の自動生成機能。<br/>
              これらはすべて、私自身が<strong>「本当に欲しかった機能」</strong>を詰め込んだものです。
            </p>
          </div>
        </section>

        {/* 3. 技術スタック（信頼性アップ） */}
        <section className="bg-gray-900 text-gray-200 p-8 rounded-3xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
          
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <span className="text-2xl">🛠</span>
            <h2 className="text-xl font-bold text-white">Tech Stack</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4 relative z-10 text-sm">
            <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Framework</p>
              <p className="font-bold text-white">Next.js 14 (App Router)</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Styling</p>
              <p className="font-bold text-white">Tailwind CSS</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Deploy</p>
              <p className="font-bold text-white">Vercel</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Language</p>
              <p className="font-bold text-white">TypeScript</p>
            </div>
          </div>
          <p className="mt-6 text-xs text-gray-400 leading-relaxed">
            高速な動作と快適なユーザー体験を実現するため、最新のモダンWeb技術を採用して開発しています。
          </p>
        </section>

        {/* 4. お問い合わせ */}
        <section className="text-center pt-8">
          <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest">Contact</h3>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSeumYrx_6P4aHZZGPBHhvF-0F9iATjUw1baHombHHsj7G59Kw/viewform?usp=dialog" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline underline-offset-4"
          >
            <span>お問い合わせフォームはこちら</span>
            <span>↗</span>
          </a>
        </section>

        <div className="text-center">
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
            ← ホームに戻る
          </Link>
        </div>

      </main>
    </div>
  );
}