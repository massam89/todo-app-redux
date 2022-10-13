import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: 'ui',
  initialState: { showForm: false, notification: ''},
  reducers: {
    changeShowForm(state){
      state.showForm = !state.showForm
    },
    changeNotification(state,action){
      state.notification = action.payload
    }
  }
})

export const uiActions = uiSlice.actions
export default uiSlice.reducer