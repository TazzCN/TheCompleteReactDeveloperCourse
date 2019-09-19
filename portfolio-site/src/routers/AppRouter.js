import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import PortfolioPage from '../components/PortfolioPage';
import Item from '../components/Item';
const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path='/' component={HomePage} exact={true}/>
            <Route path='/contact' component={ContactPage}/>
            <Route path='/portfolio/:id'component={Item} exact={true}/>
            <Route path='/portfolio'component={PortfolioPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
</BrowserRouter> 
);

export default AppRouter;