import styled from 'styled-components'
import { Color } from '../../../utils/designSystem'


export const Container = styled.i`
  border: solid ${Color.text};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(${(props) => props.direction});
`