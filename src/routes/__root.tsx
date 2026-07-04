import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import Lenis from "lenis";
import Footer from "@/components/footer";
import Header from "@/components/header";
import appCss from "../styles.css?url";
import "lenis/dist/lenis.css";
import { useEffect } from "react";

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
				<title>Stas.T Software Engineer</title>
			</head>
			<body className="bg-dark text-light relative overflow-x-hidden">
				{/* <Header />
				<main className="min-h-screen">{children}</main>
				<Footer /> */}
				{children}
				<Scripts />
			</body>
		</html>
	);
}
