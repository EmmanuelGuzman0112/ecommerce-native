import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../../../Styles/Global";

const ItemCategory = ({ item, navigation }) => {
  //Reemplazo de fakestoreapi por context
  /*const consumirApi = async () => {
    const data = await feching("https://fakestoreapi.com/products/categories");

    console.log(data);
    setCategories(data);
  };

  useEffect(() => {
    consumirApi();
  }, []);*/

  const handleCategories = (categoriaID) => {
    //console.log("categoriaID", categoriaID);
    navigation.navigate("Products", { category: categoriaID });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          handleCategories(item.category);
        }}
      >
        <Text style={styles.item}>{item.category}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemCategory;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    borderRadius: 3,
    backgroundColor: colors.secondaryLight,
    color: colors.secondary
  },
  item: {
    fontSize: 20,
    textAlign: "center",
    margin: 20,
  },
});
