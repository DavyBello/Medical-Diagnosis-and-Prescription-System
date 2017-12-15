import React from 'react'
import Router from 'next/router'

import {Card, CardTitle} from 'material-ui'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {Grid, Row, Col} from 'react-bootstrap'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const style = {
      cardStyle: {
        maxWidth: '400px',
        margin: '10px auto'
      }
    }
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <Card style={style.cardStyle}>
              <CardTitle title="Welcome Back"/>
              <div style={{
                padding: '20px',
                paddingBottom: '40px'
              }}>
                <TextField id="email" floatingLabelText="Email"/>
                <TextField id="password"  floatingLabelText="Password" type="Password"/><br/>
                <br/>
                <a>Forgot Password?</a>
                <RaisedButton style={{float: 'right'}}label="Login" primary={true}/>
                <br/>
              </div>
            </Card>
          </Col>
        </Row>
      </Grid>
    );
  }
}
