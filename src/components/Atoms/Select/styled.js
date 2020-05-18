import styled from 'styled-components';
import { Color } from '../../../utils/designSystem'

export const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  border-radius: none;

  select {
    border-radius: 0px;
    &:focus {
      color: #000;
    }

    &:disabled {
      background-color: ${Color.Text};
      border-bottom: 1px solid ${Color.Text};
      color: ${Color.Text};
      cursor: pointer;
    }

    &.error,
    &.error:focus {
      color: ${Color.Error};
    }
  }
`;

export const Select = styled.select`
  appearance: none;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid ${Color.Text};
  color: ${Color.Text};
  font-size: 16px;
  font-style: normal;
  min-height: 40px;
  position: relative;
  width: 100%;
  cursor: pointer;

  &:focus,
  &.error,
  &:active {
    border-bottom: 2px solid ${Color.Text};
    outline: none;
  }

  &:focus,
  &:active {
    border-bottom: 2px solid ${Color.Text};
    color: #000;
  }

  &.error,
  &.error:focus {
    border-bottom: 2px solid ${Color.Error};
  }

  &:disabled {
    background-color: ${Color.Text};
    border-bottom: 1px solid ${Color.Text};
    cursor: pointer;
  }
`

export const ArrowIcon = styled.i`
  align-content: center;
  bottom: 0;
  display: flex;
  height: 8px;
  justify-content: center;
  left: auto;
  position: absolute;
  right: 0;
  top: 18px;
  width: 40px;
`;

export const errorMessage = styled.div`
  color: ${Color.Error};
  font-size: 12px;
  margin-top: 8px;
`;
