import Link from 'next/link';

export const metadata = {
  title: '【評価基準】教授はここを見ている！レポートで「S評価」を取るためのチェックリスト | レポカン',
  description: '単位を落としたくない、S評価が欲しい学生必見。提出直前に確認すべき5つのチェックポイント（誤字脱字、常体、参考文献など）と、教授の採点基準を公開します。',
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
            【評価基準】教授はここを見ている！<br className="hidden md:block" />レポートで「S評価」を取るためのチェックリスト
          </h1>
          
          <div className="bg-blue-50 p-4 rounded-xl text-sm text-blue-800 mb-8 border border-blue-100">
            <strong>💡 この記事でわかること</strong>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>内容以前に「即減点」されるNGポイント</li>
              <li>教授が手元に持っている「採点シート」のイメージ</li>
              <li>提出5分前でも修正可能なグレードアップ術</li>
            </ul>
          </div>

          <div className="prose prose-blue max-w-none">
            
            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              せっかく時間をかけて書いたレポート。どうせなら「可」や「良」ではなく、最高評価の「優」や「S」を取りたいですよね。
              実は、大学の教授がレポートを採点するとき、内容を読む前に<strong>「形式面での足切り」</strong>を行っていることが多いです。ここをクリアしていないと、どんなに素晴らしい考察を書いても評価されません。
            </p>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">1. 教授の「採点基準」をハックする</h2>
            <p className="mb-4 text-sm text-gray-600">
              多くの授業で共通する評価基準はおおよそ以下の通りです。特に「形式」は減点方式で厳しく見られます。
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-left text-gray-600 border rounded-lg">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 border-b">評価項目</th>
                    <th className="px-4 py-2 border-b">チェック内容</th>
                    <th className="px-4 py-2 border-b text-center">配点イメージ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-4 py-3 font-bold text-blue-600">形式・ルール</td>
                    <td className="px-4 py-3">誤字脱字、参考文献の書式、文字数</td>
                    <td className="px-4 py-3 text-center font-bold text-red-500">減点法<br/>(ミスがあると0点)</td>
                  </tr>
                  <tr className="bg-gray-50 border-b">
                    <td className="px-4 py-3 font-bold text-blue-600">論理構成</td>
                    <td className="px-4 py-3">序論・本論・結論の整合性</td>
                    <td className="px-4 py-3 text-center">基礎点</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-4 py-3 font-bold text-blue-600">独自性・考察</td>
                    <td className="px-4 py-3">自分の意見、独自の視点があるか</td>
                    <td className="px-4 py-3 text-center text-green-600">加点法<br/>(S評価の分かれ目)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">2. 提出直前！5分でできるS評価チェックリスト</h2>
            <p className="mb-6 text-sm text-gray-600">
              レポートを提出BOXに入れる前に、以下の5つだけは必ず確認してください。これだけでグレードが一つ上がります。
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-3 rounded-r-lg">
                <h3 className="text-base font-bold text-green-800">✅ 1. 文末は「だ・である」で統一されているか？</h3>
                <p className="text-xs text-gray-600 mt-1">「〜です。〜ます。」（敬体）が混ざっていませんか？レポートは原則として「だ・である」（常体）です。一文でも混ざると非常に目立ちます。</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-3 rounded-r-lg">
                <h3 className="text-base font-bold text-green-800">✅ 2. 「事実」と「意見」が分かれているか？</h3>
                <p className="text-xs text-gray-600 mt-1">
                  最悪なのは、推測を事実のように書くことです。<br/>
                  ❌「スマホの普及で学力が低下した。」（断定）<br/>
                  ⭕「文科省のデータ[1]によれば、スマホ利用時間と正答率に負の相関が見られる。このことから、学力低下の一因であると<strong>考えられる</strong>。」
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-3 rounded-r-lg">
                <h3 className="text-base font-bold text-green-800">✅ 3. 引用・参考文献の形式は完璧か？</h3>
                <p className="text-xs text-gray-600 mt-1">
                  コピペした部分に引用符（「」）や出典がないと、最悪の場合<strong>「剽窃（パクリ）」</strong>とみなされ、単位剥奪もありえます。URLを貼るだけのリストも減点対象です。
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-3 rounded-r-lg">
                <h3 className="text-base font-bold text-green-800">✅ 4. 誤字脱字・変換ミスはないか？</h3>
                <p className="text-xs text-gray-600 mt-1">
                  「私立」と「市立」、「関心」と「感心」など。Wordの読み上げ機能を使って、耳で聞くとミスに気づきやすいです。
                </p>
              </div>

               <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-3 rounded-r-lg">
                <h3 className="text-base font-bold text-green-800">✅ 5. 指定文字数を満たしているか？</h3>
                <p className="text-xs text-gray-600 mt-1">
                  「2000字程度」と言われたら、最低でも1800字（9割）は埋めましょう。少なすぎると「努力不足」と判断されます。
                </p>
              </div>
            </div>

            {/* ツール誘導CTA */}
            <div className="my-10 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white text-center shadow-lg">
              <p className="font-bold text-lg mb-2">🔍 形式面のミスはツールで防ごう</p>
              <p className="text-sm opacity-90 mb-4">誤字脱字や論理構成は自分でチェックする必要がありますが、<br/>面倒な<strong>「参考文献リスト作成」</strong>や<strong>「文字数カウント」</strong>はツールに任せましょう。</p>
              <Link href="/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-md hover:bg-yellow-50 transition-colors">
                レポカンで最終チェックする ⚡
              </Link>
            </div>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">3. レポート作成を助ける神アイテム</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
               <div className="border rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
                <h4 className="font-bold text-sm mb-2">ブルーライトカットメガネ</h4>
                <img src="https://m.media-amazon.com/images/I/61spsKphurL._AC_SX679_.jpg" alt="JINS SCREEN" className="w-24 mb-3 shadow-md" />
                <p className="text-[10px] text-gray-500 mb-2">長時間パソコンと向き合うレポート期間の必須アイテム。</p>
                <div className="flex gap-2 w-full mt-auto">
                    <a href="https://www.amazon.co.jp/dp/B0FRZG38TW?tag=acky0113-22" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#FF9900] text-white text-xs font-bold py-2 rounded hover:opacity-80">Amazon</a>
                    <a href="https://a.r10.to/hPUSvN" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#BF0000] text-white text-xs font-bold py-2 rounded hover:opacity-80">楽天</a>
                </div>
              </div>
              <div className="border rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
                <h4 className="font-bold text-sm mb-2">蒸気でホットアイマスク</h4>
                <img src="https://m.media-amazon.com/images/I/51tscyPQ3JL._AC_SX425_.jpg" alt="めぐりズム" className="w-24 mb-3 shadow-md" />
                <p className="text-[10px] text-gray-500 mb-2">書き終わった後のご褒美に。目が生き返ります。</p>
                <div className="flex gap-2 w-full mt-auto">
                    <a href="https://www.amazon.co.jp/dp/B0FSSPL1DL?tag=acky0113-22" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#FF9900] text-white text-xs font-bold py-2 rounded hover:opacity-80">Amazon</a>
                    <a href="https://a.r10.to/hREj9k" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#BF0000] text-white text-xs font-bold py-2 rounded hover:opacity-80">楽天</a>
                </div>
              </div>
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