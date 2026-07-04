import { createFileRoute, Outlet } from "@tanstack/react-router";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const Route = createFileRoute("/_shared")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<Header />
			<div className="min-h-screen">
				<Outlet />{" "}
			</div>
			<Footer />
		</>
	);
}
