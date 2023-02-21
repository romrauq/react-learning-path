import React, { useState, useEffect } from "react";

const ReactUseEffect = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setCount(count + 1);
		}, 1000);
	}, []); // An empty array as a second argument of useEffect() sets it to run once.
	return (
		<div>
			<p>
				I have been rendered {count} {count > 1 ? "times." : "time."}
			</p>
		</div>
	);
};

export default ReactUseEffect;
