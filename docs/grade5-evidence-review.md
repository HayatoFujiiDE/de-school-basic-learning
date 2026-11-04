# 第5学年教材の独立エビデンス確認

確認日: 2026-11-04。原稿担当とは別の evidence 担当が、全説明・問題・例題・誤解の訂正・バディの確認点・算数 claims を読み、正答を別途入力して検証する。制作側の解答監査は補助記録としてのみ扱う。全24単元の192問・24ゲーム、462件のclaimsを確認し、修正後の原稿を固定した。121件の数値答案は独立の有理数parserでも再計算した。

## 一次資料

- [文部科学省 学習指導要領コード公開ページ](https://www.mext.go.jp/a_menu/other/data_00001.htm)。公開ページを独立に開き、小学校82V12のリンクを確認。
- [小学校学習指導要領コードExcel](https://www.mext.go.jp/content/20230901-mxt_syoto01-000010374_28.xlsx)。保管済み原本 SHA-256 `f32ba37970cac91a26656a4f317ca755e2536aa525fc439d214391904e24c8e3`。制作処理とは別にZIP/XMLから科目「算数」、コード先頭825025を抽出し、118行の行番号・コード・本文が全件一致。終端は62項目（内容・活動46、用語8、目標3、取扱い5）。
- [算数編公式解説](https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002607_04.pdf)。原稿担当と共有された既存ダウンロードを直接読み、印刷pp.232–283の全領域と活動節を照合。PDF SHA-256 `5eebb7f4ddc516aa47451999659596523a888eb68d49ed7dadeb489c2cd27129`。この確認で新規ネット取得はDNS制約で失敗したため、PDFが当日に再取得されたとは主張しない。

独立抽出実出力:

```text
INDEPENDENT_MEXT_ROWS=PASS grade=5 rows=118 exact_author_match=true source_sha256=f32ba37970cac91a26656a4f317ca755e2536aa525fc439d214391904e24c8e3
```

## 確認したスナップショット

教材版3の追加script SHA-256（evidenceをpendingのまま確認した時点）: `b0161929710d687833bf3fef187e2637aa690fb62dcfe3110863fe1fb3038e29`。`sources/grade5-content-review.json`と`tools/grade5-review-expectations.json`に全24単元の本文hashを記録した。数学の内容から独立したreview状態だけは本文hashの対象外であり、公開承認を与える仕組みではない。

| 領域 | 単元 | 練習問題 | ゲーム | claims |
| --- | ---: | ---: | ---: | ---: |
| A 数と計算 | 9 | 72 | 9 | 174 |
| B 図形 | 8 | 64 | 8 | 153 |
| C 変化と関係 | 5 | 40 | 5 | 96 |
| D データの活用 | 2 | 16 | 2 | 39 |

全単元の小学生/中学生向け短文・詳細文、関心別入口2件、例題の全手順、誤った考えと訂正、ヒント、バディの問い・追問・見本・確認点、選択肢を含めて読んだ。公式62終端項目すべてに対応があり、118行の対応表は107 mapped / 11 heading。全体の目標・数学的活動は学習機会の対応として扱う。

独立の読取専用スナップショット組立に対して実行:

```text
GRADE5_INDEPENDENT_MATH=PASS units=24 questions=192 games=24 claims=462 numeric_recomputed=121 official_rows=118 terminal_coverage=62
GRADE5_POSITIVE_PROBES=PASS wrong_answer changed_prose missing_unit missing_grade5_script grade4_runtime_mutation invalid_expression
GRADE5_SOURCE_SHA256=b0161929710d687833bf3fef187e2637aa690fb62dcfe3110863fe1fb3038e29
GRADE5_EVIDENCE_LIMIT=math_and_text_review_not_operator_publication_approval
```

検査は実行後の4年unit/source/category保全、期待24コード集合、公式行全文、claimsと表示文章の一致、監査一覧と問題の一致まで照合した。期待解は制作側から生成せず、この担当が別に入力した。算数の主張の正しさは実読レビューで確認し、hashはその後の変化を検出するために使う。

## 検出・修正確認

- 合同の説明の「長さだけを等しくして拡大」は矛盾するため、「角の大きさを保ち、各辺を同じ倍率で長くした図形」へ修正。原稿差分と対応claimの再生成を独立に確認。
- 四角形の三角形への分割は、内側を通る対角線という条件を説明・例題・claimへ明示。内角和360°の根拠を限定なしの任意対角線と混同しない。
- 割合の基準量の逆算には、割合が0より大きい条件を追加した。0の割合から基準量は一意に復元できない。グラフのバディ追問の誤字も修正確認。
- 各単元のcoverageから、その単元自身で扱わない隣接知識leafを取り除いた。対応が必要な別単元は保持され、62終端項目の対応は欠けていない。
- 平均動画は、旧直線移動のt=6.0秒で移動ブロックがBの上段と重なった。12矩形に対し中心の種類が11となる数値再現と実MP4フレームで確認。フォントや抽出タイミングだけの問題ではなく、制作経路の幾何的重なりだった。修正後はBの上を通り、同時刻の実フレームで固定10個と移動2個が個別に見える。レンダー関数を呼ばない有理数計算で、Bと横位置が重なる区間の最小縦余白0.48125、最上部1.774が領域上端1.9以内と確認。

```text
MEAN_MIDPOINT_MODEL rectangles=12 unique_centers=11
MEAN_PATH_INDEPENDENT=PASS lower_block_B_min_gap=0.48125 max_block_top=1.774 region_top=1.9
```

4つの図解claimを追加確認した。ノートn冊と送料一回は120n＋80（n=1..8）、凸n角形はn−2個の三角形へ分割（n=3..8）、空の容器へ毎分r Lならt分後rt L（r=1..5,t=0..6、流出なし）、6cm×4cmの直角三角形二枚で長方形を作る例。設問と本文の他の部分は変わっていない。これは途中経路のUI検査とは区別する。

## 2本の動画

ManimCE 0.20.1の既存・固定環境で制作された原文独自素材を確認。分数の動画は全体の幅を保つ6等分、3区画と2区画の合成、分母を変えず5/6とする各字幕・式を確認。平均の動画は修正後の途中と終了の実MP4フレームを確認し、12個の量を保ち4個ずつになることを確認。どちらも既存unitのc17・visual・motionの範囲内である。全フレームを人が目視したという意味ではない。

レンダーsource SHA-256: `074c6cd0b673c2cb4b618e5255e569a2761a6c7b2848ce157dc385af0ba47f25`。動画・字幕・claim参照の記録は`sources/media-grade5-manifest.json`。

- 分数: `bbad06c05c1d5900915828e9aaaf11edbc9a6589d355fe8d00e015583a141be6`
- 平均: `5e1b49b48e7e9bceb9e8be2532171ad1d1dced5fe8fd702786a1066930681647`

実デコード検査:

```text
GRADE5_MEDIA=PASS clips=2 decoded=2 h264=1280x720 audio=none seconds=39.6 bytes=279022
```

## 第4学年と記録の保全

`check-grade-migration.cjs`は実coreと元の第4学年20単元で実行する。未承認原稿に依存せず移行境界を調べるため、第5学年側だけ明示的な合成教材1件を使う。この合成教材の検査は、新しい第5学年原稿の承認を意味しない。

```text
GRADE_MIGRATION=PASS checks=189 grade4_records=20 synthetic_grade5_records=1 versions=2_to_3 roundtrip=true storage_failures=true mutation_detected=true
```

版2から3のみを移行し、20単元全記録、正誤の再計算、バディ、途中再開、mode/interest、学年往復と再読込を確認。旧版に偽装した第5学年記録・再開先、他版・将来版、破損、保存拒否、余分な自由文を検査し、実coreの移行条件を無効化する変異が検出されることも確認した。

## 限界

コード対応は学習機会への対応であり、年間授業の時数・指導過程すべての代替、学習者の習得、実児童での理解・アクセシビリティの保証ではない。エビデンス確認は原稿と実装の数学的整合性の確認であり、運営者による公開承認・実児童への配信承認ではない。端末と操作UIの総点検は別の実ブラウザ検証記録を参照する。本文・数値・描画を変えた際は該当内容を再レビューし、hashだけを自動更新しない。
