import { SectionHeading } from "./SectionHeading";

const OPERATIONS = [
	"Executive Support",
	"Calendar & Schedule Management",
	"Client Relationship Management",
	"Office Operations",
	"Workflow Coordination",
	"Documentation & Compliance",
	"Financial Plan Coordination",
	"Vendor Management",
	"Confidential Information Handling",
	"Multi-Provider Office Management",
	"Event Planning",
	"Problem Solving"
];

const TECHNICAL = [
	"Financial Services Administration",
	"Securities Compliance",
	"Insurance Verification",
	"Billing & Accounts",
	"Patient/Client Intake",
	"Microsoft Office Suite",
	"CRM Systems",
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
