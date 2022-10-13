import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: [
      {
        id: 2234234234,
        title: 'Reading book'
      },
      {
        id: 134234234,
        title: 'Hanging out'
      }
    ]
  },
  reducers: {
    addItem(state,action){
      state.items.push({id: action.payload.id, title: action.payload.title})
    },
    removeItem(state,action){
      state.items = state.items.filter(item => item.id !== action.payload.id)
    },
    clearAllItems(state){
      state.items = []
    }
    
  }
})

export const todoActions = todoSlice.actions
export default todoSlice.reducer