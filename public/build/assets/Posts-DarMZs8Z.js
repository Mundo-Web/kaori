var E=Object.defineProperty;var T=(r,t,o)=>t in r?E(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o;var b=(r,t,o)=>(T(r,typeof t!="symbol"?t+"":t,o),o);import{j as n}from"./AboutHeader-DEdD30eg.js";import{r as c}from"./index-RYns6xqu.js";import{c as S}from"./ReactAppend-vpV7VTGG.js";import{B as D}from"./Base-B5Ue5Z-0.js";import{C as N}from"./CreateReactScript-BERtc5uF.js";import{T as I,R as k,D as C}from"./ReactAppend-CDWOQzm8.js";import{M as B}from"./Modal-HDEzC3Rq.js";import{I as F}from"./InputFormGroup-CyrmVMYe.js";import{T as M}from"./TextareaFormGroup-soTxV26S.js";import{I as P}from"./ImageFormGroup-C2iOHudC.js";import{S as A}from"./sweetalert2.all-DJo0UVK6.js";import{B as G}from"./Results-2jWyQwHC.js";import{Q as q}from"./QuillFormGroup-DNmhkTnW.js";import{m as j}from"./main-BjVPLcVK.js";import"./index-CXU7o9CY.js";import"./tippy-react.esm-DYFqe69e.js";/* empty css              */import"./index.esm-Bla6j_hB.js";import"./___vite-browser-external_commonjs-proxy-DbMF7jdq.js";/* empty css               */const Y=r=>(new DOMParser().parseFromString(r,"text/html").body.textContent||"").trim(),X=(r,t,o,u)=>{if($(r).empty(),!!t){if(Array.isArray(t))t.forEach(({[o]:l,[u]:p})=>{const i=document.createElement("option");i.value=l,i.text=p,i.selected=!0,$(r).append(i)});else{const l=document.createElement("option");l.value=t,l.text=o??t,$(r).append(l),$(r).val(t)}$(r).trigger("change")}};class _ extends G{constructor(){super(...arguments);b(this,"path","admin/posts");b(this,"hasFiles",!0)}}const J=({col:r,label:t,eRef:o,required:u=!1,dropdownParent:l,searchAPI:p,searchBy:i,multiple:g=!1,filter:f=null,onChange:R=()=>{},templateResult:x,templateSelection:h})=>(o||(o=c.useRef()),c.useEffect(()=>{$(o.current).select2({dropdownParent:l,minimumInputLength:0,ajax:{url:p,headers:{Accept:"application/json","Content-Type":"application/json","X-Xsrf-Token":decodeURIComponent(j.Cookies.get("XSRF-TOKEN"))},type:"POST",quietMillis:50,data:function({term:a,page:d}){return j.JSON.stringify({sort:[{selector:i,desc:!1}],skip:((d??1)-1)*10,take:10,filter:f?[[i,"contains",a||""],"and",f]:[i,"contains",a||""]})},processResults:function(a,{page:d}){return{results:((a==null?void 0:a.data)??[]).map(e=>{const s=j.JSON.flatten(e);return{id:e.id,text:s[i],data:e}}),pagination:{more:(d??1)*10<a.totalCount}}}},templateResult:x,templateSelection:h})},[l,f]),c.useEffect(()=>{$(o.current).on("change",R)},[f]),n.jsxs("div",{className:`form-group ${r} mb-2`,children:[n.jsxs("label",{htmlFor:"",className:"mb-1",children:[t," ",u&&n.jsx("b",{className:"text-danger",children:"*"})]}),n.jsx("select",{ref:o,required:u,className:"form-control",style:{width:"100%"},multiple:g})]})),v=new _,L=({})=>{const r=c.useRef(),t=c.useRef(),o=c.useRef(),u=c.useRef(),l=c.useRef(),p=c.useRef(),i=c.useRef(),g=c.useRef(),f=c.useRef(),[R,x]=c.useState(!1),h=e=>{var s,m;e!=null&&e.id?x(!0):x(!1),o.current.value=(e==null?void 0:e.id)??"",u.current.value=(e==null?void 0:e.name)??"",X(l.current,(s=e==null?void 0:e.category)==null?void 0:s.id,(m=e==null?void 0:e.category)==null?void 0:m.name),p.editor.root.innerHTML=(e==null?void 0:e.description)??"",g.image.src=`/api/posts/media/${e==null?void 0:e.image}`,g.current.value=null,i.current.value=(e==null?void 0:e.tags)??"",f.current.value=(e==null?void 0:e.post_date)??moment().format("YYYY-MM-DD"),$(t.current).modal("show")},a=async e=>{e.preventDefault();const s={id:o.current.value||void 0,name:u.current.value,category_id:l.current.value,summary:Y(p.current.value),description:p.current.value,tags:i.current.value,post_date:f.current.value},m=new FormData;for(const y in s)m.append(y,s[y]);const w=g.current.files[0];w&&m.append("image",w),await v.save(m)&&($(r.current).dxDataGrid("instance").refresh(),$(t.current).modal("hide"))},d=async e=>{const{isConfirmed:s}=await A.fire({title:"Eliminar testimonio",text:"¿Estas seguro de eliminar este testimonio?",icon:"warning",showCancelButton:!0,confirmButtonText:"Si, eliminar",cancelButtonText:"Cancelar"});!s||!await v.delete(e)||$(r.current).dxDataGrid("instance").refresh()};return n.jsxs(n.Fragment,{children:[n.jsx(I,{gridRef:r,title:"Posts",rest:v,toolBar:e=>{e.unshift({widget:"dxButton",location:"after",options:{icon:"refresh",hint:"Refrescar tabla",onClick:()=>$(r.current).dxDataGrid("instance").refresh()}}),e.unshift({widget:"dxButton",location:"after",options:{icon:"plus",text:"Nuevo registro",hint:"Nuevo registro",onClick:()=>h()}})},columns:[{dataField:"id",caption:"ID",visible:!1},{dataField:"category.name",caption:"Categoría"},{dataField:"name",caption:"Título"},{dataField:"image",caption:"Imagen",width:"90px",cellTemplate:(e,{data:s})=>{k(e,n.jsx("img",{src:`/api/sliders/media/${s.image}`,style:{width:"80px",height:"48px",objectFit:"cover",objectPosition:"center",borderRadius:"4px"},onError:m=>m.target.src="/api/cover/thumbnail/null"}))}},{caption:"Acciones",cellTemplate:(e,{data:s})=>{e.append(C({className:"btn btn-xs btn-soft-primary",title:"Editar",icon:"fa fa-pen",onClick:()=>h(s)})),e.append(C({className:"btn btn-xs btn-soft-danger",title:"Eliminar",icon:"fa fa-trash",onClick:()=>d(s.id)}))},allowFiltering:!1,allowExporting:!1}]}),n.jsx(B,{modalRef:t,title:R?"Editar testimonio":"Agregar testimonio",onSubmit:a,size:"md",children:n.jsxs("div",{className:"row",id:"posts-container",children:[n.jsx("input",{ref:o,type:"hidden"}),n.jsx(P,{eRef:g,label:"Imagen"}),n.jsx(J,{eRef:l,searchAPI:"/api/admin/categories/paginate",searchBy:"name",label:"Categoría",required:!0,dropdownParent:"#posts-container"}),n.jsx(F,{eRef:u,label:"Título",rows:2,required:!0}),n.jsx(q,{eRef:p,label:"Contenido"}),n.jsx(M,{eRef:i,label:"Tags",rows:1}),n.jsx(F,{eRef:f,label:"Fecha de publicación",type:"date",required:!0})]})})]})};N((r,t)=>{S(r).render(n.jsx(D,{...t,title:"Posts",children:n.jsx(L,{...t})}))});