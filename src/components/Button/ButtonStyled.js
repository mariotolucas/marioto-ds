import styled from 'styled-components'

export const ButtonStyled = styled.button`
  background-color:${props => props.theme.backgroundColor};
  border-radius: 3px;
  cursor: pointer;
  font-size: 1.1em;
  margin: 1em;
  padding: 0.25em 1em;
  outline: none;

  border: 2px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.color};
`
