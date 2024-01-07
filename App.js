import React from 'react';
import {StyleSheet, Text, View, Animated, Easing} from 'react-native';

const App = () => {
  spinValue = new Animated.Value(0);
  Animated.loop(
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  const spin = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <Animated.Image
        style={{
          transform: [{rotate: spin}],
          height: 150,
          width: 150,
        }}
        resizeMode={'contain'}
        source={require('./images/test.png')}
      />
      <Text style={styles.text}>Milt Boys</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingVertical: 50,
  },
  text: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default App;
