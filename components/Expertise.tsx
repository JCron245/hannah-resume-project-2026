import { SectionHeading } from "./SectionHeading";

const OPERATIONS = [
	"Business Operations",
	"Operations Management",
	"Process Improvement",
	"Project Management",
	"Strategic Planning",
	"Executive Partnership",
	"Technology Implementation",
	"Vendor Management",
	"Budget Coordination",
	"Team Leadership",
	"Training & Onboarding",
	"Workflow Coordination",
	"Event Planning",
	"Problem Solving"
];

const TECHNICAL = [
	"Financial Services Administration",
	"Securities Compliance",
	"FINRA Regulations",
	"Insurance & Annuity Operations",
	"Payroll Management",
	"Website Management",
	"CRM Systems",
	"Document Management Systems",
	"Microsoft Office Suite",
	"Scheduling Systems",
	"HIPAA Compliance",
	"Regulatory Documentation"
];

function ExpertiseGroup({ title, items }: { title: string; items: string[] }) {
	return (
		<div className="expertise__group">
			<h3>{title}</h3>
			<ul className="expertise__list" role="list">
				{items.map((item) => (
					<li key={item} className="expertise__tag">
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}

export function Expertise() {
	return (
		<section id="expertise" aria-labelledby="expertise-heading">
			<div className="cont">
				<SectionHeading id="expertise-heading">Expertise</SectionHeading>
				<div className="expertise__grid">
					<ExpertiseGroup title="Executive & Operations Capabilities" items={OPERATIONS} />
					<ExpertiseGroup title="Industry & Technical Knowledge" items={TECHNICAL} />
				</div>
			</div>
		</section>
	);
}
