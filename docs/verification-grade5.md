# 小学5年生追加の検証記録

2026-11-04。第4学年20単元を保持し、第5学年24単元を追加。教材の制作、数学の独立検証、図の制作、共通処理・図の独立検証を分担した。

## 内容と根拠

公式Excelから第5学年118行を抽出。別のXML抽出実装で行番号・コード・本文を照合した。対応107行、構造見出し11行。数学的活動・内容の取扱い・用語も含む終端項目62件の対応を確認した。全24単元・192問と24ゲーム、462主張を独立して読み、答案216件を別に確定、数値121件を有理数演算で再計算した。

```text
GRADE5_INDEPENDENT_MATH=PASS units=24 questions=192 games=24 claims=462 numeric_recomputed=121 official_rows=118 terminal_coverage=62
GRADE5_POSITIVE_PROBES=PASS wrong_answer changed_prose missing_unit missing_grade5_script grade4_runtime_mutation invalid_expression
GRADE_MIGRATION=PASS checks=189 grade4_records=20 synthetic_grade5_records=1 versions=2_to_3 roundtrip=true storage_failures=true mutation_detected=true
```

承認されたpending原稿のhashは `b0161929710d687833bf3fef187e2637aa690fb62dcfe3110863fe1fb3038e29`。統合時はevidenceフラグ24件だけをverifiedへ更新し、本文hashが同じことを独立checkerで確認した。第4学年は元ファイルのバイトだけでなく、追加script実行後の各unit・元source・categoryの不変性も検査した。

合同の説明、割合の割り算の条件、図で使う送料・水量・凸多角形の適用範囲は独立レビューで精密化した。単に正答値をコピーして検査したものではない。運営による配信承認は含まない。

## 図と途中の動き

24操作図の全指定状態2,958通りを、制作側の計算関数を使わず数・面積・長さ・角度・単位で照合。6解説24段階の各101時点、計2,424フレームについて等分・色の量・図形の面積・物体の非交差を検査した。既存4年の99フレームは追加script読込後も完全一致した。

初稿の平均MP4では移動中のブロックが中央列に重なった。SVGの小数のかけ算・分数・割合にも途中の重なりがあり、移動経路全体とラベルの領域を見直した。見えなくなる物体を色や透明度でごまかさず、物体を追える非交差の経路へ変更。旧配置を実際に検出する対照を残した。平均動画は生成時の毎フレームbbox検査、別実装の1,001時点検査、独立した中間MP4画像の確認を行った。

```text
GRADE5_VISUAL_MATH=PASS modules=24 states=2958 assertions=113276 positive_probes=2
GRADE5_LESSON_MATH=PASS scenes=6 steps=24 frames=2424 assertions=465049 legacy_frames_unchanged=99 positive_probes=5
GRADE5_VIDEO_MOTION=PASS samples=1001 objects=12 collisions=0 original_midpoint_rejected=true
GRADE5_MEDIA=PASS clips=2 decoded=2 h264=1280x720 audio=none seconds=39.6 bytes=279022
```

Chromeによる独立した描画検査も639件、文字交差・図外へのはみ出し0。24図を全件目視した。これは描画ハーネスだけの結果と区別し、実教材でも390px・両modeの48画面、57操作、48解説段階、12回の操作図への接続を別担当が確認した。

## 総点検の経過

- 第1回: 数学・素材・動画は合格。学年切替のE2Eが、URL変更を検知しても描画前の別学年一覧を受理する不備を検出した。実Chromeで直後と描画後を分けて確認し、`main[data-grade]`の一致を待機条件へ追加した。旧条件が誤って通る対照も実E2Eに残した。
- 第2回: 全幅・両modeの全画面合格。操作図の「2番目の選択肢なら表示が変わる」という検査の仮定が、初期選択が2番目の小数除法で成立しなかった。未選択の選択肢を操作するよう修正し、同じ選択肢では表示が変わらないことも確認した。
- 第3回: 通常画面と動く解説をそれぞれ最後まで検査し、以下の実出力を取得。全問題・全バディ確認・保存と再開を含む。

```text
BROWSER_CHECK={"viewports":[1440,1024,390],"modes":["es","js"],"checkedViews":1171,"practiceAnswers":337,"buddyDialogues":44,"interactiveVisuals":44,"jsErrors":0,"unexpectedRequests":0,"offline":true}
LESSON_BROWSER_CHECK={"lessons":14,"steps":57,"checkedViews":342,"predictions":14,"localVideosPlayed":6,"viewports":[1440,1024,390],"modes":["es","js"],"errors":0,"unexpectedRequests":0,"offline":true}
```

学年ごとの正規URLにより戻る・進むも確認。旧版のキーボード用「本文へ」が単元から一覧へ移ることを実機再現し、ページを移さず本文へフォーカスするよう修正した。最新版では同じ操作で単元URLを維持する。

## 最終一括検査

全変更を統合した後、次のコマンドを実行した。検査用Acornを外部ディレクトリから解決する設定であり、教材本体への依存追加はない。

```sh
BASIC_LEARNING_CHECK_MODULES=/private/tmp/basic-learning-check-deps/node_modules sh tools/check.sh
```

終了コード0。通常画面1,171件・動く解説342件の実ブラウザ検査を、この一括実行でも最後まで通過した。

```text
BROWSER_CHECK={"viewports":[1440,1024,390],"modes":["es","js"],"checkedViews":1171,"practiceAnswers":337,"buddyDialogues":44,"interactiveVisuals":44,"jsErrors":0,"unexpectedRequests":0,"offline":true}
LESSON_BROWSER_CHECK={"lessons":14,"steps":57,"checkedViews":342,"predictions":14,"localVideosPlayed":6,"viewports":[1440,1024,390],"modes":["es","js"],"errors":0,"unexpectedRequests":0,"offline":true}
CHECK_RESULT=PASS
```

## 検証範囲と運用への引き渡し

検査は独立したChromeプロファイルのfile URLで実行し、教材の実ファイルを使用した。文字入力は合成の検査文のみ。実在する子ども・保護者の情報、認証情報、外部AI送信を使っていない。公開前の差分監査では検出器の陽性対照を通し、秘密パターン・メール・電話・不要なキャッシュ/ログの混入を確認した。自動検出だけで個人名を網羅したとは扱わず、原稿全件の独自・架空内容の確認と合わせた。

実際の授業での分かりやすさの確認、運営による内容承認、他のブラウザ/端末での実利用検証は未実施。版3は制作プレビューであり、これらを自動検査の合格で置き換えない。
