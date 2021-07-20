import React from 'react';

import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {StylesProvider} from '@material-ui/core';

import MarketingApp from './components/MarketingApp';

export default () => {
    return <div>
        <h1>Hi ContainerApp !</h1>
        <hr />
        <MarketingApp />
        <StylesProvider>
            <BrowserRouter>
                <Switch>
                    {/* <Route extact path="/pricing" component={Pricing} />
                    <Route path="/" component={Landing} /> */}
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
}