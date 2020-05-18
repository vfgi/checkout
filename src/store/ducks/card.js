export const Types = {
  GET_CARD: 'card/GET_CARD',
  PUT_CARD: 'card/PUT_CARD',
};

export const Actions = {
  setCardInfo: (payload) => ({ type: Types.GET_CARD, payload }),
  putCardInfo: (payload) => ({ type: Types.PUT_CARD, payload }),
};


const initialState = {};

export default function CardValidation(state = initialState, action) {
  switch (action.type) {
    case Types.PUT_CARD:
      return console.log(action.payload);
    default: return state;
  }
}

export const Selectors = {
    setCardInfo: (state) => (state.cardValidation),
};
