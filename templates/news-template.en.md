---
title: "Enter the news title"
date: 2026-01-01
draft: true
description: "Enter a short summary for listings and search results"
---

<!--
How to use:
1. Copy this file to content/news/YYYYMMDD-news-title.en.md.
2. Copy templates/news-template.ja.md to content/news/YYYYMMDD-news-title.ja.md for the Japanese version.
3. When ready to publish, set draft: false or remove the draft line.
4. Place images in static/images/news/ and reference them as /images/news/filename.
5. For YouTube videos, use the VIDEO_ID from the v= part of the URL or from youtu.be/VIDEO_ID.
6. Remove sections that are not needed.
-->

Use the first paragraph for a concise two- or three-sentence summary of the news item. The news listing uses the beginning of the article as its summary, so include the date, activity, participants, and purpose here.

<!--more-->

## Section Heading

Write the main body text here. Standard paragraphs, bullet lists, and links can be used.

- Example bullet item
- Related research theme or event activity
- Next steps

## Image Example

Place image files in `static/images/news/`. For example, if the file is saved as `static/images/news/20260101-field-demo-01.jpg`, reference it in the article like this:

{{< figure src="/images/news/20260101-field-demo-01.jpg" alt="Enter a concise image description" caption="Enter the photo caption" >}}

## YouTube Video Example

Replace `VIDEO_ID` with the actual YouTube video ID. The video will be embedded and playable on the page.

{{< youtube VIDEO_ID >}}

## Table Example

| Item | Detail |
|---|---|
| Date | January 1, 2026 |
| Location | Graduate School of Agriculture, Kyoto University / Kizu Farm |
| Activity | Enter the activity details |
| Related link | [Link text](https://example.com/) |

## Reference Links

- [Graduate School of Agriculture, Kyoto University](https://www.kais.kyoto-u.ac.jp/japanese/)
- [Yanmar Group](https://www.yanmar.com/jp/)
