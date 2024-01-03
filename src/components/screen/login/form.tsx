import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Input } from "@/components/common";

export const Form = () => {
  return (
    <flexboxLayout style={styles.form}>
      <Input text="E-mail" secure={false} placeholder="E-mail" />
      <Input text="Senha" secure={true} placeholder="Senha" />

      <button style={styles.forget}>Esqueci minha senha</button>
    </flexboxLayout>
  );
};

const styles = StyleSheet.create({
  form: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  forget: {
    fontSize: 16,
    color: "#000",
  },
});
