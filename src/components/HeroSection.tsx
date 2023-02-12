import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const HeroSection = () => {
	const { data: session } = useSession();
	console.log(session);
	return (
		<div className='grid grid-cols-2 gap-5 mt-20 mx-6 h-full '>
			<div className=' text-6xl font-bold space-y-5  '>
				<h1 className='text-[#0B3558] '>Easy</h1>
				<h1 className='text-[#0B3558] '>scheduling</h1>
				<h1 className='text-blue-500'>ahead</h1>
				<p className='my-20 font-thin text-xl w-[28rem] '>
					Calendly is your scheduling automation platform for eliminating the
					back-and-forth emails for finding the perfect time — and so much more.
				</p>
				<div className='mt-20'>
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
			</div>
			<div className='z-0 flex justify-center items-center '>
				<Image
					src={"/hero_image.png"}
					height={1132}
					width={1366}
					alt='person image'
					className='-z-1 scale-110'
				/>
			</div>
		</div>
	);
};

export default HeroSection;
