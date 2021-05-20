const userDb = require('../schemas/schema')

const getAll = async () => {
    return userDb.find()
}

module.exports = {
    upload: async (req, res) => {
        const {name, age, email, password} = req.body
        const user = new userDb()
        user.name = name
        user.age = age
        user.email = email
        user.password = password
        await user.save()
        const users = await getAll()
        res.send({users})
    }
}