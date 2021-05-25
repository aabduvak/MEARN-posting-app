import React from 'react';

import UserListItem from './UserListItem';
import './UsersList.css';
import Card from '../../shared/components/UIElements/Card';

const UsersList = ({ items }) => {
	if (items.length === 0) {
		return (
			<div className='center'>
				<Card>
					<h2>No users found</h2>
				</Card>
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
