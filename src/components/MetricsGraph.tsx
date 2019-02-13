import React from 'react'
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'

import { IMetrics, useMetrics } from '../stores/MetricsContext'

const MetricsGraph = <Props extends IMetrics>(props: Props) => (
  <div className="graph-container">
    <ResponsiveContainer height="100%" width="100%">
      <BarChart data={props.metrics}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </div>
)

export default useMetrics(MetricsGraph)
