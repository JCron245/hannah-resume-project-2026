"use client";

export function PrintButton() {
	return (
		<button onClick={() => window.print()} className="btn btn--primary no-print">
			Print / Save as PDF
		</button>
	);
}

export function PrintLink() {
	return (
		<button onClick={() => window.print()} className="print-link">
			Résumé
		</button>
	);
}
