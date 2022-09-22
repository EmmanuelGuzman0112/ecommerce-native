import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import React, { useContext, useState } from "react";
import { Shop } from "../../Context/shopProvider";
import CartItem from "./Components/CartItem";
import ResumenCompra from "./Components/ResumenCompra";

const Cart = () => {
  const { cart, removeItem } = useContext(Shop);
  return (
    <>
      <View>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CartItem item={item} handleRemove={removeItem} />
          )}
        ></FlatList>
      </View>
      <View style={{ margin: 10 }}>
        {cart.length > 0 ? (
          <ResumenCompra />
        ) : (
          <Text>No hay productos en el carrito</Text>
        )}
      </View>
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  modalParent: { flex: 1, justifyContent: "center", alignItems: "center" },
  btnPagoRealizado: {
    backgroundColor: "green",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
