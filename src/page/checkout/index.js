import React, { useState } from 'react'
import  * as S from './style'
import { Col } from 'react-styled-flexboxgrid';
import { useSelector, useDispatch } from 'react-redux';

import { Actions as CardActions } from '../../store/ducks/card';

import { useFormik } from 'formik';

import CreditcardCircle from '../../assets/Creditcard.svg'

import CreditCard from '../../components/Molecules/CreditCard'
import InputGroup from '../../components/Molecules/InputGroup';
import Select from '../../components/Atoms/Select'
import ArrowIcon from '../../components/Atoms/ArrowIcon'
import Cart from '../../components/Organisms/Cart'

import Validation from '../../utils/validators'

const InitialPage = () => {
    const [side, setSide] = useState(true)
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [code, setCode] = useState('')
    const [date, setDate] = useState('')
    const [flag, setFlag] = useState('')
    const dispatch = useDispatch()
    // const [cardInfo] = useSelector((state) => [state.cardValidation]);
    

    function cardMask(value){
        value=value.replace(/\D/g,"")
        value=value.replace(/(\d{4})(\d)/,"$1 $2")
        value=value.replace(/(\d{4})(\d)/,"$1 $2")
        value=value.replace(/(\d{4})(\d)/,"$1 $2")
        value=value.replace(/(\d{4})(\d)/,"$1 $2")
        return value
    }

    function dateMask(value){
        value=value.replace(/\D/g,"")
        value=value.replace(/(\d{2})(\d)/,"$1/$2")
        return value
    }

    function codeValidation(value){
        value=value.replace(/\D/g,"")
        return value
    }

    const cardFlag = (value) => {
        value = value.replace(" ", '')
        value = value.replace(" ", '')
        value = value.replace(" ", '')
        if (value.substring(0,1) === "4"){
            return setFlag("Visa")
        }
        else if (value.substring(0,1) === "5"){
            return setFlag("Master")
        }
        return value
    }

    const {
        handleChange,
        handleSubmit,
        errors,
        touched,
      } = useFormik({
        initialValues: {
          cardNumber: '',
          name: 'a',
          date: '10/12',
          code: '',
          installments: '',
        },
        validationSchema: Validation,
        onSubmit(inputValues) {
            dispatch(CardActions.putCardInfo(inputValues));
        }
    });

    const states = {
        className: 'my-select',
        variant: 'default',
        id: 'my-select2',
        options: [
            { label: "1x R$ 1.000 sem juros", value: 1},
            { label: "2x R$ 500,00 sem juros", value: 2},
            { label: "3x R$ 333.33 sem juros", value: 3},
            { label: "4x R$ 250,00 sem juros", value: 4},
            { label: "5x R$ 200,00 sem juros", value: 5},
            { label: "6x R$ 166,67 sem juros", value: 6},
            { label: "7x R$ 142,86 sem juros", value: 7},
            { label: "8x R$ 125,00 sem juros", value: 8},
            { label: "9x R$ 111,11 sem juros", value: 9},
            { label: "10x R$ 100,00 sem juros", value: 10},
            { label: "11x R$ 90,91 sem juros", value: 11},
            { label: "12x R$ 83,33 sem juros", value: 12},
        ]
      };

    return (
        <S.Container>
            <S.RowGroup center="xs">
                <S.Column xs={12} md={3}>
                    <S.Form>
                        <S.CardContainer>
                            <S.RowGroup start="xs">
                                <S.ChangePayment>
                                    <ArrowIcon direction="135deg"/>
                                    <span>Alterar a forma de pagamento</span>
                                </S.ChangePayment>
                                <S.Step>
                                    <ArrowIcon direction="135deg"/>
                                    <span>Etapa 2 <p> de 3</p></span>
                                </S.Step>
                            </S.RowGroup>
                            <S.RowGroup>
                            <S.Column xs={12}>
                                <S.ChooseNewCard>
                                    <img src={CreditcardCircle} alt="circle"/>
                                    <p>Adicione um novo cartão de crédito</p>
                                </S.ChooseNewCard>
                            </S.Column>
                            </S.RowGroup>
                            <S.RowGroup>
                                <S.Card>
                                    <CreditCard 
                                        cardFlag={flag}
                                        changeSide={side} 
                                        cardNumber={number}
                                        code={code}
                                        name={name}
                                        date={date}
                                    />
                                </S.Card>
                            </S.RowGroup>
                        </S.CardContainer>
                    </S.Form>
                </S.Column>
                <S.Column xs={12} md={6}>
                    <S.Form>
                        <S.RowGroup end="xs">
                            <Col xs={12} md={8}>
                                <S.RowGroup end="xs">
                                    <S.BreadCrumb>
                                        <i className="fa fa-check-circle"/>
                                        <p>
                                            Carrinho 
                                            <ArrowIcon direction="-45deg"/>

                                        </p>
                                        <S.Number>2</S.Number>
                                        <p>
                                            Pagamento
                                            <ArrowIcon direction="-45deg"/>
                                        </p>
                                        <S.Number>3</S.Number>
                                        <p>
                                            Confirmação
                                        </p>
                                    </S.BreadCrumb>
                                </S.RowGroup>
                            </Col>
                        </S.RowGroup>
                        <S.RowGroup end="md" center="xs">
                            <Col xs={9} md={10}>
                                <InputGroup 
                                    label="Número do cartão" 
                                    float
                                    name="cardNumber"
                                    placeholder=" "
                                    maxlength="19"
                                    onChange={(e) => {
                                        setNumber(cardMask(e.target.value))
                                        handleChange(e)
                                        cardFlag(e.target.value)
                                        }
                                    }
                                    value={number}
                                    errorMessage={touched.cardNumber ? errors.cardNumber : null}
                                />
                            </Col>
                        </S.RowGroup>
                        <S.RowGroup end="md" center="xs">
                            <Col xs={9} md={10}>
                                <InputGroup 
                                    label="Nome (igual ao do cartão)" 
                                    float 
                                    placeholder=" "
                                    maxlength="19"
                                    onChange={(e) => { 
                                        handleChange(e)
                                        setName(e.target.value)
                                        }
                                    }
                                    value={name}
                                    name="name"
                                    errorMessage={touched.name ? errors.name : null}
                                />
                            </Col>
                        </S.RowGroup>
                        <S.RowGroup end="md" center="xs">
                            <Col xs={6} md={7}>
                                <InputGroup 
                                    label="Validade" 
                                    float
                                    placeholder=" "
                                    maxlength="5"
                                    onChange={(e) => { 
                                        handleChange(e)
                                        setDate(dateMask(e.target.value))
                                        }
                                    }
                                    value={date}
                                    name="date"
                                    errorMessage={touched.date ? errors.date : null}
                                    />
                            </Col>
                            <Col xs={3} md={3}>
                                <InputGroup 
                                    label="CVV"
                                    float 
                                    placeholder=" "
                                    onChange={(e) => { 
                                        handleChange(e)
                                        setCode(codeValidation(e.target.value))
                                        }
                                    }
                                    value={code} 
                                    maxlength="3"
                                    onFocus={() => setSide(!side)} 
                                    onBlur={() => setSide(!side)}
                                    name="code"
                                    errorMessage={touched.code ? errors.code : null}
                                />
                            </Col>
                        </S.RowGroup>
                        <S.RowGroup end="md" center="xs">
                            <Col xs={9} md={10}>
                                <Select 
                                    name="installments"
                                    onChange={handleChange}
                                    {...states}
                                    defaultOptionText="Número de Parcelas"
                                    errorMessage={touched.installments ? errors.installments : null}
                                />
                            </Col>
                        </S.RowGroup>
                        <S.RowGroup end="md" center="xs">
                            <Col xs={9} md={5}>
                                <S.RowGroup end="md" center="xs">
                                    <S.Button onClick={handleSubmit}>Continuar</S.Button>
                                </S.RowGroup>
                            </Col>
                        </S.RowGroup>
                    </S.Form>
                </S.Column>
                <S.Column xs={12} md={3}>
                    <Cart />
                </S.Column> 
            </S.RowGroup>

        </S.Container>
    )
}

export default InitialPage