import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: 'ui',
  initialState: { showNewItem: false},
  reducers: {
    changeShowNewItem(state){
      state.showNewItem = !state.showNewItem
    }
  }
})

export const uiActions = uiSlice.actions
export default uiSlice.reducer