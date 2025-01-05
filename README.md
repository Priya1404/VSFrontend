# VectorShift Technical Assessment Solution

This repository contains my solution to the VectorShift frontend technical assessment. The solution includes a React-based frontend and a Python/FastAPI backend, showcasing clean architecture, node abstraction, styling, and backend integration.

## **Getting Started**

Follow these instructions to run the application and review the solution.

### **Frontend**
1. Navigate to the `/frontend` directory.
2. Install dependencies:
    npm install
3. Start the development server:  
   npm start
4. Access the frontend at http://localhost:3000.

### **Backend **
1. Navigate to the /backend directory.
2. Install backend dependencies:
    pip install fastapi uvicorn
3. Run the backend server:
    uvicorn main:app --reload
4. The backend will be accessible at http://localhost:8000.

## **Solution Overview**

### **Part 1: Node Abstraction**
1. Refactored the nodes folder into a reusable abstraction for creating nodes.
2. Added five new example nodes to demonstrate the abstraction’s flexibility.
 
### **Part 2: Styling**
1. Styled all frontend components using Tailwind CSS for a clean, consistent design.
2. Enhanced the user experience with hover effects, dynamic sizing, and responsive layouts.

### **Part 3: Text Node Logic**
1. Improved the Text Node functionality:
2. Dynamically adjusts node size based on text input.
3. Supports defining variables with double curly brackets ({{ variable_name }}), creating Handles dynamically for these variables.

### **Part 4: Backend Integration**
1. Connected the frontend to the /pipelines/parse backend endpoint:
2. Sends nodes and edges data from the frontend to the backend on submission.
3. The backend processes the data to calculate:
    a. Number of nodes and edges.
    b. Whether the graph is a Directed Acyclic Graph (DAG).
4. Displays the backend response in a user-friendly alert.
