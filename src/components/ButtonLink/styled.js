import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ButtonLink = styled(Link)`
  height: 32px;
  line-height: 30px;
  padding: 0 10px;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  font-size: 14px;
  color: #757575;
  display: inline-block;
  &:hover {
    color: #4f4f4f;
    background: #f7f7f7;
  }
`
