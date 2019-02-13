import React, { ChangeEvent, FormEvent, useState } from 'react'

import { IMetrics, useMetrics } from '../../stores/MetricsContext'

const MetricForm = <Props extends IMetrics>(props: Props) => {
  const [fieldName, setFieldName] = useState('')
  const [fieldValue, setFieldValue] = useState('')
  const [fieldUnit, setFieldUnit] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const metric = fieldUnit
      ? {
          name: fieldName,
          value: parseFloat(fieldValue),
          unit: fieldUnit
        }
      : {
          name: fieldName,
          value: parseFloat(fieldValue)
        }

    props.actions.setMetrics([...props.metrics, metric])
  }

  return (
    <form className="control-form" onSubmit={handleSubmit}>
      <input
        id="fieldName"
        type="text"
        className="field field-name"
        value={fieldName}
        placeholder="Metric"
        required
        onChange={(e: ChangeEvent<HTMLInputElement>) => setFieldName(e.target.value)}
      />
      <input
        id="fieldName"
        type="text"
        className="field field-value"
        value={fieldValue}
        placeholder="Value"
        required
        onChange={(e: ChangeEvent<HTMLInputElement>) => setFieldValue(e.target.value)}
      />
      <input
        id="fieldName"
        type="text"
        className="field field-unit"
        value={fieldUnit}
        placeholder="Unit"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setFieldUnit(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default useMetrics(MetricForm)
