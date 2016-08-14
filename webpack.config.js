module.exports = {
  entry: './src/index.jsx',
  output: { 
    path: './public', 
    filename: 'bundle.js' 
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',      
        query: {
          presets: [ 'react', 'es2015' ]
        }
      }
    ]
  },
  devServer: {
    quiet: false,
    noInfo: false,
    stats: {
      // Config for minimal console.log mess.
      assets: true,
      colors: true,
      version: true,
      hash: true,
      timings: true,
      chunks: false,
      chunkModules: false
    }
  },  
};