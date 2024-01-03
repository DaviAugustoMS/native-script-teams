import * as React from "react";
import { StyleSheet } from "react-nativescript";

type loginProps = {
  onPress: any;
  text: string;
};

export const Button = ({ onPress, text }: loginProps) => {
  return (
    <button style={styles.button} onTap={() => onPress()}>
      {text}
    </button>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 24,
    color: "#fff",
    borderRadius: 8,
    height: 70,
    backgroundColor: "#0C1F36",
  },
});
