import React from 'react'

import DiseaseRecords from '../components/diseaseRecords/index'
import withApp from '../components/withApp'

import symptoms from '../data/symptoms.js'
import diseases from '../data/diseases.js'

class DiseaseRecordsPage extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      open: false,
      symptoms: symptoms,
      diseases: diseases,
    }
  }

  render() {
    return (
      <DiseaseRecords
        symptoms={this.state.symptoms}
        diseases={this.state.diseases}
      />
    )
  }
}

export default withApp(DiseaseRecordsPage)
