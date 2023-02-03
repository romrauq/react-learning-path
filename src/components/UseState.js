import React, { useState } from "react";

const UseState = () => {
	const [username, setUsername] = useState("John Doeux");
	return <p>My name is {username}</p>;
};

export default UseState;
