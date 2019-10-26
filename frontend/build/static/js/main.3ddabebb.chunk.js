(this["webpackJsonpchat-client"]=this["webpackJsonpchat-client"]||[]).push([[0],{50:function(e,t,a){e.exports=a(61)},55:function(e,t,a){},56:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(8),r=a.n(i),o=(a(55),a(15)),c=a(16),l=a(26),u=a(25),m=a(27),h=(a(56),a(41)),d=a(43),g=new(function(){function e(){Object(o.a)(this,e),this.messageList=[],this.userList=[],this.url="",this.token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZ\u20263QifQ.AoSHHKEybm7_OLNLUtYHa8zt_9HBOUawbyqPaBU9BNc"}return Object(c.a)(e,[{key:"clearToken",value:function(){this.messageList=[],this.userList=[],this.token=""}},{key:"login",value:function(e,t,a){var n=this;return this.url=e,new Promise((function(e,s){var i=new FormData;i.append("password",a),i.append("username",t),console.log("[ChatService] login start"),fetch(n.url+"/login",{method:"POST",body:i}).then((function(t){console.log("[ChatService] login response:",t),201===t.status?t.json().then((function(t){console.log("[ChatService login get body:",t),n.token=t.token,e(!0)})):403===t.status?s("Invalid username or password"):s("fail to /login, status:",t.status)}),(function(e){s(e)}))}))}},{key:"_bindListener",value:function(e,t,a){var n=this;e.addEventListener(t,(function(e){var t=JSON.parse(e.data);a(t),n.callback({messageList:n.messageList,userList:n.userList})}),!1)}},{key:"initUsers",value:function(e){var t=new Set(e.users);this.userList=Object(d.a)(t)}},{key:"addUser",value:function(e){this.userList.push(e.user)}},{key:"deleteUser",value:function(e){var t=e.user,a=this.userList;for(var n in a)if(a[n]==t){a.splice(n,1);break}}},{key:"date_format",value:function(e){var t=new Date(1e3*e);return t.toLocaleDateString("en-US")+" "+t.toLocaleTimeString("en-US")}},{key:"addServerStatus",value:function(e){this.messageList.push({type:"status",time:this.date_format(e.created),status:e.status})}},{key:"addMessage",value:function(e){this.messageList.push({type:"msg",time:this.date_format(e.created),user:e.user,msg:e.message})}},{key:"listen",value:function(e,t,a){var n=this;console.log("[ChatService] listen"),this.callback=e;var s=new EventSource(this.url+"/stream/"+this.token);this._bindListener(s,"Users",this.initUsers.bind(this)),this._bindListener(s,"Join",this.addUser.bind(this)),this._bindListener(s,"Part",this.deleteUser.bind(this)),this._bindListener(s,"ServerStatus",this.addServerStatus.bind(this)),this._bindListener(s,"Disconnect",t),this._bindListener(s,"Message",this.addMessage.bind(this)),s.addEventListener("error",(function(e){2==e.target.readyState&&(n.clearToken(),t())}),!1)}},{key:"send",value:function(e){var t=this;return new Promise((function(a,n){var s=new FormData;s.append("message",e);var i=new Headers;i.append("Authorization","Bearer ".concat(t.token)),console.log("[ChatService] send:",e),fetch(t.url+"/message",{method:"POST",headers:i,body:s}).then((function(e){a(e)}),(function(e){n(e)}))}))}}]),e}()),f=a(97),v=a(98),p=a(94),b=a(95),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault(),console.log("submit"),g.login(a.state.url,a.state.username,a.state.password).then((function(e){a.props.afterLogin(!0)}),(function(e){alert(e)}))},a.onChange=function(e){console.log(e),a.setState(Object(h.a)({},e.target.id,e.target.value))},a.state={url:"http://chat.cs291.com",username:"test",password:"test"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(f.a,{open:!0},s.a.createElement(v.a,null,"Enter Server URL to login"),s.a.createElement("div",{className:"login-modal"},s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"url",label:"URL",autoFocus:!0,defaultValue:this.state.url,onChange:this.onChange}),s.a.createElement(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",defaultValue:this.state.username,onChange:this.onChange}),s.a.createElement("br",null),s.a.createElement(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Password",type:"password",id:"password",defaultValue:this.state.password,onChange:this.onChange}),s.a.createElement("br",null),s.a.createElement(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"LOGIN"))))}}]),t}(s.a.Component),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).scrollToBottom=function(){console.log("scrollToBottom"),setTimeout((function(){a.messagesEnd.scrollIntoView({behavior:"auto"})}),0)},a.onDataUpdate=function(e){a.setState({userList:e.userList,messageList:e.messageList}),e.messageList&&a.scrollToBottom()},a.onDisconnect=function(){a.props.onDisconnect()},a.onInputChange=function(e){a.setState({message:e.target.value})},a.onSend=function(e){e.preventDefault(),g.send(a.state.message).then((function(e){a.setState({message:""})}))},a.state={message:"",userList:[],messageList:[]},g.listen(a.onDataUpdate,a.onDisconnect),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;function t(e){var t=e.item;return"status"==t.type?s.a.createElement("li",{className:"status-item"},s.a.createElement("p",{className:"time"},t.time," "),s.a.createElement("p",{className:"message"},t.status)):s.a.createElement("li",{className:"item"},s.a.createElement("p",{className:"time"},t.time," ",t.user,":"),s.a.createElement("p",{className:"message"},t.msg))}return s.a.createElement("div",{className:"chat-window"},s.a.createElement("div",{className:"left"},s.a.createElement("div",{className:"top"},s.a.createElement("ul",{className:"message-list"},this.state.messageList.map((function(e,a){return s.a.createElement(t,{key:a,item:e})})),s.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}}))),s.a.createElement("div",{className:"bottom"},s.a.createElement("form",{className:"input-form",onSubmit:this.onSend},s.a.createElement("input",{name:"message",type:"text",onChange:this.onInputChange,value:this.state.message}),s.a.createElement("button",{type:"submit"},"send")))),s.a.createElement("div",{className:"right"},s.a.createElement("ul",{className:"user-list"},this.state.userList.map((function(e,t){return s.a.createElement("li",{key:t},e)})))))}}]),t}(s.a.Component),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).loginCallback=function(e){e&&a.setState({isLoggedIn:!0})},a.onDisconnect=function(){a.setState({isLoggedIn:!1})},a.state={isLoggedIn:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e;return console.log("[App] render"),e=this.state.isLoggedIn?s.a.createElement(E,{onDisconnect:this.onDisconnect}):s.a.createElement(L,{afterLogin:this.loginCallback}),s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:this.state.isLoggedIn?"content":"content snow"},e),s.a.createElement("div",{className:"logo"},"@CS291A"))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[50,1,2]]]);
//# sourceMappingURL=main.3ddabebb.chunk.js.map