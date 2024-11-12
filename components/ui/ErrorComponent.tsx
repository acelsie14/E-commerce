import { View, Text } from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';

type Props = {
  onRefetch: () => void;
};

const ErrorComponent = ({ onRefetch }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        style={{
          color: 'red',
          textAlign: 'center',
          marginBottom: 15,
          fontSize: 40,
          fontWeight: 'bold',
        }}
      >
        Something went wrong
      </Text>
      <CustomButton buttonTitle="Retry" onPress={onRefetch} />
    </View>
  );
};

export default ErrorComponent;
