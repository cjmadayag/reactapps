(this.webpackJsonpflames=this.webpackJsonpflames||[]).push([[0],{30:function(e,a,t){e.exports=t(48)},48:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),c=t.n(r),s=t(8),o=t(54),m=t(55),u=t(56),i=t(57),E=t(58),d=t(53),b=t(49),f=function(e){var a=e.label1,t=e.label2,n=e.setName,r=e.name;return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,a),l.a.createElement(b.a,{placeholder:"Enter name here",onChange:function(e){return n(e.target.value)},value:r}),l.a.createElement("p",null,t,": ",l.a.createElement("span",{className:"font-weight-bold"},r)))},p=t(61),h=t(50),v=t(51),N=t(52),w=function(e){var a=e.showModal,t=e.setShowModal,n=e.result,r=e.setName1,c=e.setName2;return l.a.createElement(p.a,{isOpen:a},l.a.createElement(h.a,null,"Result"),l.a.createElement(v.a,{className:"text-center"},l.a.createElement("h3",null,n)),l.a.createElement(N.a,null,l.a.createElement(d.a,{color:"danger",onClick:function(){t(!1),r(""),c("")}},"Close")))};var x=function(){var e=l.a.useState(""),a=Object(s.a)(e,2),t=a[0],n=a[1],r=l.a.useState(""),c=Object(s.a)(r,2),b=c[0],p=c[1],h=l.a.useState(!1),v=Object(s.a)(h,2),N=v[0],x=v[1],y=l.a.useState(""),O=Object(s.a)(y,2),g=O[0],C=O[1];return l.a.createElement("div",{className:""},l.a.createElement(o.a,null,l.a.createElement(m.a,{sm:"8",md:"6",xl:"4",className:"m-auto vh-100 d-flex align-items-center"},l.a.createElement(u.a,{body:!0},l.a.createElement(i.a,null,l.a.createElement("h3",{className:"text-center"},"WELCOME TO FLAMES")),l.a.createElement(E.a,{className:"text-center"},"The rule is very simple. Just type your crush's full name and your full name then click the submit button to show the result."),l.a.createElement("h4",null,"Love Calculator"),l.a.createElement(f,{label1:"Enter your crush's name",label2:"Name is",setName:n,name:t}),l.a.createElement(f,{label1:"Enter your full name",label2:"Your name is",setName:p,name:b}),l.a.createElement(d.a,{size:"md",color:"success",className:"text-white w-25 mx-auto",onClick:function(){var e=t.toLowerCase().split(""),a=b.toLowerCase().split(""),n=[],l=[];e.forEach((function(e){a.includes(e)&&" "!==e&&l.push(e)})),a.forEach((function(a){e.includes(a)&&" "!==a&&n.push(a)}));var r=n.length+l.length;switch(r%6){case 1:C("Friends");break;case 2:C("Lovers");break;case 3:C("Acquaintances");break;case 4:C("Marriage");break;case 5:C("Enemies");break;default:C(0!==r?"Soulmate":"No match")}x(!0)}},"Calculate"))),l.a.createElement(w,{showModal:N,setShowModal:x,result:g,setName1:n,setName2:p})))},y=t(16),O=t(59),g=t(60),C=function(e){var a=e.amount,t=e.setAmount;return l.a.createElement("div",{className:"d-flex"},l.a.createElement("h5",{className:"w-50 text-center my-auto"},"Amount:"),l.a.createElement(b.a,{className:"w-50",value:a,onChange:function(e){(e.nativeEvent.data>=0||"deleteContentBackward"===e.nativeEvent.inputType||"deleteContentForward"===e.nativeEvent.inputType)&&t(e.target.value)}}))},j=function(e){var a=e.setName,t=e.name,n=e.setShare,r=e.share,c=e.handleAddPerson;return l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement(b.a,{className:"w-50",placeholder:"name",value:t,onChange:function(e){return a(e.target.value)}}),l.a.createElement(b.a,{className:"w-25",placeholder:"share",value:r,onChange:function(e){(e.nativeEvent.data>=0||"deleteContentBackward"===e.nativeEvent.inputType||"deleteContentForward"===e.nativeEvent.inputType)&&n(e.target.value)}}),l.a.createElement(d.a,{className:"btn btn-success",onClick:c},"Add"))},k=function(e){var a=e.person;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h5",null,a[0]," ",a[1]))},S=function(e){var a=e.persons,t=function(){a.forEach((function(e){return console.log(e)}))};return l.a.createElement(l.a.Fragment,null,a.map((function(e,a){return l.a.createElement(k,{key:a,person:e,onClick:t})})))},V=function(){var e=l.a.useState(0),a=Object(s.a)(e,2),t=a[0],n=a[1],r=l.a.useState(""),c=Object(s.a)(r,2),o=c[0],m=c[1],i=l.a.useState(""),E=Object(s.a)(i,2),d=E[0],b=E[1],f=l.a.useState([]),p=Object(s.a)(f,2),h=p[0],v=p[1];return l.a.createElement(u.a,{className:"col-6 offset-3"},l.a.createElement(O.a,null,l.a.createElement("h1",{className:"text-center"},"Bill Divider")),l.a.createElement(g.a,{className:"d-flex flex-column mx-auto"},l.a.createElement(C,{amount:t,setAmount:n}),l.a.createElement("hr",{className:"w-100"}),l.a.createElement(S,{persons:h}),l.a.createElement(j,{setName:m,name:o,setShare:b,share:d,handleAddPerson:function(){v([].concat(Object(y.a)(h),[[o,d]]))}})))},F=function(e){var a=e.label,t=e.setValue,n=e.className;return l.a.createElement("div",{className:n},l.a.createElement("button",{className:"btn btn-secondary w-75",onClick:function(){return t(a)}},a))},A=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)("0"),o=Object(s.a)(c,2),m=o[0],u=o[1],i=Object(n.useState)("0"),E=Object(s.a)(i,2),d=E[0],b=E[1];Object(n.useEffect)((function(){m.length>12&&u(m.substr(1))}),[m]);var f=function(e){var a=t,n=d,l=m;"0"!==l||!"0123456789.".includes(e)&&"-"!==e?"0123456789.".includes(e)?(b(d+e),u(l+e)):(r([].concat(Object(y.a)(a),[n,e])),u(l+e),b("")):(b(e),u(e))};return l.a.createElement("div",{className:"vh-100 d-flex align-items-center"},l.a.createElement("div",{className:"w-25 m-auto border bg-black"},l.a.createElement("div",{className:"px-3 pt-2"},l.a.createElement("h3",{className:"border px-2 h-25"},m)),l.a.createElement("div",{className:"row w-100 mx-auto"},l.a.createElement(F,{className:"w-100 border text-center py-2",label:"Clear",setValue:function(){r(""),u("0"),b("0")}}),l.a.createElement(F,{className:"w-25 border text-center py-2",label:"7",setValue:f}),l.a.createElement(F,{className:"w-25 border text-center py-2",label:"8",setValue:f}),l.a.createElement(F,{className:"w-25 border text-center py-2",label:"9",setValue:f}),l.a.createElement(F,{className:"w-25 border text-center py-2",label:"+",setValue:f}),l.a.createElement(F,{className:"w-25 border text-center py-2",label:"4",setValue:f}),l.a.createElement(F,{className:"w-25 border text-center py-2",label:"5",setValue:f}),l.a.createElement(F,{className:"w-25 border text-center py-2",label:"6",setValue:f}),l.a.createElement(F,{className:"w-25 border text-center py-2",label:"-",setValue:f}),l.a.createElement(F,{className:"w-25 border text-center py-2",label:"1",setValue:f}),l.a.createElement(F,{className:"w-25 border text-center py-2",label:"2",setValue:f}),l.a.createElement(F,{className:"w-25 border text-center py-2",label:"3",setValue:f}),l.a.createElement(F,{className:"w-25 border text-center py-2",label:"*",setValue:f}),l.a.createElement(F,{className:"w-25 border text-center py-2",label:"0",setValue:f}),l.a.createElement(F,{className:"w-25 border text-center py-2",label:".",setValue:f}),l.a.createElement(F,{className:"w-25 border text-center py-2",label:"=",setValue:function(){var e=t,a=d;for(""!==d&&(e=[].concat(Object(y.a)(e),[a]),r(e),b(""));e.indexOf("-")>0;){var n=e.indexOf("-"),l=e[n+1];l="-"+l,e.splice(n,1,"+"),e.splice(n+1,1,l)}for(;e.indexOf("*")>0;){var c=e.indexOf("*"),s=e[c-1],o=e[c+1];e.splice(c-1,3,s*o)}for(;e.indexOf("/")>0;){var m=e.indexOf("/"),i=e[m-1],E=e[m+1];e.splice(m-1,3,i/E)}for(;e.indexOf("+")>0;){var f=e.indexOf("+"),p=e[f-1],h=e[f+1];e.splice(f-1,3,parseFloat(p)+parseFloat(h))}var v=e[0].toString();r(""),b(v),u(v)}}),l.a.createElement(F,{className:"w-25 border text-center py-2",label:"/",setValue:f}))))},M=t(15),L=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(M.b,{to:"/flames"},"Flames"),l.a.createElement(M.b,{to:"/calculator"},"Calculator"))},T=t(11),B=function(){return l.a.createElement(M.a,null,l.a.createElement(T.c,null,l.a.createElement(T.a,{path:"/",component:L,exact:!0}),l.a.createElement(T.a,{path:"/flames",component:x,strict:!0}),l.a.createElement(T.a,{path:"/billdivider",component:V,strict:!0}),l.a.createElement(T.a,{path:"/calculator",component:A,strict:!0})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(47);c.a.render(l.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.03c27534.chunk.js.map