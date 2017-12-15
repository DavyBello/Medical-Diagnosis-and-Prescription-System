import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

import {
  AppBar,
  FlatButton,
  IconMenu,
  IconButton,
  MoreVertIcon,
  MenuItem
} from 'material-ui'

import Sidebar from './sidebar'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      open: false
    }
  }

  handleLeftButtonIconTap = () =>{
    this.setState({open: true})
  }

  render() {

    return (
      <div>
        <AppBar title="MEDICAL DIAGNOSIS AND PRESCRIPTION SYSTEM" onLeftIconButtonTouchTap={this.handleLeftButtonIconTap} iconElementRight={< FlatButton label = "Logout" onClick={()=>Router.push('/')}/>}/>
        <Sidebar open={this.state.open}/>
      </div>
    )
  }
}

/*const Logged = (props) => (
  <IconMenu {...props} iconButtonElement={< IconButton > <MoreVertIcon/> < /IconButton>} targetOrigin={{
    horizontal: 'right',
    vertical: 'top'
  }} anchorOrigin={{
    horizontal: 'right',
    vertical: 'top'
  }}>
    <MenuItem primaryText="Home"/>
    <MenuItem primaryText="Issues"/>
    <MenuItem primaryText="Users"/>
  </IconMenu>
);*/
