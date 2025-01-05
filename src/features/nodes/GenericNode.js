import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';

export const GenericNode = ({ id, data, config }) => {
  const [state, setState] = useState(
    config.fields.reduce((acc, field) => {
      acc[field.key] = data?.[field.key] || field.defaultValue || '';
      return acc;
    }, {})
  );

  const [variables, setVariables] = useState([]);
  const [nodeStyle, setNodeStyle] = useState({
    width: 'auto',
    height: 'auto',
  });

  const textAreaRef = useRef(null); 

  // Handling content changes and update state
  const handleChange = (key) => (e) => {
    const newValue = e.target.value;
    setState((prev) => ({ ...prev, [key]: newValue }));

    if (key === 'text') {
      const newVariables = [
        ...new Set(
          newValue.match(/{{\s*([\w$]+)\s*}}/g)?.map((match) => match.slice(2, -2).trim()) || []
        ),
      ];
      setVariables(newVariables); // Update variables state
    }
  };

  // Dynamically adjust the node height and the textarea height
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto'; 
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; 
    }

    setNodeStyle((prev) => ({
      ...prev,
      height: `${Math.max(200, textAreaRef.current?.scrollHeight + 75 || 150)}px`,
    }));
  }, [state.text]);  // Trigger when the text content changes

  return (
    <div
      className="relative border border-gray-300 p-2 bg-white shadow-md rounded-md"
      style={{
        ...nodeStyle, // Apply dynamic styles (height & width)
        minHeight: '200px', 
        maxHeight: '500px', 
      }}
    >
      {config.handles.map((handle, index) => (
        <Handle
          key={`${id}-${index}`}
          type={handle.type}
          position={handle.position}
          id={`${id}-${index}`}
          style={handle.style}
        />
      ))}

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
                  ref={textAreaRef}
                  value={state[field.key]}
                  onChange={handleChange(field.key)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  style={{
                    resize: 'none', // Disabling manual resizing, but allow automatic expansion
                    width: '100%', 
                    minHeight: '60px', 
                    height: 'auto', 
                    overflow: 'hidden',
                  }}
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
