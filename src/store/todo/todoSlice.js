import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: [],
    changed: false
  },
  reducers: {
    addItem(state,action){
      state.items.push({id: action.payload.id, title: action.payload.title})
      state.changed = true
    },
    removeItem(state,action){
      state.items = state.items.filter(item => item.id !== action.payload.id)
      state.changed = true
    },
    clearAllItems(state){
      state.items = []
      state.change = true
    },
    replaceItems(state, action){
      state.items = action.payload || []
    }
  }
})

export const todoActions = todoSlice.actions
export default todoSlice.reducer