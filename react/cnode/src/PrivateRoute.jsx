import React from 'react';
import { Route, Redirect} from 'react-router-dom'
import authStore from './store/auth'

{/* <PrivateRoute path="/collect" component={Collect} /> */ }

function PrivateRoute(props) {
    // auth
    const isLogin = authStore.isLogin;
    // react-router
    // <Route />
    const { path, component } = props;
    if(!isLogin) {
        return <Redirect to='/login' />
    }
        return (
            <Route path={path} component={component} />
        )
}

export default PrivateRoute;