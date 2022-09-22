import { createUserWithEmailAndPassword } from "firebase/auth";
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

const Registrarse = ({ changeLoginView }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistrarse = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setEmail("");
        setPassword("");
      })
      .finally(() => {});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.ecommerce}>Ecommerce EG</Text>
      <Text style={stylesGlobales.tituloAutenticacion}>Registrarse</Text>
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

      <TouchableOpacity onPress={handleRegistrarse}>
        <Text style={stylesGlobales.buttonPrimary}>Registrarme</Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity onPress={() => changeLoginView()}>
          <Text style={stylesGlobales.link}>
            ¿Ya tienes una cuenta? Ingresar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Registrarse;

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
