import React from 'react';
import Header from './components/header/Header';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import BookAPIDetails from './pages/BookAPIDetails';
// import Login from './pages/Login';
// import Register from './pages/Register';
import Books from './pages/Books';
import BookAPIList from './pages/BookAPIList';
import PrivateRoute from './components/PrivateRoute';


import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import thunk from 'redux-thunk';

import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";

const store = createStore(reducers, applyMiddleware(thunk));


const Layout = props => (
    <>
        <Header/>
        <div className="container mt-5">
            {props.children}
        </div>
    </>
)

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Layout>
            <Home/>
        </Layout>
    },
    {
        path: '/booksapi',
        exact: true,
        main: () => <Layout>
            <BookAPIList/>
        </Layout>
    },
    // {
    //     path: '/register',
    //     exact: false,
    //     main: () => <Layout>
    //         <Register/>
    //     </Layout>
    // },
    // {
    //     path: '/login',
    //     exact: false,
    //     main: () => <Layout>
    //         <Login/>
    //     </Layout>
    // },
    {
        path: '/books',
        exact: false,
        main: () => <Layout>
            <Books/>
        </Layout>
    },
    {
        path: '/bookdetails/:id',
        exact: false,
        main: () => <Layout>
            <BookDetails/>
        </Layout>
    },
    {
        path: '/bookapidetails/:id',
        exact: false,
        main: () => <Layout>
            <BookAPIDetails/>
        </Layout>
    }

]

const getRoutes = () => {
    return routes.map((route, index) => {
        return <Route
            exact={route.exact} 
            key={index}
            path={route.path}>
            {route.main}
        </Route>
    })
}

function App() {
    return <Provider store={store}>
        <Router>
            <Switch>
            {/* <PrivateRoute exact path="/" component={Home} /> */}
                {getRoutes()}
            </Switch>
            {/* <Route path="/login" component={Login} /> */}
            <Redirect from="*" to="/" />
        </Router>
    </Provider>
}

export default App;
