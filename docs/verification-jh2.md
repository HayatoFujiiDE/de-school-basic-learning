# 中学2年数学の検証記録

2026-11-04。中2は39単元、312問と39クイズ、751claims。39操作図、8本の段階解説（32段階）、2本の22秒動画を追加する。既存教材を合わせて143単元・1129問。

## 独立した確認

作者とは別の担当が全表示文・351解答・751claimsを読み、数値102件を有理数の別式から再計算した。公式Excelの82行・末端48コード・11用語を別のXML抽出方法で照合した。個々の問題だけを表示しても条件が分かるよう、非零の除数、角の位置、線分上の点、合同の対応、確率の公平性・独立性・戻す条件を補った。全指摘の修正後の本文を再読し、その原稿hashを固定した。

39図の460状態は独立した有限状態契約から列挙し、値・座標・角・辺・四分位数・基本結果の個数を検査した。8解説の32段階は各101場面を確認した。旧104図と旧339場面は新モジュールの読込前後で不変。図を見て確かめることと一般の証明を区別する。

15枚の一覧画像で39図・32段階を目視し、実Chromeで全3692状態の文字の重なり・切れを検査した。零長グラフ、誤った扇形、同じ個数の不正な選択肢、異なる型の初期値も、改変対照で拒否することを確認した。合同記号を本文・図・字幕で統一した後にも再検査した。

動画は作者とは別に、加減法で元の式を保持すること、座標・傾き・切片、途中の図と字幕を確認した。全1320フレームの復号・幾何検査と、12場面の目視を区別して実施した。外部動画・追加パッケージ・有料APIは使用していない。

専用UI検査では、前の表示モードの「自分でためす」が残した状態を初期状態と誤認する検査側の前提を修正した。実Chromeで初期・表示切替のみ・図への引継ぎのみ・引継ぎと表示切替の4条件を比較し、図のリセットが常に既定値へ戻ることを確認。操作前後の全コントロール値とHTMLを照合し、既定と異なる引継ぎ状態が表示切替で保持される対照を恒久検査へ加えた。製品の状態保持動作は変更していない。

## 実行環境

MacのChrome、Acorn 8.15.0、Playwright 1.62.1、ffmpeg/ffprobe、既存Manim 0.20.1を使用。教材自体はfile://で動き、検証ライブラリは読み込まない。全ブラウザ検査は使い捨てプロファイルと合成記録だけを使う。

## 総点検の実出力

```sh
BASIC_LEARNING_CHECK_MODULES=/private/tmp/basic-learning-check-deps/node_modules sh tools/check.sh
```

41の必須gateを全て実行し、本体終了コード0。以下は最終ログの抜粋。

```text
JH2_MIGRATION=PASS checks=28887 legacy_units=104 legacy_questions=817 synthetic_jh2_units=39 total_units=143 version_paths=15
JH2_PERSISTENCE_GUARDS=PASS catalogue_cases=16 pending_or_invalid_cases=20 unsupported_versions=6 corrupt_cases=9 original_bytes_preserved=true version_ceiling=true old_v5_isolated=true positive_probes=5
JH2_INDEPENDENT_MATH=PASS units=39 questions=312 games=39 claims=751 numeric_recomputed=102 official_rows=82 terminal_coverage=48
JH2_POSITIVE_PROBES=PASS wrong_answer changed_prose missing_unit missing_jh2_script missing_jh1_script same_count_substitution old104_runtime_mutation source_wrapper_mutation invalid_expression
JH2_VISUAL_MATH=PASS units=39 states=460 checks=8408 legacy_diagrams=104 positive_probes=8 partial=false
JH2_LESSON_MATH=PASS scenes=8 steps=32 frames=3232 checks=189284 legacy_frames=339 positive_probes=3 source_sha256=b11cd5e1d4d166670f1294fc19084c6dea12b7765af2fe6e5e2a0a6c8d98956e
JH2_MEDIA=PASS clips=2 decoded=2 frames=1320 h264=1280x720 audio=none seconds=44 bytes=298447
JH2_MEDIA_GEOMETRY=PASS elimination_frames=660 original_mask_difference_max=5 graph_frames=660 graph_residual_half_px=4 positive_probes=6
JH2_ASSET_REVIEW=PASS units=39 posters=8 exact_frames=true media_claims=true all_material_accepted=true
JH2_TYPOGRAPHY=PASS modules=39 states=460 scenes=8 frames=3232 width=390 text_collisions=0 text_clipping=0 overflow=0 positive_probes=1 negative_probes=1
BROWSER_CHECK={"viewports":[1440,1024,390],"modes":["es","js"],"checkedViews":3763,"practiceAnswers":1129,"buddyDialogues":143,"interactiveVisuals":143,"jsErrors":0,"unexpectedRequests":0,"offline":true}
JH2_STORAGE_BROWSER=PASS cases=17 versions=2,3,4,5,6 total_records=143 missing_blocked=true failed_read_write_calls=0 roundtrip=true
JH2_INTEGRATED_UI=PASS modes=es,js width=390 units=39 views=78 keyboard_and_choice_controls=292 lesson_steps=64 try_transfers=16 video_plays=4 id_checks=435 duplicate_ids=0 duplicate_positive=1 reset_state_positive=1 errors=0 external_requests=0
LESSON_BROWSER_CHECK={"lessons":36,"steps":145,"checkedViews":870,"predictions":36,"localVideosPlayed":8,"viewports":[1440,1024,390],"modes":["es","js"],"errors":0,"unexpectedRequests":0,"offline":true}
CHECK_RESULT=PASS
FULL_CHECK_PROCESS_EXIT=0
```

全143単元の画面・全1129問・143件の説明確認、旧版保存の移行、未来版・破損値・教材欠落の保護を実Chromeで確認した。幅1440/1024/390、小学生/中学生の両表示を対象とした。共通動画検査の8本に加え、中1・中2の専用検査で各2本を両表示で再生し、合計12本を確認した。ソース・媒体・表示・実操作・保存を別の検査経路で確認している。

## 保存と公開差分

教材版6は版2〜5から元の版に存在した教材の回答と自己確認だけを引き継ぐ。全143単元を保存する。欠落・重複・同数置換・未確認素材・未来版・破損・読込失敗では元の保存値を上書きしない。中2の入口を非表示にする復旧でも版6のcoreと全データを保持する。

公開差分は秘密値・連絡先の形式・個人ホームパス・一時ログの混入を値を表示しない検出器で検査する。陽性対照を含める。図・動画は独自制作、数値例は架空。MP4のmetadataは技術項目だけ。形式検査で任意の機密情報不在を証明したとはせず、本文も別担当が実読した。

## 確認の限界

数学・表示・操作・保存の制作検証と、人による教材採用の判断は区別する。publicationはpreview、humanApprovalはnull。授業での利用実績や運営者の配信承認を済ませたとは扱わない。判断事項はQUESTIONS.mdに記載する。
