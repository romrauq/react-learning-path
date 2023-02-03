import React from "react";

class UsingState extends React.Component {
	state = { count: 0 };
	render() {
		return <p>Current Count is {this.state.count}</p>;
	}
}

export default UsingState;
