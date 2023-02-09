import React from "react";

// Conditonal rendering using the logical "&&" operator:
const ConditionalRendering = () => {
	const weapons = ["Glaive", "Katana", "Pistol", "Battle Axe"];
	return (
		<div>
			<p>You have {weapons.length > 0 && weapons.length} weapons</p>
		</div>
	);
};

export default ConditionalRendering;
