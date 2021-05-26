import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';
import './App.css';

import Users from './users/pages/Users';
import NewPlaces from './places/pages/NewPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';

const App = () => {
	return (
		<Router>
			<MainNavigation />

			<main>
				<Switch>
					<Route path='/' exact>
						<Users />
					</Route>

					<Route path='/:userId/places' exact>
						<UserPlaces />
					</Route>

					<Route path='/places/new' exact>
						<NewPlaces />
					</Route>

					<Redirect to='/' />
				</Switch>
			</main>
		</Router>
	);
};

export default App;
