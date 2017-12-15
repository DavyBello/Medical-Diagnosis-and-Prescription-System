import React from 'react'
//import {Link, Router} from '../../../routes'

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

export default class extends React.Component {
  constructor(props) {
    super(props)
  }
  handleClick = () => {
    console.log('clicked: ' + this.props.user.id)
    //Router.pushRoute('issue', {issue: this.props.issue.id})
  }

  render() {
    return (
      <div>
        <Divider inset={true}/>
        {/*<Link route="issue" params={{issue: this.props.issue.id}}>*/}
          <ListItem leftAvatar={< Avatar src = "/static/images/avatar-user-2.png" />} primaryText={this.props.user.fullName}
          secondaryText={<p>
            {/*<span style={{
              color: darkBlack
            }}>{this.props.user.type}</span>*/} {this.props.user.type}
            </p>}
            secondaryTextLines={1} onTouchTap={this.handleClick}>
            {/*<div>fffaas</div>*/}
          </ListItem>
        {/*</Link>*/}
      </div>
    )
  }
}
