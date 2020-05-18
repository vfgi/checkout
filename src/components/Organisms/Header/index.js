import React from 'react'
import * as S from './style'

import Logo from '../../../assets/HeaderLogo.svg'
import HeaderButton from '../../Atoms/Headerbutton'

function Header() {
    return (
        <S.Container>
            <S.Logo>
                <img src={Logo} alt="Logo"/>
            </S.Logo>
            <S.Buttons>
                <HeaderButton />
                <HeaderButton />
                <HeaderButton />
                <HeaderButton />
                <HeaderButton />
            </S.Buttons>
        </S.Container>
    )
}

export default Header