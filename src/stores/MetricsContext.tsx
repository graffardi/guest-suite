import React, { createContext, useState, ReactNode } from 'react'

export interface IMetricsActions {
  setMetrics: (value: Array<IMetricsField>) => void
}

export interface IMetricsField {
  name: string
  value: number
  unit?: string
}

export interface IMetrics {
  metrics: Array<IMetricsField>
  actions: IMetricsActions
}

interface Props {
  children: ReactNode
}

export const MetricsContext = createContext({})

const MetricsProvider = (props: Props) => {
  const [metrics, setMetrics] = useState([])

  return (
    <MetricsContext.Provider
      value={{
        metrics,
        actions: {
          setMetrics
        }
      }}
    >
      {props.children}
    </MetricsContext.Provider>
  )
}

export const useMetrics = (Component: React.ComponentType<IMetrics>) => (props: any) => (
  <MetricsContext.Consumer>{store => <Component {...props} {...store} />}</MetricsContext.Consumer>
)

export default MetricsProvider
