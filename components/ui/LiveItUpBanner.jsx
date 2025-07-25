import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const LiveItUpBanner = () => {
  return (
    <View style={styles.bannerContainer}>
      <Image
        source={require('../../assets/LiveItUp_Banner.png')}
        style={styles.bannerImage}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 380,
  },
});

export default LiveItUpBanner;
