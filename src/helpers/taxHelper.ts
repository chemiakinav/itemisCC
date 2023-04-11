import { TypeProduct } from '../models/TypeProduct';

const PRECISION = 2;

function round(number: number): number {
	return Number((Math.ceil(number * 20) / 20).toFixed(PRECISION));
}

export function sum(num1: number, num2: number) {
	return Number((num1 + num2).toFixed(PRECISION));
}

export function calculateTaxPrice(productPrice: number, taxRate: number): number {
	return round((productPrice * taxRate) / 100);
}

export function calculateTotals(items: Array<TypeProduct>): {
	totalPrice: number;
	totalTaxes: number;
} {
	return items.reduce(
		(acc, product) => {
			const { price, taxRate, extraTaxRate = 0, count } = product;
			const productAllTaxes = calculateTaxPrice(price, taxRate + extraTaxRate);

			return {
				totalPrice: sum(acc.totalPrice, count * sum(price, productAllTaxes)),
				totalTaxes: sum(acc.totalTaxes, count * productAllTaxes),
			};
		},
		{ totalPrice: 0, totalTaxes: 0 },
	);
}
