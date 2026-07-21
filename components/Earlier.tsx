import { SectionHeading } from "./SectionHeading";

export function Earlier() {
	return (
		<section aria-labelledby="earlier-heading" className="cont">
			<SectionHeading id="earlier-heading">Earlier Experience</SectionHeading>
			<div className="earlier__entries">
				<div className="earlier__entry">
					<div className="earlier__header">
						<h3>100% Chiropractic Wellness Center</h3>
						<p className="text-muted">Office Manager / Clinical Director · 2019 – 2022</p>
					</div>
					<p>
						Directed daily clinic operations, staffing, scheduling, billing, inventory management, and financial reporting. Led onboarding,
						employee training, workflow improvements, and served as HIPAA Compliance Officer. Partnered with leadership on budgeting,
						reporting, and operational planning.
					</p>
				</div>
				<div className="earlier__entry">
					<div className="earlier__header">
						<h3>Chiro One Health Center</h3>
						<p className="text-muted">Manager / Administrator · 2019</p>
					</div>
					<p>
						Managed front-office operations including payroll, billing, scheduling, reporting, and insurance coordination while improving
						administrative efficiency.
					</p>
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
		</section>
	);
}
