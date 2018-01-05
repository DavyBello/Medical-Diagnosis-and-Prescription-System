import React from 'react'
//import Link from 'next/link'

import { Paper} from 'material-ui'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const style = {
      card : {
        height: 'auto',
        margin: 20
      }
    }
    return (
      <div style={{
        padding: '20px',
        backgroundColor: '#ddd',
        minHeight: '100vh',
        backgroundImage: "url('static/img/HP005.jpg')",
        backgroundRepeat: 'repeat',
        backgroundSize: '700px'
      }} >
        {this.props.children}
      </div>
    )
  }
}
