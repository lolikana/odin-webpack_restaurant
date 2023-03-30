"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[179],{208:(e,t,a)=>{a.r(t)},607:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createMenuPage=void 0,a(208);const s=a(941),n=a(385),c=document.getElementById("main"),r=document.querySelector(".header--backhome"),d=()=>{c.append((0,s.createSectionExplore)(),(0,s.createSectionHowto)(),(0,s.createSectionRestaurants)())};d(),t.createMenuPage=(e,t)=>{c.textContent="",c.classList.add("main--menu"),r.style.display="block",c.append((0,n.createTopPage)(e),(0,n.createSectionMenu)(t))},r?.addEventListener("click",(()=>{c.textContent="",c.classList.remove("main--menu"),r.style.display="none",d()}))},744:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const s=a(827);t.default=e=>{const t=(0,s.replaceSpaceString)(e),a=document.createElement("div");a.classList.add("icon-like");const n=document.createElement("label");n.htmlFor=`like-${t}`;const c=document.createElement("input");c.type="checkbox",c.name=`like-${t}`,c.id=`like-${t}`;const r=document.createElement("i");r.classList.add("fa-solid","fa-heart","icon-solid");const d=document.createElement("i");return d.classList.add("fa-regular","fa-heart","icon-regular"),n.append(c,r,d),a.append(n),a}},742:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const s=a(827);t.default=(e,t,a)=>{const n=document.createElement("article"),c=document.createElement("h2");c.textContent=t;const r=document.createElement("ul");return r.classList.add("menu--cards"),a.map((a=>{r.append(((e,t,a)=>{const n=(0,s.replaceSpaceString)(a.name),c=`check-${(0,s.replaceSpaceString)(e)}-${t}-${n}`,r=document.createElement("li");r.classList.add("menu--card");const d=document.createElement("label");d.htmlFor=c,d.classList.add("menu--card-label");const i=document.createElement("input");i.type="checkbox",i.name=c,i.id=c;const o=document.createElement("div");o.classList.add("menu--card-desc");const u=document.createElement("div");u.classList.add("desc--text");const l=document.createElement("h3");l.classList.add("desc--text-title"),l.textContent=a.name;const m=document.createElement("p");m.classList.add("desc--text-subTitle"),m.textContent=a.desc;const p=document.createElement("p");p.classList.add("desc--price"),p.textContent=`${a.price}$`,u.append(l,m),o.append(u,p);const f=document.createElement("div");f.classList.add("menu--card-check");const g=document.createElement("i");return g.classList.add("fa-solid","fa-circle-check","icon-solid"),f.appendChild(g),d.append(i,o,f),r.append(d),r})(e,t,a))})),n.append(c,r),n}},568:function(e,t,a){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=s(a(744));t.default=e=>{const t=document.createElement("article"),a=document.createElement("button");a.classList.add("restaurants--card"),a.setAttribute("data-restaurant",e.desc.title);const s=document.createElement("div");s.classList.add("restaurants--card-img"),!0===e.tagNew&&s.appendChild((()=>{const e=document.createElement("div");return e.classList.add("restaurants--card-new"),e})());const c=document.createElement("img");c.src=e.img,c.alt=`restaurant ${e.desc.title}`,s.appendChild(c),a.append(s);const r=document.createElement("div");r.classList.add("restaurants--card-desc");const d=document.createElement("div");d.classList.add("restaurants--card-text");const i=document.createElement("h2");i.textContent=e.desc.title;const o=document.createElement("p");return o.textContent=e.desc.location,d.append(i,o),r.append(d,(0,n.default)(e.desc.title)),a.append(s,r),t.append(a),t}},827:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.replaceSpaceString=void 0,t.replaceSpaceString=e=>`${e.toLocaleLowerCase().replace(/\s/g,"")}`},819:function(e,t,a){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.dummyRestaurantMenuData=t.dummyRestaurantData=void 0;const n=s(a(120)),c=s(a(554)),r=s(a(759)),d=s(a(995));t.dummyRestaurantData=[{tagNew:!0,img:n.default,desc:{title:"La Palette du gout",location:"Menilmontant"}},{tagNew:!0,img:d.default,desc:{title:"La note enchantee",location:"Charonne"}},{tagNew:!1,img:r.default,desc:{title:"A la francaise",location:"Cite Rouge"}},{tagNew:!1,img:c.default,desc:{title:"Les delices des sens",location:"Folie-Mericourt"}}],t.dummyRestaurantMenuData=[{restaurant:"La Palette du gout",menu:[{course:"starters",dishes:[{name:"Fricassée d'escargot",desc:"Au piment d'Espelette",price:25},{name:"Foie gras de canard mi-cuit",desc:"Et ses copeaux de truffe noire",price:35},{name:"Œuf au plat",desc:"Assaisonné à la truffe sur lit de caviar",price:20}]},{course:"mains",dishes:[{name:"Filet de boeuf aux herbes",desc:"Accompagné de sa ribambelle de légumes",price:40},{name:"Parmentier de queue de boeuf",desc:"À la truffe noire sur sa purée de panais",price:35},{name:"Filet de turbot",desc:"Aux agrumes",price:44}]},{course:"desserts",dishes:[{name:"Paris-Brest",desc:"Revisité",price:18},{name:"Macaron au chocolat d'exception",desc:"Et glace à la vanille de Madagascar",price:22},{name:"Mousse au chocolat",desc:"Au piment d'Espelette et à la truffe noire",price:23}]}]},{restaurant:"La note enchantee",menu:[{course:"starters",dishes:[{name:"Fricassée d'escargot",desc:"Au piment d'Espelette",price:25},{name:"Foie gras de canard mi-cuit",desc:"Et ses copeaux de truffe noire",price:35},{name:"Œuf au plat",desc:"Assaisonné à la truffe sur lit de caviar",price:20}]},{course:"mains",dishes:[{name:"Filet de boeuf aux herbes",desc:"Accompagné de sa ribambelle de légumes",price:40},{name:"Parmentier de queue de boeuf",desc:"À la truffe noire sur sa purée de panais",price:35},{name:"Filet de turbot",desc:"Aux agrumes",price:44}]},{course:"desserts",dishes:[{name:"Paris-Brest",desc:"Revisité",price:18},{name:"Macaron au chocolat d'exception",desc:"Et glace à la vanille de Madagascar",price:22},{name:"Mousse au chocolat",desc:"Au piment d'Espelette et à la truffe noire",price:23}]}]},{restaurant:"A la francaise",menu:[{course:"starters",dishes:[{name:"Fricassée d'escargot",desc:"Au piment d'Espelette",price:25},{name:"Foie gras de canard mi-cuit",desc:"Et ses copeaux de truffe noire",price:35},{name:"Œuf au plat",desc:"Assaisonné à la truffe sur lit de caviar",price:20}]},{course:"mains",dishes:[{name:"Filet de boeuf aux herbes",desc:"Accompagné de sa ribambelle de légumes",price:40},{name:"Parmentier de queue de boeuf",desc:"À la truffe noire sur sa purée de panais",price:35},{name:"Filet de turbot",desc:"Aux agrumes",price:44}]},{course:"desserts",dishes:[{name:"Paris-Brest",desc:"Revisité",price:18},{name:"Macaron au chocolat d'exception",desc:"Et glace à la vanille de Madagascar",price:22},{name:"Mousse au chocolat",desc:"Au piment d'Espelette et à la truffe noire",price:23}]}]},{restaurant:"Les delices des sens",menu:[{course:"starters",dishes:[{name:"Fricassée d'escargot",desc:"Au piment d'Espelette",price:25},{name:"Foie gras de canard mi-cuit",desc:"Et ses copeaux de truffe noire",price:35},{name:"Œuf au plat",desc:"Assaisonné à la truffe sur lit de caviar",price:20}]},{course:"mains",dishes:[{name:"Filet de boeuf aux herbes",desc:"Accompagné de sa ribambelle de légumes",price:40},{name:"Parmentier de queue de boeuf",desc:"À la truffe noire sur sa purée de panais",price:35},{name:"Filet de turbot",desc:"Aux agrumes",price:44}]},{course:"desserts",dishes:[{name:"Paris-Brest",desc:"Revisité",price:18},{name:"Macaron au chocolat d'exception",desc:"Et glace à la vanille de Madagascar",price:22},{name:"Mousse au chocolat",desc:"Au piment d'Espelette et à la truffe noire",price:23}]}]}]},941:function(e,t,a){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.createSectionRestaurants=t.createSectionHowto=t.createSectionExplore=void 0;const n=a(607),c=s(a(568)),r=a(819);t.createSectionExplore=()=>{const e=document.createElement("section");e.classList.add("section","section--explore");const t=document.createElement("div"),a=document.createElement("p");t.classList.add("section--explore-current"),a.classList.add("section--explore-city","icon-solid"),a.textContent="Paris, Belleville",t.appendChild(a);const s=document.createElement("div"),n=document.createElement("h1"),c=document.createElement("p"),r=document.createElement("a");return s.classList.add("section--explore-find"),n.textContent="Order the menu that fit you",c.textContent="Find some outstanding restaurants selected with care by our team",r.href="#",r.classList.add("btn","btn-main"),r.textContent="Explore our restaurants",s.append(n,c,r),e.append(t,s),e};const d=[{id:"1",text:"Choose a restaurant"},{id:"2",text:"Arrange your menu"},{id:"3",text:"Enjoy on site"}];t.createSectionHowto=()=>{const e=document.createElement("section");e.classList.add("section","section--howto");const t=document.createElement("h1"),a=document.createElement("ul");return a.classList.add("section--howto-list"),d.map((e=>a.append((e=>{const t=document.createElement("li");return t.setAttribute("data-howto",e.id),t.textContent=e.text,t})(e)))),e.append(t,a),e},t.createSectionRestaurants=()=>{const e=document.createElement("section");e.classList.add("section","section--restaurants");const t=document.createElement("h1");t.textContent="Restaurants";const a=document.createElement("div");return a.classList.add("restaurants--cards"),a.addEventListener("click",(e=>(e=>{const t=e.target.closest(".restaurants--card");if(console.log(t),!t)return;const a=t.dataset.restaurant,s=r.dummyRestaurantData.filter((e=>e.desc.title===a))[0],c=r.dummyRestaurantMenuData.filter((e=>e.restaurant===a))[0];(0,n.createMenuPage)(s,c)})(e))),r.dummyRestaurantData.map((e=>a.append((0,c.default)(e)))),e.append(t,a),e}},385:function(e,t,a){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.createSectionMenu=t.createTopPage=void 0;const n=s(a(744)),c=s(a(742));t.createTopPage=e=>{const t=document.createElement("div");t.classList.add("menu--top");const a=document.createElement("img");return a.src=e.img,a.alt=`${e.desc.title} restaurant`,t.appendChild(a),t},t.createSectionMenu=e=>{const t=document.createElement("section");t.classList.add("section","section--menu");const a=document.createElement("div");a.classList.add("menu--name","font-logo");const s=document.createElement("h1");s.textContent=e.restaurant,a.append(s,(0,n.default)(e.restaurant));const r=document.createElement("div");return r.classList.add("menu--carte"),e.menu.map((s=>{r.append((0,c.default)(e.restaurant,s.course,s.dishes)),t.append(a,r)})),t}},120:(e,t,a)=>{e.exports=a.p+"assets/images/a4f8ff417d5edf70e6c0..jpg"},554:(e,t,a)=>{e.exports=a.p+"assets/images/09d204ed638b7fa6d5b2..jpg"},759:(e,t,a)=>{e.exports=a.p+"assets/images/4e7cf3326cf48aa765f6..jpg"},995:(e,t,a)=>{e.exports=a.p+"assets/images/7117d0406a6abbc82d57..jpg"}},e=>{e(e.s=607)}]);
//# sourceMappingURL=main.73c4c655e9aed63ec298.js.map