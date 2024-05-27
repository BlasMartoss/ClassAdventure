import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PasswordInput = ({ placeholder, onChangeText, space }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={[styles.passwordContainer, space && { marginTop: 10 }]}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#888"
        secureTextEntry={!isPasswordVisible}
        onChangeText={onChangeText}
      />
      <TouchableOpacity
        style={styles.icon}
        onPress={() => setPasswordVisible(!isPasswordVisible)}
      >
        <Ionicons
          name={isPasswordVisible ? 'eye-off' : 'eye'}
          size={24}
          color="gray"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    padding: 5,
    paddingStart: 20,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 30,
    marginBottom: 10,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: -2,
    padding: 10,
  },
});

export default PasswordInput;
