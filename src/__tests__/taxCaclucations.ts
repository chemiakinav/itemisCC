import { calculateTaxPrice } from '../helpers/taxHelper';

test.each([
	{ productPrice: 12.49, taxRate: 0, expected: 0 },
	{ productPrice: 14.99, taxRate: 10, expected: 1.5 },
	{ productPrice: 10.0, taxRate: 5, expected: 0.5 },
	{ productPrice: 18.99, taxRate: 10, expected: 1.9 },
])('calculate correct tax value', ({ productPrice, taxRate, expected }) => {
	expect(calculateTaxPrice(productPrice, taxRate)).toBe(expected);
});
