import React from "react";
import "./App.css";
import WelcomeUser from "./components/WelcomeUser";
import ClassComponent from "./components/ClassComponent";
import ClassReactComponent from "./components/ClassReactComponent";
import ClassState from "./components/ClassState";
import ChangeClassState from "./components/ChangeClassState";
import FunctionComponent from "./components/FunctionComponent";
import FunctionState from "./components/FunctionState";
import FunctionStateChange from "./components/FunctionStateChange";
import FunctionStateChangeTwo from "./components/FunctionStateChangeTwo";

const App = () => {
	return (
		<div>
			<WelcomeUser />
			<ClassComponent />
			<ClassReactComponent />
			<ClassState />
			<ChangeClassState />
			<FunctionComponent />
			<FunctionState />
			<FunctionStateChange />
			<FunctionStateChangeTwo />
		</div>
	);
};

export default App;
