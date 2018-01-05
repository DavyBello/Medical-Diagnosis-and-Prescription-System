import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import {Row, Col} from 'react-bootstrap'

export default class extends React.Component {

  constructor(props) {
    console.log(props);
    super(props)

    this.state = {
      patient: {},
    }
  }

  render() {  
    let patient = this.props.patient || {}
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

    return (
        <Dialog
          title="Patient details"
          actions={actions}
          modal={false}
          open={this.props.showPatientDialog}
          onRequestClose={this.props.handleClose}
          autoScrollBodyContent={true}
          contentStyle={{minWidth: '70%',minHeight: '70%'}}
        >
          <Row>
            <Col md={4}>
              ID : <TextField disabled={true} value={' '+patient.id}/>
            </Col>
            <Col md={4}>
              Name  : <TextField disabled={true} value={patient.fullName}/>
            </Col>
            <Col md={4}>
              Sex : <TextField disabled={true} value={patient.sex}/>
            </Col>
            <Col md={4}>
              Phone no. : <TextField disabled={true} value={patient.phone}/>
            </Col>
            <Col md={4}>
              Age : <TextField disabled={true} value={patient.age}/>
            </Col>
            <Col md={4}>
              Date Of Birth : <TextField disabled={true} value={patient.dateOfBirth}/>
            </Col>
            <Col md={4}>
              Marital Status : <TextField disabled={true} value={patient.maritalStatus}/>
            </Col>
          </Row>
        </Dialog>
    );
  }
}
