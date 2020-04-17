import { getDefaultRollupConfig } from 'dvlp';

const defaultRollupConfig = getDefaultRollupConfig();

export default {
  ...defaultRollupConfig,
  input: 'src/client/index.js',
  output: {
    file: 'build/client.js',
    format: 'cjs',
  },
};
