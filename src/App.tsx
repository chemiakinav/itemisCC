import { en } from 'locale';
import React, { FunctionComponent } from 'react';

import styles from './style.scss';

const App: FunctionComponent = () => {
	return <div className={styles.title}>{en.title}</div>;
};

export default App;
