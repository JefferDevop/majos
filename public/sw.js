if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const r=e=>a(e,c),o={module:{uri:c},exports:i,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(t(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0c428ae2-3f54f3805f2a22d0.js",revision:"3f54f3805f2a22d0"},{url:"/_next/static/chunks/1a48c3c1-744c20fee819d706.js",revision:"744c20fee819d706"},{url:"/_next/static/chunks/252f366e-a7960b41ec688962.js",revision:"a7960b41ec688962"},{url:"/_next/static/chunks/5-61969c891fde6b49.js",revision:"61969c891fde6b49"},{url:"/_next/static/chunks/545f34e4-916db710d448d2b3.js",revision:"916db710d448d2b3"},{url:"/_next/static/chunks/63-c4566484fd56a3ad.js",revision:"c4566484fd56a3ad"},{url:"/_next/static/chunks/859-b66b05333dcac890.js",revision:"b66b05333dcac890"},{url:"/_next/static/chunks/95b64a6e-40c8a72d1257eef9.js",revision:"40c8a72d1257eef9"},{url:"/_next/static/chunks/c31f1870-fe7ba0483da782ec.js",revision:"fe7ba0483da782ec"},{url:"/_next/static/chunks/d0447323-2fdbaea8a3e71ee4.js",revision:"2fdbaea8a3e71ee4"},{url:"/_next/static/chunks/d7eeaac4-2a2f723d4f172fd2.js",revision:"2a2f723d4f172fd2"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-1cb174da82364de6.js",revision:"1cb174da82364de6"},{url:"/_next/static/chunks/pages/%5Bproduct%5D-4e66c283fe032080.js",revision:"4e66c283fe032080"},{url:"/_next/static/chunks/pages/%5Bproduct%5D/product-59a24f85eeb4d871.js",revision:"59a24f85eeb4d871"},{url:"/_next/static/chunks/pages/_app-ef03504fe0f73ded.js",revision:"ef03504fe0f73ded"},{url:"/_next/static/chunks/pages/_document copy-1fcde387f59249e1.js",revision:"1fcde387f59249e1"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/about-a77e45710fd13fb0.js",revision:"a77e45710fd13fb0"},{url:"/_next/static/chunks/pages/about/about-89803ae9cd32141d.js",revision:"89803ae9cd32141d"},{url:"/_next/static/chunks/pages/cart-ff48e5e3dd18ac9d.js",revision:"ff48e5e3dd18ac9d"},{url:"/_next/static/chunks/pages/cart/cart-4fca8bdf5aa21463.js",revision:"4fca8bdf5aa21463"},{url:"/_next/static/chunks/pages/contact-b03ea186fa727a9d.js",revision:"b03ea186fa727a9d"},{url:"/_next/static/chunks/pages/contact/contact-fefb737778153825.js",revision:"fefb737778153825"},{url:"/_next/static/chunks/pages/featured-d4de02795dc1bf92.js",revision:"d4de02795dc1bf92"},{url:"/_next/static/chunks/pages/featured/featured-6121e643d75f302b.js",revision:"6121e643d75f302b"},{url:"/_next/static/chunks/pages/home-7335917a53d968fd.js",revision:"7335917a53d968fd"},{url:"/_next/static/chunks/pages/home/home-e410280160ef8845.js",revision:"e410280160ef8845"},{url:"/_next/static/chunks/pages/index-f582644def2ba5a6.js",revision:"f582644def2ba5a6"},{url:"/_next/static/chunks/pages/join-5d6fb86313879685.js",revision:"5d6fb86313879685"},{url:"/_next/static/chunks/pages/join/login-9e1e9751816a2c41.js",revision:"9e1e9751816a2c41"},{url:"/_next/static/chunks/pages/ofert-46f792ab553eb312.js",revision:"46f792ab553eb312"},{url:"/_next/static/chunks/pages/ofert/ofert-f4519a01b50e26e3.js",revision:"f4519a01b50e26e3"},{url:"/_next/static/chunks/pages/products/%5Bcategory%5D-78da8e1ecf8f4515.js",revision:"78da8e1ecf8f4515"},{url:"/_next/static/chunks/pages/products/%5Bcategory%5D/category-69c1f0b26d732160.js",revision:"69c1f0b26d732160"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-38cee4c0e358b1a3.js",revision:"38cee4c0e358b1a3"},{url:"/_next/static/css/0df6a60e73c52209.css",revision:"0df6a60e73c52209"},{url:"/_next/static/css/30a8c3c0f6bdd824.css",revision:"30a8c3c0f6bdd824"},{url:"/_next/static/css/ebfc14021fe2a370.css",revision:"ebfc14021fe2a370"},{url:"/_next/static/qLTGz7ubr-oCkbUGA5lXA/_buildManifest.js",revision:"103ead858b0861301b0909357c4f937a"},{url:"/_next/static/qLTGz7ubr-oCkbUGA5lXA/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"2c21410939ce624dfb1e1a42eaf97338"},{url:"/icon-512x512.png",revision:"41528a7b6c5e473db30d861d5e9ae3f5"},{url:"/image/Image_not_available.png",revision:"474a68367a7061443c7ba75929a4b3a2"},{url:"/image/logo.png",revision:"c905b5dff4a4125c5edf6300922b9842"},{url:"/manifest.json",revision:"16140733b1beae69549b31d0016a81f4"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
