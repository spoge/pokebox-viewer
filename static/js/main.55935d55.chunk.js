(this["webpackJsonppokemon-box-calculator"]=this["webpackJsonppokemon-box-calculator"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),l=n.n(r),i=(n(9),n(1)),o=(n(10),function(e){var t=e.onClick,n=e.img,a=void 0===n?"":n,r=e.active,l=void 0!==r&&r;return c.a.createElement("div",{className:"cell ".concat(l?"active":"inactive"),onClick:t},a?c.a.createElement("img",{src:a,alt:""}):null)}),u=function(e){var t=e.pokeNum,n=e.setPokenum,a=Math.ceil(t/30),r=t%30===0?30:t%30,l=Math.ceil(r/6),i=r%6===0?6:r%6,u=function(e,t,n){return 30*(a-1)+6*(t-1)+n};return c.a.createElement("div",null,c.a.createElement("div",{className:"box-label"},"Box: ",a),c.a.createElement("div",{className:"box"},[[1,2,3,4,5,6].map((function(e){return c.a.createElement("div",{key:e},[[1,2,3,4,5].map((function(t){return c.a.createElement(o,{key:t,active:l===t&&i===e,onClick:function(){return n(u(0,t,e))},img:"https://serebii.net/pokedex-swsh/icon/".concat((a=u(0,t,e),a.toString().padStart(3,"0")),".png")});var a}))])}))]))},m=function(){var e=Object(a.useState)(1),t=Object(i.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)("1"),o=Object(i.a)(l,2),m=o[0],s=o[1],v=Object(a.useState)(!0),p=Object(i.a)(v,2),d=p[0],b=p[1];return Object(a.useEffect)((function(){return s(n.toString()),function(){}}),[n]),c.a.createElement("div",{className:"app"},c.a.createElement("h2",null,"Pok\xe9mon Box Calculator"),c.a.createElement("div",null,c.a.createElement(u,{pokeNum:n,setPokenum:r}),c.a.createElement("div",null,c.a.createElement("span",null,"Pok\xe9dex #"),c.a.createElement("input",{className:"input-field",type:"number",min:1,max:893,value:m,onChange:function(e){return function(e){if(s(e),!Number.isNaN(e)){var t=Number.parseInt(e);if(t>=1&&t<=893)return r(t),void b(!0)}b(!1)}(e.target.value)}})),c.a.createElement("div",{className:"input-error-label"},d?" ":"Invalid Pok\xe9dex number")))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.55935d55.chunk.js.map