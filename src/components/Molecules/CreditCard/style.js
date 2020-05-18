import styled from 'styled-components'
import CreditCardEmpty from '../../../assets/CreditCardEmpty.png'
import CreditCard from '../../../assets/CreditCard.png'

export const Container = styled.div`
    margin-bottom: 30px;
    .card{
        width: 280px;
        height: 170px;
        perspective:600px;
        @media(min-width: 1024px){
            width: 290px;
            height: 170px;
        }
    }

    .card__part{
        box-shadow: 0px 6px 7px -6px #000;
        top: 0;
        position: absolute;
        z-index: 1000;
        left: 0;
        display: inline-block;
        width: 280px;
        height: 170px;
        background-image: url(${(props) => props.type ? CreditCard : CreditCardEmpty});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-radius: 8px;

        -webkit-transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        -moz-transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        -ms-transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        -o-transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transition: all .8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        @media(min-width: 1024px){
            width: 290px;
            height: 170px;
        }
    }

    .card__front{
        padding: 18px;
        transform: ${(props) => props.side ? 'rotateY(0)' : 'rotateY(-180deg)'};
        -moz-transform: ${(props) => props.side ? 'rotateY(0)' : 'rotateY(-180deg)'};
    }

    .card__back {
        padding: 18px 0;
        transform: ${(props) => props.side ? 'rotateY(-180deg)' : 'rotateY(0)'};
        -moz-transform: ${(props) => props.side ? 'rotateY(-180deg)' : 'rotateY(0)'};
    }

    .card__black-line {
        margin-top: 5px;
        height: 38px;
        background-color: #303030;
    }

    .card__logo {
        height: 16px;
    }

    .card__front-logo{
        position: absolute;
        top: 18px;
        right: 18px;
    }
    .card__square {
        border-radius: 5px;
        height: 20px;

    }

    .card_number {
        display: block;
        width: 100%;
        word-spacing: 3px;
        font-size: ${(props) => props.type ? '16px' : '24px'};
        letter-spacing: 2px;
        color: #fff;
        text-shadow: 0px 1px 2px #000000B3;
        text-align: left;
        margin-bottom: 20px;
        margin-top: 20px;
        @media(min-width: 1024px){
            font-size: ${(props) => props.type ? '16px' : '32px'};
            word-spacing: 4px;
        }
        @media(min-width: 768px){
            font-size: ${(props) => props.type ? '16px' : '24px'};
            word-spacing: 8px;
        }
    }

    .card__space-75 {
        width: 75%;
        float: left;
    }

    .card__space-25 {
        width: 25%;
        float: left;
    }

    .card__label {
        font-size: 10px;
        text-transform: uppercase;
        color: rgba(255,255,255,0.8);
        letter-spacing: 1px;
    }

    .card__info {
        margin-bottom: 0;
        font-size: 12px;
        line-height: 18px;
        color: #fff;
        word-spacing: 2px;
        text-shadow: 0px 1px 2px #000000B3;
        letter-spacing: 0px;
        text-transform: uppercase;
        @media(min-width: 768px){
            font-size: 12px;
            margin-top: 4px;
            word-spacing: 4px;
        }
        @media(min-width: 1024px){
            font-size: 14px;
            margin-top: 4px;
            word-spacing: 4px;
        }
    }

    .card__back-content {
        padding: 15px 15px 0;
    }
    .card__secret--last {
        color: #303030;
        text-align: right;
        margin: 0;
        font-size: 14px;
    }

    .card__secret {
        padding: 5px 12px;
        background-color: #fff;
        position:relative;
    }

    .card__secret:before{
        content:'';
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100%;
        width: calc(100% - 42px);
        border-radius: 0px;
        background: repeating-linear-gradient(180deg, #ededed, #ededed 2px, #979797 1px, #979797 4px);
    }

    .card__back-logo {
        position: absolute;
        bottom: 15px;
        right: 15px;
    }

    .card__back-square {
        position: absolute;
        bottom: 15px;
        left: 15px;
    }
`