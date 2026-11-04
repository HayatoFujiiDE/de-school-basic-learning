# 小学6年生追加の検証記録

2026-11-04。第4・第5学年44単元を保持し、第6学年22単元を追加する。内容制作者、図制作者、独立内容検証担当、共通処理と図の独立検証担当を分離した。独立確認が終わるまで原稿のreview.evidenceはpendingとする。

## 既存記録の保持

旧44教材を元ファイルのhashと組立後の実体で比較する。保存版2からは4年、版3からは4・5年だけを版4へ移行し、偽造された新学年の記録を除外する。独立した合成6年22教材を使い、全回答・説明確認・学年・再開先・再保存まで確認した。これは6年原稿の内容承認と区別する。

```text
GRADE6_MIGRATION=PASS checks=7894 legacy_units=44 synthetic_grade6_units=22 versions=2_to_3,2_to_4,3_to_4,4_to_4
GRADE6_PERSISTENCE_GUARDS=PASS catalogue_cases=12 pending_or_invalid_cases=12 unsupported_versions=6 corrupt_cases=9 original_bytes_preserved=true read_failure_recovery=true positive_probes=3
CORE_CHECKS=42 PASS
GRADE_MIGRATION=PASS checks=189 grade4_records=20 synthetic_grade5_records=1 versions=2_to_3 roundtrip=true storage_failures=true mutation_detected=true
```

期待コード集合を別scriptに固定し、追加script未読込・同数のcode置換・重複・学年矛盾を検出する。pending等の受理不能素材がある場合も全保存を止める。読取失敗・未知版・破損保存は元文字列を残し、saveだけでなくreset/removeItemも禁止する。

旧テストの未登録storage返り値がundefinedだった点を、[Storage APIのnull契約](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem)へ整合させた。移行mutationも、旧学年保持だけでなく偽造された新学年記録が入る誤りを観測する対照へ変更した。どちらも検査側の前提であり、製品保護を外して合格させていない。

別に、保存envelopeのprogressが配列・null・欠落の場合を保護しきれていない初稿を独立検査で検出した。正常な空objectを対照に、外側の構造の検査と回答値の正規化を分離して修正した。

## 動画

元の1を固定した分数の乗法、同じ5まとまりから部分を求める比の2本を制作。分数は初稿の12区画が最初から見える構成を、3列→水平分割→12等分→6区画へ改善した。数学の誤答と、理解を助ける表示順の改善を区別して記録する。

固定12区画・固定20部品について、数、等分、位置、色分け、式、字幕と実動画中間画像を独立確認した。全期間で部品の位置は動かさず、分割線・色・括りの意味が変わる。レンダー時の領域・非交差assertと別実装の数値検査、全フレームのデコードを実行した。

```text
GRADE6_MEDIA=PASS clips=2 decoded=2 frames=1140 h264=1280x720 audio=none seconds=38.0 bytes=273476
GRADE6_MEDIA_GEOMETRY=PASS product_grid=3x4 selected=6 ratio_objects=20 groups=5 shares=8,12 positions_static=true positive_probes=3
```

独立担当は分数の1/4.5/6/9/12/17秒、比の1/6/10.2/16秒を確認し、図・字幕・式の重なりがないことを確認した。新しいパッケージ、クラウド音声、実在する人の情報を使っていない。

## 数学と学年の範囲

公式原本82V12の6年88行を別のZIP/XML抽出で本文・行・コードと照合。ふりがなrPhを本文に混ぜない。用語「階級」と「：」をコード接頭辞だけで親子判定しない。公式解説の第6学年（印刷pp.284–321）も参照する。柱状グラフは固定幅の階級と度数を扱い、階級幅を変えて分析する中学1年の操作は含めない（p.308）。

## 検証の限界

確認は合成の学習記録と独自の架空の数値例だけで行う。実児童・保護者の情報、会話、認証情報を入力せず、外部AIへ送らない。独立エビデンス確認と運営の配信承認は区別し、humanApprovalはnullのままにする。実授業での理解や利用体験、他のブラウザや実端末での運用確認は自動検査で代替しない。

## 操作図と動く解説

全22操作図の322状態を、作者と別の数式・座標・個数計算で照合した。旧44図の出力は不変。6解説の全24段階をphase 0〜1の101点ずつ、計2424フレームで確認し、旧14解説の171比較フレームも不変だった。

```text
GRADE6_VISUAL_MATH=PASS modules=22 states=322 assertions=28934 legacy_diagrams_unchanged=44 positive_probes=3
GRADE6_LESSON_MATH=PASS scenes=6 steps=24 frames=2424 assertions=281777 legacy_frames_unchanged=171 positive_probes=5
```

点対称の面積検査は、座標丸めの長さ誤差を面積へそのまま適用していた初期計器を修正した。元図3200に対する丸め後3199.999840460452は周長から導く面積誤差範囲内だが、頂点を0.1px変えた対照は拒否する。教材の点を動かしてテストへ合わせていない。

実画面レビューで、分数の濃色6セルの境界が塗りと同色になる初稿を検出した。矩形数・面積を保ったまま明るい境界へ変更し、コントラスト3以上と旧同色を拒否する検査を追加した。「1マス」の説明に合わせ線対称図を縦横の方眼へ整え、行・列の40px間隔も検査する。操作図と解説図の結論IDは別名にし、統合DOMの重複検査で確認する。

## 初回総検査で止まった点

幅1440/1024/390と両表示の全画面遷移は通ったが、全単元操作の途中で次の出力となった。

```text
BROWSER_CHECK=FAIL visual reacts 8250263111200000
CHECK_RESULT=FAIL
```

この単元の分子スライダーは既定値3・上限3。共通検査が無条件に右キーを入力していた。独立した2つの実Chrome測定で、右キーでは3のまま図も不変、左キーでは2になり図が変わり、右へ戻すと元図へ戻ることを確認した。イベント未接続・描画遅延・図が入力に依存しない可能性をこの左右比較で除外した。教材は変更せず、検査は実DOMの上下限から動かせる方向を選ぶ方式へ修正した。旧操作が変化しない対照と、新操作で値・図の両方が変わる検査を常設した。

## 保存保護の実ブラウザ検証

```text
GRADE6_STORAGE_BROWSER=PASS cases=9 old_records=44 missing_files_blocked=true pending_read_only=true future_and_corrupt_preserved=true failed_read_write_calls=0
```

Chromeの新しい合成profileで、教材欠落・code置換・未確認素材・未来版・破損JSON・配列progress・読取失敗を検証した。正常な旧44記録を引き継いで6年も回答すると66記録が残り、6年のボタンだけを隠して保存しても全記録を保持した。

## 第6学年だけの独立実画面検査

```text
GRADE6_INTEGRATED_UI=PASS modes=es,js width=390 units=22 views=44 keyboard_and_choice_controls=142 lesson_steps=48 try_transfers=12 video_plays=4 id_checks=235 duplicate_ids=0 old_id_positive=1 errors=0 external_requests=0
```

全操作部を小学生/中学生の両表示で動かし、入力値だけでなく図の変化とリセット後の一致を確認した。動く解説から操作図への12回の引き継ぎでは、図の値・フォーカス・記録不変も確認。旧ID名に戻す対照で重複検出が失敗を返すことを確認した。

文書は制作担当が別に読み直し、READMEの集計、20ローカル参照、版4の実core、読込順と全教材を照合した。

```text
DOC_LOCAL_REFERENCES=PASS checked=20 missing=[]
DOC_RUNTIME_PROBES=PASS
GRADE6_REVIEW_STATUS_ONLY=True units=22
```

## 修正後の総検査

実行コマンド（既存の検証用依存を指定）:

```sh
BASIC_LEARNING_CHECK_MODULES=/private/tmp/basic-learning-check-deps/node_modules sh tools/check.sh
```

実出力（終了コード0）:

```text
BROWSER_CHECK={"viewports":[1440,1024,390],"modes":["es","js"],"checkedViews":1749,"practiceAnswers":513,"buddyDialogues":66,"interactiveVisuals":66,"jsErrors":0,"unexpectedRequests":0,"offline":true}
GRADE6_INTEGRATED_UI=PASS modes=es,js width=390 units=22 views=44 keyboard_and_choice_controls=142 lesson_steps=48 try_transfers=12 video_plays=4 id_checks=235 duplicate_ids=0 old_id_positive=1 errors=0 external_requests=0
LESSON_BROWSER_CHECK={"lessons":20,"steps":81,"checkedViews":486,"predictions":20,"localVideosPlayed":8,"viewports":[1440,1024,390],"modes":["es","js"],"errors":0,"unexpectedRequests":0,"offline":true}
CHECK_RESULT=PASS
```

全3学年の旧・新内容検証、記録移行、禁止語、ES2017、操作図、途中アニメーション、全動画decode、全回答、説明確認、保存と再開を通した。初回のFAILを隠さず、原因修正後の再実行でPASSを得た。ブラウザはオフラインの新規profileで、Mac Chromeを使用した。

公開差分は58ファイルを対象に、認証情報パターン・メール/電話形式・新しい個人ホームパス・一時生成物・媒体metadataを値を出さない検査で確認した。陽性対照が検出できることと検査中のファイル不変も確認し、該当0・output非追跡。人名一般の完全自動検出を主張せず、素材は架空の数値と独自図のみで構成し、変更内容も別途読んだ。
