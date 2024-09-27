import{c as ne,G as ie,u as re,a as le,r as V,s as oe,j as e,m as te,B as F,I as ce,T as w,b as ae,N as ue,M as de,F as he,d as me,S as pe,e as H,f as fe,g as xe,Q as S,p as ge,h as ve}from"./index-6qI0e6cG.js";var je={exports:{}};(function(M,se){(function(E,P){M.exports=P()})(ne,function(){var E=1e3,P=6e4,Z=36e5,h="millisecond",y="second",D="minute",I="hour",f="day",W="week",b="month",K="quarter",N="year",_="date",G="Invalid Date",k=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,B=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,O={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var s=["th","st","nd","rd"],a=r%100;return"["+r+(s[(a-20)%10]||s[a]||s[0])+"]"}},L=function(r,s,a){var n=String(r);return!n||n.length>=s?r:""+Array(s+1-n.length).join(a)+r},ee={s:L,z:function(r){var s=-r.utcOffset(),a=Math.abs(s),n=Math.floor(a/60),t=a%60;return(s<=0?"+":"-")+L(n,2,"0")+":"+L(t,2,"0")},m:function r(s,a){if(s.date()<a.date())return-r(a,s);var n=12*(a.year()-s.year())+(a.month()-s.month()),t=s.clone().add(n,b),o=a-t<0,c=s.clone().add(n+(o?-1:1),b);return+(-(n+(a-t)/(o?t-c:c-t))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:b,y:N,w:W,d:f,D:_,h:I,m:D,s:y,ms:h,Q:K}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},T="en",C={};C[T]=O;var Q="$isDayjsObject",i=function(r){return r instanceof g||!(!r||!r[Q])},d=function r(s,a,n){var t;if(!s)return T;if(typeof s=="string"){var o=s.toLowerCase();C[o]&&(t=o),a&&(C[o]=a,t=o);var c=s.split("-");if(!t&&c.length>1)return r(c[0])}else{var m=s.name;C[m]=s,t=m}return!n&&t&&(T=t),t||!n&&T},u=function(r,s){if(i(r))return r.clone();var a=typeof s=="object"?s:{};return a.date=r,a.args=arguments,new g(a)},l=ee;l.l=d,l.i=i,l.w=function(r,s){return u(r,{locale:s.$L,utc:s.$u,x:s.$x,$offset:s.$offset})};var g=function(){function r(a){this.$L=d(a.locale,null,!0),this.parse(a),this.$x=this.$x||a.x||{},this[Q]=!0}var s=r.prototype;return s.parse=function(a){this.$d=function(n){var t=n.date,o=n.utc;if(t===null)return new Date(NaN);if(l.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){var c=t.match(k);if(c){var m=c[2]-1||0,p=(c[7]||"0").substring(0,3);return o?new Date(Date.UTC(c[1],m,c[3]||1,c[4]||0,c[5]||0,c[6]||0,p)):new Date(c[1],m,c[3]||1,c[4]||0,c[5]||0,c[6]||0,p)}}return new Date(t)}(a),this.init()},s.init=function(){var a=this.$d;this.$y=a.getFullYear(),this.$M=a.getMonth(),this.$D=a.getDate(),this.$W=a.getDay(),this.$H=a.getHours(),this.$m=a.getMinutes(),this.$s=a.getSeconds(),this.$ms=a.getMilliseconds()},s.$utils=function(){return l},s.isValid=function(){return this.$d.toString()!==G},s.isSame=function(a,n){var t=u(a);return this.startOf(n)<=t&&t<=this.endOf(n)},s.isAfter=function(a,n){return u(a)<this.startOf(n)},s.isBefore=function(a,n){return this.endOf(n)<u(a)},s.$g=function(a,n,t){return l.u(a)?this[n]:this.set(t,a)},s.unix=function(){return Math.floor(this.valueOf()/1e3)},s.valueOf=function(){return this.$d.getTime()},s.startOf=function(a,n){var t=this,o=!!l.u(n)||n,c=l.p(a),m=function(Y,j){var z=l.w(t.$u?Date.UTC(t.$y,j,Y):new Date(t.$y,j,Y),t);return o?z:z.endOf(f)},p=function(Y,j){return l.w(t.toDate()[Y].apply(t.toDate("s"),(o?[0,0,0,0]:[23,59,59,999]).slice(j)),t)},x=this.$W,v=this.$M,$=this.$D,U="set"+(this.$u?"UTC":"");switch(c){case N:return o?m(1,0):m(31,11);case b:return o?m(1,v):m(0,v+1);case W:var A=this.$locale().weekStart||0,R=(x<A?x+7:x)-A;return m(o?$-R:$+(6-R),v);case f:case _:return p(U+"Hours",0);case I:return p(U+"Minutes",1);case D:return p(U+"Seconds",2);case y:return p(U+"Milliseconds",3);default:return this.clone()}},s.endOf=function(a){return this.startOf(a,!1)},s.$set=function(a,n){var t,o=l.p(a),c="set"+(this.$u?"UTC":""),m=(t={},t[f]=c+"Date",t[_]=c+"Date",t[b]=c+"Month",t[N]=c+"FullYear",t[I]=c+"Hours",t[D]=c+"Minutes",t[y]=c+"Seconds",t[h]=c+"Milliseconds",t)[o],p=o===f?this.$D+(n-this.$W):n;if(o===b||o===N){var x=this.clone().set(_,1);x.$d[m](p),x.init(),this.$d=x.set(_,Math.min(this.$D,x.daysInMonth())).$d}else m&&this.$d[m](p);return this.init(),this},s.set=function(a,n){return this.clone().$set(a,n)},s.get=function(a){return this[l.p(a)]()},s.add=function(a,n){var t,o=this;a=Number(a);var c=l.p(n),m=function(v){var $=u(o);return l.w($.date($.date()+Math.round(v*a)),o)};if(c===b)return this.set(b,this.$M+a);if(c===N)return this.set(N,this.$y+a);if(c===f)return m(1);if(c===W)return m(7);var p=(t={},t[D]=P,t[I]=Z,t[y]=E,t)[c]||1,x=this.$d.getTime()+a*p;return l.w(x,this)},s.subtract=function(a,n){return this.add(-1*a,n)},s.format=function(a){var n=this,t=this.$locale();if(!this.isValid())return t.invalidDate||G;var o=a||"YYYY-MM-DDTHH:mm:ssZ",c=l.z(this),m=this.$H,p=this.$m,x=this.$M,v=t.weekdays,$=t.months,U=t.meridiem,A=function(j,z,q,X){return j&&(j[z]||j(n,o))||q[z].slice(0,X)},R=function(j){return l.s(m%12||12,j,"0")},Y=U||function(j,z,q){var X=j<12?"AM":"PM";return q?X.toLowerCase():X};return o.replace(B,function(j,z){return z||function(q){switch(q){case"YY":return String(n.$y).slice(-2);case"YYYY":return l.s(n.$y,4,"0");case"M":return x+1;case"MM":return l.s(x+1,2,"0");case"MMM":return A(t.monthsShort,x,$,3);case"MMMM":return A($,x);case"D":return n.$D;case"DD":return l.s(n.$D,2,"0");case"d":return String(n.$W);case"dd":return A(t.weekdaysMin,n.$W,v,2);case"ddd":return A(t.weekdaysShort,n.$W,v,3);case"dddd":return v[n.$W];case"H":return String(m);case"HH":return l.s(m,2,"0");case"h":return R(1);case"hh":return R(2);case"a":return Y(m,p,!0);case"A":return Y(m,p,!1);case"m":return String(p);case"mm":return l.s(p,2,"0");case"s":return String(n.$s);case"ss":return l.s(n.$s,2,"0");case"SSS":return l.s(n.$ms,3,"0");case"Z":return c}return null}(j)||c.replace(":","")})},s.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},s.diff=function(a,n,t){var o,c=this,m=l.p(n),p=u(a),x=(p.utcOffset()-this.utcOffset())*P,v=this-p,$=function(){return l.m(c,p)};switch(m){case N:o=$()/12;break;case b:o=$();break;case K:o=$()/3;break;case W:o=(v-x)/6048e5;break;case f:o=(v-x)/864e5;break;case I:o=v/Z;break;case D:o=v/P;break;case y:o=v/E;break;default:o=v}return t?o:l.a(o)},s.daysInMonth=function(){return this.endOf(b).$D},s.$locale=function(){return C[this.$L]},s.locale=function(a,n){if(!a)return this.$L;var t=this.clone(),o=d(a,n,!0);return o&&(t.$L=o),t},s.clone=function(){return l.w(this.$d,this)},s.toDate=function(){return new Date(this.valueOf())},s.toJSON=function(){return this.isValid()?this.toISOString():null},s.toISOString=function(){return this.$d.toISOString()},s.toString=function(){return this.$d.toUTCString()},r}(),J=g.prototype;return u.prototype=J,[["$ms",h],["$s",y],["$m",D],["$H",I],["$W",f],["$M",b],["$y",N],["$D",_]].forEach(function(r){J[r[1]]=function(s){return this.$g(s,r[0],r[1])}}),u.extend=function(r,s){return r.$i||(r(s,g,u),r.$i=!0),u},u.locale=d,u.isDayjs=i,u.unix=function(r){return u(1e3*r)},u.en=C[T],u.Ls=C,u.p={},u})})(je);function ye(M){return ie({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"},child:[]}]})(M)}const $e=()=>{const M=re(i=>i.userprofile),se=le(),{handleImage:E}=ve(),P="https://res.cloudinary.com/dusxlxlvm/image/upload/v1718950087/battlefiesta/assets/icon/user_p5egd9.webp",Z={name:"",username:"",email:"",phone:"",city:"",state:"",bio:"",publicemail:"",publicphone:"",profile:"",sociallinks:""},[h,y]=V.useState(Z),[D,I]=V.useState(""),[f,W]=V.useState({plan:"N/A",planprice:"N/A",buydate:"N/A",expirydate:"N/A",expire_in:"N/A",status:"N/A",tournament:"N/A"});V.useEffect(()=>{M.userprofile&&K()},[M]);const b=oe("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1}),K=async()=>{if(!M.membership)return;let i=M.userprofile,d=M.membership;y({...h,name:i.name,username:i.username,email:i.email,phone:i.phone,city:i.city,state:i.state,bio:i.bio,publicemail:i.publicemail,publicphone:i.publicphone,sociallinks:i.sociallinks,profile:i.imgsrc}),M.membership.planid.plan_name&&W({plan:d.planid.plan_name,planprice:d.planid.price,tournament:d.planid.create_limit>500?"Unlimited":d.planid.create_limit,buydate:d.buy_date,expirydate:d.expire_date,expire_in:Q(d.expire_date),status:d.isActive?"active":"expired"})},N=()=>{let i={name:"",link:""};y({...h,sociallinks:[...h.sociallinks,i]})},_=i=>{let d=h.sociallinks.filter((u,l)=>l!=i);y({...h,sociallinks:d})},G=(i,d)=>{const u=i.target.name,l=i.target.value,g=[...h.sociallinks];g[d]={...g[d],[u]:l},y({...h,sociallinks:g})},k=i=>{const d=i.target.name,u=i.target.value;y({...h,[d]:u})},[B,O]=V.useState(!1),L=async i=>{i.preventDefault(),O(!0);const d=S.loading("Please wait...");try{const u=localStorage.getItem("token"),l=await fetch("/api/updateprofile",{method:"POST",headers:{Authorization:`Bearer ${u}`,"Content-Type":"application/json"},body:JSON.stringify(h)}),g=await l.json();if(O(!1),!l.ok)return S.update(d,{render:g.message,type:"warning",isLoading:!1,autoClose:1600});se(ge()),S.update(d,{render:g.message,type:"success",isLoading:!1,autoClose:1600})}catch(u){S.update(d,{render:u,type:"warn",isLoading:!1,autoClose:1600}),console.log(u),O(!1)}},ee=async i=>{const d=i.target.files[0];let u=await E(200,d);if(u){const l=S.loading("Uploading Please wait...");try{const g=localStorage.getItem("token"),J=new FormData;J.append("profilepic",u);const r=await fetch("/api/updateprofilepic",{method:"POST",headers:{Authorization:`Bearer ${g}`},body:J}),s=await r.json();r.ok&&(S.update(l,{render:s.message,type:"success",isLoading:!1,autoClose:1600}),y({...h,profile:s.url}))}catch(g){S.update(l,{render:g,type:"warn",isLoading:!1,autoClose:1600}),console.log(g)}}},T=async()=>{try{O(!0);const i=S.loading("Please wait..."),d=localStorage.getItem("token"),u=await fetch("/api/passreset",{method:"Get",headers:{Authorization:`Bearer ${d}`}}),l=await u.json();if(O(!1),!u.ok)return S.update(i,{render:l.message,type:"warn",isLoading:!1,autoClose:2100});I(l.extramessage),S.update(i,{render:l.message,type:"success",isLoading:!1,autoClose:2100})}catch(i){S.update(id,{render:i.message,type:"warn",isLoading:!1,autoClose:2200}),O(!1),console.log(i)}},C=i=>{const d={day:"2-digit",month:"short",year:"numeric"};return new Date(i).toLocaleDateString("en-GB",d)};function Q(i){const l=new Date(i)-new Date;return Math.floor(l/(1e3*60*60*24))+1}return e.jsxs("div",{className:"profile",children:[e.jsx(te.div,{animate:{scale:[1,1.2,1.2,1],rotate:[0,90,90,0],borderRadius:["10%","20%","40%","10%"]},transition:{duration:8,ease:"easeInOut",repeat:1/0},className:"circle circle1"}),e.jsx(te.div,{animate:{scale:[1,1.1,1.1,1]},transition:{duration:4,repeat:1/0},className:"circle circle2"}),e.jsxs("div",{className:"materials",children:[e.jsxs("div",{className:"profilepic glass",children:[e.jsx("h2",{children:"Profile Picture"}),e.jsx("div",{className:"img",children:e.jsx("img",{src:h.profile?h.profile:P,loading:"lazy",alt:""})}),e.jsxs("div",{children:[" ",e.jsx("h2",{children:h.name})]}),e.jsxs(F,{component:"label",sx:{mt:2},role:void 0,variant:"contained",tabIndex:-1,startIcon:e.jsx(ce,{}),className:"splbtn",children:["Change Profile",e.jsx(b,{onChange:ee,type:"file",accept:"image/*"})]})]}),e.jsxs("div",{className:"profiledeatil glass",children:[e.jsx("h2",{children:"Profile"}),e.jsxs("form",{onSubmit:L,children:[e.jsxs("div",{className:"input",children:[e.jsx(w,{size:"small",onChange:k,name:"name",value:h.name,className:"half",label:"Display Name",variant:"outlined"}),e.jsx(w,{size:"small",onChange:k,name:"username",value:h.username,className:"half",label:"UserName",variant:"outlined"}),e.jsx(w,{size:"small",contentEditable:!1,name:"email",value:h.email,className:"half",label:"Email",variant:"outlined"}),e.jsx(w,{size:"small",onChange:k,name:"phone",value:h.phone,type:"tel",inputProps:{minLength:10,maxLength:10},onKeyPress:i=>{/[0-9]/.test(i.key)||i.preventDefault()},className:"half",label:"Phone",variant:"outlined"}),e.jsx(w,{size:"small",onChange:k,name:"city",value:h.city,className:"half",label:"City",variant:"outlined"}),e.jsx(w,{size:"small",onChange:k,name:"state",value:h.state,className:"half",label:"State",variant:"outlined"}),e.jsx(w,{onChange:k,name:"bio",value:h.bio,multiline:!0,rows:2,className:"full",label:"Bio",variant:"outlined"})]}),e.jsx(F,{disabled:B,variant:"contained",startIcon:e.jsx(ae,{}),className:"splbtn",type:"submit",size:"small",children:"Save"})]})]}),e.jsxs("div",{className:"membership glass",children:[e.jsx("h2",{children:"Membership"}),e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("span",{children:" Plan"})," ",e.jsx("span",{children:":"})," ",e.jsxs("span",{children:[f.plan," Plan"]})," "]}),e.jsxs("p",{children:[e.jsx("span",{children:" Plan price"})," ",e.jsx("span",{children:":"})," ",e.jsxs("span",{children:["₹ ",f.planprice,".00"]})," "]}),e.jsxs("p",{children:[e.jsx("span",{children:" Tournament"})," ",e.jsx("span",{children:":"})," ",e.jsx("span",{children:f.tournament})," "]}),e.jsxs("p",{children:[e.jsx("span",{children:" Buy Date"})," ",e.jsx("span",{children:":"})," ",e.jsx("span",{children:C(f.buydate)})," "]}),e.jsxs("p",{children:[e.jsx("span",{children:" Expiry Date"})," ",e.jsx("span",{children:":"})," ",e.jsxs("span",{children:[C(f.expirydate)," "]})," "]}),e.jsxs("p",{children:[e.jsx("span",{children:" Expire In"})," ",e.jsx("span",{children:":"})," ",e.jsxs("span",{style:{color:f.expire_in<6&&"red"},children:[f.expire_in," Days "]})," "]}),e.jsxs("p",{children:[e.jsx("span",{children:" Status"})," ",e.jsx("span",{children:":"})," ",e.jsx("span",{className:`status ${f.status}`,children:f.status})," "]}),e.jsxs(ue,{className:"navlink",to:"/plan",children:["  ",e.jsx(F,{variant:"contained",className:"splbtn",startIcon:e.jsx(de,{}),children:"Buy Membership"})]})]})]}),e.jsxs("div",{className:"passchange glass",children:[e.jsx("h2",{children:"Change Password"}),e.jsxs("div",{children:[e.jsx(w,{required:!0,name:"link",InputProps:{readOnly:!0},fullWidth:!0,size:"small",value:h.email,className:"half",label:"Email Address",variant:"outlined"}),D&&e.jsx("p",{style:{color:"green",fontSize:"14px"},children:D}),!D.length&&e.jsxs("p",{style:{fontSize:"14px"},children:["A verification email will be sent to ",e.jsx("b",{children:h.email}),"."]}),e.jsx(F,{disabled:B,onClick:T,title:"Feature coming soon",variant:"contained",className:"splbtn",startIcon:e.jsx(ye,{}),children:"Send Password Reset Link"})]})]}),e.jsxs("div",{className:"privacy glass",children:[e.jsx("h2",{children:"Privacy"}),e.jsxs("div",{className:"input",children:[e.jsx(w,{onChange:k,name:"publicemail",value:h.publicemail,className:"full",helperText:"This emaill will be visible on your profile page",label:"Public Email",variant:"outlined"}),e.jsx(w,{onChange:k,type:"tel",inputProps:{minLength:10,maxLength:10},onKeyPress:i=>{/[0-9]/.test(i.key)||i.preventDefault()},name:"publicphone",value:h.publicphone,className:"full",helperText:"This phone number will be visible on your profile page",label:"Public Phone",variant:"outlined"})]}),e.jsx(F,{disabled:B,variant:"contained",startIcon:e.jsx(ae,{}),className:"splbtn",onClick:L,size:"small",children:"Save"})]}),e.jsxs("div",{className:"social glass",children:[e.jsx("h2",{children:"Social Links"}),e.jsxs("form",{onSubmit:L,children:[h.sociallinks&&h.sociallinks.map((i,d)=>e.jsxs("div",{className:"link",children:[e.jsx("span",{children:e.jsxs(he,{fullWidth:!0,size:"small",children:[e.jsx(me,{children:"Name*"}),e.jsxs(pe,{labelId:"demo-simple-select-label",value:i.name,required:!0,label:"Name",name:"name",onChange:u=>G(u,d),children:[e.jsxs(H,{value:"facebook",children:[e.jsx("i",{className:"fa fa-whatsapp","aria-hidden":"true",children:" "}),"   Facebook"]}),e.jsxs(H,{value:"youtube",children:[e.jsx("i",{className:"fa fa-youtube-play","aria-hidden":"true"}),"   Youtube"]}),e.jsxs(H,{value:"instagram",children:[e.jsx("i",{className:"fa fa-instagram","aria-hidden":"true"}),"  Instagram"]}),e.jsxs(H,{value:"discord",children:[e.jsx("i",{className:"fa fa-gamepad","aria-hidden":"true"}),"  Discord"]}),e.jsxs(H,{value:"telegram",children:[e.jsx("i",{className:"fa fa-telegram","aria-hidden":"true"}),"  Telegram"]}),e.jsxs(H,{value:"twitter",children:[e.jsx("i",{className:"fa fa-twitter","aria-hidden":"true"}),"  Twitter"]}),e.jsxs(H,{value:"website",children:[e.jsx("i",{className:"fa fa-link","aria-hidden":"true"}),"  Website"]})]})]})}),e.jsx("span",{children:e.jsx(w,{required:!0,value:i.link,name:"link",fullWidth:!0,size:"small",onChange:u=>G(u,d),className:"half",label:" Url",variant:"outlined"})}),e.jsxs("span",{title:"Remove This",onClick:()=>_(d),children:[" ",e.jsx(fe,{})," "]})]},d)),e.jsx("div",{children:e.jsx(F,{variant:"outlined",onClick:N,startIcon:e.jsx(xe,{}),children:"Add"})}),e.jsx(F,{disabled:B,variant:"contained",startIcon:e.jsx(ae,{}),className:"splbtn",type:"submit",size:"small",children:"Save"})]})]})]})]})};export{$e as default};