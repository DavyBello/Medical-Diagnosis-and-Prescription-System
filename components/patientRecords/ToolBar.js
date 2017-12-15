import React from 'react'
import Router from 'next/router'

import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
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
          <RaisedButton label="Add Patient" primary={true} icon={<ContentAdd />} onClick={()=> Router.push('/new-patient')}/>
        </ToolbarGroup>
        <ToolbarGroup>
          <AutoComplete
            id="searchBar"
            hintText="Search"
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
          />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
