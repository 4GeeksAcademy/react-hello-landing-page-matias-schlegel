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
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="cards1 mx-5">
					<Cards img={"https://s3.amazonaws.com/cdn.wp.m4ecnet/wp-content/uploads/2018/01/16095118/Depositphotos_3667865_m-2015-compressor.jpg"}
						title={"Card title"}
						text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."}
						button={"Find Out More!"} />

					<Cards img={"https://s3.amazonaws.com/cdn.wp.m4ecnet/wp-content/uploads/2018/01/16095118/Depositphotos_3667865_m-2015-compressor.jpg"}
						title={"Card title"}
						text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."}
						button={"Find Out More!"} />

					<Cards img={"https://s3.amazonaws.com/cdn.wp.m4ecnet/wp-content/uploads/2018/01/16095118/Depositphotos_3667865_m-2015-compressor.jpg"}
						title={"Card title"}
						text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."}
						button={"Find Out More!"} />

					<Cards img={"https://s3.amazonaws.com/cdn.wp.m4ecnet/wp-content/uploads/2018/01/16095118/Depositphotos_3667865_m-2015-compressor.jpg"}
						title={"Card title"}
						text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."}
						button={"Find Out More!"} />
				</div>
			</div>
			<div className="text1">
				<Finaltext />
			</div>
		</React.Fragment>
	);
};

export default Home;
