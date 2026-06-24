---
title: "ニュースタイトルを入力"
date: 2025-03-01
draft: true
description: "ニュース一覧や検索結果用の短い概要を入力"
---

<!--
使い方:
1. このファイルを content/news/YYYYMMDD-news-title.ja.md にコピーする。
2. 英語版は templates/news-template.en.md を content/news/YYYYMMDD-news-title.en.md にコピーする。
3. 公開するときは draft: false にする、または draft 行を削除する。
4. 画像は static/images/news/ に置き、本文では /images/news/ファイル名 で指定する。
5. YouTube 動画は URL の v= 以降、または youtu.be/ 以降の VIDEO_ID を指定する。
6. 不要なセクションは削除してよい。
-->

最初の段落に、ニュースの要点を2〜3文で記載します。ニュース一覧では本文冒頭が概要として使われるため、ここには公開日、実施内容、関係者、目的などを簡潔にまとめます。

<!--more-->

## 本文見出し

ここに本文を記載します。通常の段落、箇条書き、リンクを使うことができます。

- 箇条書きの例
- 関係する研究テーマやイベント内容
- 今後の予定

## 画像の例

画像ファイルは `static/images/news/` に置きます。たとえば `static/images/news/20260101-field-demo-01.jpg` に置いた場合、本文では次のように指定します。

{{< figure src="/images/news/20260101-field-demo-01.jpg" alt="画像の説明を入力" caption="写真キャプションを入力" >}}

## YouTube 動画の例

YouTube 動画は、次の `VIDEO_ID` を実際の ID に置き換えます。ページ内で再生できる埋め込み動画として表示されます。

{{< youtube VIDEO_ID >}}

## 表の例

| 項目 | 内容 |
|---|---|
| 日時 | 2026年1月1日 |
| 場所 | 京都大学大学院農学研究科 / 木津農場 |
| 内容 | 実施内容を入力 |
| 関連リンク | [リンクテキスト](https://example.com/) |

## 参考リンク

- [京都大学大学院農学研究科](https://www.kais.kyoto-u.ac.jp/japanese/)
- [ヤンマーグループ](https://www.yanmar.com/jp/)
