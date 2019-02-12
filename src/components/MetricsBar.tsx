import React from 'react'

import { IMetrics, IMetricsField, useMetrics } from '../stores/MetricsContext'
import MetricItem from './MetricItem'

const MetricsBar = <Props extends IMetrics>(props: Props) => (
  <div className="metrics-bar">
    {props.metrics.map((metric: IMetricsField, index: number) => (
      <MetricItem name={metric.name} value={metric.value} unit={metric.unit} key={`metric-${index}`} />
    ))}
  </div>
)

export default useMetrics(MetricsBar)
