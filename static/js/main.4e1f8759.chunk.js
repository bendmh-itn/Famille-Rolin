(this.webpackJsonpfamille=this.webpackJsonpfamille||[]).push([[0],{33:function(e,t,n){},42:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(21),i=n.n(c),s=(n(42),n(14)),l=n(7),o=(n(33),n(20)),u=(n(43),n(69),n(70),new o.a.auth.GoogleAuthProvider),j=(o.a.apps.length?o.a.app():o.a.initializeApp({apiKey:"AIzaSyABJKs3lp_cLE6k9WX1ERcn4XlaI2BZ9wM",authDomain:"rolin-file.firebaseapp.com",projectId:"rolin-file",storageBucket:"rolin-file.appspot.com",messagingSenderId:"922531053521",appId:"1:922531053521:web:6cf7ea757988698a8aeaf0"})).firestore();var m=o.a.auth(),b=(o.a.firestore(),o.a.storage()),d={findAll:function(){return j.collection("famille").orderBy("numberFamilly","asc").get()},signInWithGoogle:function(){m.signInWithPopup(u)},CreateUserFireBase:function(e,t,n,a,r,c,i){var s=function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t="",n=0;n<20;n++)t+=e[Math.floor(Math.random()*e.length)];return t}();return j.collection("famille").doc(s).set({firstName:t,lastName:e,generation:r,birthDate:n,numberFamilly:a,pictureName:c,famillyName:i})},ModifyUserFireBase:function(e,t,n,a,r,c,i,s){return j.collection("famille").doc(e).set({firstName:n,lastName:t,generation:c,birthDate:a,numberFamilly:r,pictureName:i,famillyName:s})},FindIdPerson:function(e){return j.collection("famille").where("numberFamilly","==",e).get()}},h=n(2),f=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("nav",{id:"MyModification",className:"navbar navbar-expand-lg navbar-dark",children:[Object(h.jsx)(s.b,{className:"navbar-brand",to:"/",children:"Famille Rolin"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse justify-content-between",id:"navbarSupportedContent",children:Object(h.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(s.b,{className:"navbar-brand",to:"/anniversaire",children:"Annif"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(s.b,{className:"navbar-brand",to:"/generation3",children:"G\xe9n\xe9ration 3"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(s.b,{className:"navbar-brand",to:"/generation4",children:"G\xe9n\xe9ration 4"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(s.b,{className:"navbar-brand",to:"/jeu",children:"Jeu"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(s.b,{className:"navbar-brand",to:"/creer",children:"cr\xe9er"})})]})})]})})},O=n(15),p=n(16),g=n(17),x=n(37),v=Object(a.createContext)({user:null}),N=function(e){Object(g.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:null},e.componentDidMount=function(){m.onAuthStateChanged((function(t){e.setState({user:t})}))},e}return Object(p.a)(n,[{key:"render",value:function(){return Object(h.jsx)(v.Provider,{value:this.state.user,children:this.props.children})}}]),n}(a.Component),y=N,F=n(6),D=function(e){var t=e.lienImage,n=e.prenomNom,a=e.dateDeNaissance,r=e.link,c=void 0===r?"#":r,i=e.dateDeces,s=(e.generation,e.myBirthday),o=void 0!==s&&s,u=Object(l.f)();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"elementFlexible",children:["#"!==c&&Object(h.jsx)("button",{className:"myButton",onClick:function(){return u.push(c)},children:Object(h.jsx)("img",{src:t,alt:n})}),"#"===c&&Object(h.jsx)("img",{className:"picture",src:t,alt:n}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h5",{children:n}),Object(h.jsxs)("h6",{children:[a,i&&Object(h.jsxs)("span",{children:[" - ",i]})]})]}),o&&Object(h.jsx)("h2",{className:"clignote",children:"Happy birthday"})]})})},S=[],C=function(e,t){var n=[],a=e.toString().slice(0,t-1);return S.filter((function(e){return e.numberFamilly.toString().slice(0,t-1)===a&&e.numberFamilly<10*a+10})).map((function(e){return n.push(e)})),n},w=function(){var e=[];return S.filter((function(e){return"4"!==e.generation})).map((function(t){return e.push({value:t.generation+"/"+t.numberFamilly,label:t.firstName+" "+t.lastName})})),e};function k(e,t){var n=e.birthDate.split("/")[2],a=t.birthDate.split("/")[2],r=e.birthDate.split("/")[1],c=t.birthDate.split("/")[1],i=e.birthDate.split("/")[0],s=t.birthDate.split("/")[0];return n!==a?n>a?1:-1:r!==c?r>c?1:-1:i!==s?i>s?1:-1:0}function E(e,t){return e.birthDate!==t.birthDate?e.birthDate>t.birthDate?1:-1:0}var I=function(e){var t=[];return S.forEach((function(n){n.generation===e&&t.push(n)})),t.sort(k),t},M=function(){return function(e){var t,n,a;for(t=e.length-1;t>0;t--)n=Math.floor(Math.random()*(t+1)),a=e[t],e[t]=e[n],e[n]=a;return e}(S)};var B=n(29),P=function(e){var t=e.data,n=Object(l.f)();return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(B.a,{id:"searchFamilly",options:t,isClearable:!0,isSearchable:!0,onChange:function(e){null!==e&&n.push("/"+e.value)}})})},A=function(e){var t=e.match,n=Object(a.useState)([]),r=Object(F.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)(""),l=Object(F.a)(s,2),o=l[0],u=l[1],j=Object(a.useState)([]),m=Object(F.a)(j,2),b=m[0],f=m[1];return Object(a.useEffect)((function(){if(0===b.length)d.findAll().then((function(e){var n=t.params.numberFamilly,a=t.params.generation;u(t.params.generation),void 0!==a&&void 0!==n||(n=0,a="1",u("1")),function(e){S=[],e.forEach((function(e){S.push(e)}))}(e.docs.map((function(e){return e.data()})));var r=C(n,a);i([]),i(r),f(w()),window.scroll(0,0)}));else{var e=t.params.numberFamilly,n=t.params.generation;u(t.params.generation),void 0!==n&&void 0!==e||(e=0,n="1",u("1"));var a=C(e,n);i([]),i(a),window.scroll(0,0)}}),[t.params.generation,t.params.numberFamilly]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(P,{data:b}),void 0!==c[0]&&Object(h.jsx)("h1",{children:c[0].famillyName}),Object(h.jsx)("div",{className:"containerFlexible",children:c.filter((function(e){return e.generation===o})).map((function(e){return Object(h.jsx)(D,{lienImage:e.pictureName,prenomNom:e.firstName+" "+e.lastName,dateDeNaissance:e.birthDate,dateDeces:e.deathDate,link:"#",generation:e.generation},e.firstName+""+e.famillyName)}))}),Object(h.jsx)("div",{className:"containerFlexible",children:c.filter((function(e){return e.generation!==o})).map((function(e){return Object(h.jsx)(D,{lienImage:e.pictureName,prenomNom:e.firstName+" "+e.lastName,dateDeNaissance:e.birthDate,dateDeces:e.deathDate,link:"4"===e.generation||"1"===e.generation?"#":"/"+e.generation+"/"+e.numberFamilly,generation:e.generation},e.firstName+""+e.famillyName)}))})]})},L=function(){var e=Object(a.useState)([]),t=Object(F.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(F.a)(c,2),s=i[0],l=i[1],o=Object(a.useState)(""),u=Object(F.a)(o,2),j=u[0],m=u[1];return Object(a.useEffect)((function(){var e=function(){var e=[],t=new Date,n=t.getMonth()+1<10?"0"+(t.getMonth()+1).toString():(t.getMonth()+1).toString();return S.forEach((function(t){t.birthDate.split("/")[1]===n&&e.push(t)})),e.sort(E),e}(),t=new Date;l(["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","d\xe9cembre"][t.getMonth()]),m(t.getDate()),r(e)}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("h2",{className:"text-center",children:["Anniversaire de ",s]})}),Object(h.jsx)("div",{className:"containerFlexible",children:n.map((function(e){return Object(h.jsx)(D,{lienImage:e.pictureName,prenomNom:e.firstName+" "+e.lastName,dateDeNaissance:e.birthDate,dateDeces:e.deathDate,link:"4"===e.generation||"1"===e.generation?"#":"/"+e.generation+"/"+e.numberFamilly,generation:e.generation,myBirthday:e.birthDate.split("/")[0]===(j.toString()<10?"0"+j.toString():j.toString())},e.firstName+""+e.famillyName)}))})]})},U=function(){var e=Object(a.useState)([]),t=Object(F.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=I("3");r(e)}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("h1",{className:"text-uppercase text-center",children:["La 3",Object(h.jsx)("sup",{className:"text-lowercase",children:"\xe8me"})," g\xe9n\xe9ration"]}),Object(h.jsxs)("h3",{className:"mb-4",children:["Nous sommes ",n.length," personnes"]})]}),Object(h.jsx)("div",{className:"containerFlexible",children:n.map((function(e){return Object(h.jsx)(D,{lienImage:e.pictureName,prenomNom:e.firstName+" "+e.lastName,dateDeNaissance:e.birthDate,dateDeces:e.deathDate,link:"4"===e.generation||"1"===e.generation?"#":"/"+e.generation+"/"+e.numberFamilly,generation:e.generation},e.firstName+""+e.famillyName)}))})]})},R=function(){var e=Object(a.useState)([]),t=Object(F.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=I("4");r(e)}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("h1",{className:"text-uppercase text-center",children:["La 4",Object(h.jsx)("sup",{className:"text-lowercase",children:"\xe8me"})," g\xe9n\xe9ration"]}),Object(h.jsxs)("h3",{className:"mb-4",children:["Nous sommes ",n.length," personnes"]})]}),Object(h.jsx)("div",{className:"containerFlexible",children:n.map((function(e){return Object(h.jsx)(D,{lienImage:e.pictureName,prenomNom:e.firstName+" "+e.lastName,dateDeNaissance:e.birthDate,dateDeces:e.deathDate,link:"/3/"+Math.round(e.numberFamilly/10),generation:e.generation},e.firstName+""+e.famillyName)}))})]})},G=function(){var e=Object(a.useState)([]),t=Object(F.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),i=Object(F.a)(c,2),s=i[0],l=i[1],o=Object(a.useState)(0),u=Object(F.a)(o,2),j=u[0],m=u[1],b=Object(a.useState)(0),d=Object(F.a)(b,2),f=d[0],O=d[1],p=Object(a.useState)(""),g=Object(F.a)(p,2),x=g[0],v=g[1],N=Object(a.useState)(!1),y=Object(F.a)(N,2),D=y[0],S=y[1],C=Object(a.useState)(0),w=Object(F.a)(C,2),k=w[0],E=w[1],I=Object(a.useState)(""),B=Object(F.a)(I,2),P=B[0],A=B[1],L=Object(a.useState)(0),U=Object(F.a)(L,2),R=U[0],G=U[1];return Object(a.useEffect)((function(){var e=M(),t=[];1===R?(e.forEach((function(e){"4"===e.generation&&t.push(e)})),O(0),m(0),r(t),l(t[0])):(O(0),m(0),r(e),l(e[0]))}),[R]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"container",children:[!s&&Object(h.jsx)("h2",{children:"No data Selected. go back to the first page :'("}),s&&20!==f&&Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)("h1",{className:"text-center",children:"Quel est mon pr\xe9nom ?"}),0===f&&Object(h.jsx)("p",{children:"D\xe9sol\xe9, pour ceux qui n'ont pas mis de photo, c'est d'office faux sauf si vous devinez au hasard"}),Object(h.jsx)("img",{src:s.pictureName,alt:s.firstName}),D&&Object(h.jsx)("h2",{children:s.lastName}),Object(h.jsx)("div",{className:"form-group mt-4",children:Object(h.jsx)("input",{type:"text",value:x,onChange:function(e){return v(e.target.value)}})}),Object(h.jsxs)("div",{className:"containerFlexible",children:[Object(h.jsx)("div",{className:"elementFlexible",children:Object(h.jsx)("button",{onClick:function(){x.toLowerCase()===s.firstName.toLowerCase().replace(/\s+/g,"")?(m(D?j+.5:j+1),A("")):A(s.firstName),function(){var e=k;E(k+1),l(n[e+=1])}(),S(!1),f!==n.length&&O(f+1),v("")},className:"btn btn-primary mt-3",children:"V\xe9rifier"})}),Object(h.jsx)("div",{className:"elementFlexible",children:Object(h.jsx)("button",{onClick:function(){S(!0)},className:"btn btn-secondary mt-3",children:"indice"})}),Object(h.jsx)("div",{className:"elementFlexible",children:Object(h.jsx)("button",{onClick:function(e){G(0===R?1:0)},className:"btn btn-danger mt-3",children:0===R?"Difficile":"Facile"})})]}),Object(h.jsxs)("h3",{className:"mt-3",children:["Votre score : ",j," sur ",f]}),P&&Object(h.jsxs)("p",{children:["Son pr\xe9nom \xe9tait ",P]})]}),20===f&&Object(h.jsxs)("div",{children:[Object(h.jsxs)("h1",{children:["Bravo tu as obtenu ",j," sur ",f]}),Object(h.jsx)("button",{onClick:function(){!function(){var e=M(),t=[];1===R?(e.forEach((function(e){"4"===e.generation&&t.push(e)})),O(0),m(0),r(t),l(t[0])):(O(0),m(0),r(e),l(e[0]))}(),A(""),E(0)},className:"btn btn-primary mt-3",children:"Recommencer"})]})]})})},J=function(e){var t=e.data,n=e.modifyPerson;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(B.a,{id:"searchFamilly",options:t,isClearable:!0,isSearchable:!0,onChange:function(e){n(null!==e?e.value:null)}})})},z=function(){var e=Object(a.useState)(""),t=Object(F.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(F.a)(c,2),s=i[0],l=i[1],o=Object(a.useState)(""),u=Object(F.a)(o,2),j=u[0],m=u[1],f=Object(a.useState)(0),O=Object(F.a)(f,2),p=O[0],g=O[1],x=Object(a.useState)(""),v=Object(F.a)(x,2),N=v[0],y=v[1],D=Object(a.useState)(""),C=Object(F.a)(D,2),k=C[0],E=C[1],I=Object(a.useState)(""),M=Object(F.a)(I,2),B=M[0],P=M[1],A=Object(a.useState)(""),L=Object(F.a)(A,2),U=L[0],R=L[1],G=Object(a.useState)([]),z=Object(F.a)(G,2),T=z[0],W=z[1],K=Object(a.useState)(""),V=Object(F.a)(K,2),X=V[0],_=V[1],q=Object(a.useState)(!0),H=Object(F.a)(q,2),Q=H[0],Z=H[1],Y=Object(a.useState)(!1),$=Object(F.a)(Y,2),ee=$[0],te=$[1],ne=Object(a.useState)(""),ae=Object(F.a)(ne,2),re=ae[0],ce=ae[1];Object(a.useEffect)((function(){W(w())}),[]);function ie(){ce(""),r(""),l(""),y(""),g(""),m(""),E(""),Z(!0),E("")}return Object(h.jsxs)(h.Fragment,{children:["FamilleRolin"!==U&&Object(h.jsx)("div",{children:Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"password",placeholder:"le mot de passe",onChange:function(e){return R(e.target.value)}})})}),"FamilleRolin"===U&&Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Pour modifier une personne, s\xe9lectionne la dans la liste ci-dessous"}),Object(h.jsx)(J,{data:T,modifyPerson:function(e){if(null!==e){var t=e.split("/")[1],n=function(e){var t=[];return S.filter((function(t){return t.numberFamilly===e})).map((function(e){return t.push(e)})),t[0]}(t);d.FindIdPerson(t).then((function(e){var t=e.docs.map((function(e){return e.id}));ce(t[0]),r(n.lastName),l(n.firstName),y(n.generation),g(n.numberFamilly),m(n.birthDate),Z(!1),E(n.famillyName),P(n.pictureName)}))}else ie()}}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Nom de famille (souvent nom mari - \xe9pouse)"}),Object(h.jsx)("input",{className:"form-control",value:k,placeholder:"Nom de famille...",onChange:function(e){return E(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Nom"}),Object(h.jsx)("input",{className:"form-control",value:n,placeholder:"Nom...",onChange:function(e){return r(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Pr\xe9nom"}),Object(h.jsx)("input",{className:"form-control",value:s,placeholder:"Pr\xe9nom...",onChange:function(e){return l(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Date de naissance"}),Object(h.jsx)("input",{className:"form-control",value:j,placeholder:"date de naissance...",onChange:function(e){return m(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Num\xe9ro de famille (important)"}),Object(h.jsx)("input",{className:"form-control",value:p,type:"number",placeholder:"num\xe9ro de famille...",onChange:function(e){return g(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"G\xe9n\xe9ration (important)"}),Object(h.jsx)("input",{className:"form-control",value:N,placeholder:"g\xe9n\xe9ration...",onChange:function(e){return y(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Image profil"}),Object(h.jsx)("input",{className:"form-control",type:"file",onChange:function(e){P(e.target.files[0]),te(!0)}})]}),Q&&Object(h.jsx)("button",{className:"btn btn-primary m-4",onClick:function(){""===B?d.CreateUserFireBase(n,s,j,p,N,"",k).then((function(){_("Document successfully written!"),ie()})).catch((function(e){_("Error writing document: "+e)})):b.ref("images/".concat(B.name)).put(B).on("state_changed",(function(e){}),(function(e){console.log(e)}),(function(){b.ref("images").child(B.name).getDownloadURL().then((function(e){d.CreateUserFireBase(n,s,j,p,N,e,k).then((function(){_("Document successfully written!"),ie()})).catch((function(e){_("Error writing document: "+e)}))}))}))},children:"cr\xe9er"}),!Q&&Object(h.jsx)("button",{className:"btn btn-secondary m-4",onClick:function(){ee?b.ref("images/".concat(B.name)).put(B).on("state_changed",(function(e){}),(function(e){console.log(e)}),(function(){b.ref("images").child(B.name).getDownloadURL().then((function(e){d.ModifyUserFireBase(re,n,s,j,p,N,e,k).then((function(){_("Document successfully written!"),ie()})).catch((function(e){_("Error writing document: "+e)}))}))})):d.ModifyUserFireBase(re,n,s,j,p,N,B,k).then((function(){_("Document successfully written!"),ie()})).catch((function(e){_("Error writing document: "+e)}))},children:"Modifier"}),Object(h.jsx)("p",{children:X})]})]})};var T=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(y,{children:Object(h.jsxs)(s.a,{children:[Object(h.jsx)(f,{}),Object(h.jsx)("main",{children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/creer",component:z}),Object(h.jsx)(l.a,{path:"/:generation/:numberFamilly",component:A}),Object(h.jsx)(l.a,{path:"/generation4",component:R}),Object(h.jsx)(l.a,{path:"/generation3",component:U}),Object(h.jsx)(l.a,{path:"/anniversaire",component:L}),Object(h.jsx)(l.a,{path:"/jeu",component:G}),Object(h.jsx)(l.a,{path:"/",component:A})]})})]})})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(T,{})}),document.getElementById("root")),W()}},[[68,1,2]]]);
//# sourceMappingURL=main.4e1f8759.chunk.js.map