import React from 'react'
import { Form, FormSpy } from 'react-final-form'
import { symmetryFormReset, symmetryFormSubmit } from './helpers/formUtils'
import RenderCount from './RenderCount'

import { ButtonSuccess } from '../Button/Button'
import { StyledFieldGroup } from './Form/StyledFieldGroup'
import { StyledFieldLabel } from './Form/StyledFieldLabel'
import { StyledFieldItem } from './Form/StyledFieldItem'
import { StyledButtonGroup } from './Form/StyledButtonGroup'

const FormFields = ({ symmetryFields, layout, variation }) => {
  
  // console.log("FORM FIELDS___________", {symmetryFields, layout, variation });
  
  const formVariation =
    variation && layout
      ? variation +
        layout.substr(0, 1).toUpperCase() +
        layout.substr(1, layout.size)
      : 'default'

  return (
    <React.Fragment>
      {symmetryFields.map((item, idx) => {
        // console.log({ layout, variation, formVariation, item })
        return (
          <StyledFieldGroup
            id={`SYMMETRY_FIELD_GROUP__${idx}`}
            key={idx}
            layout={layout}
            variation={variation}
            variant={formVariation}
          >
            <StyledFieldLabel
              id={`SYMMETRY_FIELD_LABEL__${idx}`}
              layout={layout}
              variation={variation}
            >
              {item.field.props.label}
            </StyledFieldLabel>

            <StyledFieldItem
              id={`SYMMETRY_FIELD_ITEM__${idx}`}
              key={idx}
              layout={layout}
              variation={variation}
              variant={formVariation}
            >
              {item.field}
            </StyledFieldItem>
          </StyledFieldGroup>
        )
      })}
    </React.Fragment>
  )
}

const SymmetryForm = ({
  symmetryFields,
  layout,
  variation,
  subscription,
  formSubmit
}) => {
  if (!formSubmit) formSubmit = symmetryFormSubmit

  const formVariation =
    variation && layout
      ? variation +
        layout.substr(0, 1).toUpperCase() +
        layout.substr(1, layout.size)
      : 'default'

  const validateForm = (values) => {
    // console.log({ values })
    return true
  }
  const renderErrors = (errors) =>
    errors ? (
      <div>
        {Object.keys(errors).map((e) => (
          <span style={{ color: 'red' }} key={e}>
            {e}: {errors[e]}
          </span>
        ))}
      </div>
    ) : (
      ''
    )
  return (
    <React.Fragment>
      <Form
        validate={validateForm}
        onSubmit={formSubmit}
        subscription={subscription}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <RenderCount />

            <FormFields
              id='FORM_FIELDS'
              symmetryFields={symmetryFields}
              layout={layout}
              variation={variation}
            />

            <StyledButtonGroup
              id='SYMMETRY-buttonGroup'
              layout={layout}
              variation={formVariation}
            >
              {/* <Button
                // variant={variation}
                type='submit'
                disabled={submitting}
              >
                Submit
              </Button>
              <Button
                // variant={variation}
                // type='button'
                onClick={(e) => symmetryFormReset(form, symmetryFields, values)}
                disabled={submitting || pristine}
              >
                Reset
              </Button> */}
              <ButtonSuccess
                appearance='secondary'
                type='submit'
                disabled={submitting}
                size='small'
              >
                Submit
              </ButtonSuccess>
              <ButtonSuccess
                appearance='primary'
                type='submit'
                disabled={submitting}
                size='small'
                onClick={(e) => symmetryFormReset(form, symmetryFields, values)}
              >
                Reset
              </ButtonSuccess>
              {/* <button type="submit">submit</button>
              <div onClick={(e) => symmetryFormReset(form, symmetryFields, values)}>reset</div> */}
            </StyledButtonGroup>

            <StyledFieldGroup>
              {values ? (
                <pre>
                  <RenderCount />
                  {JSON.stringify(values, 0, 2)}
                </pre>
              ) : (
                <FormSpy subscription={{ values: true }}>
                  {({ values }) => (
                    <pre>
                      <RenderCount />
                      {JSON.stringify(values, 0, 2)}
                    </pre>
                  )}
                </FormSpy>
              )}
            </StyledFieldGroup>
          </form>
        )}
      />
    </React.Fragment>
  )
}

export { SymmetryForm }
