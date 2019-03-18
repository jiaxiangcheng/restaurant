const initialState = {
    username: null,
    password: null
};

export default function loginReducer (state = initialState, action) {
    switch(action.type) {
        case 'setUsername' : 
            return {
                ...state,
                username: action.username
            };
        default:
            return {
                ...state
            };
    }
}
