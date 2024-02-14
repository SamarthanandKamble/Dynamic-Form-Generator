import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    formFields: [],
  },
  reducers: {
    addField: (state, action) => {
      state.formFields.push(action.payload);
    },
    removeField: (state, action) => {
      state.formFields = state.formFields.filter(
        (_, index) => index !== action.payload
      );
    },
  },
});

export const { addField, removeField, updateField } = formSlice.actions;

export default formSlice.reducer;
