# Admin Panel

This is a custom admin panel built with React JS and SASS, inspired by Safak from Lama Dev. It provides a graphical interface for admins to manage users, products, orders, and posts, as well as perform CRUD operations. Users can also update their profiles and create posts.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Credits](#credits)

## Features

- **Graphical Overview**: Admins can oversee all activities in a visual and intuitive way.
- **CRUD Operations**: Admins can create, read, update, and delete users, products, orders, and posts.
- **User Management**: Users can update their profiles and create posts.

## Technologies Used

| Technology | Purpose |
| --- | --- |
| React JS | Building the user interface |
| SASS | Styling the components |
| TypeScript | Ensuring type safety in the codebase |
| Vite | Fast development and building of the application |
| ESLint | Code linting with plugins: <br> - eslint-plugin-react <br> - @typescript-eslint/recommended-type-checked <br> - @typescript-eslint/strict-type-checked (optional) <br> - @typescript-eslint/stylistic-type-checked (optional) |

*Note: Verify the exact ESLint configuration in the project's codebase because did some modification later*

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/shahalam22/admin-panel.git
   ```

2. Navigate to the project directory:

   ```bash
   cd admin-panel
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

*Note: You may need to configure environment variables for API connections if the panel interacts with a backend server.*

## Running the Application

To start the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

Access the application at [http://localhost:5173](http://localhost:5173) (Vite's default port).

## Deployment

This project can be deployed on platforms that support static sites or frontend applications, such as:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

To deploy:

1. Build the project:

   ```bash
   npm run build
   ```

   or

   ```bash
   yarn build
   ```

2. Follow the deployment instructions for your chosen platform.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Make your changes.
3. Submit a pull request.

Please follow best practices for coding and documentation when contributing.

*Note: If no LICENSE file exists, consider adding one.*

## Credits

This project was inspired by Safak from [Lama Dev](https://blog.lama.dev/).
