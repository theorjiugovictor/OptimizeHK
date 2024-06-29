import React from 'react';
import Laptop from '../assets/laptop.png';

const Analytics = () => {
	return (
		<div className="w-full bg-white py-16 px-4">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
				<img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
				<div className="flex flex-col justify-center">
					<p className="text-[#f0ac44] font-bold ">HELPING AFRICA THRIVE</p>
					<h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
						Empower Your Business, Connect with Customers
					</h1>
					<p>
						Optimize is revolutionising the way businesses interact with
						customers. It empowers African businesses to streamline operations,
						enhance customer experiences, and drive growth with a comprehensive
						suite of AI-powered tools and services.
					</p>
					<button className="bg-[#f0ac44] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default Analytics;
