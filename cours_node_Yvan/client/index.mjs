import axios from "axios"

const getProducts = () => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3000/products')
            .then(function (response) {
                resolve(response)
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error)
                reject(error)
            })
    })
}

const addProduct = ((name, quantity) => {
    axios.post('http://localhost:3000/products', {
        name: name,
        quantity: quantity
    })
        .then(function (response) {
            console.log(response.data)
            return response
        })
        .catch(function (error) {
            // handle error
            console.log("")
            console.log(error)
        })
})

const getProductsAsync = async () => {
    try {
        const res = await axios.get('http://localhost:3000/products')
        console.log("getProductAsync :", res.data)
    } catch (err) {
        console.log("getProductAsync :", err)
    }
}

(async () => {
    const res = await getProducts()
    console.log('\nLISTE DES PRODUITS :', res.data)

    addProduct('poire', 5)

    getProductsAsync();

})()