import React from 'react';

import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core';

import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})


export default () => {
    return <BrowserRouter>
    <StylesProvider generateClassName={generateClassName}>
            <Header />
        <MarketingApp />
        
                <Switch>
                    {/* <Route extact path="/pricing" component={Pricing} />
                    <Route path="/" component={Landing} /> */}
                </Switch>
                </StylesProvider>
            </BrowserRouter>
}