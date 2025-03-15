module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:tailwindcss/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/react"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "react",
        "react-hooks",
        "tailwindcss",
        "import",
        "jsx-a11y"
    ],
    rules: {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "tailwindcss/no-custom-classname": "off",
        "import/order": [
            "error",
            {
                "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
                "newlines-between": "always"
            }
        ],
        "jsx-a11y/anchor-is-valid": [
            "error",
            {
                aspects: ["invalidHref", "preferButton"]
            }
        ],
        "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
        "no-console": "warn",
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};