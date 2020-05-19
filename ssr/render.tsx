import React, { ReactElement } from "react"
import { CacheProvider } from "@emotion/core"
import { renderToString } from "react-dom/server"
import createEmotionServer from "create-emotion-server"
import createCache from "@emotion/cache"
import { htmlDocument } from "./html-document"

export const render = (title: string, element: ReactElement): string => {
	const cache = createCache()
	const { extractCritical } = createEmotionServer(cache)
	const { html, css, ids } = extractCritical(
		renderToString(<CacheProvider value={cache}>{element}</CacheProvider>),
	)

	return htmlDocument({ title, html, css, ids })
}
