import React from 'react'
import Router from 'next/router'

import {Card, CardTitle} from 'material-ui'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import Checkbox from 'material-ui/Checkbox'
import {Row, Col} from 'react-bootstrap'

import ResultsDialog from './ResultsDialog'

let symptoms = [];

export default class extends React.Component {

  constructor(props) {
    super(props)
    props.symptoms.map((symptom, index) => {
      symptoms[index] = {id: symptom.id,name: symptom.name,checked: false};
    })

    this.state = {
      value: 0,
      patient: {},
      symptoms: symptoms,
      showResultsDialog: false,
    }
  }

  handleOpen = () => {
    this.setState({showResultsDialog: true});
  };

  handleClose = () => {
    this.setState({showResultsDialog: false});
  };

  handleDiagnosis() {
    let symptomsArray = []
    this.state.symptoms.forEach((symptom, index) => {
      if (symptom.checked)
        symptomsArray.push(symptom.id)
    })
    console.log(symptomsArray);
    this.props.doDiagnosis(symptomsArray);
    this.setState({showResultsDialog: true});
  }

  handlePatientSelect = (event, index, value) => {
    //console.log(value);
    let patient = this.props.patients.find((patient)=>(patient.id===value))
    this.setState((prevState)=>({value: value, patient: patient}));
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

  render() {
    //console.log(this.state);
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
      }
    };
    return (
      <Card style={style.cardStyle}>
        <ResultsDialog showResultsDialog={this.state.showResultsDialog} handleClose={this.handleClose} diagnosis={this.props.diagnosis}/>
        <CardTitle title="Diagnosis"/>
        <div style={{
          padding: '20px',
          paddingBottom: '40px'
        }}>
          <SelectField
            floatingLabelText="Select A Patient"
            value={this.state.value}
            onChange={this.handlePatientSelect}
          >
            {
              this.props.patients.map((patient)=>(
                <MenuItem value={patient.id} primaryText={patient.fullName} />
              ))
            }
          </SelectField><br/>
          <br/>
          <Row>
            <Col md={4}>
              Name : <TextField disabled={true} value={this.state.patient.fullName}/>
            </Col>
            <Col md={4}>
              Age : <TextField disabled={true} value={this.state.patient.age}/>
            </Col>
            <Col md={4}>
              Phone No. : <TextField disabled={true} value={this.state.patient.phone}/>
            </Col>
            <Col md={4}>
              Sex : <TextField disabled={true} value={this.state.patient.sex}/>
            </Col>
            <Col md={4}>
              Marital Status : <TextField disabled={true} value={this.state.patient.maritalStatus}/>
            </Col>
            <Col md={4}>
              Occupation : <TextField disabled={true} value={this.state.patient.Occupation}/>
            </Col>
          </Row>
          <br/>
          <h4>Select Symptoms</h4>
          <br />
          <Row>
            {
              this.props.symptoms.map((symptom, index) => (
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
          <br/>
          <hr/>
          <RaisedButton onClick={()=>this.handleDiagnosis()} label="Diagnose" primary={true}/>
          <RaisedButton onClick={()=>this.resetValues()} style={{float: 'right'}} label="Reset" backgroundColor={'#ff0000de'} labelColor={'#ffffff'}/>
        </div>
      </Card>
    );
  }
}
