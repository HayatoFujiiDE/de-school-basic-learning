# 中学2年生 数学の追加計画

## 1. Goal
公式83V11・835022の学習範囲を39単元として提供する。各単元8問、ゲーム1問、4種類の説明、4段の例題、誤解の確認、バディへの説明、関心別入口2つ、操作図を用意する。8本の段階解説と2本のローカル動画を含める。

## 2. Scope / non-scope
file://で動くHTML/CSS/ES2017、非module、fetchなしを維持。新教材・描画・媒体と共通学年/保存境界、検査、記録を変更する。旧4〜中1本文、会話AI、外部動画、児童個人情報、課金API、外部パッケージ追加は対象外。

## 3. Current state
基準main 592bbf16fd47af36c24a379315ccf1569b6f4801。旧104単元817問、catalogue v5。着手時fetch済み、mainとの乖離0/0、作業ツリーclean。独立した4 worktreeで責務を分離する。

## 4. Dependency map
公式Excel/PDF→コード抽出・coverage→原稿/claims→操作図・段階解説→独立数学/媒体検査→verified evidence。並行でrootがv6統合と動画、contentが原稿、uiが図、evidenceが独立検査を担当。公開gateは独立レビューが終わるまでpending。

## 5. Module impact
新units/visuals/lesson-scenes/review-jh2とcssを追加。coreの835022→8、course、catalogue143件・版別最大grade、v2〜5移行を変更。appのroute・負数入力、indexのscript/CSS順序、lessonsの厳密whitelistを拡張。旧v5検査は凍結fixtureで隔離し、新検査で旧104の組立後保全を再検査する。

## 6. Chosen approach
学年別append方式を継続。公式主キー39件を採用し、A12→C7→B13→D7の順。主キーは代表項目であり、公式記述との多対多関係はcoverageCodesに記録する。上限はcatalogue v4→grade6、v5→7、v6→8。保存元v2→4、v3→5、v4→6、v5→7の来歴を厳密に守る。
8解説は同類項、奇数の和、加減法、一次関数のグラフ、平行線、合同証明、箱ひげ図、二枚の硬貨。各4段。動画は2x+y=7/x−y=2の加減法、y=2x+1のグラフ。

## 7. Rejected alternatives
共通renderer/schemaの動的registry全面整理は旧受理・保存・描画境界への影響が過大。別アプリはUI/採点/保存保護が重複し学年間の進捗が分断する。今回の教育内容追加に必要な変更へ限定する。

## 8. Risks and failure matrix
| 状態 | 処理 | 保存への影響 |
|---|---|---|
| 正常v2〜5 | 既存教材の回答・buddyを再採点して移行 | 元版に存在した学年だけ引継ぎ |
| 欠落/置換/重複/版矛盾 | 起動停止 | 書込/削除0回 |
| pending/invalid本文 | verifiedだけ受理、全保存readonly | 元文字列保全 |
| 未来版/破損/読取拒否 | readonly案内 | save/reset禁止 |
| 書込拒否 | 保存不可を可視表示 | 自動retryなし |
| rollback | 新入口を停止 | v6対応coreと全データを保持 |
数学上はa=0を一次関数と呼ばない、割る文字の非零条件、連立の共通解、図の見かけと証明、凸多角形、独立/同様に確からしい試行、奇数個で中央値を除く四分位計算を明記する。架空データのみ使用する。

## 9. Verification
作者とは別の公式抽出・全問解答・全本文/claimsレビュー、旧原稿byte/runtime固定、v2〜5保存移行と未来/破損/部分読込み、全操作状態の数学、全32段×101phase、実fontのtext境界/衝突、全学年3幅1440/1024/390×2表示、禁止語/ES2017/no fetch、負数入力・採点・再読込・readonly UIを確認。動画は全frame復号、幾何、実画像、実Chrome再生を分けて検査。新しい修正と未解決懸念に対応して再検査し、最後にtools/check.shの実PASSを記録する。

## 10. Rollback
旧アプリに単純巻戻ししない。v6読書きと全accepted教材を保持したまま中2入口を非表示にする。保存の投影から中2回答を除かない。未公開段階の失敗は新機能branch内で修正する。

## 11. Open questions
次学年の拡張、達成率文言、サポーター数値、追加ゲームは既定で進めQUESTIONS.mdへ。人による教材採用判断は未実施と明記する。

## 12. Human approval
既存の実装・push・merge・公開依頼の範囲で進める。権限変更、force push、児童実データ利用は行わない。review.publicationはpreview、humanApprovalはnull。人による商用採用確認を機械検査で代替しない。

## 13. Tasks
| # | Task | Depends on | Parallel? | Verification |
|---|---|---|---|---|
| 1 | 公式範囲とMAP/PLAN/REVIEW | 基準確認 | yes | 3独立MAP、2案比較、2review |
| 2 | 原稿39/312問/39game | 1 | yes | 全表面独立レビュー |
| 3 | 図39/解説8 | 1,2契約 | yes | 全状態/phase/実表示 |
| 4 | core/app/v6統合・動画2 | 1 | yes | 移行/不正状態/媒体 |
| 5 | 統合・媒体review・全検査 | 2,3,4 | no | CHECK_RESULT=PASS |
| 6 | commit/PR/merge/再確認 | 5 | no | 共有main更新と実画面 |

計画レビュー: UI責務・独立検証責務の2担当が5軸を確認しGO。動画は全frame復号と標本目視を区別する。

追加依頼（2026-11-04）: 中2の検証・反映を全て完了した後、中3も同等の教材・独立検査を行う。中2の39単元と検査範囲は縮小しない。
