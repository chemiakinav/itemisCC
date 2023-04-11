import React, { FunctionComponent } from 'react';

type TypeProps = {
	checked: boolean;
	onChange: () => void;
	name: string;
	id: string;
};

const Checkbox: FunctionComponent<TypeProps> = ({ checked, onChange, name, id }) => {
	return (
		<div>
			<label htmlFor={id}>{name}</label>
			<input id={id} type="checkbox" onChange={onChange} checked={checked}></input>
		</div>
	);
};

export default Checkbox;
