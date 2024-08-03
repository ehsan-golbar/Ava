// src/features/data/dataSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Segment {
  start: string;
  end: string;
  text: string;
}

export interface FileData {
    duration: string;
    id: number;
    processed: string;
    segments: Segment[];
    length: number;
    url: string;
  }
  



export  interface DataState {

  files: FileData[];
}

const initialState: DataState = {

    files: [],
};

const dataSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {

    setFiles: (state, action: PayloadAction<FileData[]>) => {
      state.files = action.payload;
    },
  },
});

export const {  setFiles } = dataSlice.actions;
export default dataSlice.reducer;
