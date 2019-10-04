import React from "react";

import ProductIndex from "./components/products/ProductIndex";
import { Route, Switch } from 'react-router-dom';
import Login from "./components/Login";
import AuthRoute from './util/route_util';
import Nav from "./components/Nav";
import Register from "./components/Register";
import ProductDetail from './components/products/ProductDetail';
import CreateProduct from "./components/products/CreateProduct";

const App = () => {
    return (
        <div>
            <h1>Online Store</h1>
            <Nav />
            <Switch>
                <AuthRoute exact path="/login" component={Login} routeType="auth" />
                <AuthRoute exact path="/register" component={Register} routeType="auth" />
                <Route exact path="/" component={ProductIndex} />
                <AuthRoute exact path="/products/new" component={CreateProduct} routeType="protected"/>
                <Route exact path="/products/:productId" component={ProductDetail}/>
            </Switch>
        </div>
    );
};

export default App;