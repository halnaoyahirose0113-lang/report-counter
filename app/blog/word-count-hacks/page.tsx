import Link from 'next/link';

export const metadata = {
  title: 'レポートの文字数が足りない！自然に増やす裏技5選とNG行為 | レポート文字数カウンター',
  description: '「あと500文字足りない...」そんな時に使える、レポートの品質を落とさずに文字数を増やすテクニックを紹介。言い換え表現や引用の活用法など。',
};

export default function WordCountHacks() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* ヘッダー */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-bold text-gray-900 hover:opacity-70 transition-opacity flex items-center gap-2">
            <span>← ツールに戻る</span>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          
          <h1 className="text-2xl md:text-3xl font-black mb-6 leading-tight">
            レポートの文字数が足りない！<br className="hidden md:block" />自然に増やす「禁断の裏技」5選
          </h1>
          
          <div className="bg-red-50 p-4 rounded-xl text-sm text-red-800 mb-8 border border-red-100">
            <strong>⚠️ 注意</strong>
            <p className="mt-1">
              文字サイズを大きくしたり、無意味なスペースを入れるのは「バレるNG行為」です。ここでは、先生に怒られず、むしろ「内容が濃い」と思わせるテクニックだけを紹介します。
            </p>
          </div>

          <div className="prose prose-blue max-w-none">
            
            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">1. 「言い換え」でカサ増しする</h2>
            <p className="text-sm text-gray-600 mb-4">
              普段使っている言葉を、より学術的な（そして文字数の多い）表現に変換しましょう。これだけで全体の1割くらいは増えます。
            </p>
            <div className="bg-gray-100 p-4 rounded-lg text-sm mb-4">
              <ul className="space-y-2 mb-0">
                <li>「〜だと思う」 (5文字) <br/>→ <strong>「〜であると考えられる」</strong> (9文字) 
                  <span className="text-green-600 font-bold ml-2 text-xs">+4文字！</span></li>
                <li>「でも」 (2文字) <br/>→ <strong>「しかしながら」</strong> (6文字)
                  <span className="text-green-600 font-bold ml-2 text-xs">+4文字！</span></li>
                <li>「大きな問題」 (5文字) <br/>→ <strong>「極めて深刻な課題」</strong> (8文字)
                  <span className="text-green-600 font-bold ml-2 text-xs">+3文字！</span></li>
              </ul>
            </div>
            
            {/* ツールへの誘導 */}
            <div className="my-8 p-5 bg-blue-50 border border-blue-200 rounded-xl text-center">
              <p className="font-bold text-blue-900 text-sm mb-2">もっと変換したいですか？</p>
              <p className="text-xs text-blue-700 mb-3">当サイトのトップページに「神・言い換え辞典」機能を搭載しました。</p>
              <Link href="/" className="inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded-full text-xs shadow hover:bg-blue-700 transition-colors">
                言い換え辞典を使う 📖
              </Link>
            </div>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">2. 具体例を「引用」する</h2>
            <p className="text-sm text-gray-600 mb-4">
              主張の後に、「例えば〜」としてニュースや書籍の引用を入れましょう。信頼性が上がる上に、引用部分は文字数を稼ぎやすいです。
            </p>
            <p className="text-sm text-gray-600 mb-4">
              <strong>コツ：</strong> 引用したら、必ず感想ではなく「考察」を加えること。これでさらに文字数が増えます。
            </p>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">3. 「反対意見」への反論を書く</h2>
            <p className="text-sm text-gray-600 mb-4">
              自分の意見だけを書くから文字数が尽きるのです。「一方で、〜という意見もあるだろう。しかし〜」という構成を入れるだけで、200〜300文字は稼げます。
            </p>

            {/* アフィリエイトコーナー */}
            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">困った時に頼れる本</h2>
            <p className="text-sm text-gray-600 mb-4">
              「そもそも何を書けばいいかわからない」という状態なら、以下の本がバイブルになります。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
                  <h4 className="font-bold text-sm mb-2">論文の教室</h4>
                  <p className="text-xs text-gray-500 mb-3">構成の型がわかれば、文字数は勝手に埋まります。</p>
                  <img src="https://images-na.ssl-images-amazon.com/images/P/4140912723.09.LZZZZZZZ.jpg" alt="論文の教室" className="w-20 mb-3 shadow-md" />
                  <div className="flex gap-2 w-full mt-auto">
                    <a href="https://www.amazon.co.jp/dp/4140912723?tag=acky0113-22" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#FF9900] text-white text-xs font-bold py-2 rounded hover:opacity-80">Amazon</a>
                    <a href="https://a.r10.to/hkyzb7" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#BF0000] text-white text-xs font-bold py-2 rounded hover:opacity-80">楽天</a>
                  </div>
              </div>
              <div className="border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
                  <h4 className="font-bold text-sm mb-2">コピペと言われない書き方</h4>
                  <p className="text-xs text-gray-500 mb-3">引用で文字数を増やす正しいルールが学べます。</p>
                  <img src="https://images-na.ssl-images-amazon.com/images/P/B077RWQNKN.09.LZZZZZZZ.jpg" alt="コピペと言われない書き方" className="w-20 mb-3 shadow-md" />
                  <div className="flex gap-2 w-full mt-auto">
                    <a href="https://www.amazon.co.jp/dp/B077RWQNKN?tag=acky0113-22" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#FF9900] text-white text-xs font-bold py-2 rounded hover:opacity-80">Amazon</a>
                    <a href="https://a.r10.to/h5e9On" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#BF0000] text-white text-xs font-bold py-2 rounded hover:opacity-80">楽天</a>
                  </div>
              </div>
            </div>

            <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3 mb-4 mt-8">まとめ</h2>
            <p className="text-sm text-gray-600">
              文字数が足りない時は、無理に引き伸ばすのではなく「情報を足す（具体例、引用、反論）」のが正解です。
              書いた後は、必ず文字数カウンターでチェックして、参考文献リストも忘れずに作成しましょう！
            </p>

          </div>
        </article>

        <div className="mt-8 text-center">
          <Link href="/" className="inline-flex items-center justify-center gap-2 text-blue-600 font-bold hover:underline">
            <span>← ツールで文字数を確認する</span>
          </Link>
        </div>

      </main>

      <footer className="max-w-3xl mx-auto px-4 py-8 text-center text-gray-400 text-xs">
        <p>&copy; 2025 Acky</p>
      </footer>
    </div>
  );
}