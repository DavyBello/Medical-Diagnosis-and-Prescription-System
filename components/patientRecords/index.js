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

import PatientDialog from './PatientDialog'

import ToolBar from './ToolBar'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: [],
      selectedPatient: {},
      showPatientDialog: false,
    }
  }

  handleOpen = () => {
    this.setState({showPatientDialog: true});
  };

  handleClose = () => {
    this.setState({
      showPatientDialog: false,
      selected: [],
    });
  };

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRow) => {
    //console.log('Selected new row: '+ selectedRow);
    this.setState({
      selected: selectedRow,
      selectedPatient: this.props.patients[selectedRow]
    });
    this.handleOpen();
  };

  render() {
    const style = {
      cardStyle: {
        width: '70%',
        margin: '10px auto'
      }
    }
    const styles = {
      TableRowColumnIdWidth: '10px',
      TableRowColumnTitleWidth: '140px'
    }
    //console.log(this.props);
    return (
      <Card style={style.cardStyle}>
        <PatientDialog
          showPatientDialog={this.state.showPatientDialog}
          handleClose={this.handleClose}
          patient={this.state.selectedPatient}
          symptoms={this.props.symptoms}/>
        <CardTitle title="Patient Records"/>
        <div style={{
          padding: '20px',
          paddingBottom: '40px'
        }}>
        <ToolBar />
        <Table
          onRowSelection={this.handleRowSelection}
          fixedHeader>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn style={{width: styles.TableRowColumnIdWidth}}>ID</TableHeaderColumn>
              <TableHeaderColumn style={{width: styles.TableRowColumnTitleWidth}}>Name</TableHeaderColumn>
              <TableHeaderColumn>Sex</TableHeaderColumn>
              <TableHeaderColumn>Age</TableHeaderColumn>
              <TableHeaderColumn>Phone Number</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody deselectOnClickaway={false}>
            {this.props.patients.map((patient, index)=>(
              <TableRow selected={this.isSelected(index)}>
                <TableRowColumn style={{width: styles.TableRowColumnIdWidth}}>{index+1}</TableRowColumn>
                <TableRowColumn style={{width: styles.TableRowColumnTitleWidth}}>{patient.fullName}</TableRowColumn>
                <TableRowColumn>{patient.sex}</TableRowColumn>
                <TableRowColumn>{patient.age}</TableRowColumn>
                <TableRowColumn>{patient.phone}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </Card>
    );
  }
}
