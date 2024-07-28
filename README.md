# Samachar

Samachar is a React-based application that uses the [NewsAPI](https://newsapi.org/) to fetch daily news based on country and category. It also allows users to search for news articles. The application includes features such as light/dark mode, infinite scroll, and a top loader. Code is provided in both functional and class components within the same file.

![Screenshot 1](https://github.com/8prashant/Samachar/blob/main/Screenshot%201.png)
![Screenshot 2](https://github.com/8prashant/Samachar/blob/main/Screenshot%202.png)
![Screenshot 4](https://github.com/8prashant/Samachar/blob/main/Screenshot%204.png)

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Follow these steps to get started with the project.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and npm installed on your machine.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/8prashant/Samachar.git
   cd Samachar
### `Install the dependencies:`
npm install
Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits, and you will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode. See the section about running tests for more information.

### `npm run build`
Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!

### `npm run eject`
Note: this is a one-way operation. Once you eject, you can’t go back! If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point, you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Features
- **Light/Dark Mode**
Samachar allows users to toggle between light and dark themes for better readability and user comfort.

- **Infinite Scroll**
Load more news articles as you scroll down the page. This feature is implemented using react-infinite-scroll-component.

- **Top Loader**
A loading bar is displayed at the top of the page during news fetch operations. This feature is implemented using react-top-loading-bar.

- **Configuration**
To use the NewsAPI, you need an API key. Create a .env file in the root of your project and add your API key:

REACT_APP_NEWS_API_KEY=your_api_key_here
Replace your_api_key_here with your actual NewsAPI key.

## Deployment
The build folder contains the production build of the application. You can deploy it to any static site hosting service such as Vercel, Netlify, GitHub Pages, etc. Follow the deployment guides of your chosen hosting service for detailed instructions.

## Troubleshooting
npm run build fails to minify
This issue can arise due to outdated dependencies or configuration issues. Refer to the Create React App troubleshooting guide for more details on how to resolve this issue.
