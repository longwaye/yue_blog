module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-essential", "@vue/typescript/recommended"],
  parserOptions: {
    ecmaVersion: 2020
  },
  // useEslint: false,
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "space-before-function-paren": "off"
    // '@typescript-eslint/member-delimiter-style': 'off'
    // "@typescript-eslint/interface-name-prefix": [2, { prefixWithI: "always" }],
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
