import{s as i}from"./1bZ3qH-d.js";import{M as p,t as n,v as o,Y as l,S as a,$ as c,T as t,X as u,x as d,y as v}from"./DjePH2HM.js";var g={root:function(r){var s=r.props;return["p-tag p-component",{"p-tag-info":s.severity==="info","p-tag-success":s.severity==="success","p-tag-warning":s.severity==="warning","p-tag-danger":s.severity==="danger","p-tag-secondary":s.severity==="secondary","p-tag-contrast":s.severity==="contrast","p-tag-rounded":s.rounded}]},icon:"p-tag-icon",value:"p-tag-value"},m=p.extend({name:"tag",classes:g}),y={name:"BaseTag",extends:i,props:{value:null,severity:null,rounded:Boolean,icon:String},style:m,provide:function(){return{$parentInstance:this}}},f={name:"Tag",extends:y,inheritAttrs:!1};function $(e,r,s,B,k,S){return n(),o("span",a({class:e.cx("root")},e.ptmi("root")),[e.$slots.icon?(n(),l(c(e.$slots.icon),a({key:0,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(n(),o("span",a({key:1,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):t("",!0),e.value||e.$slots.default?u(e.$slots,"default",{key:2},function(){return[d("span",a({class:e.cx("value")},e.ptm("value")),v(e.value),17)]}):t("",!0)],16)}f.render=$;export{f as default};