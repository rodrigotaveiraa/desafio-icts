const connection = require('../database/index')

module.exports = {
    async createPoliticas(req, res) {
        try {
            let resp = await connection("politicas").insert(req.body)
            res.send(resp)
        } catch (error) {
            console.log(error)
        }
    },

    async listPoliticas(req, res) {
        try {
            let resp = await connection("politicas").select('*')
            res.send(resp)
        } catch (error) {
            console.log(error)
        }
    },

    async getPolitica(req, res) {
        let {id} = req.params

        try {
            let resp = await connection("politicas").select('*').where('id', id).first()
            res.send(resp)
        } catch (error) {
            console.log(error)
        }
    },

    async updatePolitica(req, res) {
        let {id} = req.params

        try {
            let resp = await connection("politicas").where('id', id).update(req.body)
            res.send(resp)
        } catch (error) {
            console.log(error)
        }
    }
}