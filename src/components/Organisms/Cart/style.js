import styled from 'styled-components'
import { Color } from '../../../utils/designSystem'
import { Row } from 'react-styled-flexboxgrid';



export const Cart = styled.div`
  display: none;
  @media(min-width: 1024px){
    display: flex;
    width: 100%;
    background-color: ${Color.white};
    height: 65%;
    padding: 40px 10px;
    margin-left: 15px;
    margin-top: 0px;
  }
`

export const RowGroup = styled(Row)`
  margin-left: 0;
  margin-right: 0;
  width: 100%;
`;

export const Line = styled.div`
  border-bottom: 1px solid #707070;
  width: 100%;
  height: 1px;
  margin: 20px 0px;
`
