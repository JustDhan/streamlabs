import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit *
            3}px ${theme.spacing.unit * 3}px`
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit
    },
    submit: {
        marginTop: theme.spacing.unit * 3
    },
    media: {
        height: 140,
        maxWidth: 250
    }
});

function SignIn(props) {
    const { classes } = props;

    return (
        <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in with
                </Typography>
                <form className={classes.form}>
                    <img
                        width="100%"
                        src="data:image/png;base64,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"
                        alt="Twitch"
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        href={
                            process.env.NODE_ENV === 'development'
                                ? 'https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=9gee7gwdzttqb1dlscf0phy1667paj&redirect_uri=http://localhost:3000/auth/callback&scope=viewing_activity_read&state=c3ab8aa609ea11e793ae92361f002671&force_verify=true'
                                : 'https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=az9h08h70aw9nqdlvem4iw9ehfgmxu&redirect_uri=http://streamlabsaws-env.vyehsqvwfc.us-east-1.elasticbeanstalk.com/auth/callback&scope=viewing_activity_read&state=c3ab8aa609ea11e793ae92361f002671&force_verify=true'
                        }
                    >
                        Continue with twitch
                    </Button>
                </form>
            </Paper>
        </main>
    );
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignIn);
