import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import OrderItem from "./Components/OrderItem";
import { Shop } from "../../Context/shopProvider";

const Order = () => {
  const { cargarOrdenes, ordenes } = useContext(Shop);
  useEffect(() => {
    cargarOrdenes();
  }, []);

  return (
    <>
      <View>
        <FlatList
          data={ordenes}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <OrderItem item={item} index={index} />
          )}
        ></FlatList>
      </View>
      <View style={{ margin: 10 }}>
        {ordenes.length > 0 ? (
          <Text>Hay ordenes </Text>
        ) : (
          <Text>No hay ordenes para el usuario</Text>
        )}
      </View>
    </>
  );
};

export default Order;

const styles = StyleSheet.create({});
