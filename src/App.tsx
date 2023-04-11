import Checkbox from 'components/checkbox/Checkbox';
import Receipt from 'components/receipt/Receipt';
import { en } from 'locale';
import React, { FunctionComponent, useState } from 'react';

import { shoppingBaskets, TypeBasketId } from './__mocks__/products';
import styles from './style.scss';

const App: FunctionComponent = () => {
	const [currentBasket, setBasket] = useState<TypeBasketId>('basket_1');

	return (
		<div className={styles.content}>
			<div className={styles.title}>{en.title}</div>
			<div>
				{Object.values(shoppingBaskets).map(({ id, name }) => (
					<Checkbox
						id={id}
						key={id}
						onChange={() => setBasket(id)}
						name={name}
						checked={currentBasket === id}
					/>
				))}
			</div>
			<Receipt products={shoppingBaskets[currentBasket].products} />
		</div>
	);
};

export default App;
