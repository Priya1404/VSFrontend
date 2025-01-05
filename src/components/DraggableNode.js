export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={`cursor-grab min-w-[100px] h-[60px] flex items-center justify-center flex-col rounded-md bg-blue-500 shadow-md transition-transform transition-colors duration-200 hover:bg-blue-700 ${type}`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
    >
      <span className="text-white font-bold text-sm">{label}</span>
    </div>
  );
};
