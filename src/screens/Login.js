import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import pattern from "../../assets/pattern.png";
import logo from "../../assets/mainlogo.png";

const Login = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={pattern} />
      <View style={styles.container1}>
        <View style={styles.s1}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.h1}>Hi</Text>
          <Text style={styles.small1}>Hi</Text>
        </View>
        <View style={styles.s2}></View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  patternbg: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  container1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  small1: {
    color: "#fff",
    fontSize: 17,
  },
  h1: {
    fontSize: 30,
    color: "#fff",
  },
});
