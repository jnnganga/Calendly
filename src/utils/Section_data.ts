interface SectionObj {
	id: number;
	icon: string;
	title: string;
	info: string;
}

export const salesData: Array<SectionObj> = [
	{
		id: 1,
		icon: "dollar.svg",
		title: "Drive more revenue",
		info: "Book high-value meetings in seconds and turn scheduling into a competitive advantage.",
	},
	{
		id: 2,
		icon: "round.svg",
		title: "Speed up your sales cycle",
		info: "Keep your deal momentum high and remove scheduling friction at every stage of your sales cycle.",
	},
	{
		id: 3,
		icon: "handshake.svg",
		title: "Close more deals",
		info: "Customize reminder and follow-up workflows to move deals along, integrate with sales tools, and remove logistical tasks to focus on selling.",
	},
];

export const marketingData: Array<SectionObj> = [
	{
		id: 1,
		icon: "horn.svg",
		title: "Drive more pipeline",
		info: "Turn marketing leads into booked meetings, faster.",
	},
	{
		id: 2,
		icon: "restime.svg",
		title: "Improve lead response times",
		info: "Gain a competitive advantage when you qualify, route, and book leads instantly.",
	},
	{
		id: 3,
		icon: "graph.svg",
		title: "Boost conversion rates",
		info: "Reduce friction in the sales funnel and close more deals.",
	},
];

export const successData: Array<SectionObj> = [
	{
		id: 1,
		icon: "drive.png",
		title: "Drive more retention",
		info: "Bring all of your experts together and connect with customers at every stage of their journey to build long-lasting partnerships.",
	},
	{
		id: 2,
		icon: "speed.png",
		title: "Speed up your response times",
		info: "Quickly book time to solve customers needs and help them self-serve to support their goals.",
	},
	{
		id: 3,
		icon: "improve.png",
		title: "Improve NPS and customer health",
		info: "Change the way you schedule meetings to increase customer satisfaction and keep engagement high with reminder and follow-up workflows.",
	},
];
