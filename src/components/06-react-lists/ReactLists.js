import React from "react";

const ReactLists = () => {
	let characters = ["Goku", "Luffy", "Naruto", "Ichigo", "Deku"];
	return (
		<div>
			<p>Below is a list of Anime lead characters:</p>
			<ul>
				{characters.map((character) => (
					<li>{character}</li>
				))}
			</ul>
		</div>
	);
};

export default ReactLists;
