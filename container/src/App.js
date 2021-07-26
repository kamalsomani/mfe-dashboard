import React, {lazy, Suspense, useState, useEffect} from 'react';

import {Switch, Route, Router, Redirect} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core';
import ProgressIndicator from './components/ProgressIndicator';
import Header from './components/Header';

import { createBrowserHistory } from 'history';

const MarketingLazy = lazy(()=> import('./components/MarketingApp'));
const AuthLazy = lazy(()=> import('./components/AuthApp'));
const DashboardLazy = lazy(()=> import('./components/DashboardApp'));


const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

const history = createBrowserHistory();

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(()=>{
        if(isSignedIn) {
            history.push('/dashboard');
        }
    },[isSignedIn])

    return <Router history={history}>
    <StylesProvider generateClassName={generateClassName}>
            <Header signedIn={isSignedIn} onSignOut={()=>setIsSignedIn(false)} />
            <Suspense fallback={<ProgressIndicator />}>
                <Switch>
                    <Route path="/auth" >
                        <AuthLazy onAuthChange={(signedIn)=> setIsSignedIn(signedIn)} />
                        </Route>
                        <Route path="/dashboard" >
                            {!isSignedIn && <Redirect to="/"/>}
                        <DashboardLazy  />
                        </Route>
                    <Route path="/" component={MarketingLazy} />
                </Switch>
                </Suspense>
                </StylesProvider>
            </Router>
}