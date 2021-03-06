import React from "react"

import { getValueBasedOnItsType } from "../../utils/CardUtils"

import {
  CardContainer,
  ImageContainer,
  Image,
  MissionName,
  MissionIdsList,
  CardLabel,
  MissionIdItem,
  LabelContainer,
  LabelValue,
} from "./styledComponents"

const renderMissionIds = (missionIds: Array<string>): React.ReactNode => {
  if (missionIds.length > 0) {
    return missionIds.map((id: string, index: number) => (
      <MissionIdItem key={`${id} ${index}`}>{id}</MissionIdItem>
    ))
  }
  return <>{`NA`}</>
}

const renderLabelWithValue = (
  label: string,
  value: string
): React.ReactNode => (
  <LabelContainer>
    <CardLabel>{`${label} :`}</CardLabel>
    <LabelValue>{getValueBasedOnItsType(value)}</LabelValue>
  </LabelContainer>
)

interface MissionCardProps {
  mission: any
}

const MissionCard = (props: MissionCardProps) => {
  const { mission } = props
  return (
    <CardContainer>
      <ImageContainer>
        <Image
          src={mission.links.mission_patch}
          alt={`${mission.mission_name} image`}
        />
      </ImageContainer>
      <MissionName>{`${mission.mission_name} #${mission.flight_number}`}</MissionName>
      <CardLabel>{`Mission Ids :`}</CardLabel>
      <MissionIdsList>{renderMissionIds(mission.mission_id)}</MissionIdsList>
      {renderLabelWithValue("Launch Year", mission.launch_year)}
      {renderLabelWithValue("Successful Launch", mission.launch_success)}
      {renderLabelWithValue(
        "Successful Landing",
        mission.rocket.first_stage.cores[0].land_success
      )}
    </CardContainer>
  )
}

export default MissionCard
