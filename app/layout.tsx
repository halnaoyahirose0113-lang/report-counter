import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// ここがSEOの心臓部です！
export const metadata: Metadata = {
  title: "レポート文字数カウンター | 参考文献・引用を除外してカウント【学生専用】",
  description: "大学のレポートや論文作成に特化した無料の文字数カウンター。参考文献や引用番号([1]など)を自動で除外して、本文のみの文字数を正確にカウントします。自動保存機能付き。",
  keywords: ["文字数カウント", "レポート", "文字数", "参考文献除外", "大学", "論文", "字数制限"],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico", // 必要ならpublicフォルダに画像を入れてください
  },
  openGraph: {
    title: "レポート文字数カウンター | 学生専用・参考文献除外機能つき",
    description: "レポートの「本文だけ」をカウントしたい学生へ。参考文献や引用をワンクリックで除外できる神ツール。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* AdSenseの審査に通ったらここにスクリプトタグを入れます */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}