if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return s[e]||(n=new Promise((async n=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=n}else importScripts(e),n()}))),n.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},n=(n,s)=>{Promise.all(n.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(n)};self.define=(n,i,r)=>{s[n]||(s[n]=Promise.resolve().then((()=>{let s={};const a={uri:location.origin+n.slice(1)};return Promise.all(i.map((n=>{switch(n){case"exports":return s;case"module":return a;default:return e(n)}}))).then((e=>{const n=r(...e);return s.default||(s.default=n),s}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/31664189.f157bab729b44dfe3e8b.js",revision:"n3ddYJrGDhxgLNZBq9bli"},{url:"/_next/static/chunks/545f34e4.b935850a9926f3c117af.js",revision:"n3ddYJrGDhxgLNZBq9bli"},{url:"/_next/static/chunks/78e521c3.2e41d0500c761a563631.js",revision:"n3ddYJrGDhxgLNZBq9bli"},{url:"/_next/static/chunks/commons.f98e9b6e8b7152d4434a.js",revision:"n3ddYJrGDhxgLNZBq9bli"},{url:"/_next/static/chunks/d7eeaac4.69598c38ec4a55e5d203.js",revision:"n3ddYJrGDhxgLNZBq9bli"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.ca2fd73757a86a283724.js",revision:"n3ddYJrGDhxgLNZBq9bli"},{url:"/_next/static/chunks/framework.1d36bc031662b4dc4c28.js",revision:"n3ddYJrGDhxgLNZBq9bli"},{url:"/_next/static/chunks/main-f80f2922a8b971c4c7e7.js",revision:"n3ddYJrGDhxgLNZBq9bli"},{url:"/_next/static/chunks/pages/_app-c591daec988c2d598d00.js",revision:"n3ddYJrGDhxgLNZBq9bli"},{url:"/_next/static/chunks/pages/_error-a09d15456a983e788b57.js",revision:"n3ddYJrGDhxgLNZBq9bli"},{url:"/_next/static/chunks/pages/index-eeca2526c3eab3a782b2.js",revision:"n3ddYJrGDhxgLNZBq9bli"},{url:"/_next/static/chunks/polyfills-56c7bebd369733d6b640.js",revision:"n3ddYJrGDhxgLNZBq9bli"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"n3ddYJrGDhxgLNZBq9bli"},{url:"/_next/static/css/4713424a95e486991081.css",revision:"n3ddYJrGDhxgLNZBq9bli"},{url:"/_next/static/css/eb1bb464704ff7a54674.css",revision:"n3ddYJrGDhxgLNZBq9bli"},{url:"/_next/static/media/pencil.185da3d08f20e8ff7f861d957482f4c3.svg",revision:"n3ddYJrGDhxgLNZBq9bli"},{url:"/_next/static/n3ddYJrGDhxgLNZBq9bli/_buildManifest.js",revision:"n3ddYJrGDhxgLNZBq9bli"},{url:"/_next/static/n3ddYJrGDhxgLNZBq9bli/_ssgManifest.js",revision:"n3ddYJrGDhxgLNZBq9bli"},{url:"/banner-image.jpg",revision:"9521da036a82425100870d6cb1780041"},{url:"/favicon.ico",revision:"69b7eb115144604a743e84f0291ea192"},{url:"/icons/icon-128x128.png",revision:"1f0b279092a01d0e71761b079df84084"},{url:"/icons/icon-144x144.png",revision:"1ea44222fc69d064b4b683d2d27e0549"},{url:"/icons/icon-152x152.png",revision:"b497e253b765a07194be54ae59d9743e"},{url:"/icons/icon-192x192.png",revision:"c5d2b9774c07d8953b8e221bb748e924"},{url:"/icons/icon-384x384.png",revision:"d542d89c638ef2fa625f424dff3450da"},{url:"/icons/icon-512x512.png",revision:"492ec8ba2dc387a25f41d85d0a2d11fd"},{url:"/icons/icon-72x72.png",revision:"b11b90529c38fea43aaf050a407a3dc3"},{url:"/icons/icon-96x96.png",revision:"eea8661a75c7e78fc9efa58c713f62a0"},{url:"/logo.svg",revision:"11855a74407a21ada584d4a084ee6601"},{url:"/manifest.json",revision:"44dc8042a76a695e05865d53d904ca88"},{url:"/model/group1-shard1of1.bin",revision:"d1103e225a10bf01f8b6a640ac414f90"},{url:"/model/model.json",revision:"86b4ec55d18930e64079893e01519d27"},{url:"/og-image.png",revision:"0285b881dd06c8d81a47e92f03559b24"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));