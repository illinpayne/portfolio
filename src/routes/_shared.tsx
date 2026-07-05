import { createFileRoute, Outlet } from "@tanstack/react-router";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { HeaderPhone } from "@/components/header-phone";

export const Route = createFileRoute("/_shared")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{ title: "Stas's showcases" },
			{ name: 'description', content: 'Wanna know more about me? Check my showcase!' },
			{ property: 'og:title', content: 'Stas.T Web Developers' },
			{ property: 'og:description', content: 'Wanna know more about me? Check my showcase!' },
			{
				name: 'Showcase by Stas.T',
				content: 'Open to see my showcases.',
			},
	],
  })
});

function RouteComponent() {
	return (
		<>
			<Header />
			<HeaderPhone />
			<div className="min-h-screen relative">
				<Outlet />{" "}
			</div>
			<Footer />
		</>
	);
}
