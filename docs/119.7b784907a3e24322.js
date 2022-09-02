"use strict";(self.webpackChunkBookSearchESquare=self.webpackChunkBookSearchESquare||[]).push([[119],{3119:(Z,u,e)=>{e.r(u),e.d(u,{LoginModule:()=>S});var m=e(9808),l=e(1083),i=e(3075),f=e(7579),p=e(2722);class h{static cannotContainSpace(r){return r.value.indexOf(" ")>=0?{cannotContainSpace:!0}:null}}var n=e(5e3),C=e(7556),s=e(7322),c=e(7531),d=e(7423);function v(t,r){1&t&&(n.TgZ(0,"mat-error"),n._uU(1," Username is "),n.TgZ(2,"strong"),n._uU(3,"required"),n.qZA()())}function y(t,r){1&t&&(n.TgZ(0,"mat-error"),n._uU(1," Username cannot contain spaces "),n.qZA())}const L=[{path:"",component:(()=>{class t{constructor(o,a){this.authService=o,this.router=a,this.userNameControl=new i.NI("",{validators:[i.kI.required,h.cannotContainSpace]}),this._destroy$=new f.x}ngOnDestroy(){this._destroy$.next(null),this._destroy$.complete()}ngOnInit(){this.authService._currentUserName.pipe((0,p.R)(this._destroy$)).subscribe(o=>{o&&this.router.navigate(["book-search"])})}login(){if(this.userNameControl.valid){let o=this.userNameControl.value;o&&this.authService.login(o)}}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(C.e),n.Y36(l.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-login"]],decls:9,vars:4,consts:[[1,"",3,"keydown.enter"],["matInput","","value","",3,"formControl","keydown.enter"],[4,"ngIf"],["type","button","mat-button","",3,"disabled","click"]],template:function(o,a){1&o&&(n.TgZ(0,"form")(1,"mat-form-field",0),n.NdJ("keydown.enter",function(T){return T.preventDefault()}),n.TgZ(2,"mat-label"),n._uU(3,"Username"),n.qZA(),n.TgZ(4,"input",1),n.NdJ("keydown.enter",function(){return a.login()}),n.qZA(),n.YNc(5,v,4,0,"mat-error",2),n.YNc(6,y,2,0,"mat-error",2),n.qZA(),n.TgZ(7,"button",3),n.NdJ("click",function(){return a.login()}),n._uU(8,"Login"),n.qZA()()),2&o&&(n.xp6(4),n.Q6J("formControl",a.userNameControl),n.xp6(1),n.Q6J("ngIf",a.userNameControl.hasError("required")),n.xp6(1),n.Q6J("ngIf",a.userNameControl.hasError("cannotContainSpace")),n.xp6(1),n.Q6J("disabled",a.userNameControl.invalid))},directives:[i._Y,i.JL,s.KE,s.hX,c.Nt,i.Fj,i.JJ,i.oH,m.O5,s.TO,d.lW],styles:[""],changeDetection:0}),t})()}];let N=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[l.Bz.forChild(L)],l.Bz]}),t})(),S=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[m.ez,N,s.lN,c.c,d.ot,i.UX]]}),t})()}}]);