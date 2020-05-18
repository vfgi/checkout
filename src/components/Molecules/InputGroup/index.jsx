import React from 'react';

import Input from '../../Atoms/Input';
import Label from '../../Atoms/Label';

import * as S from './styled';


const InputGroup = ({
  className,
  containerId,
  labelClass,
  htmlFor,
  label,
  type,
  name,
  placeholder,
  disabled,
  mask,
  value,
  maxlength,
  onChange,
  errorMessage,
  children,
  float,
  onBlur,
  id,
  ...rest
}) => {

  return (
    <S.InputGroup className={`${className} ${float ? 'label-float' : ''}`} id={containerId} {...rest}>
      <S.InputContainer>
        <Input
          className={errorMessage ? 'error' : ''}
          type={type}
          name={name}
          id={id}
          maxlength={maxlength}
          placeholder={placeholder}
          disabled={disabled}
          mask={mask}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />

        <Label className={labelClass} htmlFor={htmlFor}>
          {label}
        </Label>
      </S.InputContainer>


      {errorMessage && (
        <S.errorMessage>
          {errorMessage}
        </S.errorMessage>
      )}
    </S.InputGroup>
  );
};

export default InputGroup;
