import{B as m,a as K}from"./index.1b15830d.js";/* empty css                        */import{n as E,o as g,g as A,l as B}from"./element-plus.7c0d76a0.js";import{d as k,l as r,m as u,W as t,P as p,ad as h,u as s,k as d,U as o,S as i,a5 as n,O as R}from"./vue.b4a71da1.js";import"./vue-router.f4f73926.js";import"./vue-i18n.cf8f6641.js";const V={class:"avoidance-category-title"},C={class:"avoidance-category-description"},N={class:"reference-list"},O=["href"],j=k({__name:"AvoidancesView",setup(T){let w=Object.keys(m.avoidanceCategories),_=Object();w.forEach(e=>{_[e]=Array(),Object.keys(m.avoidances).forEach(f=>{let l=m.avoidances[f];if(e!==l.category)return;let $={...l,aKey:f};_[e].push($)})});let b=()=>window.innerHeight;return(e,f)=>{const l=E,$=g;return d(),r(p,null,[u("h3",null,t(e.$t("menu.avoidances")),1),(d(!0),r(p,null,h(s(_),(D,c)=>(d(),r("div",{key:c},[u("div",null,[u("h4",V,t(e.$t(`BREAK.avoidanceCategories.${c}.title`))+" ("+t(s(m).avoidanceCategories[c].keyword)+") ",1),u("div",C,t(e.$t(`BREAK.avoidanceCategories.${c}.description`)),1)]),o($,{height:s(b)()-50,data:s(_)[c],stripe:"",border:""},{default:i(()=>[o(l,{prop:"aKey",width:"100px",label:e.$t("ID")},null,8,["label"]),o(l,{width:"150px",label:e.$t("title")},{header:i(()=>[n(t(e.$t("title")),1)]),default:i(a=>[n(t(a.row.aKey?e.$t(`BREAK.avoidances.${a.row.aKey}.title`):""),1)]),_:1},8,["label"]),o(l,{label:e.$t("summary")},{default:i(a=>[n(t(a.row.aKey?e.$t(`BREAK.avoidances.${a.row.aKey}.summary`):""),1)]),_:1},8,["label"]),o(l,{label:e.$t("description")},{default:i(a=>[n(t(a.row.aKey?e.$t(`BREAK.avoidances.${a.row.aKey}.description`):""),1)]),_:1},8,["label"]),o(l,{label:e.$t("limitation")},{default:i(a=>[n(t(a.row.aKey?e.$t(`BREAK.avoidances.${a.row.aKey}.limitation`):""),1)]),_:1},8,["label"]),o(l,{width:"250px",label:e.$t("references")},{default:i(a=>[u("ul",N,[(d(!0),r(p,null,h(a.row.references,(y,v)=>(d(),r("li",{key:v},[a.row.aKey?(d(),r("a",{key:0,href:y.link,target:"_blank"},[o(s(A),null,{default:i(()=>[o(s(B))]),_:1}),n(t(e.$t(`BREAK.avoidances.${a.row.aKey}.references[${v}].title`)),1)],8,O)):R("",!0),n(": "+t(e.$t(`BREAK.avoidances.${a.row.aKey}.references[${v}].description`)),1)]))),128))])]),_:1},8,["label"])]),_:2},1032,["height","data"])]))),128))],64)}}});const P=K(j,[["__scopeId","data-v-1307af15"]]);export{P as default};