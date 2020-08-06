import React, { useState, useEffect } from "react"

import MissionCard from "../MissionCard"
import Filters from "../Filters"

import {
  Header,
  Heading,
  Container,
  ContentContainer,
  MissionsContainer,
  Footer,
  FooterLabel,
  Name,
} from "./styledComponents"
import {
  getLandSuccess,
  getLaunchYear,
  getLaunchSuccess,
} from "../../utils/APIUtils"

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [launchYear, setLaunchYear] = useState<any>(null)
  const [isLaunchSuccess, setIsLaunchSuccess] = useState<any>(null)
  const [isLandingSuccess, setIsLandingSuccess] = useState<any>(null)

  async function fetchData() {
    setIsLoading(true)
    console.log(
      `https://api.spacexdata.com/v3/launches?limit=100${getLaunchSuccess(
        isLaunchSuccess
      )}${getLandSuccess(isLandingSuccess)}${getLaunchYear(launchYear)}`
    )
    const res = await fetch(
      `https://api.spacexdata.com/v3/launches?limit=100${getLaunchSuccess(
        isLaunchSuccess
      )}${getLandSuccess(isLandingSuccess)}${getLaunchYear(launchYear)}`
    )
    const response = await res.json()
    setData(response)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [launchYear, isLandingSuccess, isLaunchSuccess])

  const renderMissions = () => {
    if (data.length > 0) {
      return data.map((mission: any, index: number) => (
        <MissionCard
          key={`${mission.flight_name} ${index}`}
          mission={mission}
        />
      ))
    }
    return <>{`No missions found.`}</>
  }

  return (
    <Container>
      <Header>
        <Heading>SpaceX Launch Programs</Heading>
      </Header>

      <ContentContainer>
        <Filters
          onClickLaunchYear={setLaunchYear}
          onClickSuccessFulLanding={setIsLandingSuccess}
          onClickSuccessFulLaunch={setIsLaunchSuccess}
        />
        <MissionsContainer>
          {isLoading ? "Loading missions..." : renderMissions()}
        </MissionsContainer>
      </ContentContainer>
      <Footer>
        <FooterLabel>Developed by:</FooterLabel>
        <Name>Srikanth</Name>
      </Footer>
    </Container>
  )
}
