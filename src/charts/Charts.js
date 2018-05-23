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
        <StackedBarChart chartName='Captured CO2' chartTitle='Captured CO2' selectedScenario={selectedScenario} 
        selectedScenario2={selectedScenario2} combinedChart={false} label="Kt" minY={0} maxY={50000}
        />
        <StackedBarChart chartName='Power Production' chartTitle='Power Production' selectedScenario={selectedScenario} 
        selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={0} maxY={2000}
        />
        <StackedBarChart chartName='District Heating Supply' chartTitle='District Heating Supply' selectedScenario={selectedScenario} 
        selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={0} maxY={600}
        />
        <StackedBarChart chartName='Industry fuel consumption' chartTitle='Industry Fuel Consumption' selectedScenario={selectedScenario} 
        selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={0} maxY={1400}
        />        
        <StackedBarChart chartName='Car Stock' chartTitle='Car Stock' selectedScenario={selectedScenario} 
        selectedScenario2={selectedScenario2} combinedChart={false} label="k vehicles" minY={0} maxY={12000}
        />
        <StackedBarChart chartName='Power Trade' chartTitle='Power Trade' selectedScenario={selectedScenario} 
        selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={0} maxY={500}
        />
        <StackedBarChart chartName='System Costs' chartTitle='System Costs' selectedScenario={selectedScenario} 
        selectedScenario2={selectedScenario2} combinedChart={false} label="M Euro" minY={0} maxY={80000}
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