import React from 'react';

import UsersList from '../components/UsersList';

const USERS = [
	{
		id: 'u1',
		name: 'Zehra Yılmaz',
		places: 3,
		image:
			'https://www.fotor.com/blog/wp-content/uploads/2019/10/12.blur-photo.png',
	},
	{
		id: 'u2',
		name: 'Göksu Kılıç',
		places: 2,
		image: 'https://randomuser.me/api/portraits/women/75.jpg',
	},
	{
		id: 'u3',
		name: 'Tan Bolayı',
		places: 5,
		image: 'https://randomuser.me/api/portraits/men/31.jpg',
	},
	{
		id: 'u4',
		name: 'HASAN SERKAN',
		places: 2,
		image: 'https://randomuser.me/api/portraits/men/32.jpg',
	},
];

const Users = () => {
	return <UsersList items={USERS} />;
};

export default Users;
