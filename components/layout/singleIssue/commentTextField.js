import React from 'react'
//import Link from 'next/link'
//import Router from '../../../routes'

import {Card, TextField} from 'material-ui';
import Avatar from 'material-ui/Avatar';
//import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

export default class extends React.Component {
  constructor(props) {
    super(props)
  }
  handleClick = () => {
    //console.log('clicked: ' + this.props.issue.id)
  }

  render() {
    return (
      <Card style={{padding: '30px'}}>
        <TextField rows={3} multiLine fullWidth floatingLabelText="Enter your comment" hintText="Enter your comment"/>
      </Card>
    )
  }
}
