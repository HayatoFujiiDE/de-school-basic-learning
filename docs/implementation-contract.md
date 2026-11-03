# 実装契約

対象は正本 2026-11-04 に従い小学算数 第4学年。第1学年/4学年分との表記は旧記述として QUESTIONS に残す。参照元 Learning-Agents main 0157d23 は fetch 後 0 ahead/0 behind。

ビルドなし、file://、非module、ES2017以内。実行時の通信は tokens.css の Google Fonts 1行のみ。教材はすべて独自制作。コードの主キーはMEXT Excel由来16桁の文字列。

## 所有
- content worktree: js/units.js, sources/*, tools/extract-curriculum.py
- ui worktree: index.html, css/app.css, js/app.js
- root: js/core.js, tools/check*, docs, README, QUESTIONS, integration
- evidence agent: read-only independent review → docs/evidence-review.md のみ

## データ契約（凍結）
`window.BL = window.BL || {}; BL.data = {version:'1', grade:4, sources:[{id,url,title,retrievedAt}], categories:[{id,label}], units:[]};`
unit: `{code, title, domain:'A'|'B'|'C'|'D', order:number, goal, coverageCodes:[string], explanations:{es:{short,detail},js:{short,detail}}, entries:[{category,title,text,activityIds:[string]}], questions:[Question], buddy:[{id,prompt,followUp,checkpoints:[string],sample,claimIds:[string]}], game:Question, claims:[{id,text,status:'verified',sourceIds:[string]}], 'adapt-rules':{allowed:[string], forbidden:[string]}, review:{evidence:'pending'|'verified',publication:'preview',humanApproval:null}}`
Question: `{id,type:'number'|'choice'|'order',prompt,answer:number|string|string[],options?:string[],items?:string[],suffix?:string,explanation,claimIds:[string]}`. choice answer is the exact option string; order answer is exact ordered items. Questions per unit 5–10; buddy 1–2; entries ≥2 from source catalog. Short/detail separate real texts for both modes. Game uses same Question contract, separate from practice attainment. Source references required for every claim. Every mathematical assertion in teaching/feedback/entry/buddy/game is covered by claims; wording can differ. No personal info.

## Root core API（UIはこれを使う）
`BL.core.units()` validated sorted preview units; `BL.core.unit(code)` exact lookup; `BL.core.load()` state; `BL.core.save()` boolean; `BL.core.state` = `{mode:'es'|'js', interest:'all'|categoryId, progress:{[code]:{answers:{[qid]:{value,correct}},buddy:{[bid]:boolean}}},resume:code|null}`.
`BL.core.grade(question,value)` boolean; fullwidth numeric supported, blank/invalid rejected, no eval, exact choices/order; `BL.core.answer(code,qid,value)` writes latest answer+correct; `BL.core.explain(code,bid,boolean)`; `BL.core.progress(code)` returns `{percent,correct,total,explained,buddyTotal}`; `BL.core.reset()` own namespace only; `BL.core.storageOK` boolean. `BL.core.text(unit,length)` current mode text; `BL.core.escape(string)` HTML safe.
Percentage = floor(80*correct/total +20*explained/buddyTotal), latest answered correctness per question. No question answered =0; buddy self confirmation following checkpoints, reversible. Text conversation is session memory only, no external transmission, no AI assertion. Mode/interest/progress persisted defensively; blocked localStorage uses memory with visible status. All IDs are own-property exact validated keys.

## UI
Routes `#list` (default), `#unit/<code>`, `#practice/<code>`, `#result/<code>`, `#buddy/<code>`, `#paused`.
Unit: first interact with game, then interest example, short/detail explanation, practice entry. Domain grouped list with each percentage band. Header mode switching and pause. Interests affect examples, never hide units; all 6 categories selectable; fallback clearly shows available entry. Exercise supports all types, accessible numeric/choice/order buttons, feedback and retry. Results show components and buddy entry. Buddy static prompt → user's text (ephemeral) → follow-up/checklist → explicit self-confirm or retry; clearly labels fixed responses and self confirmation. No fake AI semantic judgement. Text input escaped, never embedded unsafely; do not store child text. Explain can be revoked. Paused screen resume.
Preview label indicates human publication approval pending. This local authoring preview may show independently verified material; no production API/distribution. Runtime units filter pending evidence so unverified imported content cannot appear. Copy for children excludes prohibited words: 点数|ランキング|順位|評価|成績|レベル|集中力|得意|苦手|上手|成長|データがありません|学びのバディ. No emoji icons, native alert/confirm/prompt, recordings, tracking or external calls. Tokens exact copied.

## Verification
No deployment/shared push. Initial design commit only; feature commits after relevant syntax/content/runtime checks. file:// visible UI at widths 1440/1024/390, modes es/js; all routes, real interactions, no errors, no banned copy, no overflow. Guard positive probes ensure detection. Independent evidence agent rereads MEXT and checks every claim/answer + curriculum mapping. Content with pending review withheld. Final check.sh output CHECK_RESULT=PASS. Record review limitations honestly.
