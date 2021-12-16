import { Dispatch } from "react";
import http from "../../http_common";
import {
  ProductActions,
  IProductsResponse,
  ProductsActionTypes,
  ISearchProduct,
} from "./types";

export const fetchProducts = (search: ISearchProduct) => {//данные для поиска на сервак
  return async (dispatch: Dispatch<ProductActions>) => {
    try {
      const response = await http.get<IProductsResponse>("api/products", {//запрос на сервак
        params: search,
      });
      const { data, last_page, current_page, total } = response.data;
      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS,
        payload: {
          current_page: current_page,
          last_page: last_page,
          products: data,
          total: total
        },
      });
      return Promise.resolve();
    } catch (ex) {
      console.log("Problem fetch");
      return Promise.reject();
    }
  };
};