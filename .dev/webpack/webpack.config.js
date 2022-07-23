import HtmlWebpackPlugin from "html-webpack-plugin";
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');
export default (environment) => {
    const isDevelopment = environment !== 'production';
    return {
        entry: {
            index: "./src/index.ts"
        },
        module: {
            rules: [
                {
                    test: /\.[jt]sx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: require.resolve('ts-loader'),
                            options: {
                                getCustomTransformers: () => ({
                                    before: [isDevelopment && ReactRefreshTypeScript()].filter(Boolean),
                                }),
                                transpileOnly: isDevelopment,
                            },
                        },
                    ],
                },
            ]
        },
        resolve: {
            extensions: ['.ts', '.js', '.tsx', 'jsx']
        },
        target: 'web',
        mode: isDevelopment ? 'development' : 'production',
        devtool: "inline-source-map",
        devServer: {
            hot: true
        },
        plugins: [
            isDevelopment && new ReactRefreshWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            })
        ].filter(Boolean),
    };
};
//# sourceMappingURL=webpack.config.js.map