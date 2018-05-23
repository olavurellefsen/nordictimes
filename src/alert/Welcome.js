import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Octicon from 'react-octicon'

const AlertContainer = styled.div`
  padding: 10px;
  margin-bottom: 30px;
  border-width: 1px;
  border-color: blue;
  border-style: solid;
  background-color: mintcream;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  flex-direction: row;
`
const AlertBody = styled.div`
  font-size: 1em;
  margin: 0px;
  align-self: center;
  flex: 1;
`
const AlertBodyParagraph = styled.p`
`
const CloseWindowIcon = styled.div`
  margin: 0px;
  border: 0;
  flex-shrink: 0;
  align-self: flex-start;
  :hover {
    cursor: pointer;
  }
`

const Welcome = (props) => (
  <AlertContainer>
    <AlertBody>
      <AlertBodyParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet gravida tellus, non molestie arcu eleifend eget.
        Etiam porta ultrices vestibulum. Nulla placerat feugiat varius. Vestibulum ante ipsum primis in faucibus orci luctus 
        et ultrices posuere cubilia Curae; Aenean dictum vel enim a facilisis. Curabitur iaculis ultrices nisi. 
      </AlertBodyParagraph>
    </AlertBody>
    <CloseWindowIcon onClick={(event) => props.closeWelcome(event, 'showWelcome', false)}>
      <Octicon name='x' />
    </CloseWindowIcon>
  </AlertContainer>
)

Welcome.propTypes = {
  closeWelcome: PropTypes.func.isRequired
}

export default Welcome