import styled from 'styled-components'

export const Container = styled.div`
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.14);
  box-shadow: inset 0 2px 0 rgb(0 0 0 /2%);
  border-color: ${({ focus }) => (focus ? 'rgba(0,0,0,0.54)' : '')};
  border-radius: 16px;
  display: flex;
  height: 3.2rem;
  line-height: 3.2rem;
  input {
    outline: none;
    border: 0;
    padding: 0 3rem 0 14px;
    flex-grow: 1;
  }
`
