import{D as U,u as N,a as F,r as m,j as e,E as q,Z as v,H as J,P as H,$ as G,J as k,T as x,F as I,d as D,S as z,e as j,B as g,K,R as Y,Q as n}from"./index-vJf5eBTI.js";import{R as _}from"./index-hqqDwnkw.js";function Q(r){return U({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.187 19.181L24 4.755 0 12.386l9.196 1.963.043 4.896 2.759-2.617-2.147-2.076 7.336 4.63z"},child:[]}]})(r)}const W=()=>{var C;const r=N(s=>s.admin),M=N(s=>s.admin),f=F(),b={id:"",name:"",phone:"",isverified:"",isadmin:""},[l,h]=m.useState(b),y={email:"",message:""},[o,u]=m.useState(y);m.useEffect(()=>{},[]);const E=s=>{const a={day:"2-digit",month:"short",year:"numeric"};return new Date(s).toLocaleDateString("en-GB",a)},A=async s=>{if(Y({title:"Are you sure?",icon:"warning",buttons:!0,dangerMode:!0}).then(async a=>{if(a){const t=n.loading("Please wait...");try{const i=localStorage.getItem("token"),w=await fetch("https://esport-backend.vercel.app/api/deleteuser",{method:"POST",headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json"},body:JSON.stringify({userid:s})}),S=await w.json();if(w.ok)f(v()),n.update(t,{render:S.message,type:"success",isLoading:!1,autoClose:2100});else return n.update(t,{render:S.message,type:"warn",isLoading:!1,autoClose:2100})}catch(i){n.update(t,{render:data.message,type:"warn",isLoading:!1,autoClose:5200}),console.log(i)}}}),!s)return n.warn("UserId cannot be blank")},[B,c]=m.useState(!1),[L,d]=m.useState(!1),P=async s=>{s.preventDefault();try{const a=localStorage.getItem("token"),t=await fetch("https://esport-backend.vercel.app/api/editUser",{method:"POST",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"},body:JSON.stringify(l)}),i=await t.json();c(!1),t.status==200?(f(v()),h(b),n.success(i.message,{autoClose:1300})):n.warn(i.message,{autoClose:1500})}catch(a){n.error(a.message,{autoClose:1900}),console.log(a),c(!1)}},T=async s=>{s.preventDefault(),console.log(o);try{const a=localStorage.getItem("token"),t=await fetch("https://esport-backend.vercel.app/api/emailreply",{method:"POST",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"},body:JSON.stringify({email:o.email,reply:o.message})}),i=await t.json();d(!1),t.status==200?(u(y),n.success(i.message,{autoClose:1300})):n.warn(i.message,{autoClose:1500})}catch(a){console.log(a),d(!1),n.error(a.message,{autoClose:1900})}},$=s=>{console.log(s),h({id:s._id,name:s.name,phone:s.phone,isverified:s.isverified,isadmin:s.isadmin}),c(!0)},O=s=>{console.log(s),u({email:s.email,message:""}),d(!0)},p=(s,a)=>{h({...l,[a]:s.target.value})},R=(s,a)=>{u({...o,[a]:s.target.value})};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"adminusers",children:[e.jsxs("div",{className:"controler",children:[e.jsx("h2",{style:{textAlign:"center"},children:"Users"}),e.jsx(q,{loading:M.loading,onClick:()=>f(v()),loadingPosition:"end",endIcon:e.jsx(J,{}),variant:"outlined",type:"submit",size:"small",className:"refreshe",children:"REFRESH"})]}),e.jsxs("div",{className:"header",children:[e.jsx("span",{children:"#"}),e.jsx("span",{children:"Name"}),e.jsx("span",{children:"Mobile"}),e.jsx("span",{children:"Email"}),e.jsx("span",{children:"Date"}),e.jsx("span",{children:"Actions"})]}),e.jsx("div",{className:"body",children:(C=r==null?void 0:r.users)==null?void 0:C.map((s,a)=>{var t;return e.jsxs("div",{className:`status ${(t=s.membership)!=null&&t.isActive?"active":"expired"}`,children:[e.jsx("span",{children:a+1}),e.jsx("span",{children:s.name}),e.jsx("span",{children:s.phone}),e.jsx("span",{children:s.email}),e.jsx("span",{children:E(s.createdAt)}),e.jsxs("span",{children:[e.jsx(H,{className:"editicon ico",title:"Edit",onClick:()=>$(s)}),e.jsx(G,{className:"printicon ico",title:"Mail",onClick:()=>O(s)}),e.jsx(_,{className:"deleteicon ico",title:"Delete",onClick:()=>A(s._id)})]})]},a)})}),e.jsx(k,{open:B,onClose:()=>c(!1),children:e.jsx("div",{className:"membermodal",children:e.jsxs("form",{onSubmit:P,children:[e.jsx("h2",{children:"User Detail"}),e.jsxs("span",{className:"modalcontent",children:[e.jsx(x,{required:!0,value:l.name,onChange:s=>p(s,"name"),sx:{width:"98%"},label:"Name",size:"small"}),e.jsx(x,{type:"tel",required:!0,value:l.phone,onChange:s=>p(s,"phone"),sx:{width:"98%"},label:"Mobile",onKeyPress:s=>{/[0-9]/.test(s.key)||s.preventDefault()},size:"small"}),e.jsxs(I,{sx:{width:"98%"},size:"small",children:[e.jsx(D,{id:"demo-simple-select-label",children:"Verify"}),e.jsxs(z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:l.isverified,label:"status",onChange:s=>p(s,"isverified"),children:[e.jsx(j,{value:!0,children:"Yes"}),e.jsx(j,{value:!1,children:"No"})]})]}),e.jsxs(I,{sx:{width:"98%"},size:"small",children:[e.jsx(D,{id:"demo-simple-select-label",children:"Admin"}),e.jsxs(z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:l.isadmin,label:"status",onChange:s=>p(s,"isadmin"),children:[e.jsx(j,{value:!0,children:"Yes"}),e.jsx(j,{value:!1,children:"No"})]})]}),e.jsxs("div",{style:{width:"100%"},children:[e.jsx(g,{startIcon:e.jsx(K,{}),type:"submit",variant:"contained",children:" Update"}),e.jsx(g,{onClick:()=>{c(!1),h(b)},variant:"outlined",children:" cancel"})]})]})]})})}),e.jsx(k,{open:L,onClose:()=>d(!1),children:e.jsx("div",{className:"membermodal mail",children:e.jsxs("form",{onSubmit:T,children:[e.jsx("h2",{children:"Send Email"}),e.jsxs("span",{className:"modalcontent",children:[e.jsx(x,{required:!0,value:o.email,sx:{width:"98%"},label:"Email Id",disabled:!0,size:"small"}),e.jsx(x,{required:!0,value:o.message,onChange:s=>R(s,"message"),sx:{width:"98%"},multiline:!0,rows:5,label:"Message",size:"small"}),e.jsxs("div",{style:{width:"100%"},children:[e.jsx(g,{startIcon:e.jsx(Q,{}),type:"submit",variant:"contained",children:" Send"}),e.jsx(g,{onClick:()=>{d(!1),u(y)},variant:"outlined",children:" cancel"})]})]})]})})})]})})};export{W as default};
