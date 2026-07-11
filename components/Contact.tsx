import { SectionHeading } from "./SectionHeading";
import { PrintLink } from "./PrintButton";

export function Contact() {
	return (
		<section id="contact" aria-labelledby="contact-heading">
			<div className="container">
				<SectionHeading id="contact-heading">Let&apos;s Connect</SectionHeading>
				<p>
					I am open to Executive Assistant, Senior Executive Assistant, Office Manager, Executive Operations, and Chief of Staff
					opportunities.
				</p>
				<p>
					Particularly interested in organizations that need someone who can protect leadership time, manage complex operations, maintain
					strong client and stakeholder relationships, and bring reliability to fast-moving environments.
				</p>
				<ul className="contact__links" role="list">
					<li>
						<a href="mailto:namhan1217@gmail.com">namhan1217@gmail.com</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/hannah-nam" target="_blank" rel="noopener noreferrer">
							LinkedIn
						</a>
					</li>
					<li>
						<PrintLink />
					</li>
				</ul>
			</div>
		</section>
	);
}
