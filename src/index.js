import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';

import formsAnimated from './assets/lotties/forms.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 360,
    height: 360,
  },
});

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Lottie
        style={styles.lottie}
        resizeMode="contain"
        autoSize
        source={formsAnimated}
        autoPlay
        loop
      />
    </SafeAreaView>
  );
}
