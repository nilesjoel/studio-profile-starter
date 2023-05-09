
import { DateTime } from 'luxon'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const symmetryFormSubmit = async (values) => {
  await sleep(300)
  console.log(values)
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
  const now = DateTime.now().toFormat("yyyy-MM-dd'T'HH:mm")
  formFields.forEach((formField) => {
    const fieldProps = formField.field.props
    if (fieldProps.type === 'date') {
      form.change('date', now)
    } else {
      form.change(fieldProps.name, undefined)
      form.resetFieldState(fieldProps.name)
    }
  })
}
