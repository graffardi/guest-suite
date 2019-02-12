import React, { createContext, useState, ReactNode, Component, ReactElement } from 'react'

export interface ContextActions {
  setData: (value: string) => void
}

export interface IMetricsContext {
  data: string
  actions: ContextActions
}

interface Props {
  children: ReactNode
}

export const MetricsContext = createContext({})

const MetricsProvider = (props: Props) => {
  const [data, setData] = useState('toto')

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

export const useMetrics = (Component: React.ComponentType<IMetricsContext>) => (props: any) => (
  <MetricsContext.Consumer>{store => <Component {...props} {...store} />}</MetricsContext.Consumer>
)

export default MetricsProvider
