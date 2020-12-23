function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every(user => {
        if (user[pre]) {
            return true;
        } else {
            return false;
        }
    })
}

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");
