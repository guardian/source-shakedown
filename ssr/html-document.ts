export const htmlDocument = ({
	title,
	html,
	css,
	ids,
}: {
	title: string
	html: string
	css: string
	ids: string[]
}) => {
	return `
		<doctype html>
		<html>
		<head>
			<title>${title}</title>
			<style data-emotion-css="${ids.join(" ")}">${css}</style>
		</head>
		<body>
		${html}
		</body>
		</html>
	`
}
