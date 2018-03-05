import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Dashboard from 'material-ui-icons/Dashboard';
import IconButton from 'material-ui/IconButton';
import ChevronLeft from 'material-ui-icons/ChevronLeft';

const SideNavWidth = 240;

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        height: '100%',
        width: SideNavWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
});

class SideNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, open, onClose } = this.props;

        return (
            <div>
                <Drawer
                    variant="persistent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor="left"
                    open={open}
                >
                    <div>
                        <div className={classes.drawerHeader}>
                            <IconButton onClick={onClose}>
                                <ChevronLeft />
                            </IconButton>
                        </div>
                        <List>
                            <ListItem button>
                                <ListItemIcon>
                                    <Dashboard />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            </div>
        );
    }
}

SideNav.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export { SideNavWidth };
export default withStyles(styles, { withTheme: true })(SideNav);
