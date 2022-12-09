module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": 0,
    "import/prefer-default-export": 0,
    "import/order": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-no-useless-fragment": 0,
    "react/require-default-props": 0,
    "react/function-component-definition": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".ts", ".jsx", ".tsx"],
      },
    ],
    "comma-dangle": ["error", "always-multiline"],
  },
};
