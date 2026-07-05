import { cn } from '@/lib/utils'

interface CardProps {
	children: React.ReactNode
	innerClassName?: string,
	outerClassName?: string,
	onClick?: () => void
}

export const Card: React.FC<CardProps> = ({ ...props }) => {
  return (
			<div
				onClick={props.onClick}
				className={cn(
					"relative group block rounded-[48px] border w-fit border-dark/10 dark:border-white/10 p-3 transition-all focus-visible:outline-cyan-400 hover:bg-dark/5 hover:dark:bg-white/15 hover:shadow-2xl hover:shadow-white/30",
					props.outerClassName,
				)}
			>
				<div className="w-2/3 h-px absolute top-0 left-1/2 -translate-x-1/2 bg-linear-to-r from-white/0 via-blue-500/80 dark:via-white/80 to-white/0" />
				<div
					className={cn(
						"relative overflow-hidden rounded-[36px] border border-dark/10 dark:border-white/60 border-b-dark/20 dark:border-b-white/20 transition-colors duration-300 ease-out bg-radial-[at_50%_0%] group-hover:from-white/20 group-hover:to-white/0 to-100% group-hover:border-white/50 w-fit",
						props.innerClassName,
					)}
				>
					<div className="w-full h-px absolute top-0 left-0 bg-linear-to-r from-white/0 via-blue-500/40 dark:via-white/40 to-white/0" />
					{props.children}
				</div>
			</div>
		);
};
