日々のサイバー攻撃アクター一覧のjsonを、添付の以下のjson ファイルをベースに、インデントや構文は崩さずに、本日最新の状況に更新して。
以下の要件に従うこと。

【要件】
1.必ず既存JSONの構造を維持したまま、完全なJSONのみを出力すること。
説明文、Markdown、コードブロック不要。

2.既存アクターについて、以下を最新情報に基づき更新すること。

- カテゴリ
- 戦略意図
- 日本にとっての重要性
- 最新の主要活動
- 情報源

3.「最新の主要活動」には、単なる一般説明ではなく、最近確認された事象を簡潔に記載すること。
例）
- 新規侵害
- targeting変化
- TTP変化
- 新インフラ
- cloud targeting
- telecom targeting
- OT targeting
- supply chain compromise
- influence ops
- pre-positioning
- persistence activity

4.最新活動が確認できない場合でも、アクターを削除せず、少なくともJSON例のすべてのアクターを記載すること。
その場合、「最新の主要活動」に、その旨を記載すること。
例）
- "最近大きな公開活動なし"
- "活動低調"
- "公開活動未確認"

5.最近重要性が増したアクターが存在する場合、新規追加してよい。

特に、以下を重視。
例）
- 中国系 strategic access operations
- telecom intrusion
- cloud persistence
- MSP compromise
- OT targeting
- influence operations
- AI-assisted operations

6.新規追加時は、以下パラメータを必ず埋めること。

- 属性
- アクター
- カテゴリ
- 戦略意図
- 日本にとっての重要性
- 最新の主要活動
- 情報源

7.「情報源」には、参照した組織、記事名とurlを記載のみを配列で記載。

8.主要なセキュリティベンダー、研究機関、政府機関資料など、以下情報源を優先。
例）
- MITRE ATT&CK
- CISA
- FBI
- NSA
- Microsoft
- Mandiant
- CrowdStrike
- Google
- Recorded Future
- Proofpoint
- 日本政府
- 台湾政府
- 欧州政府
- 信頼できる主要メディア

9.ハルシネーションを避け、確認できない活動は記載しないこと。

10.既存JSON全体を更新済み完成版として出力すること。
この際、部分差分ではなく、完全な latest.json 全体を出力すること。
形式は以下の要件に従うこと。
 - JSON prettify済みで出力してください。
 - minify禁止。
 - インデントは半角スペース2つ。
 - 改行位置・配列構造は、私が貼ったサンプルJSONと同じにしてください。
 - 1 actor = 1 object block にしてください。
 - VSCodeでそのまま latest.json に貼れる形のみ出力してください。
 - コードブロックのみで出力
