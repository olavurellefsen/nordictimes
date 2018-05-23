import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import breakpoint from 'styled-components-breakpoint';

const AboutContainer = styled.div`
  padding: 0px 20px 20px 20px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: column;
  `
const AboutHeader = styled.h1`
  font-size: 2em;
  ${breakpoint('mobile','desktop')`
    font-size: 1.5em;
  `}
  font-weight: bold;
  `
const AboutHeader2 = styled.h2`
  font-size: 1.5em;
  ${breakpoint('mobile','desktop')`
    font-size: 1em;
  `}  
  font-weight: bold;
  `
const AboutBody = styled.p`
font-size: 1em;
${breakpoint('mobile','desktop')`
  font-size: 0.7em;
`}  
`

export default () => (
  <AboutContainer>
    <AboutHeader>Scenario descriptions</AboutHeader>
    <AboutHeader2>Nordic Base</AboutHeader2>
    <AboutBody>
      This scenario reproduces the assumptions of the study Nordic Energy Technology Perspectives - NETP (IEA, 2016), 
      including demands drivers for industry, transport and buildings, fuel prices projections, technical potentials of renewable 
      energy technologies and biomass resources. Moreover, a CO2 tax is imposed on CO2 emissions from all sectors, aligned to the 
      projected CO2 price in NETP (2016).
    </AboutBody>
    <AboutHeader2>Nordic CO2 2040</AboutHeader2>
    <AboutBody>
      This scenario builds up on the scenario Nordic_Base and analyses the introduction of carbon neutral and 
      carbon negative technologies, by adding a bound on the total CO2 emissions from all sectors to be zero from 2040 onwards.
    </AboutBody>
     <AboutBody>
       <Link to='/'>Back to the main page</Link>
     </AboutBody>
  </AboutContainer>
)
