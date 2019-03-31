export const addPlat = (name, price, category) => {
    console.log(category);
    console.log(name);
    return {
        type: 'addPlat',
        name: name,
        price: price,
        category: category
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

export const setPlatCategory = (category) => {
    return {
        type: 'setPlatCategory',
        category: category
    };
};

