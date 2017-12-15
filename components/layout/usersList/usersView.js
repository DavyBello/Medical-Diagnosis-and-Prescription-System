import React from 'react'
import Link from 'next/link'

import UsersList from './usersList'

import {
  Card,
  CardTitle,
} from 'material-ui/Card';
import {FlatButton} from 'material-ui'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const style = {
      button: {
        color: 'rgb(255, 255, 255)'
      }
    }
    return (
      <Card>
        <CardTitle title="Users"/>
        <UsersList users={this.props.users}/>
      </Card>
    )
  }
}
