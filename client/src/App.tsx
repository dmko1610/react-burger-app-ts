import React, {Component} from 'react';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {Logout} from './containers/Auth/Logout/Logout'
// import Auth from './containers/Auth/Auth'
import {connect} from 'react-redux';
import * as actions from './store/actions/index'
import asyncComponent from "./hoc/asyncComponent/asyncComponent";

interface IProps {
    onTryAutoSignup: any,
    isAuthenticated: boolean
}

const asyncCheckout = asyncComponent(() => {
    return import('./containers/Checkout/Checkout');
});

const asyncOrders = asyncComponent(() => {
    return import('./containers/Orders/Orders');
});

const asyncAuth = asyncComponent(() => {
    return import('./containers/Auth/Auth');
});


class App extends Component<IProps> {

    componentDidMount(): void {
        this.props.onTryAutoSignup();
    }

    render() {
        let routes = (
            <Switch>
                <Route path="/" exact component={BurgerBuilder}/>
                <Route path="/auth" component={asyncAuth}/>
                <Redirect to="/" />
            </Switch>
        );
        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/" exact component={BurgerBuilder}/>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/auth" component={asyncAuth}/>
                    <Route path="/orders" component={asyncOrders}/>
                    <Route path="/checkout" component={asyncCheckout}/>
                    <Redirect to="/" />
                </Switch>
            )
        }

        return (
            <div>
                <Layout>
                    {routes}
                </Layout>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        isAuthenticated: state.auth.token !== null
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
};

// @ts-ignore
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
