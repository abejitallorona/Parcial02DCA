import { Actions } from '../types/store';
import { Product } from '../types/products';

export const reducer = (currentAction: any, currentState: any) => {
	const { action, payload } = currentAction;

	switch (action) {
		case Actions.ADD_PRODUCT:
			return {
				...currentState,
				products: [...currentState.products, payload],
			};

		case Actions.REMOVE_PRODUCT:
			return {
				...currentState,
				products: currentState.products.filter((product: Product) => product.id !== payload),
			};

		case Actions.CHANGE_STOCK:
			return {
				...currentState,
				products: currentState.products.map((product: Product) => {
					if (product.id === payload) {
						return {
							...product,
							state: !product.state,
						};
					}
					return product;
				})
			};

		default:
			return currentState;
	}
};
