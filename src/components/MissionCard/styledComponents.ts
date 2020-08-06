import styled from "styled-components"

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 176px;
  max-height: 380px;
  padding: 15px;
  margin: 10px;
  margin-right: 5px;
  margin-top: 5px;
  background-color: white;
  border-radius: 7px;
  box-sizing: border-box;
  overflow: auto;
  @media (min-width: 1200px) {
    width: 220px;
    padding: 20px;
  }
`

export const CardLabel = styled.span`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`

export const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  align-items: center;
  justify-content: center;
  background-color: lightgrey;
  border-radius: 3px;
`

export const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
`

export const MissionName = styled.span`
  font-size: 13px;
  color: darkblue;
  font-weight: 800;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const MissionIdsList = styled.ul`
  margin-top: 5px;
  margin-bottom: 0px;
`

export const MissionIdItem = styled.li``

export const LabelContainer = styled.span`
  display: flex;
  margin-top: 10px;
`

export const LabelValue = styled.span`
  margin-left: 5px;
`
