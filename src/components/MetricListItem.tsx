import React from 'react'

import { IMetricsField } from '../stores/MetricsContext'

const MetricListItem = <Props extends IMetricsField>(props: Props) => (
  <li>{`${props.name} ${props.value}${props.unit ? ` ${props.unit}` : ''}`}</li>
)

export default MetricListItem
