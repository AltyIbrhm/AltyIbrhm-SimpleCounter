import React from "react";
import SimpleCounter from "./simpleCounter";
import calculateSeconds from "../../lib/time";

const Home = (props) => {
	return (
		<>
			<SimpleCounter

				thousandDigit={calculateSeconds(props.counter, 1000)}
				hundredsDigit={calculateSeconds(props.counter, 100)}
				tensDigit={calculateSeconds(props.counter, 10)}
				onesDigit={calculateSeconds(props.counter, 1)}



			/>
		</>
	);
};



export default Home;
