module.exports = {
    root: true,
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "@react-native-community",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "import"
    ],
    settings: {
        "version": "detect",
        'import/resolver': {
          node: {
            paths: ['src'],
            alias: {
              _assets: './assets',
              _components: './src/components',
              _atoms: './src/components/atoms',
              _molecules: './src/components/molecules',
              _organisms: './src/components/organisms',
              _navigations: './src/navigations',
              _screens: './src/screens',
              _services: './src/services',
              _styles: './src/styles',
              _utils: './src/utils',
              _config: './src/config',
              _apiAuth: './src/apiAuth',
            },
          },
        }
    },
    "rules": {
        'prettier/prettier': 0,
        'no-shadow': 'warn',
        'linebreak-style': 'error',
        "quotes": [2, "single", { "avoidEscape": true }],
    }
};
