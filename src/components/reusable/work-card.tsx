/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <explanation> */

import gsap from "gsap";
import { MoveUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface WorkProps {
	title: string;
	client: string;
	description: string;
	image: string;
	imageAlt: string;
	href: string;
	accentColor: string;
	isAi?: boolean;
}

export default function WorkCard({
	title,
	client,
	description,
	image,
	imageAlt,
	href = "#",
	accentColor,
	isAi,
}: WorkProps) {
	const cardRef = useRef<HTMLAnchorElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
		const card = cardRef.current;
		if (!card) return;

		const rect = card.getBoundingClientRect();
		const px = (e.clientX - rect.left) / rect.width; // 0 -> 1
		const py = (e.clientY - rect.top) / rect.height; // 0 -> 1

		const rotateY = (px - 0.5) * 20;
		const rotateX = (0.5 - py) * 20;

		gsap.to(card, {
			rotationX: rotateX,
			rotationY: rotateY,
			scale: 1.03,
			transformPerspective: 2000,
			transformOrigin: "center",
			duration: 0.5,
			ease: "power2.out",
		});
	};

	const handleMouseLeave = () => {
		const card = cardRef.current;
		if (!card) return;

		gsap.to(card, {
			rotationX: 0,
			rotationY: 0,
			scale: 1,
			duration: 0.6,
			ease: "power2.out",
		});
	};

	return (
		<a
			ref={cardRef}
			href={href}
			target="_blank"
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{ "--accent": accentColor } as React.CSSProperties}
			className={cn(
				"relative group block rounded-[48px] border border-dark/10 dark:border-white/5 p-3 focus-visible:outline-cyan-400",
				isAi
					? "bg-linear-to-br from-cyan-300/15 via-emerald-300/15 to-purple-300/15 shadow-2xl shadow-cyan-400/15"
					: "bg-light dark:bg-dark-300",
			)}
		>
			<div className="w-1/2 h-px absolute top-0 left-1/2 -translate-x-1/2 bg-linear-to-r from-white/0 via-blue-500/80 dark:via-white/80 to-white/0" />
			<div className="relative overflow-hidden rounded-[36px] border border-dark/10 border-b-dark/10 dark:border-white/30 dark:border-b-white/20 transition-colors duration-300 ease-out bg-radial-[at_50%_0%] from-white/10 group-hover:from-(--accent)/50 group-hover:to-white/0 to-100% p-11 pb-0 group-hover:border-white/50 max-sm:p-6 max-lg:p-8">
				<div className="w-full h-px absolute top-0 left-0 bg-linear-to-r from-white/0 via-white/40 to-white/0" />
				<div className="absolute top-0 left-0 bg-light dark:bg-dark-300 size-full rounded-[36px] -z-10"></div>
				<MoveUpRight
					className="
                  absolute right-6 top-6 size-9 text-white/70
                  transition-all duration-300 ease-out
                  group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-(--accent)"
					strokeWidth={1.75}
				/>
				<div className="pr-10">
					<h3 className="text-[32px] font-semibold dark:text-white max-sm:text-xl">
						{title}
					</h3>
					<p className="mt-2 text-dark-200 dark:text-white/60 text-lg max-sm:text-base">
						<span className="font-medium dark:text-white/80">{client}</span>
						{description ? <span> — {description}</span> : null}
					</p>
				</div>
				<div className="mt-12 mx-10 overflow-hidden rounded-t-xl transition-transform duration-500 group-hover:translate-y-0 translate-y-6 max-xl:group-hover:translate-y-6 max-xl:mx-0">
					<img
						src={image}
						alt={imageAlt || title}
						className="
                    block w-full h-auto object-cover object-top
                    transition-transform duration-500 ease-out"
					/>
				</div>
			</div>
		</a>
	);
}
