import{u as b,a as E,b as p,j as e,m as x,L as M,U as j,v as T,q as F,T as v,F as C,I as w,S as N,M as c,B as S,w as O,Q as i}from"./index-MoKZyTIz.js";const $=()=>{var f;const h=b(s=>s.admin),k=b(s=>s.admin),m=E(),u={id:"",name:"",phone:"",isverified:"",isadmin:""},[t,o]=p.useState(u);p.useEffect(()=>{},[]);const z=s=>{const a={day:"2-digit",month:"short",year:"numeric"};return new Date(s).toLocaleDateString("en-GB",a)},D=async s=>{if(O({title:"Are you sure?",icon:"warning",buttons:!0,dangerMode:!0}).then(async a=>{if(a){const n=i.loading("Please wait...");try{const l=localStorage.getItem("token"),g=await fetch("/api/deleteuser",{method:"POST",headers:{Authorization:`Bearer ${l}`,"Content-Type":"application/json"},body:JSON.stringify({userid:s})}),y=await g.json();if(g.ok)m(j()),i.update(n,{render:y.message,type:"success",isLoading:!1,autoClose:2100});else return i.update(n,{render:y.message,type:"warn",isLoading:!1,autoClose:2100})}catch(l){i.update(n,{render:data.message,type:"warn",isLoading:!1,autoClose:5200}),console.log(l)}}}),!s)return i.warn("UserId cannot be blank")},[I,r]=p.useState(!1),U=async s=>{s.preventDefault();try{const a=localStorage.getItem("token"),n=await fetch("/api/editUser",{method:"POST",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"},body:JSON.stringify(t)}),l=await n.json();r(!1),n.status==200?(m(j()),o(u),i.success(l.message,{autoClose:1300})):i.warn(l.message,{autoClose:1500})}catch(a){console.log(a)}},A=s=>{console.log(s),o({id:s._id,name:s.name,phone:s.phone,isverified:s.isverified,isadmin:s.isadmin}),r(!0)},d=(s,a)=>{o({...t,[a]:s.target.value})},L={hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.2,staggerChildren:.15}}},B={hidden:{x:-80,y:80,opacity:0,scale:0},visible:{y:0,x:0,scale:1,opacity:1}};return e.jsx(e.Fragment,{children:e.jsxs(x.div,{className:"adminusers",children:[e.jsxs("div",{className:"controler",children:[e.jsx("h2",{style:{textAlign:"center"},children:"Users"}),e.jsx(M,{loading:k.loading,onClick:()=>m(j()),loadingPosition:"end",endIcon:e.jsx(T,{}),variant:"outlined",type:"submit",size:"small",className:"refreshe",children:"REFRESH"})]}),e.jsxs("div",{className:"header",children:[e.jsx("span",{children:"S.NO"}),e.jsx("span",{children:"Name"}),e.jsx("span",{children:"Mobile"}),e.jsx("span",{children:"Email"}),e.jsx("span",{children:"Date"}),e.jsx("span",{children:"Actions"})]}),e.jsx(x.div,{variants:L,initial:"hidden",animate:"visible",layout:!0,className:"body",children:(f=h==null?void 0:h.users)==null?void 0:f.map((s,a)=>e.jsxs(x.div,{variants:B,layout:!0,children:[e.jsx("span",{children:a+1}),e.jsx("span",{children:s.name}),e.jsx("span",{children:s.phone}),e.jsx("span",{children:s.email}),e.jsx("span",{children:z(s.createdAt)}),e.jsxs("span",{children:[e.jsx("i",{className:"fa fa-pencil",onClick:()=>A(s),"aria-hidden":"true"}),e.jsx("i",{className:"fa fa-trash",onClick:()=>D(s._id),"aria-hidden":"true"})]})]},a))}),e.jsx(F,{open:I,onClose:()=>r(!1),children:e.jsx("div",{className:"membermodal",children:e.jsxs("form",{onSubmit:U,children:[e.jsx("h2",{children:"User Detail"}),e.jsxs("span",{className:"modalcontent",children:[e.jsx(v,{required:!0,value:t.name,onChange:s=>d(s,"name"),sx:{width:"98%"},label:"Name",size:"small"}),e.jsx(v,{type:"tel",required:!0,value:t.phone,onChange:s=>d(s,"phone"),sx:{width:"98%"},label:"Mobile",onKeyPress:s=>{/[0-9]/.test(s.key)||s.preventDefault()},size:"small"}),e.jsxs(C,{sx:{width:"98%"},size:"small",children:[e.jsx(w,{id:"demo-simple-select-label",children:"Verify"}),e.jsxs(N,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t.isverified,label:"status",onChange:s=>d(s,"isverified"),children:[e.jsx(c,{value:!0,children:"Yes"}),e.jsx(c,{value:!1,children:"No"})]})]}),e.jsxs(C,{sx:{width:"98%"},size:"small",children:[e.jsx(w,{id:"demo-simple-select-label",children:"Admin"}),e.jsxs(N,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t.isadmin,label:"status",onChange:s=>d(s,"isadmin"),children:[e.jsx(c,{value:!0,children:"Yes"}),e.jsx(c,{value:!1,children:"No"})]})]}),e.jsxs("div",{style:{width:"100%"},children:[e.jsx(S,{size:"small",type:"submit",variant:"contained",children:" Update"}),e.jsx(S,{size:"small",onClick:()=>{r(!1),o(u)},variant:"outlined",children:" cancel"})]})]})]})})})]})})};export{$ as default};
