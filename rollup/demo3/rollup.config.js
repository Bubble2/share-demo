import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/main.js',
  output: {
    exports: 'default',
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [ nodeResolve () ]
};