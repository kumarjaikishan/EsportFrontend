import{a as T,u as g,r,j as e,W as I,P as A,J as O,T as y,F as z,d as B,S as E,e as C,B as p,K as S,X as m,Q as i}from"./index-wtNuI6z8.js";import{R as F}from"./index-a5eVShXb.js";const J=()=>{const d=T(),x=g(s=>s.admin);g(s=>s.tournacenter),r.useEffect(()=>{},[]);const b=async s=>{s.preventDefault();try{const t=localStorage.getItem("token"),a=await fetch("http://localhost:5002/api/createvoucher",{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify(o)}),c=await a.json();a.status==200?(d(m()),n(!1),i.success(c.message,{autoClose:1300})):i.warn(c.message,{autoClose:1500})}catch(t){console.log(t)}},k=async s=>{swal({title:"Are you sure?",text:"Once deleted, you will not be able to recover this Tournament!",icon:"warning",buttons:!0,dangerMode:!0}).then(async t=>{if(t)try{const a=localStorage.getItem("token"),c=await fetch("http://localhost:5002/api/deletevoucher",{method:"POST",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"},body:JSON.stringify({id:s})}),v=await c.json();c.ok?(d(m()),i.success(v.message,{autoClose:1300})):i.warn(v.message,{autoClose:1500})}catch(a){console.log(a)}})},w=async()=>{try{const s=localStorage.getItem("token"),t=await fetch("http://localhost:5002/api/editvoucher",{method:"POST",headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"},body:JSON.stringify(o)}),a=await t.json();t.ok?(n(!1),l(h),d(m()),i.success(a.message,{autoClose:1300})):i.warn(a.message,{autoClose:1500})}catch(s){console.log(s)}},N=s=>{f(!0),n(!0),l(t=>({name:s.coupon,percent:s.percent,isactive:s.isactive,id:s._id}))},[j,f]=r.useState(!1),[P,n]=r.useState(!1),u=(s,t)=>{l({...o,[t]:s.target.value})},h={name:"",percent:"",isactive:!0,id:""},[o,l]=r.useState(h);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"voucherpage",children:[e.jsx("div",{className:"conta",onClick:()=>{n(!0),f(!1)},title:"Add New Voucher",children:e.jsx(I,{})}),e.jsx("div",{className:"cards",children:x.voucher&&x.voucher.map((s,t)=>e.jsxs("div",{className:"card",children:[e.jsxs("div",{children:[e.jsx("span",{children:"Plan Name"})," ",e.jsx("span",{children:":"})," ",e.jsx("span",{children:s.coupon})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Percent"})," ",e.jsx("span",{children:":"})," ",e.jsx("span",{children:s.percent})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Status"})," ",e.jsx("span",{children:":"})," ",e.jsx("span",{children:s.isactive?"Active":"Expired"})]}),e.jsxs("div",{children:[e.jsx(A,{className:"editicon ico",title:"Edit",onClick:()=>N(s)}),e.jsx(F,{className:"deleteicon ico",title:"Delete",onClick:()=>k(s._id),style:{marginLeft:"20px"}})]})]},t))})]}),e.jsx(O,{open:P,onClose:()=>n(!1),children:e.jsx("div",{className:"membermodal",children:e.jsxs("form",{onSubmit:b,children:[e.jsx("h2",{children:"Create Voucher"}),e.jsxs("span",{className:"modalcontent",children:[e.jsx(y,{required:!0,value:o.name,onChange:s=>u(s,"name"),fullWidth:!0,label:"Plan Name",size:"small"}),e.jsx(y,{type:"tel",required:!0,value:o.percent,onChange:s=>u(s,"percent"),fullWidth:!0,label:"Percent",onKeyPress:s=>{/[0-9]/.test(s.key)||s.preventDefault()},size:"small"}),e.jsxs(z,{fullWidth:!0,size:"small",children:[e.jsx(B,{id:"demo-simple-select-label",children:"Status"}),e.jsxs(E,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:o.isactive,label:"status",onChange:s=>u(s,"isactive"),children:[e.jsx(C,{value:!0,children:"Active"}),e.jsx(C,{value:!1,children:"Expired"})]})]}),e.jsxs("div",{style:{width:"100%"},children:[!j&&e.jsx(p,{startIcon:e.jsx(S,{}),type:"submit",variant:"contained",children:" Submit"}),j&&e.jsx(p,{startIcon:e.jsx(S,{}),onClick:w,variant:"contained",children:" Update"}),e.jsx(p,{onClick:()=>{n(!1),l(h)},variant:"outlined",children:" cancel"})]})]})]})})})]})};export{J as default};
