import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/main.js',
  output: {
    exports: 'default',
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [ 
    nodeResolve(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**' // 只编译我们的源代码
    })
   ]
};