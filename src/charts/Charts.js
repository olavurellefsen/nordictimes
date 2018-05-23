import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Welcome from '../alert/Welcome'
import StackedBarChart from './StackedBarChart'

const MainArea = styled.div`
  flex: 1;
  padding: 20px;
  `
const Flex = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: ${props => (props.direction==='column' ? 'column' : 'row')};
  `
const Charts = (props) => {
  const selectedScenario = props.scenarioSelection.scenarioSelection;
  const selectedScenario2 = props.scenarioSelection.scenarioSelection2;
  return(
    <MainArea>
      {(props.scenarioSelection.showWelcome===true) && <Welcome closeWelcome={props.closeWelcome} />}
      <Flex>
        <StackedBarChart chartName='Biomass Consumption' chartTitle='Biomass Consumption' selectedScenario={selectedScenario} 
        selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={0} maxY={1000}
        />
        <StackedBarChart chartName='District Heating Supply' chartTitle='District Heating Supply' selectedScenario={selectedScenario} 
        selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={0} maxY={400}
        />
        <StackedBarChart chartName='Power Production' chartTitle='Power Production' selectedScenario={selectedScenario} 
        selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={0} maxY={1600}
        />
        <StackedBarChart chartName='System Costs' chartTitle='System Costs' selectedScenario={selectedScenario} 
        selectedScenario2={selectedScenario2} combinedChart={false} label="M Euro" minY={0} maxY={80000}
        />
        <StackedBarChart chartName='Regional Power Trade' chartTitle='Regional Power Trade' selectedScenario={selectedScenario} 
        selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={0} maxY={800}
        />
        <StackedBarChart chartName='Power Trade Map' chartTitle='Power Trade Map' selectedScenario={selectedScenario} 
        selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={0} maxY={500}
        />

      </Flex>
    </MainArea>
  );
}

Charts.propTypes = {
  scenarioSelection: PropTypes.object.isRequired,
  closeWelcome: PropTypes.func.isRequired
}

export default Charts;