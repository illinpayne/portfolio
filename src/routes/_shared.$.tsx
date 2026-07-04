import { createFileRoute, Link } from "@tanstack/react-router";
import { linkStyle } from "@/components/reusable/link-style";

export const Route = createFileRoute("/_shared/$")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col w-full h-[80vh] justify-center items-center">
			<div className="text-8xl font-semibold mt-14">
				<h1 className="font-moz ">Page not found</h1>
			</div>
			<div className="text-3xl flex flex-col items-start mt-8 gap-2">
				<p>
					Go to{" "}
					<Link to="/" className={linkStyle()}>
						showcases
					</Link>{" "}
					or{" "}
					<Link to="/aboutme" className={linkStyle()}>
						my personality
					</Link>
				</p>
			</div>
		</div>
	);
}
