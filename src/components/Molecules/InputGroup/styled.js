import styled from 'styled-components';
import { Color } from '../../../utils/designSystem'


export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 10px;
  position: relative;

  input {
    order: 1;
  }

  label {
    margin-bottom: 5px;
    order: 0;
    position: relative;
  }

  &.label-float {
    label {
      color: ${Color.Text};
      margin: 0;
      padding: 0;
      pointer-events: none;
      position: absolute;
      top: 20px;
      transition: all 0.3s ease-out;
    }

    input {
      &:focus + label,
      &:not(:placeholder-shown) + label {
        background-color: transparent;
        font-size: 12px;
        line-height: 1;
        padding: 3px 0px;
        top: -11px;
      }

      &:focus + label {
        color: ${Color.Text};
      }

      &:disabled + label {
        background-color: ${Color.Text};
        border-bottom: 0 -1px 0 1px ${Color.Text};
        color: ${Color.Text};
        padding-bottom: 0;
      }
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  order: 1;
  position: relative;
`;

export const errorMessage = styled.div`
  color: ${Color.Error};
  font-size: 12px;
  margin-top: 8px;
  order: 2;
`;
