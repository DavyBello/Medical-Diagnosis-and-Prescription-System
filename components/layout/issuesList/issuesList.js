import React from 'react'
import Link from 'next/link'

import {List} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import Issue from './issue'

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

export default class extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    //const allIssues = this.props.issues.map((issue)=> issue.isOpen? <Issue issue={issue} key={issue.id}/> : '')
    const allIssues = this.props.issues.map((issue)=> <Issue issue={issue} key={issue.id}/>)
    return(
      <div>
        <List>
          <Subheader>Most Recent</Subheader>
          {allIssues}
        </List>
      </div>
    )
  }
}
