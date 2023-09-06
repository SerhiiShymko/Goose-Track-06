"use strict";(self.webpackChunkGoose_Track_06_Frontend=self.webpackChunkGoose_Track_06_Frontend||[]).push([[60],{5060:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var a,r,i,o=t(1852),d=t(2791),s=t(7689),c=t(8205),y=t(9098),x=t(168),f=t(6487),l=t(1087),p=f.zo.div(a||(a=(0,x.Z)(["\n  display: flex;\n  margin-top: 18px;\n  color: #3e85f3;\n  text-align: center;\n  /* font-family: Inter; */\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.28;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 0;\n    font-size: 16px;\n    line-height: 1.12;\n  }\n"]))),u=(0,f.zo)(l.OL)(r||(r=(0,x.Z)(["\n  padding: 8px 16px;\n  border-radius: 8px 0px 0px 8px;\n  border-right: 1px solid rgba(62, 133, 243, 0.2);\n  background: #e3f3ff;\n  cursor: pointer;\n  &.active {\n    background: #cae8ff;\n  }\n"]))),h=(0,f.zo)(l.OL)(i||(i=(0,x.Z)(["\n  padding: 8px 25px;\n  border-radius: 0px 8px 8px 0px;\n  background: #e3f3ff;\n  cursor: pointer;\n  &.active {\n    background: #cae8ff;\n  }\n"]))),v=t(9434),g=t(4217),m=t(184),Z=function(){var n=(0,v.v9)(g.VI),e=(0,y.Z)(n,"yyyy-MM-dd"),t=(0,y.Z)(n,"yyyy-MM");return(0,m.jsxs)(p,{children:[(0,m.jsx)(u,{to:"month/".concat(t),children:"Month"}),(0,m.jsx)(h,{to:"day/".concat(e),children:"Day"})]})},M=t(9980),k=function(n){var e=n.dayInterval,t=n.onNext,a=n.onPrev,r=n.dateToday,i=n.onClickDate;return(0,m.jsxs)(c.im,{children:[(0,m.jsx)(M.d,{dayInterval:e,onNext:t,onPrev:a,dateToday:r,onClickDate:i}),(0,m.jsx)(Z,{})]})},j=t(1941),T=t(9105),b=t(9365),z=t(3629),w=t(4565),D=t(4888),I=t(3541),_=function(){var n=(0,v.I0)(),e=(0,s.TH)(),t=(0,v.v9)((function(n){return n.auth.currentDate})),a=(0,y.Z)(t,"MMMM yyyy"),r=(0,y.Z)(t,"yyyy-MM-dd"),i=(0,j.Z)(a,"MMMM yyyy",new Date),o=(0,j.Z)(r,"yyyy-MM-dd",new Date),d=(0,b.Z)({start:(0,z.Z)(i,{weekStartsOn:1}),end:(0,w.Z)((0,D.Z)(i),{weekStartsOn:1})});return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(k,{dayInterval:d,onNext:function(){if("day"===e.pathname.slice(10,13)||"/statistics"===e.pathname){var t=(0,T.Z)(o,{days:1}).getTime();n((0,I.vz)(t))}else{var a=(0,T.Z)(i,{months:1}).getTime();n((0,I.vz)(a))}},onPrev:function(){if("day"===e.pathname.slice(10,13)||"/statistics"===e.pathname){var t=(0,T.Z)(o,{days:-1}).getTime();n((0,I.vz)(t))}else{var a=(0,T.Z)(i,{months:-1}).getTime();n((0,I.vz)(a))}},dateToday:a,onClickDate:function(e){var t=e.currentTarget.dataset.day.split("-"),a=new Date(t[0],t[1]-1,t[2]).getTime();n((0,I.vz)(a))}})})},C=function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(_,{}),(0,m.jsx)(d.Suspense,{fallback:(0,m.jsx)(o.Z,{}),children:(0,m.jsx)(s.j3,{})})]})}}}]);
//# sourceMappingURL=60.52f0b29f.chunk.js.map