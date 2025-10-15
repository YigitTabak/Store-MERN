# Product Store MERN Application

A full-stack web application for managing product listings, built with the MERN stack (MongoDB, Express.js, React, Node.js). This application demonstrates core CRUD operations and RESTful API implementation.

![Homepage]()
![Create Product]()

## Features

- RESTful API with Express.js
- MongoDB integration with Mongoose
- Product listing with image display
- Create, Read, Update and Delete operations
- State management with Zustand
- Responsive design

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

### Frontend
- React
- React Router DOM
- Zustand for state management
- Vite
- CSS for styling

## Getting Started

### Prerequisites
- Node.js
- MongoDB Atlas account
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YigitTabak/Store-MERN.git
cd Store-MERN
```
2. Install dependencies:
```bash
npm install
# or
yarn install
```
3. Configure MongoDB connection in `.env` file.
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
4. Run the backend server
```bash
cd backend
node server.js
```

5. Frontend dependencies
```bash
cd frontend
npm install
npm run dev
```

