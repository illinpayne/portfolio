
export interface ExperienceProps {
	company: string
	title: string
	description: string
	workTime: string
}

export default function ExperienceCard({...data}: ExperienceProps){
  return (
			<div className="grid grid-cols-2 max-sm:grid-cols-1">
				<h1 className="text-5xl font-semibold w-2/3 max-sm:text-3xl">
					{data.company}
				</h1>
				<div>
					<h2 className="font-semibold text-3xl max-sm:text-xl max-sm:mt-3">
						{data.title}
					</h2>
					<p className="text-dark-200 font-medium text-xl mt-1 max-sm:text-base">
						{data.workTime}
					</p>
					<p className="text-dark-200 text-xl mt-6">{data.description}</p>
				</div>
			</div>
		);
};
