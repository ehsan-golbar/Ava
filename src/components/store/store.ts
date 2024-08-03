// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './slices/languageSlice';
import fileFetchReducer from './slices/fetchFileSegmentsSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';





const store = configureStore({
  reducer: {
    data: languageReducer,
    fileFetchSegments: fileFetchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export default store;
