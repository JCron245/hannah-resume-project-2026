import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeScript } from "@/components/ThemeScript";

export const metadata: Metadata = {
	title: "Hannah Nam | Executive Assistant & Business Operations",
	description:
		"Executive Assistant and Business Operations professional supporting financial services leaders with client coordination, compliance, and office management.",
	metadataBase: new URL("https://hannahnam.com"),
	openGraph: {
		title: "Hannah Nam | Executive Assistant",
		description:
			"Administrative and operations professional supporting financial services executives with client-service coordination and business operations.",
		type: "website",
		locale: "en_US"
	},
	twitter: {
		card: "summary",
		title: "Hannah Nam | Executive Assistant",
		description:
			"Administrative and operations professional supporting financial services executives with client-service coordination and business operations."
	},
	robots: { index: true, follow: true }
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<ThemeScript />
			</head>
			<body>
				<a href="#main" className="skip-link">
					Skip to content
				</a>
				<Header />
				<main id="main">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
