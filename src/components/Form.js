import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addField, removeField, updateField } from "../utils/Redux/formSlice";
import FormField from "./FormField";

const Form = () => {
  const formFields = useSelector((state) => state.form?.formFields);
  const dispatch = useDispatch();

  const handleAddField = (type) => {
    console.log("type:", type);
    const newField = {
      label: `${type}`,
      type,
      value: "",
      options: type === "dropdown" ? ["Option 1", "Option 2", "Option 3"] : [],
    };
    console.log("field created :", newField);
    dispatch(addField(newField));
  };

  const handleRemoveField = (index) => {
    dispatch(removeField(index));
  };

  const handleChange = (index, value) => {
    dispatch(updateField({ index, value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formFields);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Dynamic Form Generator</h1>
      {formFields.map((field, index) => (
        <FormField
          key={index}
          field={field}
          onChange={(value) => handleChange(index, value)}
          onDelete={() => handleRemoveField(index)}
        />
      ))}
      <div className="mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={() => handleAddField("text")}
        >
          Add Text Field
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 ml-2"
          onClick={() => handleAddField("dropdown")}
        >
          Add Dropdown
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 ml-2"
          onClick={() => handleAddField("checkbox")}
        >
          Add Checkbox
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 ml-2"
          onClick={() => handleAddField("radio")}
        >
          Add Radio Button
        </button>
      </div>
      <button
        className="bg-purple-500 text-white px-4 py-2"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
