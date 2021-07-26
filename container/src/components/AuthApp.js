import {mount} from 'auth/AuthApp';
import React,{useRef, useEffect} from 'react';
import {useHistory} from 'react-router-dom';



export default ({onAuthChange}) =>{
    const ref = useRef(null);
    const history = useHistory();

    useEffect(()=>{
       const {onParentNavigate} =  mount(ref.current, {
        initialPath: history.location.pathname,
        onAuthChange: (signedIn) => {
            console.log('Auth Change:',signedIn);
            onAuthChange(signedIn);
        },    
        onNavigate: ({pathname: nextPathname}) => {
                console.log('Container notied Navigation in Auth to ', nextPathname);
                const {pathname} = history.location;
                if(pathname !== nextPathname) {
                history.push(nextPathname);
                }

            }
        });

        history.listen(onParentNavigate)
    },[]);

    return <div ref={ref} />;
}