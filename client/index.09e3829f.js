import{S as t,i as s,s as e,e as l,t as o,b as n,d as r,f as a,g as h,j as c,k as f,l as i,m as u,a as p,q as g,h as d,x as m,y as v}from"./client.3b1e75e7.js";function b(t,s,e){const l=t.slice();return l[1]=s[e],l}function E(t){let s,e,p,g,d=t[1].title+"";return{c(){s=l("li"),e=l("a"),p=o(d),this.h()},l(t){s=n(t,"LI",{});var l=r(s);e=n(l,"A",{rel:!0,href:!0});var o=r(e);p=a(o,d),o.forEach(h),l.forEach(h),this.h()},h(){c(e,"rel","prefetch"),c(e,"href",g="blog/"+t[1].slug)},m(t,l){f(t,s,l),i(s,e),i(e,p)},p(t,s){1&s&&d!==(d=t[1].title+"")&&u(p,d),1&s&&g!==(g="blog/"+t[1].slug)&&c(e,"href",g)},d(t){t&&h(s)}}}function j(t){let s,e,u,j,x,k=t[0],L=[];for(let s=0;s<k.length;s+=1)L[s]=E(b(t,k,s));return{c(){s=p(),e=l("h1"),u=o("Recent posts"),j=p(),x=l("ul");for(let t=0;t<L.length;t+=1)L[t].c();this.h()},l(t){g('[data-svelte="svelte-hfp9t8"]',document.head).forEach(h),s=d(t),e=n(t,"H1",{});var l=r(e);u=a(l,"Recent posts"),l.forEach(h),j=d(t),x=n(t,"UL",{class:!0});var o=r(x);for(let t=0;t<L.length;t+=1)L[t].l(o);o.forEach(h),this.h()},h(){document.title="Blog",c(x,"class","svelte-dkckuz")},m(t,l){f(t,s,l),f(t,e,l),i(e,u),f(t,j,l),f(t,x,l);for(let t=0;t<L.length;t+=1)L[t].m(x,null)},p(t,[s]){if(1&s){let e;for(k=t[0],e=0;e<k.length;e+=1){const l=b(t,k,e);L[e]?L[e].p(l,s):(L[e]=E(l),L[e].c(),L[e].m(x,null))}for(;e<L.length;e+=1)L[e].d(1);L.length=k.length}},i:m,o:m,d(t){t&&h(s),t&&h(e),t&&h(j),t&&h(x),v(L,t)}}}function x(){return this.fetch("blog.json").then((t=>t.json())).then((t=>({posts:t})))}function k(t,s,e){let{posts:l}=s;return t.$$set=t=>{"posts"in t&&e(0,l=t.posts)},[l]}export default class extends t{constructor(t){super(),s(this,t,k,j,e,{posts:0})}}export{x as preload};
