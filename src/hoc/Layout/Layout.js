import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const styles = theme => ({
    root: {
        flexGrow: 1
    }
});

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <Toolbar isAuth={this.props.isAuthenticated} />
                <main className={this.props.classes.root}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default compose(withStyles(styles))(connect(mapStateToProps)(Layout));
