import { createSlice } from "@reduxjs/toolkit"
import { loadProducts } from "./productAction"
import ProductState from "./types/ProductState"

// создали начальное значение для стейта
const initialState: ProductState = {
  products: [],
  error: null,
  isLoading: false,
}

// написали сам файл slice с разными сценариями для asyncThunk (нашего асинхронного запроса)
export const productSlice = createSlice({
  name: "products", // уникальное имя
  initialState, // начальное значение
  reducers: {}, // действия/логика для синхронных операция, пока их нет здесь
  extraReducers: (builder) => {
    // огика для асинхронных запросов
    builder
      //обращаемся к функции из файла с action.ts (там где asyncThunk)
      // случай если ждем ответа от promise
      .addCase(loadProducts.pending, (state) => {
        state.isLoading = true
      })
      // случай если ответ пришел
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.products = action.payload
      })
      // случай если пришла ошибка
      .addCase(loadProducts.rejected, (state, action) => {
        state.isLoading = false
        state.products = []
        state.error = action.payload as string
      })
  },
})
