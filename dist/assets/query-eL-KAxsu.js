import{r as T,i as I,j as e,a as O,u as f,b as n,L as g,x as m,v as P,m as y,q,T as v,B as A,Q as r,w as B}from"./index--P1lYo9Y.js";var h={},F=I;Object.defineProperty(h,"__esModule",{value:!0});var S=h.default=void 0,M=F(T()),$=e;S=h.default=(0,M.default)((0,$.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");const Q=()=>{const c=O();f(s=>s.tournacenter);const t=f(s=>s.admin);n.useState(t.contactusform);const[b,i]=n.useState(!1),[x,N]=n.useState(""),[p,d]=n.useState(""),[C,w]=n.useState("");n.useEffect(()=>{},[]);const k=s=>{N(s.target.value)},E=(s,a)=>{i(!0),d(s),w(a)},[R,u]=n.useState(!1),_=async s=>{s.preventDefault();try{u(!0);const a=localStorage.getItem("token"),o=await fetch("/api/emailreply",{method:"POST",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"},body:JSON.stringify({contactid:C,email:p,reply:x})}),l=await o.json();o.ok?(d(""),d(""),r.success(l.message,{autoClose:1300}),i(!1),c(m())):r.warn(l.message,{autoClose:1500}),u(!1)}catch(a){u(!1),console.log(a)}},z=async s=>{B({title:"Are you sure?",text:"Once deleted, you will not be able to recover this Tournament!",icon:"warning",buttons:!0,dangerMode:!0}).then(async a=>{if(a)try{const o=localStorage.getItem("token"),l=await fetch("/api/contactusdelete",{method:"POST",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify({id:s})}),j=await l.json();l.ok?(c(m()),r.success(j.message,{autoClose:1300})):r.warn(j.message,{autoClose:1500})}catch(o){console.log(o)}})};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"query",children:e.jsxs("div",{className:"all",children:[e.jsxs("div",{className:"controler",children:[e.jsx("h2",{style:{textAlign:"center"},children:"Query List"}),e.jsx(g,{loading:t.loading,onClick:()=>c(m()),loadingPosition:"end",endIcon:e.jsx(P,{}),variant:"outlined",type:"submit",size:"small",className:"refreshe",children:"REFRESH"})]}),e.jsxs("div",{className:"header",children:[e.jsx("span",{children:"S.no"}),e.jsx("span",{children:"Name"}),e.jsx("span",{children:"Email"}),e.jsx("span",{children:"Message"}),e.jsx("span",{children:"Status"}),e.jsx("span",{children:"Actions"})]}),(t==null?void 0:t.contactusform.length)<1&&e.jsx("div",{className:"body",children:"No Query Found"}),e.jsx(y.div,{layout:!0,className:"body",children:t.contactusform&&t.contactusform.map((s,a)=>e.jsxs(y.div,{layout:!0,children:[e.jsx("span",{children:a+1}),e.jsx("span",{children:s.name}),e.jsx("span",{children:s.email}),e.jsx("span",{children:s.message}),e.jsx("span",{className:s.resolve?"status done":"status pending",title:s.resolve?s.resolvemsg:"",children:s.resolve?"Resolved":"Pending"}),e.jsxs("span",{children:[e.jsx("i",{className:"fa fa-pencil",onClick:()=>E(s.email,s._id),"aria-hidden":"true"}),e.jsx("i",{className:"fa fa-trash",onClick:()=>z(s._id),"aria-hidden":"true"})]})]},a))}),e.jsx(q,{open:b,onClose:()=>i(!1),children:e.jsx("div",{className:"membermodal",children:e.jsxs("form",{onSubmit:_,children:[e.jsx("h2",{children:"Reply"}),e.jsxs("span",{className:"modalcontent",children:[e.jsx(v,{sx:{width:"98%"},value:p,contentEditable:!1,label:"Email",size:"small"}),e.jsx(v,{autoFocus:!0,multiline:!0,rows:4,onChange:k,value:x,sx:{width:"98%"},label:"Reply",size:"small"}),e.jsxs("div",{children:[e.jsx(g,{sx:{mr:2},loading:R,loadingPosition:"end",endIcon:e.jsx(S,{}),variant:"contained",type:"submit",children:"Send Email"}),e.jsx(A,{size:"small",onClick:()=>i(!1),variant:"outlined",children:" cancel"})]})]})]})})})]})})})};export{Q as default};
