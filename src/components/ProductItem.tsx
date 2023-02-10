import Image from "next/image";

interface ItemValue {
	icon: string;
	title: string;
	message: string;
}

const ProductItem = ({ icon, title, message }: ItemValue) => {
	return (
		<div className='mb-5 mr-5'>
			<Image src={icon} height={20} width={20} alt='icon' />
			<h1 className=' font-bold text-sm my-2'>{title}</h1>
			<p className=' text-xs text-slate-500'>{message}</p>
		</div>
	);
};

export default ProductItem;
