import React from 'react';

export const SeoContent = () => {
  return (
    <article className="prose prose-blue max-w-none bg-white rounded-xl p-6 md:p-10 shadow-sm border border-gray-100 mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
        大学生のためのレポート文字数・参考文献ガイド
      </h2>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h3 className="text-xl font-bold text-blue-800 mb-3">Q. レポートの文字数に「参考文献」は含まれる？</h3>
          <p className="mb-3">
            結論から言うと、<strong>多くの大学・授業では「参考文献は文字数に含めない」</strong>のが一般的です。
            教授が求めているのは「あなたの考察」の量であり、本のタイトルリストの量ではないからです。
          </p>
          <p>
            しかし、Wordの文字数カウント機能では、これらを一括で除外することができません。
            そのため、最後に手作業で引き算をする必要がありましたが、このツールを使えば「参考文献を除外」スイッチひとつで正確な本文のみの文字数を計測できます。
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-blue-800 mb-3">レポートの文字数が足りない時の対処法</h3>
          <p className="mb-3">
            「あと500字足りない…」という時は、以下のポイントを見直してみましょう。
          </p>
          <ul className="list-disc pl-5 space-y-2 bg-blue-50 p-4 rounded-lg">
            <li><strong>具体例を増やす：</strong>抽象的な主張の後に、「例えば〜」と具体的な事例やニュースを引用する。</li>
            <li><strong>反論への配慮を入れる：</strong>「確かに〇〇という意見もあるが〜」と、反対意見を取り上げてから論破する構成にする。</li>
            <li><strong>定義を明確にする：</strong>文中で使っているキーワードの定義を丁寧に説明する。</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-blue-800 mb-3">正しい参考文献の書き方（SIST02形式など）</h3>
          <p className="mb-3">
            日本の論文やレポートでは、主に科学技術情報流通技術基準（SIST02）に近い形式が好まれます。
          </p>
          <div className="bg-gray-800 text-gray-200 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            <p className="mb-2 text-gray-400">書籍の場合:</p>
            <p>著者名. 書名. 出版社, 出版年, 総ページ数, (シリーズ名, シリーズ番号).</p>
            <p className="mt-4 mb-2 text-gray-400">Webサイトの場合:</p>
            <p>著者名. "Webページのタイトル". Webサイト名. 更新日付. URL, (参照 yyyy-mm-dd).</p>
          </div>
          <p className="mt-3 text-sm text-gray-500">
            ※当ツールの「参考文献メーカー」機能を使えば、URLを入力するだけで簡易的なフォーマットを自動生成できます。
          </p>
        </section>
      </div>
    </article>
  );
};