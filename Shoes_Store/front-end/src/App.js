import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountForm from "./components/AccountForm";
import AccountList from "./components/AccountList";
import CustomerList from "./components/CustomerList";
import CustomerForm from "./components/CustomerForm";
import CartList from "./components/CartList";
import CartForm from "./components/CartForm";
import CategoryList from "./components/CategoryList";
import CategoryForm from "./components/CategoryForm";
import ColorList from "./components/ColorList";
import ColorForm from "./components/ColorForm";
import ShoeList from "./components/ShoeList";
import ShoeForm from "./components/ShoeForm";

const App = () => (
    <Router>
        <Routes>
            <Route path="/customers" element={<CustomerList/>}/>
            <Route path="/customers/new" element={<CustomerForm/>}/>
            <Route path="/customers/edit/:customerId" element={<CustomerForm/>}/>

            <Route path="/accounts" element={<AccountList/>}/>
            <Route path="/accounts/new" element={<AccountForm/>}/>
            <Route path="/accounts/edit/:accountId" element={<AccountForm/>}/>

            <Route path="/carts" element={<CartList/>}/>
            <Route path="/carts/new" element={<CartForm/>}/>
            <Route path="/carts/edit/:cartId" element={<CartForm/>}/>

            <Route path="/categories" element={<CategoryList/>}/>
            <Route path="/categories/new" element={<CategoryForm/>}/>
            <Route path="/categories/edit/:categoryId" element={<CategoryForm/>}/>

            <Route path="/colors" element={<ColorList/>}/>
            <Route path="/colors/new" element={<ColorForm/>}/>
            <Route path="/colors/edit/:colorId" element={<ColorForm/>}/>

            <Route path="/shoes" element={<ShoeList/>}/>
            <Route path="/shoes/new" element={<ShoeForm/>}/>
            <Route path="/shoes/edit/:shoeId" element={<ShoeForm/>}/>
        </Routes>
    </Router>
);

export default App;