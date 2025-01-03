import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const GenericNode = ({ id, data, config }) => {
  const [state, setState] = useState(
    config.fields.reduce((acc, field) => {
      acc[field.key] = data?.[field.key] || field.defaultValue || '';
      return acc;
    }, {})
  );

  const handleChange = (key) => (e) => {
    setState((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <div style={{ width: 200, height: 80, border: '1px solid black', padding: 5 }}>
      {config.handles.map((handle, index) => (
        <Handle
          key={`${id}-${index}`}
          type={handle.type}
          position={handle.position}
          id={`${id}-${index}`}
          style={handle.style}
        />
      ))}

      <div>
        <span>{config.title}</span>
      </div>

      {config.fields.map((field) => (
        <div key={field.key}>
          <label>
            {field.label}
            {field.type === 'select' ? (
              <select value={state[field.key]} onChange={handleChange(field.key)}>
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type || 'text'}
                value={state[field.key]}
                onChange={handleChange(field.key)}
              />
            )}
          </label>
        </div>
      ))}

      {/* Render custom content if provided */}
      {config.customContent && (
        <div>
          {typeof config.customContent === 'function'
            ? config.customContent({ id, data, state })
            : config.customContent}
        </div>
      )}
    </div>
  );
};
