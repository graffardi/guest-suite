import React, { useEffect } from 'react'

import { useMetrics, IMetrics, IMetricsField } from '../stores/MetricsContext'
import MetricsBar from '../components/MetricsBar'

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

      {props.metrics.map((metric: IMetricsField, index: number) => (
        <div key={`metrictest-${index}`}>
          {metric.name} and {metric.value}
        </div>
      ))}
    </div>
  )
}

export default useMetrics(Home)
