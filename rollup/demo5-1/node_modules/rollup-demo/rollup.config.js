export default {
    input: 'src/main.js',
    external: ['the-answer'],
    output: {
        file: 'bundle.js',
        format: 'umd',
        name: 'rollupDemo'
    }
}