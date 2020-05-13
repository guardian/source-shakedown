import React from "react"
import { ReactElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { extractCritical } from "emotion-server"
import { htmlDocument } from "./html-document"

export const render = (title: string, element: ReactElement): string => {
	const { html, css } = extractCritical(renderToStaticMarkup(element))

	return htmlDocument({ title, html, css })
}
