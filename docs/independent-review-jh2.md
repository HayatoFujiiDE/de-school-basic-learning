# 中学2年数学の独立エビデンスレビュー

2026-11-04。教材作者とは別の reviewer が、問題文から正答と数値導出を作り、全39単元の本文と参照claimを読んだ。作者の数値台帳を期待値の生成元には使用していない。`review.evidence` の昇格は数学・文章の独立確認を表し、運営者の公開承認を表さない。全39単元の `publication` は `preview`、`humanApproval` は `null` を維持する。

## 対象と確定したsnapshot

- 本文：39単元、4種類の説明文156件、入口78件、練習312問、ゲーム39問、例題39件（各4段）、誤解と訂正39件、会話39件。問題の選択肢、説明、ヒントも読んだ。
- 独立解答：351件。数値解答102件は reviewer が書いた式から有理数として再計算した。作者の102件の台帳は、その後に別の整合性検査として照合した。
- claim：751件。本文に結び付く702件、操作図39件、段階解説8件、動画2件。図が参照しない別claimに事実が書かれていることでは代用せず、参照する `visual` / `motion` / `video` 自体の条件と数値を確認した。
- 作者のpending本文SHA-256：`fe7da11de32a82fb0ace6b759c20ea2e84e9875bb66370f3606a7cf19b7126ba`。
- evidenceだけを昇格した統合本文SHA-256：`38bb767360c0a69d06d0e15ecb99ca8fe2c7aff190b9a80a8f8d727bfe2a5db6`。
- 旧4ファイルのバイトと、組み立て後の旧104単元・817問、元のcategories/source recordsを保持した。新学年は内部grade8・保存版6で追加される。

[独立期待値](../tools/jh2-review-expectations.json) は各解答・独立数値式・本文hash・公式行を持つ。[承認記録](../sources/content-review-jh2.json) は各単元の読了範囲を持つ。最終fixture生成時にも、全39の手作成期待値があり、各単元が最後に読んだsnapshotと一致することを必須にした。正規化hashはpending/verifiedというevidence表記のみを同一視するが、検査は統合ソースのraw SHAも確認する。新しい本文変更や、記録を更新していないstatus昇格では合格しない。

## 一次資料と対応範囲

[MEXTの学習指導要領コード掲載ページ](https://www.mext.go.jp/a_menu/other/data_00001.htm) と、そこに掲載された[中学校コードExcel](https://www.mext.go.jp/content/20230901-mxt_syoto01-000010374_10.xlsx) を使用した。Excel SHA-256は `7a4a76a4d8665de90755a027b09269a265b1677f52e198750c7b3e5e9a4d4d7e`。

作者の抽出器とは別に標準ライブラリのminidomでXMLを読み、発音用 `rPh` を除外し、「数学」かつprefix `835022` の82行を抽出した。行番号・code・本文のcanonical JSON SHA-256は `6f5e0d0a5a8f9211c0d4240064a1e44ada4f05b7dafdeb88c50eefeecd89051a`。末端48項目は、内容30・数学的活動3・用語11・目標3・取扱い1。全末端への対応を確認し、全82行の投影は69 mapped / 13 headingとなった。図形の定義・証明・逆・反例・合同記号、変化の割合・傾き等の用語も本文と照合した。

[中学校学習指導要領解説 数学編](https://www.mext.go.jp/component/a_menu/education/micro_detail/__icsFiles/afieldfile/2019/03/18/1387018_004.pdf) の第2学年（印刷pp.100–130）も確認した。PDF SHA-256は `849e254fd907721f069ae601e18db0c44ae5b79a5ea8394675f18f867d9d237e`。四分位数は奇数個の全体中央値を上下から除く方法、ひげは最小・最大までという採用方法を明示している。

mappedは、この独自の導入教材に対象内容を表す箇所があることを意味する。一単元で年間の指導・反復練習・評価まで尽くしたという意味ではない。本文hashの一致も、新しく書き換えた文章の数学的正しさを自動で証明するものではない。

## 読了時に修正した主要な境界

- 式の次数は零多項式を対象から除外し、非零定数は0次とした。整数の性質では文字が整数である条件、除法・式変形では非零条件を保持した。式の項が消えることと、文字の値が0であることを分けた。
- 連立方程式は和の式だけで元の二条件を置換しない。一方の原式を残して消去した文字を求め、元の両式に戻す。単問に前問の式が必要だった箇所は条件を再掲し、別の妥当な答えにも読めた選択肢を修正した。
- 一次関数はこの教材の定義でa≠0とし、a=0は比較用の一定関数とした。全数・区間・離散入力を区別し、変化の割合ではΔx≠0、y/xの比較ではx≠0を明示した。切片の値とそれに対応する点、グラフ上の点と移動案内を区別した。
- 平行線の例題は角の位置を明記し、上交点右上の外角→下交点右上の同位角→上交点左下の対頂角→二内角の錯角という連鎖にした。合同では非退化な三角形と頂点対応を保持した。
- 27q6の「B,D,Cが一直線」だけでは、Dが線分BC外にある45°の等角も許された。Dが線分BC内部、Aが直線BC外という条件へ限定した。合同で示す結論を初めから仮定に加えない。
- 並べ替え2問を全件確認した。4q8は「定数項を先に取り除く」と手順を指定し、23q8は平行補助線→錯角の対応→直線の角という依存を持つ。入替可能な三辺の根拠を恣意的な一順序で採点する問題はない。
- 四分位数は2個以上の有限データを対象とし、並べ替えで重複値を失わない。IQR0でも全値同一とは限らない反例、同じ箱ひげ図でも元データが異なる例、同じ値の重なりにより[Q1,Q3]内が厳密な半数とは限らないことを確認した。
- 確率では等確率の基本結果、硬貨・さいころの独立性、抽選盤の一様な停止角度、各玉を同確率で取り出す条件を各説明へ補った。理論確率は有限回の回数や一回の結果を保証しない。硬貨4結果・さいころ36組を独立に全列挙して、和7の6組、少なくとも一方6の11組、その余事象25組を確認した。
- 操作図claimに有限の状態と数値を明示した。他単元にある「同上3データ」という参照は箱ひげ図claim自身の3配列と五数要約へ置換し、非直角の二等辺三角形の辺を「斜辺」と呼ぶ表現は「等しい二辺」へ直した。

## 実検査結果

[内容検査](../tools/check-jh2.cjs) を最終統合本文へ実行した出力：

```text
JH2_INDEPENDENT_MATH=PASS units=39 questions=312 games=39 claims=751 numeric_recomputed=102 official_rows=82 terminal_coverage=48
JH2_POSITIVE_PROBES=PASS wrong_answer changed_prose missing_unit missing_jh2_script missing_jh1_script same_count_substitution old104_runtime_mutation source_wrapper_mutation invalid_expression
JH2_SOURCE_SHA256=38bb767360c0a69d06d0e15ecb99ca8fe2c7aff190b9a80a8f8d727bfe2a5db6
JH2_EVIDENCE_LIMIT=math_and_text_review_not_operator_publication_approval
```

[保存移行検査](../tools/check-jh2-migration.cjs) は先に独立commitした。合成した中2の39件は保存境界だけを検証するための入力であり、教材内容の承認には使っていない。

```text
JH2_MIGRATION=PASS checks=28887 legacy_units=104 legacy_questions=817 synthetic_jh2_units=39 total_units=143 version_paths=15
JH2_PERSISTENCE_GUARDS=PASS catalogue_cases=16 pending_or_invalid_cases=20 unsupported_versions=6 corrupt_cases=9 original_bytes_preserved=true version_ceiling=true old_v5_isolated=true positive_probes=5
JH2_MIGRATION_SCOPE=synthetic_storage_only_no_content_or_publication_approval
```

旧v2〜v5の保存には当時存在した学年だけを認める。catalogue欠落・同数置換・重複・不整合、未確認教材、未知版・壊れたenvelope・読取失敗では保存文字列を上書きせず、reset/removeItemも防ぐ。これらの合成検査は、統合後の実Chromeでの保存・再読込検査を置き換えない。

## 動画2本

[動画manifest](../sources/media-jh2-manifest.json) と[独立検査器](../tools/check-jh2-media.cjs) にsource/runner/MP4/参照claimのSHAを固定した。各22秒、660フレーム、H.264 1280×720、音声なし。

```text
JH2_MEDIA=PASS clips=2 decoded=2 frames=1320 h264=1280x720 audio=none seconds=44 bytes=298447
JH2_MEDIA_GEOMETRY=PASS elimination_frames=660 original_mask_difference_max=5 graph_frames=660 graph_residual_half_px=4 positive_probes=6
```

加減法動画は全660フレームで元の二式の位置と文字マスクを比較し、和の式、x、y、元の両式による確認という順序を検査した。グラフ動画は固定原点、(0,1)、(1,3)、右1上2の案内、描画直線y=2x+1の全フレームを測定した。各動画の0.5/5.5/7.5/11.5/17.5/21.5秒、計12標本を最終色の実画像で独立に読んだ。

グラフの線が既存の青い点に重なる1フレームでは混色により緑の先端検出が短くなった。色閾値を広げる案は、描画前の青い点を線と誤検出したため採用していない。既知の点の半径から求めた可視境界を、その点の内部に先端がある場合だけ適用した。点の外での遅れ、点の内でも過大な欠落、誤った傾き・切片、原式の消失、旧低コントラスト色の6対照は拒否される。画素計測にはcodec/描画誤差の有限許容を含み、全文字幕の全フレームOCRを行ったとは主張しない。

## 境界と記録

操作図の全460状態、8段階解説の3,232中間フレームの数学・文字境界検査と、全143単元の統合ブラウザ検査には別のgateがある。この内容レビューはそれらを代替しない。公開承認、実学習者による理解度評価、年間授業全体の十分性もこのレビューの承認範囲外である。

Step0分類：制作中の前提不足・曖昧な選択肢は公開前に検出した教材draftの修正、色分離境界・変異regexp・実行対象指定は検査器側の問題として区別した。reviewerが親への途中式説明で項を落とした1件は直後に訂正し、4有理数対照と別担当の計算で確認した。教材・期待値・公開本文には入っていない。一時候補記録を親へ渡しており、この作業では中央台帳・memoryを編集していない。
