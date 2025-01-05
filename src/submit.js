export const SubmitButton = () => {
    return (
      <div className="flex items-center justify-center my-5">
        <button
          type="submit"
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
  