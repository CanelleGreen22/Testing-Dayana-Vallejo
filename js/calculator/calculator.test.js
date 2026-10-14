const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('multiply 5 * 25  to equal 125', () => {
  expect(calculator.multiply(5, 25)).toBe(125);
});

test('multiply 200 * 6  to equal 1200', () => { 
  expect(calculator.multiply(200, 6)).toBe(1200);
});

test('divide 68 / 4 to equal 17', () => {
  expect(calculator.divide(68, 4)).toBe(17);
});


test('divide 92 / 7 to equal 13.142857142857142', () => {
  expect(calculator.divide(92, 7)).toBe(13.142857142857142);
});

test('divide 100 / 25 to equal 4', () => {
  expect(calculator.divide(100, 25)).toBe(4);
});

test('divide lanza error al dividir 10 entre 0', () => {
  expect(() => calculator.divide(10, 0)).toThrow();
});