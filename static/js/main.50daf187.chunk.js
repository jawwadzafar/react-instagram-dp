(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(42)},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(10),c=n.n(l),i=n(11),u=n(12),o=n(14),s=n(13),m=n(15),d=n(2),f=n.n(d),h=function(e){var t="https://instagram.com/".concat(e);return f.a.get(t).then(function(e){return e.data.split('"id":"')[1].split('",')[0]})},E=function(e){return h(e).then(function(e){var t="https://i.instagram.com/api/v1/users/".concat(e,"/info/");return f.a.get(t).then(function(e){return e.data.user})})},p=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"\u23f3 Loading..."))},g=function(e){var t=e.img;return r.a.createElement("div",null,r.a.createElement("p",null,"\ud83d\ude0e We found it!"),r.a.createElement("a",{target:"_blank",href:t},r.a.createElement("div",null,r.a.createElement("img",{alt:"instagram dp",src:t})),"\ud83d\ude44 View In full size"))},v=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"\ud83d\ude22 User Not Found"))},b=function(e){var t=e.error,n=e.img;return t?r.a.createElement(v,null):n?r.a.createElement(g,{img:n}):null},S=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(s.a)(t).call(this))).handleSubmit=function(t){var n=e.state.username;t.preventDefault(),n&&(e.setState({loading:!0}),e.loadUserData(n))},e.handleInput=function(t){e.setState({username:t.target.value})},e.handleClear=function(t){e.setState({username:""})},e.state={username:"",img:null,error:!1,loading:!1},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"loadUserData",value:function(e){var t=this;E(e).then(function(e){t.setState({img:e.hd_profile_pic_url_info.url,error:!1,loading:!1})}).catch(function(e){t.setState({error:!0,loading:!1}),console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.error,a=e.img,l=e.username;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"box"},r.a.createElement("h3",null,"Hey, Stalker!"),r.a.createElement("h2",null,"\ud83d\udcf8 Instagram DP"),r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{placeholder:"\u270d\ufe0f Enter IG username",value:this.state.username,onChange:this.handleInput}),r.a.createElement("button",{type:"submit",className:"search-button"},"\ud83d\udd0e",r.a.createElement("span",null,"Search")),l?r.a.createElement("button",{onClick:this.handleClear,class:"close-icon",type:"reset"}):null)),r.a.createElement("div",{className:"dynamic"},t?r.a.createElement(p,null):r.a.createElement(b,{error:n,img:a})))))}}]),t}(a.Component);n(41);c.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.50daf187.chunk.js.map