import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProducts, deleteProduct, updateProduct } from "../api/productsAPI";

function Products() {
  const queryClient = useQueryClient();

  const {
    isLoading,
    data: products,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"], // se traen los datos
    queryFn: getProducts,
    select: (products) => products.sort((a, b) => b.id - a.id), // se ordenan los datos
  });

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      console.log("producto eliminado");
      queryClient.invalidateQueries("products"); // actualiza el producto que ha sido eliinado, e upd interfaz
    },
  });

  const updateProductMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      console.log("producto actualizado");
      queryClient.invalidateQueries("products"); // actualiza el producto que ha sido actualizado, e upd interfaz
    },
  });

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  return products.map((product) => (
    <div key={product.id}>
      <h3>{product.nombre}</h3>
      <h3>{product.precio}</h3>
      <h3>{product.cantidad}</h3>
      <button
        onClick={() => {
          deleteProductMutation.mutate(product.id);
        }}>
        borrar
      </button>
      <input
        type="checkbox"
        checked={product.disponible}
        id={product.id}
        onChange={(e) => {
          updateProductMutation.mutate({
            ...product,
            disponible: e.target.checked,
          });
        }}
      />
      <label htmlFor={product.id}>Disponible</label>
    </div>
  ));
}

export default Products;
