(this.webpackJsonpfamille=this.webpackJsonpfamille||[]).push([[0],{33:function(e,t,n){},42:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(21),i=n.n(c),s=(n(42),n(14)),l=n(7),o=(n(33),n(20)),u=(n(43),n(69),n(70),new o.a.auth.GoogleAuthProvider),j=(o.a.apps.length?o.a.app():o.a.initializeApp({apiKey:"AIzaSyABJKs3lp_cLE6k9WX1ERcn4XlaI2BZ9wM",authDomain:"rolin-file.firebaseapp.com",projectId:"rolin-file",storageBucket:"rolin-file.appspot.com",messagingSenderId:"922531053521",appId:"1:922531053521:web:6cf7ea757988698a8aeaf0"})).firestore();var b=o.a.auth(),m=(o.a.firestore(),o.a.storage()),d={findAll:function(){return j.collection("famille").orderBy("numberFamilly","asc").get()},signInWithGoogle:function(){b.signInWithPopup(u)},CreateUserFireBase:function(e,t,n,a,r,c,i,s){var l=function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t="",n=0;n<20;n++)t+=e[Math.floor(Math.random()*e.length)];return t}();return j.collection("famille").doc(l).set({firstName:t,lastName:e,generation:r,birthDate:n,numberFamilly:a,pictureName:c,famillyName:i,dateMariage:s})},ModifyUserFireBase:function(e,t,n,a,r,c,i,s,l){return j.collection("famille").doc(e).set({firstName:n,lastName:t,generation:c,birthDate:a,numberFamilly:r,pictureName:i,famillyName:s,dateMariage:l})},FindIdPerson:function(e){return j.collection("famille").where("numberFamilly","==",e).get()}},h=n(2),f=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("nav",{id:"MyModification",className:"navbar navbar-expand-lg navbar-dark",children:[Object(h.jsx)(s.b,{className:"navbar-brand",to:"/",children:"Famille Rolin"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse justify-content-between",id:"navbarSupportedContent",children:Object(h.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(s.b,{className:"navbar-brand",to:"/anniversaire",children:"Annif"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(s.b,{className:"navbar-brand",to:"/generation3",children:"G\xe9n\xe9ration 3"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(s.b,{className:"navbar-brand",to:"/generation4",children:"G\xe9n\xe9ration 4"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(s.b,{className:"navbar-brand",to:"/jeu",children:"Jeu"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(s.b,{className:"navbar-brand",to:"/creer",children:"cr\xe9er"})})]})})]})})},O=n(15),p=n(16),g=n(17),x=n(37),v=Object(a.createContext)({user:null}),N=function(e){Object(g.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:null},e.componentDidMount=function(){b.onAuthStateChanged((function(t){e.setState({user:t})}))},e}return Object(p.a)(n,[{key:"render",value:function(){return Object(h.jsx)(v.Provider,{value:this.state.user,children:this.props.children})}}]),n}(a.Component),y=N,F=n(6),S=function(e){var t=e.lienImage,n=e.prenomNom,a=e.dateDeNaissance,r=e.link,c=void 0===r?"#":r,i=e.dateDeces,s=(e.generation,e.myBirthday),o=void 0!==s&&s,u=Object(l.f)();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"elementFlexible",children:["#"!==c&&Object(h.jsx)("button",{className:"myButton",onClick:function(){return u.push(c)},children:Object(h.jsx)("img",{src:t,alt:n})}),"#"===c&&Object(h.jsx)("img",{className:"picture",src:t,alt:n}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h5",{children:n}),Object(h.jsxs)("h6",{children:[a,i&&Object(h.jsxs)("span",{children:[" - ",i]})]})]}),o&&Object(h.jsx)("h2",{className:"clignote",children:"Happy birthday"})]})})},D=[],C=function(e,t){var n=[],a=e.toString().slice(0,t-1);return D.filter((function(e){return e.numberFamilly.toString().slice(0,t-1)===a&&e.numberFamilly<10*a+10})).map((function(e){return n.push(e)})),n};function w(e,t){var n=e.birthDate.split("/")[2],a=t.birthDate.split("/")[2],r=e.birthDate.split("/")[1],c=t.birthDate.split("/")[1],i=e.birthDate.split("/")[0],s=t.birthDate.split("/")[0];return n!==a?n>a?1:-1:r!==c?r>c?1:-1:i!==s?i>s?1:-1:0}function M(e,t){return e.birthDate!==t.birthDate?e.birthDate>t.birthDate?1:-1:0}var k=function(e){var t=[];return D.forEach((function(n){n.generation===e&&t.push(n)})),t.sort(w),t},B=function(){return function(e){var t,n,a;for(t=e.length-1;t>0;t--)n=Math.floor(Math.random()*(t+1)),a=e[t],e[t]=e[n],e[n]=a;return e}(D)};var E=n(29),I=function(e){var t=e.data,n=Object(l.f)();return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(E.a,{id:"searchFamilly",options:t,isClearable:!0,isSearchable:!0,onChange:function(e){null!==e&&n.push("/"+e.value)}})})},P=function(e){var t=e.match,n=Object(a.useState)([]),r=Object(F.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)(""),o=Object(F.a)(s,2),u=o[0],j=o[1],b=Object(a.useState)([]),m=Object(F.a)(b,2),f=m[0],O=m[1],p=Object(l.f)();return Object(a.useEffect)((function(){if(0===f.length)d.findAll().then((function(e){var n=t.params.numberFamilly,a=t.params.generation;j(t.params.generation),void 0!==a&&void 0!==n||(n=0,a="1",j("1")),function(e){D=[],e.forEach((function(e){D.push(e)}))}(e.docs.map((function(e){return e.data()})));var r=C(n,a);i([]),i(r),O(function(){var e=[];return D.filter((function(e){return"4"!==e.generation})).map((function(t){return e.push({value:t.generation+"/"+t.numberFamilly,label:t.firstName+" "+t.lastName})})),e}()),window.scroll(0,0)}));else{var e=t.params.numberFamilly,n=t.params.generation;j(t.params.generation),void 0!==n&&void 0!==e||(e=0,n="1",j("1"));var a=C(e,n);i([]),i(a),window.scroll(0,0)}}),[t.params.generation,t.params.numberFamilly]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(I,{data:f}),void 0!==c[0]&&Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"mb-0",children:c[0].famillyName}),void 0!==c[0].dateMariage&&Object(h.jsx)("h4",{className:"text-center",children:c[0].dateMariage}),void 0===c[0].dateMariage&&Object(h.jsx)("p",{})]}),Object(h.jsx)("button",{type:"button",className:"btn btn-info goBack",onClick:function(){return p.goBack()},children:"Go back"}),Object(h.jsx)("div",{className:"containerFlexible",children:c.filter((function(e){return e.generation===u})).map((function(e){return Object(h.jsx)(S,{lienImage:e.pictureName,prenomNom:e.firstName+" "+e.lastName,dateDeNaissance:e.birthDate,dateDeces:e.deathDate,link:"#",generation:e.generation},e.firstName+""+e.famillyName)}))}),Object(h.jsx)("div",{className:"containerFlexible",children:c.filter((function(e){return e.generation!==u})).map((function(e){return Object(h.jsx)(S,{lienImage:e.pictureName,prenomNom:e.firstName+" "+e.lastName,dateDeNaissance:e.birthDate,dateDeces:e.deathDate,link:"4"===e.generation||"1"===e.generation?"#":"/"+e.generation+"/"+e.numberFamilly,generation:e.generation},e.firstName+""+e.famillyName)}))})]})},A=function(){var e=Object(a.useState)([]),t=Object(F.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(F.a)(c,2),s=i[0],l=i[1],o=Object(a.useState)(""),u=Object(F.a)(o,2),j=u[0],b=u[1];return Object(a.useEffect)((function(){var e=function(){var e=[],t=new Date,n=t.getMonth()+1<10?"0"+(t.getMonth()+1).toString():(t.getMonth()+1).toString();return D.forEach((function(t){t.birthDate.split("/")[1]===n&&e.push(t)})),e.sort(M),e}(),t=new Date;l(["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","d\xe9cembre"][t.getMonth()]),b(t.getDate()),r(e)}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("h2",{className:"text-center",children:["Anniversaire de ",s]})}),Object(h.jsx)("div",{className:"containerFlexible",children:n.map((function(e){return Object(h.jsx)(S,{lienImage:e.pictureName,prenomNom:e.firstName+" "+e.lastName,dateDeNaissance:e.birthDate,dateDeces:e.deathDate,link:"4"===e.generation||"1"===e.generation?"#":"/"+e.generation+"/"+e.numberFamilly,generation:e.generation,myBirthday:e.birthDate.split("/")[0]===(j.toString()<10?"0"+j.toString():j.toString())},e.firstName+""+e.famillyName)}))})]})},L=function(){var e=Object(a.useState)([]),t=Object(F.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=k("3");r(e)}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("h1",{className:"text-uppercase text-center",children:["La 3",Object(h.jsx)("sup",{className:"text-lowercase",children:"\xe8me"})," g\xe9n\xe9ration"]}),Object(h.jsxs)("h3",{className:"mb-4",children:["Nous sommes ",n.length," personnes"]})]}),Object(h.jsx)("div",{className:"containerFlexible",children:n.map((function(e){return Object(h.jsx)(S,{lienImage:e.pictureName,prenomNom:e.firstName+" "+e.lastName,dateDeNaissance:e.birthDate,dateDeces:e.deathDate,link:"4"===e.generation||"1"===e.generation?"#":"/"+e.generation+"/"+e.numberFamilly,generation:e.generation},e.firstName+""+e.famillyName)}))})]})},R=function(){var e=Object(a.useState)([]),t=Object(F.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=k("4");r(e)}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("h1",{className:"text-uppercase text-center",children:["La 4",Object(h.jsx)("sup",{className:"text-lowercase",children:"\xe8me"})," g\xe9n\xe9ration"]}),Object(h.jsxs)("h3",{className:"mb-4",children:["Nous sommes ",n.length," personnes"]})]}),Object(h.jsx)("div",{className:"containerFlexible",children:n.map((function(e){return Object(h.jsx)(S,{lienImage:e.pictureName,prenomNom:e.firstName+" "+e.lastName,dateDeNaissance:e.birthDate,dateDeces:e.deathDate,link:"/3/"+Math.round(e.numberFamilly/10),generation:e.generation},e.firstName+""+e.famillyName)}))})]})},U=function(){var e=Object(a.useState)([]),t=Object(F.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),i=Object(F.a)(c,2),s=i[0],l=i[1],o=Object(a.useState)(0),u=Object(F.a)(o,2),j=u[0],b=u[1],m=Object(a.useState)(0),d=Object(F.a)(m,2),f=d[0],O=d[1],p=Object(a.useState)(""),g=Object(F.a)(p,2),x=g[0],v=g[1],N=Object(a.useState)(!1),y=Object(F.a)(N,2),S=y[0],D=y[1],C=Object(a.useState)(0),w=Object(F.a)(C,2),M=w[0],k=w[1],E=Object(a.useState)(""),I=Object(F.a)(E,2),P=I[0],A=I[1],L=Object(a.useState)(0),R=Object(F.a)(L,2),U=R[0],G=R[1];return Object(a.useEffect)((function(){var e=B(),t=[];1===U?(e.forEach((function(e){"4"===e.generation&&t.push(e)})),O(0),b(0),r(t),l(t[0])):(O(0),b(0),r(e),l(e[0]))}),[U]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"container",children:[!s&&Object(h.jsx)("h2",{children:"No data Selected. go back to the first page :'("}),s&&20!==f&&Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)("h1",{className:"text-center",children:"Quel est mon pr\xe9nom ?"}),0===f&&Object(h.jsx)("p",{children:"D\xe9sol\xe9, pour ceux qui n'ont pas mis de photo, c'est d'office faux sauf si vous devinez au hasard"}),Object(h.jsx)("img",{src:s.pictureName,alt:s.firstName}),S&&Object(h.jsx)("h2",{children:s.lastName}),Object(h.jsx)("div",{className:"form-group mt-4",children:Object(h.jsx)("input",{type:"text",value:x,onChange:function(e){return v(e.target.value)}})}),Object(h.jsxs)("div",{className:"containerFlexible",children:[Object(h.jsx)("div",{className:"elementFlexible",children:Object(h.jsx)("button",{onClick:function(){x.toLowerCase()===s.firstName.toLowerCase().replace(/\s+/g,"")?(b(S?j+.5:j+1),A("")):A(s.firstName),function(){var e=M;k(M+1),l(n[e+=1])}(),D(!1),f!==n.length&&O(f+1),v("")},className:"btn btn-primary mt-3",children:"V\xe9rifier"})}),Object(h.jsx)("div",{className:"elementFlexible",children:Object(h.jsx)("button",{onClick:function(){D(!0)},className:"btn btn-secondary mt-3",children:"indice"})}),Object(h.jsx)("div",{className:"elementFlexible",children:Object(h.jsx)("button",{onClick:function(e){G(0===U?1:0)},className:"btn btn-danger mt-3",children:0===U?"Difficile":"Facile"})})]}),Object(h.jsxs)("h3",{className:"mt-3",children:["Votre score : ",j," sur ",f]}),P&&Object(h.jsxs)("p",{children:["Son pr\xe9nom \xe9tait ",P]})]}),20===f&&Object(h.jsxs)("div",{children:[Object(h.jsxs)("h1",{children:["Bravo tu as obtenu ",j," sur ",f]}),Object(h.jsx)("button",{onClick:function(){!function(){var e=B(),t=[];1===U?(e.forEach((function(e){"4"===e.generation&&t.push(e)})),O(0),b(0),r(t),l(t[0])):(O(0),b(0),r(e),l(e[0]))}(),A(""),k(0)},className:"btn btn-primary mt-3",children:"Recommencer"})]})]})})},G=function(e){var t=e.data,n=e.modifyPerson;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(E.a,{id:"searchFamilly",options:t,isClearable:!0,isSearchable:!0,onChange:function(e){n(null!==e?e.value:null)}})})},J=function(){var e=Object(a.useState)(""),t=Object(F.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(F.a)(c,2),s=i[0],l=i[1],o=Object(a.useState)(""),u=Object(F.a)(o,2),j=u[0],b=u[1],f=Object(a.useState)(0),O=Object(F.a)(f,2),p=O[0],g=O[1],x=Object(a.useState)(""),v=Object(F.a)(x,2),N=v[0],y=v[1],S=Object(a.useState)(""),C=Object(F.a)(S,2),w=C[0],M=C[1],k=Object(a.useState)(""),B=Object(F.a)(k,2),E=B[0],I=B[1],P=Object(a.useState)("FamilleRolin"),A=Object(F.a)(P,2),L=A[0],R=A[1],U=Object(a.useState)([]),J=Object(F.a)(U,2),z=J[0],T=J[1],W=Object(a.useState)(""),K=Object(F.a)(W,2),V=K[0],X=K[1],_=Object(a.useState)(!0),q=Object(F.a)(_,2),H=q[0],Q=q[1],Z=Object(a.useState)(!1),Y=Object(F.a)(Z,2),$=Y[0],ee=Y[1],te=Object(a.useState)(""),ne=Object(F.a)(te,2),ae=ne[0],re=ne[1],ce=Object(a.useState)(""),ie=Object(F.a)(ce,2),se=ie[0],le=ie[1];Object(a.useEffect)((function(){T(function(){var e=[];return D.map((function(t){return e.push({value:t.generation+"/"+t.numberFamilly,label:t.firstName+" "+t.lastName})})),e}())}),[]);function oe(){re(""),r(""),l(""),y(""),g(""),b(""),M(""),Q(!0),le("")}return Object(h.jsxs)(h.Fragment,{children:["FamilleRolin"!==L&&Object(h.jsx)("div",{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Merci de ne pas toucher \xe0 \xe7a. \xc9vite de tout casser"}),Object(h.jsx)("input",{type:"password",placeholder:"le mot de passe",onChange:function(e){return R(e.target.value)}})]})}),"FamilleRolin"===L&&Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Pour modifier une personne, s\xe9lectionne la dans la liste ci-dessous"}),Object(h.jsx)(G,{data:z,modifyPerson:function(e){if(null!==e){var t=e.split("/")[1],n=function(e){var t=[];return D.filter((function(t){return t.numberFamilly===e})).map((function(e){return t.push(e)})),t[0]}(t);d.FindIdPerson(t).then((function(e){var t=e.docs.map((function(e){return e.id}));re(t[0]),r(n.lastName),l(n.firstName),y(n.generation),g(n.numberFamilly),b(n.birthDate),Q(!1),M(n.famillyName),I(n.pictureName),le(n.dateMariage)}))}else oe()}}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Nom de famille (souvent nom mari - \xe9pouse)"}),Object(h.jsx)("input",{className:"form-control",value:w,placeholder:"Nom de famille...",onChange:function(e){return M(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Date de mariage"}),Object(h.jsx)("input",{className:"form-control",value:se,placeholder:"Date de mariage",onChange:function(e){return le(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Nom"}),Object(h.jsx)("input",{className:"form-control",value:n,placeholder:"Nom...",onChange:function(e){return r(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Pr\xe9nom"}),Object(h.jsx)("input",{className:"form-control",value:s,placeholder:"Pr\xe9nom...",onChange:function(e){return l(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Date de naissance"}),Object(h.jsx)("input",{className:"form-control",value:j,placeholder:"date de naissance...",onChange:function(e){return b(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Num\xe9ro de famille (important)"}),Object(h.jsx)("input",{className:"form-control",value:p,type:"number",placeholder:"num\xe9ro de famille...",onChange:function(e){return g(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"G\xe9n\xe9ration (important)"}),Object(h.jsx)("input",{className:"form-control",value:N,placeholder:"g\xe9n\xe9ration...",onChange:function(e){return y(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Image profil"}),Object(h.jsx)("input",{className:"form-control",type:"file",onChange:function(e){I(e.target.files[0]),ee(!0)}})]}),H&&Object(h.jsx)("button",{className:"btn btn-primary m-4",onClick:function(){""===E?d.CreateUserFireBase(n,s,j,p,N,"",w,se).then((function(){X(s+" "+n+" a bien \xe9t\xe9 enregistr\xe9"),oe()})).catch((function(e){X("Error writing document: "+e)})):m.ref("images/".concat(E.name)).put(E).on("state_changed",(function(e){}),(function(e){console.log(e)}),(function(){m.ref("images").child(E.name).getDownloadURL().then((function(e){d.CreateUserFireBase(n,s,j,p,N,e,w,se).then((function(){X(s+" "+n+" a bien \xe9t\xe9 enregistr\xe9"),oe()})).catch((function(e){X("Error writing document: "+e)}))}))}))},children:"cr\xe9er"}),!H&&Object(h.jsx)("button",{className:"btn btn-secondary m-4",onClick:function(){$?m.ref("images/".concat(E.name)).put(E).on("state_changed",(function(e){}),(function(e){console.log(e)}),(function(){m.ref("images").child(E.name).getDownloadURL().then((function(e){d.ModifyUserFireBase(ae,n,s,j,p,N,e,w,se).then((function(){X(s+" "+n+" a bien \xe9t\xe9 modifi\xe9"),oe()})).catch((function(e){X("Error writing document: "+e)}))}))})):d.ModifyUserFireBase(ae,n,s,j,p,N,E,w,se).then((function(){X(s+" "+n+" a bien \xe9t\xe9 modifi\xe9"),oe()})).catch((function(e){X("Error writing document: "+e)}))},children:"Modifier"}),Object(h.jsx)("p",{children:V})]})]})};var z=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(y,{children:Object(h.jsxs)(s.a,{children:[Object(h.jsx)(f,{}),Object(h.jsx)("main",{children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/creer",component:J}),Object(h.jsx)(l.a,{path:"/:generation/:numberFamilly",component:P}),Object(h.jsx)(l.a,{path:"/generation4",component:R}),Object(h.jsx)(l.a,{path:"/generation3",component:L}),Object(h.jsx)(l.a,{path:"/anniversaire",component:A}),Object(h.jsx)(l.a,{path:"/jeu",component:U}),Object(h.jsx)(l.a,{path:"/",component:P})]})})]})})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(z,{})}),document.getElementById("root")),T()}},[[68,1,2]]]);
//# sourceMappingURL=main.a0bbd559.chunk.js.map