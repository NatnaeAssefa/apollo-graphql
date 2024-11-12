# GraphQL User App

This is a simple GraphQL application that demonstrates how to query a list of users with a React frontend and an Apollo Server backend.

## Project Structure

- **Backend**: A Node.js server using Apollo Server to create a GraphQL API.
- **Frontend**: A React application with Apollo Client to query the GraphQL API and display user data.

## Prerequisites

- **Node.js** (v14 or later recommended)
- **npm** (comes with Node.js) or **yarn**

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/NatnaeAssefa/apollo-graphql.git
cd apollo-graphql
```

### 2. Set Up the Backend

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Apollo Server:

   ```bash
   node server.js
   ```

   The backend server should now be running at `http://localhost:4000`.

### 3. Set Up the Frontend

1. Open a new terminal, navigate to the frontend directory, and install dependencies:

   ```bash
   npm install
   ```

2. Start the React application:

   ```bash
   npm start
   ```

   The frontend application will open in the browser at `http://localhost:3000` by default.

## Usage

- **Frontend**: You can view a list of users fetched from the GraphQL API.
- **GraphQL Playground**: You can access the GraphQL Playground at `http://localhost:4000` to test queries directly.

## Example GraphQL Queries

In the GraphQL Playground, you can run the following query to get a list of users:

```graphql
query GetUsers {
  users {
    id
    name
    email
    age
  }
}
```

## Project Scripts

### Backend Scripts

- **`node server.js`**: Starts the GraphQL server.

### Frontend Scripts

- **`npm start`**: Runs the React app in development mode.

## Troubleshooting

1. **Errors related to `react-scripts`**: Run `npm install react-scripts` in the frontend directory.
2. **Node version issues**: Ensure you’re using a compatible version of Node.js (14 or 16 is recommended).

## License

This project is open-source and available under the MIT License.
