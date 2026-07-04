import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import { linkedInUrl, resumeUrl } from "@/data/contacts";
import HeaderNav from "./header_navbar";

export default function Header() {
	return (
		<header className="h-14 flex justify-between flex-1 sticky top-6 mt-6 mx-12 z-50">
			<div className="">
				<h1 className="text-2xl font-semibold">Stanislav T.</h1>
				<p className="text-sm text-dark-200 font-medium">Software Engineer</p>
				<p className="text-sm text-dark-200 font-medium">Web Developer</p>
			</div>
			<HeaderNav />
			<nav className="flex gap-5 items-center">
				<Link
					target="_blank"
					to={linkedInUrl}
					className="transition-all duration-100 hover:text-cyan-600 flex items-center font-medium"
				>
					LinkedIn <MoveUpRight className="size-5" />
				</Link>
				<Link
					target="_blank"
					to={resumeUrl}
					className="transition-all duration-100 hover:text-cyan-600 flex items-center font-medium"
				>
					Resume <MoveUpRight className="size-5" />
				</Link>
			</nav>
		</header>
	);
}
