import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../api/productsAPI";

function ProductForm() {
  const queryClient = useQueryClient();

  const addProductMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      console.log("producto agregado");
      queryClient.invalidateQueries("products"); // actualiza el producto que ha sido agregado, e interfaz
    },
  });

  const envioForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const product = Object.fromEntries(formData);
    addProductMutation.mutate({
      ...product,
      disponible: true,
    });
  };

  return (
    <form onSubmit={envioForm}>
      <label>Nombre</label>
      <input type="text" id="nombre" name="nombre" />
      <label>Precio</label>
      <input type="text" id="precio" name="precio" />
      <label>Cantidad</label>
      <input type="text" id="cantidad" name="cantidad" />

      <button>Add Product</button>
    </form>
  );
}

export default ProductForm;
