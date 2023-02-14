import Image from "next/image";

interface SectionObj {
	id: number;
	icon: string;
	title: string;
	info: string;
}

interface ParentProps {
	data: Array<SectionObj>;
	hero: string;
}
const Tabsection = ({ data, hero }: ParentProps) => {
	return (
		<div className='container'>
			<div className='grid grid-cols-2 gap-5 mt-16  pb-20 mx-24'>
				<div className=' '>
					<div className='col-span-1'>
						<div className=' col-span-1 flex items-start gap-4 '>
							<div>
								<Image
									src={"/" + data[0].icon}
									height={25}
									width={25}
									alt='sales hero'
									className=' bg-teal-200'
								/>
							</div>
							<div>
								<h1 className='font-bold'>{data[0].title}</h1>
								<p className=' text-lg font-light pr-10 mt-2'>{data[0].info}</p>
							</div>
						</div>

						<div className=' col-span-1 flex items-start gap-4 mt-8 '>
							<Image
								src={"/" + data[1].icon}
								height={25}
								width={25}
								alt='sales hero'
								className=' bg-stone-200'
							/>
							<div>
								<h1 className='font-bold'>{data[1].title}</h1>
								<p className=' text-lg font-light pr-10 mt-2'>{data[1].info}</p>
							</div>
						</div>

						<div className=' col-span-1 flex items-start gap-4 mt-8 '>
							<Image
								src={"/" + data[2].icon}
								height={25}
								width={25}
								alt='sales hero'
								className=' bg-amber-200'
							/>

							<div>
								<h1 className='font-bold'>{data[2].title}</h1>
								<p className=' text-lg font-light pr-10 mt-2'>{data[2].info}</p>
								<button className='text-blue-500 mt-10 hover:text-blue-600'>
									<div className='flex items-center gap-4'>
										Learn more{" "}
										<svg
											width='15'
											height='15'
											viewBox='0 0 15 15'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M13.7369 8.33211C14.1274 7.94158 14.1274 7.30842 13.7369 6.91789L7.37293 0.553932C6.9824 0.163408 6.34924 0.163408 5.95871 0.553932C5.56819 0.944456 5.56819 1.57762 5.95871 1.96815L11.6156 7.625L5.95871 13.2819C5.56819 13.6724 5.56819 14.3055 5.95871 14.6961C6.34924 15.0866 6.9824 15.0866 7.37293 14.6961L13.7369 8.33211ZM0.988281 8.625H13.0298V6.625H0.988281V8.625Z'
												fill='#006BFF'
											/>
										</svg>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>

				<Image src={"/" + hero} height={957} width={1140} alt='sales hero' />
			</div>
		</div>
	);
};

export default Tabsection;
