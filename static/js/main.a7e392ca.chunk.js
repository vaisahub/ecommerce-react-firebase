(this["webpackJsonpwear-store"]=this["webpackJsonpwear-store"]||[]).push([[0],{31:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),c=n(32),r=n.n(c),s=(n(40),n(14)),o=n(15),l=n(17),b=n(16),d=(n(41),n(42),n(19)),p=n(23);n(61),n(44);p.a.initializeApp({apiKey:"AIzaSyAHefWeH_UianNV4j09C7ICkeGGWgOPvH4",authDomain:"ecommerce-react-firebase-9ab93.firebaseapp.com",projectId:"ecommerce-react-firebase-9ab93",storageBucket:"ecommerce-react-firebase-9ab93.appspot.com",messagingSenderId:"844064843056",appId:"1:844064843056:web:2bb74888f4616392e554f5",measurementId:"G-05X1W3TQ8Q"});var m=p.a.auth(),u=(p.a.firestore(),new p.a.auth.GoogleAuthProvider);u.setCustomParameters({prompt:"select_account"});var h=function(){return m.signInWithPopup(u)},j=(p.a,n(1)),g=function(e){var t=e.currentUser;return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("div",{className:"logo-container",children:Object(j.jsx)(d.b,{to:"/",children:Object(j.jsx)("img",{alt:"logo",className:"logo",src:"https://www.logomaker.com/wp-content/uploads/2019/01/iStock-687017552.jpg"})})}),Object(j.jsxs)("div",{className:"option-container",children:[Object(j.jsx)("div",{className:"option",children:Object(j.jsx)(d.b,{to:"/",className:"link",children:" Home "})}),Object(j.jsx)("div",{className:"option",children:Object(j.jsx)(d.b,{to:"/Shop",className:"link",children:" Shop"})}),Object(j.jsx)("div",{className:"option",children:t?Object(j.jsx)("div",{className:"link",onClick:function(){m.signOut()},children:" Sign out "}):Object(j.jsx)(d.b,{to:"/SignInSignUp",className:"link",children:" Login"})})]})]})},A=n(5),f=n(9),O=n(18),v=(n(51),n(52),Object(A.f)((function(e){var t=e.title,n=e.size,i=e.url,a=e.linkUrl,c=e.history,r=e.match;return Object(j.jsxs)("div",{className:"".concat(n," menu-item"),children:[Object(j.jsx)("div",{style:{backgroundImage:"url(".concat(i,")"),backgroundSize:"cover"},className:"background-img"}),Object(j.jsxs)("div",{className:"content",onClick:function(){c.push("".concat(r.url).concat(a))},children:[Object(j.jsx)("h1",{className:"title",children:t}),Object(j.jsx)("span",{className:"sub-title",children:"SHOP NOW"})]})]})}))),x=function(e){var t=e.menuList;return Object(j.jsx)("div",{className:"directory-menu",children:t.map((function(e){e.id;var t=Object(O.a)(e,["id"]);return Object(j.jsx)(v,Object(f.a)({},t))}))})},w=(n(53),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={menuList:[{title:"MASKS",id:1,size:"",linkUrl:"masks",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZmsqTxUmfD3gdixUQy8gOavS4yPw851CvA&usqp=CAU"},{title:"HATS",id:2,size:"",linkUrl:"",url:"https://thumbs.dreamstime.com/b/man-hat-well-groomed-bearded-gentleman-dark-background-male-fashion-menswear-retro-formal-suit-classic-style-outfit-151500976.jpg"},{title:"SNEAKERS",id:3,size:"",linkUrl:"",url:"data:image/jpeg;base64,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"},{title:"JACKETS",id:4,size:"",linkUrl:"",url:"https://i.pinimg.com/236x/62/33/6b/62336bc2ef61a0cb339070243fa9d3df.jpg"},{title:"MEN",id:5,size:"large",linkUrl:"",url:"https://thumbs.dreamstime.com/b/group-young-men-stylish-jeans-grey-background-166895382.jpg"},{title:"WOMEN",id:6,size:"large",linkUrl:"",url:"https://img.freepik.com/free-photo/three-young-beautiful-smiling-girls-trendy-summer-casual-jeans-clothes-sexy-carefree-women-posing-positive-models-sunglasses_158538-4730.jpg?size=626&ext=jpg"}]},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"home-page",children:Object(j.jsx)(x,{menuList:this.state.menuList})})}}]),n}(a.a.Component)),k=(n(54),[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}]),y=(n(55),function(e){var t=e.isGoogleSignIn,n=e.children,i=Object(O.a)(e,["isGoogleSignIn","children"]);return console.log(Object(f.a)({},i)),Object(j.jsxs)("button",Object(f.a)(Object(f.a)({className:"".concat(t?"google-color":""," custom-button")},i),{},{children:[" ",n," "]}))}),N=(n(56),function(e){var t=e.price,n=e.imageUrl,i=e.name;return Object(j.jsxs)("div",{className:"item",children:[Object(j.jsxs)("div",{className:"img-container",children:[Object(j.jsx)("div",{className:"item-img",style:{backgroundImage:"url(".concat(n,")"),backgroundSize:"cover"},children:"  "}),Object(j.jsx)("div",{className:"item-content",children:Object(j.jsx)(y,{children:"Add to cart"})})]}),Object(j.jsxs)("div",{className:"item-footer",children:[Object(j.jsxs)("div",{children:[" ",i]}),Object(j.jsxs)("div",{children:[" \u20b9",t," "]})]})]})}),U=(n(57),function(e){var t=e.title,n=e.items;return Object(j.jsxs)("div",{class:"collection-preview",children:[Object(j.jsx)("div",{className:"title",children:Object(j.jsx)("h2",{children:t})}),Object(j.jsx)("div",{class:"collections",children:n.filter((function(e,t){return t<4})).map((function(e){var t=e.id,n=Object(O.a)(e,["id"]);return Object(j.jsx)(N,Object(f.a)(Object(f.a)({},n),{},{children:" "}),t)}))})]})}),P=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={previewData:k},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{class:"shop-page",children:this.state.previewData.map((function(e){var t=e.id,n=Object(O.a)(e,["id"]);return Object(j.jsx)(U,Object(f.a)(Object(f.a)({},n),{},{children:" "}),t)}))})}}]),n}(a.a.Component),S=n(35),B=(n(58),n(22)),D=(n(31),n(59),function(e){var t=e.label,n=e.handleChange,i=Object(O.a)(e,["label","handleChange"]);return Object(j.jsxs)("div",{className:"group",children:[Object(j.jsx)("input",Object(f.a)({className:"form-input",onChange:n},i)),t?Object(j.jsxs)("label",{className:"".concat(i.value.length?"shrink":""," form-input-label"),children:[" ",t," "]}):null]})}),H=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleSubmit=function(t){t.preventDefault(),e.setState({email:"",password:""})},e.handleChange=function(t){var n=t.target,i=n.name,a=n.value;e.setState(Object(B.a)({},i,a))},e.state={email:"",password:""},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"sign-in",children:[Object(j.jsx)("h2",{children:"Already Have an account ?"}),Object(j.jsx)("p",{className:"sub-title",children:" sign in with ou email and password "}),Object(j.jsx)("div",{className:"sign-in-form",children:Object(j.jsxs)("form",{action:"",onSubmit:this.handleSubmit,children:[Object(j.jsx)(D,{label:"Email",name:"email",handleChange:this.handleChange,value:this.state.email,type:"email",required:!0}),Object(j.jsx)(D,{label:"Password",name:"password",handleChange:this.handleChange,value:this.state.password,type:"password",required:!0}),Object(j.jsxs)("div",{className:"button-group",children:[Object(j.jsx)(y,{type:"submit",children:"Sign in "}),Object(j.jsx)(y,{onClick:h,isGoogleSignIn:!0,children:" Sign In With Google"}),Object(j.jsx)(y,{onClick:this.props.changeSign,children:" Sign Up"})]})]})})]})}}]),n}(a.a.Component),E=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleSubmit=function(t){t.preventDefault(),e.setState({email:"",password:""})},e.handleChange=function(t){var n=t.target,i=n.name,a=n.value;e.setState(Object(B.a)({},i,a))},e.state={email:"",password:"",name:""},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"sign-in",children:[Object(j.jsx)("h2",{children:"You Don't Have an account ?"}),Object(j.jsx)("p",{className:"sub-title",children:" sign up with your email and password "}),Object(j.jsx)("div",{className:"sign-in-form",children:Object(j.jsxs)("form",{action:"",onSubmit:this.handleSubmit,children:[Object(j.jsx)(D,{label:"Username",name:"username",handleChange:this.handleChange,value:this.state.name,type:"text",required:!0}),Object(j.jsx)(D,{label:"Email",name:"email",handleChange:this.handleChange,value:this.state.email,type:"email",required:!0}),Object(j.jsx)(D,{label:"Password",name:"password",handleChange:this.handleChange,value:this.state.password,type:"password",required:!0}),Object(j.jsx)(y,{value:"submit form",type:"submit",children:"Sign up"}),Object(j.jsx)(y,{onClick:this.props.changeSign,children:" Sign in "})]})})]})}}]),n}(a.a.Component);var z=function(){var e=Object(i.useState)(!0),t=Object(S.a)(e,2),n=t[0],a=t[1],c=function(){a(!n)};return Object(j.jsxs)("div",{className:"sign-part",children:[n&&Object(j.jsx)("div",{className:"sign-in-part",children:Object(j.jsx)(H,{changeSign:c})}),!n&&Object(j.jsx)("div",{className:"sign-up-part",children:Object(j.jsx)(E,{changeSign:c})})]})},M=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).unSubsCribeFromAuth=null,e.state={currentUser:null},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.unSubsCribeFromAuth=m.onAuthStateChanged((function(t){e.setState({currentUser:t}),console.log(t),e.props.history.push("/")}))}},{key:"componentWillUnmount",value:function(){this.unSubsCribeFromAuth()}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(g,{currentUser:this.state.currentUser}),Object(j.jsxs)(A.c,{children:[Object(j.jsx)(A.a,{exact:!0,path:"/",component:w}),Object(j.jsx)(A.a,{exact:!0,path:"/Shop",component:P}),Object(j.jsx)(A.a,{exact:!0,path:"/SignInSignUp",component:z})]})]})}}]),n}(a.a.Component),Q=Object(A.f)(M),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(d.a,{children:Object(j.jsx)(Q,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ecommerce-react-firebase",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/ecommerce-react-firebase","/service-worker.js");R?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):C(t,e)}))}}(),I()}},[[60,1,2]]]);
//# sourceMappingURL=main.a7e392ca.chunk.js.map