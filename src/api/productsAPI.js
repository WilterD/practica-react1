import axios from 'axios'

const productApi = axios.create({
    baseURL: 'http://localhost:3000',
})

const getProducts = ()=> {
    productsApi.get('/products')
}

