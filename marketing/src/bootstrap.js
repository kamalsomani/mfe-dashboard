import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (el, {onNavigate, defaultHistory, initialPath}) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });
    if(onNavigate) {
        history.listen(onNavigate);
    }
    ReactDOM.render(
        <App history={history} />,
        el
    );

    return {
        onParentNavigate({pathname: nextPathname}) {
            console.log('Container navigated to :',nextPathname);
            const {pathname} = history.location;
                if(pathname !== nextPathname) {
                history.push(nextPathname);
                }

        }
    }
};

if(process.env.NODE_ENV === 'development') {
    const elm = document.querySelector('#_marketing-dev-root');

    if(elm){
        mount(elm,{defaultHistory: createBrowserHistory()});
    }
}


export {mount};