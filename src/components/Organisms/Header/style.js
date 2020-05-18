import styled from 'styled-components'
import { Color } from '../../../utils/designSystem'


export const Container = styled.div`
    display: flex;
    background-color: ${Color.white};
    height: 80px;
    border-bottom: 1px solid  ${Color.Text};
    justify-content: space-between;
`

export const Logo = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    @media(min-width: 1024px){
        width: 30%;
    }
`

export const Buttons = styled.div`
    display: none;
    align-items: center;
    justify-content: space-between;
    padding-right: 100px;
    @media(min-width: 1024px){
        width: 50%;
        display: flex;
    }
`