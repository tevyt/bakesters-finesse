export function validatePhoneNumber(phoneNumber) {
  const containsOnlyValidCharacters = phoneNumber.match(/^[\\+\\(\\)\-\s\d]+$/);
  const numberOfDigits = phoneNumber.split("").filter(n => n.match(/^\d$/))
    .length;

  console.log(
    "Contains only valid: ",
    containsOnlyValidCharacters,
    " Number of digits: ",
    numberOfDigits
  );
  return containsOnlyValidCharacters && numberOfDigits <= 15;
}
