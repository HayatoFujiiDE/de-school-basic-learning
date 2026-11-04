# 中学3年 数学教材の独立内容レビュー

2026-11-04。原稿・図・動画の制作担当とは別の担当が、47単元の本文、全423解答、公式資料との対応を確認した。独立検査の実出力は下記のとおり。これは教材の数学・説明・証拠のレビューであり、運営者による公開承認ではない。全単元は `publication: preview`、`humanApproval: null` を維持する。

## 対象と固定した原本

- 最終 `js/units-jh3.js` SHA256: `f23118bae7b7c5d879552732b7bc9e8180931b748555bce8eeb61fe2c3378feb`
- 制作担当の pending 原稿 SHA256: `8b2cc6d9301d0d1448d9a1cef446873625129b3466002008b7f5cf7c968647f0`
- 最終版との差は47件の `review.evidence` の pending → verified だけ。逆置換後の全文バイト一致と、各単元の本文オブジェクト一致を確認した。claims の事実文は変更していない。
- 47単元、練習376問、予想問題47問、例題47、誤解と訂正47、buddy47。説明は各単元2モード×2長さ、入口は各2種類。903 claims は本文846、操作図47、段階解説8、動画2。
- 数値入力99問は独立に書いた式で有理数として再計算。残る選択式・並べ替えと予想問題も問題文から独立に解いた。各単元の判断メモは `sources/content-review-jh3.json` にある。

小4・小5・小6・中1・中2の既存5原稿は、基準 bda548c の固定ハッシュと一致する。旧143単元・練習1129問の実行時データ、元の categories、既存 source records も保存される。新旧合計190単元・練習1505問。

## 一次資料と対応の意味

[MEXT 学習指導要領コードのページ](https://www.mext.go.jp/a_menu/other/data_00001.htm)から中学校83V11を確認した。[公式 Excel](https://www.mext.go.jp/content/20230901-mxt_syoto01-000010374_10.xlsx)の SHA256 は `7a4a76a4d8665de90755a027b09269a265b1677f52e198750c7b3e5e9a4d4d7e`。制作側とは別の minidom による XML 抽出で、ふりがな rPh を本文へ混入させず、835023 に属する行799–890の92行を照合した。行番号・コード・原文の全件一致を検査器へ固定している。

[中学校学習指導要領解説 数学編](https://www.mext.go.jp/component/a_menu/education/micro_detail/__icsFiles/afieldfile/2019/03/18/1387018_004.pdf)の SHA256 は `849e254fd907721f069ae601e18db0c44ae5b79a5ea8394675f18f867d9d237e`。対象は印刷pp.131–161。平方根、二次方程式の範囲、円周角の定理の逆、標本調査の意味を原文と照合した。

公式92行は62 mapped / 30 heading。終端54コードは内容37・用語7・数学的活動3・目標3・取扱い4で、未対応の終端は0。用語・記号は根号、有理数、無理数、因数、√、∽、全数調査。単元からコードへの参照と coverage-map から単元への参照の両方向を検査した。円周角を使う接線作図は順方向の定理を使うので、逆の取扱い540は単元38だけに対応させた。

mapped は、この独自教材に該当する内容を扱う説明・問いがあることを表す。一つの教材で年間の授業時数、全難度の演習、全ての証明方法、個別指導や学習評価まで完結したという意味ではない。態度・対話・活動の目標は buddy の説明と振り返りへ対応するが、実際の学習成果を保証しない。

## 独立性と変更検出

期待解は作者の解答表や数値監査から生成せず、レビュー用の小分け原稿を読み、問題文から求めて別記録へ入力した。その後で原稿の answer と照合した。数値99問の式も別に作り、最後に作者監査を二次的な整合確認として照合した。

数値検査は許可した四則・整数累乗・整数関数・厳密な有理数平方根・正数の四捨五入だけを解釈する。一般の式評価や eval は使わない。無理数の平方根を有限小数の厳密値として採用しない。有効数字は文字列の末尾0を保持する。`sqrt(2)` を厳密な有理数解として扱う入力、0除算、コード文字列を拒否する対照を含む。

全説明・設問・解説・ヒント・例題・誤解訂正・buddy は、それぞれの claim の全文と一致を確認した。本文ハッシュ、source wrapper、metadata、公式92行、既存5ファイルも固定する。ハッシュ一致は「既読の内容が変わっていない」証拠であり、新しい文章が正しいことを自動判定する仕組みではない。変更時はその範囲を再読する。

並べ替えは単元9 q8 と単元20 q8。独立な根拠の任意の順を唯一の正答にしていないことを確認した。前者は式を設定して変形し結論へ進む依存順、後者は定数項を先に取り除く指定と両辺への加算・平方根・解の順によって一意となる。

## レビューで補った条件

以下は公開前の原稿レビューで検出し、対応する本文と claim を同期した。最終 snapshot では全て再読済み。

- 単元1・3・4・6・7・9: 「0を割る」と除数0の違い、交差項の数、負の値を正の面積へ広げないこと、指定する共通因数、整数二数で因数分解できる範囲、個数図と一般の整数式の範囲を明記した。
- 単元15・22・23・26・27: 近似値の位置の聞き方、単問への面積条件再掲、倍率を比で述べる際の x≠0、長さと面積の区別、架空模型の適用域0≤t≤3をそろえた。
- 単元30・35: 相似の各条件を短文だけでも読める形にした。影による測定には水平・鉛直・同時平行光・影の正の長さを局所に再掲した。同比率3/2の対応辺に等長tickを置く図は、長さが等しいという慣習と衝突するため実長表示へ修正された。幾何の比が正しいことと、記号が適切なことを分けて確認した。
- 単元37–39: 円周角が中心角の半分であること、Bの位置、比較する二角の名称、接線作図の半径・外点・二つの円を明示した。定理の逆には四点相異、同じ側、非共線を保持する。
- 単元42・43: 合同で弦の二等分を説明する設問は中心を通らない弦に限定し、円錐の半断面は軸を通る平面で切って軸で半分にしたものと明記した。
- 単元46: 推定値の相違から標本結果の相違を述べる設問は、同じ大きさの標本・同じ推定式・正しい計算を前提にした。計算誤りと標本のばらつきを無条件に同一視しない。

平方根の±と非負の√、非零除数、二次方程式の全実数解と場面での採否、相似・円周角・三平方の配置条件、無作為抽出と推定誤差を重点確認した。単元37は一つの配置で理由を説明し、他の配置まで証明したとは述べない。単元40の一般的な面積保存の説明と、動画の3–4–5の数値例も区別した。

## 図・段階解説・動画

47操作図の有限状態441に対応する claim と、8段階解説・2動画の claim を全文読んだ。固定数値・座標・変域・対応順・数量保存を独立に計算し、UI設計表と照合した。無作為抽出は8個から異なる3個を選ぶ56組で、同値を持つ異なるIDを併合しない。固定例の選択、新しい実抽出の成功、失敗による以前の結果の保持を区別する。

操作図の全実装状態・段階解説の全phase・Chrome文字領域・画面操作の検査は別担当の gate にある。この内容レビューや動画検査だけを、それら全ての実行証拠として扱わない。

動画は両方の source と字幕、条件表示を読み、1/7/13/19秒および線を描く途中の標本画像を目視した。各660frameを全復号し、別に定義した多角形から7色領域の面積・境界・中心・領域外画素、描画線の進行、直角記号を全frameで測定した。全frameの文字OCRや、目視で全frameを読んだという主張はしない。

| 動画 | 内容 | MP4 SHA256 |
| --- | --- | --- |
| 8350233121240000 | x>0の面積模型。x=3の比率、四領域9,6,9,6、合計30 | `34da525fb9acf470b4683aec8ceb22e54b6223a2843c2b2f082b3a789598812c` |
| 8350233231100000 | 3–4–5の直角三角形と三辺外側の正方形9,16,25 | `ef3aa97754c46967beb6d02caa6c72683e8edc4d4fdb9571d7da6fa0a39afb18` |

scene source SHA256 は `8a798fefa9476548429b2e090dc2e7ec52e5a6590906f650b8c6c369d053176a`、renderer SHA256 は `078641076d94b548d899b661be6395e4c68ad85cf944de65df66426414187979`。既存ManimCE 0.20.1固定、通知停止、plugins空、ネットワーク拒否、外部TeX不要、出力metadata除去をsourceで確認した。新しい依存のインストールは行っていない。

測定途中に、圧縮とアンチエイリアスで固定色の閾値から外れる線先端を「線が遅れている」と判定する計器の誤りを検出した。原寸のframe差分という別経路で描画自体は所定位置にあると弁別し、描画中だけ開始frameとの差分を測る方式へ変更した。静止した領域と完成線は色・幾何で測る。後の実frameを前の時刻として渡す対照、先行線、遅延、領域欠落・縮小・移動を拒否する。製品の数式や動画の位置・時間をこの計器修正で変えていない。

## 取得した検査出力

統合 checkout を `BASIC_LEARNING_ROOT` で指定し、レビューJSONは当担当の確定ファイルを指定して実行した。いずれも本体終了コード0。

```text
JH3_INDEPENDENT_MATH=PASS units=47 questions=376 games=47 claims=903 numeric_recomputed=99 official_rows=92 terminal_coverage=54
JH3_POSITIVE_PROBES=PASS wrong_answer changed_prose missing_unit missing_jh3_script missing_jh2_script same_count_substitution old143_runtime_mutation source_wrapper_mutation invalid_expression
JH3_SOURCE_SHA256=f23118bae7b7c5d879552732b7bc9e8180931b748555bce8eeb61fe2c3378feb
JH3_EVIDENCE_LIMIT=math_and_text_review_not_operator_publication_approval
JH3_MEDIA=PASS clips=2 decoded=2 frames=1320 h264=1280x720 audio=none seconds=44 bytes=372063
JH3_MEDIA_GEOMETRY=PASS factor_frames=660 pythagoras_frames=660 colored_regions=7 fixed_area_model=true boundary_motion=true right_angle_marker=true positive_probes=9
LEGACY_BASELINE=PASS five_original_sources_exact
```

移行検査は先行する機能commitで取得済み。合成47単元を用いた保存境界の検査であり、新原稿や公開の承認とは別。

```text
JH3_MIGRATION=PASS checks=45631 legacy_units=143 legacy_questions=1129 synthetic_jh3_units=47 total_units=190 version_paths=21
JH3_PERSISTENCE_GUARDS=PASS catalogue_cases=17 pending_or_invalid_cases=24 unsupported_versions=6 corrupt_cases=9 original_bytes_preserved=true version_ceiling=true old_v6_isolated=true positive_probes=6
JH3_MIGRATION_SCOPE=synthetic_storage_only_no_content_or_publication_approval
```

期待集合、既存バイト、全答案、全表面、coverage、source hash、媒体hashはそれぞれ別の入口で検査する。初期状態のハッシュ一致だけで保存移行やUI操作を代用しない。未確認教材の除外、未知版・破損保存・欠落registryでの読み取り専用保全は移行gate、実Chromeの保存/再読込/操作は統合gateに委ねる。
