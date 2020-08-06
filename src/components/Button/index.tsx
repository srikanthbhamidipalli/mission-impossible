import React, { useState } from "react"

import { StyledButton } from "./styledComponents"

interface ButtonProps {
  onClick: (value: string) => void
  text: string
  isClicked: boolean
}

const Button = (props: ButtonProps) => {
  const { onClick, text, isClicked } = props

  const onClickButton = (): void => {
    onClick(text)
  }

  return (
    <StyledButton onClick={onClickButton} isClicked={isClicked}>
      {text}
    </StyledButton>
  )
}

export default Button
