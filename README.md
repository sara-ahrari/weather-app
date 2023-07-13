# Weather App 🌤️

## Table of Contents

- [Weather App](#weather-app)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Running the Project](#running-the-project)
  - [Server](#server)
  - [Configuration Files](#configuration-files)

## Description 

his is the backend for a weather app where users can query based on the city and the type of data they are looking for, whether it's current conditions or a forecast. This API utilizes the API from https://openweathermap.org/ to fetch the weather information. 
The project is documented using Swagger.   

## Running the Project

To run the project, follow these steps:

1. Install the dependencies by running `npm install`.
2. Create a .env file and copy the contents of the .env.sample file into it. Then, add your API key to the .env file.
3. Start the project with `npm run dev`.
4. Access the server at http://localhost:8000.
5. Access the documentation and test the API with Swagger at http://localhost:8000/api-docs

## Configuration Files

- `README.md`: This file, providing an overview of the project.
- `tsconfig.json`: TypeScript configuration for the server code.