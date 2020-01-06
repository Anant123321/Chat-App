(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,t){},111:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(56),s=a.n(r),l=a(16),m=a(6),o=a(5);a(69);function i(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(""),m=Object(o.a)(s,2),i=m[0],u=m[1];return c.a.createElement("div",{className:"outerContainer"},c.a.createElement("div",{className:"innerContainer"},c.a.createElement("h1",{className:"heading"},"Join"),c.a.createElement("div",null,c.a.createElement("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return r(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return u(e.target.value)}})),c.a.createElement(l.b,{onClick:function(e){return a&&i?null:e.preventDefault()},to:"/chat?name=".concat(a,"&room=").concat(i)},c.a.createElement("button",{className:"button mt-20",type:"submit"},"Sign In"))))}var u,A=a(63),E=a(59),f=a.n(E),g=a(60),p=a.n(g),v=a(17),h=a.n(v),d=(a(111),function(e){var t=e.users;return c.a.createElement("div",{className:"textContainer"},c.a.createElement("div",null,c.a.createElement("h1",null,"Im Box, Chat Box ",c.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\udcac")),c.a.createElement("h2",null,"Try me out right now! ",c.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2b05\ufe0f"))),t?c.a.createElement("div",null,c.a.createElement("h1",null,"People currently chatting:"),c.a.createElement("div",{className:"activeContainer"},c.a.createElement("h2",null,t.map((function(e){var t=e.name;return c.a.createElement("div",{key:t,className:"activeItem"},t,c.a.createElement("img",{alt:"Online Icon",src:h.a}))}))))):null)}),N=a(61),b=a.n(N),j=(a(145),a(33)),C=a.n(j),O=function(e){var t=e.message,a=t.text,n=t.user,r=!1,s=e.name.trim().toLowerCase();return n===s&&(r=!0),r?c.a.createElement("div",{className:"messageContainer justifyEnd"},c.a.createElement("p",{className:"sentText pr-10"},s),c.a.createElement("div",{className:"messageBox backgroundBlue"},c.a.createElement("p",{className:"messageText colorWhite"},C.a.emojify(a)))):c.a.createElement("div",{className:"messageContainer justifyStart"},c.a.createElement("div",{className:"messageBox backgroundLight"},c.a.createElement("p",{className:"messageText colorDark"},C.a.emojify(a))),c.a.createElement("p",{className:"sentText pl-10 "},n))},I=(a(146),function(e){var t=e.messages,a=e.name;return c.a.createElement(b.a,{className:"messages"},t.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement(O,{message:e,name:a}))})))}),S=(a(147),a(62)),x=a.n(S),y=function(e){var t=e.room;return c.a.createElement("div",{className:"infobar"},c.a.createElement("div",{className:"leftInnerContainer"},c.a.createElement("img",{className:"onlineIcon",alt:"online",src:h.a}),c.a.createElement("h3",null,t)),c.a.createElement("div",{className:"rightInnerContainer"},c.a.createElement("a",{href:"/"},c.a.createElement("img",{src:x.a,alt:"leave chat"}))))},k=(a(148),function(e){var t=e.setMessage,a=e.sendMessage,n=e.message;return c.a.createElement("form",{className:"form"},c.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:n,onChange:function(e){var a=e.target.value;return t(a)},onKeyPress:function(e){return"Enter"===e.key?a(e):null}}),c.a.createElement("button",{className:"sendButton",onClick:function(e){return a(e)}},"Send"))}),B=(a(149),function(e){var t=e.location,a=Object(n.useState)(""),r=Object(o.a)(a,2),s=r[0],l=r[1],m=Object(n.useState)(""),i=Object(o.a)(m,2),E=i[0],g=i[1],v=Object(n.useState)(""),h=Object(o.a)(v,2),N=h[0],b=h[1],j=Object(n.useState)(""),C=Object(o.a)(j,2),O=C[0],S=C[1],x=Object(n.useState)([]),B=Object(o.a)(x,2),R=B[0],w=B[1],M="https://chatapp-12321.herokuapp.com/";Object(n.useEffect)((function(){var e=f.a.parse(t.search),a=e.name,n=e.room;u=p()(M),g(n),l(a),u.emit("join",{name:a,room:n},(function(e){e&&alert(e)}))}),[M,t.search]),Object(n.useEffect)((function(){return u.on("message",(function(e){w([].concat(Object(A.a)(R),[e]))})),u.on("roomData",(function(e){var t=e.users;b(t)})),function(){u.emit("disconnect"),u.off()}}),[R]);return c.a.createElement("div",{className:"outerContainer"},c.a.createElement("div",{className:"container"},c.a.createElement(y,{room:E}),c.a.createElement(I,{messages:R,name:s}),c.a.createElement(k,{message:O,setMessage:S,sendMessage:function(e){e.preventDefault(),O&&u.emit("sendMessage",O,(function(){return S("")}))}})),c.a.createElement(d,{users:N}))}),R=function(){return c.a.createElement(l.a,null,c.a.createElement(m.a,{path:"/",exact:!0,component:i}),c.a.createElement(m.a,{path:"/chat",component:B}))};s.a.render(c.a.createElement(R,null),document.querySelector("#root"))},17:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},62:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},64:function(e,t,a){e.exports=a(150)},69:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.2705b838.chunk.js.map