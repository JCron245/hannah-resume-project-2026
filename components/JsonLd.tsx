const personSchema = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Hannah Nam",
	jobTitle: "Business Operations Manager & Executive Assistant",
	sameAs: ["https://www.linkedin.com/in/hannah-nam"],
	knowsAbout: [
		"Business Operations",
		"Operations Management",
		"Process Improvement",
		"Executive Partnership",
		"Financial Services Administration",
		"Technology Implementation",
		"Team Leadership",
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
