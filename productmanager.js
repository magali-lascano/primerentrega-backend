class productManager {
    static productId = 0
    constructor() {
        this.products = []
    }
// addProduct
    addProduct(title, description, price, thumbnail, code, stock) {
        if (arguments.length === this.addProduct.length) {
            const indexCode = this.products.findIndex((product) => { return product.code === code.toUpperCase() })
            if (indexCode === -1) {
                productManager.productId++

                const newProduct = {
                    id: productManager.productId,
                    title: title.toUpperCase(),
                    description: description,
                    price: price,
                    thumbnail: thumbnail,
                    code: code.toUpperCase(),
                    stock: stock
                }
                this.products.push(newProduct)
            } else {
                console.log('Todos los campos son obligatorios')
            }
        }
    }
// getProducts
    getProducts() {
        return this.products
    }
//getProductById / Not found
    getProductById(id) {
        const productEncontrado = this.products.find((producto) => { producto.id === id })
        return productEncontrado || 'Not found'
    }
}

const manager = new productManager()
manager.addProduct('air trainer 1 sp high-top', 'Zapatillas Nike tipo Light Smoke', 216000, '', 'code000', 10)
manager.addProduct('darkmate cargo pants', 'Pantalones cargo negro', 17000, '', 'code001', 6)
manager.addProduct('vans old school v1', 'Zapatillas Vans Old School con Plataforma en negro', 36000, '', 'code002', 20)
console.log(manager.getProducts())