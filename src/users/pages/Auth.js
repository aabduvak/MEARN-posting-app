import React, { useState, useContext } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { useForm } from '../../shared/hooks/form-hook';
import {
	VALIDATOR_MINLENGTH,
	VALIDATOR_EMAIL,
	VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import Card from '../../shared/components/UIElements/Card';
import { AuthContext } from '../../shared/context/auth-context';
import './Auth.css';

const Authentication = () => {
	const auth = useContext(AuthContext);
	const [isLoginMode, setIsLoginMode] = useState(true);

	const [formState, inputhandler, setFormData] = useForm(
		{
			email: {
				value: '',
				isValid: false,
			},
			password: {
				value: '',
				isValid: false,
			},
		},
		false
	);

	const authSubmitHandler = (event) => {
		event.preventDefault();
		auth.login();
	};

	const switchModeHandler = () => {
		if (!isLoginMode) {
			setFormData(
				{
					...formState.inputs,
					name: undefined,
				},
				formState.inputs.email.isValid && formState.inputs.password.isValid
			);
		} else {
			setFormData(
				{
					...formState.inputs,
					name: {
						value: '',
						isValid: false,
					},
				},
				false
			);
		}
		setIsLoginMode((prevMode) => !prevMode);
	};

	return (
		<Card className='authentication'>
			<h2>{isLoginMode ? 'Login' : 'Signup'} Required</h2>
			<hr />
			<form onSubmit={authSubmitHandler}>
				{!isLoginMode && (
					<Input
						id='name'
						type='text'
						label='Your Name'
						validators={[VALIDATOR_REQUIRE()]}
						errorText='Please enter a name.'
						onInput={inputhandler}
					/>
				)}
				<Input
					type='email'
					id='email'
					label='E-Mail'
					validators={[VALIDATOR_EMAIL()]}
					errorText='Please enter a valid email address.'
					onInput={inputhandler}
				/>
				<Input
					type='password'
					id='password'
					label='Password'
					validators={[VALIDATOR_MINLENGTH(5)]}
					errorText='Please enter a valid password, at least 5 characters.'
					onInput={inputhandler}
				/>
				<Button type='submit' disabled={!formState.isValid}>
					{isLoginMode ? 'LOGIN' : 'SIGNUP'}
				</Button>
			</form>

			<Button inverse onClick={switchModeHandler}>
				SWITCH TO {isLoginMode ? 'LOGIN' : 'SIGNUP'}
			</Button>
		</Card>
	);
};

export default Authentication;
