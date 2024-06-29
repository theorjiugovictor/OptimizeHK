import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
	return (
		<div className="w-full py-[10rem] px-4 bg-white">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
				<div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
					<img
						className="w-20 mx-auto mt-[-3rem] bg-white"
						src={Single}
						alt="/"
					/>
					<h2 className="text-2xl font-bold text-center py-8">For Customer</h2>
					<p className="text-center text-4xl font-bold">B2C</p>
					<div className="text-center font-medium">
						<p className="py-2 border-b mx-8 mt-8">Transact with Confidence</p>
						<p className="py-2 border-b mx-8">Effortless Discovery</p>
						<p className="py-2 border-b mx-8">Informed Decisions</p>
					</div>
					<button className="bg-[#f0ac44] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
						Discover
					</button>
				</div>
				<div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
					<img
						className="w-20 mx-auto mt-[-3rem] bg-transparent"
						src={Double}
						alt="/"
					/>
					<h2 className="text-2xl font-bold text-center py-8">
						For Businesses
					</h2>
					<p className="text-center text-4xl font-bold">B2B</p>
					<div className="text-center font-medium">
						<p className="py-2 border-b mx-8 mt-8">Trust Powerhouse</p>
						<p className="py-2 border-b mx-8">Digital Powerhouse</p>
						<p className="py-2 border-b mx-8">Data Driven Growth</p>
					</div>
					<button className="bg-[#f0ac44] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
						Thrive
					</button>
				</div>
				<div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
					<img
						className="w-20 mx-auto mt-[-3rem] bg-white"
						src={Triple}
						alt="/"
					/>
					<h2 className="text-2xl font-bold text-center py-8">For Economies</h2>
					<p className="text-center text-4xl font-bold">B2G</p>
					<div className="text-center font-medium">
						<p className="py-2 border-b mx-8 mt-8">Empowering SMEs</p>
						<p className="py-2 border-b mx-8">Financial Inclusion</p>
						<p className="py-2 border-b mx-8">Data Collection</p>
					</div>
					<button className="bg-[#f0ac44] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
						Partner
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cards;
