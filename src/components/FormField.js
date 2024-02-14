import React from "react";

const FormField = ({ field, onChange, onDelete }) => {
  const renderField = () => {
    switch (field.type) {
      case "text":
        return (
          <input
            type="text"
            value={field.value}
            onChange={(e) => onChange(e.target.value)}
            className="border border-gray-300"
          />
        );
      case "textarea":
        return (
          <textarea
            value={field.value}
            onChange={(e) => onChange(e.target.value)}
            className="border border-gray-300"
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
            className="border border-gray-300"
            onChange={(e) => onChange(e.target.checked)}
          />
        );
      case "radio":
        return (
          <input
            type="radio"
            checked={field.value}
            onChange={(e) => onChange(e.target.checked)}
            className="border border-gray-300"
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

      <button
        className="px-2 py-1 ml-2 bg-red-500 text-white rounded-md"
        onClick={onDelete}
      >
        Remove
      </button>
    </div>
  );
};

export default FormField;
