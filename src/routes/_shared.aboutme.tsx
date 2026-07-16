import { createFileRoute, Link } from "@tanstack/react-router";
import Dyploma1 from "@/assets/dyplomas/d1.webp";
import Dyploma2 from "@/assets/dyplomas/d2.webp";
import Dyploma3 from "@/assets/dyplomas/d3.webp";
import Dyploma4 from "@/assets/dyplomas/d4.webp";
import Dyploma5 from "@/assets/dyplomas/d5.webp";
import Dyploma6 from "@/assets/dyplomas/d6.webp";
import DyplomaRshu1 from "@/assets/dyplomas/rshu1.webp";
import DyplomaRshu2 from "@/assets/dyplomas/rshu2.webp";
import DyplomaRshu3 from "@/assets/dyplomas/rshu3.webp";
import DyplomaRshu4 from "@/assets/dyplomas/rshu4.webp";
import DyplomaRshu5 from "@/assets/dyplomas/rshu5.webp";
import Me1 from "@/assets/me/me1.webp";
import Me2 from "@/assets/me/me2.webp";
import Me3 from "@/assets/me/me3.webp";
import { Card } from "@/components/reusable/card";
import ZoomDialog from "@/components/reusable/dialog/dialog";
import ExperienceCard from "@/components/reusable/experience-card";
import SectionHeader from "@/components/reusable/section-header";
import { SkillBlock } from "@/components/reusable/skill-block";
import { resumeDownloadUrl, resumeUrl } from "@/data/contacts";
import { experiences } from "@/data/experience";
import { skillsData } from "@/data/stack";
import { studies } from "@/data/study";
import { useDialogStore } from "@/hooks/use-dialog.hook";

export const Route = createFileRoute("/_shared/aboutme")({
	component: AboutMe,
	head: () => ({
		meta: [
			{ title: "About me" },
	],
  })
});

function AboutMe() {
	const { openDialog } = useDialogStore();
	return (
		<div className="max-w-350 mx-auto pt-0 pb-20 flex flex-col gap-24 max-sm:pt-0 max-md:px-5 max-2xl:px-10 max-lg:gap-16">
			<div className="absolute -top-6 left-0 w-screen h-screen bg-radial from-emerald-600/30 dark:brightness-25 blur-3xl via-light dark:via-dark to-white/0"></div>
			<div className="h-[80vh] flex flex-col justify-center gap-30 z-10">
				<div className="flex flex-col items-center *:text-center">
					<div className="flex">
						<img
							alt="me1"
							src={Me2}
							width={176}
							height={176}
							className="size-44 rounded-full bg-white/10 object-cover -rotate-12 translate-x-10 translate-y-5 max-sm:size-32 max-xs:size-28"
						/>
						<img
							alt="me2"
							src={Me1}
							width={176}
							height={176}
							className="size-50 rounded-full bg-white/10 object-cover z-10 max-sm:size-36 max-xs:size-32"
						/>
						<img
							alt="me3"
							src={Me3}
							width={176}
							height={176}
							className="size-40 rounded-full bg-white/10 object-cover rotate-16 -translate-x-10 translate-y-5 max-sm:size-34 max-xs:size-24"
						/>
					</div>
					<div className="text-8xl font-semibold mt-14 max-sm:text-6xl">
						<h1 className="font-moz">Wanna know more</h1>
						<h1 className="h-24">
							about{" "}
							<span className="font-cycle bg-clip-text text-transparent bg-linear-to-r from-dark dark:from-white to-emerald-400 dark:to-slate-400">
								me?
							</span>
						</h1>
					</div>
					<div className="text-4xl flex flex-col items-center mt-14 gap-2">
						<p>Scroll down to see</p>
						<p className="text-dark-200">
							Stack, Skills, Experience, Education
						</p>
					</div>
				</div>
			</div>
			<hr className="border-white/30" />
			<section className="flex flex-col gap-5 text-justify">
				<SectionHeader>Summary</SectionHeader>
				<p className="text-lg text-dark-200 font-medium tracking-normal">
					Results-driven Middle Full Stack Web Developer with over 5 years of
					experience architecting, developing, software engineering and
					deploying highly scalable enterprise applications and web solutions.
				</p>
				<p className="text-lg text-dark-200 font-medium tracking-normal">
					Proficient in the .NET ecosystem, Node.js (NestJS), and modern
					frontend frameworks including React and Next.js. Demonstrated success
					in leading engineering teams, delivering high-traffic e-commerce
					platforms, and orchestrating fault-tolerant microservices.
				</p>
				<p className="text-lg text-dark-200 font-medium tracking-normal">
					Adept at creating seamless, minimalist user experiences with a focus
					on clean, maintainable code and agile methodologies. Seeking a remote
					position to leverage deep full-stack expertise to drive innovative
					engineering solutions.
				</p>
				<br />
				<div className="rounded-[48px] bg-dark/5 dark:bg-dark-300 relative grid grid-cols-3 py-10 px-20 gap-10 border-x border-b border-x-dark/10 dark:border-x-white/10 border-b-dark/10 dark:border-b-white/10 shadow-2xl shadow-dark/10 dark:shadow-white/5 max-sm:grid-cols-1 max-xl:grid-cols-2 max-lg:px-8">
					<div className="h-px w-1/2 absolute top-0 left-1/2 -translate-x-1/2 bg-linear-to-r from-light dark:from-dark via-blue-500 dark:via-cyan-300/80 to-light dark:to-dark"></div>
					<div className="col-span-2 max-xl:col-span-1">
						<h1 className="font-semibold text-4xl">Resume</h1>
						<p className="text-dark-200 text-xl mt-2 max-lg:text-start">
							Review my CV or download to check later.
						</p>
					</div>
					<div className="flex items-center justify-end gap-1 text-white dark:text-dark">
						<Link
							to={resumeUrl}
							target="_blank"
							className="bg-blue-600 rounded-l-xl px-5 py-2 text-xl font-medium cursor-pointer"
						>
							Review
						</Link>
						<Link
							to={resumeDownloadUrl}
							target="_blank"
							className="bg-blue-600 rounded-r-xl px-5 py-2 text-xl font-medium cursor-pointer"
						>
							Download
						</Link>
					</div>
				</div>
			</section>
			<hr className="border-white/30" />
			<section className="flex flex-col gap-18">
				<SectionHeader>Stack & Skills</SectionHeader>
				<div className="grid grid-cols-2 gap-x-20 gap-y-10 max-lg:grid-cols-1">
					{skillsData.map((i) => (
						<SkillBlock key={i.title} {...i} />
					))}
					<p className="text-lg text-dark-200 font-medium tracking-normal col-span-full">
						* Most showcases were made with Nodejs. Current stack - Next.js,
						Vite, Nest.js.
					</p>
				</div>
			</section>
			<hr className="border-white/30" />
			<section className="flex flex-col gap-18">
				<SectionHeader>Experience</SectionHeader>
				{experiences.map((i) => (
					<ExperienceCard key={i.company} {...i} />
				))}
			</section>
			<hr className="border-white/30" />
			<section className="flex flex-col gap-18">
				<SectionHeader>Education</SectionHeader>
				{studies.map((i) => (
					<ExperienceCard key={i.company} {...i} />
				))}
			</section>
			<hr className="border-white/30" />
			<section className="flex flex-col gap-18">
				<SectionHeader>Dyplomas</SectionHeader>
				<div className="grid grid-cols-2 gap-10 *:gap-10 max-lg:flex max-lg:flex-col">
					<div className="flex flex-col items-end max-lg:items-center">
						<Card
							onClick={() =>
								openDialog(
									<img
										src={Dyploma1}
										alt="dyploma1"
										className="w-auto h-screen object-contain"
									/>,
								)
							}
						>
							<img src={Dyploma1} alt="dyploma1" />
						</Card>
						<Card
							onClick={() =>
								openDialog(
									<img
										src={Dyploma5}
										alt="dyploma5"
										className="w-auto h-screen object-contain"
									/>,
								)
							}
						>
							<img src={Dyploma5} alt="dyploma5" />
						</Card>
						<Card
							onClick={() =>
								openDialog(
									<img
										src={Dyploma3}
										alt="dyploma3"
										className="w-auto h-screen object-contain"
									/>,
								)
							}
						>
							<img src={Dyploma3} alt="dyploma3" />
						</Card>
						<Card
							onClick={() =>
								openDialog(
									<img
										src={DyplomaRshu2}
										alt="dyplomaRshu2"
										className="w-auto h-screen object-contain"
									/>,
								)
							}
						>
							<img src={DyplomaRshu2} alt="dyplomaRshu2" />
						</Card>
						<Card
							onClick={() =>
								openDialog(
									<img
										src={DyplomaRshu4}
										alt="dyplomaRshu4"
										className="w-auto h-screen object-contain"
									/>,
								)
							}
						>
							<img src={DyplomaRshu4} alt="dyplomaRshu4" />
						</Card>
					</div>
					<div className="flex flex-col items-start max-lg:items-center">
						<Card
							onClick={() =>
								openDialog(
									<img
										src={Dyploma2}
										alt="dyploma2"
										className="w-auto h-screen object-cover"
									/>,
								)
							}
						>
							<img src={Dyploma2} alt="dyploma2" />
						</Card>
						<Card
							onClick={() =>
								openDialog(
									<img
										src={Dyploma6}
										alt="dyploma6"
										className="w-auto h-screen object-contain"
									/>,
								)
							}
						>
							<img src={Dyploma6} alt="dyploma6" />
						</Card>
						<Card
							onClick={() =>
								openDialog(
									<img
										src={Dyploma4}
										alt="dyploma4"
										className="w-auto h-screen object-contain"
									/>,
								)
							}
						>
							<img src={Dyploma4} alt="dyploma4" />
						</Card>
						<Card
							onClick={() =>
								openDialog(
									<img
										src={DyplomaRshu3}
										alt="dyplomaRshu3"
										className="w-auto h-screen object-contain"
									/>,
								)
							}
						>
							<img src={DyplomaRshu3} alt="dyplomaRshu3" />
						</Card>
						<Card
							onClick={() =>
								openDialog(
									<img
										src={DyplomaRshu1}
										alt="dyplomaRshu1"
										className="w-auto h-screen object-contain"
									/>,
								)
							}
						>
							<img src={DyplomaRshu1} alt="dyplomaRshu1" />
						</Card>
					</div>
					<div className='col-span-2 flex items-start justify-center'>
						<Card
							outerClassName='-rotate-90 -translate-y-1/7'
							onClick={() =>
								openDialog(
									<img
										src={DyplomaRshu5}
										alt="dyplomaRshu5"
										className="w-auto h-screen object-contain"
									/>,
								)
							}
						>
							<img src={DyplomaRshu5} alt="dyplomaRshu5" />
						</Card>
					</div>
				</div>
			</section>
			<ZoomDialog />
		</div>
	);
}
