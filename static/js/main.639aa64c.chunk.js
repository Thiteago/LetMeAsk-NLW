(this.webpackJsonpletmeask=this.webpackJsonpletmeask||[]).push([[0],{24:function(e,t,a){},34:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),s=a(26),c=a.n(s),i=a(16),o=a(5),u=a(11),d=a.n(u),l=a(14),j=a.p+"static/media/illustration.ae7276f0.svg",p=a.p+"static/media/logo.a88331cb.svg",b=a.p+"static/media/google-icon.df15d8e5.svg",m=a(28),h=(a(34),a(3));function x(e){return Object(h.jsx)("button",Object(m.a)({className:"button"},e))}a(24);var f=a(18),O=a(17);a(36),a(38);O.a.initializeApp({apiKey:"AIzaSyBYgjAIP6W9Ghy0vqDqekqMMSMK6iH7FtY",authDomain:"letmeask-3edd4.firebaseapp.com",databaseURL:"https://letmeask-3edd4-default-rtdb.firebaseio.com",projectId:"letmeask-3edd4",storageBucket:"letmeask-3edd4.appspot.com",messagingSenderId:"779902844973",appId:"1:779902844973:web:1629e3da6de95c37e3b8a4"});var g=O.a.auth(),v=O.a.database(),k=Object(n.createContext)({});function y(e){var t=Object(n.useState)(),a=Object(f.a)(t,2),r=a[0],s=a[1];function c(){return(c=Object(l.a)(d.a.mark((function e(){var t,a,n,r,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new O.a.auth.GoogleAuthProvider,e.next=3,g.signInWithPopup(t);case 3:if(!(a=e.sent).user){e.next=9;break}if(n=a.user,r=n.displayName,c=n.photoURL,i=n.uid,r&&c){e.next=8;break}throw new Error("Missing information from Google Account.");case 8:s({id:i,name:r,avatar:c});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){var e=g.onAuthStateChanged((function(e){if(e){var t=e.displayName,a=e.photoURL,n=e.uid;if(!t||!a)throw new Error("Missing information from Google Account.");s({id:n,name:t,avatar:a})}}));return function(){e()}}),[]),Object(h.jsx)(k.Provider,{value:{user:r,signInWithGoogle:function(){return c.apply(this,arguments)}},children:e.children})}function w(){return Object(n.useContext)(k)}function C(){var e=Object(o.f)(),t=w(),a=t.user,n=t.signInWithGoogle;function r(){return(r=Object(l.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=3;break}return t.next=3,n();case 3:e.push("/rooms/new");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(h.jsxs)("div",{id:"page-auth",children:[Object(h.jsxs)("aside",{children:[Object(h.jsx)("img",{src:j,alt:"ilustra\xe7\xe3o s\xedmbolizando perguntas e respostas"}),Object(h.jsx)("strong",{children:"Crie salas de Q&A ao-vivo"}),Object(h.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo-real"})]}),Object(h.jsx)("main",{children:Object(h.jsxs)("div",{className:"main-content",children:[Object(h.jsx)("img",{src:p,alt:"Letmeask"}),Object(h.jsxs)("button",{onClick:function(){return r.apply(this,arguments)},className:"create-room",children:[Object(h.jsx)("img",{src:b,alt:"Logo do Google"}),"Crie sua sala com o Google"]}),Object(h.jsx)("div",{className:"separator",children:"ou entre em uma sala"}),Object(h.jsxs)("form",{children:[Object(h.jsx)("input",{type:"text",placeholder:"Digite o c\xf3digo da sala"}),Object(h.jsx)(x,{type:"submit",children:"Entrar na sala"})]})]})})]})}function I(){var e=w().user,t=Object(o.f)(),a=Object(n.useState)(""),r=Object(f.a)(a,2),s=r[0],c=r[1];function u(){return(u=Object(l.a)(d.a.mark((function a(n){var r,c;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),""!==s.trim()){a.next=3;break}return a.abrupt("return");case 3:return r=v.ref("rooms"),a.next=6,r.push({title:s,authorId:null===e||void 0===e?void 0:e.id});case 6:c=a.sent,t.push("/rooms/".concat(c.key));case 8:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(h.jsxs)("div",{id:"page-auth",children:[Object(h.jsxs)("aside",{children:[Object(h.jsx)("img",{src:j,alt:"ilustra\xe7\xe3o s\xedmbolizando perguntas e respostas"}),Object(h.jsx)("strong",{children:"Crie salas de Q&A ao-vivo"}),Object(h.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo-real"})]}),Object(h.jsx)("main",{children:Object(h.jsxs)("div",{className:"main-content",children:[Object(h.jsx)("img",{src:p,alt:"Letmeask"}),Object(h.jsx)("h2",{children:"Criar uma nova sala"}),Object(h.jsxs)("form",{onSubmit:function(e){return u.apply(this,arguments)},children:[Object(h.jsx)("input",{type:"text",placeholder:"Nome da sala",onChange:function(e){return c(e.target.value)},value:s}),Object(h.jsx)(x,{type:"submit",children:"Criar sala"})]}),Object(h.jsxs)("p",{children:["Quer entrar em uma sala existente ? ",Object(h.jsx)(i.b,{to:"/",children:"clique aqui"})]})]})})]})}function A(){return Object(h.jsx)("h1",{children:"sala"})}var G=function(){return Object(h.jsx)(i.a,{children:Object(h.jsx)(y,{children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/",exact:!0,component:C}),Object(h.jsx)(o.a,{path:"/rooms/new",component:I}),Object(h.jsx)(o.a,{path:"/rooms/:id",component:A})]})})})};a(46);c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(G,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.639aa64c.chunk.js.map