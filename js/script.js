'use strict';
const CATS=['Oversized T-Shirts','Hoodies','Cargo Pants','Jeans','Sneakers','Accessories','Caps'];
const C=(n,h)=>({n,h});
const BLK=C('Black','#161616'),WHT=C('Off White','#EDECE6'),GRY=C('Stone','#8D8D88'),OLV=C('Olive','#5B6147'),NVY=C('Navy','#1F2A44'),IND=C('Indigo','#2E4570'),SND=C('Sand','#C9B99A'),NEO=C('Neon','#B9FF57');
const SZ=['S','M','L','XL'],ONE=['One Size'];
const PRODUCTS=[
{id:1,name:'Core Oversized Tee',cat:'Oversized T-Shirts',price:35,type:'tee',colors:[BLK,WHT,GRY],sizes:SZ,isNew:1,desc:'Heavyweight 240gsm cotton, boxy cut and dropped shoulders.'},
{id:2,name:'Street Graphic Tee',cat:'Oversized T-Shirts',price:42,type:'tee',colors:[WHT,BLK,OLV],sizes:SZ,desc:'Washed cotton tee with a relaxed oversized fit.'},
{id:3,name:'Night Shift Hoodie',cat:'Hoodies',price:89,type:'hoodie',colors:[BLK,GRY,NVY],sizes:SZ,isNew:1,desc:'450gsm fleece, double-lined hood and kangaroo pocket.'},
{id:4,name:'Block Zip Hoodie',cat:'Hoodies',price:95,type:'hoodie',colors:[OLV,BLK,SND],sizes:SZ,desc:'Full-zip hoodie with a heavy brushed interior.'},
{id:5,name:'Utility Cargo Pant',cat:'Cargo Pants',price:78,type:'cargo',colors:[OLV,BLK,SND],sizes:SZ,isNew:1,desc:'Six-pocket cargos in ripstop cotton with adjustable hems.'},
{id:6,name:'Wide Leg Cargo',cat:'Cargo Pants',price:82,type:'cargo',colors:[BLK,GRY],sizes:SZ,desc:'Wide, straight leg with a relaxed rise.'},
{id:7,name:'Baggy Denim',cat:'Jeans',price:85,type:'jeans',colors:[IND,BLK],sizes:SZ,desc:'Rigid 12oz denim with a baggy, stacked fit.'},
{id:8,name:'Washed Straight Jeans',cat:'Jeans',price:79,type:'jeans',colors:[GRY,IND],sizes:SZ,desc:'Stone-washed straight leg jeans.'},
{id:9,name:'Runner 01 Sneaker',cat:'Sneakers',price:120,type:'shoe',colors:[WHT,BLK,NEO],sizes:['40','41','42','43','44'],isNew:1,desc:'Chunky runner with cushioned sole and breathable mesh.'},
{id:10,name:'Court Low Sneaker',cat:'Sneakers',price:110,type:'shoe',colors:[BLK,WHT],sizes:['40','41','42','43','44'],desc:'Clean leather low-top for every day.'},
{id:11,name:'Crossbody Utility Bag',cat:'Accessories',price:48,type:'bag',colors:[BLK,OLV],sizes:ONE,desc:'Water-resistant bag with an adjustable strap.'},
{id:12,name:'Chain Link Necklace',cat:'Accessories',price:32,type:'chain',colors:[GRY,NEO],sizes:ONE,desc:'Stainless steel chain with a lobster clasp.'},
{id:13,name:'DAVANH Dad Cap',cat:'Caps',price:28,type:'cap',colors:[BLK,WHT,NEO],sizes:ONE,isNew:1,desc:'Washed cotton cap with an embroidered logo.'},
{id:14,name:'Panel Snapback',cat:'Caps',price:30,type:'cap',colors:[NVY,BLK],sizes:ONE,desc:'Structured six-panel snapback.'}];
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const money=n=>'$'+n.toFixed(2),byId=id=>PRODUCTS.find(p=>p.id==id);
const S='stroke="rgba(0,0,0,.4)" stroke-width="2" stroke-linejoin="round"';
function art(t,c){const f=`fill="${c}" ${S}`,d='fill="rgba(0,0,0,.18)"';const P={
tee:`<path ${f} d="M70 40 40 55 25 90l20 8 13-18v90h84V80l13 18 20-8-15-35-30-15Q100 62 70 40z"/>`,
hoodie:`<path ${f} d="M68 48 35 70l-7 90 20 4 10-64v72h84v-72l10 64 20-4-7-90-33-22Q100 70 68 48z"/><path ${f} d="M72 46Q100 10 128 46Q100 78 72 46z"/><path ${d} d="M72 130h56l6 28H66z"/>`,
cargo:`<path ${f} d="M62 30h76l10 150h-38l-10-90-10 90H52z"/><path ${d} d="M62 30h76v12H62zM56 110h24v26H56zM120 110h24v26h-24z"/>`,
jeans:`<path ${f} d="M62 30h76l10 150h-38l-10-90-10 90H52z"/><path ${d} d="M62 30h76v12H62z"/><path fill="none" stroke="rgba(255,255,255,.4)" stroke-width="2" d="M100 42v48M70 54q10 14 22 12"/>`,
shoe:`<path ${f} d="M20 130v-25q30-5 50-25l20 12q20 8 60 16 35 7 35 27v13H20z"/><path fill="#EDECE6" ${S} d="M20 140h165v14H20z"/><path ${d} d="M70 80l20 12-8 10-20-12z"/>`,
cap:`<path ${f} d="M45 125Q45 55 100 55t55 70z"/><path ${f} d="M120 120q65-8 70 10-40 10-80 0z"/><circle cx="100" cy="95" r="6" fill="rgba(255,255,255,.5)"/>`,
bag:`<path fill="none" stroke="${c}" stroke-width="8" d="M60 90Q100 -10 140 90"/><rect ${f} x="55" y="85" width="90" height="75" rx="10"/><path ${d} d="M55 105h90v8H55z"/>`,
chain:`<path fill="none" stroke="${c}" stroke-width="9" stroke-dasharray="14 5" stroke-linecap="round" d="M45 50Q100 190 155 50"/><circle cx="100" cy="142" r="12" fill="${c}" ${S}/>`};
return `<svg viewBox="0 0 200 200" role="img" aria-label="${t}">${P[t]}</svg>`}
/* cart */
const getCart=()=>{try{return JSON.parse(localStorage.getItem('davanh_cart'))||[]}catch(e){return[]}};
const saveCart=c=>{try{localStorage.setItem('davanh_cart',JSON.stringify(c))}catch(e){}updateCount()};
const count=()=>getCart().reduce((s,i)=>s+i.qty,0);
function updateCount(){const b=$('#cart-count');if(b)b.textContent=count()}
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('show'),2200)}
function addToCart(id,size,color,qty=1){const c=getCart(),k=`${id}-${size}-${color}`,x=c.find(i=>i.key===k);
x?x.qty+=qty:c.push({key:k,id:+id,size,color,qty});saveCart(c);toast('Added to cart')}
/* layout */
function layout(){const pg=document.body.dataset.page,a=p=>pg===p?'active':'';
$('#site-header').outerHTML=`<header><div class="wrap nav"><a href="index.html" class="logo">DAV<span>A</span>NH</a>
<ul id="menu"><li><a class="${a('home')}" href="index.html">Home</a></li><li><a class="${a('shop')}" href="shop.html">Shop</a></li>${CATS.slice(0,3).map(c=>`<li><a href="shop.html?cat=${encodeURIComponent(c)}">${c}</a></li>`).join('')}</ul>
<div class="nav-r"><a class="cart-link ${a('cart')}" href="cart.html" aria-label="Cart"><i class="fa-solid fa-bag-shopping"></i><span class="badge" id="cart-count">0</span></a>
<button class="burger" id="burger" aria-label="Menu" aria-expanded="false"><i class="fa-solid fa-bars"></i></button></div></div></header>`;
$('#site-footer').outerHTML=`<footer><div class="wrap"><div class="f-grid"><div><div class="logo">DAV<span style="color:var(--neon)">A</span>NH</div><p style="margin-top:.8rem">YOUR STYLE. YOUR RULES.</p>
<div class="social"><a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a><a href="#" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a><a href="#" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a></div></div>
<div><h4>Shop</h4><ul>${CATS.slice(0,4).map(c=>`<li><a href="shop.html?cat=${encodeURIComponent(c)}">${c}</a></li>`).join('')}</ul></div>
<div><h4>More</h4><ul>${CATS.slice(4).map(c=>`<li><a href="shop.html?cat=${encodeURIComponent(c)}">${c}</a></li>`).join('')}</ul></div>
<div><h4>Help</h4><ul><li><a href="cart.html">Your cart</a></li><li><a href="shop.html">All products</a></li></ul></div></div>
<p class="copy">&copy; ${new Date().getFullYear()} DAVANH FASHION. All rights reserved.</p></div></footer>`;
$('#burger').onclick=()=>{const o=$('#menu').classList.toggle('open');$('#burger').setAttribute('aria-expanded',o)};updateCount()}
/* cards */
function card(p){return `<article class="card"><a class="card-img" href="product.html?id=${p.id}">${p.isNew?'<span class="tag">NEW</span>':''}${art(p.type,p.colors[0].h)}</a>
<h3><a href="product.html?id=${p.id}">${p.name}</a></h3><span class="cat">${p.cat}</span><div class="price">${money(p.price)}</div>
<button class="btn" data-add="${p.id}"><i class="fa-solid fa-bag-shopping"></i> Add to Cart</button></article>`}
function bindAdd(root){$$('[data-add]',root).forEach(b=>b.onclick=()=>{const p=byId(b.dataset.add);addToCart(p.id,p.sizes[Math.min(1,p.sizes.length-1)],p.colors[0].n)})}
function fill(sel,list){const g=$(sel);g.innerHTML=list.map(card).join('');bindAdd(g)}
/* pages */
function home(){fill('#new-grid',PRODUCTS.filter(p=>p.isNew).slice(0,4));fill('#featured-grid',[3,7,9,5].map(byId));
$('#hero-art').innerHTML=art('hoodie','#101010');
$('#cat-tiles').innerHTML=CATS.map(c=>`<a href="shop.html?cat=${encodeURIComponent(c)}">${c}<i class="fa-solid fa-arrow-right"></i></a>`).join('');
const f=$('#news-form'),m=$('#news-msg');f.onsubmit=e=>{e.preventDefault();const v=$('#news-email').value.trim();
if(!v){m.className='form-msg err';m.textContent='Enter your email address.'}
else if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)){m.className='form-msg err';m.textContent='Enter a valid email, like name@example.com.'}
else{m.className='form-msg ok';m.textContent='You\'re in. Watch your inbox for the next drop.';f.reset()}}}
function shop(){let cat=new URLSearchParams(location.search).get('cat')||'All';if(cat!=='All'&&!CATS.includes(cat))cat='All';
const chips=$('#chips'),q=$('#search'),so=$('#sort');
const render=()=>{chips.innerHTML=['All',...CATS].map(c=>`<button class="chip ${c===cat?'on':''}" data-c="${c}">${c}</button>`).join('');
$$('.chip',chips).forEach(b=>b.onclick=()=>{cat=b.dataset.c;render()});
let l=PRODUCTS.filter(p=>(cat==='All'||p.cat===cat)&&(p.name+' '+p.cat).toLowerCase().includes(q.value.trim().toLowerCase()));
if(so.value==='low')l.sort((a,b)=>a.price-b.price);if(so.value==='high')l.sort((a,b)=>b.price-a.price);
fill('#shop-grid',l);$('#empty').hidden=l.length>0;$('#result-count').textContent=`${l.length} product${l.length===1?'':'s'}`};
q.oninput=so.onchange=render;render()}
function product(){const p=byId(new URLSearchParams(location.search).get('id')),v=$('#product-view');
if(!p){v.innerHTML='<div class="empty-cart"><h2>Product not found</h2><a class="btn" href="shop.html">Back to shop</a></div>';$('#related-grid').closest('section').hidden=true;return}
document.title=p.name+' | DAVANH FASHION';let size=p.sizes[p.sizes.length>1?1:0],color=p.colors[0],qty=1;
const draw=()=>{v.innerHTML=`<div class="pd-img">${art(p.type,color.h)}</div><div><p class="crumb"><a href="shop.html">Shop</a> / <a href="shop.html?cat=${encodeURIComponent(p.cat)}">${p.cat}</a></p>
<h1>${p.name}</h1><div class="price">${money(p.price)}</div><p class="d">${p.desc}</p>
<div class="opt">Size</div><div class="opts">${p.sizes.map(s=>`<button class="size ${s===size?'on':''}" data-s="${s}">${s}</button>`).join('')}</div>
<div class="opt">Color: ${color.n}</div><div class="opts">${p.colors.map(c=>`<button class="sw ${c.n===color.n?'on':''}" data-c="${c.n}" style="background:${c.h}" aria-label="${c.n}"></button>`).join('')}</div>
<div class="opt">Quantity</div><div class="qty"><button id="m" aria-label="Decrease">&minus;</button><span>${qty}</span><button id="p" aria-label="Increase">+</button></div>
<div><button class="btn btn-block" id="add"><i class="fa-solid fa-bag-shopping"></i> Add to Cart</button></div></div>`;
$$('.size',v).forEach(b=>b.onclick=()=>{size=b.dataset.s;draw()});$$('.sw',v).forEach(b=>b.onclick=()=>{color=p.colors.find(c=>c.n===b.dataset.c);draw()});
$('#m').onclick=()=>{qty=Math.max(1,qty-1);draw()};$('#p').onclick=()=>{qty=Math.min(20,qty+1);draw()};$('#add').onclick=()=>addToCart(p.id,size,color.n,qty)};draw();
fill('#related-grid',PRODUCTS.filter(x=>x.cat===p.cat&&x.id!==p.id).concat(PRODUCTS.filter(x=>x.cat!==p.cat)).slice(0,4))}
function cart(){const box=$('#cart-items'),sum=$('#summary');
const render=()=>{const c=getCart();
if(!c.length){box.innerHTML='<div class="empty-cart"><h2>Your cart is empty</h2><p>Add something you will wear on repeat.</p><a class="btn" href="shop.html">Start shopping</a></div>';sum.hidden=true;return}
sum.hidden=false;let sub=0;
box.innerHTML=c.map(i=>{const p=byId(i.id),col=p.colors.find(x=>x.n===i.color)||p.colors[0];sub+=p.price*i.qty;
return `<div class="item"><a class="thumb" href="product.html?id=${p.id}">${art(p.type,col.h)}</a><div><h3>${p.name}</h3><small>Size ${i.size} &middot; ${i.color}</small><small>${money(p.price)}</small>
<div class="qty"><button data-k="${i.key}" data-d="-1" aria-label="Decrease">&minus;</button><span>${i.qty}</span><button data-k="${i.key}" data-d="1" aria-label="Increase">+</button></div></div>
<div class="right"><strong>${money(p.price*i.qty)}</strong><br><button class="rm" data-r="${i.key}"><i class="fa-solid fa-trash"></i> Remove</button></div></div>`}).join('');
const ship=sub>=150?0:9;
sum.innerHTML=`<h3>Order Summary</h3><div class="line"><span>Subtotal</span><span>${money(sub)}</span></div><div class="line"><span>Shipping</span><span>${ship?money(ship):'Free'}</span></div>
<div class="line total"><span>Total</span><span>${money(sub+ship)}</span></div><p style="color:var(--gray);font-size:.85rem;margin-top:.6rem">Free shipping on orders over $150.</p><button class="btn btn-block" id="checkout">Checkout</button>`;
$$('[data-d]',box).forEach(b=>b.onclick=()=>{const c=getCart(),i=c.find(x=>x.key===b.dataset.k);i.qty=Math.max(1,Math.min(20,i.qty+ +b.dataset.d));saveCart(c);render()});
$$('[data-r]',box).forEach(b=>b.onclick=()=>{saveCart(getCart().filter(x=>x.key!==b.dataset.r));render();toast('Item removed')});
$('#checkout').onclick=()=>{saveCart([]);render();box.innerHTML='<div class="empty-cart"><h2>Order placed</h2><p>Thanks for shopping DAVANH. This is a demo store, so no payment was taken.</p><a class="btn" href="shop.html">Keep shopping</a></div>';sum.hidden=true}};render()}
document.addEventListener('DOMContentLoaded',()=>{layout();({home,shop,product,cart})[document.body.dataset.page]()});
