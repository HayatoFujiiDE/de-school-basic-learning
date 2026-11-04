# 中学1年数学の検証記録

2026-11-04。対象は中1の38単元・304問・38ゲーム・732claims、38操作図・8段階解説（32段）・2動画。既存の小学4～6年を含め、合計104単元・817問を検証した。

## 確認の段階

1. 作者による全単元検査：説明4種類・入口・例題・誤解訂正・問いかけとclaimsの対応、155数値の有理数計算、公式107行と69終端、旧66単元の原稿byteと組立結果を確認。
2. 別担当による全文・全342解答の確認：作者の解答ledgerから期待値を生成せず、342解答を独立に判断し、155数値を別式で再計算。条件・用語・coverageの修正後に全原稿hashを再照合した。詳しくはcontent-review-jh1.md。
3. 制作者とは別に795操作状態と3,232アニメーション場面を数・座標・個数・半径・面積などから検査。15画像で38図と全32段階を目視し、実Chromeで全4,027状態の文字重なり・切れも調べた。
4. 統合後、全104単元の全画面・全817問・説明確認・再開・保存を実Chromeで確認。中1専用の全コントロール、キーボード、図への引き継ぎ、動画停止を別に検査した。

途中で見つかった、数学条件の省略、語彙gateへの抵触、図の識別子、目盛りと文字の交差を修正し、対応検査を追加した。円錐の初期図はスマートフォンでも高さ線が読める倍率3に改善し、初期3→左キー2→reset3と全操作範囲を再確認した。正答だけでなく、途中の表示と操作の意味を確認した。

## 実行環境とコマンド

教材利用時にNodeや検証ライブラリは不要。検査はMacの実Chrome、Acorn 8.15.0、Playwright 1.62.1、ffmpeg/ffprobe、既存Manim 0.20.1環境で行った。新規dependencyの導入はない。

```sh
BASIC_LEARNING_CHECK_MODULES=/private/tmp/basic-learning-check-deps/node_modules sh tools/check.sh
```

初回は環境変数の指定漏れでAcornを解決できず、内容検査前に停止した。既存resolverの参照先を明示し、全gateを最初から再実行した。製品コードや検査条件を弱めて解消したものではない。以下は最終実行の抜粋（本体終了コード0）。

```text
JH1_INDEPENDENT_MATH=PASS units=38 questions=304 games=38 claims=732 numeric_recomputed=155 official_rows=107 terminal_coverage=69
JH1_POSITIVE_PROBES=PASS wrong_answer changed_prose missing_unit missing_jh1_script missing_grade6_script same_count_substitution old66_runtime_mutation source_wrapper_mutation invalid_expression
JH1_VISUAL_MATH=PASS modules=38 states=795 assertions=75183 legacy_diagrams_unchanged=66 positive_probes=4 source_sha256=b3712f83c1209badbcb5d08cf6b18fa0cd2bff17f70c5bf99eb718b0a619b7c5
JH1_LESSON_MATH=PASS scenes=8 steps=32 frames=3232 assertions=386937 legacy_frames_unchanged=243 positive_probes=5 source_sha256=73c2216ae9ac92fefca96445aa74485d27a7ebc725e9968490ca2f475cf4b2d8
JH1_MEDIA=PASS clips=2 decoded=2 frames=1290 h264=1280x720 audio=none seconds=43 bytes=274809
JH1_MEDIA_GEOMETRY=PASS fixed_origin=true signed_point_frames=600 signed_point_max_error_px=1.273 equation_card_frames=690 card_counts=12,6,3 positive_probes=5
JH1_TYPOGRAPHY=PASS modules=38 states=795 scenes=8 frames=3232 width=390 text_collisions=0 text_clipping=0 overflow=0 positive_probes=1
BROWSER_CHECK={"viewports":[1440,1024,390],"modes":["es","js"],"checkedViews":2743,"practiceAnswers":817,"buddyDialogues":104,"interactiveVisuals":104,"jsErrors":0,"unexpectedRequests":0,"offline":true}
JH1_STORAGE_BROWSER=PASS cases=16 versions=2,3,4,5 total_records=104 missing_blocked=true failed_read_write_calls=0 roundtrip=true
JH1_INTEGRATED_UI=PASS modes=es,js width=390 units=38 views=76 keyboard_and_choice_controls=316 lesson_steps=64 try_transfers=16 video_plays=4 id_checks=457 duplicate_ids=0 duplicate_positive=1 errors=0 external_requests=0
LESSON_BROWSER_CHECK={"lessons":28,"steps":113,"checkedViews":678,"predictions":28,"localVideosPlayed":8,"viewports":[1440,1024,390],"modes":["es","js"],"errors":0,"unexpectedRequests":0,"offline":true}
CHECK_RESULT=PASS
```

共通lesson検査の動画8本に加え、中1専用browser検査が新2本を両modeで再生する。合計10本を実動画として確認した。32の必須gateはtools/check.shから実行し、失敗時には終了コード非0とCHECK_RESULT=FAILを返す。

## 保存と公開差分

版2・3・4から版5へ既存内容だけを引き継ぎ、全104単元を保存して新しいページでも復元した。欠落・重複・同数置換・未確認素材・未来版・破損・読取失敗では元の保存値を上書きしない。検査は合成記録だけを使い、実際の学習者の保存内容へ接続していない。

公開差分はテキスト検出器の陽性対照とともに確認し、認証値の形式、メール・電話の形式、個人のホームパス、作業ログ等の混入を検査した。公式Excelは取得原本hash一致、MP4は許可した技術metadataだけを持つ。outputと検証画面はgitignore対象。形式検査だけで任意の機密情報不在を証明するものではないため、本文も独自の架空教材として別担当が実読した。

## 確認の限界

この記録は数学・表示・操作・保存の制作検証であり、運営者による配信承認や授業での利用実績を意味しない。publicationはpreview、humanApprovalはnullを維持する。商用利用の前に、運営者が内容と利用方針を判断できる状態まで整えた。次の拡張や指標の判断事項はQUESTIONS.md。
