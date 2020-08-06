import styled from "styled-components"

interface Props {
  isClicked: boolean
}

export const StyledButton = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 18px;
  border-radius: 5px;
  background-color: ${(props) => (props.isClicked ? "#54a806" : "#cbf5a3")};
  border: none;
  box-sizing: border-box;
  &:active {
    border: none;
  }
  margin-bottom: 10px;
  outline: none;
  cursor: pointer;
`
