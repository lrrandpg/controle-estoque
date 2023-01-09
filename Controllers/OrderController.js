const Order = require('../Models/Order')




async function createOrder(req, res) {
    try {
        const {
            item_name,
            description,
            amount,
            request_owner
        } = req.body
        if ((item_name != undefined) && (amount != null) && (request_owner != undefined)) {
            const order = await Order.create({
                item_name: item_name,
                description: description,
                amount: amount,
                request_owner: request_owner
            })
            res.status(200).json(order)
        } else {
            res.status(401).json("message: Por favor, preencha todos os campos")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


async function updateOrder(req, res) {
    try {
        const { id } = req.params
        const {
            item_name,
            description,
            amount,
            request_owner
        } = req.body
        const order = await Order.findOne({ where: { id } })
        if (!order) {
            res.status(401).json({ message: 'Nenhum pedido encontrado' })
        }else{
            const order = await Order.update({ item_name , description, amount, request_owner }, { where: { id } })
            const order_updated = await Order.findOne({ where: { id } })
            res.status(200).json({order_updated})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

async function listOrder(req, res){
    try {
        const order = await Order.findAll()
        if (order == undefined) {
            res.status(401).json({ message: 'Não existem pedidos cadastrados' })
        }else{
            res.status(200).json({ order })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

async function deleteOrder (req, res){
    try {
        
    } catch (error) {
        
    }
}


module.exports = {
    createOrder,
    updateOrder,
    listOrder,
    deleteOrder
}