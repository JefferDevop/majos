if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>a(e,t),f={module:{uri:t},exports:i,require:r};s[t]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(n(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/FOlbIWZp4P_BEoifQUJuj/_buildManifest.js",revision:"03c60c1b1b6887c4257922e03619465e"},{url:"/_next/static/FOlbIWZp4P_BEoifQUJuj/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-3f54f3805f2a22d0.js",revision:"3f54f3805f2a22d0"},{url:"/_next/static/chunks/1a48c3c1-744c20fee819d706.js",revision:"744c20fee819d706"},{url:"/_next/static/chunks/252f366e-a7960b41ec688962.js",revision:"a7960b41ec688962"},{url:"/_next/static/chunks/545f34e4-916db710d448d2b3.js",revision:"916db710d448d2b3"},{url:"/_next/static/chunks/63-c4566484fd56a3ad.js",revision:"c4566484fd56a3ad"},{url:"/_next/static/chunks/825-d50b7a2fc11a149c.js",revision:"d50b7a2fc11a149c"},{url:"/_next/static/chunks/859-b66b05333dcac890.js",revision:"b66b05333dcac890"},{url:"/_next/static/chunks/95b64a6e-40c8a72d1257eef9.js",revision:"40c8a72d1257eef9"},{url:"/_next/static/chunks/c31f1870-fe7ba0483da782ec.js",revision:"fe7ba0483da782ec"},{url:"/_next/static/chunks/d0447323-2fdbaea8a3e71ee4.js",revision:"2fdbaea8a3e71ee4"},{url:"/_next/static/chunks/d7eeaac4-2a2f723d4f172fd2.js",revision:"2a2f723d4f172fd2"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-1cb174da82364de6.js",revision:"1cb174da82364de6"},{url:"/_next/static/chunks/pages/%5Bproduct%5D-673eeb70ce6ef660.js",revision:"673eeb70ce6ef660"},{url:"/_next/static/chunks/pages/%5Bproduct%5D/product-1a26d4ef7f8c5058.js",revision:"1a26d4ef7f8c5058"},{url:"/_next/static/chunks/pages/_app-bf4c83772e2facee.js",revision:"bf4c83772e2facee"},{url:"/_next/static/chunks/pages/_document copy-1fcde387f59249e1.js",revision:"1fcde387f59249e1"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/about-fad817de52fbeb7f.js",revision:"fad817de52fbeb7f"},{url:"/_next/static/chunks/pages/about/about-cde23d206cc11b83.js",revision:"cde23d206cc11b83"},{url:"/_next/static/chunks/pages/cart-5692c2aaead40262.js",revision:"5692c2aaead40262"},{url:"/_next/static/chunks/pages/cart/cart-1e93b1ed82d78d7d.js",revision:"1e93b1ed82d78d7d"},{url:"/_next/static/chunks/pages/contact-f8cd31339dfa9253.js",revision:"f8cd31339dfa9253"},{url:"/_next/static/chunks/pages/contact/contact-9fb258e48cddbf5f.js",revision:"9fb258e48cddbf5f"},{url:"/_next/static/chunks/pages/featured-fe336473904efea7.js",revision:"fe336473904efea7"},{url:"/_next/static/chunks/pages/featured/featured-f117f1c6f78e1174.js",revision:"f117f1c6f78e1174"},{url:"/_next/static/chunks/pages/home-9f790c1261cab231.js",revision:"9f790c1261cab231"},{url:"/_next/static/chunks/pages/home/home-8f2e023f93a58f7d.js",revision:"8f2e023f93a58f7d"},{url:"/_next/static/chunks/pages/index-51719873ab858615.js",revision:"51719873ab858615"},{url:"/_next/static/chunks/pages/join-acfd0a10e969bbd4.js",revision:"acfd0a10e969bbd4"},{url:"/_next/static/chunks/pages/join/login-e6ed71a9180d4e3f.js",revision:"e6ed71a9180d4e3f"},{url:"/_next/static/chunks/pages/ofert-eb48eb0dfac78552.js",revision:"eb48eb0dfac78552"},{url:"/_next/static/chunks/pages/ofert/ofert-e956c44e06322f42.js",revision:"e956c44e06322f42"},{url:"/_next/static/chunks/pages/products/%5Bcategory%5D-2a0d6255eef4f032.js",revision:"2a0d6255eef4f032"},{url:"/_next/static/chunks/pages/products/%5Bcategory%5D/category-fd0d0ef8f0923687.js",revision:"fd0d0ef8f0923687"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-38cee4c0e358b1a3.js",revision:"38cee4c0e358b1a3"},{url:"/_next/static/css/0df6a60e73c52209.css",revision:"0df6a60e73c52209"},{url:"/_next/static/css/30a8c3c0f6bdd824.css",revision:"30a8c3c0f6bdd824"},{url:"/_next/static/css/ebfc14021fe2a370.css",revision:"ebfc14021fe2a370"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"2c21410939ce624dfb1e1a42eaf97338"},{url:"/icon-512x512.png",revision:"41528a7b6c5e473db30d861d5e9ae3f5"},{url:"/image/Image_not_available.png",revision:"474a68367a7061443c7ba75929a4b3a2"},{url:"/image/logo.png",revision:"c905b5dff4a4125c5edf6300922b9842"},{url:"/manifest.json",revision:"16140733b1beae69549b31d0016a81f4"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
