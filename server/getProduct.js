const products = require("../products.json")


const getProduct = (request,response) => {
    const product = products.find(product => product.id ===  +request.params.id);
    if(!product) {
        response.status(500).json("Item not in list")
    }
    response.json(product)
}


module.exports = getProduct;