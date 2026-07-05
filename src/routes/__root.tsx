import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import Lenis from "lenis";
import appCss from "../styles.css?url";
import "lenis/dist/lenis.css";
import { useEffect } from "react";
import { ThemeProvider } from '@/providers/theme-providers'

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "TanStack Start Starter",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
			smoothWheel: true,
			wheelMultiplier: 1,
			touchMultiplier: 2,
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<ThemeProvider defaultTheme="light" storageKey="my-app-theme">
				<body className="relative overflow-x-hidden bg-light dark:bg-dark">
					<div className="bg-light text-dark dark:text-light dark:bg-dark">
						{children}
					</div>
					<Scripts />
				</body>
			</ThemeProvider>
		</html>
	);
}
