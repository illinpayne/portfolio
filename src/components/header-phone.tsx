import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, MoveUpRight } from "lucide-react";
import {
	githubUrl,
	linkedInUrl,
	resumeUrl,
	telegramUrl,
} from "@/data/contacts";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerTrigger,
} from "./ui/drawer";

type HeaderPhoneProps = {};

export const HeaderPhone: React.FC<HeaderPhoneProps> = ({ ...props }) => {
	const navigate = useNavigate();
	return (
		<>
			<Drawer swipeDirection="right">
				<DrawerTrigger
					render={
						<button className="fixed bottom-5 right-5 size-14 z-50 rounded-full bg-pill backdrop-blur-lg border border-dark/10 dark:border-white/10 shadow-lg shadow-white/5 sm:hidden flex items-center justify-center">
							<Menu className="text-dark dark:text-white" />
						</button>
					}
				></DrawerTrigger>
				<DrawerContent className="bg-light/60 dark:bg-dark/60 border-dark/10 dark:border-light-10">
					<div className="p-4 py-10 h-full flex flex-col">
						<nav className="flex flex-col gap-2 *:flex *:items-center *:text-2xl *:font-medium *:gap-1 w-fit">
							<DrawerClose
								render={
									<button
										onClick={() => {
											navigate({ to: "/" });
										}}
										className="transition-all duration-100 hover:text-cyan-600 flex justify-between"
									>
										Showcases <MoveUpRight />
									</button>
								}
							/>
							<DrawerClose
								render={
									<button
										onClick={() => {
											navigate({ to: "/aboutme" });
										}}
										className="transition-all duration-100 hover:text-cyan-600 flex justify-between"
									>
										About me <MoveUpRight />
									</button>
								}
							/>
						</nav>
						<nav className="flex flex-col gap-2 *:flex *:items-center *:text-2xl *:font-medium *:gap-1 w-fit mt-auto">
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
					</div>
				</DrawerContent>
			</Drawer>
		</>
	);
};
