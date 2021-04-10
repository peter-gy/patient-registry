(this["webpackJsonppatient-registry"]=this["webpackJsonppatient-registry"]||[]).push([[0],{138:function(e){e.exports=JSON.parse('[{"socialSecNum":"4753617653","firstName":"Keelia","lastName":"Craigmyle","email":"kcraigmyle0@marketwatch.com","phone":"331-697-8267"},{"socialSecNum":"3243854091","firstName":"Marla","lastName":"Hadenton","email":"mhadenton1@nymag.com","phone":"725-851-1323"},{"socialSecNum":"9342933696","firstName":"Cyndie","lastName":"Sand","email":"csand2@addthis.com","phone":"196-565-1565"},{"socialSecNum":"3020049490","firstName":"Barton","lastName":"O\'Rourke","email":"borourke3@hibu.com","phone":"413-345-0710"},{"socialSecNum":"0350118175","firstName":"Dion","lastName":"Dullingham","email":"ddullingham4@bbc.co.uk","phone":"383-605-2743"},{"socialSecNum":"0626075912","firstName":"Tiffanie","lastName":"Wase","email":"twase5@netvibes.com","phone":"452-884-3201"},{"socialSecNum":"7953654512","firstName":"Zechariah","lastName":"Nethercott","email":"znethercott6@deviantart.com","phone":"767-161-3414"},{"socialSecNum":"4294755679","firstName":"Bonni","lastName":"Skynner","email":"bskynner7@springer.com","phone":"446-604-7475"},{"socialSecNum":"1641490373","firstName":"Dorie","lastName":"Castiblanco","email":"dcastiblanco8@booking.com","phone":"836-299-4504"},{"socialSecNum":"3172127710","firstName":"Erv","lastName":"MacBey","email":"emacbey9@auda.org.au","phone":"305-368-6711"},{"socialSecNum":"2560602822","firstName":"Gwenora","lastName":"Slay","email":"gslaya@hubpages.com","phone":"518-736-9252"},{"socialSecNum":"4431167099","firstName":"Euell","lastName":"aManger","email":"eamangerb@virginia.edu","phone":"383-455-8528"},{"socialSecNum":"4358839096","firstName":"Wright","lastName":"Caudwell","email":"wcaudwellc@facebook.com","phone":"428-924-4131"},{"socialSecNum":"5523352233","firstName":"Derek","lastName":"Hawler","email":"dhawlerd@prlog.org","phone":"658-235-5815"},{"socialSecNum":"2825204854","firstName":"Shirl","lastName":"Goodere","email":"sgooderee@hexun.com","phone":"362-951-4086"},{"socialSecNum":"3235434690","firstName":"Dannel","lastName":"O\'Lehane","email":"dolehanef@yellowbook.com","phone":"625-495-2078"},{"socialSecNum":"0254897134","firstName":"Leonora","lastName":"Mickleborough","email":"lmickleboroughg@delicious.com","phone":"610-383-5589"},{"socialSecNum":"8597323809","firstName":"Wyatan","lastName":"Korneev","email":"wkorneevh@discovery.com","phone":"340-346-3518"},{"socialSecNum":"3544311968","firstName":"Irina","lastName":"Boshere","email":"ibosherei@npr.org","phone":"421-171-1808"},{"socialSecNum":"3745692438","firstName":"Tess","lastName":"Jelk","email":"tjelkj@theguardian.com","phone":"718-176-2839"},{"socialSecNum":"9011911512","firstName":"Sydelle","lastName":"Gutridge","email":"sgutridgek@phoca.cz","phone":"888-737-9510"}]')},234:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(23),s=a.n(i),r=a(21),l=a(244),o=a(41),m=a(5),j=l.a.Header,u=l.a.Content,d=l.a.Footer,b=function(e){var t=e.children;return Object(m.jsxs)(l.a,{style:{minHeight:"100vh"},children:[Object(m.jsx)(j,{children:Object(m.jsx)(o.b,{to:"/",children:Object(m.jsx)("h1",{style:{color:"white"},children:"Patient Registry"})})}),Object(m.jsx)(u,{style:{padding:10},children:t}),Object(m.jsx)(d,{style:{textAlign:"center"},children:"Created by P\xe9ter Ferenc Gyarmati"})]})},h=a(55),p=a(237),O=a(238),f=a(241),x=a(248),N=a(239),g=a(105),y=a(242),v=a(245),S=a(247),k=a(148),C=a(79),w={patients:a(138)},I=function(e,t){switch(t.type){case"ADD":return Object(C.a)(Object(C.a)({},e),{},{patients:[].concat(Object(k.a)(e.patients),[t.payload])});case"DELETE":return Object(C.a)(Object(C.a)({},e),{},{patients:e.patients.filter((function(e){return e.socialSecNum!==t.payload}))});default:return e}},D=c.a.createContext({}),E=function(e){var t=e.children,a=Object(n.useReducer)(I,w),c=Object(h.a)(a,2),i=c[0],s=c[1];return Object(m.jsx)(D.Provider,{value:{state:i,dispatch:s},children:t})},P=function(e){var t=e.patient,a=Object(n.useContext)(D).dispatch,c="".concat(t.firstName," ").concat(t.lastName),i=Object(r.f)();return Object(m.jsx)(N.b.Item,{actions:[Object(m.jsx)(g.a,{title:"Delete",children:Object(m.jsx)(S.a,{onClick:function(e){e.stopPropagation(),a({type:"DELETE",payload:t.socialSecNum})},style:{fontSize:24}})})],onClick:function(){return i.push("/patients/".concat(t.socialSecNum))},children:Object(m.jsx)(y.a,{avatar:!0,title:!1,loading:!1,active:!0,children:Object(m.jsx)(N.b.Item.Meta,{avatar:Object(m.jsx)(v.a,{src:"https://eu.ui-avatars.com/api/?background=074075&color=fff&name=".concat(c),alt:c}),title:c,description:t.socialSecNum})})})},F=function(e){var t=e.patients;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(N.b,{pagination:{pageSize:7},size:"small",dataSource:t,renderItem:function(e){return Object(m.jsx)(P,{patient:e})}})})},z=function(){var e=Object(n.useContext)(D).state.patients,t=Object(n.useState)(e),a=Object(h.a)(t,2),c=a[0],i=a[1],s=Object(n.useRef)(null),r=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=s.current)||void 0===t?void 0:t.state.value;return a?e.filter((function(e){return e.lastName.toLowerCase().includes(a.toLowerCase())})):e};return Object(n.useEffect)((function(){i(r(e))}),[e]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p.a,{justify:"space-around",align:"middle",style:{marginBottom:10},children:Object(m.jsx)(O.a,{xs:{span:24},sm:{span:20},md:{span:16},lg:{span:12},xl:{span:8},xxl:{span:4},children:Object(m.jsx)(f.a,{ref:s,placeholder:"Search by last name...",prefix:Object(m.jsx)(x.a,{}),onChange:function(t){return i(r(e,t.target.value))}})})}),Object(m.jsx)(p.a,{justify:"space-around",align:"middle",children:Object(m.jsx)(O.a,{span:24,children:Object(m.jsx)(F,{patients:c})})})]})},A=a(53),L=a(240),B=a(151),T=a(243),J=a(249),M=function(e){var t=e.visible,a=e.onAdd,n=e.onCancel,c=L.a.useForm(),i=Object(h.a)(c,1)[0],s=function(e){return{required:!0,message:"Please input the ".concat(e," of the patient!")}};return Object(m.jsx)(T.a,{visible:t,title:"Add New Patient",okText:"Add Patient",cancelText:"Cancel",onCancel:n,onOk:function(){i.validateFields().then((function(e){i.resetFields(),a(e)})).catch((function(e){B.a.error({message:"Validation Error",description:JSON.stringify(e)})}))},children:Object(m.jsxs)(L.a,{form:i,layout:"vertical",name:"add_patient_form",children:[Object(m.jsx)(L.a.Item,{name:"firstName",label:"First name",rules:[s("first name")],children:Object(m.jsx)(f.a,{placeholder:"John"})}),Object(m.jsx)(L.a.Item,{name:"lastName",label:"Last name",rules:[s("last name")],children:Object(m.jsx)(f.a,{placeholder:"Doe"})}),Object(m.jsx)(L.a.Item,{name:"socialSecNum",label:"Social security number",rules:[s("social security number")],children:Object(m.jsx)(f.a,{placeholder:"8440135432"})}),Object(m.jsx)(L.a.Item,{name:"email",label:"Email address",rules:[s("email address")],children:Object(m.jsx)(f.a,{placeholder:"john.doe@domain.com"})}),Object(m.jsx)(L.a.Item,{name:"phone",label:"Phone number",rules:[s("phone number")],children:Object(m.jsx)(f.a,{placeholder:"478-722-8413"})})]})})},G=function(){var e=Object(n.useContext)(D).dispatch,t=Object(n.useState)(!1),a=Object(h.a)(t,2),c=a[0],i=a[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p.a,{justify:"space-around",align:"middle",style:{marginBottom:10},children:Object(m.jsx)(O.a,{children:Object(m.jsx)(g.a,{title:"Add New Patient",children:Object(m.jsx)(A.a,{type:"primary",shape:"circle",size:"large",icon:Object(m.jsx)(J.a,{}),onClick:function(){return i(!0)}})})})}),Object(m.jsx)(M,{visible:c,onAdd:function(t){e(function(e){return{type:"ADD",payload:e}}(t)),i(!1)},onCancel:function(){return i(!1)}})]})},H=function(){return Object(m.jsxs)(b,{children:[Object(m.jsx)(G,{}),Object(m.jsx)(z,{})]})},R=a(246),W=a(250),K=function(e){var t=e.patient,a=Object(r.f)();return t||a.push("/not-found"),Object(m.jsxs)(R.b,{title:"Patient details",layout:"vertical",bordered:!0,children:[Object(m.jsx)(R.b.Item,{label:"Social security number",children:null===t||void 0===t?void 0:t.socialSecNum}),Object(m.jsx)(R.b.Item,{label:"First name",children:null===t||void 0===t?void 0:t.firstName}),Object(m.jsx)(R.b.Item,{label:"Last name",children:null===t||void 0===t?void 0:t.lastName}),Object(m.jsx)(R.b.Item,{label:"Email address",children:null===t||void 0===t?void 0:t.email}),Object(m.jsx)(R.b.Item,{label:"Phone number",children:null===t||void 0===t?void 0:t.phone})]})},_=function(){var e=Object(r.g)("/patients/:socialSecNum"),t=Object(n.useContext)(D).state.patients.find((function(t){return t.socialSecNum===(null===e||void 0===e?void 0:e.params.socialSecNum)})),a=Object(r.f)();return Object(m.jsxs)(b,{children:[Object(m.jsx)(K,{patient:t}),Object(m.jsx)(A.a,{style:{marginTop:10},onClick:function(){return a.push("/")},type:"primary",size:"large",icon:Object(m.jsx)(W.a,{})})]})},q=a(251),V=function(){return Object(m.jsxs)(b,{children:[Object(m.jsx)(p.a,{align:"middle",justify:"center",children:Object(m.jsx)(O.a,{children:Object(m.jsx)("h1",{children:"Page Not Found"})})}),Object(m.jsx)(p.a,{align:"middle",justify:"center",children:Object(m.jsx)(O.a,{children:Object(m.jsx)(o.b,{to:"/",children:Object(m.jsx)(A.a,{type:"primary",shape:"circle",size:"large",icon:Object(m.jsx)(q.a,{})})})})})]})},Z=(a(234),function(){return Object(m.jsxs)(r.c,{children:[Object(m.jsx)(r.a,{exact:!0,path:"/",component:H}),Object(m.jsx)(r.a,{path:"/patients/:socialSecNum",component:_}),Object(m.jsx)(r.a,{path:"/not-found",component:V}),Object(m.jsx)(r.a,{component:H})]})});s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(o.a,{basename:"/patient-registry",children:Object(m.jsx)(E,{children:Object(m.jsx)(Z,{})})})}),document.getElementById("root"))}},[[235,1,2]]]);
//# sourceMappingURL=main.057db4ad.chunk.js.map