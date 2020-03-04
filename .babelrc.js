module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    ['module-resolver', {
      alias: {
        'package.json': './package.json',
        test: './test'
      },
      root: ['./src']
    }],
  ],
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: true
      }
    }]
  ]
};
