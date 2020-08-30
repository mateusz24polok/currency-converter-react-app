(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],{14:function(n,e,t){n.exports=t.p+"static/media/waving-dollar.8a7dee2d.gif"},15:function(n,e,t){n.exports=t(23)},23:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(9),c=t.n(o),i=t(2),u=t(1);function l(){var n=Object(i.a)(['\n    html {\n        box-sizing: border-box;\n        font-family: "Roboto", sans-serif;\n        height: 100%;\n    }\n\n    *, ::after, ::before {\n        box-sizing: inherit;\n    }\n\n    body{\n        position: relative;\n        min-height: 100%;\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n']);return l=function(){return n},n}var s=Object(u.b)(l());function f(){var n=Object(i.a)(["\n    color: ",';\n    text-align: center;\n    margin: 50px 0;\n    font-size: 32px;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    font-family: "Itim", cursive;\n\n    @media (max-width: 500px) {\n          margin: 40px auto;\n          font-size: 24px;\n          letter-spacing: 1px;\n  }\n']);return f=function(){return n},n}var m=u.d.h1(f(),(function(n){return n.theme.color.apple})),d=function(){return a.a.createElement(m,null,"Currency Converter")};function p(){var n=Object(i.a)(["\n    max-width: 600px;\n    background: ",";\n    padding: 5px 40px;\n    box-shadow: 3px -4px 5px 2px ",";\n    margin: 20px;\n    border-radius: 20px;\n\n    @media (max-width: 500px) {\n        padding: 0 10px;\n        margin: 10px;\n    }\n"]);return p=function(){return n},n}var h=u.d.div(p(),(function(n){return n.theme.color.eden}),(function(n){return n.theme.color.mineShaft})),g=function(n){var e=n.children;return a.a.createElement(h,null,e)},x=t(6),b=t.n(x),v=t(13),y=t(3);function E(){var n=Object(i.a)(["\n    font-size: 24px;\n    box-shadow: 3px -4px 5px 2px ",";\n    padding: 10px;\n    background-color: ",";\n    flex: 0 3 150px;\n    margin: 10px;\n    border-radius: 10px;\n\n    &:focus{\n        background-color: ",";\n    }\n\n    @media (max-width: 500px) {\n        font-size: 20px;\n        padding: 5px;\n    }\n"]);return E=function(){return n},n}var j=u.d.select(E(),(function(n){return n.theme.color.mineShaft}),(function(n){return n.theme.color.silver}),(function(n){return n.theme.color.white})),w=function(n){var e=n.selectName,t=n.currencyChange,r=n.currencyArray,o=n.defaultSelection;return a.a.createElement(j,{name:e,onChange:t},r.map((function(n){return n===o?a.a.createElement("option",{selected:!0,key:n,value:n},n):a.a.createElement("option",{key:n,value:n},n)})))};function O(){var n=Object(i.a)(["\n    width: 100%;\n    font-size: 24px;\n    padding: 10px;\n    box-shadow: 3px -4px 5px 2px ",";\n    margin: 10px;\n    background-color: ",";\n    border: none;\n    flex: 0 1 200px;\n    border-radius: 10px;\n\n    &:focus{\n        background-color: ",";\n    }\n\n    @media (max-width: 500px) {\n        font-size: 20px;\n        padding: 5px;\n    }\n"]);return O=function(){return n},n}var k=u.d.input(O(),(function(n){return n.theme.color.mineShaft}),(function(n){return n.theme.color.silver}),(function(n){return n.theme.color.white})),C=function(n){var e=n.currencyValue,t=n.currencyValueChangeHandler,r=n.disabled;return a.a.createElement(k,{className:"calculatorForm__input",placeholder:"enter value",value:e,type:"number",step:"0.01",min:"0",onChange:t,disabled:r})};function z(){var n=Object(i.a)(["\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    margin: 20px auto;\n"]);return z=function(){return n},n}var S=u.d.section(z()),F=function(n){var e=n.currencyValue,t=n.currencyValueChangeHandler,r=n.currencyChange,o=n.currencyArray,c=n.defaultSelection,i=n.inputDisabled;return a.a.createElement(S,null,a.a.createElement(w,{selectName:"currency1",currencyChange:r,currencyArray:o,defaultSelection:c}),a.a.createElement(C,{currencyValue:e,currencyValueChangeHandler:t,disabled:i}))};function Y(){var n=Object(i.a)(["\n    display: block;\n    margin: 0 auto;\n    border: none;\n    font-size: 24px;\n    padding: 10px;\n    box-shadow: 3px -4px 5px 2px ",";\n    cursor: pointer;\n    background-color: ",";\n    transition: background-color 0.15s linear;\n    border-radius: 10px;\n\n    &:hover{\n        background-color: ",";\n    }\n\n    @media (max-width: 500px) {\n        font-size: 20px;\n        padding: 5px;\n    }\n"]);return Y=function(){return n},n}var D=u.d.button(Y(),(function(n){return n.theme.color.mineShaft}),(function(n){return n.theme.color.silver}),(function(n){return n.theme.color.white})),L=function(n){var e=n.buttonContent,t=n.onClick;return a.a.createElement(D,{type:"button",onClick:t},e)};function A(){var n=Object(i.a)(["\n        opacity: 1;\n        color: ",";\n    "]);return A=function(){return n},n}function V(){var n=Object(i.a)(["\n        opacity: 1;\n        color: ",";\n    "]);return V=function(){return n},n}function R(){var n=Object(i.a)(["\n    height: 80px;\n    width: 400px;\n    font-size: 24px;\n    margin: 30px auto;\n    text-align: center;\n    opacity: 0;\n    color: ",";\n    transition: opacity 0.2s linear;\n    line-height: 1;\n\n    @media (max-width: 500px) {\n        height: 80px;\n        width: 200px;\n        font-size: 20px;\n        margin: 20px auto;\n}\n\n    ","\n\n    ","\n"]);return R=function(){return n},n}var B=u.d.p(R(),(function(n){return n.theme.color.transparent}),(function(n){return n.warning&&Object(u.c)(V(),(function(n){return n.theme.color.red}))}),(function(n){return n.info&&Object(u.c)(A(),(function(n){return n.theme.color.apple}))})),N=function(n){var e=n.content,t=n.info,r=n.warning;return a.a.createElement(B,{info:t,warning:r},e)},H=function(n){var e=n.currenciesArray,t=n.currenciesRates,o=Object(r.useState)(0),c=Object(y.a)(o,2),i=c[0],u=c[1],l=Object(r.useState)(0),s=Object(y.a)(l,2),f=s[0],m=s[1],d=Object(r.useState)("PLN"),p=Object(y.a)(d,2),h=p[0],g=p[1],x=Object(r.useState)("EUR"),E=Object(y.a)(x,2),j=E[0],w=E[1],O=Object(r.useState)(""),k=Object(y.a)(O,2),C=k[0],z=k[1],S=Object(r.useState)(""),Y=Object(y.a)(S,2),D=Y[0],A=Y[1],V=function(n,e,r){var a=t.rates[e],o=t.rates[r];return n?a/o:o/a},R=function(){var n=Object(v.a)(b.a.mark((function n(){var e,r,a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=t.rates[h],r=t.rates[j],a=r/e,z(t.date),A(a.toFixed(3));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return a.a.createElement("form",{className:"calculatorForm"},a.a.createElement(F,{currencyValueChangeHandler:function(n){u(n.target.value),m((n.target.value*V(!1,h,j)).toFixed(2)),z("")},currencyValue:i,currencyChange:function(n){g(n.target.value),m((i*V(!1,n.target.value,j)).toFixed(2)),z("")},currencyArray:e,defaultSelection:"PLN"}),a.a.createElement(F,{currencyValueChangeHandler:function(n){m(n.target.value),u((n.target.value*V(!0,h,j)).toFixed(2)),z("")},currencyValue:f,currencyChange:function(n){w(n.target.value),m((i*V(!1,h,n.target.value)).toFixed(2)),z("")},currencyArray:e,defaultSelection:"EUR"}),a.a.createElement(L,{buttonContent:"Check exchange rate and date",onClick:R}),a.a.createElement(N,{content:"Your calculation is current for ".concat(C," \n                    and your exchange rate is ").concat(D),info:!!C}))};function P(){var n=Object(i.a)(["\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n    background-color: ",";\n"]);return P=function(){return n},n}function U(){var n=Object(i.a)(['\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -2;\n    background-image: url("https://storage.needpix.com/rsynced_images/currency-3321101_1280.jpg");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center center;\n']);return U=function(){return n},n}var I=u.d.div(U()),_=u.d.div(P(),(function(n){return n.theme.color.codGray})),G=function(){return a.a.createElement(I,null,a.a.createElement(_,null))};function J(){var n=Object(i.a)(["\n    text-align: right;\n    color: ",";\n    padding-right: 20px;\n"]);return J=function(){return n},n}var M=u.d.p(J(),(function(n){return n.theme.color.apple})),T=function(){var n=function(){var n=Object(r.useState)(new Date),e=Object(y.a)(n,2),t=e[0],a=e[1];return Object(r.useEffect)((function(){var n=setInterval((function(){a(new Date)}),1e3);return function(){clearInterval(n)}}),[]),t}();return a.a.createElement(M,null,n.toLocaleString())};function W(){var n=Object(i.a)(["\nanimation-name: LastDotLoading;\n@keyframes LastDotLoading {\n    0% {\n        transform: translateY(0);\n    }\n\n    50% {\n        transform: translateY(0);\n    }\n\n    75% {\n        transform: translateY(-25%);\n    }\n\n    100% {\n        transform: translateY(0);\n    }\n}\n"]);return W=function(){return n},n}function K(){var n=Object(i.a)(["\nanimation-name: secondDotLoading;\n@keyframes secondDotLoading {\n    0% {\n        transform: translateY(0);\n    }\n\n    25% {\n        transform: translateY(0);\n    }\n\n    50% {\n        transform: translateY(-25%);\n    }\n\n    75% {\n        transform: translateY(0);\n    }\n\n    100% {\n        transform: translateY(0);\n    }\n}\n"]);return K=function(){return n},n}function Z(){var n=Object(i.a)(["\n    display: inline-block;\n    color: ",";\n    transform:translateY(0);\n    animation-name: firstDotLoading;\n    animation-duration: 0.8s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    font-size: ",";\n\n\n@keyframes firstDotLoading {\n    0% {\n        transform: translateY(0);\n    }\n\n    25% {\n        transform: translateY(-25%);\n    }\n\n    50% {\n        transform: translateY(0);\n    }\n\n    100% {\n        transform: translateY(0);\n    }\n}\n"]);return Z=function(){return n},n}var $=u.d.span(Z(),(function(n){return n.theme.color.apple}),(function(n){var e=n.size;return"".concat(e,"px")})),q=Object(u.d)($)(K()),Q=Object(u.d)($)(W()),X=function(n){var e=n.size;return a.a.createElement(a.a.Fragment,null,a.a.createElement($,{size:e},"."),a.a.createElement(q,{size:e},"."),a.a.createElement(Q,{size:e},"."))};function nn(){var n=Object(i.a)(["\n    display: block;\n    width: 200px;\n    height: 100px;\n    margin: 0 auto;\n"]);return nn=function(){return n},n}function en(){var n=Object(i.a)(["\n    text-align: center;\n    color: ",";\n    font-size: 30px;\n"]);return en=function(){return n},n}var tn=u.d.p(en(),(function(n){return n.theme.color.apple})),rn=u.d.img(nn()),an=t(14),on=t.n(an),cn=function(){return a.a.createElement("section",null,a.a.createElement(tn,null,"Your exchange rates are loading now from European Central Bank site. Please wait",a.a.createElement(X,null)),a.a.createElement(rn,{src:on.a,alt:"waving dollar"}))};function un(){var n=Object(i.a)(["\n    color: ",";\n    text-align: center;\n    font-size:24px;\n"]);return un=function(){return n},n}var ln=u.d.p(un(),(function(n){return n.theme.color.red})),sn=function(n){var e=n.errorMessage;return a.a.createElement("section",null,a.a.createElement(ln,null,"Sorry, the application you are trying to run has the following problem:"),a.a.createElement(ln,null,e," !!!"))},fn=["PLN","EUR","USD","GBP","CHF","CZK","RUB","CAD","AUD","JPY","HUF"],mn=function(){var n=function(){var n=Object(r.useState)(),e=Object(y.a)(n,2),t=e[0],a=e[1],o=Object(r.useState)(),c=Object(y.a)(o,2),i=c[0],u=c[1];return Object(r.useEffect)((function(){fetch("https://api.exchangeratesapi.io/latest?base=PLN").then((function(n){if(!n.ok)throw new Error(n.statusText);return n})).then((function(n){return n.json()})).then((function(n){setTimeout((function(){a(n)}),2e3)})).catch((function(n){u(n.message)}))}),[]),{currenciesRates:t,errorInfo:i}}(),e=n.currenciesRates,t=n.errorInfo;return a.a.createElement(a.a.Fragment,null,a.a.createElement(g,null,a.a.createElement(T,null),a.a.createElement(d,null),e?a.a.createElement(a.a.Fragment,null,a.a.createElement(H,{currenciesArray:fn,currenciesRates:e})):t?a.a.createElement(sn,{errorMessage:t}):a.a.createElement(cn,null)),a.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u.a,{theme:{color:{apple:"#9DE991C2",codGray:"#0A0A0AB4",eden:"#0F454CBF",mineShaft:"#323232BF",red:"#FF0000",silver:"#C7C2C2CC",transparent:"transparent",white:"white"}}},a.a.createElement(s,null),a.a.createElement(mn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.ea07e603.chunk.js.map