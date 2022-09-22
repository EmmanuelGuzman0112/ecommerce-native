import React, { useContext, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Loading from "../../../Components/Loading";
import { Shop } from "../../../Context/shopProvider";
import { stylesGlobales } from "../../../Styles/Global";
import ItemCategory from "./Components/ItemCategory";

const Categories = ({ navigation }) => {
  //Reemplazo de fakestoreapi por context
  //const [categories, setCategories] = useState([]);
  const { categories } = useContext(Shop);
  console.log("categories.. ", categories);

  //Reemplazo de fakestoreapi por context
  /*const consumirApi = async () => {
    const data = await feching("https://fakestoreapi.com/products/categories");

    console.log(data);
    setCategories(data);
  };

  useEffect(() => {
    consumirApi();
  }, []);*/

  /*const handleCategories = (categoriaID) => {
    //console.log("categoriaID", categoriaID);
    navigation.navigate("Products", { category: categoriaID });
  };*/

  /*const ItemCategoria = ({ item }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            handleCategories(item.category);
          }}
        >
          <Text>{item.category}</Text>
        </TouchableOpacity>
      </View>
    );
  };*/

  return (
    <View>
      <Text style={styles.title}>Please select a category</Text>

      {categories.length !== 0 ? (
        <FlatList
          data={categories} //categories con useState
          renderItem={({ item }) => (
            <ItemCategory item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.category.toString()}
        />
      ) : (
        <>
          <Loading />
        </>
      )}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    borderRadius: 3,
    backgroundColor: "#accc",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },
});
