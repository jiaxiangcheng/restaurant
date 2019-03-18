const initialState = {
    name: null
};

export default function menuReducer (state = initialState, action) {
    switch(action.type) {
        default:
            return {
                ...state
            };
    }
}
