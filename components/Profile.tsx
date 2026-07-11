import { SectionHeading } from "./SectionHeading";

export function Profile() {
	return (
		<section aria-labelledby="profile-heading">
			<div className="container">
				<SectionHeading id="profile-heading">Executive Profile</SectionHeading>
				<p>
					I support senior financial professionals by managing day-to-day operations, coordinating client service workflows, maintaining
					compliance documentation, and ensuring nothing falls through the cracks.
				</p>
				<p>
					My background spans financial services administration, healthcare office management, client relationship coordination, and
					multi-location operations. I hold securities industry registrations and bring both the professionalism required for regulated
					environments and the initiative to continuously improve how work gets done.
				</p>
				<p>
					I am most effective in environments that need someone who can protect an executive&apos;s time, manage complex calendars and
					priorities, maintain strong client relationships, and bring order to high-volume operations.
				</p>
			</div>
		</section>
	);
}
