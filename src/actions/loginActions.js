export const setUsername = (name) => {
    return {
        type: 'setUsername',
        username: name
    };
};

export const setPassword = (password) => {
    return {
        type: 'setPassword',
        password: password
    };
};
