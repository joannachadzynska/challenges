import React from "react";

export interface NotFoundProps {}

const NotFound: React.SFC<NotFoundProps> = () => {
	return (
		<div>
			<h1>Page not found</h1>
		</div>
	);
};

export default NotFound;
