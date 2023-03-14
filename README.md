[![npm version](https://badge.fury.io/js/expo-seon.svg)](https://badge.fury.io/js/expo-seon)

# expo-seon

Expo module to talk with Seon

## Seon documentation

- [ios](https://github.com/seontechnologies/seon-ios-sdk-public)
- [android](https://github.com/seontechnologies/seon-android-sdk-public)

## How to use it?

```typescript
import * as ExpoSeon from 'expo-seon';
```

```typescript
const seonSessionId = uuidv4(); // if needed
const fingerprintBase64 = await ExpoSeon.fingerprintBase64(seonSessionId);
```

## How to test it?

- `npm run build` => on another Terminal
- `cd example && npx expo run:ios`

[Expo Docs](https://docs.expo.dev/modules/native-module-tutorial/#3-run-the-example-project)
