import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import pkg from './package.json'

export default {
  input: 'src/main.js',
  output: [
    {
      exports: 'default',
      file: pkg.main,
      format: 'umd',
      name: 'rollupDemo'
    },
    {
      exports: 'default',
      file: pkg.module,
      format: 'esm'
    }
  ],
  plugins: [ 
    nodeResolve(),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    })
   ]
};