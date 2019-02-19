import React from 'react'

import { IMetricsField } from '../../stores/MetricsContext'

const MetricItem = <Props extends IMetricsField>(props: Props) => (
  <div className="metric-container">
    <div className="metric-name">{props.name}</div>
    <div className="metric-value">{`${props.value} ${props.unit ? props.unit : ''}`}</div>
  </div>
)

export default MetricItem
