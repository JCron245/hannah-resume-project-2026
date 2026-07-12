import { SectionHeading } from "./SectionHeading";

const IMPACTS = [
	"Provide ongoing executive support to two financial professionals, coordinating client plans, follow-ups, and administrative execution.",
	"Maintain confidential client and business records in a securities-regulated environment.",
	"Coordinate financial plan implementation, ensuring clients receive timely information and resources.",
	"Managed office operations for multi-provider chiropractic practices serving high patient volumes.",
	"Built and maintained front-office workflows across scheduling, billing, insurance verification, and patient communications.",
	"Streamlined administrative processes to improve response times and reduce scheduling conflicts."
];

function ImpactCard({ text }: { text: string }) {
	return (
		<li className="card impact__card">
			<p>{text}</p>
		</li>
	);
}

export function Impact() {
	return (
		<section id="impact" aria-labelledby="impact-heading" className="cont">
			<SectionHeading id="impact-heading">Selected Impact</SectionHeading>
			<ul className="impact__grid" role="list">
				{IMPACTS.map((text, i) => (
					<ImpactCard key={i} text={text} />
				))}
			</ul>
		</section>
	);
}
