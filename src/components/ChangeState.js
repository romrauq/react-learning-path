import React from "react";

class ChangeState extends React.Component {
	state = { count: 0 };

	// When using state in React, it is important to use the setState() method to update the state.
	// The value of the state should be updated based on the previous state, which can be done using a callback function passed to setState.

	increment = () => {
		this.setState((prevState) => ({
			count: prevState.count++,
		}));
	};

	decrement = () => {
		this.setState((prevState) => ({
			count: prevState.count--,
		}));
	};

	render() {
		return (
			<div>
				<p>The current count is {this.state.count}</p>
				<button onClick={this.increment}>Count Up</button>
				<button onClick={this.decrement}>Count Down</button>
			</div>
		);
	}
}

export default ChangeState;
