import React from 'react'
//import Link from 'next/link'
//import Router from '../../../routes'

import {Card, CardTitle, CardText} from 'material-ui';
import Avatar from 'material-ui/Avatar';
//import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

export default class extends React.Component {
  constructor(props) {
    super(props)
  }
  handleClick = () => {
    //console.log('clicked: ' + this.props.issue.id)
  }

  render() {
    return (
      <div>
        <Card>
          <CardTitle title={this.props.issue.title}/>
          <CardText>
            {this.props.issue.brief}
          </CardText>
        </Card>
      </div>
    )
  }
}
