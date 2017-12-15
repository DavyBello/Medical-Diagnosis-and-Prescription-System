import React from 'react'

import CreatePatient from '../components/createPatient/index'
import withApp from '../components/withApp'

/*import users from '../data/users.js'
import issues from '../data/issues.js'
import comments from '../data/comments.js'*/

class CreatePatientPage extends React.Component {
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
      <CreatePatient />
    )
  }
}

export default withApp(CreatePatientPage)
