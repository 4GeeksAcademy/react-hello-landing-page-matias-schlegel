import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Cards } from "./Cards";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<div>
				<Cards />
			</div>
		</React.Fragment>
	);
};

export default Home;
