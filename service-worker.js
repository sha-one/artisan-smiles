!function(){"use strict";const e=1603960520982,t="cache"+e,s=["/client/client.a8fae964.js","/client/inject_styles.5607aec6.js","/client/index.df62e832.js","/client/Section.be7bb9a1.js","/client/services.1f730d59.js","/client/about.58359e25.js","/client/index.2ce27bb1.js","/client/[slug].ef3776a2.js"].concat(["/service-worker-index.html","/.DS_Store","/A5_NCR_Set.pdf","/ArtisanSmiles_Brochure.pdf","/artisan-smiles-logo.png","/case.jpeg","/favicon.png","/global.css","/image1.jpeg","/image11.jpeg","/image12.jpeg","/image13.jpeg","/image3.jpeg","/logo-192.png","/logo-512.png","/logo-dentsply.jpeg","/logo-duceram.jpeg","/logo-emax.jpeg","/logo-ids.jpeg","/logo-ivoclar.jpeg","/logo-nobel.jpeg","/logo-scoremy-white.png","/logo-straumann.jpeg","/logo-vita.jpeg","/manifest.json","/philip-dobinson.png","/successkid.jpg"]),n=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&n.has(s.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then((async e=>{try{const s=await fetch(t.request);return e.put(t.request,s.clone()),s}catch(s){const n=await e.match(t.request);if(n)return n;throw s}})))))}))}();
