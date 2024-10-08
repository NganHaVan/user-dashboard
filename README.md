# User Dashboard

## Project Overview

This project is a simple user dashboard built using React and TypeScript. It fetches a list of users from a REST API and allows users to filter and sort the displayed data. The UI adapts to different screen sizes for a responsive experience.

## Features

- Fetches user data from an external REST API
  Displays user information in a card view (Name, Email, Phone, Website, and Address)
  Provides a search input field to filter users by name.
- Supports sorting by Name or Email in both ascending/descending order
- Styled using Sass and CSS Modules for modular, scoped styling.
- Fully responsive layout (mobile, tablet, desktop)
- Implements functional programming principles (using `.map()`, `.filter()`, and `.reduce()` for state management)
- Highlight the searched name

## Technologies Used

- React (Functional Components, Hooks)
- TypeScript
- Sass (SCSS for styling) and CSS Modules
- REST API (via https://jsonplaceholder.typicode.com/users)
- Vite (as the build tool)

## Getting started

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

3. Open [localhost:5173](http://localhost:5173/) in your browser to view the dashboard.

## Build for production

1. Create a production build

```bash
npm run build
```

2. Preview the production build locally

```bash
npm run preview
```

## Responsive Design

The layout is fully responsive, designed to work on various screen sizes, including:

- Mobile
- Tablet
- Desktop
  This is achieved using CSS media queries inside Sass files.
