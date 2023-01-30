
import React from "react";
import SimpleCounter from "./SimpleCounter.jsx";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<SimpleCounter/>
		</div>
	);
};

export default Home;