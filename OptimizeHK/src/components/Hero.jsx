import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
	return (
		<div className="text-white">
			<div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
				<p className="text-[#f0ac44] font-bold p-2">FUTURE OF BUSINESS</p>
				<h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
					Grow With Trust.
				</h1>
				<div className="flex justify-center items-center w-full">
					<p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 whitespace-nowrap">
						All-in-One AI Powered Platform for{' '}
					</p>
					<Typed
						className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
						strings={['B2C', 'B2B', 'AFRICA']}
						typeSpeed={120}
						backSpeed={140}
						loop
					/>
				</div>
				<p className="md:text-2xl text-xl font-bold text-gray-500">
					Gain credibility, attract customers, and grow your business with
					Optimize, Nigeria's only AI-powered platform for verified businesses.
				</p>
				<button className="bg-[#f0ac44] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
					Get Started
				</button>
			</div>
		</div>
	);
};

export default Hero;
