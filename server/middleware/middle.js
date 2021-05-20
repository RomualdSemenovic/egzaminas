// const userDb = require('../schemas/schema')
//
// module.exports = {
//     validator: async (req, res, next) => {
//         function send(error, message) {
//             res.send({error: error, message: message})
//         }
//
//         if (req.body.age.length === 0) {
//             return send(true, 'Įveskite amžių')
//         }
//         if (req.body.email.length === 0) {
//             return send(true, 'Įveskite pašto adresą')
//         }
//         if (req.body.password.length === 0) {
//             return send(true, 'Įveskite slaptažodį')
//         }
//         if ((!/[^1-9]/.test(req.body.name))) {
//             return send(true, 'Blogai įvestas vardas!')
//         }
//         if ((!/[^a-zA-Z]/.test(req.body.age))) {
//             return send(true, 'Amžių turi sudaryti tik skaičiai!')
//         }
//
//         next()
//
//     },
//     checkQuantity: async (req, res, next) => {
//         let item = await userDb.usersSchema.find({_id: req.params.id})
//         if (item[0].quantity === 0) {
//             return res.send({error: true, message: 'Prekių nėra'})
//         }
//         next()
//     }
// }