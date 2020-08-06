import React, { Component } from "react"

import { years } from "../../constants/UIConstants"

import Button from "../Button"

import {
  FiltersContainer,
  FiltersHeader,
  FilterLabel,
  HorizontalLine,
  OptionsContainer,
} from "./styledComponents"

interface FiltersProps {
  onClickLaunchYear: (clickedYear: string) => void
  onClickSuccessFulLaunch: (isLaunchSuccess: boolean) => void
  onClickSuccessFulLanding: (isLandingSuccess: boolean) => void
}

interface StateType {
  selectedLaunchYear: any
  isLaunchSuccessful: any
  isLandingSuccessful: any
}

class Filters extends Component<FiltersProps, StateType> {
  constructor(props: FiltersProps) {
    super(props)
    this.state = {
      selectedLaunchYear: null,
      isLaunchSuccessful: null,
      isLandingSuccessful: null,
    }
  }

  setSelectedLaunchYear = (value: string) => {
    const { onClickLaunchYear } = this.props
    this.setState({ selectedLaunchYear: value })
    onClickLaunchYear(value)
  }

  setIsLaunchSuccessful = (value: boolean) => {
    const { onClickSuccessFulLaunch } = this.props
    this.setState({ isLaunchSuccessful: `${value}` })
    onClickSuccessFulLaunch(value)
  }

  setIsLandingSuccessful = (value: boolean) => {
    const { onClickSuccessFulLanding } = this.props
    this.setState({ isLandingSuccessful: `${value}` })
    onClickSuccessFulLanding(value)
  }

  render() {
    return (
      <FiltersContainer>
        <FiltersHeader>Filters</FiltersHeader>
        <FilterLabel>Launch Year</FilterLabel>
        <HorizontalLine />
        <OptionsContainer>
          {years.map((year) => (
            <Button
              key={year}
              text={year}
              onClick={this.setSelectedLaunchYear}
              isClicked={this.state.selectedLaunchYear === year}
            />
          ))}
        </OptionsContainer>
        <FilterLabel>Successful Launch</FilterLabel>
        <HorizontalLine />
        <OptionsContainer>
          <Button
            key={"LAUNCH_SUCCESS_YES"}
            text={"True"}
            onClick={this.setIsLaunchSuccessful}
            isClicked={this.state.isLaunchSuccessful === "True"}
          />
          <Button
            key={"LAUNCH_SUCCESS_NO"}
            text={"False"}
            onClick={this.setIsLaunchSuccessful}
            isClicked={this.state.isLaunchSuccessful === "False"}
          />
        </OptionsContainer>
        <FilterLabel>Successful Landing</FilterLabel>
        <HorizontalLine />
        <OptionsContainer>
          <Button
            key={"LANDING_SUCCESS_YES"}
            text={"True"}
            onClick={this.setIsLandingSuccessful}
            isClicked={this.state.isLandingSuccessful === "True"}
          />
          <Button
            key={"LANDING_SUCCESS_NO"}
            text={"False"}
            onClick={this.setIsLandingSuccessful}
            isClicked={this.state.isLandingSuccessful === "False"}
          />
        </OptionsContainer>
      </FiltersContainer>
    )
  }
}

export default Filters
