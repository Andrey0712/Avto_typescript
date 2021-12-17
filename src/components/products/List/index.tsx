import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ISearchProduct } from "../types";
import { useNavigate } from "react-router";

const ProductsListPage: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { products, last_page, current_page, total } = useTypedSelector(
      (store) => store.products
    );
    const { fetchProducts } = useActions();
    const [name, setName] = useState<string>("");
  const navigator = useNavigate();
  const [query, setQuery] = useState<string>(window.location.search);

    async function getProducts(search: ISearchProduct) {
        setLoading(true);
        try {
          await fetchProducts(search);//загружаем данные
          setLoading(false);
        } catch (ex) {
          setLoading(false);
        }
      }

    useEffect(()=>{

        const search: ISearchProduct = {
            page: 1
          };
        getProducts(search);

    },[])

    const pages = [];
  for (let i = 1; i <= last_page; i++) {
    pages.push(i);//перебор страниц
  }

    return (
        <>
          <h1 className="text-center">Товари</h1>
          
    
          {loading && <h2>Loading ...</h2>}
          <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

         <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page, key) => {
            const url = "?page=" + page + "&name=" + name;
            return (
              <li
                className={classNames("page-item", {
                  active: current_page == page,//отобразить активную стр
                })}
                key={key}
              >
                <Link
                  className="page-link"
                  to={url}
                  onClick={() => {
                    setQuery(url);
                  }}
                >
                  {page}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav> 
    
          
        </>
      );
};
    export default ProductsListPage;