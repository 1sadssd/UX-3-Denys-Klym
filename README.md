# Bachelor Work Originality Control App

A React application for managing and checking the originality of bachelor's theses.

## Features

- User authentication (Login/Register)
- Dashboard with overview statistics
- Upload and manage bachelor's works
- Originality checking system
- View detailed check results
- User profile management

## Tech Stack

- React 18
- React Router DOM
- Tailwind CSS
- Vite

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Pages

- `/login` - Login page
- `/register` - Registration page
- `/dashboard` - Main dashboard
- `/my-works` - List of user's works
- `/work/:id` - Work detail page
- `/my-checks` - List of originality checks
- `/check/:id` - Check detail page
- `/upload` - Upload new work
- `/profile` - User profile

## Notes

- Authentication is simplified for demo purposes (uses localStorage)
- Images are loaded from Unsplash placeholder service
- In production, integrate with backend API for proper authentication and data management
