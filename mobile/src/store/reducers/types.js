// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

export const Types = {
  GET_TYPES_REQUEST: 'TYPES/GET_TYPES_REQUEST',
  GET_TYPES_SUCCESS: 'TYPES/GET_TYPES_SUCCESS',
  GET_TYPES_ERROR: 'TYPES/GET_TYPES_ERROR',
};

const initialState = {
  types: [],
};

const typesReducer = (state = initialState, action) => {
  // const MySwal = withReactContent(Swal)

  switch (action.type) {
    case Types.GET_TYPES_REQUEST:
      return state;
    case Types.GET_TYPES_SUCCESS:
      return {
        types: action.payload.types,
      };
    case Types.GET_TYPES_ERROR:
      // MySwal.fire({
      //     toast: true,
      //     position: "top-end",
      //     icon: "error",
      //     title: `${action.payload.message}`,
      //     showConfirmButton: false,
      //     showCloseButton: true,
      //     timer: 3000,
      // });
      return state;
    default:
      return state;
  }
};

export const Creators = {
  GET_TYPES_REQUEST: () => ({
    type: Types.GET_TYPES_REQUEST,
  }),
  GET_TYPES_SUCCESS: (types) => ({
    type: Types.GET_TYPES_SUCCESS,
    payload: {
      types,
    },
  }),
  GET_TYPES_ERROR: (message) => ({
    type: Types.GET_TYPES_ERROR,
    payload: {
      message,
    },
  }),
};

export default typesReducer;
