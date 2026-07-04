import { createFileRoute, Outlet } from "@tanstack/react-router";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { HeaderPhone } from "@/components/header-phone";

export const Route = createFileRoute("/_shared")({
	component: RouteComponent,
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
