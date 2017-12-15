import React from 'react'
//import Link from 'next/link'
//import Router from '../../../routes'

import {Card, CardText} from 'material-ui';
import Avatar from 'material-ui/Avatar';
import {cyan500, darkBlack, lightBlack} from 'material-ui/styles/colors';

export default class extends React.Component {
  constructor(props) {
    super(props)
  }
  handleClick = () => {
    //console.log('clicked: ' + this.props.issue.id)
  }

  render() {
    return (
      <Card style={{marginBottom: '12px'}}>
        <CardText >
          {this.props.comment.content}
        </CardText>
        <div style={{marginLeft: '20px', marginRight:'20px'}}>
          <hr style={{color:  cyan500}}/>
          <small>by <a href="/" style={{textDecoration: 'none', color: '#00bcd4'}}>Larry Page</a> on 14/04/2017</small>
        </div>
      </Card>
    )
  }
}
