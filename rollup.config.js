import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/client/index.js',
  output: {
    file: 'build/client.js',
    format: 'cjs',
  },
  plugins: [resolve(), commonjs()],
};
