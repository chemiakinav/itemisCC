import {
	productSet1,
	productSet2,
	productSet3,
	productSet4,
} from '../__mocks__/products';
import { calculateTaxPrice, calculateTotals } from '../helpers/taxHelper';

test.each([
	{ productPrice: 12.49, taxRate: 0, expected: 0 },
	{ productPrice: 14.99, taxRate: 10, expected: 1.5 },
	{ productPrice: 10.0, taxRate: 5, expected: 0.5 },
	{ productPrice: 18.99, taxRate: 10, expected: 1.9 },
])('calculate correct tax value', ({ productPrice, taxRate, expected }) => {
	expect(calculateTaxPrice(productPrice, taxRate)).toBe(expected);
});

test.each([
	{ items: productSet1, expected: { totalPrice: 29.83, totalTaxes: 1.5 } },
	{ items: productSet2, expected: { totalPrice: 65.15, totalTaxes: 7.65 } },
	{ items: productSet3, expected: { totalPrice: 74.68, totalTaxes: 6.7 } },
	{ items: productSet4, expected: { totalPrice: 139.3, totalTaxes: 14.3 } },
])('calculate correct tax value', ({ items, expected }) => {
	expect(calculateTotals(items)).toStrictEqual(expected);
});
