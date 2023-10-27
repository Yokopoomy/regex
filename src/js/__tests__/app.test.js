import Validator from '../app';

test('test name', () => {
  const name = new Validator();
	console.log(name)
	const result = name.validateUsername('Yokop123-_oomy');

  expect(result).toEqual('Имя подходит');
});