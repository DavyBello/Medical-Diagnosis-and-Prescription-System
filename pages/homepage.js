import React from 'react'

import Homepage from '../components/homepage/index'
import withApp from '../components/withApp'

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <Homepage />
    )
  }
}

export default withApp(HomePage)
