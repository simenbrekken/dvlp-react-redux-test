const fs = require('fs');
const babel = require('@babel/core');

module.exports = async function transpile(filePath) {
  if (filePath.includes('.jsx')) {
    const code = fs.readFileSync(filePath, 'utf8');
    const result = babel.transform(code, {
      plugins: [
        // '@babel/plugin-syntax-jsx',
        '@babel/plugin-transform-react-jsx',
      ],
      // presets: ['@babel/preset-react'],
    });
    return result.code;
  }
};
