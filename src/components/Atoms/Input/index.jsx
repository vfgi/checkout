import React from 'react';

import * as S from './styled';

const Input = ({
  type,
  mask,
  name,
  placeholder,
  disabled,
  className,
  value,
  onBlur,
  onChange,
  dataTest,
  maxlength,
  ...rest
}) => (
      <S.Input
        value={value}
        type={type}
        maxLength={maxlength}
        name={name}
        className={className}
        placeholder={placeholder}
        disabled={disabled}
        dataTest={dataTest}
        onBlur={onBlur}
        onChange={onChange}
        {...rest}
      />
);
export default Input;
