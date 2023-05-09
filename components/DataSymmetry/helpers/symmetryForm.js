import { minLength, minValue, mustBeNumber, required } from "./validation";
import { Field } from "react-final-form";
import React from "react";
import { Checkbox, Radio } from "@rebass/forms";
import { DateTime } from "luxon";
import {
    SymmetryInput,
    SymmetrySelect,
    SymmetryTextArea
} from "../globalStyles";
import { Box } from "rebass/styled-components";


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const symmetryFormSubmit = async values => {
    await sleep(300)
    console.log(values);
    window.alert(JSON.stringify(values, 0, 2))
}

export const symmetryFormReset = (form, formFields, values) => {
    // console.log({form, formFields, values})

    // // console.log("here", "pristine", pristine, "submitting", submitting);
    // for (let i = 0; i < formFields.length; i++) {
    //     let formField = formFields[i].field.props;
    //
    //     console.log({formField})
    // }
    const now = DateTime.now().toFormat("yyyy-MM-dd'T'HH:mm");
    formFields.forEach((formField) => {
        let fieldProps = formField.field.props;
        if (fieldProps.type === 'date') {
            form.change('date', now)
        } else {
            form.change(fieldProps.name, undefined);
            form.resetFieldState(fieldProps.name);
        }

    })
};

const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

// DateTime.now().toISO();
const now = DateTime.now().toFormat("yyyy-MM-dd'T'HH:mm");

//EXAMPLE FORMAT LOCAL SPECIFIED TIME
const someOther = DateTime.local(2021, 1, 1, 15, 22, 5).toFormat("yyyy-MM-dd'T'HH:mm")

console.log(now)
const Adapted = {
    Input: props => (
        <Field
            {...props}
            title="This is a specific Custom Message"
            placeholder={`HERE TO ADD ${props.label.toUpperCase()}`}
            render={({ input, ...rest }) => {
                const { variation, layout } = props;
console.log("this is happening here")
                return (
                    <>
                        <SymmetryInput {...input} {...rest} variant={variation} />
                    </>)
            }}
        />
    ),
    Select: props => (
        <Field
            {...props}
            render={({ input, ...rest }) => {

                // console.log({props, rest, input})
                // console.log({[props.options.title]: props.options})

                const { name, variation, layout } = props;
                const { title, items } = props.options;
                return (
                    <>
                        <SymmetrySelect {...input} {...rest} variant={variation}>
                            <option value="" hidden>
                                {title}
                            </option>

                            {items && items.map((item) => (
                                <option value={`${JSON.stringify({
                                    key: item.key,
                                    value: item.value
                                })}`}>{item.label}</option>
                            ))}
                        </SymmetrySelect>
                    </>
                )
            }}
        />
    ),
    Radio: props => (
        <Field
            {...props}
            type="radio"
            render={({ input, ...rest }) => {
                // console.log({props, rest, input})
                // console.log({[props.options.title]: props.options})

                const { name, variation, layout } = props;
                const { title, items } = props.options;
                //
                // console.log(name)
                return (

                    <>
                        {items && items.map((item) => (
                            <div>

                                <label htmlFor={item.label}>
                                    <Field
                                        name={name}
                                        component="input"
                                        type="radio"
                                        value={item.label.toLowerCase()}
                                        className="custom-control-input"
                                        id={item.label.toLowerCase()}
                                    />
                                    {item.label}
                                </label>
                            </div>
                        ))}
                    </>
                )
            }}
        />
    ),
    Checkbox: props => (
        <Field
            {...props}
            type="checkbox"
            render={({ input, ...rest }) => {
                // console.log({props, rest, input})
                // console.log({[props.options.title]: props.options})

                const { name, variation, layout } = props;
                const { title, items } = props.options;

                return (
                    <>
                        {items && items.map((item) => (
                            <div>
                                <label htmlFor={item.value}>
                                    <Field
                                        name={name}
                                        component="input"
                                        type="checkbox"
                                        value={item.value}
                                        className="custom-control-input"
                                        id={item.value}
                                    />
                                    {item.label}
                                </label>
                            </div>
                        ))}
                    </>
                )
            }}
        />
    ),
    CodeArea: props => (
        <Field
            {...props}
            title="This is a specific Custom Message"
            placeholder={props.label}
            render={({ input, ...rest }) => {


                const { label, variation, layout } = props;

                return (
                    <>
                        <SymmetryTextArea {...input} {...rest} variant={variation} />
                    </>)
            }}
        />
    ),
    DatePicker: props => (
        <Field
            {...props}
            type="datetime-local"
            title={"This is a custom Message" + now}
            defaultValue={now}
            // defaultValue={'2017-05-24T10:30'}
            render={({ input, ...rest }) => {


                const { label, variation, layout } = props;

                return (
                    <>
                        <SymmetryInput {...input} {...rest} variant={variation} />
                    </>
                )
            }}
        />
    )
};

export const generateFormFields = (symmetryFields, layout, variation) => {
    let formFields = [];

    for (let i = 0; i < symmetryFields.length; i++) {

        let symmetryFieldData = symmetryFields[i];
        // console.log(symmetryFieldData);
        let rowFieldValidators = symmetryFieldData.validators;

        // let rowValidators = [minValue(18), mustBeNumber, minLength(4), required];
        let rowValidators = [required];
        let rowObjectFields = [];

        Object.values(rowFieldValidators).forEach((data, index) => {

            // VALIDATION : [MIN]
            if (data.hasOwnProperty('min')) {
                if (symmetryFieldData.type === 'string') {
                    rowValidators[rowValidators.length] = minLength(data.min);
                } else if (symmetryFieldData.type === 'number') {
                    rowValidators[rowValidators.length] = mustBeNumber;
                    rowValidators[rowValidators.length] = minValue(data.min);
                } else if (symmetryFieldData.type === 'date') {

                } else {
                    // rowValidators[rowValidators.length] = mustBeNumber;
                    // rowValidators[rowValidators.length] = minValue(data.min);
                }
            }

            if (data.hasOwnProperty('field')) {
                rowObjectFields[rowObjectFields.length] = data;
            }
        })
        let objFields = (rowObjectFields.length > 0 ? rowObjectFields : []);


        let rowField = {
            size: symmetryFieldData["gridSize"] !== undefined ? symmetryFieldData["gridSize"] : 12,
            field: (
                <Field
                    name={symmetryFieldData.name}
                    label={symmetryFieldData.label}
                    type={symmetryFieldData.type}
                    validate={composeValidators(...rowValidators)}
                >

                    {({ input, meta }) => (
                        <React.Fragment>

                            {/* FIELDS : String, Number, Email - TextField*/}
                            {(symmetryFieldData.type === 'string' ||
                                symmetryFieldData.type === 'number' ||
                                symmetryFieldData.type === 'email') && <Adapted.Input
                                    key={i}
                                    label={symmetryFieldData.label}
                                    name={symmetryFieldData.name}
                                    variation={variation}
                                    layout={layout}
                                    placeholder={symmetryFieldData.label}
                                    required={symmetryFieldData.required}
                                    type={symmetryFieldData.type}
                                    autoComplete="off"
                                    onChange={input.onChange}
                                    margin="none"
                                />}

                            {/* FIELDS : Mutli-Select - Select Dropdown */}
                            {(symmetryFieldData.type === 'multiple-select-dropdown' ||
                                symmetryFieldData.type === 'single-select-dropdown') &&
                                <Adapted.Select
                                    name={symmetryFieldData.name}
                                    label={symmetryFieldData.label}
                                    required={symmetryFieldData.required}
                                    options={symmetryFieldData.options}
                                    variation={variation}
                                    layout={layout}
                                    multiple={symmetryFieldData.type === 'multiple-select-dropdown' ? true : false}
                                    data={{
                                        label: symmetryFieldData.name.charAt(0).toUpperCase() + symmetryFieldData.name.slice(1),
                                        value: false
                                    }}
                                    margin="none"
                                    formControlProps={{ margin: 'none' }}
                                />}
                            {/* FIELDS : Mutli-Check - Select Boxes */}
                            {symmetryFieldData.type === 'multi-check' && <Adapted.Checkbox
                                key={i}
                                name={symmetryFieldData.name}
                                label={symmetryFieldData.label}
                                required={symmetryFieldData.required}
                                options={symmetryFieldData.options}
                                variation={variation}
                                layout={layout}
                                data={{
                                    label: symmetryFieldData.name.charAt(0).toUpperCase() + symmetryFieldData.name.slice(1),
                                    value: false
                                }}
                                margin="none"
                                formControlProps={{ margin: 'none' }}
                            />}
                            {/* FIELDS : Boolean - Checkbox */}
                            {symmetryFieldData.type === 'boolean' && <Adapted.Radio
                                key={i}
                                name={symmetryFieldData.name}
                                label={symmetryFieldData.label}
                                required={symmetryFieldData.required}
                                options={symmetryFieldData.options}
                                variation={variation}
                                layout={layout}
                                data={{
                                    label: symmetryFieldData.name.charAt(0).toUpperCase() + symmetryFieldData.name.slice(1),
                                    value: false
                                }}
                                margin="none"
                                formControlProps={{ margin: 'none' }}
                            />}

                            {/* FIELDS : Code - TextArea */}
                            {(symmetryFieldData.type === 'code-area') && <Adapted.CodeArea
                                key={i}
                                name={symmetryFieldData.name}
                                label={symmetryFieldData.label}
                                margin="none"
                                // placeholder={symmetryFieldData.label}
                                required={symmetryFieldData.required}
                                type={symmetryFieldData.type}
                                autoComplete="off"
                                variation={variation}
                                layout={layout}
                                onChange={input.onChange}
                            />}

                            {/* FIELDS : Date - DatePicker */}
                            {symmetryFieldData.type === 'date' && (

                                <Adapted.DatePicker
                                    key={i}
                                    label={symmetryFieldData.name.charAt(0).toUpperCase() + symmetryFieldData.name.slice(1)}
                                    name={symmetryFieldData.name}
                                    variation={variation}
                                    layout={layout}
                                    // dateFunsUtils={DateFnsUtils}
                                    required={symmetryFieldData.required}
                                    margin="none"
                                />

                            )}

                            {/* Validation Errors - Future Field Metadata */}
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </React.Fragment>)}
                </Field>
            ),
        }
        formFields[i] = rowField;


        if (objFields.length > 0) {
            let objFieldArray = [];

            for (let j = 0; j < objFields.length; j++) {

                let objField = objFields[j];

                let objElement = (<Field
                    name={symmetryFieldData.name + "." + objField.field}
                    someOtherValue={symmetryFieldData.type}
                    validate={composeValidators(...rowValidators)}
                >

                    {({ input, meta }) => {
                        // console.log({input, meta})
                        if (symmetryFieldData.type === 'date') {
                            alert("sop")
                        } else {
                            return (<SymmetryInput
                                key={i + "-" + j}
                                label={objField.field.charAt(0).toUpperCase() + objField.field.slice(1)}
                                name={symmetryFieldData.name + "." + objField.field}
                                margin="none"
                                required={symmetryFieldData.required}
                                type={symmetryFieldData.type}
                                autoComplete="off"
                            />)
                        }
                    }}
                </Field>);
                formFields[i++] = {
                    size: symmetryFieldData.size,
                    field: objElement
                }
                objFieldArray[objFieldArray.length] = objElement;
            }
        }


    }
    return formFields;
};