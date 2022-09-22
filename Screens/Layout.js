import {
  Button,
  TextInput,
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import Item from "../Components/Item";
import { colors, stylesGlobales } from "../Styles/Global";
import { useState } from "react";

const Layout = () => {
  const [toDoInput, setToDoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handledAdd = () => {
    setTodos([...todos, toDoInput]);
    setToDoInput("");
  };

  const handleOnChangeInput = () => {
    console.log("input", toDoInput);
  };

  console.log("TODOS", todos);
  console.log("lenght", todos.length);

  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <View style={stylesGlobales.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={require("../assets/adaptive-icon.png")}
      />
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 24 }}>To Do List</Text>
      </View>
      <View style={styles.topContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setToDoInput}
          value={toDoInput}
        />
        <Button style={styles.button} title="Add to do" onPress={handledAdd} />
      </View>

      {/*       {todos.length !== 0 && (
        <View style={styles.listContainer}>
          {todos.map((todo, index) => {
            return (
              <>
                <Item key={index} todo={`${todo}`} />
              </>
            );
          })}
        </View>
      )} */}

      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 24 }}>{`Count: ${todos.length}`}</Text>
      </View>

      {todos.length !== 0 && (
          <FlatList
            style={styles.listContainer}
            data={todos}
            renderItem={renderItem}
            keyextractor={(todo, index) => index.toString()}
          ></FlatList>
      )}
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  titleContainer: {
    padding: 12,
    flexDirection: "row",
    justifyContent: "center",
  },
  topContainer: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  input: {
    padding: 4,
    backgroundColor: colors.secondaryLight,
    fontSize: 13,
    width: 250,
  },
  listContainer: {
    backgroundColor: colors.primaryLight,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
});
