function round(number: number): number {
	return Number((Math.ceil(number * 20) / 20).toFixed(2));
}

export function calculateTaxPrice(productPrice: number, taxRate: number): number {
	return round((productPrice * taxRate) / 100);
}
