import React from 'react';
import './UsersList.css';

import UserListItem from './UserListItem';

const UsersList = ({ items }) => {
	if (items.length === 0) {
		return (
			<div className='center'>
				<h2>No users found</h2>
			</div>
		);
	}

	return (
		<ul className='users-list'>
			{items.map((user) => (
				<UserListItem
					key={user.id}
					id={user.id}
					image={user.image}
					placeCount={user.places}
					name={user.name}
				/>
			))}
		</ul>
	);
};

export default UsersList;
