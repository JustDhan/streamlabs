import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Layout from './hoc/Layout/Layout';
import Auth from './containers/Auth/Auth';
import * as actions from './store/actions/index';

const asyncStreamer = asyncComponent(() => {
    return import('./containers/Streamer/Streamer');
});
const asyncLogout = asyncComponent(() => {
    return import('./containers/Auth/Logout/Logout');
});
const asyncAuthCallback = asyncComponent(() => {
    return import('./containers/Auth/Callback/Callback');
});

class App extends Component {
    componentDidMount() {
        this.props.onTryAutoSignup();
    }

    render() {
        let routes = (
            <Switch>
                <Route path="/auth/callback" component={asyncAuthCallback} />
                <Route path="/" exact component={Auth} />
                <Redirect to="/" />
            </Switch>
        );

        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/streamer" component={asyncStreamer} />
                    <Route path="/logout" component={asyncLogout} />
                    <Redirect to="/streamer" />
                </Switch>
            );
        }

        return <Layout>{routes}</Layout>;
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
);
