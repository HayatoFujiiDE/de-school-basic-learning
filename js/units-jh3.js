/* Original junior-high grade-3 mathematics; preserves all earlier lessons. */
(function () {
  "use strict";
  var data = window.BL && window.BL.data;
  if (!data || data.version !== "6" || !Array.isArray(data.units) || data.units.length !== 143 || !Array.isArray(data.sources)) { return; }
  var units = [
  {
    "code": "8350233121100000",
    "grade": 9,
    "title": "単項式と多項式の乗法・除法",
    "domain": "A",
    "order": 1,
    "goal": "分配法則で各項をかけたり割ったりし、割る式が0でない条件を説明する。",
    "coverageCodes": [
      "8350233121100000",
      "8350233122100000"
    ],
    "explanations": {
      "es": {
        "short": "かける式を、括弧の中の全ての項へかけよう。2x(x＋3)＝2x²＋6x。多項式を割るときも各項を割るけれど、割る式が0にならない条件が必要だよ。",
        "detail": "2x(x＋3)では、2x×xと2x×3を別々に作って足す。x×x＝x²だから2x²＋6xになる。反対に(6x²＋4x)÷2xは、x≠0のとき6x²÷2x＋4x÷2x＝3x＋2。約分後にxが分母から消えても、元の割り算ができないx＝0は除いたままだよ。"
      },
      "js": {
        "short": "分配法則を使って、単項式を多項式の各項へかける。多項式を単項式で割る場合は、除数が0でない条件の下で各項を割る。",
        "detail": "a(b＋c)＝ab＋acを、a,b,cが文字式でも同じように用いる。−3x(2x−y)＝−6x²＋3xyでは、後ろの負の項にも−3xをかける。(8x²−6x)÷2x＝4x−3はx≠0の範囲で成立する。割る前と後の式が同じ値でも、もとの式の定義される範囲を広げてはいけない。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "長方形を二つに分ける",
        "text": "架空の図でx>0、縦2x cm、横x＋3 cmの長方形を横幅xと3で分ける。面積2x²と6xを合わせると2x²＋6x cm²になる。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "全ての項へ同じ操作",
        "text": "式の札−3x(2x−y)で、2xと−yの両方へ−3xをかける。−6x²と＋3xyを並べる。札は式の記号で、負の長さを表さない。",
        "activityIds": [
          "prog-scratch"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "2x(x＋3)を展開すると？",
        "options": [
          "2x²＋6x",
          "2x²＋3",
          "2x＋6x"
        ],
        "answer": "2x²＋6x",
        "explanation": "2x×x＝2x²、2x×3＝6xを合わせる。",
        "hint": "括弧の中の二つの項へ矢印を伸ばす。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "−3x(2x−y)を展開すると？",
        "options": [
          "−6x²−3xy",
          "−6x＋3y",
          "−6x²＋3xy"
        ],
        "answer": "−6x²＋3xy",
        "explanation": "負と負の積は正なので、後ろは＋3xy。",
        "hint": "−yも符号を含んだ一つの項。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "x≠0のとき、(6x²＋4x)÷2xは？",
        "options": [
          "3x²＋2x",
          "3x＋2",
          "3x＋4x"
        ],
        "answer": "3x＋2",
        "explanation": "二つの項をそれぞれ2xで割る。",
        "hint": "一つ目の項だけで割り算を止めない。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "(6x²＋4x)÷2xでx＝0を除く理由は？",
        "options": [
          "除数2xが0になるから",
          "答えが負になるから",
          "x²が定義されないから"
        ],
        "answer": "除数2xが0になるから",
        "explanation": "元の式には0で割る計算が現れる。",
        "hint": "約分する前の除数を見る。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "x≠0のとき、(10x²−15x)÷5x＝2x＋□。□は？",
        "answer": -3,
        "explanation": "−15x÷5x＝−3。",
        "hint": "定数として残る符号も保つ。",
        "suffix": "",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "x＝−2のとき、2x(x＋3)の値は？",
        "answer": -4,
        "explanation": "2×(−2)×1＝−4。展開後も8−12＝−4。",
        "hint": "代入する負の数を括弧で囲む。",
        "suffix": "",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "3a(a−2b)＝3a²−2bという式は？",
        "options": [
          "誤り。後ろもかけて3a²−6ab",
          "正しい",
          "誤り。3a²−6b"
        ],
        "answer": "誤り。後ろもかけて3a²−6ab",
        "explanation": "3aは−2bにもかかり、−6abとなる。",
        "hint": "外側の文字aを後ろの積にも残す。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "x>0、縦2x cm、横x＋3 cmの長方形の面積は？",
        "options": [
          "(3x＋3)cm²",
          "(2x²＋3)cm²",
          "(2x²＋6x)cm²"
        ],
        "answer": "(2x²＋6x)cm²",
        "explanation": "縦×横を分配して求める。",
        "hint": "辺の和ではなく積を考える。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：x≠0のとき、(4x²＋8x)÷4xで最後に残る式は？",
      "options": [
        "4x＋2",
        "x＋2",
        "x＋8"
      ],
      "answer": "x＋2",
      "explanation": "各項を4xで割るとxと2が残る。",
      "hint": "共通の因数を各項から取り出す。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "各項へ分配する",
      "prompt": "x≠0のとき、(12x²−8x)÷4xを計算しよう。",
      "steps": [
        {
          "text": "除数4xが0にならない条件x≠0を確認する。"
        },
        {
          "text": "12x²÷4x−8x÷4xと各項へ分ける。"
        },
        {
          "text": "係数と文字を約分し、3xと−2を得る。"
        },
        {
          "text": "3x−2を4x倍すると12x²−8xへ戻る。元の条件x≠0も残す。"
        }
      ],
      "answer": "3x−2（x≠0）",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "括弧の一項目だけに外の式をかければよい。",
      "correction": "分配法則では全ての項へかける。2x(x＋3)なら二つの積2x²と6xが必要。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "多項式を単項式で割るとき、各項を割る理由と0の条件を説明しよう。",
        "followUp": "約分した後ならx＝0を元の式へ入れられる？",
        "checkpoints": [
          "各項を同じ除数で割ると説明した。",
          "約分後も元の除数の条件を保った。"
        ],
        "sample": "除数が0でなければ逆数を各項へ分配できる。約分しても元の割り算で除数を0にすることはできないため、除数が0にならない条件は残る。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "かける式を、括弧の中の全ての項へかけよう。2x(x＋3)＝2x²＋6x。多項式を割るときも各項を割るけれど、割る式が0にならない条件が必要だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "2x(x＋3)では、2x×xと2x×3を別々に作って足す。x×x＝x²だから2x²＋6xになる。反対に(6x²＋4x)÷2xは、x≠0のとき6x²÷2x＋4x÷2x＝3x＋2。約分後にxが分母から消えても、元の割り算ができないx＝0は除いたままだよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "分配法則を使って、単項式を多項式の各項へかける。多項式を単項式で割る場合は、除数が0でない条件の下で各項を割る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "a(b＋c)＝ab＋acを、a,b,cが文字式でも同じように用いる。−3x(2x−y)＝−6x²＋3xyでは、後ろの負の項にも−3xをかける。(8x²−6x)÷2x＝4x−3はx≠0の範囲で成立する。割る前と後の式が同じ値でも、もとの式の定義される範囲を広げてはいけない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の図でx>0、縦2x cm、横x＋3 cmの長方形を横幅xと3で分ける。面積2x²と6xを合わせると2x²＋6x cm²になる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "式の札−3x(2x−y)で、2xと−yの両方へ−3xをかける。−6x²と＋3xyを並べる。札は式の記号で、負の長さを表さない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "2x(x＋3)を展開すると？ 正答：2x²＋6x。 2x×x＝2x²、2x×3＝6xを合わせる。 考える手がかり：括弧の中の二つの項へ矢印を伸ばす。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "−3x(2x−y)を展開すると？ 正答：−6x²＋3xy。 負と負の積は正なので、後ろは＋3xy。 考える手がかり：−yも符号を含んだ一つの項。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "x≠0のとき、(6x²＋4x)÷2xは？ 正答：3x＋2。 二つの項をそれぞれ2xで割る。 考える手がかり：一つ目の項だけで割り算を止めない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "(6x²＋4x)÷2xでx＝0を除く理由は？ 正答：除数2xが0になるから。 元の式には0で割る計算が現れる。 考える手がかり：約分する前の除数を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "x≠0のとき、(10x²−15x)÷5x＝2x＋□。□は？ 正答：-3。 −15x÷5x＝−3。 考える手がかり：定数として残る符号も保つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "x＝−2のとき、2x(x＋3)の値は？ 正答：-4。 2×(−2)×1＝−4。展開後も8−12＝−4。 考える手がかり：代入する負の数を括弧で囲む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "3a(a−2b)＝3a²−2bという式は？ 正答：誤り。後ろもかけて3a²−6ab。 3aは−2bにもかかり、−6abとなる。 考える手がかり：外側の文字aを後ろの積にも残す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "x>0、縦2x cm、横x＋3 cmの長方形の面積は？ 正答：(2x²＋6x)cm²。 縦×横を分配して求める。 考える手がかり：辺の和ではなく積を考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：x≠0のとき、(4x²＋8x)÷4xで最後に残る式は？ 正答：x＋2。 各項を4xで割るとxと2が残る。 考える手がかり：共通の因数を各項から取り出す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "多項式を単項式で割るとき、各項を割る理由と0の条件を説明しよう。 約分した後ならx＝0を元の式へ入れられる？ 除数が0でなければ逆数を各項へ分配できる。約分しても元の割り算で除数を0にすることはできないため、除数が0にならない条件は残る。 確認項目：各項を同じ除数で割ると説明した。 / 約分後も元の除数の条件を保った。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "x≠0のとき、(12x²−8x)÷4xを計算しよう。 除数4xが0にならない条件x≠0を確認する。 12x²÷4x−8x÷4xと各項へ分ける。 係数と文字を約分し、3xと−2を得る。 3x−2を4x倍すると12x²−8xへ戻る。元の条件x≠0も残す。 結論：3x−2（x≠0）",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「括弧の一項目だけに外の式をかければよい。」は誤り。分配法則では全ての項へかける。2x(x＋3)なら二つの積2x²と6xが必要。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "分配法則a(b+c)=ab+ac。除数d≠0で(b+c)/d=b/d+c/d。2x(x+3)=2x²+6x、(6x²+4x)/(2x)=3x+2はx≠0。正の長方形図はx>0の範囲。 操作図の範囲：操作例のxは−2,−1,1,2,3。乗法2x(x＋3)=2x²＋6x、除法(6x²＋4x)/(2x)=3x＋2で後者はx≠0。面積図にするのはx>0だけで、幅xと3、高さ2xの二部分2x²と6xを使う。負の値は式の値として扱う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233121200000",
    "grade": 9,
    "title": "一次式どうしの積と展開",
    "domain": "A",
    "order": 2,
    "goal": "一つの項を相手の全項へかけ、展開と同類項の整理を分けて説明する。",
    "coverageCodes": [
      "8350233121200000",
      "8350233121240000",
      "8350233122100000"
    ],
    "explanations": {
      "es": {
        "short": "二つの括弧をかけるときは、前の各項を後ろの各項へかける。できた積を全部足してから、同類項をまとめよう。",
        "detail": "(x＋2)(x＋3)は、まずx(x＋3)＋2(x＋3)に分ける。さらにx²＋3x＋2x＋6となり、同類項3xと2xを足すとx²＋5x＋6。長方形を四つに分けても同じ四つの積が見えるよ。図ではxを正の長さにして考える。"
      },
      "js": {
        "short": "一次式どうしの乗法は分配法則を二度用いて展開する。全ての項の組合せを一度ずつかけ、同類項を整理する。",
        "detail": "(a＋b)(c＋d)＝ac＋ad＋bc＋bd。各括弧を一つの数と見て分配できる。(x−2)(x＋4)＝x²＋4x−2x−8＝x²＋2x−8のように、各項の符号も積へ含める。一般の実数で成り立つ理由は分配法則であり、正の辺を使う面積図だけで負の値まで説明したことにはしない。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "四枚に分けた板",
        "text": "架空の板の辺がx＋2 cmとx＋3 cmでx>0とする。幅をxと2、高さをxと3に分けた区切りに対応する四領域の面積はx²、3x、2x、6。総面積はx²＋5x＋6 cm²。",
        "activityIds": [
          "craft-cardboard"
        ]
      },
      {
        "category": "programming",
        "title": "積の組を漏らさない",
        "text": "練習用に(x−2)(x＋4)の項をx、−2とx、4に分ける。四つの組の積x²、4x、−2x、−8を足してx²＋2x−8にする。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "(x＋2)(x＋3)の展開は？",
        "options": [
          "x²＋6",
          "2x＋5",
          "x²＋5x＋6"
        ],
        "answer": "x²＋5x＋6",
        "explanation": "四つの積のうち3xと2xをまとめる。",
        "hint": "x²、3x、2x、6を全部残す。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "(x−2)(x＋4)の展開は？",
        "options": [
          "x²−8",
          "x²＋2x−8",
          "x²＋6x−8"
        ],
        "answer": "x²＋2x−8",
        "explanation": "4x−2x＝2x、(−2)×4＝−8。",
        "hint": "符号を項と一緒に扱う。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "(x＋3)(x＋5)＝x²＋□x＋15。□は？",
        "answer": 8,
        "explanation": "3x＋5x＝8x。",
        "hint": "一次の項が二つできる。",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "(x−3)(x−2)を展開した定数項は？",
        "answer": 6,
        "explanation": "(−3)×(−2)＝6。",
        "hint": "二つの定数の積を考える。",
        "suffix": "",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "(2x＋1)(x＋3)の展開は？",
        "options": [
          "2x²＋3",
          "2x²＋7x＋3",
          "2x²＋4x＋3"
        ],
        "answer": "2x²＋7x＋3",
        "explanation": "2x×3＝6xと1×x＝xを足す。",
        "hint": "外の二項の係数が同じとは限らない。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "(x＋1)(y＋2)の展開は？",
        "options": [
          "xy＋2x＋y＋2",
          "xy＋2",
          "xy＋3x＋2"
        ],
        "answer": "xy＋2x＋y＋2",
        "explanation": "xとyが別の文字なので2xとyはまとめない。",
        "hint": "四つの積の文字部分を見る。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "number",
        "prompt": "x＝2のとき、(x＋2)(x＋3)の値は？",
        "answer": 20,
        "explanation": "4×5＝20。展開後は4＋10＋6＝20。",
        "hint": "元の式でも展開後でも確かめる。",
        "suffix": "",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "(a＋b)(c＋d)をac＋bdとする計算で落ちているのは？",
        "options": [
          "a²とb²",
          "adとbc",
          "abとcd"
        ],
        "answer": "adとbc",
        "explanation": "互い違いの二つの組の積も必要。",
        "hint": "前の一項につき後ろへ二本ずつ線を引く。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：(x＋1)(x＋4)を展開したxの係数は？",
      "options": [
        "5",
        "4",
        "1"
      ],
      "answer": "5",
      "explanation": "x×4と1×xから4x＋x＝5x。",
      "hint": "定数の積とは区別する。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "二度分配して整理する",
      "prompt": "(x−1)(x＋5)を展開しよう。",
      "steps": [
        {
          "text": "前の括弧をxと−1へ分け、x(x＋5)−1(x＋5)とする。"
        },
        {
          "text": "それぞれへ分配してx²＋5x−x−5とする。"
        },
        {
          "text": "同類項5x−xを4xにまとめる。"
        },
        {
          "text": "x²＋4x−5。x＝2なら元の式も整理後も7となる。"
        }
      ],
      "answer": "x²＋4x−5",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "最初どうしと最後どうしの積だけを足せばよい。",
      "correction": "前の各項を後ろの全項へかけるので四つの積がある。(x＋2)(x＋3)には3xと2xも必要。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "(x＋2)(x＋3)に5xが現れる理由を説明しよう。",
        "followUp": "x²や6は、どの項どうしをかけたもの？",
        "checkpoints": [
          "四つの項の組を示した。",
          "同類項3xと2xを足した。"
        ],
        "sample": "x×xがx²、x×3が3x、2×xが2x、2×3が6。中央の二つを合わせて5xになる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "二つの括弧をかけるときは、前の各項を後ろの各項へかける。できた積を全部足してから、同類項をまとめよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "(x＋2)(x＋3)は、まずx(x＋3)＋2(x＋3)に分ける。さらにx²＋3x＋2x＋6となり、同類項3xと2xを足すとx²＋5x＋6。長方形を四つに分けても同じ四つの積が見えるよ。図ではxを正の長さにして考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "一次式どうしの乗法は分配法則を二度用いて展開する。全ての項の組合せを一度ずつかけ、同類項を整理する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "(a＋b)(c＋d)＝ac＋ad＋bc＋bd。各括弧を一つの数と見て分配できる。(x−2)(x＋4)＝x²＋4x−2x−8＝x²＋2x−8のように、各項の符号も積へ含める。一般の実数で成り立つ理由は分配法則であり、正の辺を使う面積図だけで負の値まで説明したことにはしない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の板の辺がx＋2 cmとx＋3 cmでx>0とする。幅をxと2、高さをxと3に分けた区切りに対応する四領域の面積はx²、3x、2x、6。総面積はx²＋5x＋6 cm²。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "練習用に(x−2)(x＋4)の項をx、−2とx、4に分ける。四つの組の積x²、4x、−2x、−8を足してx²＋2x−8にする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "(x＋2)(x＋3)の展開は？ 正答：x²＋5x＋6。 四つの積のうち3xと2xをまとめる。 考える手がかり：x²、3x、2x、6を全部残す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "(x−2)(x＋4)の展開は？ 正答：x²＋2x−8。 4x−2x＝2x、(−2)×4＝−8。 考える手がかり：符号を項と一緒に扱う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "(x＋3)(x＋5)＝x²＋□x＋15。□は？ 正答：8。 3x＋5x＝8x。 考える手がかり：一次の項が二つできる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "(x−3)(x−2)を展開した定数項は？ 正答：6。 (−3)×(−2)＝6。 考える手がかり：二つの定数の積を考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "(2x＋1)(x＋3)の展開は？ 正答：2x²＋7x＋3。 2x×3＝6xと1×x＝xを足す。 考える手がかり：外の二項の係数が同じとは限らない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "(x＋1)(y＋2)の展開は？ 正答：xy＋2x＋y＋2。 xとyが別の文字なので2xとyはまとめない。 考える手がかり：四つの積の文字部分を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "x＝2のとき、(x＋2)(x＋3)の値は？ 正答：20。 4×5＝20。展開後は4＋10＋6＝20。 考える手がかり：元の式でも展開後でも確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "(a＋b)(c＋d)をac＋bdとする計算で落ちているのは？ 正答：adとbc。 互い違いの二つの組の積も必要。 考える手がかり：前の一項につき後ろへ二本ずつ線を引く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：(x＋1)(x＋4)を展開したxの係数は？ 正答：5。 x×4と1×xから4x＋x＝5x。 考える手がかり：定数の積とは区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "(x＋2)(x＋3)に5xが現れる理由を説明しよう。 x²や6は、どの項どうしをかけたもの？ x×xがx²、x×3が3x、2×xが2x、2×3が6。中央の二つを合わせて5xになる。 確認項目：四つの項の組を示した。 / 同類項3xと2xを足した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "(x−1)(x＋5)を展開しよう。 前の括弧をxと−1へ分け、x(x＋5)−1(x＋5)とする。 それぞれへ分配してx²＋5x−x−5とする。 同類項5x−xを4xにまとめる。 x²＋4x−5。x＝2なら元の式も整理後も7となる。 結論：x²＋4x−5",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「最初どうしと最後どうしの積だけを足せばよい。」は誤り。前の各項を後ろの全項へかけるので四つの積がある。(x＋2)(x＋3)には3xと2xも必要。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "実数a,b,c,dで(a+b)(c+d)=ac+ad+bc+bd。(x+2)(x+3)=x²+5x+6。面積図はx>0の長方形の四分割。 操作図の範囲：操作例x=1,2,3では、幅xと2、高さxと3の長方形の四部分がx²,2x,3x,6。総面積(x＋2)(x＋3)=x²＋5x＋6。正の面積例とは別に、実数の恒等式は分配法則で成り立つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233121210000",
    "grade": 9,
    "title": "和の平方の展開",
    "domain": "A",
    "order": 3,
    "goal": "(a+b)²の中央の2abが、二つの積abを合わせたものと説明する。",
    "coverageCodes": [
      "8350233121210000",
      "8350233122100000"
    ],
    "explanations": {
      "es": {
        "short": "和を二乗すると、同じ括弧を二回かける。(a＋b)²＝a²＋2ab＋b²。真ん中の2abを忘れないようにしよう。",
        "detail": "(x＋3)²は(x＋3)(x＋3)。四つの積はx²、3x、3x、9だから、x²＋6x＋9になる。x>0の正方形を辺xと3で区切ると、3xの長方形が二枚できるよ。辺を二乗することと、それぞれの項だけを二乗することは違う。"
      },
      "js": {
        "short": "和の平方は(a＋b)²＝a²＋2ab＋b²。分配法則で得るabとbaが等しいため、中央の項が2abとなる。",
        "detail": "実数a,bで(a＋b)²＝(a＋b)(a＋b)＝a²＋ab＋ba＋b²。例えば(2x＋1)²＝4x²＋4x＋1であり、2x全体がaに当たる。中央の2abと最初のa²の両方で係数を保つ。公式は数の計算にも使え、102²＝(100＋2)²＝10000＋400＋4＝10404。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "二枚ある長方形",
        "text": "x>0として、一辺x＋3 cmの正方形を辺xと3に区切る。面積3x cm²の長方形が二枚あり、合計が6x cm²になる。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "まとまりを代入する",
        "text": "公式(a＋b)²でaを2x、bを1へ置く練習をする。a²は4x²、2abは4x、b²は1なので(2x＋1)²＝4x²＋4x＋1。",
        "activityIds": [
          "prog-scratch"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "(x＋3)²の展開は？",
        "options": [
          "x²＋3x＋9",
          "x²＋6x＋9",
          "x²＋9"
        ],
        "answer": "x²＋6x＋9",
        "explanation": "中央は2×x×3＝6x。",
        "hint": "同じ括弧を二つ書いてみる。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "(x＋5)²を展開したxの係数は？",
        "answer": 10,
        "explanation": "2×5＝10なので中央は10x。",
        "hint": "同じ積が二つある。",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "(x＋4)²を展開した定数項は？",
        "answer": 16,
        "explanation": "4×4＝16。",
        "hint": "最後の項も二乗する。",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "(2x＋1)²の展開は？",
        "options": [
          "4x²＋2x＋1",
          "4x²＋4x＋1",
          "2x²＋4x＋1"
        ],
        "answer": "4x²＋4x＋1",
        "explanation": "(2x)²＝4x²、2×2x×1＝4x。",
        "hint": "aを2x全体と見る。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "(a＋b)²−(a²＋b²)と等しい式は？",
        "options": [
          "2ab",
          "ab",
          "0"
        ],
        "answer": "2ab",
        "explanation": "展開すると残るのは二つの交差した積。",
        "hint": "公式を展開して共通の項を引く。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "公式を使って102²を求めよう。",
        "answer": 10404,
        "explanation": "(100＋2)²＝10000＋400＋4。",
        "hint": "100²と中央の2×100×2を分ける。",
        "suffix": "",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "a＝1,b＝2で(a＋b)²＝a²＋b²を確かめると？",
        "options": [
          "左右とも5",
          "左9、右5で等しくない",
          "左右とも9"
        ],
        "answer": "左9、右5で等しくない",
        "explanation": "(1＋2)²＝9だが1²＋2²＝5。",
        "hint": "まず括弧の中を足す。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "a,b>0の正方形(a＋b)²の図で、2abが表すのは？",
        "options": [
          "辺aとbの長方形二枚の合計",
          "一辺abの正方形",
          "辺aの正方形二枚"
        ],
        "answer": "辺aとbの長方形二枚の合計",
        "explanation": "各abの長方形が二枚ある。",
        "hint": "積abの縦と横を確かめる。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：(x＋2)²を展開したxの項はどれ？",
      "options": [
        "2x",
        "x²",
        "4x"
      ],
      "answer": "4x",
      "explanation": "展開すると2xが二つ現れ、合わせて4xになる。",
      "hint": "同じ交差積を二回数える。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "一つのまとまりを二乗する",
      "prompt": "(3x＋2)²を展開しよう。",
      "steps": [
        {
          "text": "a＝3x、b＝2と対応させる。"
        },
        {
          "text": "a²＝(3x)²＝9x²を求める。"
        },
        {
          "text": "2ab＝2×3x×2＝12x、b²＝4を求める。"
        },
        {
          "text": "三項を足して9x²＋12x＋4。x＝1なら25となり元の5²と一致。"
        }
      ],
      "answer": "9x²＋12x＋4",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "(a＋b)²はa²＋b²である。",
      "correction": "二つの交差積abとbaも生じるので、正しくはa²＋2ab＋b²。a＝b＝1なら左4、誤った右2で違いを確かめられる。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "和の平方で中央の項が2abになる理由を、式か図で説明しよう。",
        "followUp": "(2x＋3)²なら、aとbに何を置く？",
        "checkpoints": [
          "abとbaの二つの積を示した。",
          "係数を含めたまとまりを二乗した。"
        ],
        "sample": "(a＋b)(a＋b)を展開するとabとbaが現れ、合わせて2ab。(2x＋3)²ではa＝2x、b＝3なので4x²＋12x＋9。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "和を二乗すると、同じ括弧を二回かける。(a＋b)²＝a²＋2ab＋b²。真ん中の2abを忘れないようにしよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "(x＋3)²は(x＋3)(x＋3)。四つの積はx²、3x、3x、9だから、x²＋6x＋9になる。x>0の正方形を辺xと3で区切ると、3xの長方形が二枚できるよ。辺を二乗することと、それぞれの項だけを二乗することは違う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "和の平方は(a＋b)²＝a²＋2ab＋b²。分配法則で得るabとbaが等しいため、中央の項が2abとなる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "実数a,bで(a＋b)²＝(a＋b)(a＋b)＝a²＋ab＋ba＋b²。例えば(2x＋1)²＝4x²＋4x＋1であり、2x全体がaに当たる。中央の2abと最初のa²の両方で係数を保つ。公式は数の計算にも使え、102²＝(100＋2)²＝10000＋400＋4＝10404。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "x>0として、一辺x＋3 cmの正方形を辺xと3に区切る。面積3x cm²の長方形が二枚あり、合計が6x cm²になる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "公式(a＋b)²でaを2x、bを1へ置く練習をする。a²は4x²、2abは4x、b²は1なので(2x＋1)²＝4x²＋4x＋1。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "(x＋3)²の展開は？ 正答：x²＋6x＋9。 中央は2×x×3＝6x。 考える手がかり：同じ括弧を二つ書いてみる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "(x＋5)²を展開したxの係数は？ 正答：10。 2×5＝10なので中央は10x。 考える手がかり：同じ積が二つある。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "(x＋4)²を展開した定数項は？ 正答：16。 4×4＝16。 考える手がかり：最後の項も二乗する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "(2x＋1)²の展開は？ 正答：4x²＋4x＋1。 (2x)²＝4x²、2×2x×1＝4x。 考える手がかり：aを2x全体と見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "(a＋b)²−(a²＋b²)と等しい式は？ 正答：2ab。 展開すると残るのは二つの交差した積。 考える手がかり：公式を展開して共通の項を引く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "公式を使って102²を求めよう。 正答：10404。 (100＋2)²＝10000＋400＋4。 考える手がかり：100²と中央の2×100×2を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "a＝1,b＝2で(a＋b)²＝a²＋b²を確かめると？ 正答：左9、右5で等しくない。 (1＋2)²＝9だが1²＋2²＝5。 考える手がかり：まず括弧の中を足す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "a,b>0の正方形(a＋b)²の図で、2abが表すのは？ 正答：辺aとbの長方形二枚の合計。 各abの長方形が二枚ある。 考える手がかり：積abの縦と横を確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：(x＋2)²を展開したxの項はどれ？ 正答：4x。 展開すると2xが二つ現れ、合わせて4xになる。 考える手がかり：同じ交差積を二回数える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "和の平方で中央の項が2abになる理由を、式か図で説明しよう。 (2x＋3)²なら、aとbに何を置く？ (a＋b)(a＋b)を展開するとabとbaが現れ、合わせて2ab。(2x＋3)²ではa＝2x、b＝3なので4x²＋12x＋9。 確認項目：abとbaの二つの積を示した。 / 係数を含めたまとまりを二乗した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "(3x＋2)²を展開しよう。 a＝3x、b＝2と対応させる。 a²＝(3x)²＝9x²を求める。 2ab＝2×3x×2＝12x、b²＝4を求める。 三項を足して9x²＋12x＋4。x＝1なら25となり元の5²と一致。 結論：9x²＋12x＋4",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「(a＋b)²はa²＋b²である。」は誤り。二つの交差積abとbaも生じるので、正しくはa²＋2ab＋b²。a＝b＝1なら左4、誤った右2で違いを確かめられる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "実数a,bで(a+b)²=a²+2ab+b²。面積モデルはa,b>0で、二つのab領域を区別する。(x+3)²=x²+6x+9、(2x+1)²=4x²+4x+1。 操作図の範囲：操作例a=1,2,3、b=1,2の正方形は一辺a＋b。四部分a²,ab,ab,b²の面積和はa²＋2ab＋b²=(a＋b)²。二つのabを一つにしない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233121220000",
    "grade": 9,
    "title": "差の平方の展開",
    "domain": "A",
    "order": 4,
    "goal": "(a−b)²の−2abと+b²を、分配と重なりの戻しで説明する。",
    "coverageCodes": [
      "8350233121220000",
      "8350233122100000"
    ],
    "explanations": {
      "es": {
        "short": "差を二乗すると、(a−b)²＝a²−2ab＋b²。最後は−bどうしをかけるので、＋b²になるよ。",
        "detail": "(x−3)²＝(x−3)(x−3)を展開すると、x²−3x−3x＋9＝x²−6x＋9。x>3の正方形の図なら、面積x²から幅3の帯を二つ取り除く。重なりの9を二回取っているので一回分戻すと、残る(x−3)²になる。"
      },
      "js": {
        "short": "差の平方は(a−b)²＝a²−2ab＋b²。負の項の積は正となり、中央の二項だけが−2abにまとまる。",
        "detail": "公式は実数a,bで成立する。図でa²から二本の帯abを除く説明をする場合はa>b>0とし、二重に除いたb²を一回戻す。式の成立範囲と図が正の面積を表す範囲は分ける。(2x−3)²＝4x²−12x＋9では、中央の係数にも2x全体を使う。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "重なりを一回戻す",
        "text": "架空の正方形の紙でa>b>0とし、面積a²から幅bの縦と横の帯を取り除く。角のb²を二回引いているので一回足すと、残る面積はa²−2ab＋b²。",
        "activityIds": [
          "craft-cardboard"
        ]
      },
      {
        "category": "programming",
        "title": "負の項を二度かける",
        "text": "式の札(x−3)(x−3)を展開する。−3xが二つと、(−3)×(−3)＝9があり、x²−6x＋9になる。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "(x−3)²の展開は？",
        "options": [
          "x²−6x＋9",
          "x²−9",
          "x²−6x−9"
        ],
        "answer": "x²−6x＋9",
        "explanation": "中央は−3x−3x、最後は負どうしの積で＋9。",
        "hint": "四つの積を書き出す。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "(x−5)²を展開したxの係数は？",
        "answer": -10,
        "explanation": "−2×5＝−10。",
        "hint": "符号を含めて係数を答える。",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "(2x−3)²の展開は？",
        "options": [
          "4x²−9",
          "4x²−12x＋9",
          "4x²−6x＋9"
        ],
        "answer": "4x²−12x＋9",
        "explanation": "中央は−2×2x×3＝−12x。",
        "hint": "2x全体がaに当たる。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "公式を使って98²を求めよう。",
        "answer": 9604,
        "explanation": "(100−2)²＝10000−400＋4＝9604。",
        "hint": "100との差2を使う。",
        "suffix": "",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "a>b>0で二本の帯abをa²から引く図では、b²を足す理由は？",
        "options": [
          "帯の面積が負だから",
          "残る辺をbにするから",
          "重なりを二回引いたから"
        ],
        "answer": "重なりを二回引いたから",
        "explanation": "重なり部分を一回だけ除くため一回戻す。",
        "hint": "帯の重なる角を数える。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "(x−3)²でx＝1のときの値は？",
        "options": [
          "−8",
          "4",
          "−4"
        ],
        "answer": "4",
        "explanation": "(1−3)²＝(−2)²＝4。x>3という面積図の条件から外れても、式は実数のxで計算できる。",
        "hint": "括弧内を計算してから二乗する。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "(a−b)²とa²−b²はいつでも等しい？",
        "options": [
          "等しくない。a＝3,b＝1なら4と8",
          "等しい。二乗を分配できる",
          "等しい。中央の項が消える"
        ],
        "answer": "等しくない。a＝3,b＝1なら4と8",
        "explanation": "差の平方には−2ab＋b²が必要。",
        "hint": "小さい正の数を入れて比べる。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "number",
        "prompt": "(x−4)²の展開で、定数項はいくつ？",
        "answer": 16,
        "explanation": "(−4)²＝16。",
        "hint": "最後は負と負の積。",
        "suffix": "",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：(x−2)²の最後の定数項の符号は？",
      "options": [
        "0",
        "正で＋4",
        "負で−4"
      ],
      "answer": "正で＋4",
      "explanation": "最後の積は(−2)×(−2)なので＋4。",
      "hint": "引く数どうしをかける。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "負の項を含めて展開する",
      "prompt": "(3x−1)²を展開しよう。",
      "steps": [
        {
          "text": "a＝3x、b＝1として差の平方の公式を見る。"
        },
        {
          "text": "最初は(3x)²＝9x²。"
        },
        {
          "text": "中央は−2×3x×1＝−6x、最後は1²＝1。"
        },
        {
          "text": "9x²−6x＋1となる。x＝0なら元の(−1)²も1で確かめられる。"
        }
      ],
      "answer": "9x²−6x＋1",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "(a−b)²の最後は引き算だから−b²になる。",
      "correction": "最後の項は(−b)×(−b)＝＋b²。差の平方全体はa²−2ab＋b²。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "(a−b)²でb²を足す理由を説明しよう。",
        "followUp": "面積図で説明するとき、aとbのどんな条件が必要？",
        "checkpoints": [
          "負どうしの積または重なりの二重除去を示した。",
          "図ではa>b>0を条件にした。"
        ],
        "sample": "式では(−b)(−b)が正になる。a>b>0の図では角のb²を二回引いたので一回戻す。恒等式自体は実数a,bで成り立つ。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "差を二乗すると、(a−b)²＝a²−2ab＋b²。最後は−bどうしをかけるので、＋b²になるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "(x−3)²＝(x−3)(x−3)を展開すると、x²−3x−3x＋9＝x²−6x＋9。x>3の正方形の図なら、面積x²から幅3の帯を二つ取り除く。重なりの9を二回取っているので一回分戻すと、残る(x−3)²になる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "差の平方は(a−b)²＝a²−2ab＋b²。負の項の積は正となり、中央の二項だけが−2abにまとまる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "公式は実数a,bで成立する。図でa²から二本の帯abを除く説明をする場合はa>b>0とし、二重に除いたb²を一回戻す。式の成立範囲と図が正の面積を表す範囲は分ける。(2x−3)²＝4x²−12x＋9では、中央の係数にも2x全体を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の正方形の紙でa>b>0とし、面積a²から幅bの縦と横の帯を取り除く。角のb²を二回引いているので一回足すと、残る面積はa²−2ab＋b²。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "式の札(x−3)(x−3)を展開する。−3xが二つと、(−3)×(−3)＝9があり、x²−6x＋9になる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "(x−3)²の展開は？ 正答：x²−6x＋9。 中央は−3x−3x、最後は負どうしの積で＋9。 考える手がかり：四つの積を書き出す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "(x−5)²を展開したxの係数は？ 正答：-10。 −2×5＝−10。 考える手がかり：符号を含めて係数を答える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "(2x−3)²の展開は？ 正答：4x²−12x＋9。 中央は−2×2x×3＝−12x。 考える手がかり：2x全体がaに当たる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "公式を使って98²を求めよう。 正答：9604。 (100−2)²＝10000−400＋4＝9604。 考える手がかり：100との差2を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "a>b>0で二本の帯abをa²から引く図では、b²を足す理由は？ 正答：重なりを二回引いたから。 重なり部分を一回だけ除くため一回戻す。 考える手がかり：帯の重なる角を数える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "(x−3)²でx＝1のときの値は？ 正答：4。 (1−3)²＝(−2)²＝4。x>3という面積図の条件から外れても、式は実数のxで計算できる。 考える手がかり：括弧内を計算してから二乗する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "(a−b)²とa²−b²はいつでも等しい？ 正答：等しくない。a＝3,b＝1なら4と8。 差の平方には−2ab＋b²が必要。 考える手がかり：小さい正の数を入れて比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "(x−4)²の展開で、定数項はいくつ？ 正答：16。 (−4)²＝16。 考える手がかり：最後は負と負の積。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：(x−2)²の最後の定数項の符号は？ 正答：正で＋4。 最後の積は(−2)×(−2)なので＋4。 考える手がかり：引く数どうしをかける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "(a−b)²でb²を足す理由を説明しよう。 面積図で説明するとき、aとbのどんな条件が必要？ 式では(−b)(−b)が正になる。a>b>0の図では角のb²を二回引いたので一回戻す。恒等式自体は実数a,bで成り立つ。 確認項目：負どうしの積または重なりの二重除去を示した。 / 図ではa>b>0を条件にした。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "(3x−1)²を展開しよう。 a＝3x、b＝1として差の平方の公式を見る。 最初は(3x)²＝9x²。 中央は−2×3x×1＝−6x、最後は1²＝1。 9x²−6x＋1となる。x＝0なら元の(−1)²も1で確かめられる。 結論：9x²−6x＋1",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「(a−b)²の最後は引き算だから−b²になる。」は誤り。最後の項は(−b)×(−b)＝＋b²。差の平方全体はa²−2ab＋b²。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "実数a,bで(a−b)²=a²−2ab+b²。帯を除く面積図はa>b>0。二つのabの重なりb²を一回戻す。(x−3)²=x²−6x+9。 操作図の範囲：操作例a=5,b=1,2,3はa>b>0。全体25から面積5bの帯二本を引くとb²の重なりを二度引くため一度戻し、25−10b＋b²=(5−b)²を得る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233121230000",
    "grade": 9,
    "title": "和と差の積・平方の差",
    "domain": "A",
    "order": 5,
    "goal": "(a+b)(a−b)=a²−b²を展開と図で捉え、数の計算に用いる。",
    "coverageCodes": [
      "8350233121230000",
      "8350233122100000",
      "8350233122200000"
    ],
    "explanations": {
      "es": {
        "short": "和と差をかけると、中央の二つの項が打ち消し合う。(a＋b)(a−b)＝a²−b²だよ。差そのものを二乗する式とは区別しよう。",
        "detail": "(x＋3)(x−3)を展開するとx²−3x＋3x−9。−3xと＋3xが打ち消し合ってx²−9になる。x>3の図なら、一辺xの正方形から一辺3の正方形を除いた部分を、辺x＋3とx−3の長方形に組み替える考え方も使える。"
      },
      "js": {
        "short": "実数a,bで(a＋b)(a−b)＝a²−b²。展開した−abと＋abが打ち消し合うため、平方の差となる。",
        "detail": "(2x＋5)(2x−5)ではa＝2x、b＝5なので4x²−25。公式は数の積にも使え、103×97＝(100＋3)(100−3)＝10000−9＝9991と計算できる。面積による組替えはa>b>0の範囲で示すが、式そのものは一般の実数a,bで分配法則から成り立つ。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "正方形の差を組み替える",
        "text": "a>b>0の架空の紙で、一辺aの正方形から一辺bの正方形を除く。残りを切って組み替えると辺a＋b、a−bの長方形にでき、面積はa²−b²。",
        "activityIds": [
          "craft-cardboard"
        ]
      },
      {
        "category": "programming",
        "title": "中心から同じだけ離れた数",
        "text": "教材で103×97を100を中心にした和と差の積として読む。100²−3²＝9991となり、長い筆算と同じ積を求められる。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "(x＋3)(x−3)を展開すると？",
        "options": [
          "x²−6x＋9",
          "x²＋9",
          "x²−9"
        ],
        "answer": "x²−9",
        "explanation": "中央の−3xと＋3xが打ち消し合う。",
        "hint": "二つの括弧の違いは定数の符号だけ。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "(2x＋5)(2x−5)の展開は？",
        "options": [
          "4x²＋25",
          "4x²−25",
          "2x²−25"
        ],
        "answer": "4x²−25",
        "explanation": "2x全体を二乗して4x²、5を二乗して25。",
        "hint": "aに当たるまとまりを囲む。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "103×97を公式で計算すると？",
        "answer": 9991,
        "explanation": "100²−3²＝10000−9。",
        "hint": "100に3を足した数と引いた数。",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "(x＋7)(x−7)を展開した定数項は？",
        "answer": -49,
        "explanation": "−7²＝−49。",
        "hint": "7²を引く。",
        "suffix": "",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "(x−3)²と(x＋3)(x−3)の組として正しいのは？",
        "options": [
          "どちらもx²＋9",
          "x²−6x＋9 と x²−9",
          "どちらもx²−9"
        ],
        "answer": "x²−6x＋9 と x²−9",
        "explanation": "前者は同じ差の二乗、後者は和と差の積。",
        "hint": "二つの括弧の符号を比較する。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "x＝2のとき、(x＋3)(x−3)の値は？",
        "answer": -5,
        "explanation": "5×(−1)＝−5で、x²−9でも4−9＝−5。",
        "hint": "式の計算には負の値も使える。",
        "suffix": "",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "a>b>0の面積図でa²−b²を表す長方形の辺は？",
        "options": [
          "aとa−b",
          "a−bとa−b",
          "a＋bとa−b"
        ],
        "answer": "a＋bとa−b",
        "explanation": "二つの辺の積が(a＋b)(a−b)となる。",
        "hint": "面積と二つの辺の関係を確認する。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "(a＋b)(a−b)で中央の項が消える理由は？",
        "options": [
          "aとbが同じ数だから",
          "−abと＋abの和が0だから",
          "abがいつも0だから"
        ],
        "answer": "−abと＋abの和が0だから",
        "explanation": "a,b自体が0や同じ数である必要はない。",
        "hint": "項の符号が逆であることを見る。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：51×49は50²に比べて？",
      "options": [
        "1小さい",
        "1大きい",
        "同じ"
      ],
      "answer": "1小さい",
      "explanation": "(50＋1)(50−1)＝50²−1。",
      "hint": "中心50からの差は1。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "和と差の積を見抜く",
      "prompt": "51×49を工夫して計算しよう。",
      "steps": [
        {
          "text": "51を50＋1、49を50−1と表す。"
        },
        {
          "text": "(a＋b)(a−b)でa＝50、b＝1に対応させる。"
        },
        {
          "text": "50²−1²＝2500−1と計算する。"
        },
        {
          "text": "2499となる。50²との違いは1である。"
        }
      ],
      "answer": "2499",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "(a＋b)(a−b)は(a−b)²と同じである。",
      "correction": "和と差の積はa²−b²。差の平方はa²−2ab＋b²で、一般には異なる。a＝3,b＝1なら8と4。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "和と差の積にabの項が残らない理由を説明しよう。",
        "followUp": "面積図が使えないa<bの場合でも、恒等式は成り立つ？",
        "checkpoints": [
          "展開した二つのabの符号を比べた。",
          "式の理由と正の面積図の範囲を分けた。"
        ],
        "sample": "展開で−abと＋abが現れ、和が0になる。恒等式は実数a,bで成立するが、辺a−bを正の長さにする図はa>b>0で示す。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "和と差をかけると、中央の二つの項が打ち消し合う。(a＋b)(a−b)＝a²−b²だよ。差そのものを二乗する式とは区別しよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "(x＋3)(x−3)を展開するとx²−3x＋3x−9。−3xと＋3xが打ち消し合ってx²−9になる。x>3の図なら、一辺xの正方形から一辺3の正方形を除いた部分を、辺x＋3とx−3の長方形に組み替える考え方も使える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "実数a,bで(a＋b)(a−b)＝a²−b²。展開した−abと＋abが打ち消し合うため、平方の差となる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "(2x＋5)(2x−5)ではa＝2x、b＝5なので4x²−25。公式は数の積にも使え、103×97＝(100＋3)(100−3)＝10000−9＝9991と計算できる。面積による組替えはa>b>0の範囲で示すが、式そのものは一般の実数a,bで分配法則から成り立つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "a>b>0の架空の紙で、一辺aの正方形から一辺bの正方形を除く。残りを切って組み替えると辺a＋b、a−bの長方形にでき、面積はa²−b²。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材で103×97を100を中心にした和と差の積として読む。100²−3²＝9991となり、長い筆算と同じ積を求められる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "(x＋3)(x−3)を展開すると？ 正答：x²−9。 中央の−3xと＋3xが打ち消し合う。 考える手がかり：二つの括弧の違いは定数の符号だけ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "(2x＋5)(2x−5)の展開は？ 正答：4x²−25。 2x全体を二乗して4x²、5を二乗して25。 考える手がかり：aに当たるまとまりを囲む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "103×97を公式で計算すると？ 正答：9991。 100²−3²＝10000−9。 考える手がかり：100に3を足した数と引いた数。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "(x＋7)(x−7)を展開した定数項は？ 正答：-49。 −7²＝−49。 考える手がかり：7²を引く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "(x−3)²と(x＋3)(x−3)の組として正しいのは？ 正答：x²−6x＋9 と x²−9。 前者は同じ差の二乗、後者は和と差の積。 考える手がかり：二つの括弧の符号を比較する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "x＝2のとき、(x＋3)(x−3)の値は？ 正答：-5。 5×(−1)＝−5で、x²−9でも4−9＝−5。 考える手がかり：式の計算には負の値も使える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "a>b>0の面積図でa²−b²を表す長方形の辺は？ 正答：a＋bとa−b。 二つの辺の積が(a＋b)(a−b)となる。 考える手がかり：面積と二つの辺の関係を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "(a＋b)(a−b)で中央の項が消える理由は？ 正答：−abと＋abの和が0だから。 a,b自体が0や同じ数である必要はない。 考える手がかり：項の符号が逆であることを見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：51×49は50²に比べて？ 正答：1小さい。 (50＋1)(50−1)＝50²−1。 考える手がかり：中心50からの差は1。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "和と差の積にabの項が残らない理由を説明しよう。 面積図が使えないa<bの場合でも、恒等式は成り立つ？ 展開で−abと＋abが現れ、和が0になる。恒等式は実数a,bで成立するが、辺a−bを正の長さにする図はa>b>0で示す。 確認項目：展開した二つのabの符号を比べた。 / 式の理由と正の面積図の範囲を分けた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "51×49を工夫して計算しよう。 51を50＋1、49を50−1と表す。 (a＋b)(a−b)でa＝50、b＝1に対応させる。 50²−1²＝2500−1と計算する。 2499となる。50²との違いは1である。 結論：2499",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「(a＋b)(a−b)は(a−b)²と同じである。」は誤り。和と差の積はa²−b²。差の平方はa²−2ab＋b²で、一般には異なる。a＝3,b＝1なら8と4。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "実数a,bで(a+b)(a−b)=a²−b²。図による正方形の差の長方形への組替えはa>b>0。(x+3)(x−3)=x²−9。 操作図の範囲：操作例a=5,b=1,2,3で25−b²=(5＋b)(5−b)。正方形の差を、面積5(5−b)とb(5−b)の二部分として、縦5−b・横5＋bの長方形と比較する。全ての図の辺は正。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233144000000",
    "grade": 9,
    "title": "因数と共通因数による因数分解",
    "domain": "A",
    "order": 6,
    "goal": "和を積に表す意味を知り、共通因数を取り出して展開で確認する。",
    "coverageCodes": [
      "8350233121200000",
      "8350233122100000",
      "8350233144000000"
    ],
    "explanations": {
      "es": {
        "short": "式をいくつかの式の積に表すことを因数分解という。3x²＋6x＝3x(x＋2)なら、積の3xとx＋2が因数だよ。展開すると元へ戻る。",
        "detail": "3x²と6xには共通の3xがある。3x²＝3x×x、6x＝3x×2と見て、3x(x＋2)へまとめる。足し算の形を積の形に直しただけなので、式の値は変わらない。最後に分配して3x²＋6xへ戻れば、括弧の中の項や符号を確認できる。"
      },
      "js": {
        "short": "多項式を幾つかの単項式や多項式の積に表すことを因数分解という。共通因数を取り出す操作は、分配法則を逆向きに用いることに当たる。",
        "detail": "6x²＋9x＝3x(2x＋3)では、各項に共通な因数3xを外へ出す。これは等式の両辺を3xで割る操作ではなく、同じ式を積に書き直しているのでx＝0でも等式は成り立つ。因数分解の表し方は一つに限らないが、ここでは整数係数の共通因数をまとめて取り出し、展開して検算する。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "展開と逆向きの操作",
        "text": "式札6x²＋9xを、3x×2xと3x×3としてそろえる。共通の3xを外へ出すと3x(2x＋3)。展開して二つの項に戻せる。",
        "activityIds": [
          "prog-scratch"
        ]
      },
      {
        "category": "craft",
        "title": "同じ高さの長方形",
        "text": "x>0の架空の図で、縦3x、横xの長方形と、縦3x、横2の長方形を横に並べる。総面積3x²＋6xを、外形の面積3x(x＋2)で表せる。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "3x²＋6xを因数分解した式は？",
        "options": [
          "3(x＋2)",
          "3x(x＋2)",
          "3x(x＋6)"
        ],
        "answer": "3x(x＋2)",
        "explanation": "3xをそれぞれの項にかけると元へ戻る。",
        "hint": "括弧の外の因数を分配して確かめる。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "6x²＋9x＝3x(2x＋3)で、右辺の因数の組は？",
        "options": [
          "3xと2x＋3",
          "6x²と9x",
          "2xと3だけ"
        ],
        "answer": "3xと2x＋3",
        "explanation": "因数は積を作るまとまり。左辺の二項とは区別する。",
        "hint": "右辺のかけ算のまとまりを見る。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "4a²−8aの因数分解は？",
        "options": [
          "4a(a−8)",
          "4(a−2)",
          "4a(a−2)"
        ],
        "answer": "4a(a−2)",
        "explanation": "4a×a＝4a²、4a×(−2)＝−8a。",
        "hint": "二つの項に共通な因数を見付ける。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "5x²＋15x＝5x(x＋□)。□は？",
        "answer": 3,
        "explanation": "15x＝5x×3。",
        "hint": "5xをかけると15xになる数を探す。",
        "suffix": "",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "3x²＋6x＝3x(x＋2)へ書き直すとき、x＝0を除く必要は？",
        "options": [
          "ない。両辺とも0になる",
          "ある。xを使う式は全て0を除く",
          "ある。右辺が計算できない"
        ],
        "answer": "ない。両辺とも0になる",
        "explanation": "恒等式の書き換えであり、0で割っていない。",
        "hint": "共通因数をくくることと除法を区別する。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "2xy＋6xの因数分解は？",
        "options": [
          "2xy(1＋3)",
          "2(y＋3)",
          "2x(y＋3)"
        ],
        "answer": "2x(y＋3)",
        "explanation": "共通なのは2x。yは最初の項にだけ含まれる。",
        "hint": "各項の因数を別々に書く。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²＋x＝x(x＋1)で、最後の1が必要な理由は？",
        "options": [
          "次数を増やすため",
          "x×1が元のxになるから",
          "xはいつも1だから"
        ],
        "answer": "x×1が元のxになるから",
        "explanation": "1を消してx×xとすると元の＋xがなくなる。",
        "hint": "展開したとき二項が戻るか確かめる。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "number",
        "prompt": "x＝2のとき、3x(x＋2)の値は？",
        "answer": 24,
        "explanation": "3×2×4＝24で、元の3x²＋6xでも12＋12＝24。",
        "hint": "二つの表し方を同じxで比べる。",
        "suffix": "",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：7x²−7xを共通因数7xでくくると、括弧内は？",
      "options": [
        "x−7",
        "x",
        "x−1"
      ],
      "answer": "x−1",
      "explanation": "7x(x−1)を展開すると7x²−7xに戻る。",
      "hint": "二項目の−7xを作る因数を見る。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "共通因数を取り出す",
      "prompt": "8x²−12xを因数分解しよう。",
      "steps": [
        {
          "text": "8x²＝4x×2x、−12x＝4x×(−3)と見る。"
        },
        {
          "text": "共通因数4xを括弧の外へ出す。"
        },
        {
          "text": "残る二項2xと−3を合わせ、4x(2x−3)とする。"
        },
        {
          "text": "展開すると8x²−12xに戻る。x＝0も含めて同じ式である。"
        }
      ],
      "answer": "4x(2x−3)",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "共通因数xを外へ出すときは、x＝0を必ず除く。",
      "correction": "因数分解は同じ式の積への書き換えであり、xで割る等式変形ではない。x²＋x＝x(x＋1)はx＝0でも成立する。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "因数分解と展開が逆向きの操作であることを例で説明しよう。",
        "followUp": "x²＋xをx²だけにしないため、括弧の中には何が必要？",
        "checkpoints": [
          "和を積に直した。",
          "展開して元の全項へ戻ることを確かめた。"
        ],
        "sample": "x²＋x＝x(x＋1)と積に直すのが因数分解。xを分配してx²＋xへ戻すのが展開。最後の1がxを作る。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "式をいくつかの式の積に表すことを因数分解という。3x²＋6x＝3x(x＋2)なら、積の3xとx＋2が因数だよ。展開すると元へ戻る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "3x²と6xには共通の3xがある。3x²＝3x×x、6x＝3x×2と見て、3x(x＋2)へまとめる。足し算の形を積の形に直しただけなので、式の値は変わらない。最後に分配して3x²＋6xへ戻れば、括弧の中の項や符号を確認できる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "多項式を幾つかの単項式や多項式の積に表すことを因数分解という。共通因数を取り出す操作は、分配法則を逆向きに用いることに当たる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "6x²＋9x＝3x(2x＋3)では、各項に共通な因数3xを外へ出す。これは等式の両辺を3xで割る操作ではなく、同じ式を積に書き直しているのでx＝0でも等式は成り立つ。因数分解の表し方は一つに限らないが、ここでは整数係数の共通因数をまとめて取り出し、展開して検算する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "式札6x²＋9xを、3x×2xと3x×3としてそろえる。共通の3xを外へ出すと3x(2x＋3)。展開して二つの項に戻せる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "x>0の架空の図で、縦3x、横xの長方形と、縦3x、横2の長方形を横に並べる。総面積3x²＋6xを、外形の面積3x(x＋2)で表せる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "3x²＋6xを因数分解した式は？ 正答：3x(x＋2)。 3xをそれぞれの項にかけると元へ戻る。 考える手がかり：括弧の外の因数を分配して確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "6x²＋9x＝3x(2x＋3)で、右辺の因数の組は？ 正答：3xと2x＋3。 因数は積を作るまとまり。左辺の二項とは区別する。 考える手がかり：右辺のかけ算のまとまりを見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "4a²−8aの因数分解は？ 正答：4a(a−2)。 4a×a＝4a²、4a×(−2)＝−8a。 考える手がかり：二つの項に共通な因数を見付ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "5x²＋15x＝5x(x＋□)。□は？ 正答：3。 15x＝5x×3。 考える手がかり：5xをかけると15xになる数を探す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "3x²＋6x＝3x(x＋2)へ書き直すとき、x＝0を除く必要は？ 正答：ない。両辺とも0になる。 恒等式の書き換えであり、0で割っていない。 考える手がかり：共通因数をくくることと除法を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "2xy＋6xの因数分解は？ 正答：2x(y＋3)。 共通なのは2x。yは最初の項にだけ含まれる。 考える手がかり：各項の因数を別々に書く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "x²＋x＝x(x＋1)で、最後の1が必要な理由は？ 正答：x×1が元のxになるから。 1を消してx×xとすると元の＋xがなくなる。 考える手がかり：展開したとき二項が戻るか確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "x＝2のとき、3x(x＋2)の値は？ 正答：24。 3×2×4＝24で、元の3x²＋6xでも12＋12＝24。 考える手がかり：二つの表し方を同じxで比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：7x²−7xを共通因数7xでくくると、括弧内は？ 正答：x−1。 7x(x−1)を展開すると7x²−7xに戻る。 考える手がかり：二項目の−7xを作る因数を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "因数分解と展開が逆向きの操作であることを例で説明しよう。 x²＋xをx²だけにしないため、括弧の中には何が必要？ x²＋x＝x(x＋1)と積に直すのが因数分解。xを分配してx²＋xへ戻すのが展開。最後の1がxを作る。 確認項目：和を積に直した。 / 展開して元の全項へ戻ることを確かめた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "8x²−12xを因数分解しよう。 8x²＝4x×2x、−12x＝4x×(−3)と見る。 共通因数4xを括弧の外へ出す。 残る二項2xと−3を合わせ、4x(2x−3)とする。 展開すると8x²−12xに戻る。x＝0も含めて同じ式である。 結論：4x(2x−3)",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「共通因数xを外へ出すときは、x＝0を必ず除く。」は誤り。因数分解は同じ式の積への書き換えであり、xで割る等式変形ではない。x²＋x＝x(x＋1)はx＝0でも成立する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "共通因数を用いた因数分解ab+ac=a(b+c)は実数a,b,cで成立する。3x²+6x=3x(x+2)はx=0も含む。因数分解を0で割る操作と同一視しない。 操作図の範囲：操作例k=−3,−2,2,3ではkx²＋2kx=kx(x＋2)。二項の係数はk,2kで共通因数kxを見付ける。これは値を保つ積への変形で、xで割る操作ではなくx=0も成立する。負係数は記号として表す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233121240000",
    "grade": 9,
    "title": "和と積を使う因数分解",
    "domain": "A",
    "order": 7,
    "goal": "x²+px+qから和p・積qとなる二数を見付け、展開して確認する。",
    "coverageCodes": [
      "8350233121240000",
      "8350233122100000",
      "8350233144000000"
    ],
    "explanations": {
      "es": {
        "short": "x²＋px＋qを因数分解するとき、和がp、積がqになる二つの数を探そう。x²＋5x＋6なら2と3なので、(x＋2)(x＋3)。",
        "detail": "(x＋a)(x＋b)を展開するとx²＋(a＋b)x＋ab。逆に見ると、中央の係数はaとbの和、最後の数は積になる。x²−x−6なら、積−6の組から和−1になる−3と2を選び、(x−3)(x＋2)とする。展開して両方の条件を確かめよう。"
      },
      "js": {
        "short": "公式(x＋a)(x＋b)＝x²＋(a＋b)x＋abを逆向きに用いる。和と積を同時に満たす数を求め、符号を含めて因数へ入れる。",
        "detail": "ここでは、和と積の条件を満たす整数の二数が見付かる簡単な式を扱う。定数項の因数の組を調べる。x²−5x＋6なら積が正で和が負なので−2と−3を選ぶ。x²−x−6なら積が負なので二数の符号は逆になる。並べ方を逆にした(x＋2)(x−3)も同じ積であり、順番だけを誤りとしない。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "長方形に組み直す",
        "text": "x>0の架空の面積x²＋5x＋6を、x²、2x、3x、6の四領域に分ける。6＝2×3と5＝2＋3が同時に成り立つので、辺x＋2とx＋3の長方形になる。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "和と積を両方調べる",
        "text": "教材用に積−6となる整数の組を列挙する。−1と6は和5、1と−6は和−5、−3と2は和−1なので、x²−x−6には最後の組を使う。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "x²＋5x＋6の因数分解は？",
        "options": [
          "(x＋2)(x＋3)",
          "(x＋1)(x＋6)",
          "(x−2)(x−3)"
        ],
        "answer": "(x＋2)(x＋3)",
        "explanation": "和5、積6となる2と3を使う。",
        "hint": "中央と最後を両方確認する。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²−5x＋6の因数分解は？",
        "options": [
          "(x＋2)(x＋3)",
          "(x−1)(x−6)",
          "(x−2)(x−3)"
        ],
        "answer": "(x−2)(x−3)",
        "explanation": "−2と−3は和−5、積6。",
        "hint": "積が正でも和は負になり得る。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²−x−6の因数分解は？",
        "options": [
          "(x−1)(x＋6)",
          "(x−3)(x＋2)",
          "(x＋3)(x−2)"
        ],
        "answer": "(x−3)(x＋2)",
        "explanation": "−3＋2＝−1、(−3)×2＝−6。",
        "hint": "符号の違う二数の和を見る。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "x²＋7x＋12＝(x＋3)(x＋□)。□は？",
        "answer": 4,
        "explanation": "3＋4＝7、3×4＝12。",
        "hint": "積と和の両方から確かめる。",
        "suffix": "",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²＋2x−8の因数分解は？",
        "options": [
          "(x−4)(x＋2)",
          "(x＋8)(x−1)",
          "(x＋4)(x−2)"
        ],
        "answer": "(x＋4)(x−2)",
        "explanation": "4と−2は和2、積−8。",
        "hint": "正負の二数でどちらの絶対値が大きいか考える。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²＋5x＋6を(x＋1)(x＋6)としたとき、何が合わない？",
        "options": [
          "x²の係数が0になる",
          "xの係数が7になってしまう",
          "定数項が7になる"
        ],
        "answer": "xの係数が7になってしまう",
        "explanation": "積は6だが、和が1＋6＝7となる。",
        "hint": "展開して中央の項を見る。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²＋3xの因数分解は？",
        "options": [
          "x(x＋3)",
          "(x＋1)(x＋3)",
          "x(x＋1)"
        ],
        "answer": "x(x＋3)",
        "explanation": "定数項0に対応する二数は0と3。共通因数xを取る形になる。",
        "hint": "0と3の和と積を見る。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "number",
        "prompt": "x＝3のとき、(x＋2)(x＋3)の値は？",
        "answer": 30,
        "explanation": "5×6＝30で、x²＋5x＋6でも9＋15＋6＝30。",
        "hint": "因数分解の前後で同じ値になる。",
        "suffix": "",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：x²＋x−12で、因数の定数として使う二数は？",
      "options": [
        "6と−2",
        "4と−3",
        "3と−4"
      ],
      "answer": "4と−3",
      "explanation": "和1、積−12を同時に満たすのは4と−3。",
      "hint": "積だけでは一つに決まらない。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "和と積を照合する",
      "prompt": "x²＋5x＋6を因数分解しよう。",
      "steps": [
        {
          "text": "定数項6の整数の組として1と6、2と3などを挙げる。"
        },
        {
          "text": "xの係数5に合う和を調べ、2＋3＝5を選ぶ。"
        },
        {
          "text": "(x＋2)(x＋3)と積に表す。"
        },
        {
          "text": "展開してx²＋3x＋2x＋6＝x²＋5x＋6へ戻ることを確認する。"
        }
      ],
      "answer": "(x＋2)(x＋3)",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "最後の数の積さえ合えば因数分解は正しい。",
      "correction": "中央の係数に合う和も必要。x²＋5x＋6に対して1と6では和7になり、式が変わってしまう。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "x²−x−6を因数分解するとき、−3と2を選ぶ理由を説明しよう。",
        "followUp": "(x＋2)(x−3)と順を入れ替えてもよい？",
        "checkpoints": [
          "和−1と積−6の両方を示した。",
          "展開による確認と積の順序を区別した。"
        ],
        "sample": "−3と2は和−1、積−6なので(x−3)(x＋2)。乗法の交換法則により順を入れ替えた積も同じ式。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "x²＋px＋qを因数分解するとき、和がp、積がqになる二つの数を探そう。x²＋5x＋6なら2と3なので、(x＋2)(x＋3)。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "(x＋a)(x＋b)を展開するとx²＋(a＋b)x＋ab。逆に見ると、中央の係数はaとbの和、最後の数は積になる。x²−x−6なら、積−6の組から和−1になる−3と2を選び、(x−3)(x＋2)とする。展開して両方の条件を確かめよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "公式(x＋a)(x＋b)＝x²＋(a＋b)x＋abを逆向きに用いる。和と積を同時に満たす数を求め、符号を含めて因数へ入れる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "ここでは、和と積の条件を満たす整数の二数が見付かる簡単な式を扱う。定数項の因数の組を調べる。x²−5x＋6なら積が正で和が負なので−2と−3を選ぶ。x²−x−6なら積が負なので二数の符号は逆になる。並べ方を逆にした(x＋2)(x−3)も同じ積であり、順番だけを誤りとしない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "x>0の架空の面積x²＋5x＋6を、x²、2x、3x、6の四領域に分ける。6＝2×3と5＝2＋3が同時に成り立つので、辺x＋2とx＋3の長方形になる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材用に積−6となる整数の組を列挙する。−1と6は和5、1と−6は和−5、−3と2は和−1なので、x²−x−6には最後の組を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "x²＋5x＋6の因数分解は？ 正答：(x＋2)(x＋3)。 和5、積6となる2と3を使う。 考える手がかり：中央と最後を両方確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "x²−5x＋6の因数分解は？ 正答：(x−2)(x−3)。 −2と−3は和−5、積6。 考える手がかり：積が正でも和は負になり得る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "x²−x−6の因数分解は？ 正答：(x−3)(x＋2)。 −3＋2＝−1、(−3)×2＝−6。 考える手がかり：符号の違う二数の和を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "x²＋7x＋12＝(x＋3)(x＋□)。□は？ 正答：4。 3＋4＝7、3×4＝12。 考える手がかり：積と和の両方から確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "x²＋2x−8の因数分解は？ 正答：(x＋4)(x−2)。 4と−2は和2、積−8。 考える手がかり：正負の二数でどちらの絶対値が大きいか考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "x²＋5x＋6を(x＋1)(x＋6)としたとき、何が合わない？ 正答：xの係数が7になってしまう。 積は6だが、和が1＋6＝7となる。 考える手がかり：展開して中央の項を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "x²＋3xの因数分解は？ 正答：x(x＋3)。 定数項0に対応する二数は0と3。共通因数xを取る形になる。 考える手がかり：0と3の和と積を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "x＝3のとき、(x＋2)(x＋3)の値は？ 正答：30。 5×6＝30で、x²＋5x＋6でも9＋15＋6＝30。 考える手がかり：因数分解の前後で同じ値になる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：x²＋x−12で、因数の定数として使う二数は？ 正答：4と−3。 和1、積−12を同時に満たすのは4と−3。 考える手がかり：積だけでは一つに決まらない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "x²−x−6を因数分解するとき、−3と2を選ぶ理由を説明しよう。 (x＋2)(x−3)と順を入れ替えてもよい？ −3と2は和−1、積−6なので(x−3)(x＋2)。乗法の交換法則により順を入れ替えた積も同じ式。 確認項目：和−1と積−6の両方を示した。 / 展開による確認と積の順序を区別した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "x²＋5x＋6を因数分解しよう。 定数項6の整数の組として1と6、2と3などを挙げる。 xの係数5に合う和を調べ、2＋3＝5を選ぶ。 (x＋2)(x＋3)と積に表す。 展開してx²＋3x＋2x＋6＝x²＋5x＋6へ戻ることを確認する。 結論：(x＋2)(x＋3)",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「最後の数の積さえ合えば因数分解は正しい。」は誤り。中央の係数に合う和も必要。x²＋5x＋6に対して1と6では和7になり、式が変わってしまう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "実数a,b,xで(x+a)(x+b)=x²+(a+b)x+ab。x²+5x+6=(x+2)(x+3)、x²−x−6=(x−3)(x+2)。面積の再配置はx>0。図がx=3なら四面積9,6,9,6、外形5×6で総面積30。 操作図の範囲：操作の二数は(2,3),(−2,3),(−2,−3)。和と積は順に(5,6),(1,−6),(−5,6)なので、x²＋5x＋6=(x＋2)(x＋3)、x²＋x−6=(x−2)(x＋3)、x²−5x＋6=(x−2)(x−3)。正の面積例はx=3で四部分x²,2x,3x,6が9,6,9,6、全体30。負の因数の例は式で扱う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "motion",
        "text": "実数xについてx²＋5x＋6=(x＋2)(x＋3)。和2＋3=5、積2×3=6の二条件を確かめる。面積による四段説明はx>0の模型で、図の比率はx=3。幅xと2、高さxと3で分けた四部分x²,2x,3x,6の面積は9,6,9,6、合計30。外側は5×6の長方形で、同じ四部分の値を保って対応を強調する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "video",
        "text": "x²＋5x＋6=(x＋2)(x＋3)を、x>0の長方形の面積で確かめる。図の比率はx=3で、四部分x²,2x,3x,6は9,6,9,6、和30。二数2,3は和5・積6を満たし、外側の辺はx＋2=5とx＋3=6となる。正の長さによる面積例と、分配法則による全実数の恒等式を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233122100000",
    "grade": 9,
    "title": "平方・平方の差を使う因数分解",
    "domain": "A",
    "order": 8,
    "goal": "共通因数を先に確認し、三つの公式を逆に使って因数分解する。",
    "coverageCodes": [
      "8350233121210000",
      "8350233121220000",
      "8350233121230000",
      "8350233122100000",
      "8350233144000000"
    ],
    "explanations": {
      "es": {
        "short": "平方の公式を逆に読めば、因数分解にも使える。x²＋6x＋9＝(x＋3)²、x²−9＝(x＋3)(x−3)。最初に共通因数も探そう。",
        "detail": "x²＋6x＋9では、9＝3²で、中央も2×x×3＝6xだから和の平方。(x＋3)²と書ける。x²−6x＋9なら差の平方で(x−3)²。x²−9は中央の項がなく、平方の差なので(x＋3)(x−3)。式の項と符号を見て選ぼう。"
      },
      "js": {
        "short": "共通因数を確認した上で、a²±2ab＋b²＝(a±b)²、a²−b²＝(a＋b)(a−b)を逆向きに用いる。展開で元の式との同一性を確かめる。",
        "detail": "4x²−12x＋9では(2x)²と3²だけでなく、中央が−2×2x×3であることを確かめ、(2x−3)²とする。2x²−18ならまず2(x²−9)とし、その後2(x＋3)(x−3)へ進む。平方の和x²＋9を、平方の差と同じ公式で因数分解することはできない。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "三項を照合する",
        "text": "教材で4x²−12x＋9を、a²−2ab＋b²と照らし合わせる。a＝2x,b＝3を入れると三項全てが一致し、(2x−3)²となる。",
        "activityIds": [
          "prog-scratch"
        ]
      },
      {
        "category": "drawing",
        "title": "同じ式の別の形",
        "text": "x>3の図でx²−9を、辺x＋3とx−3の長方形として見る。差の平方(x−3)²とは外形が違い、式の中央の項も異なる。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "x²＋6x＋9を因数分解すると？",
        "options": [
          "(x＋6)²",
          "(x＋3)(x−3)",
          "(x＋3)²"
        ],
        "answer": "(x＋3)²",
        "explanation": "中央6xは2×x×3に一致する。",
        "hint": "最後9の平方根だけでなく中央も照合。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²−6x＋9を因数分解すると？",
        "options": [
          "(x＋3)(x−3)",
          "(x−3)²",
          "(x＋3)²"
        ],
        "answer": "(x−3)²",
        "explanation": "差の平方の三項がそろう。",
        "hint": "中央の負符号を見る。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²−9を因数分解すると？",
        "options": [
          "(x＋3)(x−3)",
          "(x−3)²",
          "(x＋9)(x−9)"
        ],
        "answer": "(x＋3)(x−3)",
        "explanation": "x²−3²に平方の差の公式を使う。",
        "hint": "9は3の二乗。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "4x²−12x＋9を因数分解すると？",
        "options": [
          "(4x−3)²",
          "(2x＋3)²",
          "(2x−3)²"
        ],
        "answer": "(2x−3)²",
        "explanation": "(2x)²＝4x²、中央は−12x。",
        "hint": "最初の項も中央も確認する。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "2x²−18を因数分解すると？",
        "options": [
          "2(x−3)²",
          "2(x＋3)(x−3)",
          "(2x＋3)(2x−3)"
        ],
        "answer": "2(x＋3)(x−3)",
        "explanation": "共通因数2を出すとx²−9が残る。",
        "hint": "まず全項に共通する数を探す。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "x²＋10x＋25＝(x＋□)²。□は？",
        "answer": 5,
        "explanation": "5²＝25、2×5＝10の両方を満たす。",
        "hint": "和の平方の中央と最後を合わせる。",
        "suffix": "",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²＋9を(x＋3)(x−3)とするのは？",
        "options": [
          "正しい",
          "誤り。右辺はx²＋6x＋9になる",
          "誤り。右辺はx²−9になる"
        ],
        "answer": "誤り。右辺はx²−9になる",
        "explanation": "和と差の積で得るのは平方の差。",
        "hint": "右辺を展開して符号を見る。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "number",
        "prompt": "x＝4のとき、2(x＋3)(x−3)の値は？",
        "answer": 14,
        "explanation": "2×7×1＝14で、2x²−18でも32−18＝14。",
        "hint": "共通因数2を最後まで残す。",
        "suffix": "",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：x²−8x＋16に合う形は？",
      "options": [
        "(x−4)²",
        "(x＋4)²",
        "(x＋4)(x−4)"
      ],
      "answer": "(x−4)²",
      "explanation": "−8x＝−2×x×4、16＝4²。",
      "hint": "三つの項を一つずつ公式に当てはめる。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "共通因数の後に公式を使う",
      "prompt": "3x²−27を因数分解しよう。",
      "steps": [
        {
          "text": "二項の共通因数3を取り出し、3(x²−9)にする。"
        },
        {
          "text": "括弧の中をx²−3²という平方の差と見る。"
        },
        {
          "text": "x²−9＝(x＋3)(x−3)に置き換える。"
        },
        {
          "text": "外の3を保って3(x＋3)(x−3)。展開すれば3x²−27に戻る。"
        }
      ],
      "answer": "3(x＋3)(x−3)",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "最後が平方数なら、中央を見なくても平方の形にできる。",
      "correction": "例えばx²＋9には中央の6xがないため(x＋3)²ではない。最初・中央・最後の全てを照合する。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "x²−6x＋9とx²−9の因数分解が違う理由を説明しよう。",
        "followUp": "共通因数がある式では、どこから調べると見通しがよい？",
        "checkpoints": [
          "中央の項と符号を照合した。",
          "共通因数を取り出した後も外の因数を残した。"
        ],
        "sample": "前者は三項が差の平方に合い(x−3)²。後者は平方の差で(x＋3)(x−3)。共通因数を先に出すと公式の形を見付けやすい。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "平方の公式を逆に読めば、因数分解にも使える。x²＋6x＋9＝(x＋3)²、x²−9＝(x＋3)(x−3)。最初に共通因数も探そう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "x²＋6x＋9では、9＝3²で、中央も2×x×3＝6xだから和の平方。(x＋3)²と書ける。x²−6x＋9なら差の平方で(x−3)²。x²−9は中央の項がなく、平方の差なので(x＋3)(x−3)。式の項と符号を見て選ぼう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "共通因数を確認した上で、a²±2ab＋b²＝(a±b)²、a²−b²＝(a＋b)(a−b)を逆向きに用いる。展開で元の式との同一性を確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "4x²−12x＋9では(2x)²と3²だけでなく、中央が−2×2x×3であることを確かめ、(2x−3)²とする。2x²−18ならまず2(x²−9)とし、その後2(x＋3)(x−3)へ進む。平方の和x²＋9を、平方の差と同じ公式で因数分解することはできない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材で4x²−12x＋9を、a²−2ab＋b²と照らし合わせる。a＝2x,b＝3を入れると三項全てが一致し、(2x−3)²となる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "x>3の図でx²−9を、辺x＋3とx−3の長方形として見る。差の平方(x−3)²とは外形が違い、式の中央の項も異なる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "x²＋6x＋9を因数分解すると？ 正答：(x＋3)²。 中央6xは2×x×3に一致する。 考える手がかり：最後9の平方根だけでなく中央も照合。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "x²−6x＋9を因数分解すると？ 正答：(x−3)²。 差の平方の三項がそろう。 考える手がかり：中央の負符号を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "x²−9を因数分解すると？ 正答：(x＋3)(x−3)。 x²−3²に平方の差の公式を使う。 考える手がかり：9は3の二乗。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "4x²−12x＋9を因数分解すると？ 正答：(2x−3)²。 (2x)²＝4x²、中央は−12x。 考える手がかり：最初の項も中央も確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "2x²−18を因数分解すると？ 正答：2(x＋3)(x−3)。 共通因数2を出すとx²−9が残る。 考える手がかり：まず全項に共通する数を探す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "x²＋10x＋25＝(x＋□)²。□は？ 正答：5。 5²＝25、2×5＝10の両方を満たす。 考える手がかり：和の平方の中央と最後を合わせる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "x²＋9を(x＋3)(x−3)とするのは？ 正答：誤り。右辺はx²−9になる。 和と差の積で得るのは平方の差。 考える手がかり：右辺を展開して符号を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "x＝4のとき、2(x＋3)(x−3)の値は？ 正答：14。 2×7×1＝14で、2x²−18でも32−18＝14。 考える手がかり：共通因数2を最後まで残す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：x²−8x＋16に合う形は？ 正答：(x−4)²。 −8x＝−2×x×4、16＝4²。 考える手がかり：三つの項を一つずつ公式に当てはめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "x²−6x＋9とx²−9の因数分解が違う理由を説明しよう。 共通因数がある式では、どこから調べると見通しがよい？ 前者は三項が差の平方に合い(x−3)²。後者は平方の差で(x＋3)(x−3)。共通因数を先に出すと公式の形を見付けやすい。 確認項目：中央の項と符号を照合した。 / 共通因数を取り出した後も外の因数を残した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "3x²−27を因数分解しよう。 二項の共通因数3を取り出し、3(x²−9)にする。 括弧の中をx²−3²という平方の差と見る。 x²−9＝(x＋3)(x−3)に置き換える。 外の3を保って3(x＋3)(x−3)。展開すれば3x²−27に戻る。 結論：3(x＋3)(x−3)",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「最後が平方数なら、中央を見なくても平方の形にできる。」は誤り。例えばx²＋9には中央の6xがないため(x＋3)²ではない。最初・中央・最後の全てを照合する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "a²±2ab+b²=(a±b)²、a²−b²=(a+b)(a−b)は実数で成立。公式照合は全項で行う。共通因数を出す場合も式の値を保つ。 操作図の範囲：操作例はx²＋6x＋9=(x＋3)²、x²−6x＋9=(x−3)²、x²−9=(x＋3)(x−3)。平方の形と平方の差を分け、展開で元へ戻ることを確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233122200000",
    "grade": 9,
    "title": "展開と因数分解の活用",
    "domain": "A",
    "order": 9,
    "goal": "整数の性質や数量の関係を文字式で説明し、数値例だけの確認と区別する。",
    "coverageCodes": [
      "8350232100000000",
      "8350232200000000",
      "8350232300000000",
      "8350233122100000",
      "8350233122200000",
      "8350233512000000",
      "8350233513000000"
    ],
    "explanations": {
      "es": {
        "short": "文字で数を表して展開すると、たくさんの例に共通する理由を説明できる。整数nで、続く二数の平方の差は(n＋1)²−n²＝2n＋1だから奇数だよ。",
        "detail": "整数nとその次の整数n＋1を考える。平方の差(n＋1)²−n²を展開すると、n²＋2n＋1−n²＝2n＋1。これは整数の2倍に1を足した形だから奇数。n＝2の一例だけでなく、整数n全体について同じ式で説明できる。"
      },
      "js": {
        "short": "整数の性質は、整数を文字で表し、展開や因数分解によって性質が読み取れる形へ変形して説明する。数値例は予想や確認に使い、一般の理由とは区別する。",
        "detail": "整数nで(2n＋1)²−(2n−1)²＝8nとなるので、二つの連続する奇数の平方の差は8の倍数である。また連続する二整数の積n(n＋1)は、どちらか一方が偶数なので偶数となる。後者では展開するより積の形の方が因数の性質を読み取りやすい。目的に合う式の形を選ぶ。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "予想を文字で確かめる",
        "text": "架空の計算表で整数nに対する(n＋1)²−n²を調べる。いくつかの奇数が見えても、それだけで全ての場合の証明とはしない。展開して2n＋1と表すと整数全体への理由になる。",
        "activityIds": [
          "prog-python"
        ]
      },
      {
        "category": "drawing",
        "title": "増える部分を見る",
        "text": "正の整数nについて、一辺nとn＋1の正方形の面積の差は2n＋1。n>0の図では長方形二本と一つの小正方形で表せる。n＝0は式で別に確認する。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "整数nで(n＋1)²−n²を整理すると？",
        "options": [
          "2n²＋1",
          "2n＋1",
          "1"
        ],
        "answer": "2n＋1",
        "explanation": "展開したn²どうしを引くと2n＋1が残る。",
        "hint": "括弧を展開してから同類項をまとめる。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "整数nについて2n＋1が奇数といえる理由は？",
        "options": [
          "整数の2倍に1を足した形だから",
          "nがいつも偶数だから",
          "2nがいつも正だから"
        ],
        "answer": "整数の2倍に1を足した形だから",
        "explanation": "nの正負によらず2nは偶数で、1を足すと奇数。",
        "hint": "奇数の表し方へ戻る。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "整数n＝4のとき、(n＋1)²−n²はいくつ？",
        "answer": 9,
        "explanation": "5²−4²＝25−16＝9。",
        "hint": "2n＋1でも確認する。",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "整数nで(2n＋1)²−(2n−1)²を整理すると？",
        "options": [
          "8n²",
          "8n",
          "4n"
        ],
        "answer": "8n",
        "explanation": "二式を展開すると4n²と1が消え、4n−(−4n)が残る。",
        "hint": "引く式の中央の負号にも注意する。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "整数nの8nから読み取れる性質は？",
        "options": [
          "8の倍数である",
          "必ず正である",
          "必ず8である"
        ],
        "answer": "8の倍数である",
        "explanation": "整数倍という意味で、0や負の値も8の倍数に含む。",
        "hint": "nの取り得る範囲を保つ。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "連続する二整数n,n＋1の積が偶数である理由は？",
        "options": [
          "両方とも偶数だから",
          "和が必ず偶数だから",
          "少なくとも一方が偶数だから"
        ],
        "answer": "少なくとも一方が偶数だから",
        "explanation": "連続する二整数では偶数と奇数が交互になる。",
        "hint": "積の因数の片方に2が含まれるか考える。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "整数nの性質を示すとき、n＝1,2,3の例だけで全てを証明できる？",
        "options": [
          "できる。正の例だけで全整数を覆う",
          "できない。一般の整数について理由が必要",
          "できる。三例なら十分"
        ],
        "answer": "できない。一般の整数について理由が必要",
        "explanation": "調べた三例以外も主張に含まれる。",
        "hint": "主張する範囲と調べた範囲を比べる。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "order",
        "prompt": "連続する整数の平方の差が奇数と説明する手順を並べよう。",
        "items": [
          "展開して2n＋1に整理する",
          "二数を整数nとn＋1で表す",
          "2n＋1が整数の2倍に1を足した形と述べる"
        ],
        "answer": [
          "二数を整数nとn＋1で表す",
          "展開して2n＋1に整理する",
          "2n＋1が整数の2倍に1を足した形と述べる"
        ],
        "explanation": "一般の数を表してから変形し、得た式の意味を読む。",
        "hint": "文字を置く、計算する、性質を説明するという依存を追う。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：整数n＝−2でも、(n＋1)²−n²＝2n＋1は奇数になる？",
      "options": [
        "ならない。負の数は奇数ではない",
        "ならない。式は正のnだけ",
        "なる。値は−3"
      ],
      "answer": "なる。値は−3",
      "explanation": "1−4＝−3。負の奇数も整数の2倍に1を足した形で表せる。",
      "hint": "整数には負の数も含む。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "二つの奇数の平方の差",
      "prompt": "整数nについて、(2n＋1)²−(2n−1)²を説明しよう。",
      "steps": [
        {
          "text": "2n−1と2n＋1は差が2の連続する奇数である。"
        },
        {
          "text": "それぞれを展開し、(4n²＋4n＋1)−(4n²−4n＋1)とする。"
        },
        {
          "text": "引く式の全項の符号を変えて整理すると8nとなる。"
        },
        {
          "text": "nは整数なので8nは8の倍数。数値例だけでなく全ての整数nに理由を示した。"
        }
      ],
      "answer": "平方の差は8nで、8の倍数。",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "何個かの例で同じ結果が出れば、全ての場合の証明になる。",
      "correction": "有限個の例だけでは、調べていない値を含む一般の主張は示せない。整数nの式へ直し、その性質を理由付きで読む。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "整数nについて(n＋1)²−n²が奇数といえる理由を説明しよう。",
        "followUp": "nが負でも同じ説明が使える？",
        "checkpoints": [
          "整数nという条件を明示した。",
          "展開した2n＋1を奇数の形として説明した。"
        ],
        "sample": "平方の差を展開すると2n＋1。nが整数なら正負によらず2nは偶数で、それに1を足した数は奇数。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "文字で数を表して展開すると、たくさんの例に共通する理由を説明できる。整数nで、続く二数の平方の差は(n＋1)²−n²＝2n＋1だから奇数だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "整数nとその次の整数n＋1を考える。平方の差(n＋1)²−n²を展開すると、n²＋2n＋1−n²＝2n＋1。これは整数の2倍に1を足した形だから奇数。n＝2の一例だけでなく、整数n全体について同じ式で説明できる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "整数の性質は、整数を文字で表し、展開や因数分解によって性質が読み取れる形へ変形して説明する。数値例は予想や確認に使い、一般の理由とは区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "整数nで(2n＋1)²−(2n−1)²＝8nとなるので、二つの連続する奇数の平方の差は8の倍数である。また連続する二整数の積n(n＋1)は、どちらか一方が偶数なので偶数となる。後者では展開するより積の形の方が因数の性質を読み取りやすい。目的に合う式の形を選ぶ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の計算表で整数nに対する(n＋1)²−n²を調べる。いくつかの奇数が見えても、それだけで全ての場合の証明とはしない。展開して2n＋1と表すと整数全体への理由になる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "正の整数nについて、一辺nとn＋1の正方形の面積の差は2n＋1。n>0の図では長方形二本と一つの小正方形で表せる。n＝0は式で別に確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "整数nで(n＋1)²−n²を整理すると？ 正答：2n＋1。 展開したn²どうしを引くと2n＋1が残る。 考える手がかり：括弧を展開してから同類項をまとめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "整数nについて2n＋1が奇数といえる理由は？ 正答：整数の2倍に1を足した形だから。 nの正負によらず2nは偶数で、1を足すと奇数。 考える手がかり：奇数の表し方へ戻る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "整数n＝4のとき、(n＋1)²−n²はいくつ？ 正答：9。 5²−4²＝25−16＝9。 考える手がかり：2n＋1でも確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "整数nで(2n＋1)²−(2n−1)²を整理すると？ 正答：8n。 二式を展開すると4n²と1が消え、4n−(−4n)が残る。 考える手がかり：引く式の中央の負号にも注意する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "整数nの8nから読み取れる性質は？ 正答：8の倍数である。 整数倍という意味で、0や負の値も8の倍数に含む。 考える手がかり：nの取り得る範囲を保つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "連続する二整数n,n＋1の積が偶数である理由は？ 正答：少なくとも一方が偶数だから。 連続する二整数では偶数と奇数が交互になる。 考える手がかり：積の因数の片方に2が含まれるか考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "整数nの性質を示すとき、n＝1,2,3の例だけで全てを証明できる？ 正答：できない。一般の整数について理由が必要。 調べた三例以外も主張に含まれる。 考える手がかり：主張する範囲と調べた範囲を比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "連続する整数の平方の差が奇数と説明する手順を並べよう。 正答：二数を整数nとn＋1で表す → 展開して2n＋1に整理する → 2n＋1が整数の2倍に1を足した形と述べる。 一般の数を表してから変形し、得た式の意味を読む。 考える手がかり：文字を置く、計算する、性質を説明するという依存を追う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：整数n＝−2でも、(n＋1)²−n²＝2n＋1は奇数になる？ 正答：なる。値は−3。 1−4＝−3。負の奇数も整数の2倍に1を足した形で表せる。 考える手がかり：整数には負の数も含む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "整数nについて(n＋1)²−n²が奇数といえる理由を説明しよう。 nが負でも同じ説明が使える？ 平方の差を展開すると2n＋1。nが整数なら正負によらず2nは偶数で、それに1を足した数は奇数。 確認項目：整数nという条件を明示した。 / 展開した2n＋1を奇数の形として説明した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "整数nについて、(2n＋1)²−(2n−1)²を説明しよう。 2n−1と2n＋1は差が2の連続する奇数である。 それぞれを展開し、(4n²＋4n＋1)−(4n²−4n＋1)とする。 引く式の全項の符号を変えて整理すると8nとなる。 nは整数なので8nは8の倍数。数値例だけでなく全ての整数nに理由を示した。 結論：平方の差は8nで、8の倍数。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「何個かの例で同じ結果が出れば、全ての場合の証明になる。」は誤り。有限個の例だけでは、調べていない値を含む一般の主張は示せない。整数nの式へ直し、その性質を理由付きで読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "整数nで(n+1)²−n²=2n+1は奇数、(2n+1)²−(2n−1)²=8nは8の倍数。連続整数の積n(n+1)は偶数。個数の図はn≥0、一般の整数は式札を用いる。 操作図の範囲：操作例n=−2,−1,0,1,2,3は整数。(n＋1)²−n²=2n＋1で、差は順に−3,−1,1,3,5,7の奇数。負の整数や0を正方形の辺・実物の個数として使わず式で確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233111100000",
    "grade": 9,
    "title": "平方根と根号の意味",
    "domain": "A",
    "order": 10,
    "goal": "平方根が二乗の逆を表すこと、正の数の二つの平方根と√の値を区別する。",
    "coverageCodes": [
      "8350233111100000",
      "8350233141000000",
      "8350233145000000"
    ],
    "explanations": {
      "es": {
        "short": "二乗するとaになる数をaの平方根という。正の数aには正と負の二つがあり、√aは正の方を表す。9の平方根は3と−3、√9は3だよ。",
        "detail": "3²も(−3)²も9なので、9の平方根は3と−3。面積2の正方形の辺の長さのように、整数や分数ではちょうど表せない値にも名前を付けたい。そこで正の平方根を根号√を使って√2と表す。0の平方根は0だけ。辺の長さを求めるときは正の方を選ぶ。"
      },
      "js": {
        "short": "a>0についてx²＝aを満たす二数±√aがaの平方根であり、根号√aはその正の値を表す。0の平方根は0で、√0＝0。",
        "detail": "平方根という二乗の逆を考えると、平方根の集合と根号の値を区別する必要がある。16の平方根は4と−4だが、√16＝4であって±4ではない。√2は近似的な数ではなく、二乗して2となる正の数そのものを表す。実数の二乗は0以上なので、負の数を二乗の結果とする実数はない。ここでは実数の範囲で扱う。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "面積から辺を決める",
        "text": "架空の正方形の面積が2cm²のとき、辺の長さは正の数√2 cm。−√2も二乗すると2だが、辺の長さには使わない。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "二乗の逆を調べる",
        "text": "数直線の3と−3をそれぞれ二乗する教材を考える。どちらも9へ対応するため、二乗の結果9から元の数を求めると候補は二つある。",
        "activityIds": [
          "prog-scratch"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "9の平方根は？",
        "options": [
          "3と−3",
          "3だけ",
          "9と−9"
        ],
        "answer": "3と−3",
        "explanation": "3²＝9、(−3)²＝9の二つ。",
        "hint": "二乗すると9になる数を全て考える。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "√9の値は？",
        "answer": 3,
        "explanation": "√9は9の正の平方根を表す。",
        "hint": "平方根全体ではなく根号の値を読む。",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "16の平方根と√16の組として正しいのは？",
        "options": [
          "両方とも±4",
          "平方根は±4、√16は4",
          "平方根は4、√16は±4"
        ],
        "answer": "平方根は±4、√16は4",
        "explanation": "根号は正の平方根一つを表す。",
        "hint": "二つの問いを分けて読む。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "√0の値は？",
        "answer": 0,
        "explanation": "二乗して0になる実数は0だけ。",
        "hint": "正負二つの異なる数になるか確かめる。",
        "suffix": "",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "面積2cm²の正方形の辺の長さは？",
        "options": [
          "−√2 cm",
          "2cm",
          "√2 cm"
        ],
        "answer": "√2 cm",
        "explanation": "辺は正で、その二乗が面積2になる。",
        "hint": "面積と長さの単位も比べる。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²＝25を満たす実数xは？",
        "options": [
          "25と−25",
          "5と−5",
          "5だけ"
        ],
        "answer": "5と−5",
        "explanation": "二乗して25となる二つの数を含める。",
        "hint": "負の数の二乗も考える。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "√2について正しいのは？",
        "options": [
          "二乗すると2になる正の数",
          "ちょうど1.4と同じ数",
          "二乗すると4になる数"
        ],
        "answer": "二乗すると2になる正の数",
        "explanation": "根号は近似値ではなく数そのものを表す。",
        "hint": "√の意味へ戻る。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "a≥0のとき√aの符号について正しいのは？",
        "options": [
          "必ず負である",
          "正と負を同時に表す",
          "0以上である"
        ],
        "answer": "0以上である",
        "explanation": "a>0なら正、a＝0なら0。",
        "hint": "0の場合も含めて考える。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：二乗すると4になる実数を全て選んだ組は？",
      "options": [
        "4と−4",
        "2と−2",
        "2だけ"
      ],
      "answer": "2と−2",
      "explanation": "2²＝4、(−2)²＝4。",
      "hint": "二乗する前の符号が結果にどう現れるか考える。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "平方根と根号を分けて読む",
      "prompt": "36の平方根と√36をそれぞれ求めよう。",
      "steps": [
        {
          "text": "二乗して36となる数を探す。6²＝36である。"
        },
        {
          "text": "(−6)²も36なので、平方根は6と−6の二つ。"
        },
        {
          "text": "√36は、そのうち正の数を指定する記号と読む。"
        },
        {
          "text": "したがって36の平方根は±6、√36＝6と区別する。"
        }
      ],
      "answer": "36の平方根は6と−6。√36＝6。",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "√9は±3である。",
      "correction": "9の平方根は±3だが、記号√9は正の方一つを表すので3。−3は−√9と書く。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "25の平方根と√25の違いを説明しよう。",
        "followUp": "面積25cm²の正方形では、どちらの平方根を辺に使う？",
        "checkpoints": [
          "平方根二つと根号一つを区別した。",
          "長さには正の値を選ぶ理由を述べた。"
        ],
        "sample": "25の平方根は5と−5で、√25は5。辺の長さは正なので5cmを使う。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "二乗するとaになる数をaの平方根という。正の数aには正と負の二つがあり、√aは正の方を表す。9の平方根は3と−3、√9は3だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "3²も(−3)²も9なので、9の平方根は3と−3。面積2の正方形の辺の長さのように、整数や分数ではちょうど表せない値にも名前を付けたい。そこで正の平方根を根号√を使って√2と表す。0の平方根は0だけ。辺の長さを求めるときは正の方を選ぶ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "a>0についてx²＝aを満たす二数±√aがaの平方根であり、根号√aはその正の値を表す。0の平方根は0で、√0＝0。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "平方根という二乗の逆を考えると、平方根の集合と根号の値を区別する必要がある。16の平方根は4と−4だが、√16＝4であって±4ではない。√2は近似的な数ではなく、二乗して2となる正の数そのものを表す。実数の二乗は0以上なので、負の数を二乗の結果とする実数はない。ここでは実数の範囲で扱う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の正方形の面積が2cm²のとき、辺の長さは正の数√2 cm。−√2も二乗すると2だが、辺の長さには使わない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "数直線の3と−3をそれぞれ二乗する教材を考える。どちらも9へ対応するため、二乗の結果9から元の数を求めると候補は二つある。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "9の平方根は？ 正答：3と−3。 3²＝9、(−3)²＝9の二つ。 考える手がかり：二乗すると9になる数を全て考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "√9の値は？ 正答：3。 √9は9の正の平方根を表す。 考える手がかり：平方根全体ではなく根号の値を読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "16の平方根と√16の組として正しいのは？ 正答：平方根は±4、√16は4。 根号は正の平方根一つを表す。 考える手がかり：二つの問いを分けて読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "√0の値は？ 正答：0。 二乗して0になる実数は0だけ。 考える手がかり：正負二つの異なる数になるか確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "面積2cm²の正方形の辺の長さは？ 正答：√2 cm。 辺は正で、その二乗が面積2になる。 考える手がかり：面積と長さの単位も比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "x²＝25を満たす実数xは？ 正答：5と−5。 二乗して25となる二つの数を含める。 考える手がかり：負の数の二乗も考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "√2について正しいのは？ 正答：二乗すると2になる正の数。 根号は近似値ではなく数そのものを表す。 考える手がかり：√の意味へ戻る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "a≥0のとき√aの符号について正しいのは？ 正答：0以上である。 a>0なら正、a＝0なら0。 考える手がかり：0の場合も含めて考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：二乗すると4になる実数を全て選んだ組は？ 正答：2と−2。 2²＝4、(−2)²＝4。 考える手がかり：二乗する前の符号が結果にどう現れるか考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "25の平方根と√25の違いを説明しよう。 面積25cm²の正方形では、どちらの平方根を辺に使う？ 25の平方根は5と−5で、√25は5。辺の長さは正なので5cmを使う。 確認項目：平方根二つと根号一つを区別した。 / 長さには正の値を選ぶ理由を述べた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "36の平方根と√36をそれぞれ求めよう。 二乗して36となる数を探す。6²＝36である。 (−6)²も36なので、平方根は6と−6の二つ。 √36は、そのうち正の数を指定する記号と読む。 したがって36の平方根は±6、√36＝6と区別する。 結論：36の平方根は6と−6。√36＝6。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「√9は±3である。」は誤り。9の平方根は±3だが、記号√9は正の方一つを表すので3。−3は−√9と書く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "a>0の実数の平方根は±√a、√aは正の方。√0=0。実数a≥0で√a≥0、(√a)²=a。面積a>0の正方形の辺は√a。 操作図の範囲：操作のもとの数a=0,2,4,9。a>0の平方根は−√aと√a、根号√aは非負の一つの数。0の平方根は0のみ。4の平方根は±2、9は±3、2は±√2。根号だけなら√4=2,√9=3。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233142000000",
    "grade": 9,
    "title": "有理数・無理数と数の広がり",
    "domain": "A",
    "order": 11,
    "goal": "整数の比で表せる数と表せない数を区別し、根号の有無だけで判断しない。",
    "coverageCodes": [
      "8350233111100000",
      "8350233142000000",
      "8350233143000000"
    ],
    "explanations": {
      "es": {
        "short": "整数pと0でない整数qを使ってp/qと表せる数を有理数、表せない実数を無理数という。√が付いていても、√4＝2は有理数だよ。",
        "detail": "整数−3は−3/1、有限小数0.25は1/4と書けるので有理数。0.333…のように同じ3が続く数も1/3で有理数。√2は整数の比では表せない無理数だけれど、√4は2だから有理数。記号の見た目ではなく、数そのものを分類しよう。"
      },
      "js": {
        "short": "有理数はp,qを整数、q≠0としてp/qで表せる数。無理数は有理数でない実数であり、有限小数や循環小数では表せない。",
        "detail": "整数、有限小数、循環小数は有理数である。√2や√3は無理数だが、全ての根号を含む数が無理数とは限らない。例えば√9＝3、(√2)²＝2は有理数になる。√2の近似値1.414は1414/1000という有理数で、元の√2と等しくない。数直線上では有理数も無理数も位置をもつ。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "表示と値を分けて仕分ける",
        "text": "教材の札0.25、1/4、√4を分類する。最初の二枚は同じ有理数、√4も値が2なので有理数。表記の違いと数の分類を分ける。",
        "activityIds": [
          "prog-python"
        ]
      },
      {
        "category": "drawing",
        "title": "数直線の位置を考える",
        "text": "√2とその近似値1.4を同じ数として重ねない。1.4²＝1.96<2なので、数直線上で1.4は√2より左にある。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "有理数p/qのp,qの条件は？",
        "options": [
          "p,qはどんな実数でもよい",
          "pだけ整数ならよい",
          "p,qは整数でq≠0"
        ],
        "answer": "p,qは整数でq≠0",
        "explanation": "整数の比で表せることと0で割らないことが条件。",
        "hint": "分母の0を除く。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "0.25が有理数である理由は？",
        "options": [
          "小数点があるから",
          "1/4と表せるから",
          "0より大きいから"
        ],
        "answer": "1/4と表せるから",
        "explanation": "整数1と4の比に表せる。",
        "hint": "整数の分子・分母へ直す。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "次のうち無理数は？",
        "options": [
          "√2",
          "√9",
          "−3"
        ],
        "answer": "√2",
        "explanation": "√9＝3と−3は整数で有理数。√2は整数の比で表せない。",
        "hint": "根号の中が平方数かも確認する。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "0.333…で3が限りなく繰り返される数は？",
        "options": [
          "無理数。無限に続くから",
          "整数。小数を無視できる",
          "有理数。1/3と等しい"
        ],
        "answer": "有理数。1/3と等しい",
        "explanation": "循環する小数は有理数である。",
        "hint": "有限か無限かだけで区別しない。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "√4を有理数と無理数のどちらに分ける？",
        "options": [
          "両方に入る",
          "有理数。2と等しい",
          "無理数。√がある"
        ],
        "answer": "有理数。2と等しい",
        "explanation": "数の値が2＝2/1なので有理数。",
        "hint": "記号の見た目だけで決めない。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "0.125＝1/□となる正の整数□は？",
        "answer": 8,
        "explanation": "1÷8＝0.125。有限小数を分数に表せる。",
        "hint": "125/1000を約分する。",
        "suffix": "",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "√2の近似値1.414について正しいのは？",
        "options": [
          "1.414は無理数",
          "√2と完全に等しい",
          "1.414は有理数で、√2そのものとは違う"
        ],
        "answer": "1.414は有理数で、√2そのものとは違う",
        "explanation": "有限小数1414/1000であり、√2の厳密値ではない。",
        "hint": "近似の印と等号の違いを見る。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "(√2)²の数の分類は？",
        "options": [
          "実数ではない",
          "有理数。2になる",
          "無理数。√2を含むから"
        ],
        "answer": "有理数。2になる",
        "explanation": "平方根の定義により(√2)²＝2。",
        "hint": "計算後の値を見て判断する。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "分類予想：−5は有理数？",
      "options": [
        "有理数。−5/1と表せる",
        "無理数。負だから",
        "どちらでもない"
      ],
      "answer": "有理数。−5/1と表せる",
      "explanation": "負の整数も整数の比に表せる。",
      "hint": "分母1を使って表す。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "表記ではなく値で分類する",
      "prompt": "0.5、√16、√3を有理数か無理数かに分けよう。",
      "steps": [
        {
          "text": "有理数は整数p,q、q≠0を用いてp/qと書ける数と確認する。"
        },
        {
          "text": "0.5＝1/2なので有理数。"
        },
        {
          "text": "√16＝4＝4/1なので有理数。"
        },
        {
          "text": "√3は整数の比で表せない無理数。根号があるかどうかだけでは区別できない。"
        }
      ],
      "answer": "0.5と√16は有理数、√3は無理数。",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "小数が無限に続く数は全て無理数である。",
      "correction": "同じ並びが繰り返される循環小数は有理数。例えば0.333…＝1/3である。無理数は有限小数にも循環小数にもならない。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "√4が有理数で、√2が無理数であるという分類を説明しよう。",
        "followUp": "√2の近似値1.4はどちらに入る？",
        "checkpoints": [
          "整数の比で表せるかという定義を用いた。",
          "元の数と近似値を区別した。"
        ],
        "sample": "√4は2＝2/1。√2は整数の比では表せない。近似値1.4は14/10という有理数で、元の√2とは異なる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "整数pと0でない整数qを使ってp/qと表せる数を有理数、表せない実数を無理数という。√が付いていても、√4＝2は有理数だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "整数−3は−3/1、有限小数0.25は1/4と書けるので有理数。0.333…のように同じ3が続く数も1/3で有理数。√2は整数の比では表せない無理数だけれど、√4は2だから有理数。記号の見た目ではなく、数そのものを分類しよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "有理数はp,qを整数、q≠0としてp/qで表せる数。無理数は有理数でない実数であり、有限小数や循環小数では表せない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "整数、有限小数、循環小数は有理数である。√2や√3は無理数だが、全ての根号を含む数が無理数とは限らない。例えば√9＝3、(√2)²＝2は有理数になる。√2の近似値1.414は1414/1000という有理数で、元の√2と等しくない。数直線上では有理数も無理数も位置をもつ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材の札0.25、1/4、√4を分類する。最初の二枚は同じ有理数、√4も値が2なので有理数。表記の違いと数の分類を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "√2とその近似値1.4を同じ数として重ねない。1.4²＝1.96<2なので、数直線上で1.4は√2より左にある。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "有理数p/qのp,qの条件は？ 正答：p,qは整数でq≠0。 整数の比で表せることと0で割らないことが条件。 考える手がかり：分母の0を除く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "0.25が有理数である理由は？ 正答：1/4と表せるから。 整数1と4の比に表せる。 考える手がかり：整数の分子・分母へ直す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "次のうち無理数は？ 正答：√2。 √9＝3と−3は整数で有理数。√2は整数の比で表せない。 考える手がかり：根号の中が平方数かも確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "0.333…で3が限りなく繰り返される数は？ 正答：有理数。1/3と等しい。 循環する小数は有理数である。 考える手がかり：有限か無限かだけで区別しない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "√4を有理数と無理数のどちらに分ける？ 正答：有理数。2と等しい。 数の値が2＝2/1なので有理数。 考える手がかり：記号の見た目だけで決めない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "0.125＝1/□となる正の整数□は？ 正答：8。 1÷8＝0.125。有限小数を分数に表せる。 考える手がかり：125/1000を約分する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "√2の近似値1.414について正しいのは？ 正答：1.414は有理数で、√2そのものとは違う。 有限小数1414/1000であり、√2の厳密値ではない。 考える手がかり：近似の印と等号の違いを見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "(√2)²の数の分類は？ 正答：有理数。2になる。 平方根の定義により(√2)²＝2。 考える手がかり：計算後の値を見て判断する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "分類予想：−5は有理数？ 正答：有理数。−5/1と表せる。 負の整数も整数の比に表せる。 考える手がかり：分母1を使って表す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "√4が有理数で、√2が無理数であるという分類を説明しよう。 √2の近似値1.4はどちらに入る？ √4は2＝2/1。√2は整数の比では表せない。近似値1.4は14/10という有理数で、元の√2とは異なる。 確認項目：整数の比で表せるかという定義を用いた。 / 元の数と近似値を区別した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "0.5、√16、√3を有理数か無理数かに分けよう。 有理数は整数p,q、q≠0を用いてp/qと書ける数と確認する。 0.5＝1/2なので有理数。 √16＝4＝4/1なので有理数。 √3は整数の比で表せない無理数。根号があるかどうかだけでは区別できない。 結論：0.5と√16は有理数、√3は無理数。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「小数が無限に続く数は全て無理数である。」は誤り。同じ並びが繰り返される循環小数は有理数。例えば0.333…＝1/3である。無理数は有限小数にも循環小数にもならない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "有理数は整数p,q(q≠0)の比p/qで表せる実数。有限小数と循環小数は有理数。√2,√3は無理数、√4=2,√9=3は有理数。有限の近似小数を無理数そのものとしない。 操作図の範囲：操作で比べる0,−3,1/3,√4=2は有理数、√2とπは無理数。有理数は整数p,q（q≠0）を使いp/qで表せる。無理数の有限小数表示は近似値であり元の数と等しくない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233111200000",
    "grade": 9,
    "title": "根号を含む乗法・除法",
    "domain": "A",
    "order": 12,
    "goal": "根号の積・商を計算し、平方因子を外へ出して簡単にする。",
    "coverageCodes": [
      "8350233111200000",
      "8350233112100000"
    ],
    "explanations": {
      "es": {
        "short": "0以上のa,bでは√a×√b＝√(ab)。割り算はb>0として√a÷√b＝√(a/b)。根号の中に平方数の因数があれば外へ出せるよ。",
        "detail": "√12は√(4×3)＝2√3と書ける。√3×√12なら√36＝6でも、√3×2√3＝2×3＝6でも求められる。足し算には同じ規則を使わない。√(x²)では、根号の値が0以上なので、xが負なら−xが答えになる。"
      },
      "js": {
        "short": "a,b≥0で√a√b＝√(ab)、a≥0,b>0で√a/√b＝√(a/b)。平方因子を用いて根号を簡単にし、√(x²)＝|x|を保つ。",
        "detail": "√18＝√(9×2)＝3√2、√50＝5√2である。根号の外へ出すのは平方因子の正の平方根で、18そのものを9で割って終わるのではない。実数xについて√(x²)はxの絶対値。x＝−4なら√16＝4となり、−4ではない。分母の根号の中が0なら割れない。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "面積から正の辺を読む",
        "text": "架空の正方形で面積12cm²の辺は√12＝2√3 cm。面積を4倍にした正方形では辺が2倍になることとも対応する。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "平方因子を探す",
        "text": "教材の数72を36×2と分ける。√72＝√36×√2＝6√2となる。因数36を外へ出すときは6にする。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "√3×√12の値は？",
        "options": [
          "36",
          "6",
          "√15"
        ],
        "answer": "6",
        "explanation": "√(3×12)＝√36＝6。",
        "hint": "根号の中をかけ、その正の平方根を取る。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "√18を簡単にすると？",
        "options": [
          "3√2",
          "9√2",
          "2√3"
        ],
        "answer": "3√2",
        "explanation": "18＝9×2で√9＝3。",
        "hint": "根号の外へ出すのは9ではなくその平方根。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "√72＝□√2となる正の整数□は？",
        "answer": 6,
        "explanation": "72＝36×2、√36＝6。",
        "hint": "平方因子36を使う。",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "√20÷√5の値は？",
        "options": [
          "√15",
          "2",
          "4"
        ],
        "answer": "2",
        "explanation": "分母√5>0なので√(20/5)＝√4＝2。",
        "hint": "商の規則の条件も確認する。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "√18×√2の値は？",
        "answer": 6,
        "explanation": "3√2×√2＝3×2＝6。",
        "hint": "同じ根号二つの積は中の数になる。",
        "suffix": "",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "x＝−4のとき、√(x²)の値は？",
        "options": [
          "−4",
          "±4",
          "4"
        ],
        "answer": "4",
        "explanation": "√16は正の平方根4。",
        "hint": "根号の値は0以上。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "√a÷√bの商の規則に必要な条件は？",
        "options": [
          "b＝0でもよい",
          "a≥0、b>0",
          "a,bとも負でもよい"
        ],
        "answer": "a≥0、b>0",
        "explanation": "実数の根号と、0で割らない条件を合わせる。",
        "hint": "分母になる方には厳しい条件が必要。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "√2＋√8＝√10という計算は？",
        "options": [
          "誤り。乗法の規則を加法へ使っている",
          "正しい",
          "誤り。答えは10"
        ],
        "answer": "誤り。乗法の規則を加法へ使っている",
        "explanation": "根号の中を直接足す法則はない。√8＝2√2なので和は3√2。",
        "hint": "演算がかけ算か足し算かを見る。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：√50をa√2の形にするとaは？",
      "options": [
        "25",
        "10",
        "5"
      ],
      "answer": "5",
      "explanation": "50＝25×2で√25＝5。",
      "hint": "25をそのまま外へ出さない。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "根号を簡単にしてかける",
      "prompt": "√8×√18を計算しよう。",
      "steps": [
        {
          "text": "8＝4×2なので√8＝2√2。"
        },
        {
          "text": "18＝9×2なので√18＝3√2。"
        },
        {
          "text": "係数をかけて6、根号どうしは√2×√2＝2。"
        },
        {
          "text": "6×2＝12。まとめて√144と計算しても12になる。"
        }
      ],
      "answer": "12",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "√(x²)は、どの実数xでもxである。",
      "correction": "根号の値は0以上なので√(x²)＝|x|。x≥0ならx、x<0なら−xとなる。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "√12＝2√3となる理由を説明しよう。",
        "followUp": "√(x²)でxが負のとき、なぜそのままxとできない？",
        "checkpoints": [
          "平方因子4の正の平方根2を使った。",
          "根号の値の非負性を確認した。"
        ],
        "sample": "12＝4×3なので√12＝√4√3＝2√3。√(x²)は0以上だから、負のxそのものではなく絶対値になる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "0以上のa,bでは√a×√b＝√(ab)。割り算はb>0として√a÷√b＝√(a/b)。根号の中に平方数の因数があれば外へ出せるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "√12は√(4×3)＝2√3と書ける。√3×√12なら√36＝6でも、√3×2√3＝2×3＝6でも求められる。足し算には同じ規則を使わない。√(x²)では、根号の値が0以上なので、xが負なら−xが答えになる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "a,b≥0で√a√b＝√(ab)、a≥0,b>0で√a/√b＝√(a/b)。平方因子を用いて根号を簡単にし、√(x²)＝|x|を保つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "√18＝√(9×2)＝3√2、√50＝5√2である。根号の外へ出すのは平方因子の正の平方根で、18そのものを9で割って終わるのではない。実数xについて√(x²)はxの絶対値。x＝−4なら√16＝4となり、−4ではない。分母の根号の中が0なら割れない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の正方形で面積12cm²の辺は√12＝2√3 cm。面積を4倍にした正方形では辺が2倍になることとも対応する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材の数72を36×2と分ける。√72＝√36×√2＝6√2となる。因数36を外へ出すときは6にする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "√3×√12の値は？ 正答：6。 √(3×12)＝√36＝6。 考える手がかり：根号の中をかけ、その正の平方根を取る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "√18を簡単にすると？ 正答：3√2。 18＝9×2で√9＝3。 考える手がかり：根号の外へ出すのは9ではなくその平方根。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "√72＝□√2となる正の整数□は？ 正答：6。 72＝36×2、√36＝6。 考える手がかり：平方因子36を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "√20÷√5の値は？ 正答：2。 分母√5>0なので√(20/5)＝√4＝2。 考える手がかり：商の規則の条件も確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "√18×√2の値は？ 正答：6。 3√2×√2＝3×2＝6。 考える手がかり：同じ根号二つの積は中の数になる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "x＝−4のとき、√(x²)の値は？ 正答：4。 √16は正の平方根4。 考える手がかり：根号の値は0以上。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "√a÷√bの商の規則に必要な条件は？ 正答：a≥0、b>0。 実数の根号と、0で割らない条件を合わせる。 考える手がかり：分母になる方には厳しい条件が必要。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "√2＋√8＝√10という計算は？ 正答：誤り。乗法の規則を加法へ使っている。 根号の中を直接足す法則はない。√8＝2√2なので和は3√2。 考える手がかり：演算がかけ算か足し算かを見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：√50をa√2の形にするとaは？ 正答：5。 50＝25×2で√25＝5。 考える手がかり：25をそのまま外へ出さない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "√12＝2√3となる理由を説明しよう。 √(x²)でxが負のとき、なぜそのままxとできない？ 12＝4×3なので√12＝√4√3＝2√3。√(x²)は0以上だから、負のxそのものではなく絶対値になる。 確認項目：平方因子4の正の平方根2を使った。 / 根号の値の非負性を確認した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "√8×√18を計算しよう。 8＝4×2なので√8＝2√2。 18＝9×2なので√18＝3√2。 係数をかけて6、根号どうしは√2×√2＝2。 6×2＝12。まとめて√144と計算しても12になる。 結論：12",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「√(x²)は、どの実数xでもxである。」は誤り。根号の値は0以上なので√(x²)＝|x|。x≥0ならx、x<0なら−xとなる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "a,b≥0で√a√b=√(ab)。a≥0,b>0で√a/√b=√(a/b)。√12=2√3、√18=3√2、√50=5√2、√72=6√2。実数xで√(x²)=|x|。 操作図の範囲：操作例√12=2√3、√3×√12=6、√12÷√3=2、√(3²)=3、√((−3)²)=3、√0=0。積の根号規則は非負、商は分母の中が正。√(x²)=|x|で負のxそのものにはしない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233111000000",
    "grade": 9,
    "title": "分母の有理化",
    "domain": "A",
    "order": 13,
    "goal": "0でない同じ数を分子と分母へかけ、値を変えずに分母の根号をなくす。",
    "coverageCodes": [
      "8350233111000000",
      "8350233111200000",
      "8350233112100000"
    ],
    "explanations": {
      "es": {
        "short": "分母の根号をなくすことを分母の有理化という。0でない同じ数を分子と分母へかければ、分数の値は変わらないよ。",
        "detail": "1/√2の分子と分母に√2をかけると、√2/(√2×√2)＝√2/2。かけた√2/√2は1なので、値は元のまま。分母だけにかけると値が変わってしまう。ここでは正の根号が分母にある簡単な分数を考える。"
      },
      "js": {
        "short": "分母の有理化は、分子と分母へ同じ0でない数をかけて、分母を有理数にする変形である。a>0なら1/√a＝√a/a。",
        "detail": "3/√3は分子分母に√3をかけて3√3/3＝√3。2/√8ではまず√8＝2√2とし、1/√2＝√2/2へ直せる。どの段階でも分母が0でないことを保つ。有理化は近似小数へ丸める操作ではなく、同じ値の別の表し方である。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "同じ値を保つ変形",
        "text": "教材で1/√2へ√2/√2という1をかける。分母は2、分子は√2になり、値を保って√2/2へ変わる。",
        "activityIds": [
          "prog-scratch"
        ]
      },
      {
        "category": "drawing",
        "title": "比の表し方を変える",
        "text": "架空の図の二辺の比1:√2を両方√2倍すると√2:2。比の値1/√2と√2/2は等しく、図形の長さの比を別の形で表せる。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "1/√2の分母を有理化すると？",
        "options": [
          "√2/2",
          "1/2",
          "√2"
        ],
        "answer": "√2/2",
        "explanation": "分子にも√2をかけるので√2/2。",
        "hint": "分母だけを変えていないか見る。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "3/√3を有理化して簡単にすると？",
        "options": [
          "3√3",
          "√3/3",
          "√3"
        ],
        "answer": "√3",
        "explanation": "3√3/3を約分すると√3。",
        "hint": "分子の3と分母の3を両方確認する。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "1/√5を有理化すると？",
        "options": [
          "5√5",
          "√5/5",
          "1/5"
        ],
        "answer": "√5/5",
        "explanation": "分母√5×√5＝5、分子は√5。",
        "hint": "同じ数を上下へかける。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "有理化で分子と分母に同じ√2をかける理由は？",
        "options": [
          "√2/√2＝1なので値が変わらないから",
          "分母だけを2倍したいから",
          "近似値へ丸めるため"
        ],
        "answer": "√2/√2＝1なので値が変わらないから",
        "explanation": "0でない同じ数の商は1。",
        "hint": "分数全体へ何をかけたか考える。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "2/√8を簡単にすると？",
        "options": [
          "√2",
          "2√2",
          "√2/2"
        ],
        "answer": "√2/2",
        "explanation": "√8＝2√2なので1/√2に等しく、√2/2となる。",
        "hint": "根号を簡単にして先に約分できる。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "5/√5＝√5。両辺を√5倍したときの値は？",
        "answer": 5,
        "explanation": "左は5、右は√5×√5＝5となり同じ値。",
        "hint": "0でない数を両辺へかけて確認する。",
        "suffix": "",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "1/√aを実数の範囲で有理化するときの条件は？",
        "options": [
          "a>0",
          "a≥0なら0でもよい",
          "aは負でもよい"
        ],
        "answer": "a>0",
        "explanation": "根号が実数で、分母が0でない必要がある。",
        "hint": "分母√aの条件をまとめる。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "有理化について正しいのは？",
        "options": [
          "必ず近似値になる",
          "分母だけに数をかけてよい",
          "値は同じで表し方が変わる"
        ],
        "answer": "値は同じで表し方が変わる",
        "explanation": "分子分母に同じ0でない数をかける等しい式への変形。",
        "hint": "等号で結べる操作か確かめる。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：1/√3と√3/3は？",
      "options": [
        "後者が必ず大きい",
        "等しい",
        "前者が必ず大きい"
      ],
      "answer": "等しい",
      "explanation": "分子分母へ√3をかけると同じ形になる。",
      "hint": "二つを近似せず変形で比べる。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "分子と分母に同じ数をかける",
      "prompt": "2/√3を有理化しよう。",
      "steps": [
        {
          "text": "分母√3は正で0ではないと確認する。"
        },
        {
          "text": "分子と分母へ同じ√3をかけ、(2√3)/(√3×√3)とする。"
        },
        {
          "text": "分母の積を3とし、2√3/3を得る。"
        },
        {
          "text": "かけた分数√3/√3は1なので、元と同じ値である。"
        }
      ],
      "answer": "2√3/3",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "1/√2の分母だけに√2をかけて1/2にしてよい。",
      "correction": "分母だけを変えると値が変わる。分子にも√2をかけるので、正しくは√2/2。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "1/√2＝√2/2という変形で値が変わらない理由を説明しよう。",
        "followUp": "分母の根号が0だったら同じ操作ができる？",
        "checkpoints": [
          "分子と分母へ同じ0でない数をかけた。",
          "元の分母が0でないことを確かめた。"
        ],
        "sample": "√2/√2＝1をかけただけだから値は変わらない。もとの分母が0なら割り算自体ができず、有理化で直すこともできない。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "分母の根号をなくすことを分母の有理化という。0でない同じ数を分子と分母へかければ、分数の値は変わらないよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "1/√2の分子と分母に√2をかけると、√2/(√2×√2)＝√2/2。かけた√2/√2は1なので、値は元のまま。分母だけにかけると値が変わってしまう。ここでは正の根号が分母にある簡単な分数を考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "分母の有理化は、分子と分母へ同じ0でない数をかけて、分母を有理数にする変形である。a>0なら1/√a＝√a/a。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "3/√3は分子分母に√3をかけて3√3/3＝√3。2/√8ではまず√8＝2√2とし、1/√2＝√2/2へ直せる。どの段階でも分母が0でないことを保つ。有理化は近似小数へ丸める操作ではなく、同じ値の別の表し方である。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材で1/√2へ√2/√2という1をかける。分母は2、分子は√2になり、値を保って√2/2へ変わる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の図の二辺の比1:√2を両方√2倍すると√2:2。比の値1/√2と√2/2は等しく、図形の長さの比を別の形で表せる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "1/√2の分母を有理化すると？ 正答：√2/2。 分子にも√2をかけるので√2/2。 考える手がかり：分母だけを変えていないか見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "3/√3を有理化して簡単にすると？ 正答：√3。 3√3/3を約分すると√3。 考える手がかり：分子の3と分母の3を両方確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "1/√5を有理化すると？ 正答：√5/5。 分母√5×√5＝5、分子は√5。 考える手がかり：同じ数を上下へかける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "有理化で分子と分母に同じ√2をかける理由は？ 正答：√2/√2＝1なので値が変わらないから。 0でない同じ数の商は1。 考える手がかり：分数全体へ何をかけたか考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "2/√8を簡単にすると？ 正答：√2/2。 √8＝2√2なので1/√2に等しく、√2/2となる。 考える手がかり：根号を簡単にして先に約分できる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "5/√5＝√5。両辺を√5倍したときの値は？ 正答：5。 左は5、右は√5×√5＝5となり同じ値。 考える手がかり：0でない数を両辺へかけて確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "1/√aを実数の範囲で有理化するときの条件は？ 正答：a>0。 根号が実数で、分母が0でない必要がある。 考える手がかり：分母√aの条件をまとめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "有理化について正しいのは？ 正答：値は同じで表し方が変わる。 分子分母に同じ0でない数をかける等しい式への変形。 考える手がかり：等号で結べる操作か確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：1/√3と√3/3は？ 正答：等しい。 分子分母へ√3をかけると同じ形になる。 考える手がかり：二つを近似せず変形で比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "1/√2＝√2/2という変形で値が変わらない理由を説明しよう。 分母の根号が0だったら同じ操作ができる？ √2/√2＝1をかけただけだから値は変わらない。もとの分母が0なら割り算自体ができず、有理化で直すこともできない。 確認項目：分子と分母へ同じ0でない数をかけた。 / 元の分母が0でないことを確かめた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "2/√3を有理化しよう。 分母√3は正で0ではないと確認する。 分子と分母へ同じ√3をかけ、(2√3)/(√3×√3)とする。 分母の積を3とし、2√3/3を得る。 かけた分数√3/√3は1なので、元と同じ値である。 結論：2√3/3",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「1/√2の分母だけに√2をかけて1/2にしてよい。」は誤り。分母だけを変えると値が変わる。分子にも√2をかけるので、正しくは√2/2。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "a>0で1/√a=√a/a。0でない同数を分子分母へかけて値を保つ。1/√2=√2/2、3/√3=√3、2/√8=√2/2。有理化は近似化ではない。 操作図の範囲：操作例n=2,3,5で1/√n=√n/n。分子と分母へ同じ0でない√nをかけ、√n/√n=1をかけるので値を保つ。分母(√n)²=n。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233112100000",
    "grade": 9,
    "title": "根号を含む加減と式の計算",
    "domain": "A",
    "order": 14,
    "goal": "根号を簡単にして同じ根号の項をまとめ、展開の公式も用いる。",
    "coverageCodes": [
      "8350233111200000",
      "8350233112100000",
      "8350233121210000",
      "8350233121230000"
    ],
    "explanations": {
      "es": {
        "short": "根号を簡単にして、同じ根号の何個分かを足し引きしよう。√8＋√18＝2√2＋3√2＝5√2。違う根号の項は、同類項のようにはまとめない。",
        "detail": "3√2＋2√2では、共通する√2を残して(3＋2)√2＝5√2。√8＋√18も先に2√2と3√2へ直すと同じ形になる。括弧を含む計算では分配法則や平方の公式も使える。(√3＋1)²＝3＋2√3＋1＝4＋2√3。"
      },
      "js": {
        "short": "根号を含む加減は、平方因子を外へ出して同じ根号の項をまとめる。分配法則と展開公式は実数の根号を含む式にも適用できる。",
        "detail": "2√12−√27＝4√3−3√3＝√3。√2＋√3を√5へまとめるように、加法を根号の中へ移すことはできない。一方、(√5＋2)(√5−2)では和と差の積を用い、5−4＝1となる。答えが根号を含むとは限らず、式全体を見て方法を選ぶ。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "同じ根号の札をまとめる",
        "text": "教材の式√8＋√18を2√2と3√2へ直し、√2の札が合計5個分と読む。平方因子を見付ける操作と、係数を足す操作を分ける。",
        "activityIds": [
          "prog-scratch"
        ]
      },
      {
        "category": "drawing",
        "title": "正方形の分割と式",
        "text": "架空の正方形の辺が√3＋1 cmなら、面積は(√3＋1)²＝4＋2√3 cm²。辺√3と1で分けた二枚の長方形が中央の2√3を作る。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "3√2＋2√2は？",
        "options": [
          "5√4",
          "√10",
          "5√2"
        ],
        "answer": "5√2",
        "explanation": "同じ√2の係数だけを足す。",
        "hint": "文字の同類項と同じように考える。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "√8＋√18は？",
        "options": [
          "6√2",
          "5√2",
          "√26"
        ],
        "answer": "5√2",
        "explanation": "2√2＋3√2＝5√2。",
        "hint": "先に根号の中の平方因子を探す。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "2√12−√27＝□√3。□は？",
        "answer": 1,
        "explanation": "2×2√3−3√3＝(4−3)√3。",
        "hint": "√12と√27を先に簡単にする。",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "(√3＋1)²の計算結果は？",
        "options": [
          "4",
          "3＋2√3",
          "4＋2√3"
        ],
        "answer": "4＋2√3",
        "explanation": "3＋2√3＋1＝4＋2√3。",
        "hint": "中央の二倍の積も含める。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "(√5＋2)(√5−2)の値は？",
        "answer": 1,
        "explanation": "平方の差5−4＝1。",
        "hint": "和と差の積の公式を使う。",
        "suffix": "",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "√2＋√3を√5にしてよい？",
        "options": [
          "できない。加法にはその規則がない",
          "できる。根号内を足す",
          "できる。どちらも正だから"
        ],
        "answer": "できない。加法にはその規則がない",
        "explanation": "根号の積の規則を和へ適用できない。例えば√1＋√4＝3だが√5とは異なる。",
        "hint": "同じ主張への小さい反例も考える。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "√3(√3＋2)の計算結果は？",
        "options": [
          "√9＋2",
          "5√3",
          "3＋2√3"
        ],
        "answer": "3＋2√3",
        "explanation": "各項へ分配して√3√3＋2√3。",
        "hint": "括弧の両方へかける。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "√50−√8は？",
        "options": [
          "7√2",
          "3√2",
          "√42"
        ],
        "answer": "3√2",
        "explanation": "5√2−2√2＝3√2。",
        "hint": "引く前に同じ根号の形へ直す。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：√12＋√27でまとめる根号は？",
      "options": [
        "√3",
        "√39",
        "√9"
      ],
      "answer": "√3",
      "explanation": "2√3＋3√3＝5√3。",
      "hint": "共通の平方因子以外に何が残るか見る。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "根号をそろえて整理する",
      "prompt": "√12＋√27−√3を計算しよう。",
      "steps": [
        {
          "text": "12＝4×3なので√12＝2√3。"
        },
        {
          "text": "27＝9×3なので√27＝3√3。"
        },
        {
          "text": "全体を2√3＋3√3−1√3と書く。"
        },
        {
          "text": "係数2＋3−1＝4を計算して4√3。根号の中は足さない。"
        }
      ],
      "answer": "4√3",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "√a＋√bは、いつでも√(a＋b)になる。",
      "correction": "一般には成り立たない。a＝1,b＝4なら左は3、右は√5。同じ根号の係数はまとめられるが、根号内を直接足す規則ではない。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "√8＋√18を5√2へまとめる理由を説明しよう。",
        "followUp": "(√3＋1)²では、どの項を忘れやすい？",
        "checkpoints": [
          "根号を簡単にして同じ形へそろえた。",
          "展開では中央の二倍の積を含めた。"
        ],
        "sample": "√8＝2√2、√18＝3√2なので係数を足して5√2。平方の展開では2×√3×1の項も必要。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "根号を簡単にして、同じ根号の何個分かを足し引きしよう。√8＋√18＝2√2＋3√2＝5√2。違う根号の項は、同類項のようにはまとめない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "3√2＋2√2では、共通する√2を残して(3＋2)√2＝5√2。√8＋√18も先に2√2と3√2へ直すと同じ形になる。括弧を含む計算では分配法則や平方の公式も使える。(√3＋1)²＝3＋2√3＋1＝4＋2√3。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "根号を含む加減は、平方因子を外へ出して同じ根号の項をまとめる。分配法則と展開公式は実数の根号を含む式にも適用できる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "2√12−√27＝4√3−3√3＝√3。√2＋√3を√5へまとめるように、加法を根号の中へ移すことはできない。一方、(√5＋2)(√5−2)では和と差の積を用い、5−4＝1となる。答えが根号を含むとは限らず、式全体を見て方法を選ぶ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材の式√8＋√18を2√2と3√2へ直し、√2の札が合計5個分と読む。平方因子を見付ける操作と、係数を足す操作を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の正方形の辺が√3＋1 cmなら、面積は(√3＋1)²＝4＋2√3 cm²。辺√3と1で分けた二枚の長方形が中央の2√3を作る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "3√2＋2√2は？ 正答：5√2。 同じ√2の係数だけを足す。 考える手がかり：文字の同類項と同じように考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "√8＋√18は？ 正答：5√2。 2√2＋3√2＝5√2。 考える手がかり：先に根号の中の平方因子を探す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "2√12−√27＝□√3。□は？ 正答：1。 2×2√3−3√3＝(4−3)√3。 考える手がかり：√12と√27を先に簡単にする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "(√3＋1)²の計算結果は？ 正答：4＋2√3。 3＋2√3＋1＝4＋2√3。 考える手がかり：中央の二倍の積も含める。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "(√5＋2)(√5−2)の値は？ 正答：1。 平方の差5−4＝1。 考える手がかり：和と差の積の公式を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "√2＋√3を√5にしてよい？ 正答：できない。加法にはその規則がない。 根号の積の規則を和へ適用できない。例えば√1＋√4＝3だが√5とは異なる。 考える手がかり：同じ主張への小さい反例も考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "√3(√3＋2)の計算結果は？ 正答：3＋2√3。 各項へ分配して√3√3＋2√3。 考える手がかり：括弧の両方へかける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "√50−√8は？ 正答：3√2。 5√2−2√2＝3√2。 考える手がかり：引く前に同じ根号の形へ直す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：√12＋√27でまとめる根号は？ 正答：√3。 2√3＋3√3＝5√3。 考える手がかり：共通の平方因子以外に何が残るか見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "√8＋√18を5√2へまとめる理由を説明しよう。 (√3＋1)²では、どの項を忘れやすい？ √8＝2√2、√18＝3√2なので係数を足して5√2。平方の展開では2×√3×1の項も必要。 確認項目：根号を簡単にして同じ形へそろえた。 / 展開では中央の二倍の積を含めた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "√12＋√27−√3を計算しよう。 12＝4×3なので√12＝2√3。 27＝9×3なので√27＝3√3。 全体を2√3＋3√3−1√3と書く。 係数2＋3−1＝4を計算して4√3。根号の中は足さない。 結論：4√3",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「√a＋√bは、いつでも√(a＋b)になる。」は誤り。一般には成り立たない。a＝1,b＝4なら左は3、右は√5。同じ根号の係数はまとめられるが、根号内を直接足す規則ではない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "同じ根号の項は係数を加減する。√8+√18=5√2、2√12−√27=√3、(√3+1)²=4+2√3、(√5+2)(√5−2)=1。根号の中へ一般の和を移さない。 操作図の範囲：操作例√8＋√18=2√2＋3√2=5√2、√18−√8=√2、(√3＋1)²=4＋2√3、(√5＋2)(√5−2)=1。和を一つの根号の中へまとめる規則はない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233112200000",
    "grade": 9,
    "title": "平方根の近似と活用",
    "domain": "A",
    "order": 15,
    "goal": "二乗の大小から平方根を挟み、正方形の辺などを根号と近似値で表す。",
    "coverageCodes": [
      "8350232100000000",
      "8350232200000000",
      "8350232300000000",
      "8350233111100000",
      "8350233111300000",
      "8350233112200000",
      "8350233511000000"
    ],
    "explanations": {
      "es": {
        "short": "正の数を二乗して比べると、平方根がどの間にあるか分かる。1.4²<2<1.5²だから1.4<√2<1.5。幅を狭くすると、近似値を細かくできるよ。",
        "detail": "1.4²＝1.96、1.5²＝2.25なので、√2は1.4と1.5の間。次に1.41²＝1.9881、1.42²＝2.0164を比べると1.41<√2<1.42と分かる。√2そのものの位置は変わらず、分かる範囲だけを狭くしている。面積2cm²の正方形の辺を約1.41cmと表すときも、厳密な長さ√2 cmとは区別する。"
      },
      "js": {
        "short": "非負の範囲では二乗の大小関係が元の数の大小関係と対応する。平方根を二つの小数で挟み、より狭い区間を求めて近似の精度を上げる。",
        "detail": "a,b≥0でa<bならa²<b²。これを用いて平方根の位置を比較する。1.41²<2<1.42²から1.41<√2<1.42であり、√2＝1.41とはいえない。√5は2²<5<3²より2と3の間にある。長さや面積の場面では、求める量と単位を確認し、必要な桁を指定して近似値を使う。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "変わるのは見える区間",
        "text": "教材の固定数直線で√2の位置を、1.4〜1.5、次に1.41〜1.42へ絞る。拡大表示しても数直線の値と√2の値を変えず、端点の数字を添える。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "craft",
        "title": "一辺を近似して記す",
        "text": "架空の正方形の面積を5cm²とする。辺は√5 cmで、√5＝2.236067…を使って小数第二位まで四捨五入すると約2.24cmと記せる。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "1.4²＝1.96、1.5²＝2.25から分かるのは？",
        "options": [
          "1.4<2<1.5",
          "1.4<√2<1.5",
          "√2＝1.4"
        ],
        "answer": "1.4<√2<1.5",
        "explanation": "正の平方根と、その二乗である2を分けて比べる。",
        "hint": "正の二数の二乗の間に2がある。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "1.41²はいくつ？",
        "answer": 1.9881,
        "explanation": "1.41×1.41＝1.9881。2より小さい。",
        "hint": "整数141の積と小数の位を考える。",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "1.41²<2<1.42²から分かるのは？",
        "options": [
          "√2＝1.42",
          "√2<1.41",
          "1.41<√2<1.42"
        ],
        "answer": "1.41<√2<1.42",
        "explanation": "非負の範囲で二乗の大小を対応させる。",
        "hint": "どちら側の端点の二乗が2を越えるか見る。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "√5が入る連続する整数の区間は？",
        "options": [
          "1と2の間",
          "2と3の間",
          "5と6の間"
        ],
        "answer": "2と3の間",
        "explanation": "2²＝4<5<9＝3²。",
        "hint": "平方数で5を挟む。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "√5＝2.236067…を小数第二位まで四捨五入した近似値は？",
        "answer": 2.24,
        "explanation": "小数第三位が6なので小数第二位を繰り上げる。",
        "hint": "残す位の一つ下を見る。",
        "suffix": "",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "√2を1.4から1.41へ近似し直したとき、変わるものは？",
        "options": [
          "√2そのもの",
          "2の平方根の個数",
          "近似して表す値と誤差"
        ],
        "answer": "近似して表す値と誤差",
        "explanation": "元の数は固定で、近似の細かさが変わる。",
        "hint": "対象の数と表した値を分ける。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "面積7cm²の正方形の辺の厳密値は？",
        "options": [
          "−√7 cm",
          "√7 cm",
          "7cm"
        ],
        "answer": "√7 cm",
        "explanation": "辺の二乗が7となり、辺は正。",
        "hint": "近似せず根号で表す。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "a,bの二乗の大小から、そのままa,bの大小を判断する条件は？",
        "options": [
          "a,bが0以上であること",
          "a,bがともに負であること",
          "条件は不要"
        ],
        "answer": "a,bが0以上であること",
        "explanation": "負の範囲では−3<−2なのに9>4となる。",
        "hint": "符号を無視して二乗しない。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：√10は3.1と3.2に対して、どの位置にある？",
      "options": [
        "√10<3.1",
        "√10>3.2",
        "3.1<√10<3.2"
      ],
      "answer": "3.1<√10<3.2",
      "explanation": "3.1²＝9.61<10<10.24＝3.2²。",
      "hint": "両端を二乗して10と比べる。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "平方根を小数で挟む",
      "prompt": "√2が1.41と1.42の間にあることを確かめよう。",
      "steps": [
        {
          "text": "1.41と1.42はどちらも正である。"
        },
        {
          "text": "1.41²＝1.9881となり2より小さい。"
        },
        {
          "text": "1.42²＝2.0164となり2より大きい。"
        },
        {
          "text": "正の数の二乗の大小から1.41<√2<1.42と分かる。端点との等号ではない。"
        }
      ],
      "answer": "1.41<√2<1.42",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "√2を約1.41と表したら、√2＝1.41と書いてよい。",
      "correction": "1.41は有限の近似値で、二乗は1.9881となり2と異なる。厳密値は√2、近似値は約1.41と区別する。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "1.41<√2<1.42を、二乗した数を使って説明しよう。",
        "followUp": "負の数でも同じ向きで大小を読める？",
        "checkpoints": [
          "端点を二乗して2との大小を示した。",
          "非負の範囲という条件と近似を区別した。"
        ],
        "sample": "1.41²<2<1.42²で両端は正だから、正の平方根√2は間にある。負の数では二乗の大小をそのまま元の大小へ戻せない。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "正の数を二乗して比べると、平方根がどの間にあるか分かる。1.4²<2<1.5²だから1.4<√2<1.5。幅を狭くすると、近似値を細かくできるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "1.4²＝1.96、1.5²＝2.25なので、√2は1.4と1.5の間。次に1.41²＝1.9881、1.42²＝2.0164を比べると1.41<√2<1.42と分かる。√2そのものの位置は変わらず、分かる範囲だけを狭くしている。面積2cm²の正方形の辺を約1.41cmと表すときも、厳密な長さ√2 cmとは区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "非負の範囲では二乗の大小関係が元の数の大小関係と対応する。平方根を二つの小数で挟み、より狭い区間を求めて近似の精度を上げる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "a,b≥0でa<bならa²<b²。これを用いて平方根の位置を比較する。1.41²<2<1.42²から1.41<√2<1.42であり、√2＝1.41とはいえない。√5は2²<5<3²より2と3の間にある。長さや面積の場面では、求める量と単位を確認し、必要な桁を指定して近似値を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材の固定数直線で√2の位置を、1.4〜1.5、次に1.41〜1.42へ絞る。拡大表示しても数直線の値と√2の値を変えず、端点の数字を添える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の正方形の面積を5cm²とする。辺は√5 cmで、√5＝2.236067…を使って小数第二位まで四捨五入すると約2.24cmと記せる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "1.4²＝1.96、1.5²＝2.25から分かるのは？ 正答：1.4<√2<1.5。 正の平方根と、その二乗である2を分けて比べる。 考える手がかり：正の二数の二乗の間に2がある。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "1.41²はいくつ？ 正答：1.9881。 1.41×1.41＝1.9881。2より小さい。 考える手がかり：整数141の積と小数の位を考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "1.41²<2<1.42²から分かるのは？ 正答：1.41<√2<1.42。 非負の範囲で二乗の大小を対応させる。 考える手がかり：どちら側の端点の二乗が2を越えるか見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "√5が入る連続する整数の区間は？ 正答：2と3の間。 2²＝4<5<9＝3²。 考える手がかり：平方数で5を挟む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "√5＝2.236067…を小数第二位まで四捨五入した近似値は？ 正答：2.24。 小数第三位が6なので小数第二位を繰り上げる。 考える手がかり：残す位の一つ下を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "√2を1.4から1.41へ近似し直したとき、変わるものは？ 正答：近似して表す値と誤差。 元の数は固定で、近似の細かさが変わる。 考える手がかり：対象の数と表した値を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "面積7cm²の正方形の辺の厳密値は？ 正答：√7 cm。 辺の二乗が7となり、辺は正。 考える手がかり：近似せず根号で表す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "a,bの二乗の大小から、そのままa,bの大小を判断する条件は？ 正答：a,bが0以上であること。 負の範囲では−3<−2なのに9>4となる。 考える手がかり：符号を無視して二乗しない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：√10は3.1と3.2に対して、どの位置にある？ 正答：3.1<√10<3.2。 3.1²＝9.61<10<10.24＝3.2²。 考える手がかり：両端を二乗して10と比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "1.41<√2<1.42を、二乗した数を使って説明しよう。 負の数でも同じ向きで大小を読める？ 1.41²<2<1.42²で両端は正だから、正の平方根√2は間にある。負の数では二乗の大小をそのまま元の大小へ戻せない。 確認項目：端点を二乗して2との大小を示した。 / 非負の範囲という条件と近似を区別した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "√2が1.41と1.42の間にあることを確かめよう。 1.41と1.42はどちらも正である。 1.41²＝1.9881となり2より小さい。 1.42²＝2.0164となり2より大きい。 正の数の二乗の大小から1.41<√2<1.42と分かる。端点との等号ではない。 結論：1.41<√2<1.42",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「√2を約1.41と表したら、√2＝1.41と書いてよい。」は誤り。1.41は有限の近似値で、二乗は1.9881となり2と異なる。厳密値は√2、近似値は約1.41と区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "非負の範囲の二乗は大小を保つ。1.4²=1.96<2<2.25=1.5²、1.41²=1.9881<2<2.0164=1.42²。したがって各開区間に√2がある。近似値と厳密値は区別する。 操作図の範囲：非負の数を平方して比較すると、1.4²=1.96<2<2.25=1.5²、1.41²=1.9881<2<2.0164=1.42²、1.414²=1.999396<2<2.002225=1.415²。よって1.4<√2<1.5、1.41<√2<1.42、1.414<√2<1.415。正の√2を固定した数直線で挟み、近似値と厳密値を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "motion",
        "text": "正の√2について、1²<2<2²、1.4²<2<1.5²、1.41²<2<1.42²、1.414²<2<1.415²から順に狭い区間で挟む。平方の値は1,4／1.96,2.25／1.9881,2.0164／1.999396,2.002225。固定された全体の数直線1..2と区間の拡大図を区別し、√2の数そのものや元の原点・単位を動かさない。小数は近似で、2の平方根全体±√2と正の√2を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350235100000000",
    "grade": 9,
    "title": "誤差・近似値と数の表し方",
    "domain": "A",
    "order": 16,
    "goal": "測定値と真の値の差、丸めの区間、有効数字をa×10^nの形で表す意味を説明する。",
    "coverageCodes": [
      "8350233111300000",
      "8350235100000000"
    ],
    "explanations": {
      "es": {
        "short": "誤差は、測定値から真の値を引いた差。近似値を使うときは、どの桁で丸めたかも大切だよ。2.30×10³のように、有効な数字の桁を示す書き方もある。",
        "detail": "丸めだけを考える教材で、正の長さx cmを0.1cm単位へ四捨五入して12.3cmとした。真の値は12.25≤x<12.35の範囲にある。もし真の値が12.28cmなら誤差は12.3−12.28＝0.02cm。2300mという近似値を十の位までの3桁が有効と示すなら、2.30×10³mと書く。最後の0も意味を持つ。"
      },
      "js": {
        "short": "誤差は測定値−真の値であり、正負をもつ。近似値の範囲は丸めの規則と桁に依存する。a×10^nの形は、値の大きさと有効数字を分けて示せる。",
        "detail": "正の長さを小数第一位へ四捨五入する設定で、12.3という近似値は12.25以上12.35未満に対応する。下端は12.3へ、上端は12.4へ丸められるため端点の含み方が違う。測定値が真の値より小さければ誤差は負になる。有効数字3桁の2.30×10³と2桁の2.3×10³は数の値は同じ2300だが、近似値として示す桁の情報が違う。ここでは10の指数nは正の整数を中心に扱う。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "丸めの範囲を数直線で見る",
        "text": "架空の部品の正の長さを小数第一位まで四捨五入し12.3cmとした。丸め以外の誤差を考えない設定なら元の長さは12.25cm以上12.35cm未満。実際の測定器の誤差までこの範囲で保証するものではない。",
        "activityIds": [
          "craft-cardboard"
        ]
      },
      {
        "category": "programming",
        "title": "末尾の0を残す表示",
        "text": "教材用の近似値2300mについて、有効数字が3桁と指定されたら2.30×10³mと表示する。数値としては2.3×10³mと同じでも、表示の末尾0を消すと有効な桁の情報が変わる。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "測定値12.3cm、真の値12.28cmと分かっている教材で、誤差はいくつ？",
        "answer": 0.02,
        "explanation": "測定値−真の値＝12.3−12.28＝0.02cm。",
        "hint": "引く順序を定義へ戻す。",
        "suffix": "cm",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "測定値5.1cm、真の値5.13cmのとき、誤差は？",
        "answer": -0.03,
        "explanation": "5.1−5.13＝−0.03cm。真の値より小さく読んだので負。",
        "hint": "大きさの差ではなく符号付きの差。",
        "suffix": "cm",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "正のxを小数第一位へ四捨五入し12.3とした。丸め前の範囲は？",
        "options": [
          "12.25<x≤12.35",
          "12.25≤x<12.35",
          "12.3≤x<12.4"
        ],
        "answer": "12.25≤x<12.35",
        "explanation": "12.25は12.3へ、12.35は12.4へ丸められる。",
        "hint": "上下の端点を実際に四捨五入する。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "有効数字3桁と指定された近似値2300mの表し方は？",
        "options": [
          "2.30×10³m",
          "2.3×10³m",
          "23×10³m"
        ],
        "answer": "2.30×10³m",
        "explanation": "2,3,0の3桁を保ち、10³倍で2300になる。",
        "hint": "桁の情報と数の値を両方保つ。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "4.5×10³の値は？",
        "answer": 4500,
        "explanation": "10³＝1000なので4.5×1000＝4500。",
        "hint": "指数は10をかける回数。",
        "suffix": "",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "2.30×10³と2.3×10³について正しいのは？",
        "options": [
          "どちらも有効数字1桁",
          "値は同じだが、有効数字の表示は3桁と2桁",
          "値が10倍違う"
        ],
        "answer": "値は同じだが、有効数字の表示は3桁と2桁",
        "explanation": "末尾0は数の値を変えないが、指定された近似の桁を示す。",
        "hint": "値と表示の情報を分ける。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "正の数を整数へ四捨五入して8とした。元の数xの範囲は？",
        "options": [
          "7.5≤x<8.5",
          "8≤x<9",
          "7<x≤8"
        ],
        "answer": "7.5≤x<8.5",
        "explanation": "7.5以上は8へ、8.5からは9へ丸められる。",
        "hint": "残す位が整数であることを見る。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "number",
        "prompt": "近似値3.40×10²で、有効数字の桁数は？",
        "answer": 3,
        "explanation": "3、4、最後の0の3桁が有効と表示されている。",
        "hint": "10の指数は有効数字の個数へ入れない。",
        "suffix": "",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：正の12.35を小数第一位へ四捨五入すると12.3になる？",
      "options": [
        "桁を指定しても決まらない",
        "ならない。12.4になる",
        "なる。12.3になる"
      ],
      "answer": "ならない。12.4になる",
      "explanation": "小数第二位が5なので繰り上がる。",
      "hint": "区間の上端が含まれるか確かめる。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "近似値が表す範囲を読む",
      "prompt": "正の長さx cmを小数第一位へ四捨五入して12.3cmとした。丸め前の範囲を求めよう。",
      "steps": [
        {
          "text": "0.1cm単位へ丸めたという規則を確認する。"
        },
        {
          "text": "12.3から0.05小さい12.25は、四捨五入で12.3になる。"
        },
        {
          "text": "12.3から0.05大きい12.35は、四捨五入で12.4になる。"
        },
        {
          "text": "下端を含み上端を含まない12.25≤x<12.35。丸め以外の測定誤差はこの設定に含めない。"
        }
      ],
      "answer": "12.25≤x<12.35",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "誤差はいつも正の数である。",
      "correction": "誤差は測定値−真の値なので負にもなる。例えば5.1−5.13＝−0.03。誤差の絶対値とは区別する。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "12.3という近似値だけでなく、丸めた桁を伝える理由を説明しよう。",
        "followUp": "2.30×10³の末尾0を消すと、どんな情報が変わる？",
        "checkpoints": [
          "丸め規則で元の範囲が決まると説明した。",
          "有効数字の桁と数の値を分けた。"
        ],
        "sample": "小数第一位へ四捨五入した12.3なら範囲は12.25以上12.35未満。2.30の末尾0を消しても数の値は同じだが、有効数字3桁という表示が2桁になる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "誤差は、測定値から真の値を引いた差。近似値を使うときは、どの桁で丸めたかも大切だよ。2.30×10³のように、有効な数字の桁を示す書き方もある。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "丸めだけを考える教材で、正の長さx cmを0.1cm単位へ四捨五入して12.3cmとした。真の値は12.25≤x<12.35の範囲にある。もし真の値が12.28cmなら誤差は12.3−12.28＝0.02cm。2300mという近似値を十の位までの3桁が有効と示すなら、2.30×10³mと書く。最後の0も意味を持つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "誤差は測定値−真の値であり、正負をもつ。近似値の範囲は丸めの規則と桁に依存する。a×10^nの形は、値の大きさと有効数字を分けて示せる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "正の長さを小数第一位へ四捨五入する設定で、12.3という近似値は12.25以上12.35未満に対応する。下端は12.3へ、上端は12.4へ丸められるため端点の含み方が違う。測定値が真の値より小さければ誤差は負になる。有効数字3桁の2.30×10³と2桁の2.3×10³は数の値は同じ2300だが、近似値として示す桁の情報が違う。ここでは10の指数nは正の整数を中心に扱う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の部品の正の長さを小数第一位まで四捨五入し12.3cmとした。丸め以外の誤差を考えない設定なら元の長さは12.25cm以上12.35cm未満。実際の測定器の誤差までこの範囲で保証するものではない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材用の近似値2300mについて、有効数字が3桁と指定されたら2.30×10³mと表示する。数値としては2.3×10³mと同じでも、表示の末尾0を消すと有効な桁の情報が変わる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "測定値12.3cm、真の値12.28cmと分かっている教材で、誤差はいくつ？ 正答：0.02。 測定値−真の値＝12.3−12.28＝0.02cm。 考える手がかり：引く順序を定義へ戻す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "測定値5.1cm、真の値5.13cmのとき、誤差は？ 正答：-0.03。 5.1−5.13＝−0.03cm。真の値より小さく読んだので負。 考える手がかり：大きさの差ではなく符号付きの差。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "正のxを小数第一位へ四捨五入し12.3とした。丸め前の範囲は？ 正答：12.25≤x<12.35。 12.25は12.3へ、12.35は12.4へ丸められる。 考える手がかり：上下の端点を実際に四捨五入する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "有効数字3桁と指定された近似値2300mの表し方は？ 正答：2.30×10³m。 2,3,0の3桁を保ち、10³倍で2300になる。 考える手がかり：桁の情報と数の値を両方保つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "4.5×10³の値は？ 正答：4500。 10³＝1000なので4.5×1000＝4500。 考える手がかり：指数は10をかける回数。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "2.30×10³と2.3×10³について正しいのは？ 正答：値は同じだが、有効数字の表示は3桁と2桁。 末尾0は数の値を変えないが、指定された近似の桁を示す。 考える手がかり：値と表示の情報を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "正の数を整数へ四捨五入して8とした。元の数xの範囲は？ 正答：7.5≤x<8.5。 7.5以上は8へ、8.5からは9へ丸められる。 考える手がかり：残す位が整数であることを見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "近似値3.40×10²で、有効数字の桁数は？ 正答：3。 3、4、最後の0の3桁が有効と表示されている。 考える手がかり：10の指数は有効数字の個数へ入れない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：正の12.35を小数第一位へ四捨五入すると12.3になる？ 正答：ならない。12.4になる。 小数第二位が5なので繰り上がる。 考える手がかり：区間の上端が含まれるか確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "12.3という近似値だけでなく、丸めた桁を伝える理由を説明しよう。 2.30×10³の末尾0を消すと、どんな情報が変わる？ 小数第一位へ四捨五入した12.3なら範囲は12.25以上12.35未満。2.30の末尾0を消しても数の値は同じだが、有効数字3桁という表示が2桁になる。 確認項目：丸め規則で元の範囲が決まると説明した。 / 有効数字の桁と数の値を分けた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "正の長さx cmを小数第一位へ四捨五入して12.3cmとした。丸め前の範囲を求めよう。 0.1cm単位へ丸めたという規則を確認する。 12.3から0.05小さい12.25は、四捨五入で12.3になる。 12.3から0.05大きい12.35は、四捨五入で12.4になる。 下端を含み上端を含まない12.25≤x<12.35。丸め以外の測定誤差はこの設定に含めない。 結論：12.25≤x<12.35",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「誤差はいつも正の数である。」は誤り。誤差は測定値−真の値なので負にもなる。例えば5.1−5.13＝−0.03。誤差の絶対値とは区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "誤差=測定値−真の値。正のxを小数第一位へ四捨五入して12.3とする丸めモデルでは12.25≤x<12.35。2.30×10³=2300は有効数字3桁の表示、2.3×10³は2桁。数値と有効桁を区別する。 操作図の範囲：正の長さを小数第2位で四捨五入し0.1cm単位で12.3cmとしたなら真の値xは12.25≤x<12.35。24.6cmなら24.55≤x<24.65。有効数字3桁の2.30×10³=2300は一の位で四捨五入した十の位までの値として2295≤x<2305、有効数字3桁の4.50×10⁴=45000は十の位で四捨五入した百の位までの値として44950≤x<45050。誤差は測定値−真の値。末尾0も有効数字として示し、指数3,4は正の整数。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233131100000",
    "grade": 9,
    "title": "二次方程式と解",
    "domain": "A",
    "order": 17,
    "goal": "整理してax²+bx+c=0,a≠0となる方程式を捉え、代入で解を確かめる。",
    "coverageCodes": [
      "8350233131100000",
      "8350235200000000"
    ],
    "explanations": {
      "es": {
        "short": "整理してax²＋bx＋c＝0（a≠0）となる方程式を二次方程式という。文字に入れると等式が成り立つ数が解。異なる解が二つあることも、一つだけのこともあるよ。",
        "detail": "x²−5x＋6＝0にx＝2を入れると4−10＋6＝0、x＝3でも9−15＋6＝0となるので、2と3は解。x＝1では1−5＋6＝2となり、右辺0と違うから解ではない。二次方程式では二乗の項が残るかを整理して確かめる。ここでは実数の解を持つ式を扱う。"
      },
      "js": {
        "short": "二次方程式は、移項し同類項を整理するとax²＋bx＋c＝0、a≠0となる一元方程式。解は代入して等式を成立させる実数の値である。",
        "detail": "二次という分類は整理後の式で決まる。x²＋x＝x²＋3はx＝3となるので二次方程式ではない。x²−4＝0は二つの解2,−2を持つが、x²＝0の解は0だけ。代入は候補が解であることを確かめる方法であり、幾つかの候補を試しただけで全ての解を列挙できたとは限らない。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "候補を代入して確かめる",
        "text": "教材のx²−5x＋6＝0に1,2,3を順に代入する。左辺は2,0,0となり、候補の中では2と3が解。全ての解を求める方法は因数分解などで学ぶ。",
        "activityIds": [
          "prog-python"
        ]
      },
      {
        "category": "craft",
        "title": "面積を表す方程式",
        "text": "架空の長方形で横x cm、縦x＋3 cm、面積40cm²とするとx(x＋3)＝40。整理してx²＋3x−40＝0という二次方程式になる。長さなのでx>0も条件にする。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "整理後の二次方程式ax²＋bx＋c＝0に必要なのは？",
        "options": [
          "b≠0",
          "c≠0",
          "a≠0"
        ],
        "answer": "a≠0",
        "explanation": "a＝0だと二乗の項がなくなってしまう。",
        "hint": "二次の項が残る条件を読む。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²−5x＋6＝0の解として正しい組は？",
        "options": [
          "−2と−3",
          "2と3",
          "1と6"
        ],
        "answer": "2と3",
        "explanation": "2と3は代入すると左辺が0になる。",
        "hint": "各候補を式全体へ入れる。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "x²−5x＋6のxに2を代入した値は？",
        "answer": 0,
        "explanation": "4−10＋6＝0である。",
        "hint": "先に二乗を計算する。",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²−5x＋6＝0にx＝1を入れると左辺2になる。x＝1は？",
        "options": [
          "解である",
          "代入だけでは候補かも分からない",
          "解ではない"
        ],
        "answer": "解ではない",
        "explanation": "等式の右辺0と一致しないため解ではない。",
        "hint": "左辺の値を右辺と比べる。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²＝0の実数解は？",
        "options": [
          "0と1",
          "0だけ",
          "1と−1"
        ],
        "answer": "0だけ",
        "explanation": "0の平方根は0だけで、異なる二解ではない。",
        "hint": "二次なら必ず異なる二解、と決めない。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²＋x＝x²＋3は二次方程式？",
        "options": [
          "違う。整理するとx＝3",
          "そう。最初にx²が見える",
          "そう。解が3だから"
        ],
        "answer": "違う。整理するとx＝3",
        "explanation": "両辺のx²が消えて一次の式になる。",
        "hint": "整理した後の最高の次数を見る。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "number",
        "prompt": "x²−5x＋6＝0の標準形で、xの係数bは？",
        "answer": -5,
        "explanation": "符号を含めてb＝−5。",
        "hint": "−5x全体から係数を読む。",
        "suffix": "",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "幾つかの数を試し解を二つ見付けた。代入の役割として正しいのは？",
        "options": [
          "方程式の条件を変更する",
          "試した数が解かを確かめる",
          "試していない数も全て調べたことになる"
        ],
        "answer": "試した数が解かを確かめる",
        "explanation": "代入は各候補の確認。全ての解を求める説明には別の根拠が必要。",
        "hint": "調べた対象と主張の範囲を分ける。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：x(x−2)＝0でx＝0は解？",
      "options": [
        "解である。積が0になる",
        "解でない。xで割らなければならない",
        "解でない。二次の解は正だけ"
      ],
      "answer": "解である。積が0になる",
      "explanation": "0×(−2)＝0なので等式を満たす。",
      "hint": "0を代入して元の式で確かめる。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "解の意味を代入で確認する",
      "prompt": "x²−4＝0に、2と−2を代入して確かめよう。",
      "steps": [
        {
          "text": "解なら左辺と右辺が等しくなるという意味を確認する。"
        },
        {
          "text": "x＝2を入れると2²−4＝4−4＝0。"
        },
        {
          "text": "x＝−2を入れても(−2)²−4＝4−4＝0。"
        },
        {
          "text": "したがって2と−2はいずれも解。二乗の結果だけで元の符号を一つに決めない。"
        }
      ],
      "answer": "2と−2はいずれも解。",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "二次方程式には必ず異なる二つの実数解がある。",
      "correction": "異なる二解とは限らない。例えばx²＝0の解は0だけ。ここでは実数解を持つ二次方程式を扱う。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "x²−5x＋6＝0で、x＝2が解といえる理由を説明しよう。",
        "followUp": "整理すると二乗の項が消える式も二次方程式と呼ぶ？",
        "checkpoints": [
          "元の等式への代入を確認した。",
          "整理後に二乗の項が残るかを確かめた。"
        ],
        "sample": "2を代入すると4−10＋6＝0となる。分類は整理後の式で決まり、二乗の項が消えるなら二次方程式ではない。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "整理してax²＋bx＋c＝0（a≠0）となる方程式を二次方程式という。文字に入れると等式が成り立つ数が解。異なる解が二つあることも、一つだけのこともあるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "x²−5x＋6＝0にx＝2を入れると4−10＋6＝0、x＝3でも9−15＋6＝0となるので、2と3は解。x＝1では1−5＋6＝2となり、右辺0と違うから解ではない。二次方程式では二乗の項が残るかを整理して確かめる。ここでは実数の解を持つ式を扱う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "二次方程式は、移項し同類項を整理するとax²＋bx＋c＝0、a≠0となる一元方程式。解は代入して等式を成立させる実数の値である。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "二次という分類は整理後の式で決まる。x²＋x＝x²＋3はx＝3となるので二次方程式ではない。x²−4＝0は二つの解2,−2を持つが、x²＝0の解は0だけ。代入は候補が解であることを確かめる方法であり、幾つかの候補を試しただけで全ての解を列挙できたとは限らない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材のx²−5x＋6＝0に1,2,3を順に代入する。左辺は2,0,0となり、候補の中では2と3が解。全ての解を求める方法は因数分解などで学ぶ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の長方形で横x cm、縦x＋3 cm、面積40cm²とするとx(x＋3)＝40。整理してx²＋3x−40＝0という二次方程式になる。長さなのでx>0も条件にする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "整理後の二次方程式ax²＋bx＋c＝0に必要なのは？ 正答：a≠0。 a＝0だと二乗の項がなくなってしまう。 考える手がかり：二次の項が残る条件を読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "x²−5x＋6＝0の解として正しい組は？ 正答：2と3。 2と3は代入すると左辺が0になる。 考える手がかり：各候補を式全体へ入れる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "x²−5x＋6のxに2を代入した値は？ 正答：0。 4−10＋6＝0である。 考える手がかり：先に二乗を計算する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "x²−5x＋6＝0にx＝1を入れると左辺2になる。x＝1は？ 正答：解ではない。 等式の右辺0と一致しないため解ではない。 考える手がかり：左辺の値を右辺と比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "x²＝0の実数解は？ 正答：0だけ。 0の平方根は0だけで、異なる二解ではない。 考える手がかり：二次なら必ず異なる二解、と決めない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "x²＋x＝x²＋3は二次方程式？ 正答：違う。整理するとx＝3。 両辺のx²が消えて一次の式になる。 考える手がかり：整理した後の最高の次数を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "x²−5x＋6＝0の標準形で、xの係数bは？ 正答：-5。 符号を含めてb＝−5。 考える手がかり：−5x全体から係数を読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "幾つかの数を試し解を二つ見付けた。代入の役割として正しいのは？ 正答：試した数が解かを確かめる。 代入は各候補の確認。全ての解を求める説明には別の根拠が必要。 考える手がかり：調べた対象と主張の範囲を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：x(x−2)＝0でx＝0は解？ 正答：解である。積が0になる。 0×(−2)＝0なので等式を満たす。 考える手がかり：0を代入して元の式で確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "x²−5x＋6＝0で、x＝2が解といえる理由を説明しよう。 整理すると二乗の項が消える式も二次方程式と呼ぶ？ 2を代入すると4−10＋6＝0となる。分類は整理後の式で決まり、二乗の項が消えるなら二次方程式ではない。 確認項目：元の等式への代入を確認した。 / 整理後に二乗の項が残るかを確かめた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "x²−4＝0に、2と−2を代入して確かめよう。 解なら左辺と右辺が等しくなるという意味を確認する。 x＝2を入れると2²−4＝4−4＝0。 x＝−2を入れても(−2)²−4＝4−4＝0。 したがって2と−2はいずれも解。二乗の結果だけで元の符号を一つに決めない。 結論：2と−2はいずれも解。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「二次方程式には必ず異なる二つの実数解がある。」は誤り。異なる二解とは限らない。例えばx²＝0の解は0だけ。ここでは実数解を持つ二次方程式を扱う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "整理してax²+bx+c=0,a≠0となる方程式が二次方程式。解は代入して等式を満たす実数。x²−5x+6=0はx2,3が解、x²=0は0のみ。実数解を持つ式を対象とする。 操作図の範囲：操作の方程式x²−5x＋6=0の実数解は2,3、(x−2)²=0は2のみ、x(x−3)=0は0,3。代入するx=−1,0,1,2,3,4について左辺x²＋px＋qの値が0のときだけ解。左辺の係数(p,q)は(−5,6),(−4,4),(−3,0)。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233131200000",
    "grade": 9,
    "title": "因数分解で二次方程式を解く",
    "domain": "A",
    "order": 18,
    "goal": "積が0なら少なくとも一方が0となることから全ての解を求める。",
    "coverageCodes": [
      "8350233131200000",
      "8350233132100000",
      "8350235200000000",
      "8350235300000000"
    ],
    "explanations": {
      "es": {
        "short": "積が0なら、少なくとも一方の因数が0になる。(x−2)(x−3)＝0ならx−2＝0またはx−3＝0なので、解は2と3だよ。",
        "detail": "x²−5x＋6＝0を因数分解すると(x−2)(x−3)＝0。積が0になる条件を二つに分けて、それぞれの一次方程式を解く。x²＝3xなら、まずx²−3x＝0、次にx(x−3)＝0とする。xで割ると解x＝0を失ってしまうので、積の形で全ての解を読む。"
      },
      "js": {
        "short": "AB＝0ならA＝0またはB＝0であることを使う。二次方程式の一方の辺を0にし、因数分解して得た各一次方程式の解を合わせる。",
        "detail": "x²＋x−6＝0は(x＋3)(x−2)＝0よりx＝−3,2。x²−6x＋9＝0は(x−3)²＝0となり解は3だけ。因数が等しい場合は同じ値を二つの異なる解と数えない。ここでは整数係数のx²＋px＋q＝0で、学んだ公式を使って因数分解できる簡単な式を中心に扱う。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "0になる枝を両方調べる",
        "text": "教材の(x−2)(x−3)＝0で、左の因数が0になる枝と右の因数が0になる枝を作る。x＝2とx＝3を得て、元の式へそれぞれ代入する。",
        "activityIds": [
          "prog-scratch"
        ]
      },
      {
        "category": "drawing",
        "title": "式の札を分ける",
        "text": "式x(x−3)＝0を二枚の因数札xとx−3に分ける。札は式の記号であり、面積0の長方形の図だけから解を選ぶのではない。x＝0と3を両方残す。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "(x−2)(x−3)＝0の解は？",
        "options": [
          "2だけ",
          "2と3",
          "−2と−3"
        ],
        "answer": "2と3",
        "explanation": "各因数を0にする二つの値を合わせる。",
        "hint": "積0を和0と混同しない。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²＋x−6＝0の解は？",
        "options": [
          "−3と2",
          "3と−2",
          "1と−6"
        ],
        "answer": "−3と2",
        "explanation": "(x＋3)(x−2)＝0へ直す。",
        "hint": "和1、積−6になる因数の定数を探す。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²＝3xの解は？",
        "options": [
          "3だけ",
          "0だけ",
          "0と3"
        ],
        "answer": "0と3",
        "explanation": "x(x−3)＝0より二つの解。",
        "hint": "xで割る前に0の可能性を見る。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²＝3xの両辺を条件なしにxで割る問題点は？",
        "options": [
          "二乗が計算できない",
          "解x＝0を失う",
          "解x＝3が必ず増える"
        ],
        "answer": "解x＝0を失う",
        "explanation": "0で割れないため、その操作はx＝0の候補を消してしまう。",
        "hint": "元の式へ0を代入する。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²−6x＋9＝0の解は？",
        "options": [
          "3だけ",
          "3と−3",
          "9だけ"
        ],
        "answer": "3だけ",
        "explanation": "(x−3)²＝0なのでx−3＝0。",
        "hint": "同じ因数が二つでも値は一つ。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "AB＝0の正しい読み方は？",
        "options": [
          "必ず両方とも0",
          "A＋B＝0",
          "少なくとも一方が0"
        ],
        "answer": "少なくとも一方が0",
        "explanation": "一方が0なら積が0となる。両方0の場合も含む。",
        "hint": "0×5を例に確かめる。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "number",
        "prompt": "x²−7x＋12＝0の二つの解のうち、大きい方は？",
        "answer": 4,
        "explanation": "(x−3)(x−4)＝0で解は3,4。",
        "hint": "和7、積12の二数を探す。",
        "suffix": "",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "(x−2)(x−3)＝6で各因数を0としてよい？",
        "options": [
          "できない。積が0という前提がない",
          "できる。積の式ならいつでもよい",
          "できる。右辺が正だから"
        ],
        "answer": "できない。積が0という前提がない",
        "explanation": "積0の性質は右辺6のままでは使えない。",
        "hint": "使う性質の条件を確認する。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：x(x＋4)＝0の解に0は含まれる？",
      "options": [
        "含まれない。−4だけ",
        "含まれない。4だけ",
        "含まれる。もう一つは−4"
      ],
      "answer": "含まれる。もう一つは−4",
      "explanation": "最初の因数xが0になる場合を残す。",
      "hint": "二つの因数を別々に0へ置く。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "積0から全ての解へ",
      "prompt": "x²−x−6＝0を解こう。",
      "steps": [
        {
          "text": "和−1、積−6になる−3と2を探す。"
        },
        {
          "text": "(x−3)(x＋2)＝0と因数分解する。"
        },
        {
          "text": "x−3＝0またはx＋2＝0なのでx＝3または−2。"
        },
        {
          "text": "元の式へ代入し、9−3−6＝0と4＋2−6＝0を確かめる。"
        }
      ],
      "answer": "x＝3、−2",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "x²＝3xでは両辺をxで割ってx＝3だけを答えればよい。",
      "correction": "x＝0も元の等式を満たす。x(x−3)＝0へ直して、x＝0または3と全ての解を求める。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "積が0のとき各因数を0にして解ける理由を説明しよう。",
        "followUp": "同じ因数が二つ現れたら、異なる解が二つになる？",
        "checkpoints": [
          "少なくとも一方が0という性質を用いた。",
          "同じ値を重複して数えなかった。"
        ],
        "sample": "二つの実数の因数がともに0でないとき、その積は0ではない。したがって少なくとも一方を0にする。(x−3)²＝0では同じ値3だけになる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "積が0なら、少なくとも一方の因数が0になる。(x−2)(x−3)＝0ならx−2＝0またはx−3＝0なので、解は2と3だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "x²−5x＋6＝0を因数分解すると(x−2)(x−3)＝0。積が0になる条件を二つに分けて、それぞれの一次方程式を解く。x²＝3xなら、まずx²−3x＝0、次にx(x−3)＝0とする。xで割ると解x＝0を失ってしまうので、積の形で全ての解を読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "AB＝0ならA＝0またはB＝0であることを使う。二次方程式の一方の辺を0にし、因数分解して得た各一次方程式の解を合わせる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "x²＋x−6＝0は(x＋3)(x−2)＝0よりx＝−3,2。x²−6x＋9＝0は(x−3)²＝0となり解は3だけ。因数が等しい場合は同じ値を二つの異なる解と数えない。ここでは整数係数のx²＋px＋q＝0で、学んだ公式を使って因数分解できる簡単な式を中心に扱う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材の(x−2)(x−3)＝0で、左の因数が0になる枝と右の因数が0になる枝を作る。x＝2とx＝3を得て、元の式へそれぞれ代入する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "式x(x−3)＝0を二枚の因数札xとx−3に分ける。札は式の記号であり、面積0の長方形の図だけから解を選ぶのではない。x＝0と3を両方残す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "(x−2)(x−3)＝0の解は？ 正答：2と3。 各因数を0にする二つの値を合わせる。 考える手がかり：積0を和0と混同しない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "x²＋x−6＝0の解は？ 正答：−3と2。 (x＋3)(x−2)＝0へ直す。 考える手がかり：和1、積−6になる因数の定数を探す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "x²＝3xの解は？ 正答：0と3。 x(x−3)＝0より二つの解。 考える手がかり：xで割る前に0の可能性を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "x²＝3xの両辺を条件なしにxで割る問題点は？ 正答：解x＝0を失う。 0で割れないため、その操作はx＝0の候補を消してしまう。 考える手がかり：元の式へ0を代入する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "x²−6x＋9＝0の解は？ 正答：3だけ。 (x−3)²＝0なのでx−3＝0。 考える手がかり：同じ因数が二つでも値は一つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "AB＝0の正しい読み方は？ 正答：少なくとも一方が0。 一方が0なら積が0となる。両方0の場合も含む。 考える手がかり：0×5を例に確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "x²−7x＋12＝0の二つの解のうち、大きい方は？ 正答：4。 (x−3)(x−4)＝0で解は3,4。 考える手がかり：和7、積12の二数を探す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "(x−2)(x−3)＝6で各因数を0としてよい？ 正答：できない。積が0という前提がない。 積0の性質は右辺6のままでは使えない。 考える手がかり：使う性質の条件を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：x(x＋4)＝0の解に0は含まれる？ 正答：含まれる。もう一つは−4。 最初の因数xが0になる場合を残す。 考える手がかり：二つの因数を別々に0へ置く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "積が0のとき各因数を0にして解ける理由を説明しよう。 同じ因数が二つ現れたら、異なる解が二つになる？ 二つの実数の因数がともに0でないとき、その積は0ではない。したがって少なくとも一方を0にする。(x−3)²＝0では同じ値3だけになる。 確認項目：少なくとも一方が0という性質を用いた。 / 同じ値を重複して数えなかった。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "x²−x−6＝0を解こう。 和−1、積−6になる−3と2を探す。 (x−3)(x＋2)＝0と因数分解する。 x−3＝0またはx＋2＝0なのでx＝3または−2。 元の式へ代入し、9−3−6＝0と4＋2−6＝0を確かめる。 結論：x＝3、−2",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「x²＝3xでは両辺をxで割ってx＝3だけを答えればよい。」は誤り。x＝0も元の等式を満たす。x(x−3)＝0へ直して、x＝0または3と全ての解を求める。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "実数A,BでAB=0 iff A=0またはB=0。x²−5x+6=0は2,3、x²=3xは0,3、(x−3)²=0は3のみ。未知数で割って0の解を失わない。 操作図の範囲：操作例x²−5x＋6=0は(x−2)(x−3)=0から2,3、x²−3x=0はx(x−3)=0から0,3、x²−4x＋4=0は(x−2)²=0から2のみ。積=0という条件を保ち、xで割って0の解を落とさない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233131000000",
    "grade": 9,
    "title": "平方根を使って二次方程式を解く",
    "domain": "A",
    "order": 19,
    "goal": "ax²=bや(x+p)²=qを平方根の考えで解き、±と重解を区別する。",
    "coverageCodes": [
      "8350233131000000",
      "8350233131200000",
      "8350233132100000",
      "8350235200000000",
      "8350235300000000"
    ],
    "explanations": {
      "es": {
        "short": "x²＝k（k≥0）の解は平方根から求める。k>0ならx＝±√k、k＝0ならx＝0だけ。(x＋p)²でも、括弧全体を一つの数と見よう。",
        "detail": "2x²＝18では両辺を0でない2で割り、x²＝9にする。9の平方根は±3だからx＝3,−3。(x＋2)²＝9ならx＋2＝3または−3なのでx＝1,−5。根号√9の値3だけを使って負の枝を落とさないようにしよう。"
      },
      "js": {
        "short": "a≠0のax²＝bはx²＝b/aへ変形する。ここではa,bは有理数、b/a≥0とし、正の右辺なら正負の平方根、0なら0を解とする。",
        "detail": "−2x²＝−8でも、両辺を−2で割ればx²＝4なので解は±2。係数が負であることと、二乗の右辺が負になることは別である。(x−1)²＝2はx−1＝±√2よりx＝1±√2。括弧を外してから平方根を取るのではなく、二乗されているまとまり全体を使う。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "二つの枝を同じ操作で戻す",
        "text": "教材の(x＋2)²＝9をx＋2＝3とx＋2＝−3に分ける。それぞれから2を引いて1と−5を得る。正の枝だけで処理を終えない。",
        "activityIds": [
          "prog-python"
        ]
      },
      {
        "category": "drawing",
        "title": "数直線で二つの解を見る",
        "text": "式x²＝9の解を数直線の3と−3に置く。原点からどちらも距離3であり、根号√9が表す正の点一つとは区別する。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "2x²＝18の解は？",
        "options": [
          "3と−3",
          "9と−9",
          "3だけ"
        ],
        "answer": "3と−3",
        "explanation": "x²＝9へ直して正負の平方根を取る。",
        "hint": "まずx²の係数をなくす。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "−2x²＝−8の解は？",
        "options": [
          "実数解はない",
          "4と−4",
          "2と−2"
        ],
        "answer": "2と−2",
        "explanation": "0でない−2で割るとx²＝4。",
        "hint": "両辺の負符号を同じ除法で処理する。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "(x＋2)²＝9の解は？",
        "options": [
          "5と−1",
          "1と−5",
          "3と−3"
        ],
        "answer": "1と−5",
        "explanation": "x＋2＝±3から両方とも2を引く。",
        "hint": "括弧全体の値とxを区別する。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "(x−1)²＝2の解は？",
        "options": [
          "1＋√2と1−√2",
          "√2と−√2",
          "1＋√2だけ"
        ],
        "answer": "1＋√2と1−√2",
        "explanation": "x−1＝±√2の両辺へ1を足す。",
        "hint": "正負それぞれの枝を戻す。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "5x²＝0の実数解xは？",
        "answer": 0,
        "explanation": "x²＝0なので0だけ。",
        "hint": "右辺0では二つの異なる平方根はない。",
        "suffix": "",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²＝12の解を簡単な根号で表すと？",
        "options": [
          "2√3だけ",
          "2√3と−2√3",
          "6と−6"
        ],
        "answer": "2√3と−2√3",
        "explanation": "±√12＝±2√3。",
        "hint": "平方因子4を外へ出す。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "ax²＝bをx²＝b/aへ変形する条件は？",
        "options": [
          "a≠0",
          "b≠0だけ",
          "条件は不要"
        ],
        "answer": "a≠0",
        "explanation": "両辺をaで割るためaは0でない必要がある。",
        "hint": "除数を確認する。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²＝9からx＝√9＝3だけとするのは？",
        "options": [
          "正しい。√9は3だから",
          "誤り。解は−3だけ",
          "不十分。x＝−3も解"
        ],
        "answer": "不十分。x＝−3も解",
        "explanation": "根号一つの値と方程式の全ての解は異なる。",
        "hint": "−3を元の式へ代入する。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：(x−4)²＝0の解は？",
      "options": [
        "0だけ",
        "4だけ",
        "4と−4"
      ],
      "answer": "4だけ",
      "explanation": "x−4＝0なので4。",
      "hint": "0の平方根は一つ。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "二乗されているまとまりを戻す",
      "prompt": "(x＋2)²＝9を解こう。",
      "steps": [
        {
          "text": "X＝x＋2と考え、X²＝9の形を見る。"
        },
        {
          "text": "9の平方根は3と−3なので、x＋2＝3または−3。"
        },
        {
          "text": "それぞれの両辺から2を引き、x＝1または−5を得る。"
        },
        {
          "text": "代入すると(1＋2)²も(−5＋2)²も9となる。"
        }
      ],
      "answer": "x＝1、−5",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "二乗の方程式では正の平方根だけ取ればよい。",
      "correction": "正の右辺には正負二つの平方根がある。x²＝9なら3と−3。長さなどの条件で一方を選ぶのは全ての解を求めた後。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "(x＋2)²＝9で解が1と−5になる理由を説明しよう。",
        "followUp": "右辺が0なら同じ数え方になる？",
        "checkpoints": [
          "括弧全体に正負二つの平方根を対応させた。",
          "両方の枝で2を引き、0の場合を区別した。"
        ],
        "sample": "x＋2が3でも−3でも二乗は9になる。2を引いて1と−5。右辺0なら括弧全体は0だけなので解は一つ。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "x²＝k（k≥0）の解は平方根から求める。k>0ならx＝±√k、k＝0ならx＝0だけ。(x＋p)²でも、括弧全体を一つの数と見よう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "2x²＝18では両辺を0でない2で割り、x²＝9にする。9の平方根は±3だからx＝3,−3。(x＋2)²＝9ならx＋2＝3または−3なのでx＝1,−5。根号√9の値3だけを使って負の枝を落とさないようにしよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "a≠0のax²＝bはx²＝b/aへ変形する。ここではa,bは有理数、b/a≥0とし、正の右辺なら正負の平方根、0なら0を解とする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "−2x²＝−8でも、両辺を−2で割ればx²＝4なので解は±2。係数が負であることと、二乗の右辺が負になることは別である。(x−1)²＝2はx−1＝±√2よりx＝1±√2。括弧を外してから平方根を取るのではなく、二乗されているまとまり全体を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材の(x＋2)²＝9をx＋2＝3とx＋2＝−3に分ける。それぞれから2を引いて1と−5を得る。正の枝だけで処理を終えない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "式x²＝9の解を数直線の3と−3に置く。原点からどちらも距離3であり、根号√9が表す正の点一つとは区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "2x²＝18の解は？ 正答：3と−3。 x²＝9へ直して正負の平方根を取る。 考える手がかり：まずx²の係数をなくす。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "−2x²＝−8の解は？ 正答：2と−2。 0でない−2で割るとx²＝4。 考える手がかり：両辺の負符号を同じ除法で処理する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "(x＋2)²＝9の解は？ 正答：1と−5。 x＋2＝±3から両方とも2を引く。 考える手がかり：括弧全体の値とxを区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "(x−1)²＝2の解は？ 正答：1＋√2と1−√2。 x−1＝±√2の両辺へ1を足す。 考える手がかり：正負それぞれの枝を戻す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "5x²＝0の実数解xは？ 正答：0。 x²＝0なので0だけ。 考える手がかり：右辺0では二つの異なる平方根はない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "x²＝12の解を簡単な根号で表すと？ 正答：2√3と−2√3。 ±√12＝±2√3。 考える手がかり：平方因子4を外へ出す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "ax²＝bをx²＝b/aへ変形する条件は？ 正答：a≠0。 両辺をaで割るためaは0でない必要がある。 考える手がかり：除数を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "x²＝9からx＝√9＝3だけとするのは？ 正答：不十分。x＝−3も解。 根号一つの値と方程式の全ての解は異なる。 考える手がかり：−3を元の式へ代入する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：(x−4)²＝0の解は？ 正答：4だけ。 x−4＝0なので4。 考える手がかり：0の平方根は一つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "(x＋2)²＝9で解が1と−5になる理由を説明しよう。 右辺が0なら同じ数え方になる？ x＋2が3でも−3でも二乗は9になる。2を引いて1と−5。右辺0なら括弧全体は0だけなので解は一つ。 確認項目：括弧全体に正負二つの平方根を対応させた。 / 両方の枝で2を引き、0の場合を区別した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "(x＋2)²＝9を解こう。 X＝x＋2と考え、X²＝9の形を見る。 9の平方根は3と−3なので、x＋2＝3または−3。 それぞれの両辺から2を引き、x＝1または−5を得る。 代入すると(1＋2)²も(−5＋2)²も9となる。 結論：x＝1、−5",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「二乗の方程式では正の平方根だけ取ればよい。」は誤り。正の右辺には正負二つの平方根がある。x²＝9なら3と−3。長さなどの条件で一方を選ぶのは全ての解を求めた後。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "a≠0,a,bは有理数,b/a≥0でax²=bをx²=b/aへ変形する。右辺正なら±√(b/a)、0なら0。2x²=18は±3、−2x²=−8は±2、(x+2)²=9は1,−5。 操作図の範囲：操作例2x²=18と−2x²=−18はともにx²=9からx=±3。(x＋2)²=9はx＋2=±3からx=1,−5。3x²=0は0のみ。x²=2は±√2。ax²=bは有理数a,b、a≠0、b/a≥0の範囲とする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233132100000",
    "grade": 9,
    "title": "平方の形に変形して解く",
    "domain": "A",
    "order": 20,
    "goal": "両辺へ同じ数を足して平方を完成し、等式を保ちながら二次方程式を解く。",
    "coverageCodes": [
      "8350233131200000",
      "8350233132100000",
      "8350235200000000",
      "8350235300000000"
    ],
    "explanations": {
      "es": {
        "short": "二次方程式を平方の形にすると、平方根で解ける。x²＋4x＝5なら両辺に4を足し、(x＋2)²＝9にする。片側だけに足さないようにしよう。",
        "detail": "x²＋4x−5＝0で、まず両辺へ5を足すとx²＋4x＝5。左を(x＋2)²にするには最後の4が足りないから、両辺へ4を足す。すると(x＋2)²＝9。x＋2＝3または−3よりx＝1,−5となり、元の式でも確かめられる。"
      },
      "js": {
        "short": "x²＋px＋q＝0を平方の形へ変形して解く。両辺へ同じ数を加え、(x＋p/2)²の形を作る。ここでは一次の項の係数が偶数で、実数解を持つ式を中心に扱う。",
        "detail": "x²＋6x＋1＝0ならx²＋6x＝−1。中央6xに合う平方は(x＋3)²なので、両辺に9を足して(x＋3)²＝8となる。x＋3＝±2√2よりx＝−3±2√2。正の面積を使う導入図はx>0の例で示し、負の解を含む全体の同値変形は等式の性質で説明する。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "足りない角を見付ける",
        "text": "x>0の架空の面積図でx²＋4xを、x²と幅2の長方形二枚へ分ける。角に2×2＝4を足すと(x＋2)²になる。方程式へ使うときは右辺にも同じ4を足す。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "両辺の操作をそろえる",
        "text": "教材のx²＋4x＝5の左右へ同じ4を加える。左だけを平方へ変えると別の方程式になるため、右の5も9へ変える。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "x²＋4x＝5の両辺に同じ数を足して左を(x＋2)²にする。その数は？",
        "answer": 4,
        "explanation": "(x＋2)²＝x²＋4x＋4なので4が必要。",
        "hint": "中央の係数4の半分を二乗する。",
        "suffix": "",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²＋4x＝5の両辺へ4を足した式は？",
        "options": [
          "x²＋4x＝9",
          "(x＋2)²＝9",
          "(x＋2)²＝5"
        ],
        "answer": "(x＋2)²＝9",
        "explanation": "左にも右にも4を足す。",
        "hint": "片方だけ変えない。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "(x＋2)²＝9の解は？",
        "options": [
          "1と−5",
          "3と−3",
          "−1と5"
        ],
        "answer": "1と−5",
        "explanation": "x＋2＝±3の両方から2を引く。",
        "hint": "平方根を取ったまとまり全体を見る。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "x²＋6x＝7の両辺に同じ数を足して左を(x＋3)²にする。その数は？",
        "answer": 9,
        "explanation": "中央6xに合うのは2×x×3なので、必要な定数は3²＝9。",
        "hint": "一次の係数の半分を用いる。",
        "suffix": "",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²＋6x＋1＝0を平方の形へ直すと？",
        "options": [
          "(x＋6)²＝35",
          "(x＋3)²＝8",
          "(x＋3)²＝10"
        ],
        "answer": "(x＋3)²＝8",
        "explanation": "x²＋6x＝−1に両辺9を足して8。",
        "hint": "定数を移した符号を保つ。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²−4x−1＝0を平方の形へ直すと？",
        "options": [
          "(x−2)²＝5",
          "(x＋2)²＝5",
          "(x−2)²＝−3"
        ],
        "answer": "(x−2)²＝5",
        "explanation": "x²−4x＝1へ4を足す。",
        "hint": "中央が負なら括弧内も差になる。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "方程式の左辺へ4だけを足し、右辺を変えない操作は？",
        "options": [
          "いつでも同じ解を保つ",
          "右辺が正なら必ずよい",
          "一般には解が変わる"
        ],
        "answer": "一般には解が変わる",
        "explanation": "等式を保つには両辺へ同じ操作が必要。",
        "hint": "元の解を代入して確かめる方法もある。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "order",
        "prompt": "x²＋4x−5＝0を、定数の移項から平方の形で解く手順を並べよう。",
        "items": [
          "両辺に4を足して(x＋2)²＝9とする",
          "両辺に5を足してx²＋4x＝5とする",
          "x＋2＝±3からx＝1,−5を得る"
        ],
        "answer": [
          "両辺に5を足してx²＋4x＝5とする",
          "両辺に4を足して(x＋2)²＝9とする",
          "x＋2＝±3からx＝1,−5を得る"
        ],
        "explanation": "指定された順に定数を移し、平方を作り、平方根で解く。",
        "hint": "前の式を使って次の形を作る。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：x²＋8xを(x＋4)²にするため、追加する定数は？",
      "options": [
        "16",
        "4",
        "8"
      ],
      "answer": "16",
      "explanation": "(x＋4)²＝x²＋8x＋16。",
      "hint": "4をそのまま足すのではなく二乗する。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "平方の形で二つの解へ",
      "prompt": "x²＋4x−5＝0を解こう。",
      "steps": [
        {
          "text": "両辺へ5を足し、x²＋4x＝5とする。"
        },
        {
          "text": "両辺へ4を足し、x²＋4x＋4＝9、すなわち(x＋2)²＝9とする。"
        },
        {
          "text": "x＋2＝3または−3から、x＝1または−5。"
        },
        {
          "text": "元の式へ入れると1＋4−5＝0、25−20−5＝0。二つとも解である。"
        }
      ],
      "answer": "x＝1、−5",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "左辺を平方にするためなら、左辺だけに数を足してよい。",
      "correction": "等式の解を保つには右辺にも同じ数を足す。x²＋4x＝5に4を足すなら、右辺は9になる。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "x²＋4x＝5へ4を足す理由を説明しよう。",
        "followUp": "面積図でx>0としていても、解−5を捨ててよい？",
        "checkpoints": [
          "中央の係数から平方の形を作った。",
          "等式の両辺へ同じ操作をし、式の範囲と図の範囲を区別した。"
        ],
        "sample": "(x＋2)²にするには4が必要なので両辺へ足す。図は導入の正の例だが、等式の変形は全ての実数xで成り立つので−5も検算して残す。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "二次方程式を平方の形にすると、平方根で解ける。x²＋4x＝5なら両辺に4を足し、(x＋2)²＝9にする。片側だけに足さないようにしよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "x²＋4x−5＝0で、まず両辺へ5を足すとx²＋4x＝5。左を(x＋2)²にするには最後の4が足りないから、両辺へ4を足す。すると(x＋2)²＝9。x＋2＝3または−3よりx＝1,−5となり、元の式でも確かめられる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "x²＋px＋q＝0を平方の形へ変形して解く。両辺へ同じ数を加え、(x＋p/2)²の形を作る。ここでは一次の項の係数が偶数で、実数解を持つ式を中心に扱う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "x²＋6x＋1＝0ならx²＋6x＝−1。中央6xに合う平方は(x＋3)²なので、両辺に9を足して(x＋3)²＝8となる。x＋3＝±2√2よりx＝−3±2√2。正の面積を使う導入図はx>0の例で示し、負の解を含む全体の同値変形は等式の性質で説明する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "x>0の架空の面積図でx²＋4xを、x²と幅2の長方形二枚へ分ける。角に2×2＝4を足すと(x＋2)²になる。方程式へ使うときは右辺にも同じ4を足す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材のx²＋4x＝5の左右へ同じ4を加える。左だけを平方へ変えると別の方程式になるため、右の5も9へ変える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "x²＋4x＝5の両辺に同じ数を足して左を(x＋2)²にする。その数は？ 正答：4。 (x＋2)²＝x²＋4x＋4なので4が必要。 考える手がかり：中央の係数4の半分を二乗する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "x²＋4x＝5の両辺へ4を足した式は？ 正答：(x＋2)²＝9。 左にも右にも4を足す。 考える手がかり：片方だけ変えない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "(x＋2)²＝9の解は？ 正答：1と−5。 x＋2＝±3の両方から2を引く。 考える手がかり：平方根を取ったまとまり全体を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "x²＋6x＝7の両辺に同じ数を足して左を(x＋3)²にする。その数は？ 正答：9。 中央6xに合うのは2×x×3なので、必要な定数は3²＝9。 考える手がかり：一次の係数の半分を用いる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "x²＋6x＋1＝0を平方の形へ直すと？ 正答：(x＋3)²＝8。 x²＋6x＝−1に両辺9を足して8。 考える手がかり：定数を移した符号を保つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "x²−4x−1＝0を平方の形へ直すと？ 正答：(x−2)²＝5。 x²−4x＝1へ4を足す。 考える手がかり：中央が負なら括弧内も差になる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "方程式の左辺へ4だけを足し、右辺を変えない操作は？ 正答：一般には解が変わる。 等式を保つには両辺へ同じ操作が必要。 考える手がかり：元の解を代入して確かめる方法もある。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "x²＋4x−5＝0を、定数の移項から平方の形で解く手順を並べよう。 正答：両辺に5を足してx²＋4x＝5とする → 両辺に4を足して(x＋2)²＝9とする → x＋2＝±3からx＝1,−5を得る。 指定された順に定数を移し、平方を作り、平方根で解く。 考える手がかり：前の式を使って次の形を作る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：x²＋8xを(x＋4)²にするため、追加する定数は？ 正答：16。 (x＋4)²＝x²＋8x＋16。 考える手がかり：4をそのまま足すのではなく二乗する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "x²＋4x＝5へ4を足す理由を説明しよう。 面積図でx>0としていても、解−5を捨ててよい？ (x＋2)²にするには4が必要なので両辺へ足す。図は導入の正の例だが、等式の変形は全ての実数xで成り立つので−5も検算して残す。 確認項目：中央の係数から平方の形を作った。 / 等式の両辺へ同じ操作をし、式の範囲と図の範囲を区別した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "x²＋4x−5＝0を解こう。 両辺へ5を足し、x²＋4x＝5とする。 両辺へ4を足し、x²＋4x＋4＝9、すなわち(x＋2)²＝9とする。 x＋2＝3または−3から、x＝1または−5。 元の式へ入れると1＋4−5＝0、25−20−5＝0。二つとも解である。 結論：x＝1、−5",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「左辺を平方にするためなら、左辺だけに数を足してよい。」は誤り。等式の解を保つには右辺にも同じ数を足す。x²＋4x＝5に4を足すなら、右辺は9になる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "実数解を持つ式を対象に平方完成する。x²+4x−5=0 iff x²+4x=5 iff (x+2)²=9 iff x=1または−5。正の面積図はx>0の説明範囲で、負の解を図の負の辺として描かない。 操作図の範囲：操作例x²＋4x−5=0からx²＋4x=5、両辺へ4を足して(x＋2)²=9、x＋2=±3からx=1,−5。いずれも元の左辺を0にする。符号を含む式として扱い、面積図の正の長さ条件で負の解を落とさない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "motion",
        "text": "四段説明はx²＋4x−5=0、x²＋4x=5、両辺に4を足した(x＋2)²=9、x＋2=±3からx=1,−5。最後は両解を数直線に示し、1＋4−5=0と25−20−5=0を確かめる。負の解を正の面積模型の範囲で捨てず、式の変形として両方を保つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233131300000",
    "grade": 9,
    "title": "解の公式と解き方の選択",
    "domain": "A",
    "order": 21,
    "goal": "係数の符号を保って解の公式を使い、因数分解などと方法を比較する。",
    "coverageCodes": [
      "8350233131300000",
      "8350233132100000",
      "8350235200000000"
    ],
    "explanations": {
      "es": {
        "short": "ax²＋bx＋c＝0（a≠0）の解は、根号の中が0以上ならx＝(−b±√(b²−4ac))/(2a)。符号を含めて係数を入れ、分子全体を2aで割ろう。",
        "detail": "x²＋x−1＝0ではa＝1,b＝1,c＝−1。根号の中は1²−4×1×(−1)＝5なので、解は(−1＋√5)/2と(−1−√5)/2。因数分解で簡単に解ける式ならそちらを選んでもよい。解の公式は、平方の形へ変える手順を係数でまとめたものだよ。"
      },
      "js": {
        "short": "a≠0、b²−4ac≥0のax²＋bx＋c＝0の解はx＝(−b±√(b²−4ac))/(2a)。ここでは実数解を持つ式を扱い、因数分解・平方根・公式を式に応じて使い分ける。",
        "detail": "2x²＋x−1＝0ではa＝2,b＝1,c＝−1。根号内は9、分母は4となり、x＝(−1±3)/4から1/2と−1。分母2aは−bと根号の両方を含む分子全体を割る。根号内が0の場合、±0は同じ値なので異なる二解にはならない。求めた値を代入することも確認に使える。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "係数を符号付きで入れる",
        "text": "教材の2x²＋x−1＝0からa＝2,b＝1,c＝−1を読み取る。cの負符号を保つとb²−4ac＝9となり、解1/2と−1を得る。",
        "activityIds": [
          "prog-python"
        ]
      },
      {
        "category": "drawing",
        "title": "分子のまとまりを見える形に",
        "text": "解の公式を分数の枠で描く。上の枠には−b±√(b²−4ac)全体、下には2aを入れ、一部分だけを割る誤りを防ぐ。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "x²＋x−1＝0のa,b,cは？",
        "options": [
          "0、1、−1",
          "1、1、−1",
          "1、1、1"
        ],
        "answer": "1、1、−1",
        "explanation": "定数項−1の符号も係数cに含む。",
        "hint": "標準形へ対応させる。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "x²＋x−1＝0で、b²−4acの値は？",
        "answer": 5,
        "explanation": "1−4×1×(−1)＝5。",
        "hint": "cを括弧付きで代入する。",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²＋x−1＝0の解は？",
        "options": [
          "(1＋√5)/2と(1−√5)/2",
          "−1＋√5/2と−1−√5/2",
          "(−1＋√5)/2と(−1−√5)/2"
        ],
        "answer": "(−1＋√5)/2と(−1−√5)/2",
        "explanation": "−b＝−1、分母2a＝2で分子全体を割る。",
        "hint": "−bの符号と分数の括弧を確認する。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "2x²＋x−1＝0で、解の公式の分母2aはいくつ？",
        "answer": 4,
        "explanation": "a＝2なので2a＝4。",
        "hint": "x²の係数を読む。",
        "suffix": "",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "2x²＋x−1＝0の解は？",
        "options": [
          "1/2と−1",
          "1と−1/2",
          "2と−1"
        ],
        "answer": "1/2と−1",
        "explanation": "(−1＋3)/4＝1/2、(−1−3)/4＝−1。",
        "hint": "正負の枝を両方計算する。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²−4x＋4＝0で根号の中が0のとき、解は？",
        "options": [
          "2と−2",
          "0だけ",
          "2だけ"
        ],
        "answer": "2だけ",
        "explanation": "x＝(4±0)/2＝2。",
        "hint": "±0は異なる二数ではない。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "解の公式をa＝0のまま使える？",
        "options": [
          "使える。平方根があればよい",
          "使えない。分母2aが0になる",
          "使える。bが正ならよい"
        ],
        "answer": "使えない。分母2aが0になる",
        "explanation": "a≠0が二次方程式と公式の前提。",
        "hint": "公式の分母を見る。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²−7x＋12＝0の解き方として正しいのは？",
        "options": [
          "因数分解でも解の公式でもよい",
          "解の公式しか使えない",
          "因数分解したら公式の解と違う"
        ],
        "answer": "因数分解でも解の公式でもよい",
        "explanation": "どちらも同じ方程式の解3,4を得る。",
        "hint": "式の形に合う方法を選べる。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：解の公式でb＝−3なら、分子の−bは？",
      "options": [
        "−3",
        "9",
        "3"
      ],
      "answer": "3",
      "explanation": "−(−3)＝3。",
      "hint": "係数bの符号ごと反対にする。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "係数を読んで公式へ",
      "prompt": "x²＋x−1＝0を解の公式で解こう。",
      "steps": [
        {
          "text": "a＝1,b＝1,c＝−1を符号付きで読み取る。"
        },
        {
          "text": "b²−4ac＝1−4×1×(−1)＝5を求める。"
        },
        {
          "text": "−b＝−1、2a＝2を使い、x＝(−1±√5)/2とする。"
        },
        {
          "text": "正負の二つを分け、(−1＋√5)/2と(−1−√5)/2を解とする。"
        }
      ],
      "answer": "x＝(−1＋√5)/2、(−1−√5)/2",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "解の公式では、根号の部分だけを2aで割る。",
      "correction": "2aで割るのは−b±√(b²−4ac)という分子全体。分数線や括弧でまとまりを保つ。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "2x²＋x−1＝0で、解の公式へ入れる係数と解を説明しよう。",
        "followUp": "根号内が0のとき、異なる二つの解になる？",
        "checkpoints": [
          "a,b,cの符号と分子全体を保った。",
          "二つの枝と重なる場合を区別した。"
        ],
        "sample": "a＝2,b＝1,c＝−1で根号内9、分母4。解は1/2と−1。根号内0なら正負の枝が同じ値になる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "ax²＋bx＋c＝0（a≠0）の解は、根号の中が0以上ならx＝(−b±√(b²−4ac))/(2a)。符号を含めて係数を入れ、分子全体を2aで割ろう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "x²＋x−1＝0ではa＝1,b＝1,c＝−1。根号の中は1²−4×1×(−1)＝5なので、解は(−1＋√5)/2と(−1−√5)/2。因数分解で簡単に解ける式ならそちらを選んでもよい。解の公式は、平方の形へ変える手順を係数でまとめたものだよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "a≠0、b²−4ac≥0のax²＋bx＋c＝0の解はx＝(−b±√(b²−4ac))/(2a)。ここでは実数解を持つ式を扱い、因数分解・平方根・公式を式に応じて使い分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "2x²＋x−1＝0ではa＝2,b＝1,c＝−1。根号内は9、分母は4となり、x＝(−1±3)/4から1/2と−1。分母2aは−bと根号の両方を含む分子全体を割る。根号内が0の場合、±0は同じ値なので異なる二解にはならない。求めた値を代入することも確認に使える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材の2x²＋x−1＝0からa＝2,b＝1,c＝−1を読み取る。cの負符号を保つとb²−4ac＝9となり、解1/2と−1を得る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "解の公式を分数の枠で描く。上の枠には−b±√(b²−4ac)全体、下には2aを入れ、一部分だけを割る誤りを防ぐ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "x²＋x−1＝0のa,b,cは？ 正答：1、1、−1。 定数項−1の符号も係数cに含む。 考える手がかり：標準形へ対応させる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "x²＋x−1＝0で、b²−4acの値は？ 正答：5。 1−4×1×(−1)＝5。 考える手がかり：cを括弧付きで代入する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "x²＋x−1＝0の解は？ 正答：(−1＋√5)/2と(−1−√5)/2。 −b＝−1、分母2a＝2で分子全体を割る。 考える手がかり：−bの符号と分数の括弧を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "2x²＋x−1＝0で、解の公式の分母2aはいくつ？ 正答：4。 a＝2なので2a＝4。 考える手がかり：x²の係数を読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "2x²＋x−1＝0の解は？ 正答：1/2と−1。 (−1＋3)/4＝1/2、(−1−3)/4＝−1。 考える手がかり：正負の枝を両方計算する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "x²−4x＋4＝0で根号の中が0のとき、解は？ 正答：2だけ。 x＝(4±0)/2＝2。 考える手がかり：±0は異なる二数ではない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "解の公式をa＝0のまま使える？ 正答：使えない。分母2aが0になる。 a≠0が二次方程式と公式の前提。 考える手がかり：公式の分母を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "x²−7x＋12＝0の解き方として正しいのは？ 正答：因数分解でも解の公式でもよい。 どちらも同じ方程式の解3,4を得る。 考える手がかり：式の形に合う方法を選べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：解の公式でb＝−3なら、分子の−bは？ 正答：3。 −(−3)＝3。 考える手がかり：係数bの符号ごと反対にする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "2x²＋x−1＝0で、解の公式へ入れる係数と解を説明しよう。 根号内が0のとき、異なる二つの解になる？ a＝2,b＝1,c＝−1で根号内9、分母4。解は1/2と−1。根号内0なら正負の枝が同じ値になる。 確認項目：a,b,cの符号と分子全体を保った。 / 二つの枝と重なる場合を区別した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "x²＋x−1＝0を解の公式で解こう。 a＝1,b＝1,c＝−1を符号付きで読み取る。 b²−4ac＝1−4×1×(−1)＝5を求める。 −b＝−1、2a＝2を使い、x＝(−1±√5)/2とする。 正負の二つを分け、(−1＋√5)/2と(−1−√5)/2を解とする。 結論：x＝(−1＋√5)/2、(−1−√5)/2",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「解の公式では、根号の部分だけを2aで割る。」は誤り。2aで割るのは−b±√(b²−4ac)という分子全体。分数線や括弧でまとまりを保つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "a≠0,b²−4ac≥0のax²+bx+c=0の解は(−b±√(b²−4ac))/(2a)。根号内0なら解は一つ。x²+x−1=0は(−1±√5)/2、2x²+x−1=0は1/2,−1。 操作図の範囲：操作例x²＋x−1=0はa1,b1,c−1でb²−4ac=5、解(−1±√5)/2。2x²−5x＋2=0はa2,b−5,c2、平方根の中9、解1/2,2。x²−4x＋4=0はa1,b−4,c4、平方根の中0、解2のみ。a≠0、b²−4ac≥0で、分母2aが分子全体を割る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233132200000",
    "grade": 9,
    "title": "二次方程式の活用",
    "domain": "A",
    "order": 22,
    "goal": "面積や整数の場面を立式し、全ての数学的解から場面の条件を満たす答えを選ぶ。",
    "coverageCodes": [
      "8350232100000000",
      "8350232200000000",
      "8350232300000000",
      "8350233132200000",
      "8350233511000000",
      "8350233513000000",
      "8350235200000000",
      "8350235300000000"
    ],
    "explanations": {
      "es": {
        "short": "場面を式へ表し、二次方程式の全ての解を求めよう。その後で、長さは正、個数は整数などの条件に合う答えを選ぶよ。",
        "detail": "架空の長方形で横x cm、縦x＋3 cm、面積40cm²ならx(x＋3)＝40。x²＋3x−40＝0を因数分解すると(x＋8)(x−5)＝0で、数学的な解は−8と5。横の長さはx>0なので5cmを選び、縦8cmとの積40cm²も確かめる。"
      },
      "js": {
        "short": "求める数量を文字で表し、等しい数量の二つの表現から方程式を立てる。全ての実数解を求め、元の場面の正値・整数・範囲などを照合して答えを決める。",
        "detail": "正の連続する二整数の積が20なら、小さい方を正の整数nとしn(n＋1)＝20。因数分解でn＝4,−5を得るが、正の条件から4を選び、二数は4と5。長さや個数という条件を式変形の途中で勝手に消さず、答えの単位と元の数量関係まで戻って確かめる。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "面積から板の辺を決める",
        "text": "架空の板で横x cm、縦x＋3 cm、面積40cm²を条件にする。方程式の解は5と−8だが、板の長さには正の5cmを用いる。縦は8cmとなる。",
        "activityIds": [
          "craft-cardboard"
        ]
      },
      {
        "category": "programming",
        "title": "候補を条件で分ける",
        "text": "教材で正の連続する二整数の積20を扱う。方程式の小さい方の解4と−5を保存し、正の整数という条件を調べると4だけが場面に合う。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "横x cm、縦x＋3 cm、面積40cm²の長方形を表す式は？",
        "options": [
          "x(x＋3)＝40",
          "x＋x＋3＝40",
          "3x＝40"
        ],
        "answer": "x(x＋3)＝40",
        "explanation": "面積は縦と横の積。",
        "hint": "等しい数量を同じ単位で表す。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²＋3x−40＝0の解は？",
        "options": [
          "−5と8",
          "5だけ",
          "5と−8"
        ],
        "answer": "5と−8",
        "explanation": "(x＋8)(x−5)＝0なので二つの数学的解。",
        "hint": "まず場面条件を使わず全ての解を求める。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "横x cm、縦x＋3 cm、面積40cm²の長方形で、横の長さxは？",
        "answer": 5,
        "explanation": "解5と−8から長さx>0に合う5を選ぶ。",
        "hint": "負の候補を捨てる理由は長さの条件。",
        "suffix": "cm",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "横x cm、縦x＋3 cm、面積40cm²の長方形の問題で、解−8を答えにしない理由は？",
        "options": [
          "長さx>0という条件に合わない",
          "二次方程式の解ではない",
          "負の数を二乗できない"
        ],
        "answer": "長さx>0という条件に合わない",
        "explanation": "−8は方程式には合うが長さには合わない。",
        "hint": "式の解と場面の答えを区別する。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "正の連続する二整数の小さい方をnとする。積20の式は？",
        "options": [
          "n(n＋2)＝20",
          "2n＋1＝20",
          "n(n＋1)＝20"
        ],
        "answer": "n(n＋1)＝20",
        "explanation": "次の整数はn＋1で、積を等号で結ぶ。",
        "hint": "連続と積という二つの言葉を式へ置く。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "正の連続する二整数の積が20のとき、小さい方はいくつ？",
        "answer": 4,
        "explanation": "n²＋n−20＝(n＋5)(n−4)＝0。正のnは4。",
        "hint": "大きい方と掛けて確かめる。",
        "suffix": "",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "正の連続する二整数の積20でn＝4を得た後、確認する組は？",
        "options": [
          "4と5で4×5＝20",
          "4と6で4×6＝24",
          "−5と−4だけ"
        ],
        "answer": "4と5で4×5＝20",
        "explanation": "求めた小さい方からもう一つの整数を戻す。",
        "hint": "答えの二数が元の条件を満たすか調べる。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "場面の問題を二次方程式で解くとき、最後に必要なのは？",
        "options": [
          "二つの解のうち大きい方をいつも選ぶ",
          "負の解を理由なしに全て消す",
          "解が場面の条件と単位に合うか確かめる"
        ],
        "answer": "解が場面の条件と単位に合うか確かめる",
        "explanation": "許される値は場面によって異なる。",
        "hint": "何をxと置いたかへ戻る。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：正の長さxとx＋3の積が40なら、x＝5は条件に合う？",
      "options": [
        "合わない。x＋3を計算してはいけない",
        "合う。5×8＝40",
        "合わない。二解だから選べない"
      ],
      "answer": "合う。5×8＝40",
      "explanation": "横も縦も正で面積40を満たす。",
      "hint": "全ての条件を同時に確認する。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "式の解を場面へ戻す",
      "prompt": "横より縦が3cm長く、面積40cm²の長方形の辺を求めよう。",
      "steps": [
        {
          "text": "横をx cmと置く。長さだからx>0、縦はx＋3 cm。"
        },
        {
          "text": "面積からx(x＋3)＝40、整理してx²＋3x−40＝0。"
        },
        {
          "text": "(x＋8)(x−5)＝0より数学的な解は−8と5。"
        },
        {
          "text": "x>0に合う5を選ぶ。縦8cmで、5×8＝40cm²と確認する。"
        }
      ],
      "answer": "横5cm、縦8cm。",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "二次方程式の解が出たら、二つともそのまま場面の答えにする。",
      "correction": "数学的な解でも、長さが正などの場面条件に合わない場合がある。何を文字で表したかへ戻って選ぶ。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "長方形の面積の方程式で、解5と−8から5を選ぶ理由を説明しよう。",
        "followUp": "正の連続整数の問題では、どんな条件を確かめる？",
        "checkpoints": [
          "方程式の全解を求めた後で場面へ戻った。",
          "正値・整数・単位と元の関係を確認した。"
        ],
        "sample": "横の長さxは正なので5を選び、縦8との積を確認する。正の連続整数なら整数で正であることと差1、指定の積を確かめる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "場面を式へ表し、二次方程式の全ての解を求めよう。その後で、長さは正、個数は整数などの条件に合う答えを選ぶよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "架空の長方形で横x cm、縦x＋3 cm、面積40cm²ならx(x＋3)＝40。x²＋3x−40＝0を因数分解すると(x＋8)(x−5)＝0で、数学的な解は−8と5。横の長さはx>0なので5cmを選び、縦8cmとの積40cm²も確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "求める数量を文字で表し、等しい数量の二つの表現から方程式を立てる。全ての実数解を求め、元の場面の正値・整数・範囲などを照合して答えを決める。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "正の連続する二整数の積が20なら、小さい方を正の整数nとしn(n＋1)＝20。因数分解でn＝4,−5を得るが、正の条件から4を選び、二数は4と5。長さや個数という条件を式変形の途中で勝手に消さず、答えの単位と元の数量関係まで戻って確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の板で横x cm、縦x＋3 cm、面積40cm²を条件にする。方程式の解は5と−8だが、板の長さには正の5cmを用いる。縦は8cmとなる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材で正の連続する二整数の積20を扱う。方程式の小さい方の解4と−5を保存し、正の整数という条件を調べると4だけが場面に合う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "横x cm、縦x＋3 cm、面積40cm²の長方形を表す式は？ 正答：x(x＋3)＝40。 面積は縦と横の積。 考える手がかり：等しい数量を同じ単位で表す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "x²＋3x−40＝0の解は？ 正答：5と−8。 (x＋8)(x−5)＝0なので二つの数学的解。 考える手がかり：まず場面条件を使わず全ての解を求める。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "横x cm、縦x＋3 cm、面積40cm²の長方形で、横の長さxは？ 正答：5。 解5と−8から長さx>0に合う5を選ぶ。 考える手がかり：負の候補を捨てる理由は長さの条件。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "横x cm、縦x＋3 cm、面積40cm²の長方形の問題で、解−8を答えにしない理由は？ 正答：長さx>0という条件に合わない。 −8は方程式には合うが長さには合わない。 考える手がかり：式の解と場面の答えを区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "正の連続する二整数の小さい方をnとする。積20の式は？ 正答：n(n＋1)＝20。 次の整数はn＋1で、積を等号で結ぶ。 考える手がかり：連続と積という二つの言葉を式へ置く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "正の連続する二整数の積が20のとき、小さい方はいくつ？ 正答：4。 n²＋n−20＝(n＋5)(n−4)＝0。正のnは4。 考える手がかり：大きい方と掛けて確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "正の連続する二整数の積20でn＝4を得た後、確認する組は？ 正答：4と5で4×5＝20。 求めた小さい方からもう一つの整数を戻す。 考える手がかり：答えの二数が元の条件を満たすか調べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "場面の問題を二次方程式で解くとき、最後に必要なのは？ 正答：解が場面の条件と単位に合うか確かめる。 許される値は場面によって異なる。 考える手がかり：何をxと置いたかへ戻る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：正の長さxとx＋3の積が40なら、x＝5は条件に合う？ 正答：合う。5×8＝40。 横も縦も正で面積40を満たす。 考える手がかり：全ての条件を同時に確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "長方形の面積の方程式で、解5と−8から5を選ぶ理由を説明しよう。 正の連続整数の問題では、どんな条件を確かめる？ 横の長さxは正なので5を選び、縦8との積を確認する。正の連続整数なら整数で正であることと差1、指定の積を確かめる。 確認項目：方程式の全解を求めた後で場面へ戻った。 / 正値・整数・単位と元の関係を確認した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "横より縦が3cm長く、面積40cm²の長方形の辺を求めよう。 横をx cmと置く。長さだからx>0、縦はx＋3 cm。 面積からx(x＋3)＝40、整理してx²＋3x−40＝0。 (x＋8)(x−5)＝0より数学的な解は−8と5。 x>0に合う5を選ぶ。縦8cmで、5×8＝40cm²と確認する。 結論：横5cm、縦8cm。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「二次方程式の解が出たら、二つともそのまま場面の答えにする。」は誤り。数学的な解でも、長さが正などの場面条件に合わない場合がある。何を文字で表したかへ戻って選ぶ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "横x>0、縦x+3、面積40の長方形ではx²+3x−40=(x+8)(x−5)=0の解5,−8から5を採る。正の連続整数の積20ではn(n+1)=20の解4,−5から4を採る。 操作図の範囲：操作例は幅x>0、高さx＋3の長方形で面積40。x(x＋3)=40をx²＋3x−40=0へ直し、(x＋8)(x−5)=0の実数解−8,5を得る。長さの条件から−8を除き幅5、高さ8、面積40を確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233311100000",
    "grade": 9,
    "title": "関数y=ax²の表と式",
    "domain": "C",
    "order": 23,
    "goal": "yがxの二乗に比例する対応を表から捉え、0でないxで比例定数aを求める。",
    "coverageCodes": [
      "8350233311100000",
      "8350233312100000"
    ],
    "explanations": {
      "es": {
        "short": "yがxの二乗に比例するとき、y＝ax²と表す。ここではa≠0を扱うよ。xが0でないとき、yをx²で割るといつもaになる。",
        "detail": "y＝2x²でx＝−2,−1,0,1,2を順に入れると、yは8,2,0,2,8。負のxも先に二乗するので、xと−xには同じyが対応する。x≠0のところでy÷x²を見ると2で一定。y÷xが一定になる比例y＝axとは、調べる割り算が違う。"
      },
      "js": {
        "short": "aを0でない定数としてy＝ax²を考える。x≠0でy/x²＝aが一定となる関係であり、xをm倍したときの対応値はm²倍になる。",
        "detail": "y＝ax²で点(2,8)を通るなら8＝4aよりa＝2。点(0,0)だけでは0＝a×0となりaを一つに決められない。xが負でもx²は正なので、0でないxに対応するyの符号はaの符号と一致する。a＝0の一定関数y＝0は、ここで調べる二乗に比例する関数の比較として区別する。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "正方形の面積を表にする",
        "text": "正の一辺x cmの正方形の面積y cm²はy＝x²。辺を2倍にすると面積は4倍となる。負のxまで含む関数表を作るときは、辺の長さの場面とは分ける。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "二乗してからかける",
        "text": "教材の規則y＝2x²へx＝−2を入力する。先に(−2)²＝4、次に2倍して8。−2を二乗する括弧を保つ。",
        "activityIds": [
          "prog-scratch"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "y＝2x²でx＝3のときyは？",
        "answer": 18,
        "explanation": "2×3²＝2×9＝18。",
        "hint": "二乗してから2倍する。",
        "suffix": "",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "y＝2x²でx＝−2のときyは？",
        "answer": 8,
        "explanation": "2×(−2)²＝8。",
        "hint": "負の入力を括弧で囲む。",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "y＝ax²が点(2,8)を通る。aは？",
        "answer": 2,
        "explanation": "8＝a×4なのでa＝2。",
        "hint": "x²の値でyを割る。",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝ax²でx≠0のとき一定になる商は？",
        "options": [
          "y/x",
          "x/y²",
          "y/x²"
        ],
        "answer": "y/x²",
        "explanation": "y＝a×x²よりy/x²＝a。",
        "hint": "二乗に比例する相手の量を見る。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝2x²でx＝−3と3のyは？",
        "options": [
          "どちらも6",
          "どちらも18",
          "−18と18"
        ],
        "answer": "どちらも18",
        "explanation": "二乗はどちらも9なので同じ18。",
        "hint": "xと−xの二乗を比べる。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝ax²でaを求める情報として、(0,0)だけでは？",
        "options": [
          "aを一つに決められない",
          "a＝0と決まる",
          "a＝1と決まる"
        ],
        "answer": "aを一つに決められない",
        "explanation": "どのaでもa×0²＝0となる。",
        "hint": "0で割ってaを取り出さない。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝3x²でx≠0とし、xを2倍したとき対応するyは何倍？",
        "options": [
          "2倍",
          "6倍",
          "4倍"
        ],
        "answer": "4倍",
        "explanation": "3(2x)²＝4×3x²。",
        "hint": "入力の倍率も二乗される。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "この教材でa≠0のy＝ax²と、a＝0のy＝0は？",
        "options": [
          "a＝0でもy/x²は必ず1",
          "後者は一定の関数として比較する",
          "どちらも同じ放物線"
        ],
        "answer": "後者は一定の関数として比較する",
        "explanation": "a＝0では全てのyが0となる。",
        "hint": "二乗の係数が消える場合を分ける。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：y＝−x²でx＝2を入れると？",
      "options": [
        "−4",
        "4",
        "−2"
      ],
      "answer": "−4",
      "explanation": "x²＝4を先に求め、係数−1をかける。",
      "hint": "−x²と(−x)²を区別する。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "対応から係数を求める",
      "prompt": "y＝ax²が点(3,18)を通るとき、式を求めよう。",
      "steps": [
        {
          "text": "x＝3,y＝18をy＝ax²へ入れる。"
        },
        {
          "text": "18＝a×9と、先にxを二乗する。"
        },
        {
          "text": "0でない9で両辺を割りa＝2。"
        },
        {
          "text": "式はy＝2x²。x＝3を入れ直すと18になる。"
        }
      ],
      "answer": "y＝2x²",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "y＝ax²のaは、いつでもy÷xで求める。",
      "correction": "x≠0のときy÷x²で求める。y＝2x²の点(2,8)なら8÷4＝2であり、8÷2＝4ではない。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "y＝ax²でy/x²を調べる理由を説明しよう。",
        "followUp": "(0,0)だけではaを一つに決められないのはなぜ？",
        "checkpoints": [
          "割る量がx²であると述べた。",
          "商を使うときx≠0を保った。"
        ],
        "sample": "yはx²にaをかけた量なのでx≠0ならy/x²＝a。(0,0)はどのaでも通り、0で割ってaを決めることはできない。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "yがxの二乗に比例するとき、y＝ax²と表す。ここではa≠0を扱うよ。xが0でないとき、yをx²で割るといつもaになる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "y＝2x²でx＝−2,−1,0,1,2を順に入れると、yは8,2,0,2,8。負のxも先に二乗するので、xと−xには同じyが対応する。x≠0のところでy÷x²を見ると2で一定。y÷xが一定になる比例y＝axとは、調べる割り算が違う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "aを0でない定数としてy＝ax²を考える。x≠0でy/x²＝aが一定となる関係であり、xをm倍したときの対応値はm²倍になる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "y＝ax²で点(2,8)を通るなら8＝4aよりa＝2。点(0,0)だけでは0＝a×0となりaを一つに決められない。xが負でもx²は正なので、0でないxに対応するyの符号はaの符号と一致する。a＝0の一定関数y＝0は、ここで調べる二乗に比例する関数の比較として区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "正の一辺x cmの正方形の面積y cm²はy＝x²。辺を2倍にすると面積は4倍となる。負のxまで含む関数表を作るときは、辺の長さの場面とは分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材の規則y＝2x²へx＝−2を入力する。先に(−2)²＝4、次に2倍して8。−2を二乗する括弧を保つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "y＝2x²でx＝3のときyは？ 正答：18。 2×3²＝2×9＝18。 考える手がかり：二乗してから2倍する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "y＝2x²でx＝−2のときyは？ 正答：8。 2×(−2)²＝8。 考える手がかり：負の入力を括弧で囲む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "y＝ax²が点(2,8)を通る。aは？ 正答：2。 8＝a×4なのでa＝2。 考える手がかり：x²の値でyを割る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "y＝ax²でx≠0のとき一定になる商は？ 正答：y/x²。 y＝a×x²よりy/x²＝a。 考える手がかり：二乗に比例する相手の量を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "y＝2x²でx＝−3と3のyは？ 正答：どちらも18。 二乗はどちらも9なので同じ18。 考える手がかり：xと−xの二乗を比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "y＝ax²でaを求める情報として、(0,0)だけでは？ 正答：aを一つに決められない。 どのaでもa×0²＝0となる。 考える手がかり：0で割ってaを取り出さない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "y＝3x²でx≠0とし、xを2倍したとき対応するyは何倍？ 正答：4倍。 3(2x)²＝4×3x²。 考える手がかり：入力の倍率も二乗される。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "この教材でa≠0のy＝ax²と、a＝0のy＝0は？ 正答：後者は一定の関数として比較する。 a＝0では全てのyが0となる。 考える手がかり：二乗の係数が消える場合を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：y＝−x²でx＝2を入れると？ 正答：−4。 x²＝4を先に求め、係数−1をかける。 考える手がかり：−x²と(−x)²を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "y＝ax²でy/x²を調べる理由を説明しよう。 (0,0)だけではaを一つに決められないのはなぜ？ yはx²にaをかけた量なのでx≠0ならy/x²＝a。(0,0)はどのaでも通り、0で割ってaを決めることはできない。 確認項目：割る量がx²であると述べた。 / 商を使うときx≠0を保った。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "y＝ax²が点(3,18)を通るとき、式を求めよう。 x＝3,y＝18をy＝ax²へ入れる。 18＝a×9と、先にxを二乗する。 0でない9で両辺を割りa＝2。 式はy＝2x²。x＝3を入れ直すと18になる。 結論：y＝2x²",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「y＝ax²のaは、いつでもy÷xで求める。」は誤り。x≠0のときy÷x²で求める。y＝2x²の点(2,8)なら8÷4＝2であり、8÷2＝4ではない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "a≠0でy=ax²、x≠0ならy/x²=a。y(−x)=y(x)、y(mx)=m²y(x)。y=2x²のx=−2,−1,0,1,2はy=8,2,0,2,8。a=0は一定関数の比較。 操作図の範囲：操作例a=−2,−1,1,2のy=ax²。選ぶ整数x=−3..3、表のx=−2,−1,0,1,2に対しy=a×x×x。x≠0ならy/x²=a、x=0では商を作らずy=0。xをm倍した値はm²倍になり、比として述べるときは元のx≠0とする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233311000000",
    "grade": 9,
    "title": "関数y=ax²のグラフ",
    "domain": "C",
    "order": 24,
    "goal": "固定座標で点と曲線を対応させ、軸の対称性、aの符号と開き方を説明する。",
    "coverageCodes": [
      "8350233311000000",
      "8350233311100000",
      "8350233312100000"
    ],
    "explanations": {
      "es": {
        "short": "a≠0のy＝ax²を、xが数直線上の全ての数を取るグラフにすると放物線になる。y軸の左右で形が重なり、aが正なら上、負なら下へ開くよ。",
        "detail": "y＝x²では(−2,4),(−1,1),(0,0),(1,1),(2,4)を通る。同じ絶対値のxに同じyが対応するのでy軸に対称。グラフは点をまっすぐにつないだ折れ線ではなく、式の関係を満たす滑らかな曲線。表示する窓の外にも続く全体と、画面に見える部分を分けて考えよう。"
      },
      "js": {
        "short": "a≠0で、全ての実数xに対するy＝ax²のグラフは原点を通りy軸に対称な放物線。a>0なら上向き、a<0なら下向きである。",
        "detail": "同じ座標軸と目盛でy＝x²とy＝2x²を比べると、x＝1でyは1と2になる。a>0でaが大きいほど、同じ正のyに達するxの絶対値が小さくなり、開きは狭くなる。y＝−x²はy＝x²をx軸について反転した曲線。a＝0のy＝0は直線であり放物線に含めない。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "左右の対応を重ねる",
        "text": "教材の固定座標でy＝x²の(−2,4)と(2,4)を描く。y軸からの距離は同じで高さも同じ。点の位置を合わせるために目盛を動かさない。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "点を増やして形を見る",
        "text": "y＝x²の表にx＝0.5の点(0.5,0.25)も追加する。(0,0)と(1,1)を直線で結んだ位置(0.5,0.5)とは違うので、折れ線を正しいグラフとしない。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "全ての実数xに対するy＝x²のグラフの形は？",
        "options": [
          "下へ開く放物線",
          "上へ開く放物線",
          "原点を通る直線"
        ],
        "answer": "上へ開く放物線",
        "explanation": "二乗の対応は変化の割合が一定でなく曲線になる。",
        "hint": "負と正のxの表を作る。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝x²のグラフが対称になる軸は？",
        "options": [
          "y軸",
          "x軸",
          "y＝xの直線"
        ],
        "answer": "y軸",
        "explanation": "xと−xに同じyが対応する。",
        "hint": "左右の点の高さを比べる。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "y＝−x²でx＝2の点のy座標は？",
        "answer": -4,
        "explanation": "−(2²)＝−4。",
        "hint": "二乗の後に負の係数をかける。",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "同じ座標軸でy＝x²とy＝2x²を比べる。x＝1のyの組は？",
        "options": [
          "2と1",
          "1と2",
          "1と4"
        ],
        "answer": "1と2",
        "explanation": "同じxを二つの式へ代入して比較する。",
        "hint": "片方の目盛を変えない。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "x＝0.5のときy＝x²を通る点は？",
        "options": [
          "(0.5,0.25)",
          "(0.5,0.5)",
          "(0.5,1)"
        ],
        "answer": "(0.5,0.25)",
        "explanation": "0.5²＝0.25。二点間の直線補間とは違う。",
        "hint": "式の値から点を決める。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "全ての実数xに対するy＝−2x²の開く向きは？",
        "options": [
          "上向き",
          "右向き",
          "下向き"
        ],
        "answer": "下向き",
        "explanation": "x≠0ではy<0で、y軸対称に下へ伸びる。",
        "hint": "係数aの符号を見る。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "全ての実数xに対するy＝ax²でa＝0の場合は？",
        "options": [
          "円",
          "y＝0の直線",
          "狭い放物線"
        ],
        "answer": "y＝0の直線",
        "explanation": "全てのxでy＝0となる。",
        "hint": "a≠0という前提を外した場合を分ける。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "画面では−2≤x≤2だけを表示するy＝x²について正しいのは？",
        "options": [
          "表示外にも式を満たす点がある",
          "全ての実数のグラフがx＝2で終わる",
          "表示外のxは二乗できない"
        ],
        "answer": "表示外にも式を満たす点がある",
        "explanation": "表示窓は数学的な変域を自動的に制限しない。",
        "hint": "画面の範囲と問題の変域を区別する。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：y＝x²に点(−3,9)があるなら、対称な点は？",
      "options": [
        "(−3,−9)",
        "(9,3)",
        "(3,9)"
      ],
      "answer": "(3,9)",
      "explanation": "y軸対称なのでxの符号だけ反対になる。",
      "hint": "高さを保ったまま左右を反転する。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "表の点から放物線へ",
      "prompt": "y＝x²のグラフの特徴を確かめよう。",
      "steps": [
        {
          "text": "x＝−2,−1,0,1,2に対してy＝4,1,0,1,4を求める。"
        },
        {
          "text": "同じ原点と目盛の座標上に五つの点を置く。"
        },
        {
          "text": "xと−xの高さが同じなのでy軸に対称と分かる。"
        },
        {
          "text": "さらに中間のxにも対応する点があり、式を満たす上向きの曲線になる。全数のグラフと表示窓は区別する。"
        }
      ],
      "answer": "原点を通り、y軸に対称な上向きの放物線。",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "表の点を直線でつなげば、それがそのままy＝x²のグラフである。",
      "correction": "中間の値も式を満たす必要がある。x＝0.5ならy＝0.25であり、(0,0)と(1,1)を結ぶ直線上の0.5とは異なる。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "y＝x²のグラフがy軸に対称になる理由を説明しよう。",
        "followUp": "aを負にすると、点のy座標と開く向きはどう変わる？",
        "checkpoints": [
          "xと−xの二乗が等しいことを示した。",
          "同じ軸で係数の符号を比較した。"
        ],
        "sample": "x²＝(−x)²なので左右で同じ高さになる。係数を負にすると0でないxのyが負になり、下向きの放物線になる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "a≠0のy＝ax²を、xが数直線上の全ての数を取るグラフにすると放物線になる。y軸の左右で形が重なり、aが正なら上、負なら下へ開くよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "y＝x²では(−2,4),(−1,1),(0,0),(1,1),(2,4)を通る。同じ絶対値のxに同じyが対応するのでy軸に対称。グラフは点をまっすぐにつないだ折れ線ではなく、式の関係を満たす滑らかな曲線。表示する窓の外にも続く全体と、画面に見える部分を分けて考えよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "a≠0で、全ての実数xに対するy＝ax²のグラフは原点を通りy軸に対称な放物線。a>0なら上向き、a<0なら下向きである。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "同じ座標軸と目盛でy＝x²とy＝2x²を比べると、x＝1でyは1と2になる。a>0でaが大きいほど、同じ正のyに達するxの絶対値が小さくなり、開きは狭くなる。y＝−x²はy＝x²をx軸について反転した曲線。a＝0のy＝0は直線であり放物線に含めない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材の固定座標でy＝x²の(−2,4)と(2,4)を描く。y軸からの距離は同じで高さも同じ。点の位置を合わせるために目盛を動かさない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "y＝x²の表にx＝0.5の点(0.5,0.25)も追加する。(0,0)と(1,1)を直線で結んだ位置(0.5,0.5)とは違うので、折れ線を正しいグラフとしない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "全ての実数xに対するy＝x²のグラフの形は？ 正答：上へ開く放物線。 二乗の対応は変化の割合が一定でなく曲線になる。 考える手がかり：負と正のxの表を作る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "y＝x²のグラフが対称になる軸は？ 正答：y軸。 xと−xに同じyが対応する。 考える手がかり：左右の点の高さを比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "y＝−x²でx＝2の点のy座標は？ 正答：-4。 −(2²)＝−4。 考える手がかり：二乗の後に負の係数をかける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "同じ座標軸でy＝x²とy＝2x²を比べる。x＝1のyの組は？ 正答：1と2。 同じxを二つの式へ代入して比較する。 考える手がかり：片方の目盛を変えない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "x＝0.5のときy＝x²を通る点は？ 正答：(0.5,0.25)。 0.5²＝0.25。二点間の直線補間とは違う。 考える手がかり：式の値から点を決める。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "全ての実数xに対するy＝−2x²の開く向きは？ 正答：下向き。 x≠0ではy<0で、y軸対称に下へ伸びる。 考える手がかり：係数aの符号を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "全ての実数xに対するy＝ax²でa＝0の場合は？ 正答：y＝0の直線。 全てのxでy＝0となる。 考える手がかり：a≠0という前提を外した場合を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "画面では−2≤x≤2だけを表示するy＝x²について正しいのは？ 正答：表示外にも式を満たす点がある。 表示窓は数学的な変域を自動的に制限しない。 考える手がかり：画面の範囲と問題の変域を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：y＝x²に点(−3,9)があるなら、対称な点は？ 正答：(3,9)。 y軸対称なのでxの符号だけ反対になる。 考える手がかり：高さを保ったまま左右を反転する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "y＝x²のグラフがy軸に対称になる理由を説明しよう。 aを負にすると、点のy座標と開く向きはどう変わる？ x²＝(−x)²なので左右で同じ高さになる。係数を負にすると0でないxのyが負になり、下向きの放物線になる。 確認項目：xと−xの二乗が等しいことを示した。 / 同じ軸で係数の符号を比較した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "y＝x²のグラフの特徴を確かめよう。 x＝−2,−1,0,1,2に対してy＝4,1,0,1,4を求める。 同じ原点と目盛の座標上に五つの点を置く。 xと−xの高さが同じなのでy軸に対称と分かる。 さらに中間のxにも対応する点があり、式を満たす上向きの曲線になる。全数のグラフと表示窓は区別する。 結論：原点を通り、y軸に対称な上向きの放物線。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「表の点を直線でつなげば、それがそのままy＝x²のグラフである。」は誤り。中間の値も式を満たす必要がある。x＝0.5ならy＝0.25であり、(0,0)と(1,1)を結ぶ直線上の0.5とは異なる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "a≠0、全実数xのy=ax²は原点を通りy軸に対称な放物線。a正で上、負で下。a=0はy=0の直線。y=x²の中間点(0.5,0.25)は整数点間の直線補間と異なる。固定座標・表示窓を保つ。 操作図の範囲：操作例a=−2,−1,1,2のy=ax²。xが数直線上の全ての数をとるグラフは原点を頂点としy軸に対称な放物線で、a>0は上へ、a<0は下へ開く。表示例はx=−3から3まで0.5刻みの13点と式に沿う曲線。表示窓は全変域ではなく一部。a=0の一定関数を放物線としない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "motion",
        "text": "四段説明の式はy=x²、表示範囲のxは−3..3、0.5刻みの13点をy=x²に置く。xと−xは同じyでy軸対称、原点が頂点。固定軸上で式に沿う曲線を示し、点間を直線でつないだものを放物線とはしない。xが1→2ではy1→4で変化の割合3、2→3では4→9で変化の割合5となる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233312100000",
    "grade": 9,
    "title": "関数y=ax²の変域と変化の割合",
    "domain": "C",
    "order": 25,
    "goal": "0を含むかでyの変域を判断し、区間ごとの変化の割合が異なることを説明する。",
    "coverageCodes": [
      "8350233311100000",
      "8350233312100000"
    ],
    "explanations": {
      "es": {
        "short": "y＝ax²（a≠0）の変域は、xの区間に0が入るかも調べよう。異なる二つのxの間の変化の割合は、yの増加量をxの増加量で割って求めるよ。",
        "detail": "y＝x²で−2≤x≤3なら、x＝0で最小のy＝0、端では4と9なので最大は9。したがって0≤y≤9。端の二つの値だけでは最小を見落とす。変化の割合はxが1から2なら(4−1)/(2−1)＝3、2から3なら(9−4)/(3−2)＝5で、区間によって違う。"
      },
      "js": {
        "short": "閉区間でのy＝ax²の変域は、端点と0を含むかで決める。x₁≠x₂の変化の割合は(y₂−y₁)/(x₂−x₁)であり、一般に一定ではない。",
        "detail": "y＝−x²で−3≤x≤2なら、最小はx＝−3の−9、最大はx＝0の0となる。正のaの場合と最大・最小の向きが逆になる。y＝ax²の異なる二点間の変化の割合はa(x₁＋x₂)と表せるが、この式もx₂−x₁≠0の商から導く。x＝−2から2で平均の変化が0でも、区間全体でyが一定という意味ではない。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "区間の中の0も調べる",
        "text": "教材でy＝x²、−2≤x≤3の最大・最小を求める。端の値4,9に加え、区間内の0でy＝0となることを確認し、0≤y≤9を得る。",
        "activityIds": [
          "prog-python"
        ]
      },
      {
        "category": "drawing",
        "title": "二点を結んで平均の変化を見る",
        "text": "y＝x²の(1,1)と(2,4)では、横の増加1に対し縦は3増える。(2,4)と(3,9)では縦が5増える。同じ固定目盛で二つの区間を比べる。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "y＝x²で−2≤x≤3のyの変域は？",
        "options": [
          "0≤y≤9",
          "4≤y≤9",
          "−2≤y≤3"
        ],
        "answer": "0≤y≤9",
        "explanation": "0を含むので最小0、端のうち大きい平方は9。",
        "hint": "区間内の0を見落とさない。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝x²で1≤x≤3のyの変域は？",
        "options": [
          "0≤y≤9",
          "1≤y≤3",
          "1≤y≤9"
        ],
        "answer": "1≤y≤9",
        "explanation": "この区間に0はなく、平方は1から9まで。",
        "hint": "全体の放物線の最小と区間の最小を分ける。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝−x²で−3≤x≤2の変域は？",
        "options": [
          "0≤y≤9",
          "−9≤y≤0",
          "−4≤y≤−9"
        ],
        "answer": "−9≤y≤0",
        "explanation": "0を含み最大0、絶対値の大きい−3で最小−9。",
        "hint": "係数が負なので上下が逆になる。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "y＝x²でxが1から2へ増えるときの変化の割合は？",
        "answer": 3,
        "explanation": "(4−1)/(2−1)＝3。",
        "hint": "yの増加量をxの増加量で割る。",
        "suffix": "",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "y＝x²でxが2から3へ増えるときの変化の割合は？",
        "answer": 5,
        "explanation": "(9−4)/(3−2)＝5。",
        "hint": "二つの点のyを式から求める。",
        "suffix": "",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "y＝2x²でxが−1から2へ増えるときの変化の割合は？",
        "answer": 2,
        "explanation": "yは2から8へ増え、(8−2)/(2−(−1))＝6/3＝2。",
        "hint": "xの増加量の引き算で負号を保つ。",
        "suffix": "",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "変化の割合(y₂−y₁)/(x₂−x₁)で必要なのは？",
        "options": [
          "x₁≠x₂",
          "y₁≠y₂",
          "両方のxが正"
        ],
        "answer": "x₁≠x₂",
        "explanation": "分母0を避けるため異なるxを選ぶ。",
        "hint": "yの増加量0は許される。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝x²でx＝−2から2の変化の割合が0なら？",
        "options": [
          "区間全体でy＝4",
          "どの区間の変化の割合も0",
          "両端のyが同じだけで、途中も一定とはいえない"
        ],
        "answer": "両端のyが同じだけで、途中も一定とはいえない",
        "explanation": "両端は4だが、途中のx＝0ではy＝0。",
        "hint": "平均の変化と途中の変化を分ける。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：y＝x²で−2≤x≤−1なら、最小のyは？",
      "options": [
        "4",
        "1",
        "0"
      ],
      "answer": "1",
      "explanation": "この区間ではx＝−1の平方1が最小。0は区間外。",
      "hint": "入力の区間を先に確かめる。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "端点と0から変域を求める",
      "prompt": "y＝x²、−2≤x≤3のyの変域を求めよう。",
      "steps": [
        {
          "text": "端点x＝−2と3を入れ、y＝4と9を得る。"
        },
        {
          "text": "区間にはx＝0が含まれるので、そのy＝0も調べる。"
        },
        {
          "text": "二乗は0以上で、区間内では|x|が最大3だから最大の平方は9。"
        },
        {
          "text": "最小0、最大9となり、端点も含むので0≤y≤9。"
        }
      ],
      "answer": "0≤y≤9",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "二次の関数の変域は、xの両端を入れた二つの値の間だけで決まる。",
      "correction": "0を含む区間では、途中のx＝0も最大・最小の候補になる。y＝x²、−2≤x≤3なら最小0を端点だけでは見落とす。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "y＝x²、−2≤x≤3で最小のyが4ではなく0になる理由を説明しよう。",
        "followUp": "変化の割合がある区間で0なら、全ての点のyが同じ？",
        "checkpoints": [
          "区間内の0と端点を調べた。",
          "平均の変化と関数全体の一定性を分けた。"
        ],
        "sample": "区間内のx＝0でy＝0となる。両端のyが同じなら変化の割合は0だが、途中は変わることがあり、一定とは限らない。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "y＝ax²（a≠0）の変域は、xの区間に0が入るかも調べよう。異なる二つのxの間の変化の割合は、yの増加量をxの増加量で割って求めるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "y＝x²で−2≤x≤3なら、x＝0で最小のy＝0、端では4と9なので最大は9。したがって0≤y≤9。端の二つの値だけでは最小を見落とす。変化の割合はxが1から2なら(4−1)/(2−1)＝3、2から3なら(9−4)/(3−2)＝5で、区間によって違う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "閉区間でのy＝ax²の変域は、端点と0を含むかで決める。x₁≠x₂の変化の割合は(y₂−y₁)/(x₂−x₁)であり、一般に一定ではない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "y＝−x²で−3≤x≤2なら、最小はx＝−3の−9、最大はx＝0の0となる。正のaの場合と最大・最小の向きが逆になる。y＝ax²の異なる二点間の変化の割合はa(x₁＋x₂)と表せるが、この式もx₂−x₁≠0の商から導く。x＝−2から2で平均の変化が0でも、区間全体でyが一定という意味ではない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材でy＝x²、−2≤x≤3の最大・最小を求める。端の値4,9に加え、区間内の0でy＝0となることを確認し、0≤y≤9を得る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "y＝x²の(1,1)と(2,4)では、横の増加1に対し縦は3増える。(2,4)と(3,9)では縦が5増える。同じ固定目盛で二つの区間を比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "y＝x²で−2≤x≤3のyの変域は？ 正答：0≤y≤9。 0を含むので最小0、端のうち大きい平方は9。 考える手がかり：区間内の0を見落とさない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "y＝x²で1≤x≤3のyの変域は？ 正答：1≤y≤9。 この区間に0はなく、平方は1から9まで。 考える手がかり：全体の放物線の最小と区間の最小を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "y＝−x²で−3≤x≤2の変域は？ 正答：−9≤y≤0。 0を含み最大0、絶対値の大きい−3で最小−9。 考える手がかり：係数が負なので上下が逆になる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "y＝x²でxが1から2へ増えるときの変化の割合は？ 正答：3。 (4−1)/(2−1)＝3。 考える手がかり：yの増加量をxの増加量で割る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "y＝x²でxが2から3へ増えるときの変化の割合は？ 正答：5。 (9−4)/(3−2)＝5。 考える手がかり：二つの点のyを式から求める。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "y＝2x²でxが−1から2へ増えるときの変化の割合は？ 正答：2。 yは2から8へ増え、(8−2)/(2−(−1))＝6/3＝2。 考える手がかり：xの増加量の引き算で負号を保つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "変化の割合(y₂−y₁)/(x₂−x₁)で必要なのは？ 正答：x₁≠x₂。 分母0を避けるため異なるxを選ぶ。 考える手がかり：yの増加量0は許される。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "y＝x²でx＝−2から2の変化の割合が0なら？ 正答：両端のyが同じだけで、途中も一定とはいえない。 両端は4だが、途中のx＝0ではy＝0。 考える手がかり：平均の変化と途中の変化を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：y＝x²で−2≤x≤−1なら、最小のyは？ 正答：1。 この区間ではx＝−1の平方1が最小。0は区間外。 考える手がかり：入力の区間を先に確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "y＝x²、−2≤x≤3で最小のyが4ではなく0になる理由を説明しよう。 変化の割合がある区間で0なら、全ての点のyが同じ？ 区間内のx＝0でy＝0となる。両端のyが同じなら変化の割合は0だが、途中は変わることがあり、一定とは限らない。 確認項目：区間内の0と端点を調べた。 / 平均の変化と関数全体の一定性を分けた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "y＝x²、−2≤x≤3のyの変域を求めよう。 端点x＝−2と3を入れ、y＝4と9を得る。 区間にはx＝0が含まれるので、そのy＝0も調べる。 二乗は0以上で、区間内では|x|が最大3だから最大の平方は9。 最小0、最大9となり、端点も含むので0≤y≤9。 結論：0≤y≤9",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「二次の関数の変域は、xの両端を入れた二つの値の間だけで決まる。」は誤り。0を含む区間では、途中のx＝0も最大・最小の候補になる。y＝x²、−2≤x≤3なら最小0を端点だけでは見落とす。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "a≠0のy=ax²の閉区間の変域は端点と区間内の0で調べる。y=x²,[−2,3]では[0,9]、[1,3]では[1,9]。y=−x²,[−3,2]では[−9,0]。x₁≠x₂で平均変化はa(x₁+x₂)。 操作図の範囲：操作例a=±1でy=ax²、xの区間は[−2,3],[1,2],[2,3],[−3,−1],[−2,2]。両端x₁<x₂の変化の割合はa(x₁＋x₂)。値域は端点のa x₁²,a x₂²と、区間に0を含む場合の0の最小・最大を比較する。端点だけで0の極値を落とさない。変化の割合は区間ごとの平均で、接線の傾きではない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233311200000",
    "grade": 9,
    "title": "二乗に比例する関係を見付ける",
    "domain": "C",
    "order": 26,
    "goal": "正方形などの面積や架空実験の対応から、二乗に比例すると考える根拠と限界を述べる。",
    "coverageCodes": [
      "8350233311200000",
      "8350233312200000",
      "8350233511000000"
    ],
    "explanations": {
      "es": {
        "short": "一辺が2倍の正方形は面積が4倍になる。このように二乗に比例する関係を、表や図から探そう。実験の少ない点だけで、どんな場合も同じ式とは決めないよ。",
        "detail": "正方形の一辺x cm（x>0）と面積y cm²なら、面積の公式からy＝x²。辺1,2,3に面積1,4,9が対応する。教材用の移動模型で「時刻t秒からの距離s cmをs＝t²（0≤t≤3）とする」と決めた場合も、同じ表が使える。図形の厳密な関係と、仮定した模型の規則を分けて説明しよう。"
      },
      "js": {
        "short": "数量の関係がy＝ax²と捉えられるか、0でないxでのy/x²や倍率を調べる。幾何の公式による厳密な関係と、実験値を近似して作るモデルは区別する。",
        "detail": "正方形の面積y＝x²は面積の公式から正の辺全体で成り立つ。架空の観測表がx＝1,2,3でy＝2,8,18なら、商y/x²が2なのでy＝2x²という候補が考えられる。ただし三点が合うだけで、未観測の全てのxにも必ず合うと証明したことにはならない。条件や誤差、追加の観測を確かめて適用範囲を考える。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "拡大した正方形の紙",
        "text": "架空の工作で正方形の一辺を2cmから6cmへ3倍にする。面積は4cm²から36cm²へ9倍になる。辺の倍率と面積の倍率を区別する。",
        "activityIds": [
          "craft-cardboard"
        ]
      },
      {
        "category": "programming",
        "title": "観測に合う規則を提案する",
        "text": "架空の観測で入力1,2,3に出力2,8,18が対応した。y/x²は全て2なのでy＝2x²を候補にするが、観測していない入力まで一致が保証されたとはいわない。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "一辺3cmの正方形の面積は？",
        "answer": 9,
        "explanation": "3×3＝9cm²。",
        "hint": "面積は辺の二乗。",
        "suffix": "cm²",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "正方形の一辺を3倍にすると面積は？",
        "options": [
          "6倍",
          "9倍",
          "3倍"
        ],
        "answer": "9倍",
        "explanation": "二つの辺がそれぞれ3倍なので3²＝9倍。",
        "hint": "縦と横を両方変える。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "架空の表でx＝1,2,3にy＝2,8,18が対応する。三点に合う式は？",
        "options": [
          "y＝2x²",
          "y＝2x",
          "y＝x²＋1"
        ],
        "answer": "y＝2x²",
        "explanation": "各xを二乗して2倍すると三つの値に一致。",
        "hint": "候補へ三つとも代入する。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "模型の設定をs＝t²cm、0≤t≤3秒とする。t＝2秒の距離sは？",
        "answer": 4,
        "explanation": "設定に従い2²＝4cm。",
        "hint": "実際の物体一般の法則と混ぜず、指定式を使う。",
        "suffix": "cm",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "三つの実験点がy＝2x²に合っただけで、未観測の全てのxでも一致と証明できる？",
        "options": [
          "できる。二乗の式だから",
          "できない。モデルの候補として確かめる",
          "できる。三点なら十分"
        ],
        "answer": "できない。モデルの候補として確かめる",
        "explanation": "有限の観測は未観測の全ての場合を証明しない。",
        "hint": "調べた範囲と主張の範囲を比べる。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "正の一辺xの正方形でy＝x²が成り立つ根拠は？",
        "options": [
          "面積が縦×横で、両方xだから",
          "三つの点を測ったからだけ",
          "画面で正方形に見えたからだけ"
        ],
        "answer": "面積が縦×横で、両方xだから",
        "explanation": "図形の定義と面積の公式から関係を導ける。",
        "hint": "厳密な条件から式を作る。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "number",
        "prompt": "正方形の一辺2cmを6cmへ変える。面積は何倍？",
        "answer": 9,
        "explanation": "36/4＝9。辺の3倍を二乗しても9。",
        "hint": "面積の比を求める。",
        "suffix": "倍",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "表からy/x²を調べるとき、x＝0の行はどうする？",
        "options": [
          "表全体を使えないとする",
          "その商は計算せず、元の式で対応を確認する",
          "0で割ってaを決める"
        ],
        "answer": "その商は計算せず、元の式で対応を確認する",
        "explanation": "x²＝0なので商は定義されないが、元の式は確認できる。",
        "hint": "除法と代入を区別する。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：一辺が2倍になった正方形では、面積も2倍になる？",
      "options": [
        "ならない。4倍になる",
        "なる。2倍になる",
        "変わらない"
      ],
      "answer": "ならない。4倍になる",
      "explanation": "縦も横も2倍なので積は4倍。",
      "hint": "二つの方向の倍率を見る。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "面積の対応から式へ",
      "prompt": "正方形の一辺x cm（x>0）と面積y cm²の関係を説明しよう。",
      "steps": [
        {
          "text": "面積は縦×横で、正方形の縦と横は同じx。"
        },
        {
          "text": "y＝x×x＝x²と表す。"
        },
        {
          "text": "x＝1,2,3ならy＝1,4,9で、y/x²＝1となる。"
        },
        {
          "text": "辺をm倍（m>0）にすれば面積はm²倍。表の例だけでなく面積公式が根拠になる。"
        }
      ],
      "answer": "y＝x²、辺のm倍に対して面積はm²倍。",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "いくつかの観測点が二乗の式に合えば、全ての条件で必ずその式が成り立つ。",
      "correction": "観測範囲外では違う関係になる可能性がある。式をモデルとして使う条件や誤差、追加の観測を確認する。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "正方形の面積と、三点から考えた実験モデルでは、式の根拠がどう違うか説明しよう。",
        "followUp": "モデルの式を広い範囲へ使う前に何を確認したい？",
        "checkpoints": [
          "面積公式による関係と観測による候補を区別した。",
          "適用範囲や誤差を確認する必要を述べた。"
        ],
        "sample": "正方形は辺が等しく面積が積なので式を導ける。実験の三点からの式は候補で、別の条件や範囲でも合うか追加で確認する。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "一辺が2倍の正方形は面積が4倍になる。このように二乗に比例する関係を、表や図から探そう。実験の少ない点だけで、どんな場合も同じ式とは決めないよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "正方形の一辺x cm（x>0）と面積y cm²なら、面積の公式からy＝x²。辺1,2,3に面積1,4,9が対応する。教材用の移動模型で「時刻t秒からの距離s cmをs＝t²（0≤t≤3）とする」と決めた場合も、同じ表が使える。図形の厳密な関係と、仮定した模型の規則を分けて説明しよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "数量の関係がy＝ax²と捉えられるか、0でないxでのy/x²や倍率を調べる。幾何の公式による厳密な関係と、実験値を近似して作るモデルは区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "正方形の面積y＝x²は面積の公式から正の辺全体で成り立つ。架空の観測表がx＝1,2,3でy＝2,8,18なら、商y/x²が2なのでy＝2x²という候補が考えられる。ただし三点が合うだけで、未観測の全てのxにも必ず合うと証明したことにはならない。条件や誤差、追加の観測を確かめて適用範囲を考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の工作で正方形の一辺を2cmから6cmへ3倍にする。面積は4cm²から36cm²へ9倍になる。辺の倍率と面積の倍率を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の観測で入力1,2,3に出力2,8,18が対応した。y/x²は全て2なのでy＝2x²を候補にするが、観測していない入力まで一致が保証されたとはいわない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "一辺3cmの正方形の面積は？ 正答：9。 3×3＝9cm²。 考える手がかり：面積は辺の二乗。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "正方形の一辺を3倍にすると面積は？ 正答：9倍。 二つの辺がそれぞれ3倍なので3²＝9倍。 考える手がかり：縦と横を両方変える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "架空の表でx＝1,2,3にy＝2,8,18が対応する。三点に合う式は？ 正答：y＝2x²。 各xを二乗して2倍すると三つの値に一致。 考える手がかり：候補へ三つとも代入する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "模型の設定をs＝t²cm、0≤t≤3秒とする。t＝2秒の距離sは？ 正答：4。 設定に従い2²＝4cm。 考える手がかり：実際の物体一般の法則と混ぜず、指定式を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "三つの実験点がy＝2x²に合っただけで、未観測の全てのxでも一致と証明できる？ 正答：できない。モデルの候補として確かめる。 有限の観測は未観測の全ての場合を証明しない。 考える手がかり：調べた範囲と主張の範囲を比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "正の一辺xの正方形でy＝x²が成り立つ根拠は？ 正答：面積が縦×横で、両方xだから。 図形の定義と面積の公式から関係を導ける。 考える手がかり：厳密な条件から式を作る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "正方形の一辺2cmを6cmへ変える。面積は何倍？ 正答：9。 36/4＝9。辺の3倍を二乗しても9。 考える手がかり：面積の比を求める。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "表からy/x²を調べるとき、x＝0の行はどうする？ 正答：その商は計算せず、元の式で対応を確認する。 x²＝0なので商は定義されないが、元の式は確認できる。 考える手がかり：除法と代入を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：一辺が2倍になった正方形では、面積も2倍になる？ 正答：ならない。4倍になる。 縦も横も2倍なので積は4倍。 考える手がかり：二つの方向の倍率を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "正方形の面積と、三点から考えた実験モデルでは、式の根拠がどう違うか説明しよう。 モデルの式を広い範囲へ使う前に何を確認したい？ 正方形は辺が等しく面積が積なので式を導ける。実験の三点からの式は候補で、別の条件や範囲でも合うか追加で確認する。 確認項目：面積公式による関係と観測による候補を区別した。 / 適用範囲や誤差を確認する必要を述べた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "正方形の一辺x cm（x>0）と面積y cm²の関係を説明しよう。 面積は縦×横で、正方形の縦と横は同じx。 y＝x×x＝x²と表す。 x＝1,2,3ならy＝1,4,9で、y/x²＝1となる。 辺をm倍（m>0）にすれば面積はm²倍。表の例だけでなく面積公式が根拠になる。 結論：y＝x²、辺のm倍に対して面積はm²倍。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「いくつかの観測点が二乗の式に合えば、全ての条件で必ずその式が成り立つ。」は誤り。観測範囲外では違う関係になる可能性がある。式をモデルとして使う条件や誤差、追加の観測を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "正方形の辺x>0と面積yはy=x²、正の倍率mで面積倍率m²。架空模型s=t²,0≤t≤3は指定された規則。有限の観測点だけで全入力への恒等関係を証明しない。 操作図の範囲：操作例n=1,2,3で一辺nの正方形の面積n²、また架空の運動模型s=t²でt=nに対する距離n²を比較する。正方形の辺と時間は非負、運動は式で仮定した架空模型。有限の観測値の一致だけで全てのxについての式を証明したとはしない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233312200000",
    "grade": 9,
    "title": "関数y=ax²の活用",
    "domain": "C",
    "order": 27,
    "goal": "表・式・グラフを選んで二つの関係を比べ、場面の変域へ答えを戻す。",
    "coverageCodes": [
      "8350232100000000",
      "8350232200000000",
      "8350232300000000",
      "8350233312100000",
      "8350233312200000",
      "8350233511000000",
      "8350233513000000"
    ],
    "explanations": {
      "es": {
        "short": "二つの数量を表・式・グラフで比べよう。同じ値になる所は二つの式を等しくして調べられる。計算した解が、場面の時間や長さの範囲に入るかも確かめるよ。",
        "detail": "架空の二つの模型A,Bで、0≤t≤3秒の距離をAはs＝t²cm、Bはs＝2t cmと決める。同じ距離ならt²＝2t、t(t−2)＝0なのでt＝0と2。t＝1ではAが1cm、Bが2cm、t＝3ではAが9cm、Bが6cm。どちらが大きいかは時刻によって変わる。"
      },
      "js": {
        "short": "関数y＝ax²を具体的なモデルへ用いるときは、数量・単位・変域・仮定を明記する。二つの関数の共通の値や大小を、表・式・グラフを関連付けて考察する。",
        "detail": "A:s＝t²、B:s＝2tを0≤t≤3で比べると、交点は(0,0),(2,4)。差s_A−s_B＝t(t−2)より0<t<2ではAが小さく、2<t≤3ではAが大きい。式は表示窓の外でも計算できるが、模型の条件を指定範囲の外まで保証することにはならない。現実の移動を一般にこの式と決め付けない。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "二つの規則を同じ時刻で比べる",
        "text": "架空の模型Aはs＝t²、Bはs＝2t、0≤t≤3秒、sの単位はcmとする。同じtで二つを計算し、t＝1で1と2、t＝3で9と6になることを比較する。",
        "activityIds": [
          "prog-scratch"
        ]
      },
      {
        "category": "drawing",
        "title": "交点を式へ戻す",
        "text": "同じ座標軸で模型のs＝t²とs＝2tを描く。交点(2,4)はt＝2のときどちらも4cmという意味。時刻と距離を入れ替えずに読む。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "架空模型A:s＝t²、B:s＝2t（0≤t≤3秒）の距離が同じになる時刻を求める式は？",
        "options": [
          "t＋2＝0",
          "t²＝2t",
          "t²＋2t＝0"
        ],
        "answer": "t²＝2t",
        "explanation": "同じ時刻の距離という同じ量を等号で結ぶ。",
        "hint": "二つの距離の式を比較する。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "模型A:s＝t²、B:s＝2t（0≤t≤3）で、距離が同じになるtは？",
        "options": [
          "0と2",
          "2だけ",
          "0だけ"
        ],
        "answer": "0と2",
        "explanation": "t(t−2)＝0の二解は両方とも指定範囲内。",
        "hint": "tで割って0を失わない。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "模型A:s＝t²、B:s＝2tでt＝2秒の共通の距離sは？",
        "answer": 4,
        "explanation": "AもBも4cmになる。",
        "hint": "両方へ同じ時刻を代入する。",
        "suffix": "cm",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "模型A:s＝t²、B:s＝2tでt＝1秒の距離の大小は？",
        "options": [
          "同じ",
          "Aの1cmがBの2cmより小さい",
          "Aの2cmがBの1cmより大きい"
        ],
        "answer": "Aの1cmがBの2cmより小さい",
        "explanation": "1²＝1、2×1＝2。",
        "hint": "時刻1の二つの値を計算する。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "模型A:s＝t²、B:s＝2tでt＝3秒の距離の差A−Bは？",
        "answer": 3,
        "explanation": "9−6＝3cm。",
        "hint": "引く向きA−Bを保つ。",
        "suffix": "cm",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "模型A:s＝t²、B:s＝2tの交点(2,4)の意味は？",
        "options": [
          "4秒で両方の距離が2cm",
          "Aが2cm、Bが4cm",
          "2秒で両方の距離が4cm"
        ],
        "answer": "2秒で両方の距離が4cm",
        "explanation": "横軸がt、縦軸がsなので同じ入力と出力を表す。",
        "hint": "軸の数量と単位を読む。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "0≤t≤3で成り立つと設定した模型の式をt＝10へ使うときは？",
        "options": [
          "数式の代入そのものが不可能",
          "計算はできても模型への適用は別に確認が必要",
          "設定だけで現実の10秒後を必ず保証する"
        ],
        "answer": "計算はできても模型への適用は別に確認が必要",
        "explanation": "数学的な計算と仮定した場面の適用範囲を分ける。",
        "hint": "どこまでを規則の条件にしたか確認する。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "模型A:s＝t²、B:s＝2tで0<t<2なら距離の差t(t−2)の符号は？",
        "options": [
          "負なのでAが小さい",
          "正なのでAが大きい",
          "0なので等しい"
        ],
        "answer": "負なのでAが小さい",
        "explanation": "t>0でt−2<0だから積は負。",
        "hint": "二因数の符号を別々に見る。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：0≤t≤3の模型A:s＝t²、B:s＝2tは、全ての時刻でAが大きい？",
      "options": [
        "そう。二乗の方がいつも大きい",
        "そう。係数を見なくてよい",
        "違う。t＝1ではAが小さい"
      ],
      "answer": "違う。t＝1ではAが小さい",
      "explanation": "t＝1で1<2という反例がある。",
      "hint": "一つの時刻へ両方を代入して比べる。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "一致する時刻を求めて戻す",
      "prompt": "0≤t≤3秒の模型A:s＝t²cm、B:s＝2t cmで、同じ距離になる時刻を求めよう。",
      "steps": [
        {
          "text": "同じ距離の条件をt²＝2tと表す。"
        },
        {
          "text": "t²−2t＝0、t(t−2)＝0へ変形する。"
        },
        {
          "text": "t＝0または2で、どちらも0≤t≤3に含まれる。"
        },
        {
          "text": "t＝0では両方0cm、t＝2では両方4cmと元の規則で確認する。"
        }
      ],
      "answer": "0秒と2秒。共通の距離は0cmと4cm。",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "二乗の式の値は、一次の式の値よりいつも大きい。",
      "correction": "入力と係数、変域による。s＝t²とs＝2tではt＝1なら1<2、t＝3なら9>6となる。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "模型A:s＝t²、B:s＝2tで同じ距離となる時刻をどう求めるか説明しよう。",
        "followUp": "模型の変域を外れた値へ同じ結論を広げてよい？",
        "checkpoints": [
          "同じ量どうしを等式にし全ての解を求めた。",
          "時刻の範囲と単位へ戻って確認した。"
        ],
        "sample": "t²＝2tからt＝0,2を得て、指定範囲0≤t≤3に両方入ると確認する。範囲外の適用は、式を計算できても別に確認が必要。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "二つの数量を表・式・グラフで比べよう。同じ値になる所は二つの式を等しくして調べられる。計算した解が、場面の時間や長さの範囲に入るかも確かめるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "架空の二つの模型A,Bで、0≤t≤3秒の距離をAはs＝t²cm、Bはs＝2t cmと決める。同じ距離ならt²＝2t、t(t−2)＝0なのでt＝0と2。t＝1ではAが1cm、Bが2cm、t＝3ではAが9cm、Bが6cm。どちらが大きいかは時刻によって変わる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "関数y＝ax²を具体的なモデルへ用いるときは、数量・単位・変域・仮定を明記する。二つの関数の共通の値や大小を、表・式・グラフを関連付けて考察する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "A:s＝t²、B:s＝2tを0≤t≤3で比べると、交点は(0,0),(2,4)。差s_A−s_B＝t(t−2)より0<t<2ではAが小さく、2<t≤3ではAが大きい。式は表示窓の外でも計算できるが、模型の条件を指定範囲の外まで保証することにはならない。現実の移動を一般にこの式と決め付けない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の模型Aはs＝t²、Bはs＝2t、0≤t≤3秒、sの単位はcmとする。同じtで二つを計算し、t＝1で1と2、t＝3で9と6になることを比較する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "同じ座標軸で模型のs＝t²とs＝2tを描く。交点(2,4)はt＝2のときどちらも4cmという意味。時刻と距離を入れ替えずに読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "架空模型A:s＝t²、B:s＝2t（0≤t≤3秒）の距離が同じになる時刻を求める式は？ 正答：t²＝2t。 同じ時刻の距離という同じ量を等号で結ぶ。 考える手がかり：二つの距離の式を比較する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "模型A:s＝t²、B:s＝2t（0≤t≤3）で、距離が同じになるtは？ 正答：0と2。 t(t−2)＝0の二解は両方とも指定範囲内。 考える手がかり：tで割って0を失わない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "模型A:s＝t²、B:s＝2tでt＝2秒の共通の距離sは？ 正答：4。 AもBも4cmになる。 考える手がかり：両方へ同じ時刻を代入する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "模型A:s＝t²、B:s＝2tでt＝1秒の距離の大小は？ 正答：Aの1cmがBの2cmより小さい。 1²＝1、2×1＝2。 考える手がかり：時刻1の二つの値を計算する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "模型A:s＝t²、B:s＝2tでt＝3秒の距離の差A−Bは？ 正答：3。 9−6＝3cm。 考える手がかり：引く向きA−Bを保つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "模型A:s＝t²、B:s＝2tの交点(2,4)の意味は？ 正答：2秒で両方の距離が4cm。 横軸がt、縦軸がsなので同じ入力と出力を表す。 考える手がかり：軸の数量と単位を読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "0≤t≤3で成り立つと設定した模型の式をt＝10へ使うときは？ 正答：計算はできても模型への適用は別に確認が必要。 数学的な計算と仮定した場面の適用範囲を分ける。 考える手がかり：どこまでを規則の条件にしたか確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "模型A:s＝t²、B:s＝2tで0<t<2なら距離の差t(t−2)の符号は？ 正答：負なのでAが小さい。 t>0でt−2<0だから積は負。 考える手がかり：二因数の符号を別々に見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：0≤t≤3の模型A:s＝t²、B:s＝2tは、全ての時刻でAが大きい？ 正答：違う。t＝1ではAが小さい。 t＝1で1<2という反例がある。 考える手がかり：一つの時刻へ両方を代入して比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "模型A:s＝t²、B:s＝2tで同じ距離となる時刻をどう求めるか説明しよう。 模型の変域を外れた値へ同じ結論を広げてよい？ t²＝2tからt＝0,2を得て、指定範囲0≤t≤3に両方入ると確認する。範囲外の適用は、式を計算できても別に確認が必要。 確認項目：同じ量どうしを等式にし全ての解を求めた。 / 時刻の範囲と単位へ戻って確認した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "0≤t≤3秒の模型A:s＝t²cm、B:s＝2t cmで、同じ距離になる時刻を求めよう。 同じ距離の条件をt²＝2tと表す。 t²−2t＝0、t(t−2)＝0へ変形する。 t＝0または2で、どちらも0≤t≤3に含まれる。 t＝0では両方0cm、t＝2では両方4cmと元の規則で確認する。 結論：0秒と2秒。共通の距離は0cmと4cm。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「二乗の式の値は、一次の式の値よりいつも大きい。」は誤り。入力と係数、変域による。s＝t²とs＝2tではt＝1なら1<2、t＝3なら9>6となる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "架空模型A:s=t²、B:s=2t、0≤t≤3、秒/cmの設定で一致はt0,2。交点(0,0),(2,4)。差t(t−2)は0<t<2で負、2<t≤3で正。指定範囲外へのモデル適用を保証しない。 操作図の範囲：架空の二運動A:s=t²、B:s=2tを0≤t≤3で比べる。操作時刻0,1,2,3に対しAは0,1,4,9、Bは0,2,4,6。同じ位置はt(t−2)=0より0,2で、位置の差はt²−2t。時間0を落とさず、実際の運動の安全性などへ広げない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233311300000",
    "grade": 9,
    "title": "いろいろな関数",
    "domain": "C",
    "order": 28,
    "goal": "一つの入力に出力が一つ決まることから、階段状の対応も関数と説明する。",
    "coverageCodes": [
      "8350233311300000",
      "8350233511000000",
      "8350233513000000"
    ],
    "explanations": {
      "es": {
        "short": "一つの入力を決めると出力がただ一つ決まれば関数という。料金が区間ごとに変わるような階段状の関係も、関数として表やグラフで調べられるよ。",
        "detail": "架空の配送規則で、重さx kgが0<x≤1なら100円、1<x≤2なら150円、2<x≤3なら200円とする。x＝1では100円、1.01では150円と、境目で料金が変わる。区間の端を含む点は黒丸、含まない点は白丸で示す。重さを一つ決めれば料金は一つに決まる。"
      },
      "js": {
        "short": "関数は、変域内の入力一つに出力一つが定まる対応である。比例や二次の簡単な一式で表しにくい階段状の関係も、表・グラフで特徴を考察できる。",
        "detail": "架空の重さ別料金では、同じ区間内の異なる重さに同じ料金が対応する。それでも関数である。一方、同じ重さに二つの料金が同時に対応する設定では、他の条件を固定しない限り重さだけの関数といえない。階段グラフの境目を縦線でつなぐと、一つのxに多くのyが対応して見えるので、料金のグラフの点として結ばない。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "区間の条件で出力を決める",
        "text": "教材の架空料金を0<x≤1で100、1<x≤2で150、2<x≤3で200円と決める。境目1と2をどちらの区間へ含めるかを明記して、二つの料金が同時に選ばれないようにする。",
        "activityIds": [
          "prog-scratch"
        ]
      },
      {
        "category": "drawing",
        "title": "白丸と黒丸を描き分ける",
        "text": "架空料金の0<x≤1で100円の線分は、x＝0側を白丸、x＝1側を黒丸で表す。隣の150円の線分はx＝1を含めない白丸から始まる。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "入力を決めると出力がただ一つ決まる対応は？",
        "options": [
          "関数",
          "必ず比例だけ",
          "必ず直線のグラフだけ"
        ],
        "answer": "関数",
        "explanation": "関数の定義は入力に対する出力の一意性。",
        "hint": "グラフの形だけで決めない。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "架空料金は0<x≤1kgで100円、1<x≤2kgで150円、2<x≤3kgで200円。x＝1kgの料金は？",
        "answer": 100,
        "explanation": "1は最初の区間に含まれる。",
        "hint": "≤のある端を確認する。",
        "suffix": "円",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "架空料金は0<x≤1kgで100円、1<x≤2kgで150円、2<x≤3kgで200円。x＝1.01kgの料金は？",
        "answer": 150,
        "explanation": "1を超え2以下なので150円。",
        "hint": "境目を少し超えた入力の区間を探す。",
        "suffix": "円",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "架空料金0<x≤1で100、1<x≤2で150円のグラフで、点(1,100)は？",
        "options": [
          "含める黒丸",
          "含めない白丸",
          "どちらの料金にも含めない"
        ],
        "answer": "含める黒丸",
        "explanation": "最初の区間は1以下なので点を含める。",
        "hint": "不等号と点の塗り方を対応させる。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "架空料金0<x≤1で100、1<x≤2で150円のグラフで、点(1,150)は？",
        "options": [
          "含める黒丸",
          "常に両方の料金へ含める",
          "含めない白丸"
        ],
        "answer": "含めない白丸",
        "explanation": "二つ目の区間は1より大きいので1を含めない。",
        "hint": "同じxで出力が二つにならないか確認する。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "異なる入力0.4kgと0.8kgが同じ100円に対応する規則は、関数になり得る？",
        "options": [
          "ならない。料金は二乗でない",
          "なり得る。各入力に料金が一つならよい",
          "ならない。異なる入力には異なる出力が必要"
        ],
        "answer": "なり得る。各入力に料金が一つならよい",
        "explanation": "多くの入力が同じ出力へ対応してもよい。",
        "hint": "一つの入力からいくつ出力が出るか考える。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "条件を追加せず、同じ重さ1kgへ100円と150円が同時に対応するなら？",
        "options": [
          "料金は重さだけの関数とはいえない",
          "必ず関数である",
          "必ず比例である"
        ],
        "answer": "料金は重さだけの関数とはいえない",
        "explanation": "一入力から出力が一つに定まらない。",
        "hint": "他の条件を固定する必要がある。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "階段状料金の境目を縦の線分でつなぎ、それもグラフの点とする問題点は？",
        "options": [
          "目盛が必ず2倍になる",
          "黒丸を使えなくなる",
          "一つの重さへ複数の料金が対応してしまう"
        ],
        "answer": "一つの重さへ複数の料金が対応してしまう",
        "explanation": "縦線上に異なるyが並び、元の対応にない点を加えてしまう。",
        "hint": "線を足して対応が変わらないか確認する。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：架空料金0<x≤1で100、1<x≤2で150、2<x≤3で200円。x＝2の料金は？",
      "options": [
        "100円",
        "150円",
        "200円"
      ],
      "answer": "150円",
      "explanation": "2は1<x≤2に含まれ、次の区間には含まれない。",
      "hint": "端の不等号を読む。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "境目を正しく読む",
      "prompt": "架空料金0<x≤1kgで100円、1<x≤2kgで150円、2<x≤3kgで200円をグラフで説明しよう。",
      "steps": [
        {
          "text": "入力xの範囲を0<x≤3とし、料金の三つの区間を確認する。"
        },
        {
          "text": "各区間では料金一定なので水平な線分で表す。"
        },
        {
          "text": "右端を含む黒丸、左端を含まない白丸で境目を描き分ける。"
        },
        {
          "text": "各重さに料金が一つだけ対応する。境目の縦線を料金のグラフとして追加しない。"
        }
      ],
      "answer": "端点を区別した三つの水平な線分で表す。",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "直線や滑らかな曲線のグラフにならなければ関数ではない。",
      "correction": "関数かどうかは一入力に出力が一つ決まるかで判断する。端点を明確にした階段状の料金も関数になる。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "階段状の料金が関数といえる理由を説明しよう。",
        "followUp": "境目に白丸と黒丸があるのはなぜ？",
        "checkpoints": [
          "入力一つに料金一つという定義を使った。",
          "端点の含む含まないを不等号と結び付けた。"
        ],
        "sample": "重さを決めると指定された区間から料金が一つ決まる。白丸は含めず黒丸は含めるため、境目で二つの料金を同時に選ばない。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "一つの入力を決めると出力がただ一つ決まれば関数という。料金が区間ごとに変わるような階段状の関係も、関数として表やグラフで調べられるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "架空の配送規則で、重さx kgが0<x≤1なら100円、1<x≤2なら150円、2<x≤3なら200円とする。x＝1では100円、1.01では150円と、境目で料金が変わる。区間の端を含む点は黒丸、含まない点は白丸で示す。重さを一つ決めれば料金は一つに決まる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "関数は、変域内の入力一つに出力一つが定まる対応である。比例や二次の簡単な一式で表しにくい階段状の関係も、表・グラフで特徴を考察できる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "架空の重さ別料金では、同じ区間内の異なる重さに同じ料金が対応する。それでも関数である。一方、同じ重さに二つの料金が同時に対応する設定では、他の条件を固定しない限り重さだけの関数といえない。階段グラフの境目を縦線でつなぐと、一つのxに多くのyが対応して見えるので、料金のグラフの点として結ばない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材の架空料金を0<x≤1で100、1<x≤2で150、2<x≤3で200円と決める。境目1と2をどちらの区間へ含めるかを明記して、二つの料金が同時に選ばれないようにする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空料金の0<x≤1で100円の線分は、x＝0側を白丸、x＝1側を黒丸で表す。隣の150円の線分はx＝1を含めない白丸から始まる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "入力を決めると出力がただ一つ決まる対応は？ 正答：関数。 関数の定義は入力に対する出力の一意性。 考える手がかり：グラフの形だけで決めない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "架空料金は0<x≤1kgで100円、1<x≤2kgで150円、2<x≤3kgで200円。x＝1kgの料金は？ 正答：100。 1は最初の区間に含まれる。 考える手がかり：≤のある端を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "架空料金は0<x≤1kgで100円、1<x≤2kgで150円、2<x≤3kgで200円。x＝1.01kgの料金は？ 正答：150。 1を超え2以下なので150円。 考える手がかり：境目を少し超えた入力の区間を探す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "架空料金0<x≤1で100、1<x≤2で150円のグラフで、点(1,100)は？ 正答：含める黒丸。 最初の区間は1以下なので点を含める。 考える手がかり：不等号と点の塗り方を対応させる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "架空料金0<x≤1で100、1<x≤2で150円のグラフで、点(1,150)は？ 正答：含めない白丸。 二つ目の区間は1より大きいので1を含めない。 考える手がかり：同じxで出力が二つにならないか確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "異なる入力0.4kgと0.8kgが同じ100円に対応する規則は、関数になり得る？ 正答：なり得る。各入力に料金が一つならよい。 多くの入力が同じ出力へ対応してもよい。 考える手がかり：一つの入力からいくつ出力が出るか考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "条件を追加せず、同じ重さ1kgへ100円と150円が同時に対応するなら？ 正答：料金は重さだけの関数とはいえない。 一入力から出力が一つに定まらない。 考える手がかり：他の条件を固定する必要がある。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "階段状料金の境目を縦の線分でつなぎ、それもグラフの点とする問題点は？ 正答：一つの重さへ複数の料金が対応してしまう。 縦線上に異なるyが並び、元の対応にない点を加えてしまう。 考える手がかり：線を足して対応が変わらないか確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：架空料金0<x≤1で100、1<x≤2で150、2<x≤3で200円。x＝2の料金は？ 正答：150円。 2は1<x≤2に含まれ、次の区間には含まれない。 考える手がかり：端の不等号を読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "階段状の料金が関数といえる理由を説明しよう。 境目に白丸と黒丸があるのはなぜ？ 重さを決めると指定された区間から料金が一つ決まる。白丸は含めず黒丸は含めるため、境目で二つの料金を同時に選ばない。 確認項目：入力一つに料金一つという定義を使った。 / 端点の含む含まないを不等号と結び付けた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "架空料金0<x≤1kgで100円、1<x≤2kgで150円、2<x≤3kgで200円をグラフで説明しよう。 入力xの範囲を0<x≤3とし、料金の三つの区間を確認する。 各区間では料金一定なので水平な線分で表す。 右端を含む黒丸、左端を含まない白丸で境目を描き分ける。 各重さに料金が一つだけ対応する。境目の縦線を料金のグラフとして追加しない。 結論：端点を区別した三つの水平な線分で表す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「直線や滑らかな曲線のグラフにならなければ関数ではない。」は誤り。関数かどうかは一入力に出力が一つ決まるかで判断する。端点を明確にした階段状の料金も関数になる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "架空料金yは0<x≤1で100、1<x≤2で150、2<x≤3で200。端点を黒丸/白丸で含む/含まないと区別する。一入力一出力なら関数で、異入力同出力は許される。境目の縦線分を対応点へ追加しない。 操作図の範囲：架空の料金は0<w≤2kgで100円、2<w≤4kgで200円、4<w≤6kgで300円。操作の整数w=1..6では順に100,100,200,200,300,300円。上端を含み下端は含まない区間を使い、一つの重さに一つの料金が対応する。実在サービスの料金ではない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233210000000",
    "grade": 9,
    "title": "相似な図形と相似比",
    "domain": "B",
    "order": 29,
    "goal": "対応する頂点・辺・角を定め、同じ形の意味と相似比を説明する。",
    "coverageCodes": [
      "8350233210000000",
      "8350233211100000",
      "8350233241000000"
    ],
    "explanations": {
      "es": {
        "short": "一方を同じ正の倍率で拡大・縮小すると、移動や裏返しで重なる二つの図形は相似。対応する辺の比がそろい、対応する角は等しいよ。",
        "detail": "△ABC∽△DEFと書くとき、AとD、BとE、CとFを対応させる。AB:DE＝BC:EF＝CA:FDとなる比が相似比。例えば小さい三角形から大きい方へ全ての辺を1.5倍すれば、角の大きさは変わらない。回転や裏返しで向きが違っても、対応を正しくたどれば比べられる。"
      },
      "js": {
        "short": "相似は、一方を正の倍率で拡大または縮小した図形が他方と合同になる関係。記号∽では頂点の対応順序を保ち、対応する辺の比を相似比とする。",
        "detail": "△ABC∽△DEFなら∠A＝∠Dなどの角の対応と、AB/DE＝BC/EF＝CA/FDが成立する。相似比ABC:DEF＝2:3ならDEFの辺はABCの3/2倍。比を逆向きにすると3:2になる。一般の多角形では角が全て等しいだけでは相似を保証できず、縦横の比も確認する。図形は辺の長さが正で退化していないものを扱う。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "形を保って拡大する",
        "text": "架空の三角形を各方向へ同じ正の倍率1.5で拡大する。元の辺4cmに対応する辺は6cmになり、対応する角は同じ。横だけを伸ばす操作とは区別する。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "craft",
        "title": "対応する辺の印をそろえる",
        "text": "相似な架空の型紙△ABCと△DEFでA-D、B-E、C-Fを同じ印にする。辺BCに対応する辺はEFであり、長さの比も同じ順で読む。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "△ABC∽△DEFで頂点Bに対応するのは？",
        "options": [
          "D",
          "F",
          "E"
        ],
        "answer": "E",
        "explanation": "記号の二番目どうしが対応する。",
        "hint": "頂点の並びを同じ位置で読む。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "△ABC∽△DEFで辺CAに対応する辺は？",
        "options": [
          "EF",
          "FD",
          "DE"
        ],
        "answer": "FD",
        "explanation": "CはF、AはDに対応する。",
        "hint": "辺の両端の対応をたどる。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "相似な二図形で小:大の相似比が2:3。小さい方の辺4cmに対応する大きい方の辺は？",
        "answer": 6,
        "explanation": "4×3/2＝6cm。",
        "hint": "比の向き小→大を保つ。",
        "suffix": "cm",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "相似な図形の対応する角は？",
        "options": [
          "相似比だけ大きくなる",
          "必ず直角",
          "等しい"
        ],
        "answer": "等しい",
        "explanation": "同じ倍率の拡大縮小で角の大きさは変わらない。",
        "hint": "辺の倍率と角を区別する。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "二図形の相似比A:B＝2:3なら、B:Aは？",
        "options": [
          "4:9",
          "3:2",
          "2:3"
        ],
        "answer": "3:2",
        "explanation": "比べる順を逆にすれば比も逆になる。",
        "hint": "面積比の二乗とは別の操作。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "縦2横3の長方形と、縦4横6の長方形は？",
        "options": [
          "相似。両方向とも2倍",
          "相似でない。大きさが違う",
          "合同。全辺が等しい"
        ],
        "answer": "相似。両方向とも2倍",
        "explanation": "対応する長さを同じ倍率でそろえられる。",
        "hint": "形と大きさを分ける。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "縦2横3と縦2横4の長方形は、角が全て直角だから必ず相似？",
        "options": [
          "そう。四つの角が直角ならよい",
          "そう。辺が四本ならよい",
          "違う。縦横の比が異なる"
        ],
        "answer": "違う。縦横の比が異なる",
        "explanation": "辺の比2:3と2:4は異なり、回しても一致しない。",
        "hint": "角だけでは一般の多角形は決まらない。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "相似な二つの三角形が逆向きに描かれているときは？",
        "options": [
          "図の左右だけで頂点を対応させる",
          "移動や裏返しも考えて対応を確認する",
          "向きが違うので必ず相似でない"
        ],
        "answer": "移動や裏返しも考えて対応を確認する",
        "explanation": "位置や向きではなく、対応する辺と角を比べる。",
        "hint": "記号の対応順をたどる。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：相似な図形を2倍に拡大したとき、60°の角は？",
      "options": [
        "60°",
        "120°",
        "30°"
      ],
      "answer": "60°",
      "explanation": "拡大縮小は対応する角の大きさを変えない。",
      "hint": "長さの倍率を角へかけない。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "頂点の対応から長さへ",
      "prompt": "△ABC∽△DEF、AB＝4cm、DE＝6cm、BC＝5cmのときEFを求めよう。",
      "steps": [
        {
          "text": "A-D、B-E、C-Fの対応を記号の順から読む。"
        },
        {
          "text": "ABに対応するDEから、ABC→DEFの倍率は6/4＝3/2。"
        },
        {
          "text": "BCに対応するのはEFなので、5×3/2とする。"
        },
        {
          "text": "EF＝7.5cm。全ての対応辺に同じ倍率を使った。"
        }
      ],
      "answer": "EF＝7.5cm",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "相似な図形では、辺と同じ倍率で角も大きくなる。",
      "correction": "対応する角は等しいまま。倍率が変わるのは辺の長さで、角まで変えると元の形を保てない。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "△ABC∽△DEFの記号から、頂点と辺の対応を説明しよう。",
        "followUp": "向きが回転していても、対応は同じように読める？",
        "checkpoints": [
          "頂点の並びに従って対応を示した。",
          "正の相似比と角の等しさを区別した。"
        ],
        "sample": "A-D、B-E、C-FなのでAB-DE、BC-EF、CA-FDが対応する。図の向きが変わってもこの対応を保ち、辺は同じ倍率、角は等しい。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "一方を同じ正の倍率で拡大・縮小すると、移動や裏返しで重なる二つの図形は相似。対応する辺の比がそろい、対応する角は等しいよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "△ABC∽△DEFと書くとき、AとD、BとE、CとFを対応させる。AB:DE＝BC:EF＝CA:FDとなる比が相似比。例えば小さい三角形から大きい方へ全ての辺を1.5倍すれば、角の大きさは変わらない。回転や裏返しで向きが違っても、対応を正しくたどれば比べられる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "相似は、一方を正の倍率で拡大または縮小した図形が他方と合同になる関係。記号∽では頂点の対応順序を保ち、対応する辺の比を相似比とする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "△ABC∽△DEFなら∠A＝∠Dなどの角の対応と、AB/DE＝BC/EF＝CA/FDが成立する。相似比ABC:DEF＝2:3ならDEFの辺はABCの3/2倍。比を逆向きにすると3:2になる。一般の多角形では角が全て等しいだけでは相似を保証できず、縦横の比も確認する。図形は辺の長さが正で退化していないものを扱う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の三角形を各方向へ同じ正の倍率1.5で拡大する。元の辺4cmに対応する辺は6cmになり、対応する角は同じ。横だけを伸ばす操作とは区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "相似な架空の型紙△ABCと△DEFでA-D、B-E、C-Fを同じ印にする。辺BCに対応する辺はEFであり、長さの比も同じ順で読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "△ABC∽△DEFで頂点Bに対応するのは？ 正答：E。 記号の二番目どうしが対応する。 考える手がかり：頂点の並びを同じ位置で読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "△ABC∽△DEFで辺CAに対応する辺は？ 正答：FD。 CはF、AはDに対応する。 考える手がかり：辺の両端の対応をたどる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "相似な二図形で小:大の相似比が2:3。小さい方の辺4cmに対応する大きい方の辺は？ 正答：6。 4×3/2＝6cm。 考える手がかり：比の向き小→大を保つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "相似な図形の対応する角は？ 正答：等しい。 同じ倍率の拡大縮小で角の大きさは変わらない。 考える手がかり：辺の倍率と角を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "二図形の相似比A:B＝2:3なら、B:Aは？ 正答：3:2。 比べる順を逆にすれば比も逆になる。 考える手がかり：面積比の二乗とは別の操作。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "縦2横3の長方形と、縦4横6の長方形は？ 正答：相似。両方向とも2倍。 対応する長さを同じ倍率でそろえられる。 考える手がかり：形と大きさを分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "縦2横3と縦2横4の長方形は、角が全て直角だから必ず相似？ 正答：違う。縦横の比が異なる。 辺の比2:3と2:4は異なり、回しても一致しない。 考える手がかり：角だけでは一般の多角形は決まらない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "相似な二つの三角形が逆向きに描かれているときは？ 正答：移動や裏返しも考えて対応を確認する。 位置や向きではなく、対応する辺と角を比べる。 考える手がかり：記号の対応順をたどる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：相似な図形を2倍に拡大したとき、60°の角は？ 正答：60°。 拡大縮小は対応する角の大きさを変えない。 考える手がかり：長さの倍率を角へかけない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "△ABC∽△DEFの記号から、頂点と辺の対応を説明しよう。 向きが回転していても、対応は同じように読める？ A-D、B-E、C-FなのでAB-DE、BC-EF、CA-FDが対応する。図の向きが変わってもこの対応を保ち、辺は同じ倍率、角は等しい。 確認項目：頂点の並びに従って対応を示した。 / 正の相似比と角の等しさを区別した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "△ABC∽△DEF、AB＝4cm、DE＝6cm、BC＝5cmのときEFを求めよう。 A-D、B-E、C-Fの対応を記号の順から読む。 ABに対応するDEから、ABC→DEFの倍率は6/4＝3/2。 BCに対応するのはEFなので、5×3/2とする。 EF＝7.5cm。全ての対応辺に同じ倍率を使った。 結論：EF＝7.5cm",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「相似な図形では、辺と同じ倍率で角も大きくなる。」は誤り。対応する角は等しいまま。倍率が変わるのは辺の長さで、角まで変えると元の形を保てない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "非退化な図形の相似は正の一様な拡大縮小と合同で定まる。△ABC∽△DEFの対応はA-D,B-E,C-F。対応角は等しく、対応辺の比は一定。回転・鏡映は相似を保つ。 操作図の範囲：非退化三角形A(−5/3,−1),B(7/3,−1),C(−2/3,2)を正の倍率k=0.5,1,1.5,2で拡大縮小する。対応辺はk倍、角は等しく、面積はk²倍。回転(x,y)→(−y,x)は原点中心反時計回り90°、反転(x,y)→(−x,y)はy軸についての対称で、対応を保つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233211100000",
    "grade": 9,
    "title": "三角形の相似条件",
    "domain": "B",
    "order": 30,
    "goal": "三つの相似条件を区別し、対応する辺の比とその間の角を正しく選ぶ。",
    "coverageCodes": [
      "8350233211100000",
      "8350233241000000"
    ],
    "explanations": {
      "es": {
        "short": "二つの三角形は、三組の辺の比が全て等しい、二組の辺の比とその間の角がそれぞれ等しい、二組の角がそれぞれ等しい、のどれかで相似と確かめられる。対応をそろえて使おう。",
        "detail": "三辺3,4,5の三角形と6,8,10の三角形は、対応辺が全て2倍なので相似。二辺を使うときは、その二辺の間の角が等しいことまで必要だよ。二組の角が等しければ、残る角も180°から決まり、相似といえる。二辺の比だけでは形が変わる余地が残る。"
      },
      "js": {
        "short": "非退化な二三角形の相似条件は、三組の辺の比が全て等しい、二組の辺の比とその間の角が等しい、二組の角が等しい、の三つ。",
        "detail": "△ABCと△DEFでAB/DE＝AC/DF、かつ∠A＝∠Dなら、二辺の間の角が等しい条件に合う。等しい角を∠Bと∠Eへ替えてよいとは限らない。条件は対応する頂点の順序を伴う。二組の角の等しさで相似を示す場合は、三つ目を別に測る必要はない。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "二辺だけでは決まらない",
        "text": "架空の二本の棒の長さを2cmと3cmにして、間の角を変えるとできる三角形の形が変わる。別の4cmと6cmの棒も、間の角まで合わせて初めて対応する相似を確かめられる。",
        "activityIds": [
          "craft-cardboard"
        ]
      },
      {
        "category": "drawing",
        "title": "角の組をそろえる",
        "text": "架空の二つの三角形で、対応する二角がそれぞれ40°と70°と分かれば、残りは両方70°。二組の角が等しいという相似条件に当たる。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "三辺3,4,5と6,8,10の二三角形は、どの条件で相似？",
        "options": [
          "面積が等しい",
          "三組の辺の比が全て等しい",
          "一組の角だけが等しい"
        ],
        "answer": "三組の辺の比が全て等しい",
        "explanation": "3:6＝4:8＝5:10＝1:2。",
        "hint": "三つの比を同じ向きにそろえる。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "△ABCと△DEFでAB/DE＝AC/DFのほかに、相似条件を満たす間の角は？",
        "options": [
          "∠A＝∠D",
          "∠B＝∠F",
          "∠C＝∠E"
        ],
        "answer": "∠A＝∠D",
        "explanation": "二辺ABとACの間はA、DEとDFの間はD。",
        "hint": "選んだ二辺の共通の頂点を見る。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "対応する二角がそれぞれ40°と70°の二三角形は？",
        "options": [
          "三つ目を測らないと決して相似といえない",
          "辺が同じ長さでなければ相似でない",
          "二組の角が等しいので相似"
        ],
        "answer": "二組の角が等しいので相似",
        "explanation": "二角が等しければ三つ目も決まる。",
        "hint": "合同と相似を区別する。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "三角形の二角が40°と70°のとき、残りの角は？",
        "answer": 70,
        "explanation": "180−40−70＝70°。",
        "hint": "三角形の内角の和を使う。",
        "suffix": "°",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "二三角形で二組の辺の比だけが等しい。必ず相似？",
        "options": [
          "まだいえない。間の角などの条件が必要",
          "必ず相似",
          "必ず合同"
        ],
        "answer": "まだいえない。間の角などの条件が必要",
        "explanation": "間の角が変われば形も変わる。",
        "hint": "二本の棒の角度を変える場面を考える。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "二組の辺の比と、その間ではない一角がそれぞれ等しいだけなら？",
        "options": [
          "いつでも相似条件になる",
          "いつでも相似でない",
          "必ず相似とはいえない"
        ],
        "answer": "必ず相似とはいえない",
        "explanation": "三つの相似条件の二辺を使うものは、その間の角を指定する。",
        "hint": "成立しない場合があり得ることと、常に不成立を分ける。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "三辺2,3,4の三角形と4,6,9の三角形は？",
        "options": [
          "合同。辺が三本ある",
          "相似でない。第三の辺の比が異なる",
          "相似。最初の二つが2倍"
        ],
        "answer": "相似でない。第三の辺の比が異なる",
        "explanation": "2→4と3→6は2倍だが4→9は2倍ではない。",
        "hint": "三組全てを確認する。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "相似条件を使う前に確かめることは？",
        "options": [
          "どの頂点・辺・角が対応するか",
          "図が紙の右側にあるか",
          "一番長く見える線の色"
        ],
        "answer": "どの頂点・辺・角が対応するか",
        "explanation": "対応を混ぜると比や角の条件を誤って判断する。",
        "hint": "記号の順序や印をそろえる。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：対応する二角が両方一致する二三角形で、辺の長さが違えば相似でない？",
      "options": [
        "その通り。必ず同じ長さが必要",
        "その通り。二角では不十分",
        "違う。大きさが違っても相似になる"
      ],
      "answer": "違う。大きさが違っても相似になる",
      "explanation": "二組の角が等しいことが相似条件の一つ。",
      "hint": "同じ形と同じ大きさを分ける。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "二辺の間の角を確かめる",
      "prompt": "△ABCと△DEFでAB＝2,AC＝3,DE＝4,DF＝6、∠A＝∠D＝60°とする。相似を説明しよう。",
      "steps": [
        {
          "text": "対応はA-D、B-E、C-Fとする。"
        },
        {
          "text": "AB/DE＝2/4＝1/2、AC/DF＝3/6＝1/2。"
        },
        {
          "text": "∠Aと∠Dはそれぞれ選んだ二辺の間の角で、60°で等しい。"
        },
        {
          "text": "二組の辺の比とその間の角が等しいため、△ABC∽△DEF。"
        }
      ],
      "answer": "△ABC∽△DEF",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "二組の辺の比が等しければ、角を見なくても必ず相似である。",
      "correction": "二辺の比だけでは形は決まらない。その間の角の等しさなど、相似条件に必要な残りの情報を確かめる。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "三角形の相似条件を一つ挙げ、何を対応させるか説明しよう。",
        "followUp": "二辺を選ぶ条件では、どこの角が必要？",
        "checkpoints": [
          "条件に必要な組数と対応を示した。",
          "二辺の間の角を指定した。"
        ],
        "sample": "二組の辺の比とその間の角が等しければ相似。ABとACを使うなら間は∠A、対応するDEとDFなら∠Dになる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "二つの三角形は、三組の辺の比が全て等しい、二組の辺の比とその間の角がそれぞれ等しい、二組の角がそれぞれ等しい、のどれかで相似と確かめられる。対応をそろえて使おう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "三辺3,4,5の三角形と6,8,10の三角形は、対応辺が全て2倍なので相似。二辺を使うときは、その二辺の間の角が等しいことまで必要だよ。二組の角が等しければ、残る角も180°から決まり、相似といえる。二辺の比だけでは形が変わる余地が残る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "非退化な二三角形の相似条件は、三組の辺の比が全て等しい、二組の辺の比とその間の角が等しい、二組の角が等しい、の三つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "△ABCと△DEFでAB/DE＝AC/DF、かつ∠A＝∠Dなら、二辺の間の角が等しい条件に合う。等しい角を∠Bと∠Eへ替えてよいとは限らない。条件は対応する頂点の順序を伴う。二組の角の等しさで相似を示す場合は、三つ目を別に測る必要はない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の二本の棒の長さを2cmと3cmにして、間の角を変えるとできる三角形の形が変わる。別の4cmと6cmの棒も、間の角まで合わせて初めて対応する相似を確かめられる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の二つの三角形で、対応する二角がそれぞれ40°と70°と分かれば、残りは両方70°。二組の角が等しいという相似条件に当たる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "三辺3,4,5と6,8,10の二三角形は、どの条件で相似？ 正答：三組の辺の比が全て等しい。 3:6＝4:8＝5:10＝1:2。 考える手がかり：三つの比を同じ向きにそろえる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "△ABCと△DEFでAB/DE＝AC/DFのほかに、相似条件を満たす間の角は？ 正答：∠A＝∠D。 二辺ABとACの間はA、DEとDFの間はD。 考える手がかり：選んだ二辺の共通の頂点を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "対応する二角がそれぞれ40°と70°の二三角形は？ 正答：二組の角が等しいので相似。 二角が等しければ三つ目も決まる。 考える手がかり：合同と相似を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "三角形の二角が40°と70°のとき、残りの角は？ 正答：70。 180−40−70＝70°。 考える手がかり：三角形の内角の和を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "二三角形で二組の辺の比だけが等しい。必ず相似？ 正答：まだいえない。間の角などの条件が必要。 間の角が変われば形も変わる。 考える手がかり：二本の棒の角度を変える場面を考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "二組の辺の比と、その間ではない一角がそれぞれ等しいだけなら？ 正答：必ず相似とはいえない。 三つの相似条件の二辺を使うものは、その間の角を指定する。 考える手がかり：成立しない場合があり得ることと、常に不成立を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "三辺2,3,4の三角形と4,6,9の三角形は？ 正答：相似でない。第三の辺の比が異なる。 2→4と3→6は2倍だが4→9は2倍ではない。 考える手がかり：三組全てを確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "相似条件を使う前に確かめることは？ 正答：どの頂点・辺・角が対応するか。 対応を混ぜると比や角の条件を誤って判断する。 考える手がかり：記号の順序や印をそろえる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：対応する二角が両方一致する二三角形で、辺の長さが違えば相似でない？ 正答：違う。大きさが違っても相似になる。 二組の角が等しいことが相似条件の一つ。 考える手がかり：同じ形と同じ大きさを分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "三角形の相似条件を一つ挙げ、何を対応させるか説明しよう。 二辺を選ぶ条件では、どこの角が必要？ 二組の辺の比とその間の角が等しければ相似。ABとACを使うなら間は∠A、対応するDEとDFなら∠Dになる。 確認項目：条件に必要な組数と対応を示した。 / 二辺の間の角を指定した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "△ABCと△DEFでAB＝2,AC＝3,DE＝4,DF＝6、∠A＝∠D＝60°とする。相似を説明しよう。 対応はA-D、B-E、C-Fとする。 AB/DE＝2/4＝1/2、AC/DF＝3/6＝1/2。 ∠Aと∠Dはそれぞれ選んだ二辺の間の角で、60°で等しい。 二組の辺の比とその間の角が等しいため、△ABC∽△DEF。 結論：△ABC∽△DEF",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「二組の辺の比が等しければ、角を見なくても必ず相似である。」は誤り。二辺の比だけでは形は決まらない。その間の角の等しさなど、相似条件に必要な残りの情報を確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "非退化三角形の相似条件はSSS比、SAS比と挟角、AA。対応辺比だけ二組では不足し、挟角でない角を無条件に代用しない。三辺3,4,5と6,8,10は相似比1:2。 操作図の範囲：元の直角三角形A(0,0),B(3,0),C(0,4)の辺は3,4,5、1.5倍の相似図の対応辺は4.5,6,7.5。三辺比、二辺比とその間の直角、二角の等しさの各条件で相似を説明できる。不足例D(0,0),E(4.5,0),F(3,3√3)はDE4.5,DF6で二辺の比1.5は同じだが∠D60°と∠A90°が違い相似でない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233212100000",
    "grade": 9,
    "title": "相似条件を使う証明",
    "domain": "B",
    "order": 31,
    "goal": "仮定と結論を区別し、角や辺の対応を根拠として相似を説明する。",
    "coverageCodes": [
      "8350232100000000",
      "8350232200000000",
      "8350232300000000",
      "8350233211100000",
      "8350233212100000",
      "8350233513000000"
    ],
    "explanations": {
      "es": {
        "short": "相似を示すときは、仮定から等しい角や辺の比を探そう。どの相似条件を使うかを先に決めると、必要な根拠をそろえやすいよ。",
        "detail": "∠A＝90°の三角形ABCで、Aから斜辺BCの内部へ垂線AHを下ろす。△HBAと△ABCでは∠BHAと∠BACが90°で、HはBC上なので∠HBA＝∠ABC。二組の角が等しく、△HBA∽△ABCといえる。頂点の順序H-B-AとA-B-Cにも理由がある。"
      },
      "js": {
        "short": "証明では仮定と結論を分け、相似条件を満たす根拠を順に示す。直角三角形の斜辺への垂線で生じる三角形は、直角と共通する角を用いて相似を確かめられる。",
        "detail": "非退化な直角三角形ABC、∠A＝90°、HはBCの内部、AH⊥BCとする。△ABC∽△HBA∽△HACで、対応順は角の等しさから定まる。例えばAB＝4,AC＝3,BC＝5なら、BH/AB＝AB/BCからBH＝16/5、AH/AC＝AB/BCからAH＝12/5。比を立てる前に頂点の対応を確認し、結論である相似を根拠に循環させない。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "小さい三角形の対応を追う",
        "text": "架空の直角三角形ABCでAが直角、Hは斜辺BC内部の垂線の足とする。小三角形HBAのHの直角が大三角形ABCのAへ、BがBへ、AがCへ対応する。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "根拠から結論へつなぐ",
        "text": "教材の証明では、AH⊥BCから直角の等しさ、HがBC内部からBの角の等しさを得る。その二つを相似条件へつなぎ、まだ示していない相似を先に仮定しない。",
        "activityIds": [
          "prog-scratch"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "∠A＝90°の△ABCでHはBC内部、AH⊥BC。△HBAの直角は？",
        "options": [
          "∠BHA",
          "∠HBA",
          "∠HAB"
        ],
        "answer": "∠BHA",
        "explanation": "AHとBCが垂直で、BHはBC上にある。",
        "hint": "角の真ん中の文字が頂点。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "△ABCでHが線分BCの内部なら、∠HBAと等しいのは？",
        "options": [
          "∠BAC",
          "∠ACB",
          "∠ABC"
        ],
        "answer": "∠ABC",
        "explanation": "BからHへの半直線はBからCへの半直線と同じ。",
        "hint": "HがBCの外側の場合と混ぜない。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "∠A＝90°、HはBC内部、AH⊥BCの△ABCで、△HBA∽△ABCに使える条件は？",
        "options": [
          "面積が等しい",
          "二組の角が等しい",
          "三辺が全て同じ長さ"
        ],
        "answer": "二組の角が等しい",
        "explanation": "HとAの直角、Bの角の二組が一致。",
        "hint": "長さがなくても示せる条件を探す。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "△ABC∽△HBAという対応で、辺ABに対応する辺は？",
        "options": [
          "HB",
          "HA",
          "BA"
        ],
        "answer": "HB",
        "explanation": "A-H、B-BなのでAB-HB。",
        "hint": "同じ文字があっても対応順を守る。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "△ABC∽△HBA、AB＝4cm、BC＝5cmのとき、BH/AB＝AB/BCよりBHは？",
        "answer": 3.2,
        "explanation": "BH/4＝4/5なのでBH＝16/5＝3.2cm。",
        "hint": "対応する辺の比を式どおりに使う。",
        "suffix": "cm",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "△ABC∽△HBA、AB＝4cm、AC＝3cm、BC＝5cmのとき、AH/AC＝AB/BCよりAHは？",
        "answer": 2.4,
        "explanation": "AH/3＝4/5なのでAH＝12/5＝2.4cm。",
        "hint": "3に対応倍率4/5をかける。",
        "suffix": "cm",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "相似をこれから示す証明で、「相似だから二角が等しい」を根拠にするのは？",
        "options": [
          "結論を先に使っていて不適切",
          "いつでも正しい証明",
          "数値がなくても常に十分"
        ],
        "answer": "結論を先に使っていて不適切",
        "explanation": "仮定や既に確かめた性質から角の等しさを導く必要がある。",
        "hint": "根拠と結論が循環していないか見る。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "証明で図が似て見えることだけを相似の根拠にしてよい？",
        "options": [
          "よい。図を大きくすれば十分",
          "よい。同じ色なら相似",
          "よくない。仮定と相似条件が必要"
        ],
        "answer": "よくない。仮定と相似条件が必要",
        "explanation": "図の見た目や計測だけでは一般の性質の理由にならない。",
        "hint": "使える条件を言葉と式で示す。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：∠A＝90°、HはBC内部、AH⊥BCの△ABCで、△HBAと△ABCのBの角は？",
      "options": [
        "等しいとは限らない",
        "等しい",
        "必ず2倍"
      ],
      "answer": "等しい",
      "explanation": "BHとBCは同じ方向の半直線なので同じ角。",
      "hint": "線分内部という条件を使う。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "角の根拠をそろえて相似へ",
      "prompt": "∠A＝90°の△ABCでHはBC内部、AH⊥BCとする。△HBA∽△ABCを示そう。",
      "steps": [
        {
          "text": "AH⊥BCより∠BHA＝90°で、仮定の∠BAC＝90°と等しい。"
        },
        {
          "text": "HはBC内部なのでBHとBCは同じ半直線上にあり、∠HBA＝∠ABC。"
        },
        {
          "text": "二組の角がそれぞれ等しいので、二角の相似条件を使う。"
        },
        {
          "text": "対応はH-A、B-B、A-Cとなり、△HBA∽△ABC。"
        }
      ],
      "answer": "△HBA∽△ABC",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "図が相似に見えれば、対応順序や角の根拠は不要である。",
      "correction": "見た目だけでは証明にならない。仮定から二組の角などを示し、その対応に沿って相似の記号を書く。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "直角三角形ABCの斜辺BC内部へ下ろした垂線AHから、△HBAと△ABCの相似を説明しよう。",
        "followUp": "相似と書くとき、頂点の順序は何を表す？",
        "checkpoints": [
          "直角とBの角の等しさを根拠にした。",
          "二角の条件と頂点の対応を示した。"
        ],
        "sample": "HとAが直角で、BHはBCと同じ方向なのでBの角も等しい。二角の条件で相似となり、H-B-AとA-B-Cが対応する。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "相似を示すときは、仮定から等しい角や辺の比を探そう。どの相似条件を使うかを先に決めると、必要な根拠をそろえやすいよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "∠A＝90°の三角形ABCで、Aから斜辺BCの内部へ垂線AHを下ろす。△HBAと△ABCでは∠BHAと∠BACが90°で、HはBC上なので∠HBA＝∠ABC。二組の角が等しく、△HBA∽△ABCといえる。頂点の順序H-B-AとA-B-Cにも理由がある。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "証明では仮定と結論を分け、相似条件を満たす根拠を順に示す。直角三角形の斜辺への垂線で生じる三角形は、直角と共通する角を用いて相似を確かめられる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "非退化な直角三角形ABC、∠A＝90°、HはBCの内部、AH⊥BCとする。△ABC∽△HBA∽△HACで、対応順は角の等しさから定まる。例えばAB＝4,AC＝3,BC＝5なら、BH/AB＝AB/BCからBH＝16/5、AH/AC＝AB/BCからAH＝12/5。比を立てる前に頂点の対応を確認し、結論である相似を根拠に循環させない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の直角三角形ABCでAが直角、Hは斜辺BC内部の垂線の足とする。小三角形HBAのHの直角が大三角形ABCのAへ、BがBへ、AがCへ対応する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材の証明では、AH⊥BCから直角の等しさ、HがBC内部からBの角の等しさを得る。その二つを相似条件へつなぎ、まだ示していない相似を先に仮定しない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "∠A＝90°の△ABCでHはBC内部、AH⊥BC。△HBAの直角は？ 正答：∠BHA。 AHとBCが垂直で、BHはBC上にある。 考える手がかり：角の真ん中の文字が頂点。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "△ABCでHが線分BCの内部なら、∠HBAと等しいのは？ 正答：∠ABC。 BからHへの半直線はBからCへの半直線と同じ。 考える手がかり：HがBCの外側の場合と混ぜない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "∠A＝90°、HはBC内部、AH⊥BCの△ABCで、△HBA∽△ABCに使える条件は？ 正答：二組の角が等しい。 HとAの直角、Bの角の二組が一致。 考える手がかり：長さがなくても示せる条件を探す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "△ABC∽△HBAという対応で、辺ABに対応する辺は？ 正答：HB。 A-H、B-BなのでAB-HB。 考える手がかり：同じ文字があっても対応順を守る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "△ABC∽△HBA、AB＝4cm、BC＝5cmのとき、BH/AB＝AB/BCよりBHは？ 正答：3.2。 BH/4＝4/5なのでBH＝16/5＝3.2cm。 考える手がかり：対応する辺の比を式どおりに使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "△ABC∽△HBA、AB＝4cm、AC＝3cm、BC＝5cmのとき、AH/AC＝AB/BCよりAHは？ 正答：2.4。 AH/3＝4/5なのでAH＝12/5＝2.4cm。 考える手がかり：3に対応倍率4/5をかける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "相似をこれから示す証明で、「相似だから二角が等しい」を根拠にするのは？ 正答：結論を先に使っていて不適切。 仮定や既に確かめた性質から角の等しさを導く必要がある。 考える手がかり：根拠と結論が循環していないか見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "証明で図が似て見えることだけを相似の根拠にしてよい？ 正答：よくない。仮定と相似条件が必要。 図の見た目や計測だけでは一般の性質の理由にならない。 考える手がかり：使える条件を言葉と式で示す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：∠A＝90°、HはBC内部、AH⊥BCの△ABCで、△HBAと△ABCのBの角は？ 正答：等しい。 BHとBCは同じ方向の半直線なので同じ角。 考える手がかり：線分内部という条件を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "直角三角形ABCの斜辺BC内部へ下ろした垂線AHから、△HBAと△ABCの相似を説明しよう。 相似と書くとき、頂点の順序は何を表す？ HとAが直角で、BHはBCと同じ方向なのでBの角も等しい。二角の条件で相似となり、H-B-AとA-B-Cが対応する。 確認項目：直角とBの角の等しさを根拠にした。 / 二角の条件と頂点の対応を示した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "∠A＝90°の△ABCでHはBC内部、AH⊥BCとする。△HBA∽△ABCを示そう。 AH⊥BCより∠BHA＝90°で、仮定の∠BAC＝90°と等しい。 HはBC内部なのでBHとBCは同じ半直線上にあり、∠HBA＝∠ABC。 二組の角がそれぞれ等しいので、二角の相似条件を使う。 対応はH-A、B-B、A-Cとなり、△HBA∽△ABC。 結論：△HBA∽△ABC",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「図が相似に見えれば、対応順序や角の根拠は不要である。」は誤り。見た目だけでは証明にならない。仮定から二組の角などを示し、その対応に沿って相似の記号を書く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "∠A=90°の非退化△ABCでHはBC内部、AH⊥BCなら△ABC∽△HBA∽△HAC。AB4,AC3,BC5でAH12/5,BH16/5,CH9/5。垂線の足の内部条件と頂点順序を保つ。 操作図の範囲：直角三角形A(0,0),B(4,0),C(0,3)でH(36/25,48/25)はBC内部の垂線の足。AB4,AC3,BC5、AH12/5,BH16/5,CH9/5。直角の位置と共有角から△ABC∽△HBA∽△HACの対応順が成立する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233212200000",
    "grade": 9,
    "title": "平行線と線分の比",
    "domain": "B",
    "order": 32,
    "goal": "平行線でできる相似から辺の分割比を求め、中点連結定理を説明する。",
    "coverageCodes": [
      "8350233212100000",
      "8350233212200000"
    ],
    "explanations": {
      "es": {
        "short": "三角形ABCの辺AB,ACの内部にD,Eを取り、DEをBCに平行にすると△ADEと△ABCは相似。AD/AB、AE/AC、DE/BCは同じ比になるよ。",
        "detail": "DE∥BCなら平行線の同位角が等しく、Aの角も共通なので△ADE∽△ABC。ADがABの2/5ならDEもBCの2/5になる。AD:DBが2:3のときは、AB全体は2＋3＝5個分だからAD:AB＝2:5。部分どうしの比と、部分と全体の比を分けて読む。"
      },
      "js": {
        "short": "△ABCでD,Eをそれぞれ辺AB,ACの内部に取りDE∥BCとすると、AD/AB＝AE/AC＝DE/BC。またAD/DB＝AE/ECとなる。",
        "detail": "平行線でできる角の等しさから相似条件を満たし、対応辺の比を得る。特にD,EがAB,ACの中点ならAD/AB＝AE/AC＝1/2で、DE∥BCかつDE＝BC/2となる。これを中点連結定理という。逆向きに平行を結論とする場合は、同じ頂点から測った辺の内部の比が等しいという仮定をそろえ、相似から角を確認する。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "部分と全体を色で分ける",
        "text": "架空の△ABCでDはAB内部、AD:DB＝2:3とする。AB全体は5個分なのでAD/AB＝2/5。部分DBを分母にした2/3とは区別する。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "craft",
        "title": "中点をつないだ支え",
        "text": "架空の三角形の枠で二辺の中点を結ぶ。中点連結定理により、支えは残る辺と平行で長さはその半分になる。元の辺8cmなら支え4cm。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "△ABCでD,Eは辺AB,AC内部、DE∥BC。このとき相似なのは？",
        "options": [
          "△ADBと△AEC",
          "△DBCと△ABC",
          "△ADEと△ABC"
        ],
        "answer": "△ADEと△ABC",
        "explanation": "Aが共通で、平行線による対応角も等しい。",
        "hint": "D-B、E-Cの対応をたどる。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "Dは線分AB内部でAD:DB＝2:3。AD:ABは？",
        "options": [
          "3:5",
          "2:5",
          "2:3"
        ],
        "answer": "2:5",
        "explanation": "ABは2＋3＝5個分。",
        "hint": "分母が部分か全体かを見る。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "△ABCでD,EはAB,AC内部、DE∥BC、AD/AB＝2/5、BC＝10cm。DEは？",
        "answer": 4,
        "explanation": "DE/BC＝2/5なので10×2/5＝4cm。",
        "hint": "対応辺は同じ比。",
        "suffix": "cm",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "△ABCでD,EはAB,ACの中点、BC＝8cm。DEは？",
        "answer": 4,
        "explanation": "中点連結定理でBCの半分。",
        "hint": "中点から相似比1:2を読む。",
        "suffix": "cm",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "三角形の二辺の中点を結ぶ線分について正しいのは？",
        "options": [
          "第三の辺に平行で、2倍の長さ",
          "第三の辺に平行で、その半分の長さ",
          "第三の辺に垂直で、同じ長さ"
        ],
        "answer": "第三の辺に平行で、その半分の長さ",
        "explanation": "二辺上の比1/2から相似が得られる。",
        "hint": "向きと長さの両方を確認する。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "△ABCでD,EはAB,AC内部、DE∥BC。AD:DB＝2:3ならAE:ECは？",
        "options": [
          "2:3",
          "2:5",
          "3:2"
        ],
        "answer": "2:3",
        "explanation": "対応する辺の同じ部分どうしの比が等しい。",
        "hint": "分母を全体ACへ変えない。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "△ABCでD,EはAB,AC内部、AD/AB＝AE/AC。DE∥BCと説明する出発点は？",
        "options": [
          "平行と仮定して平行を結論にする",
          "図が水平に見えることだけを使う",
          "二辺の比と共通の∠Aから相似を示す"
        ],
        "answer": "二辺の比と共通の∠Aから相似を示す",
        "explanation": "比とその間の角から相似、対応角の等しさから平行を示せる。",
        "hint": "証明したいことを最初に仮定しない。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "△ABCでD,EはAB,AC内部だが平行や比の情報がない。DE/BC＝AD/ABと必ずいえる？",
        "options": [
          "Dだけが中点なら必ずいえる",
          "いえない。相似を支える条件が不足",
          "必ずいえる"
        ],
        "answer": "いえない。相似を支える条件が不足",
        "explanation": "辺上の点というだけではDEの向きや比は定まらない。",
        "hint": "使う定理の前提を確かめる。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：△ABCでD,Eが二辺AB,ACの中点なら、DEとBCの長さの比は？",
      "options": [
        "1:2",
        "2:1",
        "1:1"
      ],
      "answer": "1:2",
      "explanation": "小三角形の対応辺は半分になる。",
      "hint": "どちらの三角形を先に比べるか読む。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "部分の比を全体へ直す",
      "prompt": "△ABCでD,EはAB,AC内部、DE∥BC、AD:DB＝2:3、BC＝15cm。DEを求めよう。",
      "steps": [
        {
          "text": "AB全体はADの2個分とDBの3個分を合わせて5個分。"
        },
        {
          "text": "AD/AB＝2/5へ直す。"
        },
        {
          "text": "平行線から△ADE∽△ABCなのでDE/BC＝2/5。"
        },
        {
          "text": "DE＝15×2/5＝6cmと求める。"
        }
      ],
      "answer": "DE＝6cm",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "AD:DB＝2:3なら、AD/ABも2/3である。",
      "correction": "DがAB内部ならAB＝AD＋DB。全体は5個分なのでAD/AB＝2/5。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "平行線で切った三角形で、部分どうしの比と部分対全体の比の違いを説明しよう。",
        "followUp": "二つの点が中点なら、どんな性質が出てくる？",
        "checkpoints": [
          "同じ頂点からの対応をそろえた。",
          "全体を部分の和として数えた。"
        ],
        "sample": "AD:DB＝2:3ならAD:AB＝2:5。DE∥BCならその2:5が小大の相似比になる。両点が中点ならDEはBCに平行で半分の長さ。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "三角形ABCの辺AB,ACの内部にD,Eを取り、DEをBCに平行にすると△ADEと△ABCは相似。AD/AB、AE/AC、DE/BCは同じ比になるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "DE∥BCなら平行線の同位角が等しく、Aの角も共通なので△ADE∽△ABC。ADがABの2/5ならDEもBCの2/5になる。AD:DBが2:3のときは、AB全体は2＋3＝5個分だからAD:AB＝2:5。部分どうしの比と、部分と全体の比を分けて読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "△ABCでD,Eをそれぞれ辺AB,ACの内部に取りDE∥BCとすると、AD/AB＝AE/AC＝DE/BC。またAD/DB＝AE/ECとなる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "平行線でできる角の等しさから相似条件を満たし、対応辺の比を得る。特にD,EがAB,ACの中点ならAD/AB＝AE/AC＝1/2で、DE∥BCかつDE＝BC/2となる。これを中点連結定理という。逆向きに平行を結論とする場合は、同じ頂点から測った辺の内部の比が等しいという仮定をそろえ、相似から角を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の△ABCでDはAB内部、AD:DB＝2:3とする。AB全体は5個分なのでAD/AB＝2/5。部分DBを分母にした2/3とは区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の三角形の枠で二辺の中点を結ぶ。中点連結定理により、支えは残る辺と平行で長さはその半分になる。元の辺8cmなら支え4cm。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "△ABCでD,Eは辺AB,AC内部、DE∥BC。このとき相似なのは？ 正答：△ADEと△ABC。 Aが共通で、平行線による対応角も等しい。 考える手がかり：D-B、E-Cの対応をたどる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "Dは線分AB内部でAD:DB＝2:3。AD:ABは？ 正答：2:5。 ABは2＋3＝5個分。 考える手がかり：分母が部分か全体かを見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "△ABCでD,EはAB,AC内部、DE∥BC、AD/AB＝2/5、BC＝10cm。DEは？ 正答：4。 DE/BC＝2/5なので10×2/5＝4cm。 考える手がかり：対応辺は同じ比。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "△ABCでD,EはAB,ACの中点、BC＝8cm。DEは？ 正答：4。 中点連結定理でBCの半分。 考える手がかり：中点から相似比1:2を読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "三角形の二辺の中点を結ぶ線分について正しいのは？ 正答：第三の辺に平行で、その半分の長さ。 二辺上の比1/2から相似が得られる。 考える手がかり：向きと長さの両方を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "△ABCでD,EはAB,AC内部、DE∥BC。AD:DB＝2:3ならAE:ECは？ 正答：2:3。 対応する辺の同じ部分どうしの比が等しい。 考える手がかり：分母を全体ACへ変えない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "△ABCでD,EはAB,AC内部、AD/AB＝AE/AC。DE∥BCと説明する出発点は？ 正答：二辺の比と共通の∠Aから相似を示す。 比とその間の角から相似、対応角の等しさから平行を示せる。 考える手がかり：証明したいことを最初に仮定しない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "△ABCでD,EはAB,AC内部だが平行や比の情報がない。DE/BC＝AD/ABと必ずいえる？ 正答：いえない。相似を支える条件が不足。 辺上の点というだけではDEの向きや比は定まらない。 考える手がかり：使う定理の前提を確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：△ABCでD,Eが二辺AB,ACの中点なら、DEとBCの長さの比は？ 正答：1:2。 小三角形の対応辺は半分になる。 考える手がかり：どちらの三角形を先に比べるか読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "平行線で切った三角形で、部分どうしの比と部分対全体の比の違いを説明しよう。 二つの点が中点なら、どんな性質が出てくる？ AD:DB＝2:3ならAD:AB＝2:5。DE∥BCならその2:5が小大の相似比になる。両点が中点ならDEはBCに平行で半分の長さ。 確認項目：同じ頂点からの対応をそろえた。 / 全体を部分の和として数えた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "△ABCでD,EはAB,AC内部、DE∥BC、AD:DB＝2:3、BC＝15cm。DEを求めよう。 AB全体はADの2個分とDBの3個分を合わせて5個分。 AD/AB＝2/5へ直す。 平行線から△ADE∽△ABCなのでDE/BC＝2/5。 DE＝15×2/5＝6cmと求める。 結論：DE＝6cm",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「AD:DB＝2:3なら、AD/ABも2/3である。」は誤り。DがAB内部ならAB＝AD＋DB。全体は5個分なのでAD/AB＝2/5。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "非退化△ABCでD∈AB内部,E∈AC内部,DE∥BCならAD/AB=AE/AC=DE/BC=t(0<t<1)、AD/DB=AE/EC=t/(1−t)。中点ならt=1/2でDE∥BC,DE=BC/2。 操作図の範囲：非退化三角形A(0,3),B(−3,0),C(3,0)のAB,AC内部に比t=1/3,1/2,2/3でD,Eを置く。DE∥BC、AD/AB=AE/AC=DE/BC=t、BC6よりDE6t、AD/DB=t/(1−t)。t=1/2なら中点連結定理。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233211000000",
    "grade": 9,
    "title": "相似比と面積比",
    "domain": "B",
    "order": 33,
    "goal": "対応する長さがk倍なら面積がk²倍となる理由を底辺と高さで説明する。",
    "coverageCodes": [
      "8350233211000000",
      "8350233211200000"
    ],
    "explanations": {
      "es": {
        "short": "相似な図形で辺がk倍（k>0）になると、面積はk²倍になる。縦だけでなく横も同じ倍率になるためだよ。",
        "detail": "一辺2cmの正方形を2倍に拡大すると一辺4cm。面積は4cm²から16cm²へ4倍になる。三角形でも底辺と高さが両方2倍なら面積は4倍。相似比2:3に対して面積比は4:9で、同じ2:3にはならない。"
      },
      "js": {
        "short": "非退化な相似図形で相似比a:b（a,b>0）なら面積比はa²:b²。一方から他方へ長さがk倍なら面積はk²倍となる。",
        "detail": "三角形の底辺bと高さhを両方k倍にすると、面積は(kb)(kh)/2＝k²(bh/2)。面積比9:16から正の相似比を求めるなら3:4となる。辺だけを一方向へ伸ばした相似でない図形に、同じ相似比の規則を無条件に使ってはいけない。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "四つの小正方形で見る",
        "text": "架空の正方形を一辺2cmから4cmへ拡大する。元の正方形を縦2枚、横2枚に並べた面積4倍と対応する。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "craft",
        "title": "三角形の型紙を拡大する",
        "text": "底辺3cm、高さ2cmの架空の三角形の面積は3cm²。相似に3倍へ拡大すると底辺9cm、高さ6cmで面積27cm²、元の9倍。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "相似な図形の長さが2倍になると、面積は？",
        "options": [
          "8倍",
          "4倍",
          "2倍"
        ],
        "answer": "4倍",
        "explanation": "二方向が2倍になり2²＝4倍。",
        "hint": "長さ・面積・体積の倍率を分ける。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "面積3cm²の三角形を相似に3倍へ拡大した。面積は？",
        "answer": 27,
        "explanation": "3×3²＝27cm²。",
        "hint": "面積へ長さ倍率の二乗をかける。",
        "suffix": "cm²",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "相似比2:3の二図形の面積比は？",
        "options": [
          "2:3",
          "8:27",
          "4:9"
        ],
        "answer": "4:9",
        "explanation": "両方を二乗する。",
        "hint": "比の向きは保つ。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "相似な二図形の面積比が9:16なら、相似比は？",
        "options": [
          "81:256",
          "3:4",
          "9:16"
        ],
        "answer": "3:4",
        "explanation": "正の長さの比なので、それぞれの正の平方根を取る。",
        "hint": "長さの比は正。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "面積20cm²の図形を相似に1/2倍へ縮小した。面積は？",
        "answer": 5,
        "explanation": "20×(1/2)²＝5cm²。",
        "hint": "縮小倍率も二乗する。",
        "suffix": "cm²",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "相似な三角形の面積がk²倍になる理由は？",
        "options": [
          "底辺だけがk倍",
          "角をk倍する",
          "底辺と対応する高さがともにk倍"
        ],
        "answer": "底辺と対応する高さがともにk倍",
        "explanation": "面積の底辺×高さ/2で二つの倍率がかかる。",
        "hint": "高さの対応も見る。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "正方形の横だけを2倍にした長方形へ、相似比2として面積4倍を使える？",
        "options": [
          "使える。四つの角が同じだから",
          "使えない。縦横を同じ倍率にしていない",
          "使える。横を2倍にしたから"
        ],
        "answer": "使えない。縦横を同じ倍率にしていない",
        "explanation": "一方向だけの拡大は元の正方形と相似でない。",
        "hint": "形が保たれているか先に確認する。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "number",
        "prompt": "相似な二図形の長さの比が1:3。小さい面積が4cm²なら大きい面積は？",
        "answer": 36,
        "explanation": "面積比は1:9なので4×9＝36。",
        "hint": "長さ比を面積比へ直す。",
        "suffix": "cm²",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：相似比1:2なら、小さい方の面積は大きい方の何分の一？",
      "options": [
        "1/2",
        "1/8",
        "1/4"
      ],
      "answer": "1/4",
      "explanation": "面積比1:4になる。",
      "hint": "比を二乗してから読む。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "二方向の倍率を面積へ",
      "prompt": "底辺3cm、高さ2cmの三角形を相似に2倍へ拡大しよう。",
      "steps": [
        {
          "text": "元の面積は3×2/2＝3cm²。"
        },
        {
          "text": "底辺は6cm、高さは4cmになる。"
        },
        {
          "text": "拡大後の面積は6×4/2＝12cm²。"
        },
        {
          "text": "12/3＝4で、長さ倍率2の二乗と一致する。"
        }
      ],
      "answer": "面積12cm²、元の4倍。",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "相似比が2:3なら、面積比も2:3である。",
      "correction": "面積比は相似比の二乗で4:9。底辺と高さの両方が同じ倍率で変わるため。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "相似な三角形の長さがk倍なら面積がk²倍になる理由を説明しよう。",
        "followUp": "面積比から長さ比を戻すとき、負の比を選ぶ？",
        "checkpoints": [
          "底辺と高さの二つの倍率を示した。",
          "長さの比が正であることを保った。"
        ],
        "sample": "面積の底辺×高さ/2の両方にkがかかってk²倍。面積比から戻す長さ比は正の平方根を使う。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "相似な図形で辺がk倍（k>0）になると、面積はk²倍になる。縦だけでなく横も同じ倍率になるためだよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "一辺2cmの正方形を2倍に拡大すると一辺4cm。面積は4cm²から16cm²へ4倍になる。三角形でも底辺と高さが両方2倍なら面積は4倍。相似比2:3に対して面積比は4:9で、同じ2:3にはならない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "非退化な相似図形で相似比a:b（a,b>0）なら面積比はa²:b²。一方から他方へ長さがk倍なら面積はk²倍となる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "三角形の底辺bと高さhを両方k倍にすると、面積は(kb)(kh)/2＝k²(bh/2)。面積比9:16から正の相似比を求めるなら3:4となる。辺だけを一方向へ伸ばした相似でない図形に、同じ相似比の規則を無条件に使ってはいけない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の正方形を一辺2cmから4cmへ拡大する。元の正方形を縦2枚、横2枚に並べた面積4倍と対応する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "底辺3cm、高さ2cmの架空の三角形の面積は3cm²。相似に3倍へ拡大すると底辺9cm、高さ6cmで面積27cm²、元の9倍。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "相似な図形の長さが2倍になると、面積は？ 正答：4倍。 二方向が2倍になり2²＝4倍。 考える手がかり：長さ・面積・体積の倍率を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "面積3cm²の三角形を相似に3倍へ拡大した。面積は？ 正答：27。 3×3²＝27cm²。 考える手がかり：面積へ長さ倍率の二乗をかける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "相似比2:3の二図形の面積比は？ 正答：4:9。 両方を二乗する。 考える手がかり：比の向きは保つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "相似な二図形の面積比が9:16なら、相似比は？ 正答：3:4。 正の長さの比なので、それぞれの正の平方根を取る。 考える手がかり：長さの比は正。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "面積20cm²の図形を相似に1/2倍へ縮小した。面積は？ 正答：5。 20×(1/2)²＝5cm²。 考える手がかり：縮小倍率も二乗する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "相似な三角形の面積がk²倍になる理由は？ 正答：底辺と対応する高さがともにk倍。 面積の底辺×高さ/2で二つの倍率がかかる。 考える手がかり：高さの対応も見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "正方形の横だけを2倍にした長方形へ、相似比2として面積4倍を使える？ 正答：使えない。縦横を同じ倍率にしていない。 一方向だけの拡大は元の正方形と相似でない。 考える手がかり：形が保たれているか先に確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "相似な二図形の長さの比が1:3。小さい面積が4cm²なら大きい面積は？ 正答：36。 面積比は1:9なので4×9＝36。 考える手がかり：長さ比を面積比へ直す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：相似比1:2なら、小さい方の面積は大きい方の何分の一？ 正答：1/4。 面積比1:4になる。 考える手がかり：比を二乗してから読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "相似な三角形の長さがk倍なら面積がk²倍になる理由を説明しよう。 面積比から長さ比を戻すとき、負の比を選ぶ？ 面積の底辺×高さ/2の両方にkがかかってk²倍。面積比から戻す長さ比は正の平方根を使う。 確認項目：底辺と高さの二つの倍率を示した。 / 長さの比が正であることを保った。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "底辺3cm、高さ2cmの三角形を相似に2倍へ拡大しよう。 元の面積は3×2/2＝3cm²。 底辺は6cm、高さは4cmになる。 拡大後の面積は6×4/2＝12cm²。 12/3＝4で、長さ倍率2の二乗と一致する。 結論：面積12cm²、元の4倍。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「相似比が2:3なら、面積比も2:3である。」は誤り。面積比は相似比の二乗で4:9。底辺と高さの両方が同じ倍率で変わるため。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "相似比a:b(a,b>0)で面積比a²:b²。底辺と対応高さがk倍(k>0)なら面積k²倍。辺2の正方形の面積4、底辺3高さ2の三角形の面積3を基準とする。 操作図の範囲：操作の基準は一辺2の正方形で面積4、底辺3高さ2の直角三角形で面積3。相似倍率k=0.5,1,2,3で面積はそれぞれ4k²,3k²、面積比k²。正の倍率で形を保ち、縦横を違う倍率へ変えた図形には適用しない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233212000000",
    "grade": 9,
    "title": "相似な立体と体積比",
    "domain": "B",
    "order": 34,
    "goal": "基本的な立体の対応を定め、相似比kと表面積比k²・体積比k³を結ぶ。",
    "coverageCodes": [
      "8350233211200000",
      "8350233212000000"
    ],
    "explanations": {
      "es": {
        "short": "相似な立体で長さがk倍（k>0）なら、面積はk²倍、体積はk³倍。三つの方向の長さが同じ倍率で変わることを確かめよう。",
        "detail": "一辺1cmの立方体を2倍へ拡大すると一辺2cm。各面の面積は4倍になり、体積は2×2×2＝8cm³で8倍。底の縦横だけでなく高さにも2がかかる。高さだけを変えた直方体は、元の立方体に相似とは限らない。"
      },
      "js": {
        "short": "正の相似比kの非退化な相似立体では、対応面や表面積はk²倍、体積はk³倍。長さ・面積・体積の比をそれぞれ区別する。",
        "detail": "立方体の辺を1から3へ拡大すると、表面積は6から54、体積は1から27となる。相似比2:3なら表面積比4:9、体積比8:27。基本的な柱体や錐体、球でも相似を保って拡大縮小する場合に同じ関係を使える。体積比が27:125なら正の相似比は3:5。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "箱を三方向へ広げる",
        "text": "架空の立方体の箱を辺1cmから2cmへ拡大する。小立方体を縦2、横2、高さ2に並べると8個分。表面の一面は4個分となる。",
        "activityIds": [
          "craft-cardboard"
        ]
      },
      {
        "category": "drawing",
        "title": "表面と中身を分ける",
        "text": "相似比2:3の二つの架空立体で、塗る表面の面積比は4:9、入る体積の比は8:27。どの量を比べるかを単位cm²/cm³でも区別する。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "相似な立体の長さが2倍なら体積は？",
        "options": [
          "8倍",
          "4倍",
          "2倍"
        ],
        "answer": "8倍",
        "explanation": "三方向へ2がかかり2³＝8倍。",
        "hint": "面積の二乗と区別する。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "一辺3cmの立方体の体積は？",
        "answer": 27,
        "explanation": "3×3×3＝27cm³。",
        "hint": "縦・横・高さをかける。",
        "suffix": "cm³",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "一辺3cmの立方体の表面積は？",
        "answer": 54,
        "explanation": "一面9cm²が6面で54cm²。",
        "hint": "体積の計算と分ける。",
        "suffix": "cm²",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "相似比2:3の立体の体積比は？",
        "options": [
          "8:27",
          "4:9",
          "2:3"
        ],
        "answer": "8:27",
        "explanation": "比の両方を三乗する。",
        "hint": "正の相似比の向きを保つ。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "相似比2:3の立体の表面積比は？",
        "options": [
          "8:27",
          "2:3",
          "4:9"
        ],
        "answer": "4:9",
        "explanation": "各対応面の面積が相似比の二乗になる。",
        "hint": "表面は面積の量。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "相似な立体の体積比が27:125なら、相似比は？",
        "options": [
          "27:125",
          "3:5",
          "9:25"
        ],
        "answer": "3:5",
        "explanation": "3³＝27、5³＝125で、長さの比は正。",
        "hint": "三乗になる数を探す。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "1×1×1の立方体の高さだけを2にした1×1×2の直方体は？",
        "options": [
          "元の立方体と相似でない",
          "相似比1:2の立体",
          "体積が同じ立体"
        ],
        "answer": "元の立方体と相似でない",
        "explanation": "三方向の倍率が1,1,2でそろわない。",
        "hint": "同じ形を保っているか先に確認する。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "number",
        "prompt": "体積80cm³の立体を相似に1/2倍へ縮小した。体積は？",
        "answer": 10,
        "explanation": "80×(1/2)³＝10cm³。",
        "hint": "縮小でも三乗の倍率。",
        "suffix": "cm³",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：立方体の辺を2倍にすると、表面積4倍と体積8倍は同時に成り立つ？",
      "options": [
        "表面積も8倍になる",
        "成り立つ",
        "体積も4倍になる"
      ],
      "answer": "成り立つ",
      "explanation": "表面は二方向、体積は三方向の積。",
      "hint": "比べる量の次元を分ける。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "面積比と体積比を分ける",
      "prompt": "一辺1cmの立方体を相似に2倍へ拡大しよう。",
      "steps": [
        {
          "text": "辺1cmは2cmとなり、長さの倍率は2。"
        },
        {
          "text": "一面は1cm²から4cm²で4倍、全表面も6cm²から24cm²で4倍。"
        },
        {
          "text": "体積は1cm³から2×2×2＝8cm³で8倍。"
        },
        {
          "text": "長さ2、面積4、体積8という三つの倍率を、単位とともに区別する。"
        }
      ],
      "answer": "長さ2倍、面積4倍、体積8倍。",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "相似な立体の体積も、辺と同じ倍率だけ増える。",
      "correction": "体積には縦・横・高さの三方向の倍率がかかる。長さk倍ならk³倍で、k²倍の面積とも区別する。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "相似比2の立方体で、面積4倍・体積8倍になる理由を説明しよう。",
        "followUp": "高さだけ2倍にした箱でも同じ関係を使える？",
        "checkpoints": [
          "二方向と三方向の積を分けた。",
          "相似であることを前提にした。"
        ],
        "sample": "面は縦横が2倍なので4倍、中身は高さも2倍なので8倍。高さだけなら同じ形の拡大でないため相似比2の規則を使えない。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "相似な立体で長さがk倍（k>0）なら、面積はk²倍、体積はk³倍。三つの方向の長さが同じ倍率で変わることを確かめよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "一辺1cmの立方体を2倍へ拡大すると一辺2cm。各面の面積は4倍になり、体積は2×2×2＝8cm³で8倍。底の縦横だけでなく高さにも2がかかる。高さだけを変えた直方体は、元の立方体に相似とは限らない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "正の相似比kの非退化な相似立体では、対応面や表面積はk²倍、体積はk³倍。長さ・面積・体積の比をそれぞれ区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "立方体の辺を1から3へ拡大すると、表面積は6から54、体積は1から27となる。相似比2:3なら表面積比4:9、体積比8:27。基本的な柱体や錐体、球でも相似を保って拡大縮小する場合に同じ関係を使える。体積比が27:125なら正の相似比は3:5。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の立方体の箱を辺1cmから2cmへ拡大する。小立方体を縦2、横2、高さ2に並べると8個分。表面の一面は4個分となる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "相似比2:3の二つの架空立体で、塗る表面の面積比は4:9、入る体積の比は8:27。どの量を比べるかを単位cm²/cm³でも区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "相似な立体の長さが2倍なら体積は？ 正答：8倍。 三方向へ2がかかり2³＝8倍。 考える手がかり：面積の二乗と区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "一辺3cmの立方体の体積は？ 正答：27。 3×3×3＝27cm³。 考える手がかり：縦・横・高さをかける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "一辺3cmの立方体の表面積は？ 正答：54。 一面9cm²が6面で54cm²。 考える手がかり：体積の計算と分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "相似比2:3の立体の体積比は？ 正答：8:27。 比の両方を三乗する。 考える手がかり：正の相似比の向きを保つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "相似比2:3の立体の表面積比は？ 正答：4:9。 各対応面の面積が相似比の二乗になる。 考える手がかり：表面は面積の量。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "相似な立体の体積比が27:125なら、相似比は？ 正答：3:5。 3³＝27、5³＝125で、長さの比は正。 考える手がかり：三乗になる数を探す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "1×1×1の立方体の高さだけを2にした1×1×2の直方体は？ 正答：元の立方体と相似でない。 三方向の倍率が1,1,2でそろわない。 考える手がかり：同じ形を保っているか先に確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "体積80cm³の立体を相似に1/2倍へ縮小した。体積は？ 正答：10。 80×(1/2)³＝10cm³。 考える手がかり：縮小でも三乗の倍率。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：立方体の辺を2倍にすると、表面積4倍と体積8倍は同時に成り立つ？ 正答：成り立つ。 表面は二方向、体積は三方向の積。 考える手がかり：比べる量の次元を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "相似比2の立方体で、面積4倍・体積8倍になる理由を説明しよう。 高さだけ2倍にした箱でも同じ関係を使える？ 面は縦横が2倍なので4倍、中身は高さも2倍なので8倍。高さだけなら同じ形の拡大でないため相似比2の規則を使えない。 確認項目：二方向と三方向の積を分けた。 / 相似であることを前提にした。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "一辺1cmの立方体を相似に2倍へ拡大しよう。 辺1cmは2cmとなり、長さの倍率は2。 一面は1cm²から4cm²で4倍、全表面も6cm²から24cm²で4倍。 体積は1cm³から2×2×2＝8cm³で8倍。 長さ2、面積4、体積8という三つの倍率を、単位とともに区別する。 結論：長さ2倍、面積4倍、体積8倍。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「相似な立体の体積も、辺と同じ倍率だけ増える。」は誤り。体積には縦・横・高さの三方向の倍率がかかる。長さk倍ならk³倍で、k²倍の面積とも区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "相似な非退化立体で長さ倍率k>0なら表面積倍率k²、体積倍率k³。辺1の立方体の表面積6,体積1、辺kで表面積6k²,体積k³。相似比2なら4,8倍。 操作図の範囲：操作例は一辺1とk=1,2,3の立方体。長さ比k、一面の面積比k²、表面積6と6k²、体積1とk³。辺2なら一面4・全表面24・体積8で、一面の面積と表面全体を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "motion",
        "text": "一辺1と2の立方体を比べ、長さ倍率2、一面の面積1と4、表面積6と24、体積1と8を区別する。大立方体の体積は同じ大きさの単位立方体を各層4個、二層で8個として数える。見えている一面の4を体積や全表面の値とはしない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233212300000",
    "grade": 9,
    "title": "相似を使った測定と活用",
    "domain": "B",
    "order": 35,
    "goal": "影・縮図などの仮定から相似を説明し、単位と測定の近似を含めて答える。",
    "coverageCodes": [
      "8350232100000000",
      "8350232200000000",
      "8350232300000000",
      "8350233212100000",
      "8350233212200000",
      "8350233212300000",
      "8350233511000000",
      "8350235100000000"
    ],
    "explanations": {
      "es": {
        "short": "測れない高さも、相似な三角形を作れば比で求められる。影を使うなら、地面が水平、棒や塔が鉛直、光線が平行で長さが0でない影ができるという条件を確かめよう。",
        "detail": "架空の模型で高さ2mの鉛直の棒の影が1m、鉛直の塔の影が4mとする。同じ水平面で同時に平行な光を当てると、二つの直角三角形は相似。高さと影の比が同じなので塔の高さhはh/4＝2/1、h＝8m。実測値が近似なら、求めた高さも近似として扱う。"
      },
      "js": {
        "short": "相似を測定へ用いる場合は、対応する角や辺の条件を確認し、同じ単位で比を立てる。理想化した模型の計算と、誤差を含む実測による推定を区別する。",
        "detail": "同時刻の平行な光、水平な地面、鉛直な二物体と長さが0でない影を仮定すると、影と高さでできる二三角形は二角が等しく相似になる。高さ2mの棒の影1mなら、高さ/影＝2。塔の影500cmは5mへそろえて高さ10mと求める。傾いた地面や異なる光の条件では、そのまま同じ比を使う根拠が失われる。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "模型で測る仕組みを作る",
        "text": "架空の水平な台に高さ2cmの鉛直の棒を立て、平行光で影1cmを作る。同じ条件の別の棒の影が3cmなら、高さは6cmと比から求められる。",
        "activityIds": [
          "craft-cardboard"
        ]
      },
      {
        "category": "drawing",
        "title": "縮図の単位を合わせる",
        "text": "縮尺1:100の架空の設計図で長さが6cmなら、対応する実際の長さは600cm＝6m。相似比の計算の前後で単位を確認する。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "水平面に鉛直な棒と塔があり、同時に平行な光で長さが0でない影を作る。相似の理由は？",
        "options": [
          "高さが必ず同じ",
          "影が必ず同じ長さ",
          "直角と光線の傾きに対応する角が等しい"
        ],
        "answer": "直角と光線の傾きに対応する角が等しい",
        "explanation": "二組の角の等しさから相似を示せる。",
        "hint": "図が似て見える以外の条件を使う。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "水平面・鉛直・同時の平行光という模型で、高さ2mの棒の影1m、塔の影4m。塔の高さは？",
        "answer": 8,
        "explanation": "高さ/影＝2なので4×2＝8m。",
        "hint": "対応する高さと影の順をそろえる。",
        "suffix": "m",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "水平面・鉛直・同時の平行光という模型で、高さ2mの棒の影1m、塔の影500cm。塔の高さは何m？",
        "answer": 10,
        "explanation": "500cm＝5mにそろえ、5×2＝10m。",
        "hint": "比の単位を先に統一する。",
        "suffix": "m",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "棒と塔の影から同じ比で高さを求める前に必要なのは？",
        "options": [
          "図の色を同じにすること",
          "影が整数になること",
          "水平・鉛直・光の平行など相似の条件"
        ],
        "answer": "水平・鉛直・光の平行など相似の条件",
        "explanation": "比の根拠は対応角の等しさ。",
        "hint": "数学的な仮定を探す。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "同じ棒でも光の向きを変えた後の影の比を、前の塔の影へそのまま使える？",
        "options": [
          "影の単位だけ同じなら必ず使える",
          "条件を確かめ直す必要がある",
          "必ず使える"
        ],
        "answer": "条件を確かめ直す必要がある",
        "explanation": "光線の傾きが異なると同じ角の相似とはいえない。",
        "hint": "時刻や光の条件をそろえる意味を考える。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "縮尺1:100の架空の図で6cmの長さは、実際には何m？",
        "answer": 6,
        "explanation": "6×100＝600cm＝6m。",
        "hint": "図と実際の比、その後の換算を分ける。",
        "suffix": "m",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "近似の測定値を使って相似比から得た高さは？",
        "options": [
          "常に厳密な真の高さ",
          "根号がなければ誤差0",
          "元の測定の誤差を含む近似として扱う"
        ],
        "answer": "元の測定の誤差を含む近似として扱う",
        "explanation": "計算が正しくても入力した測定値が近似なら結果もその影響を受ける。",
        "hint": "式の正しさと測定の確かさを分ける。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "高さ2m、影1mの棒と相似な影の三角形で、塔の影をs m、高さをh mとする式は？",
        "options": [
          "h/s＝1/2",
          "h/s＝2/1（s>0）",
          "h＋s＝3"
        ],
        "answer": "h/s＝2/1（s>0）",
        "explanation": "高さ/影の順で対応をそろえる。影0ではこの商を使わない。",
        "hint": "比べる量の順と分母を確認する。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：水平・鉛直・同時の平行光の模型で、棒の高さ/影＝2。塔の影3mなら高さは？",
      "options": [
        "6m",
        "1.5m",
        "3m"
      ],
      "answer": "6m",
      "explanation": "同じ高さ/影の比2を使い3×2＝6。",
      "hint": "条件と比の向きを確認する。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "仮定から相似を説明する",
      "prompt": "水平面の鉛直な棒と塔へ同時に平行光を当てる。棒2mの影1m、塔の影4mから高さを求めよう。",
      "steps": [
        {
          "text": "地面と物体の角はどちらも直角、光の傾きも同じと確認する。"
        },
        {
          "text": "二つの三角形は二角が等しいので相似。"
        },
        {
          "text": "対応する高さ/影をそろえ、h/4＝2/1と立てる。"
        },
        {
          "text": "h＝8m。模型で与えた値の結果であり、実測なら近似の影響も考える。"
        }
      ],
      "answer": "模型の塔の高さは8m。",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "影の長さが測れれば、地面や光の条件に関係なく同じ比で高さを求められる。",
      "correction": "相似の根拠となる角の条件が必要。水平な地面、鉛直な物体、同じ平行光などを確認してから比を使う。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "棒と塔の影から高さを求めるとき、相似の理由と単位の扱いを説明しよう。",
        "followUp": "入力が近似値なら、答えを厳密な真の値といってよい？",
        "checkpoints": [
          "角の条件から相似を示した。",
          "単位と測定誤差を確認した。"
        ],
        "sample": "水平と鉛直で直角、平行光で傾きが等しいから相似になる。長さの単位をそろえて比を使い、測定が近似なら結果も近似と述べる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "測れない高さも、相似な三角形を作れば比で求められる。影を使うなら、地面が水平、棒や塔が鉛直、光線が平行で長さが0でない影ができるという条件を確かめよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "架空の模型で高さ2mの鉛直の棒の影が1m、鉛直の塔の影が4mとする。同じ水平面で同時に平行な光を当てると、二つの直角三角形は相似。高さと影の比が同じなので塔の高さhはh/4＝2/1、h＝8m。実測値が近似なら、求めた高さも近似として扱う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "相似を測定へ用いる場合は、対応する角や辺の条件を確認し、同じ単位で比を立てる。理想化した模型の計算と、誤差を含む実測による推定を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "同時刻の平行な光、水平な地面、鉛直な二物体と長さが0でない影を仮定すると、影と高さでできる二三角形は二角が等しく相似になる。高さ2mの棒の影1mなら、高さ/影＝2。塔の影500cmは5mへそろえて高さ10mと求める。傾いた地面や異なる光の条件では、そのまま同じ比を使う根拠が失われる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の水平な台に高さ2cmの鉛直の棒を立て、平行光で影1cmを作る。同じ条件の別の棒の影が3cmなら、高さは6cmと比から求められる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "縮尺1:100の架空の設計図で長さが6cmなら、対応する実際の長さは600cm＝6m。相似比の計算の前後で単位を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "水平面に鉛直な棒と塔があり、同時に平行な光で長さが0でない影を作る。相似の理由は？ 正答：直角と光線の傾きに対応する角が等しい。 二組の角の等しさから相似を示せる。 考える手がかり：図が似て見える以外の条件を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "水平面・鉛直・同時の平行光という模型で、高さ2mの棒の影1m、塔の影4m。塔の高さは？ 正答：8。 高さ/影＝2なので4×2＝8m。 考える手がかり：対応する高さと影の順をそろえる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "水平面・鉛直・同時の平行光という模型で、高さ2mの棒の影1m、塔の影500cm。塔の高さは何m？ 正答：10。 500cm＝5mにそろえ、5×2＝10m。 考える手がかり：比の単位を先に統一する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "棒と塔の影から同じ比で高さを求める前に必要なのは？ 正答：水平・鉛直・光の平行など相似の条件。 比の根拠は対応角の等しさ。 考える手がかり：数学的な仮定を探す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "同じ棒でも光の向きを変えた後の影の比を、前の塔の影へそのまま使える？ 正答：条件を確かめ直す必要がある。 光線の傾きが異なると同じ角の相似とはいえない。 考える手がかり：時刻や光の条件をそろえる意味を考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "縮尺1:100の架空の図で6cmの長さは、実際には何m？ 正答：6。 6×100＝600cm＝6m。 考える手がかり：図と実際の比、その後の換算を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "近似の測定値を使って相似比から得た高さは？ 正答：元の測定の誤差を含む近似として扱う。 計算が正しくても入力した測定値が近似なら結果もその影響を受ける。 考える手がかり：式の正しさと測定の確かさを分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "高さ2m、影1mの棒と相似な影の三角形で、塔の影をs m、高さをh mとする式は？ 正答：h/s＝2/1（s>0）。 高さ/影の順で対応をそろえる。影0ではこの商を使わない。 考える手がかり：比べる量の順と分母を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：水平・鉛直・同時の平行光の模型で、棒の高さ/影＝2。塔の影3mなら高さは？ 正答：6m。 同じ高さ/影の比2を使い3×2＝6。 考える手がかり：条件と比の向きを確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "棒と塔の影から高さを求めるとき、相似の理由と単位の扱いを説明しよう。 入力が近似値なら、答えを厳密な真の値といってよい？ 水平と鉛直で直角、平行光で傾きが等しいから相似になる。長さの単位をそろえて比を使い、測定が近似なら結果も近似と述べる。 確認項目：角の条件から相似を示した。 / 単位と測定誤差を確認した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "水平面の鉛直な棒と塔へ同時に平行光を当てる。棒2mの影1m、塔の影4mから高さを求めよう。 地面と物体の角はどちらも直角、光の傾きも同じと確認する。 二つの三角形は二角が等しいので相似。 対応する高さ/影をそろえ、h/4＝2/1と立てる。 h＝8m。模型で与えた値の結果であり、実測なら近似の影響も考える。 結論：模型の塔の高さは8m。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「影の長さが測れれば、地面や光の条件に関係なく同じ比で高さを求められる。」は誤り。相似の根拠となる角の条件が必要。水平な地面、鉛直な物体、同じ平行光などを確認してから比を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "水平面・鉛直物体・同時の平行光で長さが0でない影を作る模型では影と高さの三角形がAA相似。棒高2,影1なら塔高=2×塔影(影>0)。単位をそろえ、実測値は近似として扱う。 操作図の範囲：操作の架空模型は水平面に鉛直な棒と塔を置き、同時の平行光で正の長さの影を作る。棒の高さ2m・影1m、塔の影s=1,2,3,4mから相似により塔の高さ2s=2,4,6,8m。実測の近似値と模型で指定した値を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233221100000",
    "grade": 9,
    "title": "円周角と中心角",
    "domain": "B",
    "order": 36,
    "goal": "弧を一つ指定し、それに対する中心角と円周角の関係を見付ける。",
    "coverageCodes": [
      "8350233221100000",
      "8350233222100000"
    ],
    "explanations": {
      "es": {
        "short": "同じ円周上の異なるA,B,Pで、Pを含まない弧ABを考える。その弧に対する円周角∠APBは、同じ弧の中心角の半分になるよ。",
        "detail": "円周のA,Bで分かれる二つの弧のうち一つを選び、Pをその弧と端点の外の円周上に置く。選んだ弧の中心角が120°なら円周角は60°。Pを許された弧の上で動かしても60°のまま。中心角はいつも小さい角とは限らず、選んだ大きい弧が240°なら円周角は120°となる。"
      },
      "js": {
        "short": "一つの円で、同じ弧に対する円周角の大きさは、その弧に対応する中心角の1/2である。円周角の頂点は対象の弧上でもその端点でもない円周上の点とする。",
        "detail": "円周上の相異なるA,B,Pについて、Pを含まない弧ABを特定して角を対応させる。中心角60°,120°,180°,240°には円周角30°,60°,90°,120°が対応する。弧ABを固定して残りの弧上でPを動かすと、同じ弧に対する円周角は一定となる。弧の指定を変えて小さい中心角だけを使うと対応を誤る。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "弧を先に色で選ぶ",
        "text": "架空の円で弧ABを120°分として印を付ける。Pはその弧にもA,Bにも置かず、残りの円周上を動かす。角∠APBは60°を保つ。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "点の許される範囲を決める",
        "text": "教材の円で、弧ABと端点を固定しPを残りの弧の内部にだけ置く。中心角240°の大きい弧を選んだ場合も、その同じ弧に対する円周角120°を表示する。",
        "activityIds": [
          "prog-scratch"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "一つの円で、選んだ弧ABの中心角が120°。その弧に対する円周角は？",
        "answer": 60,
        "explanation": "同じ弧の中心角の半分で60°。",
        "hint": "角の頂点が円周上か中心かを分ける。",
        "suffix": "°",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "一つの円で、選んだ弧ABの中心角が60°。その弧に対する円周角は？",
        "answer": 30,
        "explanation": "60÷2＝30°。",
        "hint": "対応する弧を変えない。",
        "suffix": "°",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "一つの円で、大きい弧ABに対応する中心角が240°。その弧に対する円周角は？",
        "answer": 120,
        "explanation": "240÷2＝120°。小さい中心角120°へ勝手に替えない。",
        "hint": "どちらの弧が指定されているか読む。",
        "suffix": "°",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "選んだ弧ABに対する円周角の頂点Pを置く場所は？",
        "options": [
          "必ず円の中心",
          "選んだ弧とA,Bを除いた円周上",
          "選んだ弧の内部だけ"
        ],
        "answer": "選んだ弧とA,Bを除いた円周上",
        "explanation": "角の頂点Pを含まない弧が対象となる。",
        "hint": "弧の端点と角の頂点を区別する。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "弧ABを固定し、Pを残りの弧の内部で動かすと円周角は？",
        "options": [
          "同じ大きさを保つ",
          "Pが右なら必ず大きくなる",
          "Pの移動距離だけ増える"
        ],
        "answer": "同じ大きさを保つ",
        "explanation": "同じ弧の中心角が一定なので半分の円周角も一定。",
        "hint": "変わらない根拠となる角を見る。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "同じ弧に対する円周角が35°のとき、対応する中心角は？",
        "answer": 70,
        "explanation": "円周角の2倍で70°。",
        "hint": "半分という関係を逆向きに読む。",
        "suffix": "°",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "大きい弧240°の円周角を求めるとき、小さい中心角120°を半分にして60°とするのは？",
        "options": [
          "正しい。円周角は必ず鋭角",
          "誤り。同じ弧の240°を使う",
          "正しい。中心角は必ず小さい方"
        ],
        "answer": "誤り。同じ弧の240°を使う",
        "explanation": "大きい弧に対する円周角は120°で鈍角にもなる。",
        "hint": "同じ二端点でも弧は二つある。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "円周角の頂点Pを端点Aと同じ場所へ置いても、同じ三点の角として扱える？",
        "options": [
          "扱えない。三点を異なる点にする",
          "扱える。角はいつも0になる",
          "扱える。中心角だけあればよい"
        ],
        "answer": "扱えない。三点を異なる点にする",
        "explanation": "角を作る半直線が定まらなくなるので退化を除く。",
        "hint": "頂点と端点を別にする理由を見る。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：同じ弧に対する中心角が180°なら円周角は？",
      "options": [
        "180°",
        "360°",
        "90°"
      ],
      "answer": "90°",
      "explanation": "180÷2＝90°。直径に対する円周角の関係へつながる。",
      "hint": "対応する中心角を半分にする。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "同じ弧を対応させる",
      "prompt": "円の中心O、相異なる円周上のA,B,Pで、Pを含まない弧ABの中心角が120°。∠APBを求めよう。",
      "steps": [
        {
          "text": "Pを含まない弧ABを選んだことを確認する。"
        },
        {
          "text": "その弧に対する中心角が120°であると読む。"
        },
        {
          "text": "円周角の定理を同じ弧へ使い、120÷2と計算する。"
        },
        {
          "text": "∠APB＝60°。Pを残りの弧の内部で動かしても同じ値。"
        }
      ],
      "answer": "∠APB＝60°",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "中心角は必ず小さい方を選んで半分にすればよい。",
      "correction": "円周角が対応する弧と同じ弧の中心角を使う。大きい弧240°に対応する円周角は120°である。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "円周角と中心角を比べるとき、先に弧を指定する理由を説明しよう。",
        "followUp": "Pを動かせる範囲はどこ？",
        "checkpoints": [
          "同じ弧に対する二つの角を対応させた。",
          "Pを対象弧と端点の外の円周上に置いた。"
        ],
        "sample": "同じA,Bでも二つの弧があるのでPを含まない方を選ぶ。その弧の中心角の半分が円周角で、Pは残りの弧の内部を動かせる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "同じ円周上の異なるA,B,Pで、Pを含まない弧ABを考える。その弧に対する円周角∠APBは、同じ弧の中心角の半分になるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "円周のA,Bで分かれる二つの弧のうち一つを選び、Pをその弧と端点の外の円周上に置く。選んだ弧の中心角が120°なら円周角は60°。Pを許された弧の上で動かしても60°のまま。中心角はいつも小さい角とは限らず、選んだ大きい弧が240°なら円周角は120°となる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "一つの円で、同じ弧に対する円周角の大きさは、その弧に対応する中心角の1/2である。円周角の頂点は対象の弧上でもその端点でもない円周上の点とする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "円周上の相異なるA,B,Pについて、Pを含まない弧ABを特定して角を対応させる。中心角60°,120°,180°,240°には円周角30°,60°,90°,120°が対応する。弧ABを固定して残りの弧上でPを動かすと、同じ弧に対する円周角は一定となる。弧の指定を変えて小さい中心角だけを使うと対応を誤る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の円で弧ABを120°分として印を付ける。Pはその弧にもA,Bにも置かず、残りの円周上を動かす。角∠APBは60°を保つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材の円で、弧ABと端点を固定しPを残りの弧の内部にだけ置く。中心角240°の大きい弧を選んだ場合も、その同じ弧に対する円周角120°を表示する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "一つの円で、選んだ弧ABの中心角が120°。その弧に対する円周角は？ 正答：60。 同じ弧の中心角の半分で60°。 考える手がかり：角の頂点が円周上か中心かを分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "一つの円で、選んだ弧ABの中心角が60°。その弧に対する円周角は？ 正答：30。 60÷2＝30°。 考える手がかり：対応する弧を変えない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "一つの円で、大きい弧ABに対応する中心角が240°。その弧に対する円周角は？ 正答：120。 240÷2＝120°。小さい中心角120°へ勝手に替えない。 考える手がかり：どちらの弧が指定されているか読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "選んだ弧ABに対する円周角の頂点Pを置く場所は？ 正答：選んだ弧とA,Bを除いた円周上。 角の頂点Pを含まない弧が対象となる。 考える手がかり：弧の端点と角の頂点を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "弧ABを固定し、Pを残りの弧の内部で動かすと円周角は？ 正答：同じ大きさを保つ。 同じ弧の中心角が一定なので半分の円周角も一定。 考える手がかり：変わらない根拠となる角を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "同じ弧に対する円周角が35°のとき、対応する中心角は？ 正答：70。 円周角の2倍で70°。 考える手がかり：半分という関係を逆向きに読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "大きい弧240°の円周角を求めるとき、小さい中心角120°を半分にして60°とするのは？ 正答：誤り。同じ弧の240°を使う。 大きい弧に対する円周角は120°で鈍角にもなる。 考える手がかり：同じ二端点でも弧は二つある。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "円周角の頂点Pを端点Aと同じ場所へ置いても、同じ三点の角として扱える？ 正答：扱えない。三点を異なる点にする。 角を作る半直線が定まらなくなるので退化を除く。 考える手がかり：頂点と端点を別にする理由を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：同じ弧に対する中心角が180°なら円周角は？ 正答：90°。 180÷2＝90°。直径に対する円周角の関係へつながる。 考える手がかり：対応する中心角を半分にする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "円周角と中心角を比べるとき、先に弧を指定する理由を説明しよう。 Pを動かせる範囲はどこ？ 同じA,Bでも二つの弧があるのでPを含まない方を選ぶ。その弧の中心角の半分が円周角で、Pは残りの弧の内部を動かせる。 確認項目：同じ弧に対する二つの角を対応させた。 / Pを対象弧と端点の外の円周上に置いた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "円の中心O、相異なる円周上のA,B,Pで、Pを含まない弧ABの中心角が120°。∠APBを求めよう。 Pを含まない弧ABを選んだことを確認する。 その弧に対する中心角が120°であると読む。 円周角の定理を同じ弧へ使い、120÷2と計算する。 ∠APB＝60°。Pを残りの弧の内部で動かしても同じ値。 結論：∠APB＝60°",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「中心角は必ず小さい方を選んで半分にすればよい。」は誤り。円周角が対応する弧と同じ弧の中心角を使う。大きい弧240°に対応する円周角は120°である。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "同一円の相異なるA,B,PでPを含まない弧ABに対する中心角θ(0<θ<360°)と円周角はθ,θ/2。θ60,120,180,240に30,60,90,120。Pは残弧の内部、端点と対象弧を除く。 操作図の範囲：同一円の異なるA,B,Pについて、AからBへ選んだ弧の中心角θ=60°,120°,180°,240°を固定する。Pは残る弧の1/4,1/2,3/4の内部に置き、角位置θ＋(360−θ)tで端点と一致しない。Pを含まない選択弧に対する円周角はθ/2=30°,60°,90°,120°。240°は大きい方の中心角を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "motion",
        "text": "同一円のA角位置0°、B120°で、選択弧は反時計回り0°から120°。この弧に対する中心角120°、弧の外の円周上Pからの円周角60°。最後にPを角位置240°から300°まで残る弧内で動かしても、選択弧と端点を固定するので途中も60°を保つ。A,B,Pは常に異なる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233222100000",
    "grade": 9,
    "title": "円周角の定理の理由と性質",
    "domain": "B",
    "order": 37,
    "goal": "半径でできる二等辺三角形を使って関係の理由を説明し、同じ弧と直径の性質を使う。",
    "coverageCodes": [
      "8350232100000000",
      "8350232200000000",
      "8350232300000000",
      "8350233221100000",
      "8350233222100000",
      "8350233513000000"
    ],
    "explanations": {
      "es": {
        "short": "円周角が中心角の半分になる関係は、半径でできる二等辺三角形を使って理由を考えられる。同じ弧に対する円周角は等しく、直径に対する円周角は90°になるよ。",
        "detail": "A,Pが直径の両端で、円周上の別の点Bを取る配置を考える。中心OはPA上にあり、OB＝OPなので△OBPは二等辺三角形。PとBの底角をαとすると、Oの外角∠AOBはα＋α＝2α。この配置で円周角が中心角の半分になる理由が分かる。"
      },
      "js": {
        "short": "半径の等しさと三角形の外角の性質を結び付け、円周角の定理が証明できることを理解する。同じ弧に対する円周角は等しく、直径に対する円周角は90°である。",
        "detail": "直径AP上の中心Oを用いる配置では、PからOへの半直線とPからAへの半直線が同じなので∠OPB＝∠APB。OB＝OPから∠PBOも同じαとなり、外角∠AOB＝2α。この説明では位置を固定し、どんな配置も同じ外角の式にそのまま当てはめるとはしない。直径ABの円周角は対応弧の中心角180°から90°と導ける。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "半径を補助線にする",
        "text": "架空の円で直径の両端A,Pと他の円周上のBを取り、中心OとBを結ぶ。OBとOPが等しい印を付け、二等辺三角形の底角を同じαと読む。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "craft",
        "title": "直角を円周に置く",
        "text": "架空の円でABを直径とし、A,Bとは異なる円周上のPを取る。∠APB＝90°となり、円周上の点の位置が変わっても直径に対する直角は保たれる。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "円の中心Oと円周上のB,Pについて、OB＝OPとなる理由は？",
        "options": [
          "同じ円の半径だから",
          "BとPが必ず同一点だから",
          "OBが必ず直径だから"
        ],
        "answer": "同じ円の半径だから",
        "explanation": "中心から円周までの長さは半径で等しい。",
        "hint": "点と線分の役割を確認する。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "OB＝OPの非退化△OBPで等しい底角は？",
        "options": [
          "∠BOPと∠OBP",
          "三角形の全ての角が必ず等しい",
          "∠OBPと∠BPO"
        ],
        "answer": "∠OBPと∠BPO",
        "explanation": "等しい二辺の向かいの角が等しい。",
        "hint": "頂点Oの角と底角を分ける。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "A,Pが直径の両端、Oは中心、Bは別の円周上の点。△OBPの底角が60°なら外角∠AOBは？",
        "answer": 120,
        "explanation": "外角は二つの内対角の和60＋60＝120°。",
        "hint": "OAはOPの反対向きの半直線。",
        "suffix": "°",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "直径AP上に中心Oがあり、BはA,P以外の円周上の点。このときPを頂点とする∠OPBと∠APBは？",
        "options": [
          "同じ角",
          "必ず半分",
          "必ず反対側の角"
        ],
        "answer": "同じ角",
        "explanation": "PからOとPからAは同じ半直線の方向。",
        "hint": "点の並びP-O-Aを見る。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "ABが円の直径でPはA,B以外の円周上の点。∠APBは？",
        "answer": 90,
        "explanation": "対応する弧の中心角180°の半分。",
        "hint": "直径が決める半円を見る。",
        "suffix": "°",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "同じ円の同じ弧に対する二つの円周角は？",
        "options": [
          "片方は必ず二倍",
          "等しい",
          "頂点間の距離だけ違う"
        ],
        "answer": "等しい",
        "explanation": "同じ中心角の半分なので等しい。",
        "hint": "共通の弧へ戻って比べる。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "円周角の理由を、中心Oが辺PA上にある配置で説明した。別配置では？",
        "options": [
          "補助線や角の関係を確認し直す",
          "同じ点の並びを無条件に仮定する",
          "円周角の定理そのものが必ず不成立"
        ],
        "answer": "補助線や角の関係を確認し直す",
        "explanation": "定理は成り立つが、この外角の説明の位置条件を守る。",
        "hint": "定理と一つの証明配置を分ける。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "ABが直径の円でPをAと同じ点にしても、∠APB＝90°を適用できる？",
        "options": [
          "できる。直径なら条件はない",
          "できる。角は自動的に作れる",
          "できない。Pは端点と異なる必要がある"
        ],
        "answer": "できない。Pは端点と異なる必要がある",
        "explanation": "退化して角が定まらない配置を除く。",
        "hint": "三つの異なる点を確かめる。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：直径ABに対する円周角を作るPを円周上で動かす。ただしA,Bは除く。角は？",
      "options": [
        "必ず60°",
        "90°のまま",
        "0°から360°へ自由に変わる"
      ],
      "answer": "90°のまま",
      "explanation": "同じ半円の中心角180°に対応する。",
      "hint": "端点を除く条件を保つ。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "一つの配置で理由を追う",
      "prompt": "直径APの中心をO、円周上の別の点をBとする。円周角∠APB＝αとおき、対応中心角との関係を説明しよう。",
      "steps": [
        {
          "text": "P-O-Aがこの順で一直線上なので∠OPB＝α。"
        },
        {
          "text": "OB＝OPは半径の等しさ。△OBPの底角∠PBOもα。"
        },
        {
          "text": "OAはOPの反対向きなので∠AOBは△OBPの外角。"
        },
        {
          "text": "外角は二つの内対角の和で2α。したがって円周角はこの中心角の半分。"
        }
      ],
      "answer": "この配置で∠AOB＝2∠APB。",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "図を測っていつも半分らしく見えれば、それだけで理由の説明になる。",
      "correction": "測定は予想に役立つが、理由には半径の等しさや外角の性質などを結び付ける。位置の条件も示して説明する。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "直径APを使う配置で、円周角が中心角の半分となる理由を説明しよう。",
        "followUp": "直径ABに対する円周角が90°なのはなぜ？",
        "checkpoints": [
          "半径の等しさから二つの底角をそろえた。",
          "外角の和または中心角180°を使った。"
        ],
        "sample": "OB＝OPで底角が等しく、Oの外角はその二つ分になる。直径に対する弧の中心角は180°なので円周角は90°。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "円周角が中心角の半分になる関係は、半径でできる二等辺三角形を使って理由を考えられる。同じ弧に対する円周角は等しく、直径に対する円周角は90°になるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "A,Pが直径の両端で、円周上の別の点Bを取る配置を考える。中心OはPA上にあり、OB＝OPなので△OBPは二等辺三角形。PとBの底角をαとすると、Oの外角∠AOBはα＋α＝2α。この配置で円周角が中心角の半分になる理由が分かる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "半径の等しさと三角形の外角の性質を結び付け、円周角の定理が証明できることを理解する。同じ弧に対する円周角は等しく、直径に対する円周角は90°である。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "直径AP上の中心Oを用いる配置では、PからOへの半直線とPからAへの半直線が同じなので∠OPB＝∠APB。OB＝OPから∠PBOも同じαとなり、外角∠AOB＝2α。この説明では位置を固定し、どんな配置も同じ外角の式にそのまま当てはめるとはしない。直径ABの円周角は対応弧の中心角180°から90°と導ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の円で直径の両端A,Pと他の円周上のBを取り、中心OとBを結ぶ。OBとOPが等しい印を付け、二等辺三角形の底角を同じαと読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の円でABを直径とし、A,Bとは異なる円周上のPを取る。∠APB＝90°となり、円周上の点の位置が変わっても直径に対する直角は保たれる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "円の中心Oと円周上のB,Pについて、OB＝OPとなる理由は？ 正答：同じ円の半径だから。 中心から円周までの長さは半径で等しい。 考える手がかり：点と線分の役割を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "OB＝OPの非退化△OBPで等しい底角は？ 正答：∠OBPと∠BPO。 等しい二辺の向かいの角が等しい。 考える手がかり：頂点Oの角と底角を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "A,Pが直径の両端、Oは中心、Bは別の円周上の点。△OBPの底角が60°なら外角∠AOBは？ 正答：120。 外角は二つの内対角の和60＋60＝120°。 考える手がかり：OAはOPの反対向きの半直線。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "直径AP上に中心Oがあり、BはA,P以外の円周上の点。このときPを頂点とする∠OPBと∠APBは？ 正答：同じ角。 PからOとPからAは同じ半直線の方向。 考える手がかり：点の並びP-O-Aを見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "ABが円の直径でPはA,B以外の円周上の点。∠APBは？ 正答：90。 対応する弧の中心角180°の半分。 考える手がかり：直径が決める半円を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "同じ円の同じ弧に対する二つの円周角は？ 正答：等しい。 同じ中心角の半分なので等しい。 考える手がかり：共通の弧へ戻って比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "円周角の理由を、中心Oが辺PA上にある配置で説明した。別配置では？ 正答：補助線や角の関係を確認し直す。 定理は成り立つが、この外角の説明の位置条件を守る。 考える手がかり：定理と一つの証明配置を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "ABが直径の円でPをAと同じ点にしても、∠APB＝90°を適用できる？ 正答：できない。Pは端点と異なる必要がある。 退化して角が定まらない配置を除く。 考える手がかり：三つの異なる点を確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：直径ABに対する円周角を作るPを円周上で動かす。ただしA,Bは除く。角は？ 正答：90°のまま。 同じ半円の中心角180°に対応する。 考える手がかり：端点を除く条件を保つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "直径APを使う配置で、円周角が中心角の半分となる理由を説明しよう。 直径ABに対する円周角が90°なのはなぜ？ OB＝OPで底角が等しく、Oの外角はその二つ分になる。直径に対する弧の中心角は180°なので円周角は90°。 確認項目：半径の等しさから二つの底角をそろえた。 / 外角の和または中心角180°を使った。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "直径APの中心をO、円周上の別の点をBとする。円周角∠APB＝αとおき、対応中心角との関係を説明しよう。 P-O-Aがこの順で一直線上なので∠OPB＝α。 OB＝OPは半径の等しさ。△OBPの底角∠PBOもα。 OAはOPの反対向きなので∠AOBは△OBPの外角。 外角は二つの内対角の和で2α。したがって円周角はこの中心角の半分。 結論：この配置で∠AOB＝2∠APB。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「図を測っていつも半分らしく見えれば、それだけで理由の説明になる。」は誤り。測定は予想に役立つが、理由には半径の等しさや外角の性質などを結び付ける。位置の条件も示して説明する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "直径APの中心Oと別の円周上Bに対しP-O-Aの順、OB=OP。α=∠APB=∠OPB=∠PBOより外角∠AOB=2α（この配置）。直径ABに対する非退化円周角は90°、同じ弧の円周角は等しい。 操作図の範囲：固定例は同じ円でAの角位置0°、B120°、P180°。Oは直径AP上で、△OBPは正三角形、∠APB60°、外角∠AOB120°。別例A0°,B180°,P270°はABが直径で∠APB90°。一つの配置の理由を全ての位置の証明と取り違えない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350235400000000",
    "grade": 9,
    "title": "円周角の定理の逆",
    "domain": "B",
    "order": 38,
    "goal": "同じ側にある二点が等しい角を作る条件から、四点が同一円周上にあると判断する。",
    "coverageCodes": [
      "8350233221100000",
      "8350233222200000",
      "8350235400000000"
    ],
    "explanations": {
      "es": {
        "short": "異なる四点A,B,P,Qで、P,Qが直線ABの同じ側にあり線上にはないとする。∠APB＝∠AQBなら、四点は一つの円周上にある。これが円周角の定理の逆だよ。",
        "detail": "円周角の定理は、同じ円と同じ弧から角の等しさを導く。逆では、角の等しさと同じ側という条件から四点が同じ円周上にあると判断する。A,B,P,Qは互いに異なる点とし、P,Qを直線AB上へ置かない。条件を省いて、角が等しいだけならどんな位置でもよいとはしない。"
      },
      "js": {
        "short": "相異なるA,B,P,Qで、P,Qが直線ABの同じ開半平面にあり、∠APB＝∠AQBなら四点は共円である。ここでは「同じ側で線上でない」と言い換えて条件を確認する。",
        "detail": "三点A,B,Pが一直線上にないと、それらを通る円が定まる。QがABのPと同じ側にあり同じ角を作るなら、円周角の定理の逆によりその円上にある。同じ側の条件を外したときは、この形の逆をそのまま使えない。対偶や逆を見た目だけで取り違えず、仮定と結論を分けて読む。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "角から円周上の点を探す",
        "text": "架空の固定A,Bに対して、PとQを直線ABの同じ側で線上でない場所に置く。四点を互いに異なる点に保ち、∠APBと∠AQBが等しくなると四点を通る円を考えられる。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "条件を一つずつ確認する",
        "text": "教材で四点が相異なること、P,QがABの同じ側で線上でないこと、二角が等しいことを順に確認する。最後に同一円周上という結論へ進む。",
        "activityIds": [
          "prog-scratch"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "円周角の定理の逆で、角の等しさに加えてP,Qの位置に必要なのは？",
        "options": [
          "どちらも直線AB上",
          "必ずABの反対側",
          "直線ABの同じ側で線上にない"
        ],
        "answer": "直線ABの同じ側で線上にない",
        "explanation": "同じ側という条件を仮定へ含める。",
        "hint": "使う定理の全文を読む。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "相異なるA,B,P,QでP,QがABの同じ側で線上になく、∠APB＝∠AQB。結論は？",
        "options": [
          "AP＝AQが必ず成り立つ",
          "四点は一つの円周上にある",
          "四点は一直線上にある"
        ],
        "answer": "四点は一つの円周上にある",
        "explanation": "等しい二角と位置の条件から共円を導く。",
        "hint": "等しい角が直接示す結論を確認する。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "円周角の定理の逆で、Pが直線AB上にある場合は？",
        "options": [
          "前提を満たさず、そのまま適用できない",
          "どんな場合も四点が円周上にある",
          "条件を確認せず使える"
        ],
        "answer": "前提を満たさず、そのまま適用できない",
        "explanation": "三点が共線となる退化した角を除く。",
        "hint": "円を決める三点が非共線かを見る。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "P,QがABの反対側にあり角が等しいと分かった。この形の逆を使ってよい？",
        "options": [
          "無条件で使ってよい",
          "四点は絶対に円周上にない",
          "同じ側の条件がないため、そのまま使わない"
        ],
        "answer": "同じ側の条件がないため、そのまま使わない",
        "explanation": "条件外だからこの定理からは断定できない。必ず不成立という意味でもない。",
        "hint": "適用不可と反対の結論を区別する。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "円周角の定理とその逆で入れ替わるのは？",
        "options": [
          "AとBの名前だけ",
          "仮定と結論",
          "二つの角の大きさだけ"
        ],
        "answer": "仮定と結論",
        "explanation": "円周上から角へ、角と位置から円周上へという向きが変わる。",
        "hint": "何から何を導くかを見る。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "相異なるA,B,P,QでP,QがABの同じ側、線上でなく、∠APBと∠AQBが共に90°。四点は？",
        "options": [
          "一つの円周上にある",
          "同じ側なので円周上にない",
          "角が直角なら逆は使えない"
        ],
        "answer": "一つの円周上にある",
        "explanation": "角の等しさと位置の条件を全て満たす。",
        "hint": "90°も等しい角の一例。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "AとPが同じ点なのに、四点の定理をそのまま使うのは？",
        "options": [
          "できる。点を重ねるほど条件が増える",
          "できる。角は必ず等しくなる",
          "できない。異なる点の条件が必要"
        ],
        "answer": "できない。異なる点の条件が必要",
        "explanation": "角が定まらない重複点を除く。",
        "hint": "点の相異性を確認する。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "四点が同じ円周上にあると結論したい証明で、それを最初に仮定して二角を示すのは？",
        "options": [
          "位置の条件が不要になる",
          "結論を先に仮定している",
          "逆の正しい証明である"
        ],
        "answer": "結論を先に仮定している",
        "explanation": "与えられた角と位置の条件から結論へ進める必要がある。",
        "hint": "根拠と結論の循環を避ける。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：互いに異なるA,B,P,Qで、P,QがABの同じ側かつ線上でなく∠APB＝∠AQB。図でQが円から少しずれて見えたら？",
      "options": [
        "条件が正しければ定理の逆で同一円周上と判断する",
        "見た目だけで定理を捨てる",
        "四点が共線と判断する"
      ],
      "answer": "条件が正しければ定理の逆で同一円周上と判断する",
      "explanation": "正確な条件を根拠にし、不正確な描画の見た目を根拠にしない。",
      "hint": "図と仮定の役割を分ける。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "逆の仮定をそろえる",
      "prompt": "相異なるA,B,P,QでP,Qは直線ABの同じ側にあり線上でなく、∠APB＝∠AQB＝60°。何がいえるか説明しよう。",
      "steps": [
        {
          "text": "A,B,P,Qが互いに異なると確認する。"
        },
        {
          "text": "P,Qが直線ABの同じ側で、線上にないと確認する。"
        },
        {
          "text": "二角が60°で等しいことを仮定から読む。"
        },
        {
          "text": "円周角の定理の逆により、四点は一つの円周上にある。"
        }
      ],
      "answer": "A,B,P,Qは一つの円周上にある。",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "角が等しければ、点の位置を問わず円周角の定理の逆を使える。",
      "correction": "この形の逆ではP,Qが直線ABの同じ側で線上にないことが必要。四点も互いに異なることを確認する。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "円周角の定理の逆で確認する三つの条件を説明しよう。",
        "followUp": "同じ側の条件がない場合、反対の結論を断定できる？",
        "checkpoints": [
          "異なる点、同じ側で線上でないこと、角の等しさを示した。",
          "定理を使えない場合と不成立を区別した。"
        ],
        "sample": "点の相異性、P,Qの位置、二角の等しさを確認して共円を導く。条件がないだけでは必ず共円でないとも断定できない。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "異なる四点A,B,P,Qで、P,Qが直線ABの同じ側にあり線上にはないとする。∠APB＝∠AQBなら、四点は一つの円周上にある。これが円周角の定理の逆だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "円周角の定理は、同じ円と同じ弧から角の等しさを導く。逆では、角の等しさと同じ側という条件から四点が同じ円周上にあると判断する。A,B,P,Qは互いに異なる点とし、P,Qを直線AB上へ置かない。条件を省いて、角が等しいだけならどんな位置でもよいとはしない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "相異なるA,B,P,Qで、P,Qが直線ABの同じ開半平面にあり、∠APB＝∠AQBなら四点は共円である。ここでは「同じ側で線上でない」と言い換えて条件を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "三点A,B,Pが一直線上にないと、それらを通る円が定まる。QがABのPと同じ側にあり同じ角を作るなら、円周角の定理の逆によりその円上にある。同じ側の条件を外したときは、この形の逆をそのまま使えない。対偶や逆を見た目だけで取り違えず、仮定と結論を分けて読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の固定A,Bに対して、PとQを直線ABの同じ側で線上でない場所に置く。四点を互いに異なる点に保ち、∠APBと∠AQBが等しくなると四点を通る円を考えられる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材で四点が相異なること、P,QがABの同じ側で線上でないこと、二角が等しいことを順に確認する。最後に同一円周上という結論へ進む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "円周角の定理の逆で、角の等しさに加えてP,Qの位置に必要なのは？ 正答：直線ABの同じ側で線上にない。 同じ側という条件を仮定へ含める。 考える手がかり：使う定理の全文を読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "相異なるA,B,P,QでP,QがABの同じ側で線上になく、∠APB＝∠AQB。結論は？ 正答：四点は一つの円周上にある。 等しい二角と位置の条件から共円を導く。 考える手がかり：等しい角が直接示す結論を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "円周角の定理の逆で、Pが直線AB上にある場合は？ 正答：前提を満たさず、そのまま適用できない。 三点が共線となる退化した角を除く。 考える手がかり：円を決める三点が非共線かを見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "P,QがABの反対側にあり角が等しいと分かった。この形の逆を使ってよい？ 正答：同じ側の条件がないため、そのまま使わない。 条件外だからこの定理からは断定できない。必ず不成立という意味でもない。 考える手がかり：適用不可と反対の結論を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "円周角の定理とその逆で入れ替わるのは？ 正答：仮定と結論。 円周上から角へ、角と位置から円周上へという向きが変わる。 考える手がかり：何から何を導くかを見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "相異なるA,B,P,QでP,QがABの同じ側、線上でなく、∠APBと∠AQBが共に90°。四点は？ 正答：一つの円周上にある。 角の等しさと位置の条件を全て満たす。 考える手がかり：90°も等しい角の一例。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "AとPが同じ点なのに、四点の定理をそのまま使うのは？ 正答：できない。異なる点の条件が必要。 角が定まらない重複点を除く。 考える手がかり：点の相異性を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "四点が同じ円周上にあると結論したい証明で、それを最初に仮定して二角を示すのは？ 正答：結論を先に仮定している。 与えられた角と位置の条件から結論へ進める必要がある。 考える手がかり：根拠と結論の循環を避ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：互いに異なるA,B,P,Qで、P,QがABの同じ側かつ線上でなく∠APB＝∠AQB。図でQが円から少しずれて見えたら？ 正答：条件が正しければ定理の逆で同一円周上と判断する。 正確な条件を根拠にし、不正確な描画の見た目を根拠にしない。 考える手がかり：図と仮定の役割を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "円周角の定理の逆で確認する三つの条件を説明しよう。 同じ側の条件がない場合、反対の結論を断定できる？ 点の相異性、P,Qの位置、二角の等しさを確認して共円を導く。条件がないだけでは必ず共円でないとも断定できない。 確認項目：異なる点、同じ側で線上でないこと、角の等しさを示した。 / 定理を使えない場合と不成立を区別した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "相異なるA,B,P,QでP,Qは直線ABの同じ側にあり線上でなく、∠APB＝∠AQB＝60°。何がいえるか説明しよう。 A,B,P,Qが互いに異なると確認する。 P,Qが直線ABの同じ側で、線上にないと確認する。 二角が60°で等しいことを仮定から読む。 円周角の定理の逆により、四点は一つの円周上にある。 結論：A,B,P,Qは一つの円周上にある。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「角が等しければ、点の位置を問わず円周角の定理の逆を使える。」は誤り。この形の逆ではP,Qが直線ABの同じ側で線上にないことが必要。四点も互いに異なることを確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "相異なるA,B,P,QでP,Qが直線AB上になく同じ側、∠APB=∠AQBなら四点は同一円周上。共線・重複点を除く。条件外で定理を適用できないことを、共円でないという結論と混同しない。 操作図の範囲：操作例A(−105,0),B(105,0),P(0,105)に対しQ(105/√2,105/√2)なら相異なる四点は同じ円上でP,QはABの同じ側、∠APB=∠AQB=90°。別例Q(90,90)では二角は等しくなく、A,B,Pの円上にもない。逆の前提には四点相異・P,Qが直線AB上でなく同じ側・角の等しさが必要。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233222200000",
    "grade": 9,
    "title": "円周角を使う作図と活用",
    "domain": "B",
    "order": 39,
    "goal": "直径に対する円周角を使って円外の点から接線を作り、その理由を説明する。",
    "coverageCodes": [
      "8350233221100000",
      "8350233222200000",
      "8350233511000000"
    ],
    "explanations": {
      "es": {
        "short": "円の外の点Pから接線を作るには、中心OとPを直径の両端とする別の円を使える。交点Qで∠OQPが90°となり、半径OQに垂直なPQが接線になるよ。",
        "detail": "半径r>0の円Oの外に点Pを取るのでOP>r。OPの中点Mを求め、Mを中心にOPを直径とする円をかく。二円の交点をQとすると、別の円では直径OPに対する円周角∠OQP＝90°。元の円の半径OQに垂直なPQを引けば、接点Qを通る接線となる。"
      },
      "js": {
        "short": "円Oの半径r>0、OP>rとする。OPを直径とする円と円Oの交点Qでは円周角の定理よりOQ⊥PQ。半径にその円周上の点で垂直な直線は接線である。",
        "detail": "作図は、接点で半径と接線が垂直という必要な形を先に考え、直角を作る円周角へ結び付ける。二円には二つの交点があり、それぞれから二本の接線を引ける。Pが円周上や内側にある場合は、外点OP>rという前提を満たさず同じ手順の結論をそのまま使わない。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "直径の円で直角を作る",
        "text": "架空の円O外のPからOPを結び、その中点Mを中心とする円をかく。OPが直径なので、二円の交点Qで∠OQP＝90°が分かる。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "craft",
        "title": "接線の理由を言葉で添える",
        "text": "架空の図の接線PQに直角の印を付けるだけでなく、Qが元の円周上、OQが半径、OPを直径とする円周角が直角という理由を添える。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "半径rの円Oの外点Pという条件を式で表すと？",
        "options": [
          "OP<r",
          "OP>r>0",
          "OP＝0"
        ],
        "answer": "OP>r>0",
        "explanation": "中心から半径より遠い点が円の外にある。",
        "hint": "点と円の位置を先に確かめる。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "OPを直径とする円の中心は？",
        "options": [
          "OPの中点M",
          "Oそのもの",
          "Pそのもの"
        ],
        "answer": "OPの中点M",
        "explanation": "直径の中点が円の中心。",
        "hint": "半径はOPの半分になる。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "OP＝10cmのとき、OPを直径とする円の半径は？",
        "answer": 5,
        "explanation": "直径10の半分で5cm。",
        "hint": "元の円の半径とは別に求める。",
        "suffix": "cm",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "円O外のPから作図し、Qが円OとOPを直径とする円の交点。このとき∠OQPは？",
        "options": [
          "必ず60°",
          "90°",
          "180°"
        ],
        "answer": "90°",
        "explanation": "OPを直径とする円の円周角だから90°。",
        "hint": "どちらの円の定理を使うか確認する。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "Qが円Oの円周上でOQ⊥PQのとき、PQは？",
        "options": [
          "円Oの接点Qでの接線",
          "円Oの直径",
          "必ず円Oの半径"
        ],
        "answer": "円Oの接点Qでの接線",
        "explanation": "半径に円周上の点で垂直な直線は接線。",
        "hint": "垂直という条件がどの点で成り立つか見る。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "半径r>0の円Oと外点P（OP>r）について、円OとOPを直径とする円の交点をQ,Rとする。接線は？",
        "options": [
          "PQだけでPRは必ず違う",
          "QRだけ",
          "PQとPRの二本"
        ],
        "answer": "PQとPRの二本",
        "explanation": "どちらの交点でも直径OPの円周角が直角になる。",
        "hint": "同じ根拠を両方の交点へ使う。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "Pが円Oの内側にあるのに、外点の接線作図の結論をそのまま使ってよい？",
        "options": [
          "よい。接線は中心を通る",
          "よくない。OP>rの前提を満たさない",
          "よい。位置は関係ない"
        ],
        "answer": "よくない。OP>rの前提を満たさない",
        "explanation": "外点という条件を保った作図である。",
        "hint": "使える位置の範囲を確認する。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "PQを接線と説明する際、必要な根拠の組は？",
        "options": [
          "Qが元の円周上で、OQ⊥PQ",
          "図で触れて見えるだけ",
          "OPの長さが整数であるだけ"
        ],
        "answer": "Qが元の円周上で、OQ⊥PQ",
        "explanation": "接点の位置と半径への垂直が接線の理由になる。",
        "hint": "見た目と条件を分ける。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：円Oの外点Pに対してOPの中点を使う理由は？",
      "options": [
        "元の半径を0にするため",
        "Pを元の円周へ動かすため",
        "OPを直径とする円を作るため"
      ],
      "answer": "OPを直径とする円を作るため",
      "explanation": "直径OPの円周角を使って接点の直角を得る。",
      "hint": "目標の直角から作図を逆に考える。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "円周角から接線を作る",
      "prompt": "半径r>0の円OとOP>rの点Pから、接線を作る理由を説明しよう。",
      "steps": [
        {
          "text": "線分OPの中点Mを取り、Mを中心、MOを半径とする円をかく。"
        },
        {
          "text": "この円の直径はOP。元の円との交点Qを取る。"
        },
        {
          "text": "直径OPに対する円周角なので∠OQP＝90°。"
        },
        {
          "text": "Qは元の円周上でOQは半径だから、OQに垂直なPQは接点Qでの接線。"
        }
      ],
      "answer": "PQは円Oの接点Qでの接線。",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "図で円に触れて見える線なら、理由なしに接線といえる。",
      "correction": "正確な作図では、接点が円周上にあり、半径と直線がその点で垂直になることを根拠にする。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "OPを直径とする円を使うと接線が作れる理由を説明しよう。",
        "followUp": "Pが外側という条件は、式ではどう表す？",
        "checkpoints": [
          "直径に対する円周角90°を使った。",
          "Qが円周上で半径に垂直という接線の条件を示した。"
        ],
        "sample": "OPを直径にすると交点Qの∠OQPが90°。Qは元の円周上なのでPQは接線。外点の条件はOP>r>0。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "円の外の点Pから接線を作るには、中心OとPを直径の両端とする別の円を使える。交点Qで∠OQPが90°となり、半径OQに垂直なPQが接線になるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "半径r>0の円Oの外に点Pを取るのでOP>r。OPの中点Mを求め、Mを中心にOPを直径とする円をかく。二円の交点をQとすると、別の円では直径OPに対する円周角∠OQP＝90°。元の円の半径OQに垂直なPQを引けば、接点Qを通る接線となる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "円Oの半径r>0、OP>rとする。OPを直径とする円と円Oの交点Qでは円周角の定理よりOQ⊥PQ。半径にその円周上の点で垂直な直線は接線である。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "作図は、接点で半径と接線が垂直という必要な形を先に考え、直角を作る円周角へ結び付ける。二円には二つの交点があり、それぞれから二本の接線を引ける。Pが円周上や内側にある場合は、外点OP>rという前提を満たさず同じ手順の結論をそのまま使わない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の円O外のPからOPを結び、その中点Mを中心とする円をかく。OPが直径なので、二円の交点Qで∠OQP＝90°が分かる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の図の接線PQに直角の印を付けるだけでなく、Qが元の円周上、OQが半径、OPを直径とする円周角が直角という理由を添える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "半径rの円Oの外点Pという条件を式で表すと？ 正答：OP>r>0。 中心から半径より遠い点が円の外にある。 考える手がかり：点と円の位置を先に確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "OPを直径とする円の中心は？ 正答：OPの中点M。 直径の中点が円の中心。 考える手がかり：半径はOPの半分になる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "OP＝10cmのとき、OPを直径とする円の半径は？ 正答：5。 直径10の半分で5cm。 考える手がかり：元の円の半径とは別に求める。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "円O外のPから作図し、Qが円OとOPを直径とする円の交点。このとき∠OQPは？ 正答：90°。 OPを直径とする円の円周角だから90°。 考える手がかり：どちらの円の定理を使うか確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "Qが円Oの円周上でOQ⊥PQのとき、PQは？ 正答：円Oの接点Qでの接線。 半径に円周上の点で垂直な直線は接線。 考える手がかり：垂直という条件がどの点で成り立つか見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "半径r>0の円Oと外点P（OP>r）について、円OとOPを直径とする円の交点をQ,Rとする。接線は？ 正答：PQとPRの二本。 どちらの交点でも直径OPの円周角が直角になる。 考える手がかり：同じ根拠を両方の交点へ使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "Pが円Oの内側にあるのに、外点の接線作図の結論をそのまま使ってよい？ 正答：よくない。OP>rの前提を満たさない。 外点という条件を保った作図である。 考える手がかり：使える位置の範囲を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "PQを接線と説明する際、必要な根拠の組は？ 正答：Qが元の円周上で、OQ⊥PQ。 接点の位置と半径への垂直が接線の理由になる。 考える手がかり：見た目と条件を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：円Oの外点Pに対してOPの中点を使う理由は？ 正答：OPを直径とする円を作るため。 直径OPの円周角を使って接点の直角を得る。 考える手がかり：目標の直角から作図を逆に考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "OPを直径とする円を使うと接線が作れる理由を説明しよう。 Pが外側という条件は、式ではどう表す？ OPを直径にすると交点Qの∠OQPが90°。Qは元の円周上なのでPQは接線。外点の条件はOP>r>0。 確認項目：直径に対する円周角90°を使った。 / Qが円周上で半径に垂直という接線の条件を示した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "半径r>0の円OとOP>rの点Pから、接線を作る理由を説明しよう。 線分OPの中点Mを取り、Mを中心、MOを半径とする円をかく。 この円の直径はOP。元の円との交点Qを取る。 直径OPに対する円周角なので∠OQP＝90°。 Qは元の円周上でOQは半径だから、OQに垂直なPQは接点Qでの接線。 結論：PQは円Oの接点Qでの接線。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「図で円に触れて見える線なら、理由なしに接線といえる。」は誤り。正確な作図では、接点が円周上にあり、半径と直線がその点で垂直になることを根拠にする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "円Oの半径r>0、OP>r。MはOP中点、M中心でOP直径の円と元円の交点Qでは∠OQP=90°、OQ⊥PQゆえPQは接線。二交点で二接線。内点/円周上へ無条件に拡張しない。 操作図の範囲：操作例O(0,0)の半径2の円とP(d,0)、d=3,4,5。OP中点M(d/2,0)を中心にOPを直径とする円を作る。二交点はQ,R=(4/d,±2√(d²−4)/d)、OQとPQは垂直、接線長は√(d²−4)。OP>2だから二交点が異なり、PQ,PRが二本の接線となる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233231100000",
    "grade": 9,
    "title": "三平方の定理と面積",
    "domain": "B",
    "order": 40,
    "goal": "直角三角形の三辺の正方形の面積を対応させ、定理とその証明の考えを説明する。",
    "coverageCodes": [
      "8350232100000000",
      "8350232200000000",
      "8350232300000000",
      "8350233231100000",
      "8350233232100000",
      "8350233512000000"
    ],
    "explanations": {
      "es": {
        "short": "直角三角形で、直角をはさむ二辺をa,b、斜辺をcとするとa²＋b²＝c²。辺の長さそのものを足す式ではなく、各辺上の正方形の面積の関係だよ。",
        "detail": "直角をはさむ辺3cmと4cmの直角三角形なら、斜辺上の正方形の面積は9＋16＝25cm²。斜辺は正の長さなので5cmになる。この3–4–5の例を確かめるだけでは全ての直角三角形の証明にはならない。一般のa,bについて、同じ四枚の直角三角形を二通りに配置し、残る面積が等しいことから説明できる。"
      },
      "js": {
        "short": "直角三角形の正の辺a,b,cでcが斜辺ならa²＋b²＝c²。三平方の定理といい、正方形の面積の等式として捉えられる。",
        "detail": "一辺a＋bの大正方形から、脚a,bをもつ合同な直角三角形四枚の面積2abを除く。配置を変えると、残りを一辺cの正方形としても、一辺aとbの二正方形としても表せる。大正方形と除いた面積が同じなのでc²＝a²＋b²。各配置で重なりや隙間を確認し、斜辺上の四角形が正方形である理由も角から確かめる。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "三つの正方形を比べる",
        "text": "架空の3–4–5の直角三角形の各辺の外側に正方形を描く。面積は9,16,25で9＋16＝25。辺の和3＋4と斜辺5を等しいとはしない。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "craft",
        "title": "同じ四枚を配置し直す",
        "text": "脚3cm,4cmの合同な直角三角形四枚を、一辺7cmの正方形に重なりなく置く。除く面積は4×3×4/2＝24cm²で、残りは25cm²。二つの固定配置の残りを比較する。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "直角をはさむ辺a,b、斜辺cの直角三角形で正しい式は？",
        "options": [
          "a²＋b²＝c²",
          "a＋b＝c",
          "a²＋c²＝b²"
        ],
        "answer": "a²＋b²＝c²",
        "explanation": "二つの脚の平方を足すと斜辺の平方になる。",
        "hint": "まず斜辺を見付ける。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "直角をはさむ辺が3cmと4cmの直角三角形。斜辺の平方は？",
        "answer": 25,
        "explanation": "3²＋4²＝9＋16＝25。",
        "hint": "求めているのは長さの平方。",
        "suffix": "cm²",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "直角をはさむ辺が3cmと4cmの直角三角形の斜辺は？",
        "answer": 5,
        "explanation": "斜辺の平方25の正の平方根は5。",
        "hint": "長さなので負の平方根を選ばない。",
        "suffix": "cm",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "直角三角形の三平方の定理で、斜辺に当たるのは？",
        "options": [
          "直角の向かいにある辺",
          "直角をはさむ辺のどちらか",
          "図の下側にある辺"
        ],
        "answer": "直角の向かいにある辺",
        "explanation": "向きを変えても直角の向かいが斜辺。",
        "hint": "紙の上下より角との位置を見る。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "一辺7cmの正方形から、脚3cm,4cmの合同な直角三角形四枚を重なりなく除く。残る面積は？",
        "answer": 25,
        "explanation": "49−4×6＝25cm²。",
        "hint": "同じ面積を引いて比較する。",
        "suffix": "cm²",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "一つの3–4–5の直角三角形で9＋16＝25を確認した。これは？",
        "options": [
          "直角でない三角形にも同じ式が成り立つ証明",
          "その数値例の確認であり、一般の証明とは別",
          "全ての三角形に対する証明"
        ],
        "answer": "その数値例の確認であり、一般の証明とは別",
        "explanation": "一般の正のa,bを扱う理由が必要。",
        "hint": "例と全てに成り立つ説明を分ける。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "脚a,bの合同な直角三角形四枚を同じ大正方形へ二通りに配置する証明で重要なのは？",
        "options": [
          "各配置で重なりなく、大正方形と除く面積が同じ",
          "途中で三角形を伸ばすこと",
          "面積を変えて見た目だけそろえること"
        ],
        "answer": "各配置で重なりなく、大正方形と除く面積が同じ",
        "explanation": "等しい面積から等しい面積を除くと残りも等しい。",
        "hint": "保存する量を探す。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "脚がともに1の直角三角形の斜辺は？",
        "options": [
          "2",
          "1",
          "√2"
        ],
        "answer": "√2",
        "explanation": "斜辺の平方は1＋1＝2で、長さは正。",
        "hint": "平方と長さを区別する。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：直角をはさむ辺3と4の直角三角形で、斜辺上の正方形の面積は？",
      "options": [
        "12",
        "25",
        "7"
      ],
      "answer": "25",
      "explanation": "二脚上の正方形の面積9と16を合わせる。",
      "hint": "辺そのものを足さない。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "正方形の面積から斜辺へ",
      "prompt": "脚3cm,4cmの直角三角形の斜辺cを求めよう。",
      "steps": [
        {
          "text": "直角の向かいが斜辺cと確認する。"
        },
        {
          "text": "三平方の定理でc²＝3²＋4²と立てる。"
        },
        {
          "text": "c²＝9＋16＝25を計算する。"
        },
        {
          "text": "c>0なのでc＝5cm。平方の関係へ戻して9＋16＝25を確認する。"
        }
      ],
      "answer": "斜辺5cm。",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "どの三角形でも二辺の平方を足せば第三辺の平方になる。",
      "correction": "この形の等式を使うには、第三辺が斜辺となる直角三角形であることが必要。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "三平方の定理を、三つの正方形の面積として説明しよう。",
        "followUp": "一つの数値例と一般の配置による証明はどう違う？",
        "checkpoints": [
          "斜辺と二脚を区別した。",
          "例の確認と一般の証明を区別した。"
        ],
        "sample": "直角三角形では二脚上の正方形の面積の和が斜辺上の正方形の面積になる。3–4–5は一例。一般には同じ四枚の三角形を使い、二配置で残る面積が等しいことを説明する。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "直角三角形で、直角をはさむ二辺をa,b、斜辺をcとするとa²＋b²＝c²。辺の長さそのものを足す式ではなく、各辺上の正方形の面積の関係だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "直角をはさむ辺3cmと4cmの直角三角形なら、斜辺上の正方形の面積は9＋16＝25cm²。斜辺は正の長さなので5cmになる。この3–4–5の例を確かめるだけでは全ての直角三角形の証明にはならない。一般のa,bについて、同じ四枚の直角三角形を二通りに配置し、残る面積が等しいことから説明できる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "直角三角形の正の辺a,b,cでcが斜辺ならa²＋b²＝c²。三平方の定理といい、正方形の面積の等式として捉えられる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "一辺a＋bの大正方形から、脚a,bをもつ合同な直角三角形四枚の面積2abを除く。配置を変えると、残りを一辺cの正方形としても、一辺aとbの二正方形としても表せる。大正方形と除いた面積が同じなのでc²＝a²＋b²。各配置で重なりや隙間を確認し、斜辺上の四角形が正方形である理由も角から確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の3–4–5の直角三角形の各辺の外側に正方形を描く。面積は9,16,25で9＋16＝25。辺の和3＋4と斜辺5を等しいとはしない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "脚3cm,4cmの合同な直角三角形四枚を、一辺7cmの正方形に重なりなく置く。除く面積は4×3×4/2＝24cm²で、残りは25cm²。二つの固定配置の残りを比較する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "直角をはさむ辺a,b、斜辺cの直角三角形で正しい式は？ 正答：a²＋b²＝c²。 二つの脚の平方を足すと斜辺の平方になる。 考える手がかり：まず斜辺を見付ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "直角をはさむ辺が3cmと4cmの直角三角形。斜辺の平方は？ 正答：25。 3²＋4²＝9＋16＝25。 考える手がかり：求めているのは長さの平方。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "直角をはさむ辺が3cmと4cmの直角三角形の斜辺は？ 正答：5。 斜辺の平方25の正の平方根は5。 考える手がかり：長さなので負の平方根を選ばない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "直角三角形の三平方の定理で、斜辺に当たるのは？ 正答：直角の向かいにある辺。 向きを変えても直角の向かいが斜辺。 考える手がかり：紙の上下より角との位置を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "一辺7cmの正方形から、脚3cm,4cmの合同な直角三角形四枚を重なりなく除く。残る面積は？ 正答：25。 49−4×6＝25cm²。 考える手がかり：同じ面積を引いて比較する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "一つの3–4–5の直角三角形で9＋16＝25を確認した。これは？ 正答：その数値例の確認であり、一般の証明とは別。 一般の正のa,bを扱う理由が必要。 考える手がかり：例と全てに成り立つ説明を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "脚a,bの合同な直角三角形四枚を同じ大正方形へ二通りに配置する証明で重要なのは？ 正答：各配置で重なりなく、大正方形と除く面積が同じ。 等しい面積から等しい面積を除くと残りも等しい。 考える手がかり：保存する量を探す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "脚がともに1の直角三角形の斜辺は？ 正答：√2。 斜辺の平方は1＋1＝2で、長さは正。 考える手がかり：平方と長さを区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：直角をはさむ辺3と4の直角三角形で、斜辺上の正方形の面積は？ 正答：25。 二脚上の正方形の面積9と16を合わせる。 考える手がかり：辺そのものを足さない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "三平方の定理を、三つの正方形の面積として説明しよう。 一つの数値例と一般の配置による証明はどう違う？ 直角三角形では二脚上の正方形の面積の和が斜辺上の正方形の面積になる。3–4–5は一例。一般には同じ四枚の三角形を使い、二配置で残る面積が等しいことを説明する。 確認項目：斜辺と二脚を区別した。 / 例の確認と一般の証明を区別した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "脚3cm,4cmの直角三角形の斜辺cを求めよう。 直角の向かいが斜辺cと確認する。 三平方の定理でc²＝3²＋4²と立てる。 c²＝9＋16＝25を計算する。 c>0なのでc＝5cm。平方の関係へ戻して9＋16＝25を確認する。 結論：斜辺5cm。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「どの三角形でも二辺の平方を足せば第三辺の平方になる。」は誤り。この形の等式を使うには、第三辺が斜辺となる直角三角形であることが必要。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "正の脚a,bを持つ直角三角形で斜辺c>0はc²=a²+b²。四枚の合同直角三角形の面積は2ab、一辺a+bの正方形の残りは(a+b)²−2ab=a²+b²=c²。3,4,5では9+16=25。 操作図の範囲：操作例は正の脚a=2,3,4、b=3,4,5を直角にはさむ三角形。斜辺c=√(a²＋b²)、各辺上の正方形の面積a²,b²,c²。二つの一辺a＋bの固定大正方形に同じ四枚の合同直角三角形を重なりなく配置すると、各配置で除く面積4×ab/2=2abが同じ。残りをc²とa²＋b²として比べる。固定例3,4では大正方形49、四三角形24、残り25。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "motion",
        "text": "3–4–5の直角三角形の三辺外側の正方形は面積9,16,25。二つの固定配置では一辺7の大正方形49から同じ脚3,4の合同直角三角形四枚、各6の合計24を除き、片方の残り25と他方の9＋16を比較する。各配置の四枚は重ならず、三角形の対応を示しても面積を二重に数えない。一般の正の脚a,bについても(a＋b)²−4(ab/2)=a²＋b²=c²という面積保存の理由を数値例と分けて述べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "video",
        "text": "直角をはさむ二辺3,4、斜辺5の直角三角形について、三辺の外側に作った正方形の面積は9,16,25で、9＋16=25となる。脚と斜辺を区別し、辺の長さ3＋4を5と等しくしない。これは3–4–5の数値例の確認であり、それだけを一般の三平方の定理の証明とは呼ばない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233232100000",
    "grade": 9,
    "title": "三平方の定理の逆",
    "domain": "B",
    "order": 41,
    "goal": "三辺が三角形を作ることを確認し、最長辺との平方和から直角か判断する。",
    "coverageCodes": [
      "8350233231100000",
      "8350233232100000"
    ],
    "explanations": {
      "es": {
        "short": "正の三辺a,b,cが三角形を作り、cが最も長い辺のとき、a²＋b²＝c²ならcの向かいが直角。この向きが三平方の定理の逆だよ。",
        "detail": "三辺3,4,5では3²＋4²＝5²だから直角三角形。三辺3,4,6では9＋16≠36なので直角三角形ではない。まず三辺が三角形を作れるか、最長辺をどれにするかを確認する。1,2,3は一直線に並ぶ長さで、三角形の例にはできない。"
      },
      "js": {
        "short": "非退化な三角形の最長辺cについて、残りの辺a,bがa²＋b²＝c²を満たすなら、cに対する角は90°。順方向の定理と、仮定・結論を入れ替えて使う。",
        "detail": "長さa,bを直角にはさんだ別の直角三角形を作ると、その斜辺dはd²＝a²＋b²。仮定c²＝a²＋b²と正の長さからc＝d。元の三角形とこの直角三角形は三辺がそれぞれ等しく合同なので、元のcの向かいの角も直角となる。数値の一致だけでなく合同を根拠に逆を説明できる。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "三本の棒で直角を調べる",
        "text": "架空の棒5cm,12cm,13cmで三角形を作る。5＋12>13で退化せず、25＋144＝169だから13cmの辺の向かいが直角と分かる。",
        "activityIds": [
          "craft-cardboard"
        ]
      },
      {
        "category": "programming",
        "title": "最長辺から式を作る",
        "text": "架空の三角形の三辺を小さい順に並べ、最長辺cを選ぶ。正の長さと三角形の成立条件を確かめてからa²＋b²とc²を比較する。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "三辺3,4,5の三角形が直角である根拠は？",
        "options": [
          "3＋4>5だけ",
          "全ての辺が整数だから",
          "3²＋4²＝5²と三平方の定理の逆"
        ],
        "answer": "3²＋4²＝5²と三平方の定理の逆",
        "explanation": "三角形の成立条件だけでは直角と決まらない。",
        "hint": "最長辺の平方と比べる。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "三辺3,4,6の三角形は直角三角形？",
        "options": [
          "そう。全て正の辺だから",
          "違う。25≠36",
          "そう。3＋4>6だから"
        ],
        "answer": "違う。25≠36",
        "explanation": "最長辺6に対して3²＋4²＝25だが6²＝36。",
        "hint": "三角形であることと直角であることを分ける。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "三辺5cm,12cm,13cmの三角形で、直角の向かいにある辺の長さは？",
        "answer": 13,
        "explanation": "25＋144＝169なので最長辺13の向かいが直角。",
        "hint": "斜辺は最長辺。",
        "suffix": "cm",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "辺1,2,3を直角三角形か調べる前に気付くことは？",
        "options": [
          "必ず直角三角形になる",
          "三辺が整数なので条件は十分",
          "1＋2＝3で非退化な三角形にならない"
        ],
        "answer": "1＋2＝3で非退化な三角形にならない",
        "explanation": "二辺の和が第三辺と等しいと一直線となる。",
        "hint": "三角形を作れるか先に確かめる。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "三平方の定理の逆で仮定に置くのは？",
        "options": [
          "図が直角に見えること",
          "三辺がa²＋b²＝c²を満たすこと",
          "初めから角が90°であること"
        ],
        "answer": "三辺がa²＋b²＝c²を満たすこと",
        "explanation": "辺の等式から直角を結論にする。",
        "hint": "仮定と結論の向きを読む。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "三辺2,3,4の三角形で比べる式は？",
        "options": [
          "2²＋3²と4²",
          "2²＋4²と3²",
          "2＋3と4だけ"
        ],
        "answer": "2²＋3²と4²",
        "explanation": "最長辺4を斜辺候補として置く。",
        "hint": "最大の長さを右辺へ。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "三平方の定理の逆を説明するため、同じ二脚の直角三角形と元の三角形を比べる。使う合同条件は？",
        "options": [
          "三組の角がそれぞれ等しい",
          "一組の辺が等しいだけ",
          "三組の辺がそれぞれ等しい"
        ],
        "answer": "三組の辺がそれぞれ等しい",
        "explanation": "二脚と、平方から等しいと分かる第三辺の三組を使う。",
        "hint": "角が直角だと結論する前に辺で合同を示す。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "近似測定で三辺の平方がほぼ一致したときの扱いは？",
        "options": [
          "近似値には数学を使えない",
          "測定誤差を考え、厳密な等式による証明と区別する",
          "小数が似ていれば厳密に直角と証明済み"
        ],
        "answer": "測定誤差を考え、厳密な等式による証明と区別する",
        "explanation": "真の長さの厳密な等式を確認したのとは違う。",
        "hint": "近似と等号の違いを考える。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：三辺5,12,13の三角形は直角三角形？",
      "options": [
        "直角三角形",
        "直角三角形ではない",
        "三角形にならない"
      ],
      "answer": "直角三角形",
      "explanation": "5＋12>13、5²＋12²＝13²。",
      "hint": "成立条件と平方の等式を順に見る。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "辺の等式から直角を結論する",
      "prompt": "三辺5cm,12cm,13cmの三角形が直角三角形か調べよう。",
      "steps": [
        {
          "text": "全て正で5＋12>13なので三角形が成立する。"
        },
        {
          "text": "最長辺13をc、残りを5,12とする。"
        },
        {
          "text": "5²＋12²＝25＋144＝169＝13²。"
        },
        {
          "text": "三平方の定理の逆から13cmの辺の向かいが90°。"
        }
      ],
      "answer": "直角三角形で、斜辺13cm。",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "三辺が正の整数なら、その三角形は直角三角形になる。",
      "correction": "整数という条件だけでは足りない。例えば3,4,6は三角形だが25≠36で直角三角形ではない。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "三平方の定理とその逆は、何を仮定して何を結論にするか説明しよう。",
        "followUp": "三辺の長さの確認で最初に気を付ける条件は？",
        "checkpoints": [
          "仮定と結論の向きを分けた。",
          "正の長さ・三角形の成立・最長辺を確認した。"
        ],
        "sample": "定理は直角から辺の平方の等式を得る。逆は非退化な三角形でその等式から直角を得る。最長辺をcにして使う。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "正の三辺a,b,cが三角形を作り、cが最も長い辺のとき、a²＋b²＝c²ならcの向かいが直角。この向きが三平方の定理の逆だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "三辺3,4,5では3²＋4²＝5²だから直角三角形。三辺3,4,6では9＋16≠36なので直角三角形ではない。まず三辺が三角形を作れるか、最長辺をどれにするかを確認する。1,2,3は一直線に並ぶ長さで、三角形の例にはできない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "非退化な三角形の最長辺cについて、残りの辺a,bがa²＋b²＝c²を満たすなら、cに対する角は90°。順方向の定理と、仮定・結論を入れ替えて使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "長さa,bを直角にはさんだ別の直角三角形を作ると、その斜辺dはd²＝a²＋b²。仮定c²＝a²＋b²と正の長さからc＝d。元の三角形とこの直角三角形は三辺がそれぞれ等しく合同なので、元のcの向かいの角も直角となる。数値の一致だけでなく合同を根拠に逆を説明できる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の棒5cm,12cm,13cmで三角形を作る。5＋12>13で退化せず、25＋144＝169だから13cmの辺の向かいが直角と分かる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の三角形の三辺を小さい順に並べ、最長辺cを選ぶ。正の長さと三角形の成立条件を確かめてからa²＋b²とc²を比較する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "三辺3,4,5の三角形が直角である根拠は？ 正答：3²＋4²＝5²と三平方の定理の逆。 三角形の成立条件だけでは直角と決まらない。 考える手がかり：最長辺の平方と比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "三辺3,4,6の三角形は直角三角形？ 正答：違う。25≠36。 最長辺6に対して3²＋4²＝25だが6²＝36。 考える手がかり：三角形であることと直角であることを分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "三辺5cm,12cm,13cmの三角形で、直角の向かいにある辺の長さは？ 正答：13。 25＋144＝169なので最長辺13の向かいが直角。 考える手がかり：斜辺は最長辺。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "辺1,2,3を直角三角形か調べる前に気付くことは？ 正答：1＋2＝3で非退化な三角形にならない。 二辺の和が第三辺と等しいと一直線となる。 考える手がかり：三角形を作れるか先に確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "三平方の定理の逆で仮定に置くのは？ 正答：三辺がa²＋b²＝c²を満たすこと。 辺の等式から直角を結論にする。 考える手がかり：仮定と結論の向きを読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "三辺2,3,4の三角形で比べる式は？ 正答：2²＋3²と4²。 最長辺4を斜辺候補として置く。 考える手がかり：最大の長さを右辺へ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "三平方の定理の逆を説明するため、同じ二脚の直角三角形と元の三角形を比べる。使う合同条件は？ 正答：三組の辺がそれぞれ等しい。 二脚と、平方から等しいと分かる第三辺の三組を使う。 考える手がかり：角が直角だと結論する前に辺で合同を示す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "近似測定で三辺の平方がほぼ一致したときの扱いは？ 正答：測定誤差を考え、厳密な等式による証明と区別する。 真の長さの厳密な等式を確認したのとは違う。 考える手がかり：近似と等号の違いを考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：三辺5,12,13の三角形は直角三角形？ 正答：直角三角形。 5＋12>13、5²＋12²＝13²。 考える手がかり：成立条件と平方の等式を順に見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "三平方の定理とその逆は、何を仮定して何を結論にするか説明しよう。 三辺の長さの確認で最初に気を付ける条件は？ 定理は直角から辺の平方の等式を得る。逆は非退化な三角形でその等式から直角を得る。最長辺をcにして使う。 確認項目：仮定と結論の向きを分けた。 / 正の長さ・三角形の成立・最長辺を確認した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "三辺5cm,12cm,13cmの三角形が直角三角形か調べよう。 全て正で5＋12>13なので三角形が成立する。 最長辺13をc、残りを5,12とする。 5²＋12²＝25＋144＝169＝13²。 三平方の定理の逆から13cmの辺の向かいが90°。 結論：直角三角形で、斜辺13cm。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「三辺が正の整数なら、その三角形は直角三角形になる。」は誤り。整数という条件だけでは足りない。例えば3,4,6は三角形だが25≠36で直角三角形ではない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "正の三辺が非退化な三角形を作りcが最長辺なら、直角であることとa²+b²=c²は同値。3,4,5と5,12,13は直角、3,4,6と2,3,4は直角でない。 操作図の範囲：操作する正の三辺(3,4,5),(3,4,6),(5,12,13),(2,3,4)は全て非退化な三角形を作る。最長辺をcとしてa²＋b²とc²を比べ、25=25と169=169は直角、25≠36と13≠16は直角でない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233232200000",
    "grade": 9,
    "title": "三平方の定理の平面での活用",
    "domain": "B",
    "order": 42,
    "goal": "補助線で直角三角形を見付け、対角線・高さ・二点間距離を求める。",
    "coverageCodes": [
      "8350233111300000",
      "8350233112200000",
      "8350233232200000",
      "8350233511000000"
    ],
    "explanations": {
      "es": {
        "short": "平面図形の長さを求めるときは、直角三角形を見付けよう。長方形の対角線、二点間の距離、円の弦でも、直角と対応する三辺を確かめて三平方の定理を使うよ。",
        "detail": "縦6cm、横8cmの長方形の対角線dはd²＝36＋64＝100より10cm。座標A(−1,−2),B(2,2)では横の差3、縦の差4が直角をはさむので距離5。円では中心から弦へ垂線を引くと弦を二等分する。半径5cm、中心から弦まで3cmなら半分の弦は4cm、弦全体は8cmとなる。"
      },
      "js": {
        "short": "補助線や座標の差から直角三角形を構成し、求める辺が斜辺か脚かを区別する。斜辺cと脚aから残りの脚bを求める場合はb²＝c²−a²。",
        "detail": "半径rの円で中心から弦までの距離dが0<d<rなら、垂線の足は弦の中点。半弦長hについてh²＋d²＝r²となる。二つの直角三角形は斜辺が半径で共通の脚を持ち合同だから中点と説明できる。d＝0の直径では全弦長2rを直接使える。図にない直角を見た目だけで仮定しない。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "方眼上の二点を結ぶ",
        "text": "架空の座標図でA(−1,−2)とB(2,2)を結ぶ。横3、縦4の補助線を作れば距離は5。座標の符号をそのまま長さにせず、差の絶対値を使う。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "craft",
        "title": "長方形の支えを測る",
        "text": "架空の縦6cm、横8cmの長方形の枠へ対角線の支えを入れる。四角形の角が直角という条件から支えの長さ10cmを求める。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "縦6cm、横8cmの長方形の対角線は？",
        "answer": 10,
        "explanation": "6²＋8²＝100で、正の平方根10。",
        "hint": "長方形の角は90°。",
        "suffix": "cm",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "座標A(−1,−2),B(2,2)の横方向の距離は？",
        "answer": 3,
        "explanation": "2−(−1)＝3。",
        "hint": "二点のx座標の差を取る。",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "座標A(−1,−2),B(2,2)の二点間距離は？",
        "answer": 5,
        "explanation": "横3、縦4より距離の平方25。",
        "hint": "座標軸は互いに垂直。",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "半径5cmの円で中心から弦までの距離3cm。弦の半分の長さは？",
        "answer": 4,
        "explanation": "半弦の平方は25−9＝16。",
        "hint": "半径が斜辺。",
        "suffix": "cm",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "半径5cmの円で中心から弦までの距離3cm。弦全体の長さは？",
        "answer": 8,
        "explanation": "垂線は弦を二等分し、半分4cmの2倍。",
        "hint": "求めるのが半分か全体か確認する。",
        "suffix": "cm",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "斜辺5、他の一辺3の直角三角形で残りの脚bの式は？",
        "options": [
          "b²＝5²＋3²",
          "b＝5−3",
          "b²＝5²−3²"
        ],
        "answer": "b²＝5²−3²",
        "explanation": "b²＋3²＝5²を変形する。",
        "hint": "未知の辺を斜辺と取り違えない。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "円の中心を通らない弦について、中心から下ろした垂線が弦を二等分する理由として使えるのは？",
        "options": [
          "弦が必ず直径であること",
          "二つの直角三角形の合同",
          "図が左右対称に見えることだけ"
        ],
        "answer": "二つの直角三角形の合同",
        "explanation": "同じ半径を斜辺とし、垂線の部分が共通となる。",
        "hint": "等しい辺と直角を言葉で示す。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "三角形で二辺6,8が分かるだけで第三辺を10と決めてよい？",
        "options": [
          "その二辺の間が直角という条件が必要",
          "必ず10と決まる",
          "6と8が偶数なら決まる"
        ],
        "answer": "その二辺の間が直角という条件が必要",
        "explanation": "三平方の定理の前提を確認する。",
        "hint": "角の情報があるか調べる。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：半径5、中心から弦まで3の円で、弦は4と8のどちら？",
      "options": [
        "4",
        "どちらでもない",
        "8"
      ],
      "answer": "8",
      "explanation": "直角三角形で求まる4は半分の弦。",
      "hint": "最後に全体へ戻す。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "半弦から全弦へ",
      "prompt": "半径5cm、中心から弦までの距離3cmの円で弦の長さを求めよう。",
      "steps": [
        {
          "text": "中心から弦への垂線を引く。半径が5cmの斜辺になる。"
        },
        {
          "text": "垂線の足が弦の中点なので半弦をhと置く。"
        },
        {
          "text": "h²＝5²−3²＝16、h>0よりh＝4cm。"
        },
        {
          "text": "弦全体は2h＝8cmと戻す。"
        }
      ],
      "answer": "弦8cm。",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "半径5、中心から弦まで3なら、三平方で得た4が弦全体である。",
      "correction": "4は直角三角形の一辺で弦の半分。垂線の足が中点なので弦全体は8。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "平面図形へ三平方の定理を使う手順を説明しよう。",
        "followUp": "円の弦では、計算の後に何を戻す？",
        "checkpoints": [
          "直角と斜辺を特定した。",
          "求めた量が部分か全体か確認した。"
        ],
        "sample": "直角三角形を作り、斜辺と二脚を分けて平方の式を立てる。円の例では半弦を求めているので2倍して全体の弦へ戻す。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "平面図形の長さを求めるときは、直角三角形を見付けよう。長方形の対角線、二点間の距離、円の弦でも、直角と対応する三辺を確かめて三平方の定理を使うよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "縦6cm、横8cmの長方形の対角線dはd²＝36＋64＝100より10cm。座標A(−1,−2),B(2,2)では横の差3、縦の差4が直角をはさむので距離5。円では中心から弦へ垂線を引くと弦を二等分する。半径5cm、中心から弦まで3cmなら半分の弦は4cm、弦全体は8cmとなる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "補助線や座標の差から直角三角形を構成し、求める辺が斜辺か脚かを区別する。斜辺cと脚aから残りの脚bを求める場合はb²＝c²−a²。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "半径rの円で中心から弦までの距離dが0<d<rなら、垂線の足は弦の中点。半弦長hについてh²＋d²＝r²となる。二つの直角三角形は斜辺が半径で共通の脚を持ち合同だから中点と説明できる。d＝0の直径では全弦長2rを直接使える。図にない直角を見た目だけで仮定しない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の座標図でA(−1,−2)とB(2,2)を結ぶ。横3、縦4の補助線を作れば距離は5。座標の符号をそのまま長さにせず、差の絶対値を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の縦6cm、横8cmの長方形の枠へ対角線の支えを入れる。四角形の角が直角という条件から支えの長さ10cmを求める。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "縦6cm、横8cmの長方形の対角線は？ 正答：10。 6²＋8²＝100で、正の平方根10。 考える手がかり：長方形の角は90°。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "座標A(−1,−2),B(2,2)の横方向の距離は？ 正答：3。 2−(−1)＝3。 考える手がかり：二点のx座標の差を取る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "座標A(−1,−2),B(2,2)の二点間距離は？ 正答：5。 横3、縦4より距離の平方25。 考える手がかり：座標軸は互いに垂直。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "半径5cmの円で中心から弦までの距離3cm。弦の半分の長さは？ 正答：4。 半弦の平方は25−9＝16。 考える手がかり：半径が斜辺。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "半径5cmの円で中心から弦までの距離3cm。弦全体の長さは？ 正答：8。 垂線は弦を二等分し、半分4cmの2倍。 考える手がかり：求めるのが半分か全体か確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "斜辺5、他の一辺3の直角三角形で残りの脚bの式は？ 正答：b²＝5²−3²。 b²＋3²＝5²を変形する。 考える手がかり：未知の辺を斜辺と取り違えない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "円の中心を通らない弦について、中心から下ろした垂線が弦を二等分する理由として使えるのは？ 正答：二つの直角三角形の合同。 同じ半径を斜辺とし、垂線の部分が共通となる。 考える手がかり：等しい辺と直角を言葉で示す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "三角形で二辺6,8が分かるだけで第三辺を10と決めてよい？ 正答：その二辺の間が直角という条件が必要。 三平方の定理の前提を確認する。 考える手がかり：角の情報があるか調べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：半径5、中心から弦まで3の円で、弦は4と8のどちら？ 正答：8。 直角三角形で求まる4は半分の弦。 考える手がかり：最後に全体へ戻す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "平面図形へ三平方の定理を使う手順を説明しよう。 円の弦では、計算の後に何を戻す？ 直角三角形を作り、斜辺と二脚を分けて平方の式を立てる。円の例では半弦を求めているので2倍して全体の弦へ戻す。 確認項目：直角と斜辺を特定した。 / 求めた量が部分か全体か確認した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "半径5cm、中心から弦までの距離3cmの円で弦の長さを求めよう。 中心から弦への垂線を引く。半径が5cmの斜辺になる。 垂線の足が弦の中点なので半弦をhと置く。 h²＝5²−3²＝16、h>0よりh＝4cm。 弦全体は2h＝8cmと戻す。 結論：弦8cm。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「半径5、中心から弦まで3なら、三平方で得た4が弦全体である。」は誤り。4は直角三角形の一辺で弦の半分。垂線の足が中点なので弦全体は8。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "長方形6×8の対角線10。直交座標A(−1,−2),B(2,2)は横差3縦差4で距離5。半径5、中心と弦の距離3の円で半弦4、全弦8。 操作図の範囲：操作例は長方形の辺6,8で対角線10、直交座標A(−1,−2),B(2,2)で横差3縦差4・距離5、半径5の円で中心と弦の距離3・半弦4・全弦8。いずれも直角三角形の条件を確認し、長さは正の平方根で求める。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233230000000",
    "grade": 9,
    "title": "三平方の定理の空間での活用",
    "domain": "B",
    "order": 43,
    "goal": "立体の中に二つの直角三角形を見付け、空間の対角線や円錐の高さを求める。",
    "coverageCodes": [
      "8350233111300000",
      "8350233230000000",
      "8350233232200000",
      "8350233511000000"
    ],
    "explanations": {
      "es": {
        "short": "立体でも直角三角形を取り出せば三平方の定理を使える。まず底面の対角線、次に高さを使うなど、平面を分けて順に考えよう。",
        "detail": "縦2cm、横3cm、高さ6cmの直方体では底面対角線の平方が13。底面対角線と高さ6cmが直角をはさむので、空間の対角線の平方は13＋36＝49、長さ7cm。途中の√13は小数へ丸めず、平方13のまま使える。"
      },
      "js": {
        "short": "直方体の三辺a,b,c>0に対し、空間対角線dはd²＝a²＋b²＋c²。直円錐では半径r、高さh、母線lが直角三角形を作りl²＝r²＋h²。",
        "detail": "直方体では底面の直角三角形で底面対角線を求め、その線と底面に垂直な高さから別の直角三角形を作る。直円錐は頂点が底面中心の真上にある円錐で、軸を通る断面を半分にすると半径・高さ・母線が三辺になる。斜めの円錐へこの関係をそのまま使わない。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "箱の中を結ぶ線",
        "text": "架空の2×3×6cmの直方体で向かい合う頂点を結ぶ。底面対角線の平方13へ高さの平方36を足して49。空間対角線は7cm。",
        "activityIds": [
          "craft-cardboard"
        ]
      },
      {
        "category": "drawing",
        "title": "円錐を中心で切る",
        "text": "半径3cm、母線5cmの架空の直円錐を軸に沿って切る。半断面の直角三角形で高さの平方は25−9＝16、高さ4cmとなる。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "辺2cmと3cmの長方形を底面とする直方体。底面対角線の平方は？",
        "answer": 13,
        "explanation": "2²＋3²＝13。",
        "hint": "根号に直す前の平方を求める。",
        "suffix": "cm²",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "三辺2cm,3cm,6cmの直方体の空間対角線は？",
        "answer": 7,
        "explanation": "平方は4＋9＋36＝49、正の長さ7。",
        "hint": "底面対角線と高さを直角にはさむ。",
        "suffix": "cm",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "底面対角線√13と高さ6を使う直方体の計算で正しいのは？",
        "options": [
          "13²＋6²＝205",
          "(√13)²＋6²＝49",
          "√13＋6＝49"
        ],
        "answer": "(√13)²＋6²＝49",
        "explanation": "対角線の平方は13。",
        "hint": "長さとその平方を区別する。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "半径3cm、母線5cmの直円錐の高さは？",
        "answer": 4,
        "explanation": "高さの平方は5²−3²＝16。",
        "hint": "母線が半断面の斜辺。",
        "suffix": "cm",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "直円錐を軸を通る平面で切り、その断面を軸で半分にした直角三角形で、斜辺になるのは？",
        "options": [
          "半径",
          "高さ",
          "母線"
        ],
        "answer": "母線",
        "explanation": "半径と高さが直角をはさむ。",
        "hint": "底面に垂直な軸を見る。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "直方体で三辺の平方を足せる理由は？",
        "options": [
          "立体の全ての辺が等しい",
          "二つの直角三角形へ順に定理を使える",
          "三本ならどんな向きの辺でもよい"
        ],
        "answer": "二つの直角三角形へ順に定理を使える",
        "explanation": "底面と、底面対角線・高さの二段階。",
        "hint": "直角がどこにあるか示す。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "頂点が底面中心の真上にない円錐へ、どの母線にもl²＝r²＋h²を使える？",
        "options": [
          "そのままでは使えない",
          "必ず使える",
          "半径が整数なら使える"
        ],
        "answer": "そのままでは使えない",
        "explanation": "半径と高さと母線を結ぶ断面の位置条件が変わる。",
        "hint": "直円錐という条件を確認する。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "三辺1,1,1の立方体の空間対角線は？",
        "options": [
          "3",
          "√2",
          "√3"
        ],
        "answer": "√3",
        "explanation": "平方1＋1＋1＝3の正の平方根。",
        "hint": "面の対角線と空間の対角線を分ける。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：2×3×6の直方体の空間対角線は？",
      "options": [
        "√13",
        "7",
        "11"
      ],
      "answer": "7",
      "explanation": "平方4＋9＋36＝49から7。",
      "hint": "三辺を直接足さない。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "二段階で空間の長さへ",
      "prompt": "三辺2cm,3cm,6cmの直方体で空間対角線を求めよう。",
      "steps": [
        {
          "text": "底面2×3の対角線をsとし、s²＝4＋9＝13。"
        },
        {
          "text": "sと高さ6が直角をはさむ平面の三角形を取り出す。"
        },
        {
          "text": "空間対角線dについてd²＝s²＋6²＝13＋36＝49。"
        },
        {
          "text": "dは正の長さだから7cm。途中の根号を丸めず計算できた。"
        }
      ],
      "answer": "空間対角線7cm。",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "直方体の空間対角線は三辺の長さをそのまま足せば求まる。",
      "correction": "三辺の平方の和が対角線の平方になる。2×3×6なら長さの和11ではなく√49＝7。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "直方体の空間対角線で三平方の定理を二回使う理由を説明しよう。",
        "followUp": "途中に√13が出たら小数に丸める必要がある？",
        "checkpoints": [
          "二つの直角三角形を特定した。",
          "平方13を保って計算した。"
        ],
        "sample": "底面で一回、底面対角線と高さで一回使う。次の式には底面対角線の平方が入るので13のまま計算でき、丸める必要はない。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "立体でも直角三角形を取り出せば三平方の定理を使える。まず底面の対角線、次に高さを使うなど、平面を分けて順に考えよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "縦2cm、横3cm、高さ6cmの直方体では底面対角線の平方が13。底面対角線と高さ6cmが直角をはさむので、空間の対角線の平方は13＋36＝49、長さ7cm。途中の√13は小数へ丸めず、平方13のまま使える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "直方体の三辺a,b,c>0に対し、空間対角線dはd²＝a²＋b²＋c²。直円錐では半径r、高さh、母線lが直角三角形を作りl²＝r²＋h²。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "直方体では底面の直角三角形で底面対角線を求め、その線と底面に垂直な高さから別の直角三角形を作る。直円錐は頂点が底面中心の真上にある円錐で、軸を通る断面を半分にすると半径・高さ・母線が三辺になる。斜めの円錐へこの関係をそのまま使わない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の2×3×6cmの直方体で向かい合う頂点を結ぶ。底面対角線の平方13へ高さの平方36を足して49。空間対角線は7cm。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "半径3cm、母線5cmの架空の直円錐を軸に沿って切る。半断面の直角三角形で高さの平方は25−9＝16、高さ4cmとなる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "辺2cmと3cmの長方形を底面とする直方体。底面対角線の平方は？ 正答：13。 2²＋3²＝13。 考える手がかり：根号に直す前の平方を求める。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "三辺2cm,3cm,6cmの直方体の空間対角線は？ 正答：7。 平方は4＋9＋36＝49、正の長さ7。 考える手がかり：底面対角線と高さを直角にはさむ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "底面対角線√13と高さ6を使う直方体の計算で正しいのは？ 正答：(√13)²＋6²＝49。 対角線の平方は13。 考える手がかり：長さとその平方を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "半径3cm、母線5cmの直円錐の高さは？ 正答：4。 高さの平方は5²−3²＝16。 考える手がかり：母線が半断面の斜辺。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "直円錐を軸を通る平面で切り、その断面を軸で半分にした直角三角形で、斜辺になるのは？ 正答：母線。 半径と高さが直角をはさむ。 考える手がかり：底面に垂直な軸を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "直方体で三辺の平方を足せる理由は？ 正答：二つの直角三角形へ順に定理を使える。 底面と、底面対角線・高さの二段階。 考える手がかり：直角がどこにあるか示す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "頂点が底面中心の真上にない円錐へ、どの母線にもl²＝r²＋h²を使える？ 正答：そのままでは使えない。 半径と高さと母線を結ぶ断面の位置条件が変わる。 考える手がかり：直円錐という条件を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "三辺1,1,1の立方体の空間対角線は？ 正答：√3。 平方1＋1＋1＝3の正の平方根。 考える手がかり：面の対角線と空間の対角線を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：2×3×6の直方体の空間対角線は？ 正答：7。 平方4＋9＋36＝49から7。 考える手がかり：三辺を直接足さない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "直方体の空間対角線で三平方の定理を二回使う理由を説明しよう。 途中に√13が出たら小数に丸める必要がある？ 底面で一回、底面対角線と高さで一回使う。次の式には底面対角線の平方が入るので13のまま計算でき、丸める必要はない。 確認項目：二つの直角三角形を特定した。 / 平方13を保って計算した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "三辺2cm,3cm,6cmの直方体で空間対角線を求めよう。 底面2×3の対角線をsとし、s²＝4＋9＝13。 sと高さ6が直角をはさむ平面の三角形を取り出す。 空間対角線dについてd²＝s²＋6²＝13＋36＝49。 dは正の長さだから7cm。途中の根号を丸めず計算できた。 結論：空間対角線7cm。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「直方体の空間対角線は三辺の長さをそのまま足せば求まる。」は誤り。三辺の平方の和が対角線の平方になる。2×3×6なら長さの和11ではなく√49＝7。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "直方体の正の辺a,b,cで空間対角線d²=a²+b²+c²。2,3,6なら底面対角線√13、空間対角線7。直円錐の半径3母線5なら高さ4。 操作図の範囲：操作例は正の三辺2,3,6が互いに直交する直方体で底面対角線√13、空間対角線7。別例は半径3、母線5の直円錐で、軸を通る断面の半分に半径と高さが直角をはさむ三角形ができ、高さ4。斜めの円錐へ無条件に広げない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233411100000",
    "grade": 9,
    "title": "全数調査と標本調査",
    "domain": "D",
    "order": 44,
    "goal": "母集団・標本・全数調査を区別し、目的に応じて調べ方を選ぶ。",
    "coverageCodes": [
      "8350233411100000",
      "8350233421000000"
    ],
    "explanations": {
      "es": {
        "short": "調べたい集まり全体を母集団、その一部として選ぶものを標本という。全てを調べる全数調査と、一部から全体の傾向を推定する標本調査を目的に合わせて使い分けよう。",
        "detail": "架空の箱の部品80個が対象なら母集団は80個全部。そこから20個を選んで調べれば20個が標本になる。標本での結果は分かっても、残る60個の結果を直接見たわけではない。一個ずつ全て確認する必要がある場合や、少数なら全数調査を選べる。調べると壊れる検査など、全てを調べられない場面では標本調査が役立つ。"
      },
      "js": {
        "short": "全数調査は母集団の全てを調べ、標本調査は抽出した一部の標本を調べて母集団の傾向を推定する。調査の目的、対象範囲、時間や検査の性質から方法を検討する。",
        "detail": "母集団の範囲を決めずに標本だけ集めると、何の集まりへ結論を広げるかが曖昧になる。全数調査も読み取りや記録に誤りがあり得るので、全てを対象にしたことと記録の正確さは別。標本調査では選び方に加え、個数や標本ごとのばらつきも確かめ、推定を全数確認の結果と区別して述べる。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "箱の部品を調べる",
        "text": "架空の部品80個の箱から20個を選ぶ。母集団は80個、標本は20個。選んだ20個だけの観察結果から全80個へ結論を広げるときは推定と明示する。",
        "activityIds": [
          "craft-cardboard"
        ]
      },
      {
        "category": "programming",
        "title": "対象一覧を先に決める",
        "text": "架空の画像ファイル40個を全て検査するなら全数調査。40個から10個だけを選ぶなら標本調査。どの40個を対象にしたかを先に固定し、結果の範囲を明確にする。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "架空の部品80個から20個を選んで調べた。母集団は？",
        "options": [
          "選んだ20個だけ",
          "調べなかった60個だけ",
          "部品80個全部"
        ],
        "answer": "部品80個全部",
        "explanation": "結論を知りたい対象全体が母集団。",
        "hint": "標本と全体を分ける。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "架空の部品80個から20個を選んだ。この標本の大きさは？",
        "answer": 20,
        "explanation": "標本として選んだ個数は20。",
        "hint": "全体の個数ではない。",
        "suffix": "個",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "架空の部品80個全てを調べる方法は？",
        "options": [
          "全数調査",
          "標本調査",
          "無作為抽出そのもの"
        ],
        "answer": "全数調査",
        "explanation": "全てが調査対象になる。",
        "hint": "一部だけか全てかを見る。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "検査すると部品が壊れるため、箱の一部を選んで全体の傾向を知りたい。適する方法は？",
        "options": [
          "必ず全てを壊して調べる",
          "見た目で一個だけ選べば十分",
          "選び方を考えた標本調査"
        ],
        "answer": "選び方を考えた標本調査",
        "explanation": "目的と検査の性質に合う方法を検討する。",
        "hint": "選び方の工夫も必要。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "標本20個の結果を知っただけで、未調査60個の状態も一個ずつ確認済みといえる？",
        "options": [
          "標本が整数個ならいえる",
          "いえない",
          "いえる"
        ],
        "answer": "いえない",
        "explanation": "全体の傾向の推定と全個体の確認は異なる。",
        "hint": "直接調べた範囲を保つ。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "母集団を決めるのはなぜ？",
        "options": [
          "どの全体について結論を述べるか定めるため",
          "標本を必ず半分にするため",
          "標本の結果を必ず正しくするため"
        ],
        "answer": "どの全体について結論を述べるか定めるため",
        "explanation": "対象範囲が不明なら推定の行き先も不明。",
        "hint": "調べたい問いと対象を結び付ける。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "全数調査なら記録ミスも絶対にない？",
        "options": [
          "絶対にない",
          "全数調査は必ず標本調査より不正確",
          "全てを調べても記録ミスはあり得る"
        ],
        "answer": "全てを調べても記録ミスはあり得る",
        "explanation": "対象の範囲と測定・記録の正確さは別。",
        "hint": "全数という言葉の意味だけに戻る。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "標本から述べる結論として適切なのは？",
        "options": [
          "標本の値は全体と必ず完全一致するとする",
          "選び方や個数を示して全体の傾向を推定する",
          "全ての対象を直接見たと報告する"
        ],
        "answer": "選び方や個数を示して全体の傾向を推定する",
        "explanation": "推定の根拠と限界を一緒に示す。",
        "hint": "調べた事実と推定を区別する。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：対象40個のうち10個だけを調べた結果は、全数調査の結果と呼べる？",
      "options": [
        "呼べない。標本を調べた結果",
        "呼べる。10個を全て調べたから",
        "40個中なら何個でも全数調査"
      ],
      "answer": "呼べない。標本を調べた結果",
      "explanation": "全数とは母集団40個全てを指す。",
      "hint": "標本内の全てと母集団全てを混同しない。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "問いと対象と方法を分ける",
      "prompt": "架空の部品80個の箱について、ある印の割合を知る調査を計画しよう。",
      "steps": [
        {
          "text": "問いを「この箱80個に占める印付き部品の割合」と定める。"
        },
        {
          "text": "母集団は箱の80個全部とする。"
        },
        {
          "text": "全てを調べるか、一部を偏りなく選ぶかを目的と作業量から選ぶ。"
        },
        {
          "text": "20個の標本を選ぶなら、全体の割合は推定として報告すると決める。"
        }
      ],
      "answer": "母集団・調査方法・推定の範囲を先に決める。",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "標本を全部調べたので、それは母集団の全数調査である。",
      "correction": "全数調査は母集団全てを対象にする。標本内を全部調べても、母集団の一部なら標本調査。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "全数調査と標本調査の違いを、母集団と標本という言葉で説明しよう。",
        "followUp": "全数調査でも別に確かめたいことは？",
        "checkpoints": [
          "母集団と標本を分けた。",
          "調査範囲と記録の正確さを分けた。"
        ],
        "sample": "母集団全てを調べるのが全数調査、一部の標本から全体の傾向を推定するのが標本調査。全数でも測定や記録の誤りは別に確認する。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "調べたい集まり全体を母集団、その一部として選ぶものを標本という。全てを調べる全数調査と、一部から全体の傾向を推定する標本調査を目的に合わせて使い分けよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "架空の箱の部品80個が対象なら母集団は80個全部。そこから20個を選んで調べれば20個が標本になる。標本での結果は分かっても、残る60個の結果を直接見たわけではない。一個ずつ全て確認する必要がある場合や、少数なら全数調査を選べる。調べると壊れる検査など、全てを調べられない場面では標本調査が役立つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "全数調査は母集団の全てを調べ、標本調査は抽出した一部の標本を調べて母集団の傾向を推定する。調査の目的、対象範囲、時間や検査の性質から方法を検討する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "母集団の範囲を決めずに標本だけ集めると、何の集まりへ結論を広げるかが曖昧になる。全数調査も読み取りや記録に誤りがあり得るので、全てを対象にしたことと記録の正確さは別。標本調査では選び方に加え、個数や標本ごとのばらつきも確かめ、推定を全数確認の結果と区別して述べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の部品80個の箱から20個を選ぶ。母集団は80個、標本は20個。選んだ20個だけの観察結果から全80個へ結論を広げるときは推定と明示する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の画像ファイル40個を全て検査するなら全数調査。40個から10個だけを選ぶなら標本調査。どの40個を対象にしたかを先に固定し、結果の範囲を明確にする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "架空の部品80個から20個を選んで調べた。母集団は？ 正答：部品80個全部。 結論を知りたい対象全体が母集団。 考える手がかり：標本と全体を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "架空の部品80個から20個を選んだ。この標本の大きさは？ 正答：20。 標本として選んだ個数は20。 考える手がかり：全体の個数ではない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "架空の部品80個全てを調べる方法は？ 正答：全数調査。 全てが調査対象になる。 考える手がかり：一部だけか全てかを見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "検査すると部品が壊れるため、箱の一部を選んで全体の傾向を知りたい。適する方法は？ 正答：選び方を考えた標本調査。 目的と検査の性質に合う方法を検討する。 考える手がかり：選び方の工夫も必要。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "標本20個の結果を知っただけで、未調査60個の状態も一個ずつ確認済みといえる？ 正答：いえない。 全体の傾向の推定と全個体の確認は異なる。 考える手がかり：直接調べた範囲を保つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "母集団を決めるのはなぜ？ 正答：どの全体について結論を述べるか定めるため。 対象範囲が不明なら推定の行き先も不明。 考える手がかり：調べたい問いと対象を結び付ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "全数調査なら記録ミスも絶対にない？ 正答：全てを調べても記録ミスはあり得る。 対象の範囲と測定・記録の正確さは別。 考える手がかり：全数という言葉の意味だけに戻る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "標本から述べる結論として適切なのは？ 正答：選び方や個数を示して全体の傾向を推定する。 推定の根拠と限界を一緒に示す。 考える手がかり：調べた事実と推定を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：対象40個のうち10個だけを調べた結果は、全数調査の結果と呼べる？ 正答：呼べない。標本を調べた結果。 全数とは母集団40個全てを指す。 考える手がかり：標本内の全てと母集団全てを混同しない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "全数調査と標本調査の違いを、母集団と標本という言葉で説明しよう。 全数調査でも別に確かめたいことは？ 母集団全てを調べるのが全数調査、一部の標本から全体の傾向を推定するのが標本調査。全数でも測定や記録の誤りは別に確認する。 確認項目：母集団と標本を分けた。 / 調査範囲と記録の正確さを分けた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "架空の部品80個の箱について、ある印の割合を知る調査を計画しよう。 問いを「この箱80個に占める印付き部品の割合」と定める。 母集団は箱の80個全部とする。 全てを調べるか、一部を偏りなく選ぶかを目的と作業量から選ぶ。 20個の標本を選ぶなら、全体の割合は推定として報告すると決める。 結論：母集団・調査方法・推定の範囲を先に決める。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「標本を全部調べたので、それは母集団の全数調査である。」は誤り。全数調査は母集団全てを対象にする。標本内を全部調べても、母集団の一部なら標本調査。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "母集団は調べたい全体、標本は選んだ一部。架空80個から20個を調べると母集団80、標本20。全数調査と標本調査、観測した結果と全体への推定を区別する。 操作図の範囲：操作用の架空母集団は部品12個、印付きID1,4,7,10の4個。全数表示では12個全てを調べ印4個。固定標本例ID1,6,11では3個中印1個で、標本だけでは母集団の真の個数を確定しない。この例を実際の無作為抽出とは呼ばない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233411200000",
    "grade": 9,
    "title": "無作為抽出と標本の整理",
    "domain": "D",
    "order": 45,
    "goal": "各要素が等しく選ばれる方法で実際に標本を抽出し、得たデータを整理する。",
    "coverageCodes": [
      "8350233411200000",
      "8350233412100000",
      "8350233512000000"
    ],
    "explanations": {
      "es": {
        "short": "無作為抽出では、都合のよいものだけを選ばず、偶然を使って標本を選ぶ。見た目が同じでも一個ずつ番号を付け、全体のどこからも選ばれる仕組みを作ろう。",
        "detail": "架空の8枚の札に1〜8の番号を付け、値を順に2,4,4,6,8,8,10,12とする。異なる3枚を重複なく選ぶなら、順番を区別しない組は56通り。この56組を同じ確率で選ぶ仕組みを使う。値4の札も番号2と3の別の札なので、一つにまとめてはいけない。選んだ番号と値を対応させ、平均などを整理する。"
      },
      "js": {
        "short": "無作為抽出では母集団の各要素を選ぶ機会を公平にし、ここでは8個から異なる3個を選ぶ56組を等確率にする。無作為であることは、どの標本も全体と同じ傾向になる保証ではない。",
        "detail": "同じ3枚を順番だけ変えた取り方は一つの組として扱う。一回の標本内では同じ番号を重ねないが、母集団を元へ戻して別の調査をすれば前回と同じ組が出ることも正常な結果。操作図の固定例は説明用の選択であり、抽出を実行する操作とは区別する。抽出に失敗した場合は以前の結果を新しい結果と呼ばない。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "番号から値を取り出す",
        "text": "架空の8枚の札の値は番号順に2,4,4,6,8,8,10,12。番号1,3,4の固定例なら値2,4,6で平均4。この固定例を計算することと、偶然に組を選ぶことは別の操作。",
        "activityIds": [
          "prog-python"
        ]
      },
      {
        "category": "craft",
        "title": "同じ形の札を混ぜる",
        "text": "架空の同じ形の番号札1〜8を十分混ぜ、見ずに3枚を戻さず選ぶ。番号を重ねず記録し、値の大小で選び直さない。理想化した公平な抽出として考える。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "値4の札に番号2と3が付いている。抽出時の扱いは？",
        "options": [
          "4の札を両方取り除く",
          "別々の札として残す",
          "同じ値なので一枚にまとめる"
        ],
        "answer": "別々の札として残す",
        "explanation": "抽出対象は個々の札で、値が同じでも別の要素。",
        "hint": "個体の番号と値を区別する。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "番号1〜8から異なる3枚を選ぶ。一つの組として同じなのは？",
        "options": [
          "1,3,4 と 4,1,3",
          "1,3,4 と 1,3,5",
          "1,3,4 と 1,1,4"
        ],
        "answer": "1,3,4 と 4,1,3",
        "explanation": "順番を区別しない組で、同じ番号を重ねない。",
        "hint": "選ばれた三つの番号だけを比べる。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "番号順の値が2,4,4,6,8,8,10,12の札から、固定例として番号1,3,4を選んだ。平均は？",
        "answer": 4,
        "explanation": "値は2,4,6で合計12、3で割り4。",
        "hint": "番号そのものを平均しない。",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "大きな値の札だけを見て選ぶ方法は、全体の平均を推定する無作為抽出として適切？",
        "options": [
          "適切。番号が付いているから",
          "適切でない。選び方が値に偏る",
          "適切。平均が計算できるから"
        ],
        "answer": "適切でない。選び方が値に偏る",
        "explanation": "計算できても選び方の偏りは消えない。",
        "hint": "抽出の段階を確認する。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "無作為に選んだ3枚の平均は、母集団8枚の平均と必ず一致する？",
        "options": [
          "必ずは一致しない",
          "必ず一致する",
          "一度一致しなければ無作為でない"
        ],
        "answer": "必ずは一致しない",
        "explanation": "公平な選択でも標本の結果はばらつく。",
        "hint": "選び方と一回の結果を分ける。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "各回で8枚全体へ戻して独立に3枚を選ぶ。前回と同じ組が出たら？",
        "options": [
          "必ず抽出の失敗",
          "必ず違う組へ選び直す",
          "同じ組も起こり得る正常な結果"
        ],
        "answer": "同じ組も起こり得る正常な結果",
        "explanation": "同じ組を禁止すると定めた等確率の選び方を変える。",
        "hint": "標本内の重複と別の回の一致を分ける。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "8枚から3枚を重複なく選ぶ56組を全て同確率で選ぶとき、一つの指定した組の確率は？",
        "options": [
          "3/8",
          "1/56",
          "1/8"
        ],
        "answer": "1/56",
        "explanation": "同様に確からしい56通りのうち指定の1通り。",
        "hint": "一枚が選ばれる確率ではなく一組の確率。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "抽出の操作が失敗して前の組が画面に残った。説明として正しいのは？",
        "options": [
          "新しい抽出結果ではなく、前の結果を保持している",
          "新しく同じ組が選ばれたと断定する",
          "無作為なら失敗は起きないとする"
        ],
        "answer": "新しい抽出結果ではなく、前の結果を保持している",
        "explanation": "実行の成功と結果の一致は別に確認する。",
        "hint": "固定例・成功した抽出・失敗を区別する。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：無作為抽出で小さい値が三つ選ばれた。全体と違いそうだから選び直す？",
      "options": [
        "必ず中央の値へ取り替える",
        "大きい値が出るまで繰り返す",
        "値を理由に選び直さない"
      ],
      "answer": "値を理由に選び直さない",
      "explanation": "結果を見て都合よく選び直すと抽出の仕組みが変わる。",
      "hint": "選び方を先に定める。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "番号と値を対応させる",
      "prompt": "値が番号順に2,4,4,6,8,8,10,12の8枚から、固定例として番号1,3,4を選んだ結果を整理しよう。",
      "steps": [
        {
          "text": "番号1,3,4が異なる三枚であることを確認する。"
        },
        {
          "text": "対応する値2,4,6を取り出す。"
        },
        {
          "text": "合計12を標本の大きさ3で割り、平均4を求める。"
        },
        {
          "text": "これはこの標本の平均。固定例の選択と無作為抽出の実行を区別する。"
        }
      ],
      "answer": "固定例の標本平均4。",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "無作為抽出なら、どの標本の平均も母集団の平均と完全に一致する。",
      "correction": "無作為は選び方の条件。各標本の値や平均はばらつき、全体の値と必ず一致するわけではない。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "番号と値を分けて記録する理由と、無作為抽出でもばらつく理由を説明しよう。",
        "followUp": "別の回に同じ組が出た場合は必ず失敗？",
        "checkpoints": [
          "同じ値でも個々の札を区別した。",
          "選び方と一回の結果を分けた。"
        ],
        "sample": "値が同じ札にも別番号を付けて公平に選ぶ。56組には異なる値の組があるので結果はばらつく。全体へ戻す別の回で同じ組が出ることはあり、失敗とは別。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "無作為抽出では、都合のよいものだけを選ばず、偶然を使って標本を選ぶ。見た目が同じでも一個ずつ番号を付け、全体のどこからも選ばれる仕組みを作ろう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "架空の8枚の札に1〜8の番号を付け、値を順に2,4,4,6,8,8,10,12とする。異なる3枚を重複なく選ぶなら、順番を区別しない組は56通り。この56組を同じ確率で選ぶ仕組みを使う。値4の札も番号2と3の別の札なので、一つにまとめてはいけない。選んだ番号と値を対応させ、平均などを整理する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "無作為抽出では母集団の各要素を選ぶ機会を公平にし、ここでは8個から異なる3個を選ぶ56組を等確率にする。無作為であることは、どの標本も全体と同じ傾向になる保証ではない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "同じ3枚を順番だけ変えた取り方は一つの組として扱う。一回の標本内では同じ番号を重ねないが、母集団を元へ戻して別の調査をすれば前回と同じ組が出ることも正常な結果。操作図の固定例は説明用の選択であり、抽出を実行する操作とは区別する。抽出に失敗した場合は以前の結果を新しい結果と呼ばない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の8枚の札の値は番号順に2,4,4,6,8,8,10,12。番号1,3,4の固定例なら値2,4,6で平均4。この固定例を計算することと、偶然に組を選ぶことは別の操作。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の同じ形の番号札1〜8を十分混ぜ、見ずに3枚を戻さず選ぶ。番号を重ねず記録し、値の大小で選び直さない。理想化した公平な抽出として考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "値4の札に番号2と3が付いている。抽出時の扱いは？ 正答：別々の札として残す。 抽出対象は個々の札で、値が同じでも別の要素。 考える手がかり：個体の番号と値を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "番号1〜8から異なる3枚を選ぶ。一つの組として同じなのは？ 正答：1,3,4 と 4,1,3。 順番を区別しない組で、同じ番号を重ねない。 考える手がかり：選ばれた三つの番号だけを比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "番号順の値が2,4,4,6,8,8,10,12の札から、固定例として番号1,3,4を選んだ。平均は？ 正答：4。 値は2,4,6で合計12、3で割り4。 考える手がかり：番号そのものを平均しない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "大きな値の札だけを見て選ぶ方法は、全体の平均を推定する無作為抽出として適切？ 正答：適切でない。選び方が値に偏る。 計算できても選び方の偏りは消えない。 考える手がかり：抽出の段階を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "無作為に選んだ3枚の平均は、母集団8枚の平均と必ず一致する？ 正答：必ずは一致しない。 公平な選択でも標本の結果はばらつく。 考える手がかり：選び方と一回の結果を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "各回で8枚全体へ戻して独立に3枚を選ぶ。前回と同じ組が出たら？ 正答：同じ組も起こり得る正常な結果。 同じ組を禁止すると定めた等確率の選び方を変える。 考える手がかり：標本内の重複と別の回の一致を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "8枚から3枚を重複なく選ぶ56組を全て同確率で選ぶとき、一つの指定した組の確率は？ 正答：1/56。 同様に確からしい56通りのうち指定の1通り。 考える手がかり：一枚が選ばれる確率ではなく一組の確率。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "抽出の操作が失敗して前の組が画面に残った。説明として正しいのは？ 正答：新しい抽出結果ではなく、前の結果を保持している。 実行の成功と結果の一致は別に確認する。 考える手がかり：固定例・成功した抽出・失敗を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：無作為抽出で小さい値が三つ選ばれた。全体と違いそうだから選び直す？ 正答：値を理由に選び直さない。 結果を見て都合よく選び直すと抽出の仕組みが変わる。 考える手がかり：選び方を先に定める。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "番号と値を分けて記録する理由と、無作為抽出でもばらつく理由を説明しよう。 別の回に同じ組が出た場合は必ず失敗？ 値が同じ札にも別番号を付けて公平に選ぶ。56組には異なる値の組があるので結果はばらつく。全体へ戻す別の回で同じ組が出ることはあり、失敗とは別。 確認項目：同じ値でも個々の札を区別した。 / 選び方と一回の結果を分けた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "値が番号順に2,4,4,6,8,8,10,12の8枚から、固定例として番号1,3,4を選んだ結果を整理しよう。 番号1,3,4が異なる三枚であることを確認する。 対応する値2,4,6を取り出す。 合計12を標本の大きさ3で割り、平均4を求める。 これはこの標本の平均。固定例の選択と無作為抽出の実行を区別する。 結論：固定例の標本平均4。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「無作為抽出なら、どの標本の平均も母集団の平均と完全に一致する。」は誤り。無作為は選び方の条件。各標本の値や平均はばらつき、全体の値と必ず一致するわけではない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "架空8札のID1..8に値[2,4,4,6,8,8,10,12]を対応。異なる3IDの順序なし部分集合は56組、等確率なら各組1/56。固定例ID[1,3,4]は値[2,4,6]で平均4。各標本の値はばらつき得る。 操作図の範囲：操作用の部品ID1..8の長さは順に[2,4,4,6,8,8,10,12]mm。1≤i<j<k≤8の56組を辞書順に並べ、つまみ1..56は固定例を選ぶ。選択値は各IDの値、合計を3で割った標本平均を分数または整数で示す。無作為操作は56組を同確率1/56で選び、同じ回の標本内では同じIDを重ねない。別の回では同じ組も正常に出る。固定例・新しい抽出の成功・失敗による以前の結果の保持を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233412200000",
    "grade": 9,
    "title": "標本から母集団の傾向を推定する",
    "domain": "D",
    "order": 46,
    "goal": "標本の割合や平均を使って全体を推定し、抽出ごとの違いと推定の限界を説明する。",
    "coverageCodes": [
      "8350232100000000",
      "8350232200000000",
      "8350232300000000",
      "8350233411200000",
      "8350233412100000",
      "8350233412200000",
      "8350233511000000",
      "8350233513000000"
    ],
    "explanations": {
      "es": {
        "short": "偏りなく選んだ標本の割合や平均から、母集団の傾向を推定する。標本20個中6個なら割合6/20＝0.3。母集団80個へ広げると、該当する個数は約24個と推定するよ。",
        "detail": "架空の母集団80個から無作為に20個を選び、印付きが6個だったとする。観察した事実は標本で6個ということ。全体の割合もおよそ0.3と考えると80×0.3＝24で、約24個と推定する。未調査の60個を全て見たわけではないので、全体に24個あると確定はしない。別の標本で5個や7個なら推定も約20個や約28個になる。"
      },
      "js": {
        "short": "母集団の大きさN、標本の大きさn>0、標本中の該当数kに対し、標本比率k/nを用いて全体の該当数をN×k/nと推定する。無作為な選択と対象範囲を確認し、推定値を真の値と区別する。",
        "detail": "ここではN,n,kを整数、0≤k≤n≤N、n>0として扱う。母集団80、標本20でk＝5,6,7なら推定個数は20,24,28となり、標本が変わると推定値も変わる。標本を増やすことは一般に情報を増やすが、一回ごとの推定誤差が必ず小さくなるとは限らない。選び方の偏りを個数だけで消せるともいえない。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "標本だけを色分けする",
        "text": "架空の80個の部品から無作為に選んだ20個で、印付き6個を確認する。標本だけを6対14に色分けし、全体は未確認のまま約24個と推定する。",
        "activityIds": [
          "craft-cardboard"
        ]
      },
      {
        "category": "programming",
        "title": "割合を全体へ広げる",
        "text": "架空の母集団80個、標本20個を固定し、該当数5,6,7に対し80×k/20を計算すると20,24,28。三つは別の標本の例で、実際の全体の個数が変わったことを表さない。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "架空の80個から無作為に選んだ20個のうち6個が印付き。標本での印付きの割合は？",
        "answer": 0.3,
        "explanation": "6/20＝0.3。",
        "hint": "分母は調べた標本の個数。",
        "suffix": "",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "架空の母集団80個、無作為標本20個中印付き6個。全体の印付きは約何個と推定する？",
        "answer": 24,
        "explanation": "80×6/20＝24。全体で確認済みの個数ではない。",
        "hint": "標本割合を全体の個数へかける。",
        "suffix": "個（推定）",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "架空の母集団80個、無作為標本20個中印付き5個。全体の印付きは約何個と推定する？",
        "answer": 20,
        "explanation": "80×5/20＝20。",
        "hint": "分母20を変えず割合を求める。",
        "suffix": "個（推定）",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "架空の母集団80個、無作為標本20個中印付き7個。全体の印付きは約何個と推定する？",
        "answer": 28,
        "explanation": "80×7/20＝28。",
        "hint": "観察値7を推定式へ入れる。",
        "suffix": "個（推定）",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "80個中、無作為標本20個の印付き6個から約24個と推定した。確かめた事実は？",
        "options": [
          "母集団80個の中に必ず24個あった",
          "未調査60個の中に必ず18個あった",
          "標本20個の中に印付き6個あった"
        ],
        "answer": "標本20個の中に印付き6個あった",
        "explanation": "残りの状態は直接観察していない。",
        "hint": "観察と推定を分ける。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "同じ母集団から同じ大きさの無作為標本を別々に取り、同じ推定式で正しく計算した推定値が変わった。必ず意味するのは？",
        "options": [
          "片方は必ず計算ミスだったこと",
          "標本の結果が異なったということ",
          "母集団の真の個数が変化したこと"
        ],
        "answer": "標本の結果が異なったということ",
        "explanation": "同じ母集団でも抽出された標本は違い得る。",
        "hint": "ばらつきの原因を一つに断定しない。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "標本の大きさ0で標本比率k/nを計算できる？",
        "options": [
          "できない。分母0になる",
          "割合0と決めればよい",
          "母集団80ならできる"
        ],
        "answer": "できない。分母0になる",
        "explanation": "観察がない標本からこの比率は定義できない。",
        "hint": "分母の条件を確認する。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "標本を増やせば、その一回の推定値は必ず真の値へ近付く？",
        "options": [
          "必ず近付く",
          "標本を増やす意味は全くない",
          "必ずとはいえない"
        ],
        "answer": "必ずとはいえない",
        "explanation": "情報は増えても各回の偶然による変動を完全にはなくせない。",
        "hint": "一般の傾向と必ずという主張を分ける。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：母集団80個の無作為標本20個で印付き6個。約24個という答えは？",
      "options": [
        "標本の個数そのもの",
        "全体の個数の推定",
        "80個全てを調べた確定結果"
      ],
      "answer": "全体の個数の推定",
      "explanation": "標本割合を全体へ広げた値である。",
      "hint": "直接見たのはどの範囲かを確認する。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "標本の割合から推定へ",
      "prompt": "架空の80個から無作為に選んだ20個のうち、6個に印があった。全体の印付き個数を推定しよう。",
      "steps": [
        {
          "text": "母集団80個、標本20個、観察した該当数6個を分ける。"
        },
        {
          "text": "標本の割合6/20＝0.3を求める。"
        },
        {
          "text": "全体の割合もおよそ0.3と考え、80×0.3＝24を計算する。"
        },
        {
          "text": "約24個と推定すると述べ、未調査部分を確認した値ではないと添える。"
        }
      ],
      "answer": "印付きは約24個と推定。",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "標本20個中6個なら、母集団80個には印付きがちょうど24個ある。",
      "correction": "80×6/20＝24は標本からの推定値。全数を調べていないので、真の個数がちょうど24とは確定しない。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "標本20個中6個から母集団80個を約24個と推定する考え方を説明しよう。",
        "followUp": "別の標本で5個や7個だったら何が変わる？",
        "checkpoints": [
          "標本割合と全体への計算を分けた。",
          "推定と確認済みの事実を区別した。"
        ],
        "sample": "標本割合6/20を全体へ広げ80×6/20＝24と推定する。5個なら20、7個なら28と推定は変わるが、母集団の真の個数が変わったと決まるわけではない。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "偏りなく選んだ標本の割合や平均から、母集団の傾向を推定する。標本20個中6個なら割合6/20＝0.3。母集団80個へ広げると、該当する個数は約24個と推定するよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "架空の母集団80個から無作為に20個を選び、印付きが6個だったとする。観察した事実は標本で6個ということ。全体の割合もおよそ0.3と考えると80×0.3＝24で、約24個と推定する。未調査の60個を全て見たわけではないので、全体に24個あると確定はしない。別の標本で5個や7個なら推定も約20個や約28個になる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "母集団の大きさN、標本の大きさn>0、標本中の該当数kに対し、標本比率k/nを用いて全体の該当数をN×k/nと推定する。無作為な選択と対象範囲を確認し、推定値を真の値と区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "ここではN,n,kを整数、0≤k≤n≤N、n>0として扱う。母集団80、標本20でk＝5,6,7なら推定個数は20,24,28となり、標本が変わると推定値も変わる。標本を増やすことは一般に情報を増やすが、一回ごとの推定誤差が必ず小さくなるとは限らない。選び方の偏りを個数だけで消せるともいえない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の80個の部品から無作為に選んだ20個で、印付き6個を確認する。標本だけを6対14に色分けし、全体は未確認のまま約24個と推定する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の母集団80個、標本20個を固定し、該当数5,6,7に対し80×k/20を計算すると20,24,28。三つは別の標本の例で、実際の全体の個数が変わったことを表さない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "架空の80個から無作為に選んだ20個のうち6個が印付き。標本での印付きの割合は？ 正答：0.3。 6/20＝0.3。 考える手がかり：分母は調べた標本の個数。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "架空の母集団80個、無作為標本20個中印付き6個。全体の印付きは約何個と推定する？ 正答：24。 80×6/20＝24。全体で確認済みの個数ではない。 考える手がかり：標本割合を全体の個数へかける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "架空の母集団80個、無作為標本20個中印付き5個。全体の印付きは約何個と推定する？ 正答：20。 80×5/20＝20。 考える手がかり：分母20を変えず割合を求める。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "架空の母集団80個、無作為標本20個中印付き7個。全体の印付きは約何個と推定する？ 正答：28。 80×7/20＝28。 考える手がかり：観察値7を推定式へ入れる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "80個中、無作為標本20個の印付き6個から約24個と推定した。確かめた事実は？ 正答：標本20個の中に印付き6個あった。 残りの状態は直接観察していない。 考える手がかり：観察と推定を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "同じ母集団から同じ大きさの無作為標本を別々に取り、同じ推定式で正しく計算した推定値が変わった。必ず意味するのは？ 正答：標本の結果が異なったということ。 同じ母集団でも抽出された標本は違い得る。 考える手がかり：ばらつきの原因を一つに断定しない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "標本の大きさ0で標本比率k/nを計算できる？ 正答：できない。分母0になる。 観察がない標本からこの比率は定義できない。 考える手がかり：分母の条件を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "標本を増やせば、その一回の推定値は必ず真の値へ近付く？ 正答：必ずとはいえない。 情報は増えても各回の偶然による変動を完全にはなくせない。 考える手がかり：一般の傾向と必ずという主張を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：母集団80個の無作為標本20個で印付き6個。約24個という答えは？ 正答：全体の個数の推定。 標本割合を全体へ広げた値である。 考える手がかり：直接見たのはどの範囲かを確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "標本20個中6個から母集団80個を約24個と推定する考え方を説明しよう。 別の標本で5個や7個だったら何が変わる？ 標本割合6/20を全体へ広げ80×6/20＝24と推定する。5個なら20、7個なら28と推定は変わるが、母集団の真の個数が変わったと決まるわけではない。 確認項目：標本割合と全体への計算を分けた。 / 推定と確認済みの事実を区別した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "架空の80個から無作為に選んだ20個のうち、6個に印があった。全体の印付き個数を推定しよう。 母集団80個、標本20個、観察した該当数6個を分ける。 標本の割合6/20＝0.3を求める。 全体の割合もおよそ0.3と考え、80×0.3＝24を計算する。 約24個と推定すると述べ、未調査部分を確認した値ではないと添える。 結論：印付きは約24個と推定。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「標本20個中6個なら、母集団80個には印付きがちょうど24個ある。」は誤り。80×6/20＝24は標本からの推定値。全数を調べていないので、真の個数がちょうど24とは確定しない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "整数0≤k≤n≤N,n>0の標本比率k/nを用いN×k/nを推定値とする。N80,n20,k5/6/7なら約20/24/28個。観察した標本と未確認の母集団全体を区別し、真の個数を既知としない。 操作図の範囲：操作の架空母集団80個の真の該当数は未知。無作為標本20個中の該当数k=5,6,7に対し、標本割合0.25,0.3,0.35から80k/20=20,24,28を約の付く推定個数として示す。標本以外を既知の該当数として色分けしない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "motion",
        "text": "母集団80個の該当総数は未知のまま、無作為に選んだ標本20個中の6個を観察する。標本割合6/20=0.3から80×0.3=24と計算し、全体は約24個と推定すると述べる。全体の80個に既知の24個を描かず、観察した6個と推定24個を区別する。別標本5個・7個なら約20個・約28個の推定となり、標本によるばらつきを示す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  },
  {
    "code": "8350233412100000",
    "grade": 9,
    "title": "標本調査の方法と結果を確かめる",
    "domain": "D",
    "order": 47,
    "goal": "調査の目的から母集団・抽出・整理・推定をつなぎ、偏りや欠測で言える範囲を見直す。",
    "coverageCodes": [
      "8350232100000000",
      "8350232200000000",
      "8350232300000000",
      "8350233411100000",
      "8350233411200000",
      "8350233412100000",
      "8350233412200000",
      "8350233511000000",
      "8350233513000000"
    ],
    "explanations": {
      "es": {
        "short": "標本調査の結果を読むときは、何を知りたいか、どの全体からどう選んだか、何個調べたかを確かめよう。計算が正しくても、選び方が偏っていれば全体へ広げる根拠が弱くなるよ。",
        "detail": "架空の部品80個の箱で、上にある20個だけを取る方法と、全80個に番号を付けて無作為に20個選ぶ方法を比べる。部品の種類が位置と関係していれば上だけの標本は偏る。どちらも平均や割合を計算できるが、計算可能であることは選び方の妥当さを保証しない。結果を示すときは対象、抽出法、標本の大きさ、観察値と推定値を添える。"
      },
      "js": {
        "short": "目的・母集団・抽出方法・標本の大きさ・集計・推定の順に根拠を確認する。偏りと標本によるばらつき、観測事実と推定を区別し、結果から調査方法を振り返る。",
        "detail": "無作為に選んでも、読みにくい札を理由なく除外すると、残った標本の性質が変わることがある。除外の理由や個数を記録し、方法を見直す。都合のよい結果が出るまで抽出を繰り返して一回だけを報告する方法も避ける。仮想資料だけで方法を比較し、実在する人の情報を集める必要はない。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "二つの抽出手順を比べる",
        "text": "架空の番号1〜80の部品で、1〜20だけを選ぶ手順と全80個から無作為に20個選ぶ手順を比較する。番号と種類が関係する可能性を考え、集計式が同じでも抽出方法は別だと確認する。",
        "activityIds": [
          "prog-python"
        ]
      },
      {
        "category": "drawing",
        "title": "報告図に条件を添える",
        "text": "架空の母集団80個、無作為標本20個、該当6個から約24個と推定した図に、三つの個数と抽出方法を書く。全体を24個に色分けして既知の結果のように描かない。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "部品80個の箱で、上の20個だけを調べる方法の問題は？",
        "options": [
          "20という偶数を使ったこと",
          "割合を計算できないこと",
          "位置と種類が関係するなら標本が偏る可能性"
        ],
        "answer": "位置と種類が関係するなら標本が偏る可能性",
        "explanation": "問題は個数の偶奇ではなく選び方。",
        "hint": "全体のどこから選べるかを見る。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "標本の割合の計算が正しいと分かった。全体への推定も必ず妥当？",
        "options": [
          "計算が正しい標本は全数調査になる",
          "抽出方法なども確認する必要がある",
          "必ず妥当"
        ],
        "answer": "抽出方法なども確認する必要がある",
        "explanation": "正しい計算でも偏った選択を補えない。",
        "hint": "計算の前の段階へ戻る。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "標本調査の報告に必要な組は？",
        "options": [
          "母集団・抽出法・標本の個数・観察値と推定",
          "推定値だけ",
          "都合のよい一つの標本だけ"
        ],
        "answer": "母集団・抽出法・標本の個数・観察値と推定",
        "explanation": "読み手が推定の根拠と範囲を追えるようにする。",
        "hint": "結果へ至る条件を残す。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "無作為に選んだ札で読みにくいものを除外した。するべきことは？",
        "options": [
          "除外を隠して同じ抽出だとする",
          "読みやすい値だけ無条件に正しいとする",
          "除外の理由と個数を記録し影響を検討する"
        ],
        "answer": "除外の理由と個数を記録し影響を検討する",
        "explanation": "読みにくさが値と関係する場合などに偏りが生じ得る。",
        "hint": "選んだ後の扱いも調査の一部。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "望んだ割合が出るまで抽出し、その回だけ報告する方法は？",
        "options": [
          "繰り返すほど必ず正しい",
          "結果に合わせた選択になり推定の根拠を損なう",
          "最初から決めた無作為抽出と同じ"
        ],
        "answer": "結果に合わせた選択になり推定の根拠を損なう",
        "explanation": "結果を見て採用する回を選ぶと方法が変わる。",
        "hint": "抽出前に決めた手順を守る。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "偏った選び方のまま標本を増やすだけで、偏りは必ず消える？",
        "options": [
          "必ずは消えない",
          "必ず消える",
          "一個でも増やせば全数調査"
        ],
        "answer": "必ずは消えない",
        "explanation": "母集団の特定部分しか選べない仕組み自体を見直す。",
        "hint": "個数と選び方は別の条件。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "80個から無作為標本20個を取り6個該当した。適切な報告は？",
        "options": [
          "全80個を確認し24個だった",
          "未確認の60個は必ず18個該当",
          "標本では6/20、全体は約24個と推定"
        ],
        "answer": "標本では6/20、全体は約24個と推定",
        "explanation": "観察した割合とそこからの推定を分ける。",
        "hint": "既知としてよい範囲を守る。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "同じ条件の無作為標本を二回取り推定が異なった。次に考えることは？",
        "options": [
          "母集団が必ず変化したと決める",
          "計算と手順を確かめ、標本のばらつきも検討する",
          "違う結果の片方を必ず削除する"
        ],
        "answer": "計算と手順を確かめ、標本のばらつきも検討する",
        "explanation": "複数の可能性を調査の根拠へ戻って確かめる。",
        "hint": "一回の違いから原因を断定しない。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "予想：上の20個だけを調べた平均と無作為20個の平均が同じだった。選び方も同じといえる？",
      "options": [
        "いえない。一回の一致と方法の同一性は別",
        "いえる。数値が同じだから",
        "どちらも全数調査になる"
      ],
      "answer": "いえない。一回の一致と方法の同一性は別",
      "explanation": "たまたま同じ値でも、選ばれる機会の仕組みは違う。",
      "hint": "結果と方法を分けて比べる。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "結果から方法へ戻る",
      "prompt": "架空の部品80個のうち上の20個を選び、該当6個から全体約24個と報告した。検討しよう。",
      "steps": [
        {
          "text": "母集団80、標本20、観察値6、推定24を分ける。"
        },
        {
          "text": "80×6/20＝24という計算は正しいと確認する。"
        },
        {
          "text": "上だけを選んだため、位置と種類が関係するなら偏りがあると気付く。"
        },
        {
          "text": "全体から無作為に選ぶ手順や除外の扱いを整え、推定の根拠を明示する。"
        }
      ],
      "answer": "計算だけでなく、抽出方法も検討する。",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "計算が正しければ、どこから選んだ標本でも全体の推定に同じように使える。",
      "correction": "計算の正しさと抽出の妥当さは別。特定部分だけを選ぶ偏りは、計算を正しくしてもなくならない。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "標本調査の結果を確かめるとき、計算以外の何を見るか説明しよう。",
        "followUp": "同じ結果が出れば、二つの抽出方法も同じといえる？",
        "checkpoints": [
          "母集団と抽出方法を確認した。",
          "結果の一致と方法の妥当さを区別した。"
        ],
        "sample": "対象範囲、全体から選ぶ仕組み、標本の大きさ、除外の扱いを確認する。一回の数値が同じでも選び方が同じとはいえず、観察と推定を分けて報告する。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "標本調査の結果を読むときは、何を知りたいか、どの全体からどう選んだか、何個調べたかを確かめよう。計算が正しくても、選び方が偏っていれば全体へ広げる根拠が弱くなるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "架空の部品80個の箱で、上にある20個だけを取る方法と、全80個に番号を付けて無作為に20個選ぶ方法を比べる。部品の種類が位置と関係していれば上だけの標本は偏る。どちらも平均や割合を計算できるが、計算可能であることは選び方の妥当さを保証しない。結果を示すときは対象、抽出法、標本の大きさ、観察値と推定値を添える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "目的・母集団・抽出方法・標本の大きさ・集計・推定の順に根拠を確認する。偏りと標本によるばらつき、観測事実と推定を区別し、結果から調査方法を振り返る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "無作為に選んでも、読みにくい札を理由なく除外すると、残った標本の性質が変わることがある。除外の理由や個数を記録し、方法を見直す。都合のよい結果が出るまで抽出を繰り返して一回だけを報告する方法も避ける。仮想資料だけで方法を比較し、実在する人の情報を集める必要はない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の番号1〜80の部品で、1〜20だけを選ぶ手順と全80個から無作為に20個選ぶ手順を比較する。番号と種類が関係する可能性を考え、集計式が同じでも抽出方法は別だと確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の母集団80個、無作為標本20個、該当6個から約24個と推定した図に、三つの個数と抽出方法を書く。全体を24個に色分けして既知の結果のように描かない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "部品80個の箱で、上の20個だけを調べる方法の問題は？ 正答：位置と種類が関係するなら標本が偏る可能性。 問題は個数の偶奇ではなく選び方。 考える手がかり：全体のどこから選べるかを見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "標本の割合の計算が正しいと分かった。全体への推定も必ず妥当？ 正答：抽出方法なども確認する必要がある。 正しい計算でも偏った選択を補えない。 考える手がかり：計算の前の段階へ戻る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "標本調査の報告に必要な組は？ 正答：母集団・抽出法・標本の個数・観察値と推定。 読み手が推定の根拠と範囲を追えるようにする。 考える手がかり：結果へ至る条件を残す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "無作為に選んだ札で読みにくいものを除外した。するべきことは？ 正答：除外の理由と個数を記録し影響を検討する。 読みにくさが値と関係する場合などに偏りが生じ得る。 考える手がかり：選んだ後の扱いも調査の一部。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "望んだ割合が出るまで抽出し、その回だけ報告する方法は？ 正答：結果に合わせた選択になり推定の根拠を損なう。 結果を見て採用する回を選ぶと方法が変わる。 考える手がかり：抽出前に決めた手順を守る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "偏った選び方のまま標本を増やすだけで、偏りは必ず消える？ 正答：必ずは消えない。 母集団の特定部分しか選べない仕組み自体を見直す。 考える手がかり：個数と選び方は別の条件。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "80個から無作為標本20個を取り6個該当した。適切な報告は？ 正答：標本では6/20、全体は約24個と推定。 観察した割合とそこからの推定を分ける。 考える手がかり：既知としてよい範囲を守る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "同じ条件の無作為標本を二回取り推定が異なった。次に考えることは？ 正答：計算と手順を確かめ、標本のばらつきも検討する。 複数の可能性を調査の根拠へ戻って確かめる。 考える手がかり：一回の違いから原因を断定しない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "予想：上の20個だけを調べた平均と無作為20個の平均が同じだった。選び方も同じといえる？ 正答：いえない。一回の一致と方法の同一性は別。 たまたま同じ値でも、選ばれる機会の仕組みは違う。 考える手がかり：結果と方法を分けて比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "標本調査の結果を確かめるとき、計算以外の何を見るか説明しよう。 同じ結果が出れば、二つの抽出方法も同じといえる？ 対象範囲、全体から選ぶ仕組み、標本の大きさ、除外の扱いを確認する。一回の数値が同じでも選び方が同じとはいえず、観察と推定を分けて報告する。 確認項目：母集団と抽出方法を確認した。 / 結果の一致と方法の妥当さを区別した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "架空の部品80個のうち上の20個を選び、該当6個から全体約24個と報告した。検討しよう。 母集団80、標本20、観察値6、推定24を分ける。 80×6/20＝24という計算は正しいと確認する。 上だけを選んだため、位置と種類が関係するなら偏りがあると気付く。 全体から無作為に選ぶ手順や除外の扱いを整え、推定の根拠を明示する。 結論：計算だけでなく、抽出方法も検討する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「計算が正しければ、どこから選んだ標本でも全体の推定に同じように使える。」は誤り。計算の正しさと抽出の妥当さは別。特定部分だけを選ぶ偏りは、計算を正しくしてもなくならない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "抽出方法の偏りと標本ごとのばらつきは別。母集団80、標本20、該当6からの推定24は計算として同じでも、上だけ選択と全体無作為選択は異なる方法。結果の一致は方法の同一性を保証しない。 操作図の範囲：操作の架空模型は部品24個、真の印付きはID1..10,13,14の計12個。無作為抽出の結果を説明する固定例ID1,5,9,13,17,21は6個中印4個で全体約16個と推定。手前だけID1..6の固定例は6個中印6個で約24個と推定。全体確認で真の12個と比較する。どちらも図の固定例で実抽出の実行ではなく、一回の誤差の大小だけで抽出方法を決めない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh3-codes",
          "mext-jh3-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "pending",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "数量・単位・前提を保ち、架空の登場物を別の架空の物へ置き換える。",
        "数学的な意味と正答を保って文を短く言い換える。"
      ],
      "forbidden": [
        "数値・文字の対応・符号・単位・変域・0の除外・等確率・正答を変更しない。",
        "誤答や誤解の例を正しい主張として示さない。",
        "claimsの外の事実・証明・確率の断定を追加しない。",
        "個人情報・実在する人の記録・外部作品の仕様を追加しない。"
      ]
    }
  }
];
  var sources = [
  {
    "id": "mext-jh3-codes",
    "url": "https://www.mext.go.jp/content/20230901-mxt_syoto01-000010374_10.xlsx",
    "title": "文部科学省 中学校学習指導要領コード83V11・第3学年数学92行",
    "retrievedAt": "2026-11-04"
  },
  {
    "id": "mext-jh3-commentary",
    "url": "https://www.mext.go.jp/component/a_menu/education/micro_detail/__icsFiles/afieldfile/2019/03/18/1387018_004.pdf",
    "title": "文部科学省 中学校学習指導要領（平成29年告示）解説 数学編・第3学年（印刷pp.131–161）",
    "retrievedAt": "2026-11-04"
  }
];
  data.units = data.units.concat(units);
  data.sources = data.sources.concat(sources);
  data.version = "7";
  data.grades = [4, 5, 6, 7, 8, 9];
}());
