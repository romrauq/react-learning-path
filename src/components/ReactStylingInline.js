import React from "react";

const ReactStylingInline = () => {
	return (
		<div style={{ margin: "25px", backgroundColor: "pink", borderRadius: "10px" }}>
			<h1
				style={{
					color: "blue",
					padding: "20px",
					textAlign: "center",
					backgroundColor: "red",
				}}
			>
				This is the Title
			</h1>
			<p style={{ color: "blue", padding: "20px", margin: "30px 20px", backgroundColor: "red" }}>
				This is the paragraph text. <br />
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus iste nisi
				nesciunt eius similique libero rerum, possimus fuga esse, consequatur error, labore
				natus eveniet amet doloribus soluta temporibus quos numquam?
			</p>
		</div>
	);
};

export default ReactStylingInline;
