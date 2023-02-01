import React from "react";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import WelcomeUser from "./components/WelcomeUser";

const App = () => {
	return (
		<div>
			<HelloWorld />
			<WelcomeUser user={"John Doe"} />
		</div>
	);
};

export default App;
