export default {
    input: 'src/main.js',
    external: ['the-answer'],
    output: {
        exports: 'default',
        file: 'bundle.js',
        format: 'umd',
        name: 'rollupDemo',
        globals: {
            'the-answer': 'theAnswerToTheQuestionOfLifeTheUniverseAndEverything'
        }
    }
}