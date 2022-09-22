import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../../../Firebase/config";
import { colors, stylesGlobales } from "../../../../Styles/Global";

const Ingresar = ({ changeLoginView }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleIngresar = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user123", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setEmail("");
        setPassword("");
      })
      .finally(() => {
        //console.log("finally");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.ecommerce}>Ecommerce EG</Text>
      <Text style={stylesGlobales.tituloAutenticacion}>Ingresar</Text>
      <TextInput
        style={stylesGlobales.textInput}
        value={email}
        onChangeText={setEmail}
        placeholder="Ingresar email"
      ></TextInput>
      <TextInput
        style={stylesGlobales.textInput}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        placeholder="Ingresar password"
      ></TextInput>

      <TouchableOpacity style={styles.button} onPress={handleIngresar}>
        <Text style={stylesGlobales.buttonPrimary}>Ingresar</Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity onPress={() => changeLoginView()}>
          <Text style={stylesGlobales.link}>
            ¿No tienes usuario? Registrarse
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Ingresar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  ecommerce: {
    fontSize: 30,
    color: colors.primary,
    fontWeight: "bold",
  },
});
