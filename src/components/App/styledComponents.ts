import styled from "styled-components"

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  box-sizing: border-box;
  margin: auto;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Container = styled.div`
  background-color: lightgrey;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    align-items: center;
    justify-content: center;
  }
`

export const Header = styled.header`
  margin-left: 10px;
`

export const Heading = styled.h1`
  margin: 0px;
`

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`

export const MissionsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  max-width: 1037px;
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
  }
  @media (min-width: 700px) and (max-width: 1023px) {
    max-width: 514px;
  }
`

export const MessageContainer = styled.span`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const FooterLabel = styled.h3`
  margin: 0px;
`

export const Name = styled.span`
  margin-left: 5px;
`
