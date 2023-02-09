import React, { useState, useEffect } from "react";

const ReactUseEffect = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setCount(count + 1);
		}, 1000);
	}, []); // Empty array as a second argument of useEffect limits render to one time.
	return (
		<div>
			<p>
				I have been rendered {count} {count > 1 ? "times." : "time."}
			</p>
		</div>
	);
};

export default ReactUseEffect;
