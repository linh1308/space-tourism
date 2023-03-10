import React from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import "./style.scss";

const Home = () => {
	return (
		<div className="home-wrapper">
			<Header />
			<div className="hero">
				<div className="introduce">
					<div className="title">SO, YOU WANT TO TRAVEL TO</div>
					<div className="heading">SPACE</div>
					<p>
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</div>
				<Button text="EXPLORE" size={200} fontSize={25} />
			</div>
		</div>
	);
};

export default Home;
