import React from "react";

const container_styles = {
	margin: "30px auto",
	width: "75%",
	backgroundColor: "pink",
};

const title_styles = {
	color: "blue",
	textAlign: "center",
	padding: "10px",
	backgroundColor: "red",
};

const paragraph_styles = {
	color: "blue",
	textAlign: "left",
	padding: "20px",
	backgroundColor: "yellow",
};

const ReactStylingObject = () => {
	return (
		<div style={container_styles}>
			<h1 style={title_styles}>This is the Title Text</h1>
			<p style={paragraph_styles}>
				This is the paragraph text. <br /> Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Optio fugit, assumenda necessitatibus voluptatibus alias quibusdam eveniet, minus
				quo sunt velit ipsum cumque dolorem! Minima repellendus sequi cumque praesentium quasi
				et.
			</p>
		</div>
	);
};

export default ReactStylingObject;
