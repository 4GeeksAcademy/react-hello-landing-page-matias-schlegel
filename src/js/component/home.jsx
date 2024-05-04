import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";

//create your first component
const Home = () => {
	return (
	  <React.Fragment>
		<Navbar />
		<Jumbotron />
	  </React.Fragment>
	  
	);
};

export default Home;
