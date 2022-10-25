import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SearchBar from './searchBar';
import SideBar from './sideBar';
import ProductTable from './productTable';
import 'bootstrap/dist/css/bootstrap.css';

require('bootstrap');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchBar />
    <main>
      <SideBar />
      <ProductTable />
    </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
