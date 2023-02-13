import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const HeroSection = () => {
	const { data: session } = useSession();
	console.log(session);
	return (
		<div className='max-w-[1240px] m-auto '>
			<div className='grid grid-cols-2 gap-5 mt-36 mr-6 pb-20 '>
				<div className=' text-6xl font-bold space-y-5  '>
					<h1 className='text-[#0B3558] '>Easy</h1>
					<h1 className='text-[#0B3558] '>scheduling</h1>
					<h1 className='text-blue-500'>ahead</h1>
					<p className=' py-10 font-thin text-xl w-[28rem] '>
						Calendly is your scheduling automation platform for eliminating the
						back-and-forth emails for finding the perfect time — and so much
						more.
					</p>
					<div className=''>
						{session ? (
							<button
								onClick={() => signOut()}
								className='px-4 py-1 rounded-lg border
                    border-[#0B3558] text-sm'
							>
								logout
							</button>
						) : (
							<div className='flex justify-between'>
								<button
									onClick={() => signIn("google")}
									className='px-4 py-1.5 rounded-md border
                 border-[#0B3558] text-sm hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all duration-300'
								>
									<div className='flex justify-between gap-5 items-center '>
										<Image
											src={"google.svg"}
											height={28}
											width={28}
											alt='google icon'
										/>
										Sign up free with Google
									</div>
								</button>

								<button
									onClick={() => signIn()}
									className='px-4 py-1.5 rounded-md border
                 border-[#0B3558] text-sm hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all duration-300'
								>
									<div className='flex justify-between gap-5 items-center '>
										<Image
											src={"microsoft.svg"}
											height={28}
											width={28}
											alt='microsoft icon'
										/>
										Sign up free with Microsoft
									</div>
								</button>
							</div>
						)}
					</div>
					<div className='inline-flex items-center justify-center w-full'>
						<hr className='w-full h-px my-5 bg-gray-200 border-0 dark:bg-gray-700' />
						<span className='absolute px-3 text-base font-light text-gray-900 -translate-x-1/3 bg-white left-1/3 dark:text-white dark:bg-gray-900'>
							OR
						</span>
					</div>
					<div className='text-sm '>
						{" "}
						<span className=' text-sm text-blue-400'>
							Signup for free with email
						</span>
						<span>&nbsp; No credit card required</span>
					</div>
				</div>

				<Image
					src={"/hero_image.png"}
					height={1132}
					width={1366}
					alt='person image'
					className=' scale-110'
				/>
			</div>
		</div>
	);
};

export default HeroSection;
