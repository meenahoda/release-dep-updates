(this["webpackJsonprelease-dep-updates"]=this["webpackJsonprelease-dep-updates"]||[]).push([[0],[,,,,,,,,,,,,,function(e){e.exports=JSON.parse('{"dependencies":{"@wmfs/tymly-runner":"2.139.0","@wmfs/tymly-pg-plugin":"1.215.0","@wmfs/tymly-fastify-plugin":"1.3.0"}}')},function(e){e.exports=JSON.parse('{"dependencies":{"@wmfs/tymly-runner":"2.142.0","@wmfs/tymly-solr-plugin":"2.11.0","@wmfs/tymly-fastify-plugin":"1.3.0","@wmfs/tymly-gov-uk-notify-plugin":"1.15.0"}}')},function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),s=(n(20),n(21),n(12)),i=n(3),l=n(4),u=n(1),p=n(6),h=n(7),f=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(e){this.props.onTextInputChange({id:this.props.id,value:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{style:{paddingBottom:"20px"}},r.a.createElement("div",null,this.props.title),r.a.createElement("textarea",{onChange:this.handleChange,defaultValue:this.props.value}))}}]),n}(r.a.Component),d=n(13),m=n(14),g=n(9),b=n(8),v=function(e,t,n,a,r){var c=["Dependency","Before","After"],o=function(n){return"".concat(n," | ").concat(e[n]||"-"," | ").concat(t[n]?function(e){return"[".concat(t[e],"](https://github.com/").concat(e.substring(1),"/blob/master/CHANGELOG.md)")}(n):"-")};return[c.join(" | "),c.map((function(e){return e.split("").map((function(){return"-"})).join("")})).join(" | ")].concat(Object(g.a)(n.map(o)),Object(g.a)(a.map(o)),Object(g.a)(r.map(o)))},y=function(e,t,n){for(var a=[],r=[],c=[],o=0,s=Object.keys(e);o<s.length;o++){var i=s[o];t[i]?e[i]!==t[i]&&r.push(i):a.push(i)}for(var l=0,u=Object.keys(t);l<u.length;l++){var p=u[l];e[p]||c.push(p)}return"table"===n?v(e,t,a,c,r):function(e,t,n,a,r){var c=[];c.push("Removed:");var o,s=Object(b.a)(n);try{for(s.s();!(o=s.n()).done;){var i=o.value;c.push("> ".concat(i))}}catch(m){s.e(m)}finally{s.f()}n.length||c.push("N/A"),c.push("\nAdded:");var l,u=Object(b.a)(a);try{for(u.s();!(l=u.n()).done;){var p=l.value;c.push("> ".concat(p," [").concat(t[p],"](https://github.com/").concat(p.substring(1),"/blob/master/CHANGELOG.md)"))}}catch(m){u.e(m)}finally{u.f()}a.length||c.push("N/A"),c.push("\nUpdated:");var h,f=Object(b.a)(r);try{for(f.s();!(h=f.n()).done;){var d=h.value;c.push("> ".concat(d," ").concat(e[d]," -> [").concat(t[d],"](https://github.com/").concat(d.substring(1),"/blob/master/CHANGELOG.md)"))}}catch(m){f.e(m)}finally{f.f()}return r.length||c.push("N/A"),c}(e,t,a,c,r)},O=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).textInputChange=a.textInputChange.bind(Object(u.a)(a)),a.compare=a.compare.bind(Object(u.a)(a)),a.state={packageBefore:JSON.stringify(d,null,2),packageAfter:JSON.stringify(m,null,2),diff:[]},a}return Object(l.a)(n,[{key:"textInputChange",value:function(e){var t=e.id,n=e.value;this.setState(Object(s.a)({},t,n))}},{key:"compare",value:function(){try{var e=JSON.parse(this.state.packageBefore).dependencies,t=JSON.parse(this.state.packageAfter).dependencies,n=y(e,t,"table");console.log(n),this.setState({diff:n})}catch(a){console.log("ERROR"),console.log(a)}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{style:{paddingBottom:"20px"}},"Generates difference in dependencies between 2 states of a package.json file."),r.a.createElement("div",{style:{paddingBottom:"20px"}},"Use this to help produce documentation for a release."),r.a.createElement(f,{id:"packageBefore",value:this.state.packageBefore,onTextInputChange:this.textInputChange,title:"Paste package.json here BEFORE ncu -u (e.g. master branch)"}),r.a.createElement(f,{id:"packageAfter",value:this.state.packageAfter,onTextInputChange:this.textInputChange,title:"Paste package.json here AFTER ncu -u (e.g. release branch)"}),r.a.createElement("button",{onClick:this.compare,style:{marginRight:"10px"}},"Compare"),this.state.diff.length?r.a.createElement("button",{onClick:function(){return navigator.clipboard.writeText(e.state.diff.join("\n"))}},"Copy to clipboard"):"",r.a.createElement("div",null,r.a.createElement("h3",null,this.state.diff.length?"Output:":""),this.state.diff.map((function(e,t){return r.a.createElement("div",{key:t},e)}))))}}]),n}(r.a.Component);var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.aa268a51.chunk.js.map