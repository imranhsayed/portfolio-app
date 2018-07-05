import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
	<header>
		{/*the class "is-active" will only be applied to the link of the page we are currently on.
		 Also setting exact prop value to true will ensure 'is-active' class will only be applied if we are on that url path page.*/}
		<NavLink to="/" activeClassName="is-active" exact={ true }>Dashboard</NavLink>
		<NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
		<NavLink to="/help" activeClassName="is-active" >Help</NavLink>
		<h1>Expensify heading</h1>
	</header>
);

export default Header;