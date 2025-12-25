import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  // 👇 ブランド名「レポカン」を先頭に！
  title: 'レポカン | レポート文字数カウンター＆参考文献自動作成',
  description: 'レポート課題を爆速化する「レポカン」。参考文献の自動作成、文字数カウント、言い換え辞典、骨組みテンプレート召喚機能を搭載。登録不要で使えます。',
  icons: {
    icon: '/logo.jpg', 
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
  verification: {
    google: 'SyqUrfgc1zTfMYdiIE8IX6T46WQ_785iDjCbPkuoIzk', 
  },
  other: {
    'google-adsense-account': 'ca-pub-4656581903403841',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_ID = 'G-SHFBCNHTNX'; 

  return (
    <html lang="ja">
      <head>
        {/* 👇 スマホでホーム画面に追加した時の名前も「レポカン」に */}
        <meta name="apple-mobile-web-app-title" content="レポカン" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* AdSenseタグ（生のscriptタグ） */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4656581903403841"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
        
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `,
          }}
        />
        
        {children}
      </body>
    </html>
  )
}