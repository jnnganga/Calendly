import Image from "next/image";

import ProductDialog from "./ProductDialog";

const Nav = () => {
	return (
		<>
			<div className='mt-10 flex justify-between items-center'>
				{/* Nav logo */}
				<Image src={"calendly.svg"} height={30} width={150} alt='Icon' />

				{/* Nav menus */}
				<div>
					<ul className='flex justify-between'>
						<a href='#individuals' className='flex items-center'>
							<li className=' cursor-pointer hover:bg-slate-600 hover:text-white hover:rounded-md px-3 py-1 transition-all duration-900'>
								Individuals
							</li>
						</a>

						<a href='#teams' className='flex items-center'>
							<li className=' cursor-pointer hover:bg-slate-600 hover:text-white hover:rounded-md px-3 py-1 transition-all duration-900'>
								Teams
							</li>
						</a>

						<a href='#Enterprise' className='flex items-center'>
							<li className=' cursor-pointer hover:bg-slate-600 hover:text-white hover:rounded-md px-3 py-1 transition-all duration-900'>
								Enterprise
							</li>
						</a>

						<a href='#product' className=' flex items-center'>
							<li className='group cursor-pointer pl-3 py-1 transition-all duration-900'>
								<ProductDialog />
							</li>
							<Image
								src={"angledown.svg"}
								height={10}
								width={10}
								alt='arrow down'
								className='mr-3 pl-0.5 translate-y-0.3'
							/>
						</a>

						<a href='#pricing' className='flex items-center'>
							<li className=' cursor-pointer hover:bg-slate-600 hover:text-white hover:rounded-md px-3 py-1 transition-all duration-900'>
								Pricing
							</li>
						</a>

						<a href='#resources' className='flex items-center'>
							<li className=' cursor-pointer hover:bg-slate-600 hover:text-white hover:rounded-md px-3 py-1 transition-all duration-900'>
								Resources
							</li>
						</a>
					</ul>
				</div>

				{/* Nav Buttons */}
				<div className='flex gap-5'>
					<button className='hover:text-blue-500'>Log In</button>
					<button className='px-4 py-1 bg-blue-500 rounded-md text-white hover:bg-blue-600 transition-all duration-300'>
						Get started
					</button>
				</div>
			</div>
		</>
	);
};

export default Nav;
