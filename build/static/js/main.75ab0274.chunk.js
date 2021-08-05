(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{22:function(e,t){},254:function(e,t,n){},260:function(e,t,n){},269:function(e,t,n){},334:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(61),r=n.n(i),s=(n(254),n(14)),o=n(24),l=n(21),d=n(230),j=n(385),u=n(387),b=n(383),h=n(228),O=(n(201),n(13)),m=n(22),p=n(232),x=n(49),v="UPDATE_EVENTS",g="ADD_TO_LIST",f="ADD_MULTIPLE_TO_LIST",y="REMOVE_FROM_LIST",w="UPDATE_CART_QUANTITY",k=function(e,t){switch(t.type){case v:case"QUERY_EVENTS":return Object(s.a)(Object(s.a)({},e),{},{events:Object(x.a)(t.events)});case g:return Object(s.a)(Object(s.a)({},e),{},{listOpen:!0,list:[].concat(Object(x.a)(e.list),[t.events])});case f:return Object(s.a)(Object(s.a)({},e),{},{list:[].concat(Object(x.a)(e.list),Object(x.a)(t.events))})}};var S=n(1),_=["value"],C=Object(c.createContext)(),N=C.Provider,E=function(e){e.value;var t,n=Object(p.a)(e,_),a=(t={events:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(c.useReducer)(k,t)),i=Object(O.a)(a,2),r=i[0],o=i[1];return Object(S.jsx)(N,Object(s.a)({value:[r,o]},n))},T=function(){return Object(c.useContext)(C)};var A,I,L,D,P,$,R=n(362),F=n(59),z=n(384),U=Object(z.a)(A||(A=Object(F.a)(["\n\n {\n  events {\n    _id\n    name\n    description\n    locationName\n    link\n    locationAddress\n    imageLink\n    address2\n    state\n    zip\n    date\n\n  }\n}\n\n"]))),W=Object(z.a)(I||(I=Object(F.a)(["\n  {\n    user {\n      username\n      lists {\n        _id\n        savedDate\n        events {\n          _id\n          title\n          date\n          description\n          locationName\n          locationAddress\n          category {\n            _id\n          }\n          link\n          image\n        }\n      }\n    }\n  }\n"]))),Q=(Object(z.a)(L||(L=Object(F.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),Object(z.a)(D||(D=Object(F.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"])))),H=(Object(z.a)(P||(P=Object(F.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(z.a)($||($=Object(F.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"]))),n.p+"static/media/spinner.689d9a07.gif"),M=n(388),B=n(97),K=n.p+"static/media/logo.9d5b8347.png",V=(n(260),n(363)),Y=n(364),q=n(365),G=n(366),J=n(367),X=n(368),Z=n(369),ee=n(370),te=n(371),ne=n(372),ce=n(373),ae=n(374),ie=n(375),re=n(376),se={headerStyle:{textAlign:"center",fontFamily:"Rajdhani",fontSize:"50px"},listStyle:{listStyleType:"none"},cardStyle:{display:"flex",justifyContent:"center"}};var oe=function(){var e=T(),t=Object(O.a)(e,2),n=t[0],c=(t[1],n.currentCategory,Object(R.a)(U)),a=c.loading,i=c.data,r=i;return console.log("data",i),Object(S.jsxs)("div",{className:"evt-cards",children:[Object(S.jsx)("h2",{style:se.headerStyle,children:"Check out these upcoming events!"}),r?r.events.map((function(e){var t=e.description,n=e.name,c=e.locationAddress,a=e.locationName,i=e.link,r=(e.imageLink,e.address2),s=e.state,o=e.zip,l=e.date;return Object(S.jsx)("div",{className:"card card-1",children:Object(S.jsxs)(M.a,{style:{width:"18rem"},children:[Object(S.jsxs)(M.a.Content,{children:[Object(S.jsx)(M.a.Header,{children:n}),Object(S.jsx)(M.a.Meta,{children:a}),Object(S.jsx)(M.a.Description,{children:t})]}),Object(S.jsxs)(M.a.Content,{children:[Object(S.jsx)(M.a.Description,{children:c}),Object(S.jsx)(M.a.Description,{children:r}),Object(S.jsx)(M.a.Description,{children:s}),Object(S.jsx)(M.a.Description,{children:o}),Object(S.jsx)(M.a.Description,{children:l}),Object(S.jsx)("br",{}),Object(S.jsx)("a",{href:i,children:"Link To Event"})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)(V.a,{quote:"Check out this cool art event I found through Cadmium!",url:i,hashtag:"#CadmiumRVA",children:Object(S.jsx)(Y.a,{size:30,round:!0})}),Object(S.jsx)(q.a,{title:"Check out this cool art event I found through Cadmium",url:i,hashtag:"#CadmiumRVA",children:Object(S.jsx)(G.a,{size:30,round:!0})}),Object(S.jsx)(J.a,{title:"Check out this cool art event I found through Cadmium",url:i,children:Object(S.jsx)(X.a,{size:30,round:!0})}),Object(S.jsx)(Z.a,{title:"Check out this cool art event I found through Cadmium",url:i,children:Object(S.jsx)(ee.a,{size:30,round:!0})}),Object(S.jsx)(te.a,{title:"Check out this cool art event I found through Cadmium",url:i,children:Object(S.jsx)(ne.a,{size:30,round:!0})}),Object(S.jsx)(ce.a,{title:"Check out this cool art event I found through Cadmium",url:i,subject:"Your saved events via Cadmium",children:Object(S.jsx)(ae.a,{size:30,round:!0})}),Object(S.jsx)(ie.a,{title:"Check out this cool art event I found through Cadmium",url:i,children:Object(S.jsx)(re.a,{size:30,round:!0})})]}),Object(S.jsx)("br",{}),Object(S.jsxs)("button",{className:"heart icon hr large own-class",children:[Object(S.jsx)(B.a,{name:"heart",onClick:""}),"Save Event"]})]})})})):Object(S.jsx)("h3",{children:" You haven't added any events yet!"}),a?Object(S.jsx)("img",{src:H,alt:"loading"}):null]})};var le,de,je,ue=n(40),be=n.n(ue),he=n(62),Oe=n(221),me=n(377),pe=function(e){var t=e.item,n=T(),c=Object(O.a)(n,2)[1];return Object(S.jsxs)("div",{className:"flex-row",children:[Object(S.jsx)("div",{children:Object(S.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{children:[t.name,", $",t.price]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("span",{children:"Qty:"}),Object(S.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var n=e.target.value;"0"===n?(c({type:y,_id:t._id}),Object(m.idbPromise)("cart","delete",Object(s.a)({},t))):(c({type:w,_id:t._id,purchaseQuantity:parseInt(n)}),Object(m.idbPromise)("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(n)})))}}),Object(S.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){c({type:y,_id:e._id}),Object(m.idbPromise)("cart","delete",Object(s.a)({},e))}(t)},children:"\ud83d\uddd1\ufe0f"})]})]})]})},xe=n(32),ve=n(33),ge=n(191),fe=n.n(ge),ye=new(function(){function e(){Object(xe.a)(this,e)}return Object(ve.a)(e,[{key:"getProfile",value:function(){return fe()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return fe()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),we=(n(269),Object(Oe.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),ke=function(){var e=T(),t=Object(O.a)(e,2),n=t[0],a=t[1],i=Object(me.a)(Q),r=Object(O.a)(i,2),s=r[0],o=r[1].data;function l(){a({type:"TOGGLE_CART"})}return Object(c.useEffect)((function(){o&&we.then((function(e){e.redirectToCheckout({sessionId:o.checkout.session})}))}),[o]),Object(c.useEffect)((function(){function e(){return(e=Object(he.a)(be.a.mark((function e(){var t;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.idbPromise)("cart","get");case 2:t=e.sent,a({type:f,events:Object(x.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.cart.length||function(){e.apply(this,arguments)}()}),[n.cart.length,a]),n.cartOpen?Object(S.jsxs)("div",{className:"cart",children:[Object(S.jsx)("div",{className:"close",onClick:l,children:"[close]"}),Object(S.jsx)("h2",{children:"Event List"}),n.cart.length?Object(S.jsxs)("div",{children:[n.cart.map((function(e){return Object(S.jsx)(pe,{item:e},e._id)})),Object(S.jsxs)("div",{className:"flex-row space-between",children:[Object(S.jsxs)("strong",{children:["Total: $",function(){var e=0;return n.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]}),ye.loggedIn()?Object(S.jsx)("button",{onClick:function(){var e=[];n.cart.forEach((function(t){for(var n=0;n<t.purchaseQuantity;n++)e.push(t._id)})),s({variables:{events:e}})},children:"Map Events"}):Object(S.jsx)("span",{children:"(log in to check out)"})]})]}):Object(S.jsxs)("h3",{children:[Object(S.jsx)("span",{role:"img","aria-label":"shocked",children:"\ud83d\ude31"}),"You haven't added anything to your list yet!"]})]}):Object(S.jsx)("div",{className:"cart-closed",onClick:l,children:Object(S.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83d\uded2"})})},Se=function(){return Object(S.jsxs)("div",{className:"container sign-in-buttons",children:[Object(S.jsx)("center",{children:Object(S.jsx)("img",{src:K,alt:"logo"})}),Object(S.jsx)("div",{className:"container my-1 home-button",children:Object(S.jsx)("center",{children:Object(S.jsx)(l.b,{to:"/signup",children:Object(S.jsx)("h2",{className:"home-button",children:"Signup"})})})}),Object(S.jsx)("div",{className:"container my-1 ",children:Object(S.jsx)("center",{children:Object(S.jsx)(l.b,{to:"login",children:Object(S.jsx)("h2",{className:"home-button",children:"Login"})})})})]})},_e=n(76),Ce=n(390),Ne=Object(z.a)(le||(le=Object(F.a)(["\n  mutation addEvent($name: String, $description: String, $locationName: String,\n  $locationAddress: String, $imageLink: String, $link: String, $address2: String, $state: String, $zip: String, $date: String) {\n    addEvent(name: $name, description: $description, locationName: $locationName, locationAddress: $locationAddress,\n    link: $link, imageLink: $imageLink, address2: $address2, state: $state, zip: $zip, date: $date) {\n      _id\n      name\n      description\n      locationName\n      link\n      locationAddress\n      imageLink\n      address2\n      state\n      zip\n      date\n    }\n  }\n"]))),Ee=Object(z.a)(de||(de=Object(F.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),Te=Object(z.a)(je||(je=Object(F.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(\n      username: $username\n\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),Ae=n(386),Ie=n(380),Le=n(381),De=n(382),Pe=n(341),$e=n(223),Re=n.n($e),Fe=(n(270),{titleStyle:{textAlign:"center",fontFamily:"Rajdhani",fontSize:"50px",paddingBottom:"50px"},listStyle:{listStyleType:"none"}}),ze=[{key:"g",text:"Gallery/Museum Opening",value:"gallery/museum opening"},{key:"a",text:"Artist Talk",value:"artist talk"},{key:"o",text:"Open Studios",value:"open studios"},{key:"f",text:"Film Screening",value:"film screening"},{key:"p",text:"Performance",value:"performance"}];var Ue=function(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),n=(t[0],t[1]),a=Object(c.useState)({}),i=Object(O.a)(a,2),r=i[0],l=i[1],d=Object(o.f)(),j=Object(Ce.a)(Ne),u=Object(O.a)(j,1)[0],b=function(e){console.log(e.target.name);var t=e.target,n=t.name,c=t.value;(n||c)&&l((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(_e.a)({},n,c))}))};console.log(r);var h=function(){var e=Object(he.a)(be.a.mark((function e(t){var n,c;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,console.log("form state",r),n=r.date.toLocaleString(),e.next=6,u({variables:{name:r.name,locationName:r.locationName,locationAddress:r.streetAddress,description:r.eventDescription,link:r.link,imageLink:r.imageLink,address2:r.address2,state:r.state,zip:r.zip,date:n}});case 6:return c=e.sent,d.push("/events"),console.log("what is this",c),e.abrupt("return",c);case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsx)("div",{className:"form-container",children:Object(S.jsx)(Ae.a,{onSubmit:h,children:Object(S.jsxs)("div",{className:"form-margin-style",children:[Object(S.jsx)("h1",{style:Fe.titleStyle,children:"Add Your Art Event Here!"}),Object(S.jsxs)(Ae.a.Group,{widths:"equal",className:"form-text",children:[Object(S.jsx)(Ae.a.Field,{onChange:function(e){b(e)},control:Ie.a,name:"name",label:"Event Name",placeholder:"Event Name"}),Object(S.jsx)(Ae.a.Field,{onChange:function(e){b(e)},control:Ie.a,name:"locationName",label:"Location Name",placeholder:"Location Name"}),Object(S.jsx)(Ae.a.Field,{onChange:function(e){b(e)},name:"eventType",control:Le.a,label:"Event Type",options:ze,placeholder:"Event Type",className:"form-text"})]}),Object(S.jsxs)(Ae.a.Group,{children:[Object(S.jsx)(Ae.a.Input,{onChange:function(e){b(e)},name:"streetAddress",label:"Street",placeholder:"Enter a Location",width:15}),Object(S.jsx)(Ae.a.Input,{onChange:function(e){b(e)},name:"address2",label:"Address",width:8}),Object(S.jsx)(Ae.a.Input,{onChange:function(e){b(e)},name:"city",label:"City",placeholder:"City",width:15}),Object(S.jsx)(Ae.a.Input,{onChange:function(e){b(e)},name:"state",label:"State",placeholder:"State",width:10}),Object(S.jsx)(Ae.a.Input,{onChange:function(e){b(e)},name:"zip",label:"Zip",placeholder:"Zip",width:10})]}),Object(S.jsx)(Ae.a.Group,{children:Object(S.jsxs)(Ae.a.Field,{children:[Object(S.jsx)("label",{children:"Date / Time"}),Object(S.jsx)(Re.a,{selected:r.date,onChange:function(e){n(e),console.log(e),b({target:{name:"date",value:e}})},showTimeSelect:!0,className:"date-picker",dateFormat:"MMMM d, yyyy h:mm"})]})}),Object(S.jsx)(Ae.a.Group,{children:Object(S.jsx)(Ae.a.Input,{onChange:function(e){b(e)},name:"link",label:"Link",placeholder:"Link",width:12})}),Object(S.jsx)(Ae.a.Group,{children:Object(S.jsx)(Ae.a.Input,{onChange:function(e){b(e)},name:"imageLink",label:"Image Link",placeholder:"Image Link",width:12})}),Object(S.jsx)(Ae.a.Field,{onChange:function(e){b(e)},name:"eventDescription",control:De.a,label:"Event Description",placeholder:"Tell us more about your event..."}),Object(S.jsx)(Ae.a.Field,{control:Pe.a,type:"submit",children:"Submit"})]})})})};var We=function(){var e=T(),t=Object(O.a)(e,2),n=t[0],a=t[1],i=Object(o.g)().id,r=Object(c.useState)({}),d=Object(O.a)(r,2),j=d[0],u=d[1],b=Object(R.a)(U),h=b.loading,p=b.data,x=n.events,f=n.cart;return Object(c.useEffect)((function(){x.length?u(x.find((function(e){return e._id===i}))):p?(a({type:v,events:p.events}),p.events.forEach((function(e){Object(m.idbPromise)("events","put",e)}))):h||Object(m.idbPromise)("events","get").then((function(e){a({type:v,events:e})}))}),[x,p,h,a,i]),Object(S.jsxs)(S.Fragment,{children:[j&&f?Object(S.jsxs)("div",{className:"container my-1",children:[Object(S.jsx)(l.b,{to:"/",children:"\u2190 Back to Events"}),Object(S.jsx)("h2",{children:j.name}),Object(S.jsx)("p",{children:j.description}),Object(S.jsx)("p",{children:j.date}),Object(S.jsx)("p",{children:j.locationName}),Object(S.jsx)("p",{children:j.link}),Object(S.jsx)("p",{children:j.category}),Object(S.jsx)("p",{children:j.imageLink}),Object(S.jsx)("p",{children:j.locationAddress}),Object(S.jsxs)("p",{children:[Object(S.jsx)("button",{onClick:function(){var e=f.find((function(e){return e._id===i}));e?(a({type:w,_id:i,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),Object(m.idbPromise)("cart","put",Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(a({type:g,event:Object(s.a)(Object(s.a)({},j),{},{purchaseQuantity:1})}),Object(m.idbPromise)("cart","put",Object(s.a)(Object(s.a)({},j),{},{purchaseQuantity:1})))},children:"Add to Cart"}),Object(S.jsx)("button",{disabled:!f.find((function(e){return e._id===j._id})),onClick:function(){a({type:y,_id:j._id}),Object(m.idbPromise)("cart","delete",Object(s.a)({},j))},children:"Remove from List"})]}),Object(S.jsx)("img",{src:"/images/".concat(j.image),alt:j.name})]}):null,h?Object(S.jsx)("img",{src:H,alt:"loading"}):null,Object(S.jsx)(ke,{})]})};var Qe=function(e){var t=e.children;return Object(S.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},He=function(){return Object(S.jsx)("div",{children:Object(S.jsxs)(Qe,{children:[Object(S.jsx)("h1",{children:"404 Page Not Found"}),Object(S.jsx)("h1",{children:Object(S.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})};var Me=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(O.a)(t,2),a=n[0],i=n[1],r=Object(Ce.a)(Ee),o=Object(O.a)(r,2),l=o[0],d=o[1].error,j=function(){var e=Object(he.a)(be.a.mark((function e(t){var n,c;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,l({variables:{email:a.email,password:a.password}});case 4:n=e.sent,c=n.data.login.token,ye.login(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),u=function(e){var t=e.target,n=t.name,c=t.value;i(Object(s.a)(Object(s.a)({},a),{},Object(_e.a)({},n,c)))};return Object(S.jsxs)("div",{className:"container my-1",children:[Object(S.jsx)("center",{children:Object(S.jsx)("h2",{children:"Login"})}),Object(S.jsxs)("form",{onSubmit:j,children:[Object(S.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(S.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(S.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:u})]}),Object(S.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(S.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(S.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:u})]}),d?Object(S.jsx)("div",{children:Object(S.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(S.jsx)("div",{className:"flex-row flex-end",children:Object(S.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var Be=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(O.a)(t,2),a=n[0],i=n[1],r=Object(Ce.a)(Te),l=Object(O.a)(r,1)[0],d=(Object(o.f)(),function(){var e=Object(he.a)(be.a.mark((function e(t){var n,c;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l({variables:{email:a.email,password:a.password,username:a.username}});case 3:n=e.sent,c=n.data.addUser.token,ye.login(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j=function(e){var t=e.target,n=t.name,c=t.value;i(Object(s.a)(Object(s.a)({},a),{},Object(_e.a)({},n,c)))};return Object(S.jsxs)("div",{className:"container my-1",children:[Object(S.jsx)("h2",{children:"Signup"}),Object(S.jsxs)("form",{onSubmit:d,children:[Object(S.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(S.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(S.jsx)("input",{placeholder:"username",name:"username",type:"username",id:"username",onChange:j})]}),Object(S.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(S.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(S.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:j})]}),Object(S.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(S.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(S.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:j})]}),Object(S.jsx)("div",{className:"flex-row flex-end",children:Object(S.jsx)("button",{type:"submit",className:"signup-button",children:"Submit"})})]})]})};var Ke=function(){return Object(S.jsxs)("header",{className:"flex-row px-1",children:[Object(S.jsx)("h1",{className:"nav-items-style",children:Object(S.jsxs)(l.b,{to:"/",children:[Object(S.jsx)("span",{role:"img","aria-label":"cadmium logo"}),Object(S.jsx)(l.b,{to:"./public/images/cadmium-images/logo.png"}),"Home"]})}),Object(S.jsx)("nav",{children:ye.loggedIn()?Object(S.jsxs)("ul",{className:"flex-row",children:[Object(S.jsx)("li",{className:"mx-1 nav-items-style",children:Object(S.jsx)(l.b,{to:"/event-form",children:"Add an Event!"})}),Object(S.jsx)("li",{className:"nav-items-style",children:Object(S.jsx)(l.b,{to:"/events",children:"Events"})}),Object(S.jsx)("li",{className:"mx-1 nav-items-style",children:Object(S.jsx)(l.b,{to:"/",onClick:function(){return ye.logout()},children:"Logout"})})]}):Object(S.jsxs)("ul",{className:"flex-row list-decoration",children:[Object(S.jsx)("li",{className:"mx-1 fix-margin",children:Object(S.jsx)(l.b,{to:"/signup",children:"Signup"})}),Object(S.jsx)("li",{className:"mx-1 nav-items-style",children:Object(S.jsx)(l.b,{to:"/login",children:"Login"})})]})})]})};var Ve=function(){var e=Object(Ce.a)(Ne),t=Object(O.a)(e,1)[0];return Object(c.useEffect)((function(){function e(){return(e=Object(he.a)(be.a.mark((function e(){var n,c,a,i;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.idbPromise)("cart","get");case 2:if(n=e.sent,!(c=n.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{events:c}});case 7:a=e.sent,i=a.data,i.addEvent.events.forEach((function(e){Object(m.idbPromise)("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(S.jsx)("div",{children:Object(S.jsxs)(Qe,{children:[Object(S.jsx)("h1",{children:"Success!"}),Object(S.jsx)("h2",{children:"Your event was added!"}),Object(S.jsx)("h2",{children:"You will now be redirected to the events page."})]})})};var Ye=function(){var e,t=Object(R.a)(W).data;return t&&(e=t.user),Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:"container my-1",children:[Object(S.jsx)(l.b,{to:"/",children:"\u2190 Back to Events Page"}),e?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(S.jsxs)("div",{className:"my-2",children:[Object(S.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(S.jsx)("div",{className:"flex-row",children:e.products.map((function(e,t){var n=e._id,c=e.image,a=e.name,i=e.price;return Object(S.jsxs)("div",{className:"card px-1 py-1",children:[Object(S.jsxs)(l.b,{to:"/products/".concat(n),children:[Object(S.jsx)("img",{alt:a,src:"/images/".concat(c)}),Object(S.jsx)("p",{children:a})]}),Object(S.jsx)("div",{children:Object(S.jsxs)("span",{children:["$",i]})})]},t)}))})]},e._id)}))]}):null]})})},qe=n(229);var Ge=function(){var e=Object(c.useState)({width:700,height:700,latitude:37.54129,longitude:-77.434769,zoom:12}),t=Object(O.a)(e,2),n=t[0],a=t[1];return console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})),console.log("map",Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MAPBOX_ACCESS_TOKEN),Object(S.jsx)(qe.a,Object(s.a)(Object(s.a)({},n),{},{mapboxApiAccessToken:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MAPBOX_ACCESS_TOKEN,onViewportChange:function(e){return a(e)}}))},Je=(n.p,Object(d.a)({uri:"/graphql"})),Xe=Object(h.a)((function(e,t){var n=t.headers,c=localStorage.getItem("id_token");return{headers:Object(s.a)(Object(s.a)({},n),{},{authorization:c?"Bearer ".concat(c):""})}})),Ze=new j.a({link:Xe.concat(Je),cache:new u.a}),et=function(e){var t=e.children;Object(o.f)();return t};var tt=function(){return Object(S.jsx)(b.a,{client:Ze,children:Object(S.jsx)(l.a,{children:Object(S.jsx)("div",{children:Object(S.jsxs)(E,{children:[Object(S.jsx)(et,{children:Object(S.jsx)(Ke,{})}),Object(S.jsxs)(o.c,{children:[Object(S.jsx)(o.a,{exact:!0,path:"/",component:Se}),Object(S.jsx)(o.a,{exact:!0,path:"/login",component:Me}),Object(S.jsx)(o.a,{exact:!0,path:"/signup",component:Be}),Object(S.jsx)(o.a,{exact:!0,path:"/success",component:Ve}),Object(S.jsx)(o.a,{exact:!0,path:"/orderHistory",component:Ye}),Object(S.jsx)(o.a,{exact:!0,path:"/map",component:Ge}),Object(S.jsx)(o.a,{exact:!0,path:"/products/:id",component:We}),Object(S.jsx)(o.a,{exact:!0,path:"/event-form",component:Ue}),Object(S.jsx)(o.a,{exact:!0,path:"/events",component:oe}),Object(S.jsx)(o.a,{component:He})]})]})})})})},nt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ct(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(tt,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");nt?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ct(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ct(t,e)}))}}()}},[[334,1,2]]]);
//# sourceMappingURL=main.75ab0274.chunk.js.map