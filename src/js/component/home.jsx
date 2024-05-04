import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import { Cards } from "./Cards";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Jumbotron />
			<div>
				<Cards />
			</div>
		</React.Fragment>
	);
};

export default Home;
