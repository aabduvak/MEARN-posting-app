import React from 'react';
import { useParams } from 'react-router-dom';

import { DUMMY_PLACES } from './UserPlaces';
import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
	VALIDATOR_REQUIRE,
	VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

const UpdatePlaces = () => {
	const placeId = useParams().placeId;

	const identifier = DUMMY_PLACES.find((place) => place.id === placeId);

	const [formState, inputHandler] = useForm({
		title: {
			value: identifier.title,
			isValid: true,
		},
		description: {
			value: identifier.description,
			isValid: true,
		},
	});

	if (!identifier) {
		return (
			<div className='center'>
				<Card>
					<h2>No place found.</h2>
				</Card>
			</div>
		);
	}

	const placeUpdateSubmitHandler = (event) => {
		event.preventDefault();
		console.log(formState.inputs);
	};

	return (
		<form className='place-form' onSubmit={placeUpdateSubmitHandler}>
			<Input
				id='title'
				type='text'
				label='Title'
				validators={[VALIDATOR_REQUIRE()]}
				errorText='Please enter a valid title.'
				onInput={inputHandler}
				initialValue={formState.inputs.title.value}
				initialValid={formState.inputs.title.isValid}
			/>

			<Input
				id='description'
				item='textarea'
				label='Description'
				validators={[VALIDATOR_MINLENGTH(5)]}
				errorText='Please enter a valid description (at least 5 characters).'
				onInput={inputHandler}
				initialValue={formState.inputs.description.value}
				initialValid={formState.inputs.description.isValid}
			/>

			<Button type='submit' disabled={!formState.isValid}>
				UPDATE PLACE
			</Button>
		</form>
	);
};

export default UpdatePlaces;
