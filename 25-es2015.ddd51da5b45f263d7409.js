(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{qq66:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var o=u("pMnS"),a=u("MKJQ"),r=u("sZkV"),i=u("s7LF"),s=u("SVse"),b=u("iInd"),d=u("mrSG"),g=u("MKys");class h{constructor(l,n,u,e,t,o){this.router=l,this.authGuard=n,this.storage=u,this.platform=e,this.loaderController=t,this.alertController=o,this.buttonPlacement="start",(this.platform.is("mobileweb")||this.platform.is("desktop"))&&(this.buttonPlacement="end")}ngOnInit(){}presentLoading(){return d.a(this,void 0,void 0,(function*(){const l=yield this.loaderController.create({backdropDismiss:!0,message:"Registering..."});yield l.present(),yield l.onDidDismiss(),console.log("Loading dismissed!")}))}presentAlert(){return d.a(this,void 0,void 0,(function*(){const l=yield this.alertController.create({header:"Error",subHeader:"Trouble Registering",message:"Make sure your credentials are correct",buttons:["OK"]});yield l.present()}))}moveFocus(l){l.setFocus()}register(l){this.authGuard.authInfo.firstName&&this.authGuard.authInfo.lastName&&this.authGuard.authInfo.email&&this.authGuard.authInfo.password?(this.presentLoading(),this.authGuard.register(l).subscribe(l=>{this.authGuard.userInfo=l,sessionStorage.setItem("userId",this.authGuard.userInfo.userId),sessionStorage.setItem("token",this.authGuard.userInfo.token),this.storage.set("userId",this.authGuard.userInfo.userId),this.storage.set("token",this.authGuard.userInfo.userId),this.authGuard.userId=sessionStorage.getItem("userId"),this.authGuard.userToken=sessionStorage.getItem("token"),console.log("User Authenticated Info",this.authGuard.userInfo),this.authGuard.resetAuth(),this.loaderController.dismiss(),this.router.navigate(["/home"])},l=>{this.loaderController.dismiss(),this.presentAlert()})):(this.loaderController.dismiss(),this.presentAlert())}}var c=u("xgBC"),p=e.nb({encapsulation:0,styles:[["p[_ngcontent-%COMP%]{text-align:center}#bottom-p[_ngcontent-%COMP%]{margin-bottom:15%}img[_ngcontent-%COMP%]{width:100%;height:auto}ion-content[_ngcontent-%COMP%]{--background:url('abstract-white-triangle-shapes-background_1035-17544.c6f8c5f5c2a68859749a.jpg') no-repeat center center/cover}@media screen and (min-width:901px){ion-card[_ngcontent-%COMP%]{width:60vw;margin-left:auto;margin-right:auto}}"]],data:{}});function m(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,10,"ion-header",[],null,null,null,a.V,a.n)),e.ob(1,49152,null,0,r.z,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,8,"ion-toolbar",[["color","primary"],["mode","ios"]],null,null,null,a.pb,a.H)),e.ob(3,49152,null,0,r.xb,[e.h,e.k,e.x],{color:[0,"color"],mode:[1,"mode"]},null),(l()(),e.pb(4,0,null,0,3,"ion-buttons",[],[[8,"slot",0]],null,null,a.K,a.c)),e.ob(5,49152,null,0,r.j,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,1,"ion-menu-button",[["autoHide","false"],["menuId","first"]],null,null,null,a.bb,a.u)),e.ob(7,49152,null,0,r.P,[e.h,e.k,e.x],{autoHide:[0,"autoHide"]},null),(l()(),e.pb(8,0,null,0,2,"ion-title",[],null,null,null,a.ob,a.G)),e.ob(9,49152,null,0,r.vb,[e.h,e.k,e.x],null,null),(l()(),e.Fb(-1,0,["Register"])),(l()(),e.pb(11,0,null,null,80,"ion-content",[],null,null,null,a.R,a.j)),e.ob(12,49152,null,0,r.s,[e.h,e.k,e.x],null,null),(l()(),e.pb(13,0,null,0,69,"ion-card",[["color","tertiary"]],null,null,null,a.P,a.d)),e.ob(14,49152,null,0,r.k,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.pb(15,0,null,0,0,"img",[["src","./assets/ionic_5.jpeg"]],null,null,null,null,null)),(l()(),e.pb(16,0,null,0,66,"ion-card-content",[],null,null,null,a.L,a.e)),e.ob(17,49152,null,0,r.l,[e.h,e.k,e.x],null,null),(l()(),e.pb(18,0,null,0,14,"ion-item",[],null,null,null,a.Y,a.q)),e.ob(19,49152,null,0,r.F,[e.h,e.k,e.x],null,null),(l()(),e.pb(20,0,null,0,5,"ion-label",[["position","stacked"]],null,null,null,a.Z,a.r)),e.ob(21,49152,null,0,r.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Fb(-1,0,["First Name "])),(l()(),e.pb(23,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,a.mb,a.E)),e.ob(24,49152,null,0,r.sb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Fb(-1,0,["*"])),(l()(),e.pb(26,0,null,0,6,"ion-input",[["clearInput","true"],["enterkeyhint","next"],["inputmode","text"],["name","firstName"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup.enter"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Ab(l,27)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ab(l,27)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.authGuard.authInfo.firstName=u)&&t),"keyup.enter"===n&&(t=!1!==o.moveFocus(e.Ab(l,47))&&t),t}),a.X,a.p)),e.ob(27,16384,null,0,r.Ib,[e.k],null,null),e.Cb(1024,null,i.b,(function(l){return[l]}),[r.Ib]),e.ob(29,671744,null,0,i.e,[[8,null],[8,null],[8,null],[6,i.b]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,i.c,null,[i.e]),e.ob(31,16384,null,0,i.d,[[4,i.c]],null,null),e.ob(32,49152,null,0,r.E,[e.h,e.k,e.x],{clearInput:[0,"clearInput"],enterkeyhint:[1,"enterkeyhint"],inputmode:[2,"inputmode"],name:[3,"name"]},null),(l()(),e.pb(33,0,null,0,14,"ion-item",[],null,null,null,a.Y,a.q)),e.ob(34,49152,null,0,r.F,[e.h,e.k,e.x],null,null),(l()(),e.pb(35,0,null,0,5,"ion-label",[["position","stacked"]],null,null,null,a.Z,a.r)),e.ob(36,49152,null,0,r.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Fb(-1,0,["Last Name "])),(l()(),e.pb(38,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,a.mb,a.E)),e.ob(39,49152,null,0,r.sb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Fb(-1,0,["*"])),(l()(),e.pb(41,0,null,0,6,"ion-input",[["clearInput","true"],["enterkeyhint","next"],["inputmode","text"],["name","lastName"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup.enter"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Ab(l,42)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ab(l,42)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.authGuard.authInfo.lastName=u)&&t),"keyup.enter"===n&&(t=!1!==o.moveFocus(e.Ab(l,62))&&t),t}),a.X,a.p)),e.ob(42,16384,null,0,r.Ib,[e.k],null,null),e.Cb(1024,null,i.b,(function(l){return[l]}),[r.Ib]),e.ob(44,671744,null,0,i.e,[[8,null],[8,null],[8,null],[6,i.b]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,i.c,null,[i.e]),e.ob(46,16384,null,0,i.d,[[4,i.c]],null,null),e.ob(47,49152,[["b",4]],0,r.E,[e.h,e.k,e.x],{clearInput:[0,"clearInput"],enterkeyhint:[1,"enterkeyhint"],inputmode:[2,"inputmode"],name:[3,"name"]},null),(l()(),e.pb(48,0,null,0,14,"ion-item",[],null,null,null,a.Y,a.q)),e.ob(49,49152,null,0,r.F,[e.h,e.k,e.x],null,null),(l()(),e.pb(50,0,null,0,5,"ion-label",[["position","stacked"]],null,null,null,a.Z,a.r)),e.ob(51,49152,null,0,r.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Fb(-1,0,["Email "])),(l()(),e.pb(53,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,a.mb,a.E)),e.ob(54,49152,null,0,r.sb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Fb(-1,0,["*"])),(l()(),e.pb(56,0,null,0,6,"ion-input",[["clearInput","true"],["enterkeyhint","next"],["inputmode","email"],["name","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup.enter"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Ab(l,57)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ab(l,57)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.authGuard.authInfo.email=u)&&t),"keyup.enter"===n&&(t=!1!==o.moveFocus(e.Ab(l,77))&&t),t}),a.X,a.p)),e.ob(57,16384,null,0,r.Ib,[e.k],null,null),e.Cb(1024,null,i.b,(function(l){return[l]}),[r.Ib]),e.ob(59,671744,null,0,i.e,[[8,null],[8,null],[8,null],[6,i.b]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,i.c,null,[i.e]),e.ob(61,16384,null,0,i.d,[[4,i.c]],null,null),e.ob(62,49152,[["c",4]],0,r.E,[e.h,e.k,e.x],{clearInput:[0,"clearInput"],enterkeyhint:[1,"enterkeyhint"],inputmode:[2,"inputmode"],name:[3,"name"]},null),(l()(),e.pb(63,0,null,0,14,"ion-item",[],null,null,null,a.Y,a.q)),e.ob(64,49152,null,0,r.F,[e.h,e.k,e.x],null,null),(l()(),e.pb(65,0,null,0,5,"ion-label",[["position","stacked"]],null,null,null,a.Z,a.r)),e.ob(66,49152,null,0,r.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Fb(-1,0,["Password "])),(l()(),e.pb(68,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,a.mb,a.E)),e.ob(69,49152,null,0,r.sb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Fb(-1,0,["*"])),(l()(),e.pb(71,0,null,0,6,"ion-input",[["clearInput","true"],["enterkeyhint","go"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup.enter"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Ab(l,72)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ab(l,72)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.authGuard.authInfo.password=u)&&t),"keyup.enter"===n&&(t=!1!==o.register(o.authGuard.authInfo)&&t),t}),a.X,a.p)),e.ob(72,16384,null,0,r.Ib,[e.k],null,null),e.Cb(1024,null,i.b,(function(l){return[l]}),[r.Ib]),e.ob(74,671744,null,0,i.e,[[8,null],[8,null],[8,null],[6,i.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,i.c,null,[i.e]),e.ob(76,16384,null,0,i.d,[[4,i.c]],null,null),e.ob(77,49152,[["d",4]],0,r.E,[e.h,e.k,e.x],{clearInput:[0,"clearInput"],enterkeyhint:[1,"enterkeyhint"],type:[2,"type"]},null),(l()(),e.pb(78,0,null,0,4,"ion-item",[["lines","none"]],null,null,null,a.Y,a.q)),e.ob(79,49152,null,0,r.F,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.pb(80,0,null,0,2,"ion-button",[["fill","outline"],["slot","end"]],null,[[null,"click"]],(function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.register(t.authGuard.authInfo)&&e),e}),a.J,a.b)),e.ob(81,49152,null,0,r.i,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(l()(),e.Fb(-1,0,["Register"])),(l()(),e.pb(83,0,null,0,8,"p",[["id","bottom-p"]],null,null,null,null,null)),(l()(),e.Fb(-1,null,[" Already have an account? "])),(l()(),e.pb(85,0,null,null,3,"a",[["routerDirection","forward"],["routerLink","/login"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Ab(l,86).onClick(u)&&t),"click"===n&&(t=!1!==e.Ab(l,87).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),e.ob(86,737280,null,0,r.Gb,[s.g,r.Db,e.k,b.m,[2,b.n]],{routerDirection:[0,"routerDirection"]},null),e.ob(87,671744,null,0,b.o,[b.m,b.a,s.g],{routerLink:[0,"routerLink"]},null),(l()(),e.Fb(-1,null,["Go To Login"])),(l()(),e.pb(89,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(90,0,null,null,1,"a",[["href","https://play.google.com/store/apps/details?id=io.ionic.ionicDemo&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"]],null,null,null,null,null)),(l()(),e.pb(91,0,null,null,0,"img",[["alt","Get it on Google Play"],["src","./assets/google-play-badge-IonicDemo.png"],["style","max-width: 30vw; height: auto"]],null,null,null,null,null))],(function(l,n){var u=n.component;l(n,3,0,"primary","ios"),l(n,7,0,"false"),l(n,14,0,"tertiary"),l(n,21,0,"stacked"),l(n,24,0,"danger"),l(n,29,0,"firstName",u.authGuard.authInfo.firstName),l(n,32,0,"true","next","text","firstName"),l(n,36,0,"stacked"),l(n,39,0,"danger"),l(n,44,0,"lastName",u.authGuard.authInfo.lastName),l(n,47,0,"true","next","text","lastName"),l(n,51,0,"stacked"),l(n,54,0,"danger"),l(n,59,0,"email",u.authGuard.authInfo.email),l(n,62,0,"true","next","email","email"),l(n,66,0,"stacked"),l(n,69,0,"danger"),l(n,74,0,u.authGuard.authInfo.password),l(n,77,0,"true","go","password"),l(n,79,0,"none"),l(n,81,0,"outline"),l(n,86,0,"forward"),l(n,87,0,"/login")}),(function(l,n){l(n,4,0,n.component.buttonPlacement),l(n,26,0,e.Ab(n,31).ngClassUntouched,e.Ab(n,31).ngClassTouched,e.Ab(n,31).ngClassPristine,e.Ab(n,31).ngClassDirty,e.Ab(n,31).ngClassValid,e.Ab(n,31).ngClassInvalid,e.Ab(n,31).ngClassPending),l(n,41,0,e.Ab(n,46).ngClassUntouched,e.Ab(n,46).ngClassTouched,e.Ab(n,46).ngClassPristine,e.Ab(n,46).ngClassDirty,e.Ab(n,46).ngClassValid,e.Ab(n,46).ngClassInvalid,e.Ab(n,46).ngClassPending),l(n,56,0,e.Ab(n,61).ngClassUntouched,e.Ab(n,61).ngClassTouched,e.Ab(n,61).ngClassPristine,e.Ab(n,61).ngClassDirty,e.Ab(n,61).ngClassValid,e.Ab(n,61).ngClassInvalid,e.Ab(n,61).ngClassPending),l(n,71,0,e.Ab(n,76).ngClassUntouched,e.Ab(n,76).ngClassTouched,e.Ab(n,76).ngClassPristine,e.Ab(n,76).ngClassDirty,e.Ab(n,76).ngClassValid,e.Ab(n,76).ngClassInvalid,e.Ab(n,76).ngClassPending),l(n,85,0,e.Ab(n,87).target,e.Ab(n,87).href)}))}function k(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,1,"app-register",[],null,null,null,m,p)),e.ob(1,114688,null,0,h,[b.m,g.a,c.b,r.Eb,r.Bb,r.a],null,null)],(function(l,n){l(n,1,0)}),null)}var C=e.lb("app-register",h,k,{},{},[]);class f{}u.d(n,"RegisterPageModuleNgFactory",(function(){return y}));var y=e.mb(t,[],(function(l){return e.xb([e.yb(512,e.j,e.X,[[8,[o.a,C]],[3,e.j],e.v]),e.yb(4608,s.k,s.j,[e.s,[2,s.q]]),e.yb(4608,i.g,i.g,[]),e.yb(4608,r.b,r.b,[e.x,e.g]),e.yb(4608,r.Cb,r.Cb,[r.b,e.j,e.p]),e.yb(4608,r.Fb,r.Fb,[r.b,e.j,e.p]),e.yb(1073742336,s.b,s.b,[]),e.yb(1073742336,i.f,i.f,[]),e.yb(1073742336,i.a,i.a,[]),e.yb(1073742336,r.zb,r.zb,[]),e.yb(1073742336,b.p,b.p,[[2,b.u],[2,b.m]]),e.yb(1073742336,f,f,[]),e.yb(1073742336,t,t,[]),e.yb(1024,b.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);