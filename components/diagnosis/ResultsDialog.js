import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  radioButton: {
    marginTop: 16,
  },
};

/**
 * Dialog content can be scrollable.
 */
export default class extends React.Component {

  render() {
    //console.log(this.props);
    let diagnosis = this.props.diagnosis;
    let empty = (diagnosis.perfectFits.length === 0 && diagnosis.overFits.length === 0 && diagnosis.underFits.length === 0)
    console.log(diagnosis);
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.props.handleClose}
      />,
    ];

    return (
        <Dialog
          title="Diagnosis results"
          actions={actions}
          modal={false}
          open={this.props.showResultsDialog}
          onRequestClose={this.props.handleClose}
          autoScrollBodyContent={true}
        >
          <div>
            {(!diagnosis || empty) && (
              <div>
                <h3>Patients Case is complicated</h3>
                <h4>Specialist Closer Interview and Examination is recommended</h4>
              </div>
            )}
            {(diagnosis && diagnosis.perfectFits.length === 1) && (
              <div>
                <h3>{diagnosis.perfectFits[0].disease.title} is diagnosed</h3>
                <h4></h4>
              </div>
            )}
            {(diagnosis && diagnosis.perfectFits.length > 1) && (
              <div>
                <h3>Possible Diseases: {diagnosis.perfectFits[0].disease.title} {
                  diagnosis.perfectFits.map((fit, index)=>{
                    if (index !== 0)
                      return (' ,'+ fit.disease.title)
                  })
                }</h3>
                <h4>Specialist Closer Interview and Examination is recommended</h4>
              </div>
            )}
            {(diagnosis && diagnosis.overFits.length === 1) && (
              <div>
                <h3>
                  {(diagnosis.perfectFits.length > 0) && 'Other '}
                  Possible Disease: {diagnosis.overFits[0].disease.title}</h3>
                <h4>Specialist Closer Interview and Examination is recommended</h4>
              </div>
            )}
            {(diagnosis && diagnosis.overFits.length > 1) && (
              <div>
                <h3>
                  {(diagnosis.perfectFits.length > 0) && 'Other '}
                  Possible Diseases: {diagnosis.overFits[0].disease.title} {
                  diagnosis.overFits.map((fit, index)=>{
                    if (index !== 0)
                      return (' ,'+ fit.disease.title)
                  })
                }</h3>
                <h4>Specialist Closer Interview and Examination is recommended</h4>
              </div>
            )}
            {(diagnosis && diagnosis.underFits.length === 1) && (
              <div>
                <h3>
                  {(diagnosis.perfectFits.length > 0 || diagnosis.underFits.length > 0) && 'Other '}
                  Possible Disease: {diagnosis.underFits[0].disease.title} is diagnosed</h3>
                <h4>Specialist Closer Interview and Examination is recommended</h4>
              </div>
            )}
            {(diagnosis && diagnosis.underFits.length > 1) && (
              <div>
                <h3>
                  {(diagnosis.perfectFits.length > 0 || diagnosis.underFits.length > 0) && 'Other '}
                  Possible Diseases: {diagnosis.underFits[0].disease.title} {
                  diagnosis.underFits.map((fit, index)=>{
                    if (index !== 0)
                      return (' ,'+ fit.disease.title)
                  })
                }</h3>
                <h4>Specialist Closer Interview and Examination is recommended</h4>
              </div>
            )}
          </div>
        </Dialog>
    );
  }
}
