import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { Shop } from "../../../Context/shopProvider";
import { colors, stylesGlobales } from "../../../Styles/Global";

const Detail = ({ navigation, route }) => {
  const { item } = route.params;

  const { addCart } = useContext(Shop);

  const handleAdd = (item) => {
    addCart(item, 1);
  };

  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.imagen }} style={styles.image} />
      <Card.Content>
        <Title>{item.nombre}</Title>
        <Paragraph style={styles.description}>{item.descripcion}</Paragraph>
        <Paragraph style={stylesGlobales.price}>${item.precio}</Paragraph>
      </Card.Content>
      <Card.Actions style={styles.textcenter}>
        <Button
          style={styles.buttonBack}
          onPress={() => {
            console.log("volver");
          }}
        >
          Volver
        </Button>
        <Button
          style={styles.buttonBuy}
          onPress={() => {
            handleAdd(item);
          }}
        >
          Agregar al carrito
        </Button>
      </Card.Actions>
    </Card>
    /*     <View style={styles.container}>
      <Text style={styles.description}>{item.descripcion}</Text>
      <Text>Disponibles{item.count}</Text>
      <Button
        style={styles.buyButton}
        title="Agregar al carrito"
        onPress={() => handleAdd(item)}
      ></Button>
    </View> */
  );
};

export default Detail;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: "#accc",
    elevation: 5,
    margin: 15,
    borderColor: colors.primary,
    borderWidth: 1,
    height: "95%",
  },
  title: {
    fontSize: 20,
    fontFamily: "OpenSans-Bold",
    marginBottom: 10,
  },
  textcenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonBack: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    margin: 10,
  },
  buttonBuy: {
    color: colors.primary,
    borderRadius: 10,
    fontWeight: "bold",
  },
  image: {
    width: "90%",
    height: 400,
    margin: 15,
    borderRadius: 10,
  },
  description: {
    fontSize: 15,
    fontFamily: "OpenSans-Regular",
    marginBottom: 10,
    maxHeight: 250,
  },
});
