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
        <Tab label="All">
          <div>
          </div>
        </Tab>
        <Tab label="Admins">
          <div>
          </div>
        </Tab>
        <Tab label="Officers">
          <div>
          </div>
        </Tab>
      </Tabs>
    )
  }
}
