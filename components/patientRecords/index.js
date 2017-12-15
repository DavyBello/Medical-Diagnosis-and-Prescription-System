import React from 'react'
import Router from 'next/router'

import {Card, CardTitle} from 'material-ui'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import ToolBar from './ToolBar'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: [],
    }
  }

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    console.log('Selected new row: '+ selectedRows);
    this.setState({
      selected: selectedRows,
    });
  };

  render() {
    const style = {
      cardStyle: {
        width: '90%',
        margin: '10px auto'
      }
    }
    const styles = {
      TableRowColumnIdWidth: '10px'
    }
    return (
      <Card style={style.cardStyle}>
        <CardTitle title="Patient Records"/>
        <div style={{
          padding: '20px',
          paddingBottom: '40px'
        }}>
        <ToolBar />
        <Table onRowSelection={this.handleRowSelection}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn style={{width: styles.TableRowColumnIdWidth}}>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Sex</TableHeaderColumn>
              <TableHeaderColumn>Date of Birth</TableHeaderColumn>
              <TableHeaderColumn>Phone Number</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow selected={this.isSelected(0)}>
              <TableRowColumn style={{width: styles.TableRowColumnIdWidth}}>1</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow selected={this.isSelected(1)}>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>Randal White</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
            </TableRow>
            <TableRow selected={this.isSelected(2)}>
              <TableRowColumn>3</TableRowColumn>
              <TableRowColumn>Stephanie Sanders</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow selected={this.isSelected(3)}>
              <TableRowColumn>4</TableRowColumn>
              <TableRowColumn>Steve Brown</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>John Smith asduoas dasoud asdoausd asoduasd saodpahsd asdpashd asd8apshd asp8da </TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
          {/*<br/>
          <RaisedButton label="Add Patient" primary={true}/>
          <RaisedButton style={{float: 'right'}} label="Reset" backgroundColor={'#ff0000de'} labelColor={'#ffffff'}/>
          <br/>*/}
        </div>
      </Card>
    );
  }
}
