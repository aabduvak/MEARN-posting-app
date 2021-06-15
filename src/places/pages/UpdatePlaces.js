import React, { useEffect, useState } from 'react';
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
import './PlaceForm.css';

const UpdatePlaces = () => {
	const [isLoading, setIsLoading] = useState(true);
	const placeId = useParams().placeId;

	const [formState, inputHandler, setFormData] = useForm(
		{
			title: {
				value: '',
				isValid: false,
			},
			description: {
				value: '',
				isValid: false,
			},
		},
		false
	);

	const identifiedPlace = DUMMY_PLACES.find((place) => place.id === placeId);

	useEffect(() => {
		if (identifiedPlace) {
			setFormData(
				{
					title: {
						value: identifiedPlace.title,
						isValid: true,
					},
					description: {
						value: identifiedPlace.description,
						isValid: true,
					},
				},
				true
			);
		}
		setIsLoading(false);
	}, [setFormData, identifiedPlace]);

	const placeUpdateSubmitHandler = (event) => {
		event.preventDefault();
		console.log(formState.inputs);
	};

	if (!identifiedPlace) {
		return (
			<div className='center'>
				<Card>
					<h2>Could not find the place. May be create one?</h2>
					<Button to='/places/new'>Share Place</Button>
				</Card>
			</div>
		);
	}

	if (isLoading) {
		return (
			<div className='center'>
				<Card>
					<h2>Loading...</h2>
				</Card>
			</div>
		);
	}

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
