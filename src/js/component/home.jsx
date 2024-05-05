import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Cards } from "./Cards";
import { Finaltext } from "./Finaltext";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<div className="container">
				<div className="cards1 vh-100">
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
				<div className="text1">
					<Finaltext />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Home;
