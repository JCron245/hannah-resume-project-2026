import { SectionHeading } from "./SectionHeading";

export function Career() {
	return (
		<section id="experience" aria-labelledby="career-heading">
			<div className="container">
				<SectionHeading id="career-heading">Career Progression</SectionHeading>
				<div className="career__company">
					<h3>Five Peaks Capital Group LLC</h3>
					<div className="career__timeline">
						<div className="career__role">
							<h4>Executive Assistant, Registered Service Assistant &amp; Business Operations Manager</h4>
							<p className="text-muted">Jul 2022 – Present</p>
							<ul className="career__outcomes">
								<li>Support two financial professionals with administrative, operational, and client-service responsibilities.</li>
								<li>Coordinate implementation of financial plans and ensure client follow-up.</li>
								<li>Handle sensitive client information with confidentiality, accuracy, and sound judgment.</li>
								<li>Manage office operations, vendor relationships, and day-to-day business logistics.</li>
								<li>Maintain regulatory documentation and support compliance workflows.</li>
								<li>Anticipate executive needs, proactively resolve issues, and protect leadership time.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
