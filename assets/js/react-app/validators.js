export function validatePhoneNumber(phoneNumber) {
  const containsOnlyValidCharacters = phoneNumber.match(/^[\\+\\(\\)\-\s\d]+$/);
  const numberOfDigits = phoneNumber.split("").filter(n => n.match(/^\d$/))
    .length;

  return containsOnlyValidCharacters && numberOfDigits <= 15;
}

export function validateName(name) {
  return name.match(/^[A-z\s'\.\-,]{1,40}$/); //eslint-disable-line
}

export function validateEmailAddress(email) {
  return email.match(/^[a-zA-Z0-9_\-.+]+@[a-zA-Z0-9_\-.+]+\.[a-zA-Z]{2,5}$/);
}
