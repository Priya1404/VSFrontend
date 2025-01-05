import React, { useState } from 'react';

const SubmitButton = ({ nodes, edges }) => {
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = async () => {
    console.log("Submit clicked")
    try {
      // Send the data (nodes and edges) to the backend
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nodes: nodes,
          edges: edges,
        }),
      });

      // Parse the response from the backend
      const data = await response.json();
      const { num_nodes, num_edges, is_dag } = data;

      // Create a user-friendly message for the alert
      const message = `Pipeline Summary:\n- Number of nodes: ${num_nodes}\n- Number of edges: ${num_edges}\n- Is the pipeline a DAG? ${is_dag ? 'Yes' : 'No'}`;
      
      // Set the alert message in the state and show the alert
      setAlertMessage(message);
      alert(message);  // Display the alert to the user

    } catch (error) {
      // Handle errors
      console.error('Error submitting pipeline:', error);
    }
  };

  return (
    <div className="flex items-center justify-center my-5">
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 text-white text-lg font-bold px-6 py-2 rounded-lg shadow-lg transition-transform transform hover:bg-blue-600 active:scale-95"
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')} // Darker blue on hover
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')} // Reset color
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')} // Press effect
          onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')} // Release effect
        >
          Submit
        </button>
      </div>
  );
};

export default SubmitButton;