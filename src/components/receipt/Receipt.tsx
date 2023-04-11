import { calculateTaxPrice, calculateTotals, sum } from 'helpers';
import { en } from 'locale';
import { TypeProduct } from 'models';
import React, { Fragment, FunctionComponent } from 'react';

import styles from './Receipt.scss';

const PRECISION = 2;

type TypeProps = {
	products: Array<TypeProduct>;
};
const Receipt: FunctionComponent<TypeProps> = ({ products }) => {
	const { totalPrice, totalTaxes } = calculateTotals(products);

	return (
		<div className={styles.receiptWrapper}>
			{products.map(({ id, name, price, taxRate, extraTaxRate = 0 }) => (
				<Fragment key={id}>
					<div>{name}:</div>
					<div>
						{sum(
							price,
							calculateTaxPrice(price, sum(taxRate, extraTaxRate)),
						).toFixed(PRECISION)}
					</div>
				</Fragment>
			))}
			<div className={styles.bold}>{en.totalTaxes}:</div>
			<div className={styles.bold}>{totalTaxes.toFixed(PRECISION)}</div>
			<div className={styles.bold}>{en.total}:</div>
			<div className={styles.bold}>{totalPrice.toFixed(PRECISION)}</div>
		</div>
	);
};

export default Receipt;
