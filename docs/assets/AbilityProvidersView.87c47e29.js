import{B as _,a as v}from"./index.0a04d975.js";/* empty css                        */import{n as y,o as w}from"./element-plus.df8dba47.js";import{d as g,l as d,m as o,W as i,U as a,S as s,u as A,a5 as c,P as b,k as p,ag as $,ak as B,al as E}from"./vue.d55e52b2.js";import"./vue-router.1062d1ee.js";import"./vue-i18n.cf8f6641.js";const P=l=>(B("data-v-fce04bff"),l=l(),E(),l),K={class:"logo"},k=["src"],V=["href"],R={class:"provider-abilities"},S=["href"],I={class:"commit-new-provider"},N=P(()=>o("a",{href:"https://github.com/JDArmy/BREAK/issues",target:"_blank"}," https://github.com/JDArmy/BREAK/issues ",-1)),C=g({__name:"AbilityProvidersView",setup(l){let n=Array();return Object.keys(_.abilityProviders).forEach(e=>{let r={..._.abilityProviders[e],apKey:e};n.push(r)}),(e,u)=>{const r=y,f=w;return p(),d(b,null,[o("h3",null,i(e.$t("abilityProviders")),1),a(f,{data:A(n),border:"",stripe:""},{default:s(()=>[a(r,{prop:"logo",width:"150",label:e.$t("logo")},{default:s(t=>[o("div",K,[o("img",{src:t.row.logo},null,8,k)])]),_:1},8,["label"]),a(r,{prop:"title",width:"120",label:e.$t("title")},{default:s(t=>[o("a",{href:t.row.site,target:"_blank"},i(t.row.apKey?e.$t(`BREAK.abilityProviders.${t.row.apKey}.title`):""),9,V)]),_:1},8,["label"]),a(r,{prop:"abilities",label:e.$t("supportAbilities")},{default:s(t=>[(p(!0),d(b,null,$(t.row.abilities,(m,h)=>(p(),d("span",R,[o("a",{href:m.url,target:"_blank"},i(e.$t(`BREAK.avoidances.${h}.title`)),9,S)]))),256))]),_:1},8,["label"]),a(r,{prop:"description",label:e.$t("description")},{default:s(t=>[c(i(t.row.apKey?e.$t(`BREAK.abilityProviders.${t.row.apKey}.description`):""),1)]),_:1},8,["label"])]),_:1},8,["data"]),o("div",I,[c(i(e.$t("commitNewProvider"))+": ",1),N])],64)}}});const O=v(C,[["__scopeId","data-v-fce04bff"]]);export{O as default};