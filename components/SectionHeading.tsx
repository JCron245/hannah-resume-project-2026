interface SectionHeadingProps {
	id: string;
	children: React.ReactNode;
}

export function SectionHeading({ id, children }: SectionHeadingProps) {
	return <h2 id={id}>{children}</h2>;
}
