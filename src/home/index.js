import React, { Component } from 'react'
import { Link } from 'react-router'
import './index.css'

import AppShell from '../components/app_shell'

class Home extends Component {
  render() {
    return (
      <AppShell>
        Welcome
      </AppShell>
    )
  }
}

export default Home
