import React from 'react'
import Link from 'next/link'

import Navbar from './layout/navbar'
import MainCard from './layout/mainCard'

export default class Main extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div style={{margin: '-8px'}}>
        <Navbar />
        <MainCard children={this.props.children}/>
      </div>
    )
  }
}
