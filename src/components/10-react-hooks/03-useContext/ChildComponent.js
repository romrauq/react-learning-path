import React from "react";
import SubChildComponent from "./SubChildComponent";

const ChildComponent = () => {
	return (
		<div>
			<p>Child Component:</p>
			<br />
			<SubChildComponent />
		</div>
	);
};

export default ChildComponent;
