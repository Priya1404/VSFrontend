import { Position } from 'reactflow';

export const inputNodeConfig = {
    title: 'Input',
    fields: [
      { key: 'inputName', label: 'Name:', defaultValue: 'input_', type: 'text' },
      {
        key: 'inputType',
        label: 'Type:',
        defaultValue: 'Text',
        type: 'select',
        options: [
          { label: 'Text', value: 'Text' },
          { label: 'File', value: 'File' },
        ],
      },
    ],
    handles: [
      { type: 'source', position: Position.Right },
    ],
  };
  
  export const outputNodeConfig = {
    title: 'Output',
    fields: [
      { key: 'outputName', label: 'Name:', defaultValue: 'output_', type: 'text' },
      {
        key: 'outputType',
        label: 'Type:',
        defaultValue: 'Text',
        type: 'select',
        options: [
          { label: 'Text', value: 'Text' },
          { label: 'Image', value: 'Image' },
        ],
      },
    ],
    handles: [
      { type: 'target', position: Position.Left },
    ],
  };
  
  export const llmNodeConfig = {
    title: 'LLM',
    fields: [],
    handles: [
      { type: 'target', position: Position.Left, style: { top: '33%' } },
      { type: 'target', position: Position.Left, style: { top: '66%' } },
      { type: 'source', position: Position.Right },
    ],
    customContent: <span>This is a LLM.</span>,
  };
  
  export const textNodeConfig = {
    title: 'Text',
    fields: [
      { key: 'text', label: 'Text:', defaultValue: '{{input}}', type: 'text' },
    ],
    handles: [
      { type: 'source', position: Position.Right },
    ],
  };

  export const decisionNodeConfig = {
    title: 'Decision',
    fields: [
      { key: 'condition', label: 'Condition:', defaultValue: 'x > 5', type: 'text' },
    ],
    handles: [
      { type: 'source', position: Position.Right, id: 'true-output', style: { top: '33%' } },
      { type: 'source', position: Position.Right, id: 'false-output', style: { top: '66%' } },
      { type: 'target', position: Position.Left },
    ],
    customContent: <span>Set a condition to decide the flow.</span>,
  };
  
  export const apiNodeConfig = {
    title: 'API Call',
    fields: [
      { key: 'endpoint', label: 'Endpoint:', defaultValue: 'https://api.example.com', type: 'text' },
      { key: 'method', label: 'Method:', defaultValue: 'GET', type: 'select', options: [
        { label: 'GET', value: 'GET' },
        { label: 'POST', value: 'POST' },
        { label: 'PUT', value: 'PUT' },
        { label: 'DELETE', value: 'DELETE' },
      ] },
    ],
    handles: [
      { type: 'source', position: Position.Right, id: 'response-output' },
      { type: 'target', position: Position.Left, id: 'request-input' },
    ],
    customContent: <span>Configure your API request.</span>,
  };

  export const mathNodeConfig = {
    title: 'Math Operation',
    fields: [
      { key: 'operation', label: 'Operation:', defaultValue: 'x + y', type: 'text' },
    ],
    handles: [
      { type: 'source', position: Position.Right, id: 'result-output' },
      { type: 'target', position: Position.Left, id: 'input-1' },
      { type: 'target', position: Position.Left, id: 'input-2', style: { top: '66%' } },
    ],
    customContent: <span>Perform mathematical calculations.</span>,
  };

  export const timerNodeConfig = {
    title: 'Timer',
    fields: [
      { key: 'duration', label: 'Duration (ms):', defaultValue: '1000', type: 'text' },
    ],
    handles: [
      { type: 'source', position: Position.Right, id: 'after-delay' },
      { type: 'target', position: Position.Left, id: 'start-timer' },
    ],
    customContent: <span>Set a delay in milliseconds.</span>,
  };

  export const loopNodeConfig = {
    title: 'Loop',
    fields: [
      { key: 'iterations', label: 'Iterations:', defaultValue: '5', type: 'text' },
    ],
    handles: [
      { type: 'source', position: Position.Right, id: 'loop-output' },
      { type: 'target', position: Position.Left, id: 'loop-input' },
    ],
    customContent: <span>Repeat a section of the workflow for a specified number of iterations.</span>,
  };
  