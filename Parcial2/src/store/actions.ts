import { getProductsAPI } from '../services/dataFetch';
import { Product } from '../types/products';
import { Actions } from '../types/store';

export const addProduct = (payload: Product) => {
	return {
		action: Actions.ADD_PRODUCT,
		payload,
	};
};

export const removeProduct = (payload: number) => {
	return {
		action: Actions.REMOVE_PRODUCT,
		payload,
	};
};

export const changeStock = (payload: number) => {
	return {
		action: Actions.CHANGE_STOCK,
		payload,
	};
};

export const getProductsRedux = async () => {
    const products = await getProductsAPI();
    return {
        action: 'GETPRODUCTS',
        payload: products,
    };
};
