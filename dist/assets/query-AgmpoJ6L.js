import{a as I,u as j,r as n,j as e,E as g,U as m,H as P,m as f,P as T,J as z,T as y,V as B,B as A,Q as c,R as F}from"./index-CLQKGT1A.js";import{R as O}from"./index-HmYA6whM.js";const Q=()=>{const r=I();j(s=>s.tournacenter);const a=j(s=>s.admin);n.useState(a.contactusform);const[S,i]=n.useState(!1),[h,N]=n.useState(""),[x,d]=n.useState(""),[b,v]=n.useState("");n.useEffect(()=>{},[]);const C=s=>{N(s.target.value)},w=(s,t)=>{i(!0),d(s),v(t)},[E,u]=n.useState(!1),k=async s=>{s.preventDefault();try{u(!0);const t=localStorage.getItem("token"),o=await fetch("/api/emailreply",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({contactid:b,email:x,reply:h})}),l=await o.json();o.ok?(d(""),d(""),c.success(l.message,{autoClose:1300}),i(!1),r(m())):c.warn(l.message,{autoClose:1500}),u(!1)}catch(t){u(!1),console.log(t)}},R=async s=>{F({title:"Are you sure?",text:"Once deleted, you will not be able to recover this Tournament!",icon:"warning",buttons:!0,dangerMode:!0}).then(async t=>{if(t)try{const o=localStorage.getItem("token"),l=await fetch("/api/contactusdelete",{method:"POST",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify({id:s})}),p=await l.json();l.ok?(r(m()),c.success(p.message,{autoClose:1300})):c.warn(p.message,{autoClose:1500})}catch(o){console.log(o)}})};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"query",children:e.jsxs("div",{className:"all",children:[e.jsxs("div",{className:"controler",children:[e.jsx("h2",{style:{textAlign:"center"},children:"Query List"}),e.jsx(g,{loading:a.loading,onClick:()=>r(m()),loadingPosition:"end",endIcon:e.jsx(P,{}),variant:"outlined",type:"submit",size:"small",className:"refreshe",children:"REFRESH"})]}),e.jsxs("div",{className:"header",children:[e.jsx("span",{children:"#"}),e.jsx("span",{children:"Name"}),e.jsx("span",{children:"Email"}),e.jsx("span",{children:"Message"}),e.jsx("span",{children:"Status"}),e.jsx("span",{children:"Actions"})]}),(a==null?void 0:a.contactusform.length)<1&&e.jsx("div",{className:"body",children:"No Query Found"}),e.jsx(f.div,{layout:!0,className:"body",children:a.contactusform&&a.contactusform.map((s,t)=>e.jsxs(f.div,{layout:!0,children:[e.jsx("span",{children:t+1}),e.jsx("span",{children:s.name}),e.jsx("span",{children:s.email}),e.jsx("span",{children:s.message}),e.jsx("span",{className:s.resolve?"status done":"status pending",title:s.resolve?s.resolvemsg:"",children:s.resolve?"Resolved":"Pending"}),e.jsxs("span",{children:[e.jsx(T,{className:"editicon ico",title:"Edit",onClick:()=>w(s.email,s._id)}),e.jsx(O,{className:"deleteicon ico",title:"Delete",onClick:()=>R(s._id)})]})]},t))}),e.jsx(z,{open:S,onClose:()=>i(!1),children:e.jsx("div",{className:"membermodal",children:e.jsxs("form",{onSubmit:k,children:[e.jsx("h2",{children:"Reply"}),e.jsxs("span",{className:"modalcontent",children:[e.jsx(y,{sx:{width:"98%"},value:x,contentEditable:!1,label:"Email",size:"small"}),e.jsx(y,{autoFocus:!0,multiline:!0,rows:4,onChange:C,value:h,sx:{width:"98%"},label:"Reply",size:"small"}),e.jsxs("div",{children:[e.jsx(g,{sx:{mr:2},loading:E,loadingPosition:"end",endIcon:e.jsx(B,{}),variant:"contained",type:"submit",children:"Send Email"}),e.jsx(A,{size:"small",onClick:()=>i(!1),variant:"outlined",children:" cancel"})]})]})]})})})]})})})};export{Q as default};
