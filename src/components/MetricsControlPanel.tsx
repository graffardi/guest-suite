import React, { useState, FormEvent, ChangeEvent } from 'react'

import { IMetrics, useMetrics } from '../stores/MetricsContext'

const MetricsControlPanel = <Props extends IMetrics>(props: Props) => {
  const [fieldName, setFieldName] = useState('')
  const [fieldValue, setFieldValue] = useState('')
  const [fieldUnit, setFieldUnit] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    console.log(fieldName, fieldValue, fieldUnit)
  }

  return (
    <form className="control-panel" onSubmit={handleSubmit}>
      <input
        id="fieldName"
        type="text"
        className="field-name"
        value={fieldName}
        required
        onChange={(e: ChangeEvent<HTMLInputElement>) => setFieldName(e.target.value)}
      />
      <input
        id="fieldName"
        type="text"
        className="field-value"
        value={fieldValue}
        required
        onChange={(e: ChangeEvent<HTMLInputElement>) => setFieldValue(e.target.value)}
      />
      <input
        id="fieldName"
        type="text"
        className="field-unit"
        value={fieldUnit}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setFieldUnit(e.target.value)}
      />
      <button type="submit">OK</button>
    </form>
  )
}

export default useMetrics(MetricsControlPanel)
