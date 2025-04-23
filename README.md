# React Pagination App

![React](https://img.shields.io/badge/React-19-blue)
![Axios](https://img.shields.io/badge/Axios-1.8.4-green)
![Vite](https://img.shields.io/badge/Vite-6.3.1-orange)

A clean and efficient React application demonstrating client-side pagination using the JSONPlaceholder API.

## Features

- 📝 Fetches and displays blog posts from JSONPlaceholder
- 🔢 Implements client-side pagination (10 posts per page)
- ⏳ Loading state handling during API requests
- 🔵 Active page highlighting in pagination controls
- 🧩 Modular component architecture
- 📱 Responsive design

## Technologies

- React 19 (with Hooks)
- Axios for HTTP requests
- Vite build tool
- Plain CSS (no external CSS libraries)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KwonZhu/React-Pagination-App.git
   ```

2. Navigate to project directory:

   ```bash
   cd React-Pagination-App
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start development server:

   ```bash
   npm run dev
   ```

## Project Structure

    src/
    ├── components/
    │ ├── Pagination.jsx # Pagination controls component
    │ └── Posts.jsx # Posts list component
    ├── App.jsx # Main application component
    ├── main.jsx # Application entry point
    └── App.css # Global styles

## Implementation Highlights

### Pagination Logic

The app implements efficient client-side pagination:

javascript

```
// Calculate posts to show for current page
const indexOfLastPost = currentPage \* postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
```

### Components

#### Posts Component:

- Displays paginated posts list
- Shows loading state during API fetch
- Clean list presentation with CSS styling

#### Pagination Component:

- Dynamically generates page numbers
- Highlights active page
- Clean button styling with hover effects

## Available Scripts

- **`npm run dev`**: Starts development server

- **`npm run build`**: Creates production build

- **`npm run lint`**: Runs ESLint for code quality

- **`npm run preview`**: Previews production build

## API Reference

This application uses the free JSONPlaceholder API:

- Endpoint: `https://jsonplaceholder.typicode.com/posts`
- Returns: Array of 100 blog post objects
