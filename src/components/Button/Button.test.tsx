import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Button from "."

describe("Button component test cases", () => {
  const buttonText = "Click me!"
  const onClickCallback = jest.fn()
  it("should test for button text", () => {
    const { getByText } = render(
      <Button text={buttonText} onClick={onClickCallback} isClicked={false} />
    )
    getByText(buttonText)
  })
  it("should test for onClick callback and also test for buttontext in callback", () => {
    const { getByText } = render(
      <Button text={buttonText} onClick={onClickCallback} isClicked={false} />
    )
    fireEvent.click(getByText(buttonText))
    expect(onClickCallback).toBeCalledWith(buttonText)
  })
})
