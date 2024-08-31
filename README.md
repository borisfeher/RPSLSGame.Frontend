# RPSLSGame Frontend

## Overview
This is the frontend component for the "Rock, Paper, Scissors, Lizard, Spock" game, developed using React. It provides a modern, responsive UI that communicates with the backend API to allow users to play the game, view recent results, and reset the scoreboard.

## Tech Stack
- **React**: JavaScript library for building user interfaces.
- **Axios**: HTTP client for making requests to the backend API.
- **Bootstrap**: For responsive and modern UI components.
- **CSS**: Custom styling for the game interface.

## Prerequisites
- **Node.js** (v14 or above)
- **npm** (v6 or above)

## Setup Instructions

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/borisfeher/RPSLSGame.Frontend.git
    cd RPSLSGame.Frontend
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Environment Variables**:
    Make sure you set up the following environment variables:
       REACT_APP_API_URL: The URL of the backend API.
    Create a .env file in the project root and add:
    ```bash
    REACT_APP_API_URL=http://localhost:7074/api
    ```

4. **Running the Project**:
    Start the Development Server
    ```bash
    npm start
    ```
    The application will be available at http://localhost:3000.

5. **Building for Production**:
    To create a production-ready build:
    ```bash
    npm run build
    ```
    The build will be output to the build/ directory.

6. **Docker Support (Optional)**:
    To build and run the frontend using Docker:
    Build the Docker Image
    ```bash
    docker build -t rpslsgame-frontend .
    ```
    The application will be available at http://localhost:3000.

7. **Run the Docker Container**:
    To create a production-ready build:
    ```bash
    docker run -p 3000:3000 rpslsgame-frontend
    ```
    The application will be available at http://localhost:3000.