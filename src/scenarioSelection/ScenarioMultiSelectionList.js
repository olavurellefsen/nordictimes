import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ScenarioDivider = styled.div`
  height: 5px;
  `
const ScenarioHeader = styled.div`
  font-size: ${props => (props.narrowVersion ? '0.9em' : '1em')};
  padding: ${props => (props.narrowVersion ? '5px' : '0 12px 0 15px')};
  margin: 0px 0px 5px 0px;
  width: 100%;
  height: 26px;
  display: flex;
  align-items: center;
  `
const ScenarioOption = styled.div`
  font-size: ${props => (props.narrowVersion ? '0.7em' : '0.9em')};
  display: flex;
  align-items: center;
  height: ${props => (props.narrowVersion ? '12px' : '26px')};
  padding: ${props => (props.narrowVersion ? '5px' : '0 12px 0 15px')};
  position: relative;
  width: 100%;
  border-radius: 0;
  background-color: ${props => (props.selected ? 'gray' : (props.selected2 ? 'green' : 'inherit'))};
  color: ${props => (props.selected ? 'white' : (props.selected2 ? 'white' : 'rgb(184,176,183)'))};
  &:hover {
    cursor: pointer;
    background-color: ${props => (props.selected ? 'black' : (props.selected2 ? 'green' : '#555'))};
    > * {
      display: block;
      font-weight: ${props => (props.selected ? 'bold' : (props.selected2 ? 'bold' : 'normal'))};
    }
  }
  `

class ScenarioMultiSelectionList extends React.Component {

  handleChange = (event, value) => {
    this.props.updateRegionSelection(event, this.props.name, value)
  }

  render() {
    const { dimensionOptions, dimensionTitle, narrowVersion } = this.props
    let selectedValues=this.props.selectedValues;
    let scenarioOptions = dimensionOptions.map(option =>
      {
        let optionValue=option.name;
        return(
          <ScenarioOption
            key={option.id}
            value={optionValue}
            selected={selectedValues.indexOf(optionValue)>-1}
            onClick={(event) => this.handleChange(event, optionValue)}
            narrowVersion={narrowVersion}
          >
            {narrowVersion===false && option.short_description}
            {narrowVersion===true && option.ultra_short_description}
          </ScenarioOption>

        )
      })
    return (
      <div style={{display:'flex', flexWrap: 'wrap'}}>
        <ScenarioDivider/>
        <ScenarioHeader narrowVersion={narrowVersion}>{dimensionTitle}</ScenarioHeader>
          {scenarioOptions}
      </div>
    )
  }
}

ScenarioMultiSelectionList.propTypes = {
  updateRegionSelection: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  selectedValues: PropTypes.array.isRequired,
  dimensionOptions: PropTypes.array.isRequired,
  dimensionTitle: PropTypes.string.isRequired,
  narrowVersion: PropTypes.bool.isRequired
}

export default ScenarioMultiSelectionList;