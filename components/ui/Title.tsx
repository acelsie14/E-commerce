import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  title: string;
};

export const Title = ({ title }: Props) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 15,
  },
});
