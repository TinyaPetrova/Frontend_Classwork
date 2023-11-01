import { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { loadProducts } from "./productAction"

const Products: FC = () => {
  const { isLoading, error, products } = useAppSelector(
    (state) => state.products,
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadProducts())
  }, [])

  console.log("Lets go!")
  return (
    <div>
      <h1>Products</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Ошибка: {error}</p>}
      {products &&
        products.map((el) => (
          <div key={el.id}>
            <p>{el.title}</p>
          </div>
        ))}
    </div>
  )
}

export default Products
