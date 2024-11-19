import { colors } from '@/constants';
import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

export const Wrapper = ({ children }: PropsWithChildren) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 15,
  },
});
