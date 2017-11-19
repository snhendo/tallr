import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


class AppBarDrawer extends Component {
  
    constructor(props) {
      super(props); //boilerplate (needed for all class components that have state)
      
      // initialize the state
      this.state = {
        open: false,
      };
    }
  
    handleToggle = () => this.setState({open: !this.state.open});
    
    handleClose = () => this.setState({open: false});
  
  
    render() {
      return (
        <div className="AppBarDrawer" style={{textAlign: 'left'}} >
          <AppBar
            title={this.props.title}
            iconElementRight={this.props.iconElementRight}
            onLeftIconButtonTouchTap={this.handleToggle}
          />
          <Drawer
            docked={false}
            width={175}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem onClick={this.handleClose} href='#/TaskList' >Task List</MenuItem>
            <MenuItem onClick={this.handleClose} href='#/Profile' >Profile</MenuItem>
            <MenuItem onClick={this.handleClose} href='#/Settings' >Settings</MenuItem>
            <MenuItem onClick={this.handleClose} href='#/' >Log out</MenuItem>
          </Drawer>
        </div>
      );
    }
  }
  
  export default AppBarDrawer;