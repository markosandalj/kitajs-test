module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:storybook/recommended', "prettier"],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    rules: {
        "unicorn/better-regex": "error",
        "unicorn/…": "error"
    },
    plugins: [
        "@typescript-eslint",
        "unicorn"
    ]
}
