import React from "react"
import { render } from "@testing-library/react"
import App from "."

test("for Heading text", () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/SpaceX Launch Programs/i)
  expect(linkElement).toBeInTheDocument()
})
