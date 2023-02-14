import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

// Create and export context variable:
export const UserContext = React.createContext();

const ParentComponent = () => {
	const [user] = useState("Billy Watts");

	return (
		// Provide state value "user" for use within nested components:
		<UserContext.Provider value={user}>
			<div>
				<p>Parent Component:</p>
				<br />
				<ChildComponent />
			</div>
		</UserContext.Provider>
	);
};

export default ParentComponent;
