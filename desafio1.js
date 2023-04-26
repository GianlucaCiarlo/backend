class ProductManager{
    constructor(datos) {
    this.getProducts= []
}
    getProduct() {
        console.log(this.getProducts)
        return this.getProducts
    }
    getProductById(product_id) {
        let oneID = this.getProducts.find(each => each.id === product_id)

        if (oneID) { 
            return oneID
        }
        console.log ("No se encontró el producto")
        return null
    }




    addProduct({ title, description, price, thumbnail, code, stock }) {
        let id= 0
        if (this.getProducts.length === 0) {
            id= 0
        } else {
            let lastProduct = this.getProducts[this.getProducts.length - 1]
            id = lastProduct.id + 1

        }
        id  
        let product = { title, description, price, thumbnail, code, stock, id }
        this.getProduct.push(product)


    }



}
let products = new ProductManager()


products.addProduct({ title: "Pepsi 2,25L", description: "Gaseosa sabor Cola 2,25L.", price: 3000, thumbnail: "sin IMG", code: "pep225", stock: 10 })
products.addProduct({ title: "Mirinda 2,25L", description: "Gaseosa sabor Naranja 2,25L.", price: 3000, thumbnail: "sin IMG", code: "mir225", stock: 10 })
products.addProduct({ title: "7up 2,25L", description: "Gaseosa sabor lima 2,25L.", price: 3000, thumbnail: "sin IMG", code: "sev225", stock: 10 })
products.addProduct({ title: "Estancia Tinto", description: "Vino tinto malbec.", price: 2500, thumbnail: "sin IMG", code: "estMALB6", stock: 10 })
products.addProduct({ title: "Estancia Blanco", description: "Vino blanco chardonnay. ", price: 2500, thumbnail: "sin IMG", code: "estCHARD6", stock: 10 })


products.getProducts()
products.getProductById





