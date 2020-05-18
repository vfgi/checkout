import styled from 'styled-components'
import { Row, Col } from 'react-styled-flexboxgrid';

import { Color } from '../../utils/designSystem'


export const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 80px);
  background-color: ${Color.white};
  @media(min-width: 1024px){
    padding: 50px;
    background-color: ${Color.background};
  }
`

export const CardContainer = styled.div`
  background-color: ${Color.Error};
  width: 100%;
  height: 80%;
  padding-top: 30px;
  @media(min-width: 1024px){
    max-width: 320px;
    height: 100%;
  }
`

export const Card = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media(min-width: 1024px){
    margin-left: 45px;
  }
`

export const RowGroup = styled(Row)`
  margin-left: 0;
  margin-right: 0;
  width: 100%;
`;

export const Column = styled(Col)`
  padding-left: 0;
  padding-right: 0;
  max-width: 100%;
`;

export const ChooseNewCard = styled.div`
  display: flex;
  color: ${Color.white};
  width: 100%;
  padding: 15px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p{
    padding-left: 10px;
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 16px;
    max-width: 180px;
  }
  @media(min-width: 1024px){
    padding: 20px 0px 20px 42px;
    justify-content: flex-start;
  }
`

export const ChangePayment = styled.div`
  display: none;
  @media(min-width: 1024px){
    display: flex;
    padding: 20px 0px 20px 42px;
    justify-content: flex-start;
    color: ${Color.white};
    width: 100%;
    padding: 15px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    span{
      padding-left: 10px;
      font-weight: normal;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 12px;
    }
  }
`

export const Step = styled.div`
    display: flex;
    padding: 20px 0px 20px 10px;
    justify-content: flex-start;
    color: ${Color.white};
    width: 100%;
    padding: 15px;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    span{
      width: 100%;
      font-weight: bold;
      padding-left: 10px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 12px;
      display: flex;
      justify-content: center;
      p{
        padding-left: 10px;
        font-weight: normal;
      }
    }
  @media(min-width: 1024px){
    display: none;
    
  }
`

export const Form = styled(Row)`
  background-color: ${Color.white};
  width: 100%;
  height: 97%;
  margin: 0;
  @media(min-width: 1024px){
    padding-right: 20px;
  }
`

export const Button = styled.button`
  background-color: ${Color.Error};
  width: 100%;
  height: 51px;
  border-radius: 10px;
  box-shadow: 0;
  border: none;
  color: ${Color.white};
  font-size: 22px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const BreadCrumb = styled.div`
  display: none;
  @media(min-width: 1024px){
    display: grid;
    grid-template-columns:  22px 100px 22px 100px 22px 100px;
    grid-column-gap: 10px;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 40px;
    p{
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 12px;
      color: ${Color.Error};
      i{
        margin-left: 10px;
      }
    }
    i{
      font-size: 22px;
      color: ${Color.Error}
    }
  }
`

export const Number = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 22px;
  height: 22px;

  background: ${Color.white};
  border: 1px solid ${Color.Error};
  color: ${Color.Error};
  text-align: center;
  font-weight: bold;

  font-size: 12px;
`