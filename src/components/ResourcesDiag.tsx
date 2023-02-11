import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import ProductItem from "./ProductItem";

interface props {
	close: Dispatch<SetStateAction<boolean>>;
}

const resourceItems = [
	{
		id: 1,
		title: "About",
		icon: "/about.png",
		message: "Learn about who we are",
	},
	{
		id: 2,
		title: "Customer Stories",
		icon: "/customer.png",
		message: "Hear from our valuesd customers",
	},
	{
		id: 3,
		title: "Resource Center",
		icon: "/resource.png",
		message: "Explore all our resources",
	},
	{
		id: 4,
		title: "Help Center",
		icon: "/help.png",
		message: "Explore how to use Calendly",
	},
	{
		id: 5,
		title: "Blog",
		icon: "/blog.png",
		message: "Thoughts, news, and best practices",
	},
];

const ResourcesDiag = ({ close }: props) => {
	return (
		<div className=' cursor-auto'>
			<h1 className=' cursor-pointer hover:bg-slate-600 hover:text-white hover:rounded-md px-3 py-1 transition-all duration-900'>
				Resources
			</h1>
			<div
				onMouseLeave={() => close(false)}
				className='hidden absolute top-14 left-[28rem] right-[28rem] group-hover:grid  hover:block grid-cols-3 mt-5 mx-16 w-128  rounded-lg shadow-lg drop-shadow-lg bg-white'
			>
				<div className=' col-span-1 p-5 bg-[#E7EDF6] rounded-l-lg'>
					<h1 className='mb-5 text-3xl font-bold'>Resources</h1>
					<p className=' text-slate-600 text-lg'>
						More in-depth information about every corner of the Calendly
						scheduling ecosystem.
					</p>
				</div>
				<div className='col-span-2'>
					<div className='grid grid-cols-2 m-5 '>
						{resourceItems.map((data) => {
							return (
								<ProductItem
									key={data.id}
									icon={data.icon}
									title={data.title}
									message={data.message}
								/>
							);
						})}

						<div>
							<h1 className='text-slate-900 font-bold mb-5 hover:text-blue-500 hover:cursor-pointer'>
								Newsroom
							</h1>
							<h1 className='text-slate-900 font-bold mb-5 hover:text-blue-500 hover:cursor-pointer'>
								Partners
							</h1>
							<h1 className='text-slate-900 font-bold mb-5 hover:text-blue-500 hover:cursor-pointer'>
								Developers
							</h1>
							<h1 className='text-slate-900 font-bold mb-5 hover:text-blue-500 hover:cursor-pointer'>
								Careers
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResourcesDiag;
