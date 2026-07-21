import { SectionHeading } from "./SectionHeading";

const IMPACTS = [
	"Evaluated, selected, and implemented operational software platforms by partnering with vendors, mastering new systems, and training the entire team.",
	"Designed and standardized operational workflows that improved efficiency, reduced processing errors, and increased consistency.",
	"Developed SOPs, onboarding resources, and process documentation for administrative, investment, and client-service workflows.",
	"Led the firm's transition to an organized electronic document management system by creating filing standards and training employees.",
	"Improved client onboarding by standardizing processes, aligning team workflows, and creating resources for advisors and clients.",
	"Created budgeting spreadsheets, operational trackers, and workflow tools that simplified reporting and daily operations."
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
