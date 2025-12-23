import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// 👇 ここを修正してください
export const metadata: Metadata = {
  title: "レポート文字数カウンター | 参考文献・引用を除外してカウント【学生専用】",
  description: "大学のレポートや論文作成に特化した無料の文字数カウンター。参考文献や引用番号([1]など)を自動で除外して、本文のみの文字数を正確にカウントします。自動保存機能付き。",
  // ▼▼▼ ここに追加！ ▼▼▼
  verification: {
    google: "SyqUrfgc1zTfMYdiIE8IX6T46WQ_785iDjCbPkuoIzk",
  },
  // ▲▲▲ ここまで ▲▲▲
  keywords: ["文字数カウント", "レポート", "文字数", "参考文献除外", "大学", "論文", "字数制限"],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "レポート文字数カウンター | 学生専用・参考文献除外機能つき",
    description: "レポートの「本文だけ」をカウントしたい学生へ。参考文献や引用をワンクリックで除外できる神ツール。",
    type: "website",
    locale: "ja_JP",
  },
};
// 👆 修正はここまで

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}