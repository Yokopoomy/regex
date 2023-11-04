import Validator from '../app';

test.each([
  ['Y_okoE654Poo-my', true],
  ['3yokopoomy', false],
  ['Yoko@poomy', false],
  ['Yoko1234poomy', false],
  ['Yokopoomy_', false],
  ['-Yokopoomy', false],
  ['Yokopoomy3', false],
])('Testing userName', (UserName, expectedValue) => {
  const object = new Validator(UserName);
  const result = object.validateUsername();
  expect(result).toEqual(expectedValue);
});
