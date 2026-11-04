/* Original junior-high grade-2 mathematics; preserves all earlier lessons. */
(function () {
  "use strict";
  var data = window.BL && window.BL.data;
  if (!data || data.version !== "5" || !Array.isArray(data.units) || data.units.length !== 104 || !Array.isArray(data.sources)) { return; }
  var units = [
  {
    "code": "8350223110000000",
    "grade": 8,
    "title": "単項式・多項式と同類項",
    "domain": "A",
    "order": 1,
    "goal": "項の文字部分を見て同類項を見分け、式の種類と次数を説明する。",
    "coverageCodes": [
      "8350223110000000",
      "8350223111000000",
      "8350223111100000",
      "8350223131000000",
      "8350222110000000"
    ],
    "explanations": {
      "es": {
        "short": "3xや−2xyのような積でできた式を単項式という。単項式の和で表した式が多項式。同じ文字が同じ個数かけられた項が同類項だよ。",
        "detail": "3x−2y＋5xは3x、−2y、5xの三つの項からできている。3xと5xは文字部分がどちらもxなので同類項。−2yは文字が違うので一緒にはまとめない。−2xyの数の部分−2を係数といい、文字はxとyの二つをかけているので次数は2。x²も次数2だけれど、xyとは文字部分が違うよ。"
      },
      "js": {
        "short": "単項式は数や文字の積で表され、多項式は単項式の和で表される。同類項は文字の部分が等しい項。0でない単項式の次数はかけられた文字の個数である。",
        "detail": "式を加法として見ると、3x−2y＋5xの項は3x、−2y、5xである。係数には符号も含み、−xyの係数は−1。2x²yの次数は2＋1＝3。同類項をまとめると3x＋5x＝8xとなるが、x²とxyは次数が同じでも同類項ではない。0でない定数の項は次数0とする。0でない多項式を整理したとき、次数が最も高い項の次数をその式の次数という。例えば2x²＋3x−1は二次式である。式全体が0になる場合の次数はここでは扱わない。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "式の札を仕分ける",
        "text": "教材用の札3x、−2y、5xを、文字部分が同じ箱に分ける。xの箱は3xと5x、yの箱は−2y。係数が違っても文字部分で仕分ける。",
        "activityIds": [
          "prog-scratch"
        ]
      },
      {
        "category": "craft",
        "title": "材料の種類を残す",
        "text": "架空の工作で棒一本の長さをx cm、ひも一本をy cmとする。棒3本と棒5本は8x cmにまとめられるが、棒とひもの長さが等しいとは決めていないので3x＋2yを5xとはしない。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "3x−2y＋5xの項を全て示しているのは？",
        "options": [
          "3x、−2y、5x",
          "3x、2y、5x",
          "3、−2、5"
        ],
        "answer": "3x、−2y、5x",
        "explanation": "引き算を負の項の加法として見て、−2yの符号も項に含める。",
        "hint": "加法の形に直した区切りを見る。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "−4xyの係数はいくつ？",
        "answer": -4,
        "explanation": "数の部分は符号を含めて−4。",
        "hint": "文字以外の数の部分に注目する。",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "2x²yの次数はいくつ？",
        "answer": 3,
        "explanation": "xを2個、yを1個かけているので2＋1＝3。",
        "hint": "係数2を文字の個数へ入れない。",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "3x²と同類項なのは？",
        "options": [
          "−5x²",
          "3x",
          "3xy"
        ],
        "answer": "−5x²",
        "explanation": "文字部分がx²で一致する−5x²だけが同類項。",
        "hint": "次数が同じだけで十分かな？",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "x²とxyについて正しいのは？",
        "options": [
          "次数も文字部分も同じ",
          "いつでも足して2x²になる",
          "次数は同じだが同類項ではない"
        ],
        "answer": "次数は同じだが同類項ではない",
        "explanation": "どちらも次数2だが、文字の組がx×xとx×yで違う。",
        "hint": "文字をかけ算にほどいて比べる。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "2x²＋3x−1の次数は？",
        "options": [
          "1",
          "2",
          "3"
        ],
        "answer": "2",
        "explanation": "各項のうち最も高い次数はx²の2。係数2や3とは別の数。",
        "hint": "最も多く文字がかけられた項を見る。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "3x−2xをまとめた式は？",
        "options": [
          "x",
          "x²",
          "5x"
        ],
        "answer": "x",
        "explanation": "同類項なので係数3−2＝1を計算し、文字部分xを残す。",
        "hint": "xが何個分残るかを考える。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "number",
        "prompt": "3x＋2yでx＝−1、y＝2のとき、式の値は？",
        "answer": 1,
        "explanation": "3×(−1)＋2×2＝−3＋4＝1。",
        "hint": "文字の値を括弧に入れて置き換える。",
        "suffix": "",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "仕分け予想：2xy、−3x、5xyのうち、2xyとまとめられる札は？",
      "options": [
        "どちらも同じ",
        "5xy",
        "−3x"
      ],
      "answer": "5xy",
      "explanation": "2xyと5xyは文字部分xyが等しく、7xyとなる。",
      "hint": "数の部分より文字部分を先に見る。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "式を項に分けて整理する",
      "prompt": "4x−3y＋2xの同類項をまとめよう。",
      "steps": [
        {
          "text": "4x、−3y、2xの三つの項を、符号を含めて取り出す。"
        },
        {
          "text": "4xと2xの文字部分はxで同じ。−3yの文字部分はy。"
        },
        {
          "text": "xの項の係数を足し、(4＋2)x＝6xとする。"
        },
        {
          "text": "−3yを残して6x−3y。xとyが同じ値とは仮定していない。"
        }
      ],
      "answer": "6x−3y",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "x²とxyはどちらも次数2だから同類項だ。",
      "correction": "同類項は次数だけでなく文字部分が同じことが必要。x²はx×x、xyはx×yなので、一般にはまとめられない。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "3xと5xはまとめられ、3xと5yはそのままにする理由を説明しよう。",
        "followUp": "x²とxyでは、何を比べれば区別できる？",
        "checkpoints": [
          "係数ではなく文字部分で判断した。",
          "文字の種類と個数を両方確かめた。"
        ],
        "sample": "3xと5xはxの何個分かを足せるので8x。yがxと同じとは限らないため3x＋5yはまとめない。x²とxyも、かけられた文字の種類が異なる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "3xや−2xyのような積でできた式を単項式という。単項式の和で表した式が多項式。同じ文字が同じ個数かけられた項が同類項だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "3x−2y＋5xは3x、−2y、5xの三つの項からできている。3xと5xは文字部分がどちらもxなので同類項。−2yは文字が違うので一緒にはまとめない。−2xyの数の部分−2を係数といい、文字はxとyの二つをかけているので次数は2。x²も次数2だけれど、xyとは文字部分が違うよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "単項式は数や文字の積で表され、多項式は単項式の和で表される。同類項は文字の部分が等しい項。0でない単項式の次数はかけられた文字の個数である。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "式を加法として見ると、3x−2y＋5xの項は3x、−2y、5xである。係数には符号も含み、−xyの係数は−1。2x²yの次数は2＋1＝3。同類項をまとめると3x＋5x＝8xとなるが、x²とxyは次数が同じでも同類項ではない。0でない定数の項は次数0とする。0でない多項式を整理したとき、次数が最も高い項の次数をその式の次数という。例えば2x²＋3x−1は二次式である。式全体が0になる場合の次数はここでは扱わない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材用の札3x、−2y、5xを、文字部分が同じ箱に分ける。xの箱は3xと5x、yの箱は−2y。係数が違っても文字部分で仕分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の工作で棒一本の長さをx cm、ひも一本をy cmとする。棒3本と棒5本は8x cmにまとめられるが、棒とひもの長さが等しいとは決めていないので3x＋2yを5xとはしない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "3x−2y＋5xの項を全て示しているのは？ 正答：3x、−2y、5x。 引き算を負の項の加法として見て、−2yの符号も項に含める。 考える手がかり：加法の形に直した区切りを見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "−4xyの係数はいくつ？ 正答：-4。 数の部分は符号を含めて−4。 考える手がかり：文字以外の数の部分に注目する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "2x²yの次数はいくつ？ 正答：3。 xを2個、yを1個かけているので2＋1＝3。 考える手がかり：係数2を文字の個数へ入れない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "3x²と同類項なのは？ 正答：−5x²。 文字部分がx²で一致する−5x²だけが同類項。 考える手がかり：次数が同じだけで十分かな？",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "x²とxyについて正しいのは？ 正答：次数は同じだが同類項ではない。 どちらも次数2だが、文字の組がx×xとx×yで違う。 考える手がかり：文字をかけ算にほどいて比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "2x²＋3x−1の次数は？ 正答：2。 各項のうち最も高い次数はx²の2。係数2や3とは別の数。 考える手がかり：最も多く文字がかけられた項を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "3x−2xをまとめた式は？ 正答：x。 同類項なので係数3−2＝1を計算し、文字部分xを残す。 考える手がかり：xが何個分残るかを考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "3x＋2yでx＝−1、y＝2のとき、式の値は？ 正答：1。 3×(−1)＋2×2＝−3＋4＝1。 考える手がかり：文字の値を括弧に入れて置き換える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "仕分け予想：2xy、−3x、5xyのうち、2xyとまとめられる札は？ 正答：5xy。 2xyと5xyは文字部分xyが等しく、7xyとなる。 考える手がかり：数の部分より文字部分を先に見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "3xと5xはまとめられ、3xと5yはそのままにする理由を説明しよう。 x²とxyでは、何を比べれば区別できる？ 3xと5xはxの何個分かを足せるので8x。yがxと同じとは限らないため3x＋5yはまとめない。x²とxyも、かけられた文字の種類が異なる。 確認項目：係数ではなく文字部分で判断した。 / 文字の種類と個数を両方確かめた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "4x−3y＋2xの同類項をまとめよう。 4x、−3y、2xの三つの項を、符号を含めて取り出す。 4xと2xの文字部分はxで同じ。−3yの文字部分はy。 xの項の係数を足し、(4＋2)x＝6xとする。 −3yを残して6x−3y。xとyが同じ値とは仮定していない。 結論：6x−3y",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「x²とxyはどちらも次数2だから同類項だ。」は誤り。同類項は次数だけでなく文字部分が同じことが必要。x²はx×x、xyはx×yなので、一般にはまとめられない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "同類項は文字部分が等しい項。係数の和差を取り文字部分を残す。x,x²,y,xyは一般に異なる文字部分で、同じ次数でも同類項とは限らない。札は式の項を表し、負の物体や文字の値の正負を表さない。 操作図の事実：2x,3y,2xy,x²,5,−x。文字部分で分類し次数1/1/2/2/0/1。 使用する状態範囲：term x/y/xy/square/constant/negative。 次数は0でない式について扱い、2x,3y,2xy,x²,5,−xは順に1,1,2,2,0,1。数だけの0でない項の次数は0。式全体が0になる場合の次数は扱わない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223111100000",
    "grade": 8,
    "title": "多項式の加法と減法",
    "domain": "A",
    "order": 2,
    "goal": "括弧と符号に注意し、同類項を集めて多項式を計算する。",
    "coverageCodes": [
      "8350223111100000",
      "8350223111000000",
      "8350223112100000",
      "8350222110000000"
    ],
    "explanations": {
      "es": {
        "short": "多項式の足し算は同類項を集める。引き算は、引く式の全ての項の符号を反対にして足すよ。3x−(x−2y)＝3x−x＋2y。",
        "detail": "(2x＋3y)＋(x−y)では、xの項が2x＋x＝3x、yの項が3y−y＝2yだから3x＋2y。引き算の(2x＋3y)−(x−y)は、後ろの式全体を引く。−(x−y)＝−x＋yなので、答えはx＋4yになる。括弧のすぐ後ろの一項だけでなく、全部の符号を見よう。"
      },
      "js": {
        "short": "整式の加減は交換・結合法則で同類項を集め、分配法則で係数を計算する。式全体の減法は−1倍を加えることに直す。",
        "detail": "(2x＋3y)＋(x−y)＝(2＋1)x＋(3−1)y＝3x＋2y。減法では−(x−y)＝−x＋yと全項の符号を変える。また2(3x−2y)−3(2x＋y)＝6x−4y−6x−3y＝−7yとなる。括弧を外す、同類項を集める、係数を計算する、という各操作を区別すると、0になる項も確かめられる。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "横幅の式を合わせる",
        "text": "架空の図で二つの横幅を2x＋3y cmとx−y cmと表す。各長さが正になる設定なら、合わせた幅は3x＋2y cm。文字ごとに何個分あるかを数える。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "符号を含む札の計算",
        "text": "練習用の式(2x＋3y)−(x−y)で、後ろの二枚xと−yをそれぞれ−xと＋yへ変えて加える。結果はx＋4y。札は式の記号を表す。",
        "activityIds": [
          "prog-scratch"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "(2x＋3y)＋(x−y)を計算すると？",
        "options": [
          "3x＋4y",
          "2xy",
          "3x＋2y"
        ],
        "answer": "3x＋2y",
        "explanation": "xは2＋1＝3個分、yは3−1＝2個分。",
        "hint": "同じ文字の項を組にする。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "(2x＋3y)−(x−y)を計算すると？",
        "options": [
          "3x＋2y",
          "x＋4y",
          "x＋2y"
        ],
        "answer": "x＋4y",
        "explanation": "引く式を−x＋yへ変えて足すとx＋4y。",
        "hint": "括弧内の二つの符号を両方確かめる。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "−(3a−2b)と等しい式は？",
        "options": [
          "−3a＋2b",
          "−3a−2b",
          "3a＋2b"
        ],
        "answer": "−3a＋2b",
        "explanation": "−1を各項へかけるので−3a＋2b。",
        "hint": "減法を−1倍の分配として読む。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "2(x−3y)を展開すると？",
        "options": [
          "2x−3y",
          "x−6y",
          "2x−6y"
        ],
        "answer": "2x−6y",
        "explanation": "2をxにも−3yにもかける。",
        "hint": "括弧の各項へ同じ数をかける。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "5x＋2y−5xを整理すると？",
        "options": [
          "2xy",
          "2y",
          "0"
        ],
        "answer": "2y",
        "explanation": "xの係数5−5は0となり、2yが残る。",
        "hint": "消えるのはxの項だけ。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "2(3x−2y)−3(2x＋y)は□yとなる。□に入る係数は？",
        "answer": -7,
        "explanation": "6x−4y−6x−3y＝−7y。",
        "hint": "先にそれぞれの括弧を外す。",
        "suffix": "",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "3x−(x−2y)＝2x−2yという計算は？",
        "options": [
          "正しい",
          "誤り。正しくは4x−2y",
          "誤り。正しくは2x＋2y"
        ],
        "answer": "誤り。正しくは2x＋2y",
        "explanation": "−(−2y)は＋2yになる。",
        "hint": "引く式の負の項に注目する。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "number",
        "prompt": "3x＋2yにx＝2、y＝−1を代入した値は？",
        "answer": 4,
        "explanation": "3×2＋2×(−1)＝6−2＝4。",
        "hint": "整理後の式でも符号付きで代入する。",
        "suffix": "",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "計算予想：(x＋y)−(x−y)では何が残る？",
      "options": [
        "2y",
        "0",
        "2x"
      ],
      "answer": "2y",
      "explanation": "x＋y−x＋yで、xは打ち消し合い、yが二つ残る。",
      "hint": "引く式の符号を変えた後を思い浮かべる。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "引く式全体の符号を見る",
      "prompt": "(4x−y)−(x−3y)を計算しよう。",
      "steps": [
        {
          "text": "後ろの式全体を引くので、−(x−3y)を−x＋3yへ直す。"
        },
        {
          "text": "括弧を外し、4x−y−x＋3yと書く。"
        },
        {
          "text": "xの項4x−xと、yの項−y＋3yを別々にまとめる。"
        },
        {
          "text": "3x＋2yとなる。x＝1、y＝2なら元の式も整理後も7で確かめられる。"
        }
      ],
      "answer": "3x＋2y",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "括弧の前が−でも、最初の項だけ符号を変えればよい。",
      "correction": "括弧内の式全体を−1倍するので、全項の符号が変わる。−(x−3y)＝−x＋3y。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "(x＋y)−(x−y)を整理すると2yになる理由を説明しよう。",
        "followUp": "x＝2、y＝3を元の式へ入れても同じ値になる？",
        "checkpoints": [
          "引く式の全項の符号を変えた。",
          "xの項とyの項を別々に集めた。"
        ],
        "sample": "x＋y−x＋yなのでxの項が打ち消し合い、yの項は2個分。x＝2、y＝3では5−(−1)＝6で、2yも6となる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "多項式の足し算は同類項を集める。引き算は、引く式の全ての項の符号を反対にして足すよ。3x−(x−2y)＝3x−x＋2y。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "(2x＋3y)＋(x−y)では、xの項が2x＋x＝3x、yの項が3y−y＝2yだから3x＋2y。引き算の(2x＋3y)−(x−y)は、後ろの式全体を引く。−(x−y)＝−x＋yなので、答えはx＋4yになる。括弧のすぐ後ろの一項だけでなく、全部の符号を見よう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "整式の加減は交換・結合法則で同類項を集め、分配法則で係数を計算する。式全体の減法は−1倍を加えることに直す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "(2x＋3y)＋(x−y)＝(2＋1)x＋(3−1)y＝3x＋2y。減法では−(x−y)＝−x＋yと全項の符号を変える。また2(3x−2y)−3(2x＋y)＝6x−4y−6x−3y＝−7yとなる。括弧を外す、同類項を集める、係数を計算する、という各操作を区別すると、0になる項も確かめられる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の図で二つの横幅を2x＋3y cmとx−y cmと表す。各長さが正になる設定なら、合わせた幅は3x＋2y cm。文字ごとに何個分あるかを数える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "練習用の式(2x＋3y)−(x−y)で、後ろの二枚xと−yをそれぞれ−xと＋yへ変えて加える。結果はx＋4y。札は式の記号を表す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "(2x＋3y)＋(x−y)を計算すると？ 正答：3x＋2y。 xは2＋1＝3個分、yは3−1＝2個分。 考える手がかり：同じ文字の項を組にする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "(2x＋3y)−(x−y)を計算すると？ 正答：x＋4y。 引く式を−x＋yへ変えて足すとx＋4y。 考える手がかり：括弧内の二つの符号を両方確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "−(3a−2b)と等しい式は？ 正答：−3a＋2b。 −1を各項へかけるので−3a＋2b。 考える手がかり：減法を−1倍の分配として読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "2(x−3y)を展開すると？ 正答：2x−6y。 2をxにも−3yにもかける。 考える手がかり：括弧の各項へ同じ数をかける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "5x＋2y−5xを整理すると？ 正答：2y。 xの係数5−5は0となり、2yが残る。 考える手がかり：消えるのはxの項だけ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "2(3x−2y)−3(2x＋y)は□yとなる。□に入る係数は？ 正答：-7。 6x−4y−6x−3y＝−7y。 考える手がかり：先にそれぞれの括弧を外す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "3x−(x−2y)＝2x−2yという計算は？ 正答：誤り。正しくは2x＋2y。 −(−2y)は＋2yになる。 考える手がかり：引く式の負の項に注目する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "3x＋2yにx＝2、y＝−1を代入した値は？ 正答：4。 3×2＋2×(−1)＝6−2＝4。 考える手がかり：整理後の式でも符号付きで代入する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "計算予想：(x＋y)−(x−y)では何が残る？ 正答：2y。 x＋y−x＋yで、xは打ち消し合い、yが二つ残る。 考える手がかり：引く式の符号を変えた後を思い浮かべる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "(x＋y)−(x−y)を整理すると2yになる理由を説明しよう。 x＝2、y＝3を元の式へ入れても同じ値になる？ x＋y−x＋yなのでxの項が打ち消し合い、yの項は2個分。x＝2、y＝3では5−(−1)＝6で、2yも6となる。 確認項目：引く式の全項の符号を変えた。 / xの項とyの項を別々に集めた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "(4x−y)−(x−3y)を計算しよう。 後ろの式全体を引くので、−(x−3y)を−x＋3yへ直す。 括弧を外し、4x−y−x＋3yと書く。 xの項4x−xと、yの項−y＋3yを別々にまとめる。 3x＋2yとなる。x＝1、y＝2なら元の式も整理後も7で確かめられる。 結論：3x＋2y",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「括弧の前が−でも、最初の項だけ符号を変えればよい。」は誤り。括弧内の式全体を−1倍するので、全項の符号が変わる。−(x−3y)＝−x＋3y。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "多項式の加減は同類項の係数の和差で行う。A−B=A+(−1)Bで、Bの全項に−1を分配する。(2x+3y)+(x−y)=3x+2y、同じ二式の差はx+4y。文字札の正負は係数の符号であり実物の負量ではない。 操作図の事実：(ax+3y)±(bx−y)=(a±b)x+(3∓1)y。札は式の項。 使用する状態範囲：a,b−2..2; op add/sub。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "motion",
        "text": "固定した四つの項2x,3y,x,−yは(2x+3y)+(x−y)を表す。xの項2x+x=3x、yの項3y−y=2yを別々に選び、結果3x+2yへまとめる。札は式の項を表す記号であり負の実物を意味しない。強調の途中でも係数や文字の個数を変えない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223112100000",
    "grade": 8,
    "title": "単項式の乗法と除法",
    "domain": "A",
    "order": 3,
    "goal": "係数と文字の積を分けて計算し、単項式の除法で0の条件を確かめる。",
    "coverageCodes": [
      "8350223112100000",
      "8350223111000000",
      "8350223111100000",
      "8350223112000000"
    ],
    "explanations": {
      "es": {
        "short": "2x×3xは、数の2×3と文字のx×xを分けて6x²。割り算では、割る式が0にならないことを先に確かめるよ。",
        "detail": "2x×3x＝2×3×x×x＝6x²。x＋x＝2xという足し算とは違い、かけ算では文字もかけ合わせる。6x²÷3xはx≠0のとき、6x×xを3xで割って2xとなる。文字が0だと元の割り算ができないので、整理した式だけを見て0を入れてよいとは考えない。"
      },
      "js": {
        "short": "単項式の乗除は数の係数と文字の因数へ分けて処理する。除法を逆数の乗法へ直す場合も、除数が0でない条件を保つ。",
        "detail": "(−2xy)×3x＝−6x²y。積の符号を決め、同じ文字の因数を数えて累乗にまとめる。12x²y÷(−3xy)はx≠0かつy≠0のとき−4x。約分で分母から文字が消えても、元の除数の条件は残る。(2x)²は2もxも二回かけるので4x²であり、2x²とは異なる。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "縦と横を式で表す",
        "text": "架空の長方形で縦2x cm、横3x cm、x>0とする。面積は2x×3x＝6x² cm²。縦横を足す計算と、面積の積を区別する。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "因数を並べて確かめる",
        "text": "教材の式(2x)²を2×x×2×xへほどく。数の積4と文字の積x²をまとめると4x²。括弧がどこまで二回かけるかを決める。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "2x×3xを計算すると？",
        "options": [
          "5x²",
          "6x²",
          "6x"
        ],
        "answer": "6x²",
        "explanation": "係数2×3＝6、文字x×x＝x²。",
        "hint": "足す計算と掛ける計算を分ける。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "(−2xy)×3xを計算すると？",
        "options": [
          "−6x²y",
          "−6xy",
          "6x²y"
        ],
        "answer": "−6x²y",
        "explanation": "負×正は負。xが二つ、yが一つある。",
        "hint": "符号・数・文字の順に確認する。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "(2x)²と等しい式は？",
        "options": [
          "2x²",
          "4x",
          "4x²"
        ],
        "answer": "4x²",
        "explanation": "(2x)×(2x)なので2も二回かける。",
        "hint": "括弧の中全体を二回かける。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "x≠0のとき、6x²÷3xは？",
        "options": [
          "3x",
          "2x",
          "2x²"
        ],
        "answer": "2x",
        "explanation": "6÷3＝2、x×x÷x＝x。",
        "hint": "共通因数xを一つ約分する。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "x≠0、y≠0のとき、12x²y÷(−3xy)＝□x。□は？",
        "answer": -4,
        "explanation": "係数12÷(−3)＝−4で、文字はxが一つ残る。",
        "hint": "除数全体の負符号を残す。",
        "suffix": "",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "6x²÷3xを計算するとき、x＝0を除く理由は？",
        "options": [
          "答え2xが負になるから",
          "x²を計算できないから",
          "除数3xが0になるから"
        ],
        "answer": "除数3xが0になるから",
        "explanation": "0で割る計算は定義しない。x²そのものは0でも計算できる。",
        "hint": "分ける側の式を見る。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "number",
        "prompt": "x＝−2のとき、2x×3xの値は？",
        "answer": 24,
        "explanation": "(−4)×(−6)＝24。6x²でも6×4＝24。",
        "hint": "負の数二つの積の符号を確かめる。",
        "suffix": "",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "2x＋3xと2x×3xの組として正しいのは？",
        "options": [
          "5x と 6x²",
          "5x² と 6x",
          "6x と 5x²"
        ],
        "answer": "5x と 6x²",
        "explanation": "加法は同類項の係数を足し、乗法は文字もかけ合わせる。",
        "hint": "演算の記号が何を要求するか読む。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "因数予想：3xy×2yの文字部分は？",
      "options": [
        "x²y",
        "xy",
        "xy²"
      ],
      "answer": "xy²",
      "explanation": "xは一つ、yは二つかけられ、答え全体は6xy²。",
      "hint": "文字を並べて個数を数える。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "積と商を因数へ分ける",
      "prompt": "x≠0のとき、8x³÷(−2x)を計算しよう。",
      "steps": [
        {
          "text": "8x³を8×x×x×x、除数を−2×xと見る。"
        },
        {
          "text": "数の部分を8÷(−2)＝−4と計算する。"
        },
        {
          "text": "0でない共通因数xを一つ約分し、x×x＝x²が残る。"
        },
        {
          "text": "答えは−4x²。除数が0になるx＝0は、整理後も元の式の条件から除く。"
        }
      ],
      "answer": "−4x²（x≠0）",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "6x²÷3x＝2xだから、元の式にもx＝0を入れられる。",
      "correction": "x＝0では元の除数3xが0になる。約分後の2xが計算できても、元の除法ができることにはならない。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "2x＋3xと2x×3xで、文字部分の扱いが違う理由を説明しよう。",
        "followUp": "割り算で約分して文字が消えたら、0の条件も消える？",
        "checkpoints": [
          "加法は同じ文字部分の個数を足すと説明した。",
          "乗法は因数を合わせ、除法では元の0の条件を保った。"
        ],
        "sample": "加法ではxが2個分と3個分で5x。乗法は2×3×x×xで6x²。約分しても元の除数が0にならない条件は必要。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "2x×3xは、数の2×3と文字のx×xを分けて6x²。割り算では、割る式が0にならないことを先に確かめるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "2x×3x＝2×3×x×x＝6x²。x＋x＝2xという足し算とは違い、かけ算では文字もかけ合わせる。6x²÷3xはx≠0のとき、6x×xを3xで割って2xとなる。文字が0だと元の割り算ができないので、整理した式だけを見て0を入れてよいとは考えない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "単項式の乗除は数の係数と文字の因数へ分けて処理する。除法を逆数の乗法へ直す場合も、除数が0でない条件を保つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "(−2xy)×3x＝−6x²y。積の符号を決め、同じ文字の因数を数えて累乗にまとめる。12x²y÷(−3xy)はx≠0かつy≠0のとき−4x。約分で分母から文字が消えても、元の除数の条件は残る。(2x)²は2もxも二回かけるので4x²であり、2x²とは異なる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の長方形で縦2x cm、横3x cm、x>0とする。面積は2x×3x＝6x² cm²。縦横を足す計算と、面積の積を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材の式(2x)²を2×x×2×xへほどく。数の積4と文字の積x²をまとめると4x²。括弧がどこまで二回かけるかを決める。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "2x×3xを計算すると？ 正答：6x²。 係数2×3＝6、文字x×x＝x²。 考える手がかり：足す計算と掛ける計算を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "(−2xy)×3xを計算すると？ 正答：−6x²y。 負×正は負。xが二つ、yが一つある。 考える手がかり：符号・数・文字の順に確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "(2x)²と等しい式は？ 正答：4x²。 (2x)×(2x)なので2も二回かける。 考える手がかり：括弧の中全体を二回かける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "x≠0のとき、6x²÷3xは？ 正答：2x。 6÷3＝2、x×x÷x＝x。 考える手がかり：共通因数xを一つ約分する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "x≠0、y≠0のとき、12x²y÷(−3xy)＝□x。□は？ 正答：-4。 係数12÷(−3)＝−4で、文字はxが一つ残る。 考える手がかり：除数全体の負符号を残す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "6x²÷3xを計算するとき、x＝0を除く理由は？ 正答：除数3xが0になるから。 0で割る計算は定義しない。x²そのものは0でも計算できる。 考える手がかり：分ける側の式を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "x＝−2のとき、2x×3xの値は？ 正答：24。 (−4)×(−6)＝24。6x²でも6×4＝24。 考える手がかり：負の数二つの積の符号を確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "2x＋3xと2x×3xの組として正しいのは？ 正答：5x と 6x²。 加法は同類項の係数を足し、乗法は文字もかけ合わせる。 考える手がかり：演算の記号が何を要求するか読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "因数予想：3xy×2yの文字部分は？ 正答：xy²。 xは一つ、yは二つかけられ、答え全体は6xy²。 考える手がかり：文字を並べて個数を数える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "2x＋3xと2x×3xで、文字部分の扱いが違う理由を説明しよう。 割り算で約分して文字が消えたら、0の条件も消える？ 加法ではxが2個分と3個分で5x。乗法は2×3×x×xで6x²。約分しても元の除数が0にならない条件は必要。 確認項目：加法は同じ文字部分の個数を足すと説明した。 / 乗法は因数を合わせ、除法では元の0の条件を保った。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "x≠0のとき、8x³÷(−2x)を計算しよう。 8x³を8×x×x×x、除数を−2×xと見る。 数の部分を8÷(−2)＝−4と計算する。 0でない共通因数xを一つ約分し、x×x＝x²が残る。 答えは−4x²。除数が0になるx＝0は、整理後も元の式の条件から除く。 結論：−4x²（x≠0）",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「6x²÷3x＝2xだから、元の式にもx＝0を入れられる。」は誤り。x＝0では元の除数3xが0になる。約分後の2xが計算できても、元の除法ができることにはならない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "単項式の乗法は係数と文字の因数をそれぞれ掛け合わせる。2x×3x=6x²、(2x)²=4x²。単項式の除法では除式≠0を条件に約分し、その条件を整理後も保持する。 操作図の事実：(ax²)(bx)=abx³、ax²÷bx=(a/b)x。除法はx≠0。整数係数を有理数として正確表示。 使用する状態範囲：a−3/−2/−1/1/2/3; b1/2/3; op mul/div。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223111400000",
    "grade": 8,
    "title": "等式の変形",
    "domain": "A",
    "order": 4,
    "goal": "等式の両辺へ同じ操作をし、求めたい文字について式を変形する。",
    "coverageCodes": [
      "8350223111400000",
      "8350223112200000"
    ],
    "explanations": {
      "es": {
        "short": "等式は両辺へ同じ数や式を足したり引いたりして変形できる。0でない数や式で両辺を割り、求めたい文字を左に一つだけ残そう。",
        "detail": "三角形の面積S＝ah/2で、高さh>0と面積Sから底辺aを知りたい。両辺を2倍すると2S＝ah。両辺をhで割るとa＝2S/hになる。底辺を求める式になったね。割るhが0ならその操作はできないので、高さの条件も一緒に読む。"
      },
      "js": {
        "short": "等式の性質を用い、目的の文字だけを一方の辺に残す。除法には割る式（除数）が0でない条件が必要である。",
        "detail": "等式の変形は、文字へ具体的な値を代入して式の値を求めることとは異なる。y＝3x＋2をxについて解くには、両辺から2を引いてy−2＝3x、両辺を3で割ってx＝(y−2)/3とする。S＝ah/2をaについて解くならh≠0が必要。括弧は分子全体を表すため、y/3−2とは区別する。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "必要な底辺を式で決める",
        "text": "架空の三角形の飾りで面積S cm²、高さh cm（h>0）が決まっている。底辺a＝2S/h cmを使う。S＝12、h＝4ならa＝6。",
        "activityIds": [
          "craft-cardboard"
        ]
      },
      {
        "category": "programming",
        "title": "逆向きに入力を調べる",
        "text": "教材用の規則y＝3x＋2で、出力yから入力xを求める。先に2を引き、その結果を3で割るのでx＝(y−2)/3。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "y＝3x＋2をxについて解いた式は？",
        "options": [
          "x＝(y−2)/3",
          "x＝y/3−2",
          "x＝3(y−2)"
        ],
        "answer": "x＝(y−2)/3",
        "explanation": "2を引いてから残り全体を3で割る。",
        "hint": "逆の順で操作を戻す。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "S＝ah/2でh>0のとき、aについて解くと？",
        "options": [
          "a＝S/(2h)",
          "a＝2Sh",
          "a＝2S/h"
        ],
        "answer": "a＝2S/h",
        "explanation": "両辺を2倍し、両辺をhで割る。",
        "hint": "まず分母2をなくす。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "S＝12cm²、h＝4cmの三角形の底辺aは？",
        "answer": 6,
        "explanation": "a＝2S/h＝24÷4＝6cm。",
        "hint": "面積の式へ戻しても確かめる。",
        "suffix": "cm",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝axからx＝y/aと変形するために必要なのは？",
        "options": [
          "a≠0",
          "y≠0だけ",
          "条件は不要"
        ],
        "answer": "a≠0",
        "explanation": "両辺をaで割るので、aが0でないことが必要。",
        "hint": "割る式が何か確認する。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "x＋2y＝8をyについて解くと？",
        "options": [
          "y＝8−x/2",
          "y＝2(8−x)",
          "y＝(8−x)/2"
        ],
        "answer": "y＝(8−x)/2",
        "explanation": "2y＝8−xとなり、両辺全体を2で割る。",
        "hint": "8と−xの両方を2で割る。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "y＝3x＋2でy＝−4のとき、xはいくつ？",
        "answer": -2,
        "explanation": "x＝(−4−2)÷3＝−2。",
        "hint": "出力から2を引いて3で割る。",
        "suffix": "",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝axでa＝0の場合、y＝0からxを一つに決められる？",
        "options": [
          "決められない",
          "x＝0だけ",
          "x＝y/aで決まる"
        ],
        "answer": "決められない",
        "explanation": "a＝0ならy＝0はどのxでも成立する。0で割ってxを取り出せない。",
        "hint": "元の式へa＝0を入れて考える。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "order",
        "prompt": "y＝3x＋2を、定数項を先に取り除いてからxについて解く手順を並べよう。",
        "items": [
          "両辺を3で割る",
          "両辺から2を引く",
          "x＝(y−2)/3と書く"
        ],
        "answer": [
          "両辺から2を引く",
          "両辺を3で割る",
          "x＝(y−2)/3と書く"
        ],
        "explanation": "足された2を取り除いてから、xにかかった3で割る。",
        "hint": "一度に一つの操作を両辺へ行う。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "変形予想：p＝2a＋bをaについて解くなら？",
      "options": [
        "a＝2(p−b)",
        "a＝(p−b)/2",
        "a＝p/2−b"
      ],
      "answer": "a＝(p−b)/2",
      "explanation": "両辺からbを引き、その全体を2で割る。",
      "hint": "求めるa以外を逆操作で外す。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "面積から底辺を表す",
      "prompt": "S＝ah/2（h>0）をaについて解こう。",
      "steps": [
        {
          "text": "求めたい文字はa。hで割ってよい条件h>0を確認する。"
        },
        {
          "text": "両辺を2倍して2S＝ahとする。"
        },
        {
          "text": "両辺をhで割り、2S/h＝aとする。"
        },
        {
          "text": "左右を入れ替えてa＝2S/h。元の式へ戻すと(2S/h)h/2＝S。"
        }
      ],
      "answer": "a＝2S/h（h>0）",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "y＝3x＋2をxについて解くとx＝y/3−2。",
      "correction": "2を引いたy−2全体を3で割るのでx＝(y−2)/3。分子の括弧を外して一部だけ割らない。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "y＝3x＋2からx＝(y−2)/3へ変形する理由を説明しよう。",
        "followUp": "S＝ah/2をaについて解くとき、hのどんな条件が必要？",
        "checkpoints": [
          "両辺に同じ操作を行った。",
          "分子全体と0で割らない条件を確かめた。"
        ],
        "sample": "両辺から2を引き、3で割るとxが一つ残る。S＝ah/2ではhで割るのでh≠0が必要で、三角形の高さならh>0。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "等式は両辺へ同じ数や式を足したり引いたりして変形できる。0でない数や式で両辺を割り、求めたい文字を左に一つだけ残そう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "三角形の面積S＝ah/2で、高さh>0と面積Sから底辺aを知りたい。両辺を2倍すると2S＝ah。両辺をhで割るとa＝2S/hになる。底辺を求める式になったね。割るhが0ならその操作はできないので、高さの条件も一緒に読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "等式の性質を用い、目的の文字だけを一方の辺に残す。除法には割る式（除数）が0でない条件が必要である。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "等式の変形は、文字へ具体的な値を代入して式の値を求めることとは異なる。y＝3x＋2をxについて解くには、両辺から2を引いてy−2＝3x、両辺を3で割ってx＝(y−2)/3とする。S＝ah/2をaについて解くならh≠0が必要。括弧は分子全体を表すため、y/3−2とは区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の三角形の飾りで面積S cm²、高さh cm（h>0）が決まっている。底辺a＝2S/h cmを使う。S＝12、h＝4ならa＝6。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材用の規則y＝3x＋2で、出力yから入力xを求める。先に2を引き、その結果を3で割るのでx＝(y−2)/3。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "y＝3x＋2をxについて解いた式は？ 正答：x＝(y−2)/3。 2を引いてから残り全体を3で割る。 考える手がかり：逆の順で操作を戻す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "S＝ah/2でh>0のとき、aについて解くと？ 正答：a＝2S/h。 両辺を2倍し、両辺をhで割る。 考える手がかり：まず分母2をなくす。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "S＝12cm²、h＝4cmの三角形の底辺aは？ 正答：6。 a＝2S/h＝24÷4＝6cm。 考える手がかり：面積の式へ戻しても確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "y＝axからx＝y/aと変形するために必要なのは？ 正答：a≠0。 両辺をaで割るので、aが0でないことが必要。 考える手がかり：割る式が何か確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "x＋2y＝8をyについて解くと？ 正答：y＝(8−x)/2。 2y＝8−xとなり、両辺全体を2で割る。 考える手がかり：8と−xの両方を2で割る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "y＝3x＋2でy＝−4のとき、xはいくつ？ 正答：-2。 x＝(−4−2)÷3＝−2。 考える手がかり：出力から2を引いて3で割る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "y＝axでa＝0の場合、y＝0からxを一つに決められる？ 正答：決められない。 a＝0ならy＝0はどのxでも成立する。0で割ってxを取り出せない。 考える手がかり：元の式へa＝0を入れて考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "y＝3x＋2を、定数項を先に取り除いてからxについて解く手順を並べよう。 正答：両辺から2を引く → 両辺を3で割る → x＝(y−2)/3と書く。 足された2を取り除いてから、xにかかった3で割る。 考える手がかり：一度に一つの操作を両辺へ行う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "変形予想：p＝2a＋bをaについて解くなら？ 正答：a＝(p−b)/2。 両辺からbを引き、その全体を2で割る。 考える手がかり：求めるa以外を逆操作で外す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "y＝3x＋2からx＝(y−2)/3へ変形する理由を説明しよう。 S＝ah/2をaについて解くとき、hのどんな条件が必要？ 両辺から2を引き、3で割るとxが一つ残る。S＝ah/2ではhで割るのでh≠0が必要で、三角形の高さならh>0。 確認項目：両辺に同じ操作を行った。 / 分子全体と0で割らない条件を確かめた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "S＝ah/2（h>0）をaについて解こう。 求めたい文字はa。hで割ってよい条件h>0を確認する。 両辺を2倍して2S＝ahとする。 両辺をhで割り、2S/h＝aとする。 左右を入れ替えてa＝2S/h。元の式へ戻すと(2S/h)h/2＝S。 結論：a＝2S/h（h>0）",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「y＝3x＋2をxについて解くとx＝y/3−2。」は誤り。2を引いたy−2全体を3で割るのでx＝(y−2)/3。分子の括弧を外して一部だけ割らない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "等式の両辺への同じ加減、0でない同じ数や式による乗除は解の関係を保つ。y=3x+2⇔x=(y−2)/3。S=ah/2はh≠0でa=2S/h。分子全体を括弧で表す。 操作図の事実：y=ax+bをx=(y−b)/aへ。a≠0。両辺からb、両辺÷a。 使用する状態範囲：a−2/−1/1/2; b−2..2。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223111200000",
    "grade": 8,
    "title": "文字式で数量を表す・読む",
    "domain": "A",
    "order": 5,
    "goal": "数量の意味と単位を決め、文字式と場面を行き来する。",
    "coverageCodes": [
      "8350223111200000",
      "8350223112200000"
    ],
    "explanations": {
      "es": {
        "short": "文字はまだ決めていない数を表せる。連続する二つの整数はnとn＋1。式の各部分が何を表すかを言葉で説明しよう。",
        "detail": "架空の品を一個80円でn個買い、送料50円が一回だけかかるなら代金は80n＋50円。80nは品物全体、50は一回の送料を表す。一個ずつ送料を付ける80n＋50nとは違う。横n cm、縦3cmの長方形なら周りはn＋3＋n＋3＝2n＋6 cm。式の形が似ていても、各数の意味と単位を確かめよう。"
      },
      "js": {
        "short": "数量関係を文字式にする際は、文字の意味・単位・範囲を定める。得られた式を数量のまとまりとして読み直す。",
        "detail": "整数nの次の整数はn＋1であり、連続する三整数はn,n＋1,n＋2と表せる。奇数だけの列なら間隔が2なので、一般の連続整数とは区別する。単価80円、個数n、送料一回50円の合計は80n＋50。個数は通常0以上の整数だが、送料を含む注文の設定でn≥1と定める場合もある。文字の範囲は式だけでなく場面の条件から決める。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "周りのテープを見積もる",
        "text": "架空の長方形カードは縦3cm、横n cm（n>0）。四辺を一周するテープは2n＋6cm必要。横が1cm増えると二辺が伸び、周りは2cm増える。",
        "activityIds": [
          "craft-cardboard"
        ]
      },
      {
        "category": "programming",
        "title": "隣り合う整数を表示する",
        "text": "練習用の入力を整数nとし、n、n＋1、n＋2を表示する。n＝−2なら−2、−1、0で、負の整数から始めても連続する。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "整数nのすぐ次の整数を表す式は？",
        "options": [
          "2n",
          "n−1",
          "n＋1"
        ],
        "answer": "n＋1",
        "explanation": "整数の列は一つ進むと1増える。",
        "hint": "隣り合う整数の間隔を見る。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "整数nを使い、連続する三整数を表した組は？",
        "options": [
          "n、n＋2、n＋4",
          "n、n＋1、n＋2",
          "n、2n、3n"
        ],
        "answer": "n、n＋1、n＋2",
        "explanation": "隣り合う差がどちらも1になる。",
        "hint": "差を引き算して確かめる。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "一個80円をn個、送料一回50円の合計は？",
        "options": [
          "80n＋50",
          "130n",
          "80＋50n"
        ],
        "answer": "80n＋50",
        "explanation": "品物は80×n、送料は個数に関係なく一回50。",
        "hint": "繰り返す量と一回だけの量を分ける。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "一個80円を3個買い、送料一回50円なら合計は？",
        "answer": 290,
        "explanation": "80×3＋50＝240＋50＝290円。",
        "hint": "送料を3倍しない。",
        "suffix": "円",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "縦3cm、横n cm（n>0）の長方形の周りは？",
        "options": [
          "n＋3 cm",
          "2n＋6 cm",
          "3n cm"
        ],
        "answer": "2n＋6 cm",
        "explanation": "横二辺で2n、縦二辺で6なので2n＋6。",
        "hint": "四辺を全て数える。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "縦3cm、横4cmの長方形の周りは？",
        "answer": 14,
        "explanation": "2×4＋2×3＝14cm。",
        "hint": "面積の3×4と区別する。",
        "suffix": "cm",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "個数nを表す文字の範囲として自然なのは？",
        "options": [
          "どんな負の数も含む",
          "必ず分数だけ",
          "設定に合う0以上の整数"
        ],
        "answer": "設定に合う0以上の整数",
        "explanation": "分けられない品の個数は整数で負にはならない。注文条件によっては1以上に限定する。",
        "hint": "式の形だけでなく数量の意味を見る。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "number",
        "prompt": "n＝−2のとき、連続する三整数n,n＋1,n＋2の和は？",
        "answer": -3,
        "explanation": "−2＋(−1)＋0＝−3。",
        "hint": "それぞれの数を先に出す。",
        "suffix": "",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "式読み予想：一個a円の品を4個と、一回b円の送料なら？",
      "options": [
        "4a＋b",
        "4(a＋b)",
        "a＋4b"
      ],
      "answer": "4a＋b",
      "explanation": "品物の単価aは4回、送料bは一回だけ加える。",
      "hint": "何に4をかけるか確かめる。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "式の各部分に名前を付ける",
      "prompt": "一個80円の品をn個買い、送料が一回50円。合計を表そう。",
      "steps": [
        {
          "text": "nを注文する品の個数とし、1以上の整数と決める。"
        },
        {
          "text": "品物全体は単価×個数なので80n円。"
        },
        {
          "text": "送料は注文一回につき50円なので、一度だけ足す。"
        },
        {
          "text": "合計は80n＋50円。n＝3なら290円となり、場面へ戻して確かめられる。"
        }
      ],
      "answer": "80n＋50円（nは1以上の整数）",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "送料が一回50円でも、品物n個なら50n円を足す。",
      "correction": "送料が一回という設定では50円だけを足す。個数に応じて増える品代80nと、固定の50を分ける。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "80n＋50の二つの項が何を表すか、架空の注文の例で説明しよう。",
        "followUp": "nを負の数にしてよいかは、何を手がかりに決める？",
        "checkpoints": [
          "繰り返す品代と一回の送料を区別した。",
          "文字の範囲を数量の意味から決めた。"
        ],
        "sample": "80nは一個80円の品n個の代金で、50は送料一回分。個数を表すnは負にはできず、この注文なら1以上の整数とする。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "文字はまだ決めていない数を表せる。連続する二つの整数はnとn＋1。式の各部分が何を表すかを言葉で説明しよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "架空の品を一個80円でn個買い、送料50円が一回だけかかるなら代金は80n＋50円。80nは品物全体、50は一回の送料を表す。一個ずつ送料を付ける80n＋50nとは違う。横n cm、縦3cmの長方形なら周りはn＋3＋n＋3＝2n＋6 cm。式の形が似ていても、各数の意味と単位を確かめよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "数量関係を文字式にする際は、文字の意味・単位・範囲を定める。得られた式を数量のまとまりとして読み直す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "整数nの次の整数はn＋1であり、連続する三整数はn,n＋1,n＋2と表せる。奇数だけの列なら間隔が2なので、一般の連続整数とは区別する。単価80円、個数n、送料一回50円の合計は80n＋50。個数は通常0以上の整数だが、送料を含む注文の設定でn≥1と定める場合もある。文字の範囲は式だけでなく場面の条件から決める。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の長方形カードは縦3cm、横n cm（n>0）。四辺を一周するテープは2n＋6cm必要。横が1cm増えると二辺が伸び、周りは2cm増える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "練習用の入力を整数nとし、n、n＋1、n＋2を表示する。n＝−2なら−2、−1、0で、負の整数から始めても連続する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "整数nのすぐ次の整数を表す式は？ 正答：n＋1。 整数の列は一つ進むと1増える。 考える手がかり：隣り合う整数の間隔を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "整数nを使い、連続する三整数を表した組は？ 正答：n、n＋1、n＋2。 隣り合う差がどちらも1になる。 考える手がかり：差を引き算して確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "一個80円をn個、送料一回50円の合計は？ 正答：80n＋50。 品物は80×n、送料は個数に関係なく一回50。 考える手がかり：繰り返す量と一回だけの量を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "一個80円を3個買い、送料一回50円なら合計は？ 正答：290。 80×3＋50＝240＋50＝290円。 考える手がかり：送料を3倍しない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "縦3cm、横n cm（n>0）の長方形の周りは？ 正答：2n＋6 cm。 横二辺で2n、縦二辺で6なので2n＋6。 考える手がかり：四辺を全て数える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "縦3cm、横4cmの長方形の周りは？ 正答：14。 2×4＋2×3＝14cm。 考える手がかり：面積の3×4と区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "個数nを表す文字の範囲として自然なのは？ 正答：設定に合う0以上の整数。 分けられない品の個数は整数で負にはならない。注文条件によっては1以上に限定する。 考える手がかり：式の形だけでなく数量の意味を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "n＝−2のとき、連続する三整数n,n＋1,n＋2の和は？ 正答：-3。 −2＋(−1)＋0＝−3。 考える手がかり：それぞれの数を先に出す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "式読み予想：一個a円の品を4個と、一回b円の送料なら？ 正答：4a＋b。 品物の単価aは4回、送料bは一回だけ加える。 考える手がかり：何に4をかけるか確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "80n＋50の二つの項が何を表すか、架空の注文の例で説明しよう。 nを負の数にしてよいかは、何を手がかりに決める？ 80nは一個80円の品n個の代金で、50は送料一回分。個数を表すnは負にはできず、この注文なら1以上の整数とする。 確認項目：繰り返す品代と一回の送料を区別した。 / 文字の範囲を数量の意味から決めた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "一個80円の品をn個買い、送料が一回50円。合計を表そう。 nを注文する品の個数とし、1以上の整数と決める。 品物全体は単価×個数なので80n円。 送料は注文一回につき50円なので、一度だけ足す。 合計は80n＋50円。n＝3なら290円となり、場面へ戻して確かめられる。 結論：80n＋50円（nは1以上の整数）",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「送料が一回50円でも、品物n個なら50n円を足す。」は誤り。送料が一回という設定では50円だけを足す。個数に応じて増える品代80nと、固定の50を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "整数nの連続する整数はn,n+1,n+2。固定料金bと一個a円のn個分はan+b。縦3横n>0の長方形の周は2n+6、面積は3nであり区別する。単位と文字の範囲は場面で定める。 操作図の事実：連続整数n,n+1。80n+50。横n縦3の周2n+6。負量なし。 使用する状態範囲：n1..4; form consecutive/price/perimeter。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223111300000",
    "grade": 8,
    "title": "文字式で性質を説明する",
    "domain": "A",
    "order": 6,
    "goal": "数の例で見つけた性質を、任意の整数を使う文字式で説明する。",
    "coverageCodes": [
      "8350223111300000",
      "8350223112000000",
      "8350223112200000",
      "8350222220000000",
      "8350222330000000",
      "8350223512000000",
      "8350223513000000"
    ],
    "explanations": {
      "es": {
        "short": "奇数は整数mを使って2m＋1と表せる。二つの奇数には別の文字m,nを使おう。和が整数の2倍になれば、偶数だと説明できるよ。",
        "detail": "3＋5＝8を見ても、全ての奇数の組で偶数になる説明はまだできていない。任意の二つの奇数を2m＋1と2n＋1とすると、和は2m＋2n＋2＝2(m＋n＋1)。m,nが整数ならm＋n＋1も整数だから、和は偶数になる。負の奇数もこの形で表せるので、文字は正の数だけに限らないよ。"
      },
      "js": {
        "short": "整数の性質を、具体例による予想と一般的な文字式による説明に分ける。整数kを用いた偶数2k、奇数2k＋1という形を根拠にする。",
        "detail": "任意の整数m,nに対し、二つの奇数の和は(2m＋1)＋(2n＋1)＝2(m＋n＋1)。括弧内は整数なので偶数である。同じ文字だけを使う(2n＋1)＋(2n＋1)では、同じ奇数を二回足す場合しか表せない。また連続する三整数n−1,n,n＋1の和は3nとなり、3の倍数である。いくつかの数例が合うことと、任意の場合を説明したことを区別する。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "例を試した後に理由を探す",
        "text": "練習用に奇数3と5、−3と7を足すと8と4になる。どちらも偶数だが、全ての組を調べたわけではない。2m＋1と2n＋1で共通する理由を表す。",
        "activityIds": [
          "prog-python"
        ]
      },
      {
        "category": "craft",
        "title": "式のまとまりを二つにする",
        "text": "式札2m＋2n＋2を、m＋n＋1という同じ式二つへ分けて2(m＋n＋1)と表す。m,nが負の場合もあるので、札は実物の個数ではなく式を表す。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "整数mを用いた奇数の表し方は？",
        "options": [
          "m/2",
          "2m＋1",
          "2m"
        ],
        "answer": "2m＋1",
        "explanation": "整数の2倍に1を足した数は奇数。負の奇数も表せる。",
        "hint": "偶数から一つずれた形を探す。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "任意の二つの奇数を表すのに適切なのは？",
        "options": [
          "2m＋1 と 2n＋1（m,nは整数）",
          "2n＋1 と 2n＋1だけ",
          "m と 2mだけ"
        ],
        "answer": "2m＋1 と 2n＋1（m,nは整数）",
        "explanation": "二つが異なる奇数でも表せるよう、別々の整数m,nを使う。",
        "hint": "同じ文字だと値を自由に二つ選べるかな？",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "(2m＋1)＋(2n＋1)を整数の2倍の形にすると？",
        "options": [
          "2(m＋n＋2)",
          "2mn＋2",
          "2(m＋n＋1)"
        ],
        "answer": "2(m＋n＋1)",
        "explanation": "2m＋2n＋2の各項から2をくくる。",
        "hint": "括弧を展開して元へ戻るか確認する。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "m,nが整数のとき、2(m＋n＋1)が偶数といえる理由は？",
        "options": [
          "括弧がある式は全て偶数だから",
          "m＋n＋1が整数だから",
          "m,nが必ず正だから"
        ],
        "answer": "m＋n＋1が整数だから",
        "explanation": "整数の和に1を加えた数も整数なので、整数の2倍になる。",
        "hint": "偶数の定義へつなぐ。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "m＝−2のとき、奇数2m＋1はいくつ？",
        "answer": -3,
        "explanation": "2×(−2)＋1＝−3で、負の奇数も含められる。",
        "hint": "符号付きで代入する。",
        "suffix": "",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "奇数の和を100組調べて全て偶数だった。これだけで全ての組を説明した？",
        "options": [
          "説明し終えた",
          "奇数の和は偶数ではない",
          "まだ。任意の組の理由が必要"
        ],
        "answer": "まだ。任意の組の理由が必要",
        "explanation": "試した組以外も含む共通の理由が必要。文字式は任意の組を表せる。",
        "hint": "確かめた範囲と主張する範囲を比べる。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "連続する三整数n−1,n,n＋1の和は？",
        "options": [
          "n³",
          "3n",
          "3n＋1"
        ],
        "answer": "3n",
        "explanation": "−1と＋1が打ち消し合い、nが三つ残る。",
        "hint": "同類項を集める。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "number",
        "prompt": "連続する整数4,5,6の和はいくつ？",
        "answer": 15,
        "explanation": "4＋5＋6＝15で、中央の5の3倍。",
        "hint": "文字式3nでn＝5とも確かめる。",
        "suffix": "",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "性質予想：任意の偶数2mと奇数2n＋1の和は？",
      "options": [
        "偶数",
        "必ず0",
        "奇数"
      ],
      "answer": "奇数",
      "explanation": "2m＋2n＋1＝2(m＋n)＋1で、整数の2倍に1を足した形。",
      "hint": "結果を偶数か奇数の定義の形へ直す。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "二つの奇数の和を説明する",
      "prompt": "任意の二つの奇数の和が偶数になることを説明しよう。",
      "steps": [
        {
          "text": "m,nをそれぞれ整数とし、二つの奇数を2m＋1、2n＋1と表す。"
        },
        {
          "text": "和を計算して2m＋2n＋2とする。"
        },
        {
          "text": "2でくくると2(m＋n＋1)。括弧内は整数である。"
        },
        {
          "text": "整数の2倍なので偶数。具体的な数の選び方に依存しない説明になった。"
        }
      ],
      "answer": "任意の二つの奇数の和は偶数",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "任意の二つの奇数はどちらも2n＋1と置けばよい。",
      "correction": "同じnを使うと二つの奇数が同じ値になる。別々の整数m,nを使えば、等しい場合も異なる場合も含められる。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "奇数の和の説明で、m＋n＋1が整数だと確認するのはなぜ？",
        "followUp": "いくつかの数例を計算することには、どんな役割がある？",
        "checkpoints": [
          "任意の整数を使っていると明示した。",
          "整数の2倍という定義へつないだ。"
        ],
        "sample": "偶数は整数の2倍なので、括弧内が整数であることが根拠になる。数例は性質の予想や計算の確認に使えるが、全ての場合の説明とは分ける。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "奇数は整数mを使って2m＋1と表せる。二つの奇数には別の文字m,nを使おう。和が整数の2倍になれば、偶数だと説明できるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "3＋5＝8を見ても、全ての奇数の組で偶数になる説明はまだできていない。任意の二つの奇数を2m＋1と2n＋1とすると、和は2m＋2n＋2＝2(m＋n＋1)。m,nが整数ならm＋n＋1も整数だから、和は偶数になる。負の奇数もこの形で表せるので、文字は正の数だけに限らないよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "整数の性質を、具体例による予想と一般的な文字式による説明に分ける。整数kを用いた偶数2k、奇数2k＋1という形を根拠にする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "任意の整数m,nに対し、二つの奇数の和は(2m＋1)＋(2n＋1)＝2(m＋n＋1)。括弧内は整数なので偶数である。同じ文字だけを使う(2n＋1)＋(2n＋1)では、同じ奇数を二回足す場合しか表せない。また連続する三整数n−1,n,n＋1の和は3nとなり、3の倍数である。いくつかの数例が合うことと、任意の場合を説明したことを区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "練習用に奇数3と5、−3と7を足すと8と4になる。どちらも偶数だが、全ての組を調べたわけではない。2m＋1と2n＋1で共通する理由を表す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "式札2m＋2n＋2を、m＋n＋1という同じ式二つへ分けて2(m＋n＋1)と表す。m,nが負の場合もあるので、札は実物の個数ではなく式を表す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "整数mを用いた奇数の表し方は？ 正答：2m＋1。 整数の2倍に1を足した数は奇数。負の奇数も表せる。 考える手がかり：偶数から一つずれた形を探す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "任意の二つの奇数を表すのに適切なのは？ 正答：2m＋1 と 2n＋1（m,nは整数）。 二つが異なる奇数でも表せるよう、別々の整数m,nを使う。 考える手がかり：同じ文字だと値を自由に二つ選べるかな？",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "(2m＋1)＋(2n＋1)を整数の2倍の形にすると？ 正答：2(m＋n＋1)。 2m＋2n＋2の各項から2をくくる。 考える手がかり：括弧を展開して元へ戻るか確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "m,nが整数のとき、2(m＋n＋1)が偶数といえる理由は？ 正答：m＋n＋1が整数だから。 整数の和に1を加えた数も整数なので、整数の2倍になる。 考える手がかり：偶数の定義へつなぐ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "m＝−2のとき、奇数2m＋1はいくつ？ 正答：-3。 2×(−2)＋1＝−3で、負の奇数も含められる。 考える手がかり：符号付きで代入する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "奇数の和を100組調べて全て偶数だった。これだけで全ての組を説明した？ 正答：まだ。任意の組の理由が必要。 試した組以外も含む共通の理由が必要。文字式は任意の組を表せる。 考える手がかり：確かめた範囲と主張する範囲を比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "連続する三整数n−1,n,n＋1の和は？ 正答：3n。 −1と＋1が打ち消し合い、nが三つ残る。 考える手がかり：同類項を集める。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "連続する整数4,5,6の和はいくつ？ 正答：15。 4＋5＋6＝15で、中央の5の3倍。 考える手がかり：文字式3nでn＝5とも確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "性質予想：任意の偶数2mと奇数2n＋1の和は？ 正答：奇数。 2m＋2n＋1＝2(m＋n)＋1で、整数の2倍に1を足した形。 考える手がかり：結果を偶数か奇数の定義の形へ直す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "奇数の和の説明で、m＋n＋1が整数だと確認するのはなぜ？ いくつかの数例を計算することには、どんな役割がある？ 偶数は整数の2倍なので、括弧内が整数であることが根拠になる。数例は性質の予想や計算の確認に使えるが、全ての場合の説明とは分ける。 確認項目：任意の整数を使っていると明示した。 / 整数の2倍という定義へつないだ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "任意の二つの奇数の和が偶数になることを説明しよう。 m,nをそれぞれ整数とし、二つの奇数を2m＋1、2n＋1と表す。 和を計算して2m＋2n＋2とする。 2でくくると2(m＋n＋1)。括弧内は整数である。 整数の2倍なので偶数。具体的な数の選び方に依存しない説明になった。 結論：任意の二つの奇数の和は偶数",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「任意の二つの奇数はどちらも2n＋1と置けばよい。」は誤り。同じnを使うと二つの奇数が同じ値になる。別々の整数m,nを使えば、等しい場合も異なる場合も含められる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "整数m,nの奇数2m+1,2n+1の和は2(m+n+1)で偶数。m,nには負や0も含む。式の札は記号であり負の個数の実物を意味しない。連続三整数n−1,n,n+1の和は3n。有限の例示だけでは任意の場合の証明にならない。 操作図の事実：整数m,nの奇数2m+1,2n+1。和2(m+n+1)は偶数。負の例は記号札で扱い、具体例と任意整数の論証を分離。 使用する状態範囲：m,n−2..2。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "motion",
        "text": "m,nを任意の整数とし、奇数2m+1と2n+1の和は2m+2n+2=2(m+n+1)。m+n+1は整数なので偶数。具体例m=1,n=2では3+5=8だが、この一例と任意の整数の説明は区別する。負の整数の例も式札で示し、負の物体や個数を描かない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223121100000",
    "grade": 8,
    "title": "二元一次方程式と解",
    "domain": "A",
    "order": 7,
    "goal": "二元一次方程式の解を二つの数の組として捉え、代入で確かめる。",
    "coverageCodes": [
      "8350223121100000",
      "8350223120000000",
      "8350223121000000",
      "8350222110000000"
    ],
    "explanations": {
      "es": {
        "short": "x＋y＝5のように二つの文字がある方程式では、xとyの組で解を表す。x＝2、y＝3なら2＋3＝5なので、この組は解だよ。",
        "detail": "x＋y＝5には、(x,y)＝(2,3)も(1,4)も当てはまる。一つの数だけでなく、どのxとどのyを組にするかが大切。x,yを0以上の整数に限るなら組を順に数えられるが、その制限がなければ(0.5,4.5)などもある。先に文字がどんな数をとれるかを確認しよう。"
      },
      "js": {
        "short": "二元一次方程式の解は、式を成立させる二つの文字の値の組である。解の組は指定された文字の範囲の中で考える。",
        "detail": "二元一次方程式は、二つの文字についての一次式で表した方程式で、例えばx＋y＝5がある。解(2,3)はx＝2、y＝3を同時に代入して成立するという意味。文字の範囲を数直線上の全ての数とすれば、xを決めるごとにy＝5−xが決まり、無数の解の組がある。0以上の整数に限れば(0,5)から(5,0)までの6組となる。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "二種類で合計五つ",
        "text": "架空の工作で赤い部品x個、青い部品y個、合計5個とする。x,yは0以上の整数で、(2,3)と(3,2)では赤と青の個数が入れ替わる。",
        "activityIds": [
          "craft-lego"
        ]
      },
      {
        "category": "programming",
        "title": "組を一つずつ調べる",
        "text": "練習用の式x＋y＝5へ、候補(2,3)と(2,4)を入れる。前者は合計5、後者は6なので、一つ目だけが解の組。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "x＋y＝5の解の組はどれ？",
        "options": [
          "(x,y)＝(2,3)",
          "(x,y)＝(2,4)",
          "(x,y)＝(5,5)"
        ],
        "answer": "(x,y)＝(2,3)",
        "explanation": "2＋3＝5で式が成立する。",
        "hint": "二つの値を同時に代入する。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "x＋y＝5でx＝4のとき、yはいくつ？",
        "answer": 1,
        "explanation": "4＋y＝5なのでy＝1。",
        "hint": "合計5からxの値を引く。",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "x＋y＝5についてx＝2だけ示せば解の組を表したことになる？",
        "options": [
          "xは使ってはいけない",
          "yの値も示す必要がある",
          "xだけで完全に表した"
        ],
        "answer": "yの値も示す必要がある",
        "explanation": "解は二数の組で表すので、x＝2に対応するy＝3も示す。",
        "hint": "何個の文字の値を決めるか考える。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "x,yを数直線上の全ての数とすると、x＋y＝5の解に含まれるのは？",
        "options": [
          "(0.5,4.5)",
          "(0.5,5)",
          "(−1,5)"
        ],
        "answer": "(0.5,4.5)",
        "explanation": "0.5＋4.5＝5であり、整数だけに限っていない。",
        "hint": "文字の範囲と代入結果を両方見る。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "x,yを0以上の整数に限ると、x＋y＝5の解は何組？",
        "answer": 6,
        "explanation": "x＝0,1,2,3,4,5の各値に一つずつyが対応し、6組。",
        "hint": "0から5までを、両端を含めて数える。",
        "suffix": "組",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "2x＋y＝7の解の組は？",
        "options": [
          "(x,y)＝(2,2)",
          "(x,y)＝(3,1)",
          "(x,y)＝(1,3)"
        ],
        "answer": "(x,y)＝(3,1)",
        "explanation": "2×3＋1＝7。組の順を入れ替えると同じ式になるとは限らない。",
        "hint": "xの方にだけ2がかかる。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "number",
        "prompt": "2x＋y＝7でx＝−1のとき、yはいくつ？",
        "answer": 9,
        "explanation": "−2＋y＝7だからy＝9。",
        "hint": "負のxも条件が許すなら使える。",
        "suffix": "",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "x,yを数直線上の全ての数とすると、x＋y＝5の解は？",
        "options": [
          "一組だけ",
          "整数の6組だけ",
          "無数にある"
        ],
        "answer": "無数にある",
        "explanation": "整数以外も含め、xを選ぶごとにy＝5−xが対応する。",
        "hint": "文字に整数だけという制限があるか読む。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "組の予想：2x＋y＝7を満たす(x,y)の組は？",
      "options": [
        "(2,5)",
        "(2,3)",
        "(3,2)"
      ],
      "answer": "(2,3)",
      "explanation": "2×2＋3＝7なので(2,3)。",
      "hint": "最初の数がx、次がy。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "候補の組を代入する",
      "prompt": "2x＋y＝7に(x,y)＝(3,1)が当てはまるか確かめよう。",
      "steps": [
        {
          "text": "x＝3、y＝1という対応を先に読む。"
        },
        {
          "text": "左辺2x＋yに両方を代入し、2×3＋1とする。"
        },
        {
          "text": "左辺は7となり、右辺7と一致する。"
        },
        {
          "text": "この組は解である。ただし、この一式だけの解がこれ一組とは限らない。"
        }
      ],
      "answer": "(3,1)は解の組",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "二元一次方程式の解は、いつも一組だけである。",
      "correction": "一つの式だけでは複数や無数の組をもつことがある。x＋y＝5は、全ての数を許せばxに応じて無数の組がある。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "(2,3)と(3,2)は、二元一次方程式では何が違う？",
        "followUp": "x＋y＝5と2x＋y＝7にそれぞれ入れるとどうなる？",
        "checkpoints": [
          "組の順がx,yの対応を決めると説明した。",
          "各式へ実際に代入して判断した。"
        ],
        "sample": "(2,3)はx＝2,y＝3、(3,2)はx＝3,y＝2。x＋y＝5には両方が合うが、2x＋y＝7には(2,3)だけが合う。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "x＋y＝5のように二つの文字がある方程式では、xとyの組で解を表す。x＝2、y＝3なら2＋3＝5なので、この組は解だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "x＋y＝5には、(x,y)＝(2,3)も(1,4)も当てはまる。一つの数だけでなく、どのxとどのyを組にするかが大切。x,yを0以上の整数に限るなら組を順に数えられるが、その制限がなければ(0.5,4.5)などもある。先に文字がどんな数をとれるかを確認しよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "二元一次方程式の解は、式を成立させる二つの文字の値の組である。解の組は指定された文字の範囲の中で考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "二元一次方程式は、二つの文字についての一次式で表した方程式で、例えばx＋y＝5がある。解(2,3)はx＝2、y＝3を同時に代入して成立するという意味。文字の範囲を数直線上の全ての数とすれば、xを決めるごとにy＝5−xが決まり、無数の解の組がある。0以上の整数に限れば(0,5)から(5,0)までの6組となる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の工作で赤い部品x個、青い部品y個、合計5個とする。x,yは0以上の整数で、(2,3)と(3,2)では赤と青の個数が入れ替わる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "練習用の式x＋y＝5へ、候補(2,3)と(2,4)を入れる。前者は合計5、後者は6なので、一つ目だけが解の組。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "x＋y＝5の解の組はどれ？ 正答：(x,y)＝(2,3)。 2＋3＝5で式が成立する。 考える手がかり：二つの値を同時に代入する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "x＋y＝5でx＝4のとき、yはいくつ？ 正答：1。 4＋y＝5なのでy＝1。 考える手がかり：合計5からxの値を引く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "x＋y＝5についてx＝2だけ示せば解の組を表したことになる？ 正答：yの値も示す必要がある。 解は二数の組で表すので、x＝2に対応するy＝3も示す。 考える手がかり：何個の文字の値を決めるか考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "x,yを数直線上の全ての数とすると、x＋y＝5の解に含まれるのは？ 正答：(0.5,4.5)。 0.5＋4.5＝5であり、整数だけに限っていない。 考える手がかり：文字の範囲と代入結果を両方見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "x,yを0以上の整数に限ると、x＋y＝5の解は何組？ 正答：6。 x＝0,1,2,3,4,5の各値に一つずつyが対応し、6組。 考える手がかり：0から5までを、両端を含めて数える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "2x＋y＝7の解の組は？ 正答：(x,y)＝(3,1)。 2×3＋1＝7。組の順を入れ替えると同じ式になるとは限らない。 考える手がかり：xの方にだけ2がかかる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "2x＋y＝7でx＝−1のとき、yはいくつ？ 正答：9。 −2＋y＝7だからy＝9。 考える手がかり：負のxも条件が許すなら使える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "x,yを数直線上の全ての数とすると、x＋y＝5の解は？ 正答：無数にある。 整数以外も含め、xを選ぶごとにy＝5−xが対応する。 考える手がかり：文字に整数だけという制限があるか読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "組の予想：2x＋y＝7を満たす(x,y)の組は？ 正答：(2,3)。 2×2＋3＝7なので(2,3)。 考える手がかり：最初の数がx、次がy。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "(2,3)と(3,2)は、二元一次方程式では何が違う？ x＋y＝5と2x＋y＝7にそれぞれ入れるとどうなる？ (2,3)はx＝2,y＝3、(3,2)はx＝3,y＝2。x＋y＝5には両方が合うが、2x＋y＝7には(2,3)だけが合う。 確認項目：組の順がx,yの対応を決めると説明した。 / 各式へ実際に代入して判断した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "2x＋y＝7に(x,y)＝(3,1)が当てはまるか確かめよう。 x＝3、y＝1という対応を先に読む。 左辺2x＋yに両方を代入し、2×3＋1とする。 左辺は7となり、右辺7と一致する。 この組は解である。ただし、この一式だけの解がこれ一組とは限らない。 結論：(3,1)は解の組",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「二元一次方程式の解は、いつも一組だけである。」は誤り。一つの式だけでは複数や無数の組をもつことがある。x＋y＝5は、全ての数を許せばxに応じて無数の組がある。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "二元一次方程式の解は順序をもつ値の組。x+y=5は、x,yが0以上の整数なら(0,5),(1,4),(2,3),(3,2),(4,1),(5,0)の6組、全ての数なら無数の解をもつ。点を式へ代入して成立を確かめる。 操作図の事実：x+y=5。格子点と線、選んだ点が式を満たすかを示す。 使用する状態範囲：x,y0..5。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223121200000",
    "grade": 8,
    "title": "連立方程式と解",
    "domain": "A",
    "order": 8,
    "goal": "二つの方程式を同時に満たす組を探し、連立方程式の意味を説明する。",
    "coverageCodes": [
      "8350223121200000",
      "8350223120000000",
      "8350223121000000",
      "8350223121100000"
    ],
    "explanations": {
      "es": {
        "short": "連立方程式の解は、二つの式を両方とも満たす数の組。一方だけに合う組では足りないよ。最後は元の二つの式で確かめよう。",
        "detail": "2x＋y＝7とx−y＝2を一緒に考える。(x,y)＝(3,1)なら2×3＋1＝7、3−1＝2で両方成立する。(2,3)は一つ目には合うが、2−3＝−1なので二つ目には合わない。二つの条件の重なるところを探すことが連立方程式を解くという意味だよ。"
      },
      "js": {
        "short": "連立二元一次方程式の解は、各方程式を同時に満たす値の組である。一方の式の解集合と、もう一方の解集合の共通部分として捉える。",
        "detail": "2x＋y＝7の解は複数あり、x−y＝2の解も複数ある。その中で両方を満たすのが(3,1)。候補を調べるときは各式へ代入し、左右の一致を別々に確認する。二つの式を一緒にしたからといって常に一組に決まるわけではなく、条件によって解がない場合や無数にある場合もある。まずは「同時に満たす」という意味を確実にしよう。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "二つの条件を同時に確かめる",
        "text": "教材用の判定で2x＋y＝7とx−y＝2を別々に調べる。(3,1)では両方成立、(2,3)では最初だけ成立する。「両方」を一つの条件として読む。",
        "activityIds": [
          "prog-python"
        ]
      },
      {
        "category": "craft",
        "title": "二つの数え方を合わせる",
        "text": "架空の部品の個数x,yが、2x＋y＝7とx−y＝2を満たす設定。x＝3,y＝1なら二種類の数え方を両方満たす。個数の範囲も0以上の整数と確かめる。",
        "activityIds": [
          "craft-lego"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "2x＋y＝7とx−y＝2の両方を満たす組は？",
        "options": [
          "(2,3)",
          "(4,2)",
          "(3,1)"
        ],
        "answer": "(3,1)",
        "explanation": "(3,1)なら左辺はそれぞれ7と2になり、両方の右辺と一致する。",
        "hint": "片方ずつ代入して確認する。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "(2,3)は2x＋y＝7とx−y＝2の連立方程式の解？",
        "options": [
          "xだけが解",
          "解ではない",
          "解である"
        ],
        "answer": "解ではない",
        "explanation": "一つ目は7だが、二つ目は2−3＝−1で右辺2と違う。",
        "hint": "一つ目に合っても調べるのを止めない。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "2x＋y＝7、x−y＝2について、候補(x,y)＝(4,2)を一つ目の左辺2x＋yへ代入すると値はいくつ？",
        "answer": 10,
        "explanation": "2×4＋2＝10なので、右辺7とは一致しない。",
        "hint": "二つ目が成立しても一つ目を確かめる。",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "連立方程式の解を確認する方法は？",
        "options": [
          "どれか一式だけ調べる",
          "xだけを代入して終える",
          "元の全ての式へ両方の値を代入する"
        ],
        "answer": "元の全ての式へ両方の値を代入する",
        "explanation": "連立は全ての条件を同時に満たす必要がある。",
        "hint": "「同時に」の意味へ戻る。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "x＋y＝5とx−y＝1の共通の解は？",
        "options": [
          "(5,0)",
          "(3,2)",
          "(2,3)"
        ],
        "answer": "(3,2)",
        "explanation": "3＋2＝5かつ3−2＝1。",
        "hint": "和と差の二つを確認する。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "x＝3,y＝1をx−yへ代入した値は？",
        "answer": 2,
        "explanation": "3−1＝2。",
        "hint": "文字の順序を入れ替えない。",
        "suffix": "",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "x＋y＝5とx＋y＝6を同時に満たす組は？",
        "options": [
          "(5,6)",
          "どんな組でもよい",
          "ない"
        ],
        "answer": "ない",
        "explanation": "同じ和が同時に5と6になることはできない。",
        "hint": "二つの条件が両立するか考える。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "x＋y＝5と2x＋2y＝10を、全ての数の範囲で同時に満たす組は？",
        "options": [
          "ない",
          "無数にある",
          "一組だけ"
        ],
        "answer": "無数にある",
        "explanation": "二つ目は一つ目の両辺を2倍した同じ条件なので、x＋y＝5の全ての組が合う。",
        "hint": "二つの式が本当に別の条件か比べる。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "共通の組を予想：x＋y＝7、x−y＝3を満たすのは？",
      "options": [
        "(5,2)",
        "(2,5)",
        "(4,3)"
      ],
      "answer": "(5,2)",
      "explanation": "5＋2＝7、5−2＝3で両方成立。",
      "hint": "和と差を一つずつ計算する。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "二つの条件を表で確かめる",
      "prompt": "2x＋y＝7、x−y＝2について、候補(2,3),(3,1),(4,2)を調べよう。",
      "steps": [
        {
          "text": "(2,3)では左辺が7と−1。二つ目の条件に合わない。"
        },
        {
          "text": "(3,1)では左辺が7と2。両方の条件に合う。"
        },
        {
          "text": "(4,2)では左辺が10と2。一つ目の条件に合わない。"
        },
        {
          "text": "この三候補では(3,1)だけが両方を満たす。片方だけの一致と区別できた。"
        }
      ],
      "answer": "三候補のうち解は(3,1)",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "一つ目の式を満たしていれば、連立方程式の解になる。",
      "correction": "連立方程式は全ての式を同時に満たす必要がある。(2,3)は2x＋y＝7を満たすが、x−y＝2は満たさない。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "連立方程式の解を「二つの条件の重なり」と説明してみよう。",
        "followUp": "二つの式でも解が決まらない例、解がない例を区別できる？",
        "checkpoints": [
          "元の全ての式へ代入する必要を説明した。",
          "同じ条件の重複と矛盾する条件を区別した。"
        ],
        "sample": "各式に合う組のうち共通する組を探す。x,yが数直線上の全ての数をとるとき、同じ条件を二倍して書いただけなら解は無数にあり、同じ和を5と6に指定すれば共通の組はない。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "連立方程式の解は、二つの式を両方とも満たす数の組。一方だけに合う組では足りないよ。最後は元の二つの式で確かめよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "2x＋y＝7とx−y＝2を一緒に考える。(x,y)＝(3,1)なら2×3＋1＝7、3−1＝2で両方成立する。(2,3)は一つ目には合うが、2−3＝−1なので二つ目には合わない。二つの条件の重なるところを探すことが連立方程式を解くという意味だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "連立二元一次方程式の解は、各方程式を同時に満たす値の組である。一方の式の解集合と、もう一方の解集合の共通部分として捉える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "2x＋y＝7の解は複数あり、x−y＝2の解も複数ある。その中で両方を満たすのが(3,1)。候補を調べるときは各式へ代入し、左右の一致を別々に確認する。二つの式を一緒にしたからといって常に一組に決まるわけではなく、条件によって解がない場合や無数にある場合もある。まずは「同時に満たす」という意味を確実にしよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材用の判定で2x＋y＝7とx−y＝2を別々に調べる。(3,1)では両方成立、(2,3)では最初だけ成立する。「両方」を一つの条件として読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の部品の個数x,yが、2x＋y＝7とx−y＝2を満たす設定。x＝3,y＝1なら二種類の数え方を両方満たす。個数の範囲も0以上の整数と確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "2x＋y＝7とx−y＝2の両方を満たす組は？ 正答：(3,1)。 (3,1)なら左辺はそれぞれ7と2になり、両方の右辺と一致する。 考える手がかり：片方ずつ代入して確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "(2,3)は2x＋y＝7とx−y＝2の連立方程式の解？ 正答：解ではない。 一つ目は7だが、二つ目は2−3＝−1で右辺2と違う。 考える手がかり：一つ目に合っても調べるのを止めない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "2x＋y＝7、x−y＝2について、候補(x,y)＝(4,2)を一つ目の左辺2x＋yへ代入すると値はいくつ？ 正答：10。 2×4＋2＝10なので、右辺7とは一致しない。 考える手がかり：二つ目が成立しても一つ目を確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "連立方程式の解を確認する方法は？ 正答：元の全ての式へ両方の値を代入する。 連立は全ての条件を同時に満たす必要がある。 考える手がかり：「同時に」の意味へ戻る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "x＋y＝5とx−y＝1の共通の解は？ 正答：(3,2)。 3＋2＝5かつ3−2＝1。 考える手がかり：和と差の二つを確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "x＝3,y＝1をx−yへ代入した値は？ 正答：2。 3−1＝2。 考える手がかり：文字の順序を入れ替えない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "x＋y＝5とx＋y＝6を同時に満たす組は？ 正答：ない。 同じ和が同時に5と6になることはできない。 考える手がかり：二つの条件が両立するか考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "x＋y＝5と2x＋2y＝10を、全ての数の範囲で同時に満たす組は？ 正答：無数にある。 二つ目は一つ目の両辺を2倍した同じ条件なので、x＋y＝5の全ての組が合う。 考える手がかり：二つの式が本当に別の条件か比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "共通の組を予想：x＋y＝7、x−y＝3を満たすのは？ 正答：(5,2)。 5＋2＝7、5−2＝3で両方成立。 考える手がかり：和と差を一つずつ計算する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "連立方程式の解を「二つの条件の重なり」と説明してみよう。 二つの式でも解が決まらない例、解がない例を区別できる？ 各式に合う組のうち共通する組を探す。x,yが数直線上の全ての数をとるとき、同じ条件を二倍して書いただけなら解は無数にあり、同じ和を5と6に指定すれば共通の組はない。 確認項目：元の全ての式へ代入する必要を説明した。 / 同じ条件の重複と矛盾する条件を区別した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "2x＋y＝7、x−y＝2について、候補(2,3),(3,1),(4,2)を調べよう。 (2,3)では左辺が7と−1。二つ目の条件に合わない。 (3,1)では左辺が7と2。両方の条件に合う。 (4,2)では左辺が10と2。一つ目の条件に合わない。 この三候補では(3,1)だけが両方を満たす。片方だけの一致と区別できた。 結論：三候補のうち解は(3,1)",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「一つ目の式を満たしていれば、連立方程式の解になる。」は誤り。連立方程式は全ての式を同時に満たす必要がある。(2,3)は2x＋y＝7を満たすが、x−y＝2は満たさない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "連立二元一次方程式の解は両式を同時に満たす順序付きの組。2x+y=7,x−y=2の共通解は(3,1)。片方だけ満たす候補は解ではない。条件によって解なしや無数の解もある。 操作図の事実：2x+y=7とx−y=2。共通解(3,1)、片方だけを満たす場合を区別。 使用する状態範囲：x,y0..4。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223121300000",
    "grade": 8,
    "title": "加減法",
    "domain": "A",
    "order": 9,
    "goal": "等式同士の加減で一つの文字を消し、残した式と合わせて解を求める。",
    "coverageCodes": [
      "8350223121300000",
      "8350223120000000",
      "8350223121000000",
      "8350223122000000",
      "8350223122100000",
      "8350222110000000"
    ],
    "explanations": {
      "es": {
        "short": "一つの文字の係数をそろえ、二つの式を足すか引くと、その文字を消せる。消した後も元の一方の式を残し、二つの文字の値を求めよう。",
        "detail": "2x＋y＝7とx−y＝2を足すと、＋yと−yが消えて3x＝9になる。これでx＝3。一方の元の式x−y＝2も残しておき、3−y＝2からy＝1を求める。3x＝9だけではyは決まらないので、もう一つの条件を失わないことが大切。最後に元の二式で確かめるよ。"
      },
      "js": {
        "short": "加減法は一文字を消して一元一次方程式へ帰着する方法。二式の加減で得た式と、元の一方の式を組にして条件を保つ。",
        "detail": "2x＋y＝7を①、x−y＝2を②とする。①＋②から3x＝9を得るが、これ単独では元の連立と同じ条件ではない。3x＝9と②を組にすれば、和の式から②を引いて①へ戻せるため同じ解をもつ。x＝3を②へ代入してy＝1。消したい文字の係数がそろわない場合は、各式の両辺全体を0でない同じ数倍してから加減する。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "条件を一つ残す",
        "text": "練習用の二式2x＋y＝7、x−y＝2を足して3x＝9を作る。もう一方のx−y＝2を残すと、xだけでなくyも決められる。",
        "activityIds": [
          "prog-python"
        ]
      },
      {
        "category": "craft",
        "title": "符号付きの式札を合わせる",
        "text": "教材用の＋y札と−y札は和が0という記号の約束。2x＋yとx−yを合わせると3xになり、右辺も7＋2＝9と合わせる。札は重さや負の物体ではない。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "2x＋y＝7とx−y＝2を足して得る式は？",
        "options": [
          "3x＋2y＝9",
          "3x＝9",
          "x＝5"
        ],
        "answer": "3x＝9",
        "explanation": "左辺ではy−y＝0、右辺では7＋2＝9。",
        "hint": "左右それぞれを足す。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "3x＝9からxはいくつ？",
        "answer": 3,
        "explanation": "両辺を0でない3で割ってx＝3。",
        "hint": "係数3を外す。",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "x＝3をx−y＝2へ代入すると、yはいくつ？",
        "answer": 1,
        "explanation": "3−y＝2なのでy＝1。",
        "hint": "元の一方の式へ戻る。",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "2x＋y＝7、x−y＝2を解くとき、二式の和3x＝9だけを残してよい？",
        "options": [
          "よい。yは必ず0になる",
          "だめ。yを決める条件も残す",
          "よい。yも自動的に1になる"
        ],
        "answer": "だめ。yを決める条件も残す",
        "explanation": "3x＝9はxだけを決め、yを制限しない。元の一方の式を残す。",
        "hint": "消した文字の条件がどこに残るか探す。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "2x＋y＝7とx−y＝2の解を確認した計算は？",
        "options": [
          "2×3＋1＝7、3−1＝2",
          "2×3＋1＝7だけ",
          "3＋1＝4だけ"
        ],
        "answer": "2×3＋1＝7、3−1＝2",
        "explanation": "元の両方の式が成立することを確かめる。",
        "hint": "連立の解は二条件の共通部分。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "x＋y＝5とx−y＝1でyを消すには？",
        "options": [
          "二式の左辺だけを足す",
          "一式のyだけを2倍する",
          "二式を足す"
        ],
        "answer": "二式を足す",
        "explanation": "＋yと−yが反対の係数なので、式全体を足す。",
        "hint": "右辺も同じ操作をする。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "number",
        "prompt": "x＋y＝5、x−y＝1を足すと2x＝6。xはいくつ？",
        "answer": 3,
        "explanation": "両辺を2で割って3。残した式からy＝2と求められる。",
        "hint": "得た式と元の一式を組にする。",
        "suffix": "",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "2x＋y＝7と2x−y＝5でxを消すなら？",
        "options": [
          "一つ目から二つ目を引く",
          "二つを足す",
          "xの項だけを消して右辺をそのままにする"
        ],
        "answer": "一つ目から二つ目を引く",
        "explanation": "同じ係数2xは差で0になり、2y＝2を得る。",
        "hint": "引く式全体の符号に注意する。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "消える文字を予想：3x＋2y＝12とx−2y＝4を足すと？",
      "options": [
        "xが消えて4y＝16",
        "両方消える",
        "yが消えて4x＝16"
      ],
      "answer": "yが消えて4x＝16",
      "explanation": "2y−2y＝0、3x＋x＝4x、12＋4＝16。",
      "hint": "反対の係数になっている文字を見る。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "一方の条件を残して解く",
      "prompt": "2x＋y＝7、x−y＝2を加減法で解こう。",
      "steps": [
        {
          "text": "二式を足すと、yの項が打ち消し合って3x＝9。一方の元の式x−y＝2は残す。"
        },
        {
          "text": "3x＝9の両辺を3で割り、x＝3とする。"
        },
        {
          "text": "残した式へ代入し、3−y＝2からy＝1とする。"
        },
        {
          "text": "元の二式で2×3＋1＝7、3−1＝2を確かめ、両方成立すると確認する。"
        }
      ],
      "answer": "x＝3、y＝1",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "二式を足して3x＝9になったから、元の連立はこの一式だけと同じ条件だ。",
      "correction": "和の式だけではyが決まらない。和の式と元の一方の式を残せば、引き戻して元の二条件を復元できる。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "加減法で一文字を消しても、一方の式を残すのはなぜ？",
        "followUp": "和の式3x＝9からx−y＝2を引くと、どんな式へ戻る？",
        "checkpoints": [
          "和の一式だけではyが決まらないと説明した。",
          "残した式と合わせて元の条件を取り戻せると確認した。"
        ],
        "sample": "一文字を消した式はその文字についての条件を示さない。3x＝9からx−y＝2を引くと2x＋y＝7へ戻るので、和の式と残した式の組なら元の条件を保てる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "一つの文字の係数をそろえ、二つの式を足すか引くと、その文字を消せる。消した後も元の一方の式を残し、二つの文字の値を求めよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "2x＋y＝7とx−y＝2を足すと、＋yと−yが消えて3x＝9になる。これでx＝3。一方の元の式x−y＝2も残しておき、3−y＝2からy＝1を求める。3x＝9だけではyは決まらないので、もう一つの条件を失わないことが大切。最後に元の二式で確かめるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "加減法は一文字を消して一元一次方程式へ帰着する方法。二式の加減で得た式と、元の一方の式を組にして条件を保つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "2x＋y＝7を①、x−y＝2を②とする。①＋②から3x＝9を得るが、これ単独では元の連立と同じ条件ではない。3x＝9と②を組にすれば、和の式から②を引いて①へ戻せるため同じ解をもつ。x＝3を②へ代入してy＝1。消したい文字の係数がそろわない場合は、各式の両辺全体を0でない同じ数倍してから加減する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "練習用の二式2x＋y＝7、x−y＝2を足して3x＝9を作る。もう一方のx−y＝2を残すと、xだけでなくyも決められる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材用の＋y札と−y札は和が0という記号の約束。2x＋yとx−yを合わせると3xになり、右辺も7＋2＝9と合わせる。札は重さや負の物体ではない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "2x＋y＝7とx−y＝2を足して得る式は？ 正答：3x＝9。 左辺ではy−y＝0、右辺では7＋2＝9。 考える手がかり：左右それぞれを足す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "3x＝9からxはいくつ？ 正答：3。 両辺を0でない3で割ってx＝3。 考える手がかり：係数3を外す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "x＝3をx−y＝2へ代入すると、yはいくつ？ 正答：1。 3−y＝2なのでy＝1。 考える手がかり：元の一方の式へ戻る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "2x＋y＝7、x−y＝2を解くとき、二式の和3x＝9だけを残してよい？ 正答：だめ。yを決める条件も残す。 3x＝9はxだけを決め、yを制限しない。元の一方の式を残す。 考える手がかり：消した文字の条件がどこに残るか探す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "2x＋y＝7とx−y＝2の解を確認した計算は？ 正答：2×3＋1＝7、3−1＝2。 元の両方の式が成立することを確かめる。 考える手がかり：連立の解は二条件の共通部分。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "x＋y＝5とx−y＝1でyを消すには？ 正答：二式を足す。 ＋yと−yが反対の係数なので、式全体を足す。 考える手がかり：右辺も同じ操作をする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "x＋y＝5、x−y＝1を足すと2x＝6。xはいくつ？ 正答：3。 両辺を2で割って3。残した式からy＝2と求められる。 考える手がかり：得た式と元の一式を組にする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "2x＋y＝7と2x−y＝5でxを消すなら？ 正答：一つ目から二つ目を引く。 同じ係数2xは差で0になり、2y＝2を得る。 考える手がかり：引く式全体の符号に注意する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "消える文字を予想：3x＋2y＝12とx−2y＝4を足すと？ 正答：yが消えて4x＝16。 2y−2y＝0、3x＋x＝4x、12＋4＝16。 考える手がかり：反対の係数になっている文字を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "加減法で一文字を消しても、一方の式を残すのはなぜ？ 和の式3x＝9からx−y＝2を引くと、どんな式へ戻る？ 一文字を消した式はその文字についての条件を示さない。3x＝9からx−y＝2を引くと2x＋y＝7へ戻るので、和の式と残した式の組なら元の条件を保てる。 確認項目：和の一式だけではyが決まらないと説明した。 / 残した式と合わせて元の条件を取り戻せると確認した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "2x＋y＝7、x−y＝2を加減法で解こう。 二式を足すと、yの項が打ち消し合って3x＝9。一方の元の式x−y＝2は残す。 3x＝9の両辺を3で割り、x＝3とする。 残した式へ代入し、3−y＝2からy＝1とする。 元の二式で2×3＋1＝7、3−1＝2を確かめ、両方成立すると確認する。 結論：x＝3、y＝1",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「二式を足して3x＝9になったから、元の連立はこの一式だけと同じ条件だ。」は誤り。和の式だけではyが決まらない。和の式と元の一方の式を残せば、引き戻して元の二条件を復元できる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "連立2x+y=7,x−y=2の和は3x=9。和の式だけでは元の連立と同値ではない。3x=9と元のx−y=2を保持してx=3,y=1を求めると、両元式に成立する。式全体への非零定数倍や一式を他式との和差へ置換する操作は、他方を保持して解を保つ。 操作図の事実：2x+y=7,x−y=2→3x=9と元のx−y=2を残す→x3,y1→両式へ代入。動画と同じ。 使用する状態範囲：step0..3。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "motion",
        "text": "元の連立2x+y=7,x−y=2を表示し、二式の和3x=9を得る。和の式だけを元の連立と同値とはしない。元のx−y=2を保持し、3x=9からx=3、保持した式へ代入してy=1。最後に2×3+1=7、3−1=2と両元式を確認する。式の札は記号であり未知の重さの実物ではない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "video",
        "text": "2x+y=7とx−y=2の元の二式を保ち、両式の和から3x=9を得る。和の一式だけで元の二条件を置き換えない。3x=9から両辺を3で割りx=3。元のx−y=2へ代入して3−y=2、y=1。元の両式で2×3+1=7、3−1=2を確認する。式の札は文字式の記号であり実物の未知の重さではない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223122100000",
    "grade": 8,
    "title": "代入法",
    "domain": "A",
    "order": 10,
    "goal": "一つの文字を表した式を他方へ代入し、加減法と比べて解き方を選ぶ。",
    "coverageCodes": [
      "8350223122100000",
      "8350223121000000",
      "8350223121300000",
      "8350223122000000",
      "8350222220000000"
    ],
    "explanations": {
      "es": {
        "short": "代入法では、一方の式にある「y＝…」を、もう一方のyへ入れる。式全体を括弧で入れ、最後に二つの文字の値を確かめよう。",
        "detail": "x＋y＝5、y＝2x−1なら、最初の式のyを2x−1へ置き換える。x＋(2x−1)＝5から3x＝6となりx＝2。残したy＝2x−1へ戻すとy＝3。元の二式で2＋3＝5、3＝2×2−1を確認する。一方がy＝…の形なら、そのまま使えるのが代入法のよさだよ。"
      },
      "js": {
        "short": "代入法は一方の式で表した文字を他方へ置換し、一元一次方程式へ帰着する。代入する式全体と、残す元の式を明確にする。",
        "detail": "x＋y＝5、y＝2x−1では、yと等しい2x−1をx＋y＝5へ代入する。得られるx＋(2x−1)＝5とy＝2x−1を組にして条件を保ち、x＝2、y＝3を求める。2yの位置なら2(2x−1)のように全体へ2をかける。係数がそろっていれば加減法、文字が表してあれば代入法など、式の形から方法を比べられる。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "出力の式を置き換える",
        "text": "教材用の規則y＝2x−1を、条件x＋y＝5へ入れる。yを一文字として動かす代わりに、同じ値を表す2x−1全体を入れる。",
        "activityIds": [
          "prog-python"
        ]
      },
      {
        "category": "drawing",
        "title": "同じ長さの表し方を交換する",
        "text": "架空の図の長さy cmを2x−1 cm（x>0.5）とも表せる設定。x＋y cmという合計をx＋(2x−1) cmへ書き換える。数量が等しいことが置換の根拠。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "x＋y＝5へy＝2x−1を代入した式は？",
        "options": [
          "x＋(2x−1)＝5",
          "x＋2x＝5−1",
          "2x−1＝5だけ"
        ],
        "answer": "x＋(2x−1)＝5",
        "explanation": "yがあった位置に2x−1全体を入れる。",
        "hint": "置き換える前後で同じ値になる部分を探す。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "x＋(2x−1)＝5からxはいくつ？",
        "answer": 2,
        "explanation": "3x−1＝5、3x＝6よりx＝2。",
        "hint": "同類項をまとめてから解く。",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "x＝2をy＝2x−1へ代入するとyはいくつ？",
        "answer": 3,
        "explanation": "2×2−1＝3。",
        "hint": "残した関係式へ戻る。",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝2x−1をx＋2y＝8へ代入した式は？",
        "options": [
          "x＋2(2x−1)＝8",
          "x＋4x−1＝8",
          "x＋2x−1＝8"
        ],
        "answer": "x＋2(2x−1)＝8",
        "explanation": "2yのy全体を置き換えるので、2は2x−1全体にかかる。",
        "hint": "係数2を括弧の外へ残す。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝2x−1で、x＝2,y＝3を確かめる計算は？",
        "options": [
          "2＝2×3−1",
          "3＝2×2＋1",
          "3＝2×2−1"
        ],
        "answer": "3＝2×2−1",
        "explanation": "左辺yは3、右辺xは2を入れる。",
        "hint": "xとyの対応を守る。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "x＋y＝7、y＝x＋1を代入法で解くと？",
        "options": [
          "x＝2、y＝5",
          "x＝3、y＝4",
          "x＝4、y＝3"
        ],
        "answer": "x＝3、y＝4",
        "explanation": "x＋(x＋1)＝7からx＝3、その後y＝4。",
        "hint": "二つの値を元の両式へ入れる。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝3x＋2という式が既にある連立で、式の形をそのまま使いやすい方法は？",
        "options": [
          "yを他式へ入れる代入法",
          "必ず二式の二乗を取る",
          "どの方法も使えない"
        ],
        "answer": "yを他式へ入れる代入法",
        "explanation": "一つの文字が他方の式で表されているので、そのまま代入できる。",
        "hint": "片方が「文字＝式」の形かを見る。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "代入後にxが求まったら、次に必要なのは？",
        "options": [
          "yはいつもxと同じにする",
          "答えはxだけにする",
          "残した式からyを求め、両式を確かめる"
        ],
        "answer": "残した式からyを求め、両式を確かめる",
        "explanation": "連立の解はx,yの組なので、もう一方も求める。",
        "hint": "二つの文字のうち未確定なものを確かめる。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "置き換え予想：y＝x＋2を3x−y＝4へ代入すると？",
      "options": [
        "3x−2＝4",
        "3x−(x＋2)＝4",
        "3x−x＋2＝4"
      ],
      "answer": "3x−(x＋2)＝4",
      "explanation": "引く対象y全体がx＋2なので、括弧を付ける。",
      "hint": "直前の−がどこまでかかるか見る。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "表された文字を他方へ入れる",
      "prompt": "x＋y＝5、y＝2x−1を代入法で解こう。",
      "steps": [
        {
          "text": "yと2x−1は等しいので、x＋y＝5をx＋(2x−1)＝5へ置き換える。"
        },
        {
          "text": "3x−1＝5から3x＝6、x＝2を求める。"
        },
        {
          "text": "残したy＝2x−1へx＝2を入れ、y＝3とする。"
        },
        {
          "text": "元の両式で2＋3＝5と3＝2×2−1を確かめる。"
        }
      ],
      "answer": "x＝2、y＝3",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "2yへy＝2x−1を代入すると4x−1になる。",
      "correction": "2y＝2(2x−1)＝4x−2。yの式全体に2がかかるので、定数−1にも2をかける。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "y＝2x−1を代入するとき、括弧を付ける理由を説明しよう。",
        "followUp": "加減法と代入法のどちらを選ぶか、式のどこを見る？",
        "checkpoints": [
          "一文字と同じ値の式全体を交換した。",
          "文字の表され方や係数を比べた。"
        ],
        "sample": "置換先が2yや−yなら、係数や符号は2x−1全体へ作用するので括弧が必要。一文字が表されていれば代入法、係数がそろっていれば加減法が使いやすい。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "代入法では、一方の式にある「y＝…」を、もう一方のyへ入れる。式全体を括弧で入れ、最後に二つの文字の値を確かめよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "x＋y＝5、y＝2x−1なら、最初の式のyを2x−1へ置き換える。x＋(2x−1)＝5から3x＝6となりx＝2。残したy＝2x−1へ戻すとy＝3。元の二式で2＋3＝5、3＝2×2−1を確認する。一方がy＝…の形なら、そのまま使えるのが代入法のよさだよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "代入法は一方の式で表した文字を他方へ置換し、一元一次方程式へ帰着する。代入する式全体と、残す元の式を明確にする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "x＋y＝5、y＝2x−1では、yと等しい2x−1をx＋y＝5へ代入する。得られるx＋(2x−1)＝5とy＝2x−1を組にして条件を保ち、x＝2、y＝3を求める。2yの位置なら2(2x−1)のように全体へ2をかける。係数がそろっていれば加減法、文字が表してあれば代入法など、式の形から方法を比べられる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材用の規則y＝2x−1を、条件x＋y＝5へ入れる。yを一文字として動かす代わりに、同じ値を表す2x−1全体を入れる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の図の長さy cmを2x−1 cm（x>0.5）とも表せる設定。x＋y cmという合計をx＋(2x−1) cmへ書き換える。数量が等しいことが置換の根拠。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "x＋y＝5へy＝2x−1を代入した式は？ 正答：x＋(2x−1)＝5。 yがあった位置に2x−1全体を入れる。 考える手がかり：置き換える前後で同じ値になる部分を探す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "x＋(2x−1)＝5からxはいくつ？ 正答：2。 3x−1＝5、3x＝6よりx＝2。 考える手がかり：同類項をまとめてから解く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "x＝2をy＝2x−1へ代入するとyはいくつ？ 正答：3。 2×2−1＝3。 考える手がかり：残した関係式へ戻る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "y＝2x−1をx＋2y＝8へ代入した式は？ 正答：x＋2(2x−1)＝8。 2yのy全体を置き換えるので、2は2x−1全体にかかる。 考える手がかり：係数2を括弧の外へ残す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "y＝2x−1で、x＝2,y＝3を確かめる計算は？ 正答：3＝2×2−1。 左辺yは3、右辺xは2を入れる。 考える手がかり：xとyの対応を守る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "x＋y＝7、y＝x＋1を代入法で解くと？ 正答：x＝3、y＝4。 x＋(x＋1)＝7からx＝3、その後y＝4。 考える手がかり：二つの値を元の両式へ入れる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "y＝3x＋2という式が既にある連立で、式の形をそのまま使いやすい方法は？ 正答：yを他式へ入れる代入法。 一つの文字が他方の式で表されているので、そのまま代入できる。 考える手がかり：片方が「文字＝式」の形かを見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "代入後にxが求まったら、次に必要なのは？ 正答：残した式からyを求め、両式を確かめる。 連立の解はx,yの組なので、もう一方も求める。 考える手がかり：二つの文字のうち未確定なものを確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "置き換え予想：y＝x＋2を3x−y＝4へ代入すると？ 正答：3x−(x＋2)＝4。 引く対象y全体がx＋2なので、括弧を付ける。 考える手がかり：直前の−がどこまでかかるか見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "y＝2x−1を代入するとき、括弧を付ける理由を説明しよう。 加減法と代入法のどちらを選ぶか、式のどこを見る？ 置換先が2yや−yなら、係数や符号は2x−1全体へ作用するので括弧が必要。一文字が表されていれば代入法、係数がそろっていれば加減法が使いやすい。 確認項目：一文字と同じ値の式全体を交換した。 / 文字の表され方や係数を比べた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "x＋y＝5、y＝2x−1を代入法で解こう。 yと2x−1は等しいので、x＋y＝5をx＋(2x−1)＝5へ置き換える。 3x−1＝5から3x＝6、x＝2を求める。 残したy＝2x−1へx＝2を入れ、y＝3とする。 元の両式で2＋3＝5と3＝2×2−1を確かめる。 結論：x＝2、y＝3",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「2yへy＝2x−1を代入すると4x−1になる。」は誤り。2y＝2(2x−1)＝4x−2。yの式全体に2がかかるので、定数−1にも2をかける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "代入は等しい値の式全体による置換。x+y=5,y=2x−1ではx+(2x−1)=5とy=2x−1を保持し、解(2,3)。2yなら2(2x−1)、−yなら−(2x−1)と括弧を保つ。 操作図の事実：x+y=5,y=2x−1→x+(2x−1)=5→x2,y3→両式へ代入。 使用する状態範囲：step0..3。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223121000000",
    "grade": 8,
    "title": "括弧・小数・分数を含む連立方程式",
    "domain": "A",
    "order": 11,
    "goal": "式の全項へ同じ操作をして係数を整理し、連立方程式を解く。",
    "coverageCodes": [
      "8350223121000000",
      "8350223121300000",
      "8350223122100000"
    ],
    "explanations": {
      "es": {
        "short": "括弧は各項へ分配し、小数や分数は両辺全体を0でない同じ数倍して整える。見た目が変わっても、同じ解をもつ式に直しているよ。",
        "detail": "0.5x＋y＝4、x−y＝2なら、一つ目の両辺を2倍してx＋2y＝8にする。xだけでなくyも右辺4も2倍するのが大切。二つ目からx＝y＋2と表して代入すると3y＝6、y＝2、x＝4。整理した式だけでなく、小数のある元の式0.5×4＋2＝4でも確かめよう。"
      },
      "js": {
        "short": "括弧を分配して同類項を整理し、小数・分数の係数は両辺全体への非零定数倍で扱いやすい式に直す。その後、加減法や代入法を選ぶ。",
        "detail": "x/2＋y＝3、x−y＝3では、一式目を2倍してx＋2y＝6とする。二式目を引くと3y＝3、y＝1。残したx−y＝3からx＝4。掛ける定数は0でなく、全項と右辺へ同じ操作を行う。括弧を含む2(x＋y)＝10なら、展開して2x＋2y＝10としても、両辺を2で割ってx＋y＝5としてもよい。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "変形前後を並べる",
        "text": "教材用の式0.5x＋y＝4と、その両辺を2倍したx＋2y＝8を並べる。(x,y)＝(4,2)はどちらも成立し、同じ関係を表す。",
        "activityIds": [
          "prog-python"
        ]
      },
      {
        "category": "craft",
        "title": "ひとまとまりの式を二倍する",
        "text": "式札x/2＋y＝3を両辺全体で二倍する模型。xだけでなくyも右辺3も二倍し、x＋2y＝6を作る。札は量そのものではなく等式の各項を表す。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "0.5x＋y＝4の両辺を2倍すると？",
        "options": [
          "x＋y＝4",
          "x＋y＝8",
          "x＋2y＝8"
        ],
        "answer": "x＋2y＝8",
        "explanation": "左辺の全項と右辺へ2をかける。",
        "hint": "小数の項だけを変えない。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "x/2＋y＝3の両辺を2倍すると？",
        "options": [
          "x＋2y＝3",
          "x＋2y＝6",
          "x＋y＝6"
        ],
        "answer": "x＋2y＝6",
        "explanation": "x/2はx、yは2y、3は6になる。",
        "hint": "分母を消す操作は両辺全体に行う。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "2(x＋y)＝10を展開すると？",
        "options": [
          "2x＋2y＝10",
          "2x＋y＝10",
          "2x＋2y＝20"
        ],
        "answer": "2x＋2y＝10",
        "explanation": "括弧の各項へ2を分配する。右辺はこの展開では変えない。",
        "hint": "展開と両辺を2倍する操作を区別する。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "x/2＋y＝3、x−y＝3を整理して3y＝3を得た。yはいくつ？",
        "answer": 1,
        "explanation": "両辺を3で割りy＝1。",
        "hint": "係数3を外す。",
        "suffix": "",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "x−y＝3でy＝1ならxはいくつ？",
        "answer": 4,
        "explanation": "x−1＝3だからx＝4。",
        "hint": "残した元の式へ代入する。",
        "suffix": "",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "0.5x＋y＝4、x−y＝2の解は？",
        "options": [
          "x＝4、y＝2",
          "x＝2、y＝4",
          "x＝3、y＝1"
        ],
        "answer": "x＝4、y＝2",
        "explanation": "0.5×4＋2＝4、4−2＝2で両方成立。",
        "hint": "小数のままの元の式でも検算する。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "分数を消すため両辺を0倍してよい？",
        "options": [
          "よい。最も簡単になる",
          "片方の式なら必ずよい",
          "だめ。条件が0＝0へ消えてしまう"
        ],
        "answer": "だめ。条件が0＝0へ消えてしまう",
        "explanation": "0倍では元の式に戻せず、解の条件を失う。",
        "hint": "変形後から元へ戻れるかを見る。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "2(x＋y)＝10、x−y＝1の解は？",
        "options": [
          "x＝4、y＝1",
          "x＝3、y＝2",
          "x＝2、y＝3"
        ],
        "answer": "x＝3、y＝2",
        "explanation": "最初を2で割ってx＋y＝5。二式を足してx＝3、残した式からy＝2。",
        "hint": "両辺を同じ0でない数で割る。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "整理予想：x/3＋y/2＝4の両辺を6倍すると？",
      "options": [
        "2x＋3y＝24",
        "2x＋3y＝4",
        "6x＋6y＝24"
      ],
      "answer": "2x＋3y＝24",
      "explanation": "6÷3＝2、6÷2＝3、右辺4×6＝24。",
      "hint": "各項の分母が消える倍率を使う。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "分母を消してから解く",
      "prompt": "x/2＋y＝3、x−y＝3を解こう。",
      "steps": [
        {
          "text": "最初の式の両辺全体を2倍し、x＋2y＝6とする。"
        },
        {
          "text": "この式からx−y＝3を引いて3y＝3を得る。元のx−y＝3は残す。"
        },
        {
          "text": "y＝1を求め、残した式へ代入してx＝4とする。"
        },
        {
          "text": "元の式で4/2＋1＝3、4−1＝3となり、両方成立する。"
        }
      ],
      "answer": "x＝4、y＝1",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "小数や分数がある項だけを整数に直せばよい。",
      "correction": "等式の関係を保つには、両辺の全項へ同じ0でない数をかける。0.5x＋y＝4を2倍するならx＋2y＝8。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "x/2＋y＝3をx＋2y＝6へ直しても同じ解になる理由を説明しよう。",
        "followUp": "展開する操作と両辺を二倍する操作は何が違う？",
        "checkpoints": [
          "両辺の全項へ同じ非零数をかけた。",
          "元へ割り戻せることや操作の違いを説明した。"
        ],
        "sample": "両辺を2倍し、逆に2で割れば元へ戻せる。2(x＋y)の展開は左辺を同じ値の2x＋2yへ書き換える操作で、右辺をさらに二倍することではない。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "括弧は各項へ分配し、小数や分数は両辺全体を0でない同じ数倍して整える。見た目が変わっても、同じ解をもつ式に直しているよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "0.5x＋y＝4、x−y＝2なら、一つ目の両辺を2倍してx＋2y＝8にする。xだけでなくyも右辺4も2倍するのが大切。二つ目からx＝y＋2と表して代入すると3y＝6、y＝2、x＝4。整理した式だけでなく、小数のある元の式0.5×4＋2＝4でも確かめよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "括弧を分配して同類項を整理し、小数・分数の係数は両辺全体への非零定数倍で扱いやすい式に直す。その後、加減法や代入法を選ぶ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "x/2＋y＝3、x−y＝3では、一式目を2倍してx＋2y＝6とする。二式目を引くと3y＝3、y＝1。残したx−y＝3からx＝4。掛ける定数は0でなく、全項と右辺へ同じ操作を行う。括弧を含む2(x＋y)＝10なら、展開して2x＋2y＝10としても、両辺を2で割ってx＋y＝5としてもよい。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材用の式0.5x＋y＝4と、その両辺を2倍したx＋2y＝8を並べる。(x,y)＝(4,2)はどちらも成立し、同じ関係を表す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "式札x/2＋y＝3を両辺全体で二倍する模型。xだけでなくyも右辺3も二倍し、x＋2y＝6を作る。札は量そのものではなく等式の各項を表す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "0.5x＋y＝4の両辺を2倍すると？ 正答：x＋2y＝8。 左辺の全項と右辺へ2をかける。 考える手がかり：小数の項だけを変えない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "x/2＋y＝3の両辺を2倍すると？ 正答：x＋2y＝6。 x/2はx、yは2y、3は6になる。 考える手がかり：分母を消す操作は両辺全体に行う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "2(x＋y)＝10を展開すると？ 正答：2x＋2y＝10。 括弧の各項へ2を分配する。右辺はこの展開では変えない。 考える手がかり：展開と両辺を2倍する操作を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "x/2＋y＝3、x−y＝3を整理して3y＝3を得た。yはいくつ？ 正答：1。 両辺を3で割りy＝1。 考える手がかり：係数3を外す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "x−y＝3でy＝1ならxはいくつ？ 正答：4。 x−1＝3だからx＝4。 考える手がかり：残した元の式へ代入する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "0.5x＋y＝4、x−y＝2の解は？ 正答：x＝4、y＝2。 0.5×4＋2＝4、4−2＝2で両方成立。 考える手がかり：小数のままの元の式でも検算する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "分数を消すため両辺を0倍してよい？ 正答：だめ。条件が0＝0へ消えてしまう。 0倍では元の式に戻せず、解の条件を失う。 考える手がかり：変形後から元へ戻れるかを見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "2(x＋y)＝10、x−y＝1の解は？ 正答：x＝3、y＝2。 最初を2で割ってx＋y＝5。二式を足してx＝3、残した式からy＝2。 考える手がかり：両辺を同じ0でない数で割る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "整理予想：x/3＋y/2＝4の両辺を6倍すると？ 正答：2x＋3y＝24。 6÷3＝2、6÷2＝3、右辺4×6＝24。 考える手がかり：各項の分母が消える倍率を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "x/2＋y＝3をx＋2y＝6へ直しても同じ解になる理由を説明しよう。 展開する操作と両辺を二倍する操作は何が違う？ 両辺を2倍し、逆に2で割れば元へ戻せる。2(x＋y)の展開は左辺を同じ値の2x＋2yへ書き換える操作で、右辺をさらに二倍することではない。 確認項目：両辺の全項へ同じ非零数をかけた。 / 元へ割り戻せることや操作の違いを説明した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "x/2＋y＝3、x−y＝3を解こう。 最初の式の両辺全体を2倍し、x＋2y＝6とする。 この式からx−y＝3を引いて3y＝3を得る。元のx−y＝3は残す。 y＝1を求め、残した式へ代入してx＝4とする。 元の式で4/2＋1＝3、4−1＝3となり、両方成立する。 結論：x＝4、y＝1",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「小数や分数がある項だけを整数に直せばよい。」は誤り。等式の関係を保つには、両辺の全項へ同じ0でない数をかける。0.5x＋y＝4を2倍するならx＋2y＝8。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "括弧の展開は分配法則。係数の整理では等式両辺全体に非零定数を掛ける。2(x+y)=10,x−y=1の解(3,2)、0.5x+y=4,x−y=2の解(4,2)、x/2+y=3,x−y=3の解(4,1)。加減後も元の一方の式を保持する。 操作図の事実：2(x+y)=10,x−y=1→(3,2)。0.5x+y=4,x−y=2→(4,2)。x/2+y=3,x−y=3→(4,1)。式全項へ同操作。 使用する状態範囲：example bracket/decimal/fraction; step0..3。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223122200000",
    "grade": 8,
    "title": "連立方程式の活用",
    "domain": "A",
    "order": 12,
    "goal": "二つの数量を文字で決め、条件から連立方程式を立てて場面へ戻す。",
    "coverageCodes": [
      "8350223122200000",
      "8350223120000000",
      "8350223122000000",
      "8350222220000000",
      "8350222330000000",
      "8350223511000000"
    ],
    "explanations": {
      "es": {
        "short": "分からない二つの量をx,yと決め、別々の二つの関係を式にする。解いた後は、単位や個数の条件に合う答えか確かめよう。",
        "detail": "架空の入場券を大人一枚200円、子ども一枚100円とする。合計6枚で900円なら、大人x枚、子どもy枚としてx＋y＝6、200x＋100y＝900。二つ目を100で割って2x＋y＝9とし、一つ目を引くとx＝3。残したx＋y＝6からy＝3。枚数も代金も確かめて答えるよ。"
      },
      "js": {
        "short": "場面の二量を文字で定義し、個数・代金など異なる関係から立式する。得た解を元の条件と数量の範囲へ戻して判断する。",
        "detail": "大人券200円をx枚、子ども券100円をy枚買う架空設定で、6枚900円ならx＋y＝6と200x＋100y＝900。両式を整理して解は(3,3)となる。枚数は0以上の整数なので、数学的に式を満たしても負や小数の枚数なら場面には合わない。また個数の式を二倍しただけでは独立した代金の情報にならない。何を数えた関係かを分けて立式する。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "二条件のチェックを作る",
        "text": "架空の券の設定で大人3枚、子ども3枚を入力し、合計枚数6と代金900円を別々に計算する。一方の一致だけで判定を終えない。",
        "activityIds": [
          "prog-python"
        ]
      },
      {
        "category": "craft",
        "title": "二種類の部品を組み合わせる",
        "text": "架空の部品は大一個200円、小一個100円。合計6個で900円なら、大3個と小3個。実物の個数なので0以上の整数という条件も確かめる。",
        "activityIds": [
          "craft-lego"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "架空の大人券x枚、子ども券y枚で合計6枚なら？",
        "options": [
          "x−y＝6",
          "x＋y＝6",
          "200x＋100y＝6"
        ],
        "answer": "x＋y＝6",
        "explanation": "枚数同士を足して全枚数6とする。",
        "hint": "円と枚を混ぜない。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "架空の大人券一枚200円をx枚、子ども券一枚100円をy枚で900円なら？",
        "options": [
          "200x＋100y＝900",
          "x＋y＝900",
          "300(x＋y)＝900"
        ],
        "answer": "200x＋100y＝900",
        "explanation": "各単価×枚数で代金を出して足す。",
        "hint": "二種類を別々に計算する。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "x＋y＝6、2x＋y＝9から、大人券の枚数xはいくつ？",
        "answer": 3,
        "explanation": "二つ目から一つ目を引くとx＝3。",
        "hint": "同じyの係数を利用する。",
        "suffix": "枚",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "大人券3枚、子ども券y枚で合計6枚ならyはいくつ？",
        "answer": 3,
        "explanation": "y＝6−3＝3枚。",
        "hint": "合計枚数へ戻る。",
        "suffix": "枚",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "大人券200円を3枚、子ども券100円を3枚の合計代金は？",
        "answer": 900,
        "explanation": "200×3＋100×3＝600＋300＝900円。",
        "hint": "元の金額の条件を確かめる。",
        "suffix": "円",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "分けられない券の枚数を解いてx＝2.5となった。判断として適切なのは？",
        "options": [
          "いつでも四捨五入して3枚にする",
          "小数でも必ず購入できる",
          "枚数の条件に合わず、設定や式を確認する"
        ],
        "answer": "枚数の条件に合わず、設定や式を確認する",
        "explanation": "枚数は整数なので、そのまま場面の答えにはできない。勝手な丸めは二条件を崩す。",
        "hint": "式の解と場面の答えを区別する。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "x＋y＝6と2x＋2y＝12だけで、二種類の枚数は一つに決まる？",
        "options": [
          "必ずx＝6,y＝0に決まる",
          "決まらない。二式は同じ関係",
          "必ずx＝y＝3に決まる"
        ],
        "answer": "決まらない。二式は同じ関係",
        "explanation": "二つ目は一つ目の2倍で、新しい条件ではない。",
        "hint": "異なる数量の情報を表しているか考える。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "number",
        "prompt": "架空の券が大人200円、子ども100円。合計6枚で1000円なら大人券は何枚？",
        "answer": 4,
        "explanation": "子どもだけ6枚なら600円。大人へ一枚替えるごとに100円増え、400÷100＝4枚。連立でも同じ。",
        "hint": "連立以外の見方とも比べる。",
        "suffix": "枚",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "組み合わせ予想：大人200円、子ども100円で合計6枚800円なら？",
      "options": [
        "大人4枚・子ども2枚",
        "大人3枚・子ども3枚",
        "大人2枚・子ども4枚"
      ],
      "answer": "大人2枚・子ども4枚",
      "explanation": "2＋4＝6、200×2＋100×4＝800で両方合う。",
      "hint": "枚数と代金を両方見る。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "個数と代金を分けて立式する",
      "prompt": "架空の大人券200円、子ども券100円を合計6枚900円で買う。各枚数を求めよう。",
      "steps": [
        {
          "text": "大人x枚、子どもy枚とし、x,yは0以上の整数とする。"
        },
        {
          "text": "枚数からx＋y＝6、代金から200x＋100y＝900を立てる。"
        },
        {
          "text": "代金の式を100で割って2x＋y＝9。枚数の式を引いてx＝3、残した式からy＝3。"
        },
        {
          "text": "3＋3＝6、200×3＋100×3＝900を確認し、整数で非負という条件も満たす。"
        }
      ],
      "answer": "大人3枚、子ども3枚",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "連立方程式で数が出れば、負の枚数や小数でもそのまま答えにする。",
      "correction": "式の解に加え、場面の範囲を確認する。券の枚数なら0以上の整数であり、満たさない解はその設定の答えにはならない。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "券の問題で、x＋y＝6と200x＋100y＝900が別の関係だと説明しよう。",
        "followUp": "自分の答えを、式と元の文章の両方で確かめるには？",
        "checkpoints": [
          "文字の意味と単位を決めた。",
          "枚数・代金・非負整数を全て確認した。"
        ],
        "sample": "最初は枚数の合計、次は単価をかけた代金の合計。大人3枚、子ども3枚なら枚数6、代金900で、どちらも0以上の整数なので設定に合う。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "分からない二つの量をx,yと決め、別々の二つの関係を式にする。解いた後は、単位や個数の条件に合う答えか確かめよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "架空の入場券を大人一枚200円、子ども一枚100円とする。合計6枚で900円なら、大人x枚、子どもy枚としてx＋y＝6、200x＋100y＝900。二つ目を100で割って2x＋y＝9とし、一つ目を引くとx＝3。残したx＋y＝6からy＝3。枚数も代金も確かめて答えるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "場面の二量を文字で定義し、個数・代金など異なる関係から立式する。得た解を元の条件と数量の範囲へ戻して判断する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "大人券200円をx枚、子ども券100円をy枚買う架空設定で、6枚900円ならx＋y＝6と200x＋100y＝900。両式を整理して解は(3,3)となる。枚数は0以上の整数なので、数学的に式を満たしても負や小数の枚数なら場面には合わない。また個数の式を二倍しただけでは独立した代金の情報にならない。何を数えた関係かを分けて立式する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の券の設定で大人3枚、子ども3枚を入力し、合計枚数6と代金900円を別々に計算する。一方の一致だけで判定を終えない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の部品は大一個200円、小一個100円。合計6個で900円なら、大3個と小3個。実物の個数なので0以上の整数という条件も確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "架空の大人券x枚、子ども券y枚で合計6枚なら？ 正答：x＋y＝6。 枚数同士を足して全枚数6とする。 考える手がかり：円と枚を混ぜない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "架空の大人券一枚200円をx枚、子ども券一枚100円をy枚で900円なら？ 正答：200x＋100y＝900。 各単価×枚数で代金を出して足す。 考える手がかり：二種類を別々に計算する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "x＋y＝6、2x＋y＝9から、大人券の枚数xはいくつ？ 正答：3。 二つ目から一つ目を引くとx＝3。 考える手がかり：同じyの係数を利用する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "大人券3枚、子ども券y枚で合計6枚ならyはいくつ？ 正答：3。 y＝6−3＝3枚。 考える手がかり：合計枚数へ戻る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "大人券200円を3枚、子ども券100円を3枚の合計代金は？ 正答：900。 200×3＋100×3＝600＋300＝900円。 考える手がかり：元の金額の条件を確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "分けられない券の枚数を解いてx＝2.5となった。判断として適切なのは？ 正答：枚数の条件に合わず、設定や式を確認する。 枚数は整数なので、そのまま場面の答えにはできない。勝手な丸めは二条件を崩す。 考える手がかり：式の解と場面の答えを区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "x＋y＝6と2x＋2y＝12だけで、二種類の枚数は一つに決まる？ 正答：決まらない。二式は同じ関係。 二つ目は一つ目の2倍で、新しい条件ではない。 考える手がかり：異なる数量の情報を表しているか考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "架空の券が大人200円、子ども100円。合計6枚で1000円なら大人券は何枚？ 正答：4。 子どもだけ6枚なら600円。大人へ一枚替えるごとに100円増え、400÷100＝4枚。連立でも同じ。 考える手がかり：連立以外の見方とも比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "組み合わせ予想：大人200円、子ども100円で合計6枚800円なら？ 正答：大人2枚・子ども4枚。 2＋4＝6、200×2＋100×4＝800で両方合う。 考える手がかり：枚数と代金を両方見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "券の問題で、x＋y＝6と200x＋100y＝900が別の関係だと説明しよう。 自分の答えを、式と元の文章の両方で確かめるには？ 最初は枚数の合計、次は単価をかけた代金の合計。大人3枚、子ども3枚なら枚数6、代金900で、どちらも0以上の整数なので設定に合う。 確認項目：文字の意味と単位を決めた。 / 枚数・代金・非負整数を全て確認した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "架空の大人券200円、子ども券100円を合計6枚900円で買う。各枚数を求めよう。 大人x枚、子どもy枚とし、x,yは0以上の整数とする。 枚数からx＋y＝6、代金から200x＋100y＝900を立てる。 代金の式を100で割って2x＋y＝9。枚数の式を引いてx＝3、残した式からy＝3。 3＋3＝6、200×3＋100×3＝900を確認し、整数で非負という条件も満たす。 結論：大人3枚、子ども3枚",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「連立方程式で数が出れば、負の枚数や小数でもそのまま答えにする。」は誤り。式の解に加え、場面の範囲を確認する。券の枚数なら0以上の整数であり、満たさない解はその設定の答えにはならない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "架空の大人券200円x枚、子ども券100円y枚で合計6枚ならy=6−x、代金=200x+100(6−x)=600+100x。枚数は非負整数。900円の解は(3,3)、1000円は(4,2)、800円は(2,4)。各解を元の枚数と代金へ戻して検算する。 操作図の事実：計6枚。大人200円adult枚、子ども100円(6−adult)枚。合計600+100adult円。 使用する状態範囲：adult1..4。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223311100000",
    "grade": 8,
    "title": "一次関数とその式",
    "domain": "C",
    "order": 13,
    "goal": "一次関数をy＝ax＋bの形と数量の変化から捉え、一定の関数と区別する。",
    "coverageCodes": [
      "8350223311100000",
      "8350223311000000",
      "8350223311200000",
      "8350222110000000"
    ],
    "explanations": {
      "es": {
        "short": "一次関数はy＝ax＋b（a≠0）の形で表せる関数。xが1増えるとyはa増え、x＝0のときのyはb。a＝0で値が一定の関数とは区別するよ。",
        "detail": "y＝2x＋1では、x＝0,1,2に対してy＝1,3,5。xが1増えるたびにyは2増え、始めのx＝0でyは1になる。y＝2xはb＝0の場合で、比例でも一次関数でもある。一方、y＝3はxを変えても一定なので、この教材でいう一次関数には含めない。"
      },
      "js": {
        "short": "一次関数はyがxの一次式y＝ax＋b（a≠0）で表される関数。変化を表すaと、x＝0での値bの役割を区別する。",
        "detail": "y＝ax＋bでa≠0なら、xが増加量hだけ変わるとyはahだけ変わる。例えばy＝−2x＋3ではxが1増えるごとにyは2減る。bはx＝0のときのyであり、場面に0が含まれない場合も式の上ではその値を表す。a＝0ならy＝bという一定の関数なので、一次関数の比較対象として区別する。x²などを含む式は一般に一次関数ではない。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "入力と出力の表",
        "text": "教材用の規則y＝2x＋1へx＝−1,0,1を入れるとy＝−1,1,3。入力が1ずつ増えると出力は2ずつ増える。0に対応する1も表で確かめる。",
        "activityIds": [
          "prog-python"
        ]
      },
      {
        "category": "craft",
        "title": "固定分と増える分",
        "text": "架空の飾りは準備用のひも1mと、部品一つにつき2mを使う。部品数nが0以上の整数なら、必要量は2n＋1m。部品数の範囲でこの関係を使う。",
        "activityIds": [
          "craft-accessory"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "この教材の一次関数に当てはまる式は？",
        "options": [
          "y＝2x＋1",
          "y＝3",
          "y＝x²"
        ],
        "answer": "y＝2x＋1",
        "explanation": "2x＋1はxの一次式。y＝3は一定、y＝x²は二次式。",
        "hint": "xの係数が0でない一次式かを見る。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "y＝2x＋1でx＝0のとき、yはいくつ？",
        "answer": 1,
        "explanation": "2×0＋1＝1。",
        "hint": "0を入れるとどの項が残る？",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "y＝2x＋1でx＝3のとき、yはいくつ？",
        "answer": 7,
        "explanation": "2×3＋1＝7。",
        "hint": "掛け算の後に1を足す。",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝2x＋1でxが1増えるとyは？",
        "options": [
          "2増える",
          "1増える",
          "3増える"
        ],
        "answer": "2増える",
        "explanation": "係数2がxの1増加に対応するyの増加を表す。",
        "hint": "xの値を二つ選んで差を取る。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝−2x＋3でxが1増えるとyは？",
        "options": [
          "2増える",
          "3減る",
          "2減る"
        ],
        "answer": "2減る",
        "explanation": "増加量は−2なので、2減る。",
        "hint": "係数の符号まで読む。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝3を一次関数に含めない理由は？",
        "options": [
          "グラフを描けないから",
          "xの係数が0で一定の関数だから",
          "3が正の数だから"
        ],
        "answer": "xの係数が0で一定の関数だから",
        "explanation": "一次関数はy＝ax＋bでa≠0とする。y＝3はa＝0。",
        "hint": "定義のaの条件を確認する。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝2xについて正しいのは？",
        "options": [
          "比例であり一次関数でもある",
          "比例だけで一次関数ではない",
          "一次関数だが比例ではない"
        ],
        "answer": "比例であり一次関数でもある",
        "explanation": "y＝ax＋bでa＝2≠0、b＝0に当たる。",
        "hint": "bが0の場合を考える。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "number",
        "prompt": "y＝−2x＋3でx＝−1のとき、yはいくつ？",
        "answer": 5,
        "explanation": "−2×(−1)＋3＝2＋3＝5。",
        "hint": "負の数の積の符号を確かめる。",
        "suffix": "",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "表の予想：y＝3x−2でx＝0,1,2ならyは？",
      "options": [
        "−2,0,2",
        "−2,1,4",
        "0,3,6"
      ],
      "answer": "−2,1,4",
      "explanation": "順に3×0−2、3×1−2、3×2−2を計算する。",
      "hint": "出発の値と1増加ごとの変化を分ける。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "二つの数の役割を読む",
      "prompt": "y＝2x＋1の2と1の役割を表で調べよう。",
      "steps": [
        {
          "text": "x＝0を入れるとy＝1なので、定数項1は0に対応する値を表す。"
        },
        {
          "text": "x＝1ではy＝3、x＝2ではy＝5となる。"
        },
        {
          "text": "xが1増えるごとにyが2増えており、係数2が変化を表している。"
        },
        {
          "text": "2≠0なので一次関数。入力の範囲を決めれば、その範囲の対応として使える。"
        }
      ],
      "answer": "2は1増加あたりの変化、1はx＝0での値",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "y＝ax＋bと書ければ、a＝0でも必ず一次関数である。",
      "correction": "この教材で一次関数はa≠0と定める。a＝0のy＝bは値が一定の関数として区別する。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "y＝2x＋1の2と1は、それぞれ表のどこに現れる？",
        "followUp": "y＝3やy＝2xと比べると何が違う？",
        "checkpoints": [
          "変化の大きさと0での値を分けて説明した。",
          "a＝0の一定関数とb＝0の比例を区別した。"
        ],
        "sample": "2はxが1増えるときのyの増加、1はx＝0での値。y＝3は増加が0なので一定の関数。y＝2xは0に0が対応する比例で、一次関数にも含まれる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "一次関数はy＝ax＋b（a≠0）の形で表せる関数。xが1増えるとyはa増え、x＝0のときのyはb。a＝0で値が一定の関数とは区別するよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "y＝2x＋1では、x＝0,1,2に対してy＝1,3,5。xが1増えるたびにyは2増え、始めのx＝0でyは1になる。y＝2xはb＝0の場合で、比例でも一次関数でもある。一方、y＝3はxを変えても一定なので、この教材でいう一次関数には含めない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "一次関数はyがxの一次式y＝ax＋b（a≠0）で表される関数。変化を表すaと、x＝0での値bの役割を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "y＝ax＋bでa≠0なら、xが増加量hだけ変わるとyはahだけ変わる。例えばy＝−2x＋3ではxが1増えるごとにyは2減る。bはx＝0のときのyであり、場面に0が含まれない場合も式の上ではその値を表す。a＝0ならy＝bという一定の関数なので、一次関数の比較対象として区別する。x²などを含む式は一般に一次関数ではない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材用の規則y＝2x＋1へx＝−1,0,1を入れるとy＝−1,1,3。入力が1ずつ増えると出力は2ずつ増える。0に対応する1も表で確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の飾りは準備用のひも1mと、部品一つにつき2mを使う。部品数nが0以上の整数なら、必要量は2n＋1m。部品数の範囲でこの関係を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "この教材の一次関数に当てはまる式は？ 正答：y＝2x＋1。 2x＋1はxの一次式。y＝3は一定、y＝x²は二次式。 考える手がかり：xの係数が0でない一次式かを見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "y＝2x＋1でx＝0のとき、yはいくつ？ 正答：1。 2×0＋1＝1。 考える手がかり：0を入れるとどの項が残る？",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "y＝2x＋1でx＝3のとき、yはいくつ？ 正答：7。 2×3＋1＝7。 考える手がかり：掛け算の後に1を足す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "y＝2x＋1でxが1増えるとyは？ 正答：2増える。 係数2がxの1増加に対応するyの増加を表す。 考える手がかり：xの値を二つ選んで差を取る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "y＝−2x＋3でxが1増えるとyは？ 正答：2減る。 増加量は−2なので、2減る。 考える手がかり：係数の符号まで読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "y＝3を一次関数に含めない理由は？ 正答：xの係数が0で一定の関数だから。 一次関数はy＝ax＋bでa≠0とする。y＝3はa＝0。 考える手がかり：定義のaの条件を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "y＝2xについて正しいのは？ 正答：比例であり一次関数でもある。 y＝ax＋bでa＝2≠0、b＝0に当たる。 考える手がかり：bが0の場合を考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "y＝−2x＋3でx＝−1のとき、yはいくつ？ 正答：5。 −2×(−1)＋3＝2＋3＝5。 考える手がかり：負の数の積の符号を確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "表の予想：y＝3x−2でx＝0,1,2ならyは？ 正答：−2,1,4。 順に3×0−2、3×1−2、3×2−2を計算する。 考える手がかり：出発の値と1増加ごとの変化を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "y＝2x＋1の2と1は、それぞれ表のどこに現れる？ y＝3やy＝2xと比べると何が違う？ 2はxが1増えるときのyの増加、1はx＝0での値。y＝3は増加が0なので一定の関数。y＝2xは0に0が対応する比例で、一次関数にも含まれる。 確認項目：変化の大きさと0での値を分けて説明した。 / a＝0の一定関数とb＝0の比例を区別した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "y＝2x＋1の2と1の役割を表で調べよう。 x＝0を入れるとy＝1なので、定数項1は0に対応する値を表す。 x＝1ではy＝3、x＝2ではy＝5となる。 xが1増えるごとにyが2増えており、係数2が変化を表している。 2≠0なので一次関数。入力の範囲を決めれば、その範囲の対応として使える。 結論：2は1増加あたりの変化、1はx＝0での値",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「y＝ax＋bと書ければ、a＝0でも必ず一次関数である。」は誤り。この教材で一次関数はa≠0と定める。a＝0のy＝bは値が一定の関数として区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "一次関数はy=ax+bでa≠0。係数aはxが1増えるときのyの増加量、bはx=0での値。a=0は比較用の一定関数、b=0かつa≠0は比例でもある。負のaではxの増加に対しyが減少する。 操作図の事実：y=ax+b。a=0は比較用の定数関数と明示。表x−2..2と固定座標。 使用する状態範囲：a,b−2..2。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223312100000",
    "grade": 8,
    "title": "変化の割合",
    "domain": "C",
    "order": 14,
    "goal": "増加量の比から変化の割合を求め、y/xとの違いを説明する。",
    "coverageCodes": [
      "8350223312100000",
      "8350223311100000",
      "8350223321000000"
    ],
    "explanations": {
      "es": {
        "short": "変化の割合は、yの増加量÷xの増加量。比べる二つのxは違う値を選ぼう。一次関数y＝ax＋b（a≠0）では、この割合がいつもaになるよ。",
        "detail": "y＝2x＋1でxが1から4へ変わると、yは3から9へ変わる。xの増加量は4−1＝3、yの増加量は9−3＝6。変化の割合は6÷3＝2で、9÷4ではない。間隔を変えても、一次関数では増加量どうしの割合が同じになる。"
      },
      "js": {
        "short": "変化の割合はΔy/Δx（Δx≠0）である。一次関数y＝ax＋b（a≠0）では、Δy＝aΔxより変化の割合はaとなる。",
        "detail": "二つの入力x₁,x₂が異なるとき、変化の割合は(y₂−y₁)/(x₂−x₁)。y＝ax＋bでは定数項bが差で消え、a(x₂−x₁)/(x₂−x₁)＝a。例えばy＝−2x＋1でxが−1から2へ変わるとyは3から−3へ変わり、変化の割合は−6/3＝−2。x≠0のときのy/xは原点からの比であり、b≠0のとき一般に変化の割合とは一致しない。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "二点の差を計算する",
        "text": "教材用のy＝2x＋1で、入力1と4に対する出力3と9を使う。出力の差6を入力の差3で割って2。片方の組の9/4とは別の計算。",
        "activityIds": [
          "prog-python"
        ]
      },
      {
        "category": "drawing",
        "title": "線の上の二点を比べる",
        "text": "架空の座標図に(1,3)と(4,9)を置く。右へ3進む間に上へ6進むので、横1あたり縦2の変化。座標の目盛りを固定して比べる。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "y＝2x＋1でxが1から4へ変わる。xの増加量は？",
        "answer": 3,
        "explanation": "4−1＝3。",
        "hint": "後の値から前の値を引く。",
        "suffix": "",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "yが3から9へ変わるとき、yの増加量は？",
        "answer": 6,
        "explanation": "9−3＝6。",
        "hint": "値そのものと差を区別する。",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "xの増加量3、yの増加量6のとき、変化の割合は？",
        "answer": 2,
        "explanation": "6÷3＝2。",
        "hint": "yの増加量を分子にする。",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "変化の割合の式は？",
        "options": [
          "yの値÷xの値",
          "xの増加量÷yの増加量",
          "yの増加量÷xの増加量"
        ],
        "answer": "yの増加量÷xの増加量",
        "explanation": "二つの点の間の変化同士を比べる。xの増加量は0でない必要がある。",
        "hint": "二点の差を使っているかを見る。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "y＝−2x＋1でxが−1から2へ変わるとき、変化の割合は？",
        "answer": -2,
        "explanation": "yは3から−3へ変わり、(−3−3)÷(2−(−1))＝−2。",
        "hint": "減った変化は負の増加量になる。",
        "suffix": "",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝2x＋1の変化の割合を、x＝1とx＝1で計算できる？",
        "options": [
          "できない。xの増加量が0だから",
          "いつでも2÷0で求められる",
          "必ず0になる"
        ],
        "answer": "できない。xの増加量が0だから",
        "explanation": "同じxでは分母の増加量が0になり、この比を計算できない。",
        "hint": "異なる二つの入力を選ぶ。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "一次関数y＝3x−4で、異なる二つのxを選んだときの変化の割合は？",
        "options": [
          "選ぶたびに−4",
          "いつもy/x",
          "いつも3"
        ],
        "answer": "いつも3",
        "explanation": "定数項は差で消え、係数3が残る。",
        "hint": "bが差でどうなるか考える。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "number",
        "prompt": "変化の割合が−2の一次関数で、xが3増えるとyの増加量は？",
        "answer": -6,
        "explanation": "−2×3＝−6で、yは6減る。",
        "hint": "割合にxの増加量をかける。",
        "suffix": "",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "変化を予想：y＝2x＋5でxが4増えるとyは？",
      "options": [
        "8増える",
        "13増える",
        "5増える"
      ],
      "answer": "8増える",
      "explanation": "増加量は2×4＝8。定数項5は差では消える。",
      "hint": "最初の値5をもう一度足さない。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "二点の差から割合を出す",
      "prompt": "y＝2x＋1で、xが1から4へ変わるときの変化の割合を求めよう。",
      "steps": [
        {
          "text": "x＝1に対するy＝3、x＝4に対するy＝9を求める。"
        },
        {
          "text": "xの増加量は4−1＝3で、0ではない。"
        },
        {
          "text": "yの増加量は9−3＝6。"
        },
        {
          "text": "6÷3＝2なので変化の割合は2。係数2と一致する。"
        }
      ],
      "answer": "変化の割合は2",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "y＝2x＋1でx＝4,y＝9だから、変化の割合は9/4。",
      "correction": "変化の割合は二点間の増加量の比。例えば(1,3)から(4,9)なら(9−3)/(4−1)＝2。y/xと混同しない。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "y＝2x＋1で、定数項1が変化の割合へ現れない理由を説明しよう。",
        "followUp": "xの増加量が負の向きでも、異なる二点なら同じ割合になる？",
        "checkpoints": [
          "yの差で定数項が消えると説明した。",
          "分子と分母を同じ順で引き算した。"
        ],
        "sample": "二つのyを引くと＋1同士が消え、2×xの差が残る。二点の順を逆にしても分子と分母が両方反対符号になり、割合は2のまま。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "変化の割合は、yの増加量÷xの増加量。比べる二つのxは違う値を選ぼう。一次関数y＝ax＋b（a≠0）では、この割合がいつもaになるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "y＝2x＋1でxが1から4へ変わると、yは3から9へ変わる。xの増加量は4−1＝3、yの増加量は9−3＝6。変化の割合は6÷3＝2で、9÷4ではない。間隔を変えても、一次関数では増加量どうしの割合が同じになる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "変化の割合はΔy/Δx（Δx≠0）である。一次関数y＝ax＋b（a≠0）では、Δy＝aΔxより変化の割合はaとなる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "二つの入力x₁,x₂が異なるとき、変化の割合は(y₂−y₁)/(x₂−x₁)。y＝ax＋bでは定数項bが差で消え、a(x₂−x₁)/(x₂−x₁)＝a。例えばy＝−2x＋1でxが−1から2へ変わるとyは3から−3へ変わり、変化の割合は−6/3＝−2。x≠0のときのy/xは原点からの比であり、b≠0のとき一般に変化の割合とは一致しない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材用のy＝2x＋1で、入力1と4に対する出力3と9を使う。出力の差6を入力の差3で割って2。片方の組の9/4とは別の計算。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の座標図に(1,3)と(4,9)を置く。右へ3進む間に上へ6進むので、横1あたり縦2の変化。座標の目盛りを固定して比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "y＝2x＋1でxが1から4へ変わる。xの増加量は？ 正答：3。 4−1＝3。 考える手がかり：後の値から前の値を引く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "yが3から9へ変わるとき、yの増加量は？ 正答：6。 9−3＝6。 考える手がかり：値そのものと差を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "xの増加量3、yの増加量6のとき、変化の割合は？ 正答：2。 6÷3＝2。 考える手がかり：yの増加量を分子にする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "変化の割合の式は？ 正答：yの増加量÷xの増加量。 二つの点の間の変化同士を比べる。xの増加量は0でない必要がある。 考える手がかり：二点の差を使っているかを見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "y＝−2x＋1でxが−1から2へ変わるとき、変化の割合は？ 正答：-2。 yは3から−3へ変わり、(−3−3)÷(2−(−1))＝−2。 考える手がかり：減った変化は負の増加量になる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "y＝2x＋1の変化の割合を、x＝1とx＝1で計算できる？ 正答：できない。xの増加量が0だから。 同じxでは分母の増加量が0になり、この比を計算できない。 考える手がかり：異なる二つの入力を選ぶ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "一次関数y＝3x−4で、異なる二つのxを選んだときの変化の割合は？ 正答：いつも3。 定数項は差で消え、係数3が残る。 考える手がかり：bが差でどうなるか考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "変化の割合が−2の一次関数で、xが3増えるとyの増加量は？ 正答：-6。 −2×3＝−6で、yは6減る。 考える手がかり：割合にxの増加量をかける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "変化を予想：y＝2x＋5でxが4増えるとyは？ 正答：8増える。 増加量は2×4＝8。定数項5は差では消える。 考える手がかり：最初の値5をもう一度足さない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "y＝2x＋1で、定数項1が変化の割合へ現れない理由を説明しよう。 xの増加量が負の向きでも、異なる二点なら同じ割合になる？ 二つのyを引くと＋1同士が消え、2×xの差が残る。二点の順を逆にしても分子と分母が両方反対符号になり、割合は2のまま。 確認項目：yの差で定数項が消えると説明した。 / 分子と分母を同じ順で引き算した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "y＝2x＋1で、xが1から4へ変わるときの変化の割合を求めよう。 x＝1に対するy＝3、x＝4に対するy＝9を求める。 xの増加量は4−1＝3で、0ではない。 yの増加量は9−3＝6。 6÷3＝2なので変化の割合は2。係数2と一致する。 結論：変化の割合は2",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「y＝2x＋1でx＝4,y＝9だから、変化の割合は9/4。」は誤り。変化の割合は二点間の増加量の比。例えば(1,3)から(4,9)なら(9−3)/(4−1)＝2。y/xと混同しない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "一次関数y=ax+b,a≠0でΔx≠0ならΔy=aΔx、Δy/Δx=a。定数項bは差で消える。x≠0のときのy/xとは一般に異なる。二点の順序を両方で反転しても比は同じ。 操作図の事実：始点x−1、y=−a+1。増加量dx、dy=a dx、dy/dx=a。 使用する状態範囲：a−2/−1/1/2; dx1..3。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223311000000",
    "grade": 8,
    "title": "一次関数のグラフ",
    "domain": "C",
    "order": 15,
    "goal": "切片と傾きを座標上で読み、変域に合ったグラフを描く。",
    "coverageCodes": [
      "8350223311000000",
      "8350223311100000",
      "8350223312100000",
      "8350223322000000",
      "8350222110000000"
    ],
    "explanations": {
      "es": {
        "short": "y＝ax＋b（a≠0）の切片はb、傾きはa。まず(0,b)を置き、右へ1進んだときの上下の変化を見る。グラフを描く範囲も確かめよう。",
        "detail": "y＝2x＋1では、切片1から(0,1)に点を置く。xを1増やすとyは2増えるので、次の点は(1,3)。xが数直線上の全ての数をとるなら、この二点を通る直線がグラフになる。xが0から2までなら対応する線分、xが整数だけなら対応する点として示す。線を結んでよい範囲は設定で違うよ。"
      },
      "js": {
        "short": "一次関数y＝ax＋b（a≠0）の傾きaは変化の割合、切片bはy軸との交点のy座標。変域が全ての数ならグラフは直線である。",
        "detail": "y＝−2x＋3なら切片は3で点(0,3)を通る。xを1増やすとyは2減るため、点(1,1)も通る。a>0は右上がり、a<0は右下がりだが、見た目の角度は縦横の表示倍率にも左右されるので、傾きは目盛りの数値から読む。軸の尺度と原点を固定し、場面の変域が区間なら線分、離散的な入力なら点を示す。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "方眼で傾きを確かめる",
        "text": "架空の座標図でy＝2x＋1を描く。(0,1)から右1、上2で(1,3)。方眼の目盛りを変えると見た目の角度も変わるため、座標値で比べる。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "入力の種類で表示を選ぶ",
        "text": "教材用の同じ式y＝2x＋1でも、入力が0,1,2だけなら三点を表示する。0から2までの全ての数なら、その間の線分も対応を表す。",
        "activityIds": [
          "prog-scratch"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "y＝2x＋1の切片はいくつ？",
        "answer": 1,
        "explanation": "x＝0のときy＝1なので切片1。",
        "hint": "y軸上ではxが0。",
        "suffix": "",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "y＝2x＋1の傾きはいくつ？",
        "answer": 2,
        "explanation": "xが1増えるとyが2増えるので傾き2。",
        "hint": "xの係数を読む。",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝2x＋1のグラフ上で(0,1)から右へ1進むと？",
        "options": [
          "(1,2)",
          "(2,1)",
          "(1,3)"
        ],
        "answer": "(1,3)",
        "explanation": "xは1、yは1＋2＝3になる。",
        "hint": "横と縦の増加を分ける。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝−2x＋3のグラフは、xが増える向きにどう変わる？",
        "options": [
          "必ず水平",
          "右下がり",
          "右上がり"
        ],
        "answer": "右下がり",
        "explanation": "傾き−2なのでxが増えるとyは減る。",
        "hint": "傾きの負符号を読む。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝2x＋1でxの変域が0≦x≦2なら、対応を表すのは？",
        "options": [
          "(0,1)から(2,5)までの線分",
          "全方向へ延ばした直線全部",
          "(0,1)だけ"
        ],
        "answer": "(0,1)から(2,5)までの線分",
        "explanation": "0と2の間の全ての入力を含むが、その外は含まない。",
        "hint": "入力範囲に対応する部分だけ選ぶ。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝2x＋1でxは整数0,1,2だけ。グラフの表し方は？",
        "options": [
          "間を全て線で結び入力とする",
          "y軸全体を描く",
          "三つの点を示す"
        ],
        "answer": "三つの点を示す",
        "explanation": "0.5などはこの入力範囲にないので、三つの対応点を示す。",
        "hint": "許される入力を列挙する。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "number",
        "prompt": "y＝−2x＋3でx＝1の点のy座標は？",
        "answer": 1,
        "explanation": "−2×1＋3＝1。",
        "hint": "切片3から2下がる。",
        "suffix": "",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "縦横の表示倍率が違う二図で傾きを比べるには？",
        "options": [
          "目盛りの数値でΔy/Δxを調べる",
          "見た目の角度だけを見る",
          "線の色だけを見る"
        ],
        "answer": "目盛りの数値でΔy/Δxを調べる",
        "explanation": "表示倍率は見た目を変えるが、座標値の変化の割合は変わらない。",
        "hint": "図の尺度を読む。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "グラフ予想：y＝−x＋2はどの二点を通る？",
      "options": [
        "(0,−1)と(1,2)",
        "(0,2)と(1,3)",
        "(0,2)と(1,1)"
      ],
      "answer": "(0,2)と(1,1)",
      "explanation": "切片は2、右1で下1なので(1,1)。",
      "hint": "最初の位置と増加量を使う。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "切片と傾きで二点を置く",
      "prompt": "y＝2x＋1を、xが全ての数をとる範囲で描こう。",
      "steps": [
        {
          "text": "両軸の原点と一目盛りを確かめ、切片から(0,1)を置く。"
        },
        {
          "text": "傾き2は右へ1に対して上へ2なので、(1,3)を置く。"
        },
        {
          "text": "二点を通る直線を描く。xが全ての数なので両方向へ続く。"
        },
        {
          "text": "例えばx＝−1ならy＝−1で、点(−1,−1)も直線上にあると確かめる。"
        }
      ],
      "answer": "切片1、傾き2の直線",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "式が一次関数なら、どんな場面でもグラフは無限に延びる直線全体を使う。",
      "correction": "式に加え変域を確認する。区間なら対応する線分、整数などの離散的な入力なら対応する点を使い、設定の外を実際の量として扱わない。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "y＝2x＋1の切片と傾きを、二点の位置で説明しよう。",
        "followUp": "入力が整数だけに変わったら、描き方をどう変える？",
        "checkpoints": [
          "(0,1)と(1,3)を式へ対応させた。",
          "入力範囲とグラフの部分を合わせた。"
        ],
        "sample": "切片1は(0,1)。傾き2は右1上2なので(1,3)を通る。入力が整数だけなら整数のxに対応する点を示し、間の入力があるとは扱わない。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "y＝ax＋b（a≠0）の切片はb、傾きはa。まず(0,b)を置き、右へ1進んだときの上下の変化を見る。グラフを描く範囲も確かめよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "y＝2x＋1では、切片1から(0,1)に点を置く。xを1増やすとyは2増えるので、次の点は(1,3)。xが数直線上の全ての数をとるなら、この二点を通る直線がグラフになる。xが0から2までなら対応する線分、xが整数だけなら対応する点として示す。線を結んでよい範囲は設定で違うよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "一次関数y＝ax＋b（a≠0）の傾きaは変化の割合、切片bはy軸との交点のy座標。変域が全ての数ならグラフは直線である。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "y＝−2x＋3なら切片は3で点(0,3)を通る。xを1増やすとyは2減るため、点(1,1)も通る。a>0は右上がり、a<0は右下がりだが、見た目の角度は縦横の表示倍率にも左右されるので、傾きは目盛りの数値から読む。軸の尺度と原点を固定し、場面の変域が区間なら線分、離散的な入力なら点を示す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の座標図でy＝2x＋1を描く。(0,1)から右1、上2で(1,3)。方眼の目盛りを変えると見た目の角度も変わるため、座標値で比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材用の同じ式y＝2x＋1でも、入力が0,1,2だけなら三点を表示する。0から2までの全ての数なら、その間の線分も対応を表す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "y＝2x＋1の切片はいくつ？ 正答：1。 x＝0のときy＝1なので切片1。 考える手がかり：y軸上ではxが0。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "y＝2x＋1の傾きはいくつ？ 正答：2。 xが1増えるとyが2増えるので傾き2。 考える手がかり：xの係数を読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "y＝2x＋1のグラフ上で(0,1)から右へ1進むと？ 正答：(1,3)。 xは1、yは1＋2＝3になる。 考える手がかり：横と縦の増加を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "y＝−2x＋3のグラフは、xが増える向きにどう変わる？ 正答：右下がり。 傾き−2なのでxが増えるとyは減る。 考える手がかり：傾きの負符号を読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "y＝2x＋1でxの変域が0≦x≦2なら、対応を表すのは？ 正答：(0,1)から(2,5)までの線分。 0と2の間の全ての入力を含むが、その外は含まない。 考える手がかり：入力範囲に対応する部分だけ選ぶ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "y＝2x＋1でxは整数0,1,2だけ。グラフの表し方は？ 正答：三つの点を示す。 0.5などはこの入力範囲にないので、三つの対応点を示す。 考える手がかり：許される入力を列挙する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "y＝−2x＋3でx＝1の点のy座標は？ 正答：1。 −2×1＋3＝1。 考える手がかり：切片3から2下がる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "縦横の表示倍率が違う二図で傾きを比べるには？ 正答：目盛りの数値でΔy/Δxを調べる。 表示倍率は見た目を変えるが、座標値の変化の割合は変わらない。 考える手がかり：図の尺度を読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "グラフ予想：y＝−x＋2はどの二点を通る？ 正答：(0,2)と(1,1)。 切片は2、右1で下1なので(1,1)。 考える手がかり：最初の位置と増加量を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "y＝2x＋1の切片と傾きを、二点の位置で説明しよう。 入力が整数だけに変わったら、描き方をどう変える？ 切片1は(0,1)。傾き2は右1上2なので(1,3)を通る。入力が整数だけなら整数のxに対応する点を示し、間の入力があるとは扱わない。 確認項目：(0,1)と(1,3)を式へ対応させた。 / 入力範囲とグラフの部分を合わせた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "y＝2x＋1を、xが全ての数をとる範囲で描こう。 両軸の原点と一目盛りを確かめ、切片から(0,1)を置く。 傾き2は右へ1に対して上へ2なので、(1,3)を置く。 二点を通る直線を描く。xが全ての数なので両方向へ続く。 例えばx＝−1ならy＝−1で、点(−1,−1)も直線上にあると確かめる。 結論：切片1、傾き2の直線",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「式が一次関数なら、どんな場面でもグラフは無限に延びる直線全体を使う。」は誤り。式に加え変域を確認する。区間なら対応する線分、整数などの離散的な入力なら対応する点を使い、設定の外を実際の量として扱わない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "一次関数y=ax+b,a≠0の切片bに対応する点は(0,b)、傾きaはxの1増加に対するyの増加。全数の変域では直線、制限区間では対応線分、離散入力では点。固定軸で座標を扱う。y=2x+1は(0,1),(1,3)を通る。 操作図の事実：y=ax+b。切片(0,b)、x1でy=a+b。両軸尺度固定。 使用する状態範囲：a−2/−1/1/2; b−2..2。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "motion",
        "text": "一次関数y=2x+1で切片1は点(0,1)、傾き2はxの1増加に対するyの2増加。両軸の原点と一目盛りを固定し、(0,1)から右1上2で(1,3)を示し、両点を通る直線へつなぐ。補助線をたどる途中の位置をグラフ上の点として扱わない。全数変域の直線のうち表示窓内を描く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "video",
        "text": "一次関数y=2x+1は傾き2、切片1。原点と両軸の一目盛りを固定し、切片の点(0,1)から右へ1、上へ2で点(1,3)に対応する。補助線の途中は移動案内であり、全てがグラフ上の点ではない。xが全ての数をとる直線の表示窓内の部分を描き、端の座標は(−2,−3)と(2,5)。二点を通る描画直線上の点は全てy=2x+1に従う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223312000000",
    "grade": 8,
    "title": "一次関数の式を求める",
    "domain": "C",
    "order": 16,
    "goal": "二点や傾きと一点の条件から一次関数の式を求め、条件へ戻して確認する。",
    "coverageCodes": [
      "8350223312000000",
      "8350223311100000",
      "8350223312100000",
      "8350223321000000",
      "8350223322000000",
      "8350222220000000",
      "8350223512000000"
    ],
    "explanations": {
      "es": {
        "short": "一次関数y＝ax＋b（a≠0）の式を求めるには、まず傾きa、その後にbを決めよう。二点から求めるときは、xの値が違うことを確かめるよ。",
        "detail": "(0,1)と(2,5)を通る一次関数を考える。xは2増え、yは4増えるので傾きは4÷2＝2。(0,1)を通るから切片は1で、y＝2x＋1となる。x＝2を入れると5になり、もう一つの点も確かめられる。切片が直接分からない場合は、一点のx,yを式へ入れてbを求めよう。"
      },
      "js": {
        "short": "異なるx座標をもつ二点からa＝(y₂−y₁)/(x₂−x₁)を求め、一点をy＝ax＋bへ代入してbを定める。得られたaが0なら一定の関数として区別する。",
        "detail": "傾き2で点(1,5)を通るならy＝2x＋bに代入し、5＝2＋bからb＝3、y＝2x＋3。二点(0,−1),(4,1)なら傾きは(1−(−1))/(4−0)＝1/2、切片−1でy＝x/2−1となる。同じxに異なるyをもつ二点は、一つのxに一つのyが対応する関数のグラフに同時には乗らない。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "二点から線を決める",
        "text": "架空の座標図で(0,3)と(2,−1)を通る直線。右2に対し下4なので傾き−2、切片3でy＝−2x＋3。座標値を式へ戻して確かめる。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "条件から規則を復元する",
        "text": "教材用の入力0に出力1、入力2に出力5が対応し、一次関数と分かっている設定。差からa＝2を出し、y＝2x＋1を復元する。二つの記録だけで、あらゆる規則が一次だと決めたわけではない。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "(0,1)と(2,5)を通る一次関数の傾きは？",
        "answer": 2,
        "explanation": "(5−1)÷(2−0)＝4÷2＝2。",
        "hint": "yの差をxの差で割る。",
        "suffix": "",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "(0,1)を通る一次関数の切片は？",
        "answer": 1,
        "explanation": "切片はx＝0のy座標なので1。",
        "hint": "y軸上の点を読む。",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "(0,1),(2,5)を通る一次関数の式は？",
        "options": [
          "y＝2x−1",
          "y＝2x＋1",
          "y＝x＋2"
        ],
        "answer": "y＝2x＋1",
        "explanation": "傾き2、切片1であり、二点とも代入して成立する。",
        "hint": "aとbを別々に決める。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "傾き2で(1,5)を通るy＝2x＋bのbは？",
        "answer": 3,
        "explanation": "5＝2×1＋bよりb＝3。",
        "hint": "一点を代入して残る文字を求める。",
        "suffix": "",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "(0,3),(2,−1)を通る一次関数の式は？",
        "options": [
          "y＝2x＋3",
          "y＝−x＋3",
          "y＝−2x＋3"
        ],
        "answer": "y＝−2x＋3",
        "explanation": "傾き(−1−3)÷2＝−2、切片3。",
        "hint": "負の変化量を保つ。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "(0,−1),(4,1)を通る一次関数の傾きは？",
        "answer": 0.5,
        "explanation": "(1−(−1))÷4＝2÷4＝0.5。",
        "hint": "分数1/2を小数で答えても同じ値。",
        "suffix": "",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "(1,2)と(1,5)を同時に通るyをxの関数とするグラフは作れる？",
        "options": [
          "作れない",
          "必ずy＝3xになる",
          "必ずy＝2になる"
        ],
        "answer": "作れない",
        "explanation": "同じ入力x＝1へ異なる二出力2と5が対応してしまう。",
        "hint": "関数の一入力一出力の条件を見る。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "(0,2),(3,2)を通る直線y＝2は、この教材の一次関数？",
        "options": [
          "傾き2の一次関数",
          "傾き3の一次関数",
          "一次関数ではなく一定の関数"
        ],
        "answer": "一次関数ではなく一定の関数",
        "explanation": "傾きは0であり、一次関数のa≠0という条件に合わない。",
        "hint": "二点のyの差を確認する。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "式を予想：傾き−1で(0,4)を通る一次関数は？",
      "options": [
        "y＝x＋4",
        "y＝−x＋4",
        "y＝4x−1"
      ],
      "answer": "y＝−x＋4",
      "explanation": "傾きが−1、切片が4なのでy＝−x＋4。",
      "hint": "xの係数と定数項を入れ替えない。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "二点からaとbを決める",
      "prompt": "(0,1),(2,5)を通る一次関数を求めよう。",
      "steps": [
        {
          "text": "二つのxは0と2で異なるため、変化の割合を計算できる。"
        },
        {
          "text": "a＝(5−1)/(2−0)＝2と求める。"
        },
        {
          "text": "(0,1)をy＝2x＋bへ入れ、b＝1とする。"
        },
        {
          "text": "y＝2x＋1にx＝2を入れると5。与えられた両点を通ると確認する。"
        }
      ],
      "answer": "y＝2x＋1",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "二つの点が分かれば、どんな場合も必ず一次関数が一つ求まる。",
      "correction": "同じxに異なるyの二点は関数にならず、異なるxで同じyなら傾き0の一定関数となる。二点の条件とa≠0を確認する。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "二点から式を求めるとき、aとbをどの順で決める？",
        "followUp": "得られた式が条件に合うか、どう確かめる？",
        "checkpoints": [
          "xの差が0でないことを確かめた。",
          "二点への再代入とa≠0を確認した。"
        ],
        "sample": "まず二点の差からaを求め、一点を代入してbを出す。両点へ式を代入して一致を確認し、a＝0なら一次関数ではなく一定の関数と区別する。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "一次関数y＝ax＋b（a≠0）の式を求めるには、まず傾きa、その後にbを決めよう。二点から求めるときは、xの値が違うことを確かめるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "(0,1)と(2,5)を通る一次関数を考える。xは2増え、yは4増えるので傾きは4÷2＝2。(0,1)を通るから切片は1で、y＝2x＋1となる。x＝2を入れると5になり、もう一つの点も確かめられる。切片が直接分からない場合は、一点のx,yを式へ入れてbを求めよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "異なるx座標をもつ二点からa＝(y₂−y₁)/(x₂−x₁)を求め、一点をy＝ax＋bへ代入してbを定める。得られたaが0なら一定の関数として区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "傾き2で点(1,5)を通るならy＝2x＋bに代入し、5＝2＋bからb＝3、y＝2x＋3。二点(0,−1),(4,1)なら傾きは(1−(−1))/(4−0)＝1/2、切片−1でy＝x/2−1となる。同じxに異なるyをもつ二点は、一つのxに一つのyが対応する関数のグラフに同時には乗らない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の座標図で(0,3)と(2,−1)を通る直線。右2に対し下4なので傾き−2、切片3でy＝−2x＋3。座標値を式へ戻して確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材用の入力0に出力1、入力2に出力5が対応し、一次関数と分かっている設定。差からa＝2を出し、y＝2x＋1を復元する。二つの記録だけで、あらゆる規則が一次だと決めたわけではない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "(0,1)と(2,5)を通る一次関数の傾きは？ 正答：2。 (5−1)÷(2−0)＝4÷2＝2。 考える手がかり：yの差をxの差で割る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "(0,1)を通る一次関数の切片は？ 正答：1。 切片はx＝0のy座標なので1。 考える手がかり：y軸上の点を読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "(0,1),(2,5)を通る一次関数の式は？ 正答：y＝2x＋1。 傾き2、切片1であり、二点とも代入して成立する。 考える手がかり：aとbを別々に決める。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "傾き2で(1,5)を通るy＝2x＋bのbは？ 正答：3。 5＝2×1＋bよりb＝3。 考える手がかり：一点を代入して残る文字を求める。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "(0,3),(2,−1)を通る一次関数の式は？ 正答：y＝−2x＋3。 傾き(−1−3)÷2＝−2、切片3。 考える手がかり：負の変化量を保つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "(0,−1),(4,1)を通る一次関数の傾きは？ 正答：0.5。 (1−(−1))÷4＝2÷4＝0.5。 考える手がかり：分数1/2を小数で答えても同じ値。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "(1,2)と(1,5)を同時に通るyをxの関数とするグラフは作れる？ 正答：作れない。 同じ入力x＝1へ異なる二出力2と5が対応してしまう。 考える手がかり：関数の一入力一出力の条件を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "(0,2),(3,2)を通る直線y＝2は、この教材の一次関数？ 正答：一次関数ではなく一定の関数。 傾きは0であり、一次関数のa≠0という条件に合わない。 考える手がかり：二点のyの差を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "式を予想：傾き−1で(0,4)を通る一次関数は？ 正答：y＝−x＋4。 傾きが−1、切片が4なのでy＝−x＋4。 考える手がかり：xの係数と定数項を入れ替えない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "二点から式を求めるとき、aとbをどの順で決める？ 得られた式が条件に合うか、どう確かめる？ まず二点の差からaを求め、一点を代入してbを出す。両点へ式を代入して一致を確認し、a＝0なら一次関数ではなく一定の関数と区別する。 確認項目：xの差が0でないことを確かめた。 / 二点への再代入とa≠0を確認した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "(0,1),(2,5)を通る一次関数を求めよう。 二つのxは0と2で異なるため、変化の割合を計算できる。 a＝(5−1)/(2−0)＝2と求める。 (0,1)をy＝2x＋bへ入れ、b＝1とする。 y＝2x＋1にx＝2を入れると5。与えられた両点を通ると確認する。 結論：y＝2x＋1",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「二つの点が分かれば、どんな場合も必ず一次関数が一つ求まる。」は誤り。同じxに異なるyの二点は関数にならず、異なるxで同じyなら傾き0の一定関数となる。二点の条件とa≠0を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "異なるxの二点から傾きa=Δy/Δxを求め、b=y−axを決める。(0,1),(2,5)→y=2x+1、(0,3),(2,−1)→y=−2x+3、(0,−1),(4,1)→y=x/2−1。a=0は一定関数。同じxで異なるyはyをxの関数にできない。 操作図の事実：2点(0,1),(2,5)→y2x+1。(0,3),(2,−1)→y−2x+3。(0,−1),(4,1)→y=x/2−1。 使用する状態範囲：example rise/fall/fraction; step0..2。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223311300000",
    "grade": 8,
    "title": "二元一次方程式のグラフ",
    "domain": "C",
    "order": 17,
    "goal": "方程式の解の組とグラフ上の点を対応させ、縦線・横線も区別する。",
    "coverageCodes": [
      "8350223311300000",
      "8350223311000000",
      "8350223312100000"
    ],
    "explanations": {
      "es": {
        "short": "二つの文字が全ての数をとるとき、二元一次方程式の解(x,y)を点にすると直線として表せる。x＝2の縦線ではyは一つに決まらず、yをxの関数にはできないよ。",
        "detail": "x＋y＝4の解(0,4),(1,3),(4,0)を座標にすると、一つの直線上に並ぶ。y＝−x＋4へ直せるので、一次関数としても読める。一方、x＝2はx座標だけが2の点全てだから縦の直線。y＝3はy座標が3の点全てなので横の直線。二つを混同しないようにしよう。"
      },
      "js": {
        "short": "x,yが数直線上の全ての数をとるとき、二元一次方程式ax＋by＝c（a,bは同時に0ではない）の解集合は直線となる。b≠0ならyについて表せるが、b＝0の縦線ではyはxの関数にならない。",
        "detail": "ax＋by＝cでb≠0ならy＝−(a/b)x＋c/b。さらにa≠0なら一次関数であり、a＝0なら一定の関数となる。b＝0ならa≠0なのでx＝c/aという縦線で、同じxに多くのyが対応する。グラフ上の点は式を満たし、式を満たす組はグラフ上にある。描かれた窓の外の部分も、変域が全ての数なら直線として続く。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "座標を一つ固定する",
        "text": "架空の座標図でx＝2を満たす点を描く。(2,−1),(2,0),(2,3)は縦に並ぶ。y＝2なら(−1,2),(0,2),(3,2)が横に並び、別の線になる。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "式で点を選ぶ",
        "text": "教材用の候補点からx＋y＝4を満たすものを選ぶ。(1,3)は合計4で選ばれ、(1,4)は合計5なので選ばれない。点の判定と方程式への代入は同じ確認。",
        "activityIds": [
          "prog-scratch"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "x＋y＝4をyについて表すと？",
        "options": [
          "y＝x＋4",
          "y＝4x",
          "y＝−x＋4"
        ],
        "answer": "y＝−x＋4",
        "explanation": "両辺からxを引くのでy＝4−x。",
        "hint": "移す操作を両辺への引き算で考える。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "x＋y＝4のグラフ上の点は？",
        "options": [
          "(4,1)",
          "(1,3)",
          "(1,4)"
        ],
        "answer": "(1,3)",
        "explanation": "1＋3＝4で方程式を満たす。",
        "hint": "点の二座標を代入する。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "x＋y＝4のグラフでx＝0のとき、yはいくつ？",
        "answer": 4,
        "explanation": "0＋y＝4よりy＝4。",
        "hint": "y軸との交点を求める。",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "x＝2のグラフは？",
        "options": [
          "y座標2を通る横の直線",
          "原点だけ",
          "x座標2を通る縦の直線"
        ],
        "answer": "x座標2を通る縦の直線",
        "explanation": "yはどの値でもよく、xだけ2で固定される。",
        "hint": "どちらの座標が固定されているか読む。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝3のグラフは？",
        "options": [
          "点(3,3)だけ",
          "y座標3を通る横の直線",
          "x座標3を通る縦の直線"
        ],
        "answer": "y座標3を通る横の直線",
        "explanation": "xはどの値でもよく、yだけ3で固定される。",
        "hint": "複数のxを入れて点を置く。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "x＝2の直線をyがxの関数のグラフとできない理由は？",
        "options": [
          "同じxに複数のyがあるから",
          "縦線は点をもたないから",
          "2が正だから"
        ],
        "answer": "同じxに複数のyがあるから",
        "explanation": "例えば(2,0)と(2,1)がともにあり、一入力一出力ではない。",
        "hint": "関数の定義へ戻る。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝3はyをxの関数といえる？",
        "options": [
          "いえない。xがないから",
          "必ず傾き3の一次関数である",
          "いえる。一定の関数である"
        ],
        "answer": "いえる。一定の関数である",
        "explanation": "各xへ出力3が一つ対応するので関数。ただし傾き0で一次関数とは区別する。",
        "hint": "一つの入力への出力数を数える。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "number",
        "prompt": "2x＋y＝5のグラフでx＝1ならyはいくつ？",
        "answer": 3,
        "explanation": "2＋y＝5なので3。",
        "hint": "式から対応する座標を求める。",
        "suffix": "",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "線を予想：y＝x−1を満たす点は？",
      "options": [
        "(2,1)",
        "(1,2)",
        "(2,3)"
      ],
      "answer": "(2,1)",
      "explanation": "x＝2に対しy＝2−1＝1。",
      "hint": "xとyの順序を確認する。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "方程式から点を置く",
      "prompt": "x＋y＝4を満たす点を使ってグラフを考えよう。",
      "steps": [
        {
          "text": "y＝4−xと表し、各xに対応するyを求められるようにする。"
        },
        {
          "text": "x＝0,1,4から(0,4),(1,3),(4,0)を得る。"
        },
        {
          "text": "これらの点を通る直線が、全ての数の範囲での解の組を表す。"
        },
        {
          "text": "例えば(2,2)も式を満たして直線上にある。点と解の対応を確かめる。"
        }
      ],
      "answer": "全数の範囲ではy＝−x＋4の直線",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "二元一次方程式のグラフは全てy＝ax＋bという一次関数になる。",
      "correction": "x＝2のような縦線はyをxの関数にできない。y＝3の横線は一定の関数で、一次関数のa≠0とは区別する。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "x＝2とy＝2のグラフが違う理由を、点の例で説明しよう。",
        "followUp": "どちらがyをxの関数として表せる？",
        "checkpoints": [
          "固定する座標を区別した。",
          "同じxに出力が一つかどうかを確かめた。"
        ],
        "sample": "x＝2は(2,0),(2,1)などが並ぶ縦線でyが一つに決まらない。y＝2はどのxにも出力2が一つだけある横線で、一定の関数になる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "二つの文字が全ての数をとるとき、二元一次方程式の解(x,y)を点にすると直線として表せる。x＝2の縦線ではyは一つに決まらず、yをxの関数にはできないよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "x＋y＝4の解(0,4),(1,3),(4,0)を座標にすると、一つの直線上に並ぶ。y＝−x＋4へ直せるので、一次関数としても読める。一方、x＝2はx座標だけが2の点全てだから縦の直線。y＝3はy座標が3の点全てなので横の直線。二つを混同しないようにしよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "x,yが数直線上の全ての数をとるとき、二元一次方程式ax＋by＝c（a,bは同時に0ではない）の解集合は直線となる。b≠0ならyについて表せるが、b＝0の縦線ではyはxの関数にならない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "ax＋by＝cでb≠0ならy＝−(a/b)x＋c/b。さらにa≠0なら一次関数であり、a＝0なら一定の関数となる。b＝0ならa≠0なのでx＝c/aという縦線で、同じxに多くのyが対応する。グラフ上の点は式を満たし、式を満たす組はグラフ上にある。描かれた窓の外の部分も、変域が全ての数なら直線として続く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の座標図でx＝2を満たす点を描く。(2,−1),(2,0),(2,3)は縦に並ぶ。y＝2なら(−1,2),(0,2),(3,2)が横に並び、別の線になる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材用の候補点からx＋y＝4を満たすものを選ぶ。(1,3)は合計4で選ばれ、(1,4)は合計5なので選ばれない。点の判定と方程式への代入は同じ確認。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "x＋y＝4をyについて表すと？ 正答：y＝−x＋4。 両辺からxを引くのでy＝4−x。 考える手がかり：移す操作を両辺への引き算で考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "x＋y＝4のグラフ上の点は？ 正答：(1,3)。 1＋3＝4で方程式を満たす。 考える手がかり：点の二座標を代入する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "x＋y＝4のグラフでx＝0のとき、yはいくつ？ 正答：4。 0＋y＝4よりy＝4。 考える手がかり：y軸との交点を求める。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "x＝2のグラフは？ 正答：x座標2を通る縦の直線。 yはどの値でもよく、xだけ2で固定される。 考える手がかり：どちらの座標が固定されているか読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "y＝3のグラフは？ 正答：y座標3を通る横の直線。 xはどの値でもよく、yだけ3で固定される。 考える手がかり：複数のxを入れて点を置く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "x＝2の直線をyがxの関数のグラフとできない理由は？ 正答：同じxに複数のyがあるから。 例えば(2,0)と(2,1)がともにあり、一入力一出力ではない。 考える手がかり：関数の定義へ戻る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "y＝3はyをxの関数といえる？ 正答：いえる。一定の関数である。 各xへ出力3が一つ対応するので関数。ただし傾き0で一次関数とは区別する。 考える手がかり：一つの入力への出力数を数える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "2x＋y＝5のグラフでx＝1ならyはいくつ？ 正答：3。 2＋y＝5なので3。 考える手がかり：式から対応する座標を求める。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "線を予想：y＝x−1を満たす点は？ 正答：(2,1)。 x＝2に対しy＝2−1＝1。 考える手がかり：xとyの順序を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "x＝2とy＝2のグラフが違う理由を、点の例で説明しよう。 どちらがyをxの関数として表せる？ x＝2は(2,0),(2,1)などが並ぶ縦線でyが一つに決まらない。y＝2はどのxにも出力2が一つだけある横線で、一定の関数になる。 確認項目：固定する座標を区別した。 / 同じxに出力が一つかどうかを確かめた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "x＋y＝4を満たす点を使ってグラフを考えよう。 y＝4−xと表し、各xに対応するyを求められるようにする。 x＝0,1,4から(0,4),(1,3),(4,0)を得る。 これらの点を通る直線が、全ての数の範囲での解の組を表す。 例えば(2,2)も式を満たして直線上にある。点と解の対応を確かめる。 結論：全数の範囲ではy＝−x＋4の直線",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「二元一次方程式のグラフは全てy＝ax＋bという一次関数になる。」は誤り。x＝2のような縦線はyをxの関数にできない。y＝3の横線は一定の関数で、一次関数のa≠0とは区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "x,yが数直線上の全ての数をとり、ax+by=cでa,bが同時に0ではないとき解集合は直線。b≠0ならy=−(a/b)x+c/b、a=0なら一定関数。b=0ならx=c/aの縦線でyはxの関数ではない。x=kは縦線、y=kは横線。 操作図の事実：y=x+k、x=k、y=k。x=kはyをxの関数にできない。二元一次方程式の直線として扱う。 使用する状態範囲：kind regular/vertical/horizontal; k−2..2。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223310000000",
    "grade": 8,
    "title": "連立方程式とグラフ",
    "domain": "C",
    "order": 18,
    "goal": "二直線の交点を連立方程式の共通の解として読み、解の個数を考える。",
    "coverageCodes": [
      "8350223310000000",
      "8350223311300000",
      "8350223312100000",
      "8350223121200000"
    ],
    "explanations": {
      "es": {
        "short": "全ての数の範囲で、二つの方程式のグラフの交点は両方を満たす(x,y)の組。平行で重ならなければ共通の解はなく、同じ直線なら共通の解が無数にあるよ。",
        "detail": "y＝x＋1とy＝−x＋5は(2,3)で交わる。この点を代入すると3＝2＋1、3＝−2＋5で両方が成立する。y＝x＋1とy＝x−1は傾きが同じで切片が違い、平行なので交わらない。2y＝2x＋2はy＝x＋1と同じ直線なので、二つを組にしても全数の範囲では共通の解は無数だよ。"
      },
      "js": {
        "short": "全ての数の範囲で、連立二元一次方程式の解は二直線の共通点の座標である。異なる傾きなら一交点、平行な別直線なら解なし、一致する直線なら無数の解となる。",
        "detail": "y＝x＋1とy＝−x＋5の共通点ではx＋1＝−x＋5なのでx＝2、y＝3。グラフは共通の解の意味や位置の見通しを与えるが、画面から読み取った近似値だけを厳密な解としない。座標を式で求め、両式へ代入して確認する。ここではx,yを数直線上の全ての数として考え、場面の変域があるときはその範囲に交点があるかも調べる。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "二つの線が重なる場所",
        "text": "架空の座標図でy＝x＋1とy＝−x＋5を同じ目盛りへ描く。交点(2,3)は、一方だけでなく両方の線上にある。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "同じ式かを整理する",
        "text": "教材用のy＝x＋1と2y＝2x＋2を比較する。後者の両辺を2で割ると前者になり、見かけが違っても同じ線を表す。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "y＝x＋1とy＝−x＋5の共通の解は？",
        "options": [
          "(x,y)＝(1,2)",
          "(x,y)＝(2,3)",
          "(x,y)＝(3,2)"
        ],
        "answer": "(x,y)＝(2,3)",
        "explanation": "x＋1＝−x＋5からx＝2、そのときy＝3。",
        "hint": "同じyになる条件を使う。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "x＋1＝−x＋5からxはいくつ？",
        "answer": 2,
        "explanation": "2x＝4となりx＝2。",
        "hint": "xの項を同じ側へ集める。",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "交点のx座標が2で、y＝x＋1ならy座標は？",
        "answer": 3,
        "explanation": "y＝2＋1＝3。",
        "hint": "求めた値を一方へ戻す。",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝x＋1とy＝x−1を全数の範囲で考えると、共通の解は？",
        "options": [
          "無数にある",
          "ない",
          "一組ある"
        ],
        "answer": "ない",
        "explanation": "同じxに対するyがいつも2違うため、二直線は交わらない。",
        "hint": "傾きと切片を比べる。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "y＝x＋1と2y＝2x＋2を全数の範囲で考えると、共通の解は？",
        "options": [
          "無数にある",
          "ない",
          "(0,1)だけ"
        ],
        "answer": "無数にある",
        "explanation": "二式は同じ関係を表し、直線が一致する。",
        "hint": "二つ目の両辺を2で割る。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "グラフの交点がだいたい(2,3)に見えた。厳密な解として確認するには？",
        "options": [
          "見た目だけで確定する",
          "座標をいつも整数に丸める",
          "式で座標を求め、元の両式へ代入する"
        ],
        "answer": "式で座標を求め、元の両式へ代入する",
        "explanation": "作図や画面の読み取りには近似があるので、式でも確認する。",
        "hint": "近似の観察と等式の成立を区別する。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "二直線が一点で交わるとき、その点の意味は？",
        "options": [
          "必ず原点",
          "両方の方程式を同時に満たす組",
          "一方だけを満たす数"
        ],
        "answer": "両方の方程式を同時に満たす組",
        "explanation": "各直線上の点は各式の解で、共通点は両式の解。",
        "hint": "図の共通部分を式の条件へ戻す。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "同じ傾きで切片が違う二つの一次関数のグラフは？",
        "options": [
          "平行な別の直線",
          "必ず同じ直線",
          "必ず原点で交わる"
        ],
        "answer": "平行な別の直線",
        "explanation": "増え方が同じで上下の差が一定なので、交点をもたない。",
        "hint": "差の式でxの項が消えることを考える。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "交点予想：y＝xとy＝−x＋4の交点は？",
      "options": [
        "(0,4)",
        "(4,0)",
        "(2,2)"
      ],
      "answer": "(2,2)",
      "explanation": "x＝−x＋4からx＝2、y＝2。",
      "hint": "二式のyが等しいところを探す。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "交点の意味を両式で確認する",
      "prompt": "y＝x＋1とy＝−x＋5の交点を求めよう。",
      "steps": [
        {
          "text": "共通点では二つのyが等しいのでx＋1＝−x＋5とする。"
        },
        {
          "text": "2x＝4からx＝2を求める。"
        },
        {
          "text": "y＝x＋1へ戻してy＝3を求める。"
        },
        {
          "text": "両式で3＝2＋1、3＝−2＋5となるため、交点は(2,3)。"
        }
      ],
      "answer": "交点は(2,3)、共通の解はx＝2,y＝3",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "グラフを二本描けば、必ず交点が一つできる。",
      "correction": "平行な別の直線は交わらず、同じ直線なら共通点が無数にある。式の関係と変域を確かめる。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "交点の座標が連立方程式の解になる理由を説明しよう。",
        "followUp": "二式が同じ直線なら、なぜ解が一つに決まらない？",
        "checkpoints": [
          "共通点は両方の式を満たすと説明した。",
          "全数の変域で一致する直線の無数の点を捉えた。"
        ],
        "sample": "直線上の各点はその式を満たすので、交点は両式を満たす。同じ直線なら、全数の範囲ではその上の無数の点が全て共通になる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "全ての数の範囲で、二つの方程式のグラフの交点は両方を満たす(x,y)の組。平行で重ならなければ共通の解はなく、同じ直線なら共通の解が無数にあるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "y＝x＋1とy＝−x＋5は(2,3)で交わる。この点を代入すると3＝2＋1、3＝−2＋5で両方が成立する。y＝x＋1とy＝x−1は傾きが同じで切片が違い、平行なので交わらない。2y＝2x＋2はy＝x＋1と同じ直線なので、二つを組にしても全数の範囲では共通の解は無数だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "全ての数の範囲で、連立二元一次方程式の解は二直線の共通点の座標である。異なる傾きなら一交点、平行な別直線なら解なし、一致する直線なら無数の解となる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "y＝x＋1とy＝−x＋5の共通点ではx＋1＝−x＋5なのでx＝2、y＝3。グラフは共通の解の意味や位置の見通しを与えるが、画面から読み取った近似値だけを厳密な解としない。座標を式で求め、両式へ代入して確認する。ここではx,yを数直線上の全ての数として考え、場面の変域があるときはその範囲に交点があるかも調べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の座標図でy＝x＋1とy＝−x＋5を同じ目盛りへ描く。交点(2,3)は、一方だけでなく両方の線上にある。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材用のy＝x＋1と2y＝2x＋2を比較する。後者の両辺を2で割ると前者になり、見かけが違っても同じ線を表す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "y＝x＋1とy＝−x＋5の共通の解は？ 正答：(x,y)＝(2,3)。 x＋1＝−x＋5からx＝2、そのときy＝3。 考える手がかり：同じyになる条件を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "x＋1＝−x＋5からxはいくつ？ 正答：2。 2x＝4となりx＝2。 考える手がかり：xの項を同じ側へ集める。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "交点のx座標が2で、y＝x＋1ならy座標は？ 正答：3。 y＝2＋1＝3。 考える手がかり：求めた値を一方へ戻す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "y＝x＋1とy＝x−1を全数の範囲で考えると、共通の解は？ 正答：ない。 同じxに対するyがいつも2違うため、二直線は交わらない。 考える手がかり：傾きと切片を比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "y＝x＋1と2y＝2x＋2を全数の範囲で考えると、共通の解は？ 正答：無数にある。 二式は同じ関係を表し、直線が一致する。 考える手がかり：二つ目の両辺を2で割る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "グラフの交点がだいたい(2,3)に見えた。厳密な解として確認するには？ 正答：式で座標を求め、元の両式へ代入する。 作図や画面の読み取りには近似があるので、式でも確認する。 考える手がかり：近似の観察と等式の成立を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "二直線が一点で交わるとき、その点の意味は？ 正答：両方の方程式を同時に満たす組。 各直線上の点は各式の解で、共通点は両式の解。 考える手がかり：図の共通部分を式の条件へ戻す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "同じ傾きで切片が違う二つの一次関数のグラフは？ 正答：平行な別の直線。 増え方が同じで上下の差が一定なので、交点をもたない。 考える手がかり：差の式でxの項が消えることを考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "交点予想：y＝xとy＝−x＋4の交点は？ 正答：(2,2)。 x＝−x＋4からx＝2、y＝2。 考える手がかり：二式のyが等しいところを探す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "交点の座標が連立方程式の解になる理由を説明しよう。 二式が同じ直線なら、なぜ解が一つに決まらない？ 直線上の各点はその式を満たすので、交点は両式を満たす。同じ直線なら、全数の範囲ではその上の無数の点が全て共通になる。 確認項目：共通点は両方の式を満たすと説明した。 / 全数の変域で一致する直線の無数の点を捉えた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "y＝x＋1とy＝−x＋5の交点を求めよう。 共通点では二つのyが等しいのでx＋1＝−x＋5とする。 2x＝4からx＝2を求める。 y＝x＋1へ戻してy＝3を求める。 両式で3＝2＋1、3＝−2＋5となるため、交点は(2,3)。 結論：交点は(2,3)、共通の解はx＝2,y＝3",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「グラフを二本描けば、必ず交点が一つできる。」は誤り。平行な別の直線は交わらず、同じ直線なら共通点が無数にある。式の関係と変域を確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "全数の範囲でy=x+1とy=−x+5の交点は(2,3)。y=x+1とy=x−1は平行で共通解なし。y=x+1と2y=2x+2は同じ直線で無数の共通解。グラフの近似読取を式への代入で確認する。 操作図の事実：y=x+1とy=−x+5は(2,3)。y=x+1とy=x−1は共通解なし。y=x+1と2y=2x+2は同一直線で無数。 使用する状態範囲：system intersect/parallel/same。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223312200000",
    "grade": 8,
    "title": "一次関数の活用",
    "domain": "C",
    "order": 19,
    "goal": "初めの量と一定の変化を式にし、変域の中で二つの関係を比べる。",
    "coverageCodes": [
      "8350223312200000",
      "8350223311200000",
      "8350222220000000",
      "8350222330000000",
      "8350223511000000"
    ],
    "explanations": {
      "es": {
        "short": "初めの量と、1増えるごとに変わる量を分けると一次関数で表せることがある。場面の範囲を守り、表・式・グラフを使って比べよう。",
        "detail": "架空の料金Aは基本200円に一個100円、Bは基本0円に一個150円。個数nは0以上の整数で、A＝100n＋200、B＝150n。4個なら両方600円、5個ならAが700円、Bが750円になる。基本料金だけ、または一個分だけを見て決めず、使う個数に応じた合計を比べるよ。"
      },
      "js": {
        "short": "一定の変化率と初期値を読み取って一次関数へ表し、複数の関係を共通の変域で比較する。モデルの前提と利用範囲を判断に添える。",
        "detail": "料金A＝100n＋200、B＝150nの差はA−B＝200−50n。n＝4で等しく、0≦n<4ならAの方が高く、n>4ならAの方が安い。この設定では個数nは整数なので、グラフの入力も整数の点として扱う。式を負のnへ延長して計算できても、実際の個数や料金として意味があるとは限らない。架空の単価が一定という条件の下で比較している。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "制作数に合う料金を比べる",
        "text": "架空の部品注文はAが基本200円＋一個100円、Bが一個150円。2個ならA400円、B300円、5個ならA700円、B750円。必要な制作数を入れて合計を比べる。",
        "activityIds": [
          "craft-accessory"
        ]
      },
      {
        "category": "programming",
        "title": "同じ入力で二つの出力を見る",
        "text": "練習用の入力nを0から5の整数にし、100n＋200と150nを同時に表示する。同じnで比較し、4のとき600で一致することを確かめる。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "基本200円と一個100円の架空料金Aを、個数nで表すと？",
        "options": [
          "A＝100n＋200",
          "A＝300n",
          "A＝200n＋100"
        ],
        "answer": "A＝100n＋200",
        "explanation": "繰り返す一個分100にnをかけ、基本200を一度足す。",
        "hint": "初期量と変化する量を分ける。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "料金A＝100n＋200でn＝4の合計は？",
        "answer": 600,
        "explanation": "100×4＋200＝600円。",
        "hint": "基本料金を一度だけ足す。",
        "suffix": "円",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "料金B＝150nでn＝4の合計は？",
        "answer": 600,
        "explanation": "150×4＝600円。",
        "hint": "同じ個数のAと比べる。",
        "suffix": "円",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "100n＋200＝150nとなる個数nはいくつ？",
        "answer": 4,
        "explanation": "200＝50nからn＝4。",
        "hint": "二料金が等しい条件を式にする。",
        "suffix": "個",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "A＝100n＋200、B＝150nでn＝5なら？",
        "options": [
          "Bが50円安い",
          "同じ料金",
          "Aが50円安い"
        ],
        "answer": "Aが50円安い",
        "explanation": "A700円、B750円なのでAが50円安い。",
        "hint": "両方の合計を出して比べる。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "個数nが0以上の整数という設定で、グラフはどう読む？",
        "options": [
          "線の間の全入力を個数として認める",
          "整数のnに対応する点を料金として読む",
          "負のnも実際の個数とする"
        ],
        "answer": "整数のnに対応する点を料金として読む",
        "explanation": "分けられない個数の範囲を守る。式だけで入力範囲を広げない。",
        "hint": "文字の意味と変域を見る。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "A＝100n＋200、B＝150n（nは0以上の整数）で、Aは基本料金があるから全ての個数でBより高いといえる？",
        "options": [
          "いえない。一個分の差も関係する",
          "必ずいえる",
          "基本料金を無視すればよい"
        ],
        "answer": "いえない。一個分の差も関係する",
        "explanation": "Aの一個分は100円でBの150円より小さく、個数が増えると逆転する。",
        "hint": "初期量だけでなく増え方を比べる。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "number",
        "prompt": "A＝100n＋200、B＝150nでn＝2のとき、A−Bはいくら？",
        "answer": 100,
        "explanation": "A400円、B300円なので差は100円。",
        "hint": "同じ入力を二式へ入れる。",
        "suffix": "円",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "料金を予想：A＝100n＋200、B＝150nでn＝3なら？",
      "options": [
        "同じ料金",
        "Bが50円安い",
        "Aが50円安い"
      ],
      "answer": "Bが50円安い",
      "explanation": "A500円、B450円なのでBが50円安い。",
      "hint": "交点の個数4より小さい場合を確かめる。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "二つの料金を使う範囲で比べる",
      "prompt": "架空料金A＝100n＋200、B＝150nを比べよう。nは0以上の整数。",
      "steps": [
        {
          "text": "式の100,150は一個あたり、200はAの基本料金と確認する。"
        },
        {
          "text": "等しい条件100n＋200＝150nからn＝4を求める。"
        },
        {
          "text": "n＝3ではA500,B450、n＝5ではA700,B750となり、前後で大小が変わる。"
        },
        {
          "text": "結論を整数の個数へ戻し、0〜3個はB、4個は同額、5個以上はAが安いとする。"
        }
      ],
      "answer": "4個で600円、前後で安い料金が変わる",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "一次関数の式を作れたので、負の入力や設定外の範囲でも実際の料金を表す。",
      "correction": "式として計算できる範囲と、場面で意味をもつ範囲は別。個数は0以上の整数で、単価が一定という設定の範囲で使う。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "料金比較で、基本料金と一個あたりの料金を両方見る理由を説明しよう。",
        "followUp": "自分の結論へ変域を添えるなら、どう書く？",
        "checkpoints": [
          "同じ個数で合計を比べた。",
          "個数の範囲と架空の料金条件を明示した。"
        ],
        "sample": "Aは最初200円高いが、一個あたりは50円安いので個数で逆転する。nは0以上の整数として、0〜3ならB、4なら同額、5以上ならAとする。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "初めの量と、1増えるごとに変わる量を分けると一次関数で表せることがある。場面の範囲を守り、表・式・グラフを使って比べよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "架空の料金Aは基本200円に一個100円、Bは基本0円に一個150円。個数nは0以上の整数で、A＝100n＋200、B＝150n。4個なら両方600円、5個ならAが700円、Bが750円になる。基本料金だけ、または一個分だけを見て決めず、使う個数に応じた合計を比べるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "一定の変化率と初期値を読み取って一次関数へ表し、複数の関係を共通の変域で比較する。モデルの前提と利用範囲を判断に添える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "料金A＝100n＋200、B＝150nの差はA−B＝200−50n。n＝4で等しく、0≦n<4ならAの方が高く、n>4ならAの方が安い。この設定では個数nは整数なので、グラフの入力も整数の点として扱う。式を負のnへ延長して計算できても、実際の個数や料金として意味があるとは限らない。架空の単価が一定という条件の下で比較している。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の部品注文はAが基本200円＋一個100円、Bが一個150円。2個ならA400円、B300円、5個ならA700円、B750円。必要な制作数を入れて合計を比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "練習用の入力nを0から5の整数にし、100n＋200と150nを同時に表示する。同じnで比較し、4のとき600で一致することを確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "基本200円と一個100円の架空料金Aを、個数nで表すと？ 正答：A＝100n＋200。 繰り返す一個分100にnをかけ、基本200を一度足す。 考える手がかり：初期量と変化する量を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "料金A＝100n＋200でn＝4の合計は？ 正答：600。 100×4＋200＝600円。 考える手がかり：基本料金を一度だけ足す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "料金B＝150nでn＝4の合計は？ 正答：600。 150×4＝600円。 考える手がかり：同じ個数のAと比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "100n＋200＝150nとなる個数nはいくつ？ 正答：4。 200＝50nからn＝4。 考える手がかり：二料金が等しい条件を式にする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "A＝100n＋200、B＝150nでn＝5なら？ 正答：Aが50円安い。 A700円、B750円なのでAが50円安い。 考える手がかり：両方の合計を出して比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "個数nが0以上の整数という設定で、グラフはどう読む？ 正答：整数のnに対応する点を料金として読む。 分けられない個数の範囲を守る。式だけで入力範囲を広げない。 考える手がかり：文字の意味と変域を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "A＝100n＋200、B＝150n（nは0以上の整数）で、Aは基本料金があるから全ての個数でBより高いといえる？ 正答：いえない。一個分の差も関係する。 Aの一個分は100円でBの150円より小さく、個数が増えると逆転する。 考える手がかり：初期量だけでなく増え方を比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "A＝100n＋200、B＝150nでn＝2のとき、A−Bはいくら？ 正答：100。 A400円、B300円なので差は100円。 考える手がかり：同じ入力を二式へ入れる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "料金を予想：A＝100n＋200、B＝150nでn＝3なら？ 正答：Bが50円安い。 A500円、B450円なのでBが50円安い。 考える手がかり：交点の個数4より小さい場合を確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "料金比較で、基本料金と一個あたりの料金を両方見る理由を説明しよう。 自分の結論へ変域を添えるなら、どう書く？ Aは最初200円高いが、一個あたりは50円安いので個数で逆転する。nは0以上の整数として、0〜3ならB、4なら同額、5以上ならAとする。 確認項目：同じ個数で合計を比べた。 / 個数の範囲と架空の料金条件を明示した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "架空料金A＝100n＋200、B＝150nを比べよう。nは0以上の整数。 式の100,150は一個あたり、200はAの基本料金と確認する。 等しい条件100n＋200＝150nからn＝4を求める。 n＝3ではA500,B450、n＝5ではA700,B750となり、前後で大小が変わる。 結論を整数の個数へ戻し、0〜3個はB、4個は同額、5個以上はAが安いとする。 結論：4個で600円、前後で安い料金が変わる",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「一次関数の式を作れたので、負の入力や設定外の範囲でも実際の料金を表す。」は誤り。式として計算できる範囲と、場面で意味をもつ範囲は別。個数は0以上の整数で、単価が一定という設定の範囲で使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "架空料金A=100n+200,B=150nでnは非負整数。差A−B=200−50n、n=4で共に600円、0..3ではBが安く、n≥5ではAが安い。設定外の負入力や連続入力を実料金としない。 操作図の事実：料金A=100n+200、B=150n。n4で600円。定義域非負整数、外へ延長して実料金としない。 使用する状態範囲：n0..5; plan A/B。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223231000000",
    "grade": 8,
    "title": "対頂角と角の関係",
    "domain": "B",
    "order": 20,
    "goal": "対頂角を位置関係から見分け、等しい理由を180°の角で説明する。",
    "coverageCodes": [
      "8350223231000000",
      "8350223210000000",
      "8350223211000000",
      "8350223211100000"
    ],
    "explanations": {
      "es": {
        "short": "二本の直線が交わるとき、向かい合う角を対頂角という。対頂角は等しい。隣り合う角を合わせると180°になることから理由を説明できるよ。",
        "detail": "二本の直線の交点にある一つの角が60°なら、隣の角は180−60＝120°。そのまた隣は180−120＝60°なので、最初の角と向かい合う角が等しくなる。対頂角は、頂点だけでなくそれぞれの辺が反対向きの半直線になっている角の組だよ。"
      },
      "js": {
        "short": "対頂角は二直線の交点で、各辺が互いに反対向きとなる二角である。同じ角を180°から引くことにより、対頂角の等しさが導ける。",
        "detail": "交わる二直線の周りの角を順にα,β,γ,δとする。α＋β＝180°、β＋γ＝180°なので、同じβを引いてα＝γ。β＝δも同様に示せる。見た目が向かい合うだけでなく、辺が同じ直線上に続く条件が必要である。隣接する角は一般には等しくなく、その和が180°になる。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "交差する直線の角を読む",
        "text": "架空の下絵で二直線を交差させ、一角を40°と決める。向かいの角は40°、両隣は140°。図を回しても、この関係は変わらない。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "craft",
        "title": "まっすぐな二本を重ねる",
        "text": "教材用にまっすぐな線を二本描く。交点の一角が80°なら隣は100°で、向かいは再び80°になる。線が折れていたら同じ根拠は使えない。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "対頂角の説明として正しいのは？",
        "options": [
          "頂点が同じならどんな二角でもよい",
          "隣り合う二角のこと",
          "二直線の交点で各辺が反対向きの二角"
        ],
        "answer": "二直線の交点で各辺が反対向きの二角",
        "explanation": "各辺が互いに同じ直線上で反対向きになる組。",
        "hint": "辺の続き方を確認する。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "二直線の交点の一角が60°。その対頂角は？",
        "answer": 60,
        "explanation": "対頂角は等しいので60°。",
        "hint": "向かい合う角の関係を使う。",
        "suffix": "°",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "二直線の交点の一角が60°。その隣の角は？",
        "answer": 120,
        "explanation": "同一直線上で合計180°になるので180−60＝120°。",
        "hint": "等しい角と和が180°の角を区別する。",
        "suffix": "°",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "二直線の交点の一角が110°。隣の角は？",
        "answer": 70,
        "explanation": "180−110＝70°。",
        "hint": "直線の角180°から引く。",
        "suffix": "°",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "対頂角が等しい理由として使えるのは？",
        "options": [
          "全ての角は同じだから",
          "どちらも同じ隣角を180°から引いた角だから",
          "図で同じ大きさに見えるからだけ"
        ],
        "answer": "どちらも同じ隣角を180°から引いた角だから",
        "explanation": "α＋β＝180°、γ＋β＝180°からα＝γが分かる。",
        "hint": "同じものを同じ数から引く関係を見る。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "二直線の交点の隣り合う角は、いつも等しい？",
        "options": [
          "いつもではない。和は180°",
          "いつも等しい",
          "和はいつも90°"
        ],
        "answer": "いつもではない。和は180°",
        "explanation": "例えば60°と120°は隣り合うが等しくない。直角の場合はどちらも90°。",
        "hint": "一つの例で「いつも」を確かめ直す。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "二つの角の頂点が同じというだけで、対頂角といえる？",
        "options": [
          "必ずいえる",
          "頂点が同じなら必ず90°",
          "いえない。辺の延長関係も必要"
        ],
        "answer": "いえない。辺の延長関係も必要",
        "explanation": "それぞれの辺が互いに反対向きの半直線になっている必要がある。",
        "hint": "頂点以外の条件を見る。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "number",
        "prompt": "交わる二直線の一角が80°なら、その対頂角と合わせて何度？",
        "answer": 160,
        "explanation": "対頂角も80°なので80＋80＝160°。",
        "hint": "和が180°になるのは隣り合う組。",
        "suffix": "°",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "角の予想：一角40°の二直線の交点を一周する四つの角は？",
      "options": [
        "40°,140°,40°,140°",
        "40°,40°,40°,40°",
        "40°,50°,40°,50°"
      ],
      "answer": "40°,140°,40°,140°",
      "explanation": "隣とは180°、向かいとは等しいという二関係を使う。",
      "hint": "一周の合計360°にも戻して確かめる。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "同じ隣角を引く",
      "prompt": "対頂角αとγが等しい理由を、隣の角βを使って説明しよう。",
      "steps": [
        {
          "text": "αとβは一つの直線の角を作るのでα＋β＝180°。"
        },
        {
          "text": "βとγも直線の角を作るのでβ＋γ＝180°。"
        },
        {
          "text": "どちらからも同じβを引き、α＝180°−β、γ＝180°−βとする。"
        },
        {
          "text": "同じ式で表されるためα＝γ。測定だけでなく理由で確かめられた。"
        }
      ],
      "answer": "対頂角αとγは等しい",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "交点にある二つの角は、隣り合っていても全て等しい。",
      "correction": "対頂角は等しいが、隣り合う角は和が180°になる。例えば60°の隣は120°で、等しくない。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "対頂角が等しい理由を、180°を使って説明しよう。",
        "followUp": "辺が途中で折れた図でも、その説明を同じように使える？",
        "checkpoints": [
          "同じ隣角を180°から引いた。",
          "辺が直線に続くという前提を確かめた。"
        ],
        "sample": "二つの対頂角はそれぞれ同じ隣角と合わせて180°になるので等しい。折れた線では直線の角180°という前提が使えず、そのままは説明できない。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "二本の直線が交わるとき、向かい合う角を対頂角という。対頂角は等しい。隣り合う角を合わせると180°になることから理由を説明できるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "二本の直線の交点にある一つの角が60°なら、隣の角は180−60＝120°。そのまた隣は180−120＝60°なので、最初の角と向かい合う角が等しくなる。対頂角は、頂点だけでなくそれぞれの辺が反対向きの半直線になっている角の組だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "対頂角は二直線の交点で、各辺が互いに反対向きとなる二角である。同じ角を180°から引くことにより、対頂角の等しさが導ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "交わる二直線の周りの角を順にα,β,γ,δとする。α＋β＝180°、β＋γ＝180°なので、同じβを引いてα＝γ。β＝δも同様に示せる。見た目が向かい合うだけでなく、辺が同じ直線上に続く条件が必要である。隣接する角は一般には等しくなく、その和が180°になる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の下絵で二直線を交差させ、一角を40°と決める。向かいの角は40°、両隣は140°。図を回しても、この関係は変わらない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材用にまっすぐな線を二本描く。交点の一角が80°なら隣は100°で、向かいは再び80°になる。線が折れていたら同じ根拠は使えない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "対頂角の説明として正しいのは？ 正答：二直線の交点で各辺が反対向きの二角。 各辺が互いに同じ直線上で反対向きになる組。 考える手がかり：辺の続き方を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "二直線の交点の一角が60°。その対頂角は？ 正答：60。 対頂角は等しいので60°。 考える手がかり：向かい合う角の関係を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "二直線の交点の一角が60°。その隣の角は？ 正答：120。 同一直線上で合計180°になるので180−60＝120°。 考える手がかり：等しい角と和が180°の角を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "二直線の交点の一角が110°。隣の角は？ 正答：70。 180−110＝70°。 考える手がかり：直線の角180°から引く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "対頂角が等しい理由として使えるのは？ 正答：どちらも同じ隣角を180°から引いた角だから。 α＋β＝180°、γ＋β＝180°からα＝γが分かる。 考える手がかり：同じものを同じ数から引く関係を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "二直線の交点の隣り合う角は、いつも等しい？ 正答：いつもではない。和は180°。 例えば60°と120°は隣り合うが等しくない。直角の場合はどちらも90°。 考える手がかり：一つの例で「いつも」を確かめ直す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "二つの角の頂点が同じというだけで、対頂角といえる？ 正答：いえない。辺の延長関係も必要。 それぞれの辺が互いに反対向きの半直線になっている必要がある。 考える手がかり：頂点以外の条件を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "交わる二直線の一角が80°なら、その対頂角と合わせて何度？ 正答：160。 対頂角も80°なので80＋80＝160°。 考える手がかり：和が180°になるのは隣り合う組。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "角の予想：一角40°の二直線の交点を一周する四つの角は？ 正答：40°,140°,40°,140°。 隣とは180°、向かいとは等しいという二関係を使う。 考える手がかり：一周の合計360°にも戻して確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "対頂角が等しい理由を、180°を使って説明しよう。 辺が途中で折れた図でも、その説明を同じように使える？ 二つの対頂角はそれぞれ同じ隣角と合わせて180°になるので等しい。折れた線では直線の角180°という前提が使えず、そのままは説明できない。 確認項目：同じ隣角を180°から引いた。 / 辺が直線に続くという前提を確かめた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "対頂角αとγが等しい理由を、隣の角βを使って説明しよう。 αとβは一つの直線の角を作るのでα＋β＝180°。 βとγも直線の角を作るのでβ＋γ＝180°。 どちらからも同じβを引き、α＝180°−β、γ＝180°−βとする。 同じ式で表されるためα＝γ。測定だけでなく理由で確かめられた。 結論：対頂角αとγは等しい",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「交点にある二つの角は、隣り合っていても全て等しい。」は誤り。対頂角は等しいが、隣り合う角は和が180°になる。例えば60°の隣は120°で、等しくない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "交わる二直線の対頂角は等しく、隣接角の和は180°。一角αに対し交点を巡る角はα,180−α,α,180−α。0<α<180で非退化の交差を扱う。 操作図の事実：交わる2直線。対頂角α、隣接角180−α。実円弧と線角度一致。 使用する状態範囲：angle40/60/80/110。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223211100000",
    "grade": 8,
    "title": "平行線・同位角・錯角",
    "domain": "B",
    "order": 21,
    "goal": "同位角・錯角の位置と平行線の性質を結び、逆の判断も説明する。",
    "coverageCodes": [
      "8350223211100000",
      "8350223210000000",
      "8350223211000000",
      "8350223212100000",
      "8350222110000000"
    ],
    "explanations": {
      "es": {
        "short": "二直線を一本の直線が横切るとき、同じ位置の同位角、内側で左右が反対の錯角に注目する。二直線が平行なら、それぞれの組の角は等しいよ。",
        "detail": "二本の平行線を一本の直線が横切ると、同位角は等しい。一つが60°なら同じ位置の角も60°。対頂角も等しいので、内側にある錯角の等しさへつなげられる。逆に、二直線を横切る直線で同位角や錯角の一組が等しいと分かれば、二直線は平行だと判断できる。"
      },
      "js": {
        "short": "平行な二直線の同位角・錯角は等しい。その逆として、同位角または錯角の一組が等しければ二直線は平行となる。位置関係と等しさの条件を分けて読む。",
        "detail": "同位角や錯角という名前は角の位置を表し、名前が付くだけで等しいわけではない。平行という仮定から角の等しさを導く場合と、角の等しさから平行を導く場合では、仮定と結論が逆になる。二本の平行線の内側で横切る直線の同じ側にある二角は、錯角とは異なり和が180°である。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "平行な線を見分ける",
        "text": "教材用の二直線を一本の直線で横切り、同位角がどちらも60°と分かった設定なら、二直線は平行といえる。見た目が似ているだけの図ではなく、角の条件を根拠にする。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "craft",
        "title": "平行な帯の斜め線",
        "text": "架空の平行な帯に一本の直線を斜めに引く。一方の交点の角が80°なら対応する同位角も80°。隣り合う角なら100°になり、選ぶ位置で関係が違う。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "二本の平行線を一本の直線が横切る。一方の同位角が60°なら、その組のもう一方は？",
        "answer": 60,
        "explanation": "平行線の同位角は等しい。",
        "hint": "平行という前提を確認する。",
        "suffix": "°",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "二本の平行線を一本の直線が横切る。一方の錯角が80°なら、その組のもう一方は？",
        "answer": 80,
        "explanation": "平行線の錯角は等しいので80°。",
        "hint": "内側で左右が反対の組を見る。",
        "suffix": "°",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "同位角という位置関係だけで、二角は必ず等しい？",
        "options": [
          "必ず等しい",
          "必ず和が90°",
          "等しいとは限らない"
        ],
        "answer": "等しいとは限らない",
        "explanation": "等しさには平行という条件などが必要。名前は位置を表す。",
        "hint": "位置の名前と数値の条件を分ける。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "二直線を一本の直線が横切り、同位角の一組が等しい。この二直線は？",
        "options": [
          "何も分からない",
          "平行である",
          "必ず垂直である"
        ],
        "answer": "平行である",
        "explanation": "同位角が等しいという条件から、平行線の性質の逆を使える。",
        "hint": "角から線の関係へ考える。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "二直線を一本の直線が横切り、錯角の一組が等しい。この二直線は？",
        "options": [
          "平行である",
          "必ず同じ直線である",
          "必ず交わる"
        ],
        "answer": "平行である",
        "explanation": "錯角が等しいという条件は二直線が平行であることを示す。",
        "hint": "性質を逆向きに使う。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "二本の平行線の内側で、横切る直線の同じ側の二角の一方が60°。他方は？",
        "answer": 120,
        "explanation": "この二角の和は180°なので120°。錯角とは位置が異なる。",
        "hint": "同じ側か反対側か確かめる。",
        "suffix": "°",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "「二直線は平行だから錯角が等しい」の仮定は？",
        "options": [
          "二直線が垂直である",
          "二直線が平行である",
          "錯角が等しい"
        ],
        "answer": "二直線が平行である",
        "explanation": "平行が与えられた条件で、角の等しさが結論。",
        "hint": "どちらを根拠にどちらを言っているか読む。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "「錯角が等しいから二直線は平行」の結論は？",
        "options": [
          "二直線が平行である",
          "錯角が等しい",
          "角は全て同じである"
        ],
        "answer": "二直線が平行である",
        "explanation": "角の等しさを根拠に、平行を導いている。",
        "hint": "理由の後に言えることを探す。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "平行を予想：一本の直線が横切る二直線の同位角が40°と50°なら？",
      "options": [
        "平行である",
        "同位角はどちらも90°になる",
        "その二直線は平行でない"
      ],
      "answer": "その二直線は平行でない",
      "explanation": "平行なら同位角は等しいはずなので、違う角度の二直線は平行でない。",
      "hint": "平行の場合に必ず成り立つことと比べる。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "平行の条件から角へ進む",
      "prompt": "水平な二本の平行線を斜めの直線が横切る。上の交点の右上の外側の角が60°。同位角と錯角を説明しよう。",
      "steps": [
        {
          "text": "二本の水平線が平行で、上の交点の右上にある外側の角が60°という条件を確認する。"
        },
        {
          "text": "下の交点の右上にある内側の角は同位角なので60°。"
        },
        {
          "text": "上の交点の左下にある内側の角は、最初の角の対頂角なので60°。"
        },
        {
          "text": "この二つの内側の角は横切る直線の反対側にあり、錯角の組。両方60°で等しい。"
        }
      ],
      "answer": "同位角も錯角も対応する組は60°",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "同位角と呼ばれる二角は、線が平行でなくても必ず等しい。",
      "correction": "同位角は位置の名前。平行という前提があると等しくなり、逆に等しいと分かれば二直線の平行を判断できる。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "「平行だから角が等しい」と「角が等しいから平行」は、何が入れ替わる？",
        "followUp": "角の位置を確かめずに、等しい二角だけ探してよい？",
        "checkpoints": [
          "仮定と結論が逆になると説明した。",
          "同位角や錯角の位置関係を確認した。"
        ],
        "sample": "前者は平行が仮定、等しさが結論。後者は等しさが仮定、平行が結論。同位角や錯角の正しい組であることを先に確かめる必要がある。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "二直線を一本の直線が横切るとき、同じ位置の同位角、内側で左右が反対の錯角に注目する。二直線が平行なら、それぞれの組の角は等しいよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "二本の平行線を一本の直線が横切ると、同位角は等しい。一つが60°なら同じ位置の角も60°。対頂角も等しいので、内側にある錯角の等しさへつなげられる。逆に、二直線を横切る直線で同位角や錯角の一組が等しいと分かれば、二直線は平行だと判断できる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "平行な二直線の同位角・錯角は等しい。その逆として、同位角または錯角の一組が等しければ二直線は平行となる。位置関係と等しさの条件を分けて読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "同位角や錯角という名前は角の位置を表し、名前が付くだけで等しいわけではない。平行という仮定から角の等しさを導く場合と、角の等しさから平行を導く場合では、仮定と結論が逆になる。二本の平行線の内側で横切る直線の同じ側にある二角は、錯角とは異なり和が180°である。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材用の二直線を一本の直線で横切り、同位角がどちらも60°と分かった設定なら、二直線は平行といえる。見た目が似ているだけの図ではなく、角の条件を根拠にする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の平行な帯に一本の直線を斜めに引く。一方の交点の角が80°なら対応する同位角も80°。隣り合う角なら100°になり、選ぶ位置で関係が違う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "二本の平行線を一本の直線が横切る。一方の同位角が60°なら、その組のもう一方は？ 正答：60。 平行線の同位角は等しい。 考える手がかり：平行という前提を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "二本の平行線を一本の直線が横切る。一方の錯角が80°なら、その組のもう一方は？ 正答：80。 平行線の錯角は等しいので80°。 考える手がかり：内側で左右が反対の組を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "同位角という位置関係だけで、二角は必ず等しい？ 正答：等しいとは限らない。 等しさには平行という条件などが必要。名前は位置を表す。 考える手がかり：位置の名前と数値の条件を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "二直線を一本の直線が横切り、同位角の一組が等しい。この二直線は？ 正答：平行である。 同位角が等しいという条件から、平行線の性質の逆を使える。 考える手がかり：角から線の関係へ考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "二直線を一本の直線が横切り、錯角の一組が等しい。この二直線は？ 正答：平行である。 錯角が等しいという条件は二直線が平行であることを示す。 考える手がかり：性質を逆向きに使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "二本の平行線の内側で、横切る直線の同じ側の二角の一方が60°。他方は？ 正答：120。 この二角の和は180°なので120°。錯角とは位置が異なる。 考える手がかり：同じ側か反対側か確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "「二直線は平行だから錯角が等しい」の仮定は？ 正答：二直線が平行である。 平行が与えられた条件で、角の等しさが結論。 考える手がかり：どちらを根拠にどちらを言っているか読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "「錯角が等しいから二直線は平行」の結論は？ 正答：二直線が平行である。 角の等しさを根拠に、平行を導いている。 考える手がかり：理由の後に言えることを探す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "平行を予想：一本の直線が横切る二直線の同位角が40°と50°なら？ 正答：その二直線は平行でない。 平行なら同位角は等しいはずなので、違う角度の二直線は平行でない。 考える手がかり：平行の場合に必ず成り立つことと比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "「平行だから角が等しい」と「角が等しいから平行」は、何が入れ替わる？ 角の位置を確かめずに、等しい二角だけ探してよい？ 前者は平行が仮定、等しさが結論。後者は等しさが仮定、平行が結論。同位角や錯角の正しい組であることを先に確かめる必要がある。 確認項目：仮定と結論が逆になると説明した。 / 同位角や錯角の位置関係を確認した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "水平な二本の平行線を斜めの直線が横切る。上の交点の右上の外側の角が60°。同位角と錯角を説明しよう。 二本の水平線が平行で、上の交点の右上にある外側の角が60°という条件を確認する。 下の交点の右上にある内側の角は同位角なので60°。 上の交点の左下にある内側の角は、最初の角の対頂角なので60°。 この二つの内側の角は横切る直線の反対側にあり、錯角の組。両方60°で等しい。 結論：同位角も錯角も対応する組は60°",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「同位角と呼ばれる二角は、線が平行でなくても必ず等しい。」は誤り。同位角は位置の名前。平行という前提があると等しくなり、逆に等しいと分かれば二直線の平行を判断できる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "二直線を一本の直線が横切るとき、平行なら同位角・錯角が等しい。その逆も成立する。位置の名称だけでは等しさは保証されない。平行線の内側で横切る直線の同じ側の二角は和180°。 操作図の事実：2直線は平行を仮定。同位角または錯角α。実交点・円弧を示し、見た目だけの一般化なし。 使用する状態範囲：angle40/60/80; pair corresponding/alternate。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "motion",
        "text": "水平な二本の直線は平行と仮定し、一本の斜線が横切る。上交点の右上の外側の角60°に対し、下交点右上の内側の同位角も60°。上交点左下の内側の角は最初の角の対頂角なので60°。この二つの内側の角は横切る線の反対側にある錯角の組で、互いに等しい。図の角度と円弧表示を保ち、見た目だけを一般の証明としない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223211200000",
    "grade": 8,
    "title": "多角形の内角と外角",
    "domain": "B",
    "order": 22,
    "goal": "凸多角形の内角・外角を定義し、角の和を分割と一周から説明する。",
    "coverageCodes": [
      "8350223211200000",
      "8350223210000000",
      "8350223211000000",
      "8350223232000000",
      "8350223233000000"
    ],
    "explanations": {
      "es": {
        "short": "多角形の内側の角を内角、辺を延ばして隣にできる角を外角という。凸n角形の内角の和は180(n−2)°、各頂点で同じ向きに取る外角の和は360°だよ。",
        "detail": "凸五角形で一つの頂点から内側へ対角線を引くと、三つの三角形に分けられる。内角の和は180×3＝540°。凸n角形では三角形がn−2個になる。一つの内角とその隣の外角は合わせて180°で、全ての頂点の外角を同じ向きに取ると一周分の360°になる。"
      },
      "js": {
        "short": "凸n角形（整数n≥3）の内角和は180(n−2)°。各頂点の辺の延長でできる外角を同一の回転方向に一つずつ取ると、その和は360°となる。",
        "detail": "内角は隣り合う二辺の作る内側の角、外角は一方の辺を延長して内角に隣接させた角。凸n角形を一頂点からn−2個の三角形へ分けると内角和が分かる。外角和は180n−180(n−2)＝360°。一般の凸多角形では各内角は等しいとは限らないが、正n角形なら一内角は180(n−2)/n°、一外角は360/n°である。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "頂点から三角形へ分ける",
        "text": "架空の凸六角形に、一頂点から内側の対角線を引くと四つの三角形になる。内角和は4×180＝720°。正六角形でなくても凸ならこの和は同じ。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "一周の向きを積み重ねる",
        "text": "教材の正六角形の辺を同じ向きにたどる。各頂点で進む向きを60°変え、6回で360°となる。内角120°と外角60°を区別して表示する。",
        "activityIds": [
          "prog-scratch"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "凸五角形を一頂点から対角線で分けると、三角形は何個？",
        "answer": 3,
        "explanation": "n−2＝5−2＝3個。",
        "hint": "頂点の数から2を引く。",
        "suffix": "個",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "凸五角形の内角の和は？",
        "answer": 540,
        "explanation": "180×(5−2)＝540°。",
        "hint": "分けた三角形の角の和を足す。",
        "suffix": "°",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "凸八角形の内角の和は？",
        "answer": 1080,
        "explanation": "180×(8−2)＝1080°。",
        "hint": "n＝8を式へ入れる。",
        "suffix": "°",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "凸多角形で各頂点の外角を同じ向きに一つずつ取った和は？",
        "answer": 360,
        "explanation": "辺を一周すると向きが一回転するので360°。",
        "hint": "内角の和と区別する。",
        "suffix": "°",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "一つの内角が120°なら、その隣の外角は？",
        "answer": 60,
        "explanation": "二角で直線の角180°なので180−120＝60°。",
        "hint": "内角と隣の外角は補い合う。",
        "suffix": "°",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "正六角形の一つの外角は？",
        "answer": 60,
        "explanation": "外角は等しく6個あるので360÷6＝60°。",
        "hint": "和と一つの角を分ける。",
        "suffix": "°",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "凸五角形の内角は一つずつ必ず108°？",
        "options": [
          "正五角形とは限らないので、必ずではない",
          "どんな五角形も必ず108°",
          "内角の和も決まらない"
        ],
        "answer": "正五角形とは限らないので、必ずではない",
        "explanation": "内角和540°は共通だが、五つが等しいのは正五角形など等角の条件がある場合。",
        "hint": "合計が同じことと各値が同じことを分ける。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "外角和360°を考えるときの取り方は？",
        "options": [
          "一頂点で二つずつ取る",
          "内角と外角を交互に取る",
          "各頂点で同じ回転方向に一つずつ"
        ],
        "answer": "各頂点で同じ回転方向に一つずつ",
        "explanation": "一周する向きの変化を一貫して数える必要がある。",
        "hint": "数える角を統一する。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "角の和を予想：凸六角形から凸七角形になると内角和は？",
      "options": [
        "変わらない",
        "180°増える",
        "360°増える"
      ],
      "answer": "180°増える",
      "explanation": "180(n−2)でnが1増えると、三角形一つ分180°増える。",
      "hint": "分割される三角形の個数を見る。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "分割から内角和を出す",
      "prompt": "凸五角形の内角和を求めよう。",
      "steps": [
        {
          "text": "一つの頂点から、隣でない頂点へ図形の内側に対角線を引く。"
        },
        {
          "text": "五角形は重なりなく三つの三角形へ分かれる。"
        },
        {
          "text": "三角形それぞれの内角和180°を足す。"
        },
        {
          "text": "180×3＝540°。元の五つの内角が分割した角の合計になっていると確かめる。"
        }
      ],
      "answer": "内角和は540°",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "内角の和を頂点の数で割れば、どんな多角形でも各内角が分かる。",
      "correction": "それで分かるのは内角の平均。各内角が等しいという条件がなければ、個々の内角は決まらない。正多角形なら等しいので割って求められる。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "凸n角形の内角和で、n−2が表すものを説明しよう。",
        "followUp": "外角和がnにかかわらず360°なのはどう考えられる？",
        "checkpoints": [
          "一頂点から分けた三角形の個数を示した。",
          "同じ向きに一周する外角を説明した。"
        ],
        "sample": "n−2は内側の対角線で分けた三角形の個数。外角は各頂点で進む向きを変える角で、同じ向きに一周すれば一回転360°となる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "多角形の内側の角を内角、辺を延ばして隣にできる角を外角という。凸n角形の内角の和は180(n−2)°、各頂点で同じ向きに取る外角の和は360°だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "凸五角形で一つの頂点から内側へ対角線を引くと、三つの三角形に分けられる。内角の和は180×3＝540°。凸n角形では三角形がn−2個になる。一つの内角とその隣の外角は合わせて180°で、全ての頂点の外角を同じ向きに取ると一周分の360°になる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "凸n角形（整数n≥3）の内角和は180(n−2)°。各頂点の辺の延長でできる外角を同一の回転方向に一つずつ取ると、その和は360°となる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "内角は隣り合う二辺の作る内側の角、外角は一方の辺を延長して内角に隣接させた角。凸n角形を一頂点からn−2個の三角形へ分けると内角和が分かる。外角和は180n−180(n−2)＝360°。一般の凸多角形では各内角は等しいとは限らないが、正n角形なら一内角は180(n−2)/n°、一外角は360/n°である。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の凸六角形に、一頂点から内側の対角線を引くと四つの三角形になる。内角和は4×180＝720°。正六角形でなくても凸ならこの和は同じ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材の正六角形の辺を同じ向きにたどる。各頂点で進む向きを60°変え、6回で360°となる。内角120°と外角60°を区別して表示する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "凸五角形を一頂点から対角線で分けると、三角形は何個？ 正答：3。 n−2＝5−2＝3個。 考える手がかり：頂点の数から2を引く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "凸五角形の内角の和は？ 正答：540。 180×(5−2)＝540°。 考える手がかり：分けた三角形の角の和を足す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "凸八角形の内角の和は？ 正答：1080。 180×(8−2)＝1080°。 考える手がかり：n＝8を式へ入れる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "凸多角形で各頂点の外角を同じ向きに一つずつ取った和は？ 正答：360。 辺を一周すると向きが一回転するので360°。 考える手がかり：内角の和と区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "一つの内角が120°なら、その隣の外角は？ 正答：60。 二角で直線の角180°なので180−120＝60°。 考える手がかり：内角と隣の外角は補い合う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "正六角形の一つの外角は？ 正答：60。 外角は等しく6個あるので360÷6＝60°。 考える手がかり：和と一つの角を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "凸五角形の内角は一つずつ必ず108°？ 正答：正五角形とは限らないので、必ずではない。 内角和540°は共通だが、五つが等しいのは正五角形など等角の条件がある場合。 考える手がかり：合計が同じことと各値が同じことを分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "外角和360°を考えるときの取り方は？ 正答：各頂点で同じ回転方向に一つずつ。 一周する向きの変化を一貫して数える必要がある。 考える手がかり：数える角を統一する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "角の和を予想：凸六角形から凸七角形になると内角和は？ 正答：180°増える。 180(n−2)でnが1増えると、三角形一つ分180°増える。 考える手がかり：分割される三角形の個数を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "凸n角形の内角和で、n−2が表すものを説明しよう。 外角和がnにかかわらず360°なのはどう考えられる？ n−2は内側の対角線で分けた三角形の個数。外角は各頂点で進む向きを変える角で、同じ向きに一周すれば一回転360°となる。 確認項目：一頂点から分けた三角形の個数を示した。 / 同じ向きに一周する外角を説明した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "凸五角形の内角和を求めよう。 一つの頂点から、隣でない頂点へ図形の内側に対角線を引く。 五角形は重なりなく三つの三角形へ分かれる。 三角形それぞれの内角和180°を足す。 180×3＝540°。元の五つの内角が分割した角の合計になっていると確かめる。 結論：内角和は540°",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「内角の和を頂点の数で割れば、どんな多角形でも各内角が分かる。」は誤り。それで分かるのは内角の平均。各内角が等しいという条件がなければ、個々の内角は決まらない。正多角形なら等しいので割って求められる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "凸n角形n≥3の内角和は180(n−2)°。一頂点から内部対角線でn−2三角形へ分割できる。各頂点の一外角を同方向に取る和は360°、内角と隣の外角の和180°。正n角形の一外角360/n°、一内角180(n−2)/n°。 操作図の事実：凸正n角形。内角和(n−2)180、外角和360。1外角360/nを厳密有理数表示。 使用する状態範囲：n3..8; view interior/exterior。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223212100000",
    "grade": 8,
    "title": "角の性質を説明する",
    "domain": "B",
    "order": 23,
    "goal": "補助線と既に分かっている角の性質をつなぎ、根拠を示して説明する。",
    "coverageCodes": [
      "8350223212100000",
      "8350223210000000",
      "8350223212000000",
      "8350222220000000",
      "8350223512000000"
    ],
    "explanations": {
      "es": {
        "short": "角の性質を説明するときは、平行線などの補助線で、既に知っている性質につなげよう。図で測っただけでなく、どの角がなぜ等しいかを伝えるよ。",
        "detail": "三角形ABCの頂点Aを通り、底辺BCに平行な直線を引く。Bの角とCの角を、錯角の関係でAのそばへ移して考えられる。Aの角と合わせた三つは一本の直線の角になるから、和は180°。頂点の位置を変えても、平行という条件と角の関係を使うので同じ理由が成り立つ。"
      },
      "js": {
        "short": "補助線により図形の角を平行線の同位角・錯角や直線の角へ関連付ける。仮定、既知の性質、導く結論を区別して論理を組み立てる。",
        "detail": "非退化な三角形ABCでAを通るBCの平行線を引く。ABとACを横切る直線として見ると、B,Cの内角に等しい錯角がAにできる。これら二角と∠Aは一直線上に並ぶため、∠A＋∠B＋∠C＝180°。内角和を示す場面で最初から内角和180°を根拠に使うのは循環する。結論とは別の既知の性質からつなぐ。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "補助線を一本足す",
        "text": "架空の三角形の頂点から底辺と平行な線を引く。離れていた二つの角が、錯角として頂点のそばへそろう。線を増やす目的を「使える性質を見つけること」として考える。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "根拠の順を確かめる",
        "text": "教材用の説明カードを、平行線を引く→錯角を対応させる→直線の角180°へまとめる、と並べる。まだ示していない結論を途中の根拠へ入れない。",
        "activityIds": [
          "prog-scratch"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "三角形の頂点Aを通る補助線を、底辺BCと平行にする主な目的は？",
        "options": [
          "三角形を正三角形に変えるため",
          "辺の長さを全て等しくするため",
          "平行線の錯角の性質を使うため"
        ],
        "answer": "平行線の錯角の性質を使うため",
        "explanation": "B,Cの角と等しい角をAの近くへ対応させられる。",
        "hint": "使いたい既知の性質を考える。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "三角形ABCで、Aを通る直線がBCと平行なら、Bの内角と対応するAのそばの角が等しい根拠は？",
        "options": [
          "三角形が必ず二等辺であること",
          "平行線の錯角が等しいこと",
          "図が大きく見えること"
        ],
        "answer": "平行線の錯角が等しいこと",
        "explanation": "ABが平行線を横切る線となり、錯角の関係を使える。",
        "hint": "どの直線が平行で、何が横切るかを見る。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "三角形の二内角が50°と60°のとき、残りは？",
        "answer": 70,
        "explanation": "内角和180°から50＋60を引き、70°。",
        "hint": "三つの角の和へ戻す。",
        "suffix": "°",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "直角三角形の一つの鋭角が35°のとき、もう一つの鋭角は？",
        "answer": 55,
        "explanation": "180−90−35＝55°。",
        "hint": "直角90°も三角形の内角に含める。",
        "suffix": "°",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "「三角形の内角和は180°」を示すとき、そのまま同じ事実を根拠に使ってよい？",
        "options": [
          "どんな結論にも同じ結論を使える",
          "それでは説明が循環する",
          "それだけで十分"
        ],
        "answer": "それでは説明が循環する",
        "explanation": "示したい結論とは別の、既に分かっている性質から導く必要がある。",
        "hint": "根拠が結論を先取りしていないか見る。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "三つの三角形を測って全て約180°だった。そこから直ちにいえるのは？",
        "options": [
          "測った三つでは約180°と確認できた",
          "全ての三角形を厳密に証明した",
          "測定値はいつも誤差0である"
        ],
        "answer": "測った三つでは約180°と確認できた",
        "explanation": "測定は予想や確認に役立つが、任意の場合の論理的説明とは区別する。",
        "hint": "確かめた対象の範囲を見る。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "number",
        "prompt": "三角形の二角が40°と70°なら、残りは？",
        "answer": 70,
        "explanation": "180−40−70＝70°。",
        "hint": "内角の合計を使う。",
        "suffix": "°",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "order",
        "prompt": "平行線を使う内角和の説明を並べよう。",
        "items": [
          "一直線の角180°へまとめる",
          "頂点から底辺の平行線を引く",
          "錯角の等しさを対応させる"
        ],
        "answer": [
          "頂点から底辺の平行線を引く",
          "錯角の等しさを対応させる",
          "一直線の角180°へまとめる"
        ],
        "explanation": "補助線で性質を使える形にし、等しい角を集めて結論へ進む。",
        "hint": "後の説明に必要な条件を先に準備する。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "説明を予想：三角形の形を少し変えても、内角和180°の説明が使える理由は？",
      "options": [
        "頂点を通る底辺の平行線と錯角の関係を同じように作れるから",
        "全ての三角形が合同だから",
        "全ての内角が60°だから"
      ],
      "answer": "頂点を通る底辺の平行線と錯角の関係を同じように作れるから",
      "explanation": "非退化の三角形なら同じ補助線と既知の性質で説明できる。",
      "hint": "形の見た目に依存しない根拠を探す。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "三つの角を一直線へそろえる",
      "prompt": "三角形ABCの内角和が180°になる理由を説明しよう。",
      "steps": [
        {
          "text": "Aを通りBCに平行な直線を引く。三点は一直線上でないとする。"
        },
        {
          "text": "Bの内角に等しい錯角が、平行線とABの間にできる。"
        },
        {
          "text": "Cの内角に等しい錯角が、平行線とACの間にできる。"
        },
        {
          "text": "この二角と∠Aは一直線の角180°を作るので、三角形の内角和も180°。"
        }
      ],
      "answer": "∠A＋∠B＋∠C＝180°",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "図で角が同じに見えるなら、平行や錯角の条件を書かなくてよい。",
      "correction": "図の見た目だけでは理由にならない。どの線が平行で、どの角が錯角として等しいかを明示する。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "補助線を引く前と後で、使えるようになった性質は何？",
        "followUp": "自分の説明で、結論を先に根拠として使っていないか確かめよう。",
        "checkpoints": [
          "補助線と平行の条件を示した。",
          "錯角、直線の角、結論を順につないだ。"
        ],
        "sample": "頂点を通る底辺の平行線を引くと、B,Cの内角と等しい錯角がAへ集まる。直線の角180°へまとめて結論を出し、内角和自体を途中の根拠には使わない。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "角の性質を説明するときは、平行線などの補助線で、既に知っている性質につなげよう。図で測っただけでなく、どの角がなぜ等しいかを伝えるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "三角形ABCの頂点Aを通り、底辺BCに平行な直線を引く。Bの角とCの角を、錯角の関係でAのそばへ移して考えられる。Aの角と合わせた三つは一本の直線の角になるから、和は180°。頂点の位置を変えても、平行という条件と角の関係を使うので同じ理由が成り立つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "補助線により図形の角を平行線の同位角・錯角や直線の角へ関連付ける。仮定、既知の性質、導く結論を区別して論理を組み立てる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "非退化な三角形ABCでAを通るBCの平行線を引く。ABとACを横切る直線として見ると、B,Cの内角に等しい錯角がAにできる。これら二角と∠Aは一直線上に並ぶため、∠A＋∠B＋∠C＝180°。内角和を示す場面で最初から内角和180°を根拠に使うのは循環する。結論とは別の既知の性質からつなぐ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の三角形の頂点から底辺と平行な線を引く。離れていた二つの角が、錯角として頂点のそばへそろう。線を増やす目的を「使える性質を見つけること」として考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材用の説明カードを、平行線を引く→錯角を対応させる→直線の角180°へまとめる、と並べる。まだ示していない結論を途中の根拠へ入れない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "三角形の頂点Aを通る補助線を、底辺BCと平行にする主な目的は？ 正答：平行線の錯角の性質を使うため。 B,Cの角と等しい角をAの近くへ対応させられる。 考える手がかり：使いたい既知の性質を考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "三角形ABCで、Aを通る直線がBCと平行なら、Bの内角と対応するAのそばの角が等しい根拠は？ 正答：平行線の錯角が等しいこと。 ABが平行線を横切る線となり、錯角の関係を使える。 考える手がかり：どの直線が平行で、何が横切るかを見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "三角形の二内角が50°と60°のとき、残りは？ 正答：70。 内角和180°から50＋60を引き、70°。 考える手がかり：三つの角の和へ戻す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "直角三角形の一つの鋭角が35°のとき、もう一つの鋭角は？ 正答：55。 180−90−35＝55°。 考える手がかり：直角90°も三角形の内角に含める。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "「三角形の内角和は180°」を示すとき、そのまま同じ事実を根拠に使ってよい？ 正答：それでは説明が循環する。 示したい結論とは別の、既に分かっている性質から導く必要がある。 考える手がかり：根拠が結論を先取りしていないか見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "三つの三角形を測って全て約180°だった。そこから直ちにいえるのは？ 正答：測った三つでは約180°と確認できた。 測定は予想や確認に役立つが、任意の場合の論理的説明とは区別する。 考える手がかり：確かめた対象の範囲を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "三角形の二角が40°と70°なら、残りは？ 正答：70。 180−40−70＝70°。 考える手がかり：内角の合計を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "平行線を使う内角和の説明を並べよう。 正答：頂点から底辺の平行線を引く → 錯角の等しさを対応させる → 一直線の角180°へまとめる。 補助線で性質を使える形にし、等しい角を集めて結論へ進む。 考える手がかり：後の説明に必要な条件を先に準備する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "説明を予想：三角形の形を少し変えても、内角和180°の説明が使える理由は？ 正答：頂点を通る底辺の平行線と錯角の関係を同じように作れるから。 非退化の三角形なら同じ補助線と既知の性質で説明できる。 考える手がかり：形の見た目に依存しない根拠を探す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "補助線を引く前と後で、使えるようになった性質は何？ 自分の説明で、結論を先に根拠として使っていないか確かめよう。 頂点を通る底辺の平行線を引くと、B,Cの内角と等しい錯角がAへ集まる。直線の角180°へまとめて結論を出し、内角和自体を途中の根拠には使わない。 確認項目：補助線と平行の条件を示した。 / 錯角、直線の角、結論を順につないだ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "三角形ABCの内角和が180°になる理由を説明しよう。 Aを通りBCに平行な直線を引く。三点は一直線上でないとする。 Bの内角に等しい錯角が、平行線とABの間にできる。 Cの内角に等しい錯角が、平行線とACの間にできる。 この二角と∠Aは一直線の角180°を作るので、三角形の内角和も180°。 結論：∠A＋∠B＋∠C＝180°",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「図で角が同じに見えるなら、平行や錯角の条件を書かなくてよい。」は誤り。図の見た目だけでは理由にならない。どの線が平行で、どの角が錯角として等しいかを明示する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "非退化三角形の頂点を通る対辺の平行線により、他二頂点の内角を錯角として対応させられる。三角形の内角和は直線の角180°から導ける。角a,bに対し残り180−a−bで、各角>0が必要。測定例と一般の論証を区別する。 操作図の事実：底角a,bの三角形を実作図。残り180−a−b。平行な補助線と角の根拠。 使用する状態範囲：a40/50/60; b50/60/70。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223221100000",
    "grade": 8,
    "title": "合同と三角形の合同条件",
    "domain": "B",
    "order": 24,
    "goal": "合同な図形の対応を読み、三角形の合同条件を正確に選ぶ。",
    "coverageCodes": [
      "8350223221100000",
      "8350223221000000",
      "8350223238000000",
      "8350222110000000"
    ],
    "explanations": {
      "es": {
        "short": "合同な図形は、移動したり裏返したりするとぴったり重なる。三角形は三辺、二辺とその間の角、一辺とその両端の角の条件で合同を確かめられるよ。",
        "detail": "合同では形だけでなく大きさも同じ。△ABC≡△DEFと書くと、AとD、BとE、CとFが対応する。三角形は三辺がそれぞれ等しければ形も大きさも決まる。二辺と角を使う場合は、二辺にはさまれた角かどうかが大切。角三つだけでは大きさが決まらないよ。"
      },
      "js": {
        "short": "三角形の合同条件は、三辺がそれぞれ等しい、二辺とその間の角がそれぞれ等しい、一辺とその両端の角がそれぞれ等しい、の三つである。",
        "detail": "△ABC≡△DEFは対応順を含む記号で、ABとDE、BCとEF、CAとFDが対応する。合同なら対応する辺と角は等しい。合同を判断するときは三つの条件の組を正確に確かめる。二辺とその間ではない角では一般には一つの形に決まらず、三角が等しいだけでも拡大した別の大きさの三角形を含む。回転や裏返しによる向きの違いは合同を妨げない。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "裏返した形を対応させる",
        "text": "架空の三角形を裏返して描いても、対応する辺の長さと角は保たれる。見た目の左右が逆でも、頂点の対応を追えば合同と分かる。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "craft",
        "title": "三本の辺で形を決める",
        "text": "長さ4cm、5cm、6cmの三本で三角形を作る設定。もう一組も同じ三辺なら、向きが違っても合同な三角形となる。三辺の対応をそろえて確かめる。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "△ABC≡△DEFで、頂点Bに対応するのは？",
        "options": [
          "F",
          "E",
          "D"
        ],
        "answer": "E",
        "explanation": "記号の並びで二番目同士が対応する。",
        "hint": "頂点名の順序を読む。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "△ABC≡△DEFで、辺BCに対応するのは？",
        "options": [
          "EF",
          "DE",
          "DF"
        ],
        "answer": "EF",
        "explanation": "B↔E、C↔FなのでBC↔EF。",
        "hint": "両端の頂点を対応させる。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "三角形の合同条件として正しいのは？",
        "options": [
          "二辺とどこか一つの角が等しい",
          "三つの角だけが等しい",
          "二辺とその間の角がそれぞれ等しい"
        ],
        "answer": "二辺とその間の角がそれぞれ等しい",
        "explanation": "二辺ではさまれる角という位置の条件が必要。",
        "hint": "角が二辺の間にあるかを見る。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "一辺と角を使う合同条件は？",
        "options": [
          "一辺だけが等しい",
          "一辺とその両端の角がそれぞれ等しい",
          "一辺と一角だけが等しい"
        ],
        "answer": "一辺とその両端の角がそれぞれ等しい",
        "explanation": "辺の両端の二角と、対応する辺の三条件をそろえる。",
        "hint": "与えた角の場所を確かめる。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "一辺1cmの正三角形と、一辺2cmの正三角形は合同？",
        "options": [
          "合同ではない",
          "三角が同じ60°なので合同",
          "向きを変えれば必ず合同"
        ],
        "answer": "合同ではない",
        "explanation": "角は同じでも大きさが違い、重ならない。",
        "hint": "形だけでなく大きさも比べる。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "三辺4cm,5cm,6cmの二つの三角形は？",
        "options": [
          "必ず合同ではない",
          "向きが同じ場合だけ合同",
          "合同である"
        ],
        "answer": "合同である",
        "explanation": "三辺がそれぞれ等しいという合同条件を満たす。",
        "hint": "向きではなく辺の対応を調べる。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "合同な三角形を裏返すと、合同でなくなる？",
        "options": [
          "面積だけ2倍になる",
          "ならない。合同は保たれる",
          "必ず合同でなくなる"
        ],
        "answer": "ならない。合同は保たれる",
        "explanation": "裏返しは長さと角を変えず、重ねられる関係を保つ。",
        "hint": "合同の定義へ戻る。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "「二辺とその間の角」の間の角とは？",
        "options": [
          "その二辺が共通に持つ頂点の角",
          "二辺と関係ない頂点の角",
          "図で一番小さい角"
        ],
        "answer": "その二辺が共通に持つ頂点の角",
        "explanation": "二辺を開いたときの開き方を決める角である。",
        "hint": "二辺の交わる頂点を見る。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "合同を予想：AB＝DE、BC＝EF、∠ABC＝∠DEFなら？",
      "options": [
        "三角だけが等しいので合同",
        "条件が必ず足りない",
        "二辺とその間の角で合同"
      ],
      "answer": "二辺とその間の角で合同",
      "explanation": "AB,BCの間は∠ABC、DE,EFの間は∠DEFで、正しい位置の角がそろう。",
      "hint": "中央の頂点が二辺の交点か確かめる。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "対応をそろえて合同条件を使う",
      "prompt": "AB＝DE＝4cm、BC＝EF＝5cm、CA＝FD＝6cmの二三角形を比べよう。",
      "steps": [
        {
          "text": "A↔D、B↔E、C↔Fと頂点の対応をそろえる。"
        },
        {
          "text": "対応する三辺がそれぞれ4cm、5cm、6cmで等しいと確認する。"
        },
        {
          "text": "三辺がそれぞれ等しいという三角形の合同条件を使う。"
        },
        {
          "text": "△ABC≡△DEF。回転や裏返しで向きが違っていても対応を保って重なる。"
        }
      ],
      "answer": "△ABC≡△DEF",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "三つの角が等しければ、二つの三角形は必ず合同になる。",
      "correction": "角だけでは大きさが決まらない。一辺1cmと2cmの正三角形は角が全て60°でも合同ではない。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "三角形の合同条件の「その間」「その両端」が大切な理由を説明しよう。",
        "followUp": "合同の記号の頂点名を、どんな順に書けばよい？",
        "checkpoints": [
          "辺と角の位置まで確かめた。",
          "対応する頂点を同じ順に書いた。"
        ],
        "sample": "同じ数の条件でも位置が違うと形が決まらない場合がある。二辺の間の角や一辺の両端の角を確認し、合同記号では対応する頂点を同じ位置へ書く。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "合同な図形は、移動したり裏返したりするとぴったり重なる。三角形は三辺、二辺とその間の角、一辺とその両端の角の条件で合同を確かめられるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "合同では形だけでなく大きさも同じ。△ABC≡△DEFと書くと、AとD、BとE、CとFが対応する。三角形は三辺がそれぞれ等しければ形も大きさも決まる。二辺と角を使う場合は、二辺にはさまれた角かどうかが大切。角三つだけでは大きさが決まらないよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "三角形の合同条件は、三辺がそれぞれ等しい、二辺とその間の角がそれぞれ等しい、一辺とその両端の角がそれぞれ等しい、の三つである。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "△ABC≡△DEFは対応順を含む記号で、ABとDE、BCとEF、CAとFDが対応する。合同なら対応する辺と角は等しい。合同を判断するときは三つの条件の組を正確に確かめる。二辺とその間ではない角では一般には一つの形に決まらず、三角が等しいだけでも拡大した別の大きさの三角形を含む。回転や裏返しによる向きの違いは合同を妨げない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の三角形を裏返して描いても、対応する辺の長さと角は保たれる。見た目の左右が逆でも、頂点の対応を追えば合同と分かる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "長さ4cm、5cm、6cmの三本で三角形を作る設定。もう一組も同じ三辺なら、向きが違っても合同な三角形となる。三辺の対応をそろえて確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "△ABC≡△DEFで、頂点Bに対応するのは？ 正答：E。 記号の並びで二番目同士が対応する。 考える手がかり：頂点名の順序を読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "△ABC≡△DEFで、辺BCに対応するのは？ 正答：EF。 B↔E、C↔FなのでBC↔EF。 考える手がかり：両端の頂点を対応させる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "三角形の合同条件として正しいのは？ 正答：二辺とその間の角がそれぞれ等しい。 二辺ではさまれる角という位置の条件が必要。 考える手がかり：角が二辺の間にあるかを見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "一辺と角を使う合同条件は？ 正答：一辺とその両端の角がそれぞれ等しい。 辺の両端の二角と、対応する辺の三条件をそろえる。 考える手がかり：与えた角の場所を確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "一辺1cmの正三角形と、一辺2cmの正三角形は合同？ 正答：合同ではない。 角は同じでも大きさが違い、重ならない。 考える手がかり：形だけでなく大きさも比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "三辺4cm,5cm,6cmの二つの三角形は？ 正答：合同である。 三辺がそれぞれ等しいという合同条件を満たす。 考える手がかり：向きではなく辺の対応を調べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "合同な三角形を裏返すと、合同でなくなる？ 正答：ならない。合同は保たれる。 裏返しは長さと角を変えず、重ねられる関係を保つ。 考える手がかり：合同の定義へ戻る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "「二辺とその間の角」の間の角とは？ 正答：その二辺が共通に持つ頂点の角。 二辺を開いたときの開き方を決める角である。 考える手がかり：二辺の交わる頂点を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "合同を予想：AB＝DE、BC＝EF、∠ABC＝∠DEFなら？ 正答：二辺とその間の角で合同。 AB,BCの間は∠ABC、DE,EFの間は∠DEFで、正しい位置の角がそろう。 考える手がかり：中央の頂点が二辺の交点か確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "三角形の合同条件の「その間」「その両端」が大切な理由を説明しよう。 合同の記号の頂点名を、どんな順に書けばよい？ 同じ数の条件でも位置が違うと形が決まらない場合がある。二辺の間の角や一辺の両端の角を確認し、合同記号では対応する頂点を同じ位置へ書く。 確認項目：辺と角の位置まで確かめた。 / 対応する頂点を同じ順に書いた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "AB＝DE＝4cm、BC＝EF＝5cm、CA＝FD＝6cmの二三角形を比べよう。 A↔D、B↔E、C↔Fと頂点の対応をそろえる。 対応する三辺がそれぞれ4cm、5cm、6cmで等しいと確認する。 三辺がそれぞれ等しいという三角形の合同条件を使う。 △ABC≡△DEF。回転や裏返しで向きが違っていても対応を保って重なる。 結論：△ABC≡△DEF",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「三つの角が等しければ、二つの三角形は必ず合同になる。」は誤り。角だけでは大きさが決まらない。一辺1cmと2cmの正三角形は角が全て60°でも合同ではない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "合同は大きさと形が等しく、平行移動・回転・裏返しで重なる関係。△ABC≡△DEFはA↔D,B↔E,C↔F。三角形の合同条件はSSS、SASの挟角、ASAの両端角。AAAや一般のSSAでは合同を保証しない。 操作図の事実：同一三角形の合同変換。三辺、二辺とその間の角、一辺とその両端の角の対応を強調。 使用する状態範囲：condition sss/sas/asa; pose rotate/reflect。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223221200000",
    "grade": 8,
    "title": "証明のしくみ",
    "domain": "B",
    "order": 25,
    "goal": "定義・仮定・結論・根拠を区別し、証明が必要な理由を説明する。",
    "coverageCodes": [
      "8350223221200000",
      "8350223221000000",
      "8350223234000000",
      "8350223235000000",
      "8350222220000000",
      "8350223513000000"
    ],
    "explanations": {
      "es": {
        "short": "証明は、分かっている条件や性質から、示したいことへ筋道をつなぐ説明。最初の条件を仮定、最後に示すことを結論というよ。",
        "detail": "「三角形ABCでAB＝AC、DはBCの中点」という仮定から、二つの三角形の合同を考える。中点とは線分を等しい二つに分ける点、という定義なのでBD＝CDが分かる。ADは共通の辺だから等しい。三辺がそろった根拠から合同へ進み、対応角が等しいという結論へつなぐ。図でそう見えるだけでは、どの場合にも成り立つ理由にはならないよ。"
      },
      "js": {
        "short": "定義は言葉の意味を定めるもの。証明は仮定と既知の性質に基づき結論を導く。各主張に根拠を付け、結論を仮定として使う循環を避ける。",
        "detail": "二等辺三角形の定義は二辺が等しい三角形ということで、底角が等しいことはそこから示す性質である。証明では「与えられた条件」「定義から分かること」「既に示された性質」を区別して使う。例えばDがBCの中点ならB,D,Cが一直線上にありBD＝CD。実測した数例は予想を立てる役に立つが、条件を満たす全ての図形への説明には論理的な根拠が必要。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "理由付きの説明を並べる",
        "text": "教材の説明札へ、BD＝CDには「中点の定義」、AD＝ADには「共通の辺」と根拠を添える。正しい式だけでなく、どこから分かったかも確認する。",
        "activityIds": [
          "prog-scratch"
        ]
      },
      {
        "category": "drawing",
        "title": "図の印と与えられた条件",
        "text": "架空の図にAB＝ACとDが中点という条件だけを記す。等しそうに見える他の長さや角を、勝手に仮定へ追加しない。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "証明で「仮定」とは？",
        "options": [
          "あらかじめ与えられた条件",
          "最後に示したいことだけ",
          "図で何となく感じたこと"
        ],
        "answer": "あらかじめ与えられた条件",
        "explanation": "証明の出発点として使ってよい条件を指す。",
        "hint": "出発点と到達点を分ける。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "証明で「結論」とは？",
        "options": [
          "最初に全て正しいと決めること",
          "計算用の仮の数だけ",
          "条件から示したいこと"
        ],
        "answer": "条件から示したいこと",
        "explanation": "根拠をつないで最後に導く主張。",
        "hint": "まだ示す必要があることを探す。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "「中点は線分を等しい二つに分ける点」という文は？",
        "options": [
          "図の測定結果",
          "言葉の意味を決める定義",
          "全ての線分が等しいという結論"
        ],
        "answer": "言葉の意味を決める定義",
        "explanation": "中点という語の意味を定めている。",
        "hint": "語の意味を決めているかを見る。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "DがBCの中点ならBD＝CDといえる根拠は？",
        "options": [
          "中点の定義",
          "対頂角の性質",
          "図が左右対称に見えることだけ"
        ],
        "answer": "中点の定義",
        "explanation": "中点はB,Cを結ぶ線分上で二つの長さを等しく分ける。",
        "hint": "与えられた語を定義へ戻す。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "三角形ABDとACDでAD＝ADといえる根拠は？",
        "options": [
          "二等辺三角形だからだけ",
          "全ての線分は等しいから",
          "同じ辺を共通に使っているから"
        ],
        "answer": "同じ辺を共通に使っているから",
        "explanation": "同じ線分ADを両方の三角形が使っている。",
        "hint": "別の二本ではなく同じ一本かを見る。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "合同を示す前に「合同だからAB＝AC」として合同の根拠に使うのは？",
        "options": [
          "測定より必ず厳密",
          "説明が循環している",
          "いつでも正しい証明"
        ],
        "answer": "説明が循環している",
        "explanation": "示したい結論を、その結論のための根拠として先に使っている。",
        "hint": "根拠がどこから来たか遡る。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "二等辺三角形の定義は？",
        "options": [
          "二つの辺の長さが等しい三角形",
          "全ての角が90°の三角形",
          "見た目が細い三角形"
        ],
        "answer": "二つの辺の長さが等しい三角形",
        "explanation": "二辺の等しさが語の定義で、底角の性質とは区別する。",
        "hint": "形の印象でなく条件を読む。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "証明を読むときに確かめたいことは？",
        "options": [
          "文字が多ければ正しいと決める",
          "結論だけを暗記する",
          "各主張の根拠が仮定や既知の性質から得られるか"
        ],
        "answer": "各主張の根拠が仮定や既知の性質から得られるか",
        "explanation": "理由のつながりが、全ての場合へ使える説明を支える。",
        "hint": "一つ前の主張だけでなく根拠も見る。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "理由を予想：AB＝ACという仮定を使う行に添える言葉は？",
      "options": [
        "求める結論だから",
        "仮定より",
        "対頂角より"
      ],
      "answer": "仮定より",
      "explanation": "与えられた条件をそのまま使っている。",
      "hint": "どの種類の情報かを分ける。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "主張ごとに根拠を付ける",
      "prompt": "三角形ABCでAB＝AC、DはBCの中点という条件から、二三角形の合同を考えよう。",
      "steps": [
        {
          "text": "AB＝ACは仮定から使える。"
        },
        {
          "text": "BD＝CDはDが中点という定義から分かる。"
        },
        {
          "text": "AD＝ADは共通の辺なので成り立つ。"
        },
        {
          "text": "三辺がそれぞれ等しいため△ABD≡△ACD。使った根拠を各行へ結び付けられる。"
        }
      ],
      "answer": "仮定・定義・共通の辺から合同条件へつながる",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "図で同じ長さに見える辺は、証明で等しいとして使ってよい。",
      "correction": "図の見た目だけでは仮定にならない。与えられた条件・定義・既に示した性質から等しさを説明する。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "「中点の定義」と「三角形の合同条件」は、証明でどんな役割をもつ？",
        "followUp": "自分の説明の各行へ理由を添えて、結論を先取りしていないか確かめよう。",
        "checkpoints": [
          "定義から得る事実と使う性質を区別した。",
          "一つずつ根拠を確認した。"
        ],
        "sample": "中点の定義からBD＝CDを得る。他の二辺の等しさと合わせ、三角形の合同条件で合同を導く。合同という結論を最初の根拠には使わない。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "証明は、分かっている条件や性質から、示したいことへ筋道をつなぐ説明。最初の条件を仮定、最後に示すことを結論というよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "「三角形ABCでAB＝AC、DはBCの中点」という仮定から、二つの三角形の合同を考える。中点とは線分を等しい二つに分ける点、という定義なのでBD＝CDが分かる。ADは共通の辺だから等しい。三辺がそろった根拠から合同へ進み、対応角が等しいという結論へつなぐ。図でそう見えるだけでは、どの場合にも成り立つ理由にはならないよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "定義は言葉の意味を定めるもの。証明は仮定と既知の性質に基づき結論を導く。各主張に根拠を付け、結論を仮定として使う循環を避ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "二等辺三角形の定義は二辺が等しい三角形ということで、底角が等しいことはそこから示す性質である。証明では「与えられた条件」「定義から分かること」「既に示された性質」を区別して使う。例えばDがBCの中点ならB,D,Cが一直線上にありBD＝CD。実測した数例は予想を立てる役に立つが、条件を満たす全ての図形への説明には論理的な根拠が必要。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材の説明札へ、BD＝CDには「中点の定義」、AD＝ADには「共通の辺」と根拠を添える。正しい式だけでなく、どこから分かったかも確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の図にAB＝ACとDが中点という条件だけを記す。等しそうに見える他の長さや角を、勝手に仮定へ追加しない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "証明で「仮定」とは？ 正答：あらかじめ与えられた条件。 証明の出発点として使ってよい条件を指す。 考える手がかり：出発点と到達点を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "証明で「結論」とは？ 正答：条件から示したいこと。 根拠をつないで最後に導く主張。 考える手がかり：まだ示す必要があることを探す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "「中点は線分を等しい二つに分ける点」という文は？ 正答：言葉の意味を決める定義。 中点という語の意味を定めている。 考える手がかり：語の意味を決めているかを見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "DがBCの中点ならBD＝CDといえる根拠は？ 正答：中点の定義。 中点はB,Cを結ぶ線分上で二つの長さを等しく分ける。 考える手がかり：与えられた語を定義へ戻す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "三角形ABDとACDでAD＝ADといえる根拠は？ 正答：同じ辺を共通に使っているから。 同じ線分ADを両方の三角形が使っている。 考える手がかり：別の二本ではなく同じ一本かを見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "合同を示す前に「合同だからAB＝AC」として合同の根拠に使うのは？ 正答：説明が循環している。 示したい結論を、その結論のための根拠として先に使っている。 考える手がかり：根拠がどこから来たか遡る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "二等辺三角形の定義は？ 正答：二つの辺の長さが等しい三角形。 二辺の等しさが語の定義で、底角の性質とは区別する。 考える手がかり：形の印象でなく条件を読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "証明を読むときに確かめたいことは？ 正答：各主張の根拠が仮定や既知の性質から得られるか。 理由のつながりが、全ての場合へ使える説明を支える。 考える手がかり：一つ前の主張だけでなく根拠も見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "理由を予想：AB＝ACという仮定を使う行に添える言葉は？ 正答：仮定より。 与えられた条件をそのまま使っている。 考える手がかり：どの種類の情報かを分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "「中点の定義」と「三角形の合同条件」は、証明でどんな役割をもつ？ 自分の説明の各行へ理由を添えて、結論を先取りしていないか確かめよう。 中点の定義からBD＝CDを得る。他の二辺の等しさと合わせ、三角形の合同条件で合同を導く。合同という結論を最初の根拠には使わない。 確認項目：定義から得る事実と使う性質を区別した。 / 一つずつ根拠を確認した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "三角形ABCでAB＝AC、DはBCの中点という条件から、二三角形の合同を考えよう。 AB＝ACは仮定から使える。 BD＝CDはDが中点という定義から分かる。 AD＝ADは共通の辺なので成り立つ。 三辺がそれぞれ等しいため△ABD≡△ACD。使った根拠を各行へ結び付けられる。 結論：仮定・定義・共通の辺から合同条件へつながる",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「図で同じ長さに見える辺は、証明で等しいとして使ってよい。」は誤り。図の見た目だけでは仮定にならない。与えられた条件・定義・既に示した性質から等しさを説明する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "定義は語の意味を定め、仮定は与えられた条件、結論は導く主張。非退化な三角形ABCでDがBCの中点ならB,D,Cはこの順に一直線上でBD=CD。AB=AC、BD=CD、AD共通からSSSで△ABD≡△ACDを導ける。未証明の結論の先取りは循環。 操作図の事実：AB=AC、DはBC中点、AD共通の図。仮定→三辺一致→合同→結論の役割を区別。 使用する状態範囲：step0..3。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223236000000",
    "grade": 8,
    "title": "逆と反例",
    "domain": "B",
    "order": 26,
    "goal": "条件と結論を入れ替えた逆を作り、成り立たない場合を反例で示す。",
    "coverageCodes": [
      "8350223236000000",
      "8350223221200000",
      "8350223237000000",
      "8350222220000000",
      "8350223512000000"
    ],
    "explanations": {
      "es": {
        "short": "「もしAならB」のAとBを入れ替えたものが逆。「元が正しい」だけでは逆まで正しいとは限らない。仮定に合い結論に合わない例が、反例だよ。",
        "detail": "「正方形なら長方形」は正しいが、逆の「長方形なら正方形」は、縦2cm横3cmの長方形で成り立たない。この図は長方形という仮定を満たすのに、正方形という結論を満たさないので反例になる。反例は一つあれば、その全てについての主張が成り立たないと示せる。"
      },
      "js": {
        "short": "命題「AならばB」の逆は「BならばA」。逆の真偽は別に確認する。反例は仮定を満たし結論を満たさない例で、一般命題を否定する。",
        "detail": "二等辺三角形なら二つの底角が等しいという性質と、二角が等しい三角形ではその向かいの二辺が等しいという逆は、どちらも成り立つ。一方、長方形なら対角線が等しいという性質の逆は成り立たない。上底2cm、下底6cm、高さ2cmで左右対称な台形は、対角線が等しくても長方形ではない。逆をいつも正しい、またはいつも誤りと決めず、根拠か反例を調べる。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "条件を満たす図を探す",
        "text": "架空の図として縦2cm横3cmの長方形を描く。長方形という条件には合うが四辺は等しくないので、「長方形なら正方形」の反例にできる。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "二つの条件を交換する",
        "text": "教材用の判断「整数が4の倍数なら偶数」の逆は「整数が偶数なら4の倍数」。整数2は偶数だが4の倍数でないため、逆の反例になる。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "「正方形なら長方形」の逆は？",
        "options": [
          "正方形なら四角形",
          "正方形でなければ長方形",
          "長方形なら正方形"
        ],
        "answer": "長方形なら正方形",
        "explanation": "仮定と結論を入れ替える。",
        "hint": "否定にする操作とは違う。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "「長方形なら正方形」の反例になるのは？",
        "options": [
          "三角形",
          "縦2cm横3cmの長方形",
          "一辺2cmの正方形"
        ],
        "answer": "縦2cm横3cmの長方形",
        "explanation": "長方形であり、正方形ではない図が必要。",
        "hint": "仮定を満たすことも確認する。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "三角形を「長方形なら正方形」の反例にできない理由は？",
        "options": [
          "長方形という仮定を満たさないから",
          "辺が3本では少なすぎるからだけ",
          "全ての三角形は正方形だから"
        ],
        "answer": "長方形という仮定を満たさないから",
        "explanation": "反例はまず仮定に当てはまらなくてはならない。",
        "hint": "反例の二条件を順に確かめる。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "元の命題が正しいなら、その逆は？",
        "options": [
          "必ず正しい",
          "必ず誤り",
          "別に確かめる必要がある"
        ],
        "answer": "別に確かめる必要がある",
        "explanation": "逆も成立する場合と成立しない場合がある。",
        "hint": "仮定と結論を交換した後の根拠を見る。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "「全ての偶数は4の倍数」の反例は？",
        "options": [
          "8",
          "2",
          "4"
        ],
        "answer": "2",
        "explanation": "2は偶数だが4の倍数ではない。",
        "hint": "仮定には合い、結論には合わない数を探す。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "全ての場合の主張に反例が一つ見つかったら？",
        "options": [
          "その主張は成り立たないと分かる",
          "他の例が多ければ主張は必ず正しい",
          "どの数学の主張も誤りになる"
        ],
        "answer": "その主張は成り立たないと分かる",
        "explanation": "「全て」と言う主張は一つの例外で否定される。その主張以外まで否定するわけではない。",
        "hint": "否定する対象を限定する。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "三角形の二角が等しければ、その向かいの二辺は？",
        "options": [
          "必ず違う",
          "長さは必ず1cm",
          "等しい"
        ],
        "answer": "等しい",
        "explanation": "二等辺三角形の底角の性質の逆が成り立つ。",
        "hint": "等しい角に向かい合う辺を見る。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "対角線の長さが等しい四角形は、必ず長方形？",
        "options": [
          "必ず正方形",
          "必ずではない",
          "必ず長方形"
        ],
        "answer": "必ずではない",
        "explanation": "左右対称で上下の底辺が違う台形にも、対角線が等しいものがある。",
        "hint": "逆へ使える反例がないか考える。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "反例を予想：「整数a,bでa²＝b²ならa＝b」の反例は？",
      "options": [
        "a＝2,b＝−2",
        "a＝2,b＝2",
        "a＝1,b＝3"
      ],
      "answer": "a＝2,b＝−2",
      "explanation": "2²＝(−2)²＝4だが2≠−2で、仮定を満たして結論を満たさない。",
      "hint": "二乗の等しさと元の数の等しさを分ける。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "反例の二条件を確かめる",
      "prompt": "「長方形なら正方形」という主張を調べよう。",
      "steps": [
        {
          "text": "仮定は長方形であること、結論は正方形であることと分ける。"
        },
        {
          "text": "縦2cm横3cmの長方形を例に選ぶ。"
        },
        {
          "text": "四つの角は直角なので仮定を満たすが、四辺は等しくなく正方形ではない。"
        },
        {
          "text": "仮定を満たし結論を満たさない反例があるため、この主張は成り立たない。"
        }
      ],
      "answer": "縦2cm横3cmの長方形が反例",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "元の命題が正しければ、逆も理由を確かめず使ってよい。",
      "correction": "逆は別の主張。二等辺三角形の性質のように逆も成り立つ場合もあるが、長方形と正方形の例のように成り立たない場合もある。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "反例は、どんな二つの条件を満たさなければならない？",
        "followUp": "反例が一つあれば十分なのは、元の主張のどの言葉と関係する？",
        "checkpoints": [
          "仮定を満たし結論を満たさないと説明した。",
          "全ての場合という主張の一例外を示した。"
        ],
        "sample": "反例は仮定に合うが結論に合わない例。全てに成り立つという主張なので、一つでも例外があれば、その主張は否定される。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "「もしAならB」のAとBを入れ替えたものが逆。「元が正しい」だけでは逆まで正しいとは限らない。仮定に合い結論に合わない例が、反例だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "「正方形なら長方形」は正しいが、逆の「長方形なら正方形」は、縦2cm横3cmの長方形で成り立たない。この図は長方形という仮定を満たすのに、正方形という結論を満たさないので反例になる。反例は一つあれば、その全てについての主張が成り立たないと示せる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "命題「AならばB」の逆は「BならばA」。逆の真偽は別に確認する。反例は仮定を満たし結論を満たさない例で、一般命題を否定する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "二等辺三角形なら二つの底角が等しいという性質と、二角が等しい三角形ではその向かいの二辺が等しいという逆は、どちらも成り立つ。一方、長方形なら対角線が等しいという性質の逆は成り立たない。上底2cm、下底6cm、高さ2cmで左右対称な台形は、対角線が等しくても長方形ではない。逆をいつも正しい、またはいつも誤りと決めず、根拠か反例を調べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の図として縦2cm横3cmの長方形を描く。長方形という条件には合うが四辺は等しくないので、「長方形なら正方形」の反例にできる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材用の判断「整数が4の倍数なら偶数」の逆は「整数が偶数なら4の倍数」。整数2は偶数だが4の倍数でないため、逆の反例になる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "「正方形なら長方形」の逆は？ 正答：長方形なら正方形。 仮定と結論を入れ替える。 考える手がかり：否定にする操作とは違う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "「長方形なら正方形」の反例になるのは？ 正答：縦2cm横3cmの長方形。 長方形であり、正方形ではない図が必要。 考える手がかり：仮定を満たすことも確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "三角形を「長方形なら正方形」の反例にできない理由は？ 正答：長方形という仮定を満たさないから。 反例はまず仮定に当てはまらなくてはならない。 考える手がかり：反例の二条件を順に確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "元の命題が正しいなら、その逆は？ 正答：別に確かめる必要がある。 逆も成立する場合と成立しない場合がある。 考える手がかり：仮定と結論を交換した後の根拠を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "「全ての偶数は4の倍数」の反例は？ 正答：2。 2は偶数だが4の倍数ではない。 考える手がかり：仮定には合い、結論には合わない数を探す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "全ての場合の主張に反例が一つ見つかったら？ 正答：その主張は成り立たないと分かる。 「全て」と言う主張は一つの例外で否定される。その主張以外まで否定するわけではない。 考える手がかり：否定する対象を限定する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "三角形の二角が等しければ、その向かいの二辺は？ 正答：等しい。 二等辺三角形の底角の性質の逆が成り立つ。 考える手がかり：等しい角に向かい合う辺を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "対角線の長さが等しい四角形は、必ず長方形？ 正答：必ずではない。 左右対称で上下の底辺が違う台形にも、対角線が等しいものがある。 考える手がかり：逆へ使える反例がないか考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "反例を予想：「整数a,bでa²＝b²ならa＝b」の反例は？ 正答：a＝2,b＝−2。 2²＝(−2)²＝4だが2≠−2で、仮定を満たして結論を満たさない。 考える手がかり：二乗の等しさと元の数の等しさを分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "反例は、どんな二つの条件を満たさなければならない？ 反例が一つあれば十分なのは、元の主張のどの言葉と関係する？ 反例は仮定に合うが結論に合わない例。全てに成り立つという主張なので、一つでも例外があれば、その主張は否定される。 確認項目：仮定を満たし結論を満たさないと説明した。 / 全ての場合という主張の一例外を示した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "「長方形なら正方形」という主張を調べよう。 仮定は長方形であること、結論は正方形であることと分ける。 縦2cm横3cmの長方形を例に選ぶ。 四つの角は直角なので仮定を満たすが、四辺は等しくなく正方形ではない。 仮定を満たし結論を満たさない反例があるため、この主張は成り立たない。 結論：縦2cm横3cmの長方形が反例",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「元の命題が正しければ、逆も理由を確かめず使ってよい。」は誤り。逆は別の主張。二等辺三角形の性質のように逆も成り立つ場合もあるが、長方形と正方形の例のように成り立たない場合もある。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "逆は仮定と結論の交換。反例は仮定を満たし結論を満たさない例。正方形⇒長方形は真、逆は2×3長方形が反例。二等辺三角形と二底角等角の関係は逆も成立。長方形⇒対角線等長の逆は非長方形の左右対称な台形が反例。 操作図の事実：二等辺三角形と底角の逆は成立。長方形なら対角線等長の逆は不成立：非長方形の等脚台形を反例に。 使用する状態範囲：example triangle/rectangle; direction original/converse。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223221000000",
    "grade": 8,
    "title": "合同条件を使う証明",
    "domain": "B",
    "order": 27,
    "goal": "合同条件へつながる三つの根拠をそろえ、証明から別の性質も読み取る。",
    "coverageCodes": [
      "8350223221000000",
      "8350223221100000",
      "8350223221200000",
      "8350223222100000",
      "8350222220000000",
      "8350222330000000",
      "8350223513000000"
    ],
    "explanations": {
      "es": {
        "short": "合同を示すには、比べる三角形を決め、対応する三条件を根拠付きでそろえる。合同になった後に、対応する辺や角の等しさを使おう。",
        "detail": "三角形ABCでAB＝AC、DをBCの中点とする。比べるのは△ABDと△ACD。AB＝ACは仮定、BD＝CDは中点の定義、AD＝ADは共通の辺。三辺がそれぞれ等しいので合同になる。そこから∠BAD＝∠CADと分かり、ADが頂角を二等分すると説明できる。"
      },
      "js": {
        "short": "二三角形の対応を定め、等しい辺・角とその根拠を列挙して合同条件を適用する。合同後の対応関係から、与えられていない性質を導く。",
        "detail": "AB＝AC、DはBCの中点という仮定で△ABDと△ACDを比較する。三辺の等しさで△ABD≡△ACDなので、∠BAD＝∠CADに加え∠ADB＝∠ADCも分かる。B,D,Cは一直線上だから後者二角の和は180°、等しいため各90°。したがってADはBCに垂直でもある。一つの証明から頂角の二等分と底辺への垂直という二つの結論を読める。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "同じ証明から別の角を見る",
        "text": "架空の二等辺三角形で頂点Aから底辺BCの中点Dへ線を引く。合同を示した後、Aの二角だけでなくDの二角にも対応をたどり、二等分と垂直の二結論を読む。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "理由の札を照合する",
        "text": "教材用の三辺の一覧AB＝AC、BD＝CD、AD＝ADへ、仮定・中点・共通を一つずつ対応させる。三つがそろって初めて三辺の合同条件へ進む。",
        "activityIds": [
          "prog-scratch"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "AB＝AC、DはBCの中点のとき、比べる二三角形は？",
        "options": [
          "△ABDと△ABCだけ",
          "△ABDと△ACD",
          "△ABCと△BCD"
        ],
        "answer": "△ABDと△ACD",
        "explanation": "共通のADで分かれた二三角形なら三辺の対応をそろえられる。",
        "hint": "仮定を使える二つの部分を探す。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "AB＝AC、DはBCの中点からBD＝CDとする根拠は？",
        "options": [
          "中点の定義",
          "合同をこれから示す予定だから",
          "対頂角"
        ],
        "answer": "中点の定義",
        "explanation": "DがBCを等しい二つに分けるという仮定の意味を使う。",
        "hint": "まだ証明していない合同を根拠にしない。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "△ABDと△ACDでAD＝ADの根拠は？",
        "options": [
          "図の縮尺",
          "BCが直線だからだけ",
          "共通の辺"
        ],
        "answer": "共通の辺",
        "explanation": "同じ一本の線分を両三角形がもつ。",
        "hint": "対応する辺が同一かを確認する。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "AB＝AC、BD＝CD、AD＝ADがそろった。合同条件は？",
        "options": [
          "一辺とその両端の角",
          "三辺がそれぞれ等しい",
          "二辺とその間の角"
        ],
        "answer": "三辺がそれぞれ等しい",
        "explanation": "そろえた三つは全て辺の長さの条件。",
        "hint": "実際に示した条件の種類を数える。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "△ABD≡△ACDから、∠BADに対応して等しい角は？",
        "options": [
          "∠CAD",
          "∠ACD",
          "∠ADC"
        ],
        "answer": "∠CAD",
        "explanation": "B↔C、A↔A、D↔DなのでBADはCADへ対応する。",
        "hint": "頂点の対応順を三文字へ使う。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "Dは線分BCの内部にあり、Aは直線BC上にない。∠ADB＝∠ADCなら、∠ADBは？",
        "answer": 90,
        "explanation": "二角の和180°を等しく二つに分けるので90°。",
        "hint": "等しさと和の両方を使う。",
        "suffix": "°",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "AB＝AC、DはBCの中点から合同を示すとき、最初からAD⊥BCを仮定に加えてよい？",
        "options": [
          "いつでも必要な仮定として追加できる",
          "与えられていないので、理由なく加えない",
          "見た目が垂直なら加えてよい"
        ],
        "answer": "与えられていないので、理由なく加えない",
        "explanation": "垂直は合同と一直線の性質から導ける結論であり、先に仮定へ足さない。",
        "hint": "与えられた条件と示す性質を分ける。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "AB＝ACの三角形ABCでDはBCの中点とし、△ABD≡△ACDを示した。この証明から、頂角の二等分以外に読めることは？",
        "options": [
          "ADがBCに垂直である",
          "ABとBCが必ず等しい",
          "三角形は必ず正三角形"
        ],
        "answer": "ADがBCに垂直である",
        "explanation": "Dの対応角が等しく和180°なので、両方90°になる。",
        "hint": "まだ使っていない対応角を見る。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "結論を予想：Dは線分BCの内部、Aは直線BC上になく、△ABD≡△ACDなら？",
      "options": [
        "二角は必ず各60°",
        "二角は等しいだけで和は分からない",
        "∠ADBと∠ADCは各90°"
      ],
      "answer": "∠ADBと∠ADCは各90°",
      "explanation": "合同による等しさと、一直線による和180°を合わせる。",
      "hint": "異なる二つの根拠をつなげる。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "三辺の根拠から頂角へ進む",
      "prompt": "AB＝ACの三角形ABCでDはBCの中点。∠BAD＝∠CADを示そう。",
      "steps": [
        {
          "text": "△ABDと△ACDを比べ、AB＝ACを仮定から確認する。"
        },
        {
          "text": "Dは中点なのでBD＝CD。AD＝ADは共通の辺。"
        },
        {
          "text": "三辺がそれぞれ等しいため△ABD≡△ACD。"
        },
        {
          "text": "合同な三角形の対応する角は等しいので∠BAD＝∠CAD。"
        }
      ],
      "answer": "ADは∠BACを二等分する",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "合同を示す前から、図の対称らしさで∠BAD＝∠CADを根拠にする。",
      "correction": "示したい角の等しさを先取りしない。仮定・中点・共通辺から三辺の合同条件をそろえ、その後で対応角の等しさを導く。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "三辺の等しさを、どの根拠から得たか一つずつ説明しよう。",
        "followUp": "同じ合同から、ADが底辺に垂直であることも導ける？",
        "checkpoints": [
          "仮定・中点・共通辺をそろえた。",
          "対応角と一直線の180°を結び付けた。"
        ],
        "sample": "AB＝ACは仮定、BD＝CDは中点、ADは共通。合同からDの二角も等しく、一直線の角180°を二等分するので90°ずつ、AD⊥BCとなる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "合同を示すには、比べる三角形を決め、対応する三条件を根拠付きでそろえる。合同になった後に、対応する辺や角の等しさを使おう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "三角形ABCでAB＝AC、DをBCの中点とする。比べるのは△ABDと△ACD。AB＝ACは仮定、BD＝CDは中点の定義、AD＝ADは共通の辺。三辺がそれぞれ等しいので合同になる。そこから∠BAD＝∠CADと分かり、ADが頂角を二等分すると説明できる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "二三角形の対応を定め、等しい辺・角とその根拠を列挙して合同条件を適用する。合同後の対応関係から、与えられていない性質を導く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "AB＝AC、DはBCの中点という仮定で△ABDと△ACDを比較する。三辺の等しさで△ABD≡△ACDなので、∠BAD＝∠CADに加え∠ADB＝∠ADCも分かる。B,D,Cは一直線上だから後者二角の和は180°、等しいため各90°。したがってADはBCに垂直でもある。一つの証明から頂角の二等分と底辺への垂直という二つの結論を読める。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の二等辺三角形で頂点Aから底辺BCの中点Dへ線を引く。合同を示した後、Aの二角だけでなくDの二角にも対応をたどり、二等分と垂直の二結論を読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材用の三辺の一覧AB＝AC、BD＝CD、AD＝ADへ、仮定・中点・共通を一つずつ対応させる。三つがそろって初めて三辺の合同条件へ進む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "AB＝AC、DはBCの中点のとき、比べる二三角形は？ 正答：△ABDと△ACD。 共通のADで分かれた二三角形なら三辺の対応をそろえられる。 考える手がかり：仮定を使える二つの部分を探す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "AB＝AC、DはBCの中点からBD＝CDとする根拠は？ 正答：中点の定義。 DがBCを等しい二つに分けるという仮定の意味を使う。 考える手がかり：まだ証明していない合同を根拠にしない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "△ABDと△ACDでAD＝ADの根拠は？ 正答：共通の辺。 同じ一本の線分を両三角形がもつ。 考える手がかり：対応する辺が同一かを確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "AB＝AC、BD＝CD、AD＝ADがそろった。合同条件は？ 正答：三辺がそれぞれ等しい。 そろえた三つは全て辺の長さの条件。 考える手がかり：実際に示した条件の種類を数える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "△ABD≡△ACDから、∠BADに対応して等しい角は？ 正答：∠CAD。 B↔C、A↔A、D↔DなのでBADはCADへ対応する。 考える手がかり：頂点の対応順を三文字へ使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "Dは線分BCの内部にあり、Aは直線BC上にない。∠ADB＝∠ADCなら、∠ADBは？ 正答：90。 二角の和180°を等しく二つに分けるので90°。 考える手がかり：等しさと和の両方を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "AB＝AC、DはBCの中点から合同を示すとき、最初からAD⊥BCを仮定に加えてよい？ 正答：与えられていないので、理由なく加えない。 垂直は合同と一直線の性質から導ける結論であり、先に仮定へ足さない。 考える手がかり：与えられた条件と示す性質を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "AB＝ACの三角形ABCでDはBCの中点とし、△ABD≡△ACDを示した。この証明から、頂角の二等分以外に読めることは？ 正答：ADがBCに垂直である。 Dの対応角が等しく和180°なので、両方90°になる。 考える手がかり：まだ使っていない対応角を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "結論を予想：Dは線分BCの内部、Aは直線BC上になく、△ABD≡△ACDなら？ 正答：∠ADBと∠ADCは各90°。 合同による等しさと、一直線による和180°を合わせる。 考える手がかり：異なる二つの根拠をつなげる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "三辺の等しさを、どの根拠から得たか一つずつ説明しよう。 同じ合同から、ADが底辺に垂直であることも導ける？ AB＝ACは仮定、BD＝CDは中点、ADは共通。合同からDの二角も等しく、一直線の角180°を二等分するので90°ずつ、AD⊥BCとなる。 確認項目：仮定・中点・共通辺をそろえた。 / 対応角と一直線の180°を結び付けた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "AB＝ACの三角形ABCでDはBCの中点。∠BAD＝∠CADを示そう。 △ABDと△ACDを比べ、AB＝ACを仮定から確認する。 Dは中点なのでBD＝CD。AD＝ADは共通の辺。 三辺がそれぞれ等しいため△ABD≡△ACD。 合同な三角形の対応する角は等しいので∠BAD＝∠CAD。 結論：ADは∠BACを二等分する",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「合同を示す前から、図の対称らしさで∠BAD＝∠CADを根拠にする。」は誤り。示したい角の等しさを先取りしない。仮定・中点・共通辺から三辺の合同条件をそろえ、その後で対応角の等しさを導く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "非退化三角形ABCでAB=AC、DはBCの中点。AB=AC、BD=CD、AD共通からSSSで△ABD≡△ACD。対応角∠BAD=∠CAD、∠ADB=∠ADC。B,D,C一直線より後者各90°でAD⊥BC。垂直や角二等分を先取りしない。 操作図の事実：A(300,70),B(180,270),C(420,270),D(300,270)。AB=AC、BD=CD、AD共通→△ABD≡△ACD→∠BAD=∠CAD。 使用する状態範囲：step0..3。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "motion",
        "text": "非退化三角形ABCでAB=AC、Dは線分BCの中点。AB=ACは仮定、BD=CDは中点の定義、AD=ADは共通の辺。三辺がそれぞれ等しいので△ABD≡△ACD。対応する角の等しさから∠BAD=∠CADを導く。形を固定して根拠を強調し、示す角の等しさを初めの仮定として使わない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223222100000",
    "grade": 8,
    "title": "二等辺三角形の性質",
    "domain": "B",
    "order": 28,
    "goal": "二等辺三角形の定義と底角の性質、その逆を結び付ける。",
    "coverageCodes": [
      "8350223222100000",
      "8350223221100000",
      "8350223221200000",
      "8350223222200000"
    ],
    "explanations": {
      "es": {
        "short": "二辺が等しい三角形が二等辺三角形。その等しい辺に向かい合う二つの底角は等しい。逆に、二角が等しければ向かい合う二辺も等しいよ。",
        "detail": "△ABCでAB＝ACなら、底辺はBC、底角はBとCの角で、二角は等しい。頂角Aが40°なら残りは180−40＝140°、二つに等しく分けて底角は各70°。三辺が等しい正三角形も二辺が等しい条件を満たすので、二等辺三角形に含められる。どの二辺を選ぶかで対応する角を見るよ。"
      },
      "js": {
        "short": "二等辺三角形の定義は二辺の等長で、底角の等しさはその性質。逆に二内角が等しい三角形では、それらに向かう二辺が等しい。",
        "detail": "AB＝ACの三角形でDをBCの中点に取れば、AB＝AC、BD＝CD、AD共通から△ABD≡△ACDとなり、底角∠ABC＝∠ACBを導ける。逆の「二角が等しければ向かいの二辺が等しい」も成り立つ。正三角形では三組とも等辺なので三角は全て等しく、内角和180°から各60°。定義、性質、逆を取り違えず、等しい辺と向かいの角を対応させる。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "等しい辺の向かいを探す",
        "text": "架空の△ABCでABとACへ同じ長さの印を付ける。ABの向かいはCの角、ACの向かいはBの角。この二角が等しいと、位置の対応をたどって読む。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "craft",
        "title": "左右がそろう三角形",
        "text": "架空の三角形の飾りを二辺が同じ長さになるよう作る設定。底辺の中点へ頂点から線を引けば、共通辺をもつ二つの合同な三角形に分けて左右の関係を説明できる。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "△ABCでAB＝ACなら、等しい底角は？",
        "options": [
          "∠ABCと∠ACB",
          "∠BACと∠ABCが必ず等しい",
          "三つとも必ず等しい"
        ],
        "answer": "∠ABCと∠ACB",
        "explanation": "等しいABとACの向かいにあるCとBの角が対応する。",
        "hint": "辺の向かい側の頂点を見る。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "二等辺三角形の頂角が40°。一つの底角は？",
        "answer": 70,
        "explanation": "(180−40)÷2＝70°。",
        "hint": "残りを等しい二角へ分ける。",
        "suffix": "°",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "二等辺三角形の底角が各50°なら頂角は？",
        "answer": 80,
        "explanation": "180−50−50＝80°。",
        "hint": "底角は二つある。",
        "suffix": "°",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "△ABCで∠ABC＝∠ACBなら、等しい辺は？",
        "options": [
          "ACとAB",
          "BCとABが必ず等しい",
          "BCとACが必ず等しい"
        ],
        "answer": "ACとAB",
        "explanation": "Bの向かいはAC、Cの向かいはABなので等しい。",
        "hint": "角の向かいの辺へ対応をたどる。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "正三角形は二等辺三角形に含まれる？",
        "options": [
          "含まれない",
          "大きい場合だけ含まれる",
          "含まれる"
        ],
        "answer": "含まれる",
        "explanation": "三辺が等しければ、そのうちの二辺も等しいという定義を満たす。",
        "hint": "二辺が等しいという条件を確認する。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "正三角形の一つの内角は？",
        "answer": 60,
        "explanation": "三つが等しく合計180°なので180÷3＝60°。",
        "hint": "等辺から等角へつなぐ。",
        "suffix": "°",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "二等辺三角形という言葉の定義は？",
        "options": [
          "二辺が等しい三角形",
          "底角が70°の三角形だけ",
          "頂角が鋭角の三角形だけ"
        ],
        "answer": "二辺が等しい三角形",
        "explanation": "頂角や底角の具体的な大きさは一種類に決まらない。",
        "hint": "定義と特定の例を分ける。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "AB＝AC、DがBCの中点で、△ABDと△ACDを合同にできる根拠の組は？",
        "options": [
          "見た目が左右同じだからだけ",
          "三角形だから必ず合同",
          "等辺・中点・共通辺による三辺"
        ],
        "answer": "等辺・中点・共通辺による三辺",
        "explanation": "AB＝AC、BD＝CD、AD共通が三辺の条件をそろえる。",
        "hint": "一つずつ根拠を示す。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "角を予想：二等辺三角形の頂角が100°なら底角は？",
      "options": [
        "80°ずつ",
        "40°ずつ",
        "50°ずつ"
      ],
      "answer": "40°ずつ",
      "explanation": "残り80°を二つに分けて40°。",
      "hint": "鈍角の頂角でも同じ性質を使う。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "合同から底角の等しさへ",
      "prompt": "△ABCでAB＝ACのとき、底角が等しいことを示そう。",
      "steps": [
        {
          "text": "BCの中点Dを取り、AとDを結ぶ。"
        },
        {
          "text": "AB＝AC、BD＝CD、AD共通という三辺の等しさをそろえる。"
        },
        {
          "text": "三辺の合同条件で△ABD≡△ACDとする。"
        },
        {
          "text": "対応するB,Cの角が等しい。DはBC上なので、元の底角∠ABC＝∠ACBとなる。"
        }
      ],
      "answer": "二等辺三角形の底角は等しい",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "二等辺三角形では、頂角も含め三つの角が必ず同じになる。",
      "correction": "一般には等しいのは二つの底角。三角全てが等しいのは正三角形の場合で、頂角40°なら底角は70°ずつとなる。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "二等辺三角形の定義と底角の性質を分けて説明しよう。",
        "followUp": "角から辺へ逆向きに考えると、どの辺が等しくなる？",
        "checkpoints": [
          "定義は二辺の等しさと述べた。",
          "等しい角の向かいの二辺を対応させた。"
        ],
        "sample": "定義は二辺が等しいこと。合同などで底角が等しいと示せる。逆に二角が等しければ、その二角の向かい側の辺が等しくなる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "二辺が等しい三角形が二等辺三角形。その等しい辺に向かい合う二つの底角は等しい。逆に、二角が等しければ向かい合う二辺も等しいよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "△ABCでAB＝ACなら、底辺はBC、底角はBとCの角で、二角は等しい。頂角Aが40°なら残りは180−40＝140°、二つに等しく分けて底角は各70°。三辺が等しい正三角形も二辺が等しい条件を満たすので、二等辺三角形に含められる。どの二辺を選ぶかで対応する角を見るよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "二等辺三角形の定義は二辺の等長で、底角の等しさはその性質。逆に二内角が等しい三角形では、それらに向かう二辺が等しい。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "AB＝ACの三角形でDをBCの中点に取れば、AB＝AC、BD＝CD、AD共通から△ABD≡△ACDとなり、底角∠ABC＝∠ACBを導ける。逆の「二角が等しければ向かいの二辺が等しい」も成り立つ。正三角形では三組とも等辺なので三角は全て等しく、内角和180°から各60°。定義、性質、逆を取り違えず、等しい辺と向かいの角を対応させる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の△ABCでABとACへ同じ長さの印を付ける。ABの向かいはCの角、ACの向かいはBの角。この二角が等しいと、位置の対応をたどって読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の三角形の飾りを二辺が同じ長さになるよう作る設定。底辺の中点へ頂点から線を引けば、共通辺をもつ二つの合同な三角形に分けて左右の関係を説明できる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "△ABCでAB＝ACなら、等しい底角は？ 正答：∠ABCと∠ACB。 等しいABとACの向かいにあるCとBの角が対応する。 考える手がかり：辺の向かい側の頂点を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "二等辺三角形の頂角が40°。一つの底角は？ 正答：70。 (180−40)÷2＝70°。 考える手がかり：残りを等しい二角へ分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "二等辺三角形の底角が各50°なら頂角は？ 正答：80。 180−50−50＝80°。 考える手がかり：底角は二つある。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "△ABCで∠ABC＝∠ACBなら、等しい辺は？ 正答：ACとAB。 Bの向かいはAC、Cの向かいはABなので等しい。 考える手がかり：角の向かいの辺へ対応をたどる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "正三角形は二等辺三角形に含まれる？ 正答：含まれる。 三辺が等しければ、そのうちの二辺も等しいという定義を満たす。 考える手がかり：二辺が等しいという条件を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "正三角形の一つの内角は？ 正答：60。 三つが等しく合計180°なので180÷3＝60°。 考える手がかり：等辺から等角へつなぐ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "二等辺三角形という言葉の定義は？ 正答：二辺が等しい三角形。 頂角や底角の具体的な大きさは一種類に決まらない。 考える手がかり：定義と特定の例を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "AB＝AC、DがBCの中点で、△ABDと△ACDを合同にできる根拠の組は？ 正答：等辺・中点・共通辺による三辺。 AB＝AC、BD＝CD、AD共通が三辺の条件をそろえる。 考える手がかり：一つずつ根拠を示す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "角を予想：二等辺三角形の頂角が100°なら底角は？ 正答：40°ずつ。 残り80°を二つに分けて40°。 考える手がかり：鈍角の頂角でも同じ性質を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "二等辺三角形の定義と底角の性質を分けて説明しよう。 角から辺へ逆向きに考えると、どの辺が等しくなる？ 定義は二辺が等しいこと。合同などで底角が等しいと示せる。逆に二角が等しければ、その二角の向かい側の辺が等しくなる。 確認項目：定義は二辺の等しさと述べた。 / 等しい角の向かいの二辺を対応させた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "△ABCでAB＝ACのとき、底角が等しいことを示そう。 BCの中点Dを取り、AとDを結ぶ。 AB＝AC、BD＝CD、AD共通という三辺の等しさをそろえる。 三辺の合同条件で△ABD≡△ACDとする。 対応するB,Cの角が等しい。DはBC上なので、元の底角∠ABC＝∠ACBとなる。 結論：二等辺三角形の底角は等しい",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「二等辺三角形では、頂角も含め三つの角が必ず同じになる。」は誤り。一般には等しいのは二つの底角。三角全てが等しいのは正三角形の場合で、頂角40°なら底角は70°ずつとなる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "非退化三角形でAB=ACなら∠ABC=∠ACB。逆も成立する。二等辺三角形の頂角αなら底角各(180−α)/2。正三角形は二等辺三角形に含まれ、三角各60°。頂点と底辺中点を結ぶ線でSSSの合同を示せる。 操作図の事実：等脚三角形底辺2half、高さheight。等しい二辺と底角、頂点から中点への線。角を丸めて等しいと判定しない。 使用する状態範囲：half2..4; height3..4。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223222000000",
    "grade": 8,
    "title": "直角三角形の合同",
    "domain": "B",
    "order": 29,
    "goal": "両方が直角三角形という条件を確かめ、特別な合同条件を使う。",
    "coverageCodes": [
      "8350223222000000",
      "8350223221100000",
      "8350223221200000",
      "8350223222100000"
    ],
    "explanations": {
      "es": {
        "short": "直角三角形では、直角の向かいが斜辺。二つとも直角三角形なら、斜辺と一つの鋭角、または斜辺と他の一辺が等しいと合同になるよ。",
        "detail": "二つの三角形がどちらも直角三角形で、斜辺が5cm、もう一辺が3cmでそれぞれ等しいなら合同になる。直角という共通の条件があるから使える特別な条件だよ。斜辺と鋭角が同じ場合も、残りの鋭角は90°から引いて決まり、合同へつなげられる。"
      },
      "js": {
        "short": "直角三角形の合同条件は、斜辺と一鋭角がそれぞれ等しい、または斜辺と他の一辺がそれぞれ等しいことである。両三角形が非退化な直角三角形である前提を保つ。",
        "detail": "△ABC,△DEFで∠C＝∠F＝90°なら斜辺はAB,DE。AB＝DEと∠A＝∠Dが分かれば、残りの∠B＝∠Eも等しくなり、斜辺とその両端の角による合同条件へ帰着する。またAB＝DEとAC＝DFでも、直角三角形の斜辺と一辺の条件で合同となる。一般の三角形の「二辺とその間ではない角」と同じに扱わず、直角の前提を明示する。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "斜辺の場所を確かめる",
        "text": "架空の直角三角形を回転して描いても、斜辺は直角の向かいの辺。紙の上で斜めに見える辺という意味ではない。直角印から対応を追う。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "craft",
        "title": "直角をそろえた部品",
        "text": "教材用の二つの三角形部品はどちらも直角で、斜辺5cmと一辺3cmが等しい設定。向きを裏返しても、斜辺と一辺の条件で合同と判断できる。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "直角三角形の斜辺はどれ？",
        "options": [
          "紙の上で一番斜めに見える辺",
          "直角をはさむ二辺のどちらでもよい",
          "直角の向かいの辺"
        ],
        "answer": "直角の向かいの辺",
        "explanation": "向きではなく直角との位置関係で決まる。",
        "hint": "直角の頂点に接していない辺を探す。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "二つの直角三角形が合同となる条件は？",
        "options": [
          "両方の直角だけが等しい",
          "斜辺と一つの鋭角がそれぞれ等しい",
          "一つの鋭角だけが等しい"
        ],
        "answer": "斜辺と一つの鋭角がそれぞれ等しい",
        "explanation": "直角の共通条件に加え、斜辺と一鋭角がそろう必要がある。",
        "hint": "大きさまで決める条件があるか見る。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "二つとも直角三角形で、斜辺5cmと一辺3cmがそれぞれ等しいなら？",
        "options": [
          "合同である",
          "必ず合同ではない",
          "斜辺5cmは直角をはさむ辺である"
        ],
        "answer": "合同である",
        "explanation": "直角三角形の斜辺と他の一辺という合同条件を満たす。",
        "hint": "直角と斜辺の対応を先に確認する。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "直角三角形の一つの鋭角が30°なら、もう一つの鋭角は？",
        "answer": 60,
        "explanation": "二鋭角の和は90°なので90−30＝60°。",
        "hint": "内角和180°から直角を除く。",
        "suffix": "°",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "二つの直角三角形で直角をはさむ二辺がそれぞれ3cm,4cmと等しい。使える一般の合同条件は？",
        "options": [
          "一辺だけが等しい",
          "二辺とその間の角",
          "三角だけが等しい"
        ],
        "answer": "二辺とその間の角",
        "explanation": "二辺の間は両方90°なのでSASを使える。",
        "hint": "直角が二辺の間にあることを見る。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "一般の三角形へ、直角の条件なしで斜辺と一辺の合同条件を使える？",
        "options": [
          "使えない",
          "どんな三角形でも使える",
          "三辺を調べる必要は全くない"
        ],
        "answer": "使えない",
        "explanation": "この条件は両方が直角三角形という前提で成り立つ。",
        "hint": "定理の対象を確認する。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "∠C＝∠F＝90°の△ABCと△DEFで斜辺同士は？",
        "options": [
          "ACとDF",
          "BCとEFだけ",
          "ABとDE"
        ],
        "answer": "ABとDE",
        "explanation": "直角頂点C,Fの向かいにあるAB,DEが斜辺。",
        "hint": "三角形の向きより頂点名を見る。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "二つの直角三角形で、斜辺と一鋭角がそれぞれ等しいとき、残りの鋭角も等しい理由は？",
        "options": [
          "斜辺が水平だから",
          "どちらも90°から同じ鋭角を引くから",
          "どの三角形も三角が同じだから"
        ],
        "answer": "どちらも90°から同じ鋭角を引くから",
        "explanation": "直角三角形の二鋭角の和は90°であり、片方が同じなら残りも同じ。",
        "hint": "角の和を使って補う。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "合同を予想：二つの直角三角形で、斜辺だけが5cmと等しいなら？",
      "options": [
        "それだけでは合同とは限らない",
        "必ず合同",
        "必ず一辺も5cm"
      ],
      "answer": "それだけでは合同とは限らない",
      "explanation": "斜辺の長さを保って鋭角を変えた直角三角形も作れるので、もう一条件が必要。",
      "hint": "斜辺と何がそろう条件だったか振り返る。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "直角と斜辺を先に確かめる",
      "prompt": "∠C＝∠F＝90°、AB＝DE＝5cm、AC＝DF＝3cmの△ABC,△DEFを比べよう。",
      "steps": [
        {
          "text": "どちらも直角三角形であり、直角の向かいのAB,DEが斜辺と確認する。"
        },
        {
          "text": "斜辺AB＝DE＝5cmが等しい。"
        },
        {
          "text": "斜辺以外の対応辺AC＝DF＝3cmも等しい。"
        },
        {
          "text": "直角三角形の斜辺と他の一辺がそれぞれ等しいので△ABC≡△DEF。"
        }
      ],
      "answer": "△ABC≡△DEF",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "直角三角形の条件を使うとき、直角であることは省いてよい。",
      "correction": "両方が直角三角形であることが特別な合同条件の前提。一般の二辺とその間でない角へ無条件に拡張しない。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "斜辺と一辺の合同条件を使う前に、どの印や条件を確認する？",
        "followUp": "斜辺と一鋭角なら、残りの鋭角はどう決まる？",
        "checkpoints": [
          "両方の直角と斜辺の対応を確認した。",
          "二鋭角の和90°を使った。"
        ],
        "sample": "両方が直角三角形で、等しい辺が本当に斜辺かを確かめる。鋭角一つが同じなら残りは90°から引いて等しくなり、一般の合同条件へつながる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "直角三角形では、直角の向かいが斜辺。二つとも直角三角形なら、斜辺と一つの鋭角、または斜辺と他の一辺が等しいと合同になるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "二つの三角形がどちらも直角三角形で、斜辺が5cm、もう一辺が3cmでそれぞれ等しいなら合同になる。直角という共通の条件があるから使える特別な条件だよ。斜辺と鋭角が同じ場合も、残りの鋭角は90°から引いて決まり、合同へつなげられる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "直角三角形の合同条件は、斜辺と一鋭角がそれぞれ等しい、または斜辺と他の一辺がそれぞれ等しいことである。両三角形が非退化な直角三角形である前提を保つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "△ABC,△DEFで∠C＝∠F＝90°なら斜辺はAB,DE。AB＝DEと∠A＝∠Dが分かれば、残りの∠B＝∠Eも等しくなり、斜辺とその両端の角による合同条件へ帰着する。またAB＝DEとAC＝DFでも、直角三角形の斜辺と一辺の条件で合同となる。一般の三角形の「二辺とその間ではない角」と同じに扱わず、直角の前提を明示する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の直角三角形を回転して描いても、斜辺は直角の向かいの辺。紙の上で斜めに見える辺という意味ではない。直角印から対応を追う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材用の二つの三角形部品はどちらも直角で、斜辺5cmと一辺3cmが等しい設定。向きを裏返しても、斜辺と一辺の条件で合同と判断できる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "直角三角形の斜辺はどれ？ 正答：直角の向かいの辺。 向きではなく直角との位置関係で決まる。 考える手がかり：直角の頂点に接していない辺を探す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "二つの直角三角形が合同となる条件は？ 正答：斜辺と一つの鋭角がそれぞれ等しい。 直角の共通条件に加え、斜辺と一鋭角がそろう必要がある。 考える手がかり：大きさまで決める条件があるか見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "二つとも直角三角形で、斜辺5cmと一辺3cmがそれぞれ等しいなら？ 正答：合同である。 直角三角形の斜辺と他の一辺という合同条件を満たす。 考える手がかり：直角と斜辺の対応を先に確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "直角三角形の一つの鋭角が30°なら、もう一つの鋭角は？ 正答：60。 二鋭角の和は90°なので90−30＝60°。 考える手がかり：内角和180°から直角を除く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "二つの直角三角形で直角をはさむ二辺がそれぞれ3cm,4cmと等しい。使える一般の合同条件は？ 正答：二辺とその間の角。 二辺の間は両方90°なのでSASを使える。 考える手がかり：直角が二辺の間にあることを見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "一般の三角形へ、直角の条件なしで斜辺と一辺の合同条件を使える？ 正答：使えない。 この条件は両方が直角三角形という前提で成り立つ。 考える手がかり：定理の対象を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "∠C＝∠F＝90°の△ABCと△DEFで斜辺同士は？ 正答：ABとDE。 直角頂点C,Fの向かいにあるAB,DEが斜辺。 考える手がかり：三角形の向きより頂点名を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "二つの直角三角形で、斜辺と一鋭角がそれぞれ等しいとき、残りの鋭角も等しい理由は？ 正答：どちらも90°から同じ鋭角を引くから。 直角三角形の二鋭角の和は90°であり、片方が同じなら残りも同じ。 考える手がかり：角の和を使って補う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "合同を予想：二つの直角三角形で、斜辺だけが5cmと等しいなら？ 正答：それだけでは合同とは限らない。 斜辺の長さを保って鋭角を変えた直角三角形も作れるので、もう一条件が必要。 考える手がかり：斜辺と何がそろう条件だったか振り返る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "斜辺と一辺の合同条件を使う前に、どの印や条件を確認する？ 斜辺と一鋭角なら、残りの鋭角はどう決まる？ 両方が直角三角形で、等しい辺が本当に斜辺かを確かめる。鋭角一つが同じなら残りは90°から引いて等しくなり、一般の合同条件へつながる。 確認項目：両方の直角と斜辺の対応を確認した。 / 二鋭角の和90°を使った。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "∠C＝∠F＝90°、AB＝DE＝5cm、AC＝DF＝3cmの△ABC,△DEFを比べよう。 どちらも直角三角形であり、直角の向かいのAB,DEが斜辺と確認する。 斜辺AB＝DE＝5cmが等しい。 斜辺以外の対応辺AC＝DF＝3cmも等しい。 直角三角形の斜辺と他の一辺がそれぞれ等しいので△ABC≡△DEF。 結論：△ABC≡△DEF",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「直角三角形の条件を使うとき、直角であることは省いてよい。」は誤り。両方が直角三角形であることが特別な合同条件の前提。一般の二辺とその間でない角へ無条件に拡張しない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "非退化な直角三角形二つでは、斜辺と他の一辺、または斜辺と一鋭角がそれぞれ等しければ合同。斜辺は直角の向かいの辺。二鋭角の和90°。3,4,5の三辺をもつ直角三角形の回転・裏返しは合同を保つ。 操作図の事実：3-4-5直角三角形2枚。斜辺と他の一辺、斜辺と一鋭角の合同条件。直角は仮定として表示。 使用する状態範囲：condition leg/angle; pose same/reflect。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223220000000",
    "grade": 8,
    "title": "平行四辺形の性質",
    "domain": "B",
    "order": 30,
    "goal": "平行四辺形の定義から対辺・対角・対角線の性質を導く。",
    "coverageCodes": [
      "8350223220000000",
      "8350223221000000",
      "8350223222100000",
      "8350223222200000"
    ],
    "explanations": {
      "es": {
        "short": "二組の向かい合う辺がそれぞれ平行な四角形が平行四辺形。対辺の長さ、対角の大きさが等しく、対角線は互いの中点で交わるよ。",
        "detail": "平行四辺形ABCDに対角線ACを引く。AB∥CD、BC∥ADから錯角が等しく、ACは共通。二つの三角形が合同になるのでAB＝CD、BC＝ADが分かる。平行という定義から等しい長さへつながるんだ。対角線二本の交点では、それぞれの線分が半分ずつに分かれる。"
      },
      "js": {
        "short": "平行四辺形は二組の対辺がそれぞれ平行な四角形。対辺等長、対角等角、対角線の相互二等分はこの定義から導く性質である。",
        "detail": "平行四辺形ABCDを対角線ACで分けると、平行線の錯角と共通辺から△ABC≡△CDAとなる。これにより対辺や対角の等しさを導ける。二対角線の交点をOとすればAO＝CO、BO＝DO。ただしAC＝BDとは一般にはいえないし、対角線が垂直とも限らない。隣り合う内角の和は180°で、各角が90°であるとは限らない。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "傾きを変えても残る性質",
        "text": "架空の平行四辺形の上側を左右へずらしても、二組の対辺の平行を保つ設定なら対辺の長さはそれぞれ等しい。角が直角でなくても平行四辺形として扱う。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "craft",
        "title": "対角線の中点を合わせる",
        "text": "教材用の平行四辺形に二本の対角線を描く。交点がそれぞれの線分を半分にすることを読む。二本の対角線同士の全長が等しいという意味ではない。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "平行四辺形の定義は？",
        "options": [
          "全ての角が鋭角の四角形",
          "二組の対辺がそれぞれ平行な四角形",
          "一組の対辺だけが等しい四角形"
        ],
        "answer": "二組の対辺がそれぞれ平行な四角形",
        "explanation": "平行の条件が二組そろうことが定義。",
        "hint": "定義と後から分かる性質を分ける。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "平行四辺形ABCDでAB＝5cmならCDは？",
        "answer": 5,
        "explanation": "向かい合う辺は等しいので5cm。",
        "hint": "辺の対応を確認する。",
        "suffix": "cm",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "平行四辺形の一つの内角が70°。その向かいの内角は？",
        "answer": 70,
        "explanation": "対角は等しいので70°。",
        "hint": "向かいの角と隣の角を区別する。",
        "suffix": "°",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "平行四辺形の一つの内角が70°。その隣の内角は？",
        "answer": 110,
        "explanation": "隣り合う内角の和180°より110°。",
        "hint": "平行線の同じ側の内角を使う。",
        "suffix": "°",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "平行四辺形の対角線ACが10cmで、交点Oがその中点ならAOは？",
        "answer": 5,
        "explanation": "AO＝CO＝10÷2＝5cm。",
        "hint": "一方の対角線が半分になる。",
        "suffix": "cm",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "平行四辺形の対角線について常に正しいのは？",
        "options": [
          "二本の全長が必ず等しい",
          "必ず垂直に交わる",
          "互いの中点で交わる"
        ],
        "answer": "互いの中点で交わる",
        "explanation": "一般の平行四辺形で保証されるのは相互の二等分。",
        "hint": "二本同士の等長と取り違えない。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "平行四辺形を一本の対角線で二三角形へ分けたとき、共通になるのは？",
        "options": [
          "どの辺も共通でない",
          "引いた対角線",
          "全ての辺が同じ一本"
        ],
        "answer": "引いた対角線",
        "explanation": "二三角形が同じ対角線を一辺としてもつ。",
        "hint": "三角形同士が接する線を見る。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "平行四辺形の全ての内角は必ず90°？",
        "options": [
          "必ずではない",
          "必ず90°",
          "必ず60°"
        ],
        "answer": "必ずではない",
        "explanation": "二組の対辺が平行でも斜めの形を含む。全て90°なら長方形という特別な場合。",
        "hint": "定義が直角を要求しているか読む。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "中点を予想：平行四辺形ABCDの二対角線AC,BDがOで交わり、BO＝3cmならDOは？",
      "options": [
        "6cm",
        "必ず5cm",
        "3cm"
      ],
      "answer": "3cm",
      "explanation": "同じ対角線BDをOが二等分するのでBO＝DO。",
      "hint": "どの対角線上の二部分を比べるか見る。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "平行から辺の等しさへ",
      "prompt": "平行四辺形ABCDでAB＝CDを示そう。",
      "steps": [
        {
          "text": "対角線ACを引き、△ABCと△CDAを比べる。"
        },
        {
          "text": "AB∥CDから∠BAC＝∠DCA、BC∥ADから∠BCA＝∠DAC。"
        },
        {
          "text": "ACは共通で、その両端の角がそれぞれ等しいので二三角形は合同。"
        },
        {
          "text": "対応する辺が等しいためAB＝CD。平行という定義から性質を導けた。"
        }
      ],
      "answer": "AB＝CD",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "対角線が互いに二等分するので、二本の対角線の全長も等しい。",
      "correction": "二等分とは各対角線が交点で半分になること。AC全体とBD全体が等しいとは限らず、一般の平行四辺形では長さが違うこともある。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "平行四辺形の定義と、そこから分かる性質を一つずつ説明しよう。",
        "followUp": "対角線の「互いに二等分」と「二本が等長」はどう違う？",
        "checkpoints": [
          "定義は二組の対辺の平行と述べた。",
          "各対角線内部の等しさと二本の比較を分けた。"
        ],
        "sample": "定義は二組の対辺が平行。そこから対辺が等しいなどを示せる。二等分はAO＝CO、BO＝DOであり、AC＝BDという二本同士の等長とは別。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "二組の向かい合う辺がそれぞれ平行な四角形が平行四辺形。対辺の長さ、対角の大きさが等しく、対角線は互いの中点で交わるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "平行四辺形ABCDに対角線ACを引く。AB∥CD、BC∥ADから錯角が等しく、ACは共通。二つの三角形が合同になるのでAB＝CD、BC＝ADが分かる。平行という定義から等しい長さへつながるんだ。対角線二本の交点では、それぞれの線分が半分ずつに分かれる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "平行四辺形は二組の対辺がそれぞれ平行な四角形。対辺等長、対角等角、対角線の相互二等分はこの定義から導く性質である。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "平行四辺形ABCDを対角線ACで分けると、平行線の錯角と共通辺から△ABC≡△CDAとなる。これにより対辺や対角の等しさを導ける。二対角線の交点をOとすればAO＝CO、BO＝DO。ただしAC＝BDとは一般にはいえないし、対角線が垂直とも限らない。隣り合う内角の和は180°で、各角が90°であるとは限らない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の平行四辺形の上側を左右へずらしても、二組の対辺の平行を保つ設定なら対辺の長さはそれぞれ等しい。角が直角でなくても平行四辺形として扱う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材用の平行四辺形に二本の対角線を描く。交点がそれぞれの線分を半分にすることを読む。二本の対角線同士の全長が等しいという意味ではない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "平行四辺形の定義は？ 正答：二組の対辺がそれぞれ平行な四角形。 平行の条件が二組そろうことが定義。 考える手がかり：定義と後から分かる性質を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "平行四辺形ABCDでAB＝5cmならCDは？ 正答：5。 向かい合う辺は等しいので5cm。 考える手がかり：辺の対応を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "平行四辺形の一つの内角が70°。その向かいの内角は？ 正答：70。 対角は等しいので70°。 考える手がかり：向かいの角と隣の角を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "平行四辺形の一つの内角が70°。その隣の内角は？ 正答：110。 隣り合う内角の和180°より110°。 考える手がかり：平行線の同じ側の内角を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "平行四辺形の対角線ACが10cmで、交点Oがその中点ならAOは？ 正答：5。 AO＝CO＝10÷2＝5cm。 考える手がかり：一方の対角線が半分になる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "平行四辺形の対角線について常に正しいのは？ 正答：互いの中点で交わる。 一般の平行四辺形で保証されるのは相互の二等分。 考える手がかり：二本同士の等長と取り違えない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "平行四辺形を一本の対角線で二三角形へ分けたとき、共通になるのは？ 正答：引いた対角線。 二三角形が同じ対角線を一辺としてもつ。 考える手がかり：三角形同士が接する線を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "平行四辺形の全ての内角は必ず90°？ 正答：必ずではない。 二組の対辺が平行でも斜めの形を含む。全て90°なら長方形という特別な場合。 考える手がかり：定義が直角を要求しているか読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "中点を予想：平行四辺形ABCDの二対角線AC,BDがOで交わり、BO＝3cmならDOは？ 正答：3cm。 同じ対角線BDをOが二等分するのでBO＝DO。 考える手がかり：どの対角線上の二部分を比べるか見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "平行四辺形の定義と、そこから分かる性質を一つずつ説明しよう。 対角線の「互いに二等分」と「二本が等長」はどう違う？ 定義は二組の対辺が平行。そこから対辺が等しいなどを示せる。二等分はAO＝CO、BO＝DOであり、AC＝BDという二本同士の等長とは別。 確認項目：定義は二組の対辺の平行と述べた。 / 各対角線内部の等しさと二本の比較を分けた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "平行四辺形ABCDでAB＝CDを示そう。 対角線ACを引き、△ABCと△CDAを比べる。 AB∥CDから∠BAC＝∠DCA、BC∥ADから∠BCA＝∠DAC。 ACは共通で、その両端の角がそれぞれ等しいので二三角形は合同。 対応する辺が等しいためAB＝CD。平行という定義から性質を導けた。 結論：AB＝CD",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「対角線が互いに二等分するので、二本の対角線の全長も等しい。」は誤り。二等分とは各対角線が交点で半分になること。AC全体とBD全体が等しいとは限らず、一般の平行四辺形では長さが違うこともある。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "単純で非退化な平行四辺形の定義は二組の対辺がそれぞれ平行。対辺等長、対角等角、隣角和180°、対角線は互いの中点で交わる。一般には対角線の全長は等しくなく、垂直とも限らない。 操作図の事実：底辺5、高さ3の平行四辺形。対辺平行/等長、対角線が互いに中点で交わる。 使用する状態範囲：shear−2..2。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223222200000",
    "grade": 8,
    "title": "平行四辺形になる条件と活用",
    "domain": "B",
    "order": 31,
    "goal": "平行四辺形になる十分な条件を選び、不十分な条件と区別する。",
    "coverageCodes": [
      "8350223222200000",
      "8350223222100000",
      "8350222220000000",
      "8350223512000000"
    ],
    "explanations": {
      "es": {
        "short": "平行四辺形といえる条件はいくつかある。二組の対辺が等しい、対角線が互いに二等分する、など。条件の「二組」や「同じ一組」を抜かさないようにしよう。",
        "detail": "辺が交差しない四角形で、一組の向かい合う辺が平行で、しかもその同じ二辺の長さが等しければ平行四辺形になる。平行だけ、等しいだけでは足りない。二組の対辺がそれぞれ等しい場合や、対角線が互いの中点で交わる場合なども、合同や角の性質から二組の平行へつなげられるよ。"
      },
      "js": {
        "short": "平行四辺形になる条件には、二組の対辺の平行、二組の対辺の等長、二組の対角の等角、対角線の相互二等分、一組の対辺が平行かつ等長、がある。",
        "detail": "ここでは辺が交差しない非退化な四角形を扱う。一組の対辺AB,CDが平行かつ等しいとき、対角線ACを引くと錯角と共通辺を使って二三角形が合同となり、残りのBC,ADも平行と示せる。平行な一組と、等長な別の一組を別々に与えただけでは同じ条件にならない。条件を必要な組までそろえ、どの性質から定義の二組の平行へ戻るかを考える。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "枠の条件を選ぶ",
        "text": "架空の四角形の枠で、向かい合う同じ一組の辺を平行かつ等長に保つ設定なら、枠は平行四辺形になる。平行だけでは台形なども含む。",
        "activityIds": [
          "craft-cardboard"
        ]
      },
      {
        "category": "drawing",
        "title": "対角線の印から形を読む",
        "text": "教材用の四角形の対角線に、交点の前後がそれぞれ等しい印を付ける。二本とも二等分される条件から平行四辺形と判断できる。一方だけの印では足りない。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "辺が交差しない四角形が平行四辺形になる条件は？",
        "options": [
          "二組の対辺がそれぞれ等しい",
          "一組の対辺だけが等しい",
          "一つの角だけが直角"
        ],
        "answer": "二組の対辺がそれぞれ等しい",
        "explanation": "二組そろう対辺の等長は十分条件。一組だけでは保証しない。",
        "hint": "一組か二組かを見る。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "辺が交差しない四角形が平行四辺形になるため、一組の対辺を使う十分な条件は？",
        "options": [
          "一組が平行なだけ",
          "一組が等長なだけ",
          "同じ一組が平行で長さも等しい"
        ],
        "answer": "同じ一組が平行で長さも等しい",
        "explanation": "平行と等長が同じ二辺にそろう必要がある。",
        "hint": "二つの条件の対象を確かめる。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "対角線を使う平行四辺形の条件は？",
        "options": [
          "垂直に交わるだけ",
          "互いの中点で交わる",
          "長さが等しいだけ"
        ],
        "answer": "互いの中点で交わる",
        "explanation": "二本がそれぞれ二等分される条件が必要。等長だけや垂直だけでは別の四角形もある。",
        "hint": "各対角線の分かれ方を見る。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "四角形の二組の対角がそれぞれ等しいなら？",
        "options": [
          "平行四辺形になる",
          "必ず台形だけになる",
          "何も判断できない"
        ],
        "answer": "平行四辺形になる",
        "explanation": "四角形の内角和と角の等しさから隣角和180°を得て、二組の平行へつなげられる。",
        "hint": "角の条件も十分条件として使える。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "対辺AB∥CDと、別の対辺AD＝BCだけでは平行四辺形といえる？",
        "options": [
          "必ずいえる",
          "必ず正方形になる",
          "いえない"
        ],
        "answer": "いえない",
        "explanation": "左右対称な台形などでもこの二条件は成り立つ。同じ一組の平行かつ等長とは違う。",
        "hint": "条件を付けた辺が同じ組か比べる。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "対角線の交点OでAO＝COだけ分かった。平行四辺形といえる？",
        "options": [
          "AO＝COなら全ての辺も等しい",
          "まだ。もう一方のBO＝DOも必要",
          "必ずいえる"
        ],
        "answer": "まだ。もう一方のBO＝DOも必要",
        "explanation": "相互二等分には両方の対角線の条件が要る。",
        "hint": "片方だけ確認して終えない。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "AB∥CDかつAB＝CDの四角形で、対角線ACを引く主な目的は？",
        "options": [
          "合同を使って残りの一組の平行を示す",
          "四角形を正方形へ変形する",
          "面積を必ず半分に縮める"
        ],
        "answer": "合同を使って残りの一組の平行を示す",
        "explanation": "二辺と挟角の合同から、BCとADの平行を導ける。",
        "hint": "定義へ戻るため足りない関係を考える。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "「二組の対辺が平行」という条件は？",
        "options": [
          "一組の対辺が等しいだけと同じ",
          "長方形だけの条件",
          "平行四辺形の定義そのもの"
        ],
        "answer": "平行四辺形の定義そのもの",
        "explanation": "二組の平行がそろえば定義を満たす。",
        "hint": "定義と十分条件のつながりを見る。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "条件を予想：辺が交差しない四角形で、二本の対角線が互いを二等分するなら？",
      "options": [
        "必ず長方形ではない別の形",
        "平行四辺形",
        "必ず正方形"
      ],
      "answer": "平行四辺形",
      "explanation": "相互二等分は平行四辺形の十分条件。ただし長方形や正方形かまでは決まらない。",
      "hint": "言える範囲を広げ過ぎない。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "一組の平行と等長からもう一組へ",
      "prompt": "AB∥CD、AB＝CDの四角形ABCDが平行四辺形になることを考えよう。",
      "steps": [
        {
          "text": "辺が交差しない非退化な四角形とし、対角線ACを引く。"
        },
        {
          "text": "AB＝CD、AC共通、平行線の錯角∠BAC＝∠DCAから△BAC≡△DCA。"
        },
        {
          "text": "合同の対応角∠BCA＝∠DACより、錯角が等しいのでBC∥AD。"
        },
        {
          "text": "元のAB∥CDと合わせ二組の対辺が平行となり、定義から平行四辺形。"
        }
      ],
      "answer": "同じ一組の対辺が平行かつ等長なら平行四辺形",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "一組の対辺が等しいだけで、四角形は必ず平行四辺形になる。",
      "correction": "一組の等長だけでは足りない。二組の対辺が等しい、または同じ一組が平行かつ等しいなど、十分な条件をそろえる。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "平行四辺形になる条件を一つ選び、抜くと困る言葉を説明しよう。",
        "followUp": "自分の選んだ条件から、定義の二組の平行へどうつながる？",
        "checkpoints": [
          "二組や同じ一組などの条件を保った。",
          "合同や角の性質と定義を結び付けた。"
        ],
        "sample": "一組の対辺が平行かつ等長なら、同じ一組という条件が大切。対角線で分けた三角形の合同から残りの一組も平行と分かり、定義を満たす。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "平行四辺形といえる条件はいくつかある。二組の対辺が等しい、対角線が互いに二等分する、など。条件の「二組」や「同じ一組」を抜かさないようにしよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "辺が交差しない四角形で、一組の向かい合う辺が平行で、しかもその同じ二辺の長さが等しければ平行四辺形になる。平行だけ、等しいだけでは足りない。二組の対辺がそれぞれ等しい場合や、対角線が互いの中点で交わる場合なども、合同や角の性質から二組の平行へつなげられるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "平行四辺形になる条件には、二組の対辺の平行、二組の対辺の等長、二組の対角の等角、対角線の相互二等分、一組の対辺が平行かつ等長、がある。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "ここでは辺が交差しない非退化な四角形を扱う。一組の対辺AB,CDが平行かつ等しいとき、対角線ACを引くと錯角と共通辺を使って二三角形が合同となり、残りのBC,ADも平行と示せる。平行な一組と、等長な別の一組を別々に与えただけでは同じ条件にならない。条件を必要な組までそろえ、どの性質から定義の二組の平行へ戻るかを考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の四角形の枠で、向かい合う同じ一組の辺を平行かつ等長に保つ設定なら、枠は平行四辺形になる。平行だけでは台形なども含む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材用の四角形の対角線に、交点の前後がそれぞれ等しい印を付ける。二本とも二等分される条件から平行四辺形と判断できる。一方だけの印では足りない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "辺が交差しない四角形が平行四辺形になる条件は？ 正答：二組の対辺がそれぞれ等しい。 二組そろう対辺の等長は十分条件。一組だけでは保証しない。 考える手がかり：一組か二組かを見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "辺が交差しない四角形が平行四辺形になるため、一組の対辺を使う十分な条件は？ 正答：同じ一組が平行で長さも等しい。 平行と等長が同じ二辺にそろう必要がある。 考える手がかり：二つの条件の対象を確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "対角線を使う平行四辺形の条件は？ 正答：互いの中点で交わる。 二本がそれぞれ二等分される条件が必要。等長だけや垂直だけでは別の四角形もある。 考える手がかり：各対角線の分かれ方を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "四角形の二組の対角がそれぞれ等しいなら？ 正答：平行四辺形になる。 四角形の内角和と角の等しさから隣角和180°を得て、二組の平行へつなげられる。 考える手がかり：角の条件も十分条件として使える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "対辺AB∥CDと、別の対辺AD＝BCだけでは平行四辺形といえる？ 正答：いえない。 左右対称な台形などでもこの二条件は成り立つ。同じ一組の平行かつ等長とは違う。 考える手がかり：条件を付けた辺が同じ組か比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "対角線の交点OでAO＝COだけ分かった。平行四辺形といえる？ 正答：まだ。もう一方のBO＝DOも必要。 相互二等分には両方の対角線の条件が要る。 考える手がかり：片方だけ確認して終えない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "AB∥CDかつAB＝CDの四角形で、対角線ACを引く主な目的は？ 正答：合同を使って残りの一組の平行を示す。 二辺と挟角の合同から、BCとADの平行を導ける。 考える手がかり：定義へ戻るため足りない関係を考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "「二組の対辺が平行」という条件は？ 正答：平行四辺形の定義そのもの。 二組の平行がそろえば定義を満たす。 考える手がかり：定義と十分条件のつながりを見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "条件を予想：辺が交差しない四角形で、二本の対角線が互いを二等分するなら？ 正答：平行四辺形。 相互二等分は平行四辺形の十分条件。ただし長方形や正方形かまでは決まらない。 考える手がかり：言える範囲を広げ過ぎない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "平行四辺形になる条件を一つ選び、抜くと困る言葉を説明しよう。 自分の選んだ条件から、定義の二組の平行へどうつながる？ 一組の対辺が平行かつ等長なら、同じ一組という条件が大切。対角線で分けた三角形の合同から残りの一組も平行と分かり、定義を満たす。 確認項目：二組や同じ一組などの条件を保った。 / 合同や角の性質と定義を結び付けた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "AB∥CD、AB＝CDの四角形ABCDが平行四辺形になることを考えよう。 辺が交差しない非退化な四角形とし、対角線ACを引く。 AB＝CD、AC共通、平行線の錯角∠BAC＝∠DCAから△BAC≡△DCA。 合同の対応角∠BCA＝∠DACより、錯角が等しいのでBC∥AD。 元のAB∥CDと合わせ二組の対辺が平行となり、定義から平行四辺形。 結論：同じ一組の対辺が平行かつ等長なら平行四辺形",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「一組の対辺が等しいだけで、四角形は必ず平行四辺形になる。」は誤り。一組の等長だけでは足りない。二組の対辺が等しい、または同じ一組が平行かつ等しいなど、十分な条件をそろえる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "辺が交差しない非退化四角形では、二組対辺平行、二組対辺等長、二組対角等角、対角線相互二等分、同じ一組の対辺が平行かつ等長の各条件で平行四辺形といえる。一組等長だけ、一組平行だけ、異なる組へ別々の平行と等長だけでは不十分。 操作図の事実：平行四辺形になる5条件を同一の成立する図で対応表示。1組だけの対辺等長を十分条件にしない。 使用する状態範囲：condition parallel/equal/both/diagonal/angle; shear0..2。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350225100000000",
    "grade": 8,
    "title": "特別な平行四辺形",
    "domain": "B",
    "order": 32,
    "goal": "長方形・ひし形・正方形を平行四辺形の特別な形として整理する。",
    "coverageCodes": [
      "8350225100000000",
      "8350223222100000"
    ],
    "explanations": {
      "es": {
        "short": "長方形は四つの角が直角、ひし形は四辺が等しい四角形。両方の条件を満たすのが正方形。どれも平行四辺形の仲間だよ。",
        "detail": "正方形は四つの角が直角なので長方形でもあり、四辺が等しいのでひし形でもある。一種類だけに分けるのではなく、満たす条件を全て読む。対角線を見ると、長方形では二本の長さが等しく、ひし形では垂直に交わる。正方形では両方の性質を持つよ。"
      },
      "js": {
        "short": "長方形・ひし形・正方形は平行四辺形の特別な形である。正方形は長方形とひし形の両方の定義を満たし、分類は互いに排他的ではない。",
        "detail": "長方形は四つの内角が直角の四角形、ひし形は四辺の長さが等しい四角形、正方形は両条件を満たす。いずれも二組の対辺が平行である。平行四辺形の中では、対角線が等長なら長方形、垂直ならひし形と判断でき、両方なら正方形となる。平行四辺形という前提なしに対角線の一性質だけから同じ分類をしてはいけない。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "条件の輪を重ねる",
        "text": "教材用の図で「長方形」と「ひし形」の条件の輪を重ね、重なる部分へ正方形を置く。外側には平行四辺形の輪を置き、含まれる関係を示す。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "craft",
        "title": "対角線で部品を比べる",
        "text": "架空の長方形・ひし形・正方形の部品に対角線を引く。長方形は等長、ひし形は垂直、正方形は両方。全ての部品で対角線は互いを二等分する。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "長方形の定義は？",
        "options": [
          "四辺が等しい四角形だけ",
          "対角線が一本だけある図形",
          "四つの角が直角の四角形"
        ],
        "answer": "四つの角が直角の四角形",
        "explanation": "直角四つという条件を使う。四辺の等長は必要ではない。",
        "hint": "角の条件と辺の条件を分ける。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "ひし形の定義は？",
        "options": [
          "一組の対辺だけが等しい図形",
          "四辺が等しい四角形",
          "必ず四つの角が全て90°の図形だけ"
        ],
        "answer": "四辺が等しい四角形",
        "explanation": "四辺の等長が定義。角が直角の場合も含む。",
        "hint": "どの辺が何本等しいか確認する。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "正方形について正しいのは？",
        "options": [
          "長方形でもひし形でもある",
          "長方形ではあるがひし形ではない",
          "どちらにも含まれない"
        ],
        "answer": "長方形でもひし形でもある",
        "explanation": "角と辺の両方の定義を満たす。",
        "hint": "一つの図形が複数の条件を満たしてよい。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "一般の長方形の対角線で常に正しいのは？",
        "options": [
          "必ず垂直に交わる",
          "必ず辺と同じ長さ",
          "二本の長さが等しい"
        ],
        "answer": "二本の長さが等しい",
        "explanation": "等長と相互二等分は成り立つが、垂直は正方形など特別な場合。",
        "hint": "一般と特別な場合を区別する。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "ひし形の対角線で常に正しいのは？",
        "options": [
          "交わらない",
          "垂直に交わる",
          "二本の全長が必ず等しい"
        ],
        "answer": "垂直に交わる",
        "explanation": "ひし形の対角線は垂直に交わり、互いを二等分する。等長とは限らない。",
        "hint": "角の関係と長さの関係を分ける。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "正方形の一つの内角は？",
        "answer": 90,
        "explanation": "長方形の条件も満たすため各角は直角90°。",
        "hint": "正方形の角の定義を使う。",
        "suffix": "°",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "全ての平行四辺形は長方形？",
        "options": [
          "必ず長方形",
          "必ず正方形",
          "そうではない"
        ],
        "answer": "そうではない",
        "explanation": "平行四辺形には角が直角でないものもある。特別な形が全体の全てを占めるわけではない。",
        "hint": "含まれる向きを確認する。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "平行四辺形で対角線が等長かつ垂直なら？",
        "options": [
          "条件が全く足りない",
          "正方形",
          "必ず長方形ではないひし形"
        ],
        "answer": "正方形",
        "explanation": "平行四辺形の中で等長は長方形、垂直はひし形の条件を与え、両方で正方形。",
        "hint": "前提の平行四辺形を保って判断する。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "仲間分け予想：四辺が全て3cmで四つの角が全て直角の四角形は、どこへ入る？",
      "options": [
        "正方形・長方形・ひし形・平行四辺形",
        "正方形だけ",
        "長方形だけ"
      ],
      "answer": "正方形・長方形・ひし形・平行四辺形",
      "explanation": "四つの角の直角と四辺の等長の両方を満たすので、四つの分類に含まれる。",
      "hint": "全ての辺が同じ長さという条件を確認する。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "一つの形が複数の定義を満たす",
      "prompt": "四辺が3cmで四つの角が90°の四角形を分類しよう。",
      "steps": [
        {
          "text": "四つの角が直角なので長方形の定義を満たす。"
        },
        {
          "text": "四辺が等しいのでひし形の定義も満たす。"
        },
        {
          "text": "両方を満たすので正方形である。"
        },
        {
          "text": "長方形・ひし形はいずれも平行四辺形の特別な形なので、平行四辺形にも含まれる。"
        }
      ],
      "answer": "正方形であり、長方形・ひし形・平行四辺形でもある",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "正方形は正方形という一種類なので、長方形やひし形には含まれない。",
      "correction": "分類は満たす定義で考える。正方形は直角四つと四辺等長の両方を満たすため、長方形でもひし形でもある。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "正方形が長方形にもひし形にも入る理由を、定義から説明しよう。",
        "followUp": "一般の平行四辺形から正方形を選ぶなら、対角線にどんな条件を付ける？",
        "checkpoints": [
          "四つの角の直角と四辺の等長を確認した。",
          "平行四辺形の前提で等長と垂直を両方そろえた。"
        ],
        "sample": "正方形は長方形の角の条件とひし形の辺の条件を満たす。平行四辺形の対角線が等長かつ垂直なら、両方の特別な条件を満たし正方形になる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "長方形は四つの角が直角、ひし形は四辺が等しい四角形。両方の条件を満たすのが正方形。どれも平行四辺形の仲間だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "正方形は四つの角が直角なので長方形でもあり、四辺が等しいのでひし形でもある。一種類だけに分けるのではなく、満たす条件を全て読む。対角線を見ると、長方形では二本の長さが等しく、ひし形では垂直に交わる。正方形では両方の性質を持つよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "長方形・ひし形・正方形は平行四辺形の特別な形である。正方形は長方形とひし形の両方の定義を満たし、分類は互いに排他的ではない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "長方形は四つの内角が直角の四角形、ひし形は四辺の長さが等しい四角形、正方形は両条件を満たす。いずれも二組の対辺が平行である。平行四辺形の中では、対角線が等長なら長方形、垂直ならひし形と判断でき、両方なら正方形となる。平行四辺形という前提なしに対角線の一性質だけから同じ分類をしてはいけない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材用の図で「長方形」と「ひし形」の条件の輪を重ね、重なる部分へ正方形を置く。外側には平行四辺形の輪を置き、含まれる関係を示す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の長方形・ひし形・正方形の部品に対角線を引く。長方形は等長、ひし形は垂直、正方形は両方。全ての部品で対角線は互いを二等分する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "長方形の定義は？ 正答：四つの角が直角の四角形。 直角四つという条件を使う。四辺の等長は必要ではない。 考える手がかり：角の条件と辺の条件を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "ひし形の定義は？ 正答：四辺が等しい四角形。 四辺の等長が定義。角が直角の場合も含む。 考える手がかり：どの辺が何本等しいか確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "正方形について正しいのは？ 正答：長方形でもひし形でもある。 角と辺の両方の定義を満たす。 考える手がかり：一つの図形が複数の条件を満たしてよい。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "一般の長方形の対角線で常に正しいのは？ 正答：二本の長さが等しい。 等長と相互二等分は成り立つが、垂直は正方形など特別な場合。 考える手がかり：一般と特別な場合を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "ひし形の対角線で常に正しいのは？ 正答：垂直に交わる。 ひし形の対角線は垂直に交わり、互いを二等分する。等長とは限らない。 考える手がかり：角の関係と長さの関係を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "正方形の一つの内角は？ 正答：90。 長方形の条件も満たすため各角は直角90°。 考える手がかり：正方形の角の定義を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "全ての平行四辺形は長方形？ 正答：そうではない。 平行四辺形には角が直角でないものもある。特別な形が全体の全てを占めるわけではない。 考える手がかり：含まれる向きを確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "平行四辺形で対角線が等長かつ垂直なら？ 正答：正方形。 平行四辺形の中で等長は長方形、垂直はひし形の条件を与え、両方で正方形。 考える手がかり：前提の平行四辺形を保って判断する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "仲間分け予想：四辺が全て3cmで四つの角が全て直角の四角形は、どこへ入る？ 正答：正方形・長方形・ひし形・平行四辺形。 四つの角の直角と四辺の等長の両方を満たすので、四つの分類に含まれる。 考える手がかり：全ての辺が同じ長さという条件を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "正方形が長方形にもひし形にも入る理由を、定義から説明しよう。 一般の平行四辺形から正方形を選ぶなら、対角線にどんな条件を付ける？ 正方形は長方形の角の条件とひし形の辺の条件を満たす。平行四辺形の対角線が等長かつ垂直なら、両方の特別な条件を満たし正方形になる。 確認項目：四つの角の直角と四辺の等長を確認した。 / 平行四辺形の前提で等長と垂直を両方そろえた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "四辺が3cmで四つの角が90°の四角形を分類しよう。 四つの角が直角なので長方形の定義を満たす。 四辺が等しいのでひし形の定義も満たす。 両方を満たすので正方形である。 長方形・ひし形はいずれも平行四辺形の特別な形なので、平行四辺形にも含まれる。 結論：正方形であり、長方形・ひし形・平行四辺形でもある",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「正方形は正方形という一種類なので、長方形やひし形には含まれない。」は誤り。分類は満たす定義で考える。正方形は直角四つと四辺等長の両方を満たすため、長方形でもひし形でもある。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "長方形は四つの角が直角、ひし形は四辺等長、正方形は両条件を満たす。全て平行四辺形に含まれる。平行四辺形の対角線は相互二等分し、等長なら長方形、垂直ならひし形、両方なら正方形。前提を一般四角形へ無条件に広げない。 操作図の事実：長方形/ひし形/正方形/一般平行四辺形の条件比較。対角線等長・垂直・角/辺条件を区別。 使用する状態範囲：shape rectangle/rhombus/square/parallelogram; feature diagonal/angle/side。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223411100000",
    "grade": 8,
    "title": "四分位数と四分位範囲",
    "domain": "D",
    "order": 33,
    "goal": "データを順に並べ、決めた方法で四分位数と四分位範囲を求める。",
    "coverageCodes": [
      "8350223411100000",
      "8350223410000000",
      "8350223411000000",
      "8350222110000000"
    ],
    "explanations": {
      "es": {
        "short": "2個以上のデータを小さい順にして上下に分け、それぞれの中央値を第1・第3四分位数とするよ。全体が奇数個なら全体の中央値を除いて分ける。四分位範囲は第3−第1だよ。",
        "detail": "架空の8値2,4,4,6,8,8,10,12を考える。全体の中央値は(6＋8)/2＝7。下半分2,4,4,6の中央値は4で第1四分位数、上半分8,8,10,12の中央値は9で第3四分位数。四分位範囲は9−4＝5になる。9個のように奇数個なら、真ん中の一値を上下の組から除いて計算しよう。"
      },
      "js": {
        "short": "この教材では、2個以上のデータを昇順にして中央値で上下に分け、奇数個なら全体の中央値を除く方法でQ1,Q3を求める。四分位範囲はQ3−Q1である。",
        "detail": "全体の中央値を第2四分位数Q2とも呼ぶ。8値2,4,4,6,8,8,10,12ではQ1＝4,Q2＝7,Q3＝9、四分位範囲5。9値1,2,3,4,5,6,7,8,9では中央値5を除き、下半分1,2,3,4の中央値2.5、上半分6,7,8,9の中央値7.5を使う。四分位数の決め方には複数あるため方法を統一する。ここでは2個以上の有限データを扱い、ソフトの別方式と混ぜない。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "架空の長さを順に並べる",
        "text": "教材用の材料の長さを2,4,4,6,8,8,10,12cmと設定する。下半分と上半分の中央を求めると4cmと9cmで、四分位範囲は5cm。",
        "activityIds": [
          "craft-accessory"
        ]
      },
      {
        "category": "programming",
        "title": "奇数個の分け方を確かめる",
        "text": "練習用データ1から9を並べる。中央の5をいったん別にし、1〜4と6〜9の各中央値を求める。5を両方へ重ねて入れない。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "架空データ2,4,4,6,8,8,10,12の中央値は？",
        "answer": 7,
        "explanation": "8個なので中央の4番目6と5番目8の平均7。",
        "hint": "中央が二つなら平均を取る。",
        "suffix": "",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "架空データ2,4,4,6,8,8,10,12の第1四分位数は？",
        "answer": 4,
        "explanation": "下半分2,4,4,6の中央4と4の平均で4。",
        "hint": "全体でなく下半分の中央を見る。",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "架空データ2,4,4,6,8,8,10,12の第3四分位数は？",
        "answer": 9,
        "explanation": "上半分8,8,10,12の中央8と10の平均で9。",
        "hint": "上半分を四つの組として見る。",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "第1四分位数4、第3四分位数9のデータの四分位範囲は？",
        "answer": 5,
        "explanation": "9−4＝5。",
        "hint": "最大値と最小値の差ではない。",
        "suffix": "",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "この教材で奇数個のデータを上下に分ける方法は？",
        "options": [
          "全体の中央値を除いて上下に分ける",
          "全体の中央値を上下両方へ入れる",
          "全ての値を二回ずつ使う"
        ],
        "answer": "全体の中央値を除いて上下に分ける",
        "explanation": "採用する方法を固定し、奇数個では中央の一値を上下の組から除く。",
        "hint": "方法が違う計算を混ぜない。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "架空の9値1,2,3,4,5,6,7,8,9で、中央値を除く方法の第1四分位数は？",
        "answer": 2.5,
        "explanation": "5を除いた下半分1,2,3,4の中央値は(2＋3)/2＝2.5。",
        "hint": "下半分に5を含めない。",
        "suffix": "",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "number",
        "prompt": "架空の9値1,2,3,4,5,6,7,8,9で、中央値を除く方法の第3四分位数は？",
        "answer": 7.5,
        "explanation": "上半分6,7,8,9の中央7と8の平均7.5。",
        "hint": "上半分にも5を含めない。",
        "suffix": "",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "number",
        "prompt": "架空の8値が全て4のとき、四分位範囲は？",
        "answer": 0,
        "explanation": "第1も第3も4なので4−4＝0。",
        "hint": "同じ値が重なっても同じ方法で計算する。",
        "suffix": "",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "分け方を予想：9値1〜9で中央5を除いた下半分は？",
      "options": [
        "1,2,3,4,5",
        "1,3,5,7",
        "1,2,3,4"
      ],
      "answer": "1,2,3,4",
      "explanation": "昇順の前半四つを使い、全体の中央値5は除く。",
      "hint": "順序と中央の扱いを確かめる。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "並べて二段階の中央を求める",
      "prompt": "架空データ8,2,10,4,6,12,4,8の四分位数を求めよう。",
      "steps": [
        {
          "text": "8個の値を失わず小さい順へ並べ、2,4,4,6,8,8,10,12とする。"
        },
        {
          "text": "全体の中央は6と8なので、中央値Q2＝7。"
        },
        {
          "text": "下半分2,4,4,6からQ1＝4、上半分8,8,10,12からQ3＝9を得る。"
        },
        {
          "text": "四分位範囲はQ3−Q1＝9−4＝5。範囲の12−2＝10とは区別する。"
        }
      ],
      "answer": "Q1＝4、Q2＝7、Q3＝9、四分位範囲5",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "9個のデータの中央値は、下半分と上半分へ一回ずつ入れる。",
      "correction": "この教材の方法では、奇数個の全体中央値を上下両方から除く。1〜9なら5を除いて1〜4と6〜9へ分ける。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "8値2,4,4,6,8,8,10,12で、第1四分位数と中央値が違う理由を説明しよう。",
        "followUp": "9個なら、全体の中央値をどこへ置く方法を使う？",
        "checkpoints": [
          "全体と下半分の中央を区別した。",
          "奇数個では全体の中央値を除いた。"
        ],
        "sample": "中央値7は全体8個の中央。Q1＝4は下半分4個の中央なので別の位置。9個なら全体の中央値を上下の組から除き、残りを四つずつに分ける。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "2個以上のデータを小さい順にして上下に分け、それぞれの中央値を第1・第3四分位数とするよ。全体が奇数個なら全体の中央値を除いて分ける。四分位範囲は第3−第1だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "架空の8値2,4,4,6,8,8,10,12を考える。全体の中央値は(6＋8)/2＝7。下半分2,4,4,6の中央値は4で第1四分位数、上半分8,8,10,12の中央値は9で第3四分位数。四分位範囲は9−4＝5になる。9個のように奇数個なら、真ん中の一値を上下の組から除いて計算しよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "この教材では、2個以上のデータを昇順にして中央値で上下に分け、奇数個なら全体の中央値を除く方法でQ1,Q3を求める。四分位範囲はQ3−Q1である。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "全体の中央値を第2四分位数Q2とも呼ぶ。8値2,4,4,6,8,8,10,12ではQ1＝4,Q2＝7,Q3＝9、四分位範囲5。9値1,2,3,4,5,6,7,8,9では中央値5を除き、下半分1,2,3,4の中央値2.5、上半分6,7,8,9の中央値7.5を使う。四分位数の決め方には複数あるため方法を統一する。ここでは2個以上の有限データを扱い、ソフトの別方式と混ぜない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材用の材料の長さを2,4,4,6,8,8,10,12cmと設定する。下半分と上半分の中央を求めると4cmと9cmで、四分位範囲は5cm。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "練習用データ1から9を並べる。中央の5をいったん別にし、1〜4と6〜9の各中央値を求める。5を両方へ重ねて入れない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "架空データ2,4,4,6,8,8,10,12の中央値は？ 正答：7。 8個なので中央の4番目6と5番目8の平均7。 考える手がかり：中央が二つなら平均を取る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "架空データ2,4,4,6,8,8,10,12の第1四分位数は？ 正答：4。 下半分2,4,4,6の中央4と4の平均で4。 考える手がかり：全体でなく下半分の中央を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "架空データ2,4,4,6,8,8,10,12の第3四分位数は？ 正答：9。 上半分8,8,10,12の中央8と10の平均で9。 考える手がかり：上半分を四つの組として見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "第1四分位数4、第3四分位数9のデータの四分位範囲は？ 正答：5。 9−4＝5。 考える手がかり：最大値と最小値の差ではない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "この教材で奇数個のデータを上下に分ける方法は？ 正答：全体の中央値を除いて上下に分ける。 採用する方法を固定し、奇数個では中央の一値を上下の組から除く。 考える手がかり：方法が違う計算を混ぜない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "架空の9値1,2,3,4,5,6,7,8,9で、中央値を除く方法の第1四分位数は？ 正答：2.5。 5を除いた下半分1,2,3,4の中央値は(2＋3)/2＝2.5。 考える手がかり：下半分に5を含めない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "架空の9値1,2,3,4,5,6,7,8,9で、中央値を除く方法の第3四分位数は？ 正答：7.5。 上半分6,7,8,9の中央7と8の平均7.5。 考える手がかり：上半分にも5を含めない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "架空の8値が全て4のとき、四分位範囲は？ 正答：0。 第1も第3も4なので4−4＝0。 考える手がかり：同じ値が重なっても同じ方法で計算する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "分け方を予想：9値1〜9で中央5を除いた下半分は？ 正答：1,2,3,4。 昇順の前半四つを使い、全体の中央値5は除く。 考える手がかり：順序と中央の扱いを確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "8値2,4,4,6,8,8,10,12で、第1四分位数と中央値が違う理由を説明しよう。 9個なら、全体の中央値をどこへ置く方法を使う？ 中央値7は全体8個の中央。Q1＝4は下半分4個の中央なので別の位置。9個なら全体の中央値を上下の組から除き、残りを四つずつに分ける。 確認項目：全体と下半分の中央を区別した。 / 奇数個では全体の中央値を除いた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "架空データ8,2,10,4,6,12,4,8の四分位数を求めよう。 8個の値を失わず小さい順へ並べ、2,4,4,6,8,8,10,12とする。 全体の中央は6と8なので、中央値Q2＝7。 下半分2,4,4,6からQ1＝4、上半分8,8,10,12からQ3＝9を得る。 四分位範囲はQ3−Q1＝9−4＝5。範囲の12−2＝10とは区別する。 結論：Q1＝4、Q2＝7、Q3＝9、四分位範囲5",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「9個のデータの中央値は、下半分と上半分へ一回ずつ入れる。」は誤り。この教材の方法では、奇数個の全体中央値を上下両方から除く。1〜9なら5を除いて1〜4と6〜9へ分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "四分位数は2個以上の有限データを昇順にして、奇数個なら全体中央値を除いた下半分と上半分の中央値をQ1,Q3とする方法に固定。Q2は全体中央値、四分位範囲Q3−Q1。8値[2,4,4,6,8,8,10,12]の五数要約2,4,7,9,12。9値[1..9]は1,2.5,5,7.5,9。8値全て4なら全五数4で四分位範囲0。 操作図の事実：even[2,4,4,6,8,8,10,12]→2,4,7,9,12。odd[1..9]→1,2.5,5,7.5,9（中央値除外）。same[4×8]→全て4。 使用する状態範囲：dataset even/odd/same; focus q1/median/q3。 図で使うデータは8個または9個であり、2個以上という定義域内。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223411200000",
    "grade": 8,
    "title": "箱ひげ図をつくる・読む",
    "domain": "D",
    "order": 34,
    "goal": "五つの値を同じ目盛りに置き、箱ひげ図を作って読む。",
    "coverageCodes": [
      "8350223411200000",
      "8350223410000000",
      "8350223411000000",
      "8350223411100000",
      "8350222110000000"
    ],
    "explanations": {
      "es": {
        "short": "箱ひげ図は最小値・第1四分位数・中央値・第3四分位数・最大値を表す。箱は第1から第3、箱の中の線は中央値。この教材のひげは最小と最大までだよ。",
        "detail": "架空の8値2,4,4,6,8,8,10,12は、最小2、第1四分位数4、中央値7、第3四分位数9、最大12。同じ数直線の4から9を箱にして7へ線を入れ、2と12までひげを伸ばす。箱の長さは四分位範囲5を表す。全て同じ値4なら箱もひげも同じ位置へ重なり、値がないわけではないよ。"
      },
      "js": {
        "short": "五数要約を共通尺度の数直線へ配置し、Q1からQ3を箱、Q2を箱内線、最小・最大までをひげとして表す。この教材では外れ値を別記する別方式を用いない。",
        "detail": "四分位数は奇数個の全体中央値を除いて上下に分ける方法で求める。箱ひげ図は順序付きの五つの値の位置を表し、線の長さそのものをデータの個数とは読まない。Q1＝Q3なら箱の幅は0となって線状に重なる。四分位範囲が0でも全値が等しいとは限らず、例えば1,4,4,4,4,4,4,9では箱は4に重なるが、ひげは1と9まである。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "同じ目盛りへ五つの印",
        "text": "架空の五数要約2,4,7,9,12を一つの数直線へ置く。4と9を箱の端、7を中央の線にし、最小2と最大12をひげの端にする。目盛りは途中で変えない。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "表から図へ対応する",
        "text": "教材用に最小値、第1四分位数、中央値、第3四分位数、最大値の五欄を作る。一つずつ図のひげ端・箱端・中央線へ対応させ、平均値の欄と取り違えない。",
        "activityIds": [
          "prog-scratch"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "この教材の箱ひげ図で箱の左右の端は？",
        "options": [
          "第1四分位数と第3四分位数",
          "最小値と最大値",
          "平均値と中央値"
        ],
        "answer": "第1四分位数と第3四分位数",
        "explanation": "箱はQ1からQ3の範囲を示す。",
        "hint": "ひげと箱の役割を分ける。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "箱の中に引く線が表すのは？",
        "options": [
          "平均値",
          "データの個数",
          "中央値"
        ],
        "answer": "中央値",
        "explanation": "全体の中央値Q2の位置を表す。",
        "hint": "五数要約のどの値かを確認する。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "この教材でひげの端に使うのは？",
        "options": [
          "平均値の前後だけ",
          "最小値と最大値",
          "必ず0と100"
        ],
        "answer": "最小値と最大値",
        "explanation": "ここでは最小・最大までひげを伸ばす方法を使う。",
        "hint": "別のソフトの方式を混ぜない。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "最小2、Q1＝4、中央値7、Q3＝9、最大12の箱ひげ図で、箱が表す幅は？",
        "answer": 5,
        "explanation": "Q3−Q1＝9−4＝5。",
        "hint": "ひげの全体幅と区別する。",
        "suffix": "",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "最小2、Q1＝4、中央値7、Q3＝9、最大12のデータの範囲は？",
        "answer": 10,
        "explanation": "最大−最小＝12−2＝10。",
        "hint": "箱だけでなく両端の値を見る。",
        "suffix": "",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "全て4という架空8値の箱ひげ図は？",
        "options": [
          "箱は必ず0から4へ広がる",
          "箱もひげも4の位置に重なる",
          "表示する値は一つもない"
        ],
        "answer": "箱もひげも4の位置に重なる",
        "explanation": "五数要約の全てが4なので同じ位置へ重なる。",
        "hint": "幅0とデータなしを区別する。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "Q1＝Q3なら、箱はどうなる？",
        "options": [
          "幅0で線状に重なる",
          "必ず幅1に広げる",
          "負の幅になる"
        ],
        "answer": "幅0で線状に重なる",
        "explanation": "箱の幅はQ3−Q1＝0。見やすさのため値そのものを変えない。",
        "hint": "図の幅を式へ戻す。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "四分位範囲が0なら、全てのデータが同じ値と断定できる？",
        "options": [
          "必ず全値が等しい",
          "最小値は必ず0",
          "断定できない"
        ],
        "answer": "断定できない",
        "explanation": "1,4,4,4,4,4,4,9はQ1＝Q3＝4でも最小1、最大9である。",
        "hint": "箱の両端とひげの両端は別の値。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "図を予想：最小1、Q1＝2.5、中央値5、Q3＝7.5、最大9なら箱は？",
      "options": [
        "0から5、内部の線は9",
        "2.5から7.5、内部の線は5",
        "1から9、内部の線は2.5"
      ],
      "answer": "2.5から7.5、内部の線は5",
      "explanation": "Q1とQ3を箱の端、中央値5を内部の線へ対応させる。",
      "hint": "五つの値の役割を保つ。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "五数要約を図へ移す",
      "prompt": "架空の8値2,4,4,6,8,8,10,12を箱ひげ図にしよう。",
      "steps": [
        {
          "text": "五数要約が最小2、Q1＝4、中央値7、Q3＝9、最大12と確認する。"
        },
        {
          "text": "数直線の目盛りを固定し、4から9までを箱にする。"
        },
        {
          "text": "箱の中の7の位置へ中央値の線を引く。"
        },
        {
          "text": "箱から最小2と最大12までひげを引く。箱幅5、全範囲10と読み戻す。"
        }
      ],
      "answer": "箱4〜9、中央値7、ひげの端2と12",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "箱の中の線は平均値で、箱の端は最小値と最大値だ。",
      "correction": "中央線は中央値、箱の端は第1・第3四分位数。最小値と最大値は、この教材ではひげの端に表す。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "箱ひげ図の箱、中央の線、ひげの端が何を表すか説明しよう。",
        "followUp": "箱が線に重なったら、データがないと考えてよい？",
        "checkpoints": [
          "五数要約の各位置を正しく対応させた。",
          "幅0を四分位範囲0として読んだ。"
        ],
        "sample": "箱はQ1〜Q3、内部線は中央値、ひげの端は最小・最大。箱が線状でもデータはあり、Q1＝Q3で四分位範囲が0という意味になる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "箱ひげ図は最小値・第1四分位数・中央値・第3四分位数・最大値を表す。箱は第1から第3、箱の中の線は中央値。この教材のひげは最小と最大までだよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "架空の8値2,4,4,6,8,8,10,12は、最小2、第1四分位数4、中央値7、第3四分位数9、最大12。同じ数直線の4から9を箱にして7へ線を入れ、2と12までひげを伸ばす。箱の長さは四分位範囲5を表す。全て同じ値4なら箱もひげも同じ位置へ重なり、値がないわけではないよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "五数要約を共通尺度の数直線へ配置し、Q1からQ3を箱、Q2を箱内線、最小・最大までをひげとして表す。この教材では外れ値を別記する別方式を用いない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "四分位数は奇数個の全体中央値を除いて上下に分ける方法で求める。箱ひげ図は順序付きの五つの値の位置を表し、線の長さそのものをデータの個数とは読まない。Q1＝Q3なら箱の幅は0となって線状に重なる。四分位範囲が0でも全値が等しいとは限らず、例えば1,4,4,4,4,4,4,9では箱は4に重なるが、ひげは1と9まである。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の五数要約2,4,7,9,12を一つの数直線へ置く。4と9を箱の端、7を中央の線にし、最小2と最大12をひげの端にする。目盛りは途中で変えない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "教材用に最小値、第1四分位数、中央値、第3四分位数、最大値の五欄を作る。一つずつ図のひげ端・箱端・中央線へ対応させ、平均値の欄と取り違えない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "この教材の箱ひげ図で箱の左右の端は？ 正答：第1四分位数と第3四分位数。 箱はQ1からQ3の範囲を示す。 考える手がかり：ひげと箱の役割を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "箱の中に引く線が表すのは？ 正答：中央値。 全体の中央値Q2の位置を表す。 考える手がかり：五数要約のどの値かを確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "この教材でひげの端に使うのは？ 正答：最小値と最大値。 ここでは最小・最大までひげを伸ばす方法を使う。 考える手がかり：別のソフトの方式を混ぜない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "最小2、Q1＝4、中央値7、Q3＝9、最大12の箱ひげ図で、箱が表す幅は？ 正答：5。 Q3−Q1＝9−4＝5。 考える手がかり：ひげの全体幅と区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "最小2、Q1＝4、中央値7、Q3＝9、最大12のデータの範囲は？ 正答：10。 最大−最小＝12−2＝10。 考える手がかり：箱だけでなく両端の値を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "全て4という架空8値の箱ひげ図は？ 正答：箱もひげも4の位置に重なる。 五数要約の全てが4なので同じ位置へ重なる。 考える手がかり：幅0とデータなしを区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "Q1＝Q3なら、箱はどうなる？ 正答：幅0で線状に重なる。 箱の幅はQ3−Q1＝0。見やすさのため値そのものを変えない。 考える手がかり：図の幅を式へ戻す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "四分位範囲が0なら、全てのデータが同じ値と断定できる？ 正答：断定できない。 1,4,4,4,4,4,4,9はQ1＝Q3＝4でも最小1、最大9である。 考える手がかり：箱の両端とひげの両端は別の値。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "図を予想：最小1、Q1＝2.5、中央値5、Q3＝7.5、最大9なら箱は？ 正答：2.5から7.5、内部の線は5。 Q1とQ3を箱の端、中央値5を内部の線へ対応させる。 考える手がかり：五つの値の役割を保つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "箱ひげ図の箱、中央の線、ひげの端が何を表すか説明しよう。 箱が線に重なったら、データがないと考えてよい？ 箱はQ1〜Q3、内部線は中央値、ひげの端は最小・最大。箱が線状でもデータはあり、Q1＝Q3で四分位範囲が0という意味になる。 確認項目：五数要約の各位置を正しく対応させた。 / 幅0を四分位範囲0として読んだ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "架空の8値2,4,4,6,8,8,10,12を箱ひげ図にしよう。 五数要約が最小2、Q1＝4、中央値7、Q3＝9、最大12と確認する。 数直線の目盛りを固定し、4から9までを箱にする。 箱の中の7の位置へ中央値の線を引く。 箱から最小2と最大12までひげを引く。箱幅5、全範囲10と読み戻す。 結論：箱4〜9、中央値7、ひげの端2と12",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「箱の中の線は平均値で、箱の端は最小値と最大値だ。」は誤り。中央線は中央値、箱の端は第1・第3四分位数。最小値と最大値は、この教材ではひげの端に表す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "この教材の箱ひげ図は最小,Q1,中央値,Q3,最大を固定尺度で表し、ひげは最小最大まで。箱幅はQ3−Q1。Q1=Q3では線状に重なり、データなしを意味しない。全値同じなら五数全て同じだが、四分位範囲0だけで全値同じとはいえない。 操作図の事実：even=[2,4,4,6,8,8,10,12]の五数要約は2,4,7,9,12。odd=[1,2,3,4,5,6,7,8,9]は中央値を除き1,2.5,5,7.5,9。sameは4が8個で五数全て4。これら三データの五数要約から箱ひげ図を作る。四分位範囲0では箱が線になる。 使用する状態範囲：dataset even/odd/same; step0..3。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "motion",
        "text": "架空の全8値[2,4,4,6,8,8,10,12]を保持して昇順に読む。中央値(6+8)/2=7。下半分の中央値Q1=(4+4)/2=4、上半分の中央値Q3=(8+10)/2=9。最小2、最大12と合わせ、固定した数直線で箱4..9、中央値7、ひげ端2,12を示す。数字の並べ替えや強調の途中で値や個数を増減しない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223412100000",
    "grade": 8,
    "title": "箱ひげ図で分布を比べる",
    "domain": "D",
    "order": 35,
    "goal": "箱ひげ図を同じ尺度で比べ、言えることと言い切れないことを区別する。",
    "coverageCodes": [
      "8350223412100000",
      "8350223410000000",
      "8350223412000000",
      "8350222220000000",
      "8350222330000000",
      "8350223511000000",
      "8350223513000000"
    ],
    "explanations": {
      "es": {
        "short": "箱ひげ図では中央値の位置と四分位範囲を分けて比べる。同じ目盛りかを確認しよう。同じ箱ひげ図でも、元の値が全て同じとは限らないよ。",
        "detail": "架空Aの8値2,4,4,6,8,8,10,12は中央値7、四分位範囲5。架空Bの8値0,2,2,6,8,10,12,14は中央値7、四分位範囲9。真ん中の位置は同じでも、四分位範囲で見る広がりはBが大きい。図の表示倍率が違うと箱の見た目も変わるので、数値と同じ目盛りで比べよう。"
      },
      "js": {
        "short": "分布の比較では位置を示す中央値と、散らばりを示す四分位範囲・範囲を区別する。五数要約へ集約した図から、元の全値や分布の細部は一般に復元できない。",
        "detail": "全データに2を加えると、中央値や四分位数も2ずつ増えるが、差で表す四分位範囲と範囲は変わらない。一方、同じ五数要約でも元の値が違う場合がある。箱ひげ図だけから平均や個々の値の集まり方を一般に断定できず、必要なら元データやヒストグラムなどを追加して調べる。同じ値が重なるとQ1からQ3の区間へ半数より多くの値が含まれる場合もある。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "長さの中心と広がりを読む",
        "text": "教材用の架空材料二組を同じcm目盛りで比較する。中央値がともに7cmでも四分位範囲5cmと9cmでは中央付近の幅が違う。どちらが目的に合うかは必要な長さの条件も含めて考える。",
        "activityIds": [
          "craft-accessory"
        ]
      },
      {
        "category": "programming",
        "title": "同じ図でも違う値",
        "text": "架空A[0,4,4,6,8,8,10,14]とB[0,3,5,6,8,8,10,14]は、五数要約がどちらも0,4,7,9,14。図が同じでも3と5を含むかなどの細部は違う。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "中央値が同じ二つのデータは、四分位範囲も必ず同じ？",
        "options": [
          "必ず同じ",
          "四分位範囲は計算できない",
          "必ずではない"
        ],
        "answer": "必ずではない",
        "explanation": "中心の位置が同じでも、上下の四分位数の間隔は違う場合がある。",
        "hint": "位置と幅を分ける。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "架空BのQ1＝2,Q3＝11なら、四分位範囲は？",
        "answer": 9,
        "explanation": "11−2＝9。",
        "hint": "第3から第1を引く。",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "Aの中央値7・四分位範囲5、Bの中央値7・四分位範囲9からいえるのは？",
        "options": [
          "中央値は同じで、四分位範囲はBが大きい",
          "全ての値がBの方が大きい",
          "AとBは同じ全データ"
        ],
        "answer": "中央値は同じで、四分位範囲はBが大きい",
        "explanation": "与えられた二つの指標の比較はできるが、全値の大小までは決まらない。",
        "hint": "指標が直接表すことだけを読む。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "全データに2を加える前の中央値が7なら、加えた後の中央値は？",
        "answer": 9,
        "explanation": "並ぶ順を変えず全値が2増えるので中央値も9になる。",
        "hint": "中央の位置の値も同じだけ動く。",
        "suffix": "",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "全データに2を加える前のQ1＝4,Q3＝9なら、加えた後の四分位範囲は？",
        "answer": 5,
        "explanation": "新しいQ1＝6,Q3＝11なので11−6＝5。",
        "hint": "差では同じ増分が消える。",
        "suffix": "",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "二つの箱ひげ図を比べる前に確かめたいのは？",
        "options": [
          "単位と目盛りの尺度がそろっているか",
          "箱の色だけ",
          "図の高さだけ"
        ],
        "answer": "単位と目盛りの尺度がそろっているか",
        "explanation": "表示倍率が違うと見た目の幅だけでは数値を比べられない。",
        "hint": "数直線の目盛りを見る。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "箱ひげ図が同じなら、元の全データも同じといえる？",
        "options": [
          "必ず同じ",
          "必ず中央値が違う",
          "いえない"
        ],
        "answer": "いえない",
        "explanation": "五数要約にまとめることで細部は省かれる。同じ五数要約をもつ別のデータがある。",
        "hint": "五つの値に含まれない情報を考える。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "Q1からQ3までの区間に含まれる値は、端を含めると必ず全体の半数だけ？",
        "options": [
          "どの値も含まれない",
          "必ずではない。同じ値が重なる場合がある",
          "いつも厳密に半数だけ"
        ],
        "answer": "必ずではない。同じ値が重なる場合がある",
        "explanation": "全て4ならQ1＝Q3＝4の区間へ全ての値が含まれる。",
        "hint": "同じ値が多数ある例で確かめる。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "分布を予想：全データへ同じ2を加えると、箱ひげ図は？",
      "options": [
        "形と幅を保って数値が2大きい方へ移る",
        "四分位範囲が2倍になる",
        "中央値だけ動かない"
      ],
      "answer": "形と幅を保って数値が2大きい方へ移る",
      "explanation": "五つの値が全て2増え、差である幅は変わらない。",
      "hint": "位置の変化と差の変化を分ける。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "中心と散らばりを分けて比較する",
      "prompt": "架空Aの五数要約2,4,7,9,12と、Bの0,2,7,11,14を比べよう。",
      "steps": [
        {
          "text": "同じ単位・同じ尺度の数直線へ置く。"
        },
        {
          "text": "中央値は両方7なので、中央の位置は同じ。"
        },
        {
          "text": "四分位範囲はAが9−4＝5、Bが11−2＝9でBが大きい。"
        },
        {
          "text": "この比較だけで全値や平均を断定せず、必要な問いに応じて元のデータも確認する。"
        }
      ],
      "answer": "中央値は同じ、四分位範囲はBが大きい",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "箱ひげ図が同じなら、元の値も全て同じである。",
      "correction": "箱ひげ図は五つの値へ要約したもの。同じ五数要約でも細部の値が異なる場合があり、元の全値は一般に復元できない。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "二つの箱ひげ図で、位置と散らばりをそれぞれ何で比べる？",
        "followUp": "図だけでは答えられない問いには、次にどんな情報が必要？",
        "checkpoints": [
          "中央値と四分位範囲などを区別した。",
          "尺度をそろえ、元データなどの追加確認を考えた。"
        ],
        "sample": "中央値の位置と、四分位範囲や範囲の幅を別に比べる。個々の値や分布の山を知りたいなら元データやヒストグラムなどを追加し、図だけから推測で埋めない。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "箱ひげ図では中央値の位置と四分位範囲を分けて比べる。同じ目盛りかを確認しよう。同じ箱ひげ図でも、元の値が全て同じとは限らないよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "架空Aの8値2,4,4,6,8,8,10,12は中央値7、四分位範囲5。架空Bの8値0,2,2,6,8,10,12,14は中央値7、四分位範囲9。真ん中の位置は同じでも、四分位範囲で見る広がりはBが大きい。図の表示倍率が違うと箱の見た目も変わるので、数値と同じ目盛りで比べよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "分布の比較では位置を示す中央値と、散らばりを示す四分位範囲・範囲を区別する。五数要約へ集約した図から、元の全値や分布の細部は一般に復元できない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "全データに2を加えると、中央値や四分位数も2ずつ増えるが、差で表す四分位範囲と範囲は変わらない。一方、同じ五数要約でも元の値が違う場合がある。箱ひげ図だけから平均や個々の値の集まり方を一般に断定できず、必要なら元データやヒストグラムなどを追加して調べる。同じ値が重なるとQ1からQ3の区間へ半数より多くの値が含まれる場合もある。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材用の架空材料二組を同じcm目盛りで比較する。中央値がともに7cmでも四分位範囲5cmと9cmでは中央付近の幅が違う。どちらが目的に合うかは必要な長さの条件も含めて考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空A[0,4,4,6,8,8,10,14]とB[0,3,5,6,8,8,10,14]は、五数要約がどちらも0,4,7,9,14。図が同じでも3と5を含むかなどの細部は違う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "中央値が同じ二つのデータは、四分位範囲も必ず同じ？ 正答：必ずではない。 中心の位置が同じでも、上下の四分位数の間隔は違う場合がある。 考える手がかり：位置と幅を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "架空BのQ1＝2,Q3＝11なら、四分位範囲は？ 正答：9。 11−2＝9。 考える手がかり：第3から第1を引く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "Aの中央値7・四分位範囲5、Bの中央値7・四分位範囲9からいえるのは？ 正答：中央値は同じで、四分位範囲はBが大きい。 与えられた二つの指標の比較はできるが、全値の大小までは決まらない。 考える手がかり：指標が直接表すことだけを読む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "全データに2を加える前の中央値が7なら、加えた後の中央値は？ 正答：9。 並ぶ順を変えず全値が2増えるので中央値も9になる。 考える手がかり：中央の位置の値も同じだけ動く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "全データに2を加える前のQ1＝4,Q3＝9なら、加えた後の四分位範囲は？ 正答：5。 新しいQ1＝6,Q3＝11なので11−6＝5。 考える手がかり：差では同じ増分が消える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "二つの箱ひげ図を比べる前に確かめたいのは？ 正答：単位と目盛りの尺度がそろっているか。 表示倍率が違うと見た目の幅だけでは数値を比べられない。 考える手がかり：数直線の目盛りを見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "箱ひげ図が同じなら、元の全データも同じといえる？ 正答：いえない。 五数要約にまとめることで細部は省かれる。同じ五数要約をもつ別のデータがある。 考える手がかり：五つの値に含まれない情報を考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "Q1からQ3までの区間に含まれる値は、端を含めると必ず全体の半数だけ？ 正答：必ずではない。同じ値が重なる場合がある。 全て4ならQ1＝Q3＝4の区間へ全ての値が含まれる。 考える手がかり：同じ値が多数ある例で確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "分布を予想：全データへ同じ2を加えると、箱ひげ図は？ 正答：形と幅を保って数値が2大きい方へ移る。 五つの値が全て2増え、差である幅は変わらない。 考える手がかり：位置の変化と差の変化を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "二つの箱ひげ図で、位置と散らばりをそれぞれ何で比べる？ 図だけでは答えられない問いには、次にどんな情報が必要？ 中央値の位置と、四分位範囲や範囲の幅を別に比べる。個々の値や分布の山を知りたいなら元データやヒストグラムなどを追加し、図だけから推測で埋めない。 確認項目：中央値と四分位範囲などを区別した。 / 尺度をそろえ、元データなどの追加確認を考えた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "架空Aの五数要約2,4,7,9,12と、Bの0,2,7,11,14を比べよう。 同じ単位・同じ尺度の数直線へ置く。 中央値は両方7なので、中央の位置は同じ。 四分位範囲はAが9−4＝5、Bが11−2＝9でBが大きい。 この比較だけで全値や平均を断定せず、必要な問いに応じて元のデータも確認する。 結論：中央値は同じ、四分位範囲はBが大きい",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「箱ひげ図が同じなら、元の値も全て同じである。」は誤り。箱ひげ図は五つの値へ要約したもの。同じ五数要約でも細部の値が異なる場合があり、元の全値は一般に復元できない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "五数要約A(2,4,7,9,12)、B(0,2,7,11,14)は中央値7が同じでIQR5対9。全値への定数加算は五数を同じだけ移し、IQRと範囲を保つ。同じ五数要約でも元データは一意でない。等しい値が重なると閉区間[Q1,Q3]のデータ割合は厳密な50%とは限らない。 操作図の事実：spread A[2,4,4,6,8,8,10,12],B[0,2,2,6,8,10,12,14]。same A[0,4,4,6,8,8,10,14],B[0,3,5,6,8,8,10,14]は同じ箱でも元データ異なる。shiftはspreadのAと全値+2。 使用する状態範囲：pair spread/same/shift。 図のspreadはA[2,4,4,6,8,8,10,12]、B[0,2,2,6,8,10,12,14]。sameはA[0,4,4,6,8,8,10,14]、B[0,3,5,6,8,8,10,14]で五数要約が共に0,4,7,9,14。shiftはspreadのAと、その全値へ2を加えたもの。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223421100000",
    "grade": 8,
    "title": "同様に確からしいことと確率",
    "domain": "D",
    "order": 36,
    "goal": "同様に確からしい結果を区別し、場合の数による確率と有限記録を分ける。",
    "coverageCodes": [
      "8350223421100000",
      "8350223420000000",
      "8350223421000000",
      "8350222110000000"
    ],
    "explanations": {
      "es": {
        "short": "起こりやすさが等しい結果を漏れなく数えられるとき、確率は目的の結果の数÷全結果の数。結果の名前が同じ数だけあっても、同じ確率とは限らないよ。",
        "detail": "各面が同じ確率で出る6面さいころでは、1から6の六つが同様に確からしい。偶数は2,4,6の三つなので確率は3/6＝1/2。止まる角度が一様で名前が三つの抽選盤でも、領域の角度が半分と四分の一ずつなら同じ確率にはならない。実際の有限回の割合と、条件から計算する確率も区別しよう。"
      },
      "js": {
        "short": "有限個の基本的な結果が同様に確からしいとき、事象の確率は該当する結果数を全結果数で割る。等確率という前提を確認してから数える。",
        "detail": "公平な6面さいころの六結果を基本として数えると、特定の一面の確率は1/6、偶数は3/6。抽選盤の止まる角度が一様という設定で、領域1が半円、2と3が四分の一円ずつなら確率は1/2,1/4,1/4で、三つの名前を等確率として1/3ずつにはできない。試行の相対度数は確率を考える手がかりだが、有限回で理論値に必ず一致したり、毎回近づいたりする保証はない。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "領域の広さと条件を読む",
        "text": "教材用の抽選盤を半円の領域1と、四分の一円ずつの領域2,3に分ける。同じ幅の角度に同じ確率で止まる設定なら、1の確率は1/2。名前が三つでも1/3ずつとはしない。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "理論と記録を分ける",
        "text": "各面が同じ確率のさいころを独立に振る教材モデル。1の確率は1/6でも、実際の12回で必ず2回出るとは限らない。記録の割合とモデルの確率を別欄にする。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "場合の数の比で確率を求める前に確認する条件は？",
        "options": [
          "必ず一度ずつ出ること",
          "数える基本結果が同様に確からしいこと",
          "結果の名前が短いこと"
        ],
        "answer": "数える基本結果が同様に確からしいこと",
        "explanation": "同じ確率の基本結果へ分けてから該当数を数える。",
        "hint": "分母の一つ一つを等しく扱ってよいか見る。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "各面が同じ確率で出る6面さいころで、1の確率は？",
        "options": [
          "1/6",
          "1/2",
          "1/3"
        ],
        "answer": "1/6",
        "explanation": "六つの等確率結果のうち、1は一つ。",
        "hint": "全結果数と該当数を数える。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "各面が同じ確率の6面さいころで、偶数の確率を小数で答えると？",
        "answer": 0.5,
        "explanation": "偶数2,4,6は六つ中三つなので3/6＝0.5。",
        "hint": "目的の結果を列挙する。",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "1〜6の面だけをもつさいころで、7が出る確率は？",
        "answer": 0,
        "explanation": "起こり得る六結果に7は含まれない。",
        "hint": "結果の集合の中にあるかを確認する。",
        "suffix": "",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "三つの結果名があれば、それぞれの確率は必ず1/3？",
        "options": [
          "必ずではない",
          "必ず1/3",
          "必ず0"
        ],
        "answer": "必ずではない",
        "explanation": "結果名の数だけでは起こりやすさの等しさは分からない。",
        "hint": "等確率の条件を先に調べる。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "止まる角度が一様な抽選盤で、半円の領域1の確率は？",
        "options": [
          "1/3",
          "1/4",
          "1/2"
        ],
        "answer": "1/2",
        "explanation": "一周の角度の半分を占めるので1/2。",
        "hint": "角度の割合と一様という条件を使う。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "公平なさいころを独立に12回振れば、1は必ず2回出る？",
        "options": [
          "必ず一度も出ない",
          "必ずではない",
          "必ず2回"
        ],
        "answer": "必ずではない",
        "explanation": "確率1/6は有限回の回数を固定する約束ではない。",
        "hint": "理論の確率と実際の回数を分ける。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "各回独立で各面同じ確率の6面さいころ。1が続いた後、次に1が出る確率は？",
        "options": [
          "1/6",
          "必ず0",
          "必ず1"
        ],
        "answer": "1/6",
        "explanation": "独立で同じ条件なら過去の偏りで次の確率は変わらない。",
        "hint": "足りない結果を埋め合わせる仕組みではない。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "確率を予想：止まる角度が一様で、領域1は半円、2と3は四分の一円ずつの抽選盤。最も出やすいのは？",
      "options": [
        "全て同じ",
        "領域2だけ",
        "領域1"
      ],
      "answer": "領域1",
      "explanation": "1は1/2、2と3は各1/4で、1が大きい。",
      "hint": "結果の名前ではなく角度の割合を見る。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "等確率の結果を数える",
      "prompt": "各面が同じ確率の6面さいころで、偶数が出る確率を求めよう。",
      "steps": [
        {
          "text": "基本結果を1,2,3,4,5,6の六つとして、各面が等確率という前提を確認する。"
        },
        {
          "text": "偶数に当たる結果は2,4,6の三つと数える。"
        },
        {
          "text": "確率は3/6＝1/2と求める。"
        },
        {
          "text": "この値は有限回で必ず半数が偶数になるという意味ではないと区別する。"
        }
      ],
      "answer": "偶数が出る確率は1/2",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "起こり得る結果の名前が三つなら、確率は必ず1/3ずつになる。",
      "correction": "名前の数だけで等確率とはいえない。基本結果の起こりやすさが等しいという条件を確認してから、場合の数を比にする。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "場合の数で確率を求める前に、なぜ同様に確からしいかを確かめる？",
        "followUp": "確率1/2と、10回の記録で5回という結果は同じ意味？",
        "checkpoints": [
          "数える基本結果を等確率としてよい根拠を示した。",
          "理論の確率と有限回の相対度数を分けた。"
        ],
        "sample": "起こりやすさが違う結果を同じ一個として数えると比が確率にならない。確率1/2でも10回の結果は5回と決まっておらず、記録の割合は別に計算する。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "起こりやすさが等しい結果を漏れなく数えられるとき、確率は目的の結果の数÷全結果の数。結果の名前が同じ数だけあっても、同じ確率とは限らないよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "各面が同じ確率で出る6面さいころでは、1から6の六つが同様に確からしい。偶数は2,4,6の三つなので確率は3/6＝1/2。止まる角度が一様で名前が三つの抽選盤でも、領域の角度が半分と四分の一ずつなら同じ確率にはならない。実際の有限回の割合と、条件から計算する確率も区別しよう。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "有限個の基本的な結果が同様に確からしいとき、事象の確率は該当する結果数を全結果数で割る。等確率という前提を確認してから数える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "公平な6面さいころの六結果を基本として数えると、特定の一面の確率は1/6、偶数は3/6。抽選盤の止まる角度が一様という設定で、領域1が半円、2と3が四分の一円ずつなら確率は1/2,1/4,1/4で、三つの名前を等確率として1/3ずつにはできない。試行の相対度数は確率を考える手がかりだが、有限回で理論値に必ず一致したり、毎回近づいたりする保証はない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材用の抽選盤を半円の領域1と、四分の一円ずつの領域2,3に分ける。同じ幅の角度に同じ確率で止まる設定なら、1の確率は1/2。名前が三つでも1/3ずつとはしない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "各面が同じ確率のさいころを独立に振る教材モデル。1の確率は1/6でも、実際の12回で必ず2回出るとは限らない。記録の割合とモデルの確率を別欄にする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "場合の数の比で確率を求める前に確認する条件は？ 正答：数える基本結果が同様に確からしいこと。 同じ確率の基本結果へ分けてから該当数を数える。 考える手がかり：分母の一つ一つを等しく扱ってよいか見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "各面が同じ確率で出る6面さいころで、1の確率は？ 正答：1/6。 六つの等確率結果のうち、1は一つ。 考える手がかり：全結果数と該当数を数える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "各面が同じ確率の6面さいころで、偶数の確率を小数で答えると？ 正答：0.5。 偶数2,4,6は六つ中三つなので3/6＝0.5。 考える手がかり：目的の結果を列挙する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "1〜6の面だけをもつさいころで、7が出る確率は？ 正答：0。 起こり得る六結果に7は含まれない。 考える手がかり：結果の集合の中にあるかを確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "三つの結果名があれば、それぞれの確率は必ず1/3？ 正答：必ずではない。 結果名の数だけでは起こりやすさの等しさは分からない。 考える手がかり：等確率の条件を先に調べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "止まる角度が一様な抽選盤で、半円の領域1の確率は？ 正答：1/2。 一周の角度の半分を占めるので1/2。 考える手がかり：角度の割合と一様という条件を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "公平なさいころを独立に12回振れば、1は必ず2回出る？ 正答：必ずではない。 確率1/6は有限回の回数を固定する約束ではない。 考える手がかり：理論の確率と実際の回数を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "各回独立で各面同じ確率の6面さいころ。1が続いた後、次に1が出る確率は？ 正答：1/6。 独立で同じ条件なら過去の偏りで次の確率は変わらない。 考える手がかり：足りない結果を埋め合わせる仕組みではない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "確率を予想：止まる角度が一様で、領域1は半円、2と3は四分の一円ずつの抽選盤。最も出やすいのは？ 正答：領域1。 1は1/2、2と3は各1/4で、1が大きい。 考える手がかり：結果の名前ではなく角度の割合を見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "場合の数で確率を求める前に、なぜ同様に確からしいかを確かめる？ 確率1/2と、10回の記録で5回という結果は同じ意味？ 起こりやすさが違う結果を同じ一個として数えると比が確率にならない。確率1/2でも10回の結果は5回と決まっておらず、記録の割合は別に計算する。 確認項目：数える基本結果を等確率としてよい根拠を示した。 / 理論の確率と有限回の相対度数を分けた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "各面が同じ確率の6面さいころで、偶数が出る確率を求めよう。 基本結果を1,2,3,4,5,6の六つとして、各面が等確率という前提を確認する。 偶数に当たる結果は2,4,6の三つと数える。 確率は3/6＝1/2と求める。 この値は有限回で必ず半数が偶数になるという意味ではないと区別する。 結論：偶数が出る確率は1/2",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「起こり得る結果の名前が三つなら、確率は必ず1/3ずつになる。」は誤り。名前の数だけで等確率とはいえない。基本結果の起こりやすさが等しいという条件を確認してから、場合の数を比にする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "有限の基本結果が同様に確からしいとき確率=該当数/全結果数。公平な6面さいころは各1/6、偶数3/6。止まる角度が一様な盤で半円と二つの四分の一円の確率は1/2,1/4,1/4。有限試行数は理論値どおりを保証せず、独立試行では過去の偏りで次の確率は変わらない。 操作図の事実：公平な6面さいころは各1/6。偏りのない回転で止まる角度が一様な抽選盤は領域1が1/2、2と3が1/4ずつ。結果名3つだけを数えて1/3にしない。 使用する状態範囲：sample die/spinner; event first/even。 選択firstは結果1、evenは偶数。さいころの偶数は2,4,6で確率1/2、抽選盤の偶数は領域2だけで確率1/4。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223421200000",
    "grade": 8,
    "title": "樹形図・表で求める確率",
    "domain": "D",
    "order": 37,
    "goal": "樹形図や表で等確率の結果を漏れなく数え、目的の結果を選ぶ。",
    "coverageCodes": [
      "8350223421200000",
      "8350223420000000",
      "8350223421000000",
      "8350223422100000",
      "8350222110000000"
    ],
    "explanations": {
      "es": {
        "short": "二つの試行は、順や物を区別して結果を並べよう。独立で公平な二枚の硬貨なら、表表・表裏・裏表・裏裏の四つが同じ確率になるよ。",
        "detail": "硬貨A,Bを区別して、どちらも表と裏が同じ確率で、互いに独立に出るとする。Aが表の場合にBは表か裏、Aが裏の場合もBは表か裏なので四通り。ちょうど一枚が表なのは表裏と裏表の二通りだから確率は2/4＝1/2。表の枚数だけで0枚・1枚・2枚の三種類を等確率にしてはいけないよ。"
      },
      "js": {
        "short": "複数の試行の基本結果を樹形図や表で列挙し、重なりや漏れを防ぐ。区別した独立で公平な二硬貨の結果は四つで、各確率1/4となる。",
        "detail": "二硬貨A,Bの結果を順序付きで(表,表),(表,裏),(裏,表),(裏,裏)と表す。独立かつ各表裏が1/2という前提で、四結果は同様に確からしい。ちょうど一枚が表は二結果、両方表は一結果、少なくとも一枚表は三結果。樹形図では第一段の各枝から第二段の全候補を出し、途中の未完成な図を全結果として数えない。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "二段の枝を描く",
        "text": "教材の硬貨Aの表・裏を第一段にし、それぞれから硬貨Bの表・裏を二本ずつ伸ばす。終点は四つ。A表B裏とA裏B表を別の終点へ置く。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "二つの候補を組み合わせる",
        "text": "練習用の表で、行を硬貨Aの表裏、列を硬貨Bの表裏にする。2行2列の四マスを一回ずつ調べ、表がちょうど一つのマス二つを選ぶ。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "区別した硬貨A,Bがそれぞれ表か裏になる結果は全部で何通り？",
        "answer": 4,
        "explanation": "Aの二通りごとにBが二通りなので2×2＝4。",
        "hint": "順序付きの組を全て書く。",
        "suffix": "通り",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "Aが表でBが裏と、Aが裏でBが表は？",
        "options": [
          "同じ一つの結果",
          "どちらも両方表",
          "区別した二つの結果"
        ],
        "answer": "区別した二つの結果",
        "explanation": "どちらの硬貨に表が出たかが違う。",
        "hint": "A,Bという対応を保つ。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "区別した二硬貨の四結果のうち、表がちょうど一枚なのは何通り？",
        "answer": 2,
        "explanation": "(表,裏)と(裏,表)の二通り。",
        "hint": "表の位置を一つずつ数える。",
        "suffix": "通り",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "独立で公平な二硬貨で、表がちょうど一枚出る確率は？",
        "options": [
          "1/2",
          "1/3",
          "1/4"
        ],
        "answer": "1/2",
        "explanation": "等確率の四結果中二つなので2/4＝1/2。",
        "hint": "表の枚数三種類を分母にしない。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "独立で公平な二硬貨で、両方とも表の確率は？",
        "options": [
          "1/2",
          "3/4",
          "1/4"
        ],
        "answer": "1/4",
        "explanation": "(表,表)という一結果が四つ中一つ。",
        "hint": "二枚それぞれの結果の組で数える。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "独立で公平な二硬貨で、少なくとも一枚が表の確率は？",
        "options": [
          "1/4",
          "3/4",
          "1/2"
        ],
        "answer": "3/4",
        "explanation": "表表、表裏、裏表の三結果が当てはまる。",
        "hint": "「少なくとも」は二枚表も含む。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "公平で独立な二硬貨の表の枚数0,1,2は、三種類だから各1/3？",
        "options": [
          "違う。1枚は二つの基本結果を含む",
          "正しい",
          "0枚と2枚は起こらない"
        ],
        "answer": "違う。1枚は二つの基本結果を含む",
        "explanation": "等確率なのは四つの順序付き結果で、枚数の三分類ではない。",
        "hint": "大きな分類の中身の個数を比べる。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "樹形図でA表の後だけBの二枝を描き、A裏の後を省いた。全結果を数えられる？",
        "options": [
          "数えられる",
          "表が出る問題ならいつも省ける",
          "数えられない。A裏の後の二枝も必要"
        ],
        "answer": "数えられない。A裏の後の二枝も必要",
        "explanation": "全結果を分母にするには、該当しない枝も含め漏れなく列挙する。",
        "hint": "分母は目的の結果だけではない。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "結果を予想：独立で公平な二硬貨で、表が一枚も出ない確率は？",
      "options": [
        "3/4",
        "1/4",
        "1/2"
      ],
      "answer": "1/4",
      "explanation": "裏裏の一結果だけなので1/4。",
      "hint": "表がないという条件を全結果へ当てる。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "四つの基本結果から選ぶ",
      "prompt": "独立で公平な硬貨A,Bで、表がちょうど一枚の確率を求めよう。",
      "steps": [
        {
          "text": "Aの表裏の二枝を作り、その各枝からBの表裏を出す。"
        },
        {
          "text": "終点を表表、表裏、裏表、裏裏の四つとして、全て等確率と確認する。"
        },
        {
          "text": "表がちょうど一枚の表裏と裏表を選ぶ。"
        },
        {
          "text": "該当二つ÷全四つで2/4＝1/2。途中の枝でなく完成した結果の組を数えた。"
        }
      ],
      "answer": "確率は1/2",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "表の枚数は0,1,2の三種類だから、それぞれ同じ確率1/3になる。",
      "correction": "独立で公平な区別した二枚では、等確率なのは四つの結果。1枚の表は表裏と裏表の二つを含むので、0枚や2枚の分類とは確率が違う。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "表裏と裏表を別に数える理由を、硬貨A,Bを使って説明しよう。",
        "followUp": "「ちょうど一枚」と「少なくとも一枚」で、どの結果が違う？",
        "checkpoints": [
          "区別した硬貨への対応を保った。",
          "少なくとも一枚には表表も含めた。"
        ],
        "sample": "表裏はA表B裏、裏表はA裏B表で異なる基本結果。ちょうど一枚はこの二つ、少なくとも一枚は表表も含め三つになる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "二つの試行は、順や物を区別して結果を並べよう。独立で公平な二枚の硬貨なら、表表・表裏・裏表・裏裏の四つが同じ確率になるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "硬貨A,Bを区別して、どちらも表と裏が同じ確率で、互いに独立に出るとする。Aが表の場合にBは表か裏、Aが裏の場合もBは表か裏なので四通り。ちょうど一枚が表なのは表裏と裏表の二通りだから確率は2/4＝1/2。表の枚数だけで0枚・1枚・2枚の三種類を等確率にしてはいけないよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "複数の試行の基本結果を樹形図や表で列挙し、重なりや漏れを防ぐ。区別した独立で公平な二硬貨の結果は四つで、各確率1/4となる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "二硬貨A,Bの結果を順序付きで(表,表),(表,裏),(裏,表),(裏,裏)と表す。独立かつ各表裏が1/2という前提で、四結果は同様に確からしい。ちょうど一枚が表は二結果、両方表は一結果、少なくとも一枚表は三結果。樹形図では第一段の各枝から第二段の全候補を出し、途中の未完成な図を全結果として数えない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材の硬貨Aの表・裏を第一段にし、それぞれから硬貨Bの表・裏を二本ずつ伸ばす。終点は四つ。A表B裏とA裏B表を別の終点へ置く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "練習用の表で、行を硬貨Aの表裏、列を硬貨Bの表裏にする。2行2列の四マスを一回ずつ調べ、表がちょうど一つのマス二つを選ぶ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "区別した硬貨A,Bがそれぞれ表か裏になる結果は全部で何通り？ 正答：4。 Aの二通りごとにBが二通りなので2×2＝4。 考える手がかり：順序付きの組を全て書く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "Aが表でBが裏と、Aが裏でBが表は？ 正答：区別した二つの結果。 どちらの硬貨に表が出たかが違う。 考える手がかり：A,Bという対応を保つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "区別した二硬貨の四結果のうち、表がちょうど一枚なのは何通り？ 正答：2。 (表,裏)と(裏,表)の二通り。 考える手がかり：表の位置を一つずつ数える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "独立で公平な二硬貨で、表がちょうど一枚出る確率は？ 正答：1/2。 等確率の四結果中二つなので2/4＝1/2。 考える手がかり：表の枚数三種類を分母にしない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "独立で公平な二硬貨で、両方とも表の確率は？ 正答：1/4。 (表,表)という一結果が四つ中一つ。 考える手がかり：二枚それぞれの結果の組で数える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "独立で公平な二硬貨で、少なくとも一枚が表の確率は？ 正答：3/4。 表表、表裏、裏表の三結果が当てはまる。 考える手がかり：「少なくとも」は二枚表も含む。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "公平で独立な二硬貨の表の枚数0,1,2は、三種類だから各1/3？ 正答：違う。1枚は二つの基本結果を含む。 等確率なのは四つの順序付き結果で、枚数の三分類ではない。 考える手がかり：大きな分類の中身の個数を比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "樹形図でA表の後だけBの二枝を描き、A裏の後を省いた。全結果を数えられる？ 正答：数えられない。A裏の後の二枝も必要。 全結果を分母にするには、該当しない枝も含め漏れなく列挙する。 考える手がかり：分母は目的の結果だけではない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "結果を予想：独立で公平な二硬貨で、表が一枚も出ない確率は？ 正答：1/4。 裏裏の一結果だけなので1/4。 考える手がかり：表がないという条件を全結果へ当てる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "表裏と裏表を別に数える理由を、硬貨A,Bを使って説明しよう。 「ちょうど一枚」と「少なくとも一枚」で、どの結果が違う？ 表裏はA表B裏、裏表はA裏B表で異なる基本結果。ちょうど一枚はこの二つ、少なくとも一枚は表表も含め三つになる。 確認項目：区別した硬貨への対応を保った。 / 少なくとも一枚には表表も含めた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "独立で公平な硬貨A,Bで、表がちょうど一枚の確率を求めよう。 Aの表裏の二枝を作り、その各枝からBの表裏を出す。 終点を表表、表裏、裏表、裏裏の四つとして、全て等確率と確認する。 表がちょうど一枚の表裏と裏表を選ぶ。 該当二つ÷全四つで2/4＝1/2。途中の枝でなく完成した結果の組を数えた。 結論：確率は1/2",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「表の枚数は0,1,2の三種類だから、それぞれ同じ確率1/3になる。」は誤り。独立で公平な区別した二枚では、等確率なのは四つの結果。1枚の表は表裏と裏表の二つを含むので、0枚や2枚の分類とは確率が違う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "区別した二枚の硬貨A,Bが独立で各表裏が同確率なら、HH,HT,TH,TTは各1/4。ちょうど表一枚2/4、両方表1/4、少なくとも表一枚3/4、表なし1/4。表の枚数三分類は等確率ではない。樹形図の全葉を漏れ重なりなく数える。 操作図の事実：独立で公平な区別した二枚の硬貨。HH/HT/TH/TTの4結果。表一枚2/4、表二枚1/4、少なくとも一枚3/4。 使用する状態範囲：event one/both/atleast。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "motion",
        "text": "区別した二枚の硬貨A,Bは独立で公平とする。A表裏の各枝からB表裏の枝を伸ばし、全四結果HH,HT,TH,TTが同様に確からしく各1/4。ちょうど一枚が表はHT,THの二結果で確率2/4=1/2。描画途中の未完成な葉を全結果数とせず、既に示した結果の対応を保つ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223422100000",
    "grade": 8,
    "title": "確率の計算と余事象",
    "domain": "D",
    "order": 38,
    "goal": "二つのさいころの結果を表で数え、余事象の方法と比べる。",
    "coverageCodes": [
      "8350223422100000",
      "8350223420000000",
      "8350223421200000",
      "8350223422000000",
      "8350222220000000",
      "8350223512000000"
    ],
    "explanations": {
      "es": {
        "short": "起こらない方を数えると簡単な場合がある。全てを合わせた確率1から、反対の事象の確率を引こう。「少なくとも一つ」の重なりにも注意するよ。",
        "detail": "区別した公平な二つのさいころを独立に振ると、6×6＝36結果が同じ確率。和が7なのは(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)の6結果で、確率は6/36＝1/6。和が7にならない結果は残り30だから30/36＝5/6。起こるか起こらないかで全結果を二つに分けられるよ。"
      },
      "js": {
        "short": "事象Aが起こらない結果全体を余事象といい、その確率は1−P(A)。等確率の全結果を重複なく分けることを根拠として使う。",
        "detail": "区別した独立で公平な二さいころでは36組が等確率。少なくとも一方が6の結果は、第一が6の6組と第二が6の6組から重複(6,6)一組を引き11組。余事象は両方とも6以外で5×5＝25組だから、1−25/36＝11/36とも求められる。「少なくとも一方が6」の反対を「少なくとも一方が6でない」としてはいけない。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "36マスの重なりを読む",
        "text": "教材の表で一つ目のさいころの出目を行、二つ目を列にする。6の行と6の列を塗ると、交差する(6,6)のマスを二回数えやすい。6＋6−1＝11マスとする。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "programming",
        "title": "条件を満たさない方も数える",
        "text": "練習用の36組から「両方6以外」を選ぶと25組。残り11組が「少なくとも一方6」で、二つの組合せを足すと全36組へ戻る。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "区別した6面さいころ二つの出目の組は全部で何通り？",
        "answer": 36,
        "explanation": "一つ目の6通りごとに二つ目も6通りで6×6＝36。",
        "hint": "出目を順序付きの組にする。",
        "suffix": "通り",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "区別した二つの6面さいころで、出目の和が7になる組は何通り？",
        "answer": 6,
        "explanation": "(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)の6組。",
        "hint": "一つ目の値を順に固定して相手を探す。",
        "suffix": "通り",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "区別した独立で公平な二さいころで、和が7の確率は？",
        "options": [
          "1/6",
          "1/7",
          "1/12"
        ],
        "answer": "1/6",
        "explanation": "全36組のうち6組なので6/36＝1/6。",
        "hint": "和の値の種類を等確率と考えない。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "区別した二つの6面さいころで、少なくとも一方が6となる組は何通り？",
        "answer": 11,
        "explanation": "第一が6の6組＋第二が6の6組−重複(6,6)一組＝11組。",
        "hint": "二回数えたマスを一回引く。",
        "suffix": "通り",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "区別した二つの6面さいころで、両方とも6以外となる組は何通り？",
        "answer": 25,
        "explanation": "各出目は1〜5の五通りなので5×5＝25。",
        "hint": "起こらない方の条件を両方へ当てる。",
        "suffix": "通り",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "「少なくとも一方が6」の余事象は？",
        "options": [
          "両方とも6以外",
          "少なくとも一方が6以外",
          "両方とも6"
        ],
        "answer": "両方とも6以外",
        "explanation": "一方でも6なら元の事象に入るので、入らないには両方が6以外である必要がある。",
        "hint": "元の事象を全く満たさない組を考える。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "二つの6面さいころの出目の表で、6の行と6の列を単純に6＋6＝12組と数えた。重複は？",
        "options": [
          "全ての六組",
          "重複はない",
          "(6,6)の一組"
        ],
        "answer": "(6,6)の一組",
        "explanation": "二つの条件を同時に満たす交差マス(6,6)を二回数えている。",
        "hint": "表の行と列の交点を探す。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "区別した二さいころの(1,6)と(6,1)は？",
        "options": [
          "どちらも和が6",
          "異なる二つの結果",
          "同じ一つの結果"
        ],
        "answer": "異なる二つの結果",
        "explanation": "和は同じ7でも、どちらのさいころが何を出したかが違う。",
        "hint": "出目の対応を残す。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "number",
      "prompt": "余事象を予想：独立で公平な二さいころで和が7にならない確率を□/36と表す。□は？",
      "answer": 30,
      "explanation": "和7の6組を全36組から除き、36−6＝30。",
      "hint": "全結果を起こる側と起こらない側へ分ける。",
      "suffix": "",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "直接数える方法と余事象を比べる",
      "prompt": "独立で公平な二さいころで、少なくとも一方が6の確率を求めよう。",
      "steps": [
        {
          "text": "区別した二出目の組は36通りで、同様に確からしいと確認する。"
        },
        {
          "text": "直接なら6の行と列を数え、重複(6,6)を引いて6＋6−1＝11組。"
        },
        {
          "text": "余事象は両方6以外の25組なので、残りは36−25＝11組。"
        },
        {
          "text": "両方法で同じ11組となり、確率は11/36。"
        }
      ],
      "answer": "確率は11/36",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "「少なくとも一方が6」の反対は「少なくとも一方が6以外」である。",
      "correction": "例えば(6,1)は両方の表現に当てはまり、反対の二分類にならない。余事象は元の条件が全く起こらない「両方とも6以外」。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "少なくとも一方が6の組を、直接と余事象で数えて説明しよう。",
        "followUp": "なぜ二つの方法の答えが一致するはずなの？",
        "checkpoints": [
          "重複(6,6)を一回引いた。",
          "全36組を重なりなく起こる側と起こらない側へ分けた。"
        ],
        "sample": "直接は6＋6−1＝11。起こらない側は5×5＝25で残り11。同じ全36組を二つに分けているため一致し、確率は11/36。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "起こらない方を数えると簡単な場合がある。全てを合わせた確率1から、反対の事象の確率を引こう。「少なくとも一つ」の重なりにも注意するよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "区別した公平な二つのさいころを独立に振ると、6×6＝36結果が同じ確率。和が7なのは(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)の6結果で、確率は6/36＝1/6。和が7にならない結果は残り30だから30/36＝5/6。起こるか起こらないかで全結果を二つに分けられるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "事象Aが起こらない結果全体を余事象といい、その確率は1−P(A)。等確率の全結果を重複なく分けることを根拠として使う。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "区別した独立で公平な二さいころでは36組が等確率。少なくとも一方が6の結果は、第一が6の6組と第二が6の6組から重複(6,6)一組を引き11組。余事象は両方とも6以外で5×5＝25組だから、1−25/36＝11/36とも求められる。「少なくとも一方が6」の反対を「少なくとも一方が6でない」としてはいけない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材の表で一つ目のさいころの出目を行、二つ目を列にする。6の行と6の列を塗ると、交差する(6,6)のマスを二回数えやすい。6＋6−1＝11マスとする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "練習用の36組から「両方6以外」を選ぶと25組。残り11組が「少なくとも一方6」で、二つの組合せを足すと全36組へ戻る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "区別した6面さいころ二つの出目の組は全部で何通り？ 正答：36。 一つ目の6通りごとに二つ目も6通りで6×6＝36。 考える手がかり：出目を順序付きの組にする。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "区別した二つの6面さいころで、出目の和が7になる組は何通り？ 正答：6。 (1,6),(2,5),(3,4),(4,3),(5,2),(6,1)の6組。 考える手がかり：一つ目の値を順に固定して相手を探す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "区別した独立で公平な二さいころで、和が7の確率は？ 正答：1/6。 全36組のうち6組なので6/36＝1/6。 考える手がかり：和の値の種類を等確率と考えない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "区別した二つの6面さいころで、少なくとも一方が6となる組は何通り？ 正答：11。 第一が6の6組＋第二が6の6組−重複(6,6)一組＝11組。 考える手がかり：二回数えたマスを一回引く。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "区別した二つの6面さいころで、両方とも6以外となる組は何通り？ 正答：25。 各出目は1〜5の五通りなので5×5＝25。 考える手がかり：起こらない方の条件を両方へ当てる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "「少なくとも一方が6」の余事象は？ 正答：両方とも6以外。 一方でも6なら元の事象に入るので、入らないには両方が6以外である必要がある。 考える手がかり：元の事象を全く満たさない組を考える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "二つの6面さいころの出目の表で、6の行と6の列を単純に6＋6＝12組と数えた。重複は？ 正答：(6,6)の一組。 二つの条件を同時に満たす交差マス(6,6)を二回数えている。 考える手がかり：表の行と列の交点を探す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "区別した二さいころの(1,6)と(6,1)は？ 正答：異なる二つの結果。 和は同じ7でも、どちらのさいころが何を出したかが違う。 考える手がかり：出目の対応を残す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "余事象を予想：独立で公平な二さいころで和が7にならない確率を□/36と表す。□は？ 正答：30。 和7の6組を全36組から除き、36−6＝30。 考える手がかり：全結果を起こる側と起こらない側へ分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "少なくとも一方が6の組を、直接と余事象で数えて説明しよう。 なぜ二つの方法の答えが一致するはずなの？ 直接は6＋6−1＝11。起こらない側は5×5＝25で残り11。同じ全36組を二つに分けているため一致し、確率は11/36。 確認項目：重複(6,6)を一回引いた。 / 全36組を重なりなく起こる側と起こらない側へ分けた。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "独立で公平な二さいころで、少なくとも一方が6の確率を求めよう。 区別した二出目の組は36通りで、同様に確からしいと確認する。 直接なら6の行と列を数え、重複(6,6)を引いて6＋6−1＝11組。 余事象は両方6以外の25組なので、残りは36−25＝11組。 両方法で同じ11組となり、確率は11/36。 結論：確率は11/36",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「「少なくとも一方が6」の反対は「少なくとも一方が6以外」である。」は誤り。例えば(6,1)は両方の表現に当てはまり、反対の二分類にならない。余事象は元の条件が全く起こらない「両方とも6以外」。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "独立で公平な区別した二つの6面さいころの36組は等確率。和7は6組で6/36、余事象30/36。少なくとも一方6は6+6−1=11組、両方6以外25組。余事象確率は1−元の確率。異なる結果の重複と漏れを避ける。 操作図の事実：独立で公平な区別した二つのさいころ36結果。和7は6/36、少なくとも一方6は11/36。余事象は30/36または25/36。 使用する状態範囲：event sum7/atleast6; complement no/yes。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "code": "8350223422200000",
    "grade": 8,
    "title": "確率を使った判断",
    "domain": "D",
    "order": 39,
    "goal": "個数だけでなく全体に対する確率を比べ、取り出し条件の変化も確認する。",
    "coverageCodes": [
      "8350223422200000",
      "8350223420000000",
      "8350223422000000",
      "8350222220000000",
      "8350222330000000",
      "8350223511000000",
      "8350223513000000"
    ],
    "explanations": {
      "es": {
        "short": "当たりの数が多いだけで、当たりやすいとは決まらない。全体の数も使って確率を比べよう。取り出したものを戻すかどうかで、次の条件も変わるよ。",
        "detail": "架空の袋Aは赤2個と青3個、Bは赤3個と青7個。どの玉も同じ確率で一個選ばれるとすると、赤の確率はAが2/5＝0.4、Bが3/10＝0.3。赤の個数はBが多いが、赤を選ぶ確率はAが大きい。確率が大きくても、実際の一回で必ず赤になるわけではないよ。"
      },
      "js": {
        "short": "確率による比較では、該当数と全結果数の比、および等確率の前提をそろえる。条件の変化と一回の実現結果を分けて判断する。",
        "detail": "各玉を同確率で一個選ぶ設定で、袋Aの赤2青3では赤2/5、青3/5。袋Bの赤3青7では赤3/10、青7/10。玉を一個選ぶ前の条件で比較する。Aから赤一個が出たと分かり、戻さないなら残りは赤1青3で、残った各玉を同確率で選ぶと次の赤は1/4。元へ戻し、改めて各玉を同確率で独立に選ぶなら2/5へ戻る。過去の結果だけで次が必ず決まるとはせず、残っている全体と抽出条件を確認する。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "色の部品を選ぶ設定",
        "text": "教材用の袋Aは赤2青3、袋Bは赤3青7。同じ確率で一個選ぶ設定では、赤が目的ならAの2/5がBの3/10より大きい。部品の総数も数えて比べる。",
        "activityIds": [
          "craft-lego"
        ]
      },
      {
        "category": "programming",
        "title": "戻す・戻さないを分ける",
        "text": "練習用の赤2青3の袋で、赤一個を選んだ後の状態を表示する。戻せば赤2青3、戻さなければ赤1青3。次の確率を計算するときは、今の状態を分母と分子へ反映する。",
        "activityIds": [
          "prog-python"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "各玉を同確率で一個選ぶ袋Aは赤2個、青3個。赤の確率を小数で答えると？",
        "answer": 0.4,
        "explanation": "全5個中赤2個なので2/5＝0.4。",
        "hint": "赤の数を全体の数で割る。",
        "suffix": "",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "各玉を同確率で一個選ぶ袋Bは赤3個、青7個。赤の確率を小数で答えると？",
        "answer": 0.3,
        "explanation": "全10個中赤3個なので3/10＝0.3。",
        "hint": "青の個数だけを分母にしない。",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "各玉を同確率で一個選ぶ。A赤2青3、B赤3青7なら、赤の確率が大きいのは？",
        "options": [
          "B",
          "同じ",
          "A"
        ],
        "answer": "A",
        "explanation": "Aは0.4、Bは0.3。赤の個数だけならBが多いが、割合はAが大きい。",
        "hint": "全体に対する比で比べる。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "各玉を同確率で一個選ぶ。A赤2青3、B赤3青7なら、青の確率が大きいのは？",
        "options": [
          "同じ",
          "B",
          "A"
        ],
        "answer": "B",
        "explanation": "Aは3/5＝0.6、Bは7/10＝0.7でBが大きい。",
        "hint": "目的の色を変えたら分子も変える。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "赤を選ぶ確率がAの方が大きいなら、一回選ぶと必ずAは赤？",
        "options": [
          "必ずではない",
          "必ず赤",
          "必ず青"
        ],
        "answer": "必ずではない",
        "explanation": "確率は起こりやすさを比べるが、一回の結果を保証しない。",
        "hint": "大小の比較と結果の確定を分ける。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "袋の玉の個数を等しく数えて確率を出すための前提は？",
        "options": [
          "色の名前が二つであることだけ",
          "赤が必ず出ること",
          "どの玉も同じ確率で選ばれること"
        ],
        "answer": "どの玉も同じ確率で選ばれること",
        "explanation": "基本結果となる各玉を等確率として扱える必要がある。",
        "hint": "数えた一個一個の重みが同じか見る。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "赤2青3の袋から赤を一個選んだ後、戻して全体を元へ戻し、独立に同確率で選ぶ。次の赤の確率は？",
        "options": [
          "必ず0",
          "2/5",
          "1/4"
        ],
        "answer": "2/5",
        "explanation": "元の赤2青3へ戻るので、次も2/5。過去の赤を打ち消す必要はない。",
        "hint": "今の袋の状態を数え直す。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "赤2青3の袋から赤一個が出たと分かり、戻さず残りから同確率で一個選ぶ。次の赤の確率は？",
        "options": [
          "1/4",
          "2/5",
          "1/5"
        ],
        "answer": "1/4",
        "explanation": "残りは赤1青3の4個なので1/4。",
        "hint": "取り出した色と戻すかどうかを確認する。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "選びやすさを予想：各玉が同確率のA赤2青3、B赤3青7で、赤の個数だけならBを選びたくなる。比べるべきものは？",
      "options": [
        "2と3だけ",
        "3と7だけ",
        "2/5と3/10"
      ],
      "answer": "2/5と3/10",
      "explanation": "全体に対する赤の割合を比べるので、Aの2/5が大きい。",
      "hint": "分母が違うことを見落とさない。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "分母をそろえて確率を比べる",
      "prompt": "各玉を同確率で一個選ぶ。A赤2青3、B赤3青7で赤の確率を比べよう。",
      "steps": [
        {
          "text": "Aの全体は5個、Bの全体は10個と数える。"
        },
        {
          "text": "赤の確率はA＝2/5、B＝3/10。"
        },
        {
          "text": "Aを4/10へ直すと4/10>3/10なのでAが大きい。"
        },
        {
          "text": "結論は赤の起こりやすさの比較であり、一回の結果を確定するものではない。"
        }
      ],
      "answer": "赤の確率はAの方が大きい",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "袋Bの赤は3個でAの2個より多いから、必ずBの方が赤を選びやすい。",
      "correction": "総数が違うので個数だけでは比べられない。各玉が同確率ならAは2/5＝0.4、Bは3/10＝0.3でAの方が大きい。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "赤の個数が多い袋でも、赤の確率が小さい場合がある理由を説明しよう。",
        "followUp": "一個を選んだ後に確率を考えるなら、どんな条件を読み直す？",
        "checkpoints": [
          "該当数を全体の数で割って比べた。",
          "選んだ色、戻す有無、次の等確率条件を確認した。"
        ],
        "sample": "全体の数も増えるので割合は下がる場合がある。次の確率では何色を取り出したか、戻したかを確かめ、残った全体と目的の色を数え直す。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "当たりの数が多いだけで、当たりやすいとは決まらない。全体の数も使って確率を比べよう。取り出したものを戻すかどうかで、次の条件も変わるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "架空の袋Aは赤2個と青3個、Bは赤3個と青7個。どの玉も同じ確率で一個選ばれるとすると、赤の確率はAが2/5＝0.4、Bが3/10＝0.3。赤の個数はBが多いが、赤を選ぶ確率はAが大きい。確率が大きくても、実際の一回で必ず赤になるわけではないよ。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "確率による比較では、該当数と全結果数の比、および等確率の前提をそろえる。条件の変化と一回の実現結果を分けて判断する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "各玉を同確率で一個選ぶ設定で、袋Aの赤2青3では赤2/5、青3/5。袋Bの赤3青7では赤3/10、青7/10。玉を一個選ぶ前の条件で比較する。Aから赤一個が出たと分かり、戻さないなら残りは赤1青3で、残った各玉を同確率で選ぶと次の赤は1/4。元へ戻し、改めて各玉を同確率で独立に選ぶなら2/5へ戻る。過去の結果だけで次が必ず決まるとはせず、残っている全体と抽出条件を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "教材用の袋Aは赤2青3、袋Bは赤3青7。同じ確率で一個選ぶ設定では、赤が目的ならAの2/5がBの3/10より大きい。部品の総数も数えて比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "練習用の赤2青3の袋で、赤一個を選んだ後の状態を表示する。戻せば赤2青3、戻さなければ赤1青3。次の確率を計算するときは、今の状態を分母と分子へ反映する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "各玉を同確率で一個選ぶ袋Aは赤2個、青3個。赤の確率を小数で答えると？ 正答：0.4。 全5個中赤2個なので2/5＝0.4。 考える手がかり：赤の数を全体の数で割る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "各玉を同確率で一個選ぶ袋Bは赤3個、青7個。赤の確率を小数で答えると？ 正答：0.3。 全10個中赤3個なので3/10＝0.3。 考える手がかり：青の個数だけを分母にしない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "各玉を同確率で一個選ぶ。A赤2青3、B赤3青7なら、赤の確率が大きいのは？ 正答：A。 Aは0.4、Bは0.3。赤の個数だけならBが多いが、割合はAが大きい。 考える手がかり：全体に対する比で比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "各玉を同確率で一個選ぶ。A赤2青3、B赤3青7なら、青の確率が大きいのは？ 正答：B。 Aは3/5＝0.6、Bは7/10＝0.7でBが大きい。 考える手がかり：目的の色を変えたら分子も変える。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "赤を選ぶ確率がAの方が大きいなら、一回選ぶと必ずAは赤？ 正答：必ずではない。 確率は起こりやすさを比べるが、一回の結果を保証しない。 考える手がかり：大小の比較と結果の確定を分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "袋の玉の個数を等しく数えて確率を出すための前提は？ 正答：どの玉も同じ確率で選ばれること。 基本結果となる各玉を等確率として扱える必要がある。 考える手がかり：数えた一個一個の重みが同じか見る。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "赤2青3の袋から赤を一個選んだ後、戻して全体を元へ戻し、独立に同確率で選ぶ。次の赤の確率は？ 正答：2/5。 元の赤2青3へ戻るので、次も2/5。過去の赤を打ち消す必要はない。 考える手がかり：今の袋の状態を数え直す。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "赤2青3の袋から赤一個が出たと分かり、戻さず残りから同確率で一個選ぶ。次の赤の確率は？ 正答：1/4。 残りは赤1青3の4個なので1/4。 考える手がかり：取り出した色と戻すかどうかを確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "選びやすさを予想：各玉が同確率のA赤2青3、B赤3青7で、赤の個数だけならBを選びたくなる。比べるべきものは？ 正答：2/5と3/10。 全体に対する赤の割合を比べるので、Aの2/5が大きい。 考える手がかり：分母が違うことを見落とさない。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "赤の個数が多い袋でも、赤の確率が小さい場合がある理由を説明しよう。 一個を選んだ後に確率を考えるなら、どんな条件を読み直す？ 全体の数も増えるので割合は下がる場合がある。次の確率では何色を取り出したか、戻したかを確かめ、残った全体と目的の色を数え直す。 確認項目：該当数を全体の数で割って比べた。 / 選んだ色、戻す有無、次の等確率条件を確認した。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "各玉を同確率で一個選ぶ。A赤2青3、B赤3青7で赤の確率を比べよう。 Aの全体は5個、Bの全体は10個と数える。 赤の確率はA＝2/5、B＝3/10。 Aを4/10へ直すと4/10>3/10なのでAが大きい。 結論は赤の起こりやすさの比較であり、一回の結果を確定するものではない。 結論：赤の確率はAの方が大きい",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「袋Bの赤は3個でAの2個より多いから、必ずBの方が赤を選びやすい。」は誤り。総数が違うので個数だけでは比べられない。各玉が同確率ならAは2/5＝0.4、Bは3/10＝0.3でAの方が大きい。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "各玉を同確率で一個選ぶ架空袋A赤2青3、B赤3青7では赤確率2/5対3/10、青3/5対7/10。Aから赤一個を取り出して戻さず、残った各玉を同確率で選ぶなら、残り赤1青3で次の赤1/4。戻して独立に同確率で再抽出なら2/5。確率の大小は一回の結果を保証しない。 操作図の事実：同じ大きさの玉をよく混ぜ無作為に1個取り出す。A赤2青3、B赤3青7。赤2/5対3/10、青3/5対7/10。個数だけで確率大小を決めない。 使用する状態範囲：bag A/B; color red/blue。",
        "status": "verified",
        "sourceIds": [
          "mext-jh2-codes",
          "mext-jh2-commentary"
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
    "id": "mext-jh2-codes",
    "url": "https://www.mext.go.jp/content/20230901-mxt_syoto01-000010374_10.xlsx",
    "title": "文部科学省 中学校学習指導要領コード83V11・第2学年数学82行",
    "retrievedAt": "2026-11-04"
  },
  {
    "id": "mext-jh2-commentary",
    "url": "https://www.mext.go.jp/component/a_menu/education/micro_detail/__icsFiles/afieldfile/2019/03/18/1387018_004.pdf",
    "title": "文部科学省 中学校学習指導要領（平成29年告示）解説 数学編・第2学年（印刷pp.100–130）",
    "retrievedAt": "2026-11-04"
  }
];
  data.units = data.units.concat(units);
  data.sources = data.sources.concat(sources);
  data.version = "6";
  data.grades = [4, 5, 6, 7, 8];
}());
