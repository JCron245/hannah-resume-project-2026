import { SectionHeading } from "./SectionHeading";

export function Licenses() {
	return (
		<section aria-labelledby="licenses-heading">
			<div className="container">
				<SectionHeading id="licenses-heading">Licenses &amp; Certifications</SectionHeading>
				<div className="licenses__list">
					<p className="licenses__item">Series 7 — General Securities Representative</p>
					<p className="licenses__item licenses__item--pending">Series 66 — Uniform Combined State Law (In Progress)</p>
				</div>
			</div>
		</section>
	);
}
