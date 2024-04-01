module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "next",
    "eslint-config-next",
    "next/core-web-vitals",
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-hooks",
  ],
  rules: {
    semi: ["warn", "always"],
    quotes: ["warn", "double"],
    indent: "warn",
    "comma-spacing": "warn",
    "max-len": "warn",
    "no-trailing-spaces": "warn",
    "no-multiple-empty-lines": "warn",
    "key-spacing": "warn",
    "comma-dangle": "warn",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-tag-spacing": "warn",
    "react/jsx-closing-bracket-location": "warn",
    "react/jsx-wrap-multilines": "warn",
    "import/order": "warn",
    "object-curly-newline": "warn",
    "object-curly-spacing": "warn",
    "jsx-a11y/heading-has-content": "warn",
    "operator-linebreak": "warn",
    "react/function-component-definition": "warn",
    "arrow-body-style": "warn",
    "react/jsx-closing-tag-location": "warn",
    "function-paren-newline": "warn",
    "react/jsx-indent": "warn",
    "function-call-argument-newline": "warn",
    "react/jsx-no-constructed-context-values": "warn",
    "no-use-before-define": "warn",
    "consistent-return": "warn",
    "default-case": "warn",
    "no-confusing-arrow": "warn",
    "no-shadow": "warn",
    "implicit-arrow-linebreak": "warn",
    "lines-around-directive": "warn",
    "no-unused-vars": "warn",
    "react/jsx-curly-brace-presence": "warn",
    "react/self-closing-comp": "warn",
    "no-multi-spaces": "warn",
    "react/jsx-one-expression-per-line": "warn",
    "react/jsx-no-bind": "warn",
    "padded-blocks": "warn",
    "react/no-array-index-key": "warn",
    "no-tabs": "warn",
    "react/no-unescaped-entities": "warn",
    "react/jsx-boolean-value": "warn",
    "no-extra-semi": "warn",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "react/react-in-jsx-scope": "off",
    "quote-props": "off",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "no-undef": "off",
    "object-shorthand": "off",
  },
};
