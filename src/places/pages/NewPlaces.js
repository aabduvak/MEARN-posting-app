import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';
import './NewPlaces.css';

const NewPlaces = () => {
	return (
		<form className={`place-form`}>
			<Input
				type='text'
				label='Title'
				validators={[]}
				errorText='Please enter a valid input'
				validators={[VALIDATOR_REQUIRE()]}
			/>
		</form>
	);
};

export default NewPlaces;
