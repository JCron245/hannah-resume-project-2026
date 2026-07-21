import { SectionHeading } from "./SectionHeading";

export function Profile() {
	return (
		<section aria-labelledby="profile-heading" className="cont">
			<SectionHeading id="profile-heading">Executive Profile</SectionHeading>
			<p>
				I drive operational excellence by implementing scalable business processes, leading cross-functional initiatives, and partnering
				with executive leadership to solve complex organizational challenges. My background spans financial services operations, healthcare
				clinic management, technology implementation, and team leadership across multi-location organizations.
			</p>
			<p>
				I hold an active FINRA Series 7 license and serve as a Registered Service Assistant, bringing both the regulatory expertise
				required for securities-regulated environments and the initiative to continuously improve how work gets done through technology,
				process standardization, and practical operational solutions.
			</p>
			<p>
				I am most effective in environments that need someone who can oversee daily operations, implement systems and workflows, lead
				onboarding and training, manage vendor and technology relationships, and bring structure to fast-moving teams.
			</p>
		</section>
	);
}
