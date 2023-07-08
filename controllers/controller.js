const User = require("../models/user")


const test = (req, res) => {
    res.send("Test is working")
}

const user = (req, res) => {
    res.send("User is working")
}


module.exports = {
    test,
    user
}