сегодня мы:

1. создали папку в features и папку стилей
2. написали типизацию для одного элемента в массиве объектов + типизация для всего стейта (переменной с данными для трёх состояний промиса)
3. написали асинхронную функцию в файле productsAction.ts c createAsyncThunk()
4. в файле productsSlice.ts написали начальное значение и в createSlice() прописали сценарии для асинхронного запроса на сервер
5. добавили наши данные в store через productSlice.reducer
6. создали компонент
7. в useEffect() вызывали через dispatch функцию productAction()
8. забрали данные из хука useAppSelector()
