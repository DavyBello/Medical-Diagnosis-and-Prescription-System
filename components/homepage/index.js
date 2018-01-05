import React from 'react'
import Router from 'next/router'

import {Card, CardTitle} from 'material-ui'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import {Row, Col} from 'react-bootstrap'

export default class extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    //console.log(this.state);
    const style = {
      cardStyle: {
        width: '70%',
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
        <CardTitle title="What would you like to do today?"/>
        <div style={{
          padding: '20px',
          paddingBottom: '40px'
        }}>
        <br/><br/>
          <Row>
            <Col md={4} style={{textAlign: 'center'}}>
                <RaisedButton onClick={()=>Router.push('/diagnosis')} label="Diagnose a patient" primary={true}/>
            </Col>
            <Col md={4} style={{textAlign: 'center'}}>
                <RaisedButton onClick={()=>Router.push('/new-patient')} label="Register a new patient" primary={true}/>
            </Col>
            <Col md={4} style={{textAlign: 'center'}}>
                <RaisedButton onClick={()=>Router.push('/patient-records')} label="View a patient's details" primary={true}/>
            </Col>
          </Row>
          <br/><br/>
          <Row>
            <Col md={6} style={{textAlign: 'center'}}>
                <RaisedButton onClick={()=>Router.push('/new-disease')} label="Register a new disease" primary={true}/>
            </Col>
            <Col md={6} style={{textAlign: 'center'}}>
                <RaisedButton onClick={()=>Router.push('/disease-records')} label="View diseases" primary={true}/>
            </Col>
          </Row>
        </div>
      </Card>
    );
  }
}
