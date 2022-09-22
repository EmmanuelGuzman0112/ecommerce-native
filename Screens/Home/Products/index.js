import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Loading from "../../../Components/Loading";
import { Shop } from "../../../Context/shopProvider";
import ItemProduct from "./Components/ItemProduct";

const Products = ({ navigation, route }) => {
  const { category } = route.params;
  //Reemplazo por farestoreapi
  //const [products, setProducts] = useState([]);
  const { productos } = useContext(Shop);
  const [productosFiltrados, setProductosFiltrados] = useState(productos);

  const consumirApi = async () => {
    //Reemplazo por farestoreapi
    /*const data = await feching(
          `https://fakestoreapi.com/products/category/${category}`
        );
        console.log("data", data);*/
    const productFilter = productosFiltrados.filter(
      (product) => product.category === category
    );

    //Reemplazo por farestoreapi
    //setProducts(data);
    setProductosFiltrados(productFilter);
  };

  useEffect(() => {
    consumirApi();
  }, [category]);
  return (
    <View>
      {productosFiltrados.length !== 0 ? (
        <FlatList
          //data={products}
          data={productosFiltrados}
          renderItem={({ item }) => (
            <ItemProduct item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id.toString()}
          style={styles.description}
        />
      ) : (
        <Loading />
      )}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    borderRadius: 3,
    backgroundColor: "#accc",
  },
  title: {
    fontSize: 20,
    fontFamily: "OpenSans-Bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    /* fontFamily: "OpenSans-Regular", */
    marginBottom: 10,
  },
  list: {
    fontSize: 16,
    marginTop: 10,
  },
});
