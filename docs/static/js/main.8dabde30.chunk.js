(this["webpackJsonprelease-dep-updates"]=this["webpackJsonprelease-dep-updates"]||[]).push([[0],[,,,,,,,,,,,,,function(e){e.exports=JSON.parse('{"dependencies":{"@wmfs/tymly-runner":"2.139.0","@wmfs/tymly-pg-plugin":"1.215.0","@wmfs/tymly-fastify-plugin":"1.3.0"}}')},function(e){e.exports=JSON.parse('{"dependencies":{"@wmfs/tymly-runner":"2.142.0","@wmfs/tymly-solr-plugin":"2.11.0","@wmfs/tymly-fastify-plugin":"1.3.0","@wmfs/tymly-gov-uk-notify-plugin":"1.15.0"}}')},function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),i=n.n(c),s=(n(20),n(21),n(12)),u=n(3),o=n(4),l=n(1),p=n(6),f=n(7),h=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(l.a)(a)),a}return Object(o.a)(n,[{key:"handleChange",value:function(e){this.props.onTextInputChange({id:this.props.id,value:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{style:{paddingBottom:"20px"}},r.a.createElement("div",null,this.props.title),r.a.createElement("textarea",{onChange:this.handleChange,defaultValue:this.props.value}))}}]),n}(r.a.Component),d=n(13),g=n(14),m=n(9),v=n(8),b=function(e,t,n,a,r){var c=["Dependency","Before","After"],i=function(n){return"".concat(n," | ").concat(e[n]||"-"," | ").concat(t[n]?function(e){return"[".concat(t[e],"](https://github.com/").concat(e.substring(1),"/blob/master/CHANGELOG.md)")}(n):"-")};return[c.join(" | "),c.map((function(e){return e.split("").map((function(){return"-"})).join("")})).join(" | ")].concat(Object(m.a)(n.map(i)),Object(m.a)(a.map(i)),Object(m.a)(r.map(i)))},y=function(e,t,n){for(var a=[],r=[],c=[],i=0,s=Object.keys(e);i<s.length;i++){var u=s[i];t[u]?e[u]!==t[u]&&r.push(u):a.push(u)}for(var o=0,l=Object.keys(t);o<l.length;o++){var p=l[o];e[p]||c.push(p)}return"table"===n?b(e,t,a,c,r):function(e,t,n,a,r){var c=[];c.push("Removed:");var i,s=Object(v.a)(n);try{for(s.s();!(i=s.n()).done;){var u=i.value;c.push("> ".concat(u))}}catch(g){s.e(g)}finally{s.f()}n.length||c.push("N/A"),c.push("\nAdded:");var o,l=Object(v.a)(a);try{for(l.s();!(o=l.n()).done;){var p=o.value;c.push("> ".concat(p," [").concat(t[p],"](https://github.com/").concat(p.substring(1),"/blob/master/CHANGELOG.md)"))}}catch(g){l.e(g)}finally{l.f()}a.length||c.push("N/A"),c.push("\nUpdated:");var f,h=Object(v.a)(r);try{for(h.s();!(f=h.n()).done;){var d=f.value;c.push("> ".concat(d," ").concat(e[d]," -> [").concat(t[d],"](https://github.com/").concat(d.substring(1),"/blob/master/CHANGELOG.md)"))}}catch(g){h.e(g)}finally{h.f()}return r.length||c.push("N/A"),c}(e,t,a,c,r)},O=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).textInputChange=a.textInputChange.bind(Object(l.a)(a)),a.getDiff=a.getDiff.bind(Object(l.a)(a)),a.state={packageBefore:JSON.stringify(d,null,2),packageAfter:JSON.stringify(g,null,2),diff:[]},a}return Object(o.a)(n,[{key:"textInputChange",value:function(e){var t=e.id,n=e.value;this.setState(Object(s.a)({},t,n))}},{key:"getDiff",value:function(){try{var e=JSON.parse(this.state.packageBefore).dependencies,t=JSON.parse(this.state.packageAfter).dependencies,n=y(e,t,"table");this.setState({diff:n})}catch(a){console.log("ERROR"),console.log(a)}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{style:{paddingBottom:"20px"}},"This is just something small to help generate changes for release stories on clubhouse rather than have to manually write it :)"),r.a.createElement(h,{id:"packageBefore",value:this.state.packageBefore,onTextInputChange:this.textInputChange,title:"Paste package.json here BEFORE ncu -u"}),r.a.createElement(h,{id:"packageAfter",value:this.state.packageAfter,onTextInputChange:this.textInputChange,title:"Paste package.json here AFTER ncu -u"}),r.a.createElement("button",{onClick:this.getDiff},"Get diff"),r.a.createElement("div",null,r.a.createElement("h3",null,this.state.diff.length?"Output:":""),this.state.diff.map((function(e,t){return r.a.createElement("div",{key:t},e)}))),this.state.diff.length?r.a.createElement("button",{onClick:function(){return navigator.clipboard.writeText(e.state.diff.join("\n"))}},"Copy to clipboard"):"")}}]),n}(r.a.Component);var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.8dabde30.chunk.js.map