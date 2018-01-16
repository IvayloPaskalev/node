const getUSer = (id, callback) => {
    const user = {
        id: id,
        name: 'Pesho'
    };
    callback(user, 23);
};

getUSer(23, (user, number) => {
    console.log(user);
}); 