import React from 'react';

import * as S from './styled';

const Label = ({
  className, htmlFor, children, ...rest
}) => (
  <S.Label className={className} htmlFor={htmlFor} {...rest}>
    {children}
  </S.Label>
);
export default Label;
