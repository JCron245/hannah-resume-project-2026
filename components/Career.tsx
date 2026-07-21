import { SectionHeading } from "./SectionHeading";

export function Career() {
	return (
		<section id="experience" aria-labelledby="career-heading" className="cont">
			<SectionHeading id="career-heading">Career Progression</SectionHeading>
			<div className="career__company">
				<h3>Five Peaks Capital Group LLC</h3>
				<div className="career__timeline">
					<div className="career__role">
						<h4>Executive Assistant | Office Manager | Business Operations</h4>
						<p className="text-muted">Jul 2022 – Present</p>
						<h5>Business Operations &amp; Leadership</h5>
						<ul className="career__outcomes">
							<li>Oversee daily business operations supporting 2 executives and a team of 6+ financial professionals.</li>
							<li>Manage end-to-end insurance, investment, annuity, and advisory operational workflows while maintaining regulatory compliance.</li>
							<li>Serve as the firm&apos;s Registered Service Assistant supporting FINRA-regulated investment operations.</li>
							<li>Lead onboarding, training, and mentoring for new employees, advisors, and interns.</li>
							<li>Manage payroll, vendor relationships, budgeting support, facilities, office logistics, and purchasing.</li>
							<li>Coordinate licensing, compliance documentation, leadership meetings, client events, and operational reporting.</li>
							<li>Act as the central point of coordination between advisors, clients, custodians, insurance carriers, and business partners.</li>
							<li>Drive continuous process improvement by identifying inefficiencies and implementing practical operational solutions.</li>
						</ul>
						<h5>Selected Business Initiatives &amp; Operational Improvements</h5>
						<ul className="career__outcomes">
							<li>Evaluated, selected, and implemented operational software platforms by partnering with vendors, mastering new systems, and training the entire team.</li>
							<li>Designed and standardized operational workflows that improved efficiency, reduced processing errors, and increased consistency.</li>
							<li>Developed SOPs, onboarding resources, and process documentation for administrative, investment, and client-service workflows.</li>
							<li>Led the firm&apos;s transition to an organized electronic document management system by creating filing standards and training employees.</li>
							<li>Improved client onboarding by standardizing processes, aligning team workflows, and creating resources for advisors and clients.</li>
							<li>Created budgeting spreadsheets, operational trackers, and workflow tools that simplified reporting and daily operations.</li>
							<li>Manage and maintain the company website while coordinating technology updates and software rollouts.</li>
							<li>Serve as the primary technology resource, troubleshooting hardware, software, and user issues while coordinating third-party IT vendors.</li>
							<li>Partner with executive leadership to identify operational challenges and implement scalable business improvements.</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
