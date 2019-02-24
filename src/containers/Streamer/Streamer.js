import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({});

export class Streamer extends Component {
    render() {
        let contenet = this.props.isAuthenticated ? (
            <p>Streamer</p>
        ) : (
            <p>Please login.</p>
        );

        return contenet;
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};
const mapDispatchToProps = dispatch => {
    return {};
};

export default compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Streamer);
