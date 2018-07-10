let getUserById = (id, callback) => {

    let user = {
        name: "Bob",
        id
    }

    callback(user);

}


getUserById(10, (user) => {

    console.log("User Found ", user);

});