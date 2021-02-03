const path=require("path");
const htmlPlugin=require("html-webpack-plugin")

module.exports={
    entry:{
        index:path.resolve(__dirname,"src","js","index.js")
    },
    output:{
        path:path.resolve(__dirname,"result"),
        filename:"doit.js"
    },
    mode:"development",
    plugins:[
        new htmlPlugin({
            template:path.resolve(__dirname,"views","index.html")
        })
    ],
    module:{
        rules:[{
            test:/\.css$/,
            use:["style-loader","css-loader"]
        },{
            test:/\.js$/,
            exclude:/node_modules/,
            use:["babel-loader"]
        }]
    }
}