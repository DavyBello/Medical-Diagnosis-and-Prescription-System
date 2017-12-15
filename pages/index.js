import React from 'react'
import Head from 'next/head'
import Router from 'next/router'

import loginHOC from '../components/loginHOC'

import {Card, CardTitle} from 'material-ui'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {Grid, Row, Col} from 'react-bootstrap'

class Home extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {

    }
  }

  render() {
    const style = {
      cardStyle: {
        maxWidth: '550px',
        margin: '10px auto'
      }
    }
    return (
      <div style={{padding: '20px', backgroundColor: '#ddd', minHeight: '100vh'}}>
        <Row>
          <Col xs={12} md={12}>
            <Card style={style.cardStyle}>
              <CardTitle title="MEDICAL DIAGNOSIS AND PRESCRIPTION SYSTEM"/>
              <div style={{
                padding: '20px',
                paddingBottom: '40px'
              }}>
                <TextField id="username" floatingLabelText="Username"/>
                <TextField id="password"  floatingLabelText="Password" type="Password"/><br/>
                <br/>
                <a>Forgot Password?</a>
                <RaisedButton style={{float: 'right'}}label="Login" primary={true} onClick={()=>Router.push('/diagnosis')}/>
                <br/>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default loginHOC(Home)
