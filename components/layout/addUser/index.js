import React from 'react'
import Router from 'next/router'

import {Card, CardTitle} from 'material-ui'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
//import ReactQuill from 'react-quill'
//import { Editor } from 'slate'
import Editor from './editor'
import {Grid, Row, Col} from 'react-bootstrap'
//import FileAttachment from 'material-ui/svg-icons/file/attachment'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ContentAdd from 'material-ui/svg-icons/content/add';


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: null }
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    const style = {
      cardStyle: {
        width: '90%',
        margin: '10px auto'
      }
    }

    const items = [
      <MenuItem key={1} value={"Admin"} primaryText="Admin" />,
      <MenuItem key={2} value={"Officer"} primaryText="Officer" />
    ]
    return (
      <Card style={style.cardStyle}>
        <CardTitle title="Add a user"/>
        <div style={{
          padding: '20px',
          paddingBottom: '40px'
        }}>
          <TextField floatingLabelText="First name" id='fname' fullWidth={true}/><br/>
          <TextField id='lname' floatingLabelText="Last name" fullWidth={true}/><br/>
          <TextField id='email' floatingLabelText="Email" type="email" fullWidth={true}/><br/>
          <TextField id='password' floatingLabelText="Password" type="password" fullWidth={true}/><br/>
          <SelectField
            value={this.state.value}
            onChange={this.handleChange}
            floatingLabelText="User Type">
            {items}
          </SelectField><br/>
          <br/>
          <RaisedButton style={{float: 'right'}} label="Add User" icon={<ContentAdd />} primary={true}/>
          <br/>
        </div>
      </Card>
    );
  }
}
