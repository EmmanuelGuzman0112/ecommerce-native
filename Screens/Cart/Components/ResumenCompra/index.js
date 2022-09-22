import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Shop } from "../../../../Context/shopProvider";
import ModalConfirmar from "../ModalConfirmar";
import { Button } from "react-native-paper";

const ResumenCompra = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { cart } = useContext(Shop);

  const handleVisibleModal = () => {
    console.log("voy a ejcutar el handleVisibleModal");
    setModalVisible(false);
  };

  return (
    <View style={styles.resumeBottom}>
      <Text style={styles.total}>
        Total: $ 
        {cart.reduce((total, item) => total + item.precio * item.quantity, 0)}
      </Text>
      <Button
        compact="true"
        mode="contained"
        onPress={() => setModalVisible(true)}
      >
        <Text>Finalizar</Text>
      </Button>

      <ModalConfirmar
        modalVisible={modalVisible}
        handleVisibleModal={() => handleVisibleModal()}
      />
    </View>
  );
};

export default ResumenCompra;

const styles = StyleSheet.create({
  resumeBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "#FCFF",
    marginButtom: 30,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginTop: 10,
  },
});
