
export interface ExperienceProps {
	company: string
	title: string
	description: string
	workTime: string
}

export default function ExperienceCard({...data}: ExperienceProps){
  return (
	<div className='grid grid-cols-2'>
      <h1 className='text-5xl font-semibold w-2/3'>{data.company}</h1>
      <div>
        <h2 className='font-semibold text-3xl'>{data.title}</h2>
        <p className='text-dark-200 font-medium text-xl mt-2'>{data.workTime}</p>
        <p className='text-dark-200 text-xl mt-6'>{data.description}</p>
      </div>
    </div>
  );
};
