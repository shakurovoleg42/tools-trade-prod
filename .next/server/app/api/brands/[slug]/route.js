"use strict";(()=>{var e={};e.id=24,e.ids=[24],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9491:e=>{e.exports=require("assert")},2361:e=>{e.exports=require("events")},7147:e=>{e.exports=require("fs")},3685:e=>{e.exports=require("http")},5687:e=>{e.exports=require("https")},2037:e=>{e.exports=require("os")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},6224:e=>{e.exports=require("tty")},7310:e=>{e.exports=require("url")},3837:e=>{e.exports=require("util")},9796:e=>{e.exports=require("zlib")},1367:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>c,patchFetch:()=>g,requestAsyncStorage:()=>d,routeModule:()=>n,serverHooks:()=>x,staticGenerationAsyncStorage:()=>l});var s={};t.r(s),t.d(s,{GET:()=>i});var a=t(9303),o=t(8716),p=t(670),u=t(9899);async function i(e,{params:r}){let t=new URL(e.url).searchParams.get("page")||1,s=await u.Z.get(`/brands/${r.slug}`,{params:{page:t}});return Response.json(s.data)}let n=new a.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/brands/[slug]/route",pathname:"/api/brands/[slug]",filename:"route",bundlePath:"app/api/brands/[slug]/route"},resolvedPagePath:"/home/oleg/Рабочий стол/rarar/tools-trade_front/tools-trade-prod/src/app/api/brands/[slug]/route.js",nextConfigOutput:"",userland:s}),{requestAsyncStorage:d,staticGenerationAsyncStorage:l,serverHooks:x}=n,c="/api/brands/[slug]/route";function g(){return(0,p.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:l})}},9303:(e,r,t)=>{e.exports=t(517)},9899:(e,r,t)=>{t.d(r,{Z:()=>s});let s=t(9712).Z.create({baseURL:"https://toolsandtrade.com/api"})}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[948,712],()=>t(1367));module.exports=s})();