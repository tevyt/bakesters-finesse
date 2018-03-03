export function validatePhoneNumber(phoneNumber) {
  const containsOnlyValidCharacters = phoneNumber.match(/^[\\+\\(\\)\-\s\d]+$/);
  const numberOfDigits = phoneNumber.split("").filter(n => n.match(/^\d$/))
    .length;

  return containsOnlyValidCharacters && numberOfDigits <= 15;
}

export function validateName(name) {
  return name.match(/^[A-z\s'\.\-,]{1,40}$/); //eslint-disable-line
}
