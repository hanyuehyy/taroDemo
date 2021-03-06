module.exports = {
  "extends": ["taro/react"],
  "rules": {
    "react/jsx-uses-react": "on",
    "react/react-in-jsx-scope": "on"
  }
}

// module.exports = {
//   parser: "babel-eslint",
//   extends: ["airbnb", "prettier", "plugin:compat/recommended", "taro/react"],
//   env: {
//     browser: true,
//     node: true,
//     es6: true,
//     mocha: true,
//     jest: false,
//     jasmine: true
//   },
//   globals: {
//     APP_TYPE: true,
//     page: true
//   },
//   rules: {
//     "react/jsx-filename-extension": [1, { extensions: [".js"] }],
//     "react/jsx-wrap-multilines": 0,
//     "react/prop-types": 0,
//     "react/no-array-index-key": 0,
//     "react/forbid-prop-types": 0,
//     "react/jsx-one-expression-per-line": 0,
//     "react/no-unused-state": 0,
//     "react/destructuring-assignment": 0,
//     "import/no-unresolved": [2, { ignore: ["^@/", "^umi/"] }],
//     "import/no-extraneous-dependencies": [
//       2,
//       {
//         optionalDependencies: true,
//         devDependencies: ["**/tests/**.js", "**/**.test.js", "./scripts/**.js"]
//       }
//     ],
//     "jsx-a11y/no-noninteractive-element-interactions": 0,
//     "jsx-a11y/click-events-have-key-events": 0,
//     "jsx-a11y/no-static-element-interactions": 0,
//     "jsx-a11y/anchor-is-valid": 0,
//     "linebreak-style": 0,
//     "no-nested-ternary": 0,
//     "no-script-url": 0,
//     "no-unused-vars": 0,
//     "no-restricted-syntax": 0,
//     "no-unused-expressions": 0
//   },
//   settings: {
//     polyfills: ["fetch", "promises", "url"],
//     "import/resolver": {
//       node: {
//         extensions: [".js", ".jsx", ".ts", ".tsx"],
//         moduleDirectory: ["node_modules", "src/"]
//       }
//     }
//   }
// };
