// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './slices/languageSlice';
import fileFetchReducer from './slices/fetchFileSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';





const store = configureStore({
  reducer: {
    data: languageReducer,
    fileFetch: fileFetchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export default store;
