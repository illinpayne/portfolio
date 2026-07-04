/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <explanation> */
import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
	{ id: "home", label: "Showcase", to: "/" },
	{ id: "about", label: "About Me", to: "/aboutme" },
];

export default function Header() {
    const pathname = useRouterState({ select: (s) => s.location.pathname });
    
    const navRef = useRef(null);
    const [pillConfig, setPillConfig] = useState({ left: 0, width: 0, opacity: 0 });

    useEffect(() => {
        if (!navRef.current) return;
        const activeElement = (navRef.current as any)?.querySelector('[data-active="true"]');

        if (activeElement) {
            setPillConfig({
                left: activeElement.offsetLeft,
                width: activeElement.offsetWidth,
                opacity: 1
            });
        }
    }, [pathname]);

    return (
        <nav 
            ref={navRef}
            className="relative rounded-4xl bg-pill p-1.5 flex gap-2 text-sm backdrop-blur-lg border border-white/10 h-fit shadow-lg shadow-white/5 group"
        >
            <motion.div
                className="absolute top-1.5 bottom-1.5 bg-white/5 border border-t-white/10 border-x-transparent border-b-white/10 rounded-4xl hover:bg-white/10 group-hover:bg-white/15 z-0"
                initial={false}
                animate={{
                    left: pillConfig.left,
                    width: pillConfig.width,
                    opacity: pillConfig.opacity
                }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />

            {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.to;

                return (
                    <Link
                        key={item.id}
                        to={item.to}
                        resetScroll={true}
                        data-active={isActive} 
                        className="relative z-10 rounded-4xl text-center flex items-center justify-center px-5 py-2"
                    >
                        <span>{item.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
