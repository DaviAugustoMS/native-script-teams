import { RouteProp } from "@react-navigation/core";
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "@/NavigationParamList";
import { Form } from "@/components/screen/login";
import { Button } from "@/components/common";

type loginProps = {
  route: RouteProp<MainStackParamList, "Login">;
  navigation: FrameNavigationProp<MainStackParamList, "Login">;
};

export function Login({ navigation }: loginProps) {
  return (
    <flexboxLayout style={styles.container}>
      <contentView style={{ height: 300 }}>
        <image
          src="~/assets/images/login/logo.png"
          width={200}
          height={200}
          top={-90}
        />
      </contentView>
      <Form />

      <Button
        text={"Login"}
        onPress={() =>
          navigation.navigate("Home", { message: "Hello, world!" })
        }
      />
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
});
