export const Types = {
  SET_BETS: 'TYPES/SET_BETS',
  RMV_BETS: 'TYPES/RVM_BETS',
  SET_TOTAL: 'TYPES/SET_TOTAL',
  CLEAR_CART: 'TYPES/CLEAR_CART',
};

const initialState = {
  cleared: false,
  bets: [],
  total: 0,
};

const typesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_BETS:
      return {
        ...state,
        bets: action.payload.bets,
        cleared: false,
      };
    case Types.RMV_BETS:
      return {
        ...state,
        bets: state.bets.filter((bet) => bet.id !== action.payload.id),
      };
    case Types.SET_TOTAL:
      return {
        ...state,
        total: action.payload.total,
      };
    case Types.CLEAR_CART:
      return {
        ...state,
        cleared: true,
        bets: [],
        total: 0,
      };

    default:
      return state;
  }
};

export const Creators = {
  SET_BETS: (payload) => ({
    type: Types.SET_BETS,
    payload,
  }),
  RMV_BETS: (payload) => ({
    type: Types.RMV_BETS,
    payload,
  }),
  SET_TOTAL: (payload) => ({
    type: Types.SET_TOTAL,
    payload,
  }),
  CLEAR_CART: () => ({
    type: Types.CLEAR_CART,
  }),
};

export default typesReducer;
