(this["webpackJsonprelease-dep-updates"]=this["webpackJsonprelease-dep-updates"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('{"dependencies":{"@wmfs/tymly-runner":"2.139.0","@wmfs/tymly-pg-plugin":"1.215.0","@wmfs/tymly-fastify-plugin":"1.3.0"}}')},function(e){e.exports=JSON.parse('{"dependencies":{"@wmfs/tymly-runner":"2.142.0","@wmfs/tymly-solr-plugin":"2.11.0","@wmfs/tymly-fastify-plugin":"1.3.0","@wmfs/tymly-gov-uk-notify-plugin":"1.15.0"}}')},function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(7),i=n.n(s),l=(n(16),n(17),n(8)),c=n(2),u=n(3),o=n(1),p=n(4),h=n(5),f=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(o.a)(a)),a}return Object(u.a)(n,[{key:"handleChange",value:function(e){this.props.onTextInputChange({id:this.props.id,value:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{style:{paddingBottom:"20px"}},r.a.createElement("div",null,this.props.title),r.a.createElement("textarea",{onChange:this.handleChange,defaultValue:this.props.value}))}}]),n}(r.a.Component),g=n(9),d=n(10),m=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).textInputChange=a.textInputChange.bind(Object(o.a)(a)),a.getDiff=a.getDiff.bind(Object(o.a)(a)),a.state={packageBefore:JSON.stringify(g,null,2),packageAfter:JSON.stringify(d,null,2),diff:[]},a}return Object(u.a)(n,[{key:"textInputChange",value:function(e){var t=e.id,n=e.value;this.setState(Object(l.a)({},t,n))}},{key:"getDiff",value:function(){try{var e=function(e,t){for(var n=[],a=[],r=[],s=0,i=Object.keys(e);s<i.length;s++){var l=i[s];t[l]?e[l]!==t[l]&&a.push(l):n.push(l)}for(var c=0,u=Object.keys(t);c<u.length;c++){var o=u[c];e[o]||r.push(o)}var p=[];p.push("Removed:");for(var h=0,f=n;h<f.length;h++){var g=f[h];p.push("> ".concat(g))}n.length||p.push("N/A"),p.push("\nAdded:");for(var d=0,m=r;d<m.length;d++){var v=m[d];p.push("> ".concat(v," [").concat(t[v],"](https://github.com/").concat(v.substring(1),"/blob/master/CHANGELOG.md)"))}r.length||p.push("N/A"),p.push("\nUpdated:");for(var b=0,y=a;b<y.length;b++){var O=y[b];p.push("> ".concat(O," ").concat(e[O]," -> [").concat(t[O],"](https://github.com/").concat(O.substring(1),"/blob/master/CHANGELOG.md)"))}return a.length||p.push("N/A"),p}(JSON.parse(this.state.packageBefore).dependencies,JSON.parse(this.state.packageAfter).dependencies);this.setState({diff:e})}catch(t){console.log("ERROR"),console.log(t)}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{style:{paddingBottom:"20px"}},"This is just something small to help generate changes for release stories on clubhouse rather than have to manually write it :)"),r.a.createElement(f,{id:"packageBefore",value:this.state.packageBefore,onTextInputChange:this.textInputChange,title:"Paste package.json here BEFORE ncu -u"}),r.a.createElement(f,{id:"packageAfter",value:this.state.packageAfter,onTextInputChange:this.textInputChange,title:"Paste package.json here AFTER ncu -u"}),r.a.createElement("button",{onClick:this.getDiff},"Get diff"),r.a.createElement("div",null,r.a.createElement("h3",null,this.state.diff.length?"Output:":""),this.state.diff.map((function(e){return r.a.createElement("div",null,e)}))),this.state.diff.length?r.a.createElement("button",{onClick:function(){return navigator.clipboard.writeText(e.state.diff.join("\n"))}},"Copy to clipboard"):"")}}]),n}(r.a.Component);var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.bdd34a43.chunk.js.map