import React from "react";
import Nav from "./Nav/index";

function Header(props) {
	return (
		<div>
			<Nav updateState={props.updateState} />
		</div>
	);
}

export default Header;
