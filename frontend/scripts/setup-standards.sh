#!/bin/bash

echo "🔧 Setting up code standards..."

# Fail on error
set -e

echo "📦 Installing dev dependencies..."
npm install --save-dev \
  eslint \
  prettier \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin \
  eslint-config-prettier \
  eslint-plugin-prettier \
  husky

echo "🧹 Setting up ESLint..."
if [ ! -f .eslintrc.js ]; then
cat <<EOL > .eslintrc.js
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  rules: {
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "max-lines-per-function": ["error", { "max": 40 }],
    "complexity": ["error", 10],
    "eqeqeq": ["error", "always"]
  }
};
EOL
fi

echo "🎨 Setting up Prettier..."
if [ ! -f .prettierrc ]; then
cat <<EOL > .prettierrc
{
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "printWidth": 80,
  "trailingComma": "es5"
}
EOL
fi

echo "🐶 Initializing Husky..."
npx husky install

echo "🪝 Adding Git hooks..."
npx husky add .husky/pre-commit "npm run lint && npm run format"

echo "📜 Updating package.json scripts..."

node <<'EOF'
const fs = require('fs');

const pkg = JSON.parse(fs.readFileSync('package.json'));

pkg.scripts = pkg.scripts || {};
pkg.scripts.lint = "eslint . --ext .ts,.js";
pkg.scripts.format = "prettier --write .";
pkg.scripts.prepare = "husky install";

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
EOF

echo "✅ Code standards installed and enforced!"
