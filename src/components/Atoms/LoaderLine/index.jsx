import React from 'react';

import * as S from './styled';

const LoaderText = ({ numLines }) => (
  <>
    {Object.entries([...Array(numLines)]).map((value) => (
      <S.TextLoaderLine key={value} />
    ))}
  </>
);

export default LoaderText;
