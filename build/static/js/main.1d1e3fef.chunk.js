(this["webpackJsonplottery-flypiggs"]=this["webpackJsonplottery-flypiggs"]||[]).push([[0],{50:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(18),i=a.n(r),s=a(12),o=a(2),j=a(10),l=a.n(j),d=a(15),u=a(7),b=a(0),h=Object(n.createContext)([{},function(){}]);function p(e){var t=e.children,a=Object(n.useState)({}),c=Object(u.a)(a,2),r=c[0],i=c[1];return Object(b.jsx)(h.Provider,{value:[r,i],children:t})}var O=a(13),x=a.n(O),f=a.p+"static/media/logo.dc126ffe.png";a(50);function v(){var e=Object(o.f)(),t=Object(n.useContext)(h),a=Object(u.a)(t,2)[1],c=Object(n.useState)(""),r=Object(u.a)(c,2),i=r[0],s=r[1],j=Object(n.useState)(""),p=Object(u.a)(j,2),O=p[0],v=p[1];function m(){return(m=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==O&&""!==i){t.next=4;break}return x.a.fire({icon:"warning",title:"Aten\xe7\xe3o",text:"Preencha o nome do sorteio e os participantes.",showConfirmButton:!1,showCloseButton:!0}),t.abrupt("return");case 4:a({name:O,participants:i}),e.push("/newSort");case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(b.jsxs)("div",{id:"page-home",children:[Object(b.jsx)("header",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:f,alt:"Lottery FlyPiggs"}),Object(b.jsx)("span",{children:"FLYPIGGS"})]})}),Object(b.jsx)("main",{children:Object(b.jsxs)("div",{className:"main-title",children:[Object(b.jsx)("h1",{children:"Criar Sorteio"}),Object(b.jsxs)("form",{onSubmit:function(e){return m.apply(this,arguments)},children:[Object(b.jsx)("input",{onChange:function(e){return v(e.target.value)},placeholder:"Nome do sorteio"}),Object(b.jsx)("textarea",{onChange:function(e){return s(e.target.value)},placeholder:"Adicionar os participantes ao sorteio"}),Object(b.jsx)("button",{type:"submit",children:"Criar Sorteio"})]})]})}),Object(b.jsx)("footer",{children:"FLYPIGGS - Copyright \xa9 2021"})]})}var m=a(37),g=a.n(m),w=a(38),C=a.n(w),y=a.p+"static/media/flypiggstext.dc2a8b9c.png";a(77);function L(e){var t=e.name,a=e.entries,n=e.avatar;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:n||y,alt:"avatar"}),Object(b.jsx)("h2",{children:t})]}),Object(b.jsxs)("span",{children:[a>1?"Entradas":"Entrada",": ",a]})]})}var S=a.p+"static/media/fogos.80e8fd2b.gif";a(78);function k(e){var t=e.name,a=e.avatar;return Object(b.jsxs)("div",{id:"alert",children:[Object(b.jsx)("img",{src:S,alt:"fogos"}),Object(b.jsx)("strong",{children:"Vencedor"}),Object(b.jsx)("img",{className:"avatar-winner",src:a||y,alt:t}),Object(b.jsx)("span",{children:t}),Object(b.jsx)("br",{})]})}a(79);var P=g()(x.a);function N(){var e=Object(n.useContext)(h),t=Object(u.a)(e,1)[0],a=Object(n.useState)(null),c=Object(u.a)(a,2),r=c[0],i=c[1],j=Object(o.f)(),p=Object(n.useState)(""),O=Object(u.a)(p,2),v=O[0],m=O[1],g=Object(n.useState)(0),w=Object(u.a)(g,2),y=w[0],S=w[1],N=Object(n.useState)([]),E=Object(u.a)(N,2),G=E[0],B=E[1],F=Object(n.useCallback)(Object(d.a)(l.a.mark((function e(){var a,n,c,r,s,o,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null===(a=t.participants)||void 0===a?void 0:a.split(","),c=[],r="",null===n||void 0===n||n.forEach((function(e){e=e.trim(),c.includes(e)||(c.push(e),r+="".concat(e,","))})),r=r.substr(0,r.length-1),e.next=7,C.a.get("https://api.twitch.tv/kraken/users?login=".concat(r),{headers:{"Client-ID":"o2ie168kex5r4s6o0xpee997ch8obk",Accept:"application/vnd.twitchtv.v5+json"}});case 7:s=e.sent,o=s.data,j=o.users.reduce((function(e,t){return e[t.display_name.toLowerCase()]={avatar:t.logo,display_name:t.display_name},e}),{}),i(j);case 11:case"end":return e.stop()}}),e)}))),[]);return Object(n.useEffect)((function(){m(t.participants?t.participants:""),F()}),[]),Object(n.useEffect)((function(){if(void 0!==t.name&&void 0!==t.participants){if(""===t.name||""===t.participants)return j.push("/"),void x.a.fire({icon:"warning",title:"Aten\xe7\xe3o",text:"Preencha o nome do sorteio e os participantes.",showConfirmButton:!1,showCloseButton:!0});if(r){var e=v.split(","),a=[];S(e.length),e.forEach((function(e){e=e.trim(),a.includes(e)||a.push(e)}));var n=a.map((function(t){return void 0===r["".concat(t.toLocaleLowerCase())]?{name:t,entries:e.filter((function(e){return e===t})).length,avatar:""}:{name:r["".concat(t.toLocaleLowerCase())].display_name,entries:e.filter((function(e){return e===t})).length,avatar:r["".concat(t.toLocaleLowerCase())].avatar}}));B(n)}}else j.push("/")}),[v,t.name,t.participants,j,r]),Object(b.jsxs)("div",{id:"page-new-sort",children:[Object(b.jsxs)("header",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:f,alt:"Lottery FlyPiggs"}),Object(b.jsx)("span",{children:"FLYPIGGS"})]}),Object(b.jsx)("div",{children:Object(b.jsx)(s.b,{className:"navbar-button",to:"/",children:"Novo Sorteio"})})]}),Object(b.jsxs)("main",{children:[Object(b.jsxs)("div",{className:"main-title",children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:[G.length>1?"Participantes":"Participante",": ",Object(b.jsx)("strong",{children:G.length})]}),Object(b.jsxs)("span",{children:[y>1?"Entradas":"Entrada",": ",Object(b.jsx)("strong",{children:y})]})]}),Object(b.jsx)("div",{className:"sort-name",children:Object(b.jsx)("h1",{children:t.name})}),Object(b.jsx)("div",{className:"main-controller",children:Object(b.jsx)("button",{onClick:function(){var e=v.split(","),t=Math.floor(Math.random()*e.length),a={name:"",avatar:""};r&&(void 0===r["".concat(e[t].toLocaleLowerCase())]?(a.name=e[t],a.avatar=""):(a.name=r["".concat(e[t].toLocaleLowerCase())].display_name,a.avatar=r["".concat(e[t].toLocaleLowerCase())].avatar),P.fire({html:Object(b.jsx)(k,{name:a.name,avatar:a.avatar}),showConfirmButton:!1,showCancelButton:!1,background:"transparent"}))},children:"Sortear"})})]}),Object(b.jsx)("div",{className:"main-content",children:G.map((function(e){var t=e.name,a=e.entries,n=e.avatar;return Object(b.jsx)(L,{name:t,entries:a,avatar:n},t)}))})]}),Object(b.jsx)("footer",{children:"FLYPIGGS - Copyright \xa9 2021"})]})}var E=function(){return Object(b.jsx)(s.a,{children:Object(b.jsx)(p,{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/",exact:!0,component:v}),Object(b.jsx)(o.a,{path:"/newSort",component:N})]})})})};a(80);i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(E,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.1d1e3fef.chunk.js.map