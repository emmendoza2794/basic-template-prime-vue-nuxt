import b from"./BVQfnwbb.js";import{s as B}from"./DLhnFqRG.js";import h from"./vDfpZYt3.js";import{M as v,U as $,i as m,t as f,v as S,z as r,a2 as c,A as s,X as a,a0 as d,x as C,S as l,Y as w,$ as k}from"./DjePH2HM.js";import{s as D}from"./1bZ3qH-d.js";import"./Dawam10j.js";import"./DV5N6oib.js";import"./GNoKIHpe.js";import"./BXqLX0Q-.js";import"./PMoBfTyu.js";import"./Dbq7QfpP.js";var I={root:function(t){var o=t.props;return["p-splitbutton p-component",{"p-button-raised":o.raised,"p-button-rounded":o.rounded,"p-button-text":o.text,"p-button-outlined":o.outlined,"p-button-sm":o.size==="small","p-button-lg":o.size==="large"}]},button:"p-splitbutton-defaultbutton",menuButton:"p-splitbutton-menubutton"},g=v.extend({name:"splitbutton",classes:I}),z={name:"BaseSplitButton",extends:D,props:{label:{type:String,default:null},icon:{type:String,default:null},model:{type:Array,default:null},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1},class:{type:null,default:null},style:{type:null,default:null},buttonProps:{type:null,default:null},menuButtonProps:{type:null,default:null},menuButtonIcon:{type:String,default:void 0},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},style:g,provide:function(){return{$parentInstance:this}}},V={name:"SplitButton",extends:z,inheritAttrs:!1,emits:["click"],data:function(){return{id:this.$attrs.id,isExpanded:!1}},watch:{"$attrs.id":{immediate:!0,handler:function(t){this.id=t||$()}}},mounted:function(){var t=this;this.$watch("$refs.menu.visible",function(o){t.isExpanded=o})},methods:{onDropdownButtonClick:function(t){t&&t.preventDefault(),this.$refs.menu.toggle({currentTarget:this.$el,relatedTarget:this.$refs.button.$el}),this.isExpanded=this.$refs.menu.visible},onDropdownKeydown:function(t){(t.code==="ArrowDown"||t.code==="ArrowUp")&&(this.onDropdownButtonClick(),t.preventDefault())},onDefaultButtonClick:function(t){this.isExpanded&&this.$refs.menu.hide(t),this.$emit("click",t)}},computed:{containerClass:function(){return[this.cx("root"),this.class]}},components:{PVSButton:b,PVSMenu:h,ChevronDownIcon:B}},Z=["data-p-severity"];function E(e,t,o,T,u,i){var p=m("PVSButton"),y=m("PVSMenu");return f(),S("div",l({class:i.containerClass,style:e.style},e.ptmi("root"),{"data-p-severity":e.severity}),[r(p,l({type:"button",class:e.cx("button"),label:e.label,disabled:e.disabled,severity:e.severity,text:e.text,outlined:e.outlined,size:e.size,"aria-label":e.label,onClick:i.onDefaultButtonClick},e.buttonProps,{pt:e.ptm("button"),unstyled:e.unstyled}),c({default:s(function(){return[a(e.$slots,"default")]}),_:2},[e.$slots.icon?{name:"icon",fn:s(function(n){return[a(e.$slots,"icon",{class:d(n.class)},function(){return[C("span",l({class:[e.icon,n.class]},e.ptm("button").icon,{"data-pc-section":"buttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","label","disabled","severity","text","outlined","size","aria-label","onClick","pt","unstyled"]),r(p,l({ref:"button",type:"button",class:e.cx("menuButton"),disabled:e.disabled,"aria-haspopup":"true","aria-expanded":u.isExpanded,"aria-controls":u.id+"_overlay",onClick:i.onDropdownButtonClick,onKeydown:i.onDropdownKeydown,severity:e.severity,text:e.text,outlined:e.outlined,size:e.size},e.menuButtonProps,{pt:e.ptm("menuButton"),unstyled:e.unstyled}),{icon:s(function(n){return[a(e.$slots,"menubuttonicon",{class:d(n.class)},function(){return[(f(),w(k(e.menuButtonIcon?"span":"ChevronDownIcon"),l({class:[e.menuButtonIcon,n.class]},e.ptm("menuButton").icon,{"data-pc-section":"menubuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-expanded","aria-controls","onClick","onKeydown","severity","text","outlined","size","pt","unstyled"]),r(y,{ref:"menu",id:u.id+"_overlay",model:e.model,popup:!0,autoZIndex:e.autoZIndex,baseZIndex:e.baseZIndex,appendTo:e.appendTo,unstyled:e.unstyled,pt:e.ptm("menu")},c({_:2},[e.$slots.menuitemicon?{name:"itemicon",fn:s(function(n){return[a(e.$slots,"menuitemicon",{item:n.item,class:d(n.class)})]}),key:"0"}:void 0,e.$slots.item?{name:"item",fn:s(function(n){return[a(e.$slots,"item",{item:n.item,hasSubmenu:n.hasSubmenu,label:n.label,props:n.props})]}),key:"1"}:void 0]),1032,["id","model","autoZIndex","baseZIndex","appendTo","unstyled","pt"])],16,Z)}V.render=E;export{V as default};
