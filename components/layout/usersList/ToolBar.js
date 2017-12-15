import React from 'react'
import Router from 'next/router'

import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import AutoComplete from 'material-ui/AutoComplete';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 3,
      dataSource: [],
    }
  }

  handleChange = (event, index, value) => this.setState({value});

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <RaisedButton label="Add User" primary={true} icon={<ContentAdd />} onTouchTap={()=> Router.push('/new-user')}/>
          {/*<DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="All Broadcasts" />
            <MenuItem value={2} primaryText="All Voice" />
            <MenuItem value={3} primaryText="All Text" />
            <MenuItem value={4} primaryText="Complete Voice" />
            <MenuItem value={5} primaryText="Complete Text" />
            <MenuItem value={6} primaryText="Active Voice" />
            <MenuItem value={7} primaryText="Active Text" />
          </DropDownMenu>*/}
        </ToolbarGroup>
        <ToolbarGroup>
          <AutoComplete
            id="searchBar"
            hintText="Search"
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
          />
          <ToolbarSeparator />
          {/*<IconMenu
            iconButtonElement={
              <FlatButton label={'Author'} labelPosition="before" icon={<NavigationExpandMoreIcon />}/>
            }
          >
            <MenuItem primaryText="Harry Steve" />
            <MenuItem primaryText="Larry Page" />
          </IconMenu>*/}
          <IconMenu
            iconButtonElement={
              <FlatButton label={'Sort'} labelPosition="before" icon={<NavigationExpandMoreIcon />}/>
            }
          >
            <MenuItem primaryText="Newest" />
            <MenuItem primaryText="Oldest" />
            <MenuItem primaryText="Recently Updated" />
            <MenuItem primaryText="Least Recently Updated" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
