import { removeProduct, changeStock } from "../../store/actions";
import { addObserver, dispatch } from "../../store/store";

export enum productItemType {
	'uid' = 'uid',
	'producttitle' = 'producttitle',
	'price' = 'price',
	'category' = 'category',
	'description' = 'description',
	'image' = 'image',



}

class ProductItem extends HTMLElement {
	uid?: number;
	producttitle?: string;
	price?: number;
	category?: string;
	description?: string;
	image?: string;


	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this)

	}

	static get observedAttributes() {
        return Object.keys(productItemType);
    }
	connectedCallback() {
		this.render();

	}

	attributeChangedCallback(propName: productItemType, oldValue: string | undefined, newValue: string | undefined) {
        switch (propName){
            case productItemType.uid:
                this[propName] = Number(newValue);
                break;

            case productItemType.producttitle:
                this[propName] = String(newValue);
                break;
            
            case productItemType.price:
                this[propName] = Number(newValue);
                break;

				case productItemType.category:
                this[propName] = String(newValue);
                break;

				case productItemType.description:
                this[propName] = String(newValue);
                break;

				case productItemType.image:
                this[propName] = String(newValue);
                break;

    
        }
    }

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = `
			<section>
			<img src="${this.image}">
				<h3>${this.producttitle}</h3>
				<button>Delete</button>	
			</section>
		`;

		const deleteProduct = this.shadowRoot?.querySelector('.delete-product')
		deleteProduct?.addEventListener('click', () => {
			console.log("click", this.uid);

			dispatch(removeProduct(this.uid!))
		})

	

	}

}

customElements.define('product-item', ProductItem);
export default ProductItem;
