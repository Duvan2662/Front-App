import{$ as n,A,B as f,D as g,E as v,F as C,H as S,N as M,P as b,R as y,U as _,V as N,W as R,X as F,Y as a,_ as h,l as u,n as o,o as d,p,v as l}from"./chunk-TLWWRZJD.js";var x=(t,r)=>{let e=o(n),i=o(a);return e.authStatus()==="authenticated"?!0:(e.authStatus()==="checking"||i.navigateByUrl("/auth/login"),!1)};var I=(t,r)=>{let e=o(n),i=o(a);return e.authStatus()==="noAuthenticated"?!0:(i.navigateByUrl("/dashboard"),!1)};var w=[{path:"auth",canActivate:[I],loadChildren:()=>import("./chunk-I3KYI6CS.js").then(t=>t.AuthModule)},{path:"dashboard",canActivate:[x],loadChildren:()=>import("./chunk-YWSJ2GER.js").then(t=>t.DashboardModule)},{path:"**",redirectTo:"auth"}],c=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=p({type:t});static \u0275inj=u({imports:[h.forRoot(w),h]})};function B(t,r){t&1&&(g(0,"h1"),S(1,` Loading
`),v())}function D(t,r){t&1&&C(0,"router-outlet")}var s=class t{title="AngularFront";authService=o(n);router=o(a);finishedAuthCheck=M(()=>this.authService.authStatus()!=="checking");authStatusChangedEffect=b(()=>{switch(this.authService.authStatus()){case"checking":return;case"authenticated":this.router.navigateByUrl("/dashboard");return;case"noAuthenticated":this.router.navigateByUrl("/auth/login");return}});static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["app-root"]],decls:2,vars:2,consts:[[4,"ngIf"]],template:function(e,i){e&1&&A(0,B,2,0,"h1",0)(1,D,1,0,"router-outlet",0),e&2&&(f("ngIf",!i.finishedAuthCheck()),l(),f("ngIf",i.finishedAuthCheck()))},dependencies:[y,F]})};var m=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=p({type:t,bootstrap:[s]});static \u0275inj=u({imports:[R,c,_]})};N().bootstrapModule(m,{ngZoneEventCoalescing:!0}).catch(t=>console.error(t));
