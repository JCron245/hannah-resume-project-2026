import { PrintButton } from "./PrintButton";

export function Hero() {
	return (
		<section id="about" className="hero" aria-labelledby="hero-heading">
			<div className="container">
				<div className="hero__inner">
					<img src="/profile.jpg" alt="Hannah Nam" className="hero__photo" width={120} height={120} />
					<div>
						<h1 id="hero-heading">Hannah Nam</h1>
						<p className="hero__subtitle">Executive Assistant &amp; Business Operations Leader</p>
						<p className="hero__summary">
							Administrative and operations professional supporting financial services executives with client-service coordination, business
							operations, compliance support, and office management. Trusted partner who creates structure, anticipates needs, and keeps
							business moving.
						</p>
						<div className="hero__actions">
							<PrintButton />
							<a href="https://www.linkedin.com/in/hannah-nam" className="btn btn--outline" target="_blank" rel="noopener noreferrer">
								View LinkedIn
							</a>
						</div>
						<div className="hero__secondary">
							<a href="mailto:namhan1217@gmail.com">Email</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
