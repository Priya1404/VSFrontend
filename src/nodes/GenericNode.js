import { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';

export const GenericNode = ({ id, data, config }) => {
  const [state, setState] = useState(
    config.fields.reduce((acc, field) => {
      acc[field.key] = data?.[field.key] || field.defaultValue || '';
      return acc;
    }, {})
  );

  const [variables, setVariables] = useState([]);

  // Handle content changes and update state
  const handleChange = (key) => (e) => {
    const newValue = e.target.value;
    setState((prev) => ({ ...prev, [key]: newValue }));

    if (key === 'text') {
      const newVariables = [
        ...new Set(
          newValue.match(/{{\s*([\w$]+)\s*}}/g)?.map((match) => match.slice(2, -2).trim()) || []
        ),
      ];
      setVariables(newVariables);
    }
  };

  return (
    <div
      className="relative border border-gray-300 p-2 bg-white shadow-md rounded-md"
      style={{
        width: '300px', // Fixed width
        minHeight: '150px', // Minimum height for the node
        maxHeight: '400px', // Maximum height to avoid excessive resizing
      }}
    >
      {/* Existing Handles */}
      {config.handles.map((handle, index) => (
        <Handle
          key={`${id}-${index}`}
          type={handle.type}
          position={handle.position}
          id={`${id}-${index}`}
          style={handle.style}
        />
      ))}

      {/* Variable Handles */}
      {variables.map((variable, index) => (
        <Handle
          key={`${id}-var-${variable}`}
          type="target"
          position={Position.Left}
          id={`${id}-var-${variable}`}
          style={{
            top: `${(index + 1) * 20}px`, // Position handles dynamically
            background: '#ff6f61',
          }}
        />
      ))}

      <div className="mb-2 font-semibold text-gray-700">{config.title}</div>

      <div className="overflow-auto flex-1" style={{ paddingBottom: '16px' }}>
        {config.fields.map((field) => (
          <div key={field.key} className="mb-2">
            <label className="block text-sm font-medium text-gray-600">
              {field.label}
              {field.type === 'select' ? (
                <select
                  value={state[field.key]}
                  onChange={handleChange(field.key)}
                  className="w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <textarea
                  value={state[field.key]}
                  onChange={handleChange(field.key)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  rows={3}
                  style={{ resize: 'none' }} // Disable manual resizing, but allow automatic expansion
                />
              )}
            </label>
          </div>
        ))}
      </div>

      {config.customContent && (
        <div className="mt-2">
          {typeof config.customContent === 'function'
            ? config.customContent({ id, data, state })
            : config.customContent}
        </div>
      )}
    </div>
  );
};
