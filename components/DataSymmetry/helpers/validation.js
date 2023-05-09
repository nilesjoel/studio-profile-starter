// Simplified method of validator/lib/isEmail
function isEmail(string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(string)
}

export function emailValidate(value) {
  return value && !isEmail(value.trim()) ? 'Invalid email' : null
}

function isDirty(value) {
  return value || value === 0
}

//
// export function required(requiredFields, values) {
//   return requiredFields.reduce(
//     (fields, field) => ({
//
//       ...fields,
//       ...(isDirty(values[field]) ? undefined : { [field]: 'Required' }),
//     }),
//     {},
//   );
// }

//
export const required = (value) => console.log({ value })
// export const required = value => (value ? undefined : "Required");
export const mustBeNumber = (value) =>
  isNaN(value) ? 'Must be a number' : undefined
export const minLength = (min) => (value) =>
  (value && value.length) >= min
    ? undefined
    : 'Should be at least ' + min + ' characters.'
export const minValue = (min) => (value) =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
