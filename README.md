# react-native-typescript
how  to init your typescript

* add files `tslint.json` `tsconfig.json` `rn-cli.config.js`

* yarn add @types/react-native @types/react react-native-typescript-transformer  typescript -D

* update package.json script "start": "react-native start --transformer node_modules/react-native-typescript-transformer/index.js --sourceExts ts,tsx"
