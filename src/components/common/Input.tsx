import * as React from "react";
import { StyleSheet } from "react-nativescript";

type loginProps = {
  text: string;
  placeholder: string;
  secure?: boolean;
};

export const Input = ({ text, placeholder, secure }: loginProps) => {
  const [focus, setFocus] = React.useState(false);
  const textFieldRef = React.useRef(null);
  const [isFocused, setFocused] = React.useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <flexboxLayout style={styles.inputView}>
      <label style={styles.inputText}>{isFocused && text}</label>
      <textField
        style={styles.input}
        hint={placeholder}
        ref={textFieldRef}
        secure={secure}
        color="#383838"
        autocapitalizationType="none"
        //@ts-ignore
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </flexboxLayout>
  );
};

const styles = StyleSheet.create({
  inputView: {
    borderBottomWidth: 1,
    borderColor: "#383838",
    height: 60,
    marginBottom: 20,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  input: {
    height: 40,
    width: "100%",
    color: "#383838",
    fontSize: 16,
    placeholderColor: "#f31f1f",
  },
  inputText: {
    color: "#000",
    fontSize: 16,
  },
});
