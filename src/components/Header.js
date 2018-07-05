import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
	<header>
		{/*the class "is-active" will only be applied to the link of the page we are currently on.
		 Also setting exact prop value to true will ensure 'is-active' class will only be applied if we are on that url path page.*/}
		<NavLink to="/" activeClassName="is-active" exact={ true } >Home</NavLink>
		<NavLink to="/portfolio" activeClassName="is-active" >Portfolio</NavLink>
		<NavLink to="/contact" activeClassName="is-active" >Contact</NavLink>
		<h1>Portfolio heading</h1>
	</header>
);

export default Header;