(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{qq66:function(n,l,e){"use strict";e.r(l);var u=e("8Y7J");class t{}var o=e("pMnS"),r=e("MKJQ"),a=e("sZkV"),i=e("s7LF"),s=e("SVse"),b=e("iInd"),d=e("mrSG"),h=e("MKys");class g{constructor(n,l,e,u,t,o){this.router=n,this.authGuard=l,this.storage=e,this.platform=u,this.loaderController=t,this.alertController=o,this.buttonPlacement="start",(this.platform.is("mobileweb")||this.platform.is("desktop"))&&(this.buttonPlacement="end")}ngOnInit(){}presentLoading(){return d.a(this,void 0,void 0,(function*(){const n=yield this.loaderController.create({backdropDismiss:!0,message:"Registering..."});yield n.present(),yield n.onDidDismiss(),console.log("Loading dismissed!")}))}presentAlert(){return d.a(this,void 0,void 0,(function*(){const n=yield this.alertController.create({header:"Error",subHeader:"Trouble Registering",message:"Make sure your credentials are correct",buttons:["OK"]});yield n.present()}))}moveFocus(n){n.setFocus()}register(n){this.authGuard.authInfo.firstName&&this.authGuard.authInfo.lastName&&this.authGuard.authInfo.email&&this.authGuard.authInfo.password?(this.presentLoading(),this.authGuard.register(n).subscribe(n=>{this.authGuard.userInfo=n,sessionStorage.setItem("userId",this.authGuard.userInfo.userId),sessionStorage.setItem("token",this.authGuard.userInfo.token),this.storage.set("userId",this.authGuard.userInfo.userId),this.storage.set("token",this.authGuard.userInfo.userId),this.authGuard.userId=sessionStorage.getItem("userId"),this.authGuard.userToken=sessionStorage.getItem("token"),console.log("User Authenticated Info",this.authGuard.userInfo),this.authGuard.resetAuth(),this.loaderController.dismiss(),this.router.navigate(["/home"])},n=>{this.loaderController.dismiss(),this.presentAlert()})):(this.loaderController.dismiss(),this.presentAlert())}}var c=e("xgBC"),p=u.nb({encapsulation:0,styles:[["p[_ngcontent-%COMP%]{text-align:center}#bottom-p[_ngcontent-%COMP%]{margin-bottom:15%}img[_ngcontent-%COMP%]{width:100%;height:auto}ion-content[_ngcontent-%COMP%]{--background:url('abstract-white-triangle-shapes-background_1035-17544.c6f8c5f5c2a68859749a.jpg') no-repeat center center/cover}@media screen and (min-width:901px){ion-card[_ngcontent-%COMP%]{width:60vw;margin-left:auto;margin-right:auto}}"]],data:{}});function m(n){return u.Gb(0,[(n()(),u.pb(0,0,null,null,10,"ion-header",[],null,null,null,r.V,r.n)),u.ob(1,49152,null,0,a.z,[u.h,u.k,u.x],null,null),(n()(),u.pb(2,0,null,0,8,"ion-toolbar",[["color","primary"],["mode","ios"]],null,null,null,r.pb,r.H)),u.ob(3,49152,null,0,a.xb,[u.h,u.k,u.x],{color:[0,"color"],mode:[1,"mode"]},null),(n()(),u.pb(4,0,null,0,3,"ion-buttons",[],[[8,"slot",0]],null,null,r.K,r.c)),u.ob(5,49152,null,0,a.j,[u.h,u.k,u.x],null,null),(n()(),u.pb(6,0,null,0,1,"ion-menu-button",[["autoHide","false"],["menuId","first"]],null,null,null,r.bb,r.u)),u.ob(7,49152,null,0,a.P,[u.h,u.k,u.x],{autoHide:[0,"autoHide"]},null),(n()(),u.pb(8,0,null,0,2,"ion-title",[],null,null,null,r.ob,r.G)),u.ob(9,49152,null,0,a.vb,[u.h,u.k,u.x],null,null),(n()(),u.Fb(-1,0,["Register"])),(n()(),u.pb(11,0,null,null,77,"ion-content",[],null,null,null,r.R,r.j)),u.ob(12,49152,null,0,a.s,[u.h,u.k,u.x],null,null),(n()(),u.pb(13,0,null,0,69,"ion-card",[["color","tertiary"]],null,null,null,r.P,r.d)),u.ob(14,49152,null,0,a.k,[u.h,u.k,u.x],{color:[0,"color"]},null),(n()(),u.pb(15,0,null,0,0,"img",[["src","../../assets/ionic_5.jpeg"]],null,null,null,null,null)),(n()(),u.pb(16,0,null,0,66,"ion-card-content",[],null,null,null,r.L,r.e)),u.ob(17,49152,null,0,a.l,[u.h,u.k,u.x],null,null),(n()(),u.pb(18,0,null,0,14,"ion-item",[],null,null,null,r.Y,r.q)),u.ob(19,49152,null,0,a.F,[u.h,u.k,u.x],null,null),(n()(),u.pb(20,0,null,0,5,"ion-label",[["position","stacked"]],null,null,null,r.Z,r.r)),u.ob(21,49152,null,0,a.L,[u.h,u.k,u.x],{position:[0,"position"]},null),(n()(),u.Fb(-1,0,["First Name "])),(n()(),u.pb(23,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,r.mb,r.E)),u.ob(24,49152,null,0,a.sb,[u.h,u.k,u.x],{color:[0,"color"]},null),(n()(),u.Fb(-1,0,["*"])),(n()(),u.pb(26,0,null,0,6,"ion-input",[["clearInput","true"],["enterkeyhint","next"],["inputmode","text"],["name","firstName"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup.enter"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==u.Ab(n,27)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==u.Ab(n,27)._handleInputEvent(e.target)&&t),"ngModelChange"===l&&(t=!1!==(o.authGuard.authInfo.firstName=e)&&t),"keyup.enter"===l&&(t=!1!==o.moveFocus(u.Ab(n,47))&&t),t}),r.X,r.p)),u.ob(27,16384,null,0,a.Ib,[u.k],null,null),u.Cb(1024,null,i.b,(function(n){return[n]}),[a.Ib]),u.ob(29,671744,null,0,i.e,[[8,null],[8,null],[8,null],[6,i.b]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Cb(2048,null,i.c,null,[i.e]),u.ob(31,16384,null,0,i.d,[[4,i.c]],null,null),u.ob(32,49152,null,0,a.E,[u.h,u.k,u.x],{clearInput:[0,"clearInput"],enterkeyhint:[1,"enterkeyhint"],inputmode:[2,"inputmode"],name:[3,"name"]},null),(n()(),u.pb(33,0,null,0,14,"ion-item",[],null,null,null,r.Y,r.q)),u.ob(34,49152,null,0,a.F,[u.h,u.k,u.x],null,null),(n()(),u.pb(35,0,null,0,5,"ion-label",[["position","stacked"]],null,null,null,r.Z,r.r)),u.ob(36,49152,null,0,a.L,[u.h,u.k,u.x],{position:[0,"position"]},null),(n()(),u.Fb(-1,0,["Last Name "])),(n()(),u.pb(38,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,r.mb,r.E)),u.ob(39,49152,null,0,a.sb,[u.h,u.k,u.x],{color:[0,"color"]},null),(n()(),u.Fb(-1,0,["*"])),(n()(),u.pb(41,0,null,0,6,"ion-input",[["clearInput","true"],["enterkeyhint","next"],["inputmode","text"],["name","lastName"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup.enter"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==u.Ab(n,42)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==u.Ab(n,42)._handleInputEvent(e.target)&&t),"ngModelChange"===l&&(t=!1!==(o.authGuard.authInfo.lastName=e)&&t),"keyup.enter"===l&&(t=!1!==o.moveFocus(u.Ab(n,62))&&t),t}),r.X,r.p)),u.ob(42,16384,null,0,a.Ib,[u.k],null,null),u.Cb(1024,null,i.b,(function(n){return[n]}),[a.Ib]),u.ob(44,671744,null,0,i.e,[[8,null],[8,null],[8,null],[6,i.b]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Cb(2048,null,i.c,null,[i.e]),u.ob(46,16384,null,0,i.d,[[4,i.c]],null,null),u.ob(47,49152,[["b",4]],0,a.E,[u.h,u.k,u.x],{clearInput:[0,"clearInput"],enterkeyhint:[1,"enterkeyhint"],inputmode:[2,"inputmode"],name:[3,"name"]},null),(n()(),u.pb(48,0,null,0,14,"ion-item",[],null,null,null,r.Y,r.q)),u.ob(49,49152,null,0,a.F,[u.h,u.k,u.x],null,null),(n()(),u.pb(50,0,null,0,5,"ion-label",[["position","stacked"]],null,null,null,r.Z,r.r)),u.ob(51,49152,null,0,a.L,[u.h,u.k,u.x],{position:[0,"position"]},null),(n()(),u.Fb(-1,0,["Email "])),(n()(),u.pb(53,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,r.mb,r.E)),u.ob(54,49152,null,0,a.sb,[u.h,u.k,u.x],{color:[0,"color"]},null),(n()(),u.Fb(-1,0,["*"])),(n()(),u.pb(56,0,null,0,6,"ion-input",[["clearInput","true"],["enterkeyhint","next"],["inputmode","email"],["name","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup.enter"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==u.Ab(n,57)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==u.Ab(n,57)._handleInputEvent(e.target)&&t),"ngModelChange"===l&&(t=!1!==(o.authGuard.authInfo.email=e)&&t),"keyup.enter"===l&&(t=!1!==o.moveFocus(u.Ab(n,77))&&t),t}),r.X,r.p)),u.ob(57,16384,null,0,a.Ib,[u.k],null,null),u.Cb(1024,null,i.b,(function(n){return[n]}),[a.Ib]),u.ob(59,671744,null,0,i.e,[[8,null],[8,null],[8,null],[6,i.b]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Cb(2048,null,i.c,null,[i.e]),u.ob(61,16384,null,0,i.d,[[4,i.c]],null,null),u.ob(62,49152,[["c",4]],0,a.E,[u.h,u.k,u.x],{clearInput:[0,"clearInput"],enterkeyhint:[1,"enterkeyhint"],inputmode:[2,"inputmode"],name:[3,"name"]},null),(n()(),u.pb(63,0,null,0,14,"ion-item",[],null,null,null,r.Y,r.q)),u.ob(64,49152,null,0,a.F,[u.h,u.k,u.x],null,null),(n()(),u.pb(65,0,null,0,5,"ion-label",[["position","stacked"]],null,null,null,r.Z,r.r)),u.ob(66,49152,null,0,a.L,[u.h,u.k,u.x],{position:[0,"position"]},null),(n()(),u.Fb(-1,0,["Password "])),(n()(),u.pb(68,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,r.mb,r.E)),u.ob(69,49152,null,0,a.sb,[u.h,u.k,u.x],{color:[0,"color"]},null),(n()(),u.Fb(-1,0,["*"])),(n()(),u.pb(71,0,null,0,6,"ion-input",[["clearInput","true"],["enterkeyhint","go"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup.enter"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==u.Ab(n,72)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==u.Ab(n,72)._handleInputEvent(e.target)&&t),"ngModelChange"===l&&(t=!1!==(o.authGuard.authInfo.password=e)&&t),"keyup.enter"===l&&(t=!1!==o.register(o.authGuard.authInfo)&&t),t}),r.X,r.p)),u.ob(72,16384,null,0,a.Ib,[u.k],null,null),u.Cb(1024,null,i.b,(function(n){return[n]}),[a.Ib]),u.ob(74,671744,null,0,i.e,[[8,null],[8,null],[8,null],[6,i.b]],{model:[0,"model"]},{update:"ngModelChange"}),u.Cb(2048,null,i.c,null,[i.e]),u.ob(76,16384,null,0,i.d,[[4,i.c]],null,null),u.ob(77,49152,[["d",4]],0,a.E,[u.h,u.k,u.x],{clearInput:[0,"clearInput"],enterkeyhint:[1,"enterkeyhint"],type:[2,"type"]},null),(n()(),u.pb(78,0,null,0,4,"ion-item",[["lines","none"]],null,null,null,r.Y,r.q)),u.ob(79,49152,null,0,a.F,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(n()(),u.pb(80,0,null,0,2,"ion-button",[["fill","outline"],["slot","end"]],null,[[null,"click"]],(function(n,l,e){var u=!0,t=n.component;return"click"===l&&(u=!1!==t.register(t.authGuard.authInfo)&&u),u}),r.J,r.b)),u.ob(81,49152,null,0,a.i,[u.h,u.k,u.x],{fill:[0,"fill"]},null),(n()(),u.Fb(-1,0,["Register"])),(n()(),u.pb(83,0,null,0,5,"p",[["id","bottom-p"]],null,null,null,null,null)),(n()(),u.Fb(-1,null,[" Already have an account? "])),(n()(),u.pb(85,0,null,null,3,"a",[["routerDirection","forward"],["routerLink","/login"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==u.Ab(n,86).onClick(e)&&t),"click"===l&&(t=!1!==u.Ab(n,87).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t}),null,null)),u.ob(86,737280,null,0,a.Gb,[s.g,a.Db,u.k,b.m,[2,b.n]],{routerDirection:[0,"routerDirection"]},null),u.ob(87,671744,null,0,b.o,[b.m,b.a,s.g],{routerLink:[0,"routerLink"]},null),(n()(),u.Fb(-1,null,["Go To Login"]))],(function(n,l){var e=l.component;n(l,3,0,"primary","ios"),n(l,7,0,"false"),n(l,14,0,"tertiary"),n(l,21,0,"stacked"),n(l,24,0,"danger"),n(l,29,0,"firstName",e.authGuard.authInfo.firstName),n(l,32,0,"true","next","text","firstName"),n(l,36,0,"stacked"),n(l,39,0,"danger"),n(l,44,0,"lastName",e.authGuard.authInfo.lastName),n(l,47,0,"true","next","text","lastName"),n(l,51,0,"stacked"),n(l,54,0,"danger"),n(l,59,0,"email",e.authGuard.authInfo.email),n(l,62,0,"true","next","email","email"),n(l,66,0,"stacked"),n(l,69,0,"danger"),n(l,74,0,e.authGuard.authInfo.password),n(l,77,0,"true","go","password"),n(l,79,0,"none"),n(l,81,0,"outline"),n(l,86,0,"forward"),n(l,87,0,"/login")}),(function(n,l){n(l,4,0,l.component.buttonPlacement),n(l,26,0,u.Ab(l,31).ngClassUntouched,u.Ab(l,31).ngClassTouched,u.Ab(l,31).ngClassPristine,u.Ab(l,31).ngClassDirty,u.Ab(l,31).ngClassValid,u.Ab(l,31).ngClassInvalid,u.Ab(l,31).ngClassPending),n(l,41,0,u.Ab(l,46).ngClassUntouched,u.Ab(l,46).ngClassTouched,u.Ab(l,46).ngClassPristine,u.Ab(l,46).ngClassDirty,u.Ab(l,46).ngClassValid,u.Ab(l,46).ngClassInvalid,u.Ab(l,46).ngClassPending),n(l,56,0,u.Ab(l,61).ngClassUntouched,u.Ab(l,61).ngClassTouched,u.Ab(l,61).ngClassPristine,u.Ab(l,61).ngClassDirty,u.Ab(l,61).ngClassValid,u.Ab(l,61).ngClassInvalid,u.Ab(l,61).ngClassPending),n(l,71,0,u.Ab(l,76).ngClassUntouched,u.Ab(l,76).ngClassTouched,u.Ab(l,76).ngClassPristine,u.Ab(l,76).ngClassDirty,u.Ab(l,76).ngClassValid,u.Ab(l,76).ngClassInvalid,u.Ab(l,76).ngClassPending),n(l,85,0,u.Ab(l,87).target,u.Ab(l,87).href)}))}function k(n){return u.Gb(0,[(n()(),u.pb(0,0,null,null,1,"app-register",[],null,null,null,m,p)),u.ob(1,114688,null,0,g,[b.m,h.a,c.b,a.Eb,a.Bb,a.a],null,null)],(function(n,l){n(l,1,0)}),null)}var C=u.lb("app-register",g,k,{},{},[]);class f{}e.d(l,"RegisterPageModuleNgFactory",(function(){return I}));var I=u.mb(t,[],(function(n){return u.xb([u.yb(512,u.j,u.X,[[8,[o.a,C]],[3,u.j],u.v]),u.yb(4608,s.k,s.j,[u.s,[2,s.q]]),u.yb(4608,i.g,i.g,[]),u.yb(4608,a.b,a.b,[u.x,u.g]),u.yb(4608,a.Cb,a.Cb,[a.b,u.j,u.p]),u.yb(4608,a.Fb,a.Fb,[a.b,u.j,u.p]),u.yb(1073742336,s.b,s.b,[]),u.yb(1073742336,i.f,i.f,[]),u.yb(1073742336,i.a,i.a,[]),u.yb(1073742336,a.zb,a.zb,[]),u.yb(1073742336,b.p,b.p,[[2,b.u],[2,b.m]]),u.yb(1073742336,f,f,[]),u.yb(1073742336,t,t,[]),u.yb(1024,b.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);