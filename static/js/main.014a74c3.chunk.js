(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(42)},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),o=n.n(i),l=n(11),s=n(12),c=n(14),u=n(13),m=n(15),d=n(2),g=n.n(d),h=function(e){var t="https://instagram.com/".concat(e);return g.a.get(t).then(function(e){return e.data.split('"id":"')[1].split('",')[0]})},f=function(e){return h(e).then(function(e){var t="https://i.instagram.com/api/v1/users/".concat(e,"/info/");return g.a.get(t).then(function(e){return new Promise(function(t,n){return t(e.data.user)})})})},p=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).handleSubmit=function(t){t.preventDefault(),e.setState({loading:!0}),f(e.refs.username.value).then(function(t){console.log(t),e.setState({img:t.hd_profile_pic_url_info.url,error:!1,loading:!1})}).catch(function(t){console.log("from app.js",t),e.setState({error:!0,errorMsg:"User Not Found",loading:!1})})},e.state={img:null,error:!1,errorMsg:null,loading:!1},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state;e.loading,e.error,e.errorMsg;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"box"},r.a.createElement("h2",null,"\ud83d\udcf8 Instagram DP"),r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{ref:"username",placeholder:"Enter username \u270d\ufe0f"}),r.a.createElement("button",{type:"submit"},"\ud83d\udd0e",r.a.createElement("span",null,"Search")))),r.a.createElement("div",{className:"text-center"},this.state.loading?"loading....":this.state.error?r.a.createElement("div",null,this.state.errorMsg):this.state.img?r.a.createElement("a",{target:"_blank",href:this.state.img},r.a.createElement("div",null,r.a.createElement("img",{alt:"instagram dp",src:this.state.img})),"Click here to View"):null))))}}]),t}(a.Component);n(41);o.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.014a74c3.chunk.js.map