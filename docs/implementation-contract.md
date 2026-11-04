> 2026-11-04の追加依頼で6年22単元も対象とする。詳細は `grade6-plan.md` と `content-contract.md` の版4保存契約に従う。以下は最初の実装範囲を含む履歴であり、4・5年だけに対象を制限するものではない。

> 6年追加前の履歴（現行差分は上記）: 第4・第5学年に対応。下記は初期4年版の契約記録で、学年追加の正本は `grade5-plan.md` と `content-contract.md`。教材版3、学年URL `#list/4`・`#list/5`、全学年を保持するcoreと版2の4年限定移行を適用する。公開GitHubへのpush・mergeは利用者が明示的に依頼済み。子どもへの配信承認は別。

# 実装契約

対象は正本 2026-11-04 に従い小学算数 第4学年。第1学年/4学年分との表記は旧記述として QUESTIONS に残す。参照元 Learning-Agents main 0157d23 は fetch 後 0 ahead/0 behind。

ビルドなし、file://、非module、ES2017以内。実行時の通信は tokens.css の Google Fonts 1行のみ。教材はすべて独自制作。コードの主キーはMEXT Excel由来16文字の文字列。取扱いのコードに英字Aが含まれるため、数値には変換しない。

## 所有
- content worktree: js/units.js, sources/*, tools/extract-curriculum.py
- ui worktree: index.html, css/app.css, js/app.js
- root: js/core.js, tools/check*, docs, README, QUESTIONS, integration
- root: js/visuals.js, css/visuals.css（20単元の操作図、独立の数式・図形検証を受ける）
- evidence agent: read-only independent review → docs/evidence-review.md のみ

## データ契約（凍結）
`window.BL = window.BL || {}; BL.data = {version:'1', grade:4, sources:[{id,url,title,retrievedAt}], categories:[{id,label}], units:[]};`
unit: `{code, title, domain:'A'|'B'|'C'|'D', order:number, goal, coverageCodes:[string], explanations:{es:{short,detail},js:{short,detail}}, entries:[{category,title,text,activityIds:[string]}], questions:[Question], buddy:[{id,prompt,followUp,checkpoints:[string],sample,claimIds:[string]}], game:Question, claims:[{id,text,status:'verified',sourceIds:[string]}], 'adapt-rules':{allowed:[string], forbidden:[string]}, review:{evidence:'pending'|'verified',publication:'preview',humanApproval:null}}`
Question: `{id,type:'number'|'choice'|'order',prompt,answer:number|string|string[],options?:string[],items?:string[],suffix?:string,explanation,claimIds:[string]}`. choice answer is the exact option string; order answer is exact ordered items. Questions per unit 5–10; buddy 1–2; entries ≥2 from source catalog. Short/detail separate real texts for both modes. Game uses same Question contract, separate from practice attainment. Source references required for every claim. Every mathematical assertion in teaching/feedback/entry/buddy/game is covered by claims; wording can differ. No personal info.

追加の品質要件（利用者2026-11-04の指示）: 各単元に workedExample `{title,prompt,steps:[{text}],answer,claimIds}` を置き、3段階以上で考え方をたどる。misconception `{trap,correction,claimIds}` でよく混同する点を確かめる。Question.hint は答えをそのまま示す前に考える足場。各単元の操作図はSVG/HTMLで数・位置・単位を正確に対応させる。

## Root core API（UIはこれを使う）
`BL.core.units()` validated sorted preview units; `BL.core.unit(code)` exact lookup; `BL.core.load()` state; `BL.core.save()` boolean; `BL.core.state` = `{mode:'es'|'js', interest:'all'|categoryId, progress:{[code]:{answers:{[qid]:{value,correct}},buddy:{[bid]:boolean}}},resume:code|null}`.
`BL.core.grade(question,value)` boolean; fullwidth numeric supported, blank/invalid rejected, no eval, exact choices/order; `BL.core.answer(code,qid,value)` writes latest answer+correct; `BL.core.explain(code,bid,boolean)`; `BL.core.progress(code)` returns `{percent,correct,total,explained,buddyTotal}`; `BL.core.reset()` own namespace only; `BL.core.storageOK` boolean. `BL.core.text(unit,length)` current mode text; `BL.core.escape(string)` HTML safe.

`BL.core.validAnswer(question,value)` は入力形式を判定。形式が無効な回答を算数の誤答として表示・保存しない。
Percentage = floor(80*correct/total +20*explained/buddyTotal), latest answered correctness per question. No question answered =0; buddy self confirmation following checkpoints, reversible. Text conversation is session memory only, no external transmission, no AI assertion. Mode/interest/progress persisted defensively; blocked localStorage uses memory with visible status. All IDs are own-property exact validated keys.

## UI
Routes `#list` (default), `#unit/<code>`, `#practice/<code>`, `#result/<code>`, `#buddy/<code>`, `#paused`.
Unit: first interact with game, then interest example, short/detail explanation, practice entry. Domain grouped list with each percentage band. Header mode switching and pause. Interests affect examples, never hide units; all 6 categories selectable; fallback clearly shows available entry. Exercise supports all types, accessible numeric/choice/order buttons, feedback and retry. Results show components and buddy entry. Buddy static prompt → user's text (ephemeral) → follow-up/checklist → explicit self-confirm or retry; clearly labels fixed responses and self confirmation. No fake AI semantic judgement. Text input escaped, never embedded unsafely; do not store child text. Explain can be revoked. Paused screen resume.
Preview label indicates human publication approval pending. This local authoring preview may show independently verified material; no production API/distribution. Runtime units filter pending evidence so unverified imported content cannot appear. Copy for children excludes prohibited words: 点数|ランキング|順位|評価|成績|レベル|集中力|得意|苦手|上手|成長|データがありません|学びのバディ. No emoji icons, native alert/confirm/prompt, recordings, tracking or external calls. Tokens exact copied.

## Verification
No deployment/shared push. Initial design commit only; feature commits after relevant syntax/content/runtime checks. file:// visible UI at widths 1440/1024/390, modes es/js; all routes, real interactions, no errors, no banned copy, no overflow. Guard positive probes ensure detection. Independent evidence agent rereads MEXT and checks every claim/answer + curriculum mapping. Content with pending review withheld. Final check.sh output CHECK_RESULT=PASS. Record review limitations honestly.
