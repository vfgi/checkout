import styled from 'styled-components';
import { Color } from '../../../utils/designSystem'

export const Input = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid ${Color.Text};
  color:  #000;
  font-size: 16px;
  line-height: 1.0;
  min-height: 44px;
  padding: 0px 0px;
  transition: border-color 0.35s ease-in-out, border-bottom 0.35s ease-in-out;
  width: 100%;

  &:focus,
  &.error,
  &:active {
    border-bottom: 2px solid ${Color.Text};
    outline: none;
  }

  &:focus,
  &:active {
    border-bottom: 0 0 0 2px ${Color.Text};
    min-height: 35px;
  }

  &.error,
  &.error:focus {
    border-bottom: 2px solid ${Color.Error};
  }

  &:disabled {
    background-color: ${Color.Text};
    border-bottom: 0 0 0 1px ${Color.Text};
    cursor: not-allowed;
  }
`;
