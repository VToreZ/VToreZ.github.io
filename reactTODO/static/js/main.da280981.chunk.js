(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(1),r=a(2);a(9);var l=function(e){return c.a.createElement("li",{className:"taskItem"},e.title,c.a.createElement("button",{onClick:function(){return e.func(e.id)},className:"but",style:{float:"right",width:"15px",height:"15px",padding:"0"}},"X"))};a(10);var o=function(e){var t=Object(n.useState)([{id:1,title:"firstDemoTask"},{id:2,title:"secondDemoTask"},{id:3,title:"thirdDemoTask"}]),a=Object(r.a)(t,2),i=a[0],o=a[1],s=Object(n.useState)(""),m=Object(r.a)(s,2),u=m[0],d=m[1];function f(e){o(i.slice(0,i.length).filter((function(t){return t.id!=e})))}return c.a.createElement("div",{className:"rowWrap"},c.a.createElement("div",{className:"rowContent"},c.a.createElement("div",{className:"rowHeader"},c.a.createElement("strong",{className:"rowName"},e.name),c.a.createElement("button",{onClick:function(){return e.removeRow(e.id)}},"close")),c.a.createElement("ul",{className:"tasksContainer"},i.slice(0,i.length).map((function(e){return c.a.createElement(l,{title:e.title,id:e.id,key:e.id,func:f})})),c.a.createElement("button",{onClick:function(){if(u){document.querySelector("input");o(i.slice(0,i.length).concat({title:u,id:i.length+1})),d("")}}},"add"),c.a.createElement("input",{className:"input",value:u,onChange:function(e){d(e.target.value)}}))))};a(11);var s=function(){var e=Object(n.useState)([{name:"firstRow",id:1,tasks:[{id:1,title:"firstDemoTask"},{id:2,title:"secondDemoTask"},{id:3,title:"thirdDemoTask"}]},{name:"secondRow",id:2,tasks:[]},{name:"thirdRow",id:3,tasks:[]}]),t=Object(r.a)(e,2),a=t[0],i=t[1];function l(e){i(a.slice(0,a.length).filter((function(t){return t.id!=e})))}return c.a.createElement("div",{className:"Layout__container"},c.a.createElement("button",{onClick:function(){i(a.concat({name:"newRow",id:a.length+1}))}},"[+]"),a.slice(0,a.length).map((function(e){return c.a.createElement(o,{id:e.id,name:e.name,key:e.id,removeRow:l})})))};a(12);var m=function(){return c.a.createElement("div",{className:"Header__header"},c.a.createElement("h1",null,"MyTODO"),c.a.createElement("nav",{className:"Header__nav"},c.a.createElement("p",null),c.a.createElement("a",{className:"navItem",href:"#"},"navItem"),c.a.createElement("a",{className:"navItem",href:"#"},"navItem"),c.a.createElement("a",{className:"navItem",href:"#"},"navItem")))};a(13);function u(){return c.a.createElement("div",{className:"pageWrap"},c.a.createElement(m,null),c.a.createElement(s,null))}Object(i.render)(c.a.createElement(u,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.da280981.chunk.js.map