# 中学3年数学の検証記録

2026-11-04。中3は47単元、練習376問と47クイズ、903claims。47操作図、8本の段階解説（32段階）、8枚の図、2本の22秒動画を追加した。小4から中3まで全6学年、合計190単元・1505問。

## 内容と図の独立確認

原稿作者とは別の担当が全423解答と903claims、説明・ヒント・例題・問いかけを読み、数値99問を別の有理数式で再計算した。公式Excelの92行・54終端を別のXML抽出で照合し、主キー47件と双方向coverageを確認した。短い説明や単問で条件が欠けないよう、非零の除数、正の面積、円周角の配置、模型の適用域、標本の選び方を補い、最終原稿を再読した。詳細は independent-review-jh3.md に記録している。

操作図47件は独立した有限状態契約から441状態を列挙し、値・座標・面積・比・角・根号・標本の組合せを確認した。8解説32段階は各101場面、計3232場面を検査。旧143図と旧435場面は新モジュール読込前後で不変。対応辺に等長と誤読できる刻み目を使わず、実長と角を表示するよう修正した。三平方では取り除く合同三角形と残る正方形を別の色の役割で統一した。

全47図の既定状態と全32段階を16枚の一覧画像で確認した。実Chromeのfont境界で全3673状態・場面を測定し、文字の重なり・切れ・横はみ出しを0にした。変域の数値、放物線の説明、目盛と見出しは専用の表示領域へ移した。数式が正しいことと読みやすいことを別に確認している。

2動画は全1320フレームを復号。独立した多角形計算と画素測定で固定面積、描画線の進行、直角記号を確認した。原寸の代表場面も目視した。圧縮で線先端の色が変わる計器の誤判定は、開始フレームとの差分という別経路で弁別して修正した。時間入替・欠落・縮小・移動など9改変対照を拒否する。動画自体を検査の誤判定へ合わせて変更していない。

## 操作と保存

標本調査は架空部品8個から3個を選ぶ56組を用いる。「決めて選ぶ例」と実際の無作為抽出を表示で区別する。実Chromeで全56組、境界値、同じ結果、APIなし、例外、最大8回の拒否、重複bind、別単元へのbind、フォーカスを確認した。操作欄だけでなく、私有状態・SVGの選択・表・合計・平均が一致することも別計算で検査。3種類の実DOM改変を拒否し、失敗時は直前の数学表示と回答記録を保つ。

版2〜7の21経路をモデルで検査し、実Chromeでは19ケースを確認した。版7のseedと異なる回答と「説明できた」の取消を保存して、新しいdocumentから読み直す。保存処理を何もしないようにした対照では失敗することも確認した。読取拒否・未来版・壊れた保存・教材欠落・同数置換・未確認教材では元の保存文字列を保護する。復旧は版7のcoreと全教材を残したまま中3入口を隠す方式とする。

「自分でためす」と不正な入力は、全単元の回答と実保存値が変わらないことを検査する。比較は使い捨てブラウザ内で行い、結果のbooleanだけを検査プロセスへ返す。全て合成の保存記録を用い、実学習者の記録には触れない。

## 実行環境と総点検

MacのChrome、Acorn 8.15.0、Playwright 1.62.1、ffmpeg/ffprobe、既存Manim 0.20.1を使用。追加パッケージ・外部動画・有料APIは不要。教材はfile://で開くES2017・非moduleのHTML/CSS/JSで、検証用ライブラリを読み込まない。

```sh
BASIC_LEARNING_CHECK_MODULES=/private/tmp/basic-learning-check-deps/node_modules sh tools/check.sh
```

既存41検査を保った全51gateを実行した。実行ツールが返した本体終了コードは0（`FULL_CHECK_PROCESS_EXIT=0`）。以下はファイルに保存した実ログの抜粋：

```text
JH3_MIGRATION=PASS checks=45631 legacy_units=143 legacy_questions=1129 synthetic_jh3_units=47 total_units=190 version_paths=21
JH3_PERSISTENCE_GUARDS=PASS catalogue_cases=17 pending_or_invalid_cases=24 unsupported_versions=6 corrupt_cases=9 original_bytes_preserved=true version_ceiling=true old_v6_isolated=true positive_probes=6
JH3_INDEPENDENT_MATH=PASS units=47 questions=376 games=47 claims=903 numeric_recomputed=99 official_rows=92 terminal_coverage=54
JH3_VISUAL_MATH=PASS units=47 states=441 checks=20411 legacy_diagrams=143 positive_probes=8 partial=false source_sha256=7ed07cd7e30e381e4be5d20f2122ff28453bba8e204b6e6edf5977cf1b5bf365
JH3_LESSON_MATH=PASS scenes=8 steps=32 frames=3232 checks=1582758 legacy_frames=435 positive_probes=5 source_sha256=feaa1545560fce6bf1371476b83b3a6d7f8ab8b1d231fbd0870f8ea0642514e7
JH3_MEDIA=PASS clips=2 decoded=2 frames=1320 h264=1280x720 audio=none seconds=44 bytes=372063
JH3_MEDIA_GEOMETRY=PASS factor_frames=660 pythagoras_frames=660 colored_regions=7 fixed_area_model=true boundary_motion=true right_angle_marker=true positive_probes=9
JH3_ASSET_REVIEW=PASS units=47 posters=8 exact_frames=true media_claims=true all_material_accepted=true
JH3_TYPOGRAPHY=PASS modules=47 states=441 scenes=8 frames=3232 width=390 text_collisions=0 text_clipping=0 overflow=0 positive_probes=1 negative_probes=1
BROWSER_CHECK={"viewports":[1440,1024,390],"modes":["es","js"],"checkedViews":4991,"practiceAnswers":1505,"buddyDialogues":190,"interactiveVisuals":190,"jsErrors":0,"unexpectedRequests":0,"offline":true}
JH3_STORAGE_BROWSER=PASS cases=19 versions=2,3,4,5,6,7 total_records=190 missing_blocked=true read_failure_write_remove_clear_calls=0 readonly_original_bytes_preserved=true changed_v7_roundtrip=true noop_save_rejected=true positive_probes=1
JH3_INTEGRATED_UI=PASS modes=es,js width=390 units=47 views=94 keyboard_and_choice_controls=346 lesson_steps=64 try_transfers=16 video_plays=4 id_checks=505 duplicate_ids=0 duplicate_positive=1 reset_state_positive=1 errors=0 external_requests=0
JH3_RANDOM_SAMPLING=PASS cases=69 groups=56 each_item_groups=21 native_file_api=true rejected_values=32 max_attempts=8 same_sample=true state_preserved=true progress_unchanged=true focus=true duplicate_bind=false stale_listener=false math_surface_positive_probes=3 errors=0 external_requests=0
LESSON_BROWSER_CHECK={"lessons":44,"steps":177,"checkedViews":1062,"predictions":44,"localVideosPlayed":8,"viewports":[1440,1024,390],"modes":["es","js"],"errors":0,"unexpectedRequests":0,"offline":true}
CHECK_RESULT=PASS
```

全190単元の各画面を幅1440/1024/390、小学生/中学生の両表示で検査した。全1505問への回答と190件の説明確認は幅1024・小学生表示で実施した。中3専用検査は幅390・両表示で94画面、346操作、64段階、16回の図への引継ぎ、4回の動画再生を確認した。共通検査の動画8本に中1・中2・中3の専用各2本を合わせ、全14本を再生確認した。図の確認やゲームだけで達成率が変わらないことも確認した。

## 公開差分と確認の限界

公開差分は値を表示しない検出器で、秘密値形式・連絡先・個人ホームパス・一時ログの混入を確認する。陽性対照を含め、動画metadataは技術項目だけに限定する。本文と実装の読解は別担当も行った。形式検査だけで任意の機密情報不在を証明したとは扱わない。

本記録は数学・表示・操作・保存の制作検証。運営者による教材採用や実際の教室での確認とは区別する。全教材の publication は preview、humanApproval は null を維持。判断事項はQUESTIONS.mdに残している。
