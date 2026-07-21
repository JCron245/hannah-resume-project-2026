import { SectionHeading } from "./SectionHeading";

export function Licenses() {
	return (
		<section aria-labelledby="licenses-heading" className="cont">
			<SectionHeading id="licenses-heading">Licenses &amp; Certifications</SectionHeading>
			<div className="licenses__list">
				<p className="licenses__item">FINRA Series 7 — General Securities Representative (Active)</p>
				<p className="licenses__item">Registered Service Assistant</p>
			</div>
		</section>
	);
}
