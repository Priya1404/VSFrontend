import { DraggableNode } from "./DraggableNode";

export const PipelineToolbar = () => {
  return (
    <div className="bg-gray-100 p-4 border-b-2 border-gray-300 shadow-md">
      <h2 className="text-lg font-bold text-gray-700 mb-4">Pipeline Toolbar</h2>
      
      <div className="flex flex-wrap gap-4">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="decision" label="Decision" />
        <DraggableNode type="math" label="Math" />
        <DraggableNode type="loop" label="Loop" />
        <DraggableNode type="timer" label="Timer" />
        <DraggableNode type="api" label="API" />
      </div>
    </div>
  );
};
