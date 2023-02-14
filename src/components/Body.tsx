import Image from "next/image";
import React, { useState } from "react";
import Tabsection from "./Tabsection";
import { salesData, marketingData } from "@/utils/Section_data";

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
									d='M8.75 12.5H10V3.75H8.75C8.05977 3.75 7.5 4.30977 7.5 5V11.25C7.5 11.9402 8.05977 12.5 8.75 12.5ZM22.5 11.25V5C22.5 4.30977 21.9402 3.75 21.25 3.75H20V12.5H21.25C21.9402 12.5 22.5 11.9402 22.5 11.25ZM24.375 15H5V0.625C5 0.279687 4.72031 0 4.375 0H0.625C0.279687 0 0 0.279687 0 0.625V1.875C0 2.22031 0.279687 2.5 0.625 2.5H2.5V16.875C2.5 17.2203 2.77969 17.5 3.125 17.5H6.36484C6.29492 17.6965 6.25 17.9047 6.25 18.125C6.25 19.1605 7.08945 20 8.125 20C9.16055 20 10 19.1605 10 18.125C10 17.9047 9.95508 17.6965 9.88516 17.5H17.6148C17.5449 17.6965 17.5 17.9047 17.5 18.125C17.5 19.1605 18.3395 20 19.375 20C20.4105 20 21.25 19.1605 21.25 18.125C21.25 17.9047 21.2051 17.6965 21.1352 17.5H24.375C24.7203 17.5 25 17.2203 25 16.875V15.625C25 15.2797 24.7203 15 24.375 15ZM18.75 3.75V1.875C18.75 0.839453 17.9105 0 16.875 0H13.125C12.0895 0 11.25 0.839453 11.25 1.875V12.5H18.75V3.75ZM16.875 3.75H13.125V1.875H16.875V3.75Z'
									clip-rule='evenodd'
								></path>
							</svg>
							<h2 className='text-lg'>Sales</h2>
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
								viewBox='0 0 25 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M25 10.4167C25 9.39106 24.4379 8.50521 23.6111 8.02431V1.38932C23.6111 1.00955 23.3082 0 22.2222 0C21.9132 0 21.6063 0.103299 21.355 0.304687L17.6645 3.25738C15.8108 4.73915 13.4835 5.55556 11.1111 5.55556H2.77778C1.24349 5.55556 0 6.79904 0 8.33333V12.5C0 14.0343 1.24349 15.2778 2.77778 15.2778H4.24045C4.18012 15.7326 4.14583 16.1953 4.14583 16.6667C4.14583 18.3928 4.54774 20.0239 5.25521 21.4818C5.48047 21.9457 5.97222 22.2222 6.48785 22.2222H9.7118C10.8424 22.2222 11.5213 20.9271 10.8359 20.0278C10.1241 19.0937 9.70095 17.9288 9.70095 16.6667C9.70095 16.1845 9.77127 15.7209 9.89236 15.2778H11.1111C13.4835 15.2778 15.8108 16.0942 17.6641 17.576L21.3546 20.5286C21.6007 20.7256 21.9065 20.8331 22.2218 20.8333C23.3034 20.8333 23.6107 19.8446 23.6107 19.4444V12.8095C24.4379 12.3281 25 11.4423 25 10.4167ZM20.8333 16.5547L19.3989 15.4071C17.0551 13.5321 14.1111 12.5 11.1111 12.5V8.33333C14.1111 8.33333 17.0551 7.30121 19.3989 5.42621L20.8333 4.27865V16.5547Z'></path>
							</svg>

							<h2 className='text-lg'>Marketing</h2>
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
								viewBox='0 0 25 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M5.89609 7.5H7.21367C7.64375 7.5 7.94063 7.07695 7.79414 6.67266C7.60156 6.14219 7.49922 5.57969 7.49922 5C7.49922 4.42031 7.60156 3.85781 7.79414 3.32734C7.94102 2.92305 7.64375 2.5 7.21367 2.5H5.89609C5.62227 2.5 5.37031 2.67539 5.29414 2.93867C5.10313 3.60195 5 4.29219 5 5C5 5.70781 5.10312 6.39805 5.29453 7.06094C5.37031 7.32422 5.62227 7.5 5.89609 7.5ZM3.5125 0.911719C3.73281 0.496875 3.43633 0 2.96719 0H1.58711C1.34219 0 1.11289 0.140234 1.01133 0.363672C0.367188 1.77891 0 3.3457 0 5C0 5.9668 0.121875 7.66914 1.04258 9.64297C1.14492 9.86289 1.37148 10 1.61328 10H2.97422C3.44375 10 3.74023 9.50234 3.51914 9.08711C1.57461 5.4418 2.86641 2.12812 3.5125 0.911719ZM23.9867 0.362891C23.8852 0.139844 23.6563 0 23.4113 0H22.0277C21.5598 0 21.2598 0.494531 21.4801 0.908203C22.1938 2.24766 23.3715 5.57305 21.491 9.08125C21.2676 9.49844 21.5613 10 22.0344 10H23.4105C23.6555 10 23.8844 9.86016 23.9859 9.63711C24.6316 8.22188 25 6.65469 25 5C25 3.34531 24.632 1.77812 23.9867 0.362891ZM19.1039 2.5H17.7863C17.3562 2.5 17.0594 2.92305 17.2059 3.32734C17.3984 3.85781 17.5008 4.42031 17.5008 5C17.5008 5.57969 17.3984 6.14219 17.2059 6.67266C17.059 7.07695 17.3562 7.5 17.7863 7.5H19.1039C19.3781 7.5 19.6297 7.32461 19.7059 7.06094C19.8973 6.39805 20 5.70781 20 5C20 4.29219 19.8969 3.60195 19.7055 2.93906C19.6297 2.67539 19.3777 2.5 19.1039 2.5ZM14.5609 6.41094C14.8363 6.00898 14.9984 5.52383 14.9984 5C14.9984 3.61914 13.8801 2.5 12.5 2.5C11.1203 2.5 10.0016 3.61914 10.0016 5C10.0016 5.52383 10.1637 6.00898 10.4391 6.41094L5.34141 18.6535C5.20859 18.9719 5.35938 19.3379 5.67773 19.4707L6.83047 19.9516C7.14883 20.0844 7.51484 19.9336 7.64727 19.6152L9.56875 15H15.4309L17.3527 19.6152C17.4855 19.934 17.8512 20.0844 18.1695 19.9516L19.3223 19.4707C19.6406 19.3379 19.791 18.9719 19.6586 18.6535L14.5609 6.41094ZM10.6102 12.5L12.5 7.96133L14.3898 12.5H10.6102Z'></path>
							</svg>

							<h2 className='text-lg'>Customer Success</h2>
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
								viewBox='0 0 25 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z'></path>
								<path
									fill-rule='evenodd'
									d='M7.5 8.75C9.91797 8.75 11.875 6.79297 11.875 4.375C11.875 1.95703 9.91797 0 7.5 0C5.08203 0 3.125 1.95703 3.125 4.375C3.125 6.79297 5.08203 8.75 7.5 8.75ZM10.5 10H10.1758C9.36328 10.3906 8.46094 10.625 7.5 10.625C6.53906 10.625 5.64062 10.3906 4.82422 10H4.5C2.01562 10 0 12.0156 0 14.5V15.625C0 16.6602 0.839844 17.5 1.875 17.5H13.125C14.1602 17.5 15 16.6602 15 15.625V14.5C15 12.0156 12.9844 10 10.5 10ZM18.75 8.75C20.8203 8.75 22.5 7.07031 22.5 5C22.5 2.92969 20.8203 1.25 18.75 1.25C16.6797 1.25 15 2.92969 15 5C15 7.07031 16.6797 8.75 18.75 8.75ZM20.625 10H20.4766C19.9336 10.1875 19.3594 10.3125 18.75 10.3125C18.1406 10.3125 17.5664 10.1875 17.0234 10H16.875C16.0781 10 15.3437 10.2305 14.6992 10.6016C15.6523 11.6289 16.25 12.9922 16.25 14.5V16C16.25 16.0859 16.2305 16.168 16.2266 16.25H23.125C24.1602 16.25 25 15.4102 25 14.375C25 11.957 23.043 10 20.625 10Z'
									clip-rule='evenodd'
								></path>
							</svg>

							<h2 className='text-lg'>Recruiting</h2>
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
								viewBox='0 0 25 25'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z'></path>
								<path
									fill-rule='evenodd'
									d='M22.5 0H2.5C1.125 0 0 1 0 2.22222V14.4444C0 15.6667 1.125 16.6667 2.5 16.6667H6.25L5 17.7778V20H20V17.7778L18.75 16.6667H22.5C23.875 16.6667 25 15.6667 25 14.4444V2.22222C25 1 23.875 0 22.5 0ZM22.5 14.4444H2.5V2.22222H22.5V14.4444Z'
									clip-rule='evenodd'
								></path>
							</svg>

							<h2 className='text-lg'>Information Technology</h2>
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
								viewBox='0 0 25 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z'></path>
								<path
									fill-rule='evenodd'
									d='M8.12506 13.75C8.0317 13.75 7.93834 13.7637 7.84928 13.7926C7.34303 13.957 6.81061 14.0625 6.25006 14.0625C5.68952 14.0625 5.15709 13.957 4.65045 13.7926C4.56139 13.7637 4.46842 13.75 4.37506 13.75C1.95084 13.75 -0.0128275 15.7219 6.31046e-05 18.1492C0.00553185 19.175 0.848891 20 1.87506 20H10.6251C11.6512 20 12.4946 19.175 12.5001 18.1492C12.513 15.7219 10.5493 13.75 8.12506 13.75ZM6.25006 12.5C8.32116 12.5 10.0001 10.8211 10.0001 8.75C10.0001 6.67891 8.32116 5 6.25006 5C4.17897 5 2.50006 6.67891 2.50006 8.75C2.50006 10.8211 4.17897 12.5 6.25006 12.5ZM23.1251 0H8.12506C7.09108 0 6.25006 0.869141 6.25006 1.93711V3.75C7.16491 3.75 8.01178 4.01484 8.75006 4.44531V2.5H22.5001V13.75H20.0001V11.25H15.0001V13.75H12.0219C12.768 14.402 13.3157 15.2629 13.5723 16.25H23.1251C24.159 16.25 25.0001 15.3809 25.0001 14.3129V1.93711C25.0001 0.869141 24.159 0 23.1251 0Z'
									clip-rule='evenodd'
								></path>
							</svg>

							<h2 className='text-lg'>Eduaction</h2>
						</a>
					</li>
				</ul>
			</div>

			{/* Tab sections */}

			<div style={{ display: `${isActive === 0 ? "block" : "none"}` }}>
				<Tabsection data={salesData} hero={"sales_hero.png"} />
			</div>

			<div style={{ display: `${isActive === 1 ? "block" : "none"}` }}>
				<Tabsection data={marketingData} hero={"marketing_hero.svg"} />
			</div>
		</div>
	);
};

export default Body;
