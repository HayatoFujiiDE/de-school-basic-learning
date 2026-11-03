'use strict';
const assert=require('assert/strict');
const canonical="@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700;800&display=swap');";
// This is an at-keyword scanner, not a general CSS parser. Keep URL semicolons
// untouched, skip comments/strings, and decode escaped CSS identifiers.
function keywords(source){
  let outside='',quote='',comment=false;
  for(let i=0;i<source.length;i++){
    const c=source[i],next=source[i+1];
    if(comment){if(c==='*'&&next==='/'){comment=false;i++;outside+=' ';}continue;}
    if(quote){if(c==='\\'){i++;continue;}if(c===quote)quote='';continue;}
    if(c==='/'&&next==='*'){comment=true;i++;outside+=' ';continue;}
    if(c==='"'||c==="'"){quote=c;outside+=' ';continue;}
    if(c==='\\'&&next){outside+=c+next;i++;continue;}
    outside+=c;
  }
  if(quote||comment)throw Error('Unclosed CSS string/comment');
  outside=outside.replace(/\\([0-9a-f]{1,6})(?:\r\n|[\t\n\r\f ])?|\\([^\n\r\f])/gi,(_,hex,literal)=>hex?String.fromCodePoint(parseInt(hex,16)):literal);
  return (outside.match(/@[-_a-z][-_a-z0-9]*/gi)||[]).map(s=>s.toLowerCase());
}
function validate(styles){
  assert.equal(styles['tokens.css'].split(/\r?\n/)[0],canonical,'font import must be the exact canonical first line');
  let count=0;Object.values(styles).forEach(source=>{count+=keywords(source).filter(k=>k==='@import').length;});
  assert.equal(count,1,'exactly one CSS import, including alternate spellings');
}
function probes(){
  validate({'tokens.css':canonical+'\n/* normal stylesheet */'});
  validate({'tokens.css':canonical+'\n/* @import url(fake.css); */','app.css':'.a::after{content:"@import text"}'});
  const invalid=[
    '/* '+canonical+' */',
    canonical.replace('400;500','400;600'),
    canonical+'\n'+canonical,
    canonical+'\n@IMPORT url(extra.css);',
    canonical+'\n@import "extra.css";',
    canonical+'\n@\\69mport "extra.css";',
    canonical+' @import url(extra.css);'
  ];
  invalid.forEach(source=>assert.throws(()=>validate({'tokens.css':source})));
  console.log('CSS_IMPORT_PROBES=PASS canonical_and_7_invalid_controls');
}
module.exports={validate,probes};
if(require.main===module)probes();
