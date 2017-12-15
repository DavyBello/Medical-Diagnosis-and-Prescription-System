import React from 'react'
import Head from 'next/head'
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles'

import Main from '../components/main'
import SignIn from '../components/layout/signIn/signIn'

export default class extends React.Component {
  static async getInitialProps({req, query, res}) {
    const userAgent = req
      ? req.headers['user-agent']
      : navigator.userAgent;
    const isServer = !!req;

    return {isServer, userAgent};
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      open: false,
      store: {
      }
    }
  }
  componentWillReceiveProps(nextProps) {
		//this.setState(prevState => ({store:{}}));
  }

  render() {
    const {userAgent} = this.props;

    return (
      <div>
        <Head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
          <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"/>

          <title>
            NOUN Exam Issues Portal
          </title>
        </Head>
        <MuiThemeProvider muiTheme={getMuiTheme({userAgent: userAgent})}>
          <Main >
            <SignIn />
          </Main>
        </MuiThemeProvider>
      </div>
    )
  }
}
