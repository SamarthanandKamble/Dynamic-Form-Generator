import React from "react";

const FormField = ({ field, onChange, onDelete }) => {
  console.log("Field:", field);
  const renderField = () => {
    switch (field.type) {
      case "text":
        return (
          <input
            type="text"
            value={field.value}
            onChange={(e) => onChange(e.target.value)}
          />
        );
      case "textarea":
        return (
          <textarea
            value={field.value}
            onChange={(e) => onChange(e.target.value)}
          />
        );
      case "dropdown":
        return (
          <select
            value={field.value}
            onChange={(e) => onChange(e.target.value)}
          >
            {field.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case "checkbox":
        return (
          <input
            type="checkbox"
            checked={field.value}
            onChange={(e) => onChange(e.target.checked)}
          />
        );
      case "radio":
        return (
          <input
            type="radio"
            checked={field.value}
            onChange={(e) => onChange(e.target.checked)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2">{field.label}</label>
      {renderField()}
      <button className="text-red-500" onClick={onDelete}>
        Remove
      </button>
    </div>
  );
};

export default FormField;
