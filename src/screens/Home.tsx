import React, { useEffect } from 'react'

import { useMetrics, IMetrics, IMetricsField } from '../stores/MetricsContext'
import MetricsBar from '../components/MetricsBar'

const Home = <Props extends IMetrics>(props: Props) => {
  useEffect(() => {
    props.actions.setData([...props.data, { name: 'toto', value: 42 }])
  }, [])

  return (
    <div className="app-container">
      <MetricsBar />

      {props.data.map((metric: IMetricsField, index: number) => (
        <div key={`metric-${index}`}>
          {metric.name} and {metric.value}
        </div>
      ))}
    </div>
  )
}

export default useMetrics(Home)
