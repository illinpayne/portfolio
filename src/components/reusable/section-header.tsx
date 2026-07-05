
interface Props {
	children: React.ReactNode
}

export default function SectionHeader({children}: Props){
  return (
			<div className="flex gap-2 items-center">
				<div className="size-3 bg-dark dark:bg-white shadow-lg shadow-white rounded-full"></div>
				<h2 className="uppercase font-semibold tracking-wide text-dark-200">
					{children}
				</h2>
			</div>
		);
};
