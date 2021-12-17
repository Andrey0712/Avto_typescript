import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ISearchProduct } from "../types";
import { useNavigate } from "react-router";
import qs from "qs"
import { useSearchParams } from "react-router-dom";

const ProductsListPage: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { products, last_page, current_page, total } = useTypedSelector(
      (store) => store.products
    );
    const { fetchProducts } = useActions();
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
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

      useEffect(() => {
        const params = new URLSearchParams(query);
        const name = params?.get("name") ?? "";
        const description = params?.get("description") ?? "";

        setName(name);
        setDescription(description);
        const search: ISearchProduct = {
          page: params?.get("page") ?? 1,
          description:description,
          name: name,
          
        };
        
         getProducts(search);
      }, [query]);

    const pages = [];
  for (let i = 1; i <= last_page; i++) {
    pages.push(i);//перебор страниц
  }

  const onHandleSubmit = (e: any) => {
    e.preventDefault();
    const name = (document.getElementById("search") as HTMLInputElement).value;
    console.log("search", name);
    setQuery("?name=" + name);
    navigator("?name=" + name);
  };
  const onHandleSubmit_description = (e: any) => {
    e.preventDefault();
    const description = (document.getElementById("search_description") as HTMLInputElement).value;
    console.log("search", description);
    setQuery("?description=" + description);
    navigator("?description=" + description);
  };

  
    return (
        <>
          <h1 className="text-center">Товари</h1>
          
          <form className="d-flex" onSubmit={onHandleSubmit}>
        <input
          className="form-control me-2"
          id="search"
          type="search"
          placeholder="Search by name"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form><br></br>

      <form className="d-flex" onSubmit={onHandleSubmit_description}>
        <input
          className="form-control me-2"
          id="search_description"
          type="search"
          placeholder="Search by description"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>

          
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

      <h4>Всього записів: {total}</h4>
      <hr />

         <nav aria-label="Page navigation example">
        <ul className="pagination">
        
          {pages.map((page, key) => {
            const url = "?page=" + page + "&name=" + name +"&description=" + description;
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