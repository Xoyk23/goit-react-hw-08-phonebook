(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{89:function(t,e,n){t.exports={form:"ContactForm_form__3n-XS",label:"ContactForm_label__CMHTk",input:"ContactForm_input__knaCb",example:"ContactForm_example__3KvUZ",button:"ContactForm_button__9AkCP"}},90:function(t,e,n){t.exports={contact:"ContactItem_contact__pKNdE",item:"ContactItem_item__beDkN",button:"ContactItem_button__29bs5"}},91:function(t,e,n){t.exports={list:"ContactsList_list__14phZ"}},92:function(t,e,n){t.exports={container:"Filter_container__4wUQq",label:"Filter_label__3_PkQ",input:"Filter_input__1biZY"}},93:function(t,e,n){t.exports={container:"UserPage_container__IHCXq",title:"UserPage_title__17iCS"}},97:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return Y}));var a,r=n(39),c=n(40),o=n(42),u=n(41),i=n(0),s=n(13),l=n(19),b=n(2),f=n(17),p=n.n(f),m=n(25),d=n(20),j=n.n(d),h=n(8),O=n(30),v=function(t){return t.contacts},_=function(t){return t.filter},C=Object(O.a)([v,_],(function(t,e){return t.filter((function(t){var n=t.name;return n&&n.toLowerCase().includes(e.toLowerCase())}))})),x=new Uint8Array(16);function y(){if(!a&&!(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(x)}var g=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var w=function(t){return"string"===typeof t&&g.test(t)},N=[],k=0;k<256;++k)N.push((k+256).toString(16).substr(1));var S=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(N[t[e+0]]+N[t[e+1]]+N[t[e+2]]+N[t[e+3]]+"-"+N[t[e+4]]+N[t[e+5]]+"-"+N[t[e+6]]+N[t[e+7]]+"-"+N[t[e+8]]+N[t[e+9]]+"-"+N[t[e+10]]+N[t[e+11]]+N[t[e+12]]+N[t[e+13]]+N[t[e+14]]+N[t[e+15]]).toLowerCase();if(!w(n))throw TypeError("Stringified UUID is invalid");return n};var F=function(t,e,n){var a=(t=t||{}).random||(t.rng||y)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e){n=n||0;for(var r=0;r<16;++r)e[n+r]=a[r];return e}return S(a)},I=n(89),P=n.n(I),U=n(1),L=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.heandleInput=function(e){t.setState(Object(b.a)({},e.currentTarget.name,e.currentTarget.value))},t.addNewContact=function(e){e.preventDefault(),t.props.onSubmit(Object(l.a)({id:F()},t.state)),t.setState({name:"",number:""})},t.passNewContact=function(e,n){var a=!0;return t.state.contacts.forEach((function(t){var n=t.name;n.toLowerCase()===e.toLowerCase()&&(alert("".concat(n," is already in your contacts list")),a=!1)})),""!==e&&""!==n||(alert("Please whrite all info"),a=!1),a},t}return Object(c.a)(n,[{key:"render",value:function(){return Object(U.jsxs)("form",{className:P.a.form,onSubmit:this.addNewContact,children:[Object(U.jsxs)("label",{className:P.a.label,children:["Name:",Object(U.jsx)("input",{className:P.a.input,name:"name",type:"text",value:this.state.name,onChange:this.heandleInput,required:!0})]}),Object(U.jsxs)("label",{className:P.a.label,children:["Phone number",Object(U.jsx)("span",{className:P.a.example,children:"(000-00-00)"}),":",Object(U.jsx)("input",{className:P.a.input,name:"number",type:"tel",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",value:this.state.number,onChange:this.heandleInput,required:!0})]}),Object(U.jsx)("button",{className:P.a.button,type:"submit",children:"Add Contact"})]})}}]),n}(i.Component),D=Object(s.b)((function(t){return{contacts:v(t)}}),(function(t){return{onSubmit:function(e){return t(function(t){return function(){var e=Object(m.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(Object(h.b)()),j.a.post("/contacts",t).then((function(t){var e=t.data;return n(Object(h.c)(e))})).catch((function(t){return n(Object(h.a)(t))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(e))}}}))(L),R=n(90),V=n.n(R),q=function(t){var e=t.name,n=t.number,a=t.id,r=t.deleteOnClick;return Object(U.jsxs)("li",{className:V.a.item,children:[Object(U.jsxs)("div",{className:V.a.contact,children:[Object(U.jsx)("span",{children:e}),Object(U.jsx)("span",{children:n})]}),Object(U.jsx)("button",{className:V.a.button,id:a,onClick:r,children:"Delete"})]})},A=n(91),E=n.n(A),T=Object(s.b)((function(t){return{contacts:C(t)}}),(function(t){return{deleteOnClick:function(e){return t((n=e.target.id,function(){var t=Object(m.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(Object(h.e)()),j.a.delete("/contacts/".concat(n)).then((function(t){return t.data,e(Object(h.f)(n))})).catch((function(t){return e(Object(h.d)(t))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));var n}}}))((function(t){var e=t.contacts,n=t.deleteOnClick;return Object(U.jsx)("ul",{className:E.a.list,children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(U.jsx)(q,{name:a,number:r,id:e,deleteOnClick:n},e)}))})})),Z=n(43),H=n(92),J=n.n(H),K=Object(s.b)((function(t){return{value:_(t)}}),(function(t){return{onChange:function(e){return t(Object(Z.a)(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(U.jsx)("div",{className:J.a.container,children:Object(U.jsxs)("label",{className:J.a.label,children:["Filter:",Object(U.jsx)("input",{className:J.a.input,type:"text",value:e,onChange:n})]})})})),M=n(93),Q=n.n(M),X=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(U.jsxs)("div",{className:Q.a.container,children:[Object(U.jsx)("h1",{className:Q.a.title,children:"Phonebook"}),Object(U.jsx)(D,{}),Object(U.jsx)("h2",{className:Q.a.title,children:"Contacts"}),Object(U.jsx)(K,{}),Object(U.jsx)(T,{})]})}}]),n}(i.Component),Y=Object(s.b)(null,(function(t){return{fetchContacts:function(){return t(function(){var t=Object(m.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(Object(h.h)()),j.a.get("/contacts").then((function(t){var n=t.data;return e(Object(h.i)(n))})).catch((function(t){return e(Object(h.g)(t))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}}))(X)}}]);
//# sourceMappingURL=3.a7ed0d60.chunk.js.map