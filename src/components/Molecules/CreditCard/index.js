import React from 'react'
import * as S from './style'

import Visa from '../../../assets/visa.png'
import Master from '../../../assets/mastercard.png'

const CreditCard = ({changeSide, cardFlag, cardNumber, date, name, code}) => {
    return (
        <S.Container side={changeSide} type={cardNumber}>
            <div className="card">
             <div className="card__front card__part">
                 {cardFlag && cardNumber ? <img className="card__front-square card__square" src={cardFlag === "Visa" ? Visa : cardFlag === "Master" ? Master : null} alt="card" /> : <div className="card__front-square card__square"></div>}
                <p className="card_number">{cardNumber ? cardNumber : '**** **** **** ****'}</p>
                <div className="card__space-75">
                    <p className="card__info">{name ? name : 'NOME DO TITULAR'}</p>
                </div>
                <div className="card__space-25">
                    <p className="card__info">{date ? date : '00/00'}</p>
                </div>
            </div>
            
            <div className="card__back card__part">
                <div className="card__black-line"></div>
                <div className="card__back-content">
                <div className="card__secret">
                    <p className="card__secret--last">{code ? code : '***'}</p>
                </div>
                </div>
            </div>
            </div>            
        </S.Container>
    )
}

export default CreditCard