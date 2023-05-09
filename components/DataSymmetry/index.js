import React, { useState, useEffect } from 'react'
import { generateFormFields } from './SymmetryFields'
import { StyledFormWrapper } from './Form/StyledFormWrapper/StyledFormWrapper'
import { SymmetryForm } from './SymmetryForm'

/**
 * Symmetry Data Form
 * @param fields
 * @param layout
 * @param variation
 * @param text
 * @param formSubmit
 * @param formFields
 * @returns {*}
 * @constructor
 */
const SymmetryDataForms = ({
  fields,
  layout,
  variation,
  text,
  formSubmit
}) => {
  useEffect(() => {
    setSelectedLayout({
      layout,
      variation
    })
  }, [layout, variation])
  const [selectedLayout, setSelectedLayout] = useState({
    layout: layout === undefined ? 'row' : layout,
    variation: variation === undefined ? 'light' : variation
  })

  const symmetryLayout = selectedLayout.layout
  const symmetryVariation = selectedLayout.variation

  // If no Form Fields were passed as a parameter, default to ... (Empty List / Single Input Field)
  const dataFields = fields || [];

  const symmetryFields = dataFields ? generateFormFields(dataFields, symmetryLayout, symmetryVariation) : [];
  

  // console.log(
  //   {
  //     symmetryFields,
  //     layout,
  //     variation,
  //     text
  //   },
  //   `GENERATED SYMMETRY_FIELDS------------------------------`
  // )

  return (
    <React.Fragment>
      <StyledFormWrapper className={StyledFormWrapper.default}>
        <SymmetryForm
          layout={symmetryLayout}
          variation={symmetryVariation}
          formSubmit={formSubmit}
          symmetryFields={symmetryFields}
          subscription={{ submitting: true, pristine: true }}
        />
      </StyledFormWrapper>
    </React.Fragment>
  )
}

export { SymmetryDataForms }
