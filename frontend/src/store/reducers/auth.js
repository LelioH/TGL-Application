export const Types = {
    LOG_IN: "USER/LOG_IN",
    LOG_IN_SUCCESS: "USER/LOG_IN_SUCCESS",
    LOG_OUT: "USER/LOG_OUT",
};

const initialState = {
    authenticated: false,
    token: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOG_IN_SUCCESS:
            return {
                authenticated: true,
                token: action.payload.token,
            };
        case Types.LOG_OUT:
            return {
                initialState,
            };
        default:
            return state;
    }
};

export const Creators = {
    LOG_IN_SUCCESS: (payload) => {
        return {
            type: Types.LOG_IN_SUCCESS,
            payload,
        };
    },
    LOG_IN: (payload) => {
        return {
            type: Types.LOG_IN,
            payload,
        };
    },
    LOG_OUT: () => ({
        type: Types.LOG_OUT,
    }),
};

export default authReducer;
