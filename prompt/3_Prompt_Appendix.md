【JSON例】

{
  "注記": "2026年8月2日時点の状況を反映して更新済み。ロシア対外情報庁(SVR)系Storm-2945による「CaptiveCrunch」ホテルWi-Fi乗っ取り作戦、中国語話者アクターによるDeepSeek+Hermes Agent自律型攻撃、同じく中国語話者アクターによる中央アジア政府機関標的の新型バックドア「OctLurk」「SilkLurk」を新規追加。LAUNDRY BEARについてMicrosoft Outlook脆弱性悪用というTTP変化を確認し更新。Lazarus Groupについて韓国AnySign4PC悪用の水飲み場攻撃(SIGNBT/COPPERHEDGE)およびmacOS向けContagious Interview新亜種を新たな活動として追加。他の既存アクターは本対象期間中に新規の確定情報が得られなかったため、監視継続のステータスを維持。次回セッションでも本ファイルを再アップロードいただくことで差分更新を継続する。",
  "更新日": "2026-08-02",
  "脅威アクター": [
    {
      "ID": "RU-FSB-C16",
      "名称": "FSB第16センター（Berserk Bear / Energetic Bear / Crouching Yeti / Dragonfly / Ghost Blizzard / Static Tundra）",
      "国": "ロシア",
      "分類": "国家支援型APT（諜報・重要インフラ偵察）",
      "戦略的意図": "重要インフラ（通信、防衛産業基盤、エネルギー、金融、州・地方政府、医療）への持続的アクセス確保。平時の諜報活動と有事の破壊工作準備の両面を持つと評価される。",
      "日本関連度": "中（直接的な対日攻撃の確認事例は本セッション時点でなし。ただし同種の手法（SNMP設定不備悪用）は国内の未管理ネットワーク機器にも適用可能なため注意）",
      "最新動向": "2026年7月13日公表のCISA共同アドバイザリAA26-194A（SNMPコミュニティ文字列・Cisco Smart Install悪用による日和見的侵害）以降、2026年8月1日〜2日の対象期間中も更新する新たな確認事案は見当たらず、公開活動未確認。監視継続。",
      "MITRE_ATTACK": ["T1046", "T1602", "T1078"],
      "活動状況": "活発（10年以上継続、直近の新規確認事案なし）",
      "情報源": [
        "CISA「Improve Router Hygiene to Protect Against Russian State-Sponsored Targeting」AA26-194A (2026-07-13) - https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-194a",
        "France24「EU, UK hit Russia with joint sanctions over cyber attacks」(2026-07-13) - https://www.france24.com/en/live-news/20260713-eu-uk-hit-russia-with-joint-sanctions-over-cyber-attacks"
      ]
    },
    {
      "ID": "RU-GRU-SANDWORM",
      "名称": "Sandworm / APT44（GRU Unit 74455）",
      "国": "ロシア",
      "分類": "国家支援型APT（破壊工作・諜報）",
      "戦略的意図": "ウクライナの戦時経済（穀物・エネルギー・物流）への持続的破壊工作。NotPetya以来の大規模破壊能力を保持。",
      "日本関連度": "低〜中（直接の対日攻撃事例なし。ただしOT環境を狙うワイパー手法は日本の重要インフラ事業者にも参考となる脅威モデル）",
      "最新動向": "2025年11月のESET報告（穀物産業向けワイパー展開）以降、大きな公開活動なし。2026年8月1日〜2日の対象期間中も新規の確定インシデントは確認できず、監視継続。",
      "MITRE_ATTACK": ["T1485", "T1490"],
      "活動状況": "継続（新規確認事案なし、モニタリング継続）",
      "情報源": [
        "The Record from Recorded Future News「Russia's Sandworm hackers deploying wipers against Ukraine's grain industry」(2025-11) - https://therecord.media/russia-sandworm-grain-wipers"
      ]
    },
    {
      "ID": "RU-APT-LAUNDRYBEAR",
      "名称": "LAUNDRY BEAR（別名：Void Blizzard、CL-STA-1114、TA488、UNK_PitStop）",
      "国": "ロシア",
      "分類": "国家支援型APT（諜報・メールデータ窃取）",
      "戦略的意図": "ロシア連邦のための機密情報収集、特にメールデータの秘匿的取得を主目的とする。2024年以降、NATO加盟国およびウクライナへの関心を強めている。",
      "日本関連度": "低〜中（対日事案は現時点で未確認。Zimbra Collaboration SuiteやMicrosoft Outlook等のウェブメール基盤を利用する国内組織は、同種手口の潜在的標的となり得る）",
      "最新動向": "【TTP変化】2026年7月23日のCISA共同アドバイザリAA26-204A（Zimbra WebmailゼロデイCVE-2025-66376悪用）に続き、Proofpointが2026年7月29日、同アクターがZimbra標的化に加えMicrosoft Outlookの脆弱性も悪用していたことを新たに確認したと報告。攻撃対象基盤の多様化というTTP変化が生じている。2026年8月1日〜2日の対象期間中に新たな追加侵害事案は確認できず、監視継続。",
      "MITRE_ATTACK": ["T1566", "T1114", "T1556", "T1078", "T1190"],
      "活動状況": "活発（標的基盤の多様化を伴い継続中）",
      "情報源": [
        "CISA「Russian State-Supported Cyber Actors Conduct Phishing Campaign Targeting Users of Zimbra Collaboration Suite」AA26-204A (2026-07-23) - https://www.cisa.gov/news-events/cybersecurity-advisories/aa26-204a",
        "The Record from Recorded Future News「Laundry Bear's webmail hackers had more in store after February, report says」(2026-07-29) - https://therecord.media/laundry-bear-webmail-hackers-outlook-bug",
        "The Register「Year-long Russian attacks infect users as soon as they look at an email」(2026-07-23) - https://www.theregister.com/patches/2026/07/23/year-long-russian-attacks-infect-users-as-soon-as-they-look-at-an-email/5277358"
      ]
    },
    {
      "ID": "US-CRIM-INC",
      "名称": "Inc ランサムウェア（RaaS）",
      "国": "不明（RaaS、アフィリエイト型）",
      "分類": "サイバー犯罪（ランサムウェア・アズ・ア・サービス）",
      "戦略的意図": "金銭目的。SonicWall SMA1000ゼロデイの事前悪用により、公開パッチ前の初期アクセス市場での優位性を確保。",
      "日本関連度": "中（SonicWall製品は国内でも導入例あり、パッチ未適用機器はリスク対象）",
      "最新動向": "2026年6月22日以降のCVE-2026-15409／CVE-2026-15410ゼロデイ悪用、7月14日SonicWall公表、CISA KEV登録という一連の経緯以降、2026年8月1日〜2日の対象期間中に新たな確認事案は得られておらず、活動低調。監視継続。",
      "MITRE_ATTACK": ["T1190", "T1068", "T1078"],
      "活動状況": "活発（新規確認事案なし、監視継続）",
      "情報源": [
        "Dark Reading「Inc Ransomware Exploits SonicWall SMA Zero-Days」(2026-07) - https://www.darkreading.com/vulnerabilities-threats/inc-ransomware-exploits-sonicwall-sma-zero-days",
        "Volexity「Proxying to Compromise: SonicWall Secure Mobile Access 0-day Exploitation」(2026-07-17) - https://www.volexity.com/blog/2026/07/17/proxying-to-compromise-sonicwall-secure-mobile-access-0-day-exploitation/"
      ]
    },
    {
      "ID": "UNKNOWN-UTA0533",
      "名称": "UTA0533（Volexity命名、素性未特定）",
      "国": "不明",
      "分類": "標的型侵入アクター（ゼロデイ使用能力あり）",
      "戦略的意図": "不明（諜報目的か金銭目的か未確定。ゼロデイの事前入手能力からリソース潤沢な組織と推定）。認証情報・アクティブセッション・多要素認証シードの窃取により長期的かつステルス性の高いアクセス確保を志向。",
      "日本関連度": "低（現時点で対日事案の確認なし）",
      "最新動向": "2026年7月21日時点で判明していたSonicWall SMA1000ゼロデイ（CVE-2026-15409/15410）の事前悪用（6月22日以降開始）に関する分析以降、2026年8月1日〜2日の対象期間中に新たな追跡情報は確認できておらず、公開活動未確認。監視継続。",
      "MITRE_ATTACK": ["T1190", "T1068", "T1552", "T1078"],
      "活動状況": "活発（新規確認事案なし、監視継続）",
      "情報源": [
        "The Hacker News「SonicWall SMA Zero-Days Exploited Before Disclosure to Gain Root Access」(2026-07-21) - https://thehackernews.com/2026/07/sonicwall-sma-zero-days-exploited.html",
        "Help Net Security「SonicWall SMA zero-days were exploited weeks before disclosure」(2026-07-21) - https://www.helpnetsecurity.com/2026/07/21/sonicwall-sma-zero-days-exploited-cve-2026-15409-cve-2026-15410/"
      ]
    },
    {
      "ID": "AI-AGENT-JADEPUFFER",
      "名称": "JADEPUFFER（Sysdig命名、エージェント型ランサムウェア）",
      "国": "不明（攻撃主体の国籍不明）",
      "分類": "新興アクター類型（AIエージェント駆動型ランサムウェア・恐喝）",
      "戦略的意図": "金銭目的の恐喝。ただし本件では暗号鍵が保存されずランサム支払いをしても復旧不可能であったことから、実質的にはデータ破壊工作の可能性。",
      "日本関連度": "低（直接の対日事案なし）。ただし国内でも自社ホスト型LLM/AIエージェント基盤の急速な展開に伴い、同種の手法が国内でも再現されうる点は要注視。",
      "最新動向": "2026年7月1日のSysdig初回報告以降、月次脅威レポート等で継続的に参照される代表事例となっているが、2026年8月1日〜2日の対象期間中に新たな追加事案は報告されていない。なお同時期、中国語話者アクターによるDeepSeek+Hermes Agentを用いた自律型攻撃（本JSON内CN-UNKNOWN-HERMESDEEPSEEK参照）が新たに確認されており、AIエージェント駆動型攻撃という類型そのものの広がりが継続している点に留意。",
      "MITRE_ATTACK": ["T1190", "T1552", "T1021", "T1486"],
      "活動状況": "単発事例として観測（継続的な活動有無は未確認、監視継続）",
      "情報源": [
        "Sysdig「JADEPUFFER: Agentic ransomware for automated database extortion」(2026-07-01) - https://www.sysdig.com/blog/jadepuffer-agentic-ransomware-for-automated-database-extortion",
        "CyberScoop「Sysdig clocks first documented case of agentic ransomware」(2026-07) - https://cyberscoop.com/sysdig-judepuffer-ai-agentic-ransomware-attack/",
        "Hornetsecurity「Monthly Threat Report」(2026-07) - https://www.hornetsecurity.com/en/blog/monthly-threat-report/"
      ]
    },
    {
      "ID": "JP-CRIM-RANSOMHOUSE",
      "名称": "RansomHouse",
      "国": "不明（拠点非公開、RaaS/恐喝特化型）",
      "分類": "サイバー犯罪（データ窃取・二重恐喝型）",
      "戦略的意図": "企業から顧客情報等を窃取し、暴露をちらつかせて金銭を要求する恐喝手法を主軸とする。ファイル暗号化よりデータ窃取・暴露を重視する傾向。",
      "日本関連度": "高（2026年7月21〜22日、日本の冷凍食品・物流大手ニチレイグループへの攻撃について犯行声明を発出。イオン系列、ケンタッキーフライドチキン、くら寿司等の取引先に業務影響が波及）",
      "最新動向": "2026年7月24日のニチレイ業務正常化発表以降、2026年8月1日〜2日の対象期間中に新たな進展（ランサムウェア関与・情報漏洩の公式確定情報を含む）は確認できず、係争状態のまま監視継続。",
      "MITRE_ATTACK": ["T1567", "T1486"],
      "活動状況": "活発（業務復旧後も帰属・被害範囲は係争中）",
      "情報源": [
        "ITmedia NEWS「ニチレイへの攻撃、ランサム集団「RansomHouse」が犯行声明 アスクルを攻撃したグループか」(2026-07-22) - https://www.itmedia.co.jp/news/articles/2607/22/news064.html",
        "NHKニュース「ニチレイ サイバー攻撃によるシステム障害から復旧 業務正常化」(2026-07-24) - https://news.web.nhk/newsweb/na/na-k10015185471000",
        "NHKニュース「ニチレイ ハッカー集団が犯行声明 「ランサムウエア」攻撃か」(2026-07-22) - https://news.web.nhk/newsweb/na/na-k10015182261000"
      ]
    },
    {
      "ID": "IR-APT42",
      "名称": "APT42（別名：Mint Sandstorm、TA453、Yellow Garuda）",
      "国": "イラン",
      "分類": "国家支援型APT（IRGC-IO傘下、電子諜報）",
      "戦略的意図": "政府・防衛関係者およびその家族を含む高価値標的に対する長期的な認証情報窃取・監視。信頼関係構築型のソーシャルエンジニアリングを主軸とする。",
      "日本関連度": "低（現時点で対日事案は未確認）。ただし2026年2月開戦のイラン戦争以降の中東情勢緊張継続に伴うグローバルな波及効果には留意。",
      "最新動向": "2026年7月21日のDarkAtlas社報告（LLMを用いたペルソナ生成型フィッシング、改良版TAMECATバックドア）以降、2026年8月1日〜2日の対象期間中に新たな確認事案は得られておらず、公開活動未確認。監視継続。",
      "MITRE_ATTACK": ["T1566", "T1204", "T1059.001", "T1555"],
      "活動状況": "活発（新規確認事案なし、監視継続）",
      "情報源": [
        "Cyber Security News「APT42 Uses AI-Assisted Phishing and TAMECAT Malware to Target Government and Defense Officials」(2026-07-21) - https://cybersecuritynews.com/apt42-uses-ai-assisted-phishing-and-tamecat-malware/",
        "GBHackers「Iran-Linked APT42 Uses AI-Assisted Phishing and TAMECAT Backdoor to Target Defense Officials」(2026-07-21) - https://gbhackers.com/apt42-uses-ai-assisted-phishing/"
      ]
    },
    {
      "ID": "RU-CRIM-MEDIALAND",
      "名称": "Media Land / ML.Cloud（バレットプルーフホスティング事業者）",
      "国": "ロシア（St. Petersburg拠点）",
      "分類": "サイバー犯罪インフラ提供者（バレットプルーフホスティング）",
      "戦略的意図": "ランサムウェア・フィッシング・ブルートフォース攻撃等を行う顧客に、法執行機関の摘発要求を無視する耐性のあるホスティングインフラを提供し金銭的利益を得る。",
      "日本関連度": "中（LockBit、BlackSuit、Play等の著名ランサムウェアグループを支援したとされ、国内企業も間接的な標的となり得るインフラ層の脅威事例）",
      "最新動向": "2026年7月14日の米司法省による訴追以降、2026年8月1日〜2日の対象期間中に新たな摘発・インフラ動向は確認できておらず、起訴段階のまま監視継続（被告はロシア在住のため身柄拘束は未実施）。",
      "MITRE_ATTACK": [],
      "活動状況": "摘発済み（起訴段階、事業継続性は不明、監視継続）",
      "情報源": [
        "TechCrunch「US charges Russian 'bulletproof' web hosts over cyberattacks that netted $62M from cybercrime victims」(2026-07-15) - https://techcrunch.com/2026/07/15/us-charges-russian-bulletproof-web-hosts-over-cyberattacks-that-netted-62m-from-cybercrime-victims/",
        "CNN「Cybercrime: US indicts Russians alleged to be at center of major cybercrime network」(2026-07-14) - https://www.cnn.com/2026/07/14/politics/us-indicts-russia-cybercrime"
      ]
    },
    {
      "ID": "UNKNOWN-SVCNOW-CVE20266875",
      "名称": "不明（CVE-2026-6875 悪用アクター、帰属未特定）",
      "国": "不明",
      "分類": "サイバー犯罪または国家支援（未特定）",
      "戦略的意図": "不明。ServiceNow AIプラットフォームの事前認証サンドボックスエスケープRCEを悪用した侵害の最終目的は非公開。",
      "日本関連度": "中（ServiceNowを利用する官公庁・金融機関等の自己ホスト環境に波及しうるcloud/AIプラットフォーム標的型の脅威）",
      "最新動向": "2026年7月18日以降のDefused社によるCVE-2026-6875（CVSS 9.5）実悪用観測以降、2026年8月1日〜2日の対象期間中に新たな被害組織や活動の確認情報は得られておらず、公開活動未確認。監視継続。",
      "MITRE_ATTACK": ["T1190"],
      "活動状況": "活発（新規確認事案なし、監視継続）",
      "情報源": [
        "Help Net Security「ServiceNow pre-auth RCE exploited in the wild (CVE-2026-6875)」(2026-07-20) - https://www.helpnetsecurity.com/2026/07/20/servicenow-cve-2026-6875-exploited/",
        "The Hacker News「Critical ServiceNow AI Platform Flaw Exploited for Unauthenticated Code Execution」(2026-07-21) - https://thehackernews.com/2026/07/critical-servicenow-ai-platform-flaw.html"
      ]
    },
    {
      "ID": "KP-STATE-LAZARUS",
      "名称": "Lazarus Group（別名：TraderTraitor、APT38、Hidden Cobra）",
      "国": "北朝鮮",
      "分類": "国家支援型APT（サイバー犯罪型・外貨獲得目的）",
      "戦略的意図": "国連制裁下での外貨獲得および弾道ミサイル・核開発資金の確保を目的とした暗号資産窃取を、国家的な収益事業として組織的に実施。",
      "日本関連度": "中〜高（過去に日本の暗号資産交換業者を標的とした実績があり、国内の暗号資産関連事業者・DeFiプロジェクトも潜在的標的となり得る）",
      "最新動向": "【TTP変化・新インフラ】2026年7月30日、長期継続中の「Contagious Interview」キャンペーンの新亜種として、macOS向け全画面偽アップデート画面によるClickFix型攻撃とEthereumスマートコントラクトを用いたブロックチェーンホスト型C2が確認された。同時期、韓国では正規サイト15件を踏み台にした水飲み場攻撃により、金融セキュリティソフト「AnySign4PC」の脆弱性を悪用し警告なしでSIGNBT・COPPERHEDGE（いずれもLazarus関連の既知マルウェアファミリー）を設置する国家支援型キャンペーンが確認された（帰属は"推定"）。求職偽装・水飲み場攻撃の双方でTTPを多様化させている。2026年4月のKelp DAO（約2億9,000万ドル窃取）以降、新たな大型暗号資産窃取事案は本対象期間中確認できず。",
      "MITRE_ATTACK": ["T1566", "T1195", "T1078", "T1657", "T1189", "T1204.004", "T1568"],
      "活動状況": "活発（継続的な収益事業として運用中、攻撃ベクトルの多様化継続）",
      "情報源": [
        "UPI「North Korea behind two-thirds of crypto theft in H1 2026, report says」(2026-07-03) - https://www.upi.com/Top_News/World-News/2026/07/03/North-Korea-crypto-theft-two-thirds-H1-TRM-Labs/4361783069480/",
        "South China Morning Post「North Korea's Lazarus suspected of stealing US$290 million in KelpDAO cyberattack」(2026-04-22) - https://www.scmp.com/news/asia/east-asia/article/3350964/north-koreas-lazarus-suspected-stealing-us290-million-kelpdao-cyberattack",
        "The Hacker News「DPRK-Linked macOS Malvertising Uses Fake Updates to Deliver Crypto-Stealing Malware」(2026-07-30) - https://thehackernews.com/2026/07/dprk-linked-macos-malvertising-uses.html",
        "The Hacker News「Hackers Exploit AnySign4PC via Hacked Sites to Deploy SIGNBT, COPPERHEDGE Without Warning」(2026-07-30) - https://thehackernews.com/2026/07/hackers-exploit-anysign4pc-via-hacked.html"
      ]
    },
    {
      "ID": "KP-INTERNAL-PURGE",
      "名称": "北朝鮮 偵察総局系元サイバー要員による内部不正事案（特定グループ名なし）",
      "国": "北朝鮮",
      "分類": "不祥事（国家サイバー部隊内部の統制崩壊・インサイダー事案）",
      "戦略的意図": "該当なし。国家に対する外貨獲得任務からの逸脱・私的流用が疑われる事案であり、対外的な戦略意図は伴わない。",
      "日本関連度": "低（直接の対日影響はないが、北朝鮮の国家サイバー要員の忠誠・統制リスクを示す事例として、離反者による技術流出等の間接的リスクに留意）",
      "最新動向": "2026年7月12日の拘束事案報道（7月24〜25日国際報道）以降、2026年8月1日〜2日の対象期間中に新たな進展は確認できず、事案終息状態を維持。",
      "MITRE_ATTACK": ["T1078"],
      "活動状況": "摘発済み（事案終息、関連動向の継続監視）",
      "情報源": [
        "Daily NK（英語版）「North Korea busts elite hacking ring inside its own banks」(2026-07) - https://www.dailynk.com/english/north-korea-elite-bank-hacking-ring-arrested/",
        "CoinDesk「North Korea arrests hackers accused of laundering stolen funds from country's bank via crypto」(2026-07-25) - https://www.coindesk.com/business/2026/07/25/north-korea-arrests-hackers-accused-of-laundering-stolen-funds-from-country-s-bank-via-crypto"
      ]
    },
    {
      "ID": "CN-APT-SALTTYPHOON",
      "名称": "Salt Typhoon（別名：GhostEmperor、RedMike、Operator Panda、FamousSparrow、UNC5807）",
      "国": "中国",
      "分類": "国家支援型APT（諜報・通信インフラ持続的侵害）",
      "戦略的意図": "中国国家安全部（MSS）の指揮下、通信・政府・軍事・運輸・宿泊等のバックボーン／エッジルーターへの持続的アクセスを確保し、有事における通信傍受・妨害能力を含む戦略的インフラ支配を志向。",
      "日本関連度": "中（現時点で対日組織への直接侵害は未確認だが、通信キャリア・ISP・大学等を標的とする手法は日本の同種インフラにも適用可能。米国・カナダ・英国・NZ・豪州等Five Eyes諸国での継続的被害は、同盟国である日本にとっても情報共有・警戒の対象）",
      "最新動向": "2026年2月のFBIによる活動継続確認以降、2026年8月1日〜2日の対象期間中の新規侵害事案は確認できず、公開活動未確認。監視継続。",
      "MITRE_ATTACK": ["T1190", "T1133", "T1556", "T1071"],
      "活動状況": "活発（長期継続中、新規確認事案なし）",
      "情報源": [
        "SecurityWeek「China's Salt Typhoon Hacked Critical Infrastructure Globally for Years」 - https://www.securityweek.com/chinas-salt-typhoon-hacked-critical-infrastructure-globally-for-years/",
        "SecurityWeek「Salt Typhoon Targeting Old Cisco Vulnerabilities in Fresh Telecom Hacks」 - https://www.securityweek.com/salt-typhoon-targeting-old-cisco-vulnerabilities-in-fresh-telecom-hacks/"
      ]
    },
    {
      "ID": "RU-SVR-STORM2945",
      "名称": "Storm-2945（Midnight Blizzard/APT29/Cozy Bearの活動サブクラスタ、作戦名「CaptiveCrunch」）",
      "国": "ロシア",
      "分類": "国家支援型APT（諜報・出張者標的）",
      "戦略的意図": "ロシア対外情報庁（SVR）の指揮下、出張中の外交官・研究者・企業幹部等の高価値標的に対する認証情報・通信内容の窃取を目的とした、物理接点（宿泊施設）を起点とする諜報活動。",
      "日本関連度": "中（海外出張中の日本人ビジネスパーソン・外交関係者・研究者も潜在的標的となり得る。渡航セキュリティ教育上の実務的な参考事例）",
      "最新動向": "【新規】2026年8月1日、Microsoftがホテルの公衆Wi-Fiキャプティブポータル（DNSリゾルバ兼用構成）を乗っ取り、偽のブラウザ／OSアップデート画面経由でRAT「CornFlake」（ウェブカメラ・マイク・キーストローク窃取機能）を配布する作戦「CaptiveCrunch」を公表。一部でClickFix型のターミナルコマンド実行誘導も併用。",
      "MITRE_ATTACK": ["T1557", "T1204.004", "T1113", "T1123"],
      "活動状況": "活発（新規追跡開始）",
      "情報源": [
        "The Hacker News「Hijacked Hotel Wi-Fi Pushes Fake Updates to Deliver Surveillance Malware」(2026-08-01) - https://thehackernews.com/2026/08/hijacked-hotel-wi-fi-pushes-fake.html"
      ]
    },
    {
      "ID": "CN-UNKNOWN-HERMESDEEPSEEK",
      "名称": "knaithe / KnYuan（中国語話者、DeepSeek+Hermes Agent自律型攻撃オペレーター）",
      "国": "中国（語圏、帰属は推定）",
      "分類": "非国家アクター（AIエージェント駆動型自律攻撃、国家支援の有無は未確認）",
      "戦略的意図": "不明確。金銭目的または初期アクセスブローカー的活動の可能性があるが、国家との関係は現時点で未確認。オープンソースAIエージェント基盤を用いた攻撃の完全自律化・スケール化を志向。",
      "日本関連度": "中（Langflow、n8n、Marimo、NetScaler ADC/Gatewayをインターネット公開する国内組織全般が潜在的標的。攻撃手法自体の技術的重要性が高く、脅威モデリング上の参照事例として重要）",
      "最新動向": "【新規・TTP変化】2026年7月31日、Palo Alto Networks Unit 42が公表。Telegram経由の初回指示のみでDeepSeekをHermes Agent経由で操作し、以降は人間の介在なしに標的探索・エクスプロイト選定・実行までを自律実行。460以上の標的へ攻撃試行し、7系統のエクスプロイトチェーン・8件のCVE（CVE-2026-33017、CVE-2026-21858、CVE-2025-68613、CVE-2026-39987、CVE-2026-3055等）を使用。NetScaler経由3組織、Marimo経由11件で成功を確認。",
      "MITRE_ATTACK": ["T1190", "T1588.006", "T1583"],
      "活動状況": "活発（新規追跡開始）",
      "情報源": [
        "The Hacker News「Chinese Hacker Commands DeepSeek via Telegram to Launch Autonomous Attacks」(2026-07-31) - https://thehackernews.com/2026/07/chinese-hacker-commands-deepseek-via.html"
      ]
    },
    {
      "ID": "CN-UNKNOWN-OCTLURK-SILKLURK",
      "名称": "不明（中国語話者、新型バックドア「OctLurk」「SilkLurk」使用アクター）",
      "国": "中国（語圏、帰属は推定）",
      "分類": "諜報活動（既知アクターへの帰属未確定）",
      "戦略的意図": "中央アジア・南西アジア地域の政府機関（外務省、法執行機関、都市計画等）を標的とした情報収集。一帯一路関連国・国境地域における中国の影響力拡大と関連する可能性。",
      "日本関連度": "低〜中（直接の対日事案なし。ただし中国の対中央アジア諜報活動の手法・インフラは、対日活動を含む中国サイバー諜報の全体像把握のための参照事例として有用）",
      "最新動向": "【新規】2026年8月1日、Kaspersky（ロシア系セキュリティ企業）が公表。2025年1月以降、アフガニスタン、キルギス、タジキスタン、ウズベキスタン、カザフスタン、シリアの政府機関等を標的に、新型難読化バックドア「OctLurk」「SilkLurk」およびプロキシ用ユーティリティ「LurkProxy」を用いた継続的な侵害活動を確認。既知アクターへの帰属は未確定。",
      "MITRE_ATTACK": ["T1105", "T1090"],
      "活動状況": "活発（新規追跡開始）",
      "情報源": [
        "The Hacker News「Suspected Chinese-Speaking Hackers Target Central Asian Governments With OctLurk and SilkLurk」(2026-08-01) - https://thehackernews.com/2026/08/suspected-chinese-speaking-hackers.html"
      ]
    }
  ],
  "個別インシデント_企業単位": [
    {
      "企業名": "ニチレイグループ（日本）",
      "事象概要": "2026年7月14日発生の不正アクセスによるシステム障害。冷蔵倉庫入出庫・冷凍食品出荷業務が停止し、イオン系列スーパー、ケンタッキーフライドチキン、くら寿司等を含むサプライチェーン障害に波及。7月21〜22日、「RansomHouse」を名乗るハッカー集団がダークウェブ上で犯行声明を発出（本JSON内RansomHouseエントリ参照）。",
      "ステータス": "収束方向（2026年7月24日、業務が全面復旧・正常化。2026年8月1日〜2日の対象期間中、ランサムウェア関与・個人情報漏えいの有無について新たな公式確定情報は確認できず）",
      "情報源": [
        "JAPANSecuritySummit Update「ニチレイへのサイバー攻撃が示したサプライチェーンリスク」(2026-07-14) - https://japansecuritysummit.org/2026/07/14690/",
        "NHKニュース「ニチレイ サイバー攻撃によるシステム障害から復旧 業務正常化」(2026-07-24) - https://news.web.nhk/newsweb/na/na-k10015185471000"
      ]
    },
    {
      "企業名": "fairlife, LLC（コカ・コーラ子会社、米国）",
      "事象概要": "2026年7月16日、ランサムウェア関連事案により米国内生産システムの一部に不正アクセス。米国内生産を一時停止。Anubisランサムウェアグループが7月20日にリークサイトへ掲載。",
      "ステータス": "継続（2026年8月1日〜2日の対象期間中、新たな進展は確認できず、背景情報として記録）",
      "情報源": [
        "BleepingComputer「Coca-Cola says Fairlife ransomware attack halts US dairy production」(2026-07-16) - https://www.bleepingcomputer.com/news/security/coca-cola-says-fairlife-ransomware-attack-halts-us-dairy-production/"
      ]
    },
    {
      "企業名": "Craneware（英・医療billingソフトウェア）",
      "事象概要": "2026年7月20日、従業員・顧客・パートナーデータの窃取をLSE向け開示で公表。米国内2,000超の病院・薬局が利用するソフトウェアを提供。",
      "ステータス": "継続（2026年8月1日〜2日の対象期間中、新たな進展は確認できず）",
      "情報源": [
        "The Record from Recorded Future News「Software provider to more than 2,000 US hospitals says hackers stole employee and customer data」(2026-07-20) - https://therecord.media/software-provider-for-us-hospitals-customer-data-breach"
      ]
    },
    {
      "企業名": "KDDI（日本、参考：既報事案の継続）",
      "事象概要": "ISP事業者向けメールシステムへの不正アクセス（6月17日確認、7月6日確定値公表：メールアドレス1,223万件、うちパスワード761万件）。原因の第三者製ソフトウェアの脆弱性はKDDI確認時点でベンダー未認識のゼロデイ状態だったと判明。",
      "ステータス": "継続（2026年8月1日〜2日の対象期間中、新規進展は確認できず、背景情報として記録）",
      "情報源": [
        "セキュリティ対策Lab「KDDI、メールシステムへの不正アクセスで1,223万件のメールアドレスが漏洩」(2026-07-06) - https://rocket-boys.co.jp/security-measures-lab/kddi-isp-mail-unauthorized-access-leak/"
      ]
    },
    {
      "企業名": "Suno（米・AI音楽生成プラットフォーム）",
      "事象概要": "2025年11月25日発生（自己増殖型npmワーム「Shai-Hulud」による開発者認証情報窃取を起点とするサプライチェーン侵害）のデータ侵害が、2026年7月20-21日にHave I Been Pwnedへの登録により初めて公になった。約5,528万件のメールアドレス、氏名、住所、電話番号、Stripe経由の部分的カード情報が流出。",
      "ステータス": "継続（2026年8月1日〜2日の対象期間中、新たな進展は確認できず）",
      "情報源": [
        "TechCrunch「AI music generator Suno breach affects 55M users, per Have I Been Pwned」(2026-07-21) - https://techcrunch.com/2026/07/21/ai-music-generator-suno-breach-affects-55m-users-per-have-i-been-pwned/"
      ]
    },
    {
      "企業名": "ANCPI（ルーマニア国立地籍・不動産広告庁）",
      "事象概要": "2026年7月14日、実行主体ByteToBreach（正規資格情報を用いた侵入で土地登記データベースを完全消去、本産不動産取引が全面停止）による事案。ByteToBreachは単発の完結型犯行であり継続的キャンペーンの確認ができないため、脅威アクター一覧からは削除し、本インシデント記録としてのみ保持する。",
      "ステータス": "継続（オフラインバックアップによる部分復旧中、2026年8月1日〜2日の対象期間中の新たな進展は確認できず）",
      "情報源": [
        "Cybernews「Hacker wipes European country's entire land registry database, paralyzing real-estate market」(2026-07-20) - https://cybernews.com/security/hacker-deletes-romanian-land-registry-database/"
      ]
    },
    {
      "企業名": "Coinkite（Coldcardハードウェアウォレット、カナダ）",
      "事象概要": "2021年3月のファームウェア統合ミス（シード生成がハードウェア乱数生成器ではなく決定論的ソフトウェアPRNGにルーティングされていた欠陥）に起因し、攻撃者が1,196件のビットコインアドレスから41分間で1,082.65 BTC（約7,020万ドル相当）を窃取。Galaxy Researchが分析・公表。攻撃主体は未特定の単独犯罪者と推定。",
      "ステータス": "対応中（2026年7月31日、全対象モデル向け緊急ファームウェアを公開済み。ただし適用しても既存の露出済みシードの安全性は回復せず、利用者による新規シード生成への移行が必要）",
      "情報源": [
        "The Hacker News「Coldcard Hardware Wallet Flaw Linked to $70 Million Bitcoin Theft in 41 Minutes」(2026-08-01) - https://thehackernews.com/2026/08/coldcard-hardware-wallet-flaw-linked-to.html"
      ]
    },
    {
      "企業名": "Adform（デンマーク・広告テクノロジー企業）",
      "事象概要": "配信JavaScriptファイルが改ざんされ、被害サイト訪問者のビットコイン・イーサリアム・トロン等のアドレスがブラウザ側で悪意あるアドレスへ差し替えられるサプライチェーン攻撃。フォーム直接入力にも影響。攻撃主体は未特定。",
      "ステータス": "対応済み（2026年7月27日に不正コードを検知・除去、関係当局へ報告。利用者にはブラウザキャッシュのクリアと送金前のアドレス再確認を呼びかけ中）",
      "情報源": [
        "The Hacker News「Hackers Poison Adform Script to Swap Crypto Wallet Addresses Across Customer Sites」(2026-08-01) - https://thehackernews.com/2026/08/hackers-poison-adform-script-to-swap.html"
      ]
    }
  ]
}


【schema】
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "CTI COP Schema v0.1",
  "type": "object",
  "required": [
    "date",
    "actors"
  ],
  "properties": {
    "date": {
      "type": "string"
    },
    "actors": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "属性",
          "アクター",
          "カテゴリ",
          "戦略意図",
          "日本にとっての重要性",
          "最新の主要活動",
          "情報源"
        ],
        "properties": {
          "属性": {
            "type": "string"
          },
          "アクター": {
            "type": "string"
          },
          "カテゴリ": {
            "type": "string"
          },
          "戦略意図": {
            "type": "string"
          },
          "日本にとっての重要性": {
            "type": "string"
          },
          "最新の主要活動": {
            "type": "string"
          },
          "情報源": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      }
    }
  }
}
