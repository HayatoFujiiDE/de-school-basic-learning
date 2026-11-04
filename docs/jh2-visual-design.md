# 中学2年 操作図・段階解説 契約

基準592bbf1。所有は本書、js/visuals-jh2.js、js/lesson-scenes-jh2.js、css/jh2-visuals.cssだけ。既存104図・28sceneを変更しない。公式835022+下表suffix、内部grade8。各図claimIds=[visual]、各scene=[motion]。

追加登録・exact code委譲・二重load無作用。ES2017、file://、fetch/moduleなし。整数stepとexact choiceで全直積合法。子ども表示はcore.escape。描画用内部座標を本文の単位として示さない。負量は面積や個数ではなく式/数直線で表す。負の0は表示0へ正規化。

全SVG IDはjh2-visual-またはjh2-scene-の固定prefix。結論は各summary。以下ID欄はprefix省略、要素の数量indexを固定する。

|suffix|defaults|範囲|状態数|数学契約|主なID|
|---|---|---|---:|---|---|
|3110000000|`{"term":"x"}`|term x/y/xy/square/constant/negative|6|2x,3y,2xy,x²,5,−x。文字部分で分類し次数1/1/2/2/0/1。|term-card; term-result|
|3111100000|`{"a":2,"b":1,"op":"add"}`|a,b−2..2; op add/sub|50|(ax+3y)±(bx−y)=(a±b)x+(3∓1)y。札は式の項。|poly-term-0..3; poly-x; poly-y|
|3112100000|`{"a":"2","b":"3","op":"mul"}`|a−3/−2/−1/1/2/3; b1/2/3; op mul/div|36|(ax²)(bx)=abx³、ax²÷bx=(a/b)x。除法はx≠0。整数係数を有理数として正確表示。|monomial-factor-0/1; monomial-result|
|3111400000|`{"a":"2","b":1}`|a−2/−1/1/2; b−2..2|20|y=ax+bをx=(y−b)/aへ。a≠0。両辺からb、両辺÷a。|rearrange-row-0..2|
|3111200000|`{"n":3,"form":"consecutive"}`|n1..4; form consecutive/price/perimeter|12|連続整数n,n+1。80n+50。横n縦3の周2n+6。負量なし。|quantity-part-*|
|3111300000|`{"m":1,"n":2}`|m,n−2..2|25|整数m,nの奇数2m+1,2n+1。和2(m+n+1)は偶数。負の例は記号札で扱い、具体例と任意整数の論証を分離。|odd-a; odd-b; odd-sum|
|3121100000|`{"x":2,"y":3}`|x,y0..5|36|x+y=5。格子点と線、選んだ点が式を満たすかを示す。|equation-point; equation-line|
|3121200000|`{"x":3,"y":1}`|x,y0..4|25|2x+y=7とx−y=2。共通解(3,1)、片方だけを満たす場合を区別。|system-point; system-line-0/1|
|3121300000|`{"step":0}`|step0..3|4|2x+y=7,x−y=2→3x=9と元のx−y=2を残す→x3,y1→両式へ代入。動画と同じ。|elimination-row-*|
|3122100000|`{"step":0}`|step0..3|4|x+y=5,y=2x−1→x+(2x−1)=5→x2,y3→両式へ代入。|substitution-row-*|
|3121000000|`{"example":"bracket","step":0}`|example bracket/decimal/fraction; step0..3|12|2(x+y)=10,x−y=1→(3,2)。0.5x+y=4,x−y=2→(4,2)。x/2+y=3,x−y=3→(4,1)。式全項へ同操作。|systemwork-row-*|
|3122200000|`{"adult":3}`|adult1..4|4|計6枚。大人200円adult枚、子ども100円(6−adult)枚。合計600+100adult円。|ticket-0..5|
|3311100000|`{"a":2,"b":1}`|a,b−2..2|25|y=ax+b。a=0は比較用の定数関数と明示。表x−2..2と固定座標。|linear-definition; linear-table-*|
|3312100000|`{"a":"2","dx":1}`|a−2/−1/1/2; dx1..3|12|始点x−1、y=−a+1。増加量dx、dy=a dx、dy/dx=a。|slope-dx; slope-dy; slope-start/end|
|3311000000|`{"a":"2","b":1}`|a−2/−1/1/2; b−2..2|20|y=ax+b。切片(0,b)、x1でy=a+b。両軸尺度固定。|linear-line; linear-intercept; linear-next|
|3312000000|`{"example":"rise","step":0}`|example rise/fall/fraction; step0..2|9|2点(0,1),(2,5)→y2x+1。(0,3),(2,−1)→y−2x+3。(0,−1),(4,1)→y=x/2−1。|derive-point-0/1; derive-line|
|3311300000|`{"kind":"regular","k":1}`|kind regular/vertical/horizontal; k−2..2|15|y=x+k、x=k、y=k。x=kはyをxの関数にできない。二元一次方程式の直線として扱う。|two-variable-line|
|3310000000|`{"system":"intersect"}`|system intersect/parallel/same|3|y=x+1とy=−x+5は(2,3)。y=x+1とy=x−1は共通解なし。y=x+1と2y=2x+2は同一直線で無数。|intersection-line-0/1; intersection-point|
|3312200000|`{"n":3,"plan":"A"}`|n0..5; plan A/B|12|料金A=100n+200、B=150n。n4で600円。定義域非負整数、外へ延長して実料金としない。|price-line-A/B; price-point-A/B|
|3231000000|`{"angle":"60"}`|angle40/60/80/110|4|交わる2直線。対頂角α、隣接角180−α。実円弧と線角度一致。|vertical-line-0/1; vertical-arc-*|
|3211100000|`{"angle":"60","pair":"corresponding"}`|angle40/60/80; pair corresponding/alternate|6|2直線は平行を仮定。同位角または錯角α。実交点・円弧を示し、見た目だけの一般化なし。|parallel-base-0/1; parallel-transversal; parallel-arc-0/1|
|3211200000|`{"n":5,"view":"interior"}`|n3..8; view interior/exterior|12|凸正n角形。内角和(n−2)180、外角和360。1外角360/nを厳密有理数表示。|polygon-body; polygon-diagonal-*; polygon-exterior-*|
|3212100000|`{"a":"50","b":"60"}`|a40/50/60; b50/60/70|9|底角a,bの三角形を実作図。残り180−a−b。平行な補助線と角の根拠。|triangle-angle-body; triangle-angle-parallel; triangle-angle-arc-*|
|3221100000|`{"condition":"sss","pose":"rotate"}`|condition sss/sas/asa; pose rotate/reflect|6|同一三角形の合同変換。三辺、二辺とその間の角、一辺とその両端の角の対応を強調。|congruence-source/target; congruence-mark-*|
|3221200000|`{"step":0}`|step0..3|4|AB=AC、DはBC中点、AD共通の図。仮定→三辺一致→合同→結論の役割を区別。|proofstructure-triangle; proofstructure-midline; proofstructure-*|
|3236000000|`{"example":"triangle","direction":"original"}`|example triangle/rectangle; direction original/converse|4|二等辺三角形と底角の逆は成立。長方形なら対角線等長の逆は不成立：非長方形の等脚台形を反例に。|converse-body; converse-diagonal-*|
|3221000000|`{"step":0}`|step0..3|4|A(300,70),B(180,270),C(420,270),D(300,270)。AB=AC、BD=CD、AD共通→△ABD≅△ACD→∠BAD=∠CAD。|proof-triangle; proof-midline; proof-side-*; proof-arc-*|
|3222100000|`{"half":3,"height":4}`|half2..4; height3..4|6|等脚三角形底辺2half、高さheight。等しい斜辺と底角、頂点から中点への線。角を丸めて等しいと判定しない。|isosceles-body; isosceles-midline; isosceles-arc-*|
|3222000000|`{"condition":"leg","pose":"same"}`|condition leg/angle; pose same/reflect|4|3-4-5直角三角形2枚。斜辺と他の一辺、斜辺と一鋭角の合同条件。直角は仮定として表示。|right-source/target; right-mark-*|
|3220000000|`{"shear":1}`|shear−2..2|5|底辺5、高さ3の平行四辺形。対辺平行/等長、対角線が互いに中点で交わる。|parallelogram-body; parallelogram-diagonal-0/1; parallelogram-midpoint|
|3222200000|`{"condition":"parallel","shear":1}`|condition parallel/equal/both/diagonal/angle; shear0..2|15|平行四辺形になる5条件を同一の成立する図で対応表示。1組だけの対辺等長を十分条件にしない。|condition-body; condition-mark-*|
|5100000000|`{"shape":"rectangle","feature":"diagonal"}`|shape rectangle/rhombus/square/parallelogram; feature diagonal/angle/side|12|長方形/ひし形/正方形/一般平行四辺形の条件比較。対角線等長・垂直・角/辺条件を区別。|special-body; special-diagonal-0/1|
|3411100000|`{"dataset":"even","focus":"q1"}`|dataset even/odd/same; focus q1/median/q3|9|even[2,4,4,6,8,8,10,12]→2,4,7,9,12。odd[1..9]→1,2.5,5,7.5,9（中央値除外）。same[4×8]→全て4。|quartile-value-*; quartile-selected-*|
|3411200000|`{"dataset":"even","step":0}`|dataset even/odd/same; step0..3|12|同上3データの五数要約から箱ひげへ。四分位範囲0は箱が線になると説明。|box-axis; box-whisker; box-body; box-median; box-data-*|
|3412100000|`{"pair":"spread"}`|pair spread/same/shift|3|spread A[2,4,4,6,8,8,10,12],B[0,2,2,6,8,10,12,14]。same A[0,4,4,6,8,8,10,14],B[0,3,5,6,8,8,10,14]は同じ箱でも元データ異なる。shiftはspreadのAと全値+2。|compare-box-A/B; compare-median-A/B|
|3421100000|`{"sample":"die","event":"first"}`|sample die/spinner; event first/even|4|公平な6面さいころは各1/6。偏りのない回転で止まる角度が一様な抽選盤は領域1が1/2、2と3が1/4ずつ。結果名3つだけを数えて1/3にしない。|chance-outcome-*; chance-sector-*|
|3421200000|`{"event":"one"}`|event one/both/atleast|3|独立で公平な区別した二枚の硬貨。HH/HT/TH/TTの4結果。表一枚2/4、表二枚1/4、少なくとも一枚3/4。|coin-outcome-0..3; coin-branch-*|
|3422100000|`{"event":"sum7","complement":"no"}`|event sum7/atleast6; complement no/yes|4|独立で公平な区別した二つのさいころ36結果。和7は6/36、少なくとも一方6は11/36。余事象は30/36または25/36。|dice-cell-0..35|
|3422200000|`{"bag":"A","color":"red"}`|bag A/B; color red/blue|4|同じ大きさの玉をよく混ぜ無作為に1個取り出す。A赤2青3、B赤3青7。赤2/5対3/10、青3/5対7/10。個数だけで確率大小を決めない。|bag-A-0..4; bag-B-0..9|

全39図の全状態数は460。状態全数を独立列挙して照合する。

## 8scene・32段

8解説は各4段、全32段。各stageは表示している式/個数/座標に一致し、移動途中の値を終点の値と表示しない。
1. 311110 同類項： (2x+3y)+(x−y)→x項を選ぶ→y項を選ぶ→3x+2y。札は記号、同位置の固定4項を強調し、負の実物を動かさない。tryIt {a:2,b:1,op:'add'}。
2. 311130 奇数の和：任意の整数m,n→2m+1と2n+1→2(m+n+1)→整数の2倍なので偶数。具体例3+5=8と一般式を明確に分離。tryIt {m:1,n:2}。
3. 312130 加減：2x+y=7,x−y=2→両式を加えて3x=9、元のx−y=2も残す→x3,y1→両元式を確認。root動画同例。tryIt {step:0}。
4. 331100 一次グラフ：y2x+1と切片(0,1)→右へ1→上へ2で(1,3)→直線。途中の補助線は案内、点は正確な座標で固定。root動画同例。tryIt {a:'2',b:1}。
5. 321110 平行線：水平な二直線の平行を仮定→横切る60°の直線→同位角60°→対頂角から錯角60°。円弧と線の角度一致。tryIt {angle:'60',pair:'alternate'}。
6. 322100 合同：AB=ACとD中点→BD=CD、AD共通→三辺一致で△ABD≅△ACD→∠BAD=∠CAD。三角形の構造は固定し根拠を強調。tryIt {step:0}。
7. 341120 箱ひげ：元8値[2,4,4,6,8,8,10,12]を並べる→中央値7→Q1=4,Q3=9→min2/max12と箱ひげ。全8値は残し、並び替えるアニメで数字を遮蔽しない。tryIt {dataset:'even',step:0}。
8. 342120 硬貨：独立で公平な区別した2枚→第一の表裏→第二を各枝へ→全4結果のうち表1枚は2/4=1/2。出現済みの葉は固定し、未完成途中を全標本数と呼ばない。tryIt {event:'one'}。

## 検査・復旧

全stateの独立数式/幾何/個数、全32段×101phaseの量保存と図内数値一致、textbbox/ID一意、最低contrast、実Chrome3幅×2modeを検査する。固定尺度と可視の選択理由を保ち、表示倍率の初期値も390で読めるものにする。未verifiedを作者がverifiedにしない。

rollbackは新入口を非表示にし、v6対応coreと保存対象を保持。旧ファイル変更やv5への保存投影を行わない。新図は単体で制作可能だが、全教材統合後のcontrol/tryIt/keyboard/focus/動画停止/進捗不変検査を省略しない。

## 作者側の最終検証（2026-11-04）

作者専用worktreeで実行。新ファイル以外の製品ソースは変更していない。

- 構文・登録境界：`JH2_AUTHOR_CONTRACT=PASS ES2017=2 files states=460 frames=3232 tryIt=8 invalid=48 clamp=16 duplicate_load=PASS exact_legacy_delegation=PASS ids=PASS prohibited_copy=0`。全図の状態直積、sceneの101phase、tryItの合法状態、無効step/phase、二重load、既存rendererへのexact委譲を確認。
- 独立数学検査：`JH2_VISUAL_MATH=PASS units=39 states=460 checks=7141 legacy_diagrams=104 positive_probes=4 partial=false`。
- 独立scene数学検査：`JH2_LESSON_MATH=PASS scenes=8 steps=32 frames=3232 checks=189284 legacy_frames=339 positive_probes=3`。旧28sceneの339frame一致。
- 実Chrome・幅390：`JH2_TYPOGRAPHY=PASS modules=39 states=460 scenes=8 frames=3232 width=390 text_collisions=0 text_clipping=0 overflow=0 positive_probes=1 negative_probes=1`。共通CSSと専用CSSを含む実計測。
- 目視：`JH2_GALLERY=PASS sheets=15 figures=39 scene_steps=32`。39既定図と32段のギャラリー15枚を確認。

グラフのy軸名は、旧baseline22で文字bbox上端−2.684764pxを実測したため、x324/y32へ移した。修正後は上端7.315236pxで、数値座標・軸の尺度は不変。平行の条件は矢印形、等長の条件は刻みとして記号の役割を分離し、両条件を示す場合も印を重ねない。加減法では導出した3x=9に加え、元のx−y=2を残す。

検証対象SHA-256：

- visuals-jh2.js: `0b572acce2f47d9828f571a733cedecc51e2d85dbb6b9b30f5bdc3937935bdef`
- lesson-scenes-jh2.js: `bc3ec00a09b2b1b9f144674bada747ad4c4268594db08ae5b35e803354e87651`

全原稿・独立review・poster/videoを含む統合後の実教材での全39単元、両mode、control/tryIt/keyboard/focus/動画の検証は、着地担当の統合後に実施する。ここでの単独描画検査を統合アプリ完了とは扱わない。

仕上げの相互目視で、合同sceneの根拠に無関係な右側の装飾線を削除。辺の印と対応角の4段階は維持し、ES2017・全3,232frame・独立数学189,284検査・旧339frame一致を再確認した。
