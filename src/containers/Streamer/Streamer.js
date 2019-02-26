import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { updateObject } from '../../shared/utility';

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3
        }
    }
});

export class Streamer extends Component {
    state = {
        targetID: 'twitch-embed',
        props: {
            width: '940',
            height: '480',
            channel: 'imdb'
        },
        embed: null
    };
    componentDidMount() {
        const script = document.createElement('script');
        script.setAttribute('src', EMBED_URL);
        script.addEventListener('load', () => {
            const embed = new window.Twitch.Embed(this.state.targetID, {
                ...this.state.props
            });

            this.setState({ embed: embed });
        });
        document.body.appendChild(script);
    }

    handleChange = event => {
        const updatedState = updateObject(this.state, {
            props: {
                channel: event.target.value
            }
        });

        this.state.embed.getPlayer().setChannel(event.target.value);
        this.setState(updatedState);
    };

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <main className={this.props.classes.layout}>
                    <Paper className={this.props.classes.paper}>
                        <Typography component="h1" variant="h4">
                            Streamer
                        </Typography>
                        <Grid container spacing={24}>
                            <Grid item xs={12}>
                                <TextField
                                    id="streamer"
                                    name="streamer"
                                    label=""
                                    fullWidth
                                    autoComplete="Search"
                                    value={this.state.props.channel}
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <div id="vas"> </div>
                                <div align="center" id={this.state.targetID} />
                            </Grid>
                        </Grid>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}

Streamer.defaultProps = {};

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
