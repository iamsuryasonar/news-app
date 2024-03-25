
# News Carousel React App

A simple React app built with Tailwind CSS that displays news articles in a carousel format. Users can sort news articles by categories.

## Features

- Displays news articles in a carousel format.
- Users can sort news articles by categories such as technology, sports, business, etc.
- Responsive design using Tailwind CSS.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/iamsuryasonar/news-app.git
```
Navigate to the project directory:

2. Install dependencies:

```bash
npm install
```

Usage
 
3. Start the development server:

```bash
npm start
```
4. Open your web browser and visit http://localhost:5173/ to view the app.



Sorting News by Categories
To sort news articles by categories:

Click on the category tabs available in the app (e.g., Technology, Sports, Business).
The news articles will be filtered based on the selected category.

## Technologies Used
- React.js
  - **Context API (useContext):** Implements global state management.
  - **React Router (BrowserRouter):** Handles navigation between different pages within the app.
  - **Swipe Gesture Handling:** Implements swipe gesture handling for carousel navigation.
  - **React Transition Group:** Utilizes transition animations for smoother UI transitions.
  - **React.memo:** Memoizes components for optimizing performance.
  - **useRef:** Utilizes useRef hook for accessing DOM elements and maintaining state.

- Tailwind CSS
 
## Hosted On
This project is hosted on Netlify. You can access it [here](https://news24x7app.netlify.app/).

## Acknowledgments
This project was created as part of a learning experience.
The news data is retrieved from [API source](https://saurav.tech/NewsAPI/).