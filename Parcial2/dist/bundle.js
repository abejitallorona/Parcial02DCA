(()=>{"use strict";var t,e,s;(e=t||(t={})).ADD_PRODUCT="ADD_PRODUCT",e.REMOVE_PRODUCT="REMOVE_PRODUCT",e.CHANGE_STOCK="CHANGE_STOCK",e.GETPRODUCTS="GETPRODUCTS",function(t){t.STORE="STORE"}(s||(s={}));let o=(({key:t,defaultValue:e})=>{const s=localStorage.getItem(t)||sessionStorage.getItem(t);return s?JSON.parse(s):e})({key:s.STORE,defaultValue:{products:[]}}),n=[];const i=e=>{const i=((e,s)=>{const{action:o,payload:n}=e;switch(o){case t.ADD_PRODUCT:return Object.assign(Object.assign({},s),{products:[...s.products,n]});case t.REMOVE_PRODUCT:return Object.assign(Object.assign({},s),{products:s.products.filter((t=>t.id!==n))});case t.CHANGE_STOCK:return Object.assign(Object.assign({},s),{products:s.products.map((t=>t.id===n?Object.assign(Object.assign({},t),{state:!t.state}):t))});default:return s}})(e,JSON.parse(JSON.stringify(o)));var r;o=i,r=i,(({key:t,value:e,session:s=!1})=>{const o=s?sessionStorage:localStorage,n=JSON.stringify(e);o.setItem(t,n)})({key:s.STORE,value:r}),n.forEach((t=>t.render()))},r=t=>{n=[...n,t]};class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),r(this)}connectedCallback(){this.render()}render(){var e;this.shadowRoot&&(this.shadowRoot.innerHTML='\n        <h2>añade el producto!</h2>\n         <form class="product-form">\n         <h2>Title</h2>\n            <input type="text" id="text-input"/>\n            <h2>Description</h2>\n            <input type="text" id="text-input"/>\n            <h2>Price</h2>\n            <input type="text" id="text-input"/>\n            <h2>Category</h2>\n            <input type="text" id="text-input"/>\n            <h2>Rating rate</h2>\n            <input type="text" id="text-input"/>\n\n\n\n\n            <button type="submit" id="add-btn">Añadir</button>\n         </form>\n        ');const s=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".product-form");null==s||s.addEventListener("submit",(e=>{var s;e.preventDefault();const o=null===(s=this.shadowRoot)||void 0===s?void 0:s.querySelector("#text-input"),n={id:(new Date).getTime(),title:o.value,state:!1};var r;i((r=n,{action:t.ADD_PRODUCT,payload:r}))}))}}var a;customElements.define("product-form",c),function(t){t.uid="uid",t.producttitle="producttitle",t.price="price",t.category="category",t.description="description",t.image="image"}(a||(a={}));class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),r(this)}static get observedAttributes(){return Object.keys(a)}connectedCallback(){this.render()}attributeChangedCallback(t,e,s){switch(t){case a.uid:this[t]=Number(s);break;case a.producttitle:this[t]=String(s);break;case a.price:this[t]=Number(s);break;case a.category:case a.description:case a.image:this[t]=String(s)}}render(){var e;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n\t\t\t<section>\n\t\t\t<img src="${this.image}">\n\t\t\t\t<h3>${this.producttitle}</h3>\n\t\t\t\t<button>Delete</button>\t\n\t\t\t</section>\n\t\t`);const s=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".delete-product");null==s||s.addEventListener("click",(()=>{var e;console.log("click",this.uid),i((e=this.uid,{action:t.REMOVE_PRODUCT,payload:e}))}))}}customElements.define("product-item",d);class u extends HTMLElement{constructor(){super(),this.productItems=[],this.attachShadow({mode:"open"}),r(this),o.products.forEach((t=>{const{category:e,title:s,price:o}=t,n=this.ownerDocument.createElement("product-item");n.setAttribute(a.producttitle,s),n.setAttribute(a.price,o),n.setAttribute(a.category,e),this.productItems.push(n)}))}connectedCallback(){this.render()}render(){this.shadowRoot&&this.productItems.forEach((t=>{var e;null===(e=this.shadowRoot)||void 0===e||e.appendChild(t)}))}}customElements.define("product-list",u);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),r(this)}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML="\n\t\t<product-form></product-form>\n\t\t<product-list></product-list>\n\t\t")}}customElements.define("app-container",h)})();