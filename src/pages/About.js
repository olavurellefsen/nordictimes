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
  AboutHeader.displayName = 'AboutHeader'
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
const BodyLink = styled.a`
  color: blue;
  text-decoration: underline;
  `
const AboutList = styled.ul`
  font-size: 1em;
  ${breakpoint('mobile','desktop')`
    font-size: 0.7em;
  `}  
  `

export default () => (
  <AboutContainer>
    <AboutHeader>About</AboutHeader>
    <AboutHeader2>Background</AboutHeader2>
    <AboutBody>
    Under the auspices of <BodyLink href='http://www.nordicenergy.org/'>Nordic Energy Research</BodyLink>, the experience
    gathered through the three Nordic Flagship projects <BodyLink href='http://www.nordicenergy.org/flagship/project-shift/'>
    SHIFT</BodyLink>, <BodyLink href='http://www.nordicenergy.org/flagship/flex4res/'>Flex4RES 
    </BodyLink> and <BodyLink href='http://www.nordicenergy.org/flagship/negative-co2/'>Negative CO<sub>2</sub></BodyLink> 
    is brought together to analyse the feasibility of future energy scenarios aiming at reaching 
    net carbon neutrality in the Nordic region by 2040, in compliance with the well below 2°C carbon budgets (IPCC, 2014). 
    </AboutBody>
    <AboutHeader2>Methodology</AboutHeader2>
    <AboutBody>
      The integrated modelling approach adopted combines the temporal and spatial detail of the power and heat model Balmorel 
      (Wiese et al., 2018) with the newly developed technology-rich energy system model TIMES-Nordic. Moreover, given the 
      ambitious climate targets considered, a new technology module is developed to include the techno-economic characteristics 
      of carbon capture, transport and storage options.
    </AboutBody>
    <AboutBody>
      The model TIMES-Nordic belongs to the TIMES model family (Loulou et al., 2016), and is a techno-economic, partial 
      equilibrium model assuming full foresight and perfectly competitive markets, with technological and economic projections 
      until 2050. In particular, TIMES-Nordic provides a system assessment of the whole energy sector for Denmark, Norway and 
      Sweden, including the representation of energy technologies and their competition in supplying the electricity, heat and 
      transport demands, under the overall objective of total cost minimization.
    </AboutBody>
    <AboutBody>
      Balmorel is a partial equilibrium model for simultaneous optimization of generation, transmission and consumption of 
      electricity and heat, covering the power and district heating systems of the Nordic and Baltic countries, as well as 
      for United Kingdom, Netherlands, Germany and Poland.
    </AboutBody>
    <AboutBody>
      For this analysis, TIMES-Nordic and Balmorel are iteratively soft-linked until solution convergence. Specifically, 
      for a certain climate target, TIMES-Nordic provides power and district heating demands, as well as CO2 emissions budgets, 
      to Balmorel. The latter calculates at a higher geographical and temporal detail the fuel mix and investments in the power 
      and district heating generation, as well as trade volume and electricity prices for the neighbouring power regions, 
      which are fed back to TIMES-Nordic.
    </AboutBody>
    <AboutBody>
      Prior to the iterative soft-linking, the two models are harmonized in terms of technical and economic characteristics 
      of conversion plants and their stock capacity, exogenous fuel prices, biomass potentials, power transmission capacity, 
      as well as energy and environmental policies whenever relevant.
    </AboutBody>
    <AboutHeader2>Contact</AboutHeader2>
    <AboutBody>
      For more information on the tool, or if you want to leave a comment, please contact:
    </AboutBody>
    <AboutList>
      <li>Giada Venturini</li>
      <li><BodyLink href='http://www.sys.man.dtu.dk/research/energy-systems-analysis'>Systems Analysis</BodyLink>,
      DTU Management Engineering, Technical University of Denmark</li>
      <li>E-mail: <BodyLink href='mailto:give@dtu.dk'>give@dtu.dk</BodyLink></li>
    </AboutList>
    <AboutHeader2>References</AboutHeader2>
    <AboutBody>
      IPCC. Climate Change 2014: Synthesis Report. Contribution of Working Groups I, II and III to the Fifth Assessment Report
      of the Intergovernmental Panel on Climate Change. Geneva, Switzerland, 2014.
    </AboutBody>
    <AboutBody>
      OECD/IEA, Nordic Energy Research, Technical University of Denmark, Ea Energianalyse A/S, VTT Technical Research Centre of 
      Finland, University of Iceland, Institute For Energy Technology, Profu Ab and IVL Swedish Environmental Research Institute. Nordic Energy Technology Perspectives. IEA Publishing, 2016.
    </AboutBody>
    <AboutBody>
      Wiese, F., Bramstoft, R., Koduvere, H., Pizarro Alonso, A. R., Balyk, O., Kirkerud, J. G., Tveten, Å. G., Bolkesjø, T. F., 
      Münster, M., Ravn, H. V. (2018). Balmorel open source energy system model. Energy Strategy Reviews, 20, 
      26–34. <BodyLink href='https://doi.org/10.1016/j.esr.2018.01.003'>https://doi.org/10.1016/j.esr.2018.01.003</BodyLink>
    </AboutBody>
    <AboutBody>
      R. Loulou, G. Goldstein, A. Kanudia, A. Lettila, and U. Remme. Documentation for the TIMES Model Part I: TIMES 
      Concepts and Theory, 2016.
    </AboutBody>    
    <AboutBody>
      <Link to='/'>Back to the main page</Link>
    </AboutBody>
  </AboutContainer>
)