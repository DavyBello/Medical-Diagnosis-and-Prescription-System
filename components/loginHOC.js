import React from 'react'
import Head from 'next/head'
import {MuiThemeProvider, getMuiTheme, grey500} from 'material-ui/styles'

import Main from './main'

export default function withApp(Child) {
  class WrappedComponent extends React.Component {
    static async getInitialProps(context) {
      //For Material-UI SSR
      const userAgent = context.req
        ? context.req.headers['user-agent']
        : navigator.userAgent;
      const isServer = !!context.req;

      let initData = {}

      return {initData, isServer, userAgent}
    }

    constructor(props, context) {
      super(props, context)

      this.state = {}
    }

    render() {
      //console.log(this.props);
      const {userAgent} = this.props;

      return (
        <MuiThemeProvider muiTheme={getMuiTheme({
          palette: {
            canvasColor: grey500
          },
          userAgent: userAgent
        })}>
          <div style={{margin: '-8px'}}>
            <Head>
              <meta charSet="utf-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
              <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"/>

              <title>
                MEDICAL DIAGNOSIS AND THERAPY SYSTEM
              </title>
            </Head>

            <Child/>
          </div>
        </MuiThemeProvider>
      )
    }
  }

  return WrappedComponent
}
