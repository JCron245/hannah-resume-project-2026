const personSchema = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Hannah Nam",
	jobTitle: "Executive Assistant & Business Operations Manager",
	sameAs: ["https://www.linkedin.com/in/hannah-nam"],
	knowsAbout: [
		"Executive Support",
		"Office Operations",
		"Financial Services Administration",
		"Client Relationship Management",
		"Calendar Management",
		"Compliance Documentation"
	],
	alumniOf: {
		"@type": "CollegeOrUniversity",
		name: "University of Colorado Denver"
	}
};

export function JsonLd() {
	return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />;
}
