(function(t){function e(e){for(var i,r,o=e[0],l=e[1],c=e[2],u=0,m=[];u<o.length;u++)r=o[u],s[r]&&m.push(s[r][0]),s[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},s={app:0},n=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"78481beb"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,i){a=s[t]=[e,i]});e.push(a[2]=i);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=r(t),n=function(e){l.onerror=l.onload=null,clearTimeout(c);var a=s[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+i+": "+n+")");r.type=i,r.request=n,a[1](r)}s[t]=void 0}};var c=setTimeout(function(){n({type:"timeout",target:l})},12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"263b":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero"},[a("div",{staticClass:"grid-container"},[a("div",{staticClass:"grid-x grid-padding-x"},[a("div",{staticClass:"cell"},[a("h1",{staticClass:"title"},[t._v(t._s(t.title))])]),t._m(0)])]),a("div",{staticClass:"plax"})])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cell"},[a("div",{staticClass:"hours"},[a("h3",[t._v("Hours")]),a("ul",{staticClass:"hours-list"},[a("li",[t._v("Sunday: 10:00 am - 12:00 am")]),a("li",[t._v("Monday - Thursday: 11:00 am - 1:00 am ")]),a("li",[t._v("Friday: 11:00 am - 2:00 am")]),a("li",[t._v("Saturday: 10:00 am - 2:00 am")])]),a("div",{staticClass:"hours-happy"},[a("h4",[t._v("Happy Hour Mon - Fri 4:00pm - 7:00pm")])])])])}],n={name:"hero",components:{},data:function(){return{}},props:["title"]},r=n,o=a("2877"),l=Object(o["a"])(r,i,s,!1,null,null,null);e["a"]=l.exports},4376:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section subscribe"},[a("div",{staticClass:"grid-container"},[a("div",{staticClass:"grid-x"},[a("div",{staticClass:"cell"},[a("h1",{staticClass:"subscribe-title variane"},[t._v(t._s(t.title)),a("span",{staticClass:"avenir"},[t._v("we send deals, not spam.")])])])]),t._m(0)]),a("div",{staticClass:"subscribe-bg",style:{backgroundImage:"url("+this.bgImage+")"}})])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid-x"},[a("div",{staticClass:"cell"},[a("input",{staticClass:"subscribe-input",attrs:{type:"text",placeholder:"email address"}}),a("button",{staticClass:"subscribe-submit button button-full button-secondary",attrs:{type:"submit"}},[t._v("Sign Up")])])])}],n=(a("cadf"),a("551c"),a("097d"),{name:"Subscribe",data:function(){return{title:"join the mailing list",bgImage:a("e1aa")}}}),r=n,o=a("2877"),l=Object(o["a"])(r,i,s,!1,null,null,null);e["a"]=l.exports},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view"),a("Footer")],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",t._g({staticClass:"header",class:{"header-unsticky":t.scrolled,"header-sticky":t.background}},t.handleScroll()),[a("div",{staticClass:"grid-container"},[a("div",{staticClass:"grid-x align-justify align-middle"},[a("div",{staticClass:"cell auto"},[a("router-link",{staticClass:"logo",attrs:{to:"/"}},[a("span",{staticClass:"rye colorWhite"},[t._v("Willy's ")]),a("span",{staticClass:"variane colorSecondary"},[t._v("Sportsbar")]),a("span",{staticClass:"colorPrimary"},[t._v("& Casino")])])],1),a("div",{staticClass:"cell auto"},[a("button",{staticClass:"hamburger",class:{active:t.menuState},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleMenu()}}},[a("span")])]),a("Navigation")],1)])])},o=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"nav rye",class:{active:t.menuState},attrs:{id:"nav"}},[a("ul",[a("li",{staticClass:"nav-link",on:{click:function(e){return t.toggleMenu()}}},[a("router-link",{attrs:{to:{name:"Home"},exact:""}},[t._v("Home")])],1),a("li",{staticClass:"nav-link",on:{click:function(e){return t.toggleMenu()}}},[a("router-link",{attrs:{to:"/Menu"}},[t._v("Menu")])],1),a("li",{staticClass:"nav-link",on:{click:function(e){return t.toggleMenu()}}},[a("router-link",{attrs:{to:"/About"}},[t._v("About")])],1),a("li",{staticClass:"nav-link",on:{click:function(e){return t.toggleMenu()}}},[a("router-link",{attrs:{to:"/Contact"}},[t._v("Contact")])],1),t._m(0),t._m(1)])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-link"},[a("a",{attrs:{href:"https://www.facebook.com/pg/Willys-Sports-Bar-Grille-and-Casino-152793464753634/posts/",target:"_blank"}},[t._v("Lunch Specials")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-link"},[a("a",{attrs:{href:"https://www.facebook.com/Willys-Sports-Bar-Grille-and-Casino-152793464753634/",target:"_blank"}},[a("i",{staticClass:"fab fa-facebook"})])])}],u=a("cebc"),d=a("2f62"),m={computed:Object(u["a"])({},Object(d["c"])(["menuState"])),methods:Object(u["a"])({},Object(d["b"])(["change_menuState"]),{toggleMenu:function(){this.change_menuState()}})},f={name:"navigation",mixins:[m],data:function(){return{}}},h=f,p=a("2877"),v=Object(p["a"])(h,l,c,!1,null,null,null),g=v.exports,b={name:"Header",mixins:[m],components:{Navigation:g},data:function(){return{title:"Header",limitPosition:600,scrolled:!1,background:!1,lastPosition:0,top:0}},methods:{handleScroll:function(){this.lastPosition<window.scrollY&&this.limitPosition<window.scrollY&&(this.scrolled=!0),this.lastPosition>window.scrollY&&(this.scrolled=!1),window.scrollY>this.top&&(this.background=!0),window.scrollY===this.top&&(this.background=!1),this.lastPosition=window.scrollY}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},C=b,_=Object(p["a"])(C,r,o,!1,null,null,null),y=_.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"grid-container"},[a("div",{staticClass:"grid-x"},[a("div",{staticClass:"cell medium-6 large-8"},[a("router-link",{staticClass:"logo",attrs:{to:{name:"Home"},exact:""}},[a("span",{staticClass:"rye colorWhite"},[t._v("Willy's ")]),a("span",{staticClass:"variane colorSecondary"},[t._v("Sportsbar")]),a("span",{staticClass:"colorWhite"},[t._v("& Casino")])]),t._m(0),t._m(1)],1),a("div",{staticClass:"cell medium-6 large-4"},[a("ul",{staticClass:"footer-links"},[a("li",{staticClass:"footer-link"},[a("router-link",{attrs:{to:"/"},on:{click:function(e){return t.toggleMenu()}}},[t._v("Home")])],1),a("li",{staticClass:"footer-link"},[a("router-link",{attrs:{to:"/Menu"},on:{click:function(e){return t.toggleMenu()}}},[t._v("Menu")])],1),a("li",{staticClass:"footer-link"},[a("router-link",{attrs:{to:"/About"},on:{click:function(e){return t.toggleMenu()}}},[t._v("About")])],1),a("li",{staticClass:"footer-link"},[a("router-link",{attrs:{to:"/Contact"},on:{click:function(e){return t.toggleMenu()}}},[t._v("Contact")])],1)])])])]),a("div",{staticClass:"grid-container full fillBlack"},[a("div",{staticClass:"grid-x"},[a("div",{staticClass:"cell footer-copyright"},[a("small",[t._v("Copyright © "+t._s(t.date)+" Willy's Sports Bar")])])])])])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-address"},[a("p",[t._v("1401 9th Ave SW "),a("br"),t._v(" Watertown, SD 57201")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-contact"},[a("p",[a("strong",[t._v("P")]),t._v(": "),a("a",{attrs:{href:"tel:605.878.3500"}},[t._v("605.878.3500")])]),a("p",[a("strong",[t._v("E")]),t._v(": "),a("a",{attrs:{href:"mailto:willy@willyssportsbar.com"}},[t._v("willy@willyssportsbar.com")])])])}],x={name:"Footer",data:function(){return{date:(new Date).getFullYear()}}},S=x,j=Object(p["a"])(S,k,w,!1,null,null,null),T=j.exports,O={name:"App",components:{Header:y,Footer:T}},M=O,P=Object(p["a"])(M,s,n,!1,null,null,null),I=P.exports,N=a("8c4f"),R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"home"},[a("Hero",{attrs:{title:t.title}}),a("PromoBanner"),a("section",{staticClass:"intro intro-home"},[a("div",{staticClass:"grid-container"},[a("div",{staticClass:"grid-x grid-padding-x"},[a("div",{staticClass:"cell medium-6"},[a("h4",{staticClass:"intro-preheading"},[t._v("Who We Are")]),a("h1",{staticClass:"intro-heading"},[t._v("Welcome")]),a("h3",{staticClass:"intro-subheading"},[t._v("Our cocktail menu is inspired by anything and everything that makes you thirsty")]),a("p",[t._v("Located in Watertown, SD and inspired by midwestern comfort, Willy's embodies the energy of the upper midwest with the laid back atmosphere of your favorite place.")]),a("router-link",{staticClass:"button button-primary",attrs:{to:"/About"}},[a("span",[t._v("More Info")]),a("i",{staticClass:"fas fa-info-circle"})])],1),a("div",{staticClass:"cell medium-6"},[a("Carousel",{staticClass:"intro-home"})],1)])])]),a("section",{staticClass:"fillPrimary"},[a("div",{staticClass:"grid-container"},[a("div",{staticClass:"grid-x grid-padding-x"},[a("div",{staticClass:"cell medium-6 large-8"},[a("h2",{staticClass:"variane textCenter colorSecondary mb-2"},[t._v("Daily Specials")]),a("Accordion")],1),t._m(0)])])]),a("section",{staticClass:"cards"},[a("div",{staticClass:"grid-container"},[a("div",{staticClass:"grid-x grid-padding-x"},t._l(t.cards,function(t){return a("div",{staticClass:"cell medium-6 large-4"},[a("Card",{key:t.title,attrs:{item:t}})],1)}),0)])]),a("Testimonials",{staticClass:"home-testimonials"})],1)},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cell medium-6 large-4",staticStyle:{overflow:"hidden"}},[a("h2",{staticClass:"variane textCenter colorSecondary mb-2"},[t._v("Lunch Specials")]),a("div",{staticClass:"fb-page",attrs:{"data-href":"https://www.facebook.com/pg/Willys-Sports-Bar-Grille-and-Casino-152793464753634","data-tabs":"timeline","data-width":"","data-height":"400","data-small-header":"true","data-adapt-container-width":"true","data-hide-cover":"true","data-show-facepile":"false"}},[a("blockquote",{staticClass:"fb-xfbml-parse-ignore",attrs:{cite:"https://www.facebook.com/pg/Willys-Sports-Bar-Grille-and-Casino-152793464753634"}},[a("a",{attrs:{href:"https://www.facebook.com/pg/Willys-Sports-Bar-Grille-and-Casino-152793464753634"}},[t._v("Willy's: Sports Bar, Grille, and Casino")])])])])}],W=a("263b"),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"accordion"},t._l(t.data,function(t){return a("accordion-item",{key:t.title,attrs:{item:t}})}),1)},B=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"accordion-item",class:{"is-open":t.open},on:{click:function(e){t.open=!t.open}}},[a("div",{staticClass:"accordion-trigger"},[t._v(t._s(t.item.title))]),t.open?a("div",{staticClass:"accordion-content"},[a("p",[t._v(t._s(t.item.text))])]):t._e()])},q=[],A={name:"accordion-item",data:function(){return{open:!1,height:0}},props:["item"],methods:{}},F=A,D=Object(p["a"])(F,H,q,!1,null,null,null),L=D.exports,Y={name:"Accordion",components:{accordionItem:L},data:function(){return{title:"Accordion",data:[{title:"Sunday",text:"This is a special for Sunday"},{title:"Monday",text:"This is a special for Monday"},{title:"Tuesday",text:"This is a special for Tuesday"},{title:"Wednesday",text:"This is a special for Wednesday"},{title:"Thursday",text:"This is a special for Thursday"},{title:"Friday",text:"This is a special for Friday"},{title:"Saturday",text:"This is a special for Saturday"}]}}},G=Y,V=Object(p["a"])(G,$,B,!1,null,null,null),J=V.exports,Z=a("77f2"),z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"carousel"},[a("div",{staticClass:"carousel-nav"},[a("a",{staticClass:"prev fas fa-chevron-left",on:{click:function(e){return t.navigate(-1)}}}),a("a",{staticClass:"next fas fa-chevron-right",on:{click:function(e){return t.navigate(1)}}})]),a("div",{staticClass:"carousel-wrapper"},[a("transition",{attrs:{name:"fade"}},[a("img",{key:t.currentItem,staticClass:"carousel-item",attrs:{alt:"",src:t.currentItem},on:{mouseover:t.stopRotation,mouseout:t.startRotation}})])],1)])},K=[],U={name:"Carousel",data:function(){return{title:"Carousel",items:[a("d2a8"),a("f914"),a("e7a0")],currentNumber:0,timer:null}},mounted:function(){this.startRotation()},methods:{rotate:function(){this.currentNumber>=this.length?this.currentNumber=0:this.currentNumber++},startRotation:function(){this.timer=setInterval(this.rotate,7e3)},stopRotation:function(){clearInterval(this.timer)},resetRotation:function(){this.stopRotation(),this.startRotation()},navigate:function(t){var e=this.currentNumber;e+=t,e>this.length?e=0:e<0&&(e=this.length),this.resetRotation(),this.currentNumber=e}},computed:{length:function(){return this.items.length-1},currentItem:function(){return this.items[this.currentNumber]}}},Q=U,X=Object(p["a"])(Q,z,K,!1,null,null,null),tt=X.exports,et=a("ae7b"),at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("img",{staticClass:"card-image",attrs:{src:t.item.image,alt:"Card Image"}})]),a("div",{staticClass:"card-content"},[a("h2",{staticClass:"card-title"},[t._v(t._s(t.item.title))]),a("p",{staticClass:"card-copy"},[t._v(t._s(t.item.content))])]),a("div",{staticClass:"card-footer"},[a("router-link",{staticClass:"card-button",attrs:{to:t.item.link}},[a("i",{staticClass:"fas fa-arrow-right"})])],1)])},it=[],st={name:"Card",data:function(){return{publicPath:"/"}},props:["item"]},nt=st,rt=Object(p["a"])(nt,at,it,!1,null,null,null),ot=rt.exports,lt=a("4376"),ct={name:"home",components:{Hero:W["a"],Accordion:J,PromoBanner:Z["a"],Carousel:tt,Testimonials:et["a"],Card:ot,Subscribe:lt["a"]},data:function(){return{title:"Home",bgImage:a("e1aa"),cards:[{image:a("ac78"),title:"Craft Beer",content:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget.",link:"/Menu"},{image:a("8982"),title:"Original Drinks",content:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget.",link:"/Menu"},{image:a("ca9b"),title:"Delicious Food",content:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget.",link:"/Menu"}]}}},ut=ct,dt=Object(p["a"])(ut,R,E,!1,null,null,null),mt=dt.exports;i["a"].use(N["a"]);var ft=new N["a"]({routes:[{path:"/",name:"Home",component:mt},{path:"/menu",name:"menu",component:function(){return a.e("about").then(a.bind(null,"9a0b"))}},{path:"/events",name:"events",component:function(){return a.e("about").then(a.bind(null,"aa9c"))}},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/contact",name:"contact",component:function(){return a.e("about").then(a.bind(null,"b8fa"))}}],scrollBehavior:function(){window.scrollTo({top:0,behavior:"smooth"})}});a("c1c3");i["a"].use(d["a"]);var ht={menuOpen:!1},pt={menuState:function(){return ht.menuOpen}},vt={set_menuState:function(t,e){t.menuOpen=e}},gt={change_menuState:function(t){t.commit("set_menuState",!t.state.menuOpen)}},bt=new d["a"].Store({state:ht,getters:pt,mutations:vt,actions:gt});i["a"].config.productionTip=!1,new i["a"]({router:ft,store:bt,render:function(t){return t(I)}}).$mount("#app"),document.addEventListener("scroll",function(){var t=window.pageYOffset,e=document.querySelector(".plax");e.style.bottom=-.15*t+"px"})},"77f2":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"promoBanner"},[a("div",{staticClass:"grid-container"},[a("div",{staticClass:"grid-x"},[a("div",{staticClass:"cell"},[a("div",{staticClass:"promoBanner-item"},[a("transition",{attrs:{name:"slide"}},[a("div",{key:t.currentItem,staticClass:"promorBanner-item",attrs:{src:t.currentItem},on:{mouseover:t.stopRotation,mouseout:t.startRotation}},[a("h3",[t._v(t._s(t.items[t.currentNumber].day))]),a("p",[t._v(t._s(t.items[t.currentNumber].special))])])]),a("div",{staticClass:"promoBanner-nav"},[a("a",{staticClass:"prev fas fa-chevron-left",on:{click:function(e){return t.navigate(-1)}}}),a("a",{staticClass:"next fas fa-chevron-right",on:{click:function(e){return t.navigate(1)}}})])],1)])])])])},s=[],n=(a("cadf"),a("551c"),a("097d"),{name:"PromoBanner",data:function(){return{title:"Promo Banner",items:[{day:"Sunday",special:"This is a special for Sunday."},{day:"Monday",special:"This is a special for Monday."},{day:"Tuesday",special:"This is a special for Tuesday."},{day:"Wednesday",special:"This is a special for Wednesday."},{day:"Thursday",special:"This is a special for Thursday."},{day:"Friday",special:"This is a special for Friday."},{day:"Saturday",special:"This is a special for Saturday."}],currentNumber:0,timer:null}},mounted:function(){this.startRotation()},methods:{rotate:function(){this.currentNumber>=this.length?this.currentNumber=0:this.currentNumber++},startRotation:function(){this.timer=setInterval(this.rotate,3e3)},stopRotation:function(){clearInterval(this.timer)},resetRotation:function(){this.stopRotation(),this.startRotation()},navigate:function(t){var e=this.currentNumber;e+=t,e>this.length?e=0:e<0&&(e=this.length),this.resetRotation(),this.currentNumber=e}},computed:{length:function(){return this.items.length-1},currentItem:function(){return this.items[this.currentNumber]}}}),r=n,o=a("2877"),l=Object(o["a"])(r,i,s,!1,null,null,null);e["a"]=l.exports},8982:function(t,e,a){t.exports=a.p+"img/card-original-drinks.bf79f18f.jpg"},ac78:function(t,e,a){t.exports=a.p+"img/card-craft-beer.7a8428e0.jpg"},ae7b:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"testimonials"},[a("div",{staticClass:"grid-container"},[t._m(0),a("div",{staticClass:"grid-container testimonials-slider"},[a("div",{staticClass:"grid-x align-justify"},[a("div",{staticClass:"cell small-1 textLeft"},[a("a",{staticClass:"prev",on:{click:function(e){return t.navigate(-1)}}})]),a("div",{staticClass:"cell small-10 medium-8"},[a("transition",{attrs:{name:"slide"}},[a("blockquote",{key:t.currentItem,staticClass:"testimonials-sliderItem",attrs:{src:t.currentItem},on:{mouseover:t.stopRotation,mouseout:t.startRotation}},[a("p",[t._v(t._s(t.items[t.currentNumber].quote))]),a("div",{staticClass:"testimonials-author"},[t._v("— "),a("span",{staticClass:"styleItalic colorSecondary"},[t._v(t._s(t.items[t.currentNumber].author))])])])])],1),a("div",{staticClass:"cell small-1 textRight"},[a("a",{staticClass:"next",on:{click:function(e){return t.navigate(1)}}})])])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid-x align-center"},[a("div",{staticClass:"cell medium-8"},[a("h2",{staticClass:"variane"},[t._v("Word on the streets...")])])])}],n={name:"Testimonials",data:function(){return{title:"Testimonials",items:[{quote:"WOW!!! Bugers are AMAZING. Hand pressed angus meat. Homemade sauces. Truly a gourmet burger. Friendly service. Priced fairly.",author:"KO"},{quote:"The food has been amazing every time that I have ordered. I usually order using Zipdish. I love Willy's and would recommend it to anyone!",author:"DayLynn McDonald"},{quote:"Friendly service and good food. French Dip and Texas Patty Melt are both great, as are the onion rings!  Perfect place to catch a game on TV.",author:"Christopher Hughes"}],currentNumber:0,timer:null}},mounted:function(){this.startRotation()},methods:{rotate:function(){this.currentNumber>=this.length?this.currentNumber=0:this.currentNumber++},startRotation:function(){this.timer=setInterval(this.rotate,5e3)},stopRotation:function(){clearInterval(this.timer)},resetRotation:function(){this.stopRotation(),this.startRotation()},navigate:function(t){var e=this.currentNumber;e+=t,e>this.length?e=0:e<0&&(e=this.length),this.resetRotation(),this.currentNumber=e}},computed:{length:function(){return this.items.length-1},currentItem:function(){return this.items[this.currentNumber]}}},r=n,o=a("2877"),l=Object(o["a"])(r,i,s,!1,null,null,null);e["a"]=l.exports},c1c3:function(t,e,a){},ca9b:function(t,e,a){t.exports=a.p+"img/card-delicious-food.634d6c18.jpg"},d2a8:function(t,e,a){t.exports=a.p+"img/carousel-1.3157ee7c.jpg"},e1aa:function(t,e,a){t.exports=a.p+"img/subscribe-bg.3d1f5d16.jpg"},e7a0:function(t,e,a){t.exports=a.p+"img/carousel-3.b082f756.jpg"},f914:function(t,e,a){t.exports=a.p+"img/carousel-2.ec8133ba.jpg"}});
//# sourceMappingURL=app.53f059e9.js.map