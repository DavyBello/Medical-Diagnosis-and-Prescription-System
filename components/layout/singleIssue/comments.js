import React from 'react'
//import Link from 'next/link'
//import Router from '../../../routes'

import {Card} from 'material-ui'
import Avatar from 'material-ui/Avatar'
//import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

import Comment from './comment'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }
  handleClick = () => {
    //console.log('clicked: ' + this.props.issue.id)
  }

  render() {
    const allComents = this.props.comments.map((comment)=>(
      <Comment comment={comment} key={comment.id}/>
    ))
    return (
      <div>
        {allComents}
      </div>
    )
  }
}
