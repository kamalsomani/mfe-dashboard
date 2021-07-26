import React from 'react';

import {Switch, Route, Router} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core';

const generateClassName = createGenerateClassName({
    productionPrefix: 'da'
})

export default ({history}) => {



    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <h1>My Dashboard !</h1>
            <Router history={history}>
                <Switch>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}