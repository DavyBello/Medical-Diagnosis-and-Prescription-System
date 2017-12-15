import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import {Row, Col} from 'react-bootstrap'
/**
 * Dialog content can be scrollable.
 */
export default class extends React.Component {

  constructor(props) {
    super(props)
    props.symptoms.map((symptom, index) => {
      symptoms[index] = {id: symptom.id,name: symptom.name,checked: false};
    })

    this.state = {
      patient: {},
      symptoms: props.symptoms,
    }
  }

  updateCheck(index) {
    //update symptoms array - set state.symptoms to updated array
    symptoms[index].checked = !symptoms[index].checked;
    this.setState((oldState) => ({symptoms: symptoms}));
  }

  render() {
    console.log(this.props);

    const actions = [
      <FlatButton
        label="Save"
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

    return (
        <Dialog
          title="Patient Details"
          actions={actions}
          modal={false}
          open={this.props.showDiseaseDialog}
          onRequestClose={this.props.handleClose}
          autoScrollBodyContent={true}
          contentStyle={{minWidth: '70%'}}
        >
          <Row>
            <Col md={4}>
              Name : <TextField disabled={true} value={this.props.disease.fullName}/>
            </Col>
            <Col md={4}>
              Age : <TextField disabled={true} value={this.props.disease.age}/>
            </Col>
            <Col md={4}>
              Phone No. : <TextField disabled={true} value={this.props.disease.phone}/>
            </Col>
            <Col md={4}>
              Sex : <TextField disabled={true} value={this.props.disease.sex}/>
            </Col>
            <Col md={4}>
              Marital Status : <TextField disabled={true} value={this.props.disease.maritalStatus}/>
            </Col>
            <Col md={4}>
              Occupation : <TextField disabled={true} value={this.props.disease.Occupation}/>
            </Col>
          </Row>
        </Dialog>
    );
  }
}
