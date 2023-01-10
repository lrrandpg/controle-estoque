const { findByPk } = require('../Models/Product')
const Product = require('../Models/Product')


async function createProduct( req , res){
    try {
        const{
            item_name,
            description,
            amount,
            product_status,
            buyer_product
        } = req.body
        if ((item_name != undefined) && (amount != undefined) && (product_status != undefined)) {
            const product = await Product.create({
                item_name: item_name,
                description: description,
                amount: amount,
                product_status: product_status,
                buyer_product: buyer_product
            })
            res.status(200).json(product)
        } else {
            res.status(401).json("message: Por favor, preencha os campos obrigatórios")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

async function updateProduct (req, res ){
    try {
        const { id } = req.params
        const {
            item_name,
            description,
            amount,
            product_status,
            buyer_product
        } = req.body
        const product = await Product.findOne({ where: { id } })
        if (!product) {
            res.status(401).json({ message: 'Nenhum produto encontrado' })
        } else {
            const product = await Product.update({ item_name, description, amount, product_status, buyer_product }, { where: { id } })
            const product_updated = await Product.findOne({ where: { id } })
            res.status(200).json({ product_updated })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

async function listAllProducts (req, res){
    try {
        const product = await Product.findAll()
        if (product == undefined) {
            res.status(401).json({ message: 'Não existem produtos cadastrados' })
        } else {
            res.status(200).json({ product })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

async function deleteProducts (req, res){
    try {
        const {id} = req.params
        const product = await Product.findOne({ where: { id } })
        if (!product) {
            res.status(401).json({ message: 'Nenhum produto encontrado' })
        } else {
            await Product.destroy({ where: { id } })
            res.status(200).json({ message: 'Produto deletado com sucesso' })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

async function listAvailableProducts( req, res){
    try {
        const product = await Product.findAll({where: {product_status: false} })
        if (!product) {
            res.status(401).json({ message: 'Não existem produtos disponiveis no momento' })
        }else{
            res.status(200).json({product})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

async function listUnavailableProducts( req, res){
    try {
        const product = await Product.findAll({where: {product_status: true} })
        if (!product) {
            res.status(401).json({ message: 'Não existem produtos indisponiveis no momento' })
        }else{
            res.status(200).json({product})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    createProduct,
    updateProduct,
    listAllProducts,
    deleteProducts,
    listAvailableProducts,
    listUnavailableProducts
    /*listPurchasedProducts*/
}