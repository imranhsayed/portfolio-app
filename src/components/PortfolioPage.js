import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
	<div>
		This is portfolio page
		<Link to="/portfolio/1">Portfolio one</Link>
		<Link to="/portfolio/2">Portfolio two</Link>
	</div>
);

export default PortfolioPage;