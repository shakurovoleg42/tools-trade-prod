"use strict";(()=>{var e={};e.id=39,e.ids=[39],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9491:e=>{e.exports=require("assert")},2361:e=>{e.exports=require("events")},7147:e=>{e.exports=require("fs")},3685:e=>{e.exports=require("http")},5687:e=>{e.exports=require("https")},2037:e=>{e.exports=require("os")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},6224:e=>{e.exports=require("tty")},7310:e=>{e.exports=require("url")},3837:e=>{e.exports=require("util")},9796:e=>{e.exports=require("zlib")},5931:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>x,patchFetch:()=>q,requestAsyncStorage:()=>d,routeModule:()=>n,serverHooks:()=>c,staticGenerationAsyncStorage:()=>l});var s={};t.r(s),t.d(s,{GET:()=>i});var o=t(9303),p=t(8716),u=t(670),a=t(9899);async function i(e,{params:r}){let t=await a.Z.get(`/products/${r.slug}`);return Response.json(t.data)}let n=new o.AppRouteRouteModule({definition:{kind:p.x.APP_ROUTE,page:"/api/products/[slug]/route",pathname:"/api/products/[slug]",filename:"route",bundlePath:"app/api/products/[slug]/route"},resolvedPagePath:"/home/oleg/Рабочий стол/rarar/tools-trade_front/tools-trade-prod/src/app/api/products/[slug]/route.js",nextConfigOutput:"",userland:s}),{requestAsyncStorage:d,staticGenerationAsyncStorage:l,serverHooks:c}=n,x="/api/products/[slug]/route";function q(){return(0,u.patchFetch)({serverHooks:c,staticGenerationAsyncStorage:l})}},9303:(e,r,t)=>{e.exports=t(517)},9899:(e,r,t)=>{t.d(r,{Z:()=>s});let s=t(9712).Z.create({baseURL:"https://toolsandtrade.com/api"})}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[948,712],()=>t(5931));module.exports=s})();