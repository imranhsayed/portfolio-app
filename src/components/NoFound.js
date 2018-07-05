import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => (
	<div>
		{/* Here Link tag will will provide the link to the path defined her in 'to' */}
		404 <Link to="/">Go home</Link>
	</div>
);

export default NotFound;