import React from 'react'

import { IMetrics, IMetricsField, useMetrics } from '../stores/MetricsContext'
import MetricListItem from './MetricListItem'

const MetricsList = <Props extends IMetrics>(props: Props) => (
  <ul>
    {props.metrics.map((metric: IMetricsField, index: number) => (
      <MetricListItem name={metric.name} value={metric.value} unit={metric.unit} key={`metric-item-${index}`} />
    ))}
  </ul>
)

export default useMetrics(MetricsList)
