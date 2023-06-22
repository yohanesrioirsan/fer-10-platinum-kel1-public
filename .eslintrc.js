module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-param-reassign": 0,
    "import/no-extraneous-dependencies": 0,
    "react/prop-types": 0,
    "react/function-component-definition": 0,
    "arrow-body-style": 0,
    "no-shadow": 0,
    "prefer-template": 0,
    "react/no-unescaped-entities": 0,
    "no-console": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
  },
};
