import{u as I,j as g,a as Mn}from"./index-TcxpDG59.js";import{r as k,a as Rn}from"./react-vendor-EAM4oYjW.js";const C={primary1:"#2B3A67",secondary1:"#FEFEE3",tertiary1:"#333333",text1:"#333333",text2:"#FEFEE3"},Tn=I.a.attrs({role:"button",className:"button"})`
  position: relative;
  z-index: 0;

  display: flex;
  width: 320px;
  height: 61px;

  background-color: transparent;
  border: 4px solid ${C.secondary1};

  line-height: 34px;
  font-weight: 600;
  font-size: 28px;
  color: ${C.secondary1};
  text-align: center;
  text-decoration: none;

  transition: color 0.2s;
  overflow: hidden;
  cursor: pointer;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 0;

    transition: height 0.2s;
    z-index: -1;
    content: "";
  }

  &:hover {
    color: ${C.primary1};
  }

  &:hover:after {
    height: 100%;
    background: ${C.secondary1};
  }
`,Fn=I.span.attrs({className:"button__label"})`
  margin: auto;
`;function Je(e){const{children:t}=e;return g.jsx(Tn,{...e,children:g.jsx(Fn,{children:t})})}var ut=Se(),_=e=>xe(e,ut),ct=Se();_.write=e=>xe(e,ct);var $e=Se();_.onStart=e=>xe(e,$e);var lt=Se();_.onFrame=e=>xe(e,lt);var dt=Se();_.onFinish=e=>xe(e,dt);var X=[];_.setTimeout=(e,t)=>{const n=_.now()+t,i=()=>{const r=X.findIndex(a=>a.cancel==i);~r&&X.splice(r,1),B-=~r?1:0},s={time:n,handler:e,cancel:i};return X.splice(Yt(n),0,s),B+=1,Wt(),s};var Yt=e=>~(~X.findIndex(t=>t.time>e)||~X.length);_.cancel=e=>{$e.delete(e),lt.delete(e),dt.delete(e),ut.delete(e),ct.delete(e)};_.sync=e=>{Ke=!0,_.batchedUpdates(e),Ke=!1};_.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function i(...s){t=s,_.onStart(n)}return i.handler=e,i.cancel=()=>{$e.delete(n),t=null},i};var ht=typeof window<"u"?window.requestAnimationFrame:()=>{};_.use=e=>ht=e;_.now=typeof performance<"u"?()=>performance.now():Date.now;_.batchedUpdates=e=>e();_.catch=console.error;_.frameLoop="always";_.advance=()=>{_.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Kt()};var Q=-1,B=0,Ke=!1;function xe(e,t){Ke?(t.delete(e),e(0)):(t.add(e),Wt())}function Wt(){Q<0&&(Q=0,_.frameLoop!=="demand"&&ht(Jt))}function Vn(){Q=-1}function Jt(){~Q&&(ht(Jt),_.batchedUpdates(Kt))}function Kt(){const e=Q;Q=_.now();const t=Yt(Q);if(t&&(Xt(X.splice(0,t),n=>n.handler()),B-=t),!B){Vn();return}$e.flush(),ut.flush(e?Math.min(64,Q-e):16.667),lt.flush(),ct.flush(),dt.flush()}function Se(){let e=new Set,t=e;return{add(n){B+=t==e&&!e.has(n)?1:0,e.add(n)},delete(n){return B-=t==e&&e.has(n)?1:0,e.delete(n)},flush(n){t.size&&(e=new Set,B-=t.size,Xt(t,i=>i(n)&&e.add(i)),B+=e.size,t=e)}}}function Xt(e,t){e.forEach(n=>{try{t(n)}catch(i){_.catch(i)}})}var $n=Object.defineProperty,En=(e,t)=>{for(var n in t)$n(e,n,{get:t[n],enumerable:!0})},z={};En(z,{assign:()=>zn,colors:()=>H,createStringInterpolator:()=>mt,skipAnimation:()=>tn,to:()=>en,willAdvance:()=>pt});function Xe(){}var On=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),c={arr:Array.isArray,obj:e=>!!e&&e.constructor.name==="Object",fun:e=>typeof e=="function",str:e=>typeof e=="string",num:e=>typeof e=="number",und:e=>e===void 0};function L(e,t){if(c.arr(e)){if(!c.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var S=(e,t)=>e.forEach(t);function q(e,t,n){if(c.arr(e)){for(let i=0;i<e.length;i++)t.call(n,e[i],`${i}`);return}for(const i in e)e.hasOwnProperty(i)&&t.call(n,e[i],i)}var R=e=>c.und(e)?[]:c.arr(e)?e:[e];function ce(e,t){if(e.size){const n=Array.from(e);e.clear(),S(n,t)}}var ue=(e,...t)=>ce(e,n=>n(...t)),ft=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),mt,en,H=null,tn=!1,pt=Xe,zn=e=>{e.to&&(en=e.to),e.now&&(_.now=e.now),e.colors!==void 0&&(H=e.colors),e.skipAnimation!=null&&(tn=e.skipAnimation),e.createStringInterpolator&&(mt=e.createStringInterpolator),e.requestAnimationFrame&&_.use(e.requestAnimationFrame),e.batchedUpdates&&(_.batchedUpdates=e.batchedUpdates),e.willAdvance&&(pt=e.willAdvance),e.frameLoop&&(_.frameLoop=e.frameLoop)},le=new Set,V=[],Ue=[],Me=0,Ee={get idle(){return!le.size&&!V.length},start(e){Me>e.priority?(le.add(e),_.onStart(Nn)):(nn(e),_(et))},advance:et,sort(e){if(Me)_.onFrame(()=>Ee.sort(e));else{const t=V.indexOf(e);~t&&(V.splice(t,1),sn(e))}},clear(){V=[],le.clear()}};function Nn(){le.forEach(nn),le.clear(),_(et)}function nn(e){V.includes(e)||sn(e)}function sn(e){V.splice(Dn(V,t=>t.priority>e.priority),0,e)}function et(e){const t=Ue;for(let n=0;n<V.length;n++){const i=V[n];Me=i.priority,i.idle||(pt(i),i.advance(e),i.idle||t.push(i))}return Me=0,Ue=V,Ue.length=0,V=t,V.length>0}function Dn(e,t){const n=e.findIndex(t);return n<0?e.length:n}var qn=(e,t,n)=>Math.min(Math.max(n,e),t),Ln={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},O="[-+]?\\d*\\.?\\d+",Re=O+"%";function Oe(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Un=new RegExp("rgb"+Oe(O,O,O)),Qn=new RegExp("rgba"+Oe(O,O,O,O)),Bn=new RegExp("hsl"+Oe(O,Re,Re)),Hn=new RegExp("hsla"+Oe(O,Re,Re,O)),Gn=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Zn=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Yn=/^#([0-9a-fA-F]{6})$/,Wn=/^#([0-9a-fA-F]{8})$/;function Jn(e){let t;return typeof e=="number"?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Yn.exec(e))?parseInt(t[1]+"ff",16)>>>0:H&&H[e]!==void 0?H[e]:(t=Un.exec(e))?(K(t[1])<<24|K(t[2])<<16|K(t[3])<<8|255)>>>0:(t=Qn.exec(e))?(K(t[1])<<24|K(t[2])<<16|K(t[3])<<8|Ct(t[4]))>>>0:(t=Gn.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Wn.exec(e))?parseInt(t[1],16)>>>0:(t=Zn.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Bn.exec(e))?(At(kt(t[1]),ke(t[2]),ke(t[3]))|255)>>>0:(t=Hn.exec(e))?(At(kt(t[1]),ke(t[2]),ke(t[3]))|Ct(t[4]))>>>0:null}function Qe(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function At(e,t,n){const i=n<.5?n*(1+t):n+t-n*t,s=2*n-i,r=Qe(s,i,e+1/3),a=Qe(s,i,e),o=Qe(s,i,e-1/3);return Math.round(r*255)<<24|Math.round(a*255)<<16|Math.round(o*255)<<8}function K(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function kt(e){return(parseFloat(e)%360+360)%360/360}function Ct(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(t*255)}function ke(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function It(e){let t=Jn(e);if(t===null)return e;t=t||0;const n=(t&4278190080)>>>24,i=(t&16711680)>>>16,s=(t&65280)>>>8,r=(t&255)/255;return`rgba(${n}, ${i}, ${s}, ${r})`}var fe=(e,t,n)=>{if(c.fun(e))return e;if(c.arr(e))return fe({range:e,output:t,extrapolate:n});if(c.str(e.output[0]))return mt(e);const i=e,s=i.output,r=i.range||[0,1],a=i.extrapolateLeft||i.extrapolate||"extend",o=i.extrapolateRight||i.extrapolate||"extend",l=i.easing||(u=>u);return u=>{const h=Xn(u,r);return Kn(u,r[h],r[h+1],s[h],s[h+1],l,a,o,i.map)}};function Kn(e,t,n,i,s,r,a,o,l){let u=l?l(e):e;if(u<t){if(a==="identity")return u;a==="clamp"&&(u=t)}if(u>n){if(o==="identity")return u;o==="clamp"&&(u=n)}return i===s?i:t===n?e<=t?i:s:(t===-1/0?u=-u:n===1/0?u=u-t:u=(u-t)/(n-t),u=r(u),i===-1/0?u=-u:s===1/0?u=u+i:u=u*(s-i)+i,u)}function Xn(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}var ei=(e,t="end")=>n=>{n=t==="end"?Math.min(n,.999):Math.max(n,.001);const i=n*e,s=t==="end"?Math.floor(i):Math.ceil(i);return qn(0,1,s/e)},Te=1.70158,Ce=Te*1.525,Pt=Te+1,jt=2*Math.PI/3,Mt=2*Math.PI/4.5,Ie=e=>e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375,rn={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>e===0?0:Math.pow(2,10*e-10),easeOutExpo:e=>e===1?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>e===0?0:e===1?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Pt*e*e*e-Te*e*e,easeOutBack:e=>1+Pt*Math.pow(e-1,3)+Te*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*((Ce+1)*2*e-Ce)/2:(Math.pow(2*e-2,2)*((Ce+1)*(e*2-2)+Ce)+2)/2,easeInElastic:e=>e===0?0:e===1?1:-Math.pow(2,10*e-10)*Math.sin((e*10-10.75)*jt),easeOutElastic:e=>e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin((e*10-.75)*jt)+1,easeInOutElastic:e=>e===0?0:e===1?1:e<.5?-(Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Mt))/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Mt)/2+1,easeInBounce:e=>1-Ie(1-e),easeOutBounce:Ie,easeInOutBounce:e=>e<.5?(1-Ie(1-2*e))/2:(1+Ie(2*e-1))/2,steps:ei},me=Symbol.for("FluidValue.get"),te=Symbol.for("FluidValue.observers"),F=e=>!!(e&&e[me]),M=e=>e&&e[me]?e[me]():e,Rt=e=>e[te]||null;function ti(e,t){e.eventObserved?e.eventObserved(t):e(t)}function pe(e,t){const n=e[te];n&&n.forEach(i=>{ti(i,t)})}var an=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");ni(this,e)}},ni=(e,t)=>on(e,me,t);function ne(e,t){if(e[me]){let n=e[te];n||on(e,te,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function ge(e,t){const n=e[te];if(n&&n.has(t)){const i=n.size-1;i?n.delete(t):e[te]=null,e.observerRemoved&&e.observerRemoved(i,t)}}var on=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Pe=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,ii=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Tt=new RegExp(`(${Pe.source})(%|[a-z]+)`,"i"),si=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,ze=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,un=e=>{const[t,n]=ri(e);if(!t||ft())return e;const i=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(i)return i.trim();if(n&&n.startsWith("--")){const s=window.getComputedStyle(document.documentElement).getPropertyValue(n);return s||e}else{if(n&&ze.test(n))return un(n);if(n)return n}return e},ri=e=>{const t=ze.exec(e);if(!t)return[,];const[,n,i]=t;return[n,i]},Be,ai=(e,t,n,i,s)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(i)}, ${s})`,cn=e=>{Be||(Be=H?new RegExp(`(${Object.keys(H).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map(r=>M(r).replace(ze,un).replace(ii,It).replace(Be,It)),n=t.map(r=>r.match(Pe).map(Number)),s=n[0].map((r,a)=>n.map(o=>{if(!(a in o))throw Error('The arity of each "output" value must be equal');return o[a]})).map(r=>fe({...e,output:r}));return r=>{var l;const a=!Tt.test(t[0])&&((l=t.find(u=>Tt.test(u)))==null?void 0:l.replace(Pe,""));let o=0;return t[0].replace(Pe,()=>`${s[o++](r)}${a||""}`).replace(si,ai)}},gt="react-spring: ",ln=e=>{const t=e;let n=!1;if(typeof t!="function")throw new TypeError(`${gt}once requires a function parameter`);return(...i)=>{n||(t(...i),n=!0)}},oi=ln(console.warn);function ui(){oi(`${gt}The "interpolate" function is deprecated in v9 (use "to" instead)`)}var ci=ln(console.warn);function li(){ci(`${gt}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function Ne(e){return c.str(e)&&(e[0]=="#"||/\d/.test(e)||!ft()&&ze.test(e)||e in(H||{}))}var vt=ft()?k.useEffect:k.useLayoutEffect,di=()=>{const e=k.useRef(!1);return vt(()=>(e.current=!0,()=>{e.current=!1}),[]),e};function dn(){const e=k.useState()[1],t=di();return()=>{t.current&&e(Math.random())}}function hi(e,t){const[n]=k.useState(()=>({inputs:t,result:e()})),i=k.useRef(),s=i.current;let r=s;return r?t&&r.inputs&&fi(t,r.inputs)||(r={inputs:t,result:e()}):r=n,k.useEffect(()=>{i.current=r,s==n&&(n.inputs=n.result=void 0)},[r]),r.result}function fi(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var hn=e=>k.useEffect(e,mi),mi=[];function Ft(e){const t=k.useRef();return k.useEffect(()=>{t.current=e}),t.current}var ve=Symbol.for("Animated:node"),pi=e=>!!e&&e[ve]===e,D=e=>e&&e[ve],yt=(e,t)=>On(e,ve,t),De=e=>e&&e[ve]&&e[ve].getPayload(),fn=class{constructor(){yt(this,this)}getPayload(){return this.payload||[]}},Ae=class extends fn{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,c.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Ae(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return c.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value===e?!1:(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,c.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},ye=class extends Ae{constructor(e){super(0),this._string=null,this._toString=fe({output:[e,e]})}static create(e){return new ye(e)}getValue(){const e=this._string;return e??(this._string=this._toString(this._value))}setValue(e){if(c.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else if(super.setValue(e))this._string=null;else return!1;return!0}reset(e){e&&(this._toString=fe({output:[this.getValue(),e]})),this._value=0,super.reset()}},Fe={dependencies:null},qe=class extends fn{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return q(this.source,(n,i)=>{pi(n)?t[i]=n.getValue(e):F(n)?t[i]=M(n):e||(t[i]=n)}),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&S(this.payload,e=>e.reset())}_makePayload(e){if(e){const t=new Set;return q(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Fe.dependencies&&F(e)&&Fe.dependencies.add(e);const t=De(e);t&&S(t,n=>this.add(n))}},mn=class extends qe{constructor(e){super(e)}static create(e){return new mn(e)}getValue(){return this.source.map(e=>e.getValue())}setValue(e){const t=this.getPayload();return e.length==t.length?t.map((n,i)=>n.setValue(e[i])).some(Boolean):(super.setValue(e.map(gi)),!0)}};function gi(e){return(Ne(e)?ye:Ae).create(e)}function tt(e){const t=D(e);return t?t.constructor:c.arr(e)?mn:Ne(e)?ye:Ae}var Vt=(e,t)=>{const n=!c.fun(e)||e.prototype&&e.prototype.isReactComponent;return k.forwardRef((i,s)=>{const r=k.useRef(null),a=n&&k.useCallback(y=>{r.current=bi(s,y)},[s]),[o,l]=yi(i,t),u=dn(),h=()=>{const y=r.current;if(n&&!y)return;(y?t.applyAnimatedValues(y,o.getValue(!0)):!1)===!1&&u()},d=new vi(h,l),f=k.useRef();vt(()=>(f.current=d,S(l,y=>ne(y,d)),()=>{f.current&&(S(f.current.deps,y=>ge(y,f.current)),_.cancel(f.current.update))})),k.useEffect(h,[]),hn(()=>()=>{const y=f.current;S(y.deps,b=>ge(b,y))});const v=t.getComponentProps(o.getValue());return k.createElement(e,{...v,ref:a})})},vi=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){e.type=="change"&&_.write(this.update)}};function yi(e,t){const n=new Set;return Fe.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)}),e=new qe(e),Fe.dependencies=null,[e,n]}function bi(e,t){return e&&(c.fun(e)?e(t):e.current=t),t}var $t=Symbol.for("AnimatedComponent"),wi=(e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:n=s=>new qe(s),getComponentProps:i=s=>s}={})=>{const s={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:i},r=a=>{const o=Et(a)||"Anonymous";return c.str(a)?a=r[a]||(r[a]=Vt(a,s)):a=a[$t]||(a[$t]=Vt(a,s)),a.displayName=`Animated(${o})`,a};return q(e,(a,o)=>{c.arr(e)&&(o=Et(a)),r[o]=r(a)}),{animated:r}},Et=e=>c.str(e)?e:e&&c.str(e.displayName)?e.displayName:c.fun(e)&&e.name||null;function G(e,...t){return c.fun(e)?e(...t):e}var de=(e,t)=>e===!0||!!(t&&e&&(c.fun(e)?e(t):R(e).includes(t))),pn=(e,t)=>c.obj(e)?t&&e[t]:e,gn=(e,t)=>e.default===!0?e[t]:e.default?e.default[t]:void 0,_i=e=>e,bt=(e,t=_i)=>{let n=xi;e.default&&e.default!==!0&&(e=e.default,n=Object.keys(e));const i={};for(const s of n){const r=t(e[s],s);c.und(r)||(i[s]=r)}return i},xi=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Si={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ai(e){const t={};let n=0;if(q(e,(i,s)=>{Si[s]||(t[s]=i,n++)}),n)return t}function vn(e){const t=Ai(e);if(t){const n={to:t};return q(e,(i,s)=>s in t||(n[s]=i)),n}return{...e}}function be(e){return e=M(e),c.arr(e)?e.map(be):Ne(e)?z.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function ki(e){for(const t in e)return!0;return!1}function nt(e){return c.fun(e)||c.arr(e)&&c.obj(e[0])}function Ci(e,t){var n;(n=e.ref)==null||n.delete(e),t==null||t.delete(e)}function Ii(e,t){var n;t&&e.ref!==t&&((n=e.ref)==null||n.delete(e),t.add(e),e.ref=t)}var Pi={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},it={...Pi.default,mass:1,damping:1,easing:rn.linear,clamp:!1},ji=class{constructor(){this.velocity=0,Object.assign(this,it)}};function Mi(e,t,n){n&&(n={...n},Ot(n,t),t={...n,...t}),Ot(e,t),Object.assign(e,t);for(const a in it)e[a]==null&&(e[a]=it[a]);let{frequency:i,damping:s}=e;const{mass:r}=e;return c.und(i)||(i<.01&&(i=.01),s<0&&(s=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*s*r/i),e}function Ot(e,t){if(!c.und(t.decay))e.duration=void 0;else{const n=!c.und(t.tension)||!c.und(t.friction);(n||!c.und(t.frequency)||!c.und(t.damping)||!c.und(t.mass))&&(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}}var zt=[],Ri=class{constructor(){this.changed=!1,this.values=zt,this.toValues=null,this.fromValues=zt,this.config=new ji,this.immediate=!1}};function yn(e,{key:t,props:n,defaultProps:i,state:s,actions:r}){return new Promise((a,o)=>{let l,u,h=de(n.cancel??(i==null?void 0:i.cancel),t);if(h)v();else{c.und(n.pause)||(s.paused=de(n.pause,t));let y=i==null?void 0:i.pause;y!==!0&&(y=s.paused||de(y,t)),l=G(n.delay||0,t),y?(s.resumeQueue.add(f),r.pause()):(r.resume(),f())}function d(){s.resumeQueue.add(f),s.timeouts.delete(u),u.cancel(),l=u.time-_.now()}function f(){l>0&&!z.skipAnimation?(s.delayed=!0,u=_.setTimeout(v,l),s.pauseQueue.add(d),s.timeouts.add(u)):v()}function v(){s.delayed&&(s.delayed=!1),s.pauseQueue.delete(d),s.timeouts.delete(u),e<=(s.cancelId||0)&&(h=!0);try{r.start({...n,callId:e,cancel:h},a)}catch(y){o(y)}}})}var wt=(e,t)=>t.length==1?t[0]:t.some(n=>n.cancelled)?ee(e.get()):t.every(n=>n.noop)?bn(e.get()):E(e.get(),t.every(n=>n.finished)),bn=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),E=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),ee=e=>({value:e,cancelled:!0,finished:!1});function wn(e,t,n,i){const{callId:s,parentId:r,onRest:a}=t,{asyncTo:o,promise:l}=n;return!r&&e===o&&!t.reset?l:n.promise=(async()=>{n.asyncId=s,n.asyncTo=e;const u=bt(t,(x,m)=>m==="onRest"?void 0:x);let h,d;const f=new Promise((x,m)=>(h=x,d=m)),v=x=>{const m=s<=(n.cancelId||0)&&ee(i)||s!==n.asyncId&&E(i,!1);if(m)throw x.result=m,d(x),x},y=(x,m)=>{const w=new Nt,p=new Dt;return(async()=>{if(z.skipAnimation)throw we(n),p.result=E(i,!1),d(p),p;v(w);const A=c.obj(x)?{...x}:{...m,to:x};A.parentId=s,q(u,(N,j)=>{c.und(A[j])&&(A[j]=N)});const P=await i.start(A);return v(w),n.paused&&await new Promise(N=>{n.resumeQueue.add(N)}),P})()};let b;if(z.skipAnimation)return we(n),E(i,!1);try{let x;c.arr(e)?x=(async m=>{for(const w of m)await y(w)})(e):x=Promise.resolve(e(y,i.stop.bind(i))),await Promise.all([x.then(h),f]),b=E(i.get(),!0,!1)}catch(x){if(x instanceof Nt)b=x.result;else if(x instanceof Dt)b=x.result;else throw x}finally{s==n.asyncId&&(n.asyncId=r,n.asyncTo=r?o:void 0,n.promise=r?l:void 0)}return c.fun(a)&&_.batchedUpdates(()=>{a(b,i,i.item)}),b})()}function we(e,t){ce(e.timeouts,n=>n.cancel()),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Nt=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Dt=class extends Error{constructor(){super("SkipAnimationSignal")}},st=e=>e instanceof _t,Ti=1,_t=class extends an{constructor(){super(...arguments),this.id=Ti++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=D(this);return e&&e.getValue()}to(...e){return z.to(this,e)}interpolate(...e){return ui(),z.to(this,e)}toJSON(){return this.get()}observerAdded(e){e==1&&this._attach()}observerRemoved(e){e==0&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){pe(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Ee.sort(this),pe(this,{type:"priority",parent:this,priority:e})}},Z=Symbol.for("SpringPhase"),_n=1,rt=2,at=4,He=e=>(e[Z]&_n)>0,U=e=>(e[Z]&rt)>0,se=e=>(e[Z]&at)>0,qt=(e,t)=>t?e[Z]|=rt|_n:e[Z]&=~rt,Lt=(e,t)=>t?e[Z]|=at:e[Z]&=~at,Fi=class extends _t{constructor(e,t){if(super(),this.animation=new Ri,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!c.und(e)||!c.und(t)){const n=c.obj(e)?{...e}:{...t,from:e};c.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(U(this)||this._state.asyncTo)||se(this)}get goal(){return M(this.animation.to)}get velocity(){const e=D(this);return e instanceof Ae?e.lastVelocity||0:e.getPayload().map(t=>t.lastVelocity||0)}get hasAnimated(){return He(this)}get isAnimating(){return U(this)}get isPaused(){return se(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const i=this.animation;let{toValues:s}=i;const{config:r}=i,a=De(i.to);!a&&F(i.to)&&(s=R(M(i.to))),i.values.forEach((u,h)=>{if(u.done)return;const d=u.constructor==ye?1:a?a[h].lastPosition:s[h];let f=i.immediate,v=d;if(!f){if(v=u.lastPosition,r.tension<=0){u.done=!0;return}let y=u.elapsedTime+=e;const b=i.fromValues[h],x=u.v0!=null?u.v0:u.v0=c.arr(r.velocity)?r.velocity[h]:r.velocity;let m;const w=r.precision||(b==d?.005:Math.min(1,Math.abs(d-b)*.001));if(c.und(r.duration))if(r.decay){const p=r.decay===!0?.998:r.decay,A=Math.exp(-(1-p)*y);v=b+x/(1-p)*(1-A),f=Math.abs(u.lastPosition-v)<=w,m=x*A}else{m=u.lastVelocity==null?x:u.lastVelocity;const p=r.restVelocity||w/10,A=r.clamp?0:r.bounce,P=!c.und(A),N=b==d?u.v0>0:b<d;let j,Y=!1;const T=1,ie=Math.ceil(e/T);for(let $=0;$<ie&&(j=Math.abs(m)>p,!(!j&&(f=Math.abs(d-v)<=w,f)));++$){P&&(Y=v==d||v>d==N,Y&&(m=-m*A,v=d));const W=-r.tension*1e-6*(v-d),J=-r.friction*.001*m,jn=(W+J)/r.mass;m=m+jn*T,v=v+m*T}}else{let p=1;r.duration>0&&(this._memoizedDuration!==r.duration&&(this._memoizedDuration=r.duration,u.durationProgress>0&&(u.elapsedTime=r.duration*u.durationProgress,y=u.elapsedTime+=e)),p=(r.progress||0)+y/this._memoizedDuration,p=p>1?1:p<0?0:p,u.durationProgress=p),v=b+r.easing(p)*(d-b),m=(v-u.lastPosition)/e,f=p==1}u.lastVelocity=m,Number.isNaN(v)&&(console.warn("Got NaN while animating:",this),f=!0)}a&&!a[h].done&&(f=!1),f?u.done=!0:t=!1,u.setValue(v,r.round)&&(n=!0)});const o=D(this),l=o.getValue();if(t){const u=M(i.to);(l!==u||n)&&!r.decay?(o.setValue(u),this._onChange(u)):n&&r.decay&&this._onChange(l),this._stop()}else n&&this._onChange(l)}set(e){return _.batchedUpdates(()=>{this._stop(),this._focus(e),this._set(e)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(U(this)){const{to:e,config:t}=this.animation;_.batchedUpdates(()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()})}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return c.und(e)?(n=this.queue||[],this.queue=[]):n=[c.obj(e)?e:{...t,to:e}],Promise.all(n.map(i=>this._update(i))).then(i=>wt(this,i))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),we(this._state,e&&this._lastCallId),_.batchedUpdates(()=>this._stop(t,e)),this}reset(){this._update({reset:!0})}eventObserved(e){e.type=="change"?this._start():e.type=="priority"&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:i}=e;n=c.obj(n)?n[t]:n,(n==null||nt(n))&&(n=void 0),i=c.obj(i)?i[t]:i,i==null&&(i=void 0);const s={to:n,from:i};return He(this)||(e.reverse&&([n,i]=[i,n]),i=M(i),c.und(i)?D(this)||this._set(n):this._set(i)),s}_update({...e},t){const{key:n,defaultProps:i}=this;e.default&&Object.assign(i,bt(e,(a,o)=>/^on/.test(o)?pn(a,n):a)),Qt(this,e,"onProps"),ae(this,"onProps",e,this);const s=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const r=this._state;return yn(++this._lastCallId,{key:n,props:e,defaultProps:i,state:r,actions:{pause:()=>{se(this)||(Lt(this,!0),ue(r.pauseQueue),ae(this,"onPause",E(this,re(this,this.animation.to)),this))},resume:()=>{se(this)&&(Lt(this,!1),U(this)&&this._resume(),ue(r.resumeQueue),ae(this,"onResume",E(this,re(this,this.animation.to)),this))},start:this._merge.bind(this,s)}}).then(a=>{if(e.loop&&a.finished&&!(t&&a.noop)){const o=xn(e);if(o)return this._update(o,!0)}return a})}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(ee(this));const i=!c.und(e.to),s=!c.und(e.from);if(i||s)if(t.callId>this._lastToId)this._lastToId=t.callId;else return n(ee(this));const{key:r,defaultProps:a,animation:o}=this,{to:l,from:u}=o;let{to:h=l,from:d=u}=e;s&&!i&&(!t.default||c.und(h))&&(h=d),t.reverse&&([h,d]=[d,h]);const f=!L(d,u);f&&(o.from=d),d=M(d);const v=!L(h,l);v&&this._focus(h);const y=nt(t.to),{config:b}=o,{decay:x,velocity:m}=b;(i||s)&&(b.velocity=0),t.config&&!y&&Mi(b,G(t.config,r),t.config!==a.config?G(a.config,r):void 0);let w=D(this);if(!w||c.und(h))return n(E(this,!0));const p=c.und(t.reset)?s&&!t.default:!c.und(d)&&de(t.reset,r),A=p?d:this.get(),P=be(h),N=c.num(P)||c.arr(P)||Ne(P),j=!y&&(!N||de(a.immediate||t.immediate,r));if(v){const $=tt(h);if($!==w.constructor)if(j)w=this._set(P);else throw Error(`Cannot animate between ${w.constructor.name} and ${$.name}, as the "to" prop suggests`)}const Y=w.constructor;let T=F(h),ie=!1;if(!T){const $=p||!He(this)&&f;(v||$)&&(ie=L(be(A),P),T=!ie),(!L(o.immediate,j)&&!j||!L(b.decay,x)||!L(b.velocity,m))&&(T=!0)}if(ie&&U(this)&&(o.changed&&!p?T=!0:T||this._stop(l)),!y&&((T||F(l))&&(o.values=w.getPayload(),o.toValues=F(h)?null:Y==ye?[1]:R(P)),o.immediate!=j&&(o.immediate=j,!j&&!p&&this._set(l)),T)){const{onRest:$}=o;S($i,J=>Qt(this,t,J));const W=E(this,re(this,l));ue(this._pendingCalls,W),this._pendingCalls.add(n),o.changed&&_.batchedUpdates(()=>{var J;o.changed=!p,$==null||$(W,this),p?G(a.onRest,W):(J=o.onStart)==null||J.call(o,W,this)})}p&&this._set(A),y?n(wn(t.to,t,this._state,this)):T?this._start():U(this)&&!v?this._pendingCalls.add(n):n(bn(A))}_focus(e){const t=this.animation;e!==t.to&&(Rt(this)&&this._detach(),t.to=e,Rt(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;F(t)&&(ne(t,this),st(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;F(e)&&ge(e,this)}_set(e,t=!0){const n=M(e);if(!c.und(n)){const i=D(this);if(!i||!L(n,i.getValue())){const s=tt(n);!i||i.constructor!=s?yt(this,s.create(n)):i.setValue(n),i&&_.batchedUpdates(()=>{this._onChange(n,t)})}}return D(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,ae(this,"onStart",E(this,re(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),G(this.animation.onChange,e,this)),G(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;D(this).reset(M(e.to)),e.immediate||(e.fromValues=e.values.map(t=>t.lastPosition)),U(this)||(qt(this,!0),se(this)||this._resume())}_resume(){z.skipAnimation?this.finish():Ee.start(this)}_stop(e,t){if(U(this)){qt(this,!1);const n=this.animation;S(n.values,s=>{s.done=!0}),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),pe(this,{type:"idle",parent:this});const i=t?ee(this.get()):E(this.get(),re(this,e??n.to));ue(this._pendingCalls,i),n.changed&&(n.changed=!1,ae(this,"onRest",i,this))}}};function re(e,t){const n=be(t),i=be(e.get());return L(i,n)}function xn(e,t=e.loop,n=e.to){const i=G(t);if(i){const s=i!==!0&&vn(i),r=(s||e).reverse,a=!s||s.reset;return _e({...e,loop:t,default:!1,pause:void 0,to:!r||nt(n)?n:void 0,from:a?e.from:void 0,reset:a,...s})}}function _e(e){const{to:t,from:n}=e=vn(e),i=new Set;return c.obj(t)&&Ut(t,i),c.obj(n)&&Ut(n,i),e.keys=i.size?Array.from(i):null,e}function Vi(e){const t=_e(e);return c.und(t.default)&&(t.default=bt(t)),t}function Ut(e,t){q(e,(n,i)=>n!=null&&t.add(i))}var $i=["onStart","onRest","onChange","onPause","onResume"];function Qt(e,t,n){e.animation[n]=t[n]!==gn(t,n)?pn(t[n],e.key):void 0}function ae(e,t,...n){var i,s,r,a;(s=(i=e.animation)[t])==null||s.call(i,...n),(a=(r=e.defaultProps)[t])==null||a.call(r,...n)}var Ei=["onStart","onChange","onRest"],Oi=1,zi=class{constructor(e,t){this.id=Oi++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(e=>e.idle&&!e.isDelayed&&!e.isPaused)}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each((t,n)=>e[n]=t.get()),e}set(e){for(const t in e){const n=e[t];c.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(_e(e)),this}start(e){let{queue:t}=this;return e?t=R(e).map(_e):this.queue=[],this._flush?this._flush(this,t):(In(this,t),ot(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;S(R(t),i=>n[i].stop(!!e))}else we(this._state,this._lastAsyncId),this.each(n=>n.stop(!!e));return this}pause(e){if(c.und(e))this.start({pause:!0});else{const t=this.springs;S(R(e),n=>t[n].pause())}return this}resume(e){if(c.und(e))this.start({pause:!1});else{const t=this.springs;S(R(e),n=>t[n].resume())}return this}each(e){q(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,i=this._active.size>0,s=this._changed.size>0;(i&&!this._started||s&&!this._started)&&(this._started=!0,ce(e,([o,l])=>{l.value=this.get(),o(l,this,this._item)}));const r=!i&&this._started,a=s||r&&n.size?this.get():null;s&&t.size&&ce(t,([o,l])=>{l.value=a,o(l,this,this._item)}),r&&(this._started=!1,ce(n,([o,l])=>{l.value=a,o(l,this,this._item)}))}eventObserved(e){if(e.type=="change")this._changed.add(e.parent),e.idle||this._active.add(e.parent);else if(e.type=="idle")this._active.delete(e.parent);else return;_.onFrame(this._onFrame)}};function ot(e,t){return Promise.all(t.map(n=>Sn(e,n))).then(n=>wt(e,n))}async function Sn(e,t,n){const{keys:i,to:s,from:r,loop:a,onRest:o,onResolve:l}=t,u=c.obj(t.default)&&t.default;a&&(t.loop=!1),s===!1&&(t.to=null),r===!1&&(t.from=null);const h=c.arr(s)||c.fun(s)?s:void 0;h?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):S(Ei,b=>{const x=t[b];if(c.fun(x)){const m=e._events[b];t[b]=({finished:w,cancelled:p})=>{const A=m.get(x);A?(w||(A.finished=!1),p&&(A.cancelled=!0)):m.set(x,{value:null,finished:w||!1,cancelled:p||!1})},u&&(u[b]=t[b])}});const d=e._state;t.pause===!d.paused?(d.paused=t.pause,ue(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const f=(i||Object.keys(e.springs)).map(b=>e.springs[b].start(t)),v=t.cancel===!0||gn(t,"cancel")===!0;(h||v&&d.asyncId)&&f.push(yn(++e._lastAsyncId,{props:t,state:d,actions:{pause:Xe,resume:Xe,start(b,x){v?(we(d,e._lastAsyncId),x(ee(e))):(b.onRest=o,x(wn(h,b,d,e)))}}})),d.paused&&await new Promise(b=>{d.resumeQueue.add(b)});const y=wt(e,await Promise.all(f));if(a&&y.finished&&!(n&&y.noop)){const b=xn(t,a,s);if(b)return In(e,[b]),Sn(e,b,!0)}return l&&_.batchedUpdates(()=>l(y,e,e.item)),y}function Bt(e,t){const n={...e.springs};return t&&S(R(t),i=>{c.und(i.keys)&&(i=_e(i)),c.obj(i.to)||(i={...i,to:void 0}),Cn(n,i,s=>kn(s))}),An(e,n),n}function An(e,t){q(t,(n,i)=>{e.springs[i]||(e.springs[i]=n,ne(n,e))})}function kn(e,t){const n=new Fi;return n.key=e,t&&ne(n,t),n}function Cn(e,t,n){t.keys&&S(t.keys,i=>{(e[i]||(e[i]=n(i)))._prepareNode(t)})}function In(e,t){S(t,n=>{Cn(e.springs,n,i=>kn(i,e))})}var Le=({children:e,...t})=>{const n=k.useContext(Ve),i=t.pause||!!n.pause,s=t.immediate||!!n.immediate;t=hi(()=>({pause:i,immediate:s}),[i,s]);const{Provider:r}=Ve;return k.createElement(r,{value:t},e)},Ve=Ni(Le,{});Le.Provider=Ve.Provider;Le.Consumer=Ve.Consumer;function Ni(e,t){return Object.assign(e,k.createContext(t)),e.Provider._context=e,e.Consumer._context=e,e}var Di=()=>{const e=[],t=function(i){li();const s=[];return S(e,(r,a)=>{if(c.und(i))s.push(r.start());else{const o=n(i,r,a);o&&s.push(r.start(o))}}),s};t.current=e,t.add=function(i){e.includes(i)||e.push(i)},t.delete=function(i){const s=e.indexOf(i);~s&&e.splice(s,1)},t.pause=function(){return S(e,i=>i.pause(...arguments)),this},t.resume=function(){return S(e,i=>i.resume(...arguments)),this},t.set=function(i){S(e,(s,r)=>{const a=c.fun(i)?i(r,s):i;a&&s.set(a)})},t.start=function(i){const s=[];return S(e,(r,a)=>{if(c.und(i))s.push(r.start());else{const o=this._getProps(i,r,a);o&&s.push(r.start(o))}}),s},t.stop=function(){return S(e,i=>i.stop(...arguments)),this},t.update=function(i){return S(e,(s,r)=>s.update(this._getProps(i,s,r))),this};const n=function(i,s,r){return c.fun(i)?i(r,s):i};return t._getProps=n,t};function qi(e,t,n){const i=c.fun(t)&&t;i&&!n&&(n=[]);const s=k.useMemo(()=>i||arguments.length==3?Di():void 0,[]),r=k.useRef(0),a=dn(),o=k.useMemo(()=>({ctrls:[],queue:[],flush(m,w){const p=Bt(m,w);return r.current>0&&!o.queue.length&&!Object.keys(p).some(P=>!m.springs[P])?ot(m,w):new Promise(P=>{An(m,p),o.queue.push(()=>{P(ot(m,w))}),a()})}}),[]),l=k.useRef([...o.ctrls]),u=[],h=Ft(e)||0;k.useMemo(()=>{S(l.current.slice(e,h),m=>{Ci(m,s),m.stop(!0)}),l.current.length=e,d(h,e)},[e]),k.useMemo(()=>{d(0,Math.min(h,e))},n);function d(m,w){for(let p=m;p<w;p++){const A=l.current[p]||(l.current[p]=new zi(null,o.flush)),P=i?i(p,A):t[p];P&&(u[p]=Vi(P))}}const f=l.current.map((m,w)=>Bt(m,u[w])),v=k.useContext(Le),y=Ft(v),b=v!==y&&ki(v);vt(()=>{r.current++,o.ctrls=l.current;const{queue:m}=o;m.length&&(o.queue=[],S(m,w=>w())),S(l.current,(w,p)=>{s==null||s.add(w),b&&w.start({default:v});const A=u[p];A&&(Ii(w,A.ref),w.ref?w.queue.push(A):w.start(A))})}),hn(()=>()=>{S(o.ctrls,m=>m.stop(!0))});const x=f.map(m=>({...m}));return s?[x,s]:x}var Li=class extends _t{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=fe(...t);const n=this._get(),i=tt(n);yt(this,i.create(n))}advance(e){const t=this._get(),n=this.get();L(t,n)||(D(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Ht(this._active)&&Ge(this)}_get(){const e=c.arr(this.source)?this.source.map(M):R(M(this.source));return this.calc(...e)}_start(){this.idle&&!Ht(this._active)&&(this.idle=!1,S(De(this),e=>{e.done=!1}),z.skipAnimation?(_.batchedUpdates(()=>this.advance()),Ge(this)):Ee.start(this))}_attach(){let e=1;S(R(this.source),t=>{F(t)&&ne(t,this),st(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))}),this.priority=e,this._start()}_detach(){S(R(this.source),e=>{F(e)&&ge(e,this)}),this._active.clear(),Ge(this)}eventObserved(e){e.type=="change"?e.idle?this.advance():(this._active.add(e.parent),this._start()):e.type=="idle"?this._active.delete(e.parent):e.type=="priority"&&(this.priority=R(this.source).reduce((t,n)=>Math.max(t,(st(n)?n.priority:0)+1),0))}};function Ui(e){return e.idle!==!1}function Ht(e){return!e.size||Array.from(e).every(Ui)}function Ge(e){e.idle||(e.idle=!0,S(De(e),t=>{t.done=!0}),pe(e,{type:"idle",parent:e}))}z.assign({createStringInterpolator:cn,to:(e,t)=>new Li(e,t)});var Pn=/^--/;function Qi(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t=="number"&&t!==0&&!Pn.test(e)&&!(he.hasOwnProperty(e)&&he[e])?t+"px":(""+t).trim()}var Gt={};function Bi(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n=e.nodeName==="filter"||e.parentNode&&e.parentNode.nodeName==="filter",{className:i,style:s,children:r,scrollTop:a,scrollLeft:o,viewBox:l,...u}=t,h=Object.values(u),d=Object.keys(u).map(f=>n||e.hasAttribute(f)?f:Gt[f]||(Gt[f]=f.replace(/([A-Z])/g,v=>"-"+v.toLowerCase())));r!==void 0&&(e.textContent=r);for(const f in s)if(s.hasOwnProperty(f)){const v=Qi(f,s[f]);Pn.test(f)?e.style.setProperty(f,v):e.style[f]=v}d.forEach((f,v)=>{e.setAttribute(f,h[v])}),i!==void 0&&(e.className=i),a!==void 0&&(e.scrollTop=a),o!==void 0&&(e.scrollLeft=o),l!==void 0&&e.setAttribute("viewBox",l)}var he={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hi=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1),Gi=["Webkit","Ms","Moz","O"];he=Object.keys(he).reduce((e,t)=>(Gi.forEach(n=>e[Hi(n,t)]=e[t]),e),he);var Zi=/^(matrix|translate|scale|rotate|skew)/,Yi=/^(translate)/,Wi=/^(rotate|skew)/,Ze=(e,t)=>c.num(e)&&e!==0?e+t:e,je=(e,t)=>c.arr(e)?e.every(n=>je(n,t)):c.num(e)?e===t:parseFloat(e)===t,Ji=class extends qe{constructor({x:e,y:t,z:n,...i}){const s=[],r=[];(e||t||n)&&(s.push([e||0,t||0,n||0]),r.push(a=>[`translate3d(${a.map(o=>Ze(o,"px")).join(",")})`,je(a,0)])),q(i,(a,o)=>{if(o==="transform")s.push([a||""]),r.push(l=>[l,l===""]);else if(Zi.test(o)){if(delete i[o],c.und(a))return;const l=Yi.test(o)?"px":Wi.test(o)?"deg":"";s.push(R(a)),r.push(o==="rotate3d"?([u,h,d,f])=>[`rotate3d(${u},${h},${d},${Ze(f,l)})`,je(f,0)]:u=>[`${o}(${u.map(h=>Ze(h,l)).join(",")})`,je(u,o.startsWith("scale")?1:0)])}}),s.length&&(i.transform=new Ki(s,r)),super(i)}},Ki=class extends an{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return S(this.inputs,(n,i)=>{const s=M(n[0]),[r,a]=this.transforms[i](c.arr(s)?s:n.map(M));e+=" "+r,t=t&&a}),t?"none":e}observerAdded(e){e==1&&S(this.inputs,t=>S(t,n=>F(n)&&ne(n,this)))}observerRemoved(e){e==0&&S(this.inputs,t=>S(t,n=>F(n)&&ge(n,this)))}eventObserved(e){e.type=="change"&&(this._value=null),pe(this,e)}},Xi=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];z.assign({batchedUpdates:Rn.unstable_batchedUpdates,createStringInterpolator:cn,colors:Ln});var es=wi(Xi,{applyAnimatedValues:Bi,createAnimatedStyle:e=>new Ji(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),ts=es.animated;function Ye(e){const{tag:t="p",text:n="",className:i="",delay:s=100,animationFrom:r={opacity:0,transform:"translate3d(0,40px,0)"},animationTo:a={opacity:1,transform:"translate3d(0,0,0)"},threshold:o=.1,rootMargin:l="-100px",onLetterAnimationComplete:u}=e,h=n.split(" ").map(w=>w.split("")),d=h.flat(),[f,v]=k.useState(!1),y=k.useRef(null),b=k.useRef(0);k.useEffect(()=>{const w=new IntersectionObserver(([p])=>{p.isIntersecting&&y.current&&(v(!0),w.unobserve(y.current))},{threshold:o,rootMargin:l});return y.current&&w.observe(y.current),()=>w.disconnect()},[o,l]);const x=qi(d.length,d.map((w,p)=>({from:r,to:f?async A=>{await A(a),b.current+=1,b.current===d.length&&u&&u()}:r,delay:p*s,config:{easing:rn.easeInBack}}))),m=t;return g.jsx(m,{ref:y,className:`${i}`,style:{overflow:"hidden",display:"inline",whiteSpace:"normal",wordWrap:"break-word"},"aria-label":n,children:h.map((w,p)=>g.jsxs("span",{style:{display:"inline-block",whiteSpace:"nowrap"},children:[w.map((A,P)=>{const N=h.slice(0,p).reduce((j,Y)=>j+Y.length,0)+P;return g.jsx(ts.span,{style:{...x[N],display:"inline-block",willChange:"transform, opacity"},children:A},N)}),g.jsx("span",{style:{display:"inline-block",width:"0.3em"},children:" "})]},p))})}const xt=Mn`
  transform: skewY(3deg);

  @media (min-width: 1300px) {
    transform: skewY(2deg);
  }

  @media (min-width: 2300px) {
    transform: skewY(1.5deg);
  }

  @media (min-width: 3300px) {
    transform: skewY(0.7deg);
  }
`,ns=I.section`
  display: flex;
  position: relative;
  height: 100vh;

  background-color: ${C.primary1};

  color: ${C.text2};

  &:after {
    position: absolute;
    bottom: -40px;
    left: 0;
    right: 0;
    transform: skewY(3deg);

    display: block;
    width: 100%;
    height: 70px;
    background-color: ${C.secondary1};

    content: "";

    ${xt}
  }
`,is="_presentation-container_5gz23_1",ss="_salutation-title_5gz23_9",rs="_ocupation_5gz23_16",as="_location_5gz23_23",os="_button-group-container_5gz23_30",oe={"presentation-container":"_presentation-container_5gz23_1",presentationContainer:is,"salutation-title":"_salutation-title_5gz23_9",salutationTitle:ss,ocupation:rs,location:as,"button-group-container":"_button-group-container_5gz23_30",buttonGroupContainer:os};function us(){return g.jsx(ns,{children:g.jsxs("div",{className:oe.presentationContainer,children:[g.jsx(Ye,{tag:"h1",className:oe.salutationTitle,text:"Hello! I'm Adonis Lima",delay:30,animationFrom:{opacity:0,transform:"translate3d(0,50px,0)"},animationTo:{opacity:1,transform:"translate3d(0,0,0)"},threshold:.2,rootMargin:"-50px"}),g.jsx(Ye,{tag:"h2",className:oe.ocupation,text:"Front-end developer",delay:30,animationFrom:{opacity:0,transform:"translate3d(0,500px,0)"},animationTo:{opacity:1,transform:"translate3d(0,0,0)"},threshold:.2,rootMargin:"-50px"}),g.jsx(Ye,{tag:"h3",className:oe.location,text:"Currently based in Salvador - Bahia, Brazil",delay:50,animationFrom:{opacity:0,transform:"translate3d(0,50000px,0)"},animationTo:{opacity:1,transform:"translate3d(0,0,0)"},threshold:.2,rootMargin:"-50px"}),g.jsxs("div",{className:oe.buttonGroupContainer,children:[g.jsx(Je,{href:"#projects",children:"Projects"}),g.jsx(Je,{href:"#contact",children:"Contact"})]})]})})}const cs=I.h2`
  color: ${e=>e.color||C.primary1};
  text-align: center;
  font-weight: 600;
  font-size: 2.5rem;
`;function St(e){const{children:t,color:n}=e;return g.jsx(cs,{color:n,children:t})}const ls=I.section`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 64px 0 178px 0;

  color: ${C.text1};
  background-color: ${C.secondary1};

  &:after {
    position: absolute;
    bottom: -40px;
    left: 0;
    right: 0;
    transform: skewY(3deg);

    display: block;
    width: 100%;
    height: 70px;
    background-color: ${C.tertiary1};

    content: "";

    ${xt}
  }
`,ds=I.p`
  margin-top: 40px;
  margin-left: 40px;
  margin-right: 40px;
  max-width: 1144px;

  color: ${C.primary1};
  font-weight: 500;
  text-align: center;
  font-size: 1.5rem;
  line-height: 29px;

  @media (min-width: 1114px) {
    font-size: 1.75rem;
    line-height: 34px;
  }
`;function hs(){return g.jsxs(ls,{children:[g.jsx(St,{children:"About Me"}),g.jsx(ds,{children:"Front-end developer passionate about creating rich user interfaces using technologies from the React ecosystem and TypeScript. I am also an enthusiast of software design topics such as Test-Driven Development (TDD), Domain-Driven Design (DDD), and Clean Architecture."})]})}const fs="/assets/adon-ecotourism-AbPg93cu.png",ms="/assets/tetris-demo-Df_kzyfj.png",ps="data:image/svg+xml,%3csvg%20id='Camada_1'%20data-name='Camada%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20725.23%20707.32'%3e%3cdefs%3e%3cstyle%3e.cls-1,.cls-2{fill:%23fff;}.cls-1{fill-rule:evenodd;}%3c/style%3e%3c/defs%3e%3ctitle%3egithub-logo%3c/title%3e%3cpath%20class='cls-1'%20d='M362.61,0C162.37,0,0,162.34,0,362.61,0,522.82,103.9,658.74,248,706.69c18.12,3.36,24.77-7.87,24.77-17.44,0-8.64-.33-37.21-.49-67.51C171.38,643.67,150.1,579,150.1,579c-16.5-41.9-40.27-53.06-40.27-53.06-32.9-22.5,2.48-22,2.48-22,36.42,2.56,55.59,37.37,55.59,37.37,32.34,55.43,84.83,39.41,105.52,30.14,3.26-23.43,12.65-39.43,23-48.49-80.54-9.16-165.21-40.26-165.21-179.2,0-39.58,14.17-71.93,37.37-97.33-3.77-9.14-16.18-46,3.51-96,0,0,30.46-9.74,99.74,37.17a343.72,343.72,0,0,1,181.6,0c69.21-46.91,99.62-37.17,99.62-37.17,19.74,49.94,7.33,86.82,3.56,96,23.25,25.4,37.32,57.75,37.32,97.33C594,483,509.12,513.61,428.37,522.59c13,11.25,24.6,33.32,24.6,67.15,0,48.52-.42,87.56-.42,99.51,0,9.65,6.52,21,24.91,17.4,144-48,247.77-183.88,247.77-344C725.23,162.34,562.88,0,362.61,0'/%3e%3cpath%20class='cls-2'%20d='M137.34,520.63c-.8,1.81-3.63,2.35-6.21,1.1s-4.11-3.63-3.26-5.44,3.62-2.37,6.25-1.13,4.13,3.66,3.22,5.47M152,537c-1.73,1.61-5.11.86-7.4-1.67s-2.82-5.92-1.06-7.54,5.06-.85,7.43,1.68,2.84,5.91,1,7.53m14.3,20.88c-2.22,1.55-5.86.11-8.11-3.12s-2.22-7.1.05-8.64,5.83-.16,8.11,3,2.22,7.14,0,8.72m19.58,20.18c-2,2.19-6.22,1.61-9.32-1.38s-4.05-7.08-2.06-9.27,6.27-1.58,9.4,1.39,4.1,7.09,2,9.26m27,11.72c-.89,2.84-5,4.12-9.07,2.92s-6.78-4.57-6-7.44,5-4.2,9.08-2.91,6.79,4.54,5.94,7.43M242.61,592c.1,3-3.38,5.47-7.69,5.52s-7.85-2.32-7.9-5.26,3.42-5.47,7.74-5.55,7.85,2.32,7.85,5.29m27.62-4.7c.51,2.91-2.48,5.91-6.76,6.71s-8.11-1-8.65-3.92,2.53-6,6.74-6.76,8.12,1,8.67,4'/%3e%3c/svg%3e",gs="data:image/svg+xml,%3csvg%20id='Camada_1'%20data-name='Camada%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2052%2052'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23fff;fill-rule:evenodd;}%3c/style%3e%3c/defs%3e%3ctitle%3elinkedin-logo%3c/title%3e%3cpath%20class='cls-1'%20d='M52,52H41.32V33.8c0-5-1.9-7.78-5.85-7.78-4.3,0-6.54,2.91-6.54,7.78V52H18.63V17.33h10.3V22a12.1,12.1,0,0,1,10.45-5.73C46.74,16.27,52,20.76,52,30.05ZM6.35,12.79A6.4,6.4,0,1,1,12.7,6.4,6.37,6.37,0,0,1,6.35,12.79ZM1,52H11.77V17.33H1Z'/%3e%3c/svg%3e",vs="data:image/svg+xml,%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20122.88%2088.86'%3e%3ctitle%3eemail%3c/title%3e%3cpath%20fill='%23fff'%20d='M7.05,0H115.83a7.07,7.07,0,0,1,7,7.05V81.81a7,7,0,0,1-1.22,4,2.78,2.78,0,0,1-.66,1,2.62,2.62,0,0,1-.66.46,7,7,0,0,1-4.51,1.65H7.05a7.07,7.07,0,0,1-7-7V7.05A7.07,7.07,0,0,1,7.05,0Zm-.3,78.84L43.53,40.62,6.75,9.54v69.3ZM49.07,45.39,9.77,83.45h103L75.22,45.39l-11,9.21h0a2.7,2.7,0,0,1-3.45,0L49.07,45.39Zm31.6-4.84,35.46,38.6V9.2L80.67,40.55ZM10.21,5.41,62.39,47.7,112.27,5.41Z'/%3e%3c/svg%3e",ys=I.a.attrs({className:"social-media-link"})`
  position: relative;
  display: flex;
  width: 130px;
  height: 130px;

  text-align: center;

  border-radius: 50%;
  background-color: ${C.tertiary1};
  transition: background-color 0.2s;

  cursor: pointer;

  &:hover {
    background-color: ${C.primary1};
  }
`,bs=I.img`
  margin: auto;
  width: 45%;
  height: 45%;
`;function We(e){const{socialMediaIcon:t,href:n}=e;return g.jsx(ys,{href:n,target:"_blank",children:g.jsx(bs,{src:t})})}const ws=I.section`
  position: relative;

  padding: 64px 0 100px 0;

  background-color: ${C.secondary1};

  color: ${C.text1};

  overflow: hidden;

  &:after {
    position: absolute;
    bottom: -40px;
    left: 0;
    right: 0;
    transform: skewY(3deg);

    display: block;
    width: 100%;
    height: 70px;
    background-color: ${C.tertiary1};

    content: "";

    ${xt}
  }
`,_s=I.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 500px;
  margin: 0 auto;
  justify-content: space-around;
  gap: 16px;
  margin-top: 48px;
  margin-bottom: 10px;
`;function xs(){return g.jsxs(ws,{id:"contact",children:[g.jsx(St,{children:"Contact"}),g.jsxs(_s,{children:[g.jsx(We,{href:"https://www.linkedin.com/in/adonisjv-lima",socialMediaIcon:gs}),g.jsx(We,{href:"https://github.com/AdonisLima",socialMediaIcon:ps}),g.jsx(We,{href:"mailto:adonisjvl@gmail.com",socialMediaIcon:vs})]})]})}const Ss=I.section`
  position: relative;
  padding: 64px 0 178px 0;

  background-color: ${C.primary1};

  color: ${C.text2};
`,As=I.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1144px;
  margin: 0 auto;
  gap: 16px;
  margin-top: 40px;
`,ks=I.article.attrs({className:"project-card"})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${C.secondary1};
  max-width: 80%;

  color: ${C.primary1};
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (min-width: 1114px) {
    max-width: 1090px;
    min-width: 1090px;
  }
`,Cs=I.img`
  width: 100%;
  height: 420px;
  padding: 0;
  margin: 0;

  background-color: ${C.tertiary1};
  object-fit: contain;

  @media (min-width: 1114px) {
    width: 472px;
  }
`,Is=I.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
`,Ps=I.h1`
  font-size: 1.438rem;
  font-weight: 700;
  line-height: 28px;

  margin-bottom: 24px;
`,js=I.div`
  margin-bottom: 16px;
`,Ms=I.h2`
  font-size: 1rem;
  font-weight: 700;
  line-height: 20px;
`,Rs=I.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
`,Ts=I.div`
  display: flex;
  gap: 24px;
  margin-top: auto;
  flex-wrap: wrap;
`,Zt=I(Je)`
  width: 145px;
  height: 48px;

  border-color: ${C.primary1};
  color: ${C.primary1};

  &:hover {
    color: ${C.secondary1};
  }

  &:hover:after {
    height: 100%;
    background: ${C.primary1};
  }

  > .button__label {
    font-size: 1.438rem;
    line-height: 28px;
  }
`;function Fs(e){const{data:t,className:n}=e,{title:i,image:s,buttons:r,projectInfo:a}=t,{demo:o,sourceCode:l}=r;function u(){return a.map(h=>g.jsxs(js,{children:[g.jsx(Ms,{children:h.subtitle}),g.jsx(Rs,{children:h.text})]}))}return g.jsxs(ks,{className:n,children:[g.jsx(Cs,{src:s}),g.jsxs(Is,{children:[g.jsx(Ps,{children:i}),u(),g.jsxs(Ts,{children:[g.jsx(Zt,{href:o.source,target:"_blank",children:o.label}),g.jsx(Zt,{href:l.source,target:"_blank",children:l.label})]})]})]})}function Vs(){const e=[{title:"Tetris Clone",image:ms,projectInfo:[{subtitle:"Technologies used",text:"HTML (canvas), CSS, JavaScript."},{subtitle:"Description",text:"A simple tetris clone made with vanilla JavaScript and HTML5"},{subtitle:"Challenges",text:"First time working with canvas. First JavaScript project."}],buttons:{demo:{label:"Demo",source:"https://adonisl.me/tetriss.js/"},sourceCode:{label:"Source",source:"https://github.com/AdonisLima/tetriss.js/"}}},{title:"Adon ecotourism",image:fs,projectInfo:[{subtitle:"Technologies used",text:"HTML, CSS, Bootstrap, SASS."},{subtitle:"Description",text:"A website for a fictional ecotourism agency based in the Amazon region."},{subtitle:"Challenges",text:"First time using SASS."}],buttons:{demo:{label:"Demo",source:"https://adonislima.github.io/adon-ecotourism/"},sourceCode:{label:"Source",source:"https://github.com/AdonisLima/adon-ecotourism/"}}}];return g.jsxs(Ss,{id:"projects",children:[g.jsx(St,{color:C.secondary1,children:"Projects"}),g.jsx(As,{children:e.map(t=>g.jsx(Fs,{data:t}))})]})}function Os(){return g.jsxs(g.Fragment,{children:[g.jsx(us,{}),g.jsx(hs,{}),g.jsx(Vs,{}),g.jsx(xs,{})]})}export{Os as default};
