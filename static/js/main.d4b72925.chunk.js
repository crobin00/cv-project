(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{112:function(A,e,t){A.exports={button:"SwapViewButton_button__f3hOz",swapViewIcon:"SwapViewButton_swapViewIcon__XpMUk"}},113:function(A,e,t){A.exports={twoGrid:"PersonalInformation_twoGrid__212rn"}},114:function(A,e,t){A.exports={twoGrid:"WorkAndEducation_twoGrid__2q3fI"}},115:function(A,e,t){A.exports={tab:"WorkAndEducationTab_tab__3YAvo",icons:"WorkAndEducationTab_icons__zarla"}},217:function(A,e,t){A.exports={cardInfo:"CardInfo_cardInfo__rNiIo"}},218:function(A,e,t){A.exports={button:"SubmitButton_button__1Oiqe"}},235:function(A,e){},237:function(A,e){},267:function(A,e){},268:function(A,e){},378:function(A,e){},45:function(A,e,t){A.exports={button:"Dropdown_button__2d2jH",dropDownIcon:"Dropdown_dropDownIcon__3pDWm",dropDownIconFlip:"Dropdown_dropDownIconFlip__3jS3y",card_visible:"Dropdown_card_visible__3hP0Y",card_hidden:"Dropdown_card_hidden__1sStr"}},549:function(A,e,t){},550:function(A,e,t){"use strict";t.r(e);var n=t(6),c=t.n(n),i=t(216),r=t.n(i),a=t(9),s=t(112),l=t.n(s),o=t(3),g=function(A){return Object(o.jsxs)("button",{className:l.a.button,onClick:A.onSwitch,children:[Object(o.jsx)("span",{children:A.text}),Object(o.jsx)("span",{className:l.a.swapViewIcon,children:A.src})]})},S=t(45),d=t.n(S),j=t(25),u=function(A){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("button",{className:d.a.button,onClick:A.setVisibility,children:[Object(o.jsx)("span",{children:A.title}),Object(o.jsx)("span",{className:A.visible?d.a.dropDownIconFlip:d.a.dropDownIcon,children:Object(o.jsx)(j.b,{})})]}),Object(o.jsx)("div",{className:A.visible?d.a.card_visible:d.a.card_hidden,children:A.content})]})},k=t(217),O=t.n(k),J=function(A){return Object(o.jsx)("div",{className:O.a.cardInfo,children:A.children})},I=t(113),C=t.n(I),w=function(A){return Object(o.jsx)(J,{children:Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:C.a.twoGrid,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"first-name",children:"First Name"}),Object(o.jsx)("input",{type:"text",id:"first-name",value:A.firstName,onChange:function(e){return A.setFirstName(e.target.value)}})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"last-name",children:"Last Name"}),Object(o.jsx)("input",{type:"text",id:"last-name",value:A.lastName,onChange:function(e){return A.setLastName(e.target.value)}})]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"phone-number",children:"Phone Number"}),Object(o.jsx)("input",{type:"text",id:"phone-number",value:A.phoneNumber,onChange:function(e){return A.setPhoneNumber(e.target.value)}})]}),Object(o.jsxs)("div",{className:C.a.twoGrid,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"city",children:"City"}),Object(o.jsx)("input",{type:"text",id:"city",value:A.city,onChange:function(e){return A.setCity(e.target.value)}})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"state",children:"State/Province"}),Object(o.jsx)("input",{type:"text",id:"state",value:A.state,onChange:function(e){return A.setState(e.target.value)}})]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email"}),Object(o.jsx)("input",{type:"text",id:"email",value:A.email,onChange:function(e){return A.setEmail(e.target.value)}})]})]})})},B=t(71),b=t(114),D=t.n(b),x=function(A){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:D.a.twoGrid,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:A.firstInput,children:A.firstInput}),Object(o.jsx)("input",{type:"text",id:A.firstInput,onChange:A.firstInputChange,value:A.firstValue})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:A.secondInput,children:A.secondInput}),Object(o.jsx)("input",{type:"text",id:A.secondInput,onChange:A.secondInputChange,value:A.secondValue})]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:A.thirdInput,children:A.thirdInput}),Object(o.jsx)("input",{type:"text",id:A.thirdInput,onChange:A.thirdInputChange,value:A.thirdValue})]}),Object(o.jsxs)("div",{className:D.a.twoGrid,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"start-date",children:"Start date"}),Object(o.jsx)("input",{type:"date",id:"start-date",onChange:A.startDateChange,value:A.startDateValue})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"end-date",children:"End date"}),Object(o.jsx)("input",{type:"date",id:"end-date",onChange:A.endDateChange,value:A.endDateValue})]})]})]})},h=t(218),Q=t.n(h),E=function(A){return Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:Q.a.button,children:A.text})})},f=t(115),p=t.n(f),y=t(551),m=function(A){return Object(o.jsxs)("div",{className:p.a.tab,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:A.title}),Object(o.jsxs)("p",{children:[Object(y.a)(new Date(A.startDate),"MM/yyyy")," -"," ",Object(y.a)(new Date(A.endDate),"MM/yyyy")]})]}),Object(o.jsxs)("div",{className:p.a.icons,children:[Object(o.jsx)(j.e,{onClick:A.onDelete}),Object(o.jsx)(j.d,{onClick:A.onEdit})]})]})},G=t(70),v=t.n(G),N=function(A){var e=Object(n.useState)(""),t=Object(a.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)(""),s=Object(a.a)(r,2),l=s[0],g=s[1],S=Object(n.useState)(""),d=Object(a.a)(S,2),j=d[0],u=d[1],k=Object(n.useState)(""),O=Object(a.a)(k,2),I=O[0],C=O[1],w=Object(n.useState)(""),b=Object(a.a)(w,2),D=b[0],h=b[1],Q=Object(n.useState)(""),f=Object(a.a)(Q,2),p=f[0],y=f[1],G=function(e){A.setWorkExperienceArray(A.workExperienceArray.filter((function(A){return A.id!==e})))};return Object(o.jsxs)(J,{children:[A.workExperienceArray.map((function(e){return Object(o.jsx)(m,{title:e.jobTitle,startDate:e.startDate,endDate:e.endDate,onDelete:function(){return G(e.id)},onEdit:function(){return t=e.id,A.workExperienceArray.forEach((function(A){A.id===t&&(i(A.jobTitle),g(A.city),u(A.companyName),C(A.startDate),h(A.endDate),y(A.responsibilities))})),void G(t);var t}},e.id)})),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),A.setWorkExperienceArray([].concat(Object(B.a)(A.workExperienceArray),[{id:v()(),jobTitle:c,city:l,companyName:j,startDate:I,endDate:D,responsibilities:p}])),i(""),g(""),u(""),C(""),h(""),y("")},children:[Object(o.jsx)(x,{firstInput:"Job Title",firstInputChange:function(A){return i(A.target.value)},firstValue:c,secondInput:"City/State",secondInputChange:function(A){return g(A.target.value)},secondValue:l,thirdInput:"Company Name",thirdInputChange:function(A){return u(A.target.value)},thirdValue:j,startDateChange:function(A){return C(A.target.value)},startDateValue:I,endDateChange:function(A){return h(A.target.value)},endDateValue:D}),Object(o.jsx)("div",{children:Object(o.jsx)("textarea",{name:"responsibilities",id:"responsibilities",rows:"4",cols:"30",onChange:function(A){return y(A.target.value)},value:p})}),Object(o.jsx)(E,{text:"Add work experience"})]})]})},Y=function(A){var e=Object(n.useState)(""),t=Object(a.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)(""),s=Object(a.a)(r,2),l=s[0],g=s[1],S=Object(n.useState)(""),d=Object(a.a)(S,2),j=d[0],u=d[1],k=Object(n.useState)(""),O=Object(a.a)(k,2),I=O[0],C=O[1],w=Object(n.useState)(""),b=Object(a.a)(w,2),D=b[0],h=b[1],Q=function(e){A.setEducationArray(A.educationArray.filter((function(A){return A.id!==e})))};return Object(o.jsxs)(J,{children:[A.educationArray.map((function(e){return Object(o.jsx)(m,{title:e.degree,startDate:e.startDate,endDate:e.endDate,onDelete:function(){return Q(e.id)},onEdit:function(){return t=e.id,A.educationArray.forEach((function(A){A.id===t&&(i(A.degree),g(A.city),u(A.institution),C(A.startDate),h(A.endDate))})),void Q(t);var t}},e.id)})),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),A.setEducationArray([].concat(Object(B.a)(A.educationArray),[{id:v()(),degree:c,city:l,institution:j,startDate:I,endDate:D}])),i(""),g(""),u(""),C(""),h("")},children:[Object(o.jsx)(x,{firstInput:"Degree",firstInputChange:function(A){return i(A.target.value)},firstValue:c,secondInput:"City/State",secondInputChange:function(A){return g(A.target.value)},secondValue:l,thirdInput:"Institution",thirdInputChange:function(A){return u(A.target.value)},thirdValue:j,startDateChange:function(A){return C(A.target.value)},startDateValue:I,endDateChange:function(A){return h(A.target.value)},endDateValue:D}),Object(o.jsx)(E,{text:"Add education"})]})]})},V=t(5),Z=t.p+"static/media/OpenSans-Regular.1b0809d5.ttf",T=t.p+"static/media/OpenSans-Bold.dbb97fd9.ttf";V.Font.register({family:"Open Sans",fonts:[{src:Z},{src:T,fontWeight:"bold"}]});var M=V.StyleSheet.create({page:{margin:"20 35",fontFamily:"Open Sans"},nameHeader:{fontSize:"34",flexDirection:"row",fontWeight:"bold",color:"#187EAE"},info:{fontSize:"16",flexDirection:"row"},caseIcon:{width:"20",height:"20",marginRight:"10"},capIcon:{width:"27",height:"27",marginRight:"10"}}),X=function(A){return Object(o.jsx)(V.Document,{onRender:function(){},children:Object(o.jsxs)(V.Page,{size:"A4",style:M.page,children:[Object(o.jsx)(V.View,{style:{marginBottom:"20"},children:Object(o.jsxs)(V.View,{children:[Object(o.jsxs)(V.View,{style:M.nameHeader,children:[Object(o.jsx)(V.Text,{children:A.personalInformation.firstName}),Object(o.jsx)(V.Text,{style:{marginLeft:"10",marginBottom:"20"},children:A.personalInformation.lastName})]}),Object(o.jsxs)(V.View,{style:M.info,children:[Object(o.jsxs)(V.View,{children:[Object(o.jsxs)(V.View,{style:M.info,children:[Object(o.jsx)(V.View,{children:Object(o.jsx)(V.Text,{style:{fontWeight:"bold",marginRight:"10",marginBottom:"5"},children:"Phone"})}),Object(o.jsx)(V.View,{children:Object(o.jsx)(V.Text,{children:A.personalInformation.phoneNumber})})]}),Object(o.jsxs)(V.View,{style:M.info,children:[Object(o.jsx)(V.View,{children:Object(o.jsx)(V.Text,{style:{fontWeight:"bold",marginRight:"10"},children:"Address"})}),Object(o.jsx)(V.View,{children:Object(o.jsx)(V.Text,{children:A.personalInformation.city})})]})]}),Object(o.jsxs)(V.View,{style:[M.info,{marginLeft:"20"}],children:[Object(o.jsx)(V.View,{children:Object(o.jsx)(V.Text,{style:{fontWeight:"bold",marginRight:"10"},children:"Email"})}),Object(o.jsx)(V.View,{children:Object(o.jsx)(V.Text,{children:A.personalInformation.email})})]})]})]})}),Object(o.jsxs)(V.View,{style:[M.info,{marginBottom:"5"}],children:[Object(o.jsx)(V.Image,{src:"data:image/png;base64,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",style:M.caseIcon}),Object(o.jsx)(V.Text,{style:{color:"#187EAE",fontWeight:"bold",fontSize:"20"},children:"Work Experience"})]}),A.workExperience.map((function(A){return Object(o.jsxs)(V.View,{style:[M.info,{marginBottom:"20"}],children:[Object(o.jsxs)(V.View,{children:[Object(o.jsxs)(V.Text,{style:{marginBottom:"5"},children:[Object(y.a)(new Date(A.startDate),"MM/yyyy")," -"," "]}),Object(o.jsx)(V.Text,{style:{marginBottom:"5"},children:Object(y.a)(new Date(A.endDate),"MM/yyyy")})]}),Object(o.jsxs)(V.View,{style:{marginLeft:"20"},children:[Object(o.jsx)(V.Text,{style:{fontWeight:"bold",marginBottom:"5"},children:A.jobTitle}),Object(o.jsx)(V.Text,{style:{marginBottom:"5"},children:A.city}),Object(o.jsx)(V.Text,{style:{marginBottom:"5"},children:A.companyName}),Object(o.jsx)(V.Text,{style:{marginBottom:"5"},children:A.responsibilities})]})]},A.id)})),Object(o.jsxs)(V.View,{style:[M.info,{marginBottom:"5"}],children:[Object(o.jsx)(V.Image,{src:"data:image/png;base64,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",style:M.capIcon}),Object(o.jsx)(V.Text,{style:{color:"#187EAE",fontWeight:"bold",fontSize:"20"},children:"Education"})]}),A.education.map((function(A){return Object(o.jsxs)(V.View,{style:[M.info,{marginBottom:"20"}],children:[Object(o.jsxs)(V.View,{children:[Object(o.jsxs)(V.Text,{style:{marginBottom:"5"},children:[Object(y.a)(new Date(A.startDate),"MM/yyyy")," -"," "]}),Object(o.jsx)(V.Text,{children:Object(y.a)(new Date(A.endDate),"MM/yyyy")})]}),Object(o.jsxs)(V.View,{style:{marginLeft:"20"},children:[Object(o.jsx)(V.Text,{style:{fontWeight:"bold",marginBottom:"5"},children:A.degree}),Object(o.jsx)(V.Text,{style:{marginBottom:"5"},children:A.institution}),Object(o.jsx)(V.Text,{style:{marginBottom:"5"},children:A.city})]})]},A.id)}))]})})};t(549);var P=function(){var A=Object(n.useState)(!0),e=Object(a.a)(A,2),t=e[0],c=e[1],i=Object(n.useState)([]),r=Object(a.a)(i,2),s=r[0],l=r[1],S=Object(n.useState)([]),d=Object(a.a)(S,2),k=d[0],O=d[1],J=Object(n.useState)([]),I=Object(a.a)(J,2),C=I[0],B=I[1],b=Object(n.useState)(""),D=Object(a.a)(b,2),x=D[0],h=D[1],Q=Object(n.useState)(""),E=Object(a.a)(Q,2),f=E[0],p=E[1],y=Object(n.useState)(""),m=Object(a.a)(y,2),G=m[0],v=m[1],Z=Object(n.useState)(""),T=Object(a.a)(Z,2),M=T[0],P=T[1],L=Object(n.useState)(""),K=Object(a.a)(L,2),H=K[0],q=K[1],z=Object(n.useState)(""),F=Object(a.a)(z,2),U=F[0],R=F[1],W=Object(n.useState)(!1),_=Object(a.a)(W,2),$=_[0],AA=_[1],eA=Object(n.useState)(!1),tA=Object(a.a)(eA,2),nA=tA[0],cA=tA[1],iA=Object(n.useState)(!1),rA=Object(a.a)(iA,2),aA=rA[0],sA=rA[1];return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(g,{text:t?"Preview":"Edit",onSwitch:function(A){B({firstName:x,lastName:f,phoneNumber:G,city:M,state:H,email:U}),c((function(){return!t}))},src:t?Object(o.jsx)(j.a,{}):Object(o.jsx)(j.c,{})}),Object(o.jsxs)("div",{style:t?{display:"block"}:{display:"none"},children:[Object(o.jsx)(u,{title:"Personal Info",setVisibility:function(){return AA(!$)},visible:$,content:Object(o.jsx)(w,{firstName:x,lastName:f,phoneNumber:G,city:M,state:H,email:U,setFirstName:h,setLastName:p,setPhoneNumber:v,setCity:P,setState:q,setEmail:R})}),Object(o.jsx)(u,{title:"Work Experience",setVisibility:function(){return cA(!nA)},visible:nA,content:Object(o.jsx)(N,{workExperienceArray:s,setWorkExperienceArray:l})}),Object(o.jsx)(u,{title:"Education",setVisibility:function(){return sA(!aA)},visible:aA,content:Object(o.jsx)(Y,{educationArray:k,setEducationArray:O})})]}),Object(o.jsx)("div",{style:t?{display:"none"}:{display:"block",marginTop:"30px"},children:Object(o.jsx)(V.PDFViewer,{style:{width:"100vw",height:"100vh"},children:Object(o.jsx)(X,{personalInformation:C,workExperience:s,education:k})})})]})};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(P,{})}),document.getElementById("root"))}},[[550,1,2]]]);
//# sourceMappingURL=main.d4b72925.chunk.js.map