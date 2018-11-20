import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Route, withRouter, Switch } from 'react-router-dom'
import ReactGA from 'react-ga'
import LeftMenu from './leftMenu/LeftMenu'
import LeftMenuMobile from './leftMenu/LeftMenu.mobile'
import Charts from './charts/Charts'
import About from './pages/About'
import ScenarioDescriptions from './pages/ScenarioDescriptions'
import scenarioCombinations from './data/scenarioCombinations'

ReactGA.initialize('UA-119781342-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const Page = styled.div`
    height: 100%;
    margin: 0px; 
    display: flex;
    box-sizing: border-box;
`
const Column = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`
const Content = styled.div` 
  flex-grow: 1;  /*ensures that the container will take up the full height of the parent container*/
  overflow-y: auto;  /*adds scroll to this container*/
  overflow-x: hidden;
`
const MainSwitch = styled(Switch)`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
`

export const changeScenario = (name, value) => ({
  [name]: value
});

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scenarioSelection: "Nordic CO2 Budget",
      scenarioSelection2: "",
      regionSelection: ['Denmark','Norway' ,'Sweden'],
      showWelcome: true,
    }
    this.scenarioCombinations = scenarioCombinations.scenarioCombinations
  }

  static propTypes = {
    history: PropTypes.object,
  }

  UpdateScenarioSelection = (e, name, value) => {
    e.preventDefault();
    if(this.state.scenarioSelection2!=="") {
      if(value===this.state.scenarioSelection) {
        this.setState(changeScenario("scenarioSelection", this.state.scenarioSelection2));
        this.setState(changeScenario("scenarioSelection2", ""));
      } else {
        if(value===this.state.scenarioSelection2) {
          this.setState(changeScenario("scenarioSelection2", ""));
        } else {
          this.setState(changeScenario("scenarioSelection2", value));
        }
      }
    } else {
      if(value!==this.state.scenarioSelection) {
        this.setState(changeScenario("scenarioSelection2", value));
      }      
    }
  }

  UpdateRegionSelection = (e, name, value) => {
    e.preventDefault();
    const regionSelection = this.state.regionSelection;
    if(regionSelection.indexOf(value)>-1) {
      if(regionSelection.length>1) {
        this.setState(changeScenario(name, regionSelection.filter(item => item !== value)));
      }
    } else {
      this.setState(changeScenario(name, regionSelection.concat(value)));
    }
    this.props.history.push('/');
  }  

  CloseWelcomeWidget = () => {
    this.setState({showWelcome: false});
    this.props.history.push('/');
  }

  render() { 
    return (
        <Page>
          <Column>
            <Content>
              <LeftMenu 
                scenarioSelection={this.state}
                scenarioCombinations={this.scenarioCombinations}
                updateScenarioSelection={this.UpdateScenarioSelection}
                updateRegionSelection={this.UpdateRegionSelection}
              />
              <LeftMenuMobile
                scenarioSelection={this.state}
                scenarioCombinations={this.scenarioCombinations}
                updateScenarioSelection={this.UpdateScenarioSelection}
                updateRegionSelection={this.UpdateRegionSelection}
              />
            </Content>
          </Column>
          <Column>
            <Content>
              <MainSwitch>
                <Route exact path='/' render={()=><Charts 
                  scenarioSelection={this.state}
                  closeWelcome={this.CloseWelcomeWidget}
                />}/>
                <Route path='/about' component={About} />
                <Route path='/descriptions' component={ScenarioDescriptions} />
              </MainSwitch>
            </Content>
          </Column>
        </Page>
    );
  }
}

export default withRouter(App)