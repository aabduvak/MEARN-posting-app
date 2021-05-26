import React, { useReducer } from 'react';

import './Input.css';
import { validate } from '../../util/validators';

const inputReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE':
			return {
				...state,
				value: action.val,
				isValid: validate(action.val, action.validators),
			};
		case 'TOUCH': {
			return {
				...state,
				isTouched: true,
			};
		}
		default:
			return state;
	}
};

const Input = (props) => {
	const { item, type, placeholder, id, rows, label, errorText, validators } =
		props;

	const [inputState, dispatch] = useReducer(inputReducer, {
		value: '',
		isValid: false,
		isTouched: false,
	});

	const changeHandler = (event) => {
		dispatch({
			type: 'CHANGE',
			val: event.target.value,
			validators: validators,
		});
	};

	const touchHandler = () => {
		dispatch({
			type: 'TOUCH',
		});
	};

	const element =
		item === 'textarea' ? (
			<textarea
				placeholder={placeholder}
				id={id}
				rows={rows || 3}
				onChange={changeHandler}
				value={inputState.value}
				onBlur={touchHandler}
			/>
		) : (
			<input
				type={type}
				placeholder={placeholder}
				id={id}
				onChange={changeHandler}
				value={inputState.value}
				onBlur={touchHandler}
			/>
		);

	return (
		<div
			className={`form-control ${
				!inputState.isValid && inputState.isTouched && 'form-control--invalid'
			}`}
		>
			<label htmlFor={id}>{label}</label>
			{element}
			{!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
		</div>
	);
};

export default Input;
