import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "../../Screens/Home/Categories";

import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, stylesGlobales } from "../../Styles/Global";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/config";
import Products from "../../Screens/Home/Products";
import Detail from "../../Screens/Home/Detail";

const ButtonSingOut = () => {
  const handleSingOut = () => {
    //console.log("sing out");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <TouchableOpacity onPress={handleSingOut}>
      <Text style={styles.signOut}>Sign off</Text>
    </TouchableOpacity>
  );
};

const ShopStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundColor: colors.secondary },
        headerTintColor: colors.primary,
        headerTitleStyle: { fontWeight: "bold" },
        headerRight: () => <ButtonSingOut />,
      }}
    >
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{ title: "Ecommerce EG" }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({ title: route.params.category })}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
};

export default ShopStack;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#000",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  signOut: {
    /* color: colors.primary, */
    fontSize: 15,
    /* color: colors.secondaryLight, */
    fontWeight: "bold",
    /* backgroundColor: colors.red, */
    backgroundColor: colors.secondaryLight,
    borderRadius: 5,
    margin: 10,
    padding: 5,
  },
});
