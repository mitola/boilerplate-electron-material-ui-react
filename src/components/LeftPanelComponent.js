import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InfoIcon from 'material-ui-icons/Info';
import AddToQueueIcon from 'material-ui-icons/AddToQueue';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
});

function LeftPanel(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <AddToQueueIcon />
          </ListItemIcon>
          <ListItemText primary="Menu item" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="New menu item" />
        </ListItem>
        <ListItem button component="a" href="#simple-list">
          <ListItemText primary="New menu item" />
        </ListItem>
      </List>
    </div>
  );
}

LeftPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftPanel);

/*


import React from 'react';
import {List, ListItem} from 'material-ui/List';
import MobileTearSheet from '../MobileTearSheet';
import ActionInfo from 'material-ui-icons/Info';
import AddToQueue from 'material-ui-icons/AddToQueue';
import Divider from 'material-ui/Divider';


const LeftPanel = () => (
  <MobileTearSheet>
    <List>
      <ListItem primaryText="New command" leftIcon={<AddToQueue />} />
    </List>
    <Divider />
    <List>
      <ListItem primaryText="Command 1" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Command 2" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Command 3" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Command 4" rightIcon={<ActionInfo />} />
    </List>
  </MobileTearSheet>
);

export default LeftPanel;
*/