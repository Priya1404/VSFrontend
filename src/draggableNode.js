export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{
        cursor: 'grab',
        minWidth: '100px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '8px',
        backgroundColor: '#007bff', // Primary blue color
        justifyContent: 'center',
        flexDirection: 'column',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease-in-out, background-color 0.2s',
      }}
      draggable
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')} // Darker blue on hover
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')} // Reset color
    >
      <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '14px' }}>{label}</span>
    </div>
  );
};
