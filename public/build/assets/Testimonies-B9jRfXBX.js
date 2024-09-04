var D=Object.defineProperty;var T=(r,s,o)=>s in r?D(r,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[s]=o;var x=(r,s,o)=>(T(r,typeof s!="symbol"?s+"":s,o),o);import{j as t}from"./StatisticCard-Bdo2C3ON.js";import{r as n}from"./index-DFv2mRv-.js";import{c as B}from"./ReactAppend-z4_qtB7b.js";import{B as C}from"./Base-BL3Adgwk.js";import{C as S}from"./CreateReactScript-yWJ4gJYl.js";import{T as E}from"./Table-CiqtxGdE.js";import{M as N}from"./Modal-MESba8ek.js";import{I as G}from"./InputFormGroup-B5shSbO3.js";import{R as k}from"./ReactAppend-M1J8-UWR.js";import{D as g}from"./DxButton-CsjWvhyj.js";import{S as I,T as q}from"./SwitchFormGroup-CNdv9g4M.js";import{I as A}from"./ImageFormGroup-bgB5TiMV.js";import{S as M}from"./SelectFormGroup-CEMe1OMM.js";import{B as P}from"./Content-DtiuTMAn.js";import{D as z}from"./DxBox-DWKaLJ8o.js";import"./tippy-react.esm-3ehftxB_.js";/* empty css              */import"./main-BBbUrZUL.js";import"./___vite-browser-external_commonjs-proxy-BQdpDcDf.js";import"./index.esm-B502ZfUP.js";/* empty css               */import"./DxBox-DW2A4T63.js";class V extends P{constructor(){super(...arguments);x(this,"path","admin/testimonies");x(this,"hasFiles",!0)}}const u=new V,_=({countries:r})=>{const s=n.useRef(),o=n.useRef(),p=n.useRef(),f=n.useRef(),d=n.useRef(),a=n.useRef(),c=n.useRef(),[v,h]=n.useState(!1),R=e=>{e!=null&&e.id?h(!0):h(!1),p.current.value=(e==null?void 0:e.id)??"",f.current.value=(e==null?void 0:e.name)??"",$(c.current).val((e==null?void 0:e.country_id)??"89").trigger("change"),d.current.value=(e==null?void 0:e.description)??"",a.image.src=`/api/testimonies/media/${e==null?void 0:e.image}`,a.current.value=null,$(o.current).modal("show")},w=async e=>{e.preventDefault();const i={id:p.current.value||void 0,country_id:$(c.current).val(),country:$(c.current).find("option:selected").text(),name:f.current.value,description:d.current.value},l=new FormData;for(const m in i)l.append(m,i[m]);const b=a.current.files[0];if(b){const{thumbnail:m,type:F,...O}=await File.compress(b,{square:!1});l.append("image",await File.fromURL(`data:${F};base64,${m}`))}await u.save(l)&&($(s.current).dxDataGrid("instance").refresh(),$(o.current).modal("hide"))},j=async({id:e,value:i})=>{await u.boolean({id:e,field:"visible",value:i})&&$(s.current).dxDataGrid("instance").refresh()},y=async e=>{const{isConfirmed:i}=await Swal.fire({title:"Eliminar testimonio",text:"¿Estas seguro de eliminar este testimonio?",icon:"warning",showCancelButton:!0,confirmButtonText:"Si, eliminar",cancelButtonText:"Cancelar"});!i||!await u.delete(e)||$(s.current).dxDataGrid("instance").refresh()};return t.jsxs(t.Fragment,{children:[t.jsx(E,{gridRef:s,title:"Testimonios",rest:u,toolBar:e=>{e.unshift({widget:"dxButton",location:"after",options:{icon:"refresh",hint:"Refrescar tabla",onClick:()=>$(s.current).dxDataGrid("instance").refresh()}}),e.unshift({widget:"dxButton",location:"after",options:{icon:"plus",text:"Nuevo testimonio",hint:"Nuevo testimonio",onClick:()=>R()}})},columns:[{dataField:"id",caption:"ID",visible:!1},{dataField:"name",caption:"Autor",cellTemplate:(e,{data:i})=>{e.append(z([t.jsx("img",{className:"avatar-xs rounded-circle",src:`/api/testimonies/media/${i.image}`,alt:i.name}),t.jsx("p",{className:"mb-0",style:{fontSize:"14px"},children:i.name})],!1))}},{dataField:"country",caption:"Pais"},{dataField:"visible",caption:"Visible",dataType:"boolean",cellTemplate:(e,{data:i})=>{$(e).empty(),k(e,t.jsx(I,{checked:i.visible==1,onChange:()=>j({id:i.id,value:!i.visible})}))}},{caption:"Acciones",cellTemplate:(e,{data:i})=>{e.append(g({className:"btn btn-xs btn-soft-primary",title:"Editar",icon:"fa fa-pen",onClick:()=>R(i)})),e.append(g({className:"btn btn-xs btn-soft-danger",title:"Eliminar",icon:"fa fa-trash",onClick:()=>y(i.id)}))},allowFiltering:!1,allowExporting:!1}]}),t.jsx(N,{modalRef:o,title:v?"Editar testimonio":"Agregar testimonio",onSubmit:w,size:"md",children:t.jsxs("div",{className:"row",id:"testimony-container",children:[t.jsx("input",{ref:p,type:"hidden"}),t.jsx("div",{className:"col-12",children:t.jsxs("div",{className:"row",children:[t.jsx(A,{eRef:a,label:"Imagen",col:"col-sm-4 col-xs-12",aspect:1}),t.jsxs("div",{className:"col-sm-8 col-xs-12",children:[t.jsx(G,{eRef:f,label:"Autor",rows:2,required:!0}),t.jsx(M,{eRef:c,label:"Pais",required:!0,dropdownParent:"#testimony-container",children:r.map((e,i)=>t.jsx("option",{value:e.id,children:e.name},`country-${i}`))})]})]})}),t.jsx(q,{eRef:d,label:"Descripción",rows:3,required:!0})]})})]})};S((r,s)=>{B(r).render(t.jsx(C,{...s,title:"Testimonios",children:t.jsx(_,{...s})}))});