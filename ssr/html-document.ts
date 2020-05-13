export const htmlDocument = ({
	title,
	html,
	css,
}: {
	title: string
	html: string
	css: string
}) => {
	return `
		<doctype html>
		<html>
		<head>
			<title>${title}</title>
			<style>${css}</style>
		</head>
		<body>
		${html}
		</body>
		</html>
	`
}
