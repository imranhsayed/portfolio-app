import React from 'react';

const EditPortfolioPage = ( props ) => {
	return (
		<div>
			This is portfolio page for id {props.match.params.id}
		</div>
	);
};

export default EditPortfolioPage;