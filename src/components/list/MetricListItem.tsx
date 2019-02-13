import React from 'react'

import { IMetricsField } from '../../stores/MetricsContext'

interface Props extends IMetricsField {
  index: number
  handleDeletion: (index: number) => void
}

const MetricListItem = (props: Props) => {
  return (
    <li className="list-item">
      <div className="list-item-infos">
        <div className="list-item-name">{props.name}</div>
        <div className="list-item-value">{props.value}</div>
      </div>
      <button className="list-item-button" onClick={() => props.handleDeletion(props.index)}>
        Del
      </button>
    </li>
  )
}

export default MetricListItem
