const path = require('path')
const glob = require('glob')
const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  target: 'serverless',
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/latest': { page: '/latest' },
      '/ucla': { page: '/ucla' },
      '/frontend': { page: '/frontend' },
      '/backend': { page: '/backend' },
      '/devops': { page: '/devops' },
      '/previous': { page: '/previous' }
    };
  },
  webpack: (config, { dev }) => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'sass-loader',
            options: {
              outputStyle: 'compressed', // These options are from node-sass: https://github.com/sass/node-sass
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    )
    return config
  },
}