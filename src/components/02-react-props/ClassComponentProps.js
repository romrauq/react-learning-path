import React from "react";

class ClassComponentProps extends React.Component {
	state = {};
	render() {
		return <p>Welcome, {this.props.user}</p>;
	}
}

export default ClassComponentProps;
