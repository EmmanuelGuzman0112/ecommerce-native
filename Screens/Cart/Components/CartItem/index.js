import { TouchableOpacity, View } from "react-native";
import { Surface, Text, Button } from "react-native-paper";
import { StyleSheet } from "react-native";

const CartItem = ({ item, handleRemove }) => {
  return (
    <Surface style={styles.surface} elevation={5}>
      <View style={styles.containerButtonClose}>
        <Button
          style={styles.buttonClose}
          mode="elevated"
          compact="true"
          onPress={() => handleRemove(item.id)}
        >
          X
        </Button>
      </View>
      <Text style={styles.titleArticle}>{item.nombre}</Text>
      {/* <Text>Cantidad: {item.quantity}</Text> */}
      <Text styles={styles.pricingSmall}>$ {item.precio * item.quantity} </Text>
    </Surface>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  surface: {
    height: "auto" /* 
    alignItems: "center",
    justifyContent: "center", */,
    padding: 10,
    margin: 10,
    backgroundColor: "white",
  },
  titleArticle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  pricingSmall: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: "#FCFF",
    marginTop: 10,
  },
  containerButtonClose: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  buttonClose: {
    alignItems: "flex-center",
    color: "red",
  },
});
