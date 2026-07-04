import Carfin from "@/assets/works/carfin.webp";
import Clean from "@/assets/works/clean.webp";
import DigitalSol from "@/assets/works/dig.webp";
import Doloni from "@/assets/works/doloni.webp";
import Eternal from "@/assets/works/eternal.webp";
import Jrai from "@/assets/works/jrai.webp";
import Kalyna from "@/assets/works/kalyna.webp";
import type { WorkProps } from "@/components/reusable/work-card";

export const works: WorkProps[] = [
	{
		title: "Job Research AI",
		client: "AI Service",
		description: "AI powered SaaS platform that helps to find a new job.",
		image: Jrai,
		href: "/",
		imageAlt: "jrai",
		accentColor: "#1969DC",
		isAi: true,
	},
	{
		title: "Digital Solutions",
		client: "Web Studio",
		description:
			"Proficient developers that make a real product. I'm one of them :)",
		image: DigitalSol,
		href: "/",
		imageAlt: "dig",
		accentColor: "#DB7B5D",
	},
	{
		title: "Memories Rivne",
		client: "Memorials Service",
		description:
			"A modern memorial website for the company that offer their services.",
		image: Eternal,
		href: "https://eternal-memory.com.ua",
		imageAlt: "eternal",
		accentColor: "#263c27",
	},
	{
		title: "Kalyna Rivne",
		client: "Food Service",
		description:
			"A clean, modern platform highlighting catalog that are offerings, complete with menus and easy reservation options.",
		image: Kalyna,
		href: "https://kalyna-rv.com.ua",
		imageAlt: "kalyna",
		accentColor: "#e20013",
	},
	{
		title: "Doloni Toys",
		client: "Kids toys",
		description:
			"High-quality, kid-safe toys that blend fun with learning—built to last, made to inspire.",
		image: Doloni,
		href: "https://eternal-memory.com.ua",
		imageAlt: "doloni",
		accentColor: "#c3f6f1",
	},
	{
		title: "Carfin",
		client: "Car service",
		description:
			"Your car, your pace: online selection, instant registration,transparent 12-month redemption program.",
		image: Carfin,
		href: "https://carfin.vercel.app",
		imageAlt: "carfin",
		accentColor: "#ffd984",
	},
	{
		title: "7Clean",
		client: "Cleaning",
		description:
			"Leverages lightweight frameworks and optimized architecture to deliver a smooth, responsive experience on any device.",
		image: Clean,
		href: "https://7clean.vercel.app",
		imageAlt: "clean",
		accentColor: "#87dc4b",
	},
];
