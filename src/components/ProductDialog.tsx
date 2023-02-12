import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import ProductItem from "./ProductItem";

const productData = [
	{
		id: 1,
		icon: "/form.svg",
		title: "Routing forms",
		message:
			"Reguest information to effectively screen and qualify people before they can schedule with you",
	},
	{
		id: 2,
		icon: "/embed.svg",
		title: "Embeds",
		message: "Add Calendly on your website to streamline scheduling",
	},
	{
		id: 3,
		icon: "/team.svg",
		title: "Team Schaeduling",
		message: "Customize when and how you are booked",
	},
	{
		id: 4,
		icon: "/calendar.svg",
		title: "Calendar Connections",
		message:
			"Connect upt to six calendars per user to check real-time availability",
	},
	{
		id: 5,
		icon: "/analytic.svg",
		title: "Analytics",
		message:
			"Discover activity trends and use scheduling insights to hit your goals.",
	},
	{
		id: 6,
		icon: "/poll.svg",
		title: "Meeting Polls",
		message: "Let your invitee vote on preferred times before scheduling.",
	},
];

interface props {
	close: Dispatch<SetStateAction<boolean>>;
}

const ProductDialog = ({ close }: props) => {
	return (
		<div className=' cursor-auto'>
			<h1 className=' cursor-pointer hover:bg-slate-600 hover:text-white hover:rounded-md px-3 py-1 transition-all duration-900'>
				Products
			</h1>
			<div
				onMouseLeave={() => close(false)}
				className='hidden z-50  absolute top-14 left-96 right-96 group-hover:grid  hover:block grid-cols-4 mt-5 mx-16 w-128  rounded-lg shadow-lg drop-shadow-lg bg-white'
			>
				<div className=' col-span-1 p-5 bg-[#E7EDF6] rounded-l-lg'>
					<h1 className='mb-5 text-3xl font-bold'>Product</h1>
					<p className=' text-slate-600 text-lg'>
						Get to know the leader in automated scheduling and see why millions
						connect using Calendly.
					</p>
				</div>
				<div className='col-span-3'>
					<div className='  grid grid-cols-3 m-5'>
						<div className=' col-span-1'>
							<h1 className=' font-bold text-xl mb-2'>Features</h1>
							<p className=' text-slate-500 text-sm'>
								flexible, intuitive features for every scheduling need.
							</p>
						</div>
						<div></div>
						<div className=' col-span-1'>
							<h1 className=' font-bold text-xl mb-2'>Solution</h1>
							<p className=' text-slate-500 text-sm '>
								Explore how through leaders in your industry use Calendly
							</p>
						</div>
					</div>
					<div className='grid grid-cols-3 m-5 '>
						<hr className=' col-span-2  h-0.5 mr-5 bg-gray-100 border-0 rounded' />
						<hr className=' col-span-1   h-0.5  bg-gray-100 border-0 rounded' />
					</div>

					<div className='grid grid-cols-3 m-5 '>
						<div className=' col-span-2'>
							<div className='grid grid-cols-2 '>
								{productData.map((data) => {
									return (
										<ProductItem
											key={data.id}
											icon={data.icon}
											title={data.title}
											message={data.message}
										/>
									);
								})}
							</div>
						</div>
						<div>
							<h1 className='text-slate-900 font-bold mb-5 hover:text-blue-500 hover:cursor-pointer'>
								Sales
							</h1>
							<h1 className='text-slate-900 font-bold mb-5 hover:text-blue-500 hover:cursor-pointer'>
								Recruiting
							</h1>
							<h1 className='text-slate-900 font-bold mb-5 hover:text-blue-500 hover:cursor-pointer'>
								Revenue Operations
							</h1>
							<h1 className='text-slate-900 font-bold mb-5 hover:text-blue-500 hover:cursor-pointer'>
								Customer Success
							</h1>
							<h1 className='text-slate-900 font-bold mb-5 hover:text-blue-500 hover:cursor-pointer'>
								Information Technology
							</h1>
							<h1 className='text-slate-900 font-bold mb-10 hover:text-blue-500 hover:cursor-pointer'>
								Marketing
							</h1>
							<h1 className='text-slate-900 font-bold hover:text-blue-500 hover:cursor-pointer'>
								Integrations
							</h1>
							<span className=' text-xs text-slate-500'>
								Seamless connections to your favorite calendars tools and apps.
							</span>
						</div>
					</div>
					<div className='flex items-center ml-5 mb-5 '>
						<h1 className=' text-blue-500  font-bold '>See all features</h1>
						<Image
							src={"angleright.svg"}
							height={8}
							width={8}
							alt='arrow down'
							className=' ml-2 translate-y-0.5'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDialog;
