import React from 'react'

interface Props {
  name: string
  value: number
  unit?: string
}

const MetricItem = (props: Props) => (
  <div className="metric-container">
    <div className="metric-name">{props.name}</div>
    <div className="metric-value">{`${props.value} ${props.unit ? props.unit : ''}`}</div>
  </div>
)

export default MetricItem
