import React from 'react'
import Router from 'next/router'

import {Card, CardTitle} from 'material-ui'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import Checkbox from 'material-ui/Checkbox'
import {Row, Col} from 'react-bootstrap'

import diseasesDB from '../../data/diseases.js'

let symptoms = [],
    disease = {};

export default class extends React.Component {
  constructor(props) {
    super(props)
    props.symptoms.map((symptom, index) => {
      symptoms[index] = {id: symptom.id,name: symptom.name,checked: false};
    })

    this.state = {
      disease: disease,
      values: [],
      symptoms: symptoms,
    };
  }

  updateCheck(index) {
    //update symptoms array - set state.symptoms to updated array
    symptoms[index].checked = !symptoms[index].checked;
    this.setState((oldState) => ({symptoms: symptoms}));
  }

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

  resetValues() {
    console.log('Resetting Values');
    this.props.symptoms.map((symptom, index) => {
      symptoms[index] = {id: symptom.id,name: symptom.name,checked: false};
    })
    disease = {};
    this.setState((prevState)=>({
      disease: {},
      patient: {},
      symptoms: symptoms
    }));
  }

  updateField = (field, value) => {
    disease[field] = value;
    this.setState({disease: disease});
  }

  addDisease = () => {
    let selectedSymptoms = [];
    this.state.symptoms.forEach((symptom)=>{
      symptom.checked && selectedSymptoms.push(symptom.id)
    })
    console.log('Adding Disease');
    disease = this.state.disease;
    if (disease) {
      diseasesDB.push({
        id: (diseasesDB.length + 1),
        title: disease.title,
        description: disease.description,
        causes: disease.causes,
        remedy: disease.remedy,
        dosage: disease.dosage,
        symptomsIds: selectedSymptoms
      })
      resetValues();
    }
    /*console.log(this.state.disease);
    console.log(selectedSymptoms);*/
  }

  render() {
    const style = {
      cardStyle: {
        width: '50%',
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
          <TextField floatingLabelText="Title" id='name' fullWidth={true}
            value={(this.state.disease.title)? this.state.disease.title : ""}
            onChange={(event)=>this.updateField('title', event.target.value)}
          /><br/>
          <TextField floatingLabelText="Description"  fullWidth={true}
            value={(this.state.disease.description)? this.state.disease.description : ""}
            onChange={(event)=>this.updateField('description', event.target.value)}
          /><br/>
          <TextField floatingLabelText="Causes"  fullWidth={true}
            value={(this.state.disease.causes)? this.state.disease.causes : ""}
            onChange={(event)=>this.updateField('causes', event.target.value)}
          /><br/>
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
          <TextField floatingLabelText="Remedy"  fullWidth={true}
            value={(this.state.disease.remedy)? this.state.disease.remedy : ""}
            onChange={(event)=>this.updateField('remedy', event.target.value)}
          /><br/>
          <TextField floatingLabelText="Required Dosage"  fullWidth={true}
            value={(this.state.disease.dosage)? this.state.disease.dosage : ""}
            onChange={(event)=>this.updateField('dosage', event.target.value)}
          /><br/>
          <br/>
          <hr/>
          <RaisedButton label="Add Disease" primary={true} onClick={()=>this.addDisease()}/>
          <RaisedButton style={{float: 'right'}}
            label="Reset"
            backgroundColor={'#ff0000de'}
            labelColor={'#ffffff'}
            onClick={()=>this.resetValues()}/>
          <br/>
        </div>
      </Card>
    );
  }
}
