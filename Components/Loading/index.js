import React from "react";
import { ActivityIndicator, Text } from "react-native";
import { stylesGlobales } from "../../Styles/Global";

const Loading = () => {
  return (
    <>
      <ActivityIndicator size={"large"} color={"blue"} />
      <Text style={stylesGlobales.loading}>Loading...</Text>
    </>
  );
};

export default Loading;
