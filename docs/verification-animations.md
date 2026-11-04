# 動く図解の検証記録（2026-11-04）

小学4年生20単元のうち、内容に動きが有効な8箇所へ33段階の図解を追加。画像8枚・字幕付き動画4本（合計91.1秒、音声なし）を同梱した。既存145問・20操作図・達成率の式は維持した。

## 実行

統合用worktree `/private/tmp/basic-learning-motion` で以下を実行した。検証用Acornは既存インストールを明示。教材の実行には不要。

```sh
BASIC_LEARNING_CHECK_MODULES=/private/tmp/basic-learning-check-deps/node_modules sh tools/check.sh
```

exit code 0。以下は実出力の抜粋。

```text
VISUAL_INDEPENDENT_MATH=PASS modules=20 assertions=2982 slider_combinations=2901
LESSON_MATH_RESULT=PASS scenes=8 steps=33 frames=231 assertions=1687 source_sha256=871d6f79fd9b5eb135cb07a09b4d5fb0c0d51b8f015252beb66774a17b75f950
MEDIA_CHECK=PASS clips=4 codec=h264 dimensions=1280x720 audio=none decoded=4 seconds=91.1 bytes=1000927
VIEWPORT=1440 MODES=es,js ALL_ROUTES=PASS
VIEWPORT=1024 MODES=es,js ALL_ROUTES=PASS
VIEWPORT=390 MODES=es,js ALL_ROUTES=PASS
BROWSER_CHECK={"viewports":[1440,1024,390],"modes":["es","js"],"checkedViews":535,"practiceAnswers":145,"buddyDialogues":20,"interactiveVisuals":20,"jsErrors":0,"unexpectedRequests":0,"offline":true}
LESSON_VIEWPORT=1440 MODES=es,js ALL_STEPS=PASS
LESSON_VIEWPORT=1024 MODES=es,js ALL_STEPS=PASS
LESSON_VIEWPORT=390 MODES=es,js ALL_STEPS=PASS
LESSON_BROWSER_CHECK={"lessons":8,"steps":33,"checkedViews":198,"predictions":8,"localVideosPlayed":4,"viewports":[1440,1024,390],"modes":["es","js"],"errors":0,"unexpectedRequests":0,"offline":true}
CHECK_RESULT=PASS
```

その後、画像8枚と確認済みrenderer出力の完全一致検査を加え、`node tools/check-media.cjs` を実行した。

```text
LESSON_POSTERS=PASS originals=8 exact_reviewed_svg=true
MEDIA_CHECK=PASS clips=4 codec=h264 dimensions=1280x720 audio=none decoded=4 seconds=91.1 bytes=1000927
```

SVG解説は、再生による図形変化、停止した図の静止、末尾で停止、focus維持、前後/はじめから、OS動き抑制、画面非表示と遷移時の終了、予想の正誤、達成率に加算しないこと、既存操作図への状態受け渡し、不正stateの一括拒否、pending/悪性SVG/外部video URLの拒否を実Chromeで検査した。動画はfile://で実再生し、1280pxフレームと再生時刻の進行を確認した。ネットワークは検証時に遮断した。

## 制作時に解消した点と検査の限界

動画の角度目盛り/式、切取片/寸法ラベルの重なりを、実Text bbox・別担当の画像確認・同一rendererの座標検査で再現した。図・式・字幕の領域を分離し、図の移動後の辺を基準に寸法を置く。描画時assertを追加し、旧座標の陽性対照と修正版の画像を確認した。分数の3セルの仕切りも残す。数式文字は混ざる補間から、完全な式同士の切替へ変更した。

既存の操作図の数学検査は、単純なcore stubを使っていたため、新しく追加した検証済みunitの同一性確認に対応させた。実units/coreを読み、正しいunitとcode付き描画先を使う。任意unitコピーの拒否も確認し、従来2982検査・2901状態は減らしていない。

最初の統合検査はworktreeにAcorn参照がないため停止し、既存検証環境を明示した。通常sandboxでのChrome起動はOSに拒否され、隔離した新規Chromeプロファイルの起動を許可された環境で再実行した。失敗をPASSへ読み替えていない。

数学的内容と根拠の別担当確認は [lesson-evidence-review.md](lesson-evidence-review.md)。第三者Skillと公式ライブラリの確認範囲は [skill-safety-review.md](skill-safety-review.md)。全MP4フレームは機械decodeし、代表的な途中・末尾フレームを目視した。全フレームを人が目視したという意味ではない。今回の実ブラウザ検査はこのMacのChromeで行い、実iPhone/Safariは未検証。運営による公開承認・外部公開は行っていない。
