import React from 'react';
import Styles from './Styles';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components';
import { StyledLabel, StyledInput, StyledButton, StyledAlert } from './form.elements';
const onSubmit = async (values) => {
  // e.preventDefault();
  console.log(values)
  const response = await fetch("/api/breathwork", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await response.json();
  console.log('POST: ', data);
};

const required = value => (value ? undefined : 'Required')
const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
const minValue = min => value =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)


const StyledFormField = styled.div`
  display: flex;
  flex-direction: column;
  `

const RoutineForm = () => (
  <Form onSubmit={onSubmit} render={({
    handleSubmit,
    form,
    submitting,
    pristine,
    values }) => (

    <form onSubmit={(e, values) => handleSubmit(e, values)}>

      <Field name="name" validate={required}>
        {({ input, meta }) => (
          <>
            <StyledLabel>Routine Name</StyledLabel>
            <StyledInput {...input} type="text" placeholder="Name" />
            {meta.error && meta.touched && <StyledAlert>{meta.error}</StyledAlert>}
          </>
        )}
      </Field>

      <Field name="round_count" validate={required}>
        {({ input, meta }) => (
          <>
            <StyledLabel>Rounds</StyledLabel>
            <StyledInput {...input} type="text" placeholder="Rounds" />
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </>
        )}
      </Field>

      <Field name="rep_count" validate={composeValidators(required, mustBeNumber, minValue(15))}>
        {({ input, meta }) => (
          <>
            <StyledLabel>Breaths</StyledLabel>
            <StyledInput {...input} type="text" placeholder="Breaths" />
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </>
        )}
      </Field>

      <Field name="retention" validate={composeValidators(required, mustBeNumber, minValue(60))}
      >
        {({ input, meta }) => (
          <>
            <StyledLabel>Retention</StyledLabel>
            <StyledInput {...input} type="text" placeholder="Breath Hold" />
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </>
        )}
      </Field>

      {/* <div className="buttons"> */}
      <StyledButton type="submit" disabled={submitting}>
        Submit
      </StyledButton>
      <StyledButton
        type="button"
        onClick={form.reset}
        disabled={submitting || pristine}
      >
        Reset
      </StyledButton>
      {/* </div> */}


      <pre>{JSON.stringify(values, 0, 2)}</pre>
    </form>
  )}
  />
);

export default RoutineForm;
