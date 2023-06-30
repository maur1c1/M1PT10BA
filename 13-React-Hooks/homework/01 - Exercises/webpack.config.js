module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + "/browser",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
                resolve: {
                  fullySpecified: false,
                }
            }
        ]
    }
    
}
