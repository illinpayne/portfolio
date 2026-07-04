import { createFileRoute } from "@tanstack/react-router";
import { MoveDown } from "lucide-react";
import WorkCard from "@/components/reusable/work-card";
import { works } from "@/data/works";
export const Route = createFileRoute("/_shared/")({ component: Home });

function Home() {
	return (
		<div className="max-w-340 mx-auto py-20 flex flex-col gap-24 max-md:px-5 max-2xl:px-5 max-sm:gap-5 max-lg:gap-10 max-xl:gap-16 max-2xl:gap-24">
			<div className="absolute -top-6 left-0 w-screen h-screen bg-radial from-cyan-300 brightness-25 blur-3xl via-dark to-white/0"></div>
			<div className="h-[90vh] flex flex-col justify-center gap-30 z-10 max-sm:h-[50vh] max-2xl:h-[80vh]">
				<div className="flex flex-col">
					<div className="text-8xl font-semibold max-sm:text-5xl max-xl:text-center max-xl:text-6xl">
						<h1 className="font-moz">I design idea</h1>
						<h1 className="h-24">
							product &{" "}
							<span className="font-cycle bg-clip-text text-transparent bg-linear-to-r from-white to-slate-400">
								result
							</span>
							.
						</h1>
					</div>
					<div className="text-4xl flex flex-col items-end mt-14 gap-2 max-sm:text-2xl max-xl:text-end max-xl:text-3xl">
						<p>Middle Software Engineer at Avasure. Remote working.</p>
						<p className="text-dark-200">Formerly as Freelance Web Developer</p>
					</div>
				</div>
				<div className="flex justify-center w-full translate-y-20 max-sm:hidden">
					<div>
						<MoveDown className="animate-bounce size-9" />
					</div>
				</div>
			</div>
			{works.map((i) => (
				<WorkCard key={i.imageAlt} {...i} />
			))}
		</div>
	);
}
