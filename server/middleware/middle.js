const itemDb = require('../schemas/schema')

module.exports = {
    validator: async (req, res, next) => {
        function send(error, message) {
            res.send({error: error, message: message})
        }

        if (req.body.name.length < 3 || req.body.name.length > 50) {
            return send(true, 'Vardas turi būti 3-50 simbolių ilgio')
        }
        if (req.body.quantity.length === 0) {
            return send(true, 'Įveskite amžių')
        }
        if (req.body.price.length === 0) {
            return send(true, 'Įveskite slaptažodį')
        }
        if ((!/[^1-9]/.test(req.body.name))) {
            return send(true, 'Blogai įvestas vardas!')
        }
        if ((!/[^a-zA-Z]/.test(req.body.quantity))) {
            return send(true, 'Amžių turi sudaryti tik skaičiai!')
        }
        if ((!/[^a-zA-Z]/.test(req.body.price))) {
            return send(true, 'Kainą turi sudaryti tik skaičiai!')
        }
        next()

    },
    checkQuantity: async (req, res, next) => {
        let item = await itemDb.itemsSchema.find({_id: req.params.id})
        if (item[0].quantity === 0) {
            return res.send({error: true, message: 'Įrašų nėra'})
        }
        next()
    }
}