import styled, { keyframes } from 'styled-components';

export const loading = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.2;
  }

  100% {
    opacity: 1;
  }
`;

export const TextLoaderLine = styled.span`
  animation: ${loading} 2s linear infinite;
  background: linear-gradient(270deg, #00000011, #00000020, #00000011);
  background-size: 100%;
  display: inline-block;
  border-radius: 5px;
  margin-top: 5px;
  height: ${({ lineHeight }) => lineHeight || '1rem'};
  margin-bottom: ${({ lineSpacing }) => lineSpacing || '.4rem'};
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
`;
