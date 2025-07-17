import type React from 'react';
import { Keyboard, StyleSheet, TextInputProps, TouchableWithoutFeedback, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

interface Props extends TextInputProps {
  // Kế thừa toàn bộ props của TextInput
}
export const TextInputComponent = (props: Props) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.wrapper}>
      <TextInput
        style={[styles.input, props.style]}
        {...props}
      />
    </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 8,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    fontSize:23
  },
});