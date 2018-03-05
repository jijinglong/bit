import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import SideNav, { SideNavWidth } from './SideNav';

const styles = theme => ({
    root: {
        width: '100%',
        height: 430,
        marginTop: theme.spacing.unit,
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    appBar: {
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    'appBar-left': {
        width: `calc(100% - ${SideNavWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: SideNavWidth,
    },
    content: {
        width: '100%',
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
        marginLeft: -SideNavWidth,
    },
    'content-left': {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SideNavOpen: false,
        };
        this.handleSideNavOpen = this.handleSideNavOpen.bind(this);
        this.handleSideNavClose = this.handleSideNavClose.bind(this);
    }

    handleSideNavOpen () {
        this.setState({ SideNavOpen: true });
    }

    handleSideNavClose () {
        this.setState({ SideNavOpen: false });
    }

    render() {
        const { classes } = this.props;
        const { SideNavOpen } = this.state;
        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar
                        className={classNames(classes.appBar, {
                            [classes[`appBar-left`]]: SideNavOpen,
                        })}
                    >
                        <Toolbar disableGutters={!SideNavOpen}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleSideNavOpen}
                                className={classNames(classes.menuButton, SideNavOpen && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" noWrap>
                                Bit
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <SideNav open={SideNavOpen} onClose={()=>this.handleSideNavClose()}/>

                    <main
                        className={classNames(classes.content, {
                            [classes[`content-left`]]: SideNavOpen
                        })}
                    >
                        <Typography>{'You think water moves fast? You should see ice.'}</Typography>
                    </main>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
