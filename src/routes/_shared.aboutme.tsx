import { createFileRoute } from "@tanstack/react-router";
import Dyploma1 from "@/assets/dyplomas/d1.webp";
import Dyploma2 from "@/assets/dyplomas/d2.webp";
import Dyploma3 from "@/assets/dyplomas/d3.webp";
import Dyploma4 from "@/assets/dyplomas/d4.webp";
import Dyploma5 from "@/assets/dyplomas/d5.webp";
import Dyploma6 from "@/assets/dyplomas/d6.webp";
import Me1 from "@/assets/me/me1.webp";
import Me2 from "@/assets/me/me2.webp";
import Me3 from "@/assets/me/me3.webp";
import { Card } from "@/components/reusable/card";
import ExperienceCard from "@/components/reusable/experience-card";
import SectionHeader from "@/components/reusable/section-header";
import { SkillBlock } from "@/components/reusable/skill-block";
import { experiences } from "@/data/experience";
import { skillsData } from "@/data/stack";
import { studies } from "@/data/study";

export const Route = createFileRoute("/_shared/aboutme")({
	component: AboutMe,
});

function AboutMe() {
	return (
		<div className="max-w-350 mx-auto pt-0 pb-20 flex flex-col gap-24">
			<div className="absolute -top-6 left-0 w-screen h-screen bg-radial from-emerald-300 brightness-25 blur-3xl via-dark to-white/0"></div>
			<div className="h-[80vh] flex flex-col justify-center gap-30 z-10">
				<div className="flex flex-col items-center *:text-center">
					<div className="flex">
						<img
							alt="me1"
							src={Me2}
							width={176}
							height={176}
							className="size-44 rounded-full bg-white/10 object-cover outline outline-white/30 -rotate-12 translate-x-10 translate-y-5"
						/>
						<img
							alt="me2"
							src={Me1}
							width={176}
							height={176}
							className="size-44 rounded-full bg-white/10 object-cover outline outline-white/30 z-10"
						/>
						<img
							alt="me3"
							src={Me3}
							width={176}
							height={176}
							className="size-44 rounded-full bg-white/10 object-cover outline outline-white/30 rotate-16 -translate-x-10 translate-y-5"
						/>
					</div>
					<div className="text-8xl font-semibold mt-14">
						<h1 className="font-moz ">Wanna know more</h1>
						<h1 className="h-24">
							about{" "}
							<span className="font-cycle bg-clip-text text-transparent bg-linear-to-r from-white to-slate-400">
								me?
							</span>
						</h1>
					</div>
					<div className="text-4xl flex flex-col items-start mt-14 gap-2">
						<p>Scroll down to see</p>
						<p className="text-dark-200">
							Stack, Skills, Experience, Education
						</p>
					</div>
				</div>
			</div>
			<hr className="border-white/30" />
			<section className="flex flex-col gap-5">
				<SectionHeader>Summary</SectionHeader>
				<p className="text-lg text-dark-200 font-medium tracking-normal">
					Results-driven Middle Full Stack Software Engineer with over 4 years
					of experience architecting, developing, and deploying highly scalable
					enterprise applications and web solutions. Proficient in the .NET
					ecosystem, Node.js (NestJS), and modern frontend frameworks including
					React and Next.js. Demonstrated success in leading engineering teams,
					delivering high-traffic e-commerce platforms, and orchestrating
					fault-tolerant microservices. Adept at creating seamless, minimalist
					user experiences with a focus on clean, maintainable code and agile
					methodologies. Seeking a remote position to leverage deep full-stack
					expertise to drive innovative engineering solutions.
				</p>
				<br />
				<div className='rounded-[48px] bg-dark-300 relative grid grid-cols-3 py-10 px-20 border-x border-b border-x-white/10 border-b-white/10 shadow-2xl shadow-white/5'>
					<div className='h-px w-full absolute top-0 left-0 bg-linear-to-r from-dark via-cyan-300/80 to-dark'></div>
					<div className='col-span-2'>
						<h1 className='font-semibold text-4xl'>Resume</h1>
						<p className='text-dark-200 text-xl mt-2'>Review my CV or download it to save.</p>
					</div>
				</div>
			</section>
			<hr className="border-white/30" />
			<section className="flex flex-col gap-18">
				<SectionHeader>Stack & Skills</SectionHeader>
				<div className="grid grid-cols-2 gap-x-20 gap-y-10">
					{skillsData.map((i) => (
						<SkillBlock key={i.title} {...i} />
					))}
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
				<div className='grid grid-cols-2 gap-10 *:gap-10'>
					<div className='flex flex-col items-end'>
						<Card><img src={Dyploma1} alt='dyploma1'  /></Card>
						<Card><img src={Dyploma5} alt='dyploma5' /></Card>
						<Card><img src={Dyploma3} alt='dyploma3' /></Card>
					</div>
					<div className='flex flex-col items-start'>
						<Card><img src={Dyploma2} alt='dyploma2' /></Card>
						<Card><img src={Dyploma6} alt='dyploma6' /></Card>
						<Card><img src={Dyploma4} alt='dyploma4' /></Card>
					</div>
				</div>
			</section>
		</div>
	);
}
