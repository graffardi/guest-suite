import React from 'react'

import { IMetrics, IMetricsField, useMetrics } from '../stores/MetricsContext'

const MetricsBar = <Props extends IMetrics>(props: Props) => (
  <div className="metrics-bar">
    {props.data.map((metric: IMetricsField, index: number) => (
      <div>
        {metric.name} / {metric.value}
      </div>
    ))}
  </div>
)

export default useMetrics(MetricsBar)
