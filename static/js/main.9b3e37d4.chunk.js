(this["webpackJsonpmarkdown-editor"]=this["webpackJsonpmarkdown-editor"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),i=(n(9),n(10),n(3));n(11);function l(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],o=n[1];return Object(a.useEffect)((function(){console.log("useffect called")}),[c]),r.a.createElement("div",{className:"homePage"},r.a.createElement("div",{className:"inputDiv"},"Enter Markdown Text",r.a.createElement("textarea",{className:"txtArea",value:c,onChange:function(e){o(e.target.value)}})),r.a.createElement("div",{className:"outputDiv"},"MarkDown Preview",r.a.createElement("div",{className:"txtOutput"},function(e){var t=c;return t=(t=(t=(t=(t=(t=t.replace(/^[#] (.*)/gm,(function(e,t){return"<h1>".concat(t,"</h1>")}))).replace(/^[#]{2} (.*)/gm,(function(e,t){return"<h2>".concat(t,"</h2>")}))).replace(/^[#]{3} (.*)/gm,(function(e,t){return"<h3>".concat(t,"</h3>")}))).replace(/^[-] (.*)/gm,(function(e,t){return"<li>".concat(t,"</li>")}))).replace(/^[-][-][-](.*)/gm,(function(e,t){return"<hr>".concat(t,"</hr>")}))).replace(/^\s|w*$/gm,(function(e,t){return"<br>"})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})}())))}var u=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(l,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.9b3e37d4.chunk.js.map