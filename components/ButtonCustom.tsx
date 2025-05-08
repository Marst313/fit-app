import { Colors } from "@/constants/Colors";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type ButtonCustomProps = {
  text: string;
  color?: string;
  style?: object;
  onPress?: () => void;
};

function ButtonCustom({ text, color, style, onPress }: ButtonCustomProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.btnLogin, color && { backgroundColor: color }, { opacity: pressed ? 0.7 : 1 }, style]} android_ripple={{ color: Colors.yellow.secondary }}>
      <Text style={styles.btnText}> {text}</Text>
    </Pressable>
  );
}

export default ButtonCustom;

const styles = StyleSheet.create({
  btnLogin: {
    backgroundColor: Colors.yellow.primary,
    paddingVertical: 10,
    borderRadius: 10,
    width: "100%",
  },
  btnText: {
    color: Colors.pink.dark,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
});
