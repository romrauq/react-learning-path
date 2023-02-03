import React from "react";

// A stateless function componentwhich takes the prop "user":
const WelcomeUser = (props) => {
	return <p>Welcome {props.user}</p>;
};

export default WelcomeUser;
