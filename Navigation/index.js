import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext, useEffect, useState } from "react";
import Authentication from "../Screens/Authentication";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/config";
import TabNavigator from "./Tabs";
import { Shop } from "../Context/shopProvider";

const MainNatigation = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUserLoggedIn(user);
        const uid = user.uid;
      } else {
        // User is signed out
        setUserLoggedIn(null);
      }
    });
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {userLoggedIn ? <TabNavigator /> : <Authentication />}
    </NavigationContainer>
  );
};

export default MainNatigation;
