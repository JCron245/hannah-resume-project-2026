import { SectionHeading } from "./SectionHeading";

export function Earlier() {
	return (
		<section aria-labelledby="earlier-heading">
			<div className="container">
				<SectionHeading id="earlier-heading">Earlier Experience</SectionHeading>
				<div className="earlier__entries">
					<div className="earlier__entry">
						<div className="earlier__header">
							<h3>100% Chiropractic</h3>
							<p className="text-muted">Office Manager · Nov 2019 – Jan 2022</p>
						</div>
						<p>
							Managed front-office operations for a high-volume chiropractic practice including scheduling, billing, insurance verification,
							and patient communications.
						</p>
					</div>
					<div className="earlier__entry">
						<div className="earlier__header">
							<h3>Chiro One Health Center</h3>
							<p className="text-muted">Office Manager · Oct 2018 – Nov 2019</p>
						</div>
						<p>Oversaw daily office operations, staff coordination, and patient intake workflows.</p>
					</div>
					<div className="earlier__entry">
						<div className="earlier__header">
							<h3>Earlier Roles</h3>
						</div>
						<p>
							Retail management and customer service experience in hospitality and retail environments, including team leadership, staff
							training, and daily operations (2014–2018).
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
