import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import {Row, Col} from 'react-bootstrap'

let symptoms = [];

export default class extends React.Component {

  constructor(props) {
    console.log(props);
    super(props)

    this.state = {
      patient: {},
      symptoms: symptoms,
    }
  }
  componentWillReceiveProps(nextProps){
    //console.log(nextProps);
    let disease = nextProps.disease || {symptomsIds: []}
    nextProps.symptoms.map((symptom, index) => {
      let match = disease.symptomsIds.find((dSymptom)=>(dSymptom === symptom.id))
      if (match)
        symptoms[index] = {id: symptom.id,name: symptom.name,checked: true};
      else
        symptoms[index] = {id: symptom.id,name: symptom.name,checked: false};
    })
    this.state.symptoms = symptoms;
    //console.log(symptoms);
  }

  updateCheck(index) {
    //update symptoms array - set state.symptoms to updated array
    symptoms[index].checked = !symptoms[index].checked;
    this.setState((oldState) => ({symptoms: symptoms}));
  }

  render() {
    //console.log(this.props);
    let disease = this.props.disease || {}
    const actions = [
      <FlatButton
        label="Save"
        primary={true}
        onClick={this.props.handleClose}
      />,
      <FlatButton
        label="Reset"
        primary={true}
        onClick={this.props.handleClose}
      />,
      <FlatButton
        label="Cancel"
        primary={true}
        keyboardFocused={true}
        onClick={this.props.handleClose}
      />,
    ];

    const styles = {
      block: {
        maxWidth: 250,
      },
      checkbox: {
        marginBottom: 16,
      }
    };

    return (
        <Dialog
          title="Disease details"
          actions={actions}
          modal={false}
          open={this.props.showDiseaseDialog}
          onRequestClose={this.props.handleClose}
          autoScrollBodyContent={true}
          contentStyle={{minWidth: '70%',minHeight: '70%'}}
        >
          <Row>
            <Col md={4}>
              ID : <TextField disabled={true} value={' '+disease.id}/>
            </Col>
            <Col md={4}>
              Title : <TextField disabled={true} value={disease.title}/>
            </Col>
            <Col md={4}>
              Description : <TextField disabled={true} value={disease.description}/>
            </Col>
            <Col md={4}>
              Causes : <TextField disabled={true} value={disease.causes}/>
            </Col>
            <Col md={4}>
              Remedy : <TextField disabled={true} value={disease.remedy}/>
            </Col>
            <Col md={4}>
              Dosage : <TextField disabled={true} value={disease.dosage}/>
            </Col>
          </Row>
          <h4>Symptoms</h4>
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
        </Dialog>
    );
  }
}
