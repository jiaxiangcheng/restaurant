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
        case 'setPassword' :
            return {
                ...state,
                password: action.password
            }
        default:
            return {
                ...state
            };
    }
}
