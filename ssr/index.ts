import { register } from "tsconfig-paths"
import "./server"

register({
	baseUrl: ".",
	paths: {
		"@guardian/src-foundations/typography": [
			"./node_modules/@guardian/src-foundations/typography/cjs",
		],
	},
})
