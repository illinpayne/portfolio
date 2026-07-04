export interface SkillBlockProps {
	title: string
	skills: string
}

export const SkillBlock: React.FC< SkillBlockProps> = ({ ...props }) => {
  return (
	<div>
		<h2 className='text-lg font-medium'>{props.title}</h2>
		<p className='text-dark-200 font-medium mt-5 tracking-normal text-justify'>{props.skills}</p>
	</div>
  );
};
