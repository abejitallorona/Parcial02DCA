import { addObserver, appState } from "../../store/store";
import ProductItem, { productItemType } from "../productItem/productItem";
import "../productItem/productItem";

class ProductList extends HTMLElement {
	productItems: ProductItem[] = []
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this)

		appState.products.forEach((item) => {
			const { category, title, price } = item
			const ProductItem = this.ownerDocument.createElement('product-item') as ProductItem;
			ProductItem.setAttribute(productItemType.producttitle, title);
			ProductItem.setAttribute(productItemType.price, price);
			ProductItem.setAttribute(productItemType.category, category);
			this.productItems.push(ProductItem);
		})
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.productItems.forEach((ProductItem) => {
				this.shadowRoot?.appendChild(ProductItem)
			})
		}



	}

}

customElements.define('product-list', ProductList);
export default ProductList;
