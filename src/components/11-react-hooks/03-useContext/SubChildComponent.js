import React, { useContext } from "react";

// Import context variable from parent (origin) component:
import { UserContext } from "./ParentComponent";

const SubChildComponent = () => {
	const user = useContext(UserContext);

	return (
		<div>
			<p>Sub-child Component:</p>
			<p>The user is {user}.</p>
		</div>
	);
};

export default SubChildComponent;
