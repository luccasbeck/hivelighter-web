module.exports = {
  // parser: 'babel-eslint',
  extends: [
    'react-app',
    // 'airbnb', // Heavy linting
    // 'plugin:import/recommended',
    'eslint:recommended',
    // 'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: [
    // 'react',
    // 'import',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    extraFileExtensions: [],
  },
  rules: {
    'no-console': 'off',
    'jsx-a11y/img-redundant-alt': 'off',
    'jsx-a11y/role-supports-aria-props': 'off',
    // 'react/prop-types': 'off',
    // 'react/jsx-uses-react': 'off',
    // 'react/jsx-uses-vars': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}
