import { SectionHeading } from "./SectionHeading";

export function Education() {
	return (
		<section aria-labelledby="education-heading">
			<div className="container">
				<SectionHeading id="education-heading">Education</SectionHeading>
				<div className="education__entry">
					<h3>University of Colorado Denver</h3>
					<p>Bachelor of Science, Biology</p>
					<p className="text-muted">2012 – 2017</p>
				</div>
			</div>
		</section>
	);
}
