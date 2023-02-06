import React, { useState } from "react";

const ReactForm = () => {
	const [name, setName] = useState("");
	return (
		<div>
			<form action="">
				<label>
					Enter Name
					<input type="text" onChange={(e) => setName(e.target.value)} />
				</label>
				<button type="submit" onClick={() => alert(name)}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default ReactForm;
