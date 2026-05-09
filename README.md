# hookFormater

## Description
`hookFormater` is a React application that demonstrates a powerful custom hook `useFormattedData`. This hook simplifies common data manipulation tasks such as searching, filtering, and sorting for arrays of objects, providing a clean and reusable way to handle stateful data formatting in React components.

## Key Features
- **Search**: Perform case-insensitive searches across all values within the data objects.
- **Filter**: Apply custom filtering logic using predicate functions.
- **Sort**: Easily sort data by specific keys or using custom sorting functions.
- **TypeScript Support**: Fully typed for enhanced developer experience and type safety.

## Tech Stack
- **Framework**: [React 18](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Linting**: [ESLint](https://eslint.org/)

## Installation and Setup

### 1. Clone the project
```sh
git clone git@github.com:nemanja85/hookFormatter.git
```

### 2. Navigate to the project directory
```sh
cd hookFormatter
```

### 3. Install the required dependencies
```sh
npm install
```

### 4. Running the Project
To start the development server, use the following command:
```sh
npm run dev
```

## Project Structure
```text
hookFormatter/
├── public/                # Static assets
├── src/
│   ├── hooks/             # Custom React hooks
│   │   └── useFormattedData.ts
│   ├── types.ts           # TypeScript type definitions
│   ├── users.json         # Mock data for demonstration
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── index.html             # HTML entry point
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

