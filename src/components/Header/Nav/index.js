import React from "react";
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
	return (
		<div>
			<button onClick={() => props.updateState(0)}>About</button>
			<button onClick={() => props.updateState(1)}>Portfolio</button>
			<button onClick={() => props.updateState(2)}>Resume</button>
			<button onClick={() => props.updateState(2)}>Contact</button>
		</div>
	);
}

export default Nav;
