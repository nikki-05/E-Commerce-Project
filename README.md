# E-Commerce-Project
# E-Commerce Application

This is a full-stack e-commerce web application built using the **MERN stack**:

- **MongoDB**: For the database to store user, product, and order information.
- **Express.js**: As the backend framework for building the REST API.
- **Node.js**: As the runtime environment for the backend.
- **React.js**: For building the frontend user interface.

## the Flow Of application
Client makes a Postman call --> goes to application  --> it reaches server(App)-->forwards to route -->route to controller and then  --> then model --> then database 
## Features

- User authentication and authorization (Login/Sign-up)
- Product listing and detailed view
- Add to-cart functionality
- Order placement and management
- Admin dashboard to manage products and orders
- Responsive design for a seamless experience across devices

## Project Structure

```
|-- backend/       # Contains the server-side code
|   |-- models/    # MongoDB schemas
|   |-- routes/    # API routes
|   |-- controllers/ # Route logic
|   |-- server.js  # Main server file
|
|-- frontend/      # Contains the client-side code
|   |-- src/
|       |-- components/ # React components
|       |-- pages/      # Application pages
|       |-- App.js      # Main React component
|-- package.json   # Dependency manager for the project
```

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v14 or later)
- **MongoDB** (Running locally or hosted, e.g., MongoDB Atlas)
- **Git** (for cloning the repository)

## Getting Started

Follow these steps to set up and run the project on your local machine:

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Set Up the Backend

1. Navigate to the `backend` folder:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file and configure the following variables:
    ```env
    MONGO_URI=<your-mongodb-connection-string>
    JWT_SECRET=<your-jwt-secret>
    PORT=5000
    ```
4. Start the backend server:
    ```bash
    npm run dev
    ```
   The server should be running at `http://localhost:5000`.

### 3. Set Up the Frontend

1. Navigate to the `frontend` folder:
    ```bash
    cd ../frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```
   The React application should be running at `http://localhost:3000`.

### 4. Connect the Frontend and Backend

Ensure the frontend is configured to communicate with the backend API. This can be managed by updating the `proxy` setting in the `frontend/package.json` file:

```json
"proxy": "http://localhost:5000"
```

## Running the Project

After completing the above steps:

- Open your browser and navigate to `http://localhost:3000` to view the frontend.
- Access the backend API at `http://localhost:5000`.

## Technologies Used

- **Frontend**: React.js, React Router, Axios
- **Backend**: Node.js, Express.js, MongoDB
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Styling**: CSS, Bootstrap/Material UI

## Additional Scripts

- To seed the database with sample data:
    ```bash
    node seeder.js
    ```
- To run tests (if applicable):
    ```bash
    npm test
    ```



