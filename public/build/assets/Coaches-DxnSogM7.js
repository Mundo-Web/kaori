var k=Object.defineProperty;var F=(s,t,a)=>t in s?k(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a;var C=(s,t,a)=>(F(s,typeof t!="symbol"?t+"":t,a),a);import{j as e}from"./StatisticCard-Bdo2C3ON.js";import{r as n}from"./index-DFv2mRv-.js";import{c as T}from"./ReactAppend-z4_qtB7b.js";import{T as A,D as w}from"./DxButton-BxjpL7bl.js";import{m as R}from"./main-BBbUrZUL.js";import{C as D,G as I}from"./CreateReactScript-yWJ4gJYl.js";import{B as G}from"./Base-BL3Adgwk.js";import{J as B}from"./JSEncrypt-D3I3x59l.js";import{B as P}from"./Content-DtiuTMAn.js";import{D as q}from"./DxBox-DWKaLJ8o.js";import{R as v}from"./ReactAppend-M1J8-UWR.js";import"./___vite-browser-external_commonjs-proxy-BQdpDcDf.js";import"./index.esm-B502ZfUP.js";/* empty css               *//* empty css              */import"./tippy-react.esm-3ehftxB_.js";import"./DxBox-DW2A4T63.js";const O=({modalRef:s,title:t="Modal",isStatic:a=!1,size:d="md",children:c,bodyClass:m="",btnCancelText:o,btnSubmitText:u,hideFooter:i,hideButtonSubmit:p,onSubmit:x=b=>{b.preventDefault(),$(s.current).modal("hide")}})=>{const b=a?{"data-bs-backdrop":"static"}:{};return e.jsx("form",{className:"modal fade",ref:s,tabIndex:"-1","aria-hidden":"true",...b,onSubmit:x,autoComplete:"off",children:e.jsx("div",{className:`modal-dialog modal-dialog-centered modal-${d??"md"}`,children:e.jsxs("div",{className:"modal-content ",style:{boxShadow:"0 0 10px rgba(0,0,0,0.25)"},children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h4",{className:"modal-title",children:t}),e.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),e.jsx("div",{className:`modal-body ${m??""}`,children:c}),!i&&e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{className:"btn btn-sm btn-danger pull-left",type:"button","data-bs-dismiss":"modal",children:o??"Cerrar"}),!p&&e.jsx("button",{className:"btn btn-sm btn-success pull-right",type:"submit",children:u??"Aceptar"})]})]})})})},y=({col:s,label:t,eRef:a,type:d="text",placeholder:c,required:m=!1,disabled:o=!1,value:u,step:i,onChange:p=()=>{}})=>e.jsxs("div",{className:`form-group ${s} mb-2`,children:[e.jsxs("label",{htmlFor:"",children:[t," ",m&&e.jsx("b",{className:"text-danger",children:"*"})]}),e.jsx("input",{ref:a,type:d,className:"form-control",placeholder:c,required:m,disabled:o,defaultValue:u??"",step:i,onChange:p})]}),J=({col:s,label:t,eRef:a,required:d=!1,dropdownParent:c,searchAPI:m,searchBy:o,multiple:u=!1,filter:i=null,onChange:p=()=>{},templateResult:x,templateSelection:b})=>(a||(a=n.useRef()),n.useEffect(()=>{$(a.current).select2({dropdownParent:c,minimumInputLength:0,ajax:{url:m,headers:{Accept:"application/json","Content-Type":"application/json","X-Xsrf-Token":decodeURIComponent(R.Cookies.get("XSRF-TOKEN"))},type:"POST",quietMillis:50,data:function({term:f,page:h}){return R.JSON.stringify({sort:[{selector:o,desc:!1}],skip:((h??1)-1)*10,take:10,filter:i?[[o,"contains",f||""],"and",i]:[o,"contains",f||""]})},processResults:function(f,{page:h}){return{results:((f==null?void 0:f.data)??[]).map(j=>{const r=R.JSON.flatten(j);return{id:j.id,text:r[o],data:j}}),pagination:{more:(h??1)*10<f.totalCount}}}},templateResult:x,templateSelection:b})},[c,i]),n.useEffect(()=>{$(a.current).on("change",p)},[i]),e.jsxs("div",{className:`form-group ${s} mb-2`,children:[e.jsxs("label",{htmlFor:"",children:[t," ",d&&e.jsx("b",{className:"text-danger",children:"*"})]}),e.jsx("select",{ref:a,required:d,className:"form-control",style:{width:"100%"},multiple:u})]})),E=({col:s,label:t,eRef:a,placeholder:d,required:c=!1,value:m})=>{a||(a=n.useRef());const[o,u]=n.useState("password"),i=()=>{o=="text"?u("password"):u("text")};return e.jsxs("div",{className:`form-group ${s} mb-2`,children:[e.jsxs("label",{htmlFor:"",children:[t," ",c&&e.jsx("b",{className:"text-danger",children:"*"})]}),e.jsxs("div",{className:"input-group input-group-merge",children:[e.jsx("input",{ref:a,type:o,className:"form-control",placeholder:d,required:c,defaultValue:m??""}),e.jsx("div",{className:"input-group-text","data-password":"true",onClick:i,children:e.jsx("i",{className:o=="text"?"mdi mdi-eye-off-outline":"mdi mdi-eye-outline"})})]})]})};class M extends P{constructor(){super(...arguments);C(this,"path","admin/coaches")}}const g=new M,K=({})=>{const s=n.useRef(),t=n.useRef(),a=n.useRef(),d=n.useRef(),c=n.useRef(),m=n.useRef(),o=n.useRef(),u=n.useRef(),i=n.useRef(),p=new B;p.setPublicKey(I.PUBLIC_RSA_KEY);const[x,b]=n.useState(!1),f=async r=>{r.preventDefault();const l=u.current.value,N=i.current.value,S={id:a.current.value||void 0,name:d.current.value,lastname:c.current.value,email:m.current.value,roles:$(o.current).val(),password:l?p.encrypt(l):void 0,confirm:N?p.encrypt(N):void 0};await g.save(S)&&($(s.current).dxDataGrid("instance").refresh(),$(t.current).modal("hide"))},h=async({id:r,status:l})=>{await g.status({id:r,status:l})&&$(s.current).dxDataGrid("instance").refresh()},j=async r=>{await g.delete(r)&&$(s.current).dxDataGrid("instance").refresh()};return e.jsxs(e.Fragment,{children:[e.jsx(A,{gridRef:s,title:"Coaches",rest:g,toolBar:r=>{r.unshift({widget:"dxButton",location:"after",options:{icon:"refresh",hint:"Refrescar tabla",onClick:()=>$(s.current).dxDataGrid("instance").refresh()}})},columns:[{dataField:"id",caption:"ID",dataType:"number",sortOrder:"asc"},{dataField:"name",caption:"Nombres"},{dataField:"lastname",caption:"Apellidos"},{dataField:"email",caption:"Correo",dataType:"email",cellTemplate:(r,{data:l})=>{r.append(q([e.jsx("img",{className:"avatar-xs rounded-circle",src:`/api/profile/thumbnail/${l.uuid}`,alt:l.name}),e.jsx("p",{className:"mb-0",style:{fontSize:"14px"},children:l.email})],!1))}},{dataField:"status",caption:"Estado",dataType:"boolean",cellTemplate:(r,{data:l})=>{switch(l.status){case 1:v(r,e.jsx("span",{className:"badge bg-success rounded-pill",children:"Activo"}));break;case 0:v(r,e.jsx("span",{className:"badge bg-danger rounded-pill",children:"Inactivo"}));break;default:v(r,e.jsx("span",{className:"badge bg-dark rounded-pill",children:"Eliminado"}));break}}},{caption:"Acciones",cellTemplate:(r,{data:l})=>{r.append(w({className:"btn btn-xs btn-light",title:l.status===null?"Restaurar":"Cambiar estado",icon:l.status===1?"fa fa-toggle-on text-success":l.status===0?"fa fa-toggle-off text-danger":"fas fa-trash-restore",onClick:()=>h(l)})),r.append(w({className:"btn btn-xs btn-soft-danger",title:"Eliminar",icon:"fa fa-trash-alt",onClick:()=>j(l.id)}))},allowFiltering:!1,allowExporting:!1}]}),e.jsx(O,{modalRef:t,title:x?"Editar usuario":"Agregar usuario",onSubmit:f,children:e.jsxs("div",{className:"row",id:"users-crud-container",children:[e.jsx("input",{ref:a,type:"hidden"}),e.jsx(y,{eRef:d,label:"Nombres",col:"col-md-6",required:!0}),e.jsx(y,{eRef:c,label:"Apellidos",col:"col-md-6",required:!0}),e.jsx(y,{eRef:m,label:"Correo",col:"col-12",type:"email",required:!0}),e.jsx(J,{eRef:o,label:"Asignar roles",col:"col-12",dropdownParent:"#users-crud-container",searchAPI:"/api/roles/paginate",searchBy:"name",required:!0,multiple:!0}),e.jsx(E,{eRef:u,label:"Contraseña",col:"col-md-6",required:!x}),e.jsx(E,{eRef:i,label:"Repetir contraseña",col:"col-md-6",required:!x})]})})]})};D((s,t)=>{T(s).render(e.jsx(G,{...t,title:"Coaches",children:e.jsx(K,{...t})}))});