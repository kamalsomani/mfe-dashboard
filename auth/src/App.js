import React from 'react';

import {Switch, Route, Router} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core';

import Signup from './components/Signup';
import SignIn from './components/Signin';

const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
})

export default ({history,onAuthChange}) => {




    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/auth/signup">
                        <Signup onSignIn={onAuthChange} />
                    </Route>
                    <Route exact path="/auth/signin">
                    <SignIn onSignIn={onAuthChange} />
                        </Route>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}