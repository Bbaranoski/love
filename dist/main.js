(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"body{\n    margin: 0px;\n}\n\n#main{\n    height: 100vh;\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nh1, p{\n    color: white;\n}\n\n#home{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\ninput{\n    padding: 5px;\n    border-radius: 10px;\n    border: solid 0px black;\n}\n\nbutton{\n    padding: 5px;\n    border-radius: 10px;\n}\n\n#partOne, #partTwo, #partThree{\n    height: 70vh;\n    width: 70vw;\n    transition: background-color 3s ease-out 0s;\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n}\n\n#partOne{\n    background-color: #f472b6;\n}\n\n#partTwo, #partThree{\n    background-color: #ec4899;\n}\n\n.continuar{\n    border: 0px solid;\n    color: #ec4899;\n    background-color: #f472b6;\n    font-weight: bold;\n    font-size: 20px;\n    padding: 10px;\n}\n\n.continuar:hover{\n    color: #f472b6;\n    background-color: #db2777;\n}\n\n#partOne > div, #partTwo > div, #partThree > div{\n    height: 50vh;\n}\n\n#partOne > div > p, #partTwo > div > p, #partThree > div > p{\n    color: #ec4899;\n    transition: color 2s ease-out 0s;\n    font-size: 20px;\n}\n\n.content{\n    display: flex;\n    align-items: center;\n    padding: 50px;\n}\n\n.content > p{\n    font-size: 50px;\n}",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=o.base?c[0]+o.base:c[0],u=a[d]||0,p="".concat(d," ").concat(u);a[d]=u+1;var l=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)n[l].references++,n[l].updater(m);else{var f=r(m,o);o.byIndex=s,n.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=o(e,r),d=0;d<a.length;d++){var u=t(a[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),s=t(565),c=t.n(s),d=t(216),u=t.n(d),p=t(589),l=t.n(p),m=t(426),f={};f.styleTagTransform=l(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,document.body;const v=document.getElementById("main"),h=document.createElement("div"),b=document.createElement("div"),g=document.createElement("div");h.setAttribute("id","partOne"),b.setAttribute("id","partTwo"),g.setAttribute("id","partThree");const y=document.createElement("div"),x=document.createElement("div"),C=document.createElement("div");h.appendChild(y),b.appendChild(x),g.appendChild(C),y.classList.add("content"),x.classList.add("content"),C.classList.add("content");const q=document.createElement("p"),E=document.createElement("p"),T=document.createElement("p");x.appendChild(E),C.appendChild(T),q.textContent="Ola Ana Clara, tudo bem? Eu espero que sim, eu criei esse site pensando em me confessar para você na tentativa de voltar contigo, mas percebo que ainda é muito cedo para isso e tenho muito a mudar, por isso vou desabafar contigo sobre tudo que estou pensando, tudo que quero fazer para melhorar, e quero saber sua opinião de tudo. Primeiramente eu quero te falar do meu maior arrependimento, eu de verdade te peço desculpas por ter te ignorado, isso foi um erro meu e prometo jamais fazer isso de novo, como seu amigo agora eu prometo estar sempre contigo para te ajudar no que precisar, para conversar, para jogar, para trocar umas ideias e para se divertir.",E.textContent="Nessa seção eu quero dizer do que eu penso em fazer da vida, quero deixar o pensamento (Dê o seu melhor sempre) marcado na minha vida, por isso eu estou me esforçando nos estudo, quero começar a trabalhar, conversar mais com as pessoas e me tornar mais homem, no começo bem provável não será fácil, mas quero me tornar uma pessoa melhor, e quem sabe um dia eu compre a lua, imagina que top é ter a lua.",T.textContent="E por fim, quero te dizer, Ana eu ainda tenho sentimentos por você, você é uma pessoa maravilhosa, esforçada, gentil, dedicada, simpática, e bom muitos outros adjetivos que eu poderia falar mas ai o site teria um bilhão de paginas, eu quero te pedir duas coisas Ana, coisas extremamente egoístas, eu quero pedir seu perdão do meu arrependimento, e a outra coisa, não precisa ser agora, mas você poderia pensar em talvez nos viver um futuro juntos, logico eu sei que agora seria impossível. Obrigado pela consideração, se precisar de qualquer ajuda saiba que eu estarei aqui por você. E por fim, algo que eu nunca disse mas, parabéns por tudo que você conquistou, parabéns por ter terminado a faculdade, parabéns por ter conseguido um emprego da sua área e parabéns pelo seus esforços diários, seja nos estudos, na ajuda na casa e nas consultas que você esta fazendo sozinha, realmente impressionante você ter cuidado daquele agapornis.";const k=document.createElement("button"),w=document.createElement("button");k.classList.add("continuar"),w.classList.add("continuar"),k.textContent="Continuar",w.textContent="Continuar",h.appendChild(k),b.appendChild(w),k.addEventListener("click",(()=>{q.style.color="#ec4899",setTimeout((()=>{h.remove(),v.appendChild(b),v.style.backgroundColor="#f9a8d4",setTimeout((()=>{E.style.color="black",E.style.fontSize="25px"}),1e3)}),2e3)})),w.addEventListener("click",(()=>{E.style.color="#ec4899",setTimeout((()=>{b.remove(),v.appendChild(g),v.style.backgroundColor="#b91c1c",setTimeout((()=>{T.style.color="black",T.style.fontSize="25px"}),1e3)}),2e3)}));const j=document.querySelector("form"),z=document.getElementById("name"),S=document.getElementById("main");j.addEventListener("submit",(e=>{e.preventDefault();const n=z.value.toLowerCase();if(S.style.transition="background-color 5s ease-out 0s","ana clara tondini siebert"==n)S.style.backgroundColor="#f472b6",function(){const e=document.getElementById("home"),n=document.querySelector("form");e.remove(),n.remove(),setTimeout((()=>{v.appendChild(h),setTimeout((()=>{h.style.backgroundColor="#ec4899",setTimeout((()=>{y.appendChild(q),setTimeout((()=>{q.style.color="black",q.style.fontSize="25px"}),1e3)}),3e3)}),2e3)}),5e3)}();else{const e=Math.floor(16777215*Math.random()).toString(16);S.style.backgroundColor="#"+e,function(e){const n=document.getElementById("home"),t=document.querySelector("form");n.remove(),t.remove(),function(e){const n=document.createElement("div"),t=document.createElement("h1");t.textContent="Good day "+e,n.appendChild(t),v.appendChild(n)}(e)}(z.value)}z.value=""}))})()})();