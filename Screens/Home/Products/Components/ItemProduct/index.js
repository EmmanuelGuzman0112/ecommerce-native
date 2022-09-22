import { StyleSheet } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { colors, stylesGlobales } from "./../../../../../Styles/Global";

const ItemProduct = ({ item, navigation }) => {
  const handleDetail = (itemCompleto) => {
    navigation.navigate("Detail", {
      id: itemCompleto.id,
      title: itemCompleto.title,
      item: itemCompleto,
    });
  };

  return (
    <Card style={styles.card}>
      <Card.Title title={item.nombre} style={styles.title} />
      <Card.Cover source={{ uri: item.imagen }} style={styles.image} />
      <Card.Content style={styles.textcenter}>
        <Paragraph style={stylesGlobales.price}>${item.precio}</Paragraph>
      </Card.Content>
      <Card.Actions style={styles.textcenter}>
        <Button
          style={styles.buttonBuy}
          onPress={() => {
            handleDetail(item);
          }}
        >
          Comprar
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default ItemProduct;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: "#accc",
    elevation: 5,
    margin: 15,
    //marginTop: 15,
    borderColor: colors.primary,
    borderWidth: 1,
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
  buttonBuy: {
    color: colors.primary,
    borderRadius: 10,
    fontWeight: "bold",
  },
  image: {
    width: "90%",
    height: 350,
    margin: 15,
    borderRadius: 10,
  },
});
