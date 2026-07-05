import { Link } from "@tanstack/react-router";
import { MoveUpRight } from "lucide-react";
import {
	githubUrl,
	linkedInUrl,
	resumeUrl,
	telegramUrl,
} from "@/data/contacts";
import { ThemeSwitcher } from './reusable/theme-switcher'
export default function Footer() {
	return (
		<footer
			className="border-t border-t-dark/10 dark:border-t-neutral-800 h-fit flex justify-center py-24 max-md:px-5 max-2xl:px-10"
			id="#contacts"
		>
			<div className="grid grid-cols-2 gap-10 w-full max-w-340 max-sm:grid-cols-1 mx-auto">
				<div className="flex flex-col gap-4">
					<p className="uppercase font-semibold text-sm text-dark-200">
						Contacts
					</p>
					<nav className="flex flex-col gap-2 *:flex *:items-center *:text-2xl *:font-medium *:gap-1 w-fit">
						<Link
							target="_blank"
							to={linkedInUrl}
							className="transition-all duration-100 hover:text-cyan-600 flex justify-between"
						>
							LinkedIn <MoveUpRight />
						</Link>
						<Link
							target="_blank"
							to={telegramUrl}
							className="transition-all duration-100 hover:text-cyan-600 flex justify-between"
						>
							Telegram <MoveUpRight />
						</Link>
						<Link
							target="_blank"
							to={githubUrl}
							className="transition-all duration-100 hover:text-cyan-600 flex justify-between"
						>
							GitHub <MoveUpRight />
						</Link>
						<Link
							target="_blank"
							to={resumeUrl}
							className="transition-all duration-100 hover:text-cyan-600 flex justify-between"
						>
							Resume <MoveUpRight />
						</Link>
					</nav>
					<div className="font-medium flex flex-col gap-2 items-start mt-5">
						<h1 className="text-lg">
							© 2026 Stanislav Tarnohurskyi. All Rights Reserved.
						</h1>
						<p className="text-dark-200">
							Made with love and Coca Cola Zero (0% sugar, more ice).
						</p>
					</div>
				</div>
				<div className="flex flex-col items-end justify-end gap-2 max-sm:items-start">
					<ThemeSwitcher />
					<p className="text-semibold text-2xl">Thanks for stopping by!</p>
					<p className="text-6xl">❤️</p>
				</div>
			</div>
		</footer>
	);
}
