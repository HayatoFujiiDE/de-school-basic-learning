/* Original grade-5 mathematics. Appends to the unchanged grade-4 data. */
(function () {
  "use strict";
  var data = window.BL && window.BL.data;
  if (!data || !Array.isArray(data.units) || !Array.isArray(data.sources)) { throw new Error("Grade-4 base data must be loaded first."); }
  var units = [
  {
    "code": "8250253120000000",
    "grade": 5,
    "title": "整数と小数のしくみ",
    "domain": "A",
    "order": 1,
    "goal": "位のまとまりを使い、10倍や10分の1の数をつくる。",
    "coverageCodes": [
      "8250252100000000",
      "8250252200000000",
      "8250252300000000",
      "8250253120000000",
      "8250253121000000",
      "8250253121100000",
      "8250253122000000",
      "8250253122100000",
      "8250253511000000",
      "8250253512000000",
      "8250253513000000"
    ],
    "explanations": {
      "es": {
        "short": "数字が一つ左の位へ動くと、その数字の表す大きさは10倍。右へ動くと10分の1になるよ。",
        "detail": "2.35は、1が2こ、0.1が3こ、0.01が5こ。全部を10倍すると20、3、0.5になり、合わせて23.5。数字の並びを保って、位の大きさが変わるんだ。100倍は左へ二つ分、100分の1は右へ二つ分。必要な位には0を入れよう。"
      },
      "js": {
        "short": "整数も小数も十進位取りで表す。10倍ごとに各数字の位が一つ上がり、10分の1ごとに一つ下がる。",
        "detail": "小数点だけを機械的に動かすのでなく、各数字が表す量を追う。2.35×10では2が20、0.3が3、0.05が0.5となり23.5。2.35÷100では0.02＋0.003＋0.0005＝0.0235。0は空いている位を示し、数の大きさを正しく伝える。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "表示を10倍にする",
        "text": "練習用の数表示を2.35から23.5へ変える。各数字を一つ上の位へ移す処理は、数全体を10倍にすることと対応する。",
        "activityIds": [
          "prog-scratch"
        ]
      },
      {
        "category": "drawing",
        "title": "線の長さを変える",
        "text": "架空の図案の線2.35cmを10倍にすると23.5cm。100分の1にすると0.0235cmで、同じ数字でも位が違う。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "2.35を10倍した数は？",
        "answer": 23.5,
        "explanation": "2.35×10＝23.5。各数字が一つ上の位を表す。",
        "hint": "2、3、5がそれぞれどの位へ移るかな？",
        "suffix": "",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "0.48を100倍した数は？",
        "answer": 48,
        "explanation": "0.48×100＝48。0.01が48こある数を100倍すると1が48こ。",
        "hint": "100倍は10倍を2回すること。",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "6.2を1000分の1にすると？",
        "answer": 0.0062,
        "explanation": "6.2÷1000＝0.0062。右へ三つの位を移す。",
        "hint": "一の位の6はどこへ移る？",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "3.08の0が表しているのは？",
        "options": [
          "十分の一の位に数のまとまりがないこと",
          "数全体が0であること",
          "8を10倍すること"
        ],
        "answer": "十分の一の位に数のまとまりがないこと",
        "explanation": "0は十分の一の位が空いていることを示す。3.08と3.8は違う数。",
        "hint": "0を消して3.8とすると同じ量かな？",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "47.6は0.1の何こ分？",
        "answer": 476,
        "explanation": "47.6÷0.1＝476。1は0.1が10こなので、47.6は476こ分。",
        "hint": "47は0.1が何こ分で、0.6は何こ分？",
        "suffix": "こ分",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "order",
        "prompt": "小さい順に並べよう。",
        "items": [
          "0.305",
          "3.05",
          "0.035"
        ],
        "answer": [
          "0.035",
          "0.305",
          "3.05"
        ],
        "explanation": "一の位、十分の一の位、百分の一の位の順に比べる。",
        "hint": "0.035の十分の一の位は0だよ。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "number",
        "prompt": "図案の長さ0.065mを100倍すると何m？",
        "answer": 6.5,
        "explanation": "0.065×100＝6.5。",
        "hint": "各数字を二つ上の位へ移そう。",
        "suffix": "m",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "2.35を100分の1にする説明はどれ？",
        "options": [
          "各数字が表す量を100分の1にし、0.0235にする",
          "数字の順を逆にし、5.32にする",
          "0を全部消す"
        ],
        "answer": "各数字が表す量を100分の1にし、0.0235にする",
        "explanation": "数字の順序を保ち、各位の量を100分の1にする。",
        "hint": "数字の並びと位の大きさを分けて考えよう。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "number",
      "prompt": "位取りカード：0.37を1000倍した数を入れよう。",
      "answer": 370,
      "explanation": "0.37×1000＝370。空いた一の位は0で示す。",
      "hint": "3は百の位、7は十の位へ移る。",
      "suffix": "",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "位ごとに10倍する",
      "prompt": "2.35を10倍するといくつ？",
      "steps": [
        {
          "text": "2.35を2＋0.3＋0.05に分ける。"
        },
        {
          "text": "それぞれを10倍すると20＋3＋0.5。"
        },
        {
          "text": "同じ位どうしを合わせると23.5。"
        },
        {
          "text": "23.5を10で割ると元の2.35へ戻る。"
        }
      ],
      "answer": "23.5",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "10倍だから、数の右に0を付ければよい。",
      "correction": "整数ではそう見える場合もあるが、2.35に0を付けた2.350は同じ大きさ。10倍は各数字の位を一つ上げ、23.5にする。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "2.35と23.5の数字2は、それぞれ何の位を表す？",
        "followUp": "10倍すると数字5が表す量はどう変わる？",
        "checkpoints": [
          "元の2は2、後の2は20と説明した。",
          "0.05が0.5になることも確かめた。"
        ],
        "sample": "2.35の2は一の位で2、23.5の2は十の位で20。どの数字の表す量も10倍になっている。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "数字が一つ左の位へ動くと、その数字の表す大きさは10倍。右へ動くと10分の1になるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "2.35は、1が2こ、0.1が3こ、0.01が5こ。全部を10倍すると20、3、0.5になり、合わせて23.5。数字の並びを保って、位の大きさが変わるんだ。100倍は左へ二つ分、100分の1は右へ二つ分。必要な位には0を入れよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "整数も小数も十進位取りで表す。10倍ごとに各数字の位が一つ上がり、10分の1ごとに一つ下がる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "小数点だけを機械的に動かすのでなく、各数字が表す量を追う。2.35×10では2が20、0.3が3、0.05が0.5となり23.5。2.35÷100では0.02＋0.003＋0.0005＝0.0235。0は空いている位を示し、数の大きさを正しく伝える。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "練習用の数表示を2.35から23.5へ変える。各数字を一つ上の位へ移す処理は、数全体を10倍にすることと対応する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の図案の線2.35cmを10倍にすると23.5cm。100分の1にすると0.0235cmで、同じ数字でも位が違う。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "2.35を10倍した数は？ 正答：23.5。 2.35×10＝23.5。各数字が一つ上の位を表す。 考える手がかり：2、3、5がそれぞれどの位へ移るかな？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "0.48を100倍した数は？ 正答：48。 0.48×100＝48。0.01が48こある数を100倍すると1が48こ。 考える手がかり：100倍は10倍を2回すること。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "6.2を1000分の1にすると？ 正答：0.0062。 6.2÷1000＝0.0062。右へ三つの位を移す。 考える手がかり：一の位の6はどこへ移る？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "3.08の0が表しているのは？ 正答：十分の一の位に数のまとまりがないこと。 0は十分の一の位が空いていることを示す。3.08と3.8は違う数。 考える手がかり：0を消して3.8とすると同じ量かな？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "47.6は0.1の何こ分？ 正答：476。 47.6÷0.1＝476。1は0.1が10こなので、47.6は476こ分。 考える手がかり：47は0.1が何こ分で、0.6は何こ分？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "小さい順に並べよう。 正答：0.035 → 0.305 → 3.05。 一の位、十分の一の位、百分の一の位の順に比べる。 考える手がかり：0.035の十分の一の位は0だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "図案の長さ0.065mを100倍すると何m？ 正答：6.5。 0.065×100＝6.5。 考える手がかり：各数字を二つ上の位へ移そう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "2.35を100分の1にする説明はどれ？ 正答：各数字が表す量を100分の1にし、0.0235にする。 数字の順序を保ち、各位の量を100分の1にする。 考える手がかり：数字の並びと位の大きさを分けて考えよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "位取りカード：0.37を1000倍した数を入れよう。 正答：370。 0.37×1000＝370。空いた一の位は0で示す。 考える手がかり：3は百の位、7は十の位へ移る。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "2.35と23.5の数字2は、それぞれ何の位を表す？ 10倍すると数字5が表す量はどう変わる？ 2.35の2は一の位で2、23.5の2は十の位で20。どの数字の表す量も10倍になっている。 確認項目：元の2は2、後の2は20と説明した。 / 0.05が0.5になることも確かめた。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "2.35を10倍するといくつ？ 2.35を2＋0.3＋0.05に分ける。 それぞれを10倍すると20＋3＋0.5。 同じ位どうしを合わせると23.5。 23.5を10で割ると元の2.35へ戻る。 結論：23.5",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「10倍だから、数の右に0を付ければよい。」は誤り。整数ではそう見える場合もあるが、2.35に0を付けた2.350は同じ大きさ。10倍は各数字の位を一つ上げ、23.5にする。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "正の整数・小数を10、100、1000倍すると各数字の位が1、2、3桁上がる。1/10、1/100倍では1、2桁下がる。2.35×10=23.5、2.35÷100=0.0235。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "verified",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "例の登場物を同じ数量・単位・条件を保った架空の物へ置き換える。",
        "問いの意味と正答を保ち、短い文へ言い換える。"
      ],
      "forbidden": [
        "数・単位・全体の大きさ・等分の条件・対応関係・正答を変更しない。",
        "誤りの選択肢や誤解の例を正しい主張として説明しない。",
        "claimsの範囲外の定義や公式を足さない。",
        "個人情報・実在する人の記録・外部作品の仕様を加えない。"
      ]
    }
  },
  {
    "code": "8250253111100000",
    "grade": 5,
    "title": "偶数と奇数",
    "domain": "A",
    "order": 2,
    "goal": "2で分けた余りに着目して、整数を二つに分ける。",
    "coverageCodes": [
      "8250252100000000",
      "8250252200000000",
      "8250252300000000",
      "8250253110000000",
      "8250253111000000",
      "8250253111100000",
      "8250253112000000",
      "8250253112100000",
      "8250253511000000",
      "8250253512000000",
      "8250253513000000"
    ],
    "explanations": {
      "es": {
        "short": "2でわって余りが0の整数は偶数（ぐうすう）、余りが1の整数は奇数（きすう）。0も偶数だよ。",
        "detail": "丸を2こずつ組にしてみよう。8こなら4組で余りなし。9こなら4組と1こになる。0こなら組は0組で余りも0。整数を2でわった余りは0か1だから、どの整数もどちらかに分けられる。一の位だけで確かめられる理由も、10が2でわり切れることにある。"
      },
      "js": {
        "short": "偶数は2で割り切れる整数、奇数は2で割ると1余る整数。分類の基準は余りである。",
        "detail": "0以上の整数を2こずつの組として表すと、余りは0か1だけになる。偶数は2×整数、奇数は2×整数＋1と表せる。十の位以上のまとまりは2で割り切れるため、一の位を見る判定も使える。ただし、定義は数字の見た目ではなく2で割った余りである。"
      }
    },
    "entries": [
      {
        "category": "minecraft",
        "title": "2こずつ門を作る",
        "text": "架空の建築でブロックを2こずつ使う。14こなら7組で余りなし、15こなら7組と1こなので、偶数と奇数の違いを組で見られる。",
        "activityIds": [
          "mc-build"
        ]
      },
      {
        "category": "craft",
        "title": "左右に同じかざり",
        "text": "同じかざりを左右に1こずつ付ける。11こでは5組作れて1こ残る。1こ足して12こにすると6組になる。",
        "activityIds": [
          "craft-accessory"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "14は偶数と奇数のどちら？",
        "options": [
          "偶数",
          "奇数"
        ],
        "answer": "偶数",
        "explanation": "14÷2＝7で余り0。",
        "hint": "2こずつの組が全部作れるかな？",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "0はどう分けられる？",
        "options": [
          "偶数",
          "奇数",
          "どちらでもない"
        ],
        "answer": "偶数",
        "explanation": "0÷2＝0で余り0なので偶数。",
        "hint": "何もないとき、余った1こはあるかな？",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "17こを2こずつ組にすると、余りは何こ？",
        "answer": 1,
        "explanation": "17＝2×8＋1。",
        "hint": "16こなら組が作れる。残りはいくつ？",
        "suffix": "こ",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "一の位が7の、0以上の整数は？",
        "options": [
          "必ず奇数",
          "必ず偶数",
          "一の位では分からない"
        ],
        "answer": "必ず奇数",
        "explanation": "十の位以上は2で割り切れ、7を2で割ると1余る。",
        "hint": "10のまとまりと7に分けてみよう。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "奇数に1を足すとどうなる？",
        "options": [
          "偶数になる",
          "奇数になる",
          "いつも0になる"
        ],
        "answer": "偶数になる",
        "explanation": "余っていた1こにもう1こを足すと、新しい2この組ができる。",
        "hint": "余り1こが、もう1こと組になるよ。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "かざり23こを左右2こ1組で使う。全部で何組作れる？",
        "answer": 11,
        "explanation": "23＝2×11＋1。11組作れて1こ余る。",
        "hint": "余りは組の数に入れない。",
        "suffix": "組",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "偶数どうしを合わせた数は？",
        "options": [
          "偶数",
          "奇数",
          "いつも2"
        ],
        "answer": "偶数",
        "explanation": "どちらも余りのない2この組なので、合わせても余り0。",
        "hint": "二つの集まりの組を、そのまま集めよう。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "「一の位が8だから偶数」の理由は？",
        "options": [
          "十の位以上も8も2で割り切れるから",
          "8が大きい数字だから",
          "8の形が左右同じだから"
        ],
        "answer": "十の位以上も8も2で割り切れるから",
        "explanation": "数の大きさや形ではなく、2で割った余りで判断する。",
        "hint": "10や100のまとまりを2組に分けられるかな？",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "組を作る箱：25この丸を2こずつに分けると？",
      "options": [
        "12組と余り1こ",
        "13組で余りなし",
        "10組と余り5こ"
      ],
      "answer": "12組と余り1こ",
      "explanation": "25＝2×12＋1。余りは2より小さくする。",
      "hint": "2こずつ、できるだけ多く組にしよう。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "余りで分ける",
      "prompt": "19は偶数？ 奇数？",
      "steps": [
        {
          "text": "19この丸から2こずつ組を作る。"
        },
        {
          "text": "18こで9組でき、1こ残る。"
        },
        {
          "text": "19＝2×9＋1と表せる。"
        },
        {
          "text": "2で割った余りが1だから奇数。"
        }
      ],
      "answer": "19は奇数",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "0は数がないので偶数ではない。",
      "correction": "偶数は2で割った余りが0の整数。0÷2＝0で余り0なので、0も偶数に入る。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "偶数に偶数を足すと偶数になることを、2この組で説明しよう。",
        "followUp": "奇数どうしなら、二つの余り1こはどうなる？",
        "checkpoints": [
          "余りのない組を合わせた図を思い浮かべた。",
          "奇数どうしの余り1こずつも組になると説明した。"
        ],
        "sample": "偶数は2この組だけでできている。合わせても組だけなので偶数。奇数どうしも余り1こずつが新しい組になり、偶数になる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "2でわって余りが0の整数は偶数（ぐうすう）、余りが1の整数は奇数（きすう）。0も偶数だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "丸を2こずつ組にしてみよう。8こなら4組で余りなし。9こなら4組と1こになる。0こなら組は0組で余りも0。整数を2でわった余りは0か1だから、どの整数もどちらかに分けられる。一の位だけで確かめられる理由も、10が2でわり切れることにある。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "偶数は2で割り切れる整数、奇数は2で割ると1余る整数。分類の基準は余りである。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "0以上の整数を2こずつの組として表すと、余りは0か1だけになる。偶数は2×整数、奇数は2×整数＋1と表せる。十の位以上のまとまりは2で割り切れるため、一の位を見る判定も使える。ただし、定義は数字の見た目ではなく2で割った余りである。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の建築でブロックを2こずつ使う。14こなら7組で余りなし、15こなら7組と1こなので、偶数と奇数の違いを組で見られる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "同じかざりを左右に1こずつ付ける。11こでは5組作れて1こ残る。1こ足して12こにすると6組になる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "14は偶数と奇数のどちら？ 正答：偶数。 14÷2＝7で余り0。 考える手がかり：2こずつの組が全部作れるかな？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "0はどう分けられる？ 正答：偶数。 0÷2＝0で余り0なので偶数。 考える手がかり：何もないとき、余った1こはあるかな？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "17こを2こずつ組にすると、余りは何こ？ 正答：1。 17＝2×8＋1。 考える手がかり：16こなら組が作れる。残りはいくつ？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "一の位が7の、0以上の整数は？ 正答：必ず奇数。 十の位以上は2で割り切れ、7を2で割ると1余る。 考える手がかり：10のまとまりと7に分けてみよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "奇数に1を足すとどうなる？ 正答：偶数になる。 余っていた1こにもう1こを足すと、新しい2この組ができる。 考える手がかり：余り1こが、もう1こと組になるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "かざり23こを左右2こ1組で使う。全部で何組作れる？ 正答：11。 23＝2×11＋1。11組作れて1こ余る。 考える手がかり：余りは組の数に入れない。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "偶数どうしを合わせた数は？ 正答：偶数。 どちらも余りのない2この組なので、合わせても余り0。 考える手がかり：二つの集まりの組を、そのまま集めよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "「一の位が8だから偶数」の理由は？ 正答：十の位以上も8も2で割り切れるから。 数の大きさや形ではなく、2で割った余りで判断する。 考える手がかり：10や100のまとまりを2組に分けられるかな？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "組を作る箱：25この丸を2こずつに分けると？ 正答：12組と余り1こ。 25＝2×12＋1。余りは2より小さくする。 考える手がかり：2こずつ、できるだけ多く組にしよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "偶数に偶数を足すと偶数になることを、2この組で説明しよう。 奇数どうしなら、二つの余り1こはどうなる？ 偶数は2この組だけでできている。合わせても組だけなので偶数。奇数どうしも余り1こずつが新しい組になり、偶数になる。 確認項目：余りのない組を合わせた図を思い浮かべた。 / 奇数どうしの余り1こずつも組になると説明した。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "19は偶数？ 奇数？ 19この丸から2こずつ組を作る。 18こで9組でき、1こ残る。 19＝2×9＋1と表せる。 2で割った余りが1だから奇数。 結論：19は奇数",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「0は数がないので偶数ではない。」は誤り。偶数は2で割った余りが0の整数。0÷2＝0で余り0なので、0も偶数に入る。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "0以上の整数nを2で割った余りは0か1。余り0は偶数、1は奇数。n個の物を2個ずつ組にするとfloor(n/2)組、n%2個余る。0も偶数。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "verified",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "例の登場物を同じ数量・単位・条件を保った架空の物へ置き換える。",
        "問いの意味と正答を保ち、短い文へ言い換える。"
      ],
      "forbidden": [
        "数・単位・全体の大きさ・等分の条件・対応関係・正答を変更しない。",
        "誤りの選択肢や誤解の例を正しい主張として説明しない。",
        "claimsの範囲外の定義や公式を足さない。",
        "個人情報・実在する人の記録・外部作品の仕様を加えない。"
      ]
    }
  },
  {
    "code": "8250253111200000",
    "grade": 5,
    "title": "倍数と約数",
    "domain": "A",
    "order": 3,
    "goal": "同じ周期や等しい分け方から、倍数と約数を見つける。",
    "coverageCodes": [
      "8250252100000000",
      "8250252200000000",
      "8250252300000000",
      "8250253110000000",
      "8250253111000000",
      "8250253111200000",
      "8250253112000000",
      "8250253112100000",
      "8250253511000000",
      "8250253512000000",
      "8250253513000000",
      "8250253601000000",
      "8250253602000000",
      "8250255100000000"
    ],
    "explanations": {
      "es": {
        "short": "3、6、9…は3の倍数。12を余りなく分ける1、2、3、4、6、12は12の約数だよ。",
        "detail": "倍数は同じ数を1倍、2倍、3倍…した数。この学習では0は入れない。約数は、整数を余りなくわり切る正の整数。8と12に共通する約数は1、2、4で、いちばん大きい4が最大公約数。共通する倍数24、48…の最初の24が最小公倍数。使い道を考えて選ぼう。"
      },
      "js": {
        "short": "倍数は正の整数倍で作る数、約数はその数を割り切る正の整数。共通する要素に着目する。",
        "detail": "8の約数は1、2、4、8。12の約数は1、2、3、4、6、12なので、公約数は1、2、4となる。最大公約数は4。8の倍数と12の倍数を並べると、最初に一致する正の数24が最小公倍数。同じ長さに切る問題と同じ時刻に重なる問題では、着目する集合が異なる。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "二つの点滅のタイミング",
        "text": "練習用の光Aは4秒ごと、Bは6秒ごとに点灯する。0秒に同時に始めると、次に重なるのは12秒後。4と6の最小公倍数を使う。",
        "activityIds": [
          "prog-scratch"
        ]
      },
      {
        "category": "craft",
        "title": "同じ長さのリボン",
        "text": "長さ8cmと12cmの2本のリボンを、余りなく同じ長さに切る。切る長さを整数cmにすると、最も長いのは4cm。",
        "activityIds": [
          "craft-accessory"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "6の倍数を小さい順に並べる。3番目の数は？（0は入れない）",
        "answer": 18,
        "explanation": "6、12、18なので3番目は18。",
        "hint": "6を3倍しよう。",
        "suffix": "",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "12の約数だけが全部入っているのは？",
        "options": [
          "1、2、3、4、6、12",
          "2、4、6、8、10、12",
          "12、24、36"
        ],
        "answer": "1、2、3、4、6、12",
        "explanation": "どれも12を余りなく割り切る。1と12自身も約数。",
        "hint": "12÷その数が整数になるか確かめよう。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "8と12の最大公約数は？",
        "answer": 4,
        "explanation": "公約数は1、2、4。その中の最大は4。",
        "hint": "8と12の約数を別々に並べよう。",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "8と12の最小公倍数は？",
        "answer": 24,
        "explanation": "8の倍数8、16、24と、12の倍数12、24が24で重なる。",
        "hint": "両方の周期を並べてみよう。",
        "suffix": "",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "18cmと24cmのリボンを、余りなく同じ整数cmの長さに切る。最も長い1本は何cm？",
        "answer": 6,
        "explanation": "18と24の最大公約数は6。18÷6＝3本、24÷6＝4本になる。",
        "hint": "切った長さで両方を割り切れる必要がある。",
        "suffix": "cm",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "4秒ごとと6秒ごとの光が0秒に同時に点灯。次に同時に点灯するのは何秒後？",
        "answer": 12,
        "explanation": "4と6の最小公倍数12で再び重なる。",
        "hint": "0秒の次の共通する時刻を探そう。",
        "suffix": "秒後",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "12の約数に1と12を入れる理由は？",
        "options": [
          "12÷1も12÷12も余り0だから",
          "大きい数と小さい数を必ず二つ入れるから",
          "12は偶数だから"
        ],
        "answer": "12÷1も12÷12も余り0だから",
        "explanation": "約数は割り切れるかどうかで判断する。",
        "hint": "定義に戻って計算しよう。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "同じ大きさの正方形タイルで縦12cm横18cmを隙間なく敷く。最大の整数cmの一辺を探すには？",
        "options": [
          "12と18の最大公約数",
          "12と18の最小公倍数",
          "12＋18"
        ],
        "answer": "12と18の最大公約数",
        "explanation": "一辺の長さで12も18も割り切れる必要がある。",
        "hint": "一辺は元の辺より大きくできるかな？",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "number",
      "prompt": "周期合わせ：6歩ごとと10歩ごとの目印が、スタートの次に重なるのは何歩目？",
      "answer": 30,
      "explanation": "6と10の最小公倍数は30。",
      "hint": "6の倍数と10の倍数の共通する最初の数。",
      "suffix": "歩目",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "同じ長さに切る",
      "prompt": "8cmと12cmを、余りなく同じ整数cmの長さに切る。最も長くするには？",
      "steps": [
        {
          "text": "8cmを割り切る長さは1、2、4、8cm。"
        },
        {
          "text": "12cmを割り切る長さは1、2、3、4、6、12cm。"
        },
        {
          "text": "両方にある長さは1、2、4cm。"
        },
        {
          "text": "最も長い4cmなら2本と3本になり、余りもない。"
        }
      ],
      "answer": "4cm",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "最大公約数は二つの数より大きくなる。",
      "correction": "約数は元の正の整数を割り切る数なので、最大公約数は小さい方の数を超えない。大きい共通の周期を探すのは公倍数。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "「余りなく同じ長さに切る」と「同じ時に光る」は、何を調べるところが違う？",
        "followUp": "8と12で、切る長さと重なる周期を一つずつ示そう。",
        "checkpoints": [
          "切る長さは共通の約数と説明した。",
          "重なる周期は共通の倍数と説明した。"
        ],
        "sample": "切る長さは8と12を割り切る数だから公約数を調べる。周期は8の倍数と12の倍数の共通部分なので、公倍数を調べる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "3、6、9…は3の倍数。12を余りなく分ける1、2、3、4、6、12は12の約数だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "倍数は同じ数を1倍、2倍、3倍…した数。この学習では0は入れない。約数は、整数を余りなくわり切る正の整数。8と12に共通する約数は1、2、4で、いちばん大きい4が最大公約数。共通する倍数24、48…の最初の24が最小公倍数。使い道を考えて選ぼう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "倍数は正の整数倍で作る数、約数はその数を割り切る正の整数。共通する要素に着目する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "8の約数は1、2、4、8。12の約数は1、2、3、4、6、12なので、公約数は1、2、4となる。最大公約数は4。8の倍数と12の倍数を並べると、最初に一致する正の数24が最小公倍数。同じ長さに切る問題と同じ時刻に重なる問題では、着目する集合が異なる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "練習用の光Aは4秒ごと、Bは6秒ごとに点灯する。0秒に同時に始めると、次に重なるのは12秒後。4と6の最小公倍数を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "長さ8cmと12cmの2本のリボンを、余りなく同じ長さに切る。切る長さを整数cmにすると、最も長いのは4cm。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "6の倍数を小さい順に並べる。3番目の数は？（0は入れない） 正答：18。 6、12、18なので3番目は18。 考える手がかり：6を3倍しよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "12の約数だけが全部入っているのは？ 正答：1、2、3、4、6、12。 どれも12を余りなく割り切る。1と12自身も約数。 考える手がかり：12÷その数が整数になるか確かめよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "8と12の最大公約数は？ 正答：4。 公約数は1、2、4。その中の最大は4。 考える手がかり：8と12の約数を別々に並べよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "8と12の最小公倍数は？ 正答：24。 8の倍数8、16、24と、12の倍数12、24が24で重なる。 考える手がかり：両方の周期を並べてみよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "18cmと24cmのリボンを、余りなく同じ整数cmの長さに切る。最も長い1本は何cm？ 正答：6。 18と24の最大公約数は6。18÷6＝3本、24÷6＝4本になる。 考える手がかり：切った長さで両方を割り切れる必要がある。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "4秒ごとと6秒ごとの光が0秒に同時に点灯。次に同時に点灯するのは何秒後？ 正答：12。 4と6の最小公倍数12で再び重なる。 考える手がかり：0秒の次の共通する時刻を探そう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "12の約数に1と12を入れる理由は？ 正答：12÷1も12÷12も余り0だから。 約数は割り切れるかどうかで判断する。 考える手がかり：定義に戻って計算しよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "同じ大きさの正方形タイルで縦12cm横18cmを隙間なく敷く。最大の整数cmの一辺を探すには？ 正答：12と18の最大公約数。 一辺の長さで12も18も割り切れる必要がある。 考える手がかり：一辺は元の辺より大きくできるかな？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "周期合わせ：6歩ごとと10歩ごとの目印が、スタートの次に重なるのは何歩目？ 正答：30。 6と10の最小公倍数は30。 考える手がかり：6の倍数と10の倍数の共通する最初の数。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "「余りなく同じ長さに切る」と「同じ時に光る」は、何を調べるところが違う？ 8と12で、切る長さと重なる周期を一つずつ示そう。 切る長さは8と12を割り切る数だから公約数を調べる。周期は8の倍数と12の倍数の共通部分なので、公倍数を調べる。 確認項目：切る長さは共通の約数と説明した。 / 重なる周期は共通の倍数と説明した。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "8cmと12cmを、余りなく同じ整数cmの長さに切る。最も長くするには？ 8cmを割り切る長さは1、2、4、8cm。 12cmを割り切る長さは1、2、3、4、6、12cm。 両方にある長さは1、2、4cm。 最も長い4cmなら2本と3本になり、余りもない。 結論：4cm",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「最大公約数は二つの数より大きくなる。」は誤り。約数は元の正の整数を割り切る数なので、最大公約数は小さい方の数を超えない。大きい共通の周期を探すのは公倍数。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "正の整数の倍数を1倍、2倍、3倍…として列挙し、この教材では0を含めない。8と12の公約数は1,2,4、最大公約数4、最小公倍数24。最大公約数は余りのない共通分割、最小公倍数は共通周期に用いる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "verified",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "例の登場物を同じ数量・単位・条件を保った架空の物へ置き換える。",
        "問いの意味と正答を保ち、短い文へ言い換える。"
      ],
      "forbidden": [
        "数・単位・全体の大きさ・等分の条件・対応関係・正答を変更しない。",
        "誤りの選択肢や誤解の例を正しい主張として説明しない。",
        "claimsの範囲外の定義や公式を足さない。",
        "個人情報・実在する人の記録・外部作品の仕様を加えない。"
      ]
    }
  },
  {
    "code": "8250253131100000",
    "grade": 5,
    "title": "小数のかけ算",
    "domain": "A",
    "order": 4,
    "goal": "1より小さい倍も図で捉え、小数のかけ算を考える。",
    "coverageCodes": [
      "8250252100000000",
      "8250252200000000",
      "8250252300000000",
      "8250253130000000",
      "8250253131000000",
      "8250253131100000",
      "8250253131200000",
      "8250253131300000",
      "8250253132000000",
      "8250253132100000",
      "8250253511000000",
      "8250253512000000",
      "8250253513000000"
    ],
    "explanations": {
      "es": {
        "short": "2.4の1.5倍は、1倍の2.4と0.5倍の1.2を合わせて3.6。小数をかけるときも、何倍かを考えるよ。",
        "detail": "1mが2.4gのひもを1.5m用意すると、重さは2.4×1.5。1m分と0.5m分に分ければ、2.4＋1.2＝3.6gになる。24×15＝360と整数で考える方法では、二つの数をそれぞれ10倍したので積を100分の1に戻す。かける数が0より大きく1より小さいと、元より小さい量になる。"
      },
      "js": {
        "short": "小数の乗法は基準量の何倍かを求める計算。整数の計算法則を用いて意味と計算をつなぐ。",
        "detail": "2.4×1.5は2.4×(1＋0.5)＝2.4＋1.2＝3.6と分配できる。また、2.4も1.5も10倍して24×15を計算すると積は100倍になるため、360÷100＝3.6に戻す。正の被乗数に0.1以上1未満などの正数をかけると、積は被乗数より小さくなる。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "ひもの重さ",
        "text": "同じ太さで1mが2.4gのひもを1.5m使う設定。1m分2.4gと0.5m分1.2gを合わせると3.6g。",
        "activityIds": [
          "craft-accessory"
        ]
      },
      {
        "category": "drawing",
        "title": "横の長さを縮める",
        "text": "架空の図案の横幅8cmを0.6倍にすると4.8cm。0.6倍は1倍より小さく、短くなる。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "2.4×1.5はいくつ？",
        "answer": 3.6,
        "explanation": "2.4×1＋2.4×0.5＝2.4＋1.2＝3.6。",
        "hint": "1.5を1＋0.5に分けよう。",
        "suffix": "",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "0.7×0.4はいくつ？",
        "answer": 0.28,
        "explanation": "7×4＝28。両方を10倍した計算なので100で割って0.28。",
        "hint": "0.1×0.1は0.01だよ。",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "正の数8に0.6をかけた積は8と比べて？",
        "options": [
          "小さい",
          "同じ",
          "大きい"
        ],
        "answer": "小さい",
        "explanation": "0.6倍は1倍より小さいので、8×0.6＝4.8は8より小さい。",
        "hint": "8を1とみたときの0.6の量。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "1mで120円の布を2.5m買う設定。代金は何円？",
        "answer": 300,
        "explanation": "120×2.5＝120×2＋120×0.5＝240＋60＝300。",
        "hint": "2m分と半分の1m分に分けよう。",
        "suffix": "円",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "3.6×0.25はいくつ？",
        "answer": 0.9,
        "explanation": "0.25は4分の1なので3.6÷4＝0.9。",
        "hint": "0.25は1を4等分した一つ。",
        "suffix": "",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "2.4×1.5を24×15で計算したあと、どうする？",
        "options": [
          "100で割る",
          "10で割る",
          "そのままにする"
        ],
        "answer": "100で割る",
        "explanation": "二つの数をそれぞれ10倍したため、積は10×10＝100倍になっている。",
        "hint": "10倍がいくつ重なっている？",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "number",
        "prompt": "2.5×3.2＋2.5×0.8はいくつ？",
        "answer": 10,
        "explanation": "2.5×(3.2＋0.8)＝2.5×4＝10。",
        "hint": "共通する2.5を一つにまとめよう。",
        "suffix": "",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "1.2×0.3の答えを0.36と考える確かめ方は？",
        "options": [
          "1.2の0.3倍なので1.2より小さいことも確認する",
          "かけ算は必ず大きくなるので3.6にする",
          "0を消して36にする"
        ],
        "answer": "1.2の0.3倍なので1.2より小さいことも確認する",
        "explanation": "0.3は1より小さい正数。0.36は大きさの見当にも合う。",
        "hint": "計算の前に、1倍と比べてみよう。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "number",
      "prompt": "縮小カード：長さ6cmを0.5倍にすると何cm？",
      "answer": 3,
      "explanation": "6×0.5＝3。0.5倍は半分。",
      "hint": "6cmを2等分しよう。",
      "suffix": "cm",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "1倍と半分を合わせる",
      "prompt": "1mで2.4gのひも1.5mの重さは？",
      "steps": [
        {
          "text": "1.5mを1mと0.5mに分ける。"
        },
        {
          "text": "1mの重さは2.4g。0.5mはその半分で1.2g。"
        },
        {
          "text": "2.4＋1.2＝3.6gと合わせる。"
        },
        {
          "text": "式では2.4×1.5＝2.4×1＋2.4×0.5＝3.6。"
        }
      ],
      "answer": "3.6g",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "かけ算の答えは、いつも元の数より大きい。",
      "correction": "正の数に1より小さい正数をかけると元より小さくなる。例えば8×0.6＝4.8。何倍かを図で確かめる。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "2.4×1.5を、1倍と0.5倍に分けて説明しよう。",
        "followUp": "24×15で計算すると、なぜ100で割って戻すの？",
        "checkpoints": [
          "1倍の2.4と半分の1.2を合わせた。",
          "二つの10倍で積が100倍になると説明した。"
        ],
        "sample": "1.5倍は1倍と0.5倍。2.4＋1.2＝3.6になる。整数に直す方法では両方を10倍し積が100倍になるので100で割る。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "2.4の1.5倍は、1倍の2.4と0.5倍の1.2を合わせて3.6。小数をかけるときも、何倍かを考えるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "1mが2.4gのひもを1.5m用意すると、重さは2.4×1.5。1m分と0.5m分に分ければ、2.4＋1.2＝3.6gになる。24×15＝360と整数で考える方法では、二つの数をそれぞれ10倍したので積を100分の1に戻す。かける数が0より大きく1より小さいと、元より小さい量になる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "小数の乗法は基準量の何倍かを求める計算。整数の計算法則を用いて意味と計算をつなぐ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "2.4×1.5は2.4×(1＋0.5)＝2.4＋1.2＝3.6と分配できる。また、2.4も1.5も10倍して24×15を計算すると積は100倍になるため、360÷100＝3.6に戻す。正の被乗数に0.1以上1未満などの正数をかけると、積は被乗数より小さくなる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "同じ太さで1mが2.4gのひもを1.5m使う設定。1m分2.4gと0.5m分1.2gを合わせると3.6g。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の図案の横幅8cmを0.6倍にすると4.8cm。0.6倍は1倍より小さく、短くなる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "2.4×1.5はいくつ？ 正答：3.6。 2.4×1＋2.4×0.5＝2.4＋1.2＝3.6。 考える手がかり：1.5を1＋0.5に分けよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "0.7×0.4はいくつ？ 正答：0.28。 7×4＝28。両方を10倍した計算なので100で割って0.28。 考える手がかり：0.1×0.1は0.01だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "正の数8に0.6をかけた積は8と比べて？ 正答：小さい。 0.6倍は1倍より小さいので、8×0.6＝4.8は8より小さい。 考える手がかり：8を1とみたときの0.6の量。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "1mで120円の布を2.5m買う設定。代金は何円？ 正答：300。 120×2.5＝120×2＋120×0.5＝240＋60＝300。 考える手がかり：2m分と半分の1m分に分けよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "3.6×0.25はいくつ？ 正答：0.9。 0.25は4分の1なので3.6÷4＝0.9。 考える手がかり：0.25は1を4等分した一つ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "2.4×1.5を24×15で計算したあと、どうする？ 正答：100で割る。 二つの数をそれぞれ10倍したため、積は10×10＝100倍になっている。 考える手がかり：10倍がいくつ重なっている？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "2.5×3.2＋2.5×0.8はいくつ？ 正答：10。 2.5×(3.2＋0.8)＝2.5×4＝10。 考える手がかり：共通する2.5を一つにまとめよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "1.2×0.3の答えを0.36と考える確かめ方は？ 正答：1.2の0.3倍なので1.2より小さいことも確認する。 0.3は1より小さい正数。0.36は大きさの見当にも合う。 考える手がかり：計算の前に、1倍と比べてみよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "縮小カード：長さ6cmを0.5倍にすると何cm？ 正答：3。 6×0.5＝3。0.5倍は半分。 考える手がかり：6cmを2等分しよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "2.4×1.5を、1倍と0.5倍に分けて説明しよう。 24×15で計算すると、なぜ100で割って戻すの？ 1.5倍は1倍と0.5倍。2.4＋1.2＝3.6になる。整数に直す方法では両方を10倍し積が100倍になるので100で割る。 確認項目：1倍の2.4と半分の1.2を合わせた。 / 二つの10倍で積が100倍になると説明した。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "1mで2.4gのひも1.5mの重さは？ 1.5mを1mと0.5mに分ける。 1mの重さは2.4g。0.5mはその半分で1.2g。 2.4＋1.2＝3.6gと合わせる。 式では2.4×1.5＝2.4×1＋2.4×0.5＝3.6。 結論：3.6g",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「かけ算の答えは、いつも元の数より大きい。」は誤り。正の数に1より小さい正数をかけると元より小さくなる。例えば8×0.6＝4.8。何倍かを図で確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "小数の乗法にも交換・結合・分配法則が成り立つ。2.4×1.5=2.4×(1+0.5)=2.4+1.2=3.6。両因数を10倍すると積は100倍になる。正数に0より大きく1未満の数をかけると積は元より小さくなる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "motion",
        "text": "1m当たり2.4gのひも1.5mは、1m分2.4gと0.5m分1.2gを合わせて3.6g。2.4×1.5=3.6。長方形モデルでも横2.4、縦1.5を1と0.5に分け、面積2.4と1.2の和3.6となる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "verified",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "例の登場物を同じ数量・単位・条件を保った架空の物へ置き換える。",
        "問いの意味と正答を保ち、短い文へ言い換える。"
      ],
      "forbidden": [
        "数・単位・全体の大きさ・等分の条件・対応関係・正答を変更しない。",
        "誤りの選択肢や誤解の例を正しい主張として説明しない。",
        "claimsの範囲外の定義や公式を足さない。",
        "個人情報・実在する人の記録・外部作品の仕様を加えない。"
      ]
    }
  },
  {
    "code": "8250253131200000",
    "grade": 5,
    "title": "小数のわり算",
    "domain": "A",
    "order": 5,
    "goal": "同じ倍率で量をそろえ、小数のわり算と余りを確かめる。",
    "coverageCodes": [
      "8250252100000000",
      "8250252200000000",
      "8250252300000000",
      "8250253130000000",
      "8250253131000000",
      "8250253131100000",
      "8250253131200000",
      "8250253131300000",
      "8250253132000000",
      "8250253132100000",
      "8250253511000000",
      "8250253512000000",
      "8250253513000000"
    ],
    "explanations": {
      "es": {
        "short": "4.8mを1.2mずつに分けると4本。両方を10倍した48÷12も、何本分かは同じだよ。",
        "detail": "わる数を整数にするため、わられる数も同じ数倍する。4.8÷1.2は48÷12＝4。0.6÷0.2なら、0.2が0.6の中に3こあるので3になる。余りを求めるときは元の単位に戻そう。5.3mを1.2mずつ切ると4本で0.5m余り、1.2×4＋0.5＝5.3と確かめられる。"
      },
      "js": {
        "short": "被除数と除数に同じ正数をかけても商は変わらない。余りのある計算は元の単位で検算する。",
        "detail": "4.8÷1.2は両方を10倍して48÷12＝4。比べる単位をmから0.1mへ変えても、何こ分かは変わらない。一方5.3÷1.2を53÷12として整数商4、余り5を得たとき、5は0.1mが5こだから0.5m。5.3＝1.2×4＋0.5、0.5＜1.2を確かめる。割り進める計算と整数商・余りを求める場面は区別する。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "同じ長さに切る",
        "text": "5.3mのひもを1.2mずつ切る。4本で4.8m使い、0.5m余る。切る本数は整数なので余りを残して考える。",
        "activityIds": [
          "craft-accessory"
        ]
      },
      {
        "category": "digital",
        "title": "模型の1cm分",
        "text": "架空の模型材料2.4cmが6gで、長さに重さが比例する設定。1cm分は6÷2.4＝2.5gになる。",
        "activityIds": [
          "dig-3dprint"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "4.8÷1.2はいくつ？",
        "answer": 4,
        "explanation": "両方を10倍し48÷12＝4。",
        "hint": "1.2を何倍すると4.8になる？",
        "suffix": "",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "0.6÷0.2はいくつ？",
        "answer": 3,
        "explanation": "0.2が3こで0.6。",
        "hint": "0.1のまとまりで6÷2と考えよう。",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "0.5÷0.4を、割り切れるまで計算すると？",
        "answer": 1.25,
        "explanation": "5÷4＝1.25。0.4×1.25＝0.5で確かめられる。",
        "hint": "一の位で止めず、0を補って割り進めよう。",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "5.3mを1.2mずつ4本切った。余りは何m？",
        "answer": 0.5,
        "explanation": "5.3−1.2×4＝0.5m。",
        "hint": "元の長さから使った長さを引こう。",
        "suffix": "m",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "5.3÷1.2を53÷12で計算し、商4、余り5になった。元の式の余りは？",
        "options": [
          "0.5",
          "5",
          "0.05"
        ],
        "answer": "0.5",
        "explanation": "53や12は0.1を単位にした数。余り5も0.1が5こなので0.5。",
        "hint": "余りも何を1としているか確かめよう。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "2.4mで360円のリボン。1mの代金は何円？",
        "answer": 150,
        "explanation": "360÷2.4＝150。150×2.4＝360。",
        "hint": "1mの代金×2.4＝360という関係。",
        "suffix": "円",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "正の数6を0.5で割ると、商は6よりどうなる？",
        "options": [
          "大きくなる",
          "小さくなる",
          "必ず同じ"
        ],
        "answer": "大きくなる",
        "explanation": "6の中に0.5は12こある。6÷0.5＝12で6より大きい。",
        "hint": "半分ずつのまとまりはいくつ作れる？",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "7.2÷0.3を整数の計算に直す式は？",
        "options": [
          "72÷3",
          "7.2÷3",
          "72÷0.3"
        ],
        "answer": "72÷3",
        "explanation": "除数だけでなく被除数も10倍して商を保つ。",
        "hint": "二つの数を同じ倍率にしよう。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "number",
      "prompt": "ひも分け：3.6mを0.9mずつ切ると何本？",
      "answer": 4,
      "explanation": "3.6÷0.9＝36÷9＝4。",
      "hint": "0.1mを1として考えてみよう。",
      "suffix": "本",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "単位をそろえて分ける",
      "prompt": "4.8mのひもを1.2mずつ切ると何本？",
      "steps": [
        {
          "text": "4.8mと1.2mを同じ0.1mのまとまりで数える。"
        },
        {
          "text": "4.8mは48こ分、1.2mは12こ分。"
        },
        {
          "text": "48÷12＝4だから4本作れる。"
        },
        {
          "text": "元の単位で1.2m×4＝4.8mと確かめる。"
        }
      ],
      "answer": "4本",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "わる数だけ10倍して整数にすればよい。",
      "correction": "わられる数も同じ10倍にしないと、比べる割合が変わる。4.8÷1.2は48÷12と等しいが、4.8÷12とは等しくない。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "5.3mを1.2mずつ切った余りが、5mでなく0.5mなのはなぜ？",
        "followUp": "元の数を使ったかけ算とたし算で確かめよう。",
        "checkpoints": [
          "余り5は0.1mが5こだと説明した。",
          "1.2×4＋0.5＝5.3で確かめた。"
        ],
        "sample": "10倍した計算の余り5は0.1mを単位に数えたものだから0.5m。1.2×4＋0.5＝5.3で、余りも1.2mより小さい。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "4.8mを1.2mずつに分けると4本。両方を10倍した48÷12も、何本分かは同じだよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "わる数を整数にするため、わられる数も同じ数倍する。4.8÷1.2は48÷12＝4。0.6÷0.2なら、0.2が0.6の中に3こあるので3になる。余りを求めるときは元の単位に戻そう。5.3mを1.2mずつ切ると4本で0.5m余り、1.2×4＋0.5＝5.3と確かめられる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "被除数と除数に同じ正数をかけても商は変わらない。余りのある計算は元の単位で検算する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "4.8÷1.2は両方を10倍して48÷12＝4。比べる単位をmから0.1mへ変えても、何こ分かは変わらない。一方5.3÷1.2を53÷12として整数商4、余り5を得たとき、5は0.1mが5こだから0.5m。5.3＝1.2×4＋0.5、0.5＜1.2を確かめる。割り進める計算と整数商・余りを求める場面は区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "5.3mのひもを1.2mずつ切る。4本で4.8m使い、0.5m余る。切る本数は整数なので余りを残して考える。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の模型材料2.4cmが6gで、長さに重さが比例する設定。1cm分は6÷2.4＝2.5gになる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "4.8÷1.2はいくつ？ 正答：4。 両方を10倍し48÷12＝4。 考える手がかり：1.2を何倍すると4.8になる？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "0.6÷0.2はいくつ？ 正答：3。 0.2が3こで0.6。 考える手がかり：0.1のまとまりで6÷2と考えよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "0.5÷0.4を、割り切れるまで計算すると？ 正答：1.25。 5÷4＝1.25。0.4×1.25＝0.5で確かめられる。 考える手がかり：一の位で止めず、0を補って割り進めよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "5.3mを1.2mずつ4本切った。余りは何m？ 正答：0.5。 5.3−1.2×4＝0.5m。 考える手がかり：元の長さから使った長さを引こう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "5.3÷1.2を53÷12で計算し、商4、余り5になった。元の式の余りは？ 正答：0.5。 53や12は0.1を単位にした数。余り5も0.1が5こなので0.5。 考える手がかり：余りも何を1としているか確かめよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "2.4mで360円のリボン。1mの代金は何円？ 正答：150。 360÷2.4＝150。150×2.4＝360。 考える手がかり：1mの代金×2.4＝360という関係。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "正の数6を0.5で割ると、商は6よりどうなる？ 正答：大きくなる。 6の中に0.5は12こある。6÷0.5＝12で6より大きい。 考える手がかり：半分ずつのまとまりはいくつ作れる？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "7.2÷0.3を整数の計算に直す式は？ 正答：72÷3。 除数だけでなく被除数も10倍して商を保つ。 考える手がかり：二つの数を同じ倍率にしよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "ひも分け：3.6mを0.9mずつ切ると何本？ 正答：4。 3.6÷0.9＝36÷9＝4。 考える手がかり：0.1mを1として考えてみよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "5.3mを1.2mずつ切った余りが、5mでなく0.5mなのはなぜ？ 元の数を使ったかけ算とたし算で確かめよう。 10倍した計算の余り5は0.1mを単位に数えたものだから0.5m。1.2×4＋0.5＝5.3で、余りも1.2mより小さい。 確認項目：余り5は0.1mが5こだと説明した。 / 1.2×4＋0.5＝5.3で確かめた。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "4.8mのひもを1.2mずつ切ると何本？ 4.8mと1.2mを同じ0.1mのまとまりで数える。 4.8mは48こ分、1.2mは12こ分。 48÷12＝4だから4本作れる。 元の単位で1.2m×4＝4.8mと確かめる。 結論：4本",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「わる数だけ10倍して整数にすればよい。」は誤り。わられる数も同じ10倍にしないと、比べる割合が変わる。4.8÷1.2は48÷12と等しいが、4.8÷12とは等しくない。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "正の除数の小数除法では被除数と除数を同じ正数倍しても商は不変。4.8÷1.2=48÷12=4。整数商と余りでは5.3=1.2×4+0.5かつ0≤0.5<1.2。0.5÷0.4=1.25、6÷0.5=12。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "motion",
        "text": "4.8mを1.2mずつ4等しい区間へ分けると4本。0.1m単位では48こを12こずつに分けるので48÷12=4。両方10倍しても区間の本数は変わらず、4.8÷1.2=4。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "verified",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "例の登場物を同じ数量・単位・条件を保った架空の物へ置き換える。",
        "問いの意味と正答を保ち、短い文へ言い換える。"
      ],
      "forbidden": [
        "数・単位・全体の大きさ・等分の条件・対応関係・正答を変更しない。",
        "誤りの選択肢や誤解の例を正しい主張として説明しない。",
        "claimsの範囲外の定義や公式を足さない。",
        "個人情報・実在する人の記録・外部作品の仕様を加えない。"
      ]
    }
  },
  {
    "code": "8250253141200000",
    "grade": 5,
    "title": "分数とわり算・小数",
    "domain": "A",
    "order": 6,
    "goal": "わり算の結果を分数で表し、小数とのつながりを確かめる。",
    "coverageCodes": [
      "8250252100000000",
      "8250252200000000",
      "8250252300000000",
      "8250253140000000",
      "8250253141000000",
      "8250253141100000",
      "8250253141200000",
      "8250253142000000",
      "8250253142200000",
      "8250253511000000",
      "8250253512000000",
      "8250253513000000"
    ],
    "explanations": {
      "es": {
        "short": "3mを4人で同じ長さに分けると、1人分は3÷4＝3/4m。分数なら、わり算の答えを一つの数で表せるよ。",
        "detail": "3本の1mテープをそれぞれ4等分すると、1人は1/4mを3こ受け取るから3/4m。小数では3÷4＝0.75なので、3/4と0.75は同じ大きさ。2は2/1、0.6は6/10と分数でも書ける。1/3のように小数がいつまでも続く数も、分数なら正確に表せる。"
      },
      "js": {
        "short": "整数の除法a÷bは、bが0でないときa/bと表せる。整数・小数・分数は同じ数の異なる表し方である。",
        "detail": "3÷4は3/4であり、分子を分母で割ると0.75になる。0.6は0.1が6こなので6/10＝3/5。整数2は2/1。有限の小数にできない1/3も正確な数を表しており、0.33に丸めると元の数と完全には一致しない。単位量の全体を固定して図と式を対応させる。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "3mを4人で分ける",
        "text": "工作用の同じひも3mを4人で等しく分ける。1人分は3/4mで、0.75mとも表せる。",
        "activityIds": [
          "craft-accessory"
        ]
      },
      {
        "category": "drawing",
        "title": "1本の線を4等分",
        "text": "長さ1cmの線を4等分した一つは1/4cm＝0.25cm。3こ分なら3/4cm＝0.75cmになる。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "3÷4を分数で表すと？",
        "options": [
          "3/4",
          "4/3",
          "3/7"
        ],
        "answer": "3/4",
        "explanation": "わられる数が分子、わる数が分母。",
        "hint": "3を4等分する図を思い浮かべよう。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "3/4を小数で表すと？",
        "answer": 0.75,
        "explanation": "3÷4＝0.75。",
        "hint": "分子を分母で割ろう。",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "0.6と同じ大きさの分数は？",
        "options": [
          "3/5",
          "6/100",
          "1/6"
        ],
        "answer": "3/5",
        "explanation": "0.6＝6/10＝3/5。",
        "hint": "0.1が6こ分だね。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "2を分母4の分数で表す。分子はいくつ？",
        "answer": 8,
        "explanation": "1＝4/4なので2＝8/4。",
        "hint": "1の中に1/4はいくつある？",
        "suffix": "",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "1/3を小数で表したときの説明は？",
        "options": [
          "0.333…と3が続く",
          "ちょうど0.3で終わる",
          "小数で考えることはできない"
        ],
        "answer": "0.333…と3が続く",
        "explanation": "1÷3は小数が続く。0.3は1/3より小さい。",
        "hint": "0.3×3は1と同じになるかな？",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "5mのひもを4人で等しく分ける。1人分は何m？（小数で）",
        "answer": 1.25,
        "explanation": "5÷4＝5/4＝1.25m。",
        "hint": "1mずつ分けると、あと1mを4等分する。",
        "suffix": "m",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "3/4mの「全体の1」はどれ？",
        "options": [
          "1m",
          "3m",
          "4m"
        ],
        "answer": "1m",
        "explanation": "3/4mは1mを4等分した長さの3こ分。3mを4等分した結果とも等しい。",
        "hint": "何を4等分した1こ分が1/4m？",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "order",
        "prompt": "小さい順に並べよう。",
        "items": [
          "0.8",
          "1/2",
          "3/4"
        ],
        "answer": [
          "1/2",
          "3/4",
          "0.8"
        ],
        "explanation": "1/2＝0.5、3/4＝0.75なので、0.5＜0.75＜0.8。",
        "hint": "同じ表し方にそろえると比べやすい。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "number",
      "prompt": "等分カード：7÷2の答えを小数で入れよう。",
      "answer": 3.5,
      "explanation": "7÷2＝7/2＝3.5。",
      "hint": "6を2等分し、残り1も2等分しよう。",
      "suffix": "",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "3mを4等分する",
      "prompt": "3mのひもを4人で等しく分けると1人分は？",
      "steps": [
        {
          "text": "3mを、1mのひも3本として考える。"
        },
        {
          "text": "1mずつを4等分すると、一つは1/4m。"
        },
        {
          "text": "1人は1/4mを3こ受け取り、3/4mになる。"
        },
        {
          "text": "3÷4＝0.75なので、小数では0.75m。"
        }
      ],
      "answer": "3/4m＝0.75m",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "1/3は0.3と全く同じ数。",
      "correction": "1÷3は0.333…と続く。0.3×3＝0.9なので、0.3を3つ合わせても1にはならない。分数1/3なら正確な大きさを表せる。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "3÷4＝3/4を、1mのテープ3本を使って説明しよう。",
        "followUp": "0.75と3/4が同じことはどう確かめる？",
        "checkpoints": [
          "各1mを4等分して1/4mを3こ集めた。",
          "3÷4＝0.75、または0.75×4＝3と確かめた。"
        ],
        "sample": "各1mを4等分し、一人は1/4mを3こ受け取るから3/4m。4人分の0.75mを合わせると3mに戻る。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "3mを4人で同じ長さに分けると、1人分は3÷4＝3/4m。分数なら、わり算の答えを一つの数で表せるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "3本の1mテープをそれぞれ4等分すると、1人は1/4mを3こ受け取るから3/4m。小数では3÷4＝0.75なので、3/4と0.75は同じ大きさ。2は2/1、0.6は6/10と分数でも書ける。1/3のように小数がいつまでも続く数も、分数なら正確に表せる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "整数の除法a÷bは、bが0でないときa/bと表せる。整数・小数・分数は同じ数の異なる表し方である。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "3÷4は3/4であり、分子を分母で割ると0.75になる。0.6は0.1が6こなので6/10＝3/5。整数2は2/1。有限の小数にできない1/3も正確な数を表しており、0.33に丸めると元の数と完全には一致しない。単位量の全体を固定して図と式を対応させる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "工作用の同じひも3mを4人で等しく分ける。1人分は3/4mで、0.75mとも表せる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "長さ1cmの線を4等分した一つは1/4cm＝0.25cm。3こ分なら3/4cm＝0.75cmになる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "3÷4を分数で表すと？ 正答：3/4。 わられる数が分子、わる数が分母。 考える手がかり：3を4等分する図を思い浮かべよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "3/4を小数で表すと？ 正答：0.75。 3÷4＝0.75。 考える手がかり：分子を分母で割ろう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "0.6と同じ大きさの分数は？ 正答：3/5。 0.6＝6/10＝3/5。 考える手がかり：0.1が6こ分だね。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "2を分母4の分数で表す。分子はいくつ？ 正答：8。 1＝4/4なので2＝8/4。 考える手がかり：1の中に1/4はいくつある？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "1/3を小数で表したときの説明は？ 正答：0.333…と3が続く。 1÷3は小数が続く。0.3は1/3より小さい。 考える手がかり：0.3×3は1と同じになるかな？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "5mのひもを4人で等しく分ける。1人分は何m？（小数で） 正答：1.25。 5÷4＝5/4＝1.25m。 考える手がかり：1mずつ分けると、あと1mを4等分する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "3/4mの「全体の1」はどれ？ 正答：1m。 3/4mは1mを4等分した長さの3こ分。3mを4等分した結果とも等しい。 考える手がかり：何を4等分した1こ分が1/4m？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "小さい順に並べよう。 正答：1/2 → 3/4 → 0.8。 1/2＝0.5、3/4＝0.75なので、0.5＜0.75＜0.8。 考える手がかり：同じ表し方にそろえると比べやすい。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "等分カード：7÷2の答えを小数で入れよう。 正答：3.5。 7÷2＝7/2＝3.5。 考える手がかり：6を2等分し、残り1も2等分しよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "3÷4＝3/4を、1mのテープ3本を使って説明しよう。 0.75と3/4が同じことはどう確かめる？ 各1mを4等分し、一人は1/4mを3こ受け取るから3/4m。4人分の0.75mを合わせると3mに戻る。 確認項目：各1mを4等分して1/4mを3こ集めた。 / 3÷4＝0.75、または0.75×4＝3と確かめた。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "3mのひもを4人で等しく分けると1人分は？ 3mを、1mのひも3本として考える。 1mずつを4等分すると、一つは1/4m。 1人は1/4mを3こ受け取り、3/4mになる。 3÷4＝0.75なので、小数では0.75m。 結論：3/4m＝0.75m",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「1/3は0.3と全く同じ数。」は誤り。1÷3は0.333…と続く。0.3×3＝0.9なので、0.3を3つ合わせても1にはならない。分数1/3なら正確な大きさを表せる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "整数a,b（b≠0）の除法a÷bはa/bと表せる。3÷4=3/4=0.75、2=2/1、0.6=6/10=3/5。1/3は0.333…で有限小数0.3や0.33と等しくない。分数図は全体1の大きさを固定する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "verified",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "例の登場物を同じ数量・単位・条件を保った架空の物へ置き換える。",
        "問いの意味と正答を保ち、短い文へ言い換える。"
      ],
      "forbidden": [
        "数・単位・全体の大きさ・等分の条件・対応関係・正答を変更しない。",
        "誤りの選択肢や誤解の例を正しい主張として説明しない。",
        "claimsの範囲外の定義や公式を足さない。",
        "個人情報・実在する人の記録・外部作品の仕様を加えない。"
      ]
    }
  },
  {
    "code": "8250253140000000",
    "grade": 5,
    "title": "等しい分数・約分・通分",
    "domain": "A",
    "order": 7,
    "goal": "同じ大きさを保って分数を表し直し、大小を比べる。",
    "coverageCodes": [
      "8250252100000000",
      "8250252200000000",
      "8250252300000000",
      "8250253140000000",
      "8250253141000000",
      "8250253141300000",
      "8250253141400000",
      "8250253142000000",
      "8250253142100000",
      "8250253511000000",
      "8250253512000000",
      "8250253513000000",
      "8250253603000000",
      "8250253604000000"
    ],
    "explanations": {
      "es": {
        "short": "1/2の一つ分をさらに3等分すると3/6。同じ全体を細かく分け直しても、色をぬった量は変わらないよ。",
        "detail": "分子と分母に同じ正の整数をかけると同じ大きさの分数になる。1/2＝3/6、1/3＝2/6なら、3こ分と2こ分なので1/2の方が大きい。共通の分母へそろえることを通分という。6/8の分子と分母を2でわって3/4にするように、簡単な分数へ直すのが約分だよ。"
      },
      "js": {
        "short": "分子と分母を同じ正の整数で乗除すると値は変わらない。約分と通分は、値を保って表現を変える操作である。",
        "detail": "分母は全体を等分する数、分子はその何こ分かを示す。1/2を分母6へ通分すると、一つの区画を3等分するため分子も3倍して3/6。1/3＝2/6と比較できる。6/8は分子・分母を共通の約数2で割り3/4に約分する。全体1の大きさを同じにして比較することが前提になる。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "同じ帯を細かく分ける",
        "text": "同じ長さの帯の半分をぬる。2等分で1こぬった1/2も、6等分で3こぬった3/6も、ぬった長さは同じ。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "craft",
        "title": "ひもの長さを比べる",
        "text": "同じ1mを基にした1/2mと1/3mを比べる。どちらも1/6mの区切りにすると3こ分と2こ分なので1/2mが長い。",
        "activityIds": [
          "craft-accessory"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "1/2を分母6の分数で表すと、分子はいくつ？",
        "answer": 3,
        "explanation": "分母2を3倍するので、分子1も3倍して3/6。",
        "hint": "分母だけを変えると量が変わってしまう。",
        "suffix": "",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "6/8をこれ以上約分できない分数にすると？",
        "options": [
          "3/4",
          "6/4",
          "1/2"
        ],
        "answer": "3/4",
        "explanation": "6と8を共通の約数2で割ると3/4。3と4には1以外の公約数がない。",
        "hint": "分子と分母を同じ数で割ろう。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "1/3を分母6に通分すると、分子はいくつ？",
        "answer": 2,
        "explanation": "分子・分母を2倍して2/6。",
        "hint": "3を何倍すると6になる？",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "1/2と1/3では、どちらが大きい？（全体1は同じ）",
        "options": [
          "1/2",
          "1/3",
          "同じ"
        ],
        "answer": "1/2",
        "explanation": "1/2＝3/6、1/3＝2/6。同じ1/6の3こ分の方が大きい。",
        "hint": "同じ分母にそろえてみよう。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "3/4と5/6を通分して比べると？",
        "options": [
          "3/4＜5/6",
          "3/4＞5/6",
          "同じ"
        ],
        "answer": "3/4＜5/6",
        "explanation": "3/4＝9/12、5/6＝10/12なので3/4＜5/6。",
        "hint": "4と6の公倍数12を分母にしよう。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "order",
        "prompt": "小さい順に並べよう。",
        "items": [
          "3/4",
          "2/3",
          "1/2"
        ],
        "answer": [
          "1/2",
          "2/3",
          "3/4"
        ],
        "explanation": "分母12へ通分すると6/12、8/12、9/12。",
        "hint": "2、3、4に共通する分母を選ぼう。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "1/2＝2/4にするとき、図で変わらないのは？",
        "options": [
          "ぬった量",
          "等分した区画の数",
          "分子と分母の数字"
        ],
        "answer": "ぬった量",
        "explanation": "区画は細かくなっても、ぬった部分の大きさを変えていない。",
        "hint": "切れ目を増やしても、元の帯を伸ばさない。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "number",
        "prompt": "12/18を分母3の分数に約分する。分子はいくつ？",
        "answer": 2,
        "explanation": "18を6で割って3にするので、12も6で割り2にする。",
        "hint": "分子と分母を同じ6で割る。",
        "suffix": "",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "等しい分数カード：2/3と同じ大きさは？",
      "options": [
        "4/6",
        "3/4",
        "2/6"
      ],
      "answer": "4/6",
      "explanation": "分子と分母をともに2倍すると4/6。",
      "hint": "両方に同じ操作をしたカードを選ぼう。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "同じ区切りで比べる",
      "prompt": "1/2mと1/3mのひもは、どちらが長い？",
      "steps": [
        {
          "text": "全体の1mが同じ長さであることを確かめる。"
        },
        {
          "text": "1/2mをさらに3つに分けると3/6m。"
        },
        {
          "text": "1/3mをさらに2つに分けると2/6m。"
        },
        {
          "text": "同じ1/6mの3こ分と2こ分なので、1/2mが長い。"
        }
      ],
      "answer": "1/2mの方が長い",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "分母が大きい分数ほど、必ず大きい。",
      "correction": "同じ全体の単位分数なら、細かく等分するほど一つ分は小さい。1/3は1/2より小さい。分母が違う一般の分数は通分して分子を比べる。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "1/2＝3/6を、同じ帯に区切りを増やす方法で説明しよう。",
        "followUp": "分母だけを6にして1/6にすると、何が変わる？",
        "checkpoints": [
          "一つの半分を3等分し、ぬった部分は3こになった。",
          "1/6ではぬった量が元の3分の1になると説明した。"
        ],
        "sample": "半分の部分を3等分すると、全体は6等分、ぬった部分は3こ分。量を保つには分子も3倍する。分母だけ6にすると1/6で量が変わる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "1/2の一つ分をさらに3等分すると3/6。同じ全体を細かく分け直しても、色をぬった量は変わらないよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "分子と分母に同じ正の整数をかけると同じ大きさの分数になる。1/2＝3/6、1/3＝2/6なら、3こ分と2こ分なので1/2の方が大きい。共通の分母へそろえることを通分という。6/8の分子と分母を2でわって3/4にするように、簡単な分数へ直すのが約分だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "分子と分母を同じ正の整数で乗除すると値は変わらない。約分と通分は、値を保って表現を変える操作である。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "分母は全体を等分する数、分子はその何こ分かを示す。1/2を分母6へ通分すると、一つの区画を3等分するため分子も3倍して3/6。1/3＝2/6と比較できる。6/8は分子・分母を共通の約数2で割り3/4に約分する。全体1の大きさを同じにして比較することが前提になる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "同じ長さの帯の半分をぬる。2等分で1こぬった1/2も、6等分で3こぬった3/6も、ぬった長さは同じ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "同じ1mを基にした1/2mと1/3mを比べる。どちらも1/6mの区切りにすると3こ分と2こ分なので1/2mが長い。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "1/2を分母6の分数で表すと、分子はいくつ？ 正答：3。 分母2を3倍するので、分子1も3倍して3/6。 考える手がかり：分母だけを変えると量が変わってしまう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "6/8をこれ以上約分できない分数にすると？ 正答：3/4。 6と8を共通の約数2で割ると3/4。3と4には1以外の公約数がない。 考える手がかり：分子と分母を同じ数で割ろう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "1/3を分母6に通分すると、分子はいくつ？ 正答：2。 分子・分母を2倍して2/6。 考える手がかり：3を何倍すると6になる？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "1/2と1/3では、どちらが大きい？（全体1は同じ） 正答：1/2。 1/2＝3/6、1/3＝2/6。同じ1/6の3こ分の方が大きい。 考える手がかり：同じ分母にそろえてみよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "3/4と5/6を通分して比べると？ 正答：3/4＜5/6。 3/4＝9/12、5/6＝10/12なので3/4＜5/6。 考える手がかり：4と6の公倍数12を分母にしよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "小さい順に並べよう。 正答：1/2 → 2/3 → 3/4。 分母12へ通分すると6/12、8/12、9/12。 考える手がかり：2、3、4に共通する分母を選ぼう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "1/2＝2/4にするとき、図で変わらないのは？ 正答：ぬった量。 区画は細かくなっても、ぬった部分の大きさを変えていない。 考える手がかり：切れ目を増やしても、元の帯を伸ばさない。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "12/18を分母3の分数に約分する。分子はいくつ？ 正答：2。 18を6で割って3にするので、12も6で割り2にする。 考える手がかり：分子と分母を同じ6で割る。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "等しい分数カード：2/3と同じ大きさは？ 正答：4/6。 分子と分母をともに2倍すると4/6。 考える手がかり：両方に同じ操作をしたカードを選ぼう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "1/2＝3/6を、同じ帯に区切りを増やす方法で説明しよう。 分母だけを6にして1/6にすると、何が変わる？ 半分の部分を3等分すると、全体は6等分、ぬった部分は3こ分。量を保つには分子も3倍する。分母だけ6にすると1/6で量が変わる。 確認項目：一つの半分を3等分し、ぬった部分は3こになった。 / 1/6ではぬった量が元の3分の1になると説明した。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "1/2mと1/3mのひもは、どちらが長い？ 全体の1mが同じ長さであることを確かめる。 1/2mをさらに3つに分けると3/6m。 1/3mをさらに2つに分けると2/6m。 同じ1/6mの3こ分と2こ分なので、1/2mが長い。 結論：1/2mの方が長い",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「分母が大きい分数ほど、必ず大きい。」は誤り。同じ全体の単位分数なら、細かく等分するほど一つ分は小さい。1/3は1/2より小さい。分母が違う一般の分数は通分して分子を比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "同じ全体1について、分子・分母を同じ正の整数倍または共通の正の約数で割ると分数の値は保存される。1/2=3/6、1/3=2/6、6/8=3/4。共通分母では分子の大小で比べられる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "verified",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "例の登場物を同じ数量・単位・条件を保った架空の物へ置き換える。",
        "問いの意味と正答を保ち、短い文へ言い換える。"
      ],
      "forbidden": [
        "数・単位・全体の大きさ・等分の条件・対応関係・正答を変更しない。",
        "誤りの選択肢や誤解の例を正しい主張として説明しない。",
        "claimsの範囲外の定義や公式を足さない。",
        "個人情報・実在する人の記録・外部作品の仕様を加えない。"
      ]
    }
  },
  {
    "code": "8250253150000000",
    "grade": 5,
    "title": "分数のたし算・ひき算",
    "domain": "A",
    "order": 8,
    "goal": "分母をそろえる理由を図で確かめ、異なる分母の分数を加減する。",
    "coverageCodes": [
      "8250252100000000",
      "8250252200000000",
      "8250252300000000",
      "8250253150000000",
      "8250253151000000",
      "8250253151100000",
      "8250253152000000",
      "8250253152100000",
      "8250253511000000",
      "8250253512000000",
      "8250253513000000",
      "8250253603000000",
      "8250253604000000"
    ],
    "explanations": {
      "es": {
        "short": "1/2＋1/3は、区切りを6等分にそろえる。3/6＋2/6だから答えは5/6だよ。",
        "detail": "半分の一つと3分の1の一つは大きさが違うので、そのまま「2こ」とは数えられない。同じ全体を6等分すると、1/2は3こ、1/3は2こ。合わせて1/6が5こだから5/6になる。ひき算も同じ単位へそろえる。答えが1をこえたら帯分数に、約分できたら簡単な分数に直せるよ。"
      },
      "js": {
        "short": "異分母分数の加減は、通分して共通の単位分数の個数を加減する。分母を加減する操作ではない。",
        "detail": "1/2＋1/3は3/6＋2/6＝5/6。分母6は一つ分の大きさ1/6を表し、その個数である分子を加える。3/4−1/6も9/12−2/12＝7/12となる。帯分数では整数部分の1を共通分母の分数へ分け直すことができ、1と1/4−1/2＝1と1/4−2/4＝3/4となる。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "リボンをつなぐ",
        "text": "1/2mと1/3mのリボンを、重なりなくつなぐ設定。1/6mを単位にすると3こ分と2こ分で、全部で5/6m。",
        "activityIds": [
          "craft-accessory"
        ]
      },
      {
        "category": "drawing",
        "title": "ぬった長さを合わせる",
        "text": "長さ1cmの見本を基準に、別の線の1/4cmと1/6cmをつなぐ。1/12cmが3こ分と2こ分になり、5/12cm。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "1/2＋1/3はいくつ？",
        "options": [
          "5/6",
          "2/5",
          "2/6"
        ],
        "answer": "5/6",
        "explanation": "3/6＋2/6＝5/6。",
        "hint": "半分も3分の1も、6等分の区切りで表そう。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "1/4＋1/6を分母12で表す。分子はいくつ？",
        "answer": 5,
        "explanation": "1/4＝3/12、1/6＝2/12。3＋2＝5。",
        "hint": "分子を足す前に、単位をそろえる。",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "3/4−1/6を分母12で表す。分子はいくつ？",
        "answer": 7,
        "explanation": "9/12−2/12＝7/12。",
        "hint": "3/4は1/12が9こ分。",
        "suffix": "",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "5/6＋1/3を帯分数で表すと？",
        "options": [
          "1と1/6",
          "1と1/9",
          "6/9"
        ],
        "answer": "1と1/6",
        "explanation": "5/6＋2/6＝7/6＝1と1/6。",
        "hint": "6/6が整数1に当たる。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "1と1/4−1/2はいくつ？",
        "options": [
          "3/4",
          "1と1/2",
          "1/4"
        ],
        "answer": "3/4",
        "explanation": "1と1/4＝5/4、1/2＝2/4。5/4−2/4＝3/4。",
        "hint": "整数の1を4/4に分け直そう。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "2/3＋1/6を分母6で表す。分子はいくつ？",
        "answer": 5,
        "explanation": "2/3＝4/6なので、4/6＋1/6＝5/6。",
        "hint": "3分の2を6分のいくつかに直そう。",
        "suffix": "",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "分母を足さずにそろえておく理由は？",
        "options": [
          "同じ大きさの一つ分を数えるため",
          "分母はどんなときも変えてはいけないため",
          "分子の方が大きい数字だから"
        ],
        "answer": "同じ大きさの一つ分を数えるため",
        "explanation": "通分で一つ分の大きさを共通にし、その個数を加減する。",
        "hint": "1/6の区画を合わせても一つ分は1/6のまま。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "3/4−1/4をこれ以上約分できない分数で表すと？",
        "options": [
          "1/2",
          "2/8",
          "1/4"
        ],
        "answer": "1/2",
        "explanation": "2/4を分子・分母とも2で割ると1/2。",
        "hint": "計算の後、同じ大きさの簡単な分数に直せるかな？",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "つなぐ帯：1/3mと1/6mをつなぐと、何m？",
      "options": [
        "1/2m",
        "2/9m",
        "1/9m"
      ],
      "answer": "1/2m",
      "explanation": "2/6＋1/6＝3/6＝1/2。",
      "hint": "同じ1/6mの区切りへそろえよう。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "同じ一つ分を数える",
      "prompt": "1/2＋1/3を図で考えよう。",
      "steps": [
        {
          "text": "同じ大きさの全体1を用意する。"
        },
        {
          "text": "半分を3等分して1/2＝3/6、3分の1を2等分して1/3＝2/6にする。"
        },
        {
          "text": "同じ1/6を3こと2こ合わせるので、3＋2＝5こ。"
        },
        {
          "text": "合わせた量は5/6。分母6は一つ分の大きさを表したまま。"
        }
      ],
      "answer": "5/6",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "1/2＋1/3は、分子と分母をそれぞれ足して2/5。",
      "correction": "半分と3分の1では一つ分の大きさが違う。6分の1にそろえ、3/6＋2/6＝5/6と考える。2/5は1/2より小さく、足した量としても合わない。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "1/2＋1/3で、分母をそろえることは図のどんな操作？",
        "followUp": "通分した後に、何を5こ数えている？",
        "checkpoints": [
          "全体の大きさを保って区切りを細かくした。",
          "共通の1/6を5こ数えたと説明した。"
        ],
        "sample": "同じ全体に区切りを増やし、1/6の大きさへそろえる。3こ分と2こ分を合わせた5こ分だから5/6。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "1/2＋1/3は、区切りを6等分にそろえる。3/6＋2/6だから答えは5/6だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "半分の一つと3分の1の一つは大きさが違うので、そのまま「2こ」とは数えられない。同じ全体を6等分すると、1/2は3こ、1/3は2こ。合わせて1/6が5こだから5/6になる。ひき算も同じ単位へそろえる。答えが1をこえたら帯分数に、約分できたら簡単な分数に直せるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "異分母分数の加減は、通分して共通の単位分数の個数を加減する。分母を加減する操作ではない。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "1/2＋1/3は3/6＋2/6＝5/6。分母6は一つ分の大きさ1/6を表し、その個数である分子を加える。3/4−1/6も9/12−2/12＝7/12となる。帯分数では整数部分の1を共通分母の分数へ分け直すことができ、1と1/4−1/2＝1と1/4−2/4＝3/4となる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "1/2mと1/3mのリボンを、重なりなくつなぐ設定。1/6mを単位にすると3こ分と2こ分で、全部で5/6m。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "長さ1cmの見本を基準に、別の線の1/4cmと1/6cmをつなぐ。1/12cmが3こ分と2こ分になり、5/12cm。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "1/2＋1/3はいくつ？ 正答：5/6。 3/6＋2/6＝5/6。 考える手がかり：半分も3分の1も、6等分の区切りで表そう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "1/4＋1/6を分母12で表す。分子はいくつ？ 正答：5。 1/4＝3/12、1/6＝2/12。3＋2＝5。 考える手がかり：分子を足す前に、単位をそろえる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "3/4−1/6を分母12で表す。分子はいくつ？ 正答：7。 9/12−2/12＝7/12。 考える手がかり：3/4は1/12が9こ分。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "5/6＋1/3を帯分数で表すと？ 正答：1と1/6。 5/6＋2/6＝7/6＝1と1/6。 考える手がかり：6/6が整数1に当たる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "1と1/4−1/2はいくつ？ 正答：3/4。 1と1/4＝5/4、1/2＝2/4。5/4−2/4＝3/4。 考える手がかり：整数の1を4/4に分け直そう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "2/3＋1/6を分母6で表す。分子はいくつ？ 正答：5。 2/3＝4/6なので、4/6＋1/6＝5/6。 考える手がかり：3分の2を6分のいくつかに直そう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "分母を足さずにそろえておく理由は？ 正答：同じ大きさの一つ分を数えるため。 通分で一つ分の大きさを共通にし、その個数を加減する。 考える手がかり：1/6の区画を合わせても一つ分は1/6のまま。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "3/4−1/4をこれ以上約分できない分数で表すと？ 正答：1/2。 2/4を分子・分母とも2で割ると1/2。 考える手がかり：計算の後、同じ大きさの簡単な分数に直せるかな？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "つなぐ帯：1/3mと1/6mをつなぐと、何m？ 正答：1/2m。 2/6＋1/6＝3/6＝1/2。 考える手がかり：同じ1/6mの区切りへそろえよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "1/2＋1/3で、分母をそろえることは図のどんな操作？ 通分した後に、何を5こ数えている？ 同じ全体に区切りを増やし、1/6の大きさへそろえる。3こ分と2こ分を合わせた5こ分だから5/6。 確認項目：全体の大きさを保って区切りを細かくした。 / 共通の1/6を5こ数えたと説明した。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "1/2＋1/3を図で考えよう。 同じ大きさの全体1を用意する。 半分を3等分して1/2＝3/6、3分の1を2等分して1/3＝2/6にする。 同じ1/6を3こと2こ合わせるので、3＋2＝5こ。 合わせた量は5/6。分母6は一つ分の大きさを表したまま。 結論：5/6",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「1/2＋1/3は、分子と分母をそれぞれ足して2/5。」は誤り。半分と3分の1では一つ分の大きさが違う。6分の1にそろえ、3/6＋2/6＝5/6と考える。2/5は1/2より小さく、足した量としても合わない。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "異分母分数の加減は通分した共通単位の分子を加減する。1/2+1/3=3/6+2/6=5/6。3/4−1/6=7/12、1と1/4−1/2=3/4。図では全体1を固定し、区画の再分割で量を保存する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "motion",
        "text": "同じ大きさの全体1を6等分すると1/2=3/6、1/3=2/6。1/6を3こ分と2こ分、重なりなく合わせると5こ分となり、1/2+1/3=5/6。区画を分け直しても元の量は変わらない。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "verified",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "例の登場物を同じ数量・単位・条件を保った架空の物へ置き換える。",
        "問いの意味と正答を保ち、短い文へ言い換える。"
      ],
      "forbidden": [
        "数・単位・全体の大きさ・等分の条件・対応関係・正答を変更しない。",
        "誤りの選択肢や誤解の例を正しい主張として説明しない。",
        "claimsの範囲外の定義や公式を足さない。",
        "個人情報・実在する人の記録・外部作品の仕様を加えない。"
      ]
    }
  },
  {
    "code": "8250253160000000",
    "grade": 5,
    "title": "数量の関係と式",
    "domain": "A",
    "order": 9,
    "goal": "二つの数量の対応を式で表し、式から変わり方を読む。",
    "coverageCodes": [
      "8250252100000000",
      "8250252200000000",
      "8250252300000000",
      "8250253160000000",
      "8250253161000000",
      "8250253161100000",
      "8250253162000000",
      "8250253162100000",
      "8250253511000000",
      "8250253512000000",
      "8250253513000000"
    ],
    "explanations": {
      "es": {
        "short": "1冊120円のノートを□冊買うと、代金△円は120×□＝△。式は、一組だけでなくいろいろな冊数の関係を表すよ。",
        "detail": "□に1、2、3を入れると、△は120、240、360になる。一冊増えるたびに120円増えることも式から読める。正方形の一辺□cmと周り△cmなら□×4＝△。式の中の数が図のどこを表すか確かめ、表・図・式を行き来しよう。"
      },
      "js": {
        "short": "□や△で変わる数量を表し、式を数量間の対応関係として読む。式への代入と式の意味の説明を結び付ける。",
        "detail": "120×□＝△は、冊数に対応する代金をまとめた式である。□が1増えると△は120増える。長方形の縦3cm、横□cmの周り△cmは(3＋□)×2＝△とも、3×2＋□×2＝△とも書ける。同じ関係を違う式で表し、図の辺との対応から等しさを説明できる。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "入力と出力の対応",
        "text": "練習用のプログラムに□を入れると120×□を返す設定。入力2なら240、3なら360。毎回同じ関係を式で表せる。",
        "activityIds": [
          "prog-scratch"
        ]
      },
      {
        "category": "minecraft",
        "title": "正方形の囲い",
        "text": "架空の正方形の土地で一辺を□m、周りを△mとする。四つの辺が同じ長さだから□×4＝△。",
        "activityIds": [
          "mc-build"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "1冊120円のノートを3冊買う。120×□＝△の△はいくつ？",
        "answer": 360,
        "explanation": "120×3＝360。",
        "hint": "□に3を入れて計算しよう。",
        "suffix": "円",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "正方形の一辺□cm、周り△cmを表す式は？",
        "options": [
          "□×4＝△",
          "□＋4＝△",
          "□×□＝△"
        ],
        "answer": "□×4＝△",
        "explanation": "同じ長さの辺が4本あるので4倍する。",
        "hint": "周りを一周すると同じ辺はいくつ？",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "正方形の周りは□×4＝△。一辺が2cm増えると、周りは何cm増える？",
        "answer": 8,
        "explanation": "四つの辺がそれぞれ2cm増えるので2×4＝8cm。",
        "hint": "一辺だけでなく4本全部が変わる。",
        "suffix": "cm",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "縦3cm、横□cmの長方形の周りを表す式は？",
        "options": [
          "(3＋□)×2",
          "3×□",
          "3＋□"
        ],
        "answer": "(3＋□)×2",
        "explanation": "縦と横の組が2組ある。",
        "hint": "周りには縦が2本、横も2本ある。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "縦3cm、横5cmの長方形の周りは何cm？",
        "answer": 16,
        "explanation": "(3＋5)×2＝16。",
        "hint": "縦と横を一組にして2倍しよう。",
        "suffix": "cm",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "3×2＋□×2と(3＋□)×2が同じ周りを表す理由は？",
        "options": [
          "縦2本と横2本を、別々に足すか組にして足すかの違いだから",
          "かけ算の答えは全部同じだから",
          "□には3しか入らないから"
        ],
        "answer": "縦2本と横2本を、別々に足すか組にして足すかの違いだから",
        "explanation": "図の同じ四辺を異なるまとめ方で数えている。",
        "hint": "二つの式の数が、どの辺に対応するか考えよう。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "number",
        "prompt": "1冊120円のノートの代金が600円。何冊買った？",
        "answer": 5,
        "explanation": "120×□＝600より、600÷120＝5。",
        "hint": "代金から一冊分が何こあるか調べる。",
        "suffix": "冊",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "表で□が1、2、3、△が5、10、15のとき、この3組に合う式は？",
        "options": [
          "□×5＝△",
          "□＋5＝△",
          "□×□＝△"
        ],
        "answer": "□×5＝△",
        "explanation": "1×5＝5、2×5＝10、3×5＝15。全ての組で確かめる。",
        "hint": "一つの組だけで決めず、3組に入れてみよう。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "number",
      "prompt": "式の機械：□×4＝△。□に7を入れると△はいくつ？",
      "answer": 28,
      "explanation": "7×4＝28。",
      "hint": "4が7こ分、または7が4こ分。",
      "suffix": "",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "図と二つの式を結ぶ",
      "prompt": "縦3cm、横5cmの長方形の周りを二通りで求めよう。",
      "steps": [
        {
          "text": "図の縦は3cmが2本、横は5cmが2本。"
        },
        {
          "text": "別々にまとめると3×2＋5×2＝6＋10。"
        },
        {
          "text": "隣り合う縦横を組にすると(3＋5)×2＝8×2。"
        },
        {
          "text": "どちらも同じ四辺を数え、周りは16cm。"
        }
      ],
      "answer": "16cm",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "□や△には、いつでも一つの決まった数しか入らない。",
      "correction": "数量の関係を表す式では、□にいろいろな数を入れ、それに対応する△を考えられる。120×□＝△なら□が2のとき△は240、3のとき360。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "長方形の周りを表す(3＋□)×2の、2は図の何を表している？",
        "followUp": "3×2＋□×2でも同じになる理由を図の辺で伝えよう。",
        "checkpoints": [
          "縦横の組が2組あると説明した。",
          "同じ四辺を二通りにまとめたと説明した。"
        ],
        "sample": "2は縦と横を一組にしたものが2組あること。縦だけ2本、横だけ2本とまとめても同じ四辺だから等しい。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "1冊120円のノートを□冊買うと、代金△円は120×□＝△。式は、一組だけでなくいろいろな冊数の関係を表すよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "□に1、2、3を入れると、△は120、240、360になる。一冊増えるたびに120円増えることも式から読める。正方形の一辺□cmと周り△cmなら□×4＝△。式の中の数が図のどこを表すか確かめ、表・図・式を行き来しよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "□や△で変わる数量を表し、式を数量間の対応関係として読む。式への代入と式の意味の説明を結び付ける。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "120×□＝△は、冊数に対応する代金をまとめた式である。□が1増えると△は120増える。長方形の縦3cm、横□cmの周り△cmは(3＋□)×2＝△とも、3×2＋□×2＝△とも書ける。同じ関係を違う式で表し、図の辺との対応から等しさを説明できる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "練習用のプログラムに□を入れると120×□を返す設定。入力2なら240、3なら360。毎回同じ関係を式で表せる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の正方形の土地で一辺を□m、周りを△mとする。四つの辺が同じ長さだから□×4＝△。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "1冊120円のノートを3冊買う。120×□＝△の△はいくつ？ 正答：360。 120×3＝360。 考える手がかり：□に3を入れて計算しよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "正方形の一辺□cm、周り△cmを表す式は？ 正答：□×4＝△。 同じ長さの辺が4本あるので4倍する。 考える手がかり：周りを一周すると同じ辺はいくつ？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "正方形の周りは□×4＝△。一辺が2cm増えると、周りは何cm増える？ 正答：8。 四つの辺がそれぞれ2cm増えるので2×4＝8cm。 考える手がかり：一辺だけでなく4本全部が変わる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "縦3cm、横□cmの長方形の周りを表す式は？ 正答：(3＋□)×2。 縦と横の組が2組ある。 考える手がかり：周りには縦が2本、横も2本ある。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "縦3cm、横5cmの長方形の周りは何cm？ 正答：16。 (3＋5)×2＝16。 考える手がかり：縦と横を一組にして2倍しよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "3×2＋□×2と(3＋□)×2が同じ周りを表す理由は？ 正答：縦2本と横2本を、別々に足すか組にして足すかの違いだから。 図の同じ四辺を異なるまとめ方で数えている。 考える手がかり：二つの式の数が、どの辺に対応するか考えよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "1冊120円のノートの代金が600円。何冊買った？ 正答：5。 120×□＝600より、600÷120＝5。 考える手がかり：代金から一冊分が何こあるか調べる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "表で□が1、2、3、△が5、10、15のとき、この3組に合う式は？ 正答：□×5＝△。 1×5＝5、2×5＝10、3×5＝15。全ての組で確かめる。 考える手がかり：一つの組だけで決めず、3組に入れてみよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "式の機械：□×4＝△。□に7を入れると△はいくつ？ 正答：28。 7×4＝28。 考える手がかり：4が7こ分、または7が4こ分。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "長方形の周りを表す(3＋□)×2の、2は図の何を表している？ 3×2＋□×2でも同じになる理由を図の辺で伝えよう。 2は縦と横を一組にしたものが2組あること。縦だけ2本、横だけ2本とまとめても同じ四辺だから等しい。 確認項目：縦横の組が2組あると説明した。 / 同じ四辺を二通りにまとめたと説明した。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "縦3cm、横5cmの長方形の周りを二通りで求めよう。 図の縦は3cmが2本、横は5cmが2本。 別々にまとめると3×2＋5×2＝6＋10。 隣り合う縦横を組にすると(3＋5)×2＝8×2。 どちらも同じ四辺を数え、周りは16cm。 結論：16cm",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「□や△には、いつでも一つの決まった数しか入らない。」は誤り。数量の関係を表す式では、□にいろいろな数を入れ、それに対応する△を考えられる。120×□＝△なら□が2のとき△は240、3のとき360。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "1冊120円で冊数□と代金△は120×□=△。正方形の一辺□と周り△は□×4=△。縦3、横□の長方形の周りは(3+□)×2=3×2+□×2。表の複数の対応で式を確かめる。1冊120円のノートn冊と一回だけの送料80円の合計は120×n+80円（図では整数n=1..8）。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "verified",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "例の登場物を同じ数量・単位・条件を保った架空の物へ置き換える。",
        "問いの意味と正答を保ち、短い文へ言い換える。"
      ],
      "forbidden": [
        "数・単位・全体の大きさ・等分の条件・対応関係・正答を変更しない。",
        "誤りの選択肢や誤解の例を正しい主張として説明しない。",
        "claimsの範囲外の定義や公式を足さない。",
        "個人情報・実在する人の記録・外部作品の仕様を加えない。"
      ]
    }
  },
  {
    "code": "8250253211100000",
    "grade": 5,
    "title": "合同な図形",
    "domain": "B",
    "order": 10,
    "goal": "向きを変えて重ね、対応する辺や角と図形の決まり方を調べる。",
    "coverageCodes": [
      "8250252100000000",
      "8250252200000000",
      "8250252300000000",
      "8250253210000000",
      "8250253211000000",
      "8250253211100000",
      "8250253212000000",
      "8250253212100000",
      "8250253511000000",
      "8250253512000000",
      "8250253513000000",
      "8250255200000000"
    ],
    "explanations": {
      "es": {
        "short": "動かしたり回したり裏返したりして、ぴったり重なる図形は合同。形も大きさも同じだよ。",
        "detail": "向きが違っても、重ねれば全ての辺と角が合うことがある。重なる頂点どうしを対応する頂点といい、対応する辺の長さや角の大きさは等しい。三角形は三つの辺の長さが決まると形と大きさが決まる。辺一つだけが同じでも合同とはいえない。合同な三角形や四角形で、隙間や重なりなく敷き詰めることもできるよ。"
      },
      "js": {
        "short": "合同は移動・回転・裏返しによって完全に重なる関係。対応する辺の長さと角の大きさが等しい。",
        "detail": "対応する頂点を決めると、辺・角の対応が明確になる。三角形は三辺、二辺とその間の角、一辺とその両端の角を与えることで作図できる。角の大きさを保ち、各辺を同じ倍率で長くした図形は、元と合同ではない。四角形は四辺の長さだけでは角が変わることがあり、図形を決める要素を区別する必要がある。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "同じ型紙を使う",
        "text": "同じ三角形の型紙から二枚を切る。片方を回したり裏返したりしても、重ねてぴったり合えば合同。",
        "activityIds": [
          "craft-cardboard"
        ]
      },
      {
        "category": "drawing",
        "title": "三角形を敷き詰める",
        "text": "一つの三角形を写し、もう一枚を180°回して組み合わせると平行四辺形が作れる。その組を並べて平面を隙間なく敷き詰められる。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "合同な図形の説明は？",
        "options": [
          "動かす・回す・裏返すことでぴったり重なる",
          "面積だけが同じ",
          "辺が一つだけ同じ"
        ],
        "answer": "動かす・回す・裏返すことでぴったり重なる",
        "explanation": "合同は形も大きさも同じで、図形全体が重なること。",
        "hint": "一部だけでなく全部が合うかな？",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "同じ三角形を90°回した図形は、元と合同？",
        "options": [
          "合同",
          "合同ではない"
        ],
        "answer": "合同",
        "explanation": "回転しても辺の長さや角の大きさは変わらない。",
        "hint": "もう一度回して重ねられるかな？",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "同じ三角形を全ての辺が2倍になるように大きくすると？",
        "options": [
          "元とは合同でない",
          "元と合同"
        ],
        "answer": "元とは合同でない",
        "explanation": "形は同じに見えても大きさが変わり、そのまま重ならない。",
        "hint": "辺の長さが一致しているかな？",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "合同な三角形で、AとD、BとE、CとFが対応する。辺ABが5cmなら、辺DEは何cm？",
        "answer": 5,
        "explanation": "対応する辺の長さは等しい。ABとDEが対応する。",
        "hint": "両端の対応をたどろう。",
        "suffix": "cm",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "合同な三角形で、頂点BとEが対応する。角Bが65°なら、角Eは何度？",
        "answer": 65,
        "explanation": "合同な図形の対応する角は等しいので65°。",
        "hint": "頂点の対応を見よう。",
        "suffix": "°",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "三角形の形と大きさを一つに決められる情報は？",
        "options": [
          "三つの辺の長さ",
          "一つの辺の長さだけ",
          "一つの角だけ"
        ],
        "answer": "三つの辺の長さ",
        "explanation": "実際に作れる三辺の長さが決まると、三角形の形と大きさが決まる。",
        "hint": "一辺だけでは、ほかの頂点を動かせるかな？",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "四辺が同じ長さの四角形なら、必ず全て合同？",
        "options": [
          "いいえ。角の大きさが違うことがある",
          "はい。四辺だけで決まる"
        ],
        "answer": "いいえ。角の大きさが違うことがある",
        "explanation": "同じ長さの棒4本でも、角を変えると正方形や傾いたひし形になる。",
        "hint": "四本の棒のつなぎ目を動かして考えよう。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "合同な三角形で平面を敷き詰める操作は？",
        "options": [
          "同じ三角形を回し、隙間や重なりがないように並べる",
          "置くたびに大きさを変える",
          "必ず全て同じ向きで置く"
        ],
        "answer": "同じ三角形を回し、隙間や重なりがないように並べる",
        "explanation": "回転しても合同を保つ。同じ二枚で平行四辺形を作り、それを並べられる。",
        "hint": "同じ三角形を二枚組にしてみよう。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "choice",
      "prompt": "重ねるカード：同じ型紙から切った三角形を裏返した。元の図形と？",
      "options": [
        "合同",
        "必ず大きくなる",
        "合同ではなくなる"
      ],
      "answer": "合同",
      "explanation": "裏返して元に重ねれば全体が一致する。",
      "hint": "紙の厚みは考えず、平面の形と大きさを見よう。",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "対応する辺を探す",
      "prompt": "三角形ABCとDEFが合同。A↔D、B↔E、C↔Fのとき、ABに対応する辺は？",
      "steps": [
        {
          "text": "重なる頂点の対応A↔D、B↔Eを確かめる。"
        },
        {
          "text": "ABは頂点AとBを結ぶ辺。"
        },
        {
          "text": "対応するDとEを結んだ辺はDE。"
        },
        {
          "text": "合同だからABとDEの長さは等しい。"
        }
      ],
      "answer": "辺DE",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "向きが違う図形は合同ではない。",
      "correction": "向きが違っても、移動・回転・裏返しでぴったり重なれば合同。向きではなく形と大きさを確かめる。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "二つの三角形が合同か、どんな操作で確かめられる？",
        "followUp": "対応する頂点を決めると、辺や角について何が分かる？",
        "checkpoints": [
          "移動・回転・裏返しで重ねると説明した。",
          "対応する辺と角が等しいと説明した。"
        ],
        "sample": "図形を動かし、回し、必要なら裏返して重ねる。全体がぴったり合えば合同で、重なる頂点を結ぶ対応辺の長さと対応角が等しい。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "動かしたり回したり裏返したりして、ぴったり重なる図形は合同。形も大きさも同じだよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "向きが違っても、重ねれば全ての辺と角が合うことがある。重なる頂点どうしを対応する頂点といい、対応する辺の長さや角の大きさは等しい。三角形は三つの辺の長さが決まると形と大きさが決まる。辺一つだけが同じでも合同とはいえない。合同な三角形や四角形で、隙間や重なりなく敷き詰めることもできるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "合同は移動・回転・裏返しによって完全に重なる関係。対応する辺の長さと角の大きさが等しい。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "対応する頂点を決めると、辺・角の対応が明確になる。三角形は三辺、二辺とその間の角、一辺とその両端の角を与えることで作図できる。角の大きさを保ち、各辺を同じ倍率で長くした図形は、元と合同ではない。四角形は四辺の長さだけでは角が変わることがあり、図形を決める要素を区別する必要がある。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "同じ三角形の型紙から二枚を切る。片方を回したり裏返したりしても、重ねてぴったり合えば合同。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "一つの三角形を写し、もう一枚を180°回して組み合わせると平行四辺形が作れる。その組を並べて平面を隙間なく敷き詰められる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "合同な図形の説明は？ 正答：動かす・回す・裏返すことでぴったり重なる。 合同は形も大きさも同じで、図形全体が重なること。 考える手がかり：一部だけでなく全部が合うかな？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "同じ三角形を90°回した図形は、元と合同？ 正答：合同。 回転しても辺の長さや角の大きさは変わらない。 考える手がかり：もう一度回して重ねられるかな？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "同じ三角形を全ての辺が2倍になるように大きくすると？ 正答：元とは合同でない。 形は同じに見えても大きさが変わり、そのまま重ならない。 考える手がかり：辺の長さが一致しているかな？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "合同な三角形で、AとD、BとE、CとFが対応する。辺ABが5cmなら、辺DEは何cm？ 正答：5。 対応する辺の長さは等しい。ABとDEが対応する。 考える手がかり：両端の対応をたどろう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "合同な三角形で、頂点BとEが対応する。角Bが65°なら、角Eは何度？ 正答：65。 合同な図形の対応する角は等しいので65°。 考える手がかり：頂点の対応を見よう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "三角形の形と大きさを一つに決められる情報は？ 正答：三つの辺の長さ。 実際に作れる三辺の長さが決まると、三角形の形と大きさが決まる。 考える手がかり：一辺だけでは、ほかの頂点を動かせるかな？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "四辺が同じ長さの四角形なら、必ず全て合同？ 正答：いいえ。角の大きさが違うことがある。 同じ長さの棒4本でも、角を変えると正方形や傾いたひし形になる。 考える手がかり：四本の棒のつなぎ目を動かして考えよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "合同な三角形で平面を敷き詰める操作は？ 正答：同じ三角形を回し、隙間や重なりがないように並べる。 回転しても合同を保つ。同じ二枚で平行四辺形を作り、それを並べられる。 考える手がかり：同じ三角形を二枚組にしてみよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "重ねるカード：同じ型紙から切った三角形を裏返した。元の図形と？ 正答：合同。 裏返して元に重ねれば全体が一致する。 考える手がかり：紙の厚みは考えず、平面の形と大きさを見よう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "二つの三角形が合同か、どんな操作で確かめられる？ 対応する頂点を決めると、辺や角について何が分かる？ 図形を動かし、回し、必要なら裏返して重ねる。全体がぴったり合えば合同で、重なる頂点を結ぶ対応辺の長さと対応角が等しい。 確認項目：移動・回転・裏返しで重ねると説明した。 / 対応する辺と角が等しいと説明した。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "三角形ABCとDEFが合同。A↔D、B↔E、C↔Fのとき、ABに対応する辺は？ 重なる頂点の対応A↔D、B↔Eを確かめる。 ABは頂点AとBを結ぶ辺。 対応するDとEを結んだ辺はDE。 合同だからABとDEの長さは等しい。 結論：辺DE",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「向きが違う図形は合同ではない。」は誤り。向きが違っても、移動・回転・裏返しでぴったり重なれば合同。向きではなく形と大きさを確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "平行移動・回転・裏返しで全体が重なる図形は合同。対応辺長・対応角は等しい。合同な三角形二枚を180°回転させて合わせると平行四辺形にでき、並進で平面を敷き詰められる。四辺の長さだけでは一般の四角形の形は定まらない。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "verified",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "例の登場物を同じ数量・単位・条件を保った架空の物へ置き換える。",
        "問いの意味と正答を保ち、短い文へ言い換える。"
      ],
      "forbidden": [
        "数・単位・全体の大きさ・等分の条件・対応関係・正答を変更しない。",
        "誤りの選択肢や誤解の例を正しい主張として説明しない。",
        "claimsの範囲外の定義や公式を足さない。",
        "個人情報・実在する人の記録・外部作品の仕様を加えない。"
      ]
    }
  },
  {
    "code": "8250253211200000",
    "grade": 5,
    "title": "三角形と四角形の角",
    "domain": "B",
    "order": 11,
    "goal": "角を並べたり図形を分けたりして、内角の和を説明する。",
    "coverageCodes": [
      "8250252100000000",
      "8250252200000000",
      "8250252300000000",
      "8250253210000000",
      "8250253211000000",
      "8250253211200000",
      "8250253212000000",
      "8250253212100000",
      "8250253511000000",
      "8250253512000000",
      "8250253513000000"
    ],
    "explanations": {
      "es": {
        "short": "三角形の三つの角を合わせると180°。四角形は三角形二つに分けられるので、四つの角は360°になるよ。",
        "detail": "三角形の角を切って一か所に集めると、まっすぐな角180°になる。形を細長くしても合計は同じ。四角形の内側を通る一本の対角線で三角形二つに分けると180°が二つで360°。分けた角を元の頂点へ戻して、同じ角を重ねて数えていないか確かめよう。"
      },
      "js": {
        "short": "三角形の内角和は180°、四角形の内角和は360°。既知の図形に分割して角の和を導く。",
        "detail": "四角形の内側を通る対角線は内部を二つの三角形に分ける。対角線で分かれた頂点の角を合わせれば元の角になるため、内角和は180°×2＝360°。凸五角形でも一つの頂点から二本の対角線を引くと三つの三角形になり、180°×3＝540°と考えられる。測定は性質を確かめる手段であり、誤差によるずれと性質を区別する。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "三角形の角を集める",
        "text": "紙の三角形から三つの角を切り取り、頂点を一か所にそろえて並べる。角を重ねず並べるとまっすぐな180°になる。",
        "activityIds": [
          "craft-cardboard"
        ]
      },
      {
        "category": "drawing",
        "title": "四角形を分ける",
        "text": "絵の中の四角形の内側に対角線を一本引くと、三角形が二つ。角の和は180°×2＝360°と説明できる。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "三角形の二つの角が50°、60°。残りの角は何度？",
        "answer": 70,
        "explanation": "180−50−60＝70°。",
        "hint": "三つ合わせた180°から二つ分を引こう。",
        "suffix": "°",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "直角三角形の一つの鋭い角が35°。もう一つの鋭い角は？",
        "answer": 55,
        "explanation": "180−90−35＝55°。",
        "hint": "直角90°も忘れずに引く。",
        "suffix": "°",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "四角形の三つの角が80°、100°、70°。残りは？",
        "answer": 110,
        "explanation": "360−80−100−70＝110°。",
        "hint": "四つの角の和は360°。",
        "suffix": "°",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "四角形の角の和が360°になる理由は？",
        "options": [
          "三角形二つに分けられ、180°が二つになるから",
          "四つの角が全て90°だから",
          "辺が四本だから必ず同じ角になるから"
        ],
        "answer": "三角形二つに分けられ、180°が二つになるから",
        "explanation": "一般の四角形の角は全て90°とは限らない。対角線で三角形二つに分ける。",
        "hint": "長方形以外の四角形でも成り立つ説明を選ぼう。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "正三角形の一つの角は何度？",
        "answer": 60,
        "explanation": "三つの角が等しいので180÷3＝60°。",
        "hint": "180°を同じ大きさに3等分する。",
        "suffix": "°",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "細長い三角形の角の和は？",
        "options": [
          "180°",
          "180°より小さい",
          "180°より大きい"
        ],
        "answer": "180°",
        "explanation": "辺の長さや形が変わっても、三角形の内角和は180°。",
        "hint": "一つの角が小さくなったとき、ほかの角も同じように小さくなるかな？",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "number",
        "prompt": "凸五角形を一つの頂点から対角線で三角形三つに分けた。角の和は何度？",
        "answer": 540,
        "explanation": "180×3＝540°。",
        "hint": "分けた三角形の数に注目しよう。",
        "suffix": "°",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "紙の三角形を測った角の合計が179°だった。どう考える？",
        "options": [
          "測り方や目盛りの読みを確かめる",
          "三角形の角の和はいつも179°に変更する",
          "一つの角を理由なく1°増やす"
        ],
        "answer": "測り方や目盛りの読みを確かめる",
        "explanation": "測定にはずれが生じる。性質180°を基に測り方を見直す。",
        "hint": "分度器の中心や基準の線は合っているかな？",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "number",
      "prompt": "角合わせ：三角形の角が40°と80°。空いた角は何度？",
      "answer": 60,
      "explanation": "180−40−80＝60°。",
      "hint": "三つでまっすぐな角になる。",
      "suffix": "°",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "四角形を三角形へ分ける",
      "prompt": "四角形の角の和を、三角形を使って説明しよう。",
      "steps": [
        {
          "text": "四角形の内側に対角線を一本引く。"
        },
        {
          "text": "重ならない三角形二つに分かれる。"
        },
        {
          "text": "分かれた頂点の角を合わせると、元の四角形の角に戻る。"
        },
        {
          "text": "三角形二つの角の和だから180°×2＝360°。"
        }
      ],
      "answer": "360°",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "四角形の角の和360°は、どの角も90°という意味。",
      "correction": "四つの角の合計が360°という意味で、それぞれの角は違ってもよい。例えば80°、100°、70°、110°も合計360°。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "四角形を三角形二つに分けると、なぜ角を二重に数えずに済む？",
        "followUp": "対角線で分かれた一つの頂点の角を戻してみよう。",
        "checkpoints": [
          "三角形の内部は重なっていないと説明した。",
          "分かれた角を合わせると元の角になると説明した。"
        ],
        "sample": "対角線で分けた三角形は内部が重ならない。二つに分かれた角を合わせると元の四角形の角なので、余分な角は足していない。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "三角形の三つの角を合わせると180°。四角形は三角形二つに分けられるので、四つの角は360°になるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "三角形の角を切って一か所に集めると、まっすぐな角180°になる。形を細長くしても合計は同じ。四角形の内側を通る一本の対角線で三角形二つに分けると180°が二つで360°。分けた角を元の頂点へ戻して、同じ角を重ねて数えていないか確かめよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "三角形の内角和は180°、四角形の内角和は360°。既知の図形に分割して角の和を導く。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "四角形の内側を通る対角線は内部を二つの三角形に分ける。対角線で分かれた頂点の角を合わせれば元の角になるため、内角和は180°×2＝360°。凸五角形でも一つの頂点から二本の対角線を引くと三つの三角形になり、180°×3＝540°と考えられる。測定は性質を確かめる手段であり、誤差によるずれと性質を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "紙の三角形から三つの角を切り取り、頂点を一か所にそろえて並べる。角を重ねず並べるとまっすぐな180°になる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "絵の中の四角形の内側に対角線を一本引くと、三角形が二つ。角の和は180°×2＝360°と説明できる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "三角形の二つの角が50°、60°。残りの角は何度？ 正答：70。 180−50−60＝70°。 考える手がかり：三つ合わせた180°から二つ分を引こう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "直角三角形の一つの鋭い角が35°。もう一つの鋭い角は？ 正答：55。 180−90−35＝55°。 考える手がかり：直角90°も忘れずに引く。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "四角形の三つの角が80°、100°、70°。残りは？ 正答：110。 360−80−100−70＝110°。 考える手がかり：四つの角の和は360°。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "四角形の角の和が360°になる理由は？ 正答：三角形二つに分けられ、180°が二つになるから。 一般の四角形の角は全て90°とは限らない。対角線で三角形二つに分ける。 考える手がかり：長方形以外の四角形でも成り立つ説明を選ぼう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "正三角形の一つの角は何度？ 正答：60。 三つの角が等しいので180÷3＝60°。 考える手がかり：180°を同じ大きさに3等分する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "細長い三角形の角の和は？ 正答：180°。 辺の長さや形が変わっても、三角形の内角和は180°。 考える手がかり：一つの角が小さくなったとき、ほかの角も同じように小さくなるかな？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "凸五角形を一つの頂点から対角線で三角形三つに分けた。角の和は何度？ 正答：540。 180×3＝540°。 考える手がかり：分けた三角形の数に注目しよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "紙の三角形を測った角の合計が179°だった。どう考える？ 正答：測り方や目盛りの読みを確かめる。 測定にはずれが生じる。性質180°を基に測り方を見直す。 考える手がかり：分度器の中心や基準の線は合っているかな？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "角合わせ：三角形の角が40°と80°。空いた角は何度？ 正答：60。 180−40−80＝60°。 考える手がかり：三つでまっすぐな角になる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "四角形を三角形二つに分けると、なぜ角を二重に数えずに済む？ 対角線で分かれた一つの頂点の角を戻してみよう。 対角線で分けた三角形は内部が重ならない。二つに分かれた角を合わせると元の四角形の角なので、余分な角は足していない。 確認項目：三角形の内部は重なっていないと説明した。 / 分かれた角を合わせると元の角になると説明した。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "四角形の角の和を、三角形を使って説明しよう。 四角形の内側に対角線を一本引く。 重ならない三角形二つに分かれる。 分かれた頂点の角を合わせると、元の四角形の角に戻る。 三角形二つの角の和だから180°×2＝360°。 結論：360°",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「四角形の角の和360°は、どの角も90°という意味。」は誤り。四つの角の合計が360°という意味で、それぞれの角は違ってもよい。例えば80°、100°、70°、110°も合計360°。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "三角形の内角和180°、四角形は内側の対角線で二三角形に分けて360°。凸五角形は一頂点から三三角形に分け540°。正三角形の各角60°。一般に凸n角形（整数n≥3）は一つの頂点から対角線でn−2個の三角形に分けられ、内角和は180×(n−2)°。図ではn=3..8を扱う。角の分割では重複なく元の内角へ戻る。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "verified",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "例の登場物を同じ数量・単位・条件を保った架空の物へ置き換える。",
        "問いの意味と正答を保ち、短い文へ言い換える。"
      ],
      "forbidden": [
        "数・単位・全体の大きさ・等分の条件・対応関係・正答を変更しない。",
        "誤りの選択肢や誤解の例を正しい主張として説明しない。",
        "claimsの範囲外の定義や公式を足さない。",
        "個人情報・実在する人の記録・外部作品の仕様を加えない。"
      ]
    }
  },
  {
    "code": "8250253211300000",
    "grade": 5,
    "title": "正多角形と円",
    "domain": "B",
    "order": 12,
    "goal": "辺と角の両方を調べ、円から正多角形をつくる。",
    "coverageCodes": [
      "8250252100000000",
      "8250252200000000",
      "8250252300000000",
      "8250253210000000",
      "8250253211000000",
      "8250253211300000",
      "8250253212000000",
      "8250253212100000",
      "8250253511000000",
      "8250253512000000",
      "8250253513000000"
    ],
    "explanations": {
      "es": {
        "short": "全ての辺の長さが等しく、全ての角の大きさも等しい多角形が正多角形。円を同じ角度ずつに分けて、隣り合う点を結んでみよう。",
        "detail": "円の中心のまわりは360°。6等分すると中心の角は60°ずつになり、円周上の隣り合う点を結ぶと正六角形ができる。中心から頂点までの長さは全部半径なので、同じ形の三角形が並ぶ。辺だけが等しいひし形でも、角がそろっていなければ正多角形とはいわないよ。"
      },
      "js": {
        "short": "正多角形は全辺と全角がそれぞれ等しい多角形。円周を等しい中心角で分割して構成できる。",
        "detail": "円周上の点を同じ中心角で取ると、中心と隣り合う頂点でできる三角形は二辺が半径、間の角も共通なので合同になる。正六角形では中心角360°÷6＝60°で、各三角形は正三角形となり、一辺の長さは半径に等しい。中心の角と多角形の頂点の角は位置が違うので区別する。"
      }
    },
    "entries": [
      {
        "category": "drawing",
        "title": "丸い枠の模様",
        "text": "円の中心から45°ずつ8本の半径を引く。円周との交点を順につなぐと正八角形の模様が作れる。",
        "activityIds": [
          "draw-ipad"
        ]
      },
      {
        "category": "craft",
        "title": "六角形の型紙",
        "text": "半径3cmの円の周りに、同じ3cm幅のコンパスを順に当てる。六つの点を結ぶと、一辺3cmの正六角形になる。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "正多角形の条件は？",
        "options": [
          "全ての辺も全ての角も等しい",
          "辺だけが等しい",
          "角だけが等しい"
        ],
        "answer": "全ての辺も全ての角も等しい",
        "explanation": "辺と角の両方の条件が必要。",
        "hint": "ひし形や長方形と比べよう。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "円を6等分すると、一つの中心の角は何度？",
        "answer": 60,
        "explanation": "360÷6＝60°。",
        "hint": "一周360°を6こに等しく分ける。",
        "suffix": "°",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "円を8等分して正八角形を作る。一つの中心の角は？",
        "answer": 45,
        "explanation": "360÷8＝45°。",
        "hint": "中心のまわりを8等分する。",
        "suffix": "°",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "四辺が全て3cmで、角が60°と120°のひし形は正多角形？",
        "options": [
          "正多角形ではない",
          "正多角形"
        ],
        "answer": "正多角形ではない",
        "explanation": "辺は等しくても角が全て等しくない。",
        "hint": "正多角形には二つの条件がある。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "縦2cm、横4cmの長方形は正多角形？",
        "options": [
          "正多角形ではない",
          "正多角形"
        ],
        "answer": "正多角形ではない",
        "explanation": "角は全て90°だが、辺の長さが全て等しくない。",
        "hint": "辺の条件も確かめよう。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "半径3cmの円に、円周を6等分して正六角形を作る。一辺は何cm？",
        "answer": 3,
        "explanation": "中心と隣り合う二頂点で正三角形ができ、一辺は半径と同じ3cm。",
        "hint": "正六角形を中心から6つの三角形へ分けよう。",
        "suffix": "cm",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "正六角形を作るときの中心の角60°は、どこにある？",
        "options": [
          "円の中心",
          "六角形の一つの頂点",
          "辺のまんなか"
        ],
        "answer": "円の中心",
        "explanation": "60°は中心のまわり360°を6等分した角。頂点の内角とは別。",
        "hint": "角の頂点がどこにあるか見よう。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "number",
        "prompt": "正五角形を円から作るとき、円の中心のまわりを何度ずつに分ける？",
        "answer": 72,
        "explanation": "360÷5＝72°。",
        "hint": "5つの等しい部分に分けよう。",
        "suffix": "°",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "number",
      "prompt": "正多角形の円：中心の角を90°ずつに分けると、辺は何本の正多角形？",
      "answer": 4,
      "explanation": "360÷90＝4なので正方形。",
      "hint": "一周に90°がいくつ入る？",
      "suffix": "本",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "円から正六角形を作る",
      "prompt": "円を使って、辺も角もそろった六角形を考えよう。",
      "steps": [
        {
          "text": "中心のまわり360°を6等分し、60°ずつの半径を引く。"
        },
        {
          "text": "半径と円周の交点を、隣り合う順に結ぶ。"
        },
        {
          "text": "中心と二頂点でできる三角形は全て合同な正三角形。"
        },
        {
          "text": "六角形の辺の長さも角の大きさも等しく、正六角形になる。"
        }
      ],
      "answer": "中心角60°ずつで正六角形",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "辺の長さが全部同じなら、必ず正多角形。",
      "correction": "角の大きさも全部同じである必要がある。辺が等しくても、60°と120°の角をもつひし形は正多角形ではない。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "円を6等分すると、なぜ正六角形の辺がそろう？",
        "followUp": "中心からできる六つの三角形の、同じところを挙げよう。",
        "checkpoints": [
          "二つの辺はどちらも半径と説明した。",
          "中心角も60°で共通なので三角形が合同と説明した。"
        ],
        "sample": "各三角形は二辺が同じ半径で、その間の中心角も60°。同じ三角形が六つ並ぶため、円周側の六角形の辺も等しくなる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "全ての辺の長さが等しく、全ての角の大きさも等しい多角形が正多角形。円を同じ角度ずつに分けて、隣り合う点を結んでみよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "円の中心のまわりは360°。6等分すると中心の角は60°ずつになり、円周上の隣り合う点を結ぶと正六角形ができる。中心から頂点までの長さは全部半径なので、同じ形の三角形が並ぶ。辺だけが等しいひし形でも、角がそろっていなければ正多角形とはいわないよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "正多角形は全辺と全角がそれぞれ等しい多角形。円周を等しい中心角で分割して構成できる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "円周上の点を同じ中心角で取ると、中心と隣り合う頂点でできる三角形は二辺が半径、間の角も共通なので合同になる。正六角形では中心角360°÷6＝60°で、各三角形は正三角形となり、一辺の長さは半径に等しい。中心の角と多角形の頂点の角は位置が違うので区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "円の中心から45°ずつ8本の半径を引く。円周との交点を順につなぐと正八角形の模様が作れる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "半径3cmの円の周りに、同じ3cm幅のコンパスを順に当てる。六つの点を結ぶと、一辺3cmの正六角形になる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "正多角形の条件は？ 正答：全ての辺も全ての角も等しい。 辺と角の両方の条件が必要。 考える手がかり：ひし形や長方形と比べよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "円を6等分すると、一つの中心の角は何度？ 正答：60。 360÷6＝60°。 考える手がかり：一周360°を6こに等しく分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "円を8等分して正八角形を作る。一つの中心の角は？ 正答：45。 360÷8＝45°。 考える手がかり：中心のまわりを8等分する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "四辺が全て3cmで、角が60°と120°のひし形は正多角形？ 正答：正多角形ではない。 辺は等しくても角が全て等しくない。 考える手がかり：正多角形には二つの条件がある。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "縦2cm、横4cmの長方形は正多角形？ 正答：正多角形ではない。 角は全て90°だが、辺の長さが全て等しくない。 考える手がかり：辺の条件も確かめよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "半径3cmの円に、円周を6等分して正六角形を作る。一辺は何cm？ 正答：3。 中心と隣り合う二頂点で正三角形ができ、一辺は半径と同じ3cm。 考える手がかり：正六角形を中心から6つの三角形へ分けよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "正六角形を作るときの中心の角60°は、どこにある？ 正答：円の中心。 60°は中心のまわり360°を6等分した角。頂点の内角とは別。 考える手がかり：角の頂点がどこにあるか見よう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "正五角形を円から作るとき、円の中心のまわりを何度ずつに分ける？ 正答：72。 360÷5＝72°。 考える手がかり：5つの等しい部分に分けよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "正多角形の円：中心の角を90°ずつに分けると、辺は何本の正多角形？ 正答：4。 360÷90＝4なので正方形。 考える手がかり：一周に90°がいくつ入る？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "円を6等分すると、なぜ正六角形の辺がそろう？ 中心からできる六つの三角形の、同じところを挙げよう。 各三角形は二辺が同じ半径で、その間の中心角も60°。同じ三角形が六つ並ぶため、円周側の六角形の辺も等しくなる。 確認項目：二つの辺はどちらも半径と説明した。 / 中心角も60°で共通なので三角形が合同と説明した。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "円を使って、辺も角もそろった六角形を考えよう。 中心のまわり360°を6等分し、60°ずつの半径を引く。 半径と円周の交点を、隣り合う順に結ぶ。 中心と二頂点でできる三角形は全て合同な正三角形。 六角形の辺の長さも角の大きさも等しく、正六角形になる。 結論：中心角60°ずつで正六角形",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「辺の長さが全部同じなら、必ず正多角形。」は誤り。角の大きさも全部同じである必要がある。辺が等しくても、60°と120°の角をもつひし形は正多角形ではない。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "正多角形は全辺長と全内角がそれぞれ等しい。円周をn等分した隣接点を結ぶ構成の中心角は360/n度（整数n≥3）。正六角形の中心角は60°、辺長は円の半径と等しい。正八角形45°、正五角形72°。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "verified",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "例の登場物を同じ数量・単位・条件を保った架空の物へ置き換える。",
        "問いの意味と正答を保ち、短い文へ言い換える。"
      ],
      "forbidden": [
        "数・単位・全体の大きさ・等分の条件・対応関係・正答を変更しない。",
        "誤りの選択肢や誤解の例を正しい主張として説明しない。",
        "claimsの範囲外の定義や公式を足さない。",
        "個人情報・実在する人の記録・外部作品の仕様を加えない。"
      ]
    }
  },
  {
    "code": "8250253211400000",
    "grade": 5,
    "title": "円周と直径",
    "domain": "B",
    "order": 13,
    "goal": "円周と直径の関係を調べ、円周率を使って長さを求める。",
    "coverageCodes": [
      "8250252100000000",
      "8250252200000000",
      "8250252300000000",
      "8250253210000000",
      "8250253211000000",
      "8250253211400000",
      "8250253212000000",
      "8250253212100000",
      "8250253511000000",
      "8250253512000000",
      "8250253513000000",
      "8250255300000000"
    ],
    "explanations": {
      "es": {
        "short": "円の周りの長さを円周という。円周は直径のおよそ3.14倍。計算では円周率を3.14として使うよ。",
        "detail": "円を一周転がした長さが円周。いろいろな大きさの円で円周÷直径を調べると、同じ割合になる。この割合が円周率で、計算では3.14を使う。直径4cmなら4×3.14＝12.56cm。半径が分かっているときは、まず2倍して直径にしよう。"
      },
      "js": {
        "short": "円周率は円周の直径に対する割合。円周＝直径×円周率で、この教材の計算には3.14を用いる。",
        "detail": "円の大きさが変わっても円周÷直径の割合は一定であり、これを円周率という。3.14は計算に用いる近似値。半径3cmの円は直径6cmなので、円周は6×3.14＝18.84cmとなる。直径と円周の単位をそろえ、面積や半径を円周と混同しないようにする。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "円形のふちにひもを付ける",
        "text": "直径10cmの円形の型紙のふちを一周するひもの長さを考える。重なり分なし、円周率3.14なら10×3.14＝31.4cm。",
        "activityIds": [
          "craft-cardboard"
        ]
      },
      {
        "category": "digital",
        "title": "円を一周転がす",
        "text": "直径4cmの架空の円板を滑らず一周転がす。円周率3.14として、進む長さは12.56cm。回転数と長さを対応させられる。",
        "activityIds": [
          "dig-stormworks"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "円周率を求める式は？",
        "options": [
          "円周÷直径",
          "直径÷円周",
          "円周÷半径"
        ],
        "answer": "円周÷直径",
        "explanation": "円周が直径の何倍かを表す割合が円周率。",
        "hint": "基準にする長さは直径だよ。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "直径4cmの円周は何cm？ 円周率は3.14。",
        "answer": 12.56,
        "explanation": "4×3.14＝12.56cm。",
        "hint": "直径に円周率をかけよう。",
        "suffix": "cm",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "半径3cmの円周は何cm？ 円周率は3.14。",
        "answer": 18.84,
        "explanation": "直径は3×2＝6cm。6×3.14＝18.84cm。",
        "hint": "半径をそのまま公式に入れない。",
        "suffix": "cm",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "円周31.4cmの円の直径は何cm？ 円周率は3.14。",
        "answer": 10,
        "explanation": "直径×3.14＝31.4だから、31.4÷3.14＝10cm。",
        "hint": "かけ算の逆で直径を求めよう。",
        "suffix": "cm",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "円の直径を2倍にすると、円周は？",
        "options": [
          "2倍",
          "4倍",
          "変わらない"
        ],
        "answer": "2倍",
        "explanation": "同じ円周率をかけるので、円周も2倍になる。",
        "hint": "直径×円周率の式を見よう。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "直径2cmの円板が、滑らず2周転がる。進む長さは何cm？ 円周率は3.14。",
        "answer": 12.56,
        "explanation": "一周は2×3.14＝6.28cm。二周で6.28×2＝12.56cm。",
        "hint": "まず一周分を求めよう。",
        "suffix": "cm",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "円周率3.14について正しい説明は？",
        "options": [
          "計算に使う近似値",
          "円周率の正確な全ての桁",
          "半径の長さ"
        ],
        "answer": "計算に使う近似値",
        "explanation": "円周率は3.14で終わる数ではない。この教材では3.14を使って計算する。",
        "hint": "「およそ」と「ぴったり」を区別しよう。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "半径5cmの円で、円周を5×3.14とする考えは？",
        "options": [
          "直径10cmにしてから10×3.14とする必要がある",
          "そのままでよい",
          "半径を5で割る必要がある"
        ],
        "answer": "直径10cmにしてから10×3.14とする必要がある",
        "explanation": "円周の式に使うのは直径。直径は半径の2倍。",
        "hint": "中心から円周までか、中心を通って両端までかを確かめよう。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "number",
      "prompt": "円周カード：直径5cmの円周は何cm？ 円周率は3.14。",
      "answer": 15.7,
      "explanation": "5×3.14＝15.7cm。",
      "hint": "直径の3倍より少し長い。",
      "suffix": "cm",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "半径から円周へ",
      "prompt": "半径3cmの円の周りに、ひもを一周ぴったり付ける。円周率は3.14。",
      "steps": [
        {
          "text": "図の半径は中心から円周までの3cm。"
        },
        {
          "text": "中心を通って端から端までの直径は3×2＝6cm。"
        },
        {
          "text": "円周＝直径×円周率を使い、6×3.14を計算する。"
        },
        {
          "text": "6×3.14＝18.84。単位は長さのcm。"
        }
      ],
      "answer": "18.84cm（円周率3.14として）",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "円周は半径×3.14で求める。",
      "correction": "円周は直径×円周率。半径から求めるなら、先に2倍して直径にする。半径3cmなら6×3.14＝18.84cm。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "円の大きさが違っても、円周÷直径が同じになることを言葉で説明しよう。",
        "followUp": "直径が2倍の円を転がすと、一周で進む長さはどうなる？",
        "checkpoints": [
          "円周率が円周と直径の割合だと説明した。",
          "直径と円周は同じ2倍になると説明した。"
        ],
        "sample": "どの円も円周は直径に同じ円周率をかけた長さ。直径が2倍なら一周の円周も2倍なので、割った割合は変わらない。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "円の周りの長さを円周という。円周は直径のおよそ3.14倍。計算では円周率を3.14として使うよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "円を一周転がした長さが円周。いろいろな大きさの円で円周÷直径を調べると、同じ割合になる。この割合が円周率で、計算では3.14を使う。直径4cmなら4×3.14＝12.56cm。半径が分かっているときは、まず2倍して直径にしよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "円周率は円周の直径に対する割合。円周＝直径×円周率で、この教材の計算には3.14を用いる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "円の大きさが変わっても円周÷直径の割合は一定であり、これを円周率という。3.14は計算に用いる近似値。半径3cmの円は直径6cmなので、円周は6×3.14＝18.84cmとなる。直径と円周の単位をそろえ、面積や半径を円周と混同しないようにする。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "直径10cmの円形の型紙のふちを一周するひもの長さを考える。重なり分なし、円周率3.14なら10×3.14＝31.4cm。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "直径4cmの架空の円板を滑らず一周転がす。円周率3.14として、進む長さは12.56cm。回転数と長さを対応させられる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "円周率を求める式は？ 正答：円周÷直径。 円周が直径の何倍かを表す割合が円周率。 考える手がかり：基準にする長さは直径だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "直径4cmの円周は何cm？ 円周率は3.14。 正答：12.56。 4×3.14＝12.56cm。 考える手がかり：直径に円周率をかけよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "半径3cmの円周は何cm？ 円周率は3.14。 正答：18.84。 直径は3×2＝6cm。6×3.14＝18.84cm。 考える手がかり：半径をそのまま公式に入れない。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "円周31.4cmの円の直径は何cm？ 円周率は3.14。 正答：10。 直径×3.14＝31.4だから、31.4÷3.14＝10cm。 考える手がかり：かけ算の逆で直径を求めよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "円の直径を2倍にすると、円周は？ 正答：2倍。 同じ円周率をかけるので、円周も2倍になる。 考える手がかり：直径×円周率の式を見よう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "直径2cmの円板が、滑らず2周転がる。進む長さは何cm？ 円周率は3.14。 正答：12.56。 一周は2×3.14＝6.28cm。二周で6.28×2＝12.56cm。 考える手がかり：まず一周分を求めよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "円周率3.14について正しい説明は？ 正答：計算に使う近似値。 円周率は3.14で終わる数ではない。この教材では3.14を使って計算する。 考える手がかり：「およそ」と「ぴったり」を区別しよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "半径5cmの円で、円周を5×3.14とする考えは？ 正答：直径10cmにしてから10×3.14とする必要がある。 円周の式に使うのは直径。直径は半径の2倍。 考える手がかり：中心から円周までか、中心を通って両端までかを確かめよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "円周カード：直径5cmの円周は何cm？ 円周率は3.14。 正答：15.7。 5×3.14＝15.7cm。 考える手がかり：直径の3倍より少し長い。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "円の大きさが違っても、円周÷直径が同じになることを言葉で説明しよう。 直径が2倍の円を転がすと、一周で進む長さはどうなる？ どの円も円周は直径に同じ円周率をかけた長さ。直径が2倍なら一周の円周も2倍なので、割った割合は変わらない。 確認項目：円周率が円周と直径の割合だと説明した。 / 直径と円周は同じ2倍になると説明した。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "半径3cmの円の周りに、ひもを一周ぴったり付ける。円周率は3.14。 図の半径は中心から円周までの3cm。 中心を通って端から端までの直径は3×2＝6cm。 円周＝直径×円周率を使い、6×3.14を計算する。 6×3.14＝18.84。単位は長さのcm。 結論：18.84cm（円周率3.14として）",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「円周は半径×3.14で求める。」は誤り。円周は直径×円周率。半径から求めるなら、先に2倍して直径にする。半径3cmなら6×3.14＝18.84cm。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "円周率=円周÷直径、円周=直径×円周率、直径=半径×2。この教材は円周率の近似値3.14で計算する。直径4cmの円周は12.56cm、半径3cmなら18.84cm（いずれも3.14使用）。滑らず一周転がる距離は円周に等しい。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "verified",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "例の登場物を同じ数量・単位・条件を保った架空の物へ置き換える。",
        "問いの意味と正答を保ち、短い文へ言い換える。"
      ],
      "forbidden": [
        "数・単位・全体の大きさ・等分の条件・対応関係・正答を変更しない。",
        "誤りの選択肢や誤解の例を正しい主張として説明しない。",
        "claimsの範囲外の定義や公式を足さない。",
        "個人情報・実在する人の記録・外部作品の仕様を加えない。"
      ]
    }
  },
  {
    "code": "8250253231100000",
    "grade": 5,
    "title": "平行四辺形と三角形の面積",
    "domain": "B",
    "order": 14,
    "goal": "切り移しや二枚合わせを使い、底辺と高さから面積を求める。",
    "coverageCodes": [
      "8250252100000000",
      "8250252200000000",
      "8250252300000000",
      "8250253230000000",
      "8250253231000000",
      "8250253231100000",
      "8250253232000000",
      "8250253232100000",
      "8250253511000000",
      "8250253512000000",
      "8250253513000000"
    ],
    "explanations": {
      "es": {
        "short": "平行四辺形の面積は底辺×高さ。三角形は同じ底辺・高さの平行四辺形の半分だから、底辺×高さ÷2だよ。",
        "detail": "平行四辺形の端を切って反対側へ移すと、同じ面積の長方形になる。その横が底辺、縦が高さ。三角形をもう一枚用意して回すと、同じ底辺・高さの平行四辺形ができる。二枚分を計算したので最後に2でわる。高さは底辺に垂直な距離で、ななめの辺の長さとは違うよ。"
      },
      "js": {
        "short": "等積変形で平行四辺形を長方形へ、倍積変形で三角形を平行四辺形へ関連付ける。高さは底辺への垂直距離。",
        "detail": "平行四辺形の一部を切り移しても面積は変わらず、底辺×高さで求められる。三角形を合同な二枚で平行四辺形にすれば二枚の面積は底辺×高さなので、一枚はその半分。底辺6cm、高さ4cmの三角形は12cm²。頂点が外へずれ、高さの足が底辺の延長上にあっても同じ垂直距離で求める。"
      }
    },
    "entries": [
      {
        "category": "minecraft",
        "title": "ななめの区画",
        "text": "架空の平行四辺形の土地で底辺6m、高さ4m。端の三角形を切り移すと6m×4mの長方形になり、面積は24m²。",
        "activityIds": [
          "mc-build"
        ]
      },
      {
        "category": "craft",
        "title": "三角形の旗",
        "text": "底辺6cm、高さ4cmの三角形の旗を二枚合わせる。平行四辺形の24cm²は二枚分なので、一枚は12cm²。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "底辺6cm、高さ4cmの平行四辺形の面積は何cm²？",
        "answer": 24,
        "explanation": "6×4＝24cm²。",
        "hint": "同じ面積の長方形へ切り移すと考えよう。",
        "suffix": "cm²",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "底辺6cm、高さ4cmの三角形の面積は何cm²？",
        "answer": 12,
        "explanation": "6×4÷2＝12cm²。",
        "hint": "同じ三角形を二枚合わせると？",
        "suffix": "cm²",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "底辺6cm、ななめの辺5cm、底辺への垂直な高さ4cmの平行四辺形。面積の式は？",
        "options": [
          "6×4",
          "6×5",
          "5×4"
        ],
        "answer": "6×4",
        "explanation": "高さは垂直な距離4cmであり、ななめの辺5cmではない。",
        "hint": "底辺と直角になる長さを探そう。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "底辺8cm、高さ5cmの三角形の面積は？",
        "answer": 20,
        "explanation": "8×5÷2＝20cm²。",
        "hint": "先に二枚分を求めてから半分にする。",
        "suffix": "cm²",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "三角形の面積が18cm²、底辺が6cm。高さは何cm？",
        "answer": 6,
        "explanation": "6×高さ÷2＝18なので、高さ＝18×2÷6＝6。",
        "hint": "二枚分の面積に戻して底辺で割ろう。",
        "suffix": "cm",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "底辺と高さが同じ二つの三角形は、頂点の横の位置が違っても？",
        "options": [
          "面積は同じ",
          "必ず面積が違う",
          "辺の長い方が必ず大きい"
        ],
        "answer": "面積は同じ",
        "explanation": "面積の式で使う底辺と高さが同じなので、面積も同じ。",
        "hint": "頂点を横に動かしても垂直な高さは変わるかな？",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "三角形の高さの足が、底辺の延長上にある場合は？",
        "options": [
          "延長した底辺への垂直な距離を高さに使える",
          "面積を求められない",
          "ななめの辺を高さにする"
        ],
        "answer": "延長した底辺への垂直な距離を高さに使える",
        "explanation": "高さは底辺を含む直線と頂点との垂直な距離。三角形の外にあってもよい。",
        "hint": "底辺の線をまっすぐ延ばして直角を作ろう。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "number",
        "prompt": "底辺3.5cm、高さ4cmの平行四辺形の面積は？",
        "answer": 14,
        "explanation": "3.5×4＝14cm²。小数の長さでも同じ関係を使う。",
        "hint": "底辺を3cmと0.5cmに分けても考えられる。",
        "suffix": "cm²",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "number",
      "prompt": "二枚の旗：底辺4cm、高さ3cmの三角形一枚の面積は？",
      "answer": 6,
      "explanation": "4×3÷2＝6cm²。",
      "hint": "二枚合わせた12cm²を半分に。",
      "suffix": "cm²",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "同じ三角形を二枚使う",
      "prompt": "底辺6cm、高さ4cmの三角形の面積を求めよう。",
      "steps": [
        {
          "text": "同じ三角形をもう一枚用意し、回して組み合わせる。"
        },
        {
          "text": "底辺6cm、高さ4cmの平行四辺形になる。"
        },
        {
          "text": "二枚分の面積は6×4＝24cm²。"
        },
        {
          "text": "一枚分は24÷2＝12cm²。式は6×4÷2。"
        }
      ],
      "answer": "12cm²",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "高さは、ななめの辺の長さを使えばよい。",
      "correction": "高さは選んだ底辺に垂直な距離。ななめの辺が5cmでも高さが4cmなら、底辺にかけるのは4cm。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "三角形の面積の式で2で割る理由を、二枚の図で説明しよう。",
        "followUp": "切り移す平行四辺形では、なぜ2で割らない？",
        "checkpoints": [
          "三角形では同じ物を二枚に増やしたと説明した。",
          "切り移しは一枚の量を保つと説明した。"
        ],
        "sample": "三角形を二枚合わせた平行四辺形の面積を求めているから、一枚分にするため2で割る。平行四辺形の切り移しでは元の一枚の量は増えない。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "平行四辺形の面積は底辺×高さ。三角形は同じ底辺・高さの平行四辺形の半分だから、底辺×高さ÷2だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "平行四辺形の端を切って反対側へ移すと、同じ面積の長方形になる。その横が底辺、縦が高さ。三角形をもう一枚用意して回すと、同じ底辺・高さの平行四辺形ができる。二枚分を計算したので最後に2でわる。高さは底辺に垂直な距離で、ななめの辺の長さとは違うよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "等積変形で平行四辺形を長方形へ、倍積変形で三角形を平行四辺形へ関連付ける。高さは底辺への垂直距離。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "平行四辺形の一部を切り移しても面積は変わらず、底辺×高さで求められる。三角形を合同な二枚で平行四辺形にすれば二枚の面積は底辺×高さなので、一枚はその半分。底辺6cm、高さ4cmの三角形は12cm²。頂点が外へずれ、高さの足が底辺の延長上にあっても同じ垂直距離で求める。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の平行四辺形の土地で底辺6m、高さ4m。端の三角形を切り移すと6m×4mの長方形になり、面積は24m²。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "底辺6cm、高さ4cmの三角形の旗を二枚合わせる。平行四辺形の24cm²は二枚分なので、一枚は12cm²。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "底辺6cm、高さ4cmの平行四辺形の面積は何cm²？ 正答：24。 6×4＝24cm²。 考える手がかり：同じ面積の長方形へ切り移すと考えよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "底辺6cm、高さ4cmの三角形の面積は何cm²？ 正答：12。 6×4÷2＝12cm²。 考える手がかり：同じ三角形を二枚合わせると？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "底辺6cm、ななめの辺5cm、底辺への垂直な高さ4cmの平行四辺形。面積の式は？ 正答：6×4。 高さは垂直な距離4cmであり、ななめの辺5cmではない。 考える手がかり：底辺と直角になる長さを探そう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "底辺8cm、高さ5cmの三角形の面積は？ 正答：20。 8×5÷2＝20cm²。 考える手がかり：先に二枚分を求めてから半分にする。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "三角形の面積が18cm²、底辺が6cm。高さは何cm？ 正答：6。 6×高さ÷2＝18なので、高さ＝18×2÷6＝6。 考える手がかり：二枚分の面積に戻して底辺で割ろう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "底辺と高さが同じ二つの三角形は、頂点の横の位置が違っても？ 正答：面積は同じ。 面積の式で使う底辺と高さが同じなので、面積も同じ。 考える手がかり：頂点を横に動かしても垂直な高さは変わるかな？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "三角形の高さの足が、底辺の延長上にある場合は？ 正答：延長した底辺への垂直な距離を高さに使える。 高さは底辺を含む直線と頂点との垂直な距離。三角形の外にあってもよい。 考える手がかり：底辺の線をまっすぐ延ばして直角を作ろう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "底辺3.5cm、高さ4cmの平行四辺形の面積は？ 正答：14。 3.5×4＝14cm²。小数の長さでも同じ関係を使う。 考える手がかり：底辺を3cmと0.5cmに分けても考えられる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "二枚の旗：底辺4cm、高さ3cmの三角形一枚の面積は？ 正答：6。 4×3÷2＝6cm²。 考える手がかり：二枚合わせた12cm²を半分に。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "三角形の面積の式で2で割る理由を、二枚の図で説明しよう。 切り移す平行四辺形では、なぜ2で割らない？ 三角形を二枚合わせた平行四辺形の面積を求めているから、一枚分にするため2で割る。平行四辺形の切り移しでは元の一枚の量は増えない。 確認項目：三角形では同じ物を二枚に増やしたと説明した。 / 切り移しは一枚の量を保つと説明した。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "底辺6cm、高さ4cmの三角形の面積を求めよう。 同じ三角形をもう一枚用意し、回して組み合わせる。 底辺6cm、高さ4cmの平行四辺形になる。 二枚分の面積は6×4＝24cm²。 一枚分は24÷2＝12cm²。式は6×4÷2。 結論：12cm²",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「高さは、ななめの辺の長さを使えばよい。」は誤り。高さは選んだ底辺に垂直な距離。ななめの辺が5cmでも高さが4cmなら、底辺にかけるのは4cm。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "平行四辺形の面積=底辺×高さ、三角形の面積=底辺×高さ÷2。高さは底辺を含む直線への垂直距離。底辺6cm高さ4cmの三角形は12cm²、二枚で24cm²。底辺と高さを保つ頂点の横移動は面積を変えない。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "motion",
        "text": "底辺6cm高さ4cmの合同な三角形二枚を、重なりも隙間もなく平行四辺形に合わせる。二枚の面積は6×4=24cm²、一枚は24÷2=12cm²。複製前後の枚数を明示して面積の2倍と半分を対応させる。この動く解説では底辺6cmと高さ4cmが直角に交わる直角三角形二枚を用い、6cm×4cmの長方形に合わせる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "verified",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "例の登場物を同じ数量・単位・条件を保った架空の物へ置き換える。",
        "問いの意味と正答を保ち、短い文へ言い換える。"
      ],
      "forbidden": [
        "数・単位・全体の大きさ・等分の条件・対応関係・正答を変更しない。",
        "誤りの選択肢や誤解の例を正しい主張として説明しない。",
        "claimsの範囲外の定義や公式を足さない。",
        "個人情報・実在する人の記録・外部作品の仕様を加えない。"
      ]
    }
  },
  {
    "code": "8250253232100000",
    "grade": 5,
    "title": "台形とひし形の面積",
    "domain": "B",
    "order": 15,
    "goal": "既知の図形に分けたり組み合わせたりして、面積の式を導く。",
    "coverageCodes": [
      "8250252100000000",
      "8250252200000000",
      "8250252300000000",
      "8250253230000000",
      "8250253231000000",
      "8250253231100000",
      "8250253232000000",
      "8250253232100000",
      "8250253511000000",
      "8250253512000000",
      "8250253513000000"
    ],
    "explanations": {
      "es": {
        "short": "台形は同じ形を二枚合わせると平行四辺形になる。ひし形は対角線で分けると、周りの長方形の半分になるよ。",
        "detail": "上底3cm、下底7cm、高さ4cmの台形を二枚合わせると、底辺10cm、高さ4cmの平行四辺形。40cm²は二枚分だから一枚20cm²。式は(上底＋下底)×高さ÷2。ひし形は、垂直に交わる二本の対角線を縦横にした長方形の半分なので、対角線×対角線÷2で求める。"
      },
      "js": {
        "short": "台形の面積は(上底＋下底)×高さ÷2、ひし形の面積は対角線の積÷2。既知の図形との面積比を根拠にする。",
        "detail": "合同な台形二枚を回して合わせると、底辺が上底と下底の和、高さが元の高さの平行四辺形になるため2で割る。ひし形の対角線は垂直に交わり互いを二等分するので、四つの直角三角形に分かれる。その面積は対角線を縦横とする長方形の半分。公式の数が図のどの長さを指すかを確認する。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "台形の名札",
        "text": "上底3cm、下底7cm、高さ4cmの台形の名札。同じ物二枚で底辺10cmの平行四辺形になるので、一枚は20cm²。",
        "activityIds": [
          "craft-cardboard"
        ]
      },
      {
        "category": "drawing",
        "title": "ひし形の模様",
        "text": "縦の対角線6cm、横の対角線8cmのひし形。周りの6×8の長方形の半分をぬる形になり、面積は24cm²。",
        "activityIds": [
          "draw-ipad"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "上底3cm、下底7cm、高さ4cmの台形の面積は？",
        "answer": 20,
        "explanation": "(3＋7)×4÷2＝20cm²。",
        "hint": "二枚合わせた平行四辺形の底辺はいくつ？",
        "suffix": "cm²",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "二本の対角線が6cmと8cmのひし形の面積は？",
        "answer": 24,
        "explanation": "6×8÷2＝24cm²。",
        "hint": "対角線を縦横とする長方形の半分。",
        "suffix": "cm²",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "台形の高さとして使うのは？",
        "options": [
          "平行な上底と下底の間の垂直な距離",
          "ななめの辺の長さ",
          "上底と下底の合計"
        ],
        "answer": "平行な上底と下底の間の垂直な距離",
        "explanation": "高さは二つの平行な辺の間を直角に測った距離。",
        "hint": "上底と下底に直角の線を考えよう。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "上底4cm、下底8cm、高さ3cmの台形の面積は？",
        "answer": 18,
        "explanation": "(4＋8)×3÷2＝18cm²。",
        "hint": "まず上底と下底を合わせよう。",
        "suffix": "cm²",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "台形の式で上底と下底を足す理由は？",
        "options": [
          "二枚合わせた平行四辺形の底辺になるから",
          "周り全部の長さになるから",
          "高さと同じ長さになるから"
        ],
        "answer": "二枚合わせた平行四辺形の底辺になるから",
        "explanation": "向きを逆にした台形を合わせると、上底と下底がつながった底辺になる。",
        "hint": "二枚を上下逆に組み合わせてみよう。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "対角線が5cmと6cmのひし形の面積は？",
        "answer": 15,
        "explanation": "5×6÷2＝15cm²。",
        "hint": "二本の対角線の積を半分に。",
        "suffix": "cm²",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "ひし形の面積を「辺の長さ×辺の長さ」で求めてよい？",
        "options": [
          "一般にはだめ。角や高さが違うと面積が変わる",
          "どのひし形でもよい"
        ],
        "answer": "一般にはだめ。角や高さが違うと面積が変わる",
        "explanation": "ひし形は正方形とは限らない。辺だけをかける式は一般のひし形には使えない。",
        "hint": "同じ長さの棒4本を傾けると広さは変わるかな？",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "number",
        "prompt": "上底と下底の和が10cm、高さが5cmの台形。面積は？",
        "answer": 25,
        "explanation": "10×5÷2＝25cm²。和が分かれば二枚分の底辺として使える。",
        "hint": "上底・下底を別々に求める必要はあるかな？",
        "suffix": "cm²",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "number",
      "prompt": "ひし形カード：対角線4cmと6cmなら面積は？",
      "answer": 12,
      "explanation": "4×6÷2＝12cm²。",
      "hint": "周りの長方形24cm²の半分。",
      "suffix": "cm²",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "台形を二枚合わせる",
      "prompt": "上底3cm、下底7cm、高さ4cmの台形の面積は？",
      "steps": [
        {
          "text": "同じ台形をもう一枚用意し、180°回す。"
        },
        {
          "text": "二枚を合わせると底辺3＋7＝10cm、高さ4cmの平行四辺形。"
        },
        {
          "text": "二枚分の面積は10×4＝40cm²。"
        },
        {
          "text": "一枚分なので40÷2＝20cm²。"
        }
      ],
      "answer": "20cm²",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "台形の面積は、上底×下底×高さ。",
      "correction": "上底と下底はかけずに足す。その和が二枚合わせた平行四辺形の底辺になるので、(上底＋下底)×高さ÷2とする。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "台形の上底と下底を足し、最後に2で割る理由を説明しよう。",
        "followUp": "ひし形でも2で割るが、半分にしている元の図形は何？",
        "checkpoints": [
          "二枚の台形で平行四辺形を作ると説明した。",
          "ひし形は対角線を縦横とする長方形の半分と説明した。"
        ],
        "sample": "台形二枚で底辺が上底＋下底の平行四辺形になり、一枚分へ戻すので2で割る。ひし形は対角線を縦横にした長方形の半分になる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "台形は同じ形を二枚合わせると平行四辺形になる。ひし形は対角線で分けると、周りの長方形の半分になるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "上底3cm、下底7cm、高さ4cmの台形を二枚合わせると、底辺10cm、高さ4cmの平行四辺形。40cm²は二枚分だから一枚20cm²。式は(上底＋下底)×高さ÷2。ひし形は、垂直に交わる二本の対角線を縦横にした長方形の半分なので、対角線×対角線÷2で求める。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "台形の面積は(上底＋下底)×高さ÷2、ひし形の面積は対角線の積÷2。既知の図形との面積比を根拠にする。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "合同な台形二枚を回して合わせると、底辺が上底と下底の和、高さが元の高さの平行四辺形になるため2で割る。ひし形の対角線は垂直に交わり互いを二等分するので、四つの直角三角形に分かれる。その面積は対角線を縦横とする長方形の半分。公式の数が図のどの長さを指すかを確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "上底3cm、下底7cm、高さ4cmの台形の名札。同じ物二枚で底辺10cmの平行四辺形になるので、一枚は20cm²。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "縦の対角線6cm、横の対角線8cmのひし形。周りの6×8の長方形の半分をぬる形になり、面積は24cm²。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "上底3cm、下底7cm、高さ4cmの台形の面積は？ 正答：20。 (3＋7)×4÷2＝20cm²。 考える手がかり：二枚合わせた平行四辺形の底辺はいくつ？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "二本の対角線が6cmと8cmのひし形の面積は？ 正答：24。 6×8÷2＝24cm²。 考える手がかり：対角線を縦横とする長方形の半分。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "台形の高さとして使うのは？ 正答：平行な上底と下底の間の垂直な距離。 高さは二つの平行な辺の間を直角に測った距離。 考える手がかり：上底と下底に直角の線を考えよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "上底4cm、下底8cm、高さ3cmの台形の面積は？ 正答：18。 (4＋8)×3÷2＝18cm²。 考える手がかり：まず上底と下底を合わせよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "台形の式で上底と下底を足す理由は？ 正答：二枚合わせた平行四辺形の底辺になるから。 向きを逆にした台形を合わせると、上底と下底がつながった底辺になる。 考える手がかり：二枚を上下逆に組み合わせてみよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "対角線が5cmと6cmのひし形の面積は？ 正答：15。 5×6÷2＝15cm²。 考える手がかり：二本の対角線の積を半分に。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "ひし形の面積を「辺の長さ×辺の長さ」で求めてよい？ 正答：一般にはだめ。角や高さが違うと面積が変わる。 ひし形は正方形とは限らない。辺だけをかける式は一般のひし形には使えない。 考える手がかり：同じ長さの棒4本を傾けると広さは変わるかな？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "上底と下底の和が10cm、高さが5cmの台形。面積は？ 正答：25。 10×5÷2＝25cm²。和が分かれば二枚分の底辺として使える。 考える手がかり：上底・下底を別々に求める必要はあるかな？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "ひし形カード：対角線4cmと6cmなら面積は？ 正答：12。 4×6÷2＝12cm²。 考える手がかり：周りの長方形24cm²の半分。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "台形の上底と下底を足し、最後に2で割る理由を説明しよう。 ひし形でも2で割るが、半分にしている元の図形は何？ 台形二枚で底辺が上底＋下底の平行四辺形になり、一枚分へ戻すので2で割る。ひし形は対角線を縦横にした長方形の半分になる。 確認項目：二枚の台形で平行四辺形を作ると説明した。 / ひし形は対角線を縦横とする長方形の半分と説明した。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "上底3cm、下底7cm、高さ4cmの台形の面積は？ 同じ台形をもう一枚用意し、180°回す。 二枚を合わせると底辺3＋7＝10cm、高さ4cmの平行四辺形。 二枚分の面積は10×4＝40cm²。 一枚分なので40÷2＝20cm²。 結論：20cm²",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「台形の面積は、上底×下底×高さ。」は誤り。上底と下底はかけずに足す。その和が二枚合わせた平行四辺形の底辺になるので、(上底＋下底)×高さ÷2とする。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "台形面積=(上底+下底)×高さ÷2。上底3下底7高さ4cmなら20cm²。ひし形の対角線は直交して互いを二等分し、面積=二本の対角線の積÷2。6cmと8cmなら24cm²。高さは平行な底辺間の垂直距離。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "verified",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "例の登場物を同じ数量・単位・条件を保った架空の物へ置き換える。",
        "問いの意味と正答を保ち、短い文へ言い換える。"
      ],
      "forbidden": [
        "数・単位・全体の大きさ・等分の条件・対応関係・正答を変更しない。",
        "誤りの選択肢や誤解の例を正しい主張として説明しない。",
        "claimsの範囲外の定義や公式を足さない。",
        "個人情報・実在する人の記録・外部作品の仕様を加えない。"
      ]
    }
  },
  {
    "code": "8250253220000000",
    "grade": 5,
    "title": "角柱と円柱",
    "domain": "B",
    "order": 16,
    "goal": "底面と側面に着目し、立体のつくりと平面の図をつなぐ。",
    "coverageCodes": [
      "8250252100000000",
      "8250252200000000",
      "8250252300000000",
      "8250253220000000",
      "8250253221000000",
      "8250253221100000",
      "8250253222000000",
      "8250253222100000",
      "8250253511000000",
      "8250253512000000",
      "8250253513000000",
      "8250253605000000",
      "8250253606000000"
    ],
    "explanations": {
      "es": {
        "short": "角柱は同じ形・大きさの多角形を、平行に二つ置いた立体。円柱の二つの底面は円だよ。",
        "detail": "三角柱なら底面は合同な三角形二つ。ここで扱うまっすぐな角柱の側面は長方形で、底面の辺一本に側面一枚が対応する。三角柱は底面2枚と側面3枚で面が5枚。円柱は円の底面二つと曲がった側面。横に倒しても底面という役割は変わらないよ。"
      },
      "js": {
        "short": "角柱・円柱は二つの合同で平行な底面と側面から捉える。置き方ではなく、構成要素の役割で分類する。",
        "detail": "この教材では側面が底面に垂直な角柱を扱い、側面は長方形となる。底面がn角形なら、面はn＋2、辺は3n、頂点は2n。直方体や立方体も四角柱として捉えられる。円柱の側面を切り開くと長方形になり、その一辺は底面の円周、もう一辺は高さに対応する。角柱の辺と円柱の曲がった境界を混同しない。"
      }
    },
    "entries": [
      {
        "category": "minecraft",
        "title": "柱の形を調べる",
        "text": "架空の建築模型に三角柱を使う。底面の三角形二つには頂点が3こずつあり、合わせて6頂点。側面は長方形3枚。",
        "activityIds": [
          "mc-model"
        ]
      },
      {
        "category": "craft",
        "title": "円柱の紙の箱",
        "text": "紙の円柱を作るときは、同じ円を二枚と、側面を包む長方形を使う。長方形の横は円周、縦は高さに合う長さにする。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "choice",
        "prompt": "三角柱の底面は？",
        "options": [
          "合同な三角形二つ",
          "長方形三つ",
          "三角形一つだけ"
        ],
        "answer": "合同な三角形二つ",
        "explanation": "三角柱の二つの底面は合同で平行な三角形。",
        "hint": "形の名前は底面の形に注目する。",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "三角柱の面は全部で何枚？",
        "answer": 5,
        "explanation": "底面2枚＋側面3枚＝5枚。",
        "hint": "底面と側面を分けて数える。",
        "suffix": "枚",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "三角柱の頂点は全部で何こ？",
        "answer": 6,
        "explanation": "底面二つに3こずつあるので3×2＝6。",
        "hint": "上と下の底面の頂点を対応させよう。",
        "suffix": "こ",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "五角柱の辺は全部で何本？",
        "answer": 15,
        "explanation": "底面の辺5本が二組と、二底面を結ぶ辺5本で15本。",
        "hint": "5＋5＋5と分けて数える。",
        "suffix": "本",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "角柱を横に倒すと、底面はどうなる？",
        "options": [
          "同じ二つの面が底面のまま",
          "必ず床に接した面だけになる",
          "底面がなくなる"
        ],
        "answer": "同じ二つの面が底面のまま",
        "explanation": "底面は合同で平行な二つの多角形という役割。置き方で変えない。",
        "hint": "「下にある面」という日常語との違い。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "直方体を角柱として見ると？",
        "options": [
          "四角柱",
          "三角柱",
          "円柱"
        ],
        "answer": "四角柱",
        "explanation": "合同で平行な長方形二つを底面とすれば四角柱。",
        "hint": "底面に選べる多角形の辺は何本？",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "円柱の側面を切り開いた長方形の横の長さは、何に対応する？",
        "options": [
          "底面の円周",
          "底面の半径",
          "底面の直径そのもの"
        ],
        "answer": "底面の円周",
        "explanation": "円の周りを一周包む長さが必要なので円周。",
        "hint": "紙を円に巻くとき、横の辺はどこを通る？",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "number",
        "prompt": "四角柱の面は、底面二つと側面を合わせて何枚？",
        "answer": 6,
        "explanation": "四角形の底面に対応する側面4枚と底面2枚で6枚。",
        "hint": "底面の辺一本に側面一枚。",
        "suffix": "枚",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "number",
      "prompt": "柱の頂点カード：五角柱には頂点が何こ？",
      "answer": 10,
      "explanation": "底面二つに5こずつなので10こ。",
      "hint": "同じ底面が二つある。",
      "suffix": "こ",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "三角柱の面を数える",
      "prompt": "三角柱の面はなぜ5枚？",
      "steps": [
        {
          "text": "合同で平行な三角形二つを底面として見つける。"
        },
        {
          "text": "一方の三角形の辺3本に、長方形の側面が一枚ずつつながる。"
        },
        {
          "text": "側面は3枚、底面は2枚。"
        },
        {
          "text": "2＋3＝5。見えない面も構成から数えられる。"
        }
      ],
      "answer": "5枚",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "底面は、その時いちばん下にある面だけ。",
      "correction": "算数で角柱・円柱の底面というと、合同で平行な二つの面を指す。立体を横に倒してもその役割は変わらない。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "五角柱の辺が15本になる理由を、三つのまとまりで説明しよう。",
        "followUp": "面の数を同じ15としないためには、何を数える？",
        "checkpoints": [
          "底面の辺5本ずつと、つなぐ辺5本を数えた。",
          "面は底面2枚と側面5枚の7枚と区別した。"
        ],
        "sample": "上の五角形に5本、下に5本、それらをつなぐ5本で15本。面は底面2枚と側面5枚なので7枚で、辺とは別に数える。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "角柱は同じ形・大きさの多角形を、平行に二つ置いた立体。円柱の二つの底面は円だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "三角柱なら底面は合同な三角形二つ。ここで扱うまっすぐな角柱の側面は長方形で、底面の辺一本に側面一枚が対応する。三角柱は底面2枚と側面3枚で面が5枚。円柱は円の底面二つと曲がった側面。横に倒しても底面という役割は変わらないよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "角柱・円柱は二つの合同で平行な底面と側面から捉える。置き方ではなく、構成要素の役割で分類する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "この教材では側面が底面に垂直な角柱を扱い、側面は長方形となる。底面がn角形なら、面はn＋2、辺は3n、頂点は2n。直方体や立方体も四角柱として捉えられる。円柱の側面を切り開くと長方形になり、その一辺は底面の円周、もう一辺は高さに対応する。角柱の辺と円柱の曲がった境界を混同しない。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の建築模型に三角柱を使う。底面の三角形二つには頂点が3こずつあり、合わせて6頂点。側面は長方形3枚。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "紙の円柱を作るときは、同じ円を二枚と、側面を包む長方形を使う。長方形の横は円周、縦は高さに合う長さにする。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "三角柱の底面は？ 正答：合同な三角形二つ。 三角柱の二つの底面は合同で平行な三角形。 考える手がかり：形の名前は底面の形に注目する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "三角柱の面は全部で何枚？ 正答：5。 底面2枚＋側面3枚＝5枚。 考える手がかり：底面と側面を分けて数える。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "三角柱の頂点は全部で何こ？ 正答：6。 底面二つに3こずつあるので3×2＝6。 考える手がかり：上と下の底面の頂点を対応させよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "五角柱の辺は全部で何本？ 正答：15。 底面の辺5本が二組と、二底面を結ぶ辺5本で15本。 考える手がかり：5＋5＋5と分けて数える。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "角柱を横に倒すと、底面はどうなる？ 正答：同じ二つの面が底面のまま。 底面は合同で平行な二つの多角形という役割。置き方で変えない。 考える手がかり：「下にある面」という日常語との違い。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "直方体を角柱として見ると？ 正答：四角柱。 合同で平行な長方形二つを底面とすれば四角柱。 考える手がかり：底面に選べる多角形の辺は何本？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "円柱の側面を切り開いた長方形の横の長さは、何に対応する？ 正答：底面の円周。 円の周りを一周包む長さが必要なので円周。 考える手がかり：紙を円に巻くとき、横の辺はどこを通る？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "四角柱の面は、底面二つと側面を合わせて何枚？ 正答：6。 四角形の底面に対応する側面4枚と底面2枚で6枚。 考える手がかり：底面の辺一本に側面一枚。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "柱の頂点カード：五角柱には頂点が何こ？ 正答：10。 底面二つに5こずつなので10こ。 考える手がかり：同じ底面が二つある。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "五角柱の辺が15本になる理由を、三つのまとまりで説明しよう。 面の数を同じ15としないためには、何を数える？ 上の五角形に5本、下に5本、それらをつなぐ5本で15本。面は底面2枚と側面5枚なので7枚で、辺とは別に数える。 確認項目：底面の辺5本ずつと、つなぐ辺5本を数えた。 / 面は底面2枚と側面5枚の7枚と区別した。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "三角柱の面はなぜ5枚？ 合同で平行な三角形二つを底面として見つける。 一方の三角形の辺3本に、長方形の側面が一枚ずつつながる。 側面は3枚、底面は2枚。 2＋3＝5。見えない面も構成から数えられる。 結論：5枚",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「底面は、その時いちばん下にある面だけ。」は誤り。算数で角柱・円柱の底面というと、合同で平行な二つの面を指す。立体を横に倒してもその役割は変わらない。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "ここでは直角柱を対象とする。n角柱（整数n≥3）は合同で平行な二底面、n枚の長方形側面をもち、面n+2、辺3n、頂点2n。三角柱は5面9辺6頂点。円柱は合同で平行な二円の底面と曲面の側面をもち、側面の展開は横が円周、縦が高さの長方形。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "verified",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "例の登場物を同じ数量・単位・条件を保った架空の物へ置き換える。",
        "問いの意味と正答を保ち、短い文へ言い換える。"
      ],
      "forbidden": [
        "数・単位・全体の大きさ・等分の条件・対応関係・正答を変更しない。",
        "誤りの選択肢や誤解の例を正しい主張として説明しない。",
        "claimsの範囲外の定義や公式を足さない。",
        "個人情報・実在する人の記録・外部作品の仕様を加えない。"
      ]
    }
  },
  {
    "code": "8250253240000000",
    "grade": 5,
    "title": "立方体と直方体の体積",
    "domain": "B",
    "order": 17,
    "goal": "1cm³のまとまりを積み、立体のかさと単位の関係を考える。",
    "coverageCodes": [
      "8250252100000000",
      "8250252200000000",
      "8250252300000000",
      "8250253240000000",
      "8250253241000000",
      "8250253241100000",
      "8250253241200000",
      "8250253242000000",
      "8250253242100000",
      "8250253511000000",
      "8250253512000000",
      "8250253513000000"
    ],
    "explanations": {
      "es": {
        "short": "一辺1cmの立方体のかさが1cm³。直方体は、一段の個数×段の数で、縦×横×高さの体積になるよ。",
        "detail": "縦3cm、横4cm、高さ2cmの直方体には、1cm³の立方体が一段に3×4＝12こ入り、2段で24こ。体積は24cm³。面積は一面の広さ、体積は中を満たすかさだから単位も違う。1m³は100cm×100cm×100cmで1000000cm³。1Lは1000cm³に当たるよ。"
      },
      "js": {
        "short": "体積は単位立方体の個数として捉える。直方体の体積は縦×横×高さで、単位の三乗に着目する。",
        "detail": "3cm×4cm×2cmの直方体は、1cm³が一層12こ、2層で24こ。1m³は一辺100cmの立方体なので100³＝1000000cm³。1L＝1000cm³、1mL＝1cm³である。組み合わせた立体は重複のない部分へ分割して足すか、大きい直方体から欠けた部分を引く。容器の容量では内側の寸法を使う。"
      }
    },
    "entries": [
      {
        "category": "minecraft",
        "title": "ブロックを層に積む",
        "text": "架空の模型で、一辺1cmの立方体を縦3こ横4こ並べ、2段積む。隙間がなければ24この立方体で24cm³。",
        "activityIds": [
          "mc-build"
        ]
      },
      {
        "category": "craft",
        "title": "箱の中に入る量",
        "text": "内側の縦10cm、横10cm、高さ10cmの直方体の容器。中の体積は1000cm³で、1Lに当たる。",
        "activityIds": [
          "craft-cardboard"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "縦3cm、横4cm、高さ2cmの直方体の体積は？",
        "answer": 24,
        "explanation": "3×4×2＝24cm³。",
        "hint": "一段12この立方体が2段。",
        "suffix": "cm³",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "一辺5cmの立方体の体積は？",
        "answer": 125,
        "explanation": "5×5×5＝125cm³。",
        "hint": "縦・横・高さが全て5cm。",
        "suffix": "cm³",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "1m³は何cm³？",
        "answer": 1000000,
        "explanation": "1m＝100cmなので100×100×100＝1000000cm³。",
        "hint": "長さの100倍が三つかかる。",
        "suffix": "cm³",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "2Lは何cm³？",
        "answer": 2000,
        "explanation": "1L＝1000cm³なので2×1000＝2000cm³。",
        "hint": "1Lのまとまりが2つ。",
        "suffix": "cm³",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "体積を表す単位は？",
        "options": [
          "cm³",
          "cm²",
          "cm"
        ],
        "answer": "cm³",
        "explanation": "体積は単位立方体で数え、cm³を使う。",
        "hint": "線・面・中を満たすかさのどれを測っている？",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "外形4cm×3cm×2cmの直方体から、1cm×1cm×2cmの部分を取り去った。残る体積は？",
        "answer": 22,
        "explanation": "4×3×2−1×1×2＝24−2＝22cm³。",
        "hint": "大きい直方体から、取り去った部分だけを引こう。",
        "suffix": "cm³",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "number",
        "prompt": "内側が縦10cm、横5cm、高さ8cmの容器。いっぱいまで入る量は何cm³？",
        "answer": 400,
        "explanation": "内側の寸法で10×5×8＝400cm³。",
        "hint": "容器の厚みを含む外側の寸法ではない。",
        "suffix": "cm³",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "縦と横を変えず、高さだけ2倍にした直方体の体積は？",
        "options": [
          "2倍",
          "4倍",
          "8倍"
        ],
        "answer": "2倍",
        "explanation": "一層の個数は同じで、段の数だけ2倍になる。",
        "hint": "縦×横×高さのうち何個の数を変えた？",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "number",
      "prompt": "立方体の箱：縦2こ横3こを4段積む。1こ1cm³なら体積は？",
      "answer": 24,
      "explanation": "2×3×4＝24cm³。",
      "hint": "一段の個数を先に求めよう。",
      "suffix": "cm³",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "一段ずつ数える",
      "prompt": "3cm×4cm×2cmの直方体に、1cm³がいくつ入る？",
      "steps": [
        {
          "text": "底に縦3こ、横4この立方体を隙間なく置く。"
        },
        {
          "text": "一段には3×4＝12こ入る。"
        },
        {
          "text": "高さ2cmだから同じ段が2段できる。"
        },
        {
          "text": "12×2＝24こ。体積は24cm³。"
        }
      ],
      "answer": "24cm³",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "1mは100cmだから、1m³も100cm³。",
      "correction": "体積では縦・横・高さ全てをcmへ直す。1m³＝100cm×100cm×100cm＝1000000cm³。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "3×4×2のうち、3×4と最後の2はそれぞれ何を数える？",
        "followUp": "高さだけ2倍にしたら、どのまとまりが増える？",
        "checkpoints": [
          "3×4は一段の12こ、2は段数と説明した。",
          "一段は同じで段数が2倍になると説明した。"
        ],
        "sample": "3×4で一段の12こを数え、2で段が二つあることを表す。高さだけ2倍なら段数だけが2倍で、体積も2倍。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "一辺1cmの立方体のかさが1cm³。直方体は、一段の個数×段の数で、縦×横×高さの体積になるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "縦3cm、横4cm、高さ2cmの直方体には、1cm³の立方体が一段に3×4＝12こ入り、2段で24こ。体積は24cm³。面積は一面の広さ、体積は中を満たすかさだから単位も違う。1m³は100cm×100cm×100cmで1000000cm³。1Lは1000cm³に当たるよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "体積は単位立方体の個数として捉える。直方体の体積は縦×横×高さで、単位の三乗に着目する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "3cm×4cm×2cmの直方体は、1cm³が一層12こ、2層で24こ。1m³は一辺100cmの立方体なので100³＝1000000cm³。1L＝1000cm³、1mL＝1cm³である。組み合わせた立体は重複のない部分へ分割して足すか、大きい直方体から欠けた部分を引く。容器の容量では内側の寸法を使う。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の模型で、一辺1cmの立方体を縦3こ横4こ並べ、2段積む。隙間がなければ24この立方体で24cm³。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "内側の縦10cm、横10cm、高さ10cmの直方体の容器。中の体積は1000cm³で、1Lに当たる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "縦3cm、横4cm、高さ2cmの直方体の体積は？ 正答：24。 3×4×2＝24cm³。 考える手がかり：一段12この立方体が2段。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "一辺5cmの立方体の体積は？ 正答：125。 5×5×5＝125cm³。 考える手がかり：縦・横・高さが全て5cm。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "1m³は何cm³？ 正答：1000000。 1m＝100cmなので100×100×100＝1000000cm³。 考える手がかり：長さの100倍が三つかかる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "2Lは何cm³？ 正答：2000。 1L＝1000cm³なので2×1000＝2000cm³。 考える手がかり：1Lのまとまりが2つ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "体積を表す単位は？ 正答：cm³。 体積は単位立方体で数え、cm³を使う。 考える手がかり：線・面・中を満たすかさのどれを測っている？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "外形4cm×3cm×2cmの直方体から、1cm×1cm×2cmの部分を取り去った。残る体積は？ 正答：22。 4×3×2−1×1×2＝24−2＝22cm³。 考える手がかり：大きい直方体から、取り去った部分だけを引こう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "内側が縦10cm、横5cm、高さ8cmの容器。いっぱいまで入る量は何cm³？ 正答：400。 内側の寸法で10×5×8＝400cm³。 考える手がかり：容器の厚みを含む外側の寸法ではない。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "縦と横を変えず、高さだけ2倍にした直方体の体積は？ 正答：2倍。 一層の個数は同じで、段の数だけ2倍になる。 考える手がかり：縦×横×高さのうち何個の数を変えた？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "立方体の箱：縦2こ横3こを4段積む。1こ1cm³なら体積は？ 正答：24。 2×3×4＝24cm³。 考える手がかり：一段の個数を先に求めよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "3×4×2のうち、3×4と最後の2はそれぞれ何を数える？ 高さだけ2倍にしたら、どのまとまりが増える？ 3×4で一段の12こを数え、2で段が二つあることを表す。高さだけ2倍なら段数だけが2倍で、体積も2倍。 確認項目：3×4は一段の12こ、2は段数と説明した。 / 一段は同じで段数が2倍になると説明した。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "3cm×4cm×2cmの直方体に、1cm³がいくつ入る？ 底に縦3こ、横4この立方体を隙間なく置く。 一段には3×4＝12こ入る。 高さ2cmだから同じ段が2段できる。 12×2＝24こ。体積は24cm³。 結論：24cm³",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「1mは100cmだから、1m³も100cm³。」は誤り。体積では縦・横・高さ全てをcmへ直す。1m³＝100cm×100cm×100cm＝1000000cm³。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "1cm³は一辺1cmの立方体の体積。直方体体積=縦×横×高さ、立方体は一辺の三乗。3×4×2cmは24cm³。1m³=1000000cm³、1L=1000cm³、1mL=1cm³。重なりのない立体の和と差で体積を求められる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "verified",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "例の登場物を同じ数量・単位・条件を保った架空の物へ置き換える。",
        "問いの意味と正答を保ち、短い文へ言い換える。"
      ],
      "forbidden": [
        "数・単位・全体の大きさ・等分の条件・対応関係・正答を変更しない。",
        "誤りの選択肢や誤解の例を正しい主張として説明しない。",
        "claimsの範囲外の定義や公式を足さない。",
        "個人情報・実在する人の記録・外部作品の仕様を加えない。"
      ]
    }
  },
  {
    "code": "8250253310000000",
    "grade": 5,
    "title": "比例",
    "domain": "C",
    "order": 18,
    "goal": "表と式で変わり方を調べ、比例する関係を見つける。",
    "coverageCodes": [
      "8250252100000000",
      "8250252200000000",
      "8250252300000000",
      "8250253310000000",
      "8250253311000000",
      "8250253311100000",
      "8250253312000000",
      "8250253312100000",
      "8250253511000000",
      "8250253512000000",
      "8250253513000000",
      "8250253607000000"
    ],
    "explanations": {
      "es": {
        "short": "一方が2倍、3倍になると、もう一方も2倍、3倍になる関係を比例というよ。二つとも増えるだけでは、比例とは限らないんだ。",
        "detail": "1こ30円の部品を買う設定なら、1こ30円、2こ60円、3こ90円。個数が2倍、3倍になると代金も同じ倍になる。代金＝30×個数だから、個数ごとに30円を足しても調べられる。基本の代金100円が別にかかる場合は、個数を2倍にしても総額は2倍にならない。表の何組かで確かめよう。"
      },
      "js": {
        "short": "簡単な比例関係を、対応表の倍率と式の両方から捉える。増加することと比例することを区別する。",
        "detail": "1こ30円の代金は30×個数で、個数を2倍・3倍すると代金も2倍・3倍となる。対応する正の個数で代金÷個数を調べると30で一定。一方、100＋30×個数では、1こ130円、2こ160円となり2倍ではない。表から関係を推測し、条件や式とも照らし合わせて判断する。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "同じ部品を買う",
        "text": "1こ30円の部品だけを買い、ほかの料金はない設定。2こ60円、4こ120円なので、個数が2倍になると代金も2倍。",
        "activityIds": [
          "craft-accessory"
        ]
      },
      {
        "category": "programming",
        "title": "同じ幅の模様を並べる",
        "text": "幅2cmの模様を、隙間や重なりなく横に並べる。□こなら長さは2×□cm。個数と全体の長さは比例する。",
        "activityIds": [
          "prog-scratch"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "1こ30円の部品を、ほかの料金なしで4こ買う。代金は？",
        "answer": 120,
        "explanation": "30×4＝120円。",
        "hint": "一つ分30円が4こ分。",
        "suffix": "円",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "個数が2倍、3倍のとき、代金も2倍、3倍になる関係を何という？",
        "options": [
          "比例",
          "通分",
          "合同"
        ],
        "answer": "比例",
        "explanation": "対応する二つの数量が同じ倍率で変わる関係を比例という。",
        "hint": "量の変わり方の名前だよ。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "同じ厚さ2mmのカードを6枚重ねる。隙間がなければ全体の厚さは？",
        "answer": 12,
        "explanation": "2×6＝12mm。枚数と厚さが比例する。",
        "hint": "一枚分と枚数を対応させる。",
        "suffix": "mm",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "1こ30円で基本の代金100円が別にかかる。個数と総額は比例する？",
        "options": [
          "比例しない",
          "比例する"
        ],
        "answer": "比例しない",
        "explanation": "1こ130円、2こ160円。個数2倍でも総額は2倍でない。",
        "hint": "一つの例で2倍か確かめよう。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "枚数1、2、3、4に対応する厚さが2、4、6、8mm。枚数が3倍になると厚さは何倍？",
        "answer": 3,
        "explanation": "一枚2mmから三枚6mmへ、6÷2＝3倍。",
        "hint": "1→3と2→6を同時に見よう。",
        "suffix": "倍",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "二つの数が両方増えていれば、必ず比例する？",
        "options": [
          "いいえ。同じ倍率になるか確かめる",
          "はい。増えるなら全て比例"
        ],
        "answer": "いいえ。同じ倍率になるか確かめる",
        "explanation": "例えば一辺と周りは比例するが、一方に一定数を足した関係は一般に比例しない。",
        "hint": "1こ130円、2こ160円の例を考えよう。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "number",
        "prompt": "幅2cmの同じ模様を隙間なく□こ並べる。全長18cmなら何こ？",
        "answer": 9,
        "explanation": "2×□＝18なので18÷2＝9こ。",
        "hint": "一つ分2cmが何こ含まれる？",
        "suffix": "こ",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "正方形の一辺と周りの長さについて正しい説明は？",
        "options": [
          "一辺が3倍なら周りも3倍",
          "一辺が3倍なら周りは9倍",
          "周りは変わらない"
        ],
        "answer": "一辺が3倍なら周りも3倍",
        "explanation": "周り＝一辺×4なので、一辺と同じ倍率で変わる。",
        "hint": "面積でなく、周りの長さを考える。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "number",
      "prompt": "比例の表：1こ30円の部品、5この代金は？ ほかの料金はなし。",
      "answer": 150,
      "explanation": "30×5＝150円。",
      "hint": "1こ分を5倍にする。",
      "suffix": "円",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "表の二つの方向を見る",
      "prompt": "1こ30円の部品の個数と代金が比例するか調べよう。",
      "steps": [
        {
          "text": "個数1、2、3に対し、代金30、60、90円の表を作る。"
        },
        {
          "text": "個数1→2は2倍で、代金30→60も2倍。"
        },
        {
          "text": "個数1→3は3倍で、代金30→90も3倍。"
        },
        {
          "text": "代金＝30×個数という対応が続くので比例する。"
        }
      ],
      "answer": "個数と代金は比例する",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "二つの数量が一緒に増えれば、必ず比例。",
      "correction": "比例では倍率も対応する。100＋30×個数はどちらも増えるが、1こ130円と2こ160円は2倍の関係ではない。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "1こ30円の部品に基本の代金100円を加えると、なぜ比例でなくなる？",
        "followUp": "表に1こ・2この総額を書いて、倍率を比べよう。",
        "checkpoints": [
          "1こ130円、2こ160円を求めた。",
          "2倍なら260円になるはずだが違うと説明した。"
        ],
        "sample": "個数は1こから2こへ2倍でも、総額は130円から160円。130円の2倍260円にはならないので比例しない。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "一方が2倍、3倍になると、もう一方も2倍、3倍になる関係を比例というよ。二つとも増えるだけでは、比例とは限らないんだ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "1こ30円の部品を買う設定なら、1こ30円、2こ60円、3こ90円。個数が2倍、3倍になると代金も同じ倍になる。代金＝30×個数だから、個数ごとに30円を足しても調べられる。基本の代金100円が別にかかる場合は、個数を2倍にしても総額は2倍にならない。表の何組かで確かめよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "簡単な比例関係を、対応表の倍率と式の両方から捉える。増加することと比例することを区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "1こ30円の代金は30×個数で、個数を2倍・3倍すると代金も2倍・3倍となる。対応する正の個数で代金÷個数を調べると30で一定。一方、100＋30×個数では、1こ130円、2こ160円となり2倍ではない。表から関係を推測し、条件や式とも照らし合わせて判断する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "1こ30円の部品だけを買い、ほかの料金はない設定。2こ60円、4こ120円なので、個数が2倍になると代金も2倍。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "幅2cmの模様を、隙間や重なりなく横に並べる。□こなら長さは2×□cm。個数と全体の長さは比例する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "1こ30円の部品を、ほかの料金なしで4こ買う。代金は？ 正答：120。 30×4＝120円。 考える手がかり：一つ分30円が4こ分。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "個数が2倍、3倍のとき、代金も2倍、3倍になる関係を何という？ 正答：比例。 対応する二つの数量が同じ倍率で変わる関係を比例という。 考える手がかり：量の変わり方の名前だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "同じ厚さ2mmのカードを6枚重ねる。隙間がなければ全体の厚さは？ 正答：12。 2×6＝12mm。枚数と厚さが比例する。 考える手がかり：一枚分と枚数を対応させる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "1こ30円で基本の代金100円が別にかかる。個数と総額は比例する？ 正答：比例しない。 1こ130円、2こ160円。個数2倍でも総額は2倍でない。 考える手がかり：一つの例で2倍か確かめよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "枚数1、2、3、4に対応する厚さが2、4、6、8mm。枚数が3倍になると厚さは何倍？ 正答：3。 一枚2mmから三枚6mmへ、6÷2＝3倍。 考える手がかり：1→3と2→6を同時に見よう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "二つの数が両方増えていれば、必ず比例する？ 正答：いいえ。同じ倍率になるか確かめる。 例えば一辺と周りは比例するが、一方に一定数を足した関係は一般に比例しない。 考える手がかり：1こ130円、2こ160円の例を考えよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "幅2cmの同じ模様を隙間なく□こ並べる。全長18cmなら何こ？ 正答：9。 2×□＝18なので18÷2＝9こ。 考える手がかり：一つ分2cmが何こ含まれる？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "正方形の一辺と周りの長さについて正しい説明は？ 正答：一辺が3倍なら周りも3倍。 周り＝一辺×4なので、一辺と同じ倍率で変わる。 考える手がかり：面積でなく、周りの長さを考える。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "比例の表：1こ30円の部品、5この代金は？ ほかの料金はなし。 正答：150。 30×5＝150円。 考える手がかり：1こ分を5倍にする。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "1こ30円の部品に基本の代金100円を加えると、なぜ比例でなくなる？ 表に1こ・2この総額を書いて、倍率を比べよう。 個数は1こから2こへ2倍でも、総額は130円から160円。130円の2倍260円にはならないので比例しない。 確認項目：1こ130円、2こ160円を求めた。 / 2倍なら260円になるはずだが違うと説明した。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "1こ30円の部品の個数と代金が比例するか調べよう。 個数1、2、3に対し、代金30、60、90円の表を作る。 個数1→2は2倍で、代金30→60も2倍。 個数1→3は3倍で、代金30→90も3倍。 代金＝30×個数という対応が続くので比例する。 結論：個数と代金は比例する",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「二つの数量が一緒に増えれば、必ず比例。」は誤り。比例では倍率も対応する。100＋30×個数はどちらも増えるが、1こ130円と2こ160円は2倍の関係ではない。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "単位量が一定の個数と代金は代金=単価×個数で比例する。正の個数を2倍・3倍にすると代金も同じ倍。単価30円で1,2,3こは30,60,90円。固定額100を加えた100+30×個数は比例しない。水が0Lの容器に毎分rLの一定の割合で入れると、t分後の水量はr×tLで比例する（図ではr=1..5、t=0..6、こぼれや流出はない）。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "verified",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "例の登場物を同じ数量・単位・条件を保った架空の物へ置き換える。",
        "問いの意味と正答を保ち、短い文へ言い換える。"
      ],
      "forbidden": [
        "数・単位・全体の大きさ・等分の条件・対応関係・正答を変更しない。",
        "誤りの選択肢や誤解の例を正しい主張として説明しない。",
        "claimsの範囲外の定義や公式を足さない。",
        "個人情報・実在する人の記録・外部作品の仕様を加えない。"
      ]
    }
  },
  {
    "code": "8250253321100000",
    "grade": 5,
    "title": "単位量当たりの大きさ",
    "domain": "C",
    "order": 19,
    "goal": "一方の量を同じ1にそろえ、混み具合や代金を比べる。",
    "coverageCodes": [
      "8250252100000000",
      "8250252200000000",
      "8250252300000000",
      "8250253320000000",
      "8250253321000000",
      "8250253321100000",
      "8250253322000000",
      "8250253322100000",
      "8250253511000000",
      "8250253512000000",
      "8250253513000000"
    ],
    "explanations": {
      "es": {
        "short": "広さも人数も違う場所の混み具合は、そのままでは比べにくいね。1m²当たりの人数にそろえてみよう。",
        "detail": "Aは3m²に6人、Bは5m²に8人いる設定。人数だけならBが多いけれど、1m²当たりはAが6÷3＝2人、Bが8÷5＝1.6人。等しくならすとAの方が混んでいる。1人当たりの広さでも比べられるが、その場合は小さい方が混んでいる。何を1にそろえたか、単位まで伝えよう。"
      },
      "js": {
        "short": "異なる二量の比を一方の単位量当たりに直して比較する。商の単位と大小の意味を一緒に判断する。",
        "detail": "人数÷面積は1m²当たり人数で、大きいほど混んでいる。面積÷人数は1人当たり面積で、小さいほど混んでいる。6人/3m²＝2人/m²、8人/5m²＝1.6人/m²なので前者が混む。単価なら代金÷個数や代金÷重さで求められ、比較対象で単位と向きをそろえる必要がある。"
      }
    },
    "entries": [
      {
        "category": "minecraft",
        "title": "同じ広さで混み具合を比べる",
        "text": "架空の二つの広場を考える。Aは3m²に6体、Bは5m²に8体。1m²当たり2体と1.6体なので、Aの方が混んでいる。",
        "activityIds": [
          "mc-build"
        ]
      },
      {
        "category": "craft",
        "title": "材料の代金を比べる",
        "text": "同じ材料で300gが240円、500gが350円という設定。100g当たり80円と70円にそろえると、500gの方が同じ重さ当たり安い。",
        "activityIds": [
          "craft-accessory"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "3m²に6人いる。1m²当たりの人数は？",
        "answer": 2,
        "explanation": "6÷3＝2人。",
        "hint": "広さ3m²を1m²ずつに分ける。",
        "suffix": "人",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "5m²に8人いる。1m²当たりの人数は？",
        "answer": 1.6,
        "explanation": "8÷5＝1.6人。平均してならした人数を表す。",
        "hint": "人数を広さで割ろう。",
        "suffix": "人",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "Aは3m²に6人、Bは5m²に8人。混んでいるのは？",
        "options": [
          "A",
          "B",
          "同じ"
        ],
        "answer": "A",
        "explanation": "1m²当たりAは2人、Bは1.6人なのでA。",
        "hint": "人数の合計ではなく同じ広さにそろえる。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "4m²に8人いる。1人当たりの広さは何m²？",
        "answer": 0.5,
        "explanation": "4÷8＝0.5m²。",
        "hint": "今度は人数を1人にそろえる。",
        "suffix": "m²",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "1人当たりの広さで混み具合を比べるとき、混んでいるのは？",
        "options": [
          "1人当たりの広さが小さい方",
          "1人当たりの広さが大きい方",
          "人数に関係なく同じ"
        ],
        "answer": "1人当たりの広さが小さい方",
        "explanation": "一人が使える広さが小さい方が混んでいる。",
        "hint": "1人が1m²使える場合と0.5m²使える場合を比べよう。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "同じ材料300gが240円。100g当たりの代金は？",
        "answer": 80,
        "explanation": "300gは100gが3こ分なので、240÷3＝80円。",
        "hint": "100gのまとまりがいくつある？",
        "suffix": "円",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "number",
        "prompt": "同じ材料500gが350円。100g当たりの代金は？",
        "answer": 70,
        "explanation": "350÷5＝70円。",
        "hint": "500gを100gずつに分けよう。",
        "suffix": "円",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "Aは1こ当たり30円、Bは10こ当たり250円。そのまま30と250を比べてよい？",
        "options": [
          "だめ。Bも1こ当たり25円へそろえる",
          "よい。30の方が小さいからAが安い"
        ],
        "answer": "だめ。Bも1こ当たり25円へそろえる",
        "explanation": "比較する個数の単位が異なる。Bは250÷10＝25円/こ。",
        "hint": "同じ一つ分を比べているか確かめよう。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "number",
      "prompt": "同じ広さカード：12m²に18体いる架空の広場。1m²当たり何体？",
      "answer": 1.5,
      "explanation": "18÷12＝1.5体。",
      "hint": "人数を面積で割って、1m²当たりへ。",
      "suffix": "体",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "広さを1m²にそろえる",
      "prompt": "Aは3m²に6人、Bは5m²に8人。どちらが混んでいる？",
      "steps": [
        {
          "text": "人数も広さも違うので、合計人数だけで決めない。"
        },
        {
          "text": "Aを1m²当たりにそろえると6÷3＝2人。"
        },
        {
          "text": "Bも同じ1m²当たりで8÷5＝1.6人。"
        },
        {
          "text": "同じ広さに多くいる2人のAが混んでいる。"
        }
      ],
      "answer": "Aの方が混んでいる",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "人数が多い場所は、広さに関係なく必ず混んでいる。",
      "correction": "人数と広さの両方を考える。1m²当たりの人数など、同じ単位量にそろえて比べる。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "混み具合を比べるのに、6÷3と8÷5では何を1にそろえている？",
        "followUp": "1人当たりの広さで比べる場合、大小の意味はどう変わる？",
        "checkpoints": [
          "面積を1m²にそろえたと説明した。",
          "1人当たり面積なら小さい方が混むと説明した。"
        ],
        "sample": "人数を面積で割り1m²当たりにしている。面積を人数で割って1人当たりにしたときは、小さい方が混んでいる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "広さも人数も違う場所の混み具合は、そのままでは比べにくいね。1m²当たりの人数にそろえてみよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "Aは3m²に6人、Bは5m²に8人いる設定。人数だけならBが多いけれど、1m²当たりはAが6÷3＝2人、Bが8÷5＝1.6人。等しくならすとAの方が混んでいる。1人当たりの広さでも比べられるが、その場合は小さい方が混んでいる。何を1にそろえたか、単位まで伝えよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "異なる二量の比を一方の単位量当たりに直して比較する。商の単位と大小の意味を一緒に判断する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "人数÷面積は1m²当たり人数で、大きいほど混んでいる。面積÷人数は1人当たり面積で、小さいほど混んでいる。6人/3m²＝2人/m²、8人/5m²＝1.6人/m²なので前者が混む。単価なら代金÷個数や代金÷重さで求められ、比較対象で単位と向きをそろえる必要がある。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の二つの広場を考える。Aは3m²に6体、Bは5m²に8体。1m²当たり2体と1.6体なので、Aの方が混んでいる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "同じ材料で300gが240円、500gが350円という設定。100g当たり80円と70円にそろえると、500gの方が同じ重さ当たり安い。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "3m²に6人いる。1m²当たりの人数は？ 正答：2。 6÷3＝2人。 考える手がかり：広さ3m²を1m²ずつに分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "5m²に8人いる。1m²当たりの人数は？ 正答：1.6。 8÷5＝1.6人。平均してならした人数を表す。 考える手がかり：人数を広さで割ろう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "Aは3m²に6人、Bは5m²に8人。混んでいるのは？ 正答：A。 1m²当たりAは2人、Bは1.6人なのでA。 考える手がかり：人数の合計ではなく同じ広さにそろえる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "4m²に8人いる。1人当たりの広さは何m²？ 正答：0.5。 4÷8＝0.5m²。 考える手がかり：今度は人数を1人にそろえる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "1人当たりの広さで混み具合を比べるとき、混んでいるのは？ 正答：1人当たりの広さが小さい方。 一人が使える広さが小さい方が混んでいる。 考える手がかり：1人が1m²使える場合と0.5m²使える場合を比べよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "同じ材料300gが240円。100g当たりの代金は？ 正答：80。 300gは100gが3こ分なので、240÷3＝80円。 考える手がかり：100gのまとまりがいくつある？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "同じ材料500gが350円。100g当たりの代金は？ 正答：70。 350÷5＝70円。 考える手がかり：500gを100gずつに分けよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "Aは1こ当たり30円、Bは10こ当たり250円。そのまま30と250を比べてよい？ 正答：だめ。Bも1こ当たり25円へそろえる。 比較する個数の単位が異なる。Bは250÷10＝25円/こ。 考える手がかり：同じ一つ分を比べているか確かめよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "同じ広さカード：12m²に18体いる架空の広場。1m²当たり何体？ 正答：1.5。 18÷12＝1.5体。 考える手がかり：人数を面積で割って、1m²当たりへ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "混み具合を比べるのに、6÷3と8÷5では何を1にそろえている？ 1人当たりの広さで比べる場合、大小の意味はどう変わる？ 人数を面積で割り1m²当たりにしている。面積を人数で割って1人当たりにしたときは、小さい方が混んでいる。 確認項目：面積を1m²にそろえたと説明した。 / 1人当たり面積なら小さい方が混むと説明した。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "Aは3m²に6人、Bは5m²に8人。どちらが混んでいる？ 人数も広さも違うので、合計人数だけで決めない。 Aを1m²当たりにそろえると6÷3＝2人。 Bも同じ1m²当たりで8÷5＝1.6人。 同じ広さに多くいる2人のAが混んでいる。 結論：Aの方が混んでいる",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「人数が多い場所は、広さに関係なく必ず混んでいる。」は誤り。人数と広さの両方を考える。1m²当たりの人数など、同じ単位量にそろえて比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "人数÷面積=単位面積当たり人数で、大きいほど混雑する。面積÷人数=1人当たり面積で、小さいほど混雑する。6/3=2、8/5=1.6。単価は代金÷個数や重さで、比較時には分母の単位と倍率をそろえる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "verified",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "例の登場物を同じ数量・単位・条件を保った架空の物へ置き換える。",
        "問いの意味と正答を保ち、短い文へ言い換える。"
      ],
      "forbidden": [
        "数・単位・全体の大きさ・等分の条件・対応関係・正答を変更しない。",
        "誤りの選択肢や誤解の例を正しい主張として説明しない。",
        "claimsの範囲外の定義や公式を足さない。",
        "個人情報・実在する人の記録・外部作品の仕様を加えない。"
      ]
    }
  },
  {
    "code": "8250253320000000",
    "grade": 5,
    "title": "速さ",
    "domain": "C",
    "order": 20,
    "goal": "道のりと時間をそろえて比べ、速さ・道のり・時間を求める。",
    "coverageCodes": [
      "8250252100000000",
      "8250252200000000",
      "8250252300000000",
      "8250253320000000",
      "8250253321000000",
      "8250253321100000",
      "8250253322000000",
      "8250253322100000",
      "8250253511000000",
      "8250253512000000",
      "8250253513000000"
    ],
    "explanations": {
      "es": {
        "short": "速さは、同じ時間にどれだけ進むか。120mを30秒で進むと、1秒当たり120÷30＝4mだよ。",
        "detail": "道のりだけ、時間だけでは比べられないときは、1秒や1分当たりへそろえる。速さ＝道のり÷時間。速さが一定なら、道のり＝速さ×時間、時間＝道のり÷速さと考えられる。分と秒、kmとmが混ざっていたら先にそろえよう。1分は60秒で、小数の0.5分は30秒だよ。"
      },
      "js": {
        "short": "速さは単位時間当たりの道のり。道のり・時間・速さの対応を、数直線と式で捉える。",
        "detail": "120mを30秒で進む平均の速さは4m/秒。一定の速さ4m/秒で15秒進めば60m、100m進む時間は25秒。単位が異なる比較では、1分＝60秒、1時間＝60分、1km＝1000mを使って統一する。速さが途中で変わる場合の全体の道のり÷時間は、各瞬間の速さを表すものではない。"
      }
    },
    "entries": [
      {
        "category": "programming",
        "title": "画面の中を進む",
        "text": "架空の画面で点が1秒に4cmずつ一定に進む。5秒で20cm。時間を2倍にすると進む長さも2倍になる。",
        "activityIds": [
          "prog-scratch"
        ]
      },
      {
        "category": "digital",
        "title": "模型の移動を比べる",
        "text": "Aは120cmを30秒、Bは100cmを20秒で進んだ設定。1秒当たりAは4cm、Bは5cmなのでBが速い。",
        "activityIds": [
          "dig-stormworks"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "120mを30秒で進んだ。1秒当たりの速さは何m？",
        "answer": 4,
        "explanation": "120÷30＝4m/秒。",
        "hint": "30秒分を1秒分へ分ける。",
        "suffix": "m",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "1秒に4mの一定の速さで15秒進む。道のりは？",
        "answer": 60,
        "explanation": "4×15＝60m。",
        "hint": "1秒分が15こ分。",
        "suffix": "m",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "一定の速さ4m/秒で100m進む。何秒かかる？",
        "answer": 25,
        "explanation": "100÷4＝25秒。",
        "hint": "1秒分4mが100mに何こ入る？",
        "suffix": "秒",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "Aは120mを30秒、Bは100mを20秒で進んだ。平均の速さが大きいのは？",
        "options": [
          "B",
          "A",
          "同じ"
        ],
        "answer": "B",
        "explanation": "Aは4m/秒、Bは5m/秒。同じ1秒当たりで比べる。",
        "hint": "道のりだけで判断せず、時間も使おう。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "1分に120mの速さは、1秒当たり何m？",
        "answer": 2,
        "explanation": "1分＝60秒なので120÷60＝2m/秒。",
        "hint": "120mは60秒分だよ。",
        "suffix": "m",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "1時間に6kmの速さは、1分当たり何m？",
        "answer": 100,
        "explanation": "6km＝6000m、1時間＝60分。6000÷60＝100m/分。",
        "hint": "長さと時間の両方の単位を直そう。",
        "suffix": "m",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "0.5分は何秒？",
        "options": [
          "30秒",
          "5秒",
          "50秒"
        ],
        "answer": "30秒",
        "explanation": "0.5分は1分60秒の半分なので30秒。",
        "hint": "分を10進数のまま秒へ読み替えない。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "道のり÷時間で求めた全体の平均の速さが4m/秒なら、途中も必ずずっと4m/秒？",
        "options": [
          "いいえ。途中で速さが変わっている場合もある",
          "はい。必ずずっと同じ"
        ],
        "answer": "いいえ。途中で速さが変わっている場合もある",
        "explanation": "全体の道のりと時間から求める値で、途中の変化までは分からない。",
        "hint": "途中で止まったり速く進んだりできるかな？",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "number",
      "prompt": "模型の移動：90cmを15秒で進む。1秒当たり何cm？",
      "answer": 6,
      "explanation": "90÷15＝6cm/秒。",
      "hint": "15秒分を等しく1秒ずつへ。",
      "suffix": "cm",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "同じ時間で比べる",
      "prompt": "Aは120mを30秒、Bは100mを20秒で進んだ。どちらが速い？",
      "steps": [
        {
          "text": "Aは道のりが長いが時間も長いので、そのまま決めない。"
        },
        {
          "text": "Aの1秒当たりは120÷30＝4m。"
        },
        {
          "text": "Bも1秒当たりにし、100÷20＝5m。"
        },
        {
          "text": "同じ1秒で多く進むBの方が平均の速さは大きい。"
        }
      ],
      "answer": "Bの方が速い",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "長い道のりを進んだ方が、必ず速い。",
      "correction": "進んだ時間も必要。同じ時間当たりにそろえると、道のりが短かった方の速さが大きい場合もある。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "120mを30秒で進む速さを、なぜ120÷30で求める？",
        "followUp": "4m/秒で15秒進む式が4×15になる理由も説明しよう。",
        "checkpoints": [
          "30秒分の道のりを1秒分へ分けたと説明した。",
          "1秒分4mを15こ分集めたと説明した。"
        ],
        "sample": "120mは30秒で進んだ全体だから、30で割ると1秒分の4mになる。一定に進む15秒の道のりは、その4mを15こ分集めて60m。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "速さは、同じ時間にどれだけ進むか。120mを30秒で進むと、1秒当たり120÷30＝4mだよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "道のりだけ、時間だけでは比べられないときは、1秒や1分当たりへそろえる。速さ＝道のり÷時間。速さが一定なら、道のり＝速さ×時間、時間＝道のり÷速さと考えられる。分と秒、kmとmが混ざっていたら先にそろえよう。1分は60秒で、小数の0.5分は30秒だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "速さは単位時間当たりの道のり。道のり・時間・速さの対応を、数直線と式で捉える。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "120mを30秒で進む平均の速さは4m/秒。一定の速さ4m/秒で15秒進めば60m、100m進む時間は25秒。単位が異なる比較では、1分＝60秒、1時間＝60分、1km＝1000mを使って統一する。速さが途中で変わる場合の全体の道のり÷時間は、各瞬間の速さを表すものではない。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の画面で点が1秒に4cmずつ一定に進む。5秒で20cm。時間を2倍にすると進む長さも2倍になる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "Aは120cmを30秒、Bは100cmを20秒で進んだ設定。1秒当たりAは4cm、Bは5cmなのでBが速い。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "120mを30秒で進んだ。1秒当たりの速さは何m？ 正答：4。 120÷30＝4m/秒。 考える手がかり：30秒分を1秒分へ分ける。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "1秒に4mの一定の速さで15秒進む。道のりは？ 正答：60。 4×15＝60m。 考える手がかり：1秒分が15こ分。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "一定の速さ4m/秒で100m進む。何秒かかる？ 正答：25。 100÷4＝25秒。 考える手がかり：1秒分4mが100mに何こ入る？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "Aは120mを30秒、Bは100mを20秒で進んだ。平均の速さが大きいのは？ 正答：B。 Aは4m/秒、Bは5m/秒。同じ1秒当たりで比べる。 考える手がかり：道のりだけで判断せず、時間も使おう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "1分に120mの速さは、1秒当たり何m？ 正答：2。 1分＝60秒なので120÷60＝2m/秒。 考える手がかり：120mは60秒分だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "1時間に6kmの速さは、1分当たり何m？ 正答：100。 6km＝6000m、1時間＝60分。6000÷60＝100m/分。 考える手がかり：長さと時間の両方の単位を直そう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "0.5分は何秒？ 正答：30秒。 0.5分は1分60秒の半分なので30秒。 考える手がかり：分を10進数のまま秒へ読み替えない。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "道のり÷時間で求めた全体の平均の速さが4m/秒なら、途中も必ずずっと4m/秒？ 正答：いいえ。途中で速さが変わっている場合もある。 全体の道のりと時間から求める値で、途中の変化までは分からない。 考える手がかり：途中で止まったり速く進んだりできるかな？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "模型の移動：90cmを15秒で進む。1秒当たり何cm？ 正答：6。 90÷15＝6cm/秒。 考える手がかり：15秒分を等しく1秒ずつへ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "120mを30秒で進む速さを、なぜ120÷30で求める？ 4m/秒で15秒進む式が4×15になる理由も説明しよう。 120mは30秒で進んだ全体だから、30で割ると1秒分の4mになる。一定に進む15秒の道のりは、その4mを15こ分集めて60m。 確認項目：30秒分の道のりを1秒分へ分けたと説明した。 / 1秒分4mを15こ分集めたと説明した。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "Aは120mを30秒、Bは100mを20秒で進んだ。どちらが速い？ Aは道のりが長いが時間も長いので、そのまま決めない。 Aの1秒当たりは120÷30＝4m。 Bも1秒当たりにし、100÷20＝5m。 同じ1秒で多く進むBの方が平均の速さは大きい。 結論：Bの方が速い",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「長い道のりを進んだ方が、必ず速い。」は誤り。進んだ時間も必要。同じ時間当たりにそろえると、道のりが短かった方の速さが大きい場合もある。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "速さ=道のり÷時間。一定の速さでは道のり=速さ×時間、時間=道のり÷速さ。120m/30秒=4m/秒、4m/秒×15秒=60m。1分60秒、1時間60分、1km1000m。全体の道のり/時間は平均の速さであり瞬間ごとの一定を保証しない。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "verified",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "例の登場物を同じ数量・単位・条件を保った架空の物へ置き換える。",
        "問いの意味と正答を保ち、短い文へ言い換える。"
      ],
      "forbidden": [
        "数・単位・全体の大きさ・等分の条件・対応関係・正答を変更しない。",
        "誤りの選択肢や誤解の例を正しい主張として説明しない。",
        "claimsの範囲外の定義や公式を足さない。",
        "個人情報・実在する人の記録・外部作品の仕様を加えない。"
      ]
    }
  },
  {
    "code": "8250253331100000",
    "grade": 5,
    "title": "割合で比べる",
    "domain": "C",
    "order": 21,
    "goal": "何を1と見るかを決め、二つの数量の関係を割合で比べる。",
    "coverageCodes": [
      "8250252100000000",
      "8250252200000000",
      "8250252300000000",
      "8250253330000000",
      "8250253331000000",
      "8250253331100000",
      "8250253332000000",
      "8250253332100000",
      "8250253511000000",
      "8250253512000000",
      "8250253513000000"
    ],
    "explanations": {
      "es": {
        "short": "20このうち8こを使ったら、20こを1と見て8÷20＝0.4。基準の量に対してどれくらいかを表す数が割合だよ。",
        "detail": "Aは10このうち6こ、Bは20このうち8こ使った設定。使った個数はBが多いけれど、全体に対する割合はAが6÷10＝0.6、Bが8÷20＝0.4でAが大きい。比べる量÷基準にする量で求める。どちらを1と見るかを先に決め、二本のテープで対応させよう。"
      },
      "js": {
        "short": "割合は比較量÷基準量で求める。同種の数量の関係を、基準量を1とした数で表す。",
        "detail": "基準量20こ、比較量8こなら割合は8÷20＝0.4。比較量＝基準量×割合なので、割合が0より大きければ、基準量が未知のときは比較量÷割合で求められる。8÷20と20÷8は基準が逆で値も異なる。全体に占める部分では割合は0以上1以下だが、別の量に対する倍率なら1を超える場合もある。"
      }
    },
    "entries": [
      {
        "category": "minecraft",
        "title": "ブロックの使用割合",
        "text": "架空の建築で、用意した20このうち8こを使った。20こを1とする割合は0.4。別の計画で10このうち6こなら0.6なので、使った割合は後者が大きい。",
        "activityIds": [
          "mc-build"
        ]
      },
      {
        "category": "media",
        "title": "制作時間の一部分",
        "text": "架空の短い動画20秒のうち8秒をタイトルに使う。全体を1としたタイトルの割合は8÷20＝0.4。",
        "activityIds": [
          "media-movie"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "20このうち8こを使った。全体に対する使った割合は？（小数で）",
        "answer": 0.4,
        "explanation": "8÷20＝0.4。基準にする量は20こ。",
        "hint": "何を1と見るか決めてから割ろう。",
        "suffix": "",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "8÷20で割合を求めるとき、基準にする量は？",
        "options": [
          "20こ",
          "8こ",
          "28こ"
        ],
        "answer": "20こ",
        "explanation": "分母側の20こを1とみて、8こがどれだけかを求めている。",
        "hint": "全体を1とするテープはどちら？",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "Aは10このうち6こ、Bは20このうち8こ使った。使った割合が大きいのは？",
        "options": [
          "A",
          "B",
          "同じ"
        ],
        "answer": "A",
        "explanation": "Aは0.6、Bは0.4なのでA。個数だけの大小とは違う。",
        "hint": "二つとも全体を1にそろえよう。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "基準にする量が30m、割合が0.4。比べる量は何m？",
        "answer": 12,
        "explanation": "30×0.4＝12m。",
        "hint": "基準の量の0.4倍を求める。",
        "suffix": "m",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "使った8こが全体の0.4に当たる。全体は何こ？",
        "answer": 20,
        "explanation": "全体×0.4＝8だから8÷0.4＝20こ。",
        "hint": "かけ算の関係を先に作ろう。",
        "suffix": "こ",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "20こを基準に8こを比べる割合と、8こを基準に20こを比べる割合は？",
        "options": [
          "基準が違うので同じではない",
          "数字が同じなので等しい"
        ],
        "answer": "基準が違うので同じではない",
        "explanation": "8÷20＝0.4、20÷8＝2.5で異なる。",
        "hint": "どちらの量を1と見るかで変わる。",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "number",
        "prompt": "長さ10cmを基準に、長さ15cmを比べる割合は？",
        "answer": 1.5,
        "explanation": "15÷10＝1.5。比べる量が基準より大きいので1を超える。",
        "hint": "これは全体の中の部分ではなく、二つの長さの比較。",
        "suffix": "",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "「8こ使った」だけで、全体に対する割合は分かる？",
        "options": [
          "全体の個数も必要",
          "8という数字だけで分かる"
        ],
        "answer": "全体の個数も必要",
        "explanation": "割合には比較量8こと基準量の両方が必要。",
        "hint": "全体が10この場合と20この場合を考えよう。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "number",
      "prompt": "テープの割合：12cmを基準にした3cmの割合は？",
      "answer": 0.25,
      "explanation": "3÷12＝0.25。",
      "hint": "12cmを1としたときの3cm。",
      "suffix": "",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "全体を1にそろえる",
      "prompt": "20このうち8こを使った割合を求めよう。",
      "steps": [
        {
          "text": "全体20こを基準にする量として、1と見る。"
        },
        {
          "text": "比べる量は使った8こ。"
        },
        {
          "text": "20×割合＝8なので、割合は8÷20。"
        },
        {
          "text": "8÷20＝0.4。全体を10等分した4こ分と同じ割合。"
        }
      ],
      "answer": "0.4",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "使った個数が多ければ、使った割合も必ず大きい。",
      "correction": "全体の個数が違うと割合の大小は変わる。6/10＝0.6は8/20＝0.4より大きい。基準をそろえて比べる。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "20このうち8こを使った割合0.4の、1に当たる量は何？",
        "followUp": "全体40こに対して同じ割合0.4なら、使う個数はどうなる？",
        "checkpoints": [
          "1に当たる量は全体20こと説明した。",
          "40×0.4＝16こを求めた。"
        ],
        "sample": "1は全体の20こ。全体が40こに変わって同じ割合なら、40×0.4＝16こを使う。割合が同じでも個数は変わる。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "20このうち8こを使ったら、20こを1と見て8÷20＝0.4。基準の量に対してどれくらいかを表す数が割合だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "Aは10このうち6こ、Bは20このうち8こ使った設定。使った個数はBが多いけれど、全体に対する割合はAが6÷10＝0.6、Bが8÷20＝0.4でAが大きい。比べる量÷基準にする量で求める。どちらを1と見るかを先に決め、二本のテープで対応させよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "割合は比較量÷基準量で求める。同種の数量の関係を、基準量を1とした数で表す。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "基準量20こ、比較量8こなら割合は8÷20＝0.4。比較量＝基準量×割合なので、割合が0より大きければ、基準量が未知のときは比較量÷割合で求められる。8÷20と20÷8は基準が逆で値も異なる。全体に占める部分では割合は0以上1以下だが、別の量に対する倍率なら1を超える場合もある。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の建築で、用意した20このうち8こを使った。20こを1とする割合は0.4。別の計画で10このうち6こなら0.6なので、使った割合は後者が大きい。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の短い動画20秒のうち8秒をタイトルに使う。全体を1としたタイトルの割合は8÷20＝0.4。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "20このうち8こを使った。全体に対する使った割合は？（小数で） 正答：0.4。 8÷20＝0.4。基準にする量は20こ。 考える手がかり：何を1と見るか決めてから割ろう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "8÷20で割合を求めるとき、基準にする量は？ 正答：20こ。 分母側の20こを1とみて、8こがどれだけかを求めている。 考える手がかり：全体を1とするテープはどちら？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "Aは10このうち6こ、Bは20このうち8こ使った。使った割合が大きいのは？ 正答：A。 Aは0.6、Bは0.4なのでA。個数だけの大小とは違う。 考える手がかり：二つとも全体を1にそろえよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "基準にする量が30m、割合が0.4。比べる量は何m？ 正答：12。 30×0.4＝12m。 考える手がかり：基準の量の0.4倍を求める。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "使った8こが全体の0.4に当たる。全体は何こ？ 正答：20。 全体×0.4＝8だから8÷0.4＝20こ。 考える手がかり：かけ算の関係を先に作ろう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "20こを基準に8こを比べる割合と、8こを基準に20こを比べる割合は？ 正答：基準が違うので同じではない。 8÷20＝0.4、20÷8＝2.5で異なる。 考える手がかり：どちらの量を1と見るかで変わる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "長さ10cmを基準に、長さ15cmを比べる割合は？ 正答：1.5。 15÷10＝1.5。比べる量が基準より大きいので1を超える。 考える手がかり：これは全体の中の部分ではなく、二つの長さの比較。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "「8こ使った」だけで、全体に対する割合は分かる？ 正答：全体の個数も必要。 割合には比較量8こと基準量の両方が必要。 考える手がかり：全体が10この場合と20この場合を考えよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "テープの割合：12cmを基準にした3cmの割合は？ 正答：0.25。 3÷12＝0.25。 考える手がかり：12cmを1としたときの3cm。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "20このうち8こを使った割合0.4の、1に当たる量は何？ 全体40こに対して同じ割合0.4なら、使う個数はどうなる？ 1は全体の20こ。全体が40こに変わって同じ割合なら、40×0.4＝16こを使う。割合が同じでも個数は変わる。 確認項目：1に当たる量は全体20こと説明した。 / 40×0.4＝16こを求めた。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "20このうち8こを使った割合を求めよう。 全体20こを基準にする量として、1と見る。 比べる量は使った8こ。 20×割合＝8なので、割合は8÷20。 8÷20＝0.4。全体を10等分した4こ分と同じ割合。 結論：0.4",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「使った個数が多ければ、使った割合も必ず大きい。」は誤り。全体の個数が違うと割合の大小は変わる。6/10＝0.6は8/20＝0.4より大きい。基準をそろえて比べる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "同種量の割合=比較量÷基準量（基準量>0）。比較量=基準量×割合。20このうち8こは8/20=0.4=40%。基準を入れ替えると20/8=2.5。全体に占める部分の割合0..1と、別の量に対する1を超える倍率を区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "motion",
        "text": "全体20こを1とするテープと、使用8このテープを同じ1この尺度で描く。8÷20=0.4。全体を10等分すると1区画2こで、8こは4区画に当たる。0.4=40%。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "verified",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "例の登場物を同じ数量・単位・条件を保った架空の物へ置き換える。",
        "問いの意味と正答を保ち、短い文へ言い換える。"
      ],
      "forbidden": [
        "数・単位・全体の大きさ・等分の条件・対応関係・正答を変更しない。",
        "誤りの選択肢や誤解の例を正しい主張として説明しない。",
        "claimsの範囲外の定義や公式を足さない。",
        "個人情報・実在する人の記録・外部作品の仕様を加えない。"
      ]
    }
  },
  {
    "code": "8250253331200000",
    "grade": 5,
    "title": "百分率と歩合",
    "domain": "C",
    "order": 22,
    "goal": "割合を百分率や歩合で表し、元の量を確かめて使う。",
    "coverageCodes": [
      "8250252100000000",
      "8250252200000000",
      "8250252300000000",
      "8250253330000000",
      "8250253331000000",
      "8250253331100000",
      "8250253331200000",
      "8250253332000000",
      "8250253332100000",
      "8250253511000000",
      "8250253512000000",
      "8250253513000000",
      "8250253608000000",
      "8250255400000000"
    ],
    "explanations": {
      "es": {
        "short": "全体を100とした割合が百分率。0.4は40%。歩合（ぶあい）では4割と表すよ。",
        "detail": "割合1が100%、0.01が1%。0.25なら25%で、歩合では2割5分。1割は0.1、1分は0.01、1厘は0.001を表す。元の値段200円の20%分は40円。20%引きなら引いた後は80%なので160円になる。「20%分」と「20%引きの後」を分けよう。"
      },
      "js": {
        "short": "百分率は基準量を100とする表現で、割合×100が%の数値。歩合では割・分・厘で表す。",
        "detail": "割合0.4＝40%＝4割。1割＝10%、1分＝1%、1厘＝0.1%である。150の20%は150×0.2＝30。値引きや増量では、どの量を元の100%としたかを固定する。200円の20%引きは200×(1−0.2)＝160円。比較量が基準量を超える場合は120%のような表現も使える。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "材料を使った割合",
        "text": "100この材料のうち25こ使う設定なら25%。歩合では2割5分で、1/4を使ったことにもなる。",
        "activityIds": [
          "craft-accessory"
        ]
      },
      {
        "category": "media",
        "title": "動画の時間配分",
        "text": "架空の40秒の動画で、全体の25%を説明に使う。40×0.25＝10秒。100%は元の40秒である。",
        "activityIds": [
          "media-movie"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "割合0.4は何%？",
        "answer": 40,
        "explanation": "0.4×100＝40%。",
        "hint": "割合1が100%に対応する。",
        "suffix": "%",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "25%を小数の割合で表すと？",
        "answer": 0.25,
        "explanation": "25÷100＝0.25。",
        "hint": "100%を1に戻そう。",
        "suffix": "",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "150この20%は何こ？",
        "answer": 30,
        "explanation": "150×0.2＝30こ。",
        "hint": "20%を小数の割合へ直す。",
        "suffix": "こ",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "number",
        "prompt": "200円の品物を20%引きにする架空の設定。値引き後はいくら？",
        "answer": 160,
        "explanation": "値引き分40円を引くと160円。残る80%で200×0.8とも求められる。",
        "hint": "求めるのは引いた金額か、引いた後の金額かを確かめる。",
        "suffix": "円",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "2割5分を百分率で表すと？",
        "options": [
          "25%",
          "2.5%",
          "250%"
        ],
        "answer": "25%",
        "explanation": "2割＝20%、5分＝5%なので25%。",
        "hint": "ここでの分は歩合の単位で1%。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "歩合の3厘は何%？",
        "answer": 0.3,
        "explanation": "1厘は0.001＝0.1%。3厘は0.3%。",
        "hint": "1割、1分、1厘は一桁ずつ小さくなる。",
        "suffix": "%",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "number",
        "prompt": "基準の長さ10cmに対して12cmは何%？",
        "answer": 120,
        "explanation": "12÷10＝1.2、百分率では120%。",
        "hint": "比べる量が基準より大きいので100%を超える。",
        "suffix": "%",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "20%引きの後に元の量として残る割合は？",
        "options": [
          "80%",
          "20%",
          "120%"
        ],
        "answer": "80%",
        "explanation": "元の100%から20%を引いて80%。",
        "hint": "全体100%のどちら側を求める？",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "number",
      "prompt": "100マスカード：100マスのうち35マスをぬった。ぬった割合は何%？",
      "answer": 35,
      "explanation": "35÷100＝0.35＝35%。",
      "hint": "100こにそろっているので、その数が%になる。",
      "suffix": "%",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "値引き後を求める",
      "prompt": "200円の20%引き。残る代金はいくら？",
      "steps": [
        {
          "text": "元の200円を100%とする。"
        },
        {
          "text": "20%分は200×0.2＝40円。"
        },
        {
          "text": "値引き分40円を元の200円から引く。"
        },
        {
          "text": "200−40＝160円。残る80%で200×0.8とも確かめる。"
        }
      ],
      "answer": "160円",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "20%引きの値段は、元の値段の20%。",
      "correction": "20%は引く分。引いた後に残るのは100%−20%＝80%。元の200円なら、40円引いて160円が残る。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "0.25、25%、2割5分が同じ割合であることを説明しよう。",
        "followUp": "200この25%なら、何こに当たる？",
        "checkpoints": [
          "割合1を基準に0.25＝25/100と説明した。",
          "2割と5分を0.2と0.05に直して合わせた。"
        ],
        "sample": "0.25は100分の25だから25%。2割は0.2、5分は0.05で合わせて0.25。200この場合は200×0.25＝50こ。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "全体を100とした割合が百分率。0.4は40%。歩合（ぶあい）では4割と表すよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "割合1が100%、0.01が1%。0.25なら25%で、歩合では2割5分。1割は0.1、1分は0.01、1厘は0.001を表す。元の値段200円の20%分は40円。20%引きなら引いた後は80%なので160円になる。「20%分」と「20%引きの後」を分けよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "百分率は基準量を100とする表現で、割合×100が%の数値。歩合では割・分・厘で表す。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "割合0.4＝40%＝4割。1割＝10%、1分＝1%、1厘＝0.1%である。150の20%は150×0.2＝30。値引きや増量では、どの量を元の100%としたかを固定する。200円の20%引きは200×(1−0.2)＝160円。比較量が基準量を超える場合は120%のような表現も使える。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "100この材料のうち25こ使う設定なら25%。歩合では2割5分で、1/4を使ったことにもなる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の40秒の動画で、全体の25%を説明に使う。40×0.25＝10秒。100%は元の40秒である。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "割合0.4は何%？ 正答：40。 0.4×100＝40%。 考える手がかり：割合1が100%に対応する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "25%を小数の割合で表すと？ 正答：0.25。 25÷100＝0.25。 考える手がかり：100%を1に戻そう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "150この20%は何こ？ 正答：30。 150×0.2＝30こ。 考える手がかり：20%を小数の割合へ直す。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "200円の品物を20%引きにする架空の設定。値引き後はいくら？ 正答：160。 値引き分40円を引くと160円。残る80%で200×0.8とも求められる。 考える手がかり：求めるのは引いた金額か、引いた後の金額かを確かめる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "2割5分を百分率で表すと？ 正答：25%。 2割＝20%、5分＝5%なので25%。 考える手がかり：ここでの分は歩合の単位で1%。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "歩合の3厘は何%？ 正答：0.3。 1厘は0.001＝0.1%。3厘は0.3%。 考える手がかり：1割、1分、1厘は一桁ずつ小さくなる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "基準の長さ10cmに対して12cmは何%？ 正答：120。 12÷10＝1.2、百分率では120%。 考える手がかり：比べる量が基準より大きいので100%を超える。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "20%引きの後に元の量として残る割合は？ 正答：80%。 元の100%から20%を引いて80%。 考える手がかり：全体100%のどちら側を求める？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "100マスカード：100マスのうち35マスをぬった。ぬった割合は何%？ 正答：35。 35÷100＝0.35＝35%。 考える手がかり：100こにそろっているので、その数が%になる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "0.25、25%、2割5分が同じ割合であることを説明しよう。 200この25%なら、何こに当たる？ 0.25は100分の25だから25%。2割は0.2、5分は0.05で合わせて0.25。200この場合は200×0.25＝50こ。 確認項目：割合1を基準に0.25＝25/100と説明した。 / 2割と5分を0.2と0.05に直して合わせた。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "200円の20%引き。残る代金はいくら？ 元の200円を100%とする。 20%分は200×0.2＝40円。 値引き分40円を元の200円から引く。 200−40＝160円。残る80%で200×0.8とも確かめる。 結論：160円",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「20%引きの値段は、元の値段の20%。」は誤り。20%は引く分。引いた後に残るのは100%−20%＝80%。元の200円なら、40円引いて160円が残る。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "百分率は割合×100%で、1=100%、0.01=1%、0.4=40%=4割。1割=0.1、1分=0.01、1厘=0.001。20%引きの残りは80%、200円の20%引きは160円。割合1.2は120%。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "verified",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "例の登場物を同じ数量・単位・条件を保った架空の物へ置き換える。",
        "問いの意味と正答を保ち、短い文へ言い換える。"
      ],
      "forbidden": [
        "数・単位・全体の大きさ・等分の条件・対応関係・正答を変更しない。",
        "誤りの選択肢や誤解の例を正しい主張として説明しない。",
        "claimsの範囲外の定義や公式を足さない。",
        "個人情報・実在する人の記録・外部作品の仕様を加えない。"
      ]
    }
  },
  {
    "code": "8250253420000000",
    "grade": 5,
    "title": "平均",
    "domain": "D",
    "order": 23,
    "goal": "全部の量を保ってならし、平均の意味と使い方を考える。",
    "coverageCodes": [
      "8250252100000000",
      "8250252200000000",
      "8250252300000000",
      "8250253420000000",
      "8250253421000000",
      "8250253421100000",
      "8250253422000000",
      "8250253422100000",
      "8250253511000000",
      "8250253512000000",
      "8250253513000000"
    ],
    "explanations": {
      "es": {
        "short": "多いところから少ないところへ移し、同じ大きさにならした値が平均。2、4、6なら、全部12を3つに分けて4だよ。",
        "detail": "量2、4、6を全部合わせると12。三つとも同じ量にするなら12÷3＝4になる。6から2へ2を移して4、4、4にしても、全部の量は12のまま。0の記録があっても、調べた一つ分として個数に入れる。測定を何度か行って平均するときは、測り方や大きく離れた値の理由も確かめよう。"
      },
      "js": {
        "short": "平均は総量を個数で等分した代表の値。総量の保存、個数、測定値の扱いを対応させる。",
        "detail": "2、4、6の合計12を3等分すると平均4であり、平均×個数で合計へ戻せる。実際の各値が平均と一致する必要はなく、平均が元のデータにない数になることもある。実測には誤差が伴うため、平均を求めても必ず真の値になるとは限らない。0と未測定を混同せず、離れた値は理由を調べてから扱いを考える。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "三つの入れ物をならす",
        "text": "架空の材料の量が2g、4g、6g。6gから2gを2gの方へ移すと、4gずつになる。合計12gは変わらない。",
        "activityIds": [
          "craft-accessory"
        ]
      },
      {
        "category": "programming",
        "title": "測った長さをまとめる",
        "text": "練習用の測定値10.1cm、10.2cm、10.3cmの平均は10.2cm。測った値のずれを考えながら、およその長さをまとめる。",
        "activityIds": [
          "prog-scratch"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "2、4、6の平均はいくつ？",
        "answer": 4,
        "explanation": "(2＋4＋6)÷3＝12÷3＝4。",
        "hint": "全部を合わせて、値の個数で等分する。",
        "suffix": "",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "number",
        "prompt": "架空の3日間の収穫個数が0こ、2こ、4こ。1日平均何こ？",
        "answer": 2,
        "explanation": "(0＋2＋4)÷3＝2こ。0この日も3日間の一つとして数える。",
        "hint": "0の日を個数から外さない。",
        "suffix": "こ",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "number",
        "prompt": "4個の材料の重さの平均が5g。合計は何g？",
        "answer": 20,
        "explanation": "5×4＝20g。ならした値を4こ集めると総量に戻る。",
        "hint": "平均×個数で合計を求める。",
        "suffix": "g",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "平均4のデータでは、全ての値が4になっている？",
        "options": [
          "必ずしも4ではない",
          "必ず全て4"
        ],
        "answer": "必ずしも4ではない",
        "explanation": "2、4、6も平均4。平均はならした値で、実際の各値とは違うことがある。",
        "hint": "元のばらつきと、ならした後を区別しよう。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "number",
        "prompt": "3cm、4cm、8cmの三本の平均の長さは？",
        "answer": 5,
        "explanation": "(3＋4＋8)÷3＝15÷3＝5cm。元の三本に5cmがなくてもよい。",
        "hint": "平均が実際の長さのどれかである必要はない。",
        "suffix": "cm",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "number",
        "prompt": "練習用の測定値10.1cm、10.2cm、10.3cmの平均は？",
        "answer": 10.2,
        "explanation": "(10.1＋10.2＋10.3)÷3＝30.6÷3＝10.2cm。",
        "hint": "10.2cmとの差で考えてもよい。",
        "suffix": "cm",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "同じ物の測定で一つだけ大きく離れた値があった。まずどうする？",
        "options": [
          "測り方や記録を確かめ、理由を調べる",
          "都合が悪いので理由なく消す",
          "平均は必ず正確なので調べない"
        ],
        "answer": "測り方や記録を確かめ、理由を調べる",
        "explanation": "測定や記録の誤りなのか、意味のある違いなのかを確認してから扱いを考える。",
        "hint": "値だけを見て決めず、測った条件を振り返ろう。",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "number",
        "prompt": "2個の材料の平均3g、別の3個の平均8g。5個全部の平均は何g？",
        "answer": 6,
        "explanation": "合計は3×2＋8×3＝30g。全部5個で割ると6g。",
        "hint": "二つの平均を足して2で割ると、個数の違いを落としてしまう。",
        "suffix": "g",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "number",
      "prompt": "ならすカード：1、5、6を三つとも同じにすると？",
      "answer": 4,
      "explanation": "(1＋5＋6)÷3＝4。合計12を保ってならす。",
      "hint": "増やしたり捨てたりせず、移してみよう。",
      "suffix": "",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "全部の量を保ってならす",
      "prompt": "2、4、6の平均を、移す方法と式で求めよう。",
      "steps": [
        {
          "text": "三つの量を合わせると2＋4＋6＝12。"
        },
        {
          "text": "6のところから2を取り、2のところへ移す。"
        },
        {
          "text": "4、4、4になり、合計は12のまま。"
        },
        {
          "text": "同じ操作を式で表すと12÷3＝4。"
        }
      ],
      "answer": "平均4",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "0の記録は何もないので、平均の個数から外す。",
      "correction": "調べた結果が0なら、一つの記録として数える。0、2、4の平均は6÷3＝2。測っていないこととは区別する。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "2、4、6を4、4、4へならすとき、変わるものと変わらないものは？",
        "followUp": "平均だけを見て、元の三つの値が全て分かる？",
        "checkpoints": [
          "各値は変わるが合計12と個数3は同じと説明した。",
          "平均だけでは元の全ての値は分からないと説明した。"
        ],
        "sample": "各場所の量は変わるが、全部12と三つという個数は変わらない。平均4でも1、5、6など別の組があるので、平均だけでは元の値は決まらない。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "多いところから少ないところへ移し、同じ大きさにならした値が平均。2、4、6なら、全部12を3つに分けて4だよ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "量2、4、6を全部合わせると12。三つとも同じ量にするなら12÷3＝4になる。6から2へ2を移して4、4、4にしても、全部の量は12のまま。0の記録があっても、調べた一つ分として個数に入れる。測定を何度か行って平均するときは、測り方や大きく離れた値の理由も確かめよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "平均は総量を個数で等分した代表の値。総量の保存、個数、測定値の扱いを対応させる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "2、4、6の合計12を3等分すると平均4であり、平均×個数で合計へ戻せる。実際の各値が平均と一致する必要はなく、平均が元のデータにない数になることもある。実測には誤差が伴うため、平均を求めても必ず真の値になるとは限らない。0と未測定を混同せず、離れた値は理由を調べてから扱いを考える。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の材料の量が2g、4g、6g。6gから2gを2gの方へ移すと、4gずつになる。合計12gは変わらない。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "練習用の測定値10.1cm、10.2cm、10.3cmの平均は10.2cm。測った値のずれを考えながら、およその長さをまとめる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "2、4、6の平均はいくつ？ 正答：4。 (2＋4＋6)÷3＝12÷3＝4。 考える手がかり：全部を合わせて、値の個数で等分する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "架空の3日間の収穫個数が0こ、2こ、4こ。1日平均何こ？ 正答：2。 (0＋2＋4)÷3＝2こ。0この日も3日間の一つとして数える。 考える手がかり：0の日を個数から外さない。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "4個の材料の重さの平均が5g。合計は何g？ 正答：20。 5×4＝20g。ならした値を4こ集めると総量に戻る。 考える手がかり：平均×個数で合計を求める。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "平均4のデータでは、全ての値が4になっている？ 正答：必ずしも4ではない。 2、4、6も平均4。平均はならした値で、実際の各値とは違うことがある。 考える手がかり：元のばらつきと、ならした後を区別しよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "3cm、4cm、8cmの三本の平均の長さは？ 正答：5。 (3＋4＋8)÷3＝15÷3＝5cm。元の三本に5cmがなくてもよい。 考える手がかり：平均が実際の長さのどれかである必要はない。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "練習用の測定値10.1cm、10.2cm、10.3cmの平均は？ 正答：10.2。 (10.1＋10.2＋10.3)÷3＝30.6÷3＝10.2cm。 考える手がかり：10.2cmとの差で考えてもよい。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "同じ物の測定で一つだけ大きく離れた値があった。まずどうする？ 正答：測り方や記録を確かめ、理由を調べる。 測定や記録の誤りなのか、意味のある違いなのかを確認してから扱いを考える。 考える手がかり：値だけを見て決めず、測った条件を振り返ろう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "2個の材料の平均3g、別の3個の平均8g。5個全部の平均は何g？ 正答：6。 合計は3×2＋8×3＝30g。全部5個で割ると6g。 考える手がかり：二つの平均を足して2で割ると、個数の違いを落としてしまう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "ならすカード：1、5、6を三つとも同じにすると？ 正答：4。 (1＋5＋6)÷3＝4。合計12を保ってならす。 考える手がかり：増やしたり捨てたりせず、移してみよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "2、4、6を4、4、4へならすとき、変わるものと変わらないものは？ 平均だけを見て、元の三つの値が全て分かる？ 各場所の量は変わるが、全部12と三つという個数は変わらない。平均4でも1、5、6など別の組があるので、平均だけでは元の値は決まらない。 確認項目：各値は変わるが合計12と個数3は同じと説明した。 / 平均だけでは元の全ての値は分からないと説明した。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "2、4、6の平均を、移す方法と式で求めよう。 三つの量を合わせると2＋4＋6＝12。 6のところから2を取り、2のところへ移す。 4、4、4になり、合計は12のまま。 同じ操作を式で表すと12÷3＝4。 結論：平均4",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「0の記録は何もないので、平均の個数から外す。」は誤り。調べた結果が0なら、一つの記録として数える。0、2、4の平均は6÷3＝2。測っていないこととは区別する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "平均=合計÷個数（個数>0）、合計=平均×個数。2,4,6の総量12を保ちながら4,4,4へならすと平均4。0も有効な測定値なら個数に含める。測定誤差があるため平均が必ず真値とは限らず、異常値は理由を調べる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "motion",
        "text": "量2,4,6の合計は12。6から2を2の場所へ移すと4,4,4になる。移動中も総量12を保ち、最後の同じ量4は12÷3に一致する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "verified",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "例の登場物を同じ数量・単位・条件を保った架空の物へ置き換える。",
        "問いの意味と正答を保ち、短い文へ言い換える。"
      ],
      "forbidden": [
        "数・単位・全体の大きさ・等分の条件・対応関係・正答を変更しない。",
        "誤りの選択肢や誤解の例を正しい主張として説明しない。",
        "claimsの範囲外の定義や公式を足さない。",
        "個人情報・実在する人の記録・外部作品の仕様を加えない。"
      ]
    }
  },
  {
    "code": "8250253410000000",
    "grade": 5,
    "title": "円グラフと帯グラフ",
    "domain": "D",
    "order": 24,
    "goal": "目的に合う資料を集め、割合の図で比べて結論を確かめる。",
    "coverageCodes": [
      "8250252100000000",
      "8250252200000000",
      "8250252300000000",
      "8250253410000000",
      "8250253411000000",
      "8250253411100000",
      "8250253411200000",
      "8250253412000000",
      "8250253412100000",
      "8250253511000000",
      "8250253512000000",
      "8250253513000000",
      "8250255500000000"
    ],
    "explanations": {
      "es": {
        "short": "円グラフも帯グラフも、全体を100%として部分の割合を表す。全体の数もいっしょに見よう。",
        "detail": "架空の材料注文20件が、紙8件、木6件、粘土6件なら、割合は40%、30%、30%。円や帯をその割合で区切ると全体の内訳が見える。複数の帯を比べるときは、割合が小さくても実際の件数は多い場合がある。調べたいことを決め、集め方と分類をそろえ、目的に合うグラフを選んで結論を確かめよう。"
      },
      "js": {
        "short": "円・帯グラフは全体に対する構成割合を示す。問題、計画、データ、分析、結論の過程を通して使う。",
        "detail": "各分類の数÷合計×100で百分率へ直し、円や帯の100等分の目盛に対応させる。複数の帯は割合の比較に適するが、母数が異なると件数の大小とは一致しない。20件中8件の40%と50件中15件の30%なら、割合は前者が大きく件数は後者が多い。分類の落ちや重複を点検し、集めた範囲を超えて結論を一般化しない。"
      }
    },
    "entries": [
      {
        "category": "craft",
        "title": "材料の内訳を描く",
        "text": "架空の注文20件を一件一種類で分けると紙8、木6、粘土6件。全体に対し40%、30%、30%で、帯全体100%を隙間なく埋められる。",
        "activityIds": [
          "craft-cardboard"
        ]
      },
      {
        "category": "media",
        "title": "二つの動画の時間配分",
        "text": "架空の動画Aは20秒中8秒が説明、Bは50秒中15秒が説明。Aは40%、Bは30%。割合はAが大きいが、説明の秒数はBが長い。",
        "activityIds": [
          "media-movie"
        ]
      }
    ],
    "questions": [
      {
        "type": "number",
        "prompt": "架空の注文20件中、紙8件、木6件、粘土6件。紙の割合は何%？",
        "answer": 40,
        "explanation": "8÷20×100＝40%。",
        "hint": "全体20件を100%にそろえる。",
        "suffix": "%",
        "id": "q1",
        "claimIds": [
          "c7"
        ]
      },
      {
        "type": "choice",
        "prompt": "紙8件、木6件、粘土6件、合計20件の内訳を表す帯の区切りは？",
        "options": [
          "紙40%、木30%、粘土30%",
          "紙8%、木6%、粘土6%",
          "紙50%、木30%、粘土30%"
        ],
        "answer": "紙40%、木30%、粘土30%",
        "explanation": "各件数を合計20で割る。40＋30＋30＝100%になる。",
        "hint": "合計100%になることも確かめよう。",
        "id": "q2",
        "claimIds": [
          "c8"
        ]
      },
      {
        "type": "choice",
        "prompt": "Aは20件中8件が紙、Bは50件中15件が紙。紙の件数が多いのは？",
        "options": [
          "B",
          "A",
          "同じ"
        ],
        "answer": "B",
        "explanation": "Aの割合40%はBの30%より大きいが、件数は8より15のBが多い。",
        "hint": "割合の高さと、実際の数を分けよう。",
        "id": "q3",
        "claimIds": [
          "c9"
        ]
      },
      {
        "type": "choice",
        "prompt": "材料ごとの実際の注文件数の大小を見やすく比べたい。適したグラフは？",
        "options": [
          "棒グラフ",
          "全体の件数を示さない円グラフだけ",
          "時間がないのに折れ線グラフ"
        ],
        "answer": "棒グラフ",
        "explanation": "件数の大小は棒の長さで比べられる。全体に占める内訳には円や帯が便利。",
        "hint": "何を比べたいかで図を選ぶ。",
        "id": "q4",
        "claimIds": [
          "c10"
        ]
      },
      {
        "type": "choice",
        "prompt": "材料の注文の内訳を調べる計画で、分類の重なりを防ぐには？",
        "options": [
          "一件で一つ選んだ材料を、同じ決まりで分類する",
          "同じ一件を気分で二種類に入れる",
          "分からない件を知らせず捨てる"
        ],
        "answer": "一件で一つ選んだ材料を、同じ決まりで分類する",
        "explanation": "目的に合う集め方と分類の決まりを先に決め、落ちや重複を防ぐ。",
        "hint": "何を一件と数えるかもそろえよう。",
        "id": "q5",
        "claimIds": [
          "c11"
        ]
      },
      {
        "type": "choice",
        "prompt": "注文は20件あるはずなのに、分類した合計は18件だった。まずどうする？",
        "options": [
          "記録の落ちや分類を確認する",
          "合計を20と書き換えるだけにする",
          "18件を全体の20%とする"
        ],
        "answer": "記録の落ちや分類を確認する",
        "explanation": "元の件数と合計が合わない理由を調べてから、割合や結論を出す。",
        "hint": "数え落とした件や分類していない件はないかな？",
        "id": "q6",
        "claimIds": [
          "c12"
        ]
      },
      {
        "type": "choice",
        "prompt": "円グラフの25%は、円全体のどれくらい？",
        "options": [
          "4分の1",
          "2分の1",
          "4倍"
        ],
        "answer": "4分の1",
        "explanation": "25%＝25/100＝1/4。100等分の目盛の25こ分。",
        "hint": "全体100%に25%はいくつ入る？",
        "id": "q7",
        "claimIds": [
          "c13"
        ]
      },
      {
        "type": "choice",
        "prompt": "架空の20件の注文で紙の割合が40%だった。結論として言えるのは？",
        "options": [
          "この20件では紙が40%だった",
          "どんな場所でも紙が必ず40%になる",
          "紙の注文はいつも8件しかない"
        ],
        "answer": "この20件では紙が40%だった",
        "explanation": "今回集めた範囲の結果を述べる。他の期間や場所も同じとは限らない。",
        "hint": "結論が、集めた資料の範囲を超えていないか確かめよう。",
        "id": "q8",
        "claimIds": [
          "c14"
        ]
      }
    ],
    "game": {
      "type": "number",
      "prompt": "帯を完成：三つの部分が40%、35%、残り。残りは何%？",
      "answer": 25,
      "explanation": "100−40−35＝25%。",
      "hint": "帯全体は100%。",
      "suffix": "%",
      "id": "g1",
      "claimIds": [
        "c15"
      ]
    },
    "workedExample": {
      "title": "内訳を帯にする",
      "prompt": "紙8件、木6件、粘土6件の注文20件を帯グラフにしよう。",
      "steps": [
        {
          "text": "分類の合計が8＋6＋6＝20件と一致するか確かめる。"
        },
        {
          "text": "紙は8÷20＝0.4、木と粘土はそれぞれ6÷20＝0.3。"
        },
        {
          "text": "百分率へ直し、40%、30%、30%とする。"
        },
        {
          "text": "全体100%の帯を同じ尺度で区切り、合計100%と分類名を確かめる。"
        }
      ],
      "answer": "紙40%、木30%、粘土30%",
      "claimIds": [
        "c17"
      ]
    },
    "misconception": {
      "trap": "帯の割合が大きい方は、実際の件数も必ず多い。",
      "correction": "全体の件数が違うとそうとは限らない。20件の40%は8件、50件の30%は15件。割合と実数の両方を確認する。",
      "claimIds": [
        "c18"
      ]
    },
    "buddy": [
      {
        "id": "b1",
        "prompt": "Aの20件中8件とBの50件中15件を、割合と件数で別々に比べよう。",
        "followUp": "どちらの材料を多く準備するか考えるなら、何を確認したい？",
        "checkpoints": [
          "割合はA40%、B30%と説明した。",
          "件数はB15件が多く、全体の件数も必要と説明した。"
        ],
        "sample": "割合はAの40%が大きいが、件数はBの15件が多い。準備する量なら全体の注文数や一件当たり必要量も確認する。",
        "claimIds": [
          "c16"
        ]
      }
    ],
    "claims": [
      {
        "id": "c1",
        "text": "円グラフも帯グラフも、全体を100%として部分の割合を表す。全体の数もいっしょに見よう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c2",
        "text": "架空の材料注文20件が、紙8件、木6件、粘土6件なら、割合は40%、30%、30%。円や帯をその割合で区切ると全体の内訳が見える。複数の帯を比べるときは、割合が小さくても実際の件数は多い場合がある。調べたいことを決め、集め方と分類をそろえ、目的に合うグラフを選んで結論を確かめよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c3",
        "text": "円・帯グラフは全体に対する構成割合を示す。問題、計画、データ、分析、結論の過程を通して使う。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c4",
        "text": "各分類の数÷合計×100で百分率へ直し、円や帯の100等分の目盛に対応させる。複数の帯は割合の比較に適するが、母数が異なると件数の大小とは一致しない。20件中8件の40%と50件中15件の30%なら、割合は前者が大きく件数は後者が多い。分類の落ちや重複を点検し、集めた範囲を超えて結論を一般化しない。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c5",
        "text": "架空の注文20件を一件一種類で分けると紙8、木6、粘土6件。全体に対し40%、30%、30%で、帯全体100%を隙間なく埋められる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c6",
        "text": "架空の動画Aは20秒中8秒が説明、Bは50秒中15秒が説明。Aは40%、Bは30%。割合はAが大きいが、説明の秒数はBが長い。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c7",
        "text": "架空の注文20件中、紙8件、木6件、粘土6件。紙の割合は何%？ 正答：40。 8÷20×100＝40%。 考える手がかり：全体20件を100%にそろえる。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c8",
        "text": "紙8件、木6件、粘土6件、合計20件の内訳を表す帯の区切りは？ 正答：紙40%、木30%、粘土30%。 各件数を合計20で割る。40＋30＋30＝100%になる。 考える手がかり：合計100%になることも確かめよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c9",
        "text": "Aは20件中8件が紙、Bは50件中15件が紙。紙の件数が多いのは？ 正答：B。 Aの割合40%はBの30%より大きいが、件数は8より15のBが多い。 考える手がかり：割合の高さと、実際の数を分けよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c10",
        "text": "材料ごとの実際の注文件数の大小を見やすく比べたい。適したグラフは？ 正答：棒グラフ。 件数の大小は棒の長さで比べられる。全体に占める内訳には円や帯が便利。 考える手がかり：何を比べたいかで図を選ぶ。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c11",
        "text": "材料の注文の内訳を調べる計画で、分類の重なりを防ぐには？ 正答：一件で一つ選んだ材料を、同じ決まりで分類する。 目的に合う集め方と分類の決まりを先に決め、落ちや重複を防ぐ。 考える手がかり：何を一件と数えるかもそろえよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c12",
        "text": "注文は20件あるはずなのに、分類した合計は18件だった。まずどうする？ 正答：記録の落ちや分類を確認する。 元の件数と合計が合わない理由を調べてから、割合や結論を出す。 考える手がかり：数え落とした件や分類していない件はないかな？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c13",
        "text": "円グラフの25%は、円全体のどれくらい？ 正答：4分の1。 25%＝25/100＝1/4。100等分の目盛の25こ分。 考える手がかり：全体100%に25%はいくつ入る？",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c14",
        "text": "架空の20件の注文で紙の割合が40%だった。結論として言えるのは？ 正答：この20件では紙が40%だった。 今回集めた範囲の結果を述べる。他の期間や場所も同じとは限らない。 考える手がかり：結論が、集めた資料の範囲を超えていないか確かめよう。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c15",
        "text": "帯を完成：三つの部分が40%、35%、残り。残りは何%？ 正答：25。 100−40−35＝25%。 考える手がかり：帯全体は100%。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c16",
        "text": "Aの20件中8件とBの50件中15件を、割合と件数で別々に比べよう。 どちらの材料を多く準備するか考えるなら、何を確認したい？ 割合はAの40%が大きいが、件数はBの15件が多い。準備する量なら全体の注文数や一件当たり必要量も確認する。 確認項目：割合はA40%、B30%と説明した。 / 件数はB15件が多く、全体の件数も必要と説明した。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c17",
        "text": "紙8件、木6件、粘土6件の注文20件を帯グラフにしよう。 分類の合計が8＋6＋6＝20件と一致するか確かめる。 紙は8÷20＝0.4、木と粘土はそれぞれ6÷20＝0.3。 百分率へ直し、40%、30%、30%とする。 全体100%の帯を同じ尺度で区切り、合計100%と分類名を確かめる。 結論：紙40%、木30%、粘土30%",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "c18",
        "text": "「帯の割合が大きい方は、実際の件数も必ず多い。」は誤り。全体の件数が違うとそうとは限らない。20件の40%は8件、50件の30%は15件。割合と実数の両方を確認する。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      },
      {
        "id": "visual",
        "text": "円グラフ・帯グラフは全体100%に対する構成割合を示す。紙8木6粘土6の合計20件は40%,30%,30%。20件中8の40%と50件中15の30%では割合は前者が大きく、件数は後者が多い。分類の落ち重複と合計を点検し、目的に応じ棒・折れ線・円・帯を選ぶ。円の25%は1/4。",
        "status": "verified",
        "sourceIds": [
          "mext-grade5-codes",
          "mext-grade5-commentary"
        ]
      }
    ],
    "review": {
      "evidence": "verified",
      "publication": "preview",
      "humanApproval": null
    },
    "adapt-rules": {
      "allowed": [
        "例の登場物を同じ数量・単位・条件を保った架空の物へ置き換える。",
        "問いの意味と正答を保ち、短い文へ言い換える。"
      ],
      "forbidden": [
        "数・単位・全体の大きさ・等分の条件・対応関係・正答を変更しない。",
        "誤りの選択肢や誤解の例を正しい主張として説明しない。",
        "claimsの範囲外の定義や公式を足さない。",
        "個人情報・実在する人の記録・外部作品の仕様を加えない。"
      ]
    }
  }
];
  var sources = [
  {
    "id": "mext-grade5-codes",
    "url": "https://www.mext.go.jp/content/20230901-mxt_syoto01-000010374_28.xlsx",
    "title": "文部科学省 小学校学習指導要領コード82V12・第5学年算数118行",
    "retrievedAt": "2026-11-04"
  },
  {
    "id": "mext-grade5-commentary",
    "url": "https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002607_04.pdf",
    "title": "文部科学省 小学校学習指導要領（平成29年告示）解説 算数編・第5学年（印刷pp.232–283）",
    "retrievedAt": "2026-11-04"
  }
];
  data.units = data.units.concat(units);
  data.sources = data.sources.concat(sources);
  data.version = "3";
  data.grades = [4, 5];
}());
