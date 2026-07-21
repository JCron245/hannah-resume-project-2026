import { SectionHeading } from "./SectionHeading";
import { PrintLink } from "./PrintButton";

export function Contact() {
	return (
		<section id="contact" aria-labelledby="contact-heading" className="cont">
			<SectionHeading id="contact-heading">Let&apos;s Connect</SectionHeading>
			<p>
				I am open to Business Operations, Office Manager, Executive Assistant, Senior Executive Assistant, and Operations Leadership
				opportunities.
			</p>
			<p>
				Particularly interested in organizations that need someone who can drive operational excellence, implement scalable processes,
				lead technology and workflow improvements, and partner with executive leadership to solve complex challenges.
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
		</section>
	);
}
