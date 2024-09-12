import{r as re,i as le,j as e,c as oe,u as ce,a as ue,b as G,s as de,m as ne,B as Y,d as he,T as w,e as ae,N as pe,f as me,F as fe,I as xe,S as ge,M as W,g as ve,h as je,Q as S,p as ye,k as be}from"./index-ZItC6ACF.js";var te={},$e=le;Object.defineProperty(te,"__esModule",{value:!0});var ie=te.default=void 0,we=$e(re()),Se=e;ie=te.default=(0,we.default)((0,Se.jsx)("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2m-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96 19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7zM12 2l4 4-4 4-1.41-1.41L12.17 7H8V5h4.17l-1.59-1.59z"}),"ShoppingCartCheckout");var De={exports:{}};(function(_,se){(function(U,P){_.exports=P()})(oe,function(){var U=1e3,P=6e4,K=36e5,h="millisecond",y="second",D="minute",C="hour",f="day",E="week",b="month",Q="quarter",k="year",I="date",q="Invalid Date",N=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,F=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,O={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var t=["th","st","nd","rd"],a=r%100;return"["+r+(t[(a-20)%10]||t[a]||t[0])+"]"}},T=function(r,t,a){var n=String(r);return!n||n.length>=t?r:""+Array(t+1-n.length).join(a)+r},ee={s:T,z:function(r){var t=-r.utcOffset(),a=Math.abs(t),n=Math.floor(a/60),s=a%60;return(t<=0?"+":"-")+T(n,2,"0")+":"+T(s,2,"0")},m:function r(t,a){if(t.date()<a.date())return-r(a,t);var n=12*(a.year()-t.year())+(a.month()-t.month()),s=t.clone().add(n,b),o=a-s<0,c=t.clone().add(n+(o?-1:1),b);return+(-(n+(a-s)/(o?s-c:c-s))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:b,y:k,w:E,d:f,D:I,h:C,m:D,s:y,ms:h,Q}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},z="en",M={};M[z]=O;var R="$isDayjsObject",i=function(r){return r instanceof g||!(!r||!r[R])},d=function r(t,a,n){var s;if(!t)return z;if(typeof t=="string"){var o=t.toLowerCase();M[o]&&(s=o),a&&(M[o]=a,s=o);var c=t.split("-");if(!s&&c.length>1)return r(c[0])}else{var p=t.name;M[p]=t,s=p}return!n&&s&&(z=s),s||!n&&z},u=function(r,t){if(i(r))return r.clone();var a=typeof t=="object"?t:{};return a.date=r,a.args=arguments,new g(a)},l=ee;l.l=d,l.i=i,l.w=function(r,t){return u(r,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var g=function(){function r(a){this.$L=d(a.locale,null,!0),this.parse(a),this.$x=this.$x||a.x||{},this[R]=!0}var t=r.prototype;return t.parse=function(a){this.$d=function(n){var s=n.date,o=n.utc;if(s===null)return new Date(NaN);if(l.u(s))return new Date;if(s instanceof Date)return new Date(s);if(typeof s=="string"&&!/Z$/i.test(s)){var c=s.match(N);if(c){var p=c[2]-1||0,m=(c[7]||"0").substring(0,3);return o?new Date(Date.UTC(c[1],p,c[3]||1,c[4]||0,c[5]||0,c[6]||0,m)):new Date(c[1],p,c[3]||1,c[4]||0,c[5]||0,c[6]||0,m)}}return new Date(s)}(a),this.init()},t.init=function(){var a=this.$d;this.$y=a.getFullYear(),this.$M=a.getMonth(),this.$D=a.getDate(),this.$W=a.getDay(),this.$H=a.getHours(),this.$m=a.getMinutes(),this.$s=a.getSeconds(),this.$ms=a.getMilliseconds()},t.$utils=function(){return l},t.isValid=function(){return this.$d.toString()!==q},t.isSame=function(a,n){var s=u(a);return this.startOf(n)<=s&&s<=this.endOf(n)},t.isAfter=function(a,n){return u(a)<this.startOf(n)},t.isBefore=function(a,n){return this.endOf(n)<u(a)},t.$g=function(a,n,s){return l.u(a)?this[n]:this.set(s,a)},t.unix=function(){return Math.floor(this.valueOf()/1e3)},t.valueOf=function(){return this.$d.getTime()},t.startOf=function(a,n){var s=this,o=!!l.u(n)||n,c=l.p(a),p=function(H,j){var L=l.w(s.$u?Date.UTC(s.$y,j,H):new Date(s.$y,j,H),s);return o?L:L.endOf(f)},m=function(H,j){return l.w(s.toDate()[H].apply(s.toDate("s"),(o?[0,0,0,0]:[23,59,59,999]).slice(j)),s)},x=this.$W,v=this.$M,$=this.$D,B="set"+(this.$u?"UTC":"");switch(c){case k:return o?p(1,0):p(31,11);case b:return o?p(1,v):p(0,v+1);case E:var A=this.$locale().weekStart||0,V=(x<A?x+7:x)-A;return p(o?$-V:$+(6-V),v);case f:case I:return m(B+"Hours",0);case C:return m(B+"Minutes",1);case D:return m(B+"Seconds",2);case y:return m(B+"Milliseconds",3);default:return this.clone()}},t.endOf=function(a){return this.startOf(a,!1)},t.$set=function(a,n){var s,o=l.p(a),c="set"+(this.$u?"UTC":""),p=(s={},s[f]=c+"Date",s[I]=c+"Date",s[b]=c+"Month",s[k]=c+"FullYear",s[C]=c+"Hours",s[D]=c+"Minutes",s[y]=c+"Seconds",s[h]=c+"Milliseconds",s)[o],m=o===f?this.$D+(n-this.$W):n;if(o===b||o===k){var x=this.clone().set(I,1);x.$d[p](m),x.init(),this.$d=x.set(I,Math.min(this.$D,x.daysInMonth())).$d}else p&&this.$d[p](m);return this.init(),this},t.set=function(a,n){return this.clone().$set(a,n)},t.get=function(a){return this[l.p(a)]()},t.add=function(a,n){var s,o=this;a=Number(a);var c=l.p(n),p=function(v){var $=u(o);return l.w($.date($.date()+Math.round(v*a)),o)};if(c===b)return this.set(b,this.$M+a);if(c===k)return this.set(k,this.$y+a);if(c===f)return p(1);if(c===E)return p(7);var m=(s={},s[D]=P,s[C]=K,s[y]=U,s)[c]||1,x=this.$d.getTime()+a*m;return l.w(x,this)},t.subtract=function(a,n){return this.add(-1*a,n)},t.format=function(a){var n=this,s=this.$locale();if(!this.isValid())return s.invalidDate||q;var o=a||"YYYY-MM-DDTHH:mm:ssZ",c=l.z(this),p=this.$H,m=this.$m,x=this.$M,v=s.weekdays,$=s.months,B=s.meridiem,A=function(j,L,Z,X){return j&&(j[L]||j(n,o))||Z[L].slice(0,X)},V=function(j){return l.s(p%12||12,j,"0")},H=B||function(j,L,Z){var X=j<12?"AM":"PM";return Z?X.toLowerCase():X};return o.replace(F,function(j,L){return L||function(Z){switch(Z){case"YY":return String(n.$y).slice(-2);case"YYYY":return l.s(n.$y,4,"0");case"M":return x+1;case"MM":return l.s(x+1,2,"0");case"MMM":return A(s.monthsShort,x,$,3);case"MMMM":return A($,x);case"D":return n.$D;case"DD":return l.s(n.$D,2,"0");case"d":return String(n.$W);case"dd":return A(s.weekdaysMin,n.$W,v,2);case"ddd":return A(s.weekdaysShort,n.$W,v,3);case"dddd":return v[n.$W];case"H":return String(p);case"HH":return l.s(p,2,"0");case"h":return V(1);case"hh":return V(2);case"a":return H(p,m,!0);case"A":return H(p,m,!1);case"m":return String(m);case"mm":return l.s(m,2,"0");case"s":return String(n.$s);case"ss":return l.s(n.$s,2,"0");case"SSS":return l.s(n.$ms,3,"0");case"Z":return c}return null}(j)||c.replace(":","")})},t.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},t.diff=function(a,n,s){var o,c=this,p=l.p(n),m=u(a),x=(m.utcOffset()-this.utcOffset())*P,v=this-m,$=function(){return l.m(c,m)};switch(p){case k:o=$()/12;break;case b:o=$();break;case Q:o=$()/3;break;case E:o=(v-x)/6048e5;break;case f:o=(v-x)/864e5;break;case C:o=v/K;break;case D:o=v/P;break;case y:o=v/U;break;default:o=v}return s?o:l.a(o)},t.daysInMonth=function(){return this.endOf(b).$D},t.$locale=function(){return M[this.$L]},t.locale=function(a,n){if(!a)return this.$L;var s=this.clone(),o=d(a,n,!0);return o&&(s.$L=o),s},t.clone=function(){return l.w(this.$d,this)},t.toDate=function(){return new Date(this.valueOf())},t.toJSON=function(){return this.isValid()?this.toISOString():null},t.toISOString=function(){return this.$d.toISOString()},t.toString=function(){return this.$d.toUTCString()},r}(),J=g.prototype;return u.prototype=J,[["$ms",h],["$s",y],["$m",D],["$H",C],["$W",f],["$M",b],["$y",k],["$D",I]].forEach(function(r){J[r[1]]=function(t){return this.$g(t,r[0],r[1])}}),u.extend=function(r,t){return r.$i||(r(t,g,u),r.$i=!0),u},u.locale=d,u.isDayjs=i,u.unix=function(r){return u(1e3*r)},u.en=M[z],u.Ls=M,u.p={},u})})(De);const Ne=()=>{const _=ce(i=>i.userprofile),se=ue(),{handleImage:U}=be(),P="https://res.cloudinary.com/dusxlxlvm/image/upload/v1718950087/battlefiesta/assets/icon/user_p5egd9.webp",K={name:"",username:"",email:"",phone:"",city:"",state:"",bio:"",publicemail:"",publicphone:"",profile:"",sociallinks:""},[h,y]=G.useState(K),[D,C]=G.useState(""),[f,E]=G.useState({plan:"N/A",planprice:"N/A",buydate:"N/A",expirydate:"N/A",expire_in:"N/A",status:"N/A",tournament:"N/A"});G.useEffect(()=>{_.userprofile&&Q()},[_]);const b=de("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1}),Q=async()=>{if(!_.membership)return;let i=_.userprofile,d=_.membership;y({...h,name:i.name,username:i.username,email:i.email,phone:i.phone,city:i.city,state:i.state,bio:i.bio,publicemail:i.publicemail,publicphone:i.publicphone,sociallinks:i.sociallinks,profile:i.imgsrc}),_.membership.planid.plan_name&&E({plan:d.planid.plan_name,planprice:d.planid.price,tournament:d.planid.create_limit>500?"Unlimited":d.planid.create_limit,buydate:d.buy_date,expirydate:d.expire_date,expire_in:R(d.expire_date),status:R(d.expire_date)<0?"expired":"active"})},k=()=>{let i={name:"",link:""};y({...h,sociallinks:[...h.sociallinks,i]})},I=i=>{let d=h.sociallinks.filter((u,l)=>l!=i);y({...h,sociallinks:d})},q=(i,d)=>{const u=i.target.name,l=i.target.value,g=[...h.sociallinks];g[d]={...g[d],[u]:l},y({...h,sociallinks:g})},N=i=>{const d=i.target.name,u=i.target.value;y({...h,[d]:u})},[F,O]=G.useState(!1),T=async i=>{i.preventDefault(),O(!0);const d=S.loading("Please wait...");try{const u=localStorage.getItem("token"),l=await fetch("/api/updateprofile",{method:"POST",headers:{Authorization:`Bearer ${u}`,"Content-Type":"application/json"},body:JSON.stringify(h)}),g=await l.json();if(O(!1),!l.ok)return S.update(d,{render:g.message,type:"warning",isLoading:!1,autoClose:1600});se(ye()),S.update(d,{render:g.message,type:"success",isLoading:!1,autoClose:1600})}catch(u){S.update(d,{render:u,type:"warn",isLoading:!1,autoClose:1600}),console.log(u),O(!1)}},ee=async i=>{const d=i.target.files[0];let u=await U(200,d);if(u){const l=S.loading("Uploading Please wait...");try{const g=localStorage.getItem("token"),J=new FormData;J.append("profilepic",u);const r=await fetch("/api/updateprofilepic",{method:"POST",headers:{Authorization:`Bearer ${g}`},body:J}),t=await r.json();r.ok&&(S.update(l,{render:t.message,type:"success",isLoading:!1,autoClose:1600}),y({...h,profile:t.url}))}catch(g){S.update(l,{render:g,type:"warn",isLoading:!1,autoClose:1600}),console.log(g)}}},z=async()=>{try{O(!0);const i=S.loading("Please wait..."),d=localStorage.getItem("token"),u=await fetch("/api/passreset",{method:"Get",headers:{Authorization:`Bearer ${d}`}}),l=await u.json();if(O(!1),!u.ok)return S.update(i,{render:l.message,type:"warn",isLoading:!1,autoClose:2100});C(l.extramessage),S.update(i,{render:l.message,type:"success",isLoading:!1,autoClose:2100})}catch(i){S.update(id,{render:i.message,type:"warn",isLoading:!1,autoClose:2200}),O(!1),console.log(i)}},M=i=>{const d={day:"2-digit",month:"short",year:"numeric"};return new Date(i).toLocaleDateString("en-GB",d)};function R(i){const l=new Date(i)-new Date;return Math.floor(l/(1e3*60*60*24))+1}return e.jsxs("div",{className:"profile",children:[e.jsx(ne.div,{animate:{scale:[1,1.2,1.2,1],rotate:[0,90,90,0],borderRadius:["10%","20%","40%","10%"]},transition:{duration:8,ease:"easeInOut",repeat:1/0},className:"circle circle1"}),e.jsx(ne.div,{animate:{scale:[1,1.1,1.1,1]},transition:{duration:4,repeat:1/0},className:"circle circle2"}),e.jsxs("div",{className:"materials",children:[e.jsxs("div",{className:"profilepic glass",children:[e.jsx("h2",{children:"Profile Picture"}),e.jsx("div",{className:"img",children:e.jsx("img",{src:h.profile?h.profile:P,loading:"lazy",alt:""})}),e.jsxs("div",{children:[" ",e.jsx("h2",{children:h.name})]}),e.jsxs(Y,{component:"label",sx:{mt:2},role:void 0,variant:"contained",tabIndex:-1,startIcon:e.jsx(he,{}),className:"splbtn",children:["Change Profile",e.jsx(b,{onChange:ee,type:"file",accept:"image/*"})]})]}),e.jsxs("div",{className:"profiledeatil glass",children:[e.jsx("h2",{children:"Profile"}),e.jsxs("form",{onSubmit:T,children:[e.jsxs("div",{className:"input",children:[e.jsx(w,{size:"small",onChange:N,name:"name",value:h.name,className:"half",label:"Display Name",variant:"outlined"}),e.jsx(w,{size:"small",onChange:N,name:"username",value:h.username,className:"half",label:"UserName",variant:"outlined"}),e.jsx(w,{size:"small",contentEditable:!1,name:"email",value:h.email,className:"half",label:"Email",variant:"outlined"}),e.jsx(w,{size:"small",onChange:N,name:"phone",value:h.phone,type:"tel",inputProps:{minLength:10,maxLength:10},onKeyPress:i=>{/[0-9]/.test(i.key)||i.preventDefault()},className:"half",label:"Phone",variant:"outlined"}),e.jsx(w,{size:"small",onChange:N,name:"city",value:h.city,className:"half",label:"City",variant:"outlined"}),e.jsx(w,{size:"small",onChange:N,name:"state",value:h.state,className:"half",label:"State",variant:"outlined"}),e.jsx(w,{onChange:N,name:"bio",value:h.bio,multiline:!0,rows:2,className:"full",label:"Bio",variant:"outlined"})]}),e.jsx(Y,{disabled:F,variant:"contained",startIcon:e.jsx(ae,{}),className:"splbtn",type:"submit",size:"small",children:"Save"})]})]}),e.jsxs("div",{className:"membership glass",children:[e.jsx("h2",{children:"Membership"}),e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("span",{children:" Plan"})," ",e.jsx("span",{children:":"})," ",e.jsxs("span",{children:[f.plan," Plan"]})," "]}),e.jsxs("p",{children:[e.jsx("span",{children:" Plan price"})," ",e.jsx("span",{children:":"})," ",e.jsxs("span",{children:["₹ ",f.planprice,".00"]})," "]}),e.jsxs("p",{children:[e.jsx("span",{children:" Tournament"})," ",e.jsx("span",{children:":"})," ",e.jsx("span",{children:f.tournament})," "]}),e.jsxs("p",{children:[e.jsx("span",{children:" Buy Date"})," ",e.jsx("span",{children:":"})," ",e.jsx("span",{children:M(f.buydate)})," "]}),e.jsxs("p",{children:[e.jsx("span",{children:" Expiry Date"})," ",e.jsx("span",{children:":"})," ",e.jsxs("span",{children:[M(f.expirydate)," "]})," "]}),e.jsxs("p",{children:[e.jsx("span",{children:" Expire In"})," ",e.jsx("span",{children:":"})," ",e.jsxs("span",{style:{color:f.expire_in<6&&"red"},children:[f.expire_in," Days "]})," "]}),e.jsxs("p",{children:[e.jsx("span",{children:" Status"})," ",e.jsx("span",{children:":"})," ",e.jsx("span",{className:`status ${f.status}`,children:f.status})," "]}),e.jsxs(pe,{className:"navlink",to:"/plan",children:["  ",e.jsx(Y,{variant:"contained",className:"splbtn",startIcon:e.jsx(ie,{}),children:"Buy Membership"})]})]})]}),e.jsxs("div",{className:"passchange glass",children:[e.jsx("h2",{children:"Change Password"}),e.jsxs("div",{children:[e.jsx(w,{required:!0,name:"link",InputProps:{readOnly:!0},fullWidth:!0,size:"small",value:h.email,className:"half",label:"Email Address",variant:"outlined"}),D&&e.jsx("p",{style:{color:"green",fontSize:"14px"},children:D}),!D.length&&e.jsxs("p",{style:{fontSize:"14px"},children:["A verification email will be sent to ",e.jsx("b",{children:h.email}),"."]}),e.jsx(Y,{disabled:F,onClick:z,title:"Feature coming soon",variant:"contained",className:"splbtn",startIcon:e.jsx(me,{}),children:"Send Password Reset Link"})]})]}),e.jsxs("div",{className:"privacy glass",children:[e.jsx("h2",{children:"Privacy"}),e.jsxs("div",{className:"input",children:[e.jsx(w,{onChange:N,name:"publicemail",value:h.publicemail,className:"full",helperText:"This emaill will be visible on your profile page",label:"Public Email",variant:"outlined"}),e.jsx(w,{onChange:N,type:"tel",inputProps:{minLength:10,maxLength:10},onKeyPress:i=>{/[0-9]/.test(i.key)||i.preventDefault()},name:"publicphone",value:h.publicphone,className:"full",helperText:"This phone number will be visible on your profile page",label:"Public Phone",variant:"outlined"})]}),e.jsx(Y,{disabled:F,variant:"contained",startIcon:e.jsx(ae,{}),className:"splbtn",onClick:T,size:"small",children:"Save"})]}),e.jsxs("div",{className:"social glass",children:[e.jsx("h2",{children:"Social Links"}),e.jsxs("form",{onSubmit:T,children:[h.sociallinks&&h.sociallinks.map((i,d)=>e.jsxs("div",{className:"link",children:[e.jsx("span",{children:e.jsxs(fe,{fullWidth:!0,size:"small",children:[e.jsx(xe,{children:"Name*"}),e.jsxs(ge,{labelId:"demo-simple-select-label",value:i.name,required:!0,label:"Name",name:"name",onChange:u=>q(u,d),children:[e.jsxs(W,{value:"facebook",children:[e.jsx("i",{className:"fa fa-whatsapp","aria-hidden":"true",children:" "}),"   Facebook"]}),e.jsxs(W,{value:"youtube",children:[e.jsx("i",{className:"fa fa-youtube-play","aria-hidden":"true"}),"   Youtube"]}),e.jsxs(W,{value:"instagram",children:[e.jsx("i",{className:"fa fa-instagram","aria-hidden":"true"}),"  Instagram"]}),e.jsxs(W,{value:"discord",children:[e.jsx("i",{className:"fa fa-gamepad","aria-hidden":"true"}),"  Discord"]}),e.jsxs(W,{value:"telegram",children:[e.jsx("i",{className:"fa fa-telegram","aria-hidden":"true"}),"  Telegram"]}),e.jsxs(W,{value:"twitter",children:[e.jsx("i",{className:"fa fa-twitter","aria-hidden":"true"}),"  Twitter"]}),e.jsxs(W,{value:"website",children:[e.jsx("i",{className:"fa fa-link","aria-hidden":"true"}),"  Website"]})]})]})}),e.jsx("span",{children:e.jsx(w,{required:!0,value:i.link,name:"link",fullWidth:!0,size:"small",onChange:u=>q(u,d),className:"half",label:" Url",variant:"outlined"})}),e.jsxs("span",{title:"Remove This",onClick:()=>I(d),children:[" ",e.jsx(ve,{})," "]})]},d)),e.jsx("div",{children:e.jsx(Y,{variant:"outlined",onClick:k,startIcon:e.jsx(je,{}),children:"Add"})}),e.jsx(Y,{disabled:F,variant:"contained",startIcon:e.jsx(ae,{}),className:"splbtn",type:"submit",size:"small",children:"Save"})]})]})]})]})};export{Ne as default};
