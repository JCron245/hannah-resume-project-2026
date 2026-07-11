export function ThemeScript() {
	const script = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||(!t&&window.matchMedia("(prefers-color-scheme:light)").matches)){document.documentElement.dataset.theme="light"}}catch(e){}})()`;
	return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
