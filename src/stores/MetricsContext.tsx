import React, { createContext, useState, ReactNode } from 'react'

export interface IMetricsActions {
  setData: (value: Array<IMetricsField>) => void
}

export interface IMetricsField {
  name: string
  value: number
}

export interface IMetrics {
  data: Array<IMetricsField>
  actions: IMetricsActions
}

interface Props {
  children: ReactNode
}

export const MetricsContext = createContext({})

const MetricsProvider = (props: Props) => {
  const [data, setData] = useState([])

  return (
    <MetricsContext.Provider
      value={{
        data,
        actions: {
          setData
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
