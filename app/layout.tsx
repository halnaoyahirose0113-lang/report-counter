import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'レポート文字数カウンター | 参考文献除外＆自動保存',
  description: '大学生のためのレポート作成支援ツール。参考文献や引用を除外して本文のみの文字数をカウントできます。自動保存機能、参考文献リスト作成機能付き。',
  icons: {
    icon: '/logo.jpg', 
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
  // 👇 ここにサーチコンソールのコード（contentの中身）を入れてください！
  verification: {
    google: 'SyqUrfgc1zTfMYdiIE8IX6T46WQ_785iDjCbPkuoIzk', 
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 社長のGoogle Analytics ID
  const GA_ID = 'G-SHFBCNHTNX'; 

  return (
    <html lang="ja">
      <head>
        <meta name="apple-mobile-web-app-title" content="レポカン" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* 👇 Google AdSense のコード（社長専用ID設定済み） */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4656581903403841"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        
        {/* 👇 Google Analytics のコード */}
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