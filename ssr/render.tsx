import React, { ReactElement } from "react"
import { CacheProvider } from "@emotion/react"
import { renderToString } from "react-dom/server"
import createEmotionServer from "@emotion/server/create-instance"
import createCache from "@emotion/cache"
import { htmlDocument } from "./html-document"

export const render = (title: string, element: ReactElement): string => {
	const key = "custom"
	const cache = createCache({ key })
	const { extractCritical } = createEmotionServer(cache)
	const { html, css, ids } = extractCritical(
		renderToString(<CacheProvider value={cache}>{element}</CacheProvider>),
	)

	return htmlDocument({ title, html, css, ids })
}
