import{hW as _,fj as w,bV as D}from"./index-12dd5c8b.js";import{c as x}from"./observers-a68508a7.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */function se(e){return e==="Enter"||e===" "}const I=["0","1","2","3","4","5","6","7","8","9"];/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */const R=new RegExp("\\.(0+)?$"),T=new RegExp("0+$");class i{constructor(t){if(t instanceof i)return t;const[s,n]=U(t).split(".").concat("");this.value=BigInt(s+n.padEnd(i.DECIMALS,"0").slice(0,i.DECIMALS))+BigInt(i.ROUNDED&&n[i.DECIMALS]>="5"),this.isNegative=t.charAt(0)==="-"}getIntegersAndDecimals(){const t=this.value.toString().replace("-","").padStart(i.DECIMALS+1,"0"),s=t.slice(0,-i.DECIMALS),n=t.slice(-i.DECIMALS).replace(T,"");return{integers:s,decimals:n}}toString(){const{integers:t,decimals:s}=this.getIntegersAndDecimals();return`${this.isNegative?"-":""}${t}${s.length?"."+s:""}`}formatToParts(t){const{integers:s,decimals:n}=this.getIntegersAndDecimals(),r=t.numberFormatter.formatToParts(BigInt(s));return this.isNegative&&r.unshift({type:"minusSign",value:t.minusSign}),n.length&&(r.push({type:"decimal",value:t.decimal}),n.split("").forEach(a=>r.push({type:"fraction",value:a}))),r}format(t){const{integers:s,decimals:n}=this.getIntegersAndDecimals(),r=`${this.isNegative?t.minusSign:""}${t.numberFormatter.format(BigInt(s))}`,a=n.length?`${t.decimal}${n.split("").map(l=>t.numberFormatter.format(Number(l))).join("")}`:"";return`${r}${a}`}add(t){return i.fromBigInt(this.value+new i(t).value)}subtract(t){return i.fromBigInt(this.value-new i(t).value)}multiply(t){return i._divRound(this.value*new i(t).value,i.SHIFT)}divide(t){return i._divRound(this.value*i.SHIFT,new i(t).value)}}i.DECIMALS=100;i.ROUNDED=!0;i.SHIFT=BigInt("1"+"0".repeat(i.DECIMALS));i._divRound=(e,t)=>i.fromBigInt(e/t+(i.ROUNDED?e*BigInt(2)/t%BigInt(2):BigInt(0)));i.fromBigInt=e=>Object.assign(Object.create(i.prototype),{value:e,isNegative:e<BigInt(0)});function $(e){return!(!e||isNaN(Number(e)))}function ne(e){return!e||!Z(e)?"":f(e,t=>{let s=!1;const n=t.split("").filter((r,a)=>r.match(/\./g)&&!s?(s=!0,!0):r.match(/\-/g)&&a===0?!0:I.includes(r)).join("");return $(n)?new i(n).toString():""})}const N=/^([-0])0+(?=\d)/,j=/(?!^\.)\.$/,z=/(?!^-)-/g,k=/^-\b0\b\.?0*$/,P=/0*$/,re=e=>f(e,t=>{const s=t.replace(z,"").replace(j,"").replace(N,"$1");return $(s)?k.test(s)?s:H(s):t});function H(e){const t=e.split(".")[1],s=new i(e).toString(),[n,r]=s.split(".");return t&&r!==t?`${n}.${t}`:s}function f(e,t){if(!e)return e;const s=e.toLowerCase().indexOf("e")+1;return s?e.replace(/[eE]*$/g,"").substring(0,s).concat(e.slice(s).replace(/[eE]/g,"")).split(/[eE]/).map((n,r)=>t(r===1?n.replace(/\./g,""):n)).join("e").replace(/^e/,"1e"):t(e)}function U(e){const t=e.split(/[eE]/);if(t.length===1)return e;const s=+e;if(Number.isSafeInteger(s))return`${s}`;const n=e.charAt(0)==="-",r=+t[1],a=t[0].split("."),l=(n?a[0].substring(1):a[0])||"",S=a[1]||"",M=(c,u)=>{const g=Math.abs(u)-c.length,p=g>0?`${"0".repeat(g)}${c}`:c;return`${p.slice(0,u)}.${p.slice(u)}`},A=(c,u)=>{const g=u>c.length?`${c}${"0".repeat(u-c.length)}`:c;return`${g.slice(0,u)}.${g.slice(u)}`},y=r>0?`${l}${A(S,r)}`:`${M(l,r)}${S}`;return`${n?"-":""}${y.charAt(0)==="."?"0":""}${y.replace(R,"").replace(N,"")}`}function Z(e){return I.some(t=>e.includes(t))}function ie(e,t,s){const n=t.split(".")[1];if(n){const r=n.match(P)[0];if(r&&s.delocalize(e).length!==t.length&&n.indexOf("e")===-1){const a=s.decimal;return e=e.includes(a)?e:`${e}${a}`,e.padEnd(e.length+r.length,s.localize("0"))}}return e}const o="en",G=["ar","bg","bs","ca","cs","da","de","el",o,"es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","no","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],B=["ar","bg","bs","ca","cs","da","de","de-AT","de-CH","el",o,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","no","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],K=["arab","arabext","bali","beng","deva","fullwide","gujr","guru","hanidec","khmr","knda","laoo","latn","limb","mlym","mong","mymr","orya","tamldec","telu","thai","tibt"],F=e=>K.includes(e),b=new Intl.NumberFormat().resolvedOptions().numberingSystem,O=b==="arab"||!F(b)?"latn":b,W=e=>F(e)?e:O;function L(e,t="cldr"){const s=t==="cldr"?B:G;return e?s.includes(e)?e:(e=e.toLowerCase(),e==="nb"?"no":t==="t9n"&&e==="pt"?"pt-BR":(e.includes("-")&&(e=e.replace(/(\w+)-(\w+)/,(n,r,a)=>`${r}-${a.toUpperCase()}`),s.includes(e)||(e=e.split("-")[0])),e==="zh"?"zh-CN":s.includes(e)?e:(console.warn(`Translations for the "${e}" locale are not available and will fall back to the default, English (en).`),o))):o}const m=new Set;function ae(e){J(e),m.size===0&&(d==null||d.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0})),m.add(e)}function J(e){e.effectiveLocale=X(e)}function ce(e){m.delete(e),m.size===0&&d.disconnect()}const d=x("mutation",e=>{e.forEach(t=>{const s=t.target;m.forEach(n=>{if(!_(s,n.el))return;const a=w(n.el,"[lang]");if(!a){n.effectiveLocale=o;return}const l=a.lang;n.effectiveLocale=a.hasAttribute("lang")&&l===""?o:l})})});function X(e){var t;return e.el.lang||((t=w(e.el,"[lang]"))==null?void 0:t.lang)||document.documentElement.lang||o}class q{constructor(){this.delocalize=t=>this._numberFormatOptions?f(t,s=>s.replace(new RegExp(`[${this._minusSign}]`,"g"),"-").replace(new RegExp(`[${this._group}]`,"g"),"").replace(new RegExp(`[${this._decimal}]`,"g"),".").replace(new RegExp(`[${this._digits.join("")}]`,"g"),this._getDigitIndex)):t,this.localize=t=>this._numberFormatOptions?f(t,s=>$(s.trim())?new i(s.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`,"g"),this._group):s):t}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(t){if(t.locale=L(t==null?void 0:t.locale),t.numberingSystem=W(t==null?void 0:t.numberingSystem),!this._numberFormatOptions&&t.locale===o&&t.numberingSystem===O&&Object.keys(t).length===2||JSON.stringify(this._numberFormatOptions)===JSON.stringify(t))return;this._numberFormatOptions=t,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();const s=new Map(this._digits.map((r,a)=>[r,a])),n=new Intl.NumberFormat(this._numberFormatOptions.locale,{numberingSystem:this._numberFormatOptions.numberingSystem}).formatToParts(-123456789e-1);this._actualGroup=n.find(r=>r.type==="group").value,this._group=this._actualGroup.trim().length===0||this._actualGroup==" "?" ":this._actualGroup,this._decimal=n.find(r=>r.type==="decimal").value,this._minusSign=n.find(r=>r.type==="minusSign").value,this._getDigitIndex=r=>s.get(r)}}const ue=new q;/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */function oe(e){return e==="l"?"m":"s"}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */const h={};async function Q(e,t){const s=`${t}_${e}`;return h[s]||(h[s]=fetch(D(`./assets/${t}/t9n/messages_${e}.json`)).then(n=>(n.ok||E(),n.json())).catch(()=>E())),h[s]}function E(){throw new Error("could not fetch component message bundle")}function v(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function le(e){e.defaultMessages=await C(e,e.effectiveLocale),v(e)}async function C(e,t){const{el:s}=e,r=s.tagName.toLowerCase().replace("calcite-","");return Q(L(t,"t9n"),r)}async function ge(e,t){e.defaultMessages=await C(e,t),v(e)}function me(e){e.onMessagesChange=Y}function he(e){e.onMessagesChange=void 0}function Y(){v(this)}export{i as B,me as a,he as b,ae as c,ce as d,$ as e,re as f,oe as g,ie as h,se as i,I as j,ue as n,ne as p,le as s,ge as u};
