(this["webpackJsonpredux_todo-list"]=this["webpackJsonpredux_todo-list"]||[]).push([[0],{34:function(t,e,n){},35:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(12),o=n.n(r),i=n(9),u=n(15),s=n(3),d=n(1),j=function(t){return Object(d.jsx)("h2",{children:"login page"})},a=n(18),l=n.n(a),b=n(20),O=n(23),x=n(22),h=n(24),f="TODO_ADD",p="TODO_DELETE",v=Object(h.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case f:return[].concat(Object(x.a)(t),[{text:e.text,id:(new Date).getTime(),completed:!1}]);case p:return t.flter((function(t){return t.id!==e.id}));default:return t}})),g=function(t){return{type:f,text:t}},m=function(t){return{type:p,id:t}},D=v,T=(n(34),Object(i.b)(null,(function(t,e){return console.log(e.todo.id),{onDelete:function(){return t(m(e.todo.id))}}}))((function(t){var e=t.todo,n=t.onDelete;return Object(d.jsxs)("li",{children:[Object(d.jsx)("input",{type:"checkbox"}),Object(d.jsx)("label",{children:e.text}),Object(d.jsx)("button",{onClick:n,children:"\uc0ad\uc81c"})]})}))),k=(n(35),Object(i.b)((function(t){return{todos:t}}),(function(t){return{addTodo:function(e){return t(g(e))}}}))((function(t){var e=t.todos,n=t.addTodo,r=Object(c.useState)(""),o=Object(O.a)(r,2),i=o[0],s=o[1],j=function(){var t=Object(b.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),i){t.next=3;break}return t.abrupt("return");case 3:n(i),s("");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"hi",children:"Todo List"}),Object(d.jsxs)("form",{onSubmit:j,children:[Object(d.jsx)("input",{value:i,onChange:function(t){s(t.target.value)}}),Object(d.jsx)("button",{children:"Add"})]}),Object(d.jsx)("ul",{children:e.map((function(t){return Object(d.jsx)(T,{todo:t},t.id)}))}),Object(d.jsx)(u.b,{to:"/login",children:Object(d.jsx)("div",{children:"\ub85c\uadf8\uc778"})})]})})));var w=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(u.a,{children:Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{exact:!0,path:"/",children:Object(d.jsx)(k,{})}),Object(d.jsx)(s.a,{path:"/login",children:Object(d.jsx)(j,{})})]})})})};o.a.render(Object(d.jsx)(i.a,{store:D,children:Object(d.jsx)(w,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.e8a0f200.chunk.js.map