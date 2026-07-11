export function Footer() {
	return (
		<footer className="site-footer no-print">
			<div className="container site-footer__inner">
				<p>© {new Date().getFullYear()} Hannah Nam</p>
				<ul className="site-footer__links" role="list">
					<li>
						<a href="https://www.linkedin.com/in/hannah-nam" target="_blank" rel="noopener noreferrer">
							LinkedIn
						</a>
					</li>
					<li>
						<a href="mailto:namhan1217@gmail.com">Email</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
