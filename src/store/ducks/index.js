import CardValidation from './card';

export default (state = {}, action) => ({
  cardValidation: CardValidation(state.cardValidation, action),
});