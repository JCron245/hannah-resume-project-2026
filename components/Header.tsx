import { ThemeToggle } from "./ThemeToggle";
import { PrintLink } from "./PrintButton";

const NAV_LINKS = [
	{ href: "#about", label: "About" },
	{ href: "#impact", label: "Impact" },
	{ href: "#experience", label: "Experience" },
	{ href: "#expertise", label: "Expertise" },
	{ href: "#contact", label: "Contact" }
];

export function Header() {
	return (
		<header className="site-header no-print">
			<nav className="container site-nav" aria-label="Primary navigation">
				<a href="#main" className="site-nav__brand">
					Hannah Nam
				</a>
				<ul className="site-nav__links" role="list">
					{NAV_LINKS.map((link) => (
						<li key={link.href}>
							<a href={link.href}>{link.label}</a>
						</li>
					))}
					<li>
						<PrintLink />
					</li>
					<li>
						<a href="https://www.linkedin.com/in/hannah-nam" target="_blank" rel="noopener noreferrer">
							LinkedIn
						</a>
					</li>
				</ul>
				<ThemeToggle />
			</nav>
		</header>
	);
}
