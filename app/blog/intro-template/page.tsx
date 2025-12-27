import Link from 'next/link';

export const metadata = {
  title: '【書き出し攻略】レポートの「序論（はじめに）」で書くべき3つの要素とテンプレ | レポカン',
  description: 'レポートの書き出しで止まっていませんか？序論（はじめに）に必要な「背景・目的・構成」の3要素と、そのまま使える穴埋めテンプレートを紹介します。',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* ヘッダー */}
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

      <main className="max-w-3xl mx-auto px-4 py-10">
        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          
          <h1 className="text-2xl md:text-3xl font-black mb-6 leading-tight">
            【書き出し攻略】レポートの「序論」で書くべき<br className="hidden md:block" />3つの要素と穴埋めテンプレ
          </h1>
          
          <div className="bg-blue-50 p-4 rounded-xl text-sm text-blue-800 mb-8 border border-blue-100">
            <strong>💡 この記事でわかること</strong>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>序論（はじめに）に入れるべき「3つの必須要素」</li>
              <li>何も考えずに埋めるだけの「最強テンプレート」</li>
              <li>文字数が稼げて、かつ評価も上がる書き出しのコツ</li>
            </ul>
          </div>

          <div className="prose prose-blue max-w-none">
            
            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              「レポート、何から書き始めればいいかわからない…」
              パソコンの白い画面を前にして、1時間フリーズしてしまう。そんな経験はありませんか？
              実は、レポートの<strong>「序論（はじめに）」</strong>には決まった型があります。この型通りに埋めるだけで、誰でも迷わずに書き出すことができます。
            </p>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">1. 序論に入れるべき「3つの要素」</h2>
            <p className="mb-4 text-sm text-gray-600">
               序論の役割は、読む人（教授）に「これから何について書くのか」を案内することです。以下の3つを必ず入れてください。これだけで構成点がもらえます。
            </p>
            <ol className="list-decimal ml-5 text-sm mb-6 text-gray-600 space-y-2">
              <li><strong>背景：</strong> なぜこのテーマを選んだのか。社会的にどんな問題があるのか。</li>
              <li><strong>目的：</strong> このレポートで何を明らかにしたいのか（問いの設定）。</li>
              <li><strong>構成：</strong> どのような順序で論じるのか（ロードマップ）。</li>
            </ol>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">2. そのまま使える！序論の穴埋めテンプレート</h2>
            <p className="mb-4 text-sm text-gray-600">
              以下の<strong>太字</strong>の部分を、自分のテーマに合わせて埋めてみてください。これだけで200〜400文字程度埋まります。
            </p>

            <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-xl font-mono text-sm leading-relaxed text-gray-700 shadow-inner mb-8">
                <p className="mb-4">
                  　近年、<strong>[テーマ]</strong> に関する問題が社会的に注目されている。（背景）<br/>
                  特に、<strong>[具体的な問題点]</strong> という点については、様々な意見が存在し、議論の余地がある。<br/>
                </p>
                <p className="mb-4">
                  　そこで本レポートでは、<strong>[テーマ]</strong> について調査し、その課題と解決策を考察することを目的とする。（目的）
                </p>
                <p>
                  　本論の構成は以下の通りである。<br/>
                  まず第1章で <strong>[テーマ]</strong> の現状についてデータを用いて概観する。<br/>
                  次に第2章で、先行研究や事例をもとに <strong>[具体的な問題]</strong> を指摘する。<br/>
                  最後に、それらを踏まえた今後の展望について論じる。（構成）
                </p>
            </div>

            <h3 className="text-lg font-bold mt-6 mb-3">具体的な記入例（少子化の場合）</h3>
            <div className="text-xs text-gray-600 bg-blue-50 p-4 rounded-lg">
                <p>
                    　近年、<strong>日本の少子化</strong>に関する問題が社会的に注目されている。特に、<strong>男性の育児休業取得率の低さ</strong>という点については、制度と実態の乖離があり、議論の余地がある。<br/>
                    　そこで本レポートでは、<strong>男性の育休取得</strong>について調査し、その阻害要因と解決策を考察することを目的とする。...
                </p>
            </div>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">3. 文字数が足りない時の「構成」の書き方</h2>
            <p className="mb-4 text-sm text-gray-600">
              序論で少しでも文字数を稼ぎたい場合は、「構成」の部分を詳しく書きましょう。
            </p>
            <ul className="list-disc ml-5 text-sm mb-4 text-gray-600 space-y-2">
              <li>「第1章では〜〜について述べる。」</li>
              <li>「続く第2章では、〇〇の観点から〜〜を分析する。」</li>
              <li>「最終章では、以上の議論を総括し、筆者の見解を述べる。」</li>
            </ul>
            <p className="text-sm text-gray-600">
              このように章ごとに丁寧な予告を入れることで、親切なレポートになり、かつ文字数も自然に増やすことができます。
            </p>

            {/* ツール誘導CTA */}
            <div className="my-10 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white text-center shadow-lg">
              <p className="font-bold text-lg mb-2">📊 構成が決まったら書き始めよう！</p>
              <p className="text-sm opacity-90 mb-4">レポカンには、この「序論・本論・結論」の骨組みを一発で挿入する<br/>テンプレート呼び出し機能があります。</p>
              <Link href="/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-md hover:bg-yellow-50 transition-colors">
                テンプレートを使って書き始める ⚡
              </Link>
            </div>

          </div>
        </article>

        <div className="mt-8 text-center">
          <Link href="/" className="inline-flex items-center justify-center gap-2 text-blue-600 font-bold hover:underline">
            <span>← 文字数カウンタートップへ戻る</span>
          </Link>
        </div>

      </main>

      <footer className="max-w-3xl mx-auto px-4 py-8 text-center text-gray-400 text-xs">
        <p>&copy; 2025 Acky</p>
      </footer>
    </div>
  );
}