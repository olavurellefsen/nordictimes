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
  const selectedRegion = props.scenarioSelection.regionSelection;
  return(
    <MainArea>
      {(props.scenarioSelection.showWelcome===true) && <Welcome closeWelcome={props.closeWelcome} />}
      <Flex>
        <StackedBarChart chartName='CO2 Emissions' chartTitle='CO2 Emissions' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} 
        selectedRegion={selectedRegion} label="PJ" minY={0} maxY={150000}
        />
        <StackedBarChart chartName='Biomass Primary Supply' chartTitle='Biomass Primary Supply' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} 
        selectedRegion={selectedRegion} label="PJ" minY={0} maxY={960}
        />
        <StackedBarChart chartName='Biofuels Import & Domestic' chartTitle='Biofuels Import & Domestic' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} 
        selectedRegion={selectedRegion} label="PJ" minY={0} maxY={960}
        />
        <StackedBarChart chartName='Biofuels Consumption' chartTitle='Biofuels Consumption' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} 
        selectedRegion={selectedRegion} label="PJ" minY={0} maxY={960}
        />
        <StackedBarChart chartName='Captured CO2' chartTitle='Captured CO2' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} 
        selectedRegion={selectedRegion} label="Kt" minY={0} maxY={44000}
        />        
        <StackedBarChart chartName='Power Production' chartTitle='Power Production' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} 
        selectedRegion={selectedRegion} label="PJ" minY={0} maxY={2000}
        />
        <StackedBarChart chartName='District Heating Supply' chartTitle='District Heating Supply' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} 
        selectedRegion={selectedRegion} label="PJ" minY={0} maxY={400}
        />
        <StackedBarChart chartName='Industry fuel consumption' chartTitle='Industry Fuel Consumption' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} 
        selectedRegion={selectedRegion} label="PJ" minY={0} maxY={1800}
        />
        <StackedBarChart chartName='Transport Passenger Consumptio' chartTitle='Transport Passenger Consumption' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} 
        selectedRegion={selectedRegion} label="PJ" minY={0} maxY={720}
        />        
        <StackedBarChart chartName='Transport Freight Consumption' chartTitle='Transport Freight Consumption' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} 
        selectedRegion={selectedRegion} label="PJ" minY={0} maxY={480}
        />                
        <StackedBarChart chartName='Car Stock' chartTitle='Car Stock' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} 
        selectedRegion={selectedRegion} label="k vehicles" minY={0} maxY={12000}
        />
        <StackedBarChart chartName='Power Trade' chartTitle='Power Trade' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} 
        selectedRegion={selectedRegion} label="PJ" minY={-100} maxY={1200}
        />
        <StackedBarChart chartName='System Costs' chartTitle='System Costs' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} 
        selectedRegion={selectedRegion} label="M Euro" minY={0} maxY={160000}
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