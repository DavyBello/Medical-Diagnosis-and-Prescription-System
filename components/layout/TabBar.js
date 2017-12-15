import React from 'react'
import Link from 'next/link'

import {Tabs, Tab} from 'material-ui'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const tabStyle = {/*width: '40%',*/ }
    return (
      <Tabs tabItemContainerStyle={tabStyle}>
        <Tab label="Open">
          <div>
          </div>
        </Tab>
        <Tab label="Closed">
          <div>
          </div>
        </Tab>
        <Tab label="All">
          <div>
          </div>
        </Tab>
      </Tabs>
    )
  }
}
