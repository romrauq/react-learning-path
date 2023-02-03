import React from "react";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import WelcomeUser from "./components/WelcomeUser";
import ClassComponent from "./components/ClassComponent";
import ClassReactComponent from "./components/ClassReactComponent";

const App = () => {
	return (
		<div>
			<HelloWorld />
			<WelcomeUser user={"John Doe"} />
			<ClassComponent />
			<ClassReactComponent />
		</div>
	);
};

export default App;
