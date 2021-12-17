//Типи запитів
export enum ProductsActionTypes {
    FETCH_PRODUCTS="FETCH_PRODUCTS"
}

//Сам продукт
export interface IProductItem {
    id: number;
    name: string;
    description: string;
} 

//Відповідь від сервера по списку продуктів
export interface IProductsResponse {
    current_page: number;
    last_page: number;
    total: number;
    data: Array<IProductItem>;
}

//Модель для пошуку продуктів
export interface ISearchProduct {
    page: null|string|number
    name?: null|string
    description?: null|string
}


//Стейт для редусера
export interface ProductsState {
    products: Array<IProductItem>;
    last_page: number;
    current_page: number;
    total: number;
}

//Дії редусера. Отримати список продуктів від сервера
export interface FetchProductsAction {
    type: ProductsActionTypes.FETCH_PRODUCTS,
    payload: ProductsState
}

export type ProductActions = FetchProductsAction;