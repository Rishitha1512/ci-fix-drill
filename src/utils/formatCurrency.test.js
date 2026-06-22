const { formatCurrency } = require('./formatCurrency');

test('formats currency correctly', () => {
// FIX: toBe compares object references, not values. Using toEqual for deep equality check.
  expect(formatCurrency(10.005, 'USD')).toEqual({ amount: 10.01, currency: 'USD' });
});
