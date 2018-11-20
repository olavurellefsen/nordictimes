import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Welcome from '../alert/Welcome'
import StackedBarChart from './StackedBarChart'
import StackedAreaChart from './StackedAreaChart'

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
  const selectedRegion = props.scenarioSelection.regionSelection;
  return(
    <MainArea>
      {(props.scenarioSelection.showWelcome===true) && <Welcome closeWelcome={props.closeWelcome} />}
      <Flex>
        <StackedBarChart chartName='Biomass Consumption' chartTitle='Biomass Consumption' selectedScenario={selectedScenario} 
        selectedRegion={selectedRegion} combinedChart={false} label="PJ" minY={0} maxY={960}
        showPotential={false}
        />
        <StackedBarChart chartName='Captured CO2' chartTitle='Captured CO2' selectedScenario={selectedScenario} 
        selectedRegion={selectedRegion} combinedChart={false} label="Kt" minY={0} maxY={44000}
        />        
        <StackedBarChart chartName='Power Production' chartTitle='Power Production' selectedScenario={selectedScenario} 
        selectedRegion={selectedRegion} combinedChart={false} label="PJ" minY={0} maxY={2000}
        />
        <StackedBarChart chartName='District Heating Supply' chartTitle='District Heating Supply' selectedScenario={selectedScenario} 
        selectedRegion={selectedRegion} combinedChart={false} label="PJ" minY={0} maxY={400}
        />
        <StackedBarChart chartName='Industry fuel consumption' chartTitle='Industry Fuel Consumption' selectedScenario={selectedScenario} 
        selectedRegion={selectedRegion} combinedChart={false} label="PJ" minY={0} maxY={1800}
        />        
        <StackedAreaChart chartName='Transport Passenger Consumption' chartTitle='Transport Passenger Consumption' selectedScenario={selectedScenario} 
        selectedRegion={selectedRegion} combinedChart={false} label="PJ" minY={0} maxY={720}
        />        
        <StackedAreaChart chartName='Transport Freight Consumption' chartTitle='Transport Freight Consumption' selectedScenario={selectedScenario} 
        selectedRegion={selectedRegion} combinedChart={false} label="PJ" minY={0} maxY={480}
        />                
        <StackedBarChart chartName='Car Stock' chartTitle='Car Stock' selectedScenario={selectedScenario} 
        selectedRegion={selectedRegion} combinedChart={false} label="k vehicles" minY={0} maxY={12000}
        />
        <StackedBarChart chartName='Power Trade' chartTitle='Power Trade' selectedScenario={selectedScenario} 
        selectedRegion={selectedRegion} combinedChart={false} label="PJ" minY={-100} maxY={1200}
        />
        <StackedBarChart chartName='System Costs' chartTitle='System Costs' selectedScenario={selectedScenario} 
        selectedRegion={selectedRegion} combinedChart={false} label="M Euro" minY={0} maxY={160000}
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