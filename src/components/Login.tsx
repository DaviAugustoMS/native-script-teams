import { RouteProp } from "@react-navigation/core";
import React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
// import img from "../assets/login/logo.png";
type ScreenOneProps = {
  route: RouteProp<MainStackParamList, "Login">;
  navigation: FrameNavigationProp<MainStackParamList, "Login">;
};

export function Login({ navigation }: ScreenOneProps) {
  return (
    <flexboxLayout style={styles.container}>
      <contentView style={{ height: 300 }}>
        <label style={styles.text}>Star Team</label>
      </contentView>
      <flexboxLayout style={styles.form}>
        <flexboxLayout style={styles.inputView}>
          <label style={styles.inputText}>E-mail</label>
          <textField style={styles.input} hint="Placeholder..." />
        </flexboxLayout>
        <flexboxLayout style={styles.inputView}>
          <label style={styles.inputText}>Senha</label>
          <textField style={styles.input} hint="Placeholder..." />
        </flexboxLayout>
        <button style={styles.forget}>Esqueci minha senha</button>
      </flexboxLayout>

      <button
        style={styles.button}
        onTap={() => navigation.navigate("Two", { message: "Hello, world!" })}
      >
        Login
      </button>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 16,
  },
  form: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  inputView: {
    borderBottomWidth: 1,
    borderColor: "#383838",
    height: 60,
    marginBottom: 20,
    flexDirection: "column",
  },
  input: {
    height: 40,
    width: "100%",
    color: "#383838",
    fontSize: 16,
  },
  inputText: {
    color: "#000",
    fontSize: 16,
  },
  text: {
    textAlignment: "center",
    fontSize: 34,
    color: "#000",
  },
  forget: {
    fontSize: 16,
    color: "#000",
  },
  button: {
    fontSize: 24,
    color: "#fff",
    borderRadius: 8,
    height: 70,
    backgroundColor: "#0C1F36",
  },
});
