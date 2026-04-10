# React Formik & Yup Practice

This project is a practice task demonstrating how to handle form state and validation in React using **Formik** and **Yup**. It features two main authentication forms (Login and Sign Up) with comprehensive client-side validation and a responsive UI.

## Features

- **Sign Up Form:** Collects user's first name, last name, email, and password.
- **Login Form:** Collects user's email and password. Built with utility classes using Tailwind CSS.
- **Validation:**
  - Required fields checking
  - Email format validation
  - Password minimum length enforcement (minimum 6 characters)
- **Routing:** Navigation between Login and Sign Up pages using React Router.

## Technologies Used

- **[React](https://react.dev/)**: Frontend library for building the UI.
- **[Vite](https://vitejs.dev/)**: Next-generation frontend tooling for rapid development.
- **[Formik](https://formik.org/)**: For building and managing form state and submissions.
- **[Yup](https://github.com/jquense/yup)**: Object schema validation for form field validation rules.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework (used in the Login form).
- **[React Router](https://reactrouter.com/)**: Declarative routing for React single-page applications.

## Live Demo

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate into the project directory:

   ```bash
   cd formik-react
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the App Locally

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Project Structure

- `src/pages/SignUp.jsx`: The sign-up form component using Formik and custom CSS (`src/index.css`).
- `src/pages/Login.jsx`: The login form component using Formik and Tailwind CSS.
- `src/App.jsx`: Main application component that likely sets up the React Router definitions.
