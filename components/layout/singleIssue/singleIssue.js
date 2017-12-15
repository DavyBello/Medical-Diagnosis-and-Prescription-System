import React from 'react'
//import Link from 'next/link'
//import Router from '../../../routes'

import {Card} from 'material-ui';
import Avatar from 'material-ui/Avatar';
//import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

import IssueCard from './issueCard'
import Comments from './comments'
import CommentTextField from './commentTextField'
export default class extends React.Component {
  constructor(props) {
    super(props)
    //console.log(props);
  }
  handleClick = () => {
    //console.log('clicked: ' + this.props.issue.id)
  }

  render() {
    return (
      <div>
        <IssueCard issue={this.props.issue}/>
        <hr />
        <Comments comments={this.props.comments}/>
        <hr />
        <CommentTextField />
      </div>
    )
  }
}
