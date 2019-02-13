import React, { useEffect } from 'react'

import { useMetrics, IMetrics, IMetricsField } from '../stores/MetricsContext'
import MetricsBar from '../components/bar/MetricsBar'
import MetricsGraph from '../components/MetricsGraph'
import MetricsControlPanel from '../components/panel/MetricsControlPanel'

const Home = <Props extends IMetrics>(props: Props) => {
  useEffect(() => {
    props.actions.setMetrics([
      ...props.metrics,
      { name: 'Recommandations client', value: 66, unit: '%' },
      { name: 'Guest score', value: 42 },
      { name: 'Campings ciblés', value: 112 },
      { name: 'Note moyenne', value: 8.4 }
    ])
  }, [])

  return (
    <div className="app-container">
      <MetricsBar />

      <div className="main-container">
        <MetricsGraph />
        <MetricsControlPanel />
      </div>
    </div>
  )
}

export default useMetrics(Home)
