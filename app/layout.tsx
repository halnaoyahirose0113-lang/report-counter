import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'レポート文字数カウンター | 参考文献除外＆自動保存',
  description: '大学生のためのレポート作成支援ツール。参考文献や引用を除外して本文のみの文字数をカウントできます。自動保存機能、参考文献リスト作成機能付き。',
  // 👇 ここがアイコン設定の肝です！
  icons: {
    icon: '/logo.jpg',     // ブラウザのタブ用
    shortcut: '/logo.jpg', // ショートカット用
    apple: '/logo.jpg',    // iPhoneのホーム画面に追加した時のアイコン
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        {/* iPhoneでホーム画面に追加した時のタイトル色などを調整 */}
        <meta name="apple-mobile-web-app-title" content="レポカン" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}