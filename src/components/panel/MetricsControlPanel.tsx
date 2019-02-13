import React from 'react'

import MetricsList from '../list/MetricsList'
import MetricForm from './MetricForm'

interface Props {}

const MetricsControlPanel = (props: Props) => (
  <div className="control-panel">
    <MetricForm />

    <MetricsList />
  </div>
)

export default MetricsControlPanel
