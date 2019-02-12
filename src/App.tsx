import React, { Component } from 'react'

import Home from './screens/Home'
import MetricsProvider from './stores/MetricsContext'

class App extends Component {
  render() {
    return (
      <MetricsProvider>
        <Home />
      </MetricsProvider>
    )
  }
}

export default App
