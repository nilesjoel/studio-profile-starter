import { Field } from 'react-final-form'
import React from 'react'
// import { SymmetrySelect, SymmetryTextArea} from "../../_forms";
import {
  minLength,
  minValue,
  mustBeNumber,
  required
} from './helpers/validation'
import { DateTime } from 'luxon'

import { StyledInput } from './Input/StyledInput'
import { StyledSelect } from './Input/StyledSelect'
import { StyledTextArea } from './Input/StyledTextArea'
import { StyledCheckbox } from './Input/StyledCheckbox'
import { StyledRadio } from './Input/StyledRadio'

const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    )

// DateTime.now().toISO();
const now = DateTime.now().toFormat("yyyy-MM-dd'T'HH:mm")

// EXAMPLE FORMAT LOCAL SPECIFIED TIME
const someOther = DateTime.local(2021, 1, 1, 15, 22, 5).toFormat(
  "yyyy-MM-dd'T'HH:mm"
)

// console.log(now)

const Adapted = {
  Input: (props) => (
    <Field
      {...props}
      title='This is a specific Custom Message'
      // initialValue={JSON.stringify(props)}
      placeholder={`HERE TO ADD ${props.label.toUpperCase()}`}
      render={({ input, ...rest }) => {
        const { variation, layout } = props
        return (
          <React.Fragment>
            <StyledInput
              {...input}
              {...rest}
              variation={variation}
              layout={layout}
            />
          </React.Fragment>
        )
      }}
    />
  ),
  Select: (props) => (
    <Field
      {...props}
      render={({ input, ...rest }) => {
        // console.log({ props, rest, input })
        // console.log({ [props.options.title]: props.options })

        const { name, variation, layout } = props
        const { title, items } = props.options

        if(props.multiple===true){
          input = {...input, value : [...input.value], type : 'select'}
        }else{
          input = {...input, type : 'select'}
        }
        

        // console.log({ input, rest, variation, props })
        return (
          <React.Fragment>
            <StyledSelect {...input} {...rest} variant={variation}>
              {items &&
                items.map((item, idx) => (
                  <option
                    key={idx}
                    value={[
                      `${JSON.stringify({
                        key: item.key,
                        value: item.value
                      })}`
                    ]}
                  >
                    {item.label}
                  </option>
                ))}
            </StyledSelect>
          </React.Fragment>
        )
      }}
    />
  ),
  Radio: (props) => (
    <Field
      {...props}
      type='radio'
      render={({ input, ...rest }) => {
        // console.log({props, rest, input})
        // console.log({[props.options.title]: props.options})

        const { name, variation, layout } = props
        const { title, items } = props.options
        //
        // console.log(name)
        return (
          <div>
            <StyledRadio>
              {items &&
                items.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <label key={`label_${idx}`} htmlFor={item.label}>
                      {`${item.label}`}
                    </label>

                    <Field
                      name={name}
                      component='input'
                      type='radio'
                      value={item.label.toLowerCase()}
                      className='custom-control-input'
                      id={item.label.toLowerCase()}
                      key={`radiobutton_${idx}`}
                    />
                  </React.Fragment>
                ))}
            </StyledRadio>
          </div>
        )
      }}
    />
  ),
  Checkbox: (props) => (
    <Field
      {...props}
      type='checkbox'
      render={({ input, ...rest }) => {
        // console.log({props, rest, input})
        // console.log({[props.options.title]: props.options})

        const { name, variation, layout } = props
        const { title, items } = props.options

        return (
          <React.Fragment>
            {items &&
              items.map((item, idx) => (
                <StyledCheckbox key={idx}>
                  <Field
                    name={name}
                    component='input'
                    type='checkbox'
                    value={item.value}
                    className='custom-control-input'
                    id={item.value}
                    key={`checkbox_${idx}`}
                  />
                  <label key={idx} htmlFor={item.value}>
                    {item.label}
                  </label>
                </StyledCheckbox>
              ))}
          </React.Fragment>
        )
      }}
    />
  ),
  CodeArea: (props) => (
    <Field
      {...props}
      title='This is a specific Custom Message'
      placeholder={props.label}
      render={({ input, ...rest }) => {
        const { label, variation, layout } = props

        return (
          <React.Fragment>
            <StyledTextArea {...input} {...rest} variant={variation} />
          </React.Fragment>
        )
      }}
    />
  ),
  DatePicker: (props) => (
    <Field
      {...props}
      type='datetime-local'
      title={'This is a custom Message' + now}
      defaultValue={now}
      // defaultValue={'2017-05-24T10:30'}
      render={({ input, ...rest }) => {
        const { label, variation, layout } = props

        return (
          <React.Fragment>
            <StyledInput
              {...input}
              {...rest}
              variation={variation}
              layout={layout}
            />
          </React.Fragment>
        )
      }}
    />
  )
}

export const generateFormFields = (symmetryFields, layout, variation) => {
  const formFields = []


    // console.log("BEGINNING TO GENERATE FORM FIELDS",symmetryFields)


  for (let i = 0; i < symmetryFields.length; i++) {
    const symmetryFieldData = symmetryFields[i]
    console.log({symmetryFieldData})
    const rowFieldValidators = symmetryFieldData.validators

    // let rowValidators = [minValue(18), mustBeNumber, minLength(4), required];
    const rowValidators = [required]
    const rowObjectFields = []

    Object.values(rowFieldValidators).forEach((data, index) => {
      // VALIDATION : [MIN]
      if (data.hasOwnProperty('min')) {
        if (symmetryFieldData.type === 'string') {
          rowValidators[rowValidators.length] = minLength(data.min)
        } else if (symmetryFieldData.type === 'number') {
          rowValidators[rowValidators.length] = mustBeNumber
          rowValidators[rowValidators.length] = minValue(data.min)
        } else if (symmetryFieldData.type === 'date') {
        } else {
          // rowValidators[rowValidators.length] = mustBeNumber;
          // rowValidators[rowValidators.length] = minValue(data.min);
        }
      }

      if (data.hasOwnProperty('field')) {
        rowObjectFields[rowObjectFields.length] = data
      }
    })
    const objFields = rowObjectFields.length > 0 ? rowObjectFields : []

    const rowField = {
      size:
        symmetryFieldData.gridSize !== undefined
          ? symmetryFieldData.gridSize
          : 12,
      field: (
        <Field
          name={symmetryFieldData.name}
          label={symmetryFieldData.label}
          type={symmetryFieldData.type}
          validate={composeValidators(...rowValidators)}
        >
          {({ input, meta }) => (
            <React.Fragment>
              {/* FIELDS : String, Number, Email - TextField */}
              {(symmetryFieldData.type === 'string' ||
                symmetryFieldData.type === 'number' ||
                symmetryFieldData.type === 'email') && (
                <Adapted.Input
                  key={i}
                  label={symmetryFieldData.label}
                  name={symmetryFieldData.name}
                  variation={variation}
                  layout={layout}
                  initialValue={symmetryFieldData?.initialValue}
                  placeholder={!symmetryFieldData?.initialValue ? symmetryFieldData.label: ''}
                  required={symmetryFieldData.required}
                  type={symmetryFieldData.type}
                  autoComplete='off'
                  onChange={input.onChange}
                  margin='none'
                />
              )}

              {/* FIELDS : Mutli-Select - Select Dropdown */}
              {(symmetryFieldData.type === 'multiple-select-dropdown' ||
                symmetryFieldData.type === 'single-select-dropdown') && (
                <Adapted.Select
                  name={symmetryFieldData.name}
                  label={symmetryFieldData.label}
                  required={symmetryFieldData.required}
                  options={symmetryFieldData.options}
                  variation={variation}
                  layout={layout}
                  multiple={
                    symmetryFieldData.type === 'multiple-select-dropdown'
                  }
                  data={{
                    label:
                      symmetryFieldData.name.charAt(0).toUpperCase() +
                      symmetryFieldData.name.slice(1),
                    value: false
                  }}
                  margin='none'
                  formControlProps={{ margin: 'none' }}
                />
              )}

              {/* FIELDS : Mutli-Check - Select Boxes */}
              {symmetryFieldData.type === 'multi-check' && (
                <Adapted.Checkbox
                  key={i}
                  name={symmetryFieldData.name}
                  label={symmetryFieldData.label}
                  required={symmetryFieldData.required}
                  options={symmetryFieldData.options}
                  variation={variation}
                  layout={layout}
                  data={{
                    label:
                      symmetryFieldData.name.charAt(0).toUpperCase() +
                      symmetryFieldData.name.slice(1),
                    value: false
                  }}
                  margin='none'
                  formControlProps={{ margin: 'none' }}
                />
              )}
              {/* FIELDS : Boolean - Checkbox */}
              {symmetryFieldData.type === 'boolean' && (
                <Adapted.Radio
                  key={i}
                  name={symmetryFieldData.name}
                  label={symmetryFieldData.label}
                  required={symmetryFieldData.required}
                  options={symmetryFieldData.options}
                  variation={variation}
                  layout={layout}
                  data={{
                    label:
                      symmetryFieldData.name.charAt(0).toUpperCase() +
                      symmetryFieldData.name.slice(1),
                    value: false
                  }}
                  margin='none'
                  formControlProps={{ margin: 'none' }}
                />
              )}

              {/* FIELDS : Code - TextArea */}
              {symmetryFieldData.type === 'code-area' && (
                <Adapted.CodeArea
                  key={i}
                  name={symmetryFieldData.name}
                  label={symmetryFieldData.label}
                  margin='none'
                  // placeholder={symmetryFieldData.label}
                  required={symmetryFieldData.required}
                  type={symmetryFieldData.type}
                  autoComplete='off'
                  variation={variation}
                  layout={layout}
                  onChange={input.onChange}
                />
              )}

              {/* FIELDS : Date - DatePicker */}
              {symmetryFieldData.type === 'date' && (
                <Adapted.DatePicker
                  key={i}
                  label={
                    symmetryFieldData.name.charAt(0).toUpperCase() +
                    symmetryFieldData.name.slice(1)
                  }
                  name={symmetryFieldData.name}
                  variation={variation}
                  layout={layout}
                  // dateFunsUtils={DateFnsUtils}
                  required={symmetryFieldData.required}
                  margin='none'
                />
              )}

              {/* Validation Errors - Future Field Metadata */}
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </React.Fragment>
          )}
        </Field>
      )
    }

    // console.log("rowField-------------------------------------", {rowField})

    formFields[i] = rowField

    if (objFields.length > 0) {
      const objFieldArray = []

      for (let j = 0; j < objFields.length; j++) {
        const objField = objFields[j]

        const objElement = (
          <Field
            name={symmetryFieldData.name + '.' + objField.field}
            someOtherValue={symmetryFieldData.type}
            validate={composeValidators(...rowValidators)}
          >
            {({ input, meta }) => {
              // console.log({ input, meta })
              if (symmetryFieldData.type === 'date') {
                alert('sop')
              } else {
                return (
                  <SymmetryInput
                    key={i + '-' + j}
                    label={
                      objField.field.charAt(0).toUpperCase() +
                      objField.field.slice(1)
                    }
                    name={symmetryFieldData.name + '.' + objField.field}
                    margin='none'
                    required={symmetryFieldData.required}
                    type={symmetryFieldData.type}
                    autoComplete='off'
                  />
                )
              }
            }}
          </Field>
        )
        formFields[i++] = {
          size: symmetryFieldData.size,
          field: objElement
        }
        objFieldArray[objFieldArray.length] = objElement
      }
    }
  }
  return formFields
}
