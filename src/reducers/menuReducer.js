const initialState = {
    menu: [],
    platName: '',
    platPrice: '',
    platCategory: ''
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
        case 'setPlatCategory' :
            return {
                ...state, 
                platCategory: action.category
            };
        case 'addPlat' : 
            return {
                ...state,
                menu: [...state.menu, {
                    name: action.name, 
                    price: action.price, 
                    category: action.category
                }]
            };
        default:
            return {
                ...state
            };
    }
}
