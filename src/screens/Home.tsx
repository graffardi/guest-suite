import React from 'react'

import { useMetrics, IMetricsContext } from '../stores/MetricsContext'

const Home = <Props extends IMetricsContext>(props: Props) => {
  props.actions.setData('titi')

  return <div>{props.data}</div>
}

export default useMetrics(Home)
