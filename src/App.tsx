
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';
import LoginPage from './components/auth/login';
import RegisterPage from './components/auth/Register';
import ProductsListPage from './components/products/List';
import Home from './components/home';
import NoMatch from './components/NoMatch';
import DefaultLayout from './components/containers/DefaultLayout';
import AdminLayout from './components/containers/AdminLayout';

function App() {
  return (
    <BrowserRouter>
 <Routes>
 <Route path="/" element={<DefaultLayout/>} >
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="products" element={<ProductsListPage />} />
          <Route path="*" element={<NoMatch />} />
          </Route>

          <Route path="/admin" element={<AdminLayout/>} >
          </Route><Route index element={<Home />} />
      </Routes>
  
    </BrowserRouter>
  );
}


export default App;
