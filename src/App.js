import React from "react";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import ClassReactComponent from "./components/ClassReactComponent";
import ClassComponentProps from "./components/ClassComponentProps";
import ClassState from "./components/ClassState";
import ChangeClassState from "./components/ChangeClassState";
import FunctionComponent from "./components/FunctionComponent";
import FunctionComponentProps from "./components/FunctionComponentProps";
import FunctionState from "./components/FunctionState";
import FunctionStateChange from "./components/FunctionStateChange";
import FunctionStateChangeTwo from "./components/FunctionStateChangeTwo";

const App = () => {
	return (
		<div>
			<ClassComponent />
			<ClassReactComponent />
			<ClassComponentProps user="Nanabi-san" />
			<ClassState />
			<ChangeClassState />
			<FunctionComponent />
			<FunctionComponentProps user={"Shikamaru"} />
			<FunctionState />
			<FunctionStateChange />
			<FunctionStateChangeTwo />
		</div>
	);
};

export default App;
