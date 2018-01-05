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

import DiseaseDialog from './DiseaseDialog'

import ToolBar from './ToolBar'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: [],
      selectedDisease: {},
      showDiseaseDialog: false,
    }
  }

  handleOpen = () => {
    this.setState({showDiseaseDialog: true});
  };

  handleClose = () => {
    this.setState({
      showDiseaseDialog: false,
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
      selectedDisease: this.props.diseases[selectedRow]
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
        <DiseaseDialog
          showDiseaseDialog={this.state.showDiseaseDialog}
          handleClose={this.handleClose}
          disease={this.state.selectedDisease}
          symptoms={this.props.symptoms}/>
        <CardTitle title="Disease Records"/>
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
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Causes</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody deselectOnClickaway={false}>
            {this.props.diseases.map((disease, index)=>(
              <TableRow selected={this.isSelected(index)}>
                <TableRowColumn style={{width: styles.TableRowColumnIdWidth}}>{index+1}</TableRowColumn>
                <TableRowColumn style={{width: styles.TableRowColumnTitleWidth}}>{disease.title}</TableRowColumn>
                <TableRowColumn>{disease.description}</TableRowColumn>
                <TableRowColumn>{disease.causes}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </Card>
    );
  }
}
