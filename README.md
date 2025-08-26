# rn-auto-size-image

> a library for react-native that adjusts the image to the width of the screen without changing the aspect ratio.

## installation

```bash
npm install https://github.com/Ksarados/rn-auto-size-image.git
```

```tsx
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AutoSizeImage } from 'rn-auto-size-image';

const IMAGE = [
  require('./assets/image-01.jpg'),
  require('./assets/image-02.jpg')
]

export default function App() {
  return (
    <View style={styles.container}>
      <AutoSizeImage source={IMAGE[0]} paddingHorizontal={20}/>
      <AutoSizeImage source={IMAGE[1]} paddingHorizontal={20}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```