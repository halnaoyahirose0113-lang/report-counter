import Link from 'next/link';

export const metadata = {
  title: '【スマホ活用】パソコンがない！スマホだけでレポートを爆速で書くフリック入力術 | レポカン',
  description: '通学電車や隙間時間でレポートを終わらせたい！スマホの音声入力やフリック入力を活用した、PC要らずのレポート作成術を紹介します。',
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
            【スマホ活用】パソコンがない！<br className="hidden md:block" />スマホだけでレポートを爆速で書く入力術
          </h1>
          
          <div className="bg-blue-50 p-4 rounded-xl text-sm text-blue-800 mb-8 border border-blue-100">
            <strong>💡 この記事でわかること</strong>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>フリック入力よりも3倍速い「音声入力」のコツ</li>
              <li>通学電車を「書斎」に変えるクラウド連携テクニック</li>
              <li>スマホ執筆最大の敵「参考文献作成」の解決策</li>
            </ul>
          </div>

          <div className="prose prose-blue max-w-none">
            
            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              「レポートの締め切りが今日までなのに、バイトまで時間がない！」「満員電車でパソコンなんて開けない…」
              そんな追い詰められた状況でも諦めないでください。最近の大学生の中には、<strong>「レポートはほぼスマホで書く」</strong>という猛者も増えています。
              フリック入力や音声入力を駆使して、隙間時間だけで課題を終わらせるメソッドを紹介します。
            </p>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">STEP 1. 音声入力で「思考を吐き出す」</h2>
            <p className="mb-4 text-sm text-gray-600">
              フリック入力も速いですが、人間が喋る速度には敵いません。家や人の少ない場所なら、圧倒的に<strong>「音声入力」</strong>がおすすめです。
            </p>
            
            <div className="bg-gray-100 p-5 rounded-xl mb-6">
                <h4 className="font-bold text-gray-800 mb-2">🎙 おすすめのやり方</h4>
                <ol className="list-decimal ml-5 text-sm text-gray-700 space-y-2">
                    <li>Googleドキュメント（またはiPhoneメモ）を開く。</li>
                    <li>キーボードのマイクボタンを押す。</li>
                    <li><strong>「構成」や「てにをは」は無視して</strong>、頭にある考えをひたすら喋る。</li>
                    <li>「えー」「あのー」が入っても気にしない（後で消せばいい）。</li>
                </ol>
                <p className="text-xs text-gray-500 mt-3">※ これだけで、10分で1000文字近く入力することも可能です。まずは「文字にする」ことが重要です。</p>
            </div>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">STEP 2. スマホ執筆の鍵は「クラウド連携」</h2>
            <p className="mb-4 text-sm text-gray-600">
              スマホのメモ帳（ローカル）に書いていると、パソコンに移すのが面倒になります。最初からクラウド対応のエディタを使いましょう。
            </p>
            <ul className="list-disc ml-5 text-sm mb-4 text-gray-600 space-y-2">
              <li><strong>Google ドキュメント：</strong> 最強です。スマホで書いた内容がリアルタイムでPC版に反映されます。提出前の書式設定だけPCでやればOK。</li>
              <li><strong>Evernote / OneNote：</strong> 資料のクリッピング（保存）に便利です。</li>
              <li><strong>Notion：</strong> 構成を練るのに適していますが、長文執筆にはGoogleドキュメントの方が軽くておすすめです。</li>
            </ul>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">STEP 3. 参考文献は「コピペ」で乗り切る</h2>
            <p className="mb-4 text-sm text-gray-600">
              スマホ執筆で一番のストレスが<strong>「参考文献リストの作成」</strong>です。
              小さな画面で、URLをコピーし、著者名を確認し、書式を整える…これは指が吊る作業です。
            </p>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-orange-100 p-5 rounded-xl mb-6">
                <h4 className="font-bold text-orange-800 mb-2">🚀 レポカンを使った裏ワザ</h4>
                <p className="text-sm text-gray-700 mb-2">
                    当サイト「レポカン」はスマホに完全対応しています。
                </p>
                <ol className="list-decimal ml-5 text-sm text-gray-700 space-y-1">
                    <li>ブラウザの別タブでレポカンを開いておく。</li>
                    <li>参考にしたサイトのURLをコピーする。</li>
                    <li>レポカンの入力欄にペーストして「作成」をタップ。</li>
                    <li>完成した参考文献リストをコピーして、レポートに貼り付け。</li>
                </ol>
            </div>

            {/* ツール誘導CTA */}
            <div className="my-10 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white text-center shadow-lg">
                <p className="font-bold text-lg mb-2">📱 スマホで今すぐ試してみる</p>
                <p className="text-sm opacity-90 mb-4">通学時間や、寝る前のベッドの中で。<br/>レポカンを使って、少しずつ課題を進めましょう。</p>
                <Link href="/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-md hover:bg-yellow-50 transition-colors">
                  ツールを起動する ⚡
                </Link>
            </div>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">4. スマホ執筆を加速させるガジェット</h2>
            <p className="mb-4 text-sm text-gray-600">
                本気でスマホだけで単位を取りたいなら、安いBluetoothキーボードをカバンに入れておくと世界が変わります。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
               <div className="border rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
                <h4 className="font-bold text-sm mb-2">Anker キーボード＆専用ケース</h4>
                {/* 👇 画像URLを更新しました */}
                <img src="https://m.media-amazon.com/images/I/61tvERbFPlL._AC_SX679_.jpg" alt="Anker キーボード" className="w-24 mb-3 shadow-md" />
                <p className="text-[10px] text-gray-500 mb-2">カフェの小さなテーブルでも広げられる。持ち運びに便利なケース付き。</p>
                <div className="flex gap-2 w-full mt-auto">
                    <a href="https://www.amazon.co.jp/dp/B0824PZ5QC?tag=acky0113-22" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#FF9900] text-white text-xs font-bold py-2 rounded hover:opacity-80">Amazon</a>
                    <a href="https://a.r10.to/hPDqk2" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#BF0000] text-white text-xs font-bold py-2 rounded hover:opacity-80">楽天</a>
                </div>
              </div>
              <div className="border rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
                <h4 className="font-bold text-sm mb-2">ノイズキャンセリングイヤホン</h4>
                <img src="https://m.media-amazon.com/images/I/51nHT2kQ1bL._AC_SX679_.jpg" alt="Anker Soundcore" className="w-24 mb-3 shadow-md" />
                <p className="text-[10px] text-gray-500 mb-2">電車内やカフェの雑音を消して、集中ゾーンに入る。</p>
                <div className="flex gap-2 w-full mt-auto">
                    <a href="https://www.amazon.co.jp/dp/B0FNRS5WB2?tag=acky0113-22" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#FF9900] text-white text-xs font-bold py-2 rounded hover:opacity-80">Amazon</a>
                    <a href="https://a.r10.to/h5QtdJ" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#BF0000] text-white text-xs font-bold py-2 rounded hover:opacity-80">楽天</a>
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