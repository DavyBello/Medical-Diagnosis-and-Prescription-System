import React from 'react'
import Router from 'next/router'

import {Card, CardTitle} from 'material-ui'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import Checkbox from 'material-ui/Checkbox'
import {Row, Col} from 'react-bootstrap'

let symptoms = [];

export default class extends React.Component {
  constructor(props) {
    super(props)
    props.symptoms.map((symptom, index) => {
      symptoms[index] = {id: symptom.id,name: symptom.name,checked: false};
    })

    this.state = {
      values: [],
      symptoms: symptoms,
    };
  }

  updateCheck(index) {
    //update symptoms array - set state.symptoms to updated array
    symptoms[index].checked = !symptoms[index].checked;
    this.setState((oldState) => ({symptoms: symptoms}));
  }

  resetValues() {
    this.props.symptoms.map((symptom, index) => {
      symptoms[index] = {id: symptom.id,name: symptom.name,checked: false};
    })
    this.setState((prevState)=>({
      value: 0,
      patient: {},
      symptoms: symptoms
    }));
  }

  handleChange = (event, index, values) => this.setState({values});

  selectionRenderer = (values) => {
    switch (values.length) {
      case 0:
        return '';
      case 1:
        return symptoms[values[0]].name;
      default:
        return `${values.length} symptoms selected`;
    }
  }

  menuItems(symptoms) {
    return symptoms.map((symptoms) => (
      <MenuItem
        key={symptoms.value}
        insetChildren={true}
        checked={this.state.values.indexOf(symptoms.value) > -1}
        value={symptoms.value}
        primaryText={symptoms.name}
      />
    ));
  }

  render() {
    const style = {
      cardStyle: {
        width: '90%',
        margin: '10px auto'
      }
    }
    const styles = {
      block: {
        maxWidth: 250,
      },
      checkbox: {
        marginBottom: 16,
      },
    };
    return (
      <Card style={style.cardStyle}>
        <CardTitle title="Add New Disease"/>
        <div style={{
          padding: '20px',
          paddingBottom: '40px'
        }}>
          <TextField floatingLabelText="Title" id='name' fullWidth={true}/><br/>
          <TextField floatingLabelText="Description" id='description' fullWidth={true}/><br/>
          <TextField floatingLabelText="Causes" id='description' fullWidth={true}/><br/>
          <br/>
          <h5>Select Symptoms</h5>
          <br/>
          <Row>
            {
              this.state.symptoms.map((symptom, index) => (
                <Col md={4}>
                  <Checkbox
                    label={symptom.name}
                    checked={this.state.symptoms[index].checked}
                    onCheck={()=> this.updateCheck(index)}
                    style={styles.checkbox}
                  />
                </Col>
              ))
            }
          </Row>
          <TextField floatingLabelText="Remedy" id='description' fullWidth={true}/><br/>
          <TextField floatingLabelText="Required Dosage" id='description' fullWidth={true}/><br/>
          <br/>
          <hr/>
          <RaisedButton label="Add Disease" primary={true}/>
          <RaisedButton style={{float: 'right'}} label="Reset" backgroundColor={'#ff0000de'} labelColor={'#ffffff'}/>
          <br/>
        </div>
      </Card>
    );
  }
}
