# 小学6年・独立エビデンスレビュー

2026-11-04。教材作者と別の担当が、全22単元の本文と解答を読み、198問（練習176＋game22）を独立に解いた。作者の数値監査を期待解の生成元には用いない。数学・教材内容の evidence は verified、運営者の公開承認は未付与である。

## 正本とレビュー境界

- 文部科学省の[教育データ標準公開ページ](https://www.mext.go.jp/a_menu/other/data_00001.htm)を直接確認し、[小学校学習指導要領コード82V12のExcel](https://www.mext.go.jp/content/20230901-mxt_syoto01-000010374_28.xlsx)の第6学年算数88行をZIP/XMLから独立抽出した。作者抽出と行番号・code・全文が完全一致。終端は47（内容・活動30、用語11、目標3、取扱い3）。「階級」と「：」は同階層として扱う。
- [算数編公式解説PDF](https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002607_04.pdf)の第6学年・印刷pp.284–321を確認した。新しい取得はタイムアウトしたため、既存ダウンロードを下記SHAで固定して読んだ。新取得成功とは報告しない。
- 88説明（小学生/中学生向けの短文・詳説）、44入口例、198設問の問題文・選択肢・解説・hint、22例題各4段、22誤解訂正、22buddyの往復文・サンプル・checkpointsを全件読んだ。これらに対応する396claimsに加え、22操作図一般則と6動く解説一般則も独立に数式・適用範囲を確認した。
- 77行を対応、11行を構造見出しに分類した。対応づけは教材の関連範囲であり、習得済み・年間授業の完全代替を意味しない。実際の作図、測定、説明し合う活動と指導者の判断は残る。

## 検証結果

`tools/check-grade6.cjs` は独立手入力の全期待解、全内容hash、公式88行、終端47、coverage/index/数値監査の実体参照を照合する。数値型97問は四則を有理数として別実装で再計算した。旧4・5年44単元は元JSのbyte、組立後の単元・source prefix・categoryを保持している。registryは66codeの一意集合、教材配列は22単元の授業順を別に確認する。

```
GRADE6_INDEPENDENT_MATH=PASS units=22 questions=176 games=22 claims=424 numeric_recomputed=97 official_rows=88 terminal_coverage=47
GRADE6_POSITIVE_PROBES=PASS wrong_answer changed_prose missing_unit missing_grade6_script missing_grade5_script old44_runtime_mutation missing_flat_term invalid_expression
```

`tools/check-grade6-migration.cjs` は本物の旧44教材と6年の合成schema22件を使用する。2→3、2→4、3→4、4→4で全回答・buddy・mode・interestを確認し、旧版への偽学年混入を除外する。registry欠落/置換/重複等12種、pending/schema不備12種、未知版6種、破損envelope9種、読取失敗と回復、書込失敗、resetのnamespace境界を検査した。原保存文字列の保護とメモリ上の操作を分離し、危険なsave/reset/ready変異3種を実際にrejectした。利用者のlocalStorageへ実行していない。

```
GRADE6_MIGRATION=PASS checks=7894 legacy_units=44 synthetic_grade6_units=22 versions=2_to_3,2_to_4,3_to_4,4_to_4
GRADE6_PERSISTENCE_GUARDS=PASS catalogue_cases=12 pending_or_invalid_cases=12 unsupported_versions=6 corrupt_cases=9 original_bytes_preserved=true read_failure_recovery=true positive_probes=3
```

## 動画2本

ManimCE 0.20.1固定・通知なし・pluginなし・noTeX・既存ローカルfont・ネットワークを拒否するrunnerを確認。独自制作sourceとMP4のhashを `sources/media-grade6-manifest.json` へ固定した。分数は「3列→横の分割線→12等分→6区画」を実画像で確認し、2/3×3/4=6/12=1/2を同一全体1で示す。比は20個を5等分、各4個、2組8個と3組12個へ割り当て、合計と2：3を保つ。

独立に抽出した10フレームを目視し、字幕・数式・物体境界を確認した。source上で数量の位置は固定し、線・塗りの表示だけが変わることを確認した上で、12区画と20個の全座標・分離・面積・群との包含を検査した。2本1140フレームを最後までdecode、H.264、1280×720、30fps、各19秒、音声なし。全フレームの見た目を機械視覚で証明したとは主張しない。

```
GRADE6_MEDIA=PASS clips=2 decoded=2 frames=1140 h264=1280x720 audio=none seconds=38.0 bytes=273476
GRADE6_MEDIA_GEOMETRY=PASS product_grid=3x4 selected=6 ratio_objects=20 groups=5 shares=8,12 positions_static=true positive_probes=3
```

操作図22本とSVG動く解説6本の実装・全状態・実ブラウザの検査は、それぞれのgeometry/browser担当と専用gateによる。本レビューはそれらの数学claimsを確認しており、その実装試験まで実施したかのようには記載しない。

## 制作中に直した条件

分母が等分数である説明、単問の図の条件、縦の対称軸、中心と異なる作図点、正方形の一方向だけを伸ばす反例、文字への分数代入、比例の商と単位を明確にした。短文単体でも除数0の除外、正の比・反比例、乗法の法則、軸上の固定点、偶数個の中央値、有限円分割と極限的な長方形の区別が分かるよう修正し、対応claimsも再確認した。解答の値を変える修正はなかった。

検査器側では、一時XML抽出が注音rPhを本文へ混ぜたことを実XMLと合成正例で弁別し、可視文字nodeだけへ修正した。registry配列順を授業順と同一視した初回検査も、製品の一意集合契約とunit.orderを分けて直した。旧storage fixtureのundefined/null差・旧mutationの観測対象と、新coreのprogress envelope不足は、計器と製品の異なる原因として別記録した。最初の失敗を隠してPASSとはしていない。

## 固定スナップショット

| 対象 | SHA256 |
|---|---|
| 作者pending時の6年JS | `5a26adb033fe19b247aa245a7af98c01dfd1f113328be24be0ae32c73f81d10e` |
| 旧4年JS | `d70590602a21f4ed45b7c335109b55f4c5e69aadd1d12082b804244510c6f46c` |
| 旧5年JS | `5eff34aaa8b21b42417878535c7ae768c924eba0455b23befd5f9c803b061792` |
| 公式Excel | `f32ba37970cac91a26656a4f317ca755e2536aa525fc439d214391904e24c8e3` |
| 公式解説の既存PDF | `5eebb7f4ddc516aa47451999659596523a888eb68d49ed7dadeb489c2cd27129` |
| 動画制作source | `79b6941b61b4f9fe410b009deee4b1f76db3e07ae8f99471f79cccaf8d983038` |
| 分数MP4 | `ac03511050237b48e1e4baa8d7be4e62242c8cd97688eec2089173be1781166c` |
| 比MP4 | `b0d759a55ff37acc0f6140092e9ee1410210d84ae15fd04a5fa68a475678c19d` |

数学内容の単元hashは `tools/grade6-review-expectations.json` と `sources/grade6-content-review.json` に保持する。レビュー完了後の `unit.review.evidence` だけの変更は数学内容hashを変えない。内容変更時は新内容を独立に再読してからfixtureを更新する。機械的hash更新だけで未読の改稿を承認しない。
