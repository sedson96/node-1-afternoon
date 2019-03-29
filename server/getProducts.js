const products = require("../products.json")


const getProducts = (request,response) => {
    if(request.query.price){
        const product = products.filter(product => {
            if (product.price > request.query.price) {
                return product.price
            }
        })
        response.json(product)
    }
    response.json(products);
}


module.exports = getProducts;