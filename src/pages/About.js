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

export default () => (
  <AboutContainer>
    <AboutHeader>About the tool</AboutHeader>
    <AboutHeader2>Lorum</AboutHeader2>
    <AboutBody>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet gravida tellus, non molestie arcu eleifend eget.
      Etiam porta ultrices vestibulum. Nulla placerat feugiat varius. Vestibulum ante ipsum primis in faucibus orci luctus et 
      ultrices posuere cubilia Curae; Aenean dictum vel enim a facilisis. Curabitur iaculis ultrices nisi.
    </AboutBody>
    <AboutHeader2>Ipsum</AboutHeader2>
    <AboutBody>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet gravida tellus, non molestie arcu eleifend eget.
      Etiam porta ultrices vestibulum. Nulla placerat feugiat varius. Vestibulum ante ipsum primis in faucibus orci luctus et 
      ultrices posuere cubilia Curae; Aenean dictum vel enim a facilisis. Curabitur iaculis ultrices nisi.
    </AboutBody>
    <AboutBody>
      <Link to='/'>Back to the main page</Link>
    </AboutBody>
  </AboutContainer>
)