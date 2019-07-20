const path = require('path');
const {ESLINT_ENABLE} = require('./config');

module.exports = function(env={}, argv){
  let config = null;
  if (env.dev) {
    config = require('./config/dev');
  } else if (env.prod) {
    config = require('./config/prod');
  } else {
    config = require('./config/test');
  }

  return {
    //公共的
    entry: './src/index',
    module: {
      rules: [
        //js和jsx
        {test:/\.jsx?$/i, exclude:/node_modules/,use:[
            //babel
            {
              loader:'babel-loader',
              options:{
                presets:['@babel/preset-react'],
                plugins: [
                  ["import",{
                    libraryName: "antd",
                    libraryDirectory: "es",
                    style: "css"}]      //按需加载antd的css
                ]
              }
            },

            //eslint
            ...ESLINT_ENABLE?[
              {
                loader:'eslint-loader',
                options:{
                  //report
                  outputReport:{
                    filePath:'eslint_report.html',
                    formatter:require('eslint/lib/cli-engine/formatters/html')
                  }
                }
              }
            ]:[]

        ]},

        //css
        {test:/\.css?$/i,use:['style-loader','css-loader',{
          loader:'postcss-loader',
          options:{
            plugins:[
                require('autoprefixer')
            ]
          }
        }]},

        //图片
        {test:/\.(png|jpg|gif)$/i,use:{
          loader:"url-loader",
          options:{
            outputPath: 'imgs/',
            limit:10*1024
          }
        }},

        //字体
        {test:/\.(eot|svg|ttf|woff|woff2)$/i,use:{
          loader:'url-loader',
          options:{
            outputPath:'fonts/',
            limit: 10*1024
          }
        }},

        //less
        {test:/\.less$/i,use:['style-loader','css-laoder','less-loader']},



      ]
    },


      //特定的
      ...config


  };
};