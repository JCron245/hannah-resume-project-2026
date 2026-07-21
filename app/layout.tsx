import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeScript } from "@/components/ThemeScript";

export const metadata: Metadata = {
	title: "Hannah Nam | Business Operations & Executive Partnership",
	description:
		"Business Operations professional with 7+ years of experience driving operational excellence, leading cross-functional initiatives, and partnering with executive leadership across financial services and healthcare organizations.",
	metadataBase: new URL("https://hannahnam.com"),
	openGraph: {
		title: "Hannah Nam | Business Operations & Executive Partnership",
		description:
			"Business Operations professional with 7+ years driving operational excellence, implementing scalable processes, and partnering with executive leadership in financial services.",
		type: "website",
		locale: "en_US"
	},
	twitter: {
		card: "summary",
		title: "Hannah Nam | Business Operations & Executive Partnership",
		description:
			"Business Operations professional with 7+ years driving operational excellence, implementing scalable processes, and partnering with executive leadership in financial services."
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
