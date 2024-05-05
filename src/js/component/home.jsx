import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import { Cards } from "./Cards";
import { Finaltext } from "./Finaltext";

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
