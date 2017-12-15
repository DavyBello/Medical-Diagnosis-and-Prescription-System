import React from 'react'
import Link from 'next/link'

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {open: props.open}
  }
  componentWillReceiveProps(nextProps){
    this.setState({open: nextProps.open});
  }

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open: false})}>
        <Link href="/diagnosis" prefetch>
          <MenuItem onTouchTap={this.handleClose}>Diagnosis</MenuItem>
        </Link>
        <Link href="/new-patient" prefetch>
          <MenuItem onTouchTap={this.handleClose}>Add Patient</MenuItem>
        </Link>
        <Link href="/patient-records" prefetch>
          <MenuItem onTouchTap={this.handleClose}>Patient Records</MenuItem>
        </Link>
        <Divider />
        <Link href="/new-disease" prefetch>
          <MenuItem onTouchTap={this.handleClose}>Add Disease</MenuItem>
        </Link>
        <Link href="/disease-records" prefetch>
          <MenuItem onTouchTap={this.handleClose}>View Diseases</MenuItem>
        </Link>
      </Drawer>
    )
  }
}
