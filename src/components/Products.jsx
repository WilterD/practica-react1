import {useQuery} from '@tanstack/react-query'
import { getProducts } from '../api/productsAPI'

function Products() {

    const {isLoading, data: products,isError,error} = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
    })

    if(isLoading) return <div>Loading...</div>
    else if(isError) return <div>Error: {error.message}</div>

  return products.map(product =>(
    <div key={product.id}>
        <h3>{product.nombre}</h3>
        <h3>{product.precio}</h3>
        <h3>{product.cantidad}</h3>
        <button>
            borrar
        </button>
        <input type="checkbox" />
        <label htmlFor="">Disponible</label>
    </div>
  )) 
    
  
}

export default Products