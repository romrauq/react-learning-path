import React, { useState } from "react";

const FunctionState = () => {
	const [username] = useState("John Doeux");
	return <p>My name is {username}</p>;
};

export default FunctionState;
