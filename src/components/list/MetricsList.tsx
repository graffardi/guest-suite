import React from 'react'

import { IMetrics, IMetricsField, useMetrics } from '../../stores/MetricsContext'
import MetricListItem from './MetricListItem'

const MetricsList = <Props extends IMetrics>(props: Props) => {
  const handleDeletion = (index: number) => {
    const newMetrics = [...props.metrics]

    newMetrics.splice(index, 1)

    props.actions.setMetrics(newMetrics)
  }

  return (
    <ul className="metric-list">
      {props.metrics.map((metric: IMetricsField, index: number) => (
        <MetricListItem
          name={metric.name}
          value={metric.value}
          unit={metric.unit}
          index={index}
          handleDeletion={handleDeletion}
          key={`metric-item-${index}`}
        />
      ))}
    </ul>
  )
}

export default useMetrics(MetricsList)
