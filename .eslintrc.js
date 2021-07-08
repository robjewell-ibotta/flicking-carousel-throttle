module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript"
  ],
  "parserOptions": {
    "project": "egjs-flicking/tsconfig.json",
    "ecmaVersion": 2020,
    "tsconfigRootDir": __dirname,
    "sourceType": "module"
  }
}
