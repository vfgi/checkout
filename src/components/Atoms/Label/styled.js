import styled from 'styled-components';
import { Color } from '../../../utils/designSystem'

export const Label = styled.label`
  color: ${Color.Text};
  display: inline-block;
  font-size: 14px;
  font-weight: normal;
  font-family: Verdana;
  @media(min-width: 768px){
    font-size: 17px;
  }
`;
