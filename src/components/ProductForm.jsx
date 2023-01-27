function ProductForm() {

    const envioForm = (e)=>{
        console.log("prueba")
        e.preventDefault()
    }

  return (
    <form onClick={envioForm}>
        <label>
            Nombre
        </label>
        <input type="text" id="nombre" name="nombre"/>
        <label>
            Precio
        </label>
        <input type="text" id="precio" name="precio"/>
        <label>
            Cantidad
        </label>
        <input type="text" id="cantidad" name="cantidad"/>

        <button >Add Product</button>

    </form>
  )
}

export default ProductForm