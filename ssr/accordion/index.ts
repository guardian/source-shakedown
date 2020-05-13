export const render = ({ html, css }: { html: string; css: string }) => {
	return `
		<doctype html>
		<html>
		<head>
			<title>Accordion</title>
			<style>${css}</style>
		</head>
		<body>
		${html}
		</body>
		</html>
	`
}
