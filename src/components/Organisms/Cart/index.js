import React from 'react'
import * as S from './style'
import { Col } from 'react-styled-flexboxgrid';

import LoaderLine from '../../Atoms/LoaderLine'


const Cart = () => {
    
    const Lines = [1, 2, 3]
    
    return (
        <S.Cart>
            <S.RowGroup>
                <Col xs={10}>
                    <LoaderLine/>
                </Col>
                <Col xs={12}>
                    <S.Line/>
                </Col>
                {Lines.map(line => 
                    <S.RowGroup key={line}>
                        <Col xs={8}>
                            <LoaderLine/>
                        </Col>
                        <Col xs={4}>
                            <LoaderLine/>
                        </Col>
                    </S.RowGroup>
                )}
                <Col xs={12}>
                    <S.Line/>
                </Col>
                <Col xs={8}>
                    <LoaderLine/>
                </Col>
                <Col xs={4}>
                    <LoaderLine/>
                </Col>
            </S.RowGroup>
        </S.Cart>
    )
}

export default Cart