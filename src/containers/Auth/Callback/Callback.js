import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

class Callback extends Component {
    componentDidMount() {
        const parsed = queryString.parse(this.props.location.hash);
        if (parsed.access_token) {
            this.props.onAuth(parsed.access_token);
        }
    }

    render() {
        return <Redirect to="/" />;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: accessToken => dispatch(actions.auth(accessToken))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Callback);
