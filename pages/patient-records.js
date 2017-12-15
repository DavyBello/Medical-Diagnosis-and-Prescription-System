import React from 'react'

import PatientRecords from '../components/patientRecords/index'
import withApp from '../components/withApp'

/*import users from '../data/users.js'
import issues from '../data/issues.js'
import comments from '../data/comments.js'*/

class PatientRecordsPage extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      open: false,
      store: {
      }
    }
  }

  render() {
    return (
      <PatientRecords />
    )
  }
}

export default withApp(PatientRecordsPage)
