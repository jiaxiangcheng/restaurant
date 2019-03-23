const initialState = {
    menu: [],
    platName: '',
    platPrice: ''
};

export default function menuReducer (state = initialState, action) {
    switch(action.type) {
        case 'setPlatName' :
            return {
                ...state, 
                platName: action.name
            };
        case 'setPlatPrice' :
            return {
                ...state, 
                platPrice: action.price
            };
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
