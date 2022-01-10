import styled from 'styled-components'

export const LocationStamp = styled.div`
  display: inline-block;
  color: #757575;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 12px;
  letter-spacing: -0.5px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: 5px;
    width: 7px;
    height: 1px;
    background: #757575;
    right: -8px;
  }
`
