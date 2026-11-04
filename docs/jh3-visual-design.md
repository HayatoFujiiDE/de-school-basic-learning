# 中学3年 操作図・段階解説の設計と検証

対象は47単元、操作状態の直積合計441、段階解説8本×4段。既存143図と36解説は変更しない。基準は bda548c、詳細契約は `sources/jh3-visual-contract.json`（設計原稿SHA256 `5b900c0367bf29001c623f4213873e42add0be067328687fd931a0f4b003af04`）。

## 追加境界

- `visuals-jh3.js` は exact code で既存 definitions へ登録する。通常の state 検証・保存しない図状態・reset・focus は既存 renderer を再利用する。
- `lesson-scenes-jh3.js` は exact code だけを処理し、旧コードは元の render へ委譲する。各4段、phase は0〜1へ clamp。段階番号不正・phase 非有限値は空文字。
- API は `BL.jh3Visuals.codes` と `BL.jh3Lessons.codes`。再読込は既存 API を検出して重複登録しない。
- 新規SVGのIDは `jh3-visual-` / `jh3-scene-` で分離。外部値は HTML escape、動的な state は既存の厳格な型・集合検証を通す。
- file://、ES2017、module/fetchなし。新しいランタイム依存は加えない。CSSは `.jh3-figure` に限定。
- 数量の位置と文字の領域を別に確保する。途中の濃い図形同士を重ねて個数を見失わせない。三平方の再配置は二つの固定配置を並べて比較する。
- 文字は濃い ink、色面・線で強調する。数値の原点・尺度・正負を隠さない。負の面積は描かず、符号付き式に切り替える。

## 有限状態と数学契約

各 state の型と値集合は下記の明示値を正とする。root の独立検査は実装metadataから正答を生成せず、この固定表の式・座標を別に計算する。

### 1. 単項式と多項式の乗法・除法 — 8350233121100000

- 状態数: 10、既定値: `{"x":"2","operation":"multiply"}`。
- `x`: string / choice / `["-2","-1","1","2","3"]`。
- `operation`: string / choice / `["multiply","divide"]`。
- 数学: `multiply:2x(x+3); divide:(6x²+4x)/(2x)`。期待: `{"multiply":"2x²+6x; value=2*x*(x+3)","divide":"3x+2; value=3*x+2; x!=0"}`。
- 条件: 除数2xならx≠0。長さを用いる図はx>0。文字の一般計算と実物の範囲を分ける。
- 構成: x>0 and multiply: two adjacent rectangles widths x,3 and height2x at24px/unit; all other states use signed symbolic cards, never negative lengths. Each state shows selected x and evaluated equality.
- 主なID: `jh3-visual-distribution-part-0`, `jh3-visual-distribution-part-1`, `jh3-visual-distribution-equation`, `jh3-visual-distribution-value`, `jh3-visual-summary`。

### 2. 一次式どうしの積と展開 — 8350233121200000

- 状態数: 3、既定値: `{"x":2}`。
- `x`: number / range / `[1,2,3]`。
- 数学: `(x+2)(x+3)`。期待: `{"parts":["x*x","2*x","3*x","6"],"sum":"x*x+5*x+6"}`。
- 条件: 面積図のxは正。一般の実数について成り立つ式は分配法則を根拠にする。
- 構成: rectangle at(90,70),36px/unit; columns x,2, rows x,3. Four disjoint rects; enclosing width36(x+2), height36(x+3).
- 主なID: `jh3-visual-expand-part-0`, `jh3-visual-expand-part-1`, `jh3-visual-expand-part-2`, `jh3-visual-expand-part-3`, `jh3-visual-expand-outline`, `jh3-visual-summary`。

### 3. 和の平方の展開 — 8350233121210000

- 状態数: 6、既定値: `{"a":2,"b":1}`。
- `a`: number / range / `[1,2,3]`。
- `b`: number / range / `[1,2]`。
- 数学: `(a+b)²`。期待: `{"parts":["a*a","a*b","a*b","b*b"],"sum":"(a+b)**2"}`。
- 条件: 図のa,bは正。a²+b²との混同を反例で区別する。
- 構成: square at(160,65),40px/unit; two columns and rows a,b. Four disjoint rectangles.
- 主なID: `jh3-visual-square-sum-part-0`, `jh3-visual-square-sum-part-1`, `jh3-visual-square-sum-part-2`, `jh3-visual-square-sum-part-3`, `jh3-visual-square-sum-outline`, `jh3-visual-summary`。

### 4. 差の平方の展開 — 8350233121220000

- 状態数: 12、既定値: `{"b":2,"step":0}`。
- `b`: number / range / `[1,2,3]`。
- `step`: number / range / `[0,1,2,3]`。
- 数学: `a=5; (a-b)²`。期待: `{"full":"25","twoStrips":"10*b","overlap":"b*b","remaining":"(5-b)**2"}`。
- 条件: 図はa>b>0に限定。式としての恒等式は符号付き計算で確かめる。
- 構成: square(170,65) side200; bottom strip height40b and right strip width40b are annotation overlays, their common b×b square explicitly marked as counted twice. Remaining upper-left square side40(5-b); step0 full,1 strips,2 overlap,3 remaining. No negative area object.
- 主なID: `jh3-visual-square-difference-full`, `jh3-visual-square-difference-bottom`, `jh3-visual-square-difference-right`, `jh3-visual-square-difference-overlap`, `jh3-visual-square-difference-result`, `jh3-visual-summary`。

### 5. 和と差の積・平方の差 — 8350233121230000

- 状態数: 6、既定値: `{"b":2,"view":"difference"}`。
- `b`: number / range / `[1,2,3]`。
- `view`: string / choice / `["difference","rectangle"]`。
- 数学: `a=5; a²-b²=(a+b)(a-b)`。期待: `{"left":"25-b*b","right":"(5+b)*(5-b)"}`。
- 条件: 負の面積を作らない。a=bでも恒等式は成立するが図は退化させない。
- 構成: 30px/unit. Original L is 5×(5-b) rectangle plus (5-b)×b rectangle. Rectangle view rotates second piece90° into b×(5-b), then places both side by side into(5+b)×(5-b). Two fixed layouts, no intermediate negative dimensions.
- 主なID: `jh3-visual-difference-piece-0`, `jh3-visual-difference-piece-1`, `jh3-visual-difference-removed`, `jh3-visual-difference-result`, `jh3-visual-summary`。

### 6. 因数と共通因数による因数分解 — 8350233144000000

- 状態数: 12、既定値: `{"k":"3","step":0}`。
- `k`: string / choice / `["-3","-2","2","3"]`。
- `step`: number / range / `[0,1,2]`。
- 数学: `kx²+2kx=kx(x+2)`。期待: `{"coefficient":"k","expanded":["k","2*k"],"factored":"k*x*(x+2)"}`。
- 条件: 因数分解は積の表示。式の値を保つ変形であり、勝手に文字で割る操作と区別する。
- 構成: fixed symbolic term cards; step0 expanded,1 shared factor marked on each term,2 product. No literal count/area for signed coefficients.
- 主なID: `jh3-visual-common-term-0`, `jh3-visual-common-term-1`, `jh3-visual-common-factor`, `jh3-visual-common-product`, `jh3-visual-summary`。

### 7. 和と積を使う因数分解 — 8350233121240000

- 状態数: 12、既定値: `{"example":"plus","step":0}`。
- `example`: string / choice / `["plus","mixed","minus"]`。
- `step`: number / range / `[0,1,2,3]`。
- 数学: `pairs plus:(2,3),mixed:(-2,3),minus:(-2,-3)`。期待: `{"a+b":{"plus":5,"mixed":1,"minus":-5},"a*b":{"plus":6,"mixed":-6,"minus":6},"factor":"x²+(a+b)x+ab=(x+a)(x+b)"}`。
- 条件: 整数の二数が見付かる簡単な式を扱う。符号違い・積と和の取り違えを区別。
- 構成: plus uses x=3 positive scale illustration at32px/unit, four parts9,6,9,6 of5×6 rectangle; literal labels x²,2x,3x,6. mixed/minus use signed term cards only. steps0 terms,1 sum,2 product,3 factors.
- 主なID: `jh3-visual-factor-term-0`, `jh3-visual-factor-term-1`, `jh3-visual-factor-term-2`, `jh3-visual-factor-term-3`, `jh3-visual-factor-sum`, `jh3-visual-factor-product`, `jh3-visual-factor-answer`, `jh3-visual-summary`。

### 8. 平方・平方の差を使う因数分解 — 8350233122100000

- 状態数: 9、既定値: `{"example":"square-plus","step":0}`。
- `example`: string / choice / `["square-plus","square-minus","difference"]`。
- `step`: number / range / `[0,1,2]`。
- 数学: `x²+6x+9; x²-6x+9; x²-9`。期待: `{"square-plus":"(x+3)²","square-minus":"(x-3)²","difference":"(x+3)(x-3)"}`。
- 条件: 平方根の±と因数の符号を区別。取り出した共通因数を落とさない。
- 構成: fixed signed equation cards, step0 source,1 identify squares/cross term,2 factors. Never depict negative rectangles.
- 主なID: `jh3-visual-identity-source`, `jh3-visual-identity-square-0`, `jh3-visual-identity-square-1`, `jh3-visual-identity-middle`, `jh3-visual-identity-result`, `jh3-visual-summary`。

### 9. 展開と因数分解の活用 — 8350233122200000

- 状態数: 6、既定値: `{"n":2}`。
- `n`: number / range / `[-2,-1,0,1,2,3]`。
- 数学: `(n+1)²-n²=2n+1`。期待: `{"first":"(n+1)**2","second":"n*n","difference":"2*n+1"}`。
- 条件: 偶奇や連続整数にはnが整数と局所明記。nの負値を実物の個数にしない。
- 構成: signed symbolic rows with evaluated integers; n>=1 may additionally show disjoint L-border unit squares totaling2n+1, but n<=0 uses no physical negative count.
- 主なID: `jh3-visual-consecutive-first`, `jh3-visual-consecutive-second`, `jh3-visual-consecutive-difference`, `jh3-visual-consecutive-border`, `jh3-visual-summary`。

### 10. 平方根と根号の意味 — 8350233111100000

- 状態数: 8、既定値: `{"a":"2","focus":"roots"}`。
- `a`: string / choice / `["0","2","4","9"]`。
- `focus`: string / choice / `["roots","principal"]`。
- 数学: `square roots and principal radical`。期待: `{"positive":"sqrt(a)","negative":"-sqrt(a)","roots":"a=0:[0]; a>0:[-sqrt(a),sqrt(a)]"}`。
- 条件: a>0の平方根は±√a。√a≥0、0の平方根は0。実数の範囲では負の数の平方根を扱わない。
- 構成: numberline[-4,4], origin(300,265),55px/unit. Positive area square at(70,40), side45sqrt(a) only a>0; a=0 is point/text, not nondegenerate square. Roots at numeric positions; principal highlights positive only.
- 主なID: `jh3-visual-root-area`, `jh3-visual-root-positive`, `jh3-visual-root-negative`, `jh3-visual-root-zero`, `jh3-visual-root-axis`, `jh3-visual-summary`。

### 11. 有理数・無理数と数の広がり — 8350233142000000

- 状態数: 6、既定値: `{"number":"root2"}`。
- `number`: string / choice / `["zero","negative","fraction","root4","root2","pi"]`。
- 数学: `0,-3,1/3,√4,√2,π`。期待: `{"values":{"zero":0,"negative":-3,"fraction":"1/3","root4":2,"root2":"sqrt(2)","pi":"pi"},"rational":["zero","negative","fraction","root4"],"irrational":["root2","pi"]}`。
- 条件: 有理数p/qはp,q整数かつq≠0。√4は有理数、近似小数と元の無理数を区別。
- 構成: fixed numberline[-4,4], origin(300,210),55px/unit. One selected point; rational/irrational boxes use exact mathematical value, not rounded labels.
- 主なID: `jh3-visual-number-range-point`, `jh3-visual-number-range-rational`, `jh3-visual-number-range-irrational`, `jh3-visual-number-range-expression`, `jh3-visual-summary`。

### 12. 根号を含む乗法・除法 — 8350233111200000

- 状態数: 6、既定値: `{"example":"simplify"}`。
- `example`: string / choice / `["simplify","multiply","divide","square-positive","square-negative","zero"]`。
- 数学: `simple radical identities`。期待: `{"simplify":"√12=2√3","multiply":"√3×√12=6","divide":"√12÷√3=2","square-positive":"√(3²)=3","square-negative":"√((-3)²)=3","zero":"√0=0"}`。
- 条件: √a√b=√abはa,b≥0、√a/√bではa≥0,b>0。√(x²)=|x|。
- 構成: fixed symbolic rows with nonnegative length segments for the exact magnitude. For ±3 input distinguish signed input from positive magnitude3.
- 主なID: `jh3-visual-radical-source`, `jh3-visual-radical-result`, `jh3-visual-radical-length`, `jh3-visual-summary`。

### 13. 分母の有理化 — 8350233111000000

- 状態数: 9、既定値: `{"n":"2","step":0}`。
- `n`: string / choice / `["2","3","5"]`。
- `step`: number / range / `[0,1,2]`。
- 数学: `1/√n=√n/n`。期待: `{"value":"1/sqrt(n)","multiplier":"sqrt(n)/sqrt(n)=1"}`。
- 条件: 分母は正の根号。共役式を使う複雑な有理化へ広げず、簡単な分母で扱う。
- 構成: two equal length segments length180/sqrt(n) throughout all steps; algebra source→multiply numerator/denominator→result.
- 主なID: `jh3-visual-rationalize-length-0`, `jh3-visual-rationalize-length-1`, `jh3-visual-rationalize-source`, `jh3-visual-rationalize-result`, `jh3-visual-summary`。

### 14. 根号を含む加減と式の計算 — 8350233112100000

- 状態数: 12、既定値: `{"example":"sum","step":0}`。
- `example`: string / choice / `["sum","difference","square","conjugate"]`。
- `step`: number / range / `[0,1,2]`。
- 数学: `radical sums and products`。期待: `{"sum":"√8+√18=5√2","difference":"√18-√8=√2","square":"(√3+1)²=4+2√3","conjugate":"(√5+2)(√5-2)=1"}`。
- 条件: √a+√b=√(a+b)とは一般にいえない。数値近似の一致を恒等式の証明にしない。
- 構成: symbolic term cards; identify equal radicals/common units before combining. No approximate decimal as proof.
- 主なID: `jh3-visual-radical-combine-term-0`, `jh3-visual-radical-combine-term-1`, `jh3-visual-radical-combine-result`, `jh3-visual-summary`。

### 15. 平方根の近似と活用 — 8350233112200000

- 状態数: 3、既定値: `{"precision":1}`。
- `precision`: number / range / `[1,2,3]`。
- 数学: `bracket √2 by squaring nonnegative bounds`。期待: `{"1":{"denominator":10,"low":14,"high":15},"2":{"denominator":100,"low":141,"high":142},"3":{"denominator":1000,"low":1414,"high":1415}}`。
- 条件: 比較は非負の範囲。√2の近似値を厳密値と等号で結ばない。長さは正の平方根。
- 構成: permanent overview axis1..2 x70..530, with root x=70+460(sqrt2-1); lower detail axis explicitly labelled拡大 and spans selected low..high, endpoints at100/500. low²<2<high² via integer numerator squares vs2d². Detail root position100+400*(d*sqrt2-low)/(high-low).
- 主なID: `jh3-visual-approx-overview-root`, `jh3-visual-approx-detail-root`, `jh3-visual-approx-low`, `jh3-visual-approx-high`, `jh3-visual-approx-low-square`, `jh3-visual-approx-high-square`, `jh3-visual-summary`。

### 16. 誤差・近似値と数の表し方 — 8350235100000000

- 状態数: 4、既定値: `{"example":"round123"}`。
- `example`: string / choice / `["round123","round246","scientific2300","scientific45000"]`。
- 数学: `rounding and significant figures`。期待: `{"round123":{"shown":"12.3cm","low":12.25,"high":12.35,"unit":"0.1cm"},"round246":{"shown":"24.6cm","low":24.55,"high":24.65,"unit":"0.1cm"},"scientific2300":{"shown":"2.30×10³","value":2300,"digits":3,"low":2295,"high":2305},"scientific45000":{"shown":"4.50×10⁴","value":45000,"digits":3,"low":44950,"high":45050}}`。
- 条件: 誤差=測定値−真の値。丸め規則と桁を明記。まずnを正の整数に限定し負指数は必須にしない。
- 構成: selected positive quantity rounded by nearest-place, lower endpoint included/upper excluded; fixed display axis represents labelled interval with closed circle at140 and open at460. Explicit values prevent confusing coordinate span with value span.
- 主なID: `jh3-visual-precision-low`, `jh3-visual-precision-high`, `jh3-visual-precision-mid`, `jh3-visual-precision-expression`, `jh3-visual-summary`。

### 17. 二次方程式と解 — 8350233131100000

- 状態数: 18、既定値: `{"equation":"two","x":2}`。
- `equation`: string / choice / `["two","repeated","zero"]`。
- `x`: number / range / `[-1,0,1,2,3,4]`。
- 数学: `two:x²-5x+6=0; repeated:(x-2)²=0; zero:x(x-3)=0`。期待: `{"two":{"p":-5,"q":6,"roots":[2,3]},"repeated":{"p":-4,"q":4,"roots":[2]},"zero":{"p":-3,"q":0,"roots":[0,3]},"value":"x*x+p*x+q","isSolution":"value==0"}`。
- 条件: 実数解を持つ式を扱う。常に異なる二解とはいわず重解も例示。
- 構成: fixed candidate numberline[-1,4], xpixel=110+76(x+1); selected point and evaluated LHS; roots listed as distinct values.
- 主なID: `jh3-visual-quadratic-candidate`, `jh3-visual-quadratic-lhs`, `jh3-visual-quadratic-roots`, `jh3-visual-summary`。

### 18. 因数分解で二次方程式を解く — 8350233131200000

- 状態数: 12、既定値: `{"equation":"two","step":0}`。
- `equation`: string / choice / `["two","zero","repeated"]`。
- `step`: number / range / `[0,1,2,3]`。
- 数学: `x²-5x+6=0; x²-3x=0; x²-4x+4=0`。期待: `{"two":{"factors":["x-2","x-3"],"roots":[2,3]},"zero":{"factors":["x","x-3"],"roots":[0,3]},"repeated":{"factors":["x-2","x-2"],"roots":[2]}}`。
- 条件: 積=0に限る。xで割ってx=0を失わない。p,q整数のx²+px+q=0を中心。
- 構成: fixed equations→product zero→factor alternatives→substitution check; repeated root drawn once on numberline; no division by x.
- 主なID: `jh3-visual-zero-product-source`, `jh3-visual-zero-product-factor-0`, `jh3-visual-zero-product-factor-1`, `jh3-visual-zero-product-root-0`, `jh3-visual-zero-product-root-1`, `jh3-visual-summary`。

### 19. 平方根を使って二次方程式を解く — 8350233131000000

- 状態数: 20、既定値: `{"equation":"basic","step":0}`。
- `equation`: string / choice / `["basic","negative","shift","zero","irrational"]`。
- `step`: number / range / `[0,1,2,3]`。
- 数学: `2x²=18; -2x²=-18; (x+2)²=9;3x²=0;x²=2`。期待: `{"basic":{"a":2,"b":18,"shift":0,"roots":[-3,3]},"negative":{"a":-2,"b":-18,"shift":0,"roots":[-3,3]},"shift":{"a":1,"b":9,"shift":2,"roots":[-5,1]},"zero":{"a":3,"b":0,"shift":0,"roots":[0]},"irrational":{"a":1,"b":2,"shift":0,"roots":["-sqrt(2)","sqrt(2)"]}}`。
- 条件: a≠0,a,bは有理数、b/a≥0。平方の右辺0なら解は一つ。
- 構成: fixed numberline[-6,4], xpixel=70+46(x+6); steps equation, normalized square, ±root, shifted solution checks.
- 主なID: `jh3-visual-square-equation-source`, `jh3-visual-square-equation-normalized`, `jh3-visual-square-equation-root-0`, `jh3-visual-square-equation-root-1`, `jh3-visual-summary`。

### 20. 平方の形に変形して解く — 8350233132100000

- 状態数: 4、既定値: `{"step":0}`。
- `step`: number / range / `[0,1,2,3]`。
- 数学: `x²+4x-5=0`。期待: `{"stages":["x²+4x-5=0","x²+4x=5","(x+2)²=9","x+2=±3 → x=1,-5"],"roots":[-5,1]}`。
- 条件: 一次の項の係数が偶数の式を中心。面積図はx>0の導入例で、負の解は式で扱う。
- 構成: symbolic equation rows; numberline[-6,4], xpixel70+46(x+6) shows shift by2 and both roots. Avoid treating negative root as negative area.
- 主なID: `jh3-visual-complete-source`, `jh3-visual-complete-add`, `jh3-visual-complete-square`, `jh3-visual-complete-root-0`, `jh3-visual-complete-root-1`, `jh3-visual-summary`。

### 21. 解の公式と解き方の選択 — 8350233131300000

- 状態数: 12、既定値: `{"example":"irrational","step":0}`。
- `example`: string / choice / `["irrational","rational","repeated"]`。
- `step`: number / range / `[0,1,2,3]`。
- 数学: `quadratic formula`。期待: `{"irrational":{"a":1,"b":1,"c":-1,"D":5,"roots":["(-1-sqrt(5))/2","(-1+sqrt(5))/2"]},"rational":{"a":2,"b":-5,"c":2,"D":9,"roots":["1/2",2]},"repeated":{"a":1,"b":-4,"c":4,"D":0,"roots":[2]}}`。
- 条件: a≠0、b²−4ac≥0。分母2aは分子全体を割る。実数解なしの演習を導入しない。
- 構成: fixed coefficient boxes a,b,c; numerator spans full fraction bar over2a. Steps identify coefficients, computeD, substitute, simplify roots; duplicate root merged.
- 主なID: `jh3-visual-formula-a`, `jh3-visual-formula-b`, `jh3-visual-formula-c`, `jh3-visual-formula-discriminant`, `jh3-visual-formula-denominator`, `jh3-visual-formula-result`, `jh3-visual-summary`。

### 22. 二次方程式の活用 — 8350233132200000

- 状態数: 4、既定値: `{"step":0}`。
- `step`: number / range / `[0,1,2,3]`。
- 数学: `rectangle widthx heightx+3 area40`。期待: `{"equation":"x²+3x-40=0","algebraicRoots":[-8,5],"validRoot":5,"dimensions":[5,8]}`。
- 条件: 長さx>0、整数問題は整数の条件、図の単位を独立設問ごとに再掲。
- 構成: positive fixed rectangle100×160 (20px/unit), source labelsx,x+3; last step labels5cm,8cm. Signed solution -8 appears only in rejected algebra card with x>0 reason.
- 主なID: `jh3-visual-application-rectangle`, `jh3-visual-application-equation`, `jh3-visual-application-negative`, `jh3-visual-application-positive`, `jh3-visual-summary`。

### 23. 関数y=ax²の表と式 — 8350233311100000

- 状態数: 28、既定値: `{"a":"2","x":1}`。
- `a`: string / choice / `["-2","-1","1","2"]`。
- `x`: number / range / `[-3,-2,-1,0,1,2,3]`。
- 数学: `y=ax²`。期待: `{"tableX":[-2,-1,0,1,2],"tableY":"a*x*x","selectedY":"a*x*x","ratio":"x!=0:y/x²=a; x=0:division not displayed"}`。
- 条件: a≠0を本単元の対象としa=0は一定の比較。y/x²の計算はx≠0。
- 構成: parabola transform P(x,y)=(300+65x,180-7y), window x[-3,3],y[-18,18]. Table and selected point; original origin and units fixed across a.
- 主なID: `jh3-visual-quadratic-table-value-0`, `jh3-visual-quadratic-table-value-1`, `jh3-visual-quadratic-table-value-2`, `jh3-visual-quadratic-table-value-3`, `jh3-visual-quadratic-table-value-4`, `jh3-visual-quadratic-table-selected`, `jh3-visual-summary`。

### 24. 関数y=ax²のグラフ — 8350233311000000

- 状態数: 8、既定値: `{"a":"1","view":"curve"}`。
- `a`: string / choice / `["-2","-1","1","2"]`。
- `view`: string / choice / `["points","curve"]`。
- 数学: `y=ax² graph`。期待: `{"pointX":[-3,-2.5,-2,-1.5,-1,-0.5,0,0.5,1,1.5,2,2.5,3],"pointY":"a*x*x","axis":"x=0","vertex":[0,0]}`。
- 条件: xが数直線上の全ての数を取るグラフと表示窓を区別。a=0を放物線としない。
- 構成: P(x,y)=(300+65x,180-7y), x[-3,3],y[-18,18]. Curve path is exact quadratic Bezier over x[-3,3], startP(-3,9a), controlP(0,-9a), endP(3,9a). This control is not a graph sample. Points visible on both signs.
- 主なID: `jh3-visual-parabola-curve`, `jh3-visual-parabola-point-0`, `jh3-visual-parabola-point-1`, `jh3-visual-parabola-point-2`, `jh3-visual-parabola-point-3`, `jh3-visual-parabola-point-4`, `jh3-visual-parabola-point-5`, `jh3-visual-parabola-point-6`, `jh3-visual-parabola-point-7`, `jh3-visual-parabola-point-8`, `jh3-visual-parabola-point-9`, `jh3-visual-parabola-point-10`, `jh3-visual-parabola-point-11`, `jh3-visual-parabola-point-12`, `jh3-visual-summary`。

### 25. 関数y=ax²の変域と変化の割合 — 8350233312100000

- 状態数: 10、既定値: `{"a":"1","interval":"cross"}`。
- `a`: string / choice / `["1","-1"]`。
- `interval`: string / choice / `["cross","first","second","negative","symmetric"]`。
- 数学: `range and average change for ax²`。期待: `{"intervals":{"cross":[-2,3],"first":[1,2],"second":[2,3],"negative":[-3,-1],"symmetric":[-2,2]},"slope":"a*(x1+x2)","candidates":"[a*x1²,a*x2²] plus0 iff x1<=0<=x2","yRange":"[min(candidates),max(candidates)]"}`。
- 条件: 区間両端と0の有無を明記。変化の割合の分母x₂−x₁≠0。接線や微分を導入しない。
- 構成: same parabola transform; two distinct endpoint dots, secant line, explicit closed interval endpoints, y-range bar atx530. No tangent.
- 主なID: `jh3-visual-range-curve`, `jh3-visual-range-start`, `jh3-visual-range-end`, `jh3-visual-range-secant`, `jh3-visual-range-min`, `jh3-visual-range-max`, `jh3-visual-summary`。

### 26. 二乗に比例する関係を見付ける — 8350233311200000

- 状態数: 6、既定値: `{"model":"square","n":2}`。
- `model`: string / choice / `["square","motion"]`。
- `n`: number / range / `[1,2,3]`。
- 数学: `square area n² or ideal motion s=t²`。期待: `{"square":"side=n;area=n*n","motion":"t=n;s=n*n"}`。
- 条件: 有限の実測点だけで恒等式を証明したとはいわない。時間と長さは非負。
- 構成: square side50n with exact n×n unit cells; motion uses explicitly ideal model, time and displacement on separate labelled scales, selected point(n,n²).
- 主なID: `jh3-visual-squared-model-body`, `jh3-visual-squared-model-point`, `jh3-visual-squared-model-value`, `jh3-visual-summary`。

### 27. 関数y=ax²の活用 — 8350233312200000

- 状態数: 4、既定値: `{"t":1}`。
- `t`: number / range / `[0,1,2,3]`。
- 数学: `ideal motions A:s=t²,B:s=2t,t>=0`。期待: `{"A":"t*t","B":"2*t","equalTimes":[0,2],"difference":"t*t-2*t"}`。
- 条件: 二次と一次の交点の符号・時間範囲を確認。安全距離など実世界の保証へ広げない。
- 構成: P(t,s)=(100+120t,290-24s); two curves onlyt0..3. Selected dots deliberately coincide at t0 and2, label both, not two counted objects.
- 主なID: `jh3-visual-motion-quadratic`, `jh3-visual-motion-linear`, `jh3-visual-motion-point-A`, `jh3-visual-motion-point-B`, `jh3-visual-summary`。

### 28. いろいろな関数 — 8350233311300000

- 状態数: 6、既定値: `{"weight":2}`。
- `weight`: number / range / `[1,2,3,4,5,6]`。
- 数学: `fictional parcel price`。期待: `{"intervals":[{"lower":0,"upper":2,"lowerIncluded":false,"upperIncluded":true,"price":100},{"lower":2,"upper":4,"lowerIncluded":false,"upperIncluded":true,"price":200},{"lower":4,"upper":6,"lowerIncluded":false,"upperIncluded":true,"price":300}],"price":"100*ceil(weight/2)"}`。
- 条件: 区間は下端/上端の含む含まないを明記。実在サービス料金を使わない。
- 構成: P(w,p)=(80+70w,300-0.7p); three horizontal step segments, open circle at each lower endpoint and closed atupper; no vertical line treated as graph.
- 主なID: `jh3-visual-step-segment-0`, `jh3-visual-step-segment-1`, `jh3-visual-step-segment-2`, `jh3-visual-step-open-0`, `jh3-visual-step-open-1`, `jh3-visual-step-open-2`, `jh3-visual-step-closed-0`, `jh3-visual-step-closed-1`, `jh3-visual-step-closed-2`, `jh3-visual-step-selected`, `jh3-visual-summary`。

### 29. 相似な図形と相似比 — 8350233210000000

- 状態数: 12、既定値: `{"k":"2","pose":"normal"}`。
- `k`: string / choice / `["0.5","1","1.5","2"]`。
- `pose`: string / choice / `["normal","rotate","reflect"]`。
- 数学: `ABC coordinates(-5/3,-1),(7/3,-1),(-2/3,2)`。期待: `{"scale":"k>0","areaRatio":"k*k","pose":"normal:(x,y); rotate:(-y,x); reflect:(-x,y)"}`。
- 条件: 非退化な図形、相似比は正。回転・裏返しでも対応順序を保つ。
- 構成: source center(145,185),target center(435,185);30px/unit; target=k*pose(source). vertex order retained. All triangles noncollinear.
- 主なID: `jh3-visual-similar-source`, `jh3-visual-similar-target`, `jh3-visual-similar-A`, `jh3-visual-similar-B`, `jh3-visual-similar-C`, `jh3-visual-similar-D`, `jh3-visual-similar-E`, `jh3-visual-similar-F`, `jh3-visual-summary`。

- 独立座標: `{"A":["-5/3",-1],"B":["7/3",-1],"C":["-2/3",2],"target":"k times selectedpose ofsameorderedvertices","sourcePixelOrigin":[145,185],"targetPixelOrigin":[435,185],"pixelsPerUnit":30,"yPositive":"up"}`。

### 30. 三角形の相似条件 — 8350233211100000

- 状態数: 4、既定値: `{"condition":"sss"}`。
- `condition`: string / choice / `["sss","sas","aa","insufficient"]`。
- 数学: `source A(0,0),B(3,0),C(0,4); target scale1.5`。期待: `{"sss":"all edge ratios1.5","sas":"AB/DE andAC/DF correspond, includedA=D=90°","aa":"two equal angles","insufficient":"targetD(0,0),E(4.5,0),F(3,3sqrt3): two ratios1.5 but included angle60°; not similar"}`。
- 条件: 三角形は非退化。二辺比とその間以外の角を十分条件としない。
- 構成: sourceorigin(80,275),targetorigin(360,275),35px/unit; marks reflect condition, insufficient target differs mathematically, not onlylabel.
- 主なID: `jh3-visual-similar-condition-source`, `jh3-visual-similar-condition-target`, `jh3-visual-similar-condition-side-0`, `jh3-visual-similar-condition-side-1`, `jh3-visual-similar-condition-angle-0`, `jh3-visual-similar-condition-angle-1`, `jh3-visual-summary`。

- 独立座標: `{"A":[0,0],"B":[3,0],"C":[0,4],"D":[0,0],"E":["9/2",0],"F_similarity":[0,6],"F_insufficient":[3,"3*sqrt(3)"],"sourcePixelOrigin":[80,275],"targetPixelOrigin":[360,275],"pixelsPerUnit":35,"yPositive":"up"}`。

### 31. 相似条件を使う証明 — 8350233212100000

- 状態数: 3、既定値: `{"focus":"main"}`。
- `focus`: string / choice / `["main","first","second"]`。
- 数学: `right A(0,0),B(4,0),C(0,3),H=(36/25,48/25)`。期待: `{"right":"AB dot AC=0; AH dot BC=0","inside":"H=B+(16/25)*(C-B)","similarity":"ABC∽HBA∽HAC","AB":4,"AC":3,"BC":5,"AH":"12/5","BH":"16/5","CH":"9/5"}`。
- 条件: 垂線の足が線分内部であること、直角の位置と頂点順序を明記。見た目で相似としない。
- 構成: P(x,y)=(150+70x,285-70y); original triangle fixed, AH auxiliary and selected triangle outline; corresponding angle marks depend on focus.
- 主なID: `jh3-visual-altitude-main`, `jh3-visual-altitude-first`, `jh3-visual-altitude-second`, `jh3-visual-altitude-line`, `jh3-visual-altitude-foot`, `jh3-visual-altitude-correspondence`, `jh3-visual-summary`。

- 独立座標: `{"A":[0,0],"B":[4,0],"C":[0,3],"H":["36/25","48/25"],"pixelOrigin":[150,285],"pixelsPerUnit":70,"yPositive":"up"}`。

### 32. 平行線と線分の比 — 8350233212200000

- 状態数: 3、既定値: `{"fraction":"1/2"}`。
- `fraction`: string / choice / `["1/3","1/2","2/3"]`。
- 数学: `A(0,3),B(-3,0),C(3,0),D=A+t(B-A),E=A+t(C-A)`。期待: `{"AD_AB":"t","AE_AC":"t","DE_BC":"t","AD_DB":"t/(1-t)","DE":"6*t","parallel":"DE parallelBC"}`。
- 条件: D,Eは辺の内部。AD/ABとAD/DBを区別。平行の仮定と結論を逆用しない。
- 構成: P(x,y)=(300+55x,285-55y); D,E insideedges; parallel arrow marks. t1/2 labelled中点連結.
- 主なID: `jh3-visual-parallel-ratio-triangle`, `jh3-visual-parallel-ratio-inner`, `jh3-visual-parallel-ratio-D`, `jh3-visual-parallel-ratio-E`, `jh3-visual-parallel-ratio-value`, `jh3-visual-summary`。

- 独立座標: `{"A":[0,3],"B":[-3,0],"C":[3,0],"D":"A+t*(B-A)","E":"A+t*(C-A)","pixelOrigin":[300,285],"pixelsPerUnitX":55,"pixelsPerUnitY":55,"yPositive":"up"}`。

### 33. 相似比と面積比 — 8350233211000000

- 状態数: 8、既定値: `{"shape":"square","k":"2"}`。
- `shape`: string / choice / `["square","triangle"]`。
- `k`: string / choice / `["0.5","1","2","3"]`。
- 数学: `square side2; right trianglebase3height2`。期待: `{"baseArea":{"square":4,"triangle":3},"targetArea":"baseArea*k*k","ratio":"k*k"}`。
- 条件: k>0。長さ比と面積比を混同しない。相似でない図形に適用しない。
- 構成: 25px/unit; source andtarget in separate panels, sameunit. Squaretargetside50k; triangle targetbase75k height50k. k integer may display unit partitions, fractional k keeps exact outlines.
- 主なID: `jh3-visual-area-ratio-source`, `jh3-visual-area-ratio-target`, `jh3-visual-area-ratio-base`, `jh3-visual-area-ratio-height`, `jh3-visual-summary`。

### 34. 相似な立体と体積比 — 8350233212000000

- 状態数: 6、既定値: `{"k":2,"view":"volume"}`。
- `k`: number / range / `[1,2,3]`。
- `view`: string / choice / `["volume","surface"]`。
- 数学: `unit cube and cube sidek`。期待: `{"lengthRatio":"k","surfaceA":6,"surfaceB":"6*k*k","volumeA":1,"volumeB":"k*k*k"}`。
- 条件: 正の相似比と非退化な立体。同じ高さだけ変えた立体を相似と呼ばない。
- 構成: orthographic/isometric outlines denote cube shape; exact counted volume is k separated layers of k×k unit-cell cards, no hidden cells counted from visible faces. Surfaceview six separate k×k face grids. Units explicit each cell=unit cube orunit square.
- 主なID: `jh3-visual-solid-ratio-source`, `jh3-visual-solid-ratio-target`, `jh3-visual-solid-ratio-layer-0`, `jh3-visual-solid-ratio-layer-1`, `jh3-visual-solid-ratio-layer-2`, `jh3-visual-solid-ratio-face-0`, `jh3-visual-solid-ratio-face-1`, `jh3-visual-solid-ratio-face-2`, `jh3-visual-solid-ratio-face-3`, `jh3-visual-solid-ratio-face-4`, `jh3-visual-solid-ratio-face-5`, `jh3-visual-solid-ratio-count`, `jh3-visual-summary`。

### 35. 相似を使った測定と活用 — 8350233212300000

- 状態数: 4、既定値: `{"shadow":3}`。
- `shadow`: number / range / `[1,2,3,4]`。
- 数学: `pole height2 shadow1; tower shadows`。期待: `{"height":"2*shadow","ratio":"height/shadow=2"}`。
- 条件: 光線平行・物体鉛直・地面水平など相似の条件を明記。架空モデルと測定誤差を区別。
- 構成: P local25px/unit, polebase(90,280),towerbase(330,280). Both vertical objects/horizontal ground; rays from top toshadowtip havevector(s,-2s), henceparallel. Approximate measurement model explicitly stated.
- 主なID: `jh3-visual-shadow-pole`, `jh3-visual-shadow-pole-ray`, `jh3-visual-shadow-tower`, `jh3-visual-shadow-tower-ray`, `jh3-visual-shadow-ground`, `jh3-visual-summary`。

### 36. 円周角と中心角 — 8350233221100000

- 状態数: 12、既定値: `{"arc":"120","position":"half"}`。
- `arc`: string / choice / `["60","120","180","240"]`。
- `position`: string / choice / `["quarter","half","three-quarter"]`。
- 数学: `Aangle0,Bangleθ; selectedarcCCW0..θ`。期待: `{"theta":"Number(arc)","fractions":{"quarter":"1/4","half":"1/2","three-quarter":"3/4"},"Pangle":"theta+(360-theta)*fraction","central":"theta","inscribed":"theta/2"}`。
- 条件: A,B,Pは異なる円周上の点。同じ弧に対応する中心角を指定し、大きい弧も小さい角と混同しない。
- 構成: circleO(300,175),r105; point(deg)=(300+105cosdeg,175-105sindeg). Selectedarc screen sweep0, largeArc=theta>180. P outside selectedarc and endpoints. Centralangle markradius34 follows samearc, includingreflex240.
- 主なID: `jh3-visual-circle-main`, `jh3-visual-circle-arc`, `jh3-visual-circle-A`, `jh3-visual-circle-B`, `jh3-visual-circle-P`, `jh3-visual-circle-center-angle`, `jh3-visual-circle-inscribed-angle`, `jh3-visual-circle-radius-A`, `jh3-visual-circle-radius-B`, `jh3-visual-circle-chord-A`, `jh3-visual-circle-chord-B`, `jh3-visual-summary`。

### 37. 円周角の定理の理由と性質 — 8350233222100000

- 状態数: 8、既定値: `{"example":"center-ray","step":0}`。
- `example`: string / choice / `["center-ray","diameter"]`。
- `step`: number / range / `[0,1,2,3]`。
- 数学: `center-ray:A0°,B120°,P180°; diameter:A0°,B180°,P270°`。期待: `{"center-ray":"O lies PA; triangleOBP equilateral; angleAPB60; exteriorAOB120","diameter":"AB diameter, angleAPB90"}`。
- 条件: 証明図の位置関係を固定。場合分けの網羅暗記ではなく一つの成立する証明から意味を捉える。
- 構成: circleO(300,175),r105; samepolartransform. Fixed case-specificproof, selectedarc excludesP. Stepsassumptions,radii,isoscelesangle,angleconclusion.
- 主なID: `jh3-visual-circle-proof-main`, `jh3-visual-circle-proof-A`, `jh3-visual-circle-proof-B`, `jh3-visual-circle-proof-P`, `jh3-visual-circle-proof-OP`, `jh3-visual-circle-proof-radius`, `jh3-visual-circle-proof-arc`, `jh3-visual-circle-proof-conclusion`, `jh3-visual-summary`。

### 38. 円周角の定理の逆 — 8350235400000000

- 状態数: 2、既定値: `{"example":"equal"}`。
- `example`: string / choice / `["equal","unequal"]`。
- 数学: `A(-105,0),B(105,0),P(0,105)`。期待: `{"equal":"Q=(105/sqrt2,105/sqrt2), angleP=angleQ=90, allsamecircle","unequal":"Q=(90,90), angleP90, angleQ=acos((A-Q)dot(B-Q)/(|A-Q||B-Q|)); not90"}`。
- 条件: A,B,P,Qは互いに異なり、P,Qは直線AB上になく同じ側。共線・退化・異なる側の反例を区別。
- 構成: mathO(0,0) maps(300,185),yup; allP,Q aboveAB, distinctpoints, neitheronAB. CirclethroughABP fixedradius105; angleapprox uses約 and no inventedexactdegree.
- 主なID: `jh3-visual-circle-converse-reference`, `jh3-visual-circle-converse-A`, `jh3-visual-circle-converse-B`, `jh3-visual-circle-converse-P`, `jh3-visual-circle-converse-Q`, `jh3-visual-circle-converse-angle-P`, `jh3-visual-circle-converse-angle-Q`, `jh3-visual-summary`。

### 39. 円周角を使う作図と活用 — 8350233222200000

- 状態数: 12、既定値: `{"distance":"4","step":0}`。
- `distance`: string / choice / `["3","4","5"]`。
- `step`: number / range / `[0,1,2,3]`。
- 数学: `circleO radius2; P=(d,0),d>2;M=(d/2,0)`。期待: `{"Qx":"4/d","Qy":"2*sqrt(d*d-4)/d","tangentLength":"sqrt(d*d-4)","orthogonal":"OQ dot PQ=0"}`。
- 条件: 半径r>0、OP>r、Qは二円の交点。Pを円周上/内側へ動かす場合と区別する。
- 構成: P(x,y)=(210+45x,185-45y); fixedr2 circle and auxiliarycircle diameterOP. Both intersectionsQ±; step0 origin/P,1midpoint+auxcircle,2intersections,3tangentsegments/rightmarks.
- 主なID: `jh3-visual-tangent-circle`, `jh3-visual-tangent-P`, `jh3-visual-tangent-M`, `jh3-visual-tangent-auxiliary`, `jh3-visual-tangent-Q-upper`, `jh3-visual-tangent-Q-lower`, `jh3-visual-tangent-upper`, `jh3-visual-tangent-lower`, `jh3-visual-tangent-radius-upper`, `jh3-visual-tangent-radius-lower`, `jh3-visual-summary`。

### 40. 三平方の定理と面積 — 8350233231100000

- 状態数: 18、既定値: `{"a":3,"b":4,"view":"squares"}`。
- `a`: number / range / `[2,3,4]`。
- `b`: number / range / `[3,4,5]`。
- `view`: string / choice / `["squares","proof"]`。
- 数学: `righttriangle legs a,b; c=√(a²+b²)`。期待: `{"areas":["a*a","b*b","a*a+b*b"],"outerSquare":"(a+b)**2","fourTriangles":"2*a*b","remaining":"a*a+b*b"}`。
- 条件: 直角をはさむ辺a,bと斜辺cを固定、辺長は正。数値例だけを一般証明としない。
- 構成: squares: A(0,0),B(a,0),C(0,b), external squares AB below,AC left,BC outward +(b,a); uniformscale fitted by declaredbounds. proof: two fixed (a+b) squares eachwithfourcongruentrighttriangles, remainingareas c² vs a²+b². Never move through overlap.
- 主なID: `jh3-visual-pythagoras-triangle`, `jh3-visual-pythagoras-square-a`, `jh3-visual-pythagoras-square-b`, `jh3-visual-pythagoras-square-c`, `jh3-visual-pythagoras-layout-0`, `jh3-visual-pythagoras-layout-1`, `jh3-visual-pythagoras-proof-0-triangle-0`, `jh3-visual-pythagoras-proof-0-triangle-1`, `jh3-visual-pythagoras-proof-0-triangle-2`, `jh3-visual-pythagoras-proof-0-triangle-3`, `jh3-visual-pythagoras-proof-1-triangle-0`, `jh3-visual-pythagoras-proof-1-triangle-1`, `jh3-visual-pythagoras-proof-1-triangle-2`, `jh3-visual-pythagoras-proof-1-triangle-3`, `jh3-visual-summary`。

### 41. 三平方の定理の逆 — 8350233232100000

- 状態数: 4、既定値: `{"triple":"345"}`。
- `triple`: string / choice / `["345","346","51213","234"]`。
- 数学: `valid triangles withlongestsidec`。期待: `{"345":[3,4,5],"346":[3,4,6],"51213":[5,12,13],"234":[2,3,4],"right":"a*a+b*b==c*c"}`。
- 条件: 正の辺長と三角不等式。逆の結論は最長辺に対する角が直角。
- 構成: A(0,0),B(c,0),C((b²+c²-a²)/(2c),sqrt(b²-Cx²)); C angle isoppositec. Uniformscale230/c, origin(180,270). Onlytruecasehasrightmark. Alltrianglesstrictinequality.
- 主なID: `jh3-visual-converse-triangle`, `jh3-visual-converse-side-a`, `jh3-visual-converse-side-b`, `jh3-visual-converse-side-c`, `jh3-visual-converse-right`, `jh3-visual-converse-equality`, `jh3-visual-summary`。

### 42. 三平方の定理の平面での活用 — 8350233232200000

- 状態数: 9、既定値: `{"example":"rectangle","step":0}`。
- `example`: string / choice / `["rectangle","points","chord"]`。
- `step`: number / range / `[0,1,2]`。
- 数学: `plane applications`。期待: `{"rectangle":{"sides":[6,8],"distance":10},"points":{"A":[-1,-2],"B":[2,2],"dx":3,"dy":4,"distance":5},"chord":{"radius":5,"centerDistance":3,"halfChord":4,"chord":8}}`。
- 条件: 長さは正の平方根。座標の差と距離を区別。円中心から弦へ下ろした垂線の条件を明記。
- 構成: rectangle25px/unit; coordinate case35px/unit fixedorigin(280,190); chordcirclecenter(300,165),radius100, chord atmathy=-3 withhalfwidth4,20px/unit. Rightauxiliaryexplicit.
- 主なID: `jh3-visual-plane-application-body`, `jh3-visual-plane-application-auxiliary`, `jh3-visual-plane-application-right`, `jh3-visual-plane-application-result`, `jh3-visual-summary`。

### 43. 三平方の定理の空間での活用 — 8350233230000000

- 状態数: 6、既定値: `{"solid":"cuboid","step":0}`。
- `solid`: string / choice / `["cuboid","cone"]`。
- `step`: number / range / `[0,1,2]`。
- 数学: `cuboid2×3×6; rightcircularcone r3 slant5`。期待: `{"cuboid":{"baseDiagonal":"sqrt(13)","spaceDiagonal":7},"cone":{"radius":3,"slant":5,"height":4}}`。
- 条件: 直方体の辺は正で互いに直交。円錐は直円錐、母線>半径、図の見かけで直角を決めない。
- 構成: leftsolid isprojected shape; rightcross-section is true-scale orthogonal triangle. Cuboidbase first2/3 then√13/6; cone3/4/5. Never infermetricanglefromperspective.
- 主なID: `jh3-visual-space-body`, `jh3-visual-space-section`, `jh3-visual-space-base-diagonal`, `jh3-visual-space-final-diagonal`, `jh3-visual-space-right`, `jh3-visual-space-result`, `jh3-visual-summary`。

### 44. 全数調査と標本調査 — 8350233411100000

- 状態数: 2、既定値: `{"method":"sample"}`。
- `method`: string / choice / `["all","sample"]`。
- 数学: `12 fictionalparts, markedindices1,4,7,10; fixedsample1,6,11`。期待: `{"population":12,"allMarked":4,"sampleSize":3,"sampleMarked":1}`。
- 条件: 個人データを使わない。母集団と知りたい量を明記し、標本を全体と断定しない。
- 構成: 12 numberedcells alwayspresent; inspectedcells revealed dependingmethod. Fixedsampleisexample, notlabellednewrandomdraw; investigationtarget is markedpartproportion.
- 主なID: `jh3-visual-survey-population`, `jh3-visual-survey-part-1`, `jh3-visual-survey-part-2`, `jh3-visual-survey-part-3`, `jh3-visual-survey-part-4`, `jh3-visual-survey-part-5`, `jh3-visual-survey-part-6`, `jh3-visual-survey-part-7`, `jh3-visual-survey-part-8`, `jh3-visual-survey-part-9`, `jh3-visual-survey-part-10`, `jh3-visual-survey-part-11`, `jh3-visual-survey-part-12`, `jh3-visual-survey-inspected`, `jh3-visual-survey-result`, `jh3-visual-summary`。

### 45. 無作為抽出と標本の整理 — 8350233411200000

- 状態数: 56、既定値: `{"sample":1}`。
- `sample`: number / range / `[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56]`。
- 数学: `8 distinctparts IDs1..8 withvalues[2,4,4,6,8,8,10,12]; sample3 withoutreplacement`。期待: `{"population":8,"sampleSize":3,"combinations":"lexicographic ascending triples1<=i<j<k<=8","index":"1-based","sampleValues":"values[id-1]","sum":"sum(selectedValues)","mean":"sum/3"}`。
- 条件: 戻さない抽出内の選択は独立ではない。無作為と気ままを区別し、固定例と実抽出結果の表示を分ける。
- 構成: 8 fixednumberedparts, selected3 haveoutline; table keeps ID/value paired and sortedIDs. Actualrandom action separatelylabelled; draws mayrepeatpriortriple acrossclicks.
- 主なID: `jh3-visual-sampling-population`, `jh3-visual-sampling-part-1`, `jh3-visual-sampling-part-2`, `jh3-visual-sampling-part-3`, `jh3-visual-sampling-part-4`, `jh3-visual-sampling-part-5`, `jh3-visual-sampling-part-6`, `jh3-visual-sampling-part-7`, `jh3-visual-sampling-part-8`, `jh3-visual-sampling-selected-0`, `jh3-visual-sampling-selected-1`, `jh3-visual-sampling-selected-2`, `jh3-visual-sampling-sum`, `jh3-visual-sampling-mean`, `jh3-visual-sampling-source`, `jh3-visual-sampling-status`, `jh3-visual-sampling-random`, `jh3-visual-summary`。

### 46. 標本から母集団の傾向を推定する — 8350233412200000

- 状態数: 12、既定値: `{"hits":"6","step":0}`。
- `hits`: string / choice / `["5","6","7"]`。
- `step`: number / range / `[0,1,2,3]`。
- 数学: `population80 unknownmarkedcount; observed sample20, hits5/6/7`。期待: `{"population":80,"sampleSize":20,"ratio":"hits/20","estimate":"80*hits/20","estimates":[20,24,28]}`。
- 条件: 標本の大きさn>0。無作為抽出の設定と推定であることを明記。標本増大で必ず真値へ単調接近とはいわない。
- 構成: 80neutralcells in10×8 grid, no knownmarkedtotalpainted; sample20 in5×4 grid with exactlyhits marked. Finalresult explicitly約 and 推定. Separate fixedsample alternatives showvariation, notactualrandomoperation.
- 主なID: `jh3-visual-estimate-population`, `jh3-visual-estimate-sample-0`, `jh3-visual-estimate-sample-1`, `jh3-visual-estimate-sample-2`, `jh3-visual-estimate-sample-3`, `jh3-visual-estimate-sample-4`, `jh3-visual-estimate-sample-5`, `jh3-visual-estimate-sample-6`, `jh3-visual-estimate-sample-7`, `jh3-visual-estimate-sample-8`, `jh3-visual-estimate-sample-9`, `jh3-visual-estimate-sample-10`, `jh3-visual-estimate-sample-11`, `jh3-visual-estimate-sample-12`, `jh3-visual-estimate-sample-13`, `jh3-visual-estimate-sample-14`, `jh3-visual-estimate-sample-15`, `jh3-visual-estimate-sample-16`, `jh3-visual-estimate-sample-17`, `jh3-visual-estimate-sample-18`, `jh3-visual-estimate-sample-19`, `jh3-visual-estimate-fraction`, `jh3-visual-estimate-result`, `jh3-visual-estimate-alternative-0`, `jh3-visual-estimate-alternative-1`, `jh3-visual-estimate-alternative-2`, `jh3-visual-summary`。

### 47. 標本調査の方法と結果を確かめる — 8350233412100000

- 状態数: 4、既定値: `{"method":"random-example","reveal":"sample"}`。
- `method`: string / choice / `["random-example","front-example"]`。
- `reveal`: string / choice / `["sample","population"]`。
- 数学: `24modelparts; markedIDs1..10,13,14; sample6`。期待: `{"markedTotal":12,"random-example":{"ids":[1,5,9,13,17,21],"hits":4,"estimate":16},"front-example":{"ids":[1,2,3,4,5,6],"hits":6,"estimate":24},"truth":12}`。
- 条件: 無作為でも一回の標本は偏り得る。大きい標本でも抽出偏りを必ず除けない。標本誤差と測定誤差を混同しない。
- 構成: 24numberedcells, fixedrealizableexample; wholepopulationreveal permitscomparison withknownmodeltruth12. Methodlabel clearly says result例, notfreshdraw. Randomexampleitselfdiffersfromtruth toavoidpromiseunbiasedsingleoutcome.
- 主なID: `jh3-visual-sampling-review-population`, `jh3-visual-sampling-review-part-1`, `jh3-visual-sampling-review-part-2`, `jh3-visual-sampling-review-part-3`, `jh3-visual-sampling-review-part-4`, `jh3-visual-sampling-review-part-5`, `jh3-visual-sampling-review-part-6`, `jh3-visual-sampling-review-part-7`, `jh3-visual-sampling-review-part-8`, `jh3-visual-sampling-review-part-9`, `jh3-visual-sampling-review-part-10`, `jh3-visual-sampling-review-part-11`, `jh3-visual-sampling-review-part-12`, `jh3-visual-sampling-review-part-13`, `jh3-visual-sampling-review-part-14`, `jh3-visual-sampling-review-part-15`, `jh3-visual-sampling-review-part-16`, `jh3-visual-sampling-review-part-17`, `jh3-visual-sampling-review-part-18`, `jh3-visual-sampling-review-part-19`, `jh3-visual-sampling-review-part-20`, `jh3-visual-sampling-review-part-21`, `jh3-visual-sampling-review-part-22`, `jh3-visual-sampling-review-part-23`, `jh3-visual-sampling-review-part-24`, `jh3-visual-sampling-review-observed`, `jh3-visual-sampling-review-estimate`, `jh3-visual-sampling-review-truth`, `jh3-visual-summary`。

## 8つの段階解説

図番号7、15、20、24、34、36、40、46。それぞれ4段階で、全101 phase を検査する。情報を隠す正答ゲートはなく、各段の説明・代替文・予想・操作図への受け渡しを既存 player が表示する。

### 7. 8350233121240000

- 四段: x²+5x+6 → sum2+3=5 → product2*3=6 → (x+2)(x+3)。
- 不変条件: x=3 positiveillustration: fourfixednonoverlappingrects9,6,9,6; highlightingonly, no opaque movingpieces
- 受け渡し: `{"example":"plus","step":0}`。
- 主なID: `jh3-scene-factor-part-0`, `jh3-scene-factor-part-1`, `jh3-scene-factor-part-2`, `jh3-scene-factor-part-3`, `jh3-scene-factor-term-0`, `jh3-scene-factor-term-1`, `jh3-scene-factor-term-2`, `jh3-scene-factor-term-3`, `jh3-scene-factor-sum`, `jh3-scene-factor-product`, `jh3-scene-factor-result`, `jh3-scene-summary`。

- 幾何: `{"scale":32,"origin":[190,65],"columns":[3,2],"rows":[3,3],"parts":[9,6,9,6],"symbolicLengths":["x","2","x","3"],"illustrationX":3}`。

### 15. 8350233112200000

- 四段: 1²<2<2² → 1.4²<2<1.5² → 1.41²<2<1.42² → 1.414²<2<1.415²。
- 不変条件: overviewnumberline1..2remains; insetzoomexplicit; point√2exactmathcoordinate, decimalonlyapprox
- 受け渡し: `{"precision":1}`。
- 主なID: `jh3-scene-approx-axis`, `jh3-scene-approx-root`, `jh3-scene-approx-low`, `jh3-scene-approx-high`, `jh3-scene-approx-detail-root`, `jh3-scene-approx-left-square`, `jh3-scene-approx-right-square`, `jh3-scene-summary`。

### 20. 8350233132100000

- 四段: x²+4x-5=0 → x²+4x=5 → (x+2)²=9 → x=1 or -5。
- 不変条件: fixedsignedcards; bothrootsfinal; no area restrictionusedtoexclude-5
- 受け渡し: `{"step":0}`。
- 主なID: `jh3-scene-complete-row-0`, `jh3-scene-complete-row-1`, `jh3-scene-complete-row-2`, `jh3-scene-complete-row-3`, `jh3-scene-complete-axis`, `jh3-scene-complete-root-0`, `jh3-scene-complete-root-1`, `jh3-scene-summary`。

### 24. 8350233311000000

- 四段: y=x² table → points at±x → curve throughpoints → intervalchanges3 and5。
- 不変条件: P(x,y)=(300+65x,180-7y); nonmovingtablevalues remain; growingtrace ispartofexactquadratic, notlineinterpolation
- 受け渡し: `{"a":"1","view":"curve"}`。
- 主なID: `jh3-scene-parabola-curve`, `jh3-scene-parabola-point-0`, `jh3-scene-parabola-point-1`, `jh3-scene-parabola-point-2`, `jh3-scene-parabola-point-3`, `jh3-scene-parabola-point-4`, `jh3-scene-parabola-point-5`, `jh3-scene-parabola-point-6`, `jh3-scene-parabola-point-7`, `jh3-scene-parabola-point-8`, `jh3-scene-parabola-point-9`, `jh3-scene-parabola-point-10`, `jh3-scene-parabola-point-11`, `jh3-scene-parabola-point-12`, `jh3-scene-parabola-secant-0`, `jh3-scene-parabola-secant-1`, `jh3-scene-parabola-change-0`, `jh3-scene-parabola-change-1`, `jh3-scene-summary`。

### 34. 8350233212000000

- 四段: side1 and2 → correspondingface areas1 and4 → two layersof4 → volume1 and8。
- 不変条件: all8unitcubes/layercells remain separatelyvisible; movingpartsnotrequired; distinguishsurfacearea6→24fromsingleface1→4
- 受け渡し: `{"k":2,"view":"volume"}`。
- 主なID: `jh3-scene-solid-unit`, `jh3-scene-solid-double`, `jh3-scene-solid-face`, `jh3-scene-solid-cell-0`, `jh3-scene-solid-cell-1`, `jh3-scene-solid-cell-2`, `jh3-scene-solid-cell-3`, `jh3-scene-solid-cell-4`, `jh3-scene-solid-cell-5`, `jh3-scene-solid-cell-6`, `jh3-scene-solid-cell-7`, `jh3-scene-solid-layer-0`, `jh3-scene-solid-layer-1`, `jh3-scene-solid-count`, `jh3-scene-summary`。

### 36. 8350233221100000

- 四段: arcAB120 → centralangle120 → Poutsidearcangle60 → movePoutsidearcstill60。
- 不変条件: circleO300,175 r105; A0 B120; P angle240→300 onlyinlaststep. Selectedarcunchanged; actualangle60 atallphases
- 受け渡し: `{"arc":"120","position":"half"}`。
- 主なID: `jh3-scene-circle-main`, `jh3-scene-circle-arc`, `jh3-scene-circle-A`, `jh3-scene-circle-B`, `jh3-scene-circle-P`, `jh3-scene-circle-radius-A`, `jh3-scene-circle-radius-B`, `jh3-scene-circle-chord-A`, `jh3-scene-circle-chord-B`, `jh3-scene-circle-center-angle`, `jh3-scene-circle-inscribed-angle`, `jh3-scene-summary`。

### 40. 8350233231100000

- 四段: righttriangle3,4,5 → externalareas9,16,25 → two equaloutersquareswithsame4triangles → remainingareaequals:9+16=25。
- 不変条件: twofixed7×7layouts, correspondingtrianglehighlights. No interpolation/rearrangementoverlap. Formula (a+b)²-4*(ab/2)=a²+b²=c² statesgeneralreasonseparatefrom3-4-5example
- 受け渡し: `{"a":3,"b":4,"view":"proof"}`。
- 主なID: `jh3-scene-pythagoras-triangle`, `jh3-scene-pythagoras-square-a`, `jh3-scene-pythagoras-square-b`, `jh3-scene-pythagoras-square-c`, `jh3-scene-pythagoras-outer-0`, `jh3-scene-pythagoras-outer-1`, `jh3-scene-pythagoras-proof-0-triangle-0`, `jh3-scene-pythagoras-proof-0-triangle-1`, `jh3-scene-pythagoras-proof-0-triangle-2`, `jh3-scene-pythagoras-proof-0-triangle-3`, `jh3-scene-pythagoras-proof-1-triangle-0`, `jh3-scene-pythagoras-proof-1-triangle-1`, `jh3-scene-pythagoras-proof-1-triangle-2`, `jh3-scene-pythagoras-proof-1-triangle-3`, `jh3-scene-pythagoras-remaining-c`, `jh3-scene-pythagoras-remaining-a`, `jh3-scene-pythagoras-remaining-b`, `jh3-scene-summary`。

- 幾何: `{"L":"a+b","trianglesA":[[[0,0],["a",0],[0,"b"]],[["a",0],["L",0],["L","a"]],[["L","a"],["L","L"],["b","L"]],[[0,"b"],["b","L"],[0,"L"]]],"trianglesB":[[["a",0],["L",0],["L","a"]],[["a",0],["a","a"],["L","a"]],[[0,"a"],["a","a"],[0,"L"]],[["a","a"],["a","L"],[0,"L"]]],"remainingA":[["a",0],["L","a"],["b","L"],[0,"b"]],"remainingB":[{"origin":[0,0],"side":"a"},{"origin":["a","a"],"side":"b"}],"transform":"scale=220/L; layoutA origin(45,65), layoutB origin(335,65); ydown coordinates","invariants":["eachtrianglearea=ab/2","allfourtrianglespairwisenonoverlappinginsideeachouter","eachouterarea=L²","remainingAarea=c²=a²+b²","remainingBareas=a²,b²"]}`。

### 46. 8350233412200000

- 四段: population80 targetunknown → sample20 contains6 → 6/20×80≈24 → alternative5/7 give≈20/28。
- 不変条件: populationneverpaintedwith24knownmarkedparts; all20samplecellsstable; estimatesdistinctfromobservedcounts
- 受け渡し: `{"hits":"6","step":0}`。
- 主なID: `jh3-scene-estimate-population`, `jh3-scene-estimate-sample-0`, `jh3-scene-estimate-sample-1`, `jh3-scene-estimate-sample-2`, `jh3-scene-estimate-sample-3`, `jh3-scene-estimate-sample-4`, `jh3-scene-estimate-sample-5`, `jh3-scene-estimate-sample-6`, `jh3-scene-estimate-sample-7`, `jh3-scene-estimate-sample-8`, `jh3-scene-estimate-sample-9`, `jh3-scene-estimate-sample-10`, `jh3-scene-estimate-sample-11`, `jh3-scene-estimate-sample-12`, `jh3-scene-estimate-sample-13`, `jh3-scene-estimate-sample-14`, `jh3-scene-estimate-sample-15`, `jh3-scene-estimate-sample-16`, `jh3-scene-estimate-sample-17`, `jh3-scene-estimate-sample-18`, `jh3-scene-estimate-sample-19`, `jh3-scene-estimate-fraction`, `jh3-scene-estimate-result`, `jh3-scene-estimate-alternative-0`, `jh3-scene-estimate-alternative-1`, `jh3-scene-estimate-alternative-2`, `jh3-scene-summary`。

- 幾何: `{"populationGrid":{"columns":10,"rows":8,"cell":14,"gap":3,"origin":[65,80],"allUnknown":true},"sampleGrid":{"columns":5,"rows":4,"cell":24,"gap":6,"origin":[365,100],"hits":6},"estimateIsNotKnownTotal":true}`。

## 実抽出（単元45だけ）

8個の部品から異なる3個を選ぶ56組を辞書順で列挙する。range `sample` は number 1〜56、既定1。「決めて選ぶ例」は決定的な選択であり、無作為抽出と区別する。部品1〜8の長さは `[2,4,4,6,8,8,10,12]` mm。全56組の対応と平均を独立に検査する。

「無作為に3個選ぶ」は1クリックで `crypto.getRandomValues(new Uint32Array(1))` を最大8回（32 bytes）まで使う。`value < 4294967264` のときだけ `value % 56 + 1` を採用する。同じ組の再抽出も成功。拒否法により56組を同じ確率で選び、利用不能時の代替乱数は作らない。

- 接続点: `button[data-jh3-sample]`、`[data-jh3-sample-status]`（role=status / aria-live=polite）、`[data-jh3-sample-source]`。
- exact code / real core unit identity / mounted panel code + stage をすべて照合。WeakMap による同container重複bind防止。別単元へrebindすると固有listenerを除去。元のbindは委譲して呼ぶ。
- API不在、throw、8回拒否は図の状態と進捗を保持して案内のみ表示。setState が true を返した場合にだけ成功を表示し、新しい抽出ボタンへfocusを戻す。falseの場合は成功表示もfocus移動もしない。
- 手動range操作またはresetでは、無作為に選んだという表示を解除し「決めて選ぶ例」へ戻す。乱数値は保存・送信・ログ出力しない。
- route/mode再描画は共通rendererの状態を保持するが、抽出したという一時表示は持ち越さない。新しい画面では表示の来歴を推測しない。

## 破損範囲・検出・逆戻し

最小追加方式なので旧rendererやschemaの再設計を避ける。一方、新gradeの登録順、lesson whitelist、レビューhash、動画/posterはroot統合へ依存する。新scriptの欠落・不正なstate/ID・未承認素材はrootのfail-closed gateで検出する。逆戻しは新gradeの入口を隠し、版7のcoreと保存済み記録を保持する。旧版へstorageを上書きしない。

## 制作中に検出した境界

- 値域の最小/最大labelを同列へ置いたため、差3の2状態でbaseline間21pxに対し実bbox高さ24.684px、3.684px交差。rootの独立Chromeと作者sourceが一致。一旦左右へ分けbboxを通したが、root/作者の実画像で軸目盛と誤読しうることを確認したため、この方式を撤回。数値・棒位置を固定し、図下の「yの最小」「yの最大」の専用行へ移した。
- unit37の対象弧と円周角の印が同一suffixだった。18 ID/17 uniqueを作者検査とroot実描画で再現。円周角の印だけ `jh3-visual-circle-proof-inscribed-angle` へ分離し、幾何は維持。上の契約一覧の旧circle-proof-arcは対象弧にだけ属する。
- 8段階の固定文字領域で808 frameのbbox交差を検出。式/幅、tick/footer、軸目盛/caption、count/footerを専用領域に分け、数量図は動かさなかった。これらは公開前の制作検査で検出したもので、利用者への影響は観測していない。
- RCA根拠は `/private/tmp/rca-jh3-range-phase1.md` / phase2、`rca-jh3-id-phase1.md` / phase2、`rca-jh3-scene-type-phase1.md` / phase2。中央記録は統合担当へ引継ぎ、memoryや共通規範は変更しない。

## 取得済み検証出力

```text
JH3_AUTHOR_PARTIAL=PASS modules=47 states=441 ES2017=true ids_unique=true banned=0
JH3_SCENES_AUTHOR=PASS scenes=8 steps=32 frames=3232 ES2017=true ids_unique=true legacy_frames=435 invalid_guards=true
JH3_SAMPLING_AUTHOR=PASS {"checks":63,"crypto_budget_bytes":32,"repeated_sample":true,"foreign_rebind":true}
JH3_TYPOGRAPHY=PASS modules=47 states=441 scenes=8 frames=3232 width=390 text_collisions=0 text_clipping=0 overflow=0 positive_probes=1 negative_probes=1
```

独立担当rootから取得済み: `JH3_VISUAL_MATH=PASS units=47 states=441 checks=20206 legacy_diagrams=143 positive_probes=6`。scene初稿は3232frames/1577689checks/旧435frames一致/4positiveを通過し、その後は文字位置だけ変更。最終hashでroot再実行を行う。

作者の一時ハーネスは `/private/tmp/basic-jh3-analysis/check-author-partial.cjs`、`check-scenes-author.cjs`、`check-sampling-author.cjs`。本番児童データは使わず、隔離Chromeで静的な合成部品を操作した。全画像は `output/jh3-review/gallery`（公開対象外）。

統合教材の全47画面、両mode、各操作、8 tryIt、2動画、学年・保存境界は、rootの原稿・独立レビュー・媒体統合後に実施する。上記の単体検査を統合完了として扱わない。

- 追加目視で、unit30の同比率の辺に等長tickを使っていたことをroot/evidence/作者が確認。等長記号を撤去し、三辺比/二辺比の状態は実長3,4,5と4.5,6,7.5を表示（不足例は二辺だけ）。不足例は実角90°/60°も示す。新ID `jh3-visual-similar-condition-length-0..5`、`jh3-visual-similar-condition-angle-value-0..1`。図の頂点・比・角度は不変。文字bboxだけで記号の慣習や数字の帰属を保証できないため、数式/幾何/文字領域/実画像の独立検査を併用する。

- 最終目視で、放物線step3の二つの増分captionをplot外の同一行へ配置した。三平方step3は除く四枚をすべてpaleに戻し、残りの面積だけをorangeにした。段階2の合同な一枚の強調を最終段へ持ち越さない。いずれも数学の座標・数量・式・IDは不変。

## 最終の単体照合

最終sourceで、作者からrootの独立checkerを実行して取得:

```text
JH3_VISUAL_MATH=PASS units=47 states=441 checks=20411 legacy_diagrams=143 positive_probes=8 partial=false source_sha256=7ed07cd7e30e381e4be5d20f2122ff28453bba8e204b6e6edf5977cf1b5bf365
JH3_LESSON_MATH=PASS scenes=8 steps=32 frames=3232 checks=1577689 legacy_frames=435 positive_probes=4 source_sha256=feaa1545560fce6bf1371476b83b3a6d7f8ab8b1d231fbd0870f8ea0642514e7
JH3_GALLERY=PASS visual_default47 scene_midsteps32 width390
```

作者は全47初期図と32中間段階の画像を実見した。修正した値域10状態・相似条件4状態と2解説の最終段も、全画像を再表示して確認した。単体harnessの検査であり、統合教材の閲覧・保存・動画の完了とは区別する。

取得出力: `JH3_FINAL_GALLERY=PASS range10 similar4 finalscene2 width390`。最終文字検査も47/441/8/3232、交差・切れ・横overflow0で再PASS。
