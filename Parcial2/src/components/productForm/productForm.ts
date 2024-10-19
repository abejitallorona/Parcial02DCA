import { addProduct } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/store";
import { Product } from "../../types/products";

class ProductForm extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
        addObserver(this)
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = `
        <h2>añade el producto!</h2>
         <form class="product-form">
         <h2>Title</h2>
            <input type="text" id="text-input"/>
            <h2>Description</h2>
            <input type="text" id="text-input"/>
            <h2>Price</h2>
            <input type="text" id="text-input"/>
            <h2>Category</h2>
            <input type="text" id="text-input"/>
            <h2>Rating rate</h2>
            <input type="text" id="text-input"/>




            <button type="submit" id="add-btn">Añadir</button>
         </form>
        `;

        const productElement = this.shadowRoot?.querySelector('.product-form')
        productElement?.addEventListener("submit", (e) => {
            e.preventDefault()
            const inputValue = this.shadowRoot?.querySelector("#text-input") as HTMLInputElement
        
            const newProduct: Product = {
                id: new Date().getTime(),
                title: inputValue.value,
                state: false
            }

            dispatch(addProduct(newProduct))            
            
        })

		
		}
	
}

customElements.define('product-form', ProductForm);
export default ProductForm;
