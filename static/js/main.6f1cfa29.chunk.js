(this["webpackJsonplottery-flypiggs"]=this["webpackJsonplottery-flypiggs"]||[]).push([[0],{50:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(18),r=a.n(c),i=a(12),s=a(2),o=a(10),j=a.n(o),l=a(15),d=a(7),u=a(0),b=Object(n.createContext)([{},function(){}]);function h(e){var t=e.children,a=Object(n.useState)({}),c=Object(d.a)(a,2),r=c[0],i=c[1];return Object(u.jsx)(b.Provider,{value:[r,i],children:t})}var p=a(13),O=a.n(p),f=a.p+"static/media/logo.dc126ffe.png";a(50);function v(){var e=Object(s.f)(),t=Object(n.useContext)(b),a=Object(d.a)(t,2)[1],c=Object(n.useState)(""),r=Object(d.a)(c,2),i=r[0],o=r[1],h=Object(n.useState)(""),p=Object(d.a)(h,2),v=p[0],x=p[1];function m(){return(m=Object(l.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==v&&""!==i){t.next=4;break}return O.a.fire({icon:"warning",title:"Aten\xe7\xe3o",text:"Preencha o nome do sorteio e os participantes.",showConfirmButton:!1,showCloseButton:!0}),t.abrupt("return");case 4:a({name:v,participants:i}),e.push("/newSort");case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(u.jsxs)("div",{id:"page-home",children:[Object(u.jsx)("header",{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:f,alt:"Lottery FlyPiggs"}),Object(u.jsx)("span",{children:"FLYPIGGS"})]})}),Object(u.jsx)("main",{children:Object(u.jsxs)("div",{className:"main-title",children:[Object(u.jsx)("h1",{children:"Criar Sorteio"}),Object(u.jsxs)("form",{onSubmit:function(e){return m.apply(this,arguments)},children:[Object(u.jsx)("input",{onChange:function(e){return x(e.target.value)},placeholder:"Nome do sorteio"}),Object(u.jsx)("textarea",{onChange:function(e){return o(e.target.value)},placeholder:"Adicionar os participantes ao sorteio"}),Object(u.jsx)("button",{type:"submit",children:"Criar Sorteio"})]})]})}),Object(u.jsx)("footer",{children:"FLYPIGGS - Copyright \xa9 2021"})]})}var x=a(37),m=a.n(x),g=a(38),w=a.n(g),C=a.p+"static/media/flypiggstext.dc2a8b9c.png";a(77);function y(e){var t=e.name,a=e.entries,n=e.avatar;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:n||C,alt:"avatar"}),Object(u.jsx)("h2",{children:t})]}),Object(u.jsxs)("span",{children:[a>1?"Entradas":"Entrada",": ",a]})]})}var L=a.p+"static/media/fogos.80e8fd2b.gif";a(78);function S(e){var t=e.name,a=e.avatar;return Object(u.jsxs)("div",{id:"alert",children:[Object(u.jsx)("img",{src:L,alt:"fogos"}),Object(u.jsx)("strong",{children:"Vencedor"}),Object(u.jsx)("img",{className:"avatar-winner",src:a||C,alt:t}),Object(u.jsx)("span",{children:t}),Object(u.jsx)("br",{})]})}a(79);var k=m()(O.a);function P(){var e=Object(n.useContext)(b),t=Object(d.a)(e,1)[0],a=Object(n.useState)(null),c=Object(d.a)(a,2),r=c[0],o=c[1],h=Object(s.f)(),p=Object(n.useState)(""),v=Object(d.a)(p,2),x=v[0],m=v[1],g=Object(n.useState)(0),C=Object(d.a)(g,2),L=C[0],P=C[1],N=Object(n.useState)([]),E=Object(d.a)(N,2),G=E[0],B=E[1],F=Object(n.useCallback)(Object(l.a)(j.a.mark((function e(){var a,n,c,r,i,s,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null===(a=t.participants)||void 0===a?void 0:a.split(","),c=[],r="",null===n||void 0===n||n.forEach((function(e){e=e.trim(),c.includes(e)||(c.push(e),r+="".concat(e,","))})),r=r.substr(0,r.length-1),e.next=7,w.a.get("https://api.twitch.tv/kraken/users?login=".concat(r),{headers:{"Client-ID":"o2ie168kex5r4s6o0xpee997ch8obk",Accept:"application/vnd.twitchtv.v5+json"}});case 7:i=e.sent,s=i.data,l=s.users.reduce((function(e,t){return e[t.display_name.toLowerCase()]={avatar:t.logo,display_name:t.display_name},e}),{}),o(l);case 11:case"end":return e.stop()}}),e)}))),[]);return Object(n.useEffect)((function(){m(t.participants?t.participants:""),F()}),[]),Object(n.useEffect)((function(){if(void 0!==t.name&&void 0!==t.participants){if(""===t.name||""===t.participants)return h.push("/"),void O.a.fire({icon:"warning",title:"Aten\xe7\xe3o",text:"Preencha o nome do sorteio e os participantes.",showConfirmButton:!1,showCloseButton:!0});if(r){var e=x.split(","),a=[];P(e.length),e.forEach((function(e){e=e.trim(),a.includes(e)||a.push(e)}));var n=a.map((function(t){return void 0===r["".concat(t.toLocaleLowerCase())]?{name:t,entries:e.filter((function(e){return e===t})).length,avatar:""}:{name:r["".concat(t.toLocaleLowerCase())].display_name,entries:e.filter((function(e){return e===t})).length,avatar:r["".concat(t.toLocaleLowerCase())].avatar}}));B(n)}}else h.push("/")}),[x,t.name,t.participants,h,r]),Object(u.jsxs)("div",{id:"page-new-sort",children:[Object(u.jsxs)("header",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:f,alt:"Lottery FlyPiggs"}),Object(u.jsx)("span",{children:"FLYPIGGS"})]}),Object(u.jsx)("div",{children:Object(u.jsx)(i.b,{className:"navbar-button",to:"/",children:"Novo Sorteio"})})]}),Object(u.jsxs)("main",{children:[Object(u.jsxs)("div",{className:"main-title",children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("span",{children:[G.length>1?"Participantes":"Participante",": ",Object(u.jsx)("strong",{children:G.length})]}),Object(u.jsxs)("span",{children:[L>1?"Entradas":"Entrada",": ",Object(u.jsx)("strong",{children:L})]})]}),Object(u.jsx)("div",{className:"sort-name",children:Object(u.jsx)("h1",{children:t.name})}),Object(u.jsx)("div",{className:"main-controller",children:Object(u.jsx)("button",{onClick:function(){var e=x.split(","),t=Math.floor(Math.random()*e.length),a={name:"",avatar:""};r&&(void 0===r["".concat(e[t].toLocaleLowerCase())]?(a.name=e[t],a.avatar=""):(a.name=r["".concat(e[t].toLocaleLowerCase())].display_name,a.avatar=r["".concat(e[t].toLocaleLowerCase())].avatar),k.fire({html:Object(u.jsx)(S,{name:a.name,avatar:a.avatar}),showConfirmButton:!1,showCancelButton:!1,background:"transparent"}))},children:"Sortear"})})]}),Object(u.jsx)("div",{className:"main-content",children:G.map((function(e){var t=e.name,a=e.entries,n=e.avatar;return Object(u.jsx)(y,{name:t,entries:a,avatar:n},t)}))})]}),Object(u.jsx)("footer",{children:"FLYPIGGS - Copyright \xa9 2021"})]})}var N=function(){return Object(u.jsx)(i.a,{children:Object(u.jsx)(h,{children:Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{path:"/",exact:!0,component:v}),Object(u.jsx)(s.a,{path:"/newSort",component:P})]})})})};a(80);r.a.render(Object(u.jsx)(N,{}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.6f1cfa29.chunk.js.map