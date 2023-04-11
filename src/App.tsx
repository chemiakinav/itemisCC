import Receipt from 'components/receipt/Receipt';
import { en } from 'locale';
import React, { FunctionComponent } from 'react';

import { productSet1 } from './__mocks__/products';
import styles from './style.scss';

const App: FunctionComponent = () => {
	return (
		<div className={styles.content}>
			<div className={styles.title}>{en.title}</div>
			<Receipt products={productSet1} />
		</div>
	);
};

export default App;
