import Image from "next/image";
import React, { useState } from "react";

const Body = () => {
	const [isActive, setIsiActive] = useState(0);

	const tabClicked = (e: React.MouseEvent<HTMLAnchorElement>, id: number) => {
		setIsiActive(id);
		console.log(id);
	};
	return (
		<div className='max-w-[1240px] m-auto min-h-screen  '>
			{/* Webinar */}
			<div className='w-full  rounded-md -translate-y-32 bg-white drop-shadow-2xl'>
				<div className='grid grid-cols-6 p-5 gap-5'>
					<Image
						src={"webminar.svg"}
						height={280}
						width={510}
						alt='google icon'
						className='col-span-2'
					/>

					<div className=' col-span-3'>
						<h2 className=' text-blue-500 text-lg pb-3 font-bold'>WEBINAR</h2>
						<h1 className=' text-2xl font-bold text-[#0F3558] pb-3'>
							How to Create an Interview Process your Candidates Will Love
						</h1>
						<p
							className='text-slate-600 text-xl
                        '
						>
							Join us February 14 at 1pm ET for a panel discussion with
							recruiting experts
						</p>
					</div>

					<div className=' flex items-center'>
						<button className='px-4 py-1.5 border-2 border-blue-500 rounded-lg h-16 hover:bg-rose-50 transition-all duration-300'>
							<div className='flex gap-5'>
								<span className='text-blue-500'>Learn more</span>
								<Image
									src={"/arrow.png"}
									height={14}
									width={28}
									alt='arrow right'
								/>
							</div>
						</button>
					</div>
				</div>
			</div>

			{/* users */}
			<div className='flex justify-center'>
				<h1 className='text-[#0F3558] font-bold text-2xl w-[50%] text-center '>
					Simplified scheduling for more than{" "}
					<span className=' text-blue-500 '> 10,000,000 </span> users worldwide
				</h1>
			</div>

			{/* companies */}

			<div className='flex justify-between items-center mt-10'>
				<Image src={"/ebay.jpeg"} height={183} width={275} alt='arrow right' />

				<Image
					src={"/zenefit.png"}
					height={40}
					width={140}
					alt='arrow right'
					className='h-14'
				/>

				<Image
					src={"/compass.png"}
					height={37}
					width={128}
					alt='arrow right'
					className=' h-6'
				/>

				<Image
					src={"/twilio.png"}
					height={96}
					width={180}
					alt='arrow right'
					className=' h-32'
				/>

				<Image
					src={"/dropbox.png"}
					height={20}
					width={150}
					alt='arrow right'
					className='h-10'
				/>
			</div>

			{/* Teams */}
			<div className='flex justify-center mt-20'>
				<h1 className='text-[#0F3558] font-bold text-5xl w-[70%] text-center '>
					Designed for teams who conduct meetings at scale
				</h1>
			</div>

			{/* Tabs */}

			<div
				id='#tab'
				className='border-b border-gray-200 dark:border-gray-700  mt-20 mx-24'
			>
				<ul className='flex justify-between -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
					<li className='mr-2 '>
						<a
							onClick={(e) => tabClicked(e, 0)}
							href='#tab'
							style={{
								borderColor: `${
									isActive === 0 ? "rgb(37 99 235)" : "rgb(255 255 255)"
								}`,
								color: `${
									isActive === 0 ? "rgb(37 99 235)" : "rgb(107 114 128)"
								}`,
							}}
							className='inline-flex flex-col  items-center gap-4 p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
						>
							<svg
								style={{
									color: `${
										isActive === 0 ? "rgb(37 99 235)" : "rgb(107 114 128)"
									}`,
								}}
								aria-hidden='true'
								className='w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
									clip-rule='evenodd'
								></path>
							</svg>
							Profile
						</a>
					</li>
					<li className='mr-2'>
						<a
							onClick={(e) => tabClicked(e, 1)}
							href='#tab'
							style={{
								borderColor: `${
									isActive === 1 ? "rgb(37 99 235)" : "rgb(255 255 255)"
								}`,
								color: `${
									isActive === 1 ? "rgb(37 99 235)" : "rgb(107 114 128)"
								}`,
							}}
							className=' inline-flex flex-col items-center gap-4 p-4 text-gray-500 border-b-2 border-gray-650 rounded-t-lg  dark:text-gray-500 dark:border-gray-500 group'
							aria-current='page'
						>
							<svg
								style={{
									color: `${
										isActive === 1 ? "rgb(37 99 235)" : "rgb(107 114 128)"
									}`,
								}}
								aria-hidden='true'
								className='w-5 h-5 mr-2 text-blue-600 dark:text-blue-500'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'></path>
							</svg>
							Dashboard
						</a>
					</li>
					<li className='mr-2'>
						<a
							onClick={(e) => tabClicked(e, 2)}
							href='#tab'
							style={{
								borderColor: `${
									isActive === 2 ? "rgb(37 99 235)" : "rgb(255 255 255)"
								}`,
								color: `${
									isActive === 2 ? "rgb(37 99 235)" : "rgb(107 114 128)"
								}`,
							}}
							className='inline-flex flex-col items-center gap-4 p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
						>
							<svg
								style={{
									color: `${
										isActive === 2 ? "rgb(37 99 235)" : "rgb(107 114 128)"
									}`,
								}}
								aria-hidden='true'
								className='w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z'></path>
							</svg>
							Settings
						</a>
					</li>
					<li className='mr-2'>
						<a
							onClick={(e) => tabClicked(e, 3)}
							href='#tab'
							style={{
								borderColor: `${
									isActive === 3 ? "rgb(37 99 235)" : "rgb(255 255 255)"
								}`,
								color: `${
									isActive === 3 ? "rgb(37 99 235)" : "rgb(107 114 128)"
								}`,
							}}
							className='inline-flex flex-col items-center gap-4 p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
						>
							<svg
								style={{
									color: `${
										isActive === 3 ? "rgb(37 99 235)" : "rgb(107 114 128)"
									}`,
								}}
								aria-hidden='true'
								className='w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z'></path>
								<path
									fill-rule='evenodd'
									d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z'
									clip-rule='evenodd'
								></path>
							</svg>
							Contacts
						</a>
					</li>
					<li className='mr-2'>
						<a
							onClick={(e) => tabClicked(e, 4)}
							href='#tab'
							style={{
								borderColor: `${
									isActive === 4 ? "rgb(37 99 235)" : "rgb(255 255 255)"
								}`,
								color: `${
									isActive === 4 ? "rgb(37 99 235)" : "rgb(107 114 128)"
								}`,
							}}
							className='inline-flex flex-col items-center gap-4 p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
						>
							<svg
								style={{
									color: `${
										isActive === 4 ? "rgb(37 99 235)" : "rgb(107 114 128)"
									}`,
								}}
								aria-hidden='true'
								className='w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z'></path>
								<path
									fill-rule='evenodd'
									d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z'
									clip-rule='evenodd'
								></path>
							</svg>
							Contacts
						</a>
					</li>
					<li className='mr-2'>
						<a
							onClick={(e) => tabClicked(e, 5)}
							href='#tab'
							style={{
								borderColor: `${
									isActive === 5 ? "rgb(37 99 235)" : "rgb(255 255 255)"
								}`,
								color: `${
									isActive === 5 ? "rgb(37 99 235)" : "rgb(107 114 128)"
								}`,
							}}
							className='inline-flex flex-col items-center gap-4 p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group'
						>
							<svg
								style={{
									color: `${
										isActive === 5 ? "rgb(37 99 235)" : "rgb(107 114 128)"
									}`,
								}}
								aria-hidden='true'
								className='w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z'></path>
								<path
									fill-rule='evenodd'
									d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z'
									clip-rule='evenodd'
								></path>
							</svg>
							Contacts
						</a>
					</li>
				</ul>
			</div>

			{/* Tab sections */}

			<div style={{ display: `${isActive === 0 ? "block" : "none"}` }}>
				<h1>section1</h1>
			</div>

			<div style={{ display: `${isActive === 1 ? "block" : "none"}` }}>
				<h1>section2</h1>
			</div>
		</div>
	);
};

export default Body;
