import Head from "next/head";
import { Inter } from "@next/font/google";
import Nav from "../components/Nav";
import HeroSection from "@/components/HeroSection";
import Body from "@/components/Body";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Calendly</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Nav />
			<HeroSection />

			<div className=' bg-gray-50 h-56'></div>
			<Body />
		</>
	);
}
