export const addPlat = (name, price) => {
    return {
        type: 'addPlat',
        name: name,
        price: price
    };
};

export const setPlatName = (name) => {
    return {
        type: 'setPlatName',
        name: name
    };
};

export const setPlatPrice = (price) => {
    return {
        type: 'setPlatPrice',
        price: price
    };
};