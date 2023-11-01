import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// ассинхронная функция для работы в redux
export const loadProducts = createAsyncThunk(
  // первый параметр - уникальное название
  "products/loadProducts",
  // второй параметр - асинхронная стрелочная функция
  async (_, thunkAPI) => {
    // try работает если придёт положительный ответ от промиса - значение fulfilled
    // доставать данные будем в slice из action.payload
    try {
      const res = await axios.get("https://fakestoreapi.com/products")
      return res.data
      // catch - срабатывает если придёт негативный ответ от промиса - значение rejected
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)
