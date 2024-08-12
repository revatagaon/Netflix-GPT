import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false
  },
  reducers: {
    toggleGPTSearcView: (state) => {
      state.showGPTSearch = !state.showGPTSearch
    }
  }
})

export const { toggleGPTSearcView } = gptSlice.actions

export default gptSlice.reducer