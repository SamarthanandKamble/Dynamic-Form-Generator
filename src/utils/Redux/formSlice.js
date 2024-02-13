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
        (field, index) => index !== action.payload
      );
    },
    updateField: (state, action) => {
      const { index, value } = action.payload;
      state.formFields[index].value = value;
    },
  },
});

export const { addField, removeField, updateField } = formSlice.actions;

export default formSlice.reducer;
