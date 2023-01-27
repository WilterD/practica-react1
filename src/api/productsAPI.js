import axios from 'axios'

const productApi = axios.create({
    baseURL: 'http://localhost:3000/products',
})

export const getProducts = async()=> {
   const res = await productApi.get('/');
   console.log(res)
   return res.data;
}

export const createProduct = (product) => {
    productApi.post('/', product)
}


