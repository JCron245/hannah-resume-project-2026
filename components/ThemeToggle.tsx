"use client";

import { useCallback, useSyncExternalStore } from "react";

function getTheme() {
	if (typeof document === "undefined") return "dark";
	return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function subscribe(cb: () => void) {
	const observer = new MutationObserver(cb);
	observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
	return () => observer.disconnect();
}

export function ThemeToggle() {
	const theme = useSyncExternalStore(subscribe, getTheme, () => "dark");
	const dark = theme === "dark";

	const toggle = useCallback(() => {
		const next = dark ? "light" : "dark";
		document.documentElement.dataset.theme = next === "light" ? "light" : "";
		localStorage.setItem("theme", next);
	}, [dark]);

	return (
		<button
			onClick={toggle}
			className="btn--outline btn theme-toggle no-print"
			aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
			title={`Switch to ${dark ? "light" : "dark"} mode`}
		>
			{dark ? "☀️" : "🌙"}
		</button>
	);
}
