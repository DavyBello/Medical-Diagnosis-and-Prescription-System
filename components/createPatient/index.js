import React from 'react'
import Router from 'next/router'

import {Card, CardTitle} from 'material-ui'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 1, maritalStatusValue: 1}
  }

  handleChange = (event, index, value) => this.setState((prevState)=>{value: value});

  handleMaritalStatusChange = (event, index, value) => this.setState((prevState)=>{maritalStatusValue: value});

  render() {
    const style = {
      cardStyle: {
        width: '50%',
        margin: '10px auto'
      }
    }
    return (
      <Card style={style.cardStyle}>
        <CardTitle title="Add New Patient"/>
        <div style={{
          padding: '20px',
          paddingBottom: '40px'
        }}>
          <TextField floatingLabelText="Full Name" id='name' fullWidth={true}/><br/>
          <TextField floatingLabelText="Phone Number" id='phone' fullWidth={true}/><br/>
          <SelectField
            floatingLabelText="Sex"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <MenuItem value={1} primaryText="Male" />
            <MenuItem value={2} primaryText="Female" />
          </SelectField><br/>
          <DatePicker
            hintText="Date Of Birth"
            formatDate={new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }).format}
          />
          <SelectField
            floatingLabelText="Marital Status"
            id='maritalStatus'
            value={this.state.maritalStatusValue}
            onChange={this.handleMaritalStatusChange}
          >
            <MenuItem value={1} primaryText="Single" />
            <MenuItem value={2} primaryText="Married" />
          </SelectField><br/>
          <TextField floatingLabelText="Occupation" id='occupation' fullWidth={true}/><br/>
          <TextField floatingLabelText="Address" id='address' fullWidth={true}/><br/>
          <br/>
          <RaisedButton label="Add Patient" primary={true}/>
          <RaisedButton style={{float: 'right'}} label="Reset" backgroundColor={'#ff0000de'} labelColor={'#ffffff'}/>
          <br/>
        </div>
      </Card>
    );
  }
}
