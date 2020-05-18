import React from 'react';

import * as S from './styled';
import ArrowIcon from '../ArrowIcon'

const Select = ({
  className,
  id,
  defaultOptionText,
  defaultValue,
  options,
  variant,
  errorMessage,
  children,
  disabled,
  ...rest
}) => (
  <S.SelectContainer className={`${className}`}>
    <S.Select
      className={`${className} ${errorMessage ? 'error' : ''}`}
      variant={variant}
      id={id}
      disabled={disabled}
      {...rest}
    >
      <option value="" disabled="" hidden="hidden">
        {defaultOptionText}
      </option>
      {options.map(({ label, value = '' }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </S.Select>
    <S.ArrowIcon>
      <ArrowIcon direction={"40deg"}/>
    </S.ArrowIcon>

    {errorMessage && <S.errorMessage>{errorMessage}</S.errorMessage>}
  </S.SelectContainer>
);

export default Select;
