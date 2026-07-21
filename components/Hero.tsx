import { PrintButton } from "./PrintButton";

export function Hero() {
	return (
		<section id="about" className="hero cont" aria-labelledby="hero-heading">
			<div className="hero__header">
				<img src="/profile.webp" alt="Hannah Nam" className="hero__photo" width={120} height={120} />
				<div className="hero__titles">
					<h1 id="hero-heading">Hannah Nam</h1>
					<p className="hero__subtitle">Business Operations Leader | Executive Partnership</p>
				</div>
			</div>
			<p className="hero__summary">
				Business Operations professional with 7+ years of experience driving operational excellence, leading cross-functional initiatives,
				implementing scalable business processes, and partnering with executive leadership across financial services and healthcare
				organizations. Active FINRA Series 7 licensed professional.
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
		</section>
	);
}
