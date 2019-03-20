const initialState = {
    menu: []
};

export default function menuReducer (state = initialState, action) {
    switch(action.type) {
        case 'addPlat' : 
            return {
                ...state,
                menu: [...state.menu, {name: action.name, price: action.price}]
            };
        default:
            return {
                ...state
            };
    }
}
